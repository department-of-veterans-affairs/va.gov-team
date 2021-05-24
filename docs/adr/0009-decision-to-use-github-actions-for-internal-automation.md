# 9. Decision to use Github Actions for Internal Automation

Date: 2021-05-24

## Status

Accepted

## Context

The Operations team needs a tool to run automation internally, for tasks that are not CI or CD related. e.g.: Update checks on instances, recycling github actions runners, checking certificates for expiration, etc.

## Decision

The Operations team has decided to use Github Actions, with either github-hosted or self-hosted runners, depending on the need, to provide this tool.

## Consequences

Jenkins will be that much closer to being sunsetted. There are some issues around Github Actions self-hosted runners and the way that they make requests to the internet (the MitM from the TIC) that make this harder but nothing insurmountable.
