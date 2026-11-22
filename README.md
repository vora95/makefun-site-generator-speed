# makefun-site-generator-speed

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/vora95/makefun-site-generator-speed/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/vora95/makefun-site-generator-speed/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A faster drop-in for makefun-site 1.0.0: a dependency-free static site generator that returns byte-identical output at about 2.4x the speed of the house baseline. `solve.js` re-implements the front matter, Markdown subset, template dialect, slug rule and report of makefun-site 1.0.0 from its README and reference code, with a fused single-pass Markdown renderer, bulk HTML escaping and a regex slug pipeline; `main.ts` is the driver the harness runs.

## Run it

```sh
MAKEFUN_INPUT_DIR=<input-dir> MAKEFUN_OUTPUT_DIR=<output-dir> node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
