import { TerminalAction } from '@fullstackcraftllc/codevideo-types';

/**
 * Represents a virtual terminal that can be interacted with
 * via a series of actions. The terminal maintains a command
 * history and a current command that can be modified.
 * The terminal also maintains a caret position that can be
 * moved around the current command.
 * Finally, the terminal is also responsible for it's entire own buffer, for easy rendering in UIs.
 */
declare class VirtualTerminal {
    private presentWorkingDirectory;
    private prompt;
    private caretPosition;
    private currentCommand;
    private commandHistory;
    private historyIndex;
    private actionsApplied;
    private verbose;
    private bufferLines;
    constructor(initialCommand?: string, actions?: TerminalAction[], verbose?: boolean);
    /**
     * Applies a series of actions to the virtual terminal
     * @param actions The actions to apply
     * @returns The current command after applying the actions
     */
    applyActions(actions: TerminalAction[]): string;
    /**
     * Applies a single action to the virtual terminal
     * @param action The action to apply
     * @returns The current command after applying the action
     */
    applyAction(action: TerminalAction): string;
    /**
     * Returns the current state of the virtual terminal
     * @returns The current state of the virtual terminal
     */
    getCurrentCommand(): string;
    /**
     * Returns the command history of the virtual terminal
     * @returns The command history of the virtual terminal
     */
    getCommandHistory(): string[];
    /**
     * Returns the current caret position of the virtual terminal
     * @returns The current caret position of the virtual terminal
     */
    getCurrentCaretPosition(): number;
    /**
     * Returns the actions applied to the virtual terminal
     * @returns The actions applied to the virtual terminal
     */
    getActionsApplied(): TerminalAction[];
    /**
     * Returns the prompt of the virtual terminal
     * @returns The prompt of the virtual terminal
     */
    getPrompt(): string;
    /**
     * Returns the present working directory of the virtual terminal
     * @returns The present working directory of the virtual
     */
    getPresentWorkingDirectory(): string;
    /**
     * Returns the buffer of the virtual terminal
     * @returns The buffer of the virtual terminal
     */
    getBuffer(): string[];
    /**
    * Sets the verbose mode for the virtual terminal
    * @param verbose Whether to enable verbose
    */
    setVerbose(verbose: boolean): void;
    private addLinesToBufferLines;
    private setPresentWorkingDirectory;
}

export { VirtualTerminal };
