import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, readFile, rm, cp, mkdir, writeFile, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const run = promisify(execFile);
const root = fileURLToPath(new URL('../', import.meta.url));

test('rebuilt styles retain the demo theme, interactive states and motion preferences', async () => {
  const temporary = await mkdtemp(path.join(tmpdir(), 'maker-styles-'));
  const output = path.join(temporary, 'app.css');
  try {
    const { stderr } = await run(process.execPath, [
      path.join(root, 'node_modules/@tailwindcss/cli/dist/index.mjs'),
      '-i', path.join(root, 'src/styles/app.css'),
      '-o', output,
    ], { cwd: root });
    assert.doesNotMatch(stderr, /Error:/);
    const css = await readFile(output, 'utf8');
    const contains = (pattern, contract) => assert.ok(pattern.test(css), contract);

    // These declarations are the visible contract of the reconstructed entry,
    // not Tailwind defaults: changing fonts, forgetting state candidates or
    // dropping application CSS must be detected before browser comparisons.
    contains(/--default-font-family:\s*var\(--font-geist-sans\)/, 'The document font must retain the Geist alias');
    contains(/--default-mono-font-family:\s*var\(--font-geist-mono\)/, 'Code must retain the Geist Mono alias');
    contains(/\.font-mono\s*\{\s*font-family:\s*var\(--font-geist-mono\)/, 'The font-mono utility must use the view font');
    contains(/\.hover\\:bg-amber-900\\\/40(?::hover)?\s*\{[^}]*background-color:/, 'The amber hover state must be generated');
    contains(/\.focus-visible\\:ring-2(?::focus-visible)?\s*\{[^}]*--tw-ring-shadow:/, 'Keyboard focus must retain the ring utility');
    contains(/\.disabled\\:opacity-60(?::disabled)?\s*\{[^}]*opacity:\s*60%/, 'Disabled controls must retain their opacity');
    contains(/\.rb-amb-blob\s*\{\s*animation:\s*rb-amb-breathe var\(--rb-amb-dur,\s*11s\)/, 'The custom ambient animation must survive');
    contains(/@keyframes rb-slotspin\s*\{[\s\S]*?translateY\(-50%\)/, 'The slot animation must retain its travel distance');
    contains(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*?animation-duration:\s*1ms\s*!important;[\s\S]*?animation-iteration-count:\s*1\s*!important;[\s\S]*?transition-duration:\s*1ms\s*!important;/, 'Reduced-motion preferences must override animations and transitions');
    contains(/body\s*\{\s*background:\s*var\(--background\);\s*color:\s*var\(--foreground\);\s*font-family:\s*Arial, Helvetica, sans-serif;/, 'Body colors and typography must remain controlled by the original theme');
    contains(/font-family:\s*var\(\s*--default-font-family,\s*ui-sans-serif,\s*system-ui,\s*sans-serif,/, 'Views without a Geist font must keep their original fallback stack');
    contains(/:-moz-focusring\s*\{\s*outline:\s*auto;/, 'Firefox iframe focus must retain its original outline');
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});

test('new utility classes in maintained lobby and panel components are discovered', async () => {
  const temporary = await mkdtemp(path.join(tmpdir(), 'maker-style-sources-'));
  try {
    await cp(path.join(root, 'src/styles'), path.join(temporary, 'src/styles'), { recursive: true });
    await symlink(path.join(root, 'node_modules'), path.join(temporary, 'node_modules'), 'dir');
    for (const [view, utility] of [['classic-lobby', 'w-[137px]'], ['panel', 'h-[139px]']]) {
      const directory = path.join(temporary, 'src/client/views', view);
      await mkdir(directory, { recursive:true });
      await writeFile(path.join(directory, 'new-component.js'), `export const props = { className: '${utility}' };`);
    }
    await mkdir(path.join(temporary, 'public/muestra'), { recursive:true });
    for (const name of ['vista-socio-lobby.html', 'vista-socio-panel.html']) {
      await writeFile(path.join(temporary, 'public/muestra', name), '<main></main>');
    }
    const output = path.join(temporary, 'app.css');
    await run(process.execPath, [
      path.join(root, 'node_modules/@tailwindcss/cli/dist/index.mjs'),
      '-i', path.join(temporary, 'src/styles/app.css'), '-o', output,
    ], { cwd:temporary });
    const css = await readFile(output, 'utf8');
    assert.match(css, /\.w-\\\[137px\\\]\s*\{\s*width:\s*137px/);
    assert.match(css, /\.h-\\\[139px\\\]\s*\{\s*height:\s*139px/);
  } finally {
    await rm(temporary, { recursive:true, force:true });
  }
});
