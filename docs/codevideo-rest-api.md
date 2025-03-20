---
title: "CodeVideo REST API"
sidebar_label: "CodeVideo REST API"
slug: /codevideo-rest-api
sidebar_position: 2
---

# CodeVideo REST API

This guide shows you how to get started with the video generation API with CodeVideo.

As of March 2025, the V3 video generation API process is essentially a job-based puppeteer stream recorder. From a high level:

1. A static Gatsby server runs with port 7001 exposed with a pre-configured `@fullstackcraftllc/codevideo-ide-react` component (`<CodeVideoIDE />`)
2. An Express server runs with port 7000 exposed waiting for requests
2. A POST request is sent to the Express server at `create-video-v3` with the actions
3. The Express server generates audio for each speaking step in the actions, then a manifest file
4. These manifest files are then detected by the go service and the video job is started:
    - the manifest is read by the go service
    - the puppeteer stream is launched via the UUID in the manifest
    - the puppeteer stream is recorded and saved to a file
    - the go microservice sends the email to the corresponding user id (also in the manifest)

While the V3 endpoint can only accept actions as the POST body, we intend to expose as many configuration values as possible (editor theme, font size, mouse color, text to speech engine and voice ID, etc. etc.) to add as much flexibility as possible to the video generation process.
