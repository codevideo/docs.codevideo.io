---
title: "CodeVideo MCP Server"
sidebar_label: "MCP Server"
slug: /mcp
sidebar_position: 6
description: Let an AI assistant write, check and render CodeVideo courses with the CodeVideo MCP server.
---

# CodeVideo MCP Server

The CodeVideo MCP server lets an AI assistant such as Claude or Codex write complete CodeVideo courses for you. The assistant writes the [actions](/actions). The server stores the course on your machine, checks every lesson against the virtual IDE, verifies the code each lesson ends with, and renders the videos with the [CLI](/cli). The source is on [GitHub](https://github.com/codevideo/codevideo-mcp), and the package is [`@fullstackcraftllc/codevideo-mcp`](https://www.npmjs.com/package/@fullstackcraftllc/codevideo-mcp) on npm.

## Requirements

- Node.js 22.13 or newer.
- For videos, Chrome or Chromium and FFmpeg. The MCP installs the matching CLI for you; `npx @fullstackcraftllc/codevideo-cli doctor` checks the rest.
- A narration provider. The MCP renders through the CLI, so narration is set up the same way: see [Narration](/cli#narration).

## Connect it to your assistant

The examples below use the self-hosted Kokoro voice. For ElevenLabs, pass `ELEVEN_LABS_API_KEY` instead of the two Kokoro ones, plus any other [Narration](/cli#narration) variables you use, such as your own S3 bucket.

### Claude Code

```bash
claude mcp add codevideo -e CODEVIDEO_TTS_PROVIDER=kokoro -e TTS_SERVICE_URL=http://localhost:3000 -- npx -y @fullstackcraftllc/codevideo-mcp@latest
```

### Claude Desktop

Add the server under `mcpServers` in `claude_desktop_config.json`, then restart Claude Desktop:

```json
{
  "mcpServers": {
    "codevideo-mcp": {
      "command": "npx",
      "args": ["-y", "@fullstackcraftllc/codevideo-mcp@latest"],
      "env": {
        "CODEVIDEO_TTS_PROVIDER": "kokoro",
        "TTS_SERVICE_URL": "http://localhost:3000"
      }
    }
  }
}
```

### Codex

Add it to `~/.codex/config.toml`, then restart Codex or open a new thread:

```toml
[mcp_servers.codevideo]
command = "npx"
args = ["-y", "@fullstackcraftllc/codevideo-mcp@latest"]
startup_timeout_sec = 60
env_vars = ["CODEVIDEO_TTS_PROVIDER", "TTS_SERVICE_URL", "ELEVEN_LABS_API_KEY", "ELEVEN_LABS_VOICE_ID", "CODEVIDEO_S3_KEY_ID", "CODEVIDEO_S3_SECRET", "CODEVIDEO_S3_BUCKET", "CODEVIDEO_S3_REGION"]
```

## How a course gets built

Ask your assistant for a course, for example "a three-lesson course that builds a to-do list CLI in Go". The course lives in the MCP, so the assistant writes each lesson's actions once and never has to carry earlier lessons around:

1. `codevideo_instructions_to_build_course_from_scratch` gives it the workflow and the authoring rules.
2. `codevideo_create_course` creates the course and `codevideo_add_lesson` adds lessons. Each lesson continues from where the previous one ended.
3. `codevideo_set_lesson_actions` stores a lesson's actions; `codevideo_edit_lesson_actions` changes part of a lesson later.
4. `codevideo_compile_lesson` verifies a lesson's code, and `codevideo_validate_course` checks the whole course.
5. `codevideo_generate_course_previews` writes an HTML page per lesson to look over, and `codevideo_render_course_videos` renders every lesson.

The server holds lessons to a few rules, and says what to do instead when one is broken:

- Files and folders are made on screen, with the mouse (right-click, New File) or with `touch` and `mkdir` in the terminal, so they never just appear in the video.
- Every lesson opens with narration.
- Files are saved with `editor-save` before verification, which only reads saved files.

## Verification

`codevideo_compile_lesson` replays a lesson from its starting point and checks the projects in its saved files, offline. Each project gets one of four outcomes:

| Outcome | Meaning |
| --- | --- |
| `passed` | The check ran and found nothing wrong. |
| `failed` | The code or its configuration has errors. |
| `blocked` | Something the check needs is missing, such as a compiler or a package's type declarations. Verification never installs anything. |
| `unsupported` | There is no check for this kind of project yet. |

Python gets a syntax check, TypeScript and JavaScript a type check, and Go and C# an offline build. Rust isn't supported yet.

`codevideo_validate_course` returns `done: true` only when the final lesson and every lesson marked `mustCompile` pass, and previews and videos wait for that. A lesson added with `mustCompile: false` can keep deliberate errors, for example to show what a compiler error looks like.

The red squiggles a video can show come from the editor's own TypeScript checker. They are for the viewer and don't count as verification: see [TypeScript squiggles](/actions#typescript-squiggles).

## Rendering videos

Every video tool queues a render job and returns a `jobId` straight away. A background worker renders one video at a time and keeps going if you close your assistant. `codevideo_get_render_job` and `codevideo_list_render_jobs` show where jobs stand, and `codevideo_cancel_render_job` stops them. Videos are saved to `CODEVIDEO_OUTPUT_DIR`, or your Desktop.

The video tools all take the same `options`:

| Option | Values |
| --- | --- |
| `orientation` | `landscape` (default) or `portrait` (1080×1920) |
| `theme` | `dark` or `light` |
| `isFileExplorerVisible`, `isTerminalVisible`, `isEditorTabsVisible`, `isMinimapVisible`, `isMouseVisible`, `withCaptions` | `true` or `false`; for portrait, usually hide the explorer, tabs, minimap and mouse |
| `isDiagnosticsVisible` | `true` or `false`: TypeScript squiggles from the start. Lessons can also turn them on and off with `editor-show-diagnostics` and `editor-hide-diagnostics`. |
| `fontSizePx`, `fileExplorerWidth`, `terminalHeight`, `mouseColor`, `wordWrap`, `defaultLanguage` | IDE layout |
| `keyboardTypingPauseMs`, `standardPauseMs`, `longPauseMs` | pacing |
| `voiceId`, `ttsProvider` | narration voice and provider |
| `renderMode` | `realtime` (default) or `deterministic`; `renderSeed` and `renderWorkers` (1–32) apply to deterministic renders |

They also take `open`, which opens the finished video in your default player. It's on by default for single videos and off for whole courses.

## Where your data lives

Everything is under `~/.codevideo/`, or the folder `CODEVIDEO_HOME` points to:

- `codevideo.db`: courses, lessons and the render queue.
- `jobs/`: each render's project, settings and logs.
- `exports/`: course exports from `codevideo_export_course`.
- `previews/`: lesson previews.

## Known limits

- A lesson that imports an npm package can only pass verification when the package's type declarations are available; otherwise it comes back `blocked`.
- A project is passed to the CLI on its command line, so a single lesson is limited to about 120 KiB as JSON (about 30 KB on Windows). The MCP refuses bigger ones with a clear message.

## Tools

The MCP has the following tools, grouped by what they're for.

<!-- mcp-tools:start -->
<!-- Generated from @fullstackcraftllc/codevideo-mcp@1.3.0 by npm run generate-mcp-tools; edit scripts/generate-mcp-tools.mts, not this section. -->

### Build a course

- `codevideo_instructions_to_build_course_from_scratch`: Get step-by-step instructions for building a COMPLETE multi-lesson 'build from scratch' course with the course-store tools (snapshots stay server-side). Use this before authoring a full course.
- `codevideo_create_course`: Create a new course (server-side, returns a courseId). Snapshots and lesson state live in the MCP, not in your context.
- `codevideo_add_lesson`: Add a lesson to a course. By default it continues from the previous lesson's final state (chained server-side). Set mustCompile:false for slideshow/discussion/half-refactor lessons. The reply includes the previous lesson's name and description, for the recap that opens this lesson.
- `codevideo_set_lesson_actions`: Store a lesson's actions, replacing any it had. The server recomputes the lesson's final snapshot and re-chains following lessons. Returns only a small ack (no snapshot). To change part of a lesson later, use codevideo_edit_lesson_actions instead of sending every action again.
- `codevideo_edit_lesson_actions`: Change part of a lesson without re-sending it: each edit removes deleteCount actions at start and inserts the given ones there, like Array.splice. Edits apply in order (each start refers to the actions as the previous edits left them), all or nothing, with one snapshot recompute. Use codevideo_get_lesson_actions to find indices.
- `codevideo_get_lesson_actions`: Read part of a lesson's actions with their indices (default: the first 50), e.g. to find what to change with codevideo_edit_lesson_actions.
- `codevideo_get_lesson_file_tree`: List the file paths present at the END of a lesson (cheap; no file contents, no snapshot).
- `codevideo_get_lesson_file`: Get the contents of ONE file at the END of a lesson (cheap targeted read instead of dumping the whole snapshot).
- `codevideo_compile_lesson`: Replay a lesson and verify its saved end-state projects offline. Returns passed, failed, blocked, or unsupported, with check kinds and actionable issues. Monaco diagnostics are presentation-only; dirty buffers prevent a pass.
- `codevideo_validate_course`: Validate actions, continuity, diagnostic hovers, copy/cut/paste presses that would do nothing, and fresh saved-file project verification. Every mustCompile lesson and the final lesson must have outcome passed; blocked/unsupported/dirty/stale states prevent done:true.
- `codevideo_get_course_status`: Resumable checkpoint view of a course: lessons, action counts, estimated video length per lesson, flags — without pulling any snapshot.
- `codevideo_export_course`: Export the full course (ICourse with snapshots) to a JSON file under ~/.codevideo/exports and return its path. The course itself isn't returned, so it doesn't fill your context.
- `codevideo_generate_lesson_preview`: Generate a server-side HTML preview of a single lesson (open in a browser to eyeball it). Cheap; no video.
- `codevideo_generate_course_previews`: Generate HTML previews for every lesson — GATED: only works once codevideo_validate_course returns done. Use for human review before rendering video.

### Render videos

- `codevideo_render_lesson_video`: Render ONE lesson of a stored course to video: queues a background render job and returns its jobId. GATED: refuses until codevideo_validate_course returns done.
- `codevideo_render_course_videos`: Render every lesson of a stored course to video: queues one background render job per lesson, run one at a time in lesson order. GATED: refuses until codevideo_validate_course returns done. Run only after a human approves the previews.
- `codevideo_get_render_job`: Status of one render job: queued (with how many jobs are ahead), running (with the latest progress line), succeeded (the video exists at outputPath), failed (with the CLI's error), cancelled or interrupted. Includes the last lines of the CLI's log.
- `codevideo_list_render_jobs`: Recent render jobs, newest first (default 20), optionally for one course or in one status.
- `codevideo_cancel_render_job`: Cancel one render job, or every unfinished render job of a course. Queued jobs are dropped; a running one is stopped along with its browser.

### Actions: reference and checks

- `codevideo_get_action_names`: Every CodeVideo action, one per line: what it does and what its value takes. Check the rows for the actions you plan to use.
- `codevideo_validate_actions`: Checks a list of actions: unknown names, values of the wrong kind, and actions lessons can't use, each with what to do instead.
- `codevideo_is_repeatable_action`: Whether an action's value is a repeat count (how many times to press the key or run the step) rather than text. Returns true or false.
- `codevideo_get_example_actions_array_by_keyword`: An example actions array as JSON for a keyword: javascript, js, console log or log; go, golang, golang console log or golang log; python, python console log or python log. Returns an empty string when nothing matches.
- `codevideo_get_example_lesson_by_keyword`: An example lesson as JSON (a Go CLI tool explored from an existing codebase) for the keyword go, golang, explore codebase, existing codebase or go cli tool. Returns an empty string when nothing matches.

### Start from existing code

- `codevideo_get_initial_lesson_state_from_local_repo`: Create an initial lesson state snapshot from a local repository/codebase directory. This captures the file structure and creates an empty lesson template ready for action recording.
- `codevideo_get_initial_lesson_state_from_github_repo`: Create an initial lesson state snapshot from a GitHub repository URL. This fetches the repository content, captures the file structure, and creates an empty lesson template ready for action recording.

### Other formats

- `codevideo_make_markdown_from_actions`: Generate a markdown blog post from CodeVideo actions array. Pass actions array OR use previously stored actions from codevideo_set_current_actions (recommended workflow).
- `codevideo_make_markdown_from_lesson`: Generate a markdown blog post from a complete lesson object. Pass a lesson object OR use previously stored lesson from lesson management tools. This extracts the actions from the lesson and generates markdown.
- `codevideo_make_html_web_page`: Generate an HTML web page from CodeVideo actions. Pass actions array OR use previously stored actions from codevideo_set_current_actions (recommended workflow).

### Translation

- `codevideo_instructions_to_translate_actions`: Generate translation instructions for CodeVideo actions. Pass actions array OR use previously stored actions from codevideo_set_current_actions (recommended workflow).

<details>
<summary>Single lessons (older tools)</summary>

These pass whole lessons and courses back and forth as JSON instead of storing them. They still work, but for new courses use the tools above.

- `codevideo_instructions_to_create_a_course`: Instructions for building a multi-lesson course as one JSON object passed between tool calls (the older flow: codevideo_create_course_with_initial_metadata, then codevideo_add_lesson_to_course per lesson). For new courses prefer the server-side flow in codevideo_instructions_to_build_course_from_scratch.
- `codevideo_instructions_to_create_lesson_actions`: Instructions for writing the actions of a single lesson: the action reference, the authoring rules, and how to store and render the result.
- `codevideo_instructions_to_create_lesson_video`: Instructions for writing a single lesson and rendering it to video, either from an actions array (codevideo_make_video_from_actions) or from a full lesson object with snapshots (codevideo_make_video_from_lesson).
- `codevideo_get_empty_lesson_snapshot`: An empty course snapshot (no files, editors or terminal output) as JSON, to use as the initialSnapshot of a lesson that starts from nothing.
- `codevideo_create_course_with_initial_metadata`: Returns a new course object as JSON (id, name, description, primaryLanguage, no lessons) for the older flow where the course JSON is passed between tool calls. Nothing is stored; the server-side flow uses codevideo_create_course.
- `codevideo_add_lesson_to_course`: Appends a new, empty lesson (id, name, description, an empty initial snapshot) to a course object and returns the updated course as JSON. Nothing is stored; for stored courses use codevideo_add_lesson.
- `codevideo_add_actions_to_lesson`: Sets a lesson object's actions, replacing any it had, and returns the updated lesson as JSON. Nothing is stored; for stored courses use codevideo_set_lesson_actions.
- `codevideo_get_final_lesson_snapshot`: Get the final state snapshot after applying CodeVideo actions. Pass actions array OR use previously stored actions from codevideo_set_current_actions (recommended workflow).
- `codevideo_set_current_actions`: Legacy single-slot store: keep one actions array for later tool calls, so they can run without re-sending it. Every conversation shares this one slot. For courses or several lessons, use codevideo_create_course and the course tools, which keep work apart by id.
- `codevideo_get_current_actions`: Legacy single-slot store: read back the actions stored with codevideo_set_current_actions (shared by every conversation).
- `codevideo_set_current_lesson`: Legacy single-slot store: keep one lesson object for later tool calls, so they can run without re-sending it. Every conversation shares this one slot. For courses or several lessons, use codevideo_create_course and the course tools, which keep work apart by id.
- `codevideo_get_current_lesson`: Legacy single-slot store: read back the lesson stored with codevideo_set_current_lesson (shared by every conversation).
- `codevideo_make_video_from_actions`: Render a video from CodeVideo actions: pass actions, or omit them to use the ones stored with codevideo_set_current_actions. Queues a background render job and returns its jobId at once; follow it with codevideo_get_render_job.
- `codevideo_make_video_from_lesson`: Render a video from a complete lesson object: pass the lesson, or omit it to use the one stored with codevideo_set_current_lesson. Queues a background render job and returns its jobId at once; follow it with codevideo_get_render_job. For lessons in a stored course, use codevideo_render_lesson_video instead.

</details>

<!-- mcp-tools:end -->
