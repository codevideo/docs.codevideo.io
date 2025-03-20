---
title: "Video Quick Start"
sidebar_label: "CodeVideo CLI Quick Start"
slug: /quick-start
sidebar_position: 1
---

# Video Quick Start

**We highly recommend you quickly read concepts in [the overview section](/docs/overview) before starting here.**

This guide shows you how to get started generating videos with the CodeVideo CLI.

## Installation

Install the CLI package:

```bash
npm install @fullstackcraftllc/codevideo-cli
```

Pass valid actions via `-a` and specify an output file with `-o`:

```bash
codevideo -a '[{"name":"author-speak-before","value":"Let's learn how to use the print function in Python!"},{"name":"author-speak-before","value":"First, let's make a Python file."},{"name":"file-explorer-create-file","value":"main.py"}]' -o 'codevideo.mp4'
```

(To see the full list of options for our CLI tool, please visit [https://codevideo].)

While your video is being generated, you should see the progress in the terminal:

```bash
/> CodeVideo generation in progress...
[=======                         ] 33%
```

Wait while your video is generated.

Upon completion, you should see the following message:

```bash
/> CodeVideo generation in progress...
[================================] 100%
✅ CodeVideo saved to codevideo.mp4
```

You'll find the `codevideo.mp4` file in the root of the CodeVideo CLI repository.

Enjoy!