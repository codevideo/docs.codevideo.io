---
title: "CodeVideo REST API"
sidebar_label: "API reference"
slug: /api
sidebar_position: 2
description: Endpoint, authentication, request options, errors, tokens and limits of the CodeVideo video API.
---

# CodeVideo REST API

The API turns a CodeVideo project into a narrated MP4. You send the project once; the video renders in the background and we email you a link to it. For a first request, start with the [Quick Start](/).

## Base URL and authentication

```text
https://api.codevideo.io
```

Every request needs an API key. Create one in [CodeVideo Studio](https://studio.codevideo.io/account) under Account → API Access. Keys start with `cvk_` and are shown only once, so store yours somewhere safe. Send it in the `x-api-key` header:

```bash
-H "x-api-key: $CODEVIDEO_API_KEY"
```

`Authorization: Bearer cvk_...` works too. A key spends the tokens of the account that created it, and you can revoke it in Studio at any time.

## Create a video

```text
POST /create-video-v3
Content-Type: application/json
```

### Request body

| Field | Required | Description |
| --- | --- | --- |
| `project` | yes | An array of actions, a lesson or a course |
| `options` | no | Rendering options, see [below](#options) |

`project` can be:

- **An array of actions.** Each action is `{ "name": "<action name>", "value": "<string>" }`; the [Actions](/actions) page lists every name.
- **A lesson:** `{ "id", "name", "description", "actions": [...] }`, with string `id`, `name` and `description`.
- **A course:** `{ "id", "name", "description", "primaryLanguage", "lessons": [...] }`, where each lesson has the shape above. A course renders as a single video of every lesson's actions, in order.

Only the actions are rendered; a lesson's or course's snapshots are ignored. Older clients that send `actions` instead of `project` still work.

### Options

Every option is optional. Unknown keys are ignored, and a known key with the wrong type is rejected with a `400`.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `theme` | `"light"` or `"dark"` | | Color theme of the IDE and editor |
| `withCaptions` | boolean | | Show the narration as captions |
| `isFileExplorerVisible` | boolean | `true` | Show the file explorer pane |
| `isTerminalVisible` | boolean | `true` | Show the terminal pane |
| `isEditorTabsVisible` | boolean | `true` | Show the editor tab bar and its filenames |
| `isMinimapVisible` | boolean | `true` | Show the editor minimap |
| `isMouseVisible` | boolean | `true` | Draw the mouse cursor. When it's hidden, mouse actions keep their timing and effects |
| `wordWrap` | `"on"` or `"off"` | `"on"` | Wrap long lines on screen, without changing the code |
| `orientation` | `"landscape"` or `"portrait"` | `"landscape"` | Video orientation. Portrait renders at 1080×1920 |
| `fontSizePx` | number | | Base font size of the editor and IDE, in pixels |
| `fileExplorerWidth` | number | | Width of the file explorer, in pixels |
| `terminalHeight` | number | | Height of the terminal, in pixels |
| `mouseColor` | string | | CSS color of the mouse cursor |
| `keyboardTypingPauseMs` | number | `50` | Delay between simulated keystrokes, in milliseconds |
| `standardPauseMs` | number | `1000` | Pause for mouse moves, file operations and scrolling, in milliseconds |
| `longPauseMs` | number | `5000` | Pause for slide and external display steps, in milliseconds |
| `defaultLanguage` | string | | Editor language before a file is opened (afterwards it follows the file extension) |

Numbers must be greater than zero.

```bash
curl -X POST https://api.codevideo.io/create-video-v3 \
  -H "Content-Type: application/json" \
  -H "x-api-key: $CODEVIDEO_API_KEY" \
  -d '{
    "project": [
      { "name": "author-speak-before", "value": "Here is how to log a value in JavaScript." },
      { "name": "file-explorer-create-file", "value": "index.js" },
      { "name": "file-explorer-open-file", "value": "index.js" },
      { "name": "editor-type", "value": "console.log(1 + 1);" }
    ],
    "options": { "theme": "light", "withCaptions": true, "isTerminalVisible": false }
  }'
```

For a portrait video, hide the panes that don't fit a narrow screen:

```json
"options": {
  "orientation": "portrait",
  "isFileExplorerVisible": false,
  "isEditorTabsVisible": false,
  "isMinimapVisible": false,
  "isMouseVisible": false,
  "wordWrap": "on"
}
```

### Response

```json
{ "message": "Video generation enqueued successfully" }
```

The response comes back once the narration has been generated and the job is queued, which can take a while for long scripts. When rendering finishes, we email the MP4 link to the address on your CodeVideo account. There's no job ID, status endpoint or webhook yet.

## Errors

Errors come back as `{ "error": "<message>" }`.

| Status | Message | Fix |
| --- | --- | --- |
| `401` | `Authentication required: send an API key via the x-api-key header, or sign in.` | Add the `x-api-key` header |
| `401` | `Invalid API key` | Check the key, or create a new one in Studio |
| `400` | `You need at least 10 tokens to generate a video.` | Buy tokens or upgrade your plan in Studio |
| `400` | `No actions found in request. ...` | Send a non-empty `project` |
| `400` | `Only a maximum of 250 actions is allowed for pay-as-you-go customers. ...` | Split the project or upgrade your plan |
| `400` | `options.<name> must be ...` | Fix the named option |

## Tokens and limits

- Each video costs **10 tokens**. The API checks your balance when you call it and deducts the tokens once the video is delivered. New accounts start with 50 free tokens.
- Pay-as-you-go accounts can render up to 250 actions per video.
- Request bodies are limited to 100 KB of JSON, and requests time out after 300 seconds.

## How a job runs

1. The API checks your key and token balance, and validates the project and options.
2. It generates the narration for every `author-speak-*` action and writes a render manifest.
3. A worker running the [CodeVideo CLI](/cli) in serve mode picks the manifest up and records the project in headless Chrome.
4. The finished MP4 is uploaded, and the link is emailed to you.
