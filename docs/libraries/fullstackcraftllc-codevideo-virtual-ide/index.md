---
title: "@fullstackcraftllc/codevideo-virtual-ide"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-ide"
sidebar_position: 1
---

# @fullstackcraftllc/codevideo-virtual-ide

## Classes

### VirtualIDE

Represents a virtual IDE that can be manipulated by a series of actions.
A virtual IDE in the CodeVideo world consists of 4 main parts:
1. A virtual file system that represents the file explorer, typically on the left sidebar of an IDE.
2. One or more virtual editors that represent the main editing area, typically in upper right 75% or so of an IDE.
3. One or more virtual terminals that represent the terminal, typically at the bottom right of an IDE.
4. One or more virtual authors that represent the author, responsible for speaking actions.

#### Constructors

##### new VirtualIDE()

> **new VirtualIDE**(`project`?, `initialActionIndex`?, `verbose`?): [`VirtualIDE`](#virtualide)

###### Parameters

###### project?

`Project`

###### initialActionIndex?

`number`

###### verbose?

`boolean`

###### Returns

[`VirtualIDE`](#virtualide)

#### Properties

##### virtualEditors

> **virtualEditors**: `object`[]

The virtual editors that represent the editing area. Filenames are absolute and also represent the open tabs of the IDE.

###### fileName

> **fileName**: `string`

###### virtualEditor

> **virtualEditor**: `VirtualEditor`

##### virtualFileExplorer

> **virtualFileExplorer**: `VirtualFileExplorer`

The virtual file explorer that represents the file system.

##### virtualMouse

> **virtualMouse**: `VirtualMouse`

The virtual mouse that represents the mouse cursor.

##### virtualTerminals

> **virtualTerminals**: `VirtualTerminal`[]

The virtual terminals that represent the terminals. Since they have no file name, we just reference them by index.

#### Methods

##### addVirtualAuthor()

> **addVirtualAuthor**(`author`): `void`

Adds a virtual author to the virtual IDE.

###### Parameters

###### author

`VirtualAuthor`

The virtual author to add.

###### Returns

`void`

##### addVirtualEditor()

> **addVirtualEditor**(`fileName`, `virtualEditor`): `void`

Adds a virtual editor to the virtual IDE.

###### Parameters

###### fileName

`string`

The name of the file.

###### virtualEditor

`VirtualEditor`

The virtual editor to add.

###### Returns

`void`

##### addVirtualTerminal()

> **addVirtualTerminal**(`terminal`): `void`

Adds a virtual terminal to the virtual IDE.

###### Parameters

###### terminal

`VirtualTerminal`

The virtual terminal to add.

###### Returns

`void`

##### applyAction()

> **applyAction**(`action`): `void`

Applies an action to the virtual IDE.

###### Parameters

###### action

`IAction`

The action to apply.

###### Returns

`void`

##### applyActions()

> **applyActions**(`actions`): `void`

Applies a series of actions to the virtual code block.

###### Parameters

###### actions

`IAction`[]

The actions to apply.

###### Returns

`void`

##### applyCourseSnapshot()

> **applyCourseSnapshot**(`courseSnapshot`): `void`

Applies a course snapshot to the virtual IDE.
Goes piece by piece through the course snapshot and apply it to the various parts of the virtual IDE

###### Parameters

###### courseSnapshot

`ICourseSnapshot`

The course snapshot to apply.

###### Returns

`void`

##### executeMouseLeftClickSideEffects()

> **executeMouseLeftClickSideEffects**(`currentMouseLocation`, `currentHoveredFileName`, `currentHoveredFolderName`, `currentHoveredEditorTabFileName`): `void`

###### Parameters

###### currentMouseLocation

`MouseLocation`

###### currentHoveredFileName

`string`

###### currentHoveredFolderName

`string`

###### currentHoveredEditorTabFileName

`string`

###### Returns

`void`

##### executeMouseRightClickSideEffects()

> **executeMouseRightClickSideEffects**(`currentMouseLocation`, `currentHoveredFileName`, `currentHoveredFolderName`): `void`

###### Parameters

###### currentMouseLocation

`MouseLocation`

###### currentHoveredFileName

`string`

###### currentHoveredFolderName

`string`

###### Returns

`void`

##### executeTerminalCommandSideEffects()

> **executeTerminalCommandSideEffects**(): `void`

Executes IDE side effects for a terminal command.
The terminal itself doesn't have knowledge of the filesystem, so we need to handle that here.
(In the real world it does but in CodeVideo world we rely on the virtual file explorer to handle all filesystem operations.)

###### Returns

`void`

##### getAuthorSnapshot()

> **getAuthorSnapshot**(): `IAuthorSnapshot`

Gets the author snapshot.

###### Returns

`IAuthorSnapshot`

##### getCourseSnapshot()

> **getCourseSnapshot**(): `ICourseSnapshot`

Gets the project snapshot. Should provide everything to completely recreate an IDE visually, from scratch.

###### Returns

`ICourseSnapshot`

##### getEditorSnapshot()

> **getEditorSnapshot**(): `IEditorSnapshot`

Gets the editor snapshot.

###### Returns

`IEditorSnapshot`

The editor snapshot.

##### getFileExplorerSnapshot()

> **getFileExplorerSnapshot**(): `IFileExplorerSnapshot`

Gets the file explorer snapshot.

###### Returns

`IFileExplorerSnapshot`

The file explorer snapshot.

##### getFullFilePathsAndContents()

> **getFullFilePathsAndContents**(): `IFileEntry`[]

Gets all file paths and their contents in the virtual IDE. Simply a wrapper around the file explorer's getFullFilePathsAndContents method.

###### Returns

`IFileEntry`[]

The files in the virtual IDE.

##### getLogs()

> **getLogs**(): `IVirtualLayerLog`[]

Gets the logs for the virtual IDE.

###### Returns

`IVirtualLayerLog`[]

The logs for the virtual IDE.

##### getLsString()

> **getLsString**(): `string`

###### Returns

`string`

##### getMouseSnapshot()

> **getMouseSnapshot**(): `IMouseSnapshot`

Gets the mouse snapshot.

###### Returns

`IMouseSnapshot`

##### getOpenFiles()

> **getOpenFiles**(): `string`[]

Gets the open files in the virtual IDE.

###### Returns

`string`[]

The open files in the virtual IDE.

##### getTerminalPwd()

> **getTerminalPwd**(): `string`

Gets the current present working directory for terminal display ("~" for root).

###### Returns

`string`

The terminal PWD.

##### getTerminalSnapshot()

> **getTerminalSnapshot**(): `ITerminalSnapshot`

Gets the terminal snapshot.

###### Returns

`ITerminalSnapshot`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

Sets the verbose flag for the virtual IDE and all its components.

###### Parameters

###### verbose

`boolean`

###### Returns

`void`

## Variables

### supportedCommands

> `const` **supportedCommands**: `string`[]

