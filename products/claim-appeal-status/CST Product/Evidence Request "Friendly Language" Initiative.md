# CST: Evidence Requests "Friendly Language" Initiative

- **Product:** CST
- **Example Issue:** [HERE](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106930)

## Problem Statement

At present, Evidence Requests within the Claim Status Tool frequently display "raw" fields -- that is to say, directly from the API -- to the veteran.
These fields can frequently be confusing or not particularly legible.

## Solution Approach

From a **backend** perspective, we are building a mapping of API fields-to-legible-strings and using that mapping to override data received from Lighthouse
before sending it out to the client. This behavior is managed by two feature flippers:

1. `cst_friendly_evidence_requests_first_party`, when enabled, turns on the override behavior for first-party evidence requests. These requests have a status of `NEEDED_FROM_YOU`.
2. `cst_friendly_evidence_requests_third_party`, when enabled, turns on the override behavior for third-party evidence requests. These requests have a status of `NEEDED_FROM_OTHERS`.

- [The mapping lives here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/constants.rb).
- [The service overrides live here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/lighthouse/benefits_claims/service.rb#L43).

From a **frontend** perspective, we are builing a dictionary to store the longDescription, nextSteps and isProperNoun for each updated evidence content. The page that is displaying evidence is already updated to read through the dictionary. New updated evidence content will just need to be added to the dictionary.

- [Dictionary lives here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/utils/evidenceDictionary.jsx).
- [Affected screen here](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/components/claim-document-request-pages/DefaultPage.jsx)
  (https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/claims-status/components/claim-files-tab/FilesNeeded.jsx).
