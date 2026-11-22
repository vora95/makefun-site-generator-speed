// Driver for the site-generator-speed entry: the program the harness runs
// (`node /bot/main.ts`, node22). It reads every case from /input/cases.json (or
// MAKEFUN_INPUT_DIR), answers each one alone with run() from solve.js, and
// writes /output/answers.json (or MAKEFUN_OUTPUT_DIR): one answer per case, in
// the cases' order.
//
// V8's incremental marking is switched off before solve.js is imported, so all
// of the entry's work runs under it — the same tuning the house baseline uses,
// which the rules allow an entry to use too.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { setFlagsFromString } from 'node:v8';

setFlagsFromString('--no-incremental-marking');

type Case = { id: string; input: unknown };
type Runner = (input: unknown) => unknown;

const { run } = (await import(new URL('./solve.js', import.meta.url).href)) as {
  run: Runner;
};

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8')) as Case[];
const answers: unknown[] = cases.map((c) => run(c.input));
writeFileSync(join(outputDir, 'answers.json'), JSON.stringify(answers));
