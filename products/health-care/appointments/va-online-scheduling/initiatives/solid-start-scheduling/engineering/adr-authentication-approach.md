# ADR: Authentication Approach for VASS

## Status

Accepted

## Context

Early in planning, the team decided that VASS did not require full Veteran authentication. The initial proposal was to reuse LoROTA in a manner similar to the check-in experience.

As the design evolved, it became clear that VASS did not need to store Veteran or appointment data. This differs from check-in and pre-check-in flows, which persist data for up to roughly one week.

LoROTA is implemented as a serverless architecture using AWS Lambdas and includes its own datastore. While appropriate for check-in use cases, this approach introduces additional infrastructure, operational overhead, and relies on a framework with limited team familiarity.

## Decision

Given the absence of long-lived data requirements, the team chose to pivot away from LoROTA and instead implement a one-time passcode (OTP) authentication flow.

The OTP flow leverages the existing Redis cache in `vets-api`, allowing the system to meet functional requirements while significantly reducing architectural complexity.

## Consequences

**Positive:**

* Simplified system architecture
* No need to provision or maintain a dedicated datastore
* Reduced operational and cognitive overhead
* Faster development and easier onboarding for engineers

**Negative / Trade-offs:**

* Reliance on Redis cache availability
* OTP flow must be carefully monitored for expiration and retry behavior

## Notes

August 22 - Met with Adrian Rollett over zoom to discuss possible solutions where a OTP(OTC) flow was proposed as an alternative to using LoROTA.

Some [slack](https://dsva.slack.com/archives/C06RMRJCLHH/p1755806986474159) discussion around pitfalls of lorota and answers for other team members: https://dsva.slack.com/archives/C06RMRJCLHH/p1755806986474159
