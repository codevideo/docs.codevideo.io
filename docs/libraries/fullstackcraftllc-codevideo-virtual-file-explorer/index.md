---
title: "@fullstackcraftllc/codevideo-virtual-file-explorer"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-file-explorer"
sidebar_position: 2
---

# @fullstackcraftllc/codevideo-virtual-file-explorer

## Classes

### VirtualFileExplorer

Represents a virtual file explorer that can be used to simulate file system operations in the CodeVideo ecosystem.
Supports file and folder creation, moving, renaming, and deletion.
Even tracks state of new file, new folder, and rename input texts.

#### Constructors

##### new VirtualFileExplorer()

> **new VirtualFileExplorer**(`actions`?, `verbose`?): [`VirtualFileExplorer`](#virtualfileexplorer)

###### Parameters

###### actions?

`FileExplorerAction`[]

###### verbose?

`boolean`

###### Returns

[`VirtualFileExplorer`](#virtualfileexplorer)

#### Methods

##### applyAction()

> **applyAction**(`action`): `void`

###### Parameters

###### action

`FileExplorerAction`

###### Returns

`void`

##### applyActions()

> **applyActions**(`actions`): `void`

Applies a list of actions to the virtual file explorer

###### Parameters

###### actions

`FileExplorerAction`[]

List of actions to apply

###### Returns

`void`

##### applySnapshot()

> **applySnapshot**(`snapshot`): `void`

Applies a snapshot to the virtual file explorer
Useful for restoring the state of the file explorer at a specific point in time

###### Parameters

###### snapshot

`IFileExplorerSnapshot`

###### Returns

`void`

##### getActionsApplied()

> **getActionsApplied**(): `FileExplorerAction`[]

Gets the list of actions applied to the virtual file explorer

###### Returns

`FileExplorerAction`[]

Array of actions applied

##### getCurrentFileExplorerSnapshot()

> **getCurrentFileExplorerSnapshot**(): `IFileExplorerSnapshot`

Gets the current file explorer snapshot

###### Returns

`IFileExplorerSnapshot`

The current file explorer snapshot

##### getCurrentFileStructure()

> **getCurrentFileStructure**(): `IFileStructure`

Gets the current file structure

###### Returns

`IFileStructure`

The current file structure

##### getCurrentFileTree()

> **getCurrentFileTree**(`showEvenIfCollapsed`?): `string`

Gets the current file tree in a string format

###### Parameters

###### showEvenIfCollapsed?

`boolean`

Whether to show collapsed directories in the tree

###### Returns

`string`

String representation of the current file tree

##### getFileContents()

> **getFileContents**(`fileName`): `string`

Gets the contents of a specific file. Changes in the editor are only carried over here until the file is explicitly saved in virtual-ide.

###### Parameters

###### fileName

`string`

Full path to the file

###### Returns

`string`

The content of the file if it exists

##### getFileObjects()

> **getFileObjects**(): `FileItem`[]

Gets all file and directory objects in the current file structure

###### Returns

`FileItem`[]

Array of file and directory objects

##### getFiles()

> **getFiles**(): `string`[]

Gets the list of files in the current directory

###### Returns

`string`[]

Array of file paths in the current directory

##### getFullFilePathsAndContents()

> **getFullFilePathsAndContents**(): `IFileEntry`[]

Gets the full file paths and their contents in the current file structure

###### Returns

`IFileEntry`[]

Array of file paths and their contents

##### getOpenFiles()

> **getOpenFiles**(): `string`[]

Gets the list of currently open files

###### Returns

`string`[]

Array of file paths that are currently open

##### setVerbose()

> **setVerbose**(`verbose`): `void`

Sets the verbose mode for the virtual file explorer

###### Parameters

###### verbose

`boolean`

Whether to enable verbose

###### Returns

`void`

