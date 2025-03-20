import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import * as tar from 'tar';
import * as td from 'typedoc';

const execAsync = promisify(exec);

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
  
  // Create package directory
  const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
  const packageDir = path.join(TEMP_DIR, safeName);
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
    
    const typesFile = packageJson.types || packageJson.typings;
    const entryPoint = typesFile 
      ? path.join(packagePath, typesFile)
      : path.join(packagePath, packageJson.main || 'index.js');
    
    const app = await td.Application.bootstrapWithPlugins({
      entryPoints: [entryPoint],
      out: packageOutputDir,
      plugin: ['typedoc-plugin-markdown'],
      theme: 'markdown',
      router: 'module',
      name: packageItem.packageName,
      exclude: ["**/__tests__/**/*", "**/*.test.ts", "**/*.spec.ts"],
      excludeExternals: true,
      excludePrivate: true,
      excludeProtected: true
    });

    app.options.addReader(new td.TSConfigReader());
    
    const project = await app.convert();
    if (project) {
      await app.generateDocs(project, packageOutputDir);
      console.log(`Documentation for ${packageItem.packageName} generated in ${packageOutputDir}`);

      // now read in the globals.md file and add it to the index.md file
      const globalsMarkdown = fs.readFileSync(path.join(packageOutputDir, 'globals.md'), 'utf8');

      // remove the first line of the globals.md file which includes the README for some reason
      const globalsMarkdownLines = globalsMarkdown.split('\n');
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      globalsMarkdownLines.shift();
      const globalsMarkdownContent = globalsMarkdownLines.join('\n');
      
      // Create index.md file to link in Docusaurus
      const indexPath = path.join(packageOutputDir, 'index.md');
      const indexContent = `---
title: "${packageItem.packageName}"
sidebar_label: "${packageItem.packageName}"
sidebar_position: ${packageItem.sidebarPosition}
---

${globalsMarkdownContent}}

`;
      fs.writeFileSync(indexPath, indexContent);

      // remove README.md and globals.md files
      fs.unlinkSync(path.join(packageOutputDir, 'README.md'));
      fs.unlinkSync(path.join(packageOutputDir, 'globals.md'));
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
title: API Documentation
sidebar_label: Libraries
slug: /libraries
---

# CodeVideo Libraries Documentation

This section contains the API documentation for all CodeVideo TypeScript packages.

`;

  PACKAGES.forEach(packageItem => {
    const safeName = packageItem.packageName.replace(/\//g, '-').replace(/^@/, '');
    apiIndexContent += `- [${packageItem.packageName}](/docs/libraries/${safeName})\n`;
  });
  
  fs.writeFileSync(apiIndexPath, apiIndexContent);
  
  console.log('Documentation generation complete!');
}

main().catch(console.error);