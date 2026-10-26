// Runs as ESM (.mts) on purpose: under tsx's CommonJS loader TypeDoc was
// loaded twice, and typedoc-plugin-markdown's copy had no translations, so
// pages showed raw keys like `theme_defined_in`.
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import * as tar from 'tar';
import * as td from 'typedoc';

const execAsync = promisify(exec);
const __dirname = import.meta.dirname;

const PACKAGES = [
  {packageName: '@fullstackcraftllc/codevideo-virtual-ide', sidebarPosition: 1},
  {packageName: '@fullstackcraftllc/codevideo-virtual-file-explorer', sidebarPosition: 2},
  {packageName: '@fullstackcraftllc/codevideo-virtual-editor', sidebarPosition: 3},
  {packageName: '@fullstackcraftllc/codevideo-virtual-terminal', sidebarPosition: 4},
  // '@fullstackcraftllc/codevideo-ide-react',
  // Add more as needed (note: TypeScript packages only!)
];

const TEMP_DIR = path.join(__dirname, '..', 'temp_packages');
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'libraries');
// const OUTPUT_DIR = path.join(__dirname, '..', 'tmp');

/**
 * Download and extract an npm package
 * @param packageName - Name of the npm package
 * @returns Path to the extracted package
 */
async function downloadPackage(packageName: string): Promise<string | null> {
  console.log(`Processing ${packageName}...`);
  
  // Start from an empty package directory so old tarballs don't pile up
  const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
  const packageDir = path.join(TEMP_DIR, safeName);
  fs.rmSync(packageDir, { recursive: true, force: true });
  fs.mkdirSync(packageDir, { recursive: true });
  
  try {
    // Download package using npm pack
    console.log(`Downloading ${packageName}...`);
    const { stdout } = await execAsync(`npm pack ${packageName} --quiet`, { cwd: packageDir });
    const tarballName = stdout.trim();
    const tarballPath = path.join(packageDir, tarballName);
    
    // Extract tarball
    console.log(`Extracting ${tarballName}...`);
    await tar.extract({
      file: tarballPath,
      cwd: packageDir
    });
    
    // The extracted content is in a 'package' directory
    const extractedDir = path.join(packageDir, 'package');
    console.log(`Successfully processed ${packageName}`);
    return extractedDir;
  } catch (error) {
    console.error(`Error processing ${packageName}:`, error);
    return null;
  }
}

/**
 * Generate TypeDoc documentation for a package
 * @param packagePath - Path to the extracted package
 * @param packageName - Name of the npm package
 */
async function generateTypeDoc(packagePath: string | null, packageItem: {packageName: string, sidebarPosition: number}): Promise<void> {
  if (!packagePath) return;
  
  console.log(`Generating documentation for ${packageItem.packageName}...`);
  
  const safeName = packageItem.packageName.replace(/\//g, '-').replace(/^@/, '');
  const packageOutputDir = path.join(OUTPUT_DIR, safeName);
  
  try {
    // Find entry point (package.json, main field, types field)
    const packageJsonPath = path.join(packagePath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Prefer type declarations: documenting the compiled JS turns every type
    // into `any` and shows TypeScript-private members. None of the packages
    // declares `types` yet, but they all ship dist/index.d.ts.
    const entryCandidates = [
      packageJson.types,
      packageJson.typings,
      'dist/index.d.ts',
      'src/index.ts',
      packageJson.main || 'index.js',
    ].filter(Boolean);
    const entryPoint = entryCandidates
      .map((candidate: string) => path.join(packagePath, candidate))
      .find((candidatePath: string) => fs.existsSync(candidatePath));
    if (!entryPoint) {
      throw new Error(`No entry point found in ${packagePath}`);
    }

    // The site's tsconfig excludes temp_packages (so `npm run typecheck` skips
    // the downloaded sources); give TypeDoc one that covers this entry point.
    const tsconfigPath = path.join(packagePath, 'tsconfig.typedoc.json');
    fs.writeFileSync(tsconfigPath, JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        skipLibCheck: true,
        strict: true,
      },
      files: [entryPoint],
    }, null, 2));

    // Generate into temp_packages first and only replace the committed pages
    // once that worked, so a failed run (e.g. npm unreachable on Netlify)
    // keeps the previous docs instead of leaving broken links.
    const stagingDir = path.join(TEMP_DIR, safeName, 'docs');
    fs.rmSync(stagingDir, { recursive: true, force: true });

    const app = await td.Application.bootstrapWithPlugins({
      entryPoints: [entryPoint],
      tsconfig: tsconfigPath,
      out: stagingDir,
      plugin: ['typedoc-plugin-markdown'],
      theme: 'markdown',
      router: 'module',
      name: packageItem.packageName,
      exclude: ["**/__tests__/**/*", "**/*.test.ts", "**/*.spec.ts"],
      excludeExternals: true,
      excludePrivate: true,
      excludeProtected: true,
      // "Defined in" links would point at temp_packages/ in this repo, pinned
      // to the current commit, so every regeneration rewrote every page.
      disableSources: true,
      // The extracted packages have no node_modules of their own; don't fail
      // the docs on type errors in their dependencies.
      skipErrorChecking: true,
    });

    const project = await app.convert();
    if (project) {
      await app.generateDocs(project, stagingDir);

      // now read in the globals.md file and add it to the index.md file
      const globalsMarkdown = fs.readFileSync(path.join(stagingDir, 'globals.md'), 'utf8');

      // remove the first line of the globals.md file which includes the README for some reason
      const globalsMarkdownLines = globalsMarkdown.split('\n');
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      const globalsMarkdownContent = globalsMarkdownLines.join('\n');
      
      // Create index.md file to link in Docusaurus
      const indexPath = path.join(stagingDir, 'index.md');
      const indexContent = `---
title: "${packageItem.packageName}"
sidebar_label: "${packageItem.packageName}"
sidebar_position: ${packageItem.sidebarPosition}
---

${globalsMarkdownContent}
`;
      fs.writeFileSync(indexPath, indexContent);

      // remove README.md and globals.md files
      fs.unlinkSync(path.join(stagingDir, 'README.md'));
      fs.unlinkSync(path.join(stagingDir, 'globals.md'));

      fs.rmSync(packageOutputDir, { recursive: true, force: true });
      fs.renameSync(stagingDir, packageOutputDir);
      console.log(`Documentation for ${packageItem.packageName} generated in ${packageOutputDir}`);
    }
  } catch (error) {
    console.error(`Error generating documentation for ${packageItem.packageName}:`, error);
  }
}

/**
 * Main function to download packages and generate documentation
 */
async function main(): Promise<void> {
  // Create directories
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  // Process each package
  for (const packageItem of PACKAGES) {
    const packagePath = await downloadPackage(packageItem.packageName);
    if (packagePath) {
      await generateTypeDoc(packagePath, packageItem);
    }
  }
  
  // Create an index.md file in the API directory
  const apiIndexPath = path.join(OUTPUT_DIR, 'index.md');
  let apiIndexContent = `---
title: Library Reference
sidebar_label: Libraries
slug: /libraries
---

# CodeVideo Libraries Documentation

Generated TypeScript reference for the CodeVideo virtual IDE packages.

`;

  PACKAGES.forEach(packageItem => {
    const safeName = packageItem.packageName.replace(/\//g, '-').replace(/^@/, '');
    apiIndexContent += `- [${packageItem.packageName}](/libraries/${safeName})\n`;
  });
  
  fs.writeFileSync(apiIndexPath, apiIndexContent);
  
  console.log('Documentation generation complete!');
}

main().catch(console.error);