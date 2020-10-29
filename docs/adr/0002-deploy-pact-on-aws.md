# 2. Deploy Pact Broker on AWS

Date: 2020-10-22

Whom:
- Eugene Doan
- Michael Fleet
- Demian Ginther
- Lindsey Hattamer
- Jesse House
- Megan Kelley

## Status

Accepted

## Context

The Pact Broker has been on Heroku during development, but its database is running out of rows for the free Heroku plan. We either need to use a paid Heroku plan, or move the Pact Broker onto our AWS infrastructure.

## Decision

We will move the Pact Broker onto our AWS infrastructure.

## Consequences

- We will need to add a rev-proxy entry for the Pact Broker, or use SOCKS to access the report from the public internet.
- If we don't setup a rev-proxy entry, we will need to refactor the CircleCI integration to use Jenkins instead.
