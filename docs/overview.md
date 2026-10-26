---
title: "CodeVideo Overview"
sidebar_label: "Overview"
slug: /overview
sidebar_position: 4
---

# Overview

**IMPORTANT! This documentation includes important concepts which if you don't read, will quickly lead you to frustration and confusion.**

## CodeVideo Essentials

### Actions

Everything in the CodeVideo framework is based on actions. In Typescript, an action is defined as the following:

```typescript
export interface IAction {
  name: AllActions;
  value: string;
}
```

(See the latest definition [on the CodeVideo types repository](https://github.com/codevideo/codevideo-types/blob/main/src/interfaces/IAction.ts).)

`AllActions` is the union of every action name. Names are hyphenated and start with their domain:

- `author-`: what the narrator says, and pauses
- `editor-`: typing, keystrokes and selection in the editor
- `file-explorer-`: creating, opening, renaming and deleting files and folders
- `mouse-`: moving the mouse and clicking
- `terminal-`: typing in the terminal and setting its output
- `external-`: showing a web page or a live preview
- `slide-`: showing a Markdown slide
- `composite-`: shortcuts that expand into several actions

Every action, with what its value means, is listed on the [Actions](/actions) page.

### Actions as JSON

A JSON example of a few speaking actions, creating and opening a file, and typing into the editor looks like this:

```json
[
  {
    "name": "author-speak-before",
    "value": "Let's learn how to use the print function in Python!"
  },
  {
    "name": "author-speak-before",
    "value": "First, let's make a Python file."
  },
  {
    "name": "file-explorer-create-file",
    "value": "main.py"
  },
  {
    "name": "file-explorer-open-file",
    "value": "main.py"
  },
  {
    "name": "author-speak-before",
    "value": "and let's print 'Hello world!' to the console."
  },
  {
    "name": "editor-type",
    "value": "print('Hello, world!')"
  }
]
```

(You can go paste this into the JSON editor in the [CodeVideo Studio](https://studio.codevideo.io) to see what it looks like.)

In summary: a list of actions and their corresponding JSON represents the most portable format in the CodeVideo framework. This also happens to be the format that is sent to the [CodeVideo API](/api) to generate videos.