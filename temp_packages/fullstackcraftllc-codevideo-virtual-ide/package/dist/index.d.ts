import { Project, IAction, IFileExplorerSnapshot, IEditorSnapshot, ITerminalSnapshot, IMouseSnapshot, IAuthorSnapshot, ICourseSnapshot, IVirtualLayerLog } from '@fullstackcraftllc/codevideo-types';
import { VirtualFileExplorer } from '@fullstackcraftllc/codevideo-virtual-file-explorer';
import { VirtualEditor } from '@fullstackcraftllc/codevideo-virtual-editor';
import { VirtualTerminal } from '@fullstackcraftllc/codevideo-virtual-terminal';
import { VirtualAuthor } from '@fullstackcraftllc/codevideo-virtual-author';

declare const supportedCommands: string[];
/**
 * Represents a virtual IDE that can be manipulated by a series of actions.
 * A virtual IDE in the CodeVideo world consists of 4 main parts:
 * 1. A virtual file system that represents the file explorer, typically on the left sidebar of an IDE.
 * 2. One or more virtual editors that represent the main editing area, typically in upper right 75% or so of an IDE.
 * 3. One or more virtual terminals that represent the terminal, typically at the bottom right of an IDE.
 * 4. One or more virtual authors that represent the author, responsible for speaking actions.
 */
declare class VirtualIDE {
    virtualFileExplorer: VirtualFileExplorer;
    virtualEditors: Array<{
        fileName: string;
        virtualEditor: VirtualEditor;
    }>;
    virtualTerminals: Array<VirtualTerminal>;
    private currentEditorIndex;
    private currentTerminalIndex;
    private currentAuthorIndex;
    private currentCursorPosition;
    private verbose;
    private logs;
    private virtualAuthors;
    constructor(project?: Project, initialActionIndex?: number, verbose?: boolean);
    /**
     * Adds a virtual editor to the virtual IDE.
     * @param codeBlock The virtual code block to add.
     */
    addVirtualEditor(fileName: string, virtualEditor: VirtualEditor): void;
    /**
     * Adds a virtual terminal to the virtual IDE.
     * @param terminal The virtual terminal to add.
     */
    addVirtualTerminal(terminal: VirtualTerminal): void;
    /**
     * Adds a virtual author to the virtual IDE.
     * @param author The virtual author to add.
     */
    addVirtualAuthor(author: VirtualAuthor): void;
    /**
     * Applies an action to the virtual IDE.
     * @param action The action to apply.
     */
    applyAction(action: IAction): void;
    /**
     * Executes IDE side effects for a terminal command.
     * The terminal itself doesn't have knowledge of the filesystem, so we need to handle that here.
     * (In the real world it does but in codevideo we rely on the virtual file explorer to handle all filesystem operations.)
     * @param command The command to execute.
     */
    executeTerminalCommandSideEffects(): void;
    /**
     * Applies a series of actions to the virtual code block.
     * @param actions The actions to apply.
     */
    applyActions(actions: IAction[]): void;
    /**
     * Gets the current cursor position.
     * @returns The current cursor position.
     */
    getCursorPosition(): {
        x: number;
        y: number;
    } | null;
    /**
     * Gets the open files in the virtual IDE.
     * @returns The open files in the virtual IDE.
     */
    getOpenFiles(): Array<string>;
    /**
     * Gets the file explorer snapshot.
     * @returns The file explorer snapshot.
     */
    getFileExplorerSnapshot(): IFileExplorerSnapshot;
    /**
     * Gets the editor snapshot.
     * @returns The editor snapshot.
     */
    getEditorSnapshot(): IEditorSnapshot;
    /**
     * Gets the terminal snapshot.
     */
    getTerminalSnapshot(): ITerminalSnapshot;
    /**
     * Gets the mouse snapshot.
     */
    getMouseSnapshot(): IMouseSnapshot;
    /**
     * Gets the author snapshot.
     */
    getAuthorSnapshot(): IAuthorSnapshot;
    /**
     * Gets the project snapshot. Should provide everything to completely recreate an IDE visually, from scratch.
     */
    getCourseSnapshot(): ICourseSnapshot;
    /**
     * Sets the verbose flag for the virtual IDE and all its components.
     * @param verbose
     */
    setVerbose(verbose: boolean): void;
    /**
     * Gets the logs for the virtual IDE.
     * @returns The logs for the virtual IDE.
     */
    getLogs(): Array<IVirtualLayerLog>;
    private reconstituteFromCourseAtActionIndex;
    private reconstituteFromLessonAtActionIndex;
    private reconstituteFromActionsAtActionIndex;
}

export { VirtualIDE, supportedCommands };
