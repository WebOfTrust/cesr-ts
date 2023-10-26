# ADR-002 - Use Signify-TS as Basis for Initial Commit

## Status

Proposed

## Context

There are two ways to begin work on the cesr-ts project. The first is to start from scratch, pulling over relevant code from signify-ts as needed. The second is to copy the signify-ts codebase over as a whole and trimming out unrelated code.

## Decision

Use the signify-ts code base as the starting basis for cesr-ts. Unrelated code will be excised. The primary motivation for this approach is to better ensure cross-project consistency.

## Consequences

Cross-project consistency will be baked in from the beginning.

It will take time to properly excise unneeded code from the project.

For a period of time, the project may be confusing to newcomers. If the work to trim down the code isn't forthcoming or turns out not to happen, this state would be permanent.

Any deficiencies in the signify-ts code would initially be replicated in cesr-ts.

## Other Options Considered

Starting the project from scratch.
