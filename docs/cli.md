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

Every `author-speak-*` action is turned into speech before recording, with one of two voices:

- **ElevenLabs** (the default): set `ELEVEN_LABS_API_KEY`, and optionally `ELEVEN_LABS_VOICE_ID`. That's all you need: the clips are embedded in the render job. To serve them from your own S3 bucket instead, also set `CODEVIDEO_S3_KEY_ID`, `CODEVIDEO_S3_SECRET`, `CODEVIDEO_S3_BUCKET` and `CODEVIDEO_S3_REGION`. The bucket has to allow public reads on `codevideo/v3/audio/`, because the renderer loads each clip from its URL.
- **Kokoro** (self-hosted, no cloud account): run the codevideo-tts service and set `CODEVIDEO_TTS_PROVIDER=kokoro` and `TTS_SERVICE_URL`. The audio is embedded in the job.

ElevenLabs clips are reused whenever the same line is narrated again with the same voice, so rendering a lesson again doesn't pay for its narration twice. With S3 keys the bucket holds them; without, they're kept in `~/.cache/codevideo/tts`, or the folder `CODEVIDEO_TTS_CACHE_DIR` points to. Set `CODEVIDEO_TTS_CACHE=off` for a fresh take of every clip.

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

While the video renders, one progress bar updates in place. It shows the current stage (narration, starting the browser, recording, encoding), the time so far and the estimated total:

```text
Detected project type: Actions
/> CodeVideo generation in progress...
[==========                ]  38%  Recording · action 4/12 · 0:42 / 1:50
```

and when it's done:

```text
[==========================] 100%  Done · 1:52
✅ CodeVideo successfully generated and saved to CodeVideo-2025-03-21-18-58-47.mp4
```

The estimate starts from the actions themselves (typing speed, pauses, narration length). It's refined as the render runs, from each narration clip's real length and from how fast the browser, ffmpeg and frame capture actually go on your machine.

Videos are saved in the current directory (or `CODEVIDEO_OUTPUT_DIR`) as `CodeVideo-YYYY-MM-DD-HH-MM-SS.mp4` unless you pass `-o`. A lesson renders the same way. A course renders one video per lesson, one lesson after another; leave out `-o` for courses so each lesson keeps its own file.

## Options

| Flag | Default | What it does |
| --- | --- | --- |
| `-p`, `--project` | | Project JSON: an actions array, a lesson or a course |
| `--project-file` | | Read the project JSON from a file instead of `-p` (no size limit; can't be combined with `-p`) |
| `-o`, `--output` | `./CodeVideo-<timestamp>.mp4` | Output file path |
| `-n`, `--orientation` | `landscape` | `landscape` or `portrait` |
| `-r`, `--resolution` | `1080p` | `1080p` or `4K` |
| `-c`, `--config` | | JSON file of `CodeVideoIDE` props (theme, font size, pauses and so on) |
| `--open` | | Open the MP4 when it's done |
| `-v`, `--verbose` | | Also show info log lines (config, TTS provider, log file) above the progress bar |
| `-q`, `--quiet` | | Hide the progress bar and status lines; errors and the saved path still print |
| `--log-level` | `warn` | Most detailed log level to show: `error`, `warn`, `info`, `debug` or `trace`; overrides `-v` |
| `--headed` | | Show the browser instead of running it headless (`-d`/`--debug` still works but is deprecated) |
| `--slack-webhook-url` | | Post progress to a Slack incoming webhook at each stage and every 25% |
| `--progress` | `human` | `json` writes stderr as one JSON object per line, for programs that run the CLI |
| `-V`, `--version` | | Print the version |
| `-m serve` | | Run as a render worker that watches for job manifests, which is how the hosted API renders |

## Output and logs

The progress bar, status lines, warnings and errors go to stderr. The "saved to" line goes to stdout, once per video, so a script can capture it on its own. When stderr isn't a terminal (CI, a pipe, `TERM=dumb`), the bar becomes one plain line at each stage and every 25%:

```text
[ 52%] Recording · action 1/3 · 0:11 / 0:21
```

A course shows an overall bar with one bar per lesson below it. The CLI narrates every lesson first, then renders them in turn:

```text
[============              ]  48%  Starting browser · lesson 2/2 · 0:23 / 0:47
  1 Variables      [================] 100%  Done
  2 Printing valu… [=               ]  12%  Starting browser
```

With `--progress json`, every stderr line is a JSON object instead: progress at each stage, every 25% and at least once a second, such as `{"stage":"Recording","fraction":0.38,"elapsed":42.1,"total":110.4,"detail":"action 4/12"}` (a course's lesson lines add `"lesson"`, counted from 1), then one `{"result":"/absolute/path.mp4"}` per saved video, or `{"error":"...","log":"..."}` if the render failed.

Ctrl-C, or SIGTERM sent to the CLI, stops the render along with its browser and ffmpeg. The CLI prints `Cancelled` and exits with code 130.

Everything else (browser output, ffmpeg, timings) goes to `codevideo.log` in `CODEVIDEO_LOG_DIR`, which always records debug detail. If a render fails, the CLI prints the cause and that file's path.

## What happens during a render

1. The CLI detects the project type (actions, lesson or course).
2. It generates the narration audio and a manifest (`ICodeVideoManifest`).
3. It serves the manifest on port 7000, and a static Next.js site with the `<CodeVideoIDE />` component from `@fullstackcraftllc/codevideo-ide-react` on port 7001.
4. Headless Chrome plays the project on that page while `puppeteer-stream` records it as WebM.
5. FFmpeg converts the recording to MP4 and saves it.
