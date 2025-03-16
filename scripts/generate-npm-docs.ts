import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import * as tar from 'tar';
import * as td from 'typedoc';

const execAsync = promisify(exec);

const PACKAGES = [
  '@fullstackcraftllc/codevideo-virtual-ide',
  '@fullstackcraftllc/codevideo-virtual-file-explorer',
  '@fullstackcraftllc/codevideo-virtual-editor',
  '@fullstackcraftllc/codevideo-virtual-terminal',
  // '@fullstackcraftllc/codevideo-ide-react',
  // Add more as needed (note: TypeScript packages only!)
];

const TEMP_DIR = path.join(__dirname, '..', 'temp_packages');
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'api');

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
async function generateTypeDoc(packagePath: string | null, packageName: string): Promise<void> {
  if (!packagePath) return;
  
  console.log(`Generating documentation for ${packageName}...`);
  
  const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
  const packageOutputDir = path.join(OUTPUT_DIR, safeName);
  
  try {
    // Find entry point (package.json, main field, types field)
    const packageJsonPath = path.join(packagePath, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const typesFile = packageJson.types || packageJson.typings;
    const entryPoint = typesFile 
      ? path.join(packagePath, typesFile)
      : path.join(packagePath, packageJson.main || 'index.js');
    
    const app = await td.Application.bootstrap({
      entryPoints: [entryPoint],
      out: packageOutputDir,
      plugin: ['typedoc-plugin-markdown'],
      readme: 'none',
      name: packageName,
      exclude: ["**/__tests__/**/*", "**/*.test.ts", "**/*.spec.ts"],
      excludeExternals: true,
      excludePrivate: true,
      excludeProtected: true
    });

    app.options.addReader(new td.TSConfigReader());
    
    const project = await app.convert();
    if (project) {
      await app.generateDocs(project, packageOutputDir);
      console.log(`Documentation for ${packageName} generated in ${packageOutputDir}`);
      
      // Create index.md file to link in Docusaurus
      const indexPath = path.join(packageOutputDir, 'index.md');
      const indexContent = `---
title: "${packageName}"
sidebar_label: "${packageName}"
---

# ${packageName}

API documentation for ${packageName}.

`;
      fs.writeFileSync(indexPath, indexContent);
    }
  } catch (error) {
    console.error(`Error generating documentation for ${packageName}:`, error);
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
  for (const packageName of PACKAGES) {
    const packagePath = await downloadPackage(packageName);
    if (packagePath) {
      await generateTypeDoc(packagePath, packageName);
    }
  }
  
  // Create an index.md file in the API directory
  const apiIndexPath = path.join(OUTPUT_DIR, 'index.md');
  let apiIndexContent = `---
title: API Documentation
sidebar_label: Overview
slug: /api
---

# CodeVideo Documentation

This section contains the API documentation for all CodeVideo packages.

`;

  PACKAGES.forEach(packageName => {
    const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
    apiIndexContent += `- [${packageName}](./${safeName})\n`;
  });
  
  fs.writeFileSync(apiIndexPath, apiIndexContent);
  
  console.log('Documentation generation complete!');
}

main().catch(console.error);