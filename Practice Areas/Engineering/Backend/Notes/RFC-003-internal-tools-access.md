# RFC-003 - Internal Tools Access

- Date: 2019-06-18
- Related issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/108

## Background

The following tools are currently being used by developers and operators for the VSP, currently exposed by the SOCKS proxy. This proxy adds a good deal of toil for operations staff, is not scaleable for onboarding non-VSA engineers to the platform, and is unnecessary now that we have access to VAEC.

Below is a chart with tools we maintain today along with perceived risk profile and exposure tolerance. Risk profile is meant to describe the amount of risk to Veterans and VA if information or access were compromised. Exposure tolerance is meant to describe whether VA might tolerate a service being exposed internally or externally from a compliance perspective.

| Tool | Risk Profile | Exposure Tolerance |
| --- | --- | --- |
| Grafana / Prometheus | low | external |
| Sentry* | high | internal |
| Jenkins | high** | internal |
| API gateway management | high | internal |
| content preview | low | external |
| review instances | low | external |

*Sentry may need to be switched out for a different technology or moved to hosted solution very soon.

**Jenkins could be split into multiple parts to separate the risk profile, but it's being used as a deployment mechanism right now which raises the risk profile.

## Motivation

We need to expose these tools to the internal VA network, and some potentially externally in a standardized way.

## Design

Setup internal-only hostnames for tools we use {toolname}.vfs.va.gov, and tools exposed publicly (possibly just review instances for the start) would use dev.va.gov similar to Option 1.

pros:

- cleaner separation between environments, no mixing of developer tools and application environments
- lower risk of accidentally exposing a tool that was not intended to be

cons:

- dependence upon another team to manage additional internal DNS entries, updates can take some time
- additional SSL certificates to manage -- cannot use wildcards on the internal CA
- ideally review instances are still exposed under dev.va.gov domain, this would cause them to have a different URL pattern than the other tools
- exposing some tools publicly in the future could be more difficult

## Risks

- additional toil to obtain and maintain additional hostnames within the VA network

## Alternatives

Expose developer tools on https://dev.va.gov/_vfs/{toolname} ({toolname} here would be like "grafana", "sentry", etc).

Whether or not a tool is exposed publicly can be decided upon at any point, and configured fully with our own tooling.

pros:

- fewer SSL certificates to maintain
- same URL structure for internal- and external-facing tools (ie, there's not an internal-only URL for one tool and a public URL for another)
- simplified configuration for tools like Sentry where error reporting is sent through the publicly-exposed endpoint

cons:

- not as clean a separation between lower and production environments (example: there's one grafana instance that can switch between dev, staging, and prod by design -- this could be undone but not without a major project)
- risk of mistakes exposing something publicly that wasn't intended to be
- potentially confusing behavior where a specific hostname may or may not act the same way between internal and external clients
