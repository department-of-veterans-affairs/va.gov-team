# CST: Evidence Requests "Friendly Language" Initiative

* **Product:** CST
* **Example Issue:** [HERE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106930)

## Problem Statement

At present, Evidence Requests within the Claim Status Tool frequently display "raw" fields -- that is to say, directly from the API -- to the veteran.
These fields are frequently confusing at worst or not-particularly-legible at best. They can be confusing.

## Solution Approach

From a **backend** perspective, we are building a mapping of API fields-to-legible-strings and using that mapping to override data received from Lighthouse
before sending it out to the client. This behavior is managed by two feature flippers:

1. `cst_friendly_evidence_requests_first_party`, when enabled, turns on the override behavior for first-party evidence requests. These requests have a status of `NEEDED_FROM_YOU`.
2. `cst_friendly_evidence_requests_third_party`, when enabled, turns on the override behavior for third-party evidence requests. These requests have a status of `NEEDED_FROM_OTHERS`.

* [The mapping lives here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/constants.rb).
* [The service overrides live here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L43).
