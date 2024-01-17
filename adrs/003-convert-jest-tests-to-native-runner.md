# [003] - Convert Jest tests to native Node.js test runner

## Status

Proposed

## Context

Node.js has had a built-in test runner since v18. The docs are found [here](https://nodejs.org/api/test.html). Jest is a fairly heavy dependency and it has had some maintenance issues in recent years.

## Decision

To remove dependencies where possible and to adjust to convention: Rewrite existing tests to run with the native runner and eliminate Jest.

## Consequences

The native test runner does require the specification of a module loader to run typescript files directly, but it is [straightforward to fix](https://glebbahmutov.com/blog/trying-node-test-runner/#typescript).

## Other Options Considered

Sticking with Jest.
