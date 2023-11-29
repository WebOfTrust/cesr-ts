# 001 - Use Lightweight Architectural Decision Records (ADRs)

## Status

Approved

## Context

Currently, important design and procedural questions are discussed and resolved verbally in the weekly dev meeting, via community Discord channels, or in out-of-band conversations between contributors. We need a more formal way to make important decisions that:

-   Allows for broader group consensus.
-   Produces an historical record of decisions and their rationale.
-   Makes it easier for newcomers to come up to speed.

[Lightweight ADRs](https://adr.github.io/) are an excellent mechanism for achieving these goals.

## Decision

Use Lightweight Architectural Decision Records. Use the format of this ADR as the template (see ["lightweight" ADR template](https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/locales/en/templates/decision-record-template-by-michael-nygard/index.md) by Michael Nygard). To keep the process as light as possible, we will not use a formal tool like [adr-tools](https://github.com/npryce/adr-tools).

ADRs shall be marked as one of the following:

-   Proposed
-   Approved
-   Implemented
-   Rejected
-   Superseded

Suggested decisions shall be written up as ADRs and submitted as PRs for comment and review before being approved and merged or rejected.

ADs may be superseded by subsequent ADRs.

## Consequences

Significant decisions, context, and rationale will be formally documented and enumerated in a common location.

Group members will have ready access to the background and justification for existing decisions.

Newcomers will be able to come up to speed more independently.

Decisions will represent broader group consensus.

Due to the more formal review process suggested by ADRs, some decisions will take longer to make than before.

Incremental overhead is required to maintain the ADR process.

## Other Options Considered

None.
