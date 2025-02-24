const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const tar = require('tar');
const TypeDoc = require('typedoc');

/**
 * Configuration for your CodeVideo packages
 */
const PACKAGES = [
  // List your packages here - example:
  '@fullstackcraftllc/codevideo-virtual-ide',
  '@fullstackcraftllc/codevideo-virtual-file-explorer',
  '@fullstackcraftllc/codevideo-virtual-file-editor',
  '@fullstackcraftllc/codevideo-virtual-file-terminal',
  // Add all your TypeScript packages
];

const TEMP_DIR = path.join(__dirname, '..', 'temp_packages');
const OUTPUT_DIR = path.join(__dirname, '..', 'docs', 'api');

/**
 * Download and extract an npm package
 * @param {string} packageName - Name of the npm package
 * @returns {string} - Path to the extracted package
 */
async function downloadPackage(packageName) {
  console.log(`Processing ${packageName}...`);
  
  // Create package directory
  const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
  const packageDir = path.join(TEMP_DIR, safeName);
  fs.mkdirSync(packageDir, { recursive: true });
  
  try {
    // Download package using npm pack
    console.log(`Downloading ${packageName}...`);
    const tarballName = execSync(`npm pack ${packageName} --quiet`, { cwd: packageDir }).toString().trim();
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
 * @param {string} packagePath - Path to the extracted package
 * @param {string} packageName - Name of the npm package
 */
function generateTypeDoc(packagePath, packageName) {
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
    
    // Generate TypeDoc
    const app = new TypeDoc.Application();
    
    app.options.addReader(new TypeDoc.TSConfigReader());
    
    app.bootstrap({
      entryPoints: [entryPoint],
      out: packageOutputDir,
      plugin: ['typedoc-plugin-markdown'],
      readme: 'none',
      name: packageName,
      excludeExternals: true,
      excludePrivate: true,
      excludeProtected: true
    });
    
    const project = app.convert();
    if (project) {
      app.generateDocs(project, packageOutputDir);
      console.log(`Documentation for ${packageName} generated in ${packageOutputDir}`);
      
      // Create index.md file to link in Docusaurus
      const indexPath = path.join(packageOutputDir, 'index.md');
      const indexContent = `---
title: ${packageName}
sidebar_label: ${packageName}
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
async function main() {
  // Create directories
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  // Process each package
  for (const packageName of PACKAGES) {
    const packagePath = await downloadPackage(packageName);
    if (packagePath) {
      generateTypeDoc(packagePath, packageName);
    }
  }
  
  // Create an index.md file in the API directory
  const apiIndexPath = path.join(OUTPUT_DIR, 'index.md');
  let apiIndexContent = `---
title: API Documentation
sidebar_label: Overview
slug: /api
---

# API Documentation

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