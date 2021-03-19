# 1. Scale VA.gov using GQL not CMS Export

Date: 2021-02-18

Whom:
- @mchelen-gov
- @drorva

## Status

Accepted

## Context

CMS Export initiative was an attempt to increase VA.gov content capacity and decrease content deployment time.
As of Feb 2021 CMS Export implementation was not expected to be completed in time for planned product (VAMC) rollout.
Testing and experimentation with GraphQL indicated it might be able to scale to support product release timeline.

## Decision

Halt implementation on CMS Export and focus on scaling GraphQL.

## Consequences

CMS Export is deprecated.
GraphQL performance and scalability is prioritized.
Automated content only releases occur and increasing rate, up to hourly from 8am-8pm.
