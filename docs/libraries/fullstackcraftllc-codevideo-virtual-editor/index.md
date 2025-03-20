---
title: "@fullstackcraftllc/codevideo-virtual-editor"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-editor"
sidebar_position: 3
---

# @fullstackcraftllc/codevideo-virtual-editor

## Classes

### VirtualEditor

theme_defined_in: [index.js:6](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L6)

Represents a virtual editor that can be manipulated by a series of actions.

#### Constructors

##### new VirtualEditor()

> **new VirtualEditor**(`initialCodeLines`, `actions`, `verbose`): `VirtualEditor`

theme_defined_in: [index.js:7](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L7)

###### kind_plural_parameter

###### initialCodeLines

`any`

###### actions

`any`

###### verbose

`any`

###### theme_returns

`VirtualEditor`

#### Properties

##### actionsApplied

> **actionsApplied**: `{ name: string; value: any }[]`

theme_defined_in: [index.js:42](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L42)

##### authorActionsApplied

> **authorActionsApplied**: `any[]`

theme_defined_in: [index.js:52](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L52)

##### caretPositionHistory

> **caretPositionHistory**: `{ col: number; row: number }[]`

theme_defined_in: [index.js:31](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L31)

##### codeLines

> **codeLines**: `any`

theme_defined_in: [index.js:41](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L41)

##### codeLinesHistory

> **codeLinesHistory**: `any[]`

theme_defined_in: [index.js:29](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L29)

##### currentlyHighlightedCode

> **currentlyHighlightedCode**: `string`

theme_defined_in: [index.js:33](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L33)

##### editorActionsApplied

> **editorActionsApplied**: `{ name: string; value: any }[]`

theme_defined_in: [index.js:45](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L45)

##### highlightHistory

> **highlightHistory**: `string[][]`

theme_defined_in: [index.js:34](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L34)

##### highlightStartPositionHistory

> **highlightStartPositionHistory**: `{ col: number; row: number }[]`

theme_defined_in: [index.js:32](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L32)

##### isSaved

> **isSaved**: `boolean`

theme_defined_in: [index.js:35](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L35)

##### speechCaptionHistory

> **speechCaptionHistory**: `any[]`

theme_defined_in: [index.js:30](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L30)

##### verbose

> **verbose**: `any`

theme_defined_in: [index.js:28](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L28)

#### Methods

##### applyAction()

> **applyAction**(`action`): `any`

theme_defined_in: [index.js:81](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L81)

Applies a single action to the virtual editor.

###### kind_plural_parameter

###### action

`any`

The action to apply.

###### theme_returns

`any`

The code after the action has been applied. Note the code can be identical to a previous step if the action applied was not a code action.

##### applyActions()

> **applyActions**(`actions`): `any`

theme_defined_in: [index.js:70](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L70)

Applies a series of actions to the virtual editor.

###### kind_plural_parameter

###### actions

`any`

The actions to apply.

###### theme_returns

`any`

The code after the actions have been applied.

##### calculateHighlightedText()

> **calculateHighlightedText**(): `any`

theme_defined_in: [index.js:673](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L673)

###### theme_returns

`any`

##### clearCurrentHighlightedCode()

> **clearCurrentHighlightedCode**(): `void`

theme_defined_in: [index.js:534](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L534)

Clears the current highlight code of the virtual editor. (Resets the highlight start row and column to -1)

###### theme_returns

`void`

##### getActionsApplied()

> **getActionsApplied**(): `{ name: string; value: any }[]`

theme_defined_in: [index.js:552](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L552)

Gets the actions applied to the virtual editor.

###### theme_returns

`{ name: string; value: any }[]`

The actions applied to the virtual editor.

##### getAuthorActionsApplied()

> **getAuthorActionsApplied**(): `any[]`

theme_defined_in: [index.js:597](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L597)

Returns an array of caret positions at each step.

###### theme_returns

`any[]`

An array of caret positions at each step.

##### getCode()

> **getCode**(): `any`

theme_defined_in: [index.js:559](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L559)

Gets the code after the actions have been applied.

###### theme_returns

`any`

The code after the actions have been applied.

##### getCodeAfterEachStep()

> **getCodeAfterEachStep**(): `any[]`

theme_defined_in: [index.js:618](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L618)

Gets the code after each step.

###### theme_returns

`any[]`

The code after each step.

##### getCodeAtActionIndex()

> **getCodeAtActionIndex**(`actionIndex`): `any`

theme_defined_in: [index.js:568](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L568)

Gets the code at a specific action index that has been applied.

###### kind_plural_parameter

###### actionIndex

`any`

The index of the action to get the code after.

###### theme_returns

`any`

The code after the action has been applied.

###### Throws

An error if the action index is out of bounds.

##### getCodeLines()

> **getCodeLines**(): `any`

theme_defined_in: [index.js:485](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L485)

Returns the code lines of the virtual editor.

###### theme_returns

`any`

The code lines of the virtual editor.

##### getCodeLinesHistory()

> **getCodeLinesHistory**(): `any[]`

theme_defined_in: [index.js:590](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L590)

Returns an array of code lines at each step.

###### theme_returns

`any[]`

An array of code lines at each step.

##### getCurrentCaretPosition()

> **getCurrentCaretPosition**(): `{ col: number; row: number }`

theme_defined_in: [index.js:492](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L492)

Returns the PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.

###### theme_returns

`{ col: number; row: number }`

The PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.

###### col

> **col**: `number`

###### row

> **row**: `number`

##### getCurrentHighlightCoordinates()

> **getCurrentHighlightCoordinates**(): `{ end: { col: number; row: number }; start: { col: number; row: number } }`

theme_defined_in: [index.js:502](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L502)

Returns the PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.

###### theme_returns

`{ end: { col: number; row: number }; start: { col: number; row: number } }`

The PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.

###### end

> **end**: `{ col: number; row: number }`

###### end.col

> **col**: `number`

###### end.row

> **row**: `number`

###### start

> **start**: `{ col: number; row: number }`

###### start.col

> **col**: `number`

###### start.row

> **row**: `number`

##### getCurrentHighlightedCode()

> **getCurrentHighlightedCode**(): `string`

theme_defined_in: [index.js:528](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L528)

Returns the current highlight code of the virtual editor.

###### theme_returns

`string`

The current highlight code of the virtual editor.

##### getDataForAnnotatedFrames()

> **getDataForAnnotatedFrames**(): \{ actionApplied: \{ name: string; value: any \}; caretPosition: \{ col: number; row: number \}; code: any; highlightedCode: string; highlightStartPosition: \{ col: number; row: number \}; speechCaptions: \{ speechType: "author-speak-before" \| "author-speak-after" \| "author-speak-during" \| "author-wait"; speechValue: string \}\[\] \}\[\]

theme_defined_in: [index.js:640](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L640)

Gets the data for annotated frames.

###### theme_returns

\{ actionApplied: \{ name: string; value: any \}; caretPosition: \{ col: number; row: number \}; code: any; highlightedCode: string; highlightStartPosition: \{ col: number; row: number \}; speechCaptions: \{ speechType: "author-speak-before" \| "author-speak-after" \| "author-speak-during" \| "author-wait"; speechValue: string \}\[\] \}\[\]

The data for annotated frames.

##### getEditorActionsApplied()

> **getEditorActionsApplied**(): `{ name: string; value: any }[]`

theme_defined_in: [index.js:611](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L611)

Gets the editor actions applied.

###### theme_returns

`{ name: string; value: any }[]`

The editor actions applied.

##### getEditorStateAfterEachStep()

> **getEditorStateAfterEachStep**(): `{ caretPosition: { col: number; row: number }; code: any }[]`

theme_defined_in: [index.js:625](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L625)

Gets the editor state after each step.

###### theme_returns

`{ caretPosition: { col: number; row: number }; code: any }[]`

The editor state after each step.

##### getHighlightedCodeAtActionIndex()

> **getHighlightedCodeAtActionIndex**(`actionIndex`): `string`

theme_defined_in: [index.js:580](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L580)

Gets the highlighted code at a specific action index that has been applied.

###### kind_plural_parameter

###### actionIndex

`any`

The index of the action to get the highlighted code after.

###### theme_returns

`string`

The highlighted code after the action has been applied.

###### Throws

An error if the action index is out of bounds.

##### getIsSaved()

> **getIsSaved**(): `boolean`

theme_defined_in: [index.js:521](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L521)

Returns the isSaved state of the virtual editor.

###### theme_returns

`boolean`

The isSaved state of the virtual editor.

##### getSpeechCaptionHistory()

> **getSpeechCaptionHistory**(): `any[]`

theme_defined_in: [index.js:604](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L604)

Gets the speech caption history.

###### theme_returns

`any[]`

The speech caption history.

##### setCurrentCaretPosition()

> **setCurrentCaretPosition**(`row`, `column`): `void`

theme_defined_in: [index.js:544](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L544)

Sets the current caret position of the virtual editor.

###### kind_plural_parameter

###### row

`any`

The row to set the caret position to, referenced from (1, 1) being the top left of the editor.

###### column

`any`

The column to set the caret position to, referenced from (1, 1) being the top left of the editor.

###### theme_returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

theme_defined_in: [index.js:669](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-editor/package/dist/index.js#L669)

Sets the verbose mode for the virtual editor.

###### kind_plural_parameter

###### verbose

`any`

Whether to enable verbose

###### theme_returns

`void`
}

