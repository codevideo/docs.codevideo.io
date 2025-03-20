---
title: "@fullstackcraftllc/codevideo-virtual-ide"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-ide"
sidebar_position: 1
---

# @fullstackcraftllc/codevideo-virtual-ide

## Classes

### VirtualIDE

theme_defined_in: [index.js:16](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L16)

Represents a virtual IDE that can be manipulated by a series of actions.
A virtual IDE in the CodeVideo world consists of 4 main parts:
1. A virtual file system that represents the file explorer, typically on the left sidebar of an IDE.
2. One or more virtual editors that represent the main editing area, typically in upper right 75% or so of an IDE.
3. One or more virtual terminals that represent the terminal, typically at the bottom right of an IDE.
4. One or more virtual authors that represent the author, responsible for speaking actions.

#### Constructors

##### new VirtualIDE()

> **new VirtualIDE**(`project`, `initialActionIndex`, `verbose`): `VirtualIDE`

theme_defined_in: [index.js:17](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L17)

###### kind_plural_parameter

###### project

`any`

###### initialActionIndex

`any`

###### verbose

`any`

###### theme_returns

`VirtualIDE`

#### Properties

##### currentAuthorIndex

> **currentAuthorIndex**: `number`

theme_defined_in: [index.js:22](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L22)

##### currentCursorPosition

> **currentCursorPosition**: `{ x: number; y: number }`

theme_defined_in: [index.js:23](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L23)

###### x

> **x**: `number` = `-1`

###### y

> **y**: `number` = `-1`

##### currentEditorIndex

> **currentEditorIndex**: `number`

theme_defined_in: [index.js:20](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L20)

##### currentTerminalIndex

> **currentTerminalIndex**: `number`

theme_defined_in: [index.js:21](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L21)

##### logs

> **logs**: `any[]`

theme_defined_in: [index.js:25](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L25)

##### verbose

> **verbose**: `any`

theme_defined_in: [index.js:24](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L24)

##### virtualAuthors

> **virtualAuthors**: `any[]`

theme_defined_in: [index.js:28](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L28)

##### virtualEditors

> **virtualEditors**: `any[]`

theme_defined_in: [index.js:18](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L18)

##### virtualFileExplorer

> **virtualFileExplorer**: `VirtualFileExplorer`

theme_defined_in: [index.js:34](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L34)

##### virtualTerminals

> **virtualTerminals**: `any[]`

theme_defined_in: [index.js:19](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L19)

#### Methods

##### addVirtualAuthor()

> **addVirtualAuthor**(`author`): `void`

theme_defined_in: [index.js:71](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L71)

Adds a virtual author to the virtual IDE.

###### kind_plural_parameter

###### author

`any`

The virtual author to add.

###### theme_returns

`void`

##### addVirtualEditor()

> **addVirtualEditor**(`fileName`, `virtualEditor`): `void`

theme_defined_in: [index.js:57](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L57)

Adds a virtual editor to the virtual IDE.

###### kind_plural_parameter

###### fileName

`any`

The name of the file.

###### virtualEditor

`any`

The virtual editor to add.

###### theme_returns

`void`

##### addVirtualTerminal()

> **addVirtualTerminal**(`terminal`): `void`

theme_defined_in: [index.js:64](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L64)

Adds a virtual terminal to the virtual IDE.

###### kind_plural_parameter

###### terminal

`any`

The virtual terminal to add.

###### theme_returns

`void`

##### applyAction()

> **applyAction**(`action`): `void`

theme_defined_in: [index.js:78](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L78)

Applies an action to the virtual IDE.

###### kind_plural_parameter

###### action

`any`

The action to apply.

###### theme_returns

`void`

##### applyActions()

> **applyActions**(`actions`): `void`

theme_defined_in: [index.js:387](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L387)

Applies a series of actions to the virtual code block.

###### kind_plural_parameter

###### actions

`any`

The actions to apply.

###### theme_returns

`void`

##### executeTerminalCommandSideEffects()

> **executeTerminalCommandSideEffects**(): `void`

theme_defined_in: [index.js:176](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L176)

Executes IDE side effects for a terminal command.
The terminal itself doesn't have knowledge of the filesystem, so we need to handle that here.
(In the real world it does but in CodeVideo world we rely on the virtual file explorer to handle all filesystem operations.)

###### theme_returns

`void`

##### getAuthorSnapshot()

> **getAuthorSnapshot**(): `{ authors: { currentSpeechCaption: any }[] }`

theme_defined_in: [index.js:471](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L471)

Gets the author snapshot.

###### theme_returns

`{ authors: { currentSpeechCaption: any }[] }`

###### authors

> **authors**: `{ currentSpeechCaption: any }[]`

##### getCourseSnapshot()

> **getCourseSnapshot**(): `{ authorSnapshot: { authors: { currentSpeechCaption: any }[] }; editorSnapshot: { editors: { caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[] }; fileExplorerSnapshot: { fileStructure: IFileStructure }; mouseSnapshot: { buttonStates: { left: boolean; middle: boolean; right: boolean }; scrollPosition: { x: number; y: number }; timestamp: number; type: string; x: number; y: number }; terminalSnapshot: { terminals: { content: any }[] } }`

theme_defined_in: [index.js:483](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L483)

Gets the project snapshot. Should provide everything to completely recreate an IDE visually, from scratch.

###### theme_returns

`{ authorSnapshot: { authors: { currentSpeechCaption: any }[] }; editorSnapshot: { editors: { caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[] }; fileExplorerSnapshot: { fileStructure: IFileStructure }; mouseSnapshot: { buttonStates: { left: boolean; middle: boolean; right: boolean }; scrollPosition: { x: number; y: number }; timestamp: number; type: string; x: number; y: number }; terminalSnapshot: { terminals: { content: any }[] } }`

###### authorSnapshot

> **authorSnapshot**: `{ authors: { currentSpeechCaption: any }[] }`

###### authorSnapshot.authors

> **authors**: `{ currentSpeechCaption: any }[]`

###### editorSnapshot

> **editorSnapshot**: `{ editors: { caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[] }`

###### editorSnapshot.editors

> **editors**: `{ caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[]`

###### fileExplorerSnapshot

> **fileExplorerSnapshot**: `{ fileStructure: IFileStructure }`

###### fileExplorerSnapshot.fileStructure

> **fileStructure**: `IFileStructure`

###### mouseSnapshot

> **mouseSnapshot**: `{ buttonStates: { left: boolean; middle: boolean; right: boolean }; scrollPosition: { x: number; y: number }; timestamp: number; type: string; x: number; y: number }`

###### mouseSnapshot.buttonStates

> **buttonStates**: `{ left: boolean; middle: boolean; right: boolean }`

###### mouseSnapshot.buttonStates.left

> **left**: `boolean` = `false`

###### mouseSnapshot.buttonStates.middle

> **middle**: `boolean` = `false`

###### mouseSnapshot.buttonStates.right

> **right**: `boolean` = `false`

###### mouseSnapshot.scrollPosition

> **scrollPosition**: `{ x: number; y: number }`

###### mouseSnapshot.scrollPosition.x

> **x**: `number` = `0`

###### mouseSnapshot.scrollPosition.y

> **y**: `number` = `0`

###### mouseSnapshot.timestamp

> **timestamp**: `number` = `0`

###### mouseSnapshot.type

> **type**: `string` = `'move'`

###### mouseSnapshot.x

> **x**: `number` = `0`

###### mouseSnapshot.y

> **y**: `number` = `0`

###### terminalSnapshot

> **terminalSnapshot**: `{ terminals: { content: any }[] }`

###### terminalSnapshot.terminals

> **terminals**: `{ content: any }[]`

##### getCursorPosition()

> **getCursorPosition**(): `{ x: number; y: number }`

theme_defined_in: [index.js:396](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L396)

Gets the current cursor position.

###### theme_returns

`{ x: number; y: number }`

The current cursor position.

###### x

> **x**: `number` = `-1`

###### y

> **y**: `number` = `-1`

##### getEditorSnapshot()

> **getEditorSnapshot**(): `{ editors: { caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[] }`

theme_defined_in: [index.js:422](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L422)

Gets the editor snapshot.

###### theme_returns

`{ editors: { caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[] }`

The editor snapshot.

###### editors

> **editors**: `{ caretPosition: any; content: any; filename: any; highlightCoordinates: any; isActive: boolean; isSaved: any }[]`

##### getFileExplorerSnapshot()

> **getFileExplorerSnapshot**(): `{ fileStructure: IFileStructure }`

theme_defined_in: [index.js:413](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L413)

Gets the file explorer snapshot.

###### theme_returns

`{ fileStructure: IFileStructure }`

The file explorer snapshot.

###### fileStructure

> **fileStructure**: `IFileStructure`

##### getLogs()

> **getLogs**(): `any[]`

theme_defined_in: [index.js:513](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L513)

Gets the logs for the virtual IDE.

###### theme_returns

`any[]`

The logs for the virtual IDE.

##### getMouseSnapshot()

> **getMouseSnapshot**(): `{ buttonStates: { left: boolean; middle: boolean; right: boolean }; scrollPosition: { x: number; y: number }; timestamp: number; type: string; x: number; y: number }`

theme_defined_in: [index.js:451](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L451)

Gets the mouse snapshot.

###### theme_returns

`{ buttonStates: { left: boolean; middle: boolean; right: boolean }; scrollPosition: { x: number; y: number }; timestamp: number; type: string; x: number; y: number }`

###### buttonStates

> **buttonStates**: `{ left: boolean; middle: boolean; right: boolean }`

###### buttonStates.left

> **left**: `boolean` = `false`

###### buttonStates.middle

> **middle**: `boolean` = `false`

###### buttonStates.right

> **right**: `boolean` = `false`

###### scrollPosition

> **scrollPosition**: `{ x: number; y: number }`

###### scrollPosition.x

> **x**: `number` = `0`

###### scrollPosition.y

> **y**: `number` = `0`

###### timestamp

> **timestamp**: `number` = `0`

###### type

> **type**: `string` = `'move'`

###### x

> **x**: `number` = `0`

###### y

> **y**: `number` = `0`

##### getOpenFiles()

> **getOpenFiles**(): `string[]`

theme_defined_in: [index.js:406](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L406)

Gets the open files in the virtual IDE.

###### theme_returns

`string[]`

The open files in the virtual IDE.

##### getTerminalSnapshot()

> **getTerminalSnapshot**(): `{ terminals: { content: any }[] }`

theme_defined_in: [index.js:439](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L439)

Gets the terminal snapshot.

###### theme_returns

`{ terminals: { content: any }[] }`

###### terminals

> **terminals**: `{ content: any }[]`

##### reconstituteFromActionsAtActionIndex()

> **reconstituteFromActionsAtActionIndex**(`actions`, `actionIndex`): `void`

theme_defined_in: [index.js:535](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L535)

###### kind_plural_parameter

###### actions

`any`

###### actionIndex

`any`

###### theme_returns

`void`

##### reconstituteFromCourseAtActionIndex()

> **reconstituteFromCourseAtActionIndex**(`course`, `actionIndex`): `void`

theme_defined_in: [index.js:516](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L516)

###### kind_plural_parameter

###### course

`any`

###### actionIndex

`any`

###### theme_returns

`void`

##### reconstituteFromLessonAtActionIndex()

> **reconstituteFromLessonAtActionIndex**(`lesson`, `actionIndex`): `void`

theme_defined_in: [index.js:528](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L528)

###### kind_plural_parameter

###### lesson

`any`

###### actionIndex

`any`

###### theme_returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

theme_defined_in: [index.js:496](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L496)

Sets the verbose flag for the virtual IDE and all its components.

###### kind_plural_parameter

###### verbose

`any`

###### theme_returns

`void`

## Variables

### supportedCommands

> `const` **supportedCommands**: `string[]`

theme_defined_in: [index.js:7](https://github.com/codevideo/docs.codevideo.io/blob/ee25232fb9bf591e977bd8d3f0fbd774210c51f0/temp_packages/fullstackcraftllc-codevideo-virtual-ide/package/dist/index.js#L7)
}

