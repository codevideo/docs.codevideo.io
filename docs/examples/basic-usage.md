---
title: Basic Usage
sidebar_position: 2
---

# Basic Usage

This guide shows you how to get started with CodeVideo libraries.

## Installation

Install the packages you need:

```bash
npm install @codevideo/renderer @codevideo/player
```

## Example

Here's a simple example of how to create a video:

```typescript
import { Renderer, Scene } from '@codevideo/renderer';

// Create a scene
const scene = new Scene();

// Add content to the scene
scene.addText('Hello, CodeVideo!');

// Create a renderer
const renderer = new Renderer();

// Render the scene
renderer.render(scene).then(video => {
  // Save or process the video
  video.save('my-video.mp4');
});
```

## Common Patterns

Here are some common patterns for using the CodeVideo libraries:

### Processing a Code File

```typescript
import { CodeParser } from '@codevideo/renderer';

const parser = new CodeParser();
const codeScene = parser.parseFile('example.js');

renderer.render(codeScene);
```

### Custom Styling

You can customize the appearance of your videos:

```typescript
scene.setTheme({
  background: '#000',
  textColor: '#fff',
  highlightColor: '#ff0'
});
```

## Next Steps

Check out the [API Documentation](/docs/api) for more detailed information on each package.