"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = require("util");
const tar = __importStar(require("tar"));
const td = __importStar(require("typedoc"));
const execAsync = (0, util_1.promisify)(child_process_1.exec);
const PACKAGES = [
    '@fullstackcraftllc/codevideo-virtual-ide',
    '@fullstackcraftllc/codevideo-virtual-file-explorer',
    '@fullstackcraftllc/codevideo-virtual-file-editor',
    '@fullstackcraftllc/codevideo-virtual-file-terminal',
    // Add more as needed (note: TypeScript packages only!)
];
const TEMP_DIR = path_1.default.join(__dirname, '..', 'temp_packages');
const OUTPUT_DIR = path_1.default.join(__dirname, '..', 'docs', 'api');
/**
 * Download and extract an npm package
 * @param packageName - Name of the npm package
 * @returns Path to the extracted package
 */
async function downloadPackage(packageName) {
    console.log(`Processing ${packageName}...`);
    // Create package directory
    const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
    const packageDir = path_1.default.join(TEMP_DIR, safeName);
    fs_1.default.mkdirSync(packageDir, { recursive: true });
    try {
        // Download package using npm pack
        console.log(`Downloading ${packageName}...`);
        const { stdout } = await execAsync(`npm pack ${packageName} --quiet`, { cwd: packageDir });
        const tarballName = stdout.trim();
        const tarballPath = path_1.default.join(packageDir, tarballName);
        // Extract tarball
        console.log(`Extracting ${tarballName}...`);
        await tar.extract({
            file: tarballPath,
            cwd: packageDir
        });
        // The extracted content is in a 'package' directory
        const extractedDir = path_1.default.join(packageDir, 'package');
        console.log(`Successfully processed ${packageName}`);
        return extractedDir;
    }
    catch (error) {
        console.error(`Error processing ${packageName}:`, error);
        return null;
    }
}
/**
 * Generate TypeDoc documentation for a package
 * @param packagePath - Path to the extracted package
 * @param packageName - Name of the npm package
 */
async function generateTypeDoc(packagePath, packageName) {
    if (!packagePath)
        return;
    console.log(`Generating documentation for ${packageName}...`);
    const safeName = packageName.replace(/\//g, '-').replace(/^@/, '');
    const packageOutputDir = path_1.default.join(OUTPUT_DIR, safeName);
    try {
        // Find entry point (package.json, main field, types field)
        const packageJsonPath = path_1.default.join(packagePath, 'package.json');
        const packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, 'utf8'));
        const typesFile = packageJson.types || packageJson.typings;
        const entryPoint = typesFile
            ? path_1.default.join(packagePath, typesFile)
            : path_1.default.join(packagePath, packageJson.main || 'index.js');
        const app = await td.Application.bootstrap({
            entryPoints: [entryPoint],
            out: packageOutputDir,
            plugin: ['typedoc-plugin-markdown'],
            readme: 'none',
            name: packageName,
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
            const indexPath = path_1.default.join(packageOutputDir, 'index.md');
            const indexContent = `---
title: ${packageName}
sidebar_label: ${packageName}
---

# ${packageName}

API documentation for ${packageName}.

`;
            fs_1.default.writeFileSync(indexPath, indexContent);
        }
    }
    catch (error) {
        console.error(`Error generating documentation for ${packageName}:`, error);
    }
}
/**
 * Main function to download packages and generate documentation
 */
async function main() {
    // Create directories
    fs_1.default.mkdirSync(TEMP_DIR, { recursive: true });
    fs_1.default.mkdirSync(OUTPUT_DIR, { recursive: true });
    // Process each package
    for (const packageName of PACKAGES) {
        const packagePath = await downloadPackage(packageName);
        if (packagePath) {
            await generateTypeDoc(packagePath, packageName);
        }
    }
    // Create an index.md file in the API directory
    const apiIndexPath = path_1.default.join(OUTPUT_DIR, 'index.md');
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
    fs_1.default.writeFileSync(apiIndexPath, apiIndexContent);
    console.log('Documentation generation complete!');
}
main().catch(console.error);
