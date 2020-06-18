# Postmortem for PPMS Outage June 2020

Date: June 18, 2020

Authors:
- Dave Conlon, DEPO
- Michelle Middaugh, Ad Hoc

Status: Resolved

## What happened?
_Brief description/summary of failure_
- On June 16, 2020, the Facility Locator experienced a brief Community Provider Locator outage, causing searches for Community care providers to be  unavailable. 
- Remaining features including Urgent Care locator remained functional.

## Background
_What context is needed to understand this situation?_


## Detection
_How was the issue found?_
_Date/time of discovery_
- When the team activated the flag during a discussion about the feature during a sprint planning meeting on June 16, 2020, they observed the inabaility to populate the Service type field for Community care providers. 


## Impact
_What was the impact on Veterans, business and team?_
- PPMS Locator remained functional during that time – the patient referral process was uninterrupted. 
- Veterans visiting Facility Locator during the outage would not have been able to complete a search for Community care providers. 

## Root Causes
_What caused this situation?_
- During the migration to Facilities V1 for VA facilities, the CCP controller was also moved to V1, rather than staying with the existing endpoint. 

## Resolution
_What steps were taken to resolve the issue?_
_Date/time of resolution_

## Documentation links
- [Slack Thread]
- [Support issue] 
- [Github issue(s)]


## Action Items

| Description                    | Type    | Owner        | Issue # |
| ------------------------------ | ------- | ------------ | ------- |
| | | | |

## Lessons Learned

### What went well

### What went wrong

### Where we got lucky

### Takeaways

## Timeline (all times ETC, asc order)
_date, time, step/event_
- DEPO notified OCC of the outage at 12:16 ET on June 16, 2020. 
- Nursing staff notified OCC leadership of the outage at approximately 1:00 PM ET. 
- VA.gov Community Provider Locator function issue resolved at approximately 4:00 ET, June 16.
