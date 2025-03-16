import { FileExplorerAction, FileItem, IFileEntry, IFileStructure } from '@fullstackcraftllc/codevideo-types';

/**
 * Represents a virtual file explorer that can be used to simulate file system operations in the CodeVideo ecosystem.
 */
declare class VirtualFileExplorer {
    private presentWorkingDirectory;
    private currentFileStructure;
    private actionsApplied;
    private openFiles;
    private verbose;
    constructor(actions?: FileExplorerAction[], verbose?: boolean);
    /**
     * Applies a list of actions to the virtual file explorer
     * @param actions List of actions to apply
     */
    applyActions(actions: FileExplorerAction[]): void;
    applyAction(action: FileExplorerAction): void;
    /**
     * Gets the present working directory
     * @returns The present working directory
     */
    getPresentWorkingDirectory(): string;
    /**
     * Gets the current file tree in a string format
     * @param showEvenIfCollapsed Whether to show collapsed directories in the tree
     * @returns String representation of the current file tree
     */
    getCurrentFileTree(showEvenIfCollapsed?: boolean): string;
    /**
     * Gets the list of files in the current directory
     * @returns Array of file paths in the current directory
     */
    getFiles(): string[];
    /**
     * Gets an 'ls' formatted list of files in the current directory
     * @returns String of folders and files in the current directory in alphabetical order
     */
    getLsString(): string;
    /**
     * Gets all file and directory objects in the current file structure
     * @returns Array of file and directory objects
     */
    getFileObjects(): Array<FileItem>;
    /**
     * Gets the full file paths and their contents in the current file structure
     * @returns Array of file paths and their contents
     */
    getFullFilePathsAndContents(): Array<IFileEntry>;
    /**
     * Gets the current file structure
     * @returns The current file structure
     */
    getCurrentFileStructure(): IFileStructure;
    /**
     * Gets the list of actions applied to the virtual file explorer
     * @returns Array of actions applied
     */
    getActionsApplied(): FileExplorerAction[];
    /**
     * Gets the contents of a specific file. Changes in the editor are only carried over here until the file is explicitly saved in virtual-ide.
     * @param fileName Full path to the file
     * @returns The content of the file if it exists
     */
    getFileContents(fileName: string): string;
    /**
   * Gets the list of currently open files
   * @returns Array of file paths that are currently open
   */
    getOpenFiles(): string[];
    /**
     * Sets the verbose mode for the virtual file explorer
     * @param verbose Whether to enable verbose
     */
    setVerbose(verbose: boolean): void;
    private setPresentWorkingDirectory;
    private resolvePath;
    private getFileExtension;
    private createFileItem;
    private createDirectoryItem;
    private getPathComponents;
    private getParentDirectory;
    private copyDirectory;
    private buildTreeString;
    private openFile;
    private closeFile;
}

export { VirtualFileExplorer };
