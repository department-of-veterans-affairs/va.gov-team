# Evidence Request Updates (Mobile App) Release Plan

## Overview

This release plan covers the rollout of enhanced evidence request content to the VA Mobile App. The feature passes enriched content fields (friendly names, descriptions, next steps) through the mobile adapter to provide Veterans with clearer, more actionable information about what documents they need to submit.

## Resources
- [Collaboration Cycle Ticket #120568](https://github.com/department-of-veterans-affairs/va.gov-team/issues/120568)
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/issues/118016)
- [Incident Response](./incident-response.md)

## Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| [`cst_evidence_requests_content_mobile`](https://api.va.gov/flipper/features/cst_evidence_requests_content_mobile) | Enables enriched evidence request content fields in mobile API responses |

**Related toggles (already in production for web):**

| Toggle name | Description |
| ----------- | ----------- |
| [`cst_evidence_requests_content_override`](https://api.va.gov/flipper/features/cst_evidence_requests_content_override) | Enables enriched evidence request content for web (vets-website) |

## Dashboards and Monitoring
- Mobile:
    - [Mobile::V0::ClaimsAndAppealsController#index](https://vagov.ddog-gov.com/apm/resource/mobile-app/rack.request/cd216bf0bbda9b4b?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Amobile-app&env=eks-prod&fromUser=false&start=1769032852187&end=1769036452187&paused=false)
    - [Mobile::V0::ClaimsAndAppealsController#getClaim](https://vagov.ddog-gov.com/apm/resource/mobile-app/rack.request/ae501049e9244aaa?query=env%3Aeks-prod%20operation_name%3Arack.request%20service%3Amobile-app&env=eks-prod&fromUser=false&start=1769032852187&end=1769036452187&paused=false)
    - [New Issue Monitor](https://vagov.ddog-gov.com/monitors/213410)
- vets-api
    - [Benefits - Claim Status Tool Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits---claim-status-tool-dashboard)
- [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=claim%20status%20tool)


## Rollout Planning

- **Desired date range:** _TBD - pending Architecture Intent approval_
- **How will you make the product available in production while limiting the number of users who can find/access it:**
  - We will use the `cst_evidence_requests_content_mobile` feature toggle to control the percentage of users who receive enriched content fields in API responses.
  - Users not in the rollout will continue to see the existing `displayName` and `description` fields (graceful fallback).
- **What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**
  - Datadog error rates for `/mobile/v0/claims/{id}` endpoint (consistent with baseline, excluding 401/403 authentication issues)
  - No increase in Lighthouse API error rates
  - Mobile app crash rates remain stable
- **Links to the dashboard(s) showing "success criteria" metrics:**
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/8me-h86-qmb/benefits-claim-status-tool-dashboard)
- **Who is monitoring the dashboard(s)?:**
  - BMT2 Team

## Rollout Stages

### Stage A: 25% of users

25% is a safe starting point as we are providing enhanced content display without changing core functionality. The mobile app will use `friendlyName || displayName` fallback pattern.

#### Planning

- Length of time: ~1 week
- Percentage of Users: 25%

#### Results

- Estimated number of users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - `/mobile/v0/claims/{id}` error rate: [FILL_IN]
  - Mobile app crash rate: [FILL_IN]
- Was any downstream service affected by the change?:
  - [FILL_IN]
- Types of errors logged:
  - [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [FILL_IN]

### Stage B: 50% of users

_Test a larger user population to ensure larger usage patterns expose no issues._

#### Planning

- Length of time: 2 weeks
- Percentage of Users: 50%

#### Results

- Estimated number of users: [FILL_IN]
- Metrics at this stage (per your "success criteria"):
  - `/mobile/v0/claims/{id}` error rate: [FILL_IN]
  - Mobile app crash rate: [FILL_IN]
- Was any downstream service affected by the change?:
  - [FILL_IN]
- Types of errors logged:
  - [FILL_IN]
- What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?
  - [FILL_IN]

### Stage C: 100% of users

_Full rollout after successful Stage B._

#### Planning

- Length of time: Ongoing
- Percentage of Users: 100%

## Post Launch Metrics

Continue to check in on the KPIs of your feature at periodic intervals to ensure everything is working as expected. We recommend one-week and one-month check-ins, but this is only minimal.

### 1-week results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - `/mobile/v0/claims/{id}`: [FILL_IN]
  - Mobile app crash rate: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

### 1-month results

- Estimated number of users: [FILL_IN]
- Post-launch KPI - Error Rates:
  - `/mobile/v0/claims/{id}`: [FILL_IN]
  - Mobile app crash rate: [FILL_IN]
- Any issues with VA handling/processing?: [PICK_ONE]: yes | no | N/A
- Types of errors logged: [FILL_IN]
- Any UX changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: yes | no | N/A
- If yes, what: [FILL_IN]

## Post-launch Questions

_To be completed once you have gathered your initial set of data, as outlined above._

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders?
3. Which assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?
5. What technical tasks are needed to clean up (i.e., removal of feature toggles)?

## Technical Notes

### Changes Included in This Release

1. **vets-api Mobile Adapter** (`modules/mobile/app/models/mobile/v0/adapters/lighthouse_individual_claims.rb`):
   - Pass through enriched fields: `friendlyName`, `shortDescription`, `longDescription`, `nextSteps`, `canUploadFile`, `supportAliases`

2. **vets-api ClaimEventTimeline Model** (`modules/mobile/app/models/mobile/v0/claim_event_timeline.rb`):
   - Add new attributes for enriched fields

3. **VA Mobile App** (`va-mobile-app`):
   - Update `ClaimEventData` type with new optional fields
   - Update `FileRequestDetails.tsx` to display enriched content with fallback

### Fallback Behavior

The mobile app uses graceful degradation:

```typescript
// Display logic
const title = friendlyName || displayName;
const description = shortDescription || description;
```

This ensures users always see content even if enriched fields are not available.

### Dependencies

- Evidence Dictionary Migration (#130308) must be completed before this release
