// Writes the tool reference in docs/mcp.md from what the MCP server itself
// reports, so the page matches a real release. Run it after publishing the MCP:
//
//   npm run generate-mcp-tools                            the latest published version
//   npm run generate-mcp-tools -- 1.2.0                   a specific published version
//   npm run generate-mcp-tools -- --local ../codevideo-mcp   a local build (dist/index.js)
//
// It isn't part of the site build: starting the MCP needs network for npx and
// Node 22.13 or newer.
import { execFileSync, spawn } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

const PACKAGE = '@fullstackcraftllc/codevideo-mcp';
const PAGE = path.join(import.meta.dirname, '..', 'docs', 'mcp.md');
const START = '<!-- mcp-tools:start -->';
const END = '<!-- mcp-tools:end -->';

// The page's groups, in order. A tool the server lists that isn't named here
// ends up under "Other tools", with a warning, so new tools get a home.
const GROUPS: Array<{ title: string; intro?: string; collapsed?: boolean; tools: string[] }> = [
  {
    title: 'Build a course',
    tools: [
      'codevideo_instructions_to_build_course_from_scratch',
      'codevideo_create_course',
      'codevideo_add_lesson',
      'codevideo_set_lesson_actions',
      'codevideo_edit_lesson_actions',
      'codevideo_get_lesson_actions',
      'codevideo_get_lesson_file_tree',
      'codevideo_get_lesson_file',
      'codevideo_compile_lesson',
      'codevideo_validate_course',
      'codevideo_get_course_status',
      'codevideo_export_course',
      'codevideo_generate_lesson_preview',
      'codevideo_generate_course_previews',
    ],
  },
  {
    title: 'Render videos',
    tools: [
      'codevideo_render_lesson_video',
      'codevideo_render_course_videos',
      'codevideo_get_render_job',
      'codevideo_list_render_jobs',
      'codevideo_cancel_render_job',
    ],
  },
  {
    title: 'Actions: reference and checks',
    tools: [
      'codevideo_get_action_names',
      'codevideo_validate_actions',
      'codevideo_is_repeatable_action',
      'codevideo_get_example_actions_array_by_keyword',
      'codevideo_get_example_lesson_by_keyword',
    ],
  },
  {
    title: 'Start from existing code',
    tools: ['codevideo_get_initial_lesson_state_from_local_repo', 'codevideo_get_initial_lesson_state_from_github_repo'],
  },
  {
    title: 'Other formats',
    tools: ['codevideo_make_markdown_from_actions', 'codevideo_make_markdown_from_lesson', 'codevideo_make_html_web_page'],
  },
  {
    title: 'Translation',
    tools: ['codevideo_instructions_to_translate_actions'],
  },
  {
    title: 'Single lessons (older tools)',
    intro: 'These pass whole lessons and courses back and forth as JSON instead of storing them. They still work, but for new courses use the tools above.',
    collapsed: true,
    tools: [
      'codevideo_instructions_to_create_a_course',
      'codevideo_instructions_to_create_lesson_actions',
      'codevideo_instructions_to_create_lesson_video',
      'codevideo_get_empty_lesson_snapshot',
      'codevideo_create_course_with_initial_metadata',
      'codevideo_add_lesson_to_course',
      'codevideo_add_actions_to_lesson',
      'codevideo_get_final_lesson_snapshot',
      'codevideo_set_current_actions',
      'codevideo_get_current_actions',
      'codevideo_set_current_lesson',
      'codevideo_get_current_lesson',
      'codevideo_make_video_from_actions',
      'codevideo_make_video_from_lesson',
    ],
  },
];

// Tools left off the page on purpose, with the reason.
const HIDDEN: Record<string, string> = {
  codevideo_critique_video_using_gemini: 'points at a retired Gemini model; list it again once that is fixed',
};

interface Tool { name: string; description?: string }

function serverCommand(args: string[]): { command: string; args: string[]; version: string } {
  const local = args.indexOf('--local');
  if (local !== -1) {
    const dir = path.resolve(args[local + 1] ?? '');
    const version = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')).version;
    return { command: process.execPath, args: [path.join(dir, 'dist', 'index.js')], version: `${version} (local build)` };
  }
  const spec = args[0] ?? 'latest';
  const version = execFileSync('npm', ['view', `${PACKAGE}@${spec}`, 'version'], { encoding: 'utf8' }).trim().split('\n').pop()!.replace(/^.*'(.+)'$/, '$1');
  return { command: 'npx', args: ['-y', `${PACKAGE}@${version}`], version };
}

// A minimal MCP client over stdio: initialize, then page through tools/list.
async function listTools(command: string, args: string[]): Promise<Tool[]> {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'codevideo-mcp-docs-'));
  const child = spawn(command, args, { env: { ...process.env, CODEVIDEO_HOME: home }, stdio: ['pipe', 'pipe', 'ignore'] });
  const pending = new Map<number, (message: any) => void>();
  let buffer = '';
  child.stdout.on('data', (chunk) => {
    buffer += chunk;
    let newline;
    while ((newline = buffer.indexOf('\n')) !== -1) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      if (!line) continue;
      const message = JSON.parse(line);
      if (message.id !== undefined) pending.get(message.id)?.(message);
    }
  });
  let nextId = 1;
  const request = (method: string, params: object) => new Promise<any>((resolve, reject) => {
    const id = nextId++;
    const timer = setTimeout(() => reject(new Error(`${method} timed out`)), 120_000);
    pending.set(id, (message) => {
      clearTimeout(timer);
      if (message.error) reject(new Error(`${method}: ${message.error.message}`)); else resolve(message.result);
    });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
  try {
    await request('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'docs-codevideo-io', version: '1.0.0' } });
    child.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
    const tools: Tool[] = [];
    let cursor: string | undefined;
    do {
      const result = await request('tools/list', cursor ? { cursor } : {});
      tools.push(...result.tools);
      cursor = result.nextCursor;
    } while (cursor);
    return tools;
  } finally {
    child.kill();
    fs.rmSync(home, { recursive: true, force: true });
  }
}

// One line of prose, with nothing MDX would read as JSX.
const prose = (text: string) => text.replace(/\s+/g, ' ').trim()
  .replace(/</g, '&lt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

function render(tools: Tool[], version: string): string {
  const byName = new Map(tools.map((tool) => [tool.name, tool]));
  const placed = new Set([...GROUPS.flatMap((group) => group.tools), ...Object.keys(HIDDEN)]);
  const unplaced = tools.filter((tool) => !placed.has(tool.name)).map((tool) => tool.name);
  const groups = unplaced.length ? [...GROUPS, { title: 'Other tools', tools: unplaced }] : GROUPS;
  if (unplaced.length) console.warn(`Not in a group yet, listed under "Other tools": ${unplaced.join(', ')}`);
  for (const name of placed) if (!byName.has(name) && !HIDDEN[name]) console.warn(`In a group but not served by the MCP: ${name}`);

  const sections = groups.map((group) => {
    // A list rather than a table: tool names are long and can't wrap, which
    // squeezed a description column off the side of the page.
    const items = group.tools.filter((name) => byName.has(name))
      .map((name) => `- \`${name}\`: ${prose(byName.get(name)!.description ?? '')}`);
    const body = [group.intro, items.join('\n')].filter(Boolean).join('\n\n');
    return group.collapsed
      ? `<details>\n<summary>${group.title}</summary>\n\n${body}\n\n</details>`
      : `### ${group.title}\n\n${body}`;
  });
  return [
    START,
    `<!-- Generated from ${PACKAGE}@${version} by npm run generate-mcp-tools; edit scripts/generate-mcp-tools.mts, not this section. -->`,
    '',
    ...sections.flatMap((section) => [section, '']),
    END,
  ].join('\n');
}

const { command, args, version } = serverCommand(process.argv.slice(2));
const tools = await listTools(command, args);
const page = fs.readFileSync(PAGE, 'utf8');
const start = page.indexOf(START), end = page.indexOf(END);
if (start === -1 || end === -1) throw new Error(`docs/mcp.md needs the ${START} and ${END} markers`);
fs.writeFileSync(PAGE, page.slice(0, start) + render(tools, version) + page.slice(end + END.length));
console.log(`Wrote ${tools.length - Object.keys(HIDDEN).filter((name) => tools.some((tool) => tool.name === name)).length} tools from ${PACKAGE}@${version} into docs/mcp.md`);
