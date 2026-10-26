---
title: "@fullstackcraftllc/codevideo-virtual-terminal"
sidebar_label: "@fullstackcraftllc/codevideo-virtual-terminal"
sidebar_position: 4
---

# @fullstackcraftllc/codevideo-virtual-terminal

## Classes

### VirtualTerminal

Represents a virtual terminal that can be interacted with
via a series of actions. The terminal maintains a command
history and a current command that can be modified.
The terminal also maintains a caret position that can be
moved around the current command.
Finally, the terminal is also responsible for it's entire own buffer, for easy rendering in UIs.

#### Constructors

##### new VirtualTerminal()

> **new VirtualTerminal**(`initialCommand`?, `actions`?, `verbose`?): [`VirtualTerminal`](#virtualterminal)

###### Parameters

###### initialCommand?

`string`

###### actions?

`TerminalAction`[]

###### verbose?

`boolean`

###### Returns

[`VirtualTerminal`](#virtualterminal)

#### Methods

##### applyAction()

> **applyAction**(`action`): `string`

Applies a single action to the virtual terminal

###### Parameters

###### action

`TerminalAction`

The action to apply

###### Returns

`string`

The current command after applying the action

##### applyActions()

> **applyActions**(`actions`): `string`

Applies a series of actions to the virtual terminal

###### Parameters

###### actions

`TerminalAction`[]

The actions to apply

###### Returns

`string`

The current command after applying the actions

##### getActionsApplied()

> **getActionsApplied**(): `TerminalAction`[]

Returns the actions applied to the virtual terminal

###### Returns

`TerminalAction`[]

The actions applied to the virtual terminal

##### getBuffer()

> **getBuffer**(): `string`[]

Returns the buffer of the virtual terminal

###### Returns

`string`[]

The buffer of the virtual terminal

##### getCommandHistory()

> **getCommandHistory**(): `string`[]

Returns the command history of the virtual terminal

###### Returns

`string`[]

The command history of the virtual terminal

##### getCurrentCaretPosition()

> **getCurrentCaretPosition**(): `number`

Returns the current caret position of the virtual terminal

###### Returns

`number`

The current caret position of the virtual terminal

##### getCurrentCommand()

> **getCurrentCommand**(): `string`

Returns the current state of the virtual terminal

###### Returns

`string`

The current state of the virtual terminal

##### getPresentWorkingDirectory()

> **getPresentWorkingDirectory**(): `string`

Returns the present working directory of the virtual terminal

###### Returns

`string`

The present working directory of the virtual

##### getPrompt()

> **getPrompt**(): `string`

Returns the prompt of the virtual terminal

###### Returns

`string`

The prompt of the virtual terminal

##### setValuesFromTerminal()

> **setValuesFromTerminal**(`terminal`): `void`

TODO: the ITerminal interface differs wildly from the virtual terminal class. but perhaps this is okay since reconstitution from state may only need the content...
Sets the values of the virtual terminal from a terminal object

###### Parameters

###### terminal

`ITerminal`

The terminal object to set the values from

###### Returns

`void`

##### setVerbose()

> **setVerbose**(`verbose`): `void`

Sets the verbose mode for the virtual terminal

###### Parameters

###### verbose

`boolean`

Whether to enable verbose

###### Returns

`void`

