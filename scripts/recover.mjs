import { recoverArchives } from './har-recovery.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
const args = process.argv.slice(2);
if (args[0] !== '--out' || args.length < 4) throw new Error('Usage: node scripts/recover.mjs --out public <capture.har> [capture2.har]');
const report = await recoverArchives(args.slice(2), args[1]);
await mkdir('work', { recursive: true });
await writeFile('work/recovery-manifest.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ written: report.written, conflicts: report.conflicts.length, rejected: report.missing.length }));
