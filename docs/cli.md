---
title: "CodeVideo CLI"
sidebar_label: "CLI"
slug: /cli
sidebar_position: 5
description: Render CodeVideo projects to MP4 on your own machine with the CodeVideo CLI.
---

# CodeVideo CLI

The CLI renders the same projects as the [API](/api), but on your own machine: pass it actions, a lesson or a course, and it writes an MP4. If you haven't yet, read [the overview](/overview) for how those project types fit together.

## Install

The npm package installs the native binary for your operating system and architecture:

```bash
npx @fullstackcraftllc/codevideo-cli doctor
npx @fullstackcraftllc/codevideo-cli install-browser # only when Chrome is not already installed
```

Rendering needs Node.js 20 or newer, Chrome or Chromium, and FFmpeg. `doctor` checks that Chrome, FFmpeg and the native binary are found and that its working directories are writable. Chrome is found through `CODEVIDEO_CHROME_PATH`, the browser installed by `install-browser`, or the usual system locations; FFmpeg through `CODEVIDEO_FFMPEG_PATH`, then your `PATH`.

To build from source instead, follow the [codevideo-cli README](https://github.com/codevideo/codevideo-cli#source-installation): clone the repository, install the `puppeteer-runner` dependencies and a Chrome build, then `go build -o codevideo`.

### Narration

Every `author-speak-*` action is turned into speech before recording. By default the CLI uses ElevenLabs and uploads the audio to S3, so it needs `ELEVEN_LABS_API_KEY` (optionally `ELEVEN_LABS_VOICE_ID`) plus `CODEVIDEO_S3_KEY_ID` and `CODEVIDEO_S3_SECRET`. To avoid cloud accounts, run the self-hosted codevideo-tts service and set `CODEVIDEO_TTS_PROVIDER=kokoro` and `TTS_SERVICE_URL`; the audio is then embedded in the job directly.

The CLI reads these settings from a `.env` file next to its binary, or from the file named by `CODEVIDEO_ENV_FILE`.

## Render a video

Put your project JSON in a file, for example `actions.json`:

```json
[
  { "name": "author-speak-before", "value": "Let's learn how to use the print function in Python!" },
  { "name": "file-explorer-create-file", "value": "main.py" },
  { "name": "file-explorer-open-file", "value": "main.py" },
  { "name": "author-speak-before", "value": "Now let's print Hello, world to the console." },
  { "name": "editor-type", "value": "print('Hello, world!')" }
]
```

and pass it with `-p`:

```bash
npx @fullstackcraftllc/codevideo-cli -p "$(cat actions.json)"
```

Reading the JSON from a file sidesteps shell quoting. (In zsh, a `!` inside a double-quoted string triggers history expansion; `set +o histexpand` turns that off.)

While the video renders you'll see the progress:

```text
Detected project type: Actions
/> CodeVideo generation in progress...
[=======                         ] 33%
```

and when it's done:

```text
✅ CodeVideo successfully generated and saved to CodeVideo-2025-03-21-18-58-47.mp4
```

Videos are saved in the current directory (or `CODEVIDEO_OUTPUT_DIR`) as `CodeVideo-YYYY-MM-DD-HH-MM-SS.mp4` unless you pass `-o`. A lesson renders the same way. A course renders one video per lesson, one lesson after another; leave out `-o` for courses so each lesson keeps its own file.

## Options

| Flag | Default | What it does |
| --- | --- | --- |
| `-p`, `--project` | | Project JSON: an actions array, a lesson or a course |
| `-o`, `--output` | `./CodeVideo-<timestamp>.mp4` | Output file path |
| `-n`, `--orientation` | `landscape` | `landscape` or `portrait` |
| `-r`, `--resolution` | `1080p` | `1080p` or `4K` |
| `-c`, `--config` | | JSON file of `CodeVideoIDE` props (theme, font size, pauses and so on) |
| `--open` | | Open the MP4 when it's done |
| `-v`, `--verbose` | | Verbose logging |
| `-d`, `--debug` | | Show the browser instead of running it headless |
| `-V`, `--version` | | Print the version |
| `-m serve` | | Run as a render worker that watches for job manifests, which is how the hosted API renders |

## What happens during a render

1. The CLI detects the project type (actions, lesson or course).
2. It generates the narration audio and a manifest (`ICodeVideoManifest`).
3. It serves the manifest on port 7000, and a static Gatsby site with the `<CodeVideoIDE />` component from `@fullstackcraftllc/codevideo-ide-react` on port 7001.
4. Headless Chrome plays the project on that page while `puppeteer-stream` records it as WebM.
5. FFmpeg converts the recording to MP4 and saves it.
