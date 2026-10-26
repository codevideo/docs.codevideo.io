---
title: API Quick Start
sidebar_label: Quick Start
slug: /
sidebar_position: 1
description: Turn a JSON list of actions into a narrated coding video with one request to the CodeVideo API.
---

{/* Keep in sync with codevideo.io src/components/pages/home/ApiQuickStartSection.tsx and studio.codevideo.io src/components/pages/account/components/ApiQuickStart.tsx */}

# API Quick Start

Turn a JSON list of actions into a narrated coding video with one request.

1. **Get an API key.** In [CodeVideo Studio](https://studio.codevideo.io/account), open Account → API Access and generate a key. Copy it right away; it's shown once. New accounts get 50 free tokens, and each video costs 10.
2. **Send your actions.** POST them to `https://api.codevideo.io/create-video-v3` with your key in the `x-api-key` header.
3. **Get your video.** The API replies once the job is queued, and we email you a link to the MP4 when rendering finishes.

```bash
export CODEVIDEO_API_KEY="cvk_your_key_here"

curl -X POST https://api.codevideo.io/create-video-v3 \
  -H "Content-Type: application/json" \
  -H "x-api-key: $CODEVIDEO_API_KEY" \
  -d '{
    "project": [
      { "name": "author-speak-before", "value": "Here is how to log a value in JavaScript." },
      { "name": "file-explorer-create-file", "value": "index.js" },
      { "name": "file-explorer-open-file", "value": "index.js" },
      { "name": "editor-type", "value": "console.log(1 + 1);" },
      { "name": "author-speak-before", "value": "Run it and you will see 2 in the console." }
    ]
  }'
```

Response:

```json
{"message":"Video generation enqueued successfully"}
```

## Next steps

- [API reference](/api): request options, errors, tokens and limits.
- [CLI](/cli): render videos on your own machine instead of through the API.
- [Overview](/overview): how actions, lessons and courses fit together.
