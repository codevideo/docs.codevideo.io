import { IAction, IEditorPosition, AuthorAction, ISpeechCaption, EditorAction } from '@fullstackcraftllc/codevideo-types';

/**
 * Represents a virtual editor that can be manipulated by a series of actions.
 */
declare class VirtualEditor {
    /**
     * Represents the LOGICAL (0,0) referenced caret row position in the editor.
     * @private
     */
    private caretRow;
    /**
     * Represents the LOGICAL (0,0) referenced caret column position in the editor.
     * @private
     */
    private caretCol;
    /**
     * Represents the LOGICAL (0,0) referenced highlight start row position in the editor. -1 represents no highlight.
     * @private
     */
    private highlightStartRow;
    /**
     * Represents the LOGICAL (0,0) referenced highlight start column position in the editor. -1 represents no highlight.
     * @private
     */
    private highlightStartCol;
    private codeLines;
    private actionsApplied;
    private editorActionsApplied;
    private authorActionsApplied;
    private verbose;
    private codeLinesHistory;
    private speechCaptionHistory;
    private caretPositionHistory;
    private highlightStartPositionHistory;
    private currentlyHighlightedCode;
    private highlightHistory;
    private isSaved;
    constructor(initialCodeLines: Array<string>, actions?: Array<IAction>, verbose?: boolean);
    /**
     * Applies a series of actions to the virtual editor.
     * @param actions The actions to apply.
     * @returns The code after the actions have been applied.
     */
    applyActions(actions: Array<IAction>): string;
    /**
     * Applies a single action to the virtual editor.
     * @param action The action to apply.
     * @returns The code after the action has been applied. Note the code can be identical to a previous step if the action applied was not a code action.
     */
    applyAction(action: IAction): string;
    /**
     * Returns the code lines of the virtual editor.
     * @returns The code lines of the virtual editor.
     */
    getCodeLines(): Array<string>;
    /**
     * Returns the PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.
     * @returns The PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.
     */
    getCurrentCaretPosition(): IEditorPosition;
    /**
     * Returns the PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.
     * @returns The PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.
     */
    getCurrentHighlightCoordinates(): {
        start: IEditorPosition;
        end: IEditorPosition;
    } | null;
    /**
     * Returns the isSaved state of the virtual editor.
     * @returns The isSaved state of the virtual editor.
     */
    getIsSaved(): boolean;
    /**
     * Returns the current highlight code of the virtual editor.
     * @returns The current highlight code of the virtual editor.
     */
    getCurrentHighlightedCode(): string;
    /**
     * Clears the current highlight code of the virtual editor. (Resets the highlight start row and column to -1)
     */
    clearCurrentHighlightedCode(): void;
    /**
     * Sets the current caret position of the virtual editor.
     * @param row The row to set the caret position to, referenced from (1, 1) being the top left of the editor.
     * @param column The column to set the caret position to, referenced from (1, 1) being the top left of the editor.
     */
    setCurrentCaretPosition(row: number, column: number): void;
    /**
     * Gets the actions applied to the virtual editor.
     * @returns The actions applied to the virtual editor.
     */
    getActionsApplied(): Array<IAction>;
    /**
     * Gets the code after the actions have been applied.
     * @returns The code after the actions have been applied.
     */
    getCode(): string;
    /**
     * Gets the code at a specific action index that has been applied.
     * @param actionIndex The index of the action to get the code after.
     * @returns The code after the action has been applied.
     * @throws An error if the action index is out of bounds.
     */
    getCodeAtActionIndex(actionIndex: number): string;
    /**
     * Gets the highlighted code at a specific action index that has been applied.
     * @param actionIndex The index of the action to get the highlighted code after.
     * @returns The highlighted code after the action has been applied.
     * @throws An error if the action index is out of bounds.
     */
    getHighlightedCodeAtActionIndex(actionIndex: number): string;
    /**
     * Returns an array of code lines at each step.
     * @returns An array of code lines at each step.
     */
    getCodeLinesHistory(): Array<Array<string>>;
    /**
     * Returns an array of caret positions at each step.
     * @returns An array of caret positions at each step.
     */
    getAuthorActionsApplied(): Array<AuthorAction>;
    /**
     * Gets the speech caption history.
     * @returns The speech caption history.
     */
    getSpeechCaptionHistory(): Array<ISpeechCaption>;
    /**
     * Gets the editor actions applied.
     * @returns The editor actions applied.
     */
    getEditorActionsApplied(): Array<EditorAction>;
    /**
     * Gets the code after each step.
     * @returns The code after each step.
     */
    getCodeAfterEachStep(): Array<string>;
    /**
     * Gets the editor state after each step.
     * @returns The editor state after each step.
     */
    getEditorStateAfterEachStep(): Array<{
        code: string;
        caretPosition: IEditorPosition;
    }>;
    /**
     * Gets the data for annotated frames.
     * @returns The data for annotated frames.
     */
    getDataForAnnotatedFrames(): Array<{
        actionApplied: IAction;
        code: string;
        highlightStartPosition: null | IEditorPosition;
        highlightedCode: string;
        caretPosition: IEditorPosition;
        speechCaptions: Array<ISpeechCaption>;
    }>;
    /**
    * Sets the verbose mode for the virtual editor.
    * @param verbose Whether to enable verbose
    */
    setVerbose(verbose: boolean): void;
    private calculateHighlightedText;
}

export { VirtualEditor };
