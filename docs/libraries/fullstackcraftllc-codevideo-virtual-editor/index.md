---
title: "@fullstackcraftllc/codevideo-virtual-editor"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-editor"
sidebar_position: 3
---

# @fullstackcraftllc/codevideo-virtual-editor

## Classes

### VirtualEditor

Represents a virtual editor that can be manipulated by a series of actions.

#### Constructors

##### new VirtualEditor()

> **new VirtualEditor**(`initialCodeLines`, `actions`?, `verbose`?): [`VirtualEditor`](#virtualeditor)

###### Parameters

###### initialCodeLines

`string`[]

###### actions?

`IAction`[]

###### verbose?

`boolean`

###### Returns

[`VirtualEditor`](#virtualeditor)

#### Methods

##### applyAction()

> **applyAction**(`action`): `string`

Applies a single action to the virtual editor.

###### Parameters

###### action

`IAction`

The action to apply.

###### Returns

`string`

The code after the action has been applied. Note the code can be identical to a previous step if the action applied was not a code action.

##### applyActions()

> **applyActions**(`actions`): `string`

Applies a series of actions to the virtual editor.

###### Parameters

###### actions

`IAction`[]

The actions to apply.

###### Returns

`string`

The code after the actions have been applied.

##### clearCurrentHighlightedCode()

> **clearCurrentHighlightedCode**(): `void`

Clears the current highlight code of the virtual editor. (Resets the highlight start row and column to -1)

###### Returns

`void`

##### getActionsApplied()

> **getActionsApplied**(): `IAction`[]

Gets the actions applied to the virtual editor.

###### Returns

`IAction`[]

The actions applied to the virtual editor.

##### getCode()

> **getCode**(): `string`

Gets the code after the actions have been applied.

###### Returns

`string`

The code after the actions have been applied.

##### getCodeAfterEachStep()

> **getCodeAfterEachStep**(): `string`[]

Gets the code after each step.

###### Returns

`string`[]

The code after each step.

##### getCodeAtActionIndex()

> **getCodeAtActionIndex**(`actionIndex`): `string`

Gets the code at a specific action index that has been applied.

###### Parameters

###### actionIndex

`number`

The index of the action to get the code after.

###### Returns

`string`

The code after the action has been applied.

###### Throws

An error if the action index is out of bounds.

##### getCodeLines()

> **getCodeLines**(): `string`[]

Returns the code lines of the virtual editor.

###### Returns

`string`[]

The code lines of the virtual editor.

##### getCodeLinesHistory()

> **getCodeLinesHistory**(): `string`[][]

Returns an array of code lines at each step.

###### Returns

`string`[][]

An array of code lines at each step.

##### getCurrentCaretPosition()

> **getCurrentCaretPosition**(): `IEditorPosition`

Returns the PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.

###### Returns

`IEditorPosition`

The PHYSICAL current caret position of the virtual editor, (1, 1) being the top left of the editor.

##### getCurrentHighlightCoordinates()

> **getCurrentHighlightCoordinates**(): `null` \| \{ `end`: `IEditorPosition`; `start`: `IEditorPosition`; \}

Returns the PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.

###### Returns

`null` \| \{ `end`: `IEditorPosition`; `start`: `IEditorPosition`; \}

The PHYSICAL current highlight coordinates of the virtual editor, (1, 1) being the top left of the editor.

##### getCurrentHighlightedCode()

> **getCurrentHighlightedCode**(): `string`

Returns the current highlight code of the virtual editor.

###### Returns

`string`

The current highlight code of the virtual editor.

##### getEditorActionsApplied()

> **getEditorActionsApplied**(): `EditorAction`[]

Gets the editor actions applied.

###### Returns

`EditorAction`[]

The editor actions applied.

##### getEditorStateAfterEachStep()

> **getEditorStateAfterEachStep**(): `object`[]

Gets the editor state after each step.

###### Returns

`object`[]

The editor state after each step.

##### getHighlightedCodeAtActionIndex()

> **getHighlightedCodeAtActionIndex**(`actionIndex`): `string`

Gets the highlighted code at a specific action index that has been applied.

###### Parameters

###### actionIndex

`number`

The index of the action to get the highlighted code after.

###### Returns

`string`

The highlighted code after the action has been applied.

###### Throws

An error if the action index is out of bounds.

##### getIsEditorContextMenuOpen()

> **getIsEditorContextMenuOpen**(): `boolean`

Returns if the editor context menu is open or not

###### Returns

`boolean`

If the editor context menu is open or not

##### getIsSaved()

> **getIsSaved**(): `boolean`

Returns the isSaved state of the virtual editor.

###### Returns

`boolean`

The isSaved state of the virtual editor.

##### setCurrentCaretPosition()

> **setCurrentCaretPosition**(`row`, `column`): `void`

Sets the current caret position of the virtual editor.

###### Parameters

###### row

`number`

The row to set the caret position to, referenced from (1, 1) being the top left of the editor.

###### column

`number`

The column to set the caret position to, referenced from (1, 1) being the top left of the editor.

###### Returns

`void`

##### setValuesFromEditor()

> **setValuesFromEditor**(`editor`): `void`

TODO: perhaps better to match 1:1 with a sort of snapshot, not sure - there is currently a big inconsistency between IEditor and the properties of this class
Sets the values of the virtual editor from an editor object.

###### Parameters

###### editor

`IEditor`

The editor object to set the values from.

###### Returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

Sets the verbose mode for the virtual editor.

###### Parameters

###### verbose

`boolean`

Whether to enable verbose

###### Returns

`void`

