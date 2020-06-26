# Postmortem for PPMS Outage June 2020

Date: June 22, 2020

Authors:
- Dave Conlon, DEPO
- Michelle Middaugh, Ad Hoc

Status: Resolved

## What happened?
_Brief description/summary of failure_
- The Facility Locator experienced an outage to the Community Provider Locator feature where searches for facility type of Community providers (in-VA's network) resulted in the application "spinning" and failing to return any results. 
- Duration of outage: From  June 15, 2020 4:16 p.m. ET to June 16, 2020 3:45 p.m. ET 
- Remaining search features VA Health, VA Benefits, Urgent care provider, Cemetery, and Vet Center (and all associated service-sub-search) remained fully functional.

## Background
_What context is needed to understand this situation?_
- The VA.gov Facility Locator provides a single, consolidated place across VA.gov where Veterans and beneficiaries can easily find and understand high-level information about facilities offering priority VA benefits and services.
- The VA.gov Facility Locator displays data from multiple up-stream data systems determined as the "single source of truth" for various facility data: CDW, GeoBISL, Access to Care, PPMS, etc.

## Detection
_How was the issue found?_
- This issue was discovered by the VA.gov Facility team (DEPO + GCIO + AdHoc) during a sprint planning meeting (~11:50 a.m ET) on June 16, 2020.
- VA.gov Facility team had just begun enabling a feature for VA-owned facility types (VA Health (all subtypes), VA Benefits, Cemetery, and Vet Center) that changed the version of the VA Facility Type source.
- VA.gov Facility team observed the inability to populate the Service type field for Community providers (in-VA's network).
- VA.gov Facility team notified the key stakeholder team, Office of Community Care, of the outage at ~12:16 p.m. ET

## Impact
_What was the impact on Veterans, business and team?_
- Veterans visiting Facility Locator during the outage were not able to complete a search for Community providers (in-VA's network).
- Average number of weekday visitors searching for facility type of Community providers (in-VA's network) = ~ 476-500 unique visitors/weekday

## Root Causes
_What caused this situation?_
- During the migration to Facilities v1 for VA facilities, the CCP controller used to connect to PPMS for Community providers (in-VA's network) was also moved to v1 rather than staying with the existing v0 endpoint. (Incorrect code accident)
- The issue did not contain regression smoke tests (Oversight)
- The application does not have full end-to-end regression tests that include PPMS testing. (Technical Debt)
- This feature was released to Production at 4:16 p.m. ET on June 15, 2020, resulting in the outage.

## Resolution
_What steps were taken to resolve the issue?_
- Upon discovery, VA.gov Facility team:
  - Disabled the new feature via flipper and waited for a refresh to determine if that caused the outage
  - VA.gov Facility team also tested the upstream PPMS end point (swagger) to determine if the problem was up-stream
  - Analyzed June 15th code release
- Determined root cause (v0 moved to v1) and implemented change
- Tested fix and smoke tested regression of other features
- Approved and released to Production
- Validated fix on Production

_Date/time of resolution_ : June 16, 2020 3:45 p.m. ET

## Documentation links
- Slack Thread [https://dsva.slack.com/archives/C0FQSS30V/p1592324871429600]
- [Github issue(s)] [https://github.com/department-of-veterans-affairs/va.gov-team/issues/10286]


## Action Items

| Description                    | Owner        | Issue # |
| ------------------------------ | ------------ | ------- |
| Include smoke test procedures as standard acceptance criteria | VA.gov Facility team | |
| Prioritize development of automated end-to-end testing for PPMS-related features | VA.gov Facility team | [#10448](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10448) |
| Investigate options for upstream monitoring and notifications | VA.gov Facility and Platform teams  | [Sentry #8514](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8514) |
| Consider prioritization of alert messaging | VA.gov Facility and Public Websites teams  | [#10318](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10318)  |
| Consider use of flipper to enable/disable features | VA.gov Facility team | |
| Collaborate with OCC on creating prepared outage messages that include buisiness-process fail-over information (e.g. Call Center) for the veteran | OCC with support from VA.gov Facility team | |

## Lessons Learned

### What went well
- Fast identification of root cause
- Rapid implementation and deployment of fix
- Fast notification of the stakeholder team

### What went wrong
- Lack of smoke test for unintentional impact of code changes
- No end-to-end testing capability for PPMS
- No post-release validation
- Absence of monitoring for failures

### Where we got lucky
- Able to remedy before daily deploy on Weds resulting in 24-hour outage and no need for off-cycle hotfix.

### Takeaways
- Need to ensure smoke test procedures are included in all acceptance criteria
- Prioritize technical debt of automated end-to-end testing development that includes PPMS-related features
- Further investigation of upstream monitoring and notifications
- Consider prioritization of alert messaging
- Consider further use of flipper for feature disabling

## Timeline (all times ETC, asc order)
_date, time, step/event_
- Daily deployment completed at 4:16 p.m. ET on June 15, 2020
- VA.gov Facility team identified possible outage at ~11:50 a.m. ET on June 16, 2020 and began investigation
- VA.gov Facility team notified OCC of the outage at 12:16 p.m  ET on June 16, 2020.
- VA.gov Facility team identified root cause and began implementing remedy ~12:30 p.m. ET on June 16, 2020
- Nursing staff notified OCC leadership of the outage at approximately 1:00 PM ET. 
- VA.gov Community Provider Locator function issue resolved on June 16, 2020 at 3:45 p.m. ET
