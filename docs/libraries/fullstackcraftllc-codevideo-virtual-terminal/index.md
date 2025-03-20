---
title: "@fullstackcraftllc/codevideo-virtual-terminal"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-terminal"
sidebar_position: 4
---

# @fullstackcraftllc/codevideo-virtual-terminal

## Classes

### VirtualTerminal

theme_defined_in: [index.js:11](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L11)

Represents a virtual terminal that can be interacted with
via a series of actions. The terminal maintains a command
history and a current command that can be modified.
The terminal also maintains a caret position that can be
moved around the current command.
Finally, the terminal is also responsible for it's entire own buffer, for easy rendering in UIs.

#### Constructors

##### new VirtualTerminal()

> **new VirtualTerminal**(`initialCommand`, `actions`, `verbose`): `VirtualTerminal`

theme_defined_in: [index.js:12](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L12)

###### kind_plural_parameter

###### initialCommand

`any`

###### actions

`any`

###### verbose

`any`

###### theme_returns

`VirtualTerminal`

#### Properties

##### actionsApplied

> **actionsApplied**: `any[]`

theme_defined_in: [index.js:19](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L19)

##### bufferLines

> **bufferLines**: `string[]`

theme_defined_in: [index.js:21](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L21)

##### caretPosition

> **caretPosition**: `any`

theme_defined_in: [index.js:15](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L15)

##### commandHistory

> **commandHistory**: `any[]`

theme_defined_in: [index.js:17](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L17)

##### currentCommand

> **currentCommand**: `any`

theme_defined_in: [index.js:16](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L16)

##### historyIndex

> **historyIndex**: `number`

theme_defined_in: [index.js:18](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L18)

##### presentWorkingDirectory

> **presentWorkingDirectory**: `string`

theme_defined_in: [index.js:13](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L13)

##### prompt

> **prompt**: `string`

theme_defined_in: [index.js:14](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L14)

##### verbose

> **verbose**: `any`

theme_defined_in: [index.js:20](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L20)

#### Methods

##### addLinesToBufferLines()

> **addLinesToBufferLines**(`content`): `void`

theme_defined_in: [index.js:219](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L219)

###### kind_plural_parameter

###### content

`any`

###### theme_returns

`void`

##### applyAction()

> **applyAction**(`action`): `any`

theme_defined_in: [index.js:49](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L49)

Applies a single action to the virtual terminal

###### kind_plural_parameter

###### action

`any`

The action to apply

###### theme_returns

`any`

The current command after applying the action

##### applyActions()

> **applyActions**(`actions`): `any`

theme_defined_in: [index.js:38](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L38)

Applies a series of actions to the virtual terminal

###### kind_plural_parameter

###### actions

`any`

The actions to apply

###### theme_returns

`any`

The current command after applying the actions

##### getActionsApplied()

> **getActionsApplied**(): `any[]`

theme_defined_in: [index.js:188](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L188)

Returns the actions applied to the virtual terminal

###### theme_returns

`any[]`

The actions applied to the virtual terminal

##### getBuffer()

> **getBuffer**(): `string[]`

theme_defined_in: [index.js:209](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L209)

Returns the buffer of the virtual terminal

###### theme_returns

`string[]`

The buffer of the virtual terminal

##### getCommandHistory()

> **getCommandHistory**(): `any[]`

theme_defined_in: [index.js:174](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L174)

Returns the command history of the virtual terminal

###### theme_returns

`any[]`

The command history of the virtual terminal

##### getCurrentCaretPosition()

> **getCurrentCaretPosition**(): `any`

theme_defined_in: [index.js:181](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L181)

Returns the current caret position of the virtual terminal

###### theme_returns

`any`

The current caret position of the virtual terminal

##### getCurrentCommand()

> **getCurrentCommand**(): `any`

theme_defined_in: [index.js:167](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L167)

Returns the current state of the virtual terminal

###### theme_returns

`any`

The current state of the virtual terminal

##### getPresentWorkingDirectory()

> **getPresentWorkingDirectory**(): `string`

theme_defined_in: [index.js:202](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L202)

Returns the present working directory of the virtual terminal

###### theme_returns

`string`

The present working directory of the virtual

##### getPrompt()

> **getPrompt**(): `string`

theme_defined_in: [index.js:195](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L195)

Returns the prompt of the virtual terminal

###### theme_returns

`string`

The prompt of the virtual terminal

##### setPresentWorkingDirectory()

> **setPresentWorkingDirectory**(`presentWorkingDirectory`): `void`

theme_defined_in: [index.js:226](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L226)

###### kind_plural_parameter

###### presentWorkingDirectory

`any`

###### theme_returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

theme_defined_in: [index.js:216](https://github.com/codevideo/docs.codevideo.io/blob/70d4f7dbb08a35fa96caa0010eab126cf01f007c/temp_packages/fullstackcraftllc-codevideo-virtual-terminal/package/dist/index.js#L216)

Sets the verbose mode for the virtual terminal

###### kind_plural_parameter

###### verbose

`any`

Whether to enable verbose

###### theme_returns

`void`
}

