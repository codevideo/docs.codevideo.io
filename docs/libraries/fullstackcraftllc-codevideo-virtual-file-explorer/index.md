---
title: "@fullstackcraftllc/codevideo-virtual-file-explorer"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-file-explorer"
sidebar_position: 2
---

# @fullstackcraftllc/codevideo-virtual-file-explorer

## Classes

### VirtualFileExplorer

theme_defined_in: [index.js:6](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L6)

Represents a virtual file explorer that can be used to simulate file system operations in the CodeVideo ecosystem.

#### Constructors

##### new VirtualFileExplorer()

> **new VirtualFileExplorer**(`actions`, `verbose`): `VirtualFileExplorer`

theme_defined_in: [index.js:7](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L7)

###### kind_plural_parameter

###### actions

`any`

###### verbose

`any`

###### theme_returns

`VirtualFileExplorer`

#### Properties

##### actionsApplied

> **actionsApplied**: `any[]`

theme_defined_in: [index.js:10](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L10)

##### currentFileStructure

> **currentFileStructure**: `{}`

theme_defined_in: [index.js:9](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L9)

##### openFiles

> **openFiles**: `Set<any>`

theme_defined_in: [index.js:11](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L11)

##### presentWorkingDirectory

> **presentWorkingDirectory**: `string`

theme_defined_in: [index.js:8](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L8)

##### verbose

> **verbose**: `any`

theme_defined_in: [index.js:12](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L12)

#### Methods

##### applyAction()

> **applyAction**(`action`): `void`

theme_defined_in: [index.js:27](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L27)

###### kind_plural_parameter

###### action

`any`

###### theme_returns

`void`

##### applyActions()

> **applyActions**(`actions`): `void`

theme_defined_in: [index.js:22](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L22)

Applies a list of actions to the virtual file explorer

###### kind_plural_parameter

###### actions

`any`

List of actions to apply

###### theme_returns

`void`

##### buildTreeString()

> **buildTreeString**(`structure`, `indent`, `showEvenIfCollapsed`): `string`

theme_defined_in: [index.js:543](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L543)

###### kind_plural_parameter

###### structure

`any`

###### indent

`string` = `""`

###### showEvenIfCollapsed

`boolean` = `true`

###### theme_returns

`string`

##### closeFile()

> **closeFile**(`fileName`): `void`

theme_defined_in: [index.js:581](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L581)

###### kind_plural_parameter

###### fileName

`any`

###### theme_returns

`void`

##### copyDirectory()

> **copyDirectory**(`source`): `{ children: {}; collapsed: any; content: any; type: string }`

theme_defined_in: [index.js:524](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L524)

###### kind_plural_parameter

###### source

`any`

###### theme_returns

`{ children: {}; collapsed: any; content: any; type: string }`

###### children

> **children**: `{}` = `{}`

###### collapsed

> **collapsed**: `any` = `source.collapsed`

###### content

> **content**: `any` = `source.content`

###### type

> **type**: `string` = `'directory'`

##### createDirectoryItem()

> **createDirectoryItem**(): `{ children: {}; collapsed: boolean; content: string; type: string }`

theme_defined_in: [index.js:501](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L501)

###### theme_returns

`{ children: {}; collapsed: boolean; content: string; type: string }`

###### children

> **children**: `{}` = `{}`

###### collapsed

> **collapsed**: `boolean` = `false`

###### content

> **content**: `string` = `''`

###### type

> **type**: `string` = `'directory'`

##### createFileItem()

> **createFileItem**(`path`): `{ caretPosition: { col: number; row: number }; content: string; language: any; type: string }`

theme_defined_in: [index.js:493](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L493)

###### kind_plural_parameter

###### path

`any`

###### theme_returns

`{ caretPosition: { col: number; row: number }; content: string; language: any; type: string }`

###### caretPosition

> **caretPosition**: `{ col: number; row: number }`

###### caretPosition.col

> **col**: `number` = `0`

###### caretPosition.row

> **row**: `number` = `0`

###### content

> **content**: `string` = `''`

###### language

> **language**: `any`

###### type

> **type**: `string` = `'file'`

##### getActionsApplied()

> **getActionsApplied**(): `any[]`

theme_defined_in: [index.js:429](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L429)

Gets the list of actions applied to the virtual file explorer

###### theme_returns

`any[]`

Array of actions applied

##### getCurrentFileStructure()

> **getCurrentFileStructure**(): `{}`

theme_defined_in: [index.js:422](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L422)

Gets the current file structure

###### theme_returns

`{}`

The current file structure

##### getCurrentFileTree()

> **getCurrentFileTree**(`showEvenIfCollapsed`): `string`

theme_defined_in: [index.js:308](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L308)

Gets the current file tree in a string format

###### kind_plural_parameter

###### showEvenIfCollapsed

`boolean` = `true`

Whether to show collapsed directories in the tree

###### theme_returns

`string`

String representation of the current file tree

##### getFileContents()

> **getFileContents**(`fileName`): `any`

theme_defined_in: [index.js:437](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L437)

Gets the contents of a specific file. Changes in the editor are only carried over here until the file is explicitly saved in virtual-ide.

###### kind_plural_parameter

###### fileName

`any`

Full path to the file

###### theme_returns

`any`

The content of the file if it exists

##### getFileExtension()

> **getFileExtension**(`filename`): `any`

theme_defined_in: [index.js:489](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L489)

###### kind_plural_parameter

###### filename

`any`

###### theme_returns

`any`

##### getFileObjects()

> **getFileObjects**(): `any[]`

theme_defined_in: [index.js:386](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L386)

Gets all file and directory objects in the current file structure

###### theme_returns

`any[]`

Array of file and directory objects

##### getFiles()

> **getFiles**(): `any[]`

theme_defined_in: [index.js:315](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L315)

Gets the list of files in the current directory

###### theme_returns

`any[]`

Array of file paths in the current directory

##### getFullFilePathsAndContents()

> **getFullFilePathsAndContents**(): `any[]`

theme_defined_in: [index.js:403](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L403)

Gets the full file paths and their contents in the current file structure

###### theme_returns

`any[]`

Array of file paths and their contents

##### getLsString()

> **getLsString**(): `string`

theme_defined_in: [index.js:334](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L334)

Gets an 'ls' formatted list of files in the current directory

###### theme_returns

`string`

String of folders and files in the current directory in alphabetical order

##### getOpenFiles()

> **getOpenFiles**(): `any[]`

theme_defined_in: [index.js:464](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L464)

Gets the list of currently open files

###### theme_returns

`any[]`

Array of file paths that are currently open

##### getParentDirectory()

> **getParentDirectory**(`path`): `{ name: any; parent: {} }`

theme_defined_in: [index.js:512](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L512)

###### kind_plural_parameter

###### path

`any`

###### theme_returns

`{ name: any; parent: {} }`

###### name

> **name**: `any` = `fileName`

###### parent

> **parent**: `{}` = `current`

##### getPathComponents()

> **getPathComponents**(`path`): `any`

theme_defined_in: [index.js:509](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L509)

###### kind_plural_parameter

###### path

`any`

###### theme_returns

`any`

##### getPresentWorkingDirectory()

> **getPresentWorkingDirectory**(): `string`

theme_defined_in: [index.js:300](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L300)

Gets the present working directory

###### theme_returns

`string`

The present working directory

##### openFile()

> **openFile**(`fileName`): `void`

theme_defined_in: [index.js:566](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L566)

###### kind_plural_parameter

###### fileName

`any`

###### theme_returns

`void`

##### resolvePath()

> **resolvePath**(`path`): `any`

theme_defined_in: [index.js:481](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L481)

###### kind_plural_parameter

###### path

`any`

###### theme_returns

`any`

##### setPresentWorkingDirectory()

> **setPresentWorkingDirectory**(`path`): `void`

theme_defined_in: [index.js:474](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L474)

###### kind_plural_parameter

###### path

`any`

###### theme_returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

theme_defined_in: [index.js:471](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-file-explorer/package/dist/index.js#L471)

Sets the verbose mode for the virtual file explorer

###### kind_plural_parameter

###### verbose

`any`

Whether to enable verbose

###### theme_returns

`void`
}

