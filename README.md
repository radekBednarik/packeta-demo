# Playwright tests demo for Packeta

## Pre-requisites

- Node.js LTS
- git
- pnpm

## Installation

- git clone `git@github.com:radekBednarik/packeta-demo.git`
- run this commands in the root of the project folder

```bash
pnpm install
pnpm exec playwright install --with-deps
```

## Test execution

```bash
pnpm test --repeat-each 5
```

## HTML report

- this report also includes trace logs and video. These are normally stored only on failing tests
  but for demo purposes these are always on. Detail config is in `playwright.config.ts`

- comments on results are in the [results](./results/results.md) folder.

```bash
pnpm exec playwright show-report
```

## Other possible test cases

- second test case for this demo is quite long. It would be generally better to make tests as atomic as possible.
  This is not the case here. I would suggest to split this test into these:
  - searching feature
  - filtering feature (and further per filtering options groups at least)
  - selected box information bottom bar (and further per tab filter at least)
- generally long e2e test cases should be automated only for important user flows, that are known and need
  to be working.

## Suggestions

- application needs a lot work regarding missing test ids, or aria roles, so that
  tests can be reliable.
- current state caused issues namely for the second test case.
