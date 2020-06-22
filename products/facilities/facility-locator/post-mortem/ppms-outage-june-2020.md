# Postmortem for PPMS Outage June 2020

Date: June 22, 2020

Authors:
- Dave Conlon, DEPO
- Michelle Middaugh, Ad Hoc

Status: Resolved

## What happened?
_Brief description/summary of failure_
- On June 16, 2020, the Facility Locator experienced a outage to the Community Provider Locator feature where searches for facility type of Community providers (in-VA's network) resulted in the application "spinnning" and then failing to return any results. 
- Remaining search features VA Health (all subtypes), VA Benefits, Urgent care provider, Cemetery, and Vet Center remained fully functional.

## Background
_What context is needed to understand this situation?_
The VA.gov Facility Locator provides a single, consolidated place across VA.gov where Veterans and beneficiaries can easily find and understand high-level information about facilities offering priority VA benefits and services.
The VA.gov Facility Locator displays data from multiple up-stream data systems determined as the "single source of truth" for various facility data: CDW, GeoBISL, Access to Care, PPMS, etc.

## Detection
_How was the issue found?_
- This issue was discovered by the VA.gov Facility team during a sprint planning meeting (~11:50 a.m ET) on June 16, 2020.
- DEPO had just begun enabling a feature for VA-owned facility types (VA Health (all subtypes), VA Benefits, Cemetery, and Vet Center)
- DEPO observed the inability to populate the Service type field for Community care providers.
- DEPO notified the key stakeholder team, Office of Community Care, of the outage at ~12:16 p.m. ET

## Impact
_What was the impact on Veterans, business and team?_
- Veterans visiting Facility Locator during the outage would not have been able to complete a search for Community care providers.
- Average number of weekday visitors searching for facility type of Community providers (in-VA's network) = 

## Root Causes
_What caused this situation?_
- During the migration to Facilities v1 for VA facilities, the CCP controller was also moved to v1, rather than staying with the existing endpoint.
- The issue did not contain regression smoke tests
- The application does not have full end-to-end regression tests
- This feature released to Production at 4:16 p.m. ET on June 15, 2020, resulting in the outage.

## Resolution
_What steps were taken to resolve the issue?_
- Upon discovery, DEPO:
  - Disabled the new feature and waited for a refresh to determine if that caused the outage
  - DEPO also tested the upstream PPMS end point to determine if the problem was up-stream
  - Analyzed code released the day before (~4 p.m. ET)
- 
_Date/time of resolution_ : June 16, 2020 3:45 p.m. ET

## Documentation links
- Slack Thread[https://dsva.slack.com/archives/C0FQSS30V/p1592324871429600]
- [Github issue(s)] [https://github.com/department-of-veterans-affairs/va.gov-team/issues/10286]


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| | | | |

## Lessons Learned

### What went well
- Fast identification of root cause
- Rapid implementation and deployment of fix
- Fast notification of the stakeholder team

### What went wrong
- Lack of smoke test for unintentional impact of code changes
- No end-to-end testing capability
- Post-release validation

### Where we got lucky
- Able to remedy before daily deploy

### Takeaways
- Need to ensure smoke test procedures are included in all acceptace criteria
- Prioritize autoamted end-to-end testing development
- Consider prioritization of alert messaging
- Consider further split of controllers on flipper

## Timeline (all times ETC, asc order)
_date, time, step/event_
- Daily deployment completed at 4:16 p.m. ET on June 15, 2020
- DEPO identified possible outage at ~11:50 a.m. ET on June 16, 2020 and begain investigation
- DEPO notified OCC of the outage at 12:16 p.m  ET on June 16, 2020. 
- Nursing staff notified OCC leadership of the outage at approximately 1:00 PM ET. 
- VA.gov Community Provider Locator function issue resolved at approximately 4:00 ET, June 16.
