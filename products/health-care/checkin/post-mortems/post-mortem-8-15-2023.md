
# Summary

On Tuesday August 15 2023 around 7:30 AM ET, it was discovered that no online check-ins were being completed. Investigation revealed a VeText change the previous day that removed parameters required for online check-in caused the issue.

# Impact

High: no Veterans were able to check in to their appointments using mobile check-in from ~7:00-11:00 AM ET. 

# Ownership

- Teams: VEText, CIE
- POs: Chris Horton, Lori Pusey
- Crew: Healthcare

# Stakeholders

- Chris Horton
- Lori Pusey
- Shane Elliott
- Stephen Barrs

# Action Items

*Ensure the listed owners are the teams that own the action item, every action items must have a link to an issue.*

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Implement hotfix to re-add removed parameters (patient name, zip, DOB) | Engineering Work | [hotfix](https://github.com/department-of-veterans-affairs/vetext/pull/1323/files)  |

# Root Cause Analysis

- Missing data in a payload led to a cascade failure of check-in

## What happened?

Lee Delarm on pager duty found incidents popping up about "no checkins" early in the morning, which is a 10 minute rotating check. This does not usually occur in the early morning since many appointments are scheduled first thing. An attempt to triage was made following the pagerduty playlist, however the issue was specific and outside the scope of normal operation.

It was found that there was extremely high latency reports on the check-in process. This was thought to be the initial issue, and perhaps a reboot/kick of the serverless functions may restart it, but later on it was found this was a tertiary issue cascading from the workflow.

Eventually, a new error was identified showing patient DOB and name were not found in a CHIP error log, only starting to occur with the VETEXT deployment the previous night (roughly 7:30pm eastern time). Based on this, and an analysis of the PR, it was determined some of the code removed was not sending the payload data CHIP expected, and this was causing a cascade of errors, as this data is required to identify patients.

This was fixed and pushed forward.

VEText code that retrieves appointments for the Clinic Cancellations and Open Slot Management use cases was refactored to include both SDEC appointments (made through VSE) and VistA legacy appointments (through roll-and-scroll).  Previously only appointments from legacy VistA files were being retrieved for these two use cases.

## Why did it happen?

VEText was not aware of some of the validation checking and use cases of the CHIP service that it was passing data into

## Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?

Testing full integration suite sections for data that is being pushed across services may have prevented this. We would have needed fully automated integration tests to catch this, however, which I'm not sure is the best way to catch something like this. It's probably more efficient to manually check

## What should ordinarily have been done to prevent this, but wasn’t done?
Extended testing on a staging environment with more real-world scenarios 

## What could have been done to prevent this, but isn’t part of our modus operandi right now.
Manual end to end testing on staging before deploying VEText changes

## What will we change to ensure this doesn’t happen again?


When introducing hotfixes to production, the positive impact of the change being made should be weighed against the risk of introducing new bugs with greater impact. Any changes made to how CHIP services are called should be treated as if they were changes to CHIP itself, with full testing and validation performed. There are no automated test suites (or even smoke tests) that validate VEText, CHIP, vista-api, VistA, vets-api and vets-website together. Each application largely relies on mocked calls, limiting the possible currency and fidelity when considering the stack as a single application. Creating an end-to-end test suite running on the staging environment of each application could help improve our confidence when deploying new work to production.

# Resolution

- The issue was identified and diagnosed in [this Slack thread](https://dsva.slack.com/archives/C02G6AB3ZRS/p1692100943933419). 
- A [hotfix](https://github.com/department-of-veterans-affairs/vetext/pull/1323/files) was discussed, approved, and deployed in this [slack thread](https://dsva.slack.com/archives/C03E5FEBTLH/p1692110918906809).

## What went well

- Effective, responsive communication across teams allowed us to quickly act and deploy solution. 

## What went wrong

- VEText code that retrieves appointments for the Clinic Cancellations and Open Slot Management use cases was refactored to include both SDEC appointments (made through VSE) and VistA legacy appointments (through roll-and-scroll).  Previously only appointments from legacy VistA files were being retrieved for these two use cases.
- These changes dropped the DOB from the patient appointment info retrieved from VistA in order to avoid another RPC call since the aforementioned use cases do not need this field.
- This change resulted in the DOB not being put into the CHIP payload, since the appointments data is retrieved via the method that was refactored.
- These changes were put into Staging Thursday or Friday last week.
- An unrelated issue having to do with a missing field in the CDW table in Staging prevented the CHIP team from doing testing with check-in in Staging.
- The CDW table issues were fixed as of this morning, allowing CHIP testing to resume in Staging.
- However, since CHIP testing was broken in Staging since late last week, the missing DOB field was not caught in Staging as it likely would have been had there not been the issues with the CDW table.
- Lesson learned is to ensure that there is satisfactory CHIP testing on any changes made in VEText to appointment-related data.

## Where we got lucky

- Change to production from previous day easily identified as causing the issue

# Event Timeline


- 2023-08-15 @ 07:30 AM ET: Issues with the CHIP service were detected by Lee Delarm in the DataDog [logs](https://tevi.ddog-gov.com/apm/services/chip-http-client/operations/http.request/resources?env=prod&resources=qson%3A%28data%3A%28visible%3A%21t%2Chits%3A%28selected%3Atotal%29%2Cerrors%3A%28selected%3Atotal%29%2Clatency%3A%28selected%3Ap99%29%2CtopN%3A%215%2CselectedResourceID%3Aba66c0209b09ac3a%29%2Cversion%3A%210%29&summary=qson%3A%28data%3A%28visible%3A%21t%2Cerrors%3A%28selected%3Acount%29%2Chits%3A%28selected%3Acount%29%2Clatency%3A%28selected%3Alatency%2Cslot%3A%28agg%3A75%29%2Cdistribution%3A%28isLogScale%3A%21f%29%29%2Csublayer%3A%28slot%3A%28layers%3Aservice%29%2Cselected%3Apercentage%29%29%2Cversion%3A%211%29&topGraphs=latency%3Alatency%2Chits%3Acount%2Cerrors%3Acount%2CbreakdownAs%3Apercentage&start=1692096983462&end=1692100583462&paused=true) 
- 2023-08-15 @ 08:02 - 10:30 AM ET: Issue investigated by Rob Durkin & Michael Kimball
- 2023-08-15 @ 09:28 AM ET: Maintenance window enabled for online check-in by Lori Pusey
- 2023-08-15 @ 10:30 AM ET: Hot fix PR submitted for approval by Rob Durkin 
- 2023-08-15 @ 10:45 AM ET: PR approved for hotfix by Lee DeBoom
- 2023-08-15 @ 11:00 AM ET: Issue verified fixed in production
- 2023-08-15 @ 11:52 AM ET: Post mortem meeting scheduled by Lori Pusey

# Contributors

- Rob Durkin
- Lee Delarm
- Lee DeBoom
- Jeremy Britt
- Adrian Rollett
- Stephen Barrs
