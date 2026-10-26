---
title: "CodeVideo CLI"
sidebar_label: "CLI"
slug: /cli
sidebar_position: 5
---

# CodeVideo CLI

**We highly recommend you quickly read concepts in [the overview section](/overview) before starting here.**

This guide shows you how to get started generating videos with the CodeVideo CLI.

## Installation

Install the CLI package:

```bash
go get github.com/codevideo/codevideo-cli@v0.0.1
```

Pass a project in (Actions, Lesson, or Course) via `-p`:

```bash
go run main.go -p "[{\"name\":\"author-speak-before\",\"value\":\"Let's learn how to use the print function in Python!\"},{\"name\":\"author-speak-before\",\"value\":\"First, let's make a Python file.\"},{\"name\":\"file-explorer-create-file\",\"value\":\"main.py\"},{\"name\":\"file-explorer-open-file\",\"value\":\"main.py\"},{\"name\":\"author-speak-before\",\"value\":\"and let's print 'Hello world!' to the console.\"},{\"name\":\"editor-type\",\"value\":\"print('Hello, world!')\"}]"
```

The `codevideo` command internally does the following: 

1. Detects what type of project you have passed in (Actions, Lesson, or Course)
2. Generates a manifest (of type `ICodeVideoManifest`)
3. Serves a file server at port 7000
4. Serves a static gatsby site using `@fullstackcraft/codevideo-ide-react` (i.e. the `<CodeVideoIDE />` component) at 7001
5. Uses `puppeteer-stream` to record in headless chromium the video at that gatsby site, pointing to your found in your project in webm format
6. Converts the webm video to mp4 format using `ffmpeg`
7. Saves the video to the root of your project

(To see the full list of options for our CLI tool, please visit [https://github.com/codevideo/codevideo-cli].)

While your video is being generated, you should see the progress in the terminal:

```bash
Detected project type: Actions
/> CodeVideo generation in progress...
[=======                         ] 33%
```

Upon completion, you should see the following message:

```bash
Detected project type: Actions
/> CodeVideo generation in progress...
[================================] 100%
✅ CodeVideo saved to codevideo.mp4
```

This looks the same for a Lesson project. By default, videos are saved in the root with the format CodeVideo-YYYY-MM-DD-HH-MM-SS.mp4.

For a Course, the CLI converts each lesson to a separate video in parallel, as resources allow:

```bash
Detected project type: Course
Found 15 lessons
/> CodeVideo generation in progress...
Lesson 1 [===============                 ] 52%
Lesson 2 [============                    ] 41%
Lesson 3 [=======                         ] 29%
Lesson 4 [=====                           ] 25%
Lesson 5 [=====                           ] 24%
Lesson 6 [====                            ] 20%
Lesson 7 [===                             ] 18%
Lesson 8 [=                               ] 3%
Lesson 9 [Awaiting resources...           ] 0%
Lesson 10 [Awaiting resources...          ] 0%
Lesson 11 [Awaiting resources...          ] 0%
Lesson 12 [Awaiting resources...          ] 0%
Lesson 13 [Awaiting resources...          ] 0%
Lesson 14 [Awaiting resources...          ] 0%
Lesson 15 [Awaiting resources...          ] 0%
```

By default, lesson videos are saved in the root with the format CodeVideo-YYYY-MM-DD-HH-MM-SS-lesson-X.mp4.


Enjoy!