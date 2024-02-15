# 2024-02-13 - 10-10EZ - Form not loading for authenticated users

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

After the daily deploy on 02/12/2024, the 10-10EZ application lost the ability for authenticated users to access the application. Only the heading and "Need Info" sections are displayed on the screen.  There is no information between the 2 sections. The [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808) was determined to be the source of the issue, and has since been reverted.  

## Impact

Quantified statement about the impact of the incident.

- How many users were affected?
     - ~870 authenticated users experienced the issue
     - ~35k users accessed the Introduction page between 02/12/2024 and 02/14/2024
- What time period were users impacted?
     - Issue occured between 02/12/2024 5:25pm ET to 02/13/2024 12:05 PM ET
     - Maintenance window in place between 02/13/2024 12:05 PM ET to 02/14/2024 04:25 PM ET
- What impact did this have on the SLO?
     - XXXXXXX

## Ownership
- Team: 10-10 Health Enrollment team
- PO: Patrick Bateman
- Crew: Health Tools crew

## Stakeholders

List _all_ stakeholders that are or were involved and include at the very least (but may not be limited to):

Ensure that the list of stakeholders involved are recorded in the post-mortem and must include at the very least (but may not be limited to):

- Patrick Bateman
- Joshua Faulkner
- Adrian Rollett
- Curt Bonade
- Brandon Dech
- Bill Chapman (approved the Out-Of-Band deploy)

Ensure that the [timeline](#event-timeline) includes timestamps of when each individual, listed stakeholder was notified of the event.

## Action Items

Ensure the listed owners are the _teams_ that own the action item, every action items must have a link to an issue.

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Revert [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808)  | Frontend | 10-10 Health Enrollment | Va.gov-team - [#76129](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76129) |

## Root Cause Analysis

**PENDING** 
This section provides a detailed analysis of the event and provides this analysis from a systemic vantage point. Post-mortems are not intended as a "self-criticism" event, but rather as an opportunity to document, learn and improve. This section focuses on providing that input into the learning and adaptation process.

### What happened?

**PENDING** 
Describe in detail what actually happened and what the downstream effect of the event was outside of the information provided in the "Impact" section. Provide insight into the dependencies between the different moving parts of the problem-space. Start from earliest known trigger and work your way through the cascading events.

### Why did it happen?
**PENDING** 
- Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?
- What should ordinarily have been done to prevent this, but wasn't done?
- What could have been done to prevent this, but isn't part of our modus operandi right now.

### What will we change to ensure this doesn't happen again?

**PENDING**  
Provide recommendations and concrete plans of action of how you will provide a systemic defense against this type of issue happening again in the future, including how will you ensure these recommendations are implemented & measured? How will you know if these new activities fail(ed)? In most cases, steps listed here should have corresponding action items.

## Resolution

**PENDING**  
Which steps were taken to resolve the incident. Include the link to the #oncall channel for conversation if a thread in #oncall exists.

### What went well

**PENDING**  
What went better than expected and deserves a call-out? Think more broadly than just "we got a fix out quickly", instead think about "what were the _enablers_ for X, Y going well".

### What went wrong

**PENDING**
The issue experienced in production did not appear in any other environments.  All tests (automated and manual) were completed successfully.  There was no indication that an issue would be introduced into production.

### Where we got lucky

**PENDING**  
Describe cases where, ordinarily, you would have expected to or could have encountered a roadblock, or a hurdle in getting to the resolution, but this _accidentally_ didn't happen (i.e. we got _lucky_). Do not include items that are part of standard operating procedure. In other words, describe instances where the process failed successfully. You can also use this to describe where safeguards did kick in, provided those safeguards prevented much worse from precipitating.

## Event Timeline

Include the step that describes when and how the issue was identified (i.e. how you detected that the issue existed).

- `2024-02-12 @ 05:25 PM ET`: The Daily Deploy was completed - [List of commits deployed](https://github.com/department-of-veterans-affairs/vets-website/compare/v0.1.2510...6bd6d33c9045a79229b63e5228b91827cfd7a1e1)
- `2024-02-13 @ 09:54 AM ET`: Joshua Faulkner posted in the #1010-health-apps Slack channel that the 10-10EZ forms submissions had dramatically dropped off since the previous night around midnight
- `2024-02-13 @ 10:04 AM ET`: Adrian Rollett assisted with some Datadog insights, a Sidekiq retries chart had peaked and had not yet returned to normal
- `2024-02-13 @ 11:09 AM ET`: It was confirmed there were no backend issues reported 
- `2024-02-13 @ 11:24 AM ET`: Validated that authenticated users would be directed to a screen with just the title of the application and the "Need Help" section.  The unauthenticated user flow was unaffected
- `2024-02-13 @ 11:24 AM ET`: Confirmed that the only deployment from our team on the previous day was for the 10-10CG and not related to the 10-10EZ code
- `2024-02-13 @ 11:29 AM ET`: A ticket was open with Platform Support for assistance - [Github support ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76020)
- `2024-02-13 @ 11:29 AM ET`: Patrick Bateman was notified of the issue
- `2024-02-13 @ 11:42 AM ET`: Validated that the Staging environment did not experience this issue for either authenticated or unauthenticated users
- `2024-02-13 @ 12:03 PM ET`: Validated that the RUM dashboard in Datadog also showed user session replays where they are not able to view the form as expected
- `2024-02-13 @ 12:05 PM ET`: PagerDuty Maintenance window is placed
- `2024-02-13 @ 01:20 PM ET`: Call started with Matt Long (FE Engineer) and Chapley Watson (Full stack Engineer) to triage the issue and talk through solutions 
- `2024-02-13 @ 01:33 PM ET`: Pulled PagerDuty Maintenance window down to run a quick test after a refresh by Frontend.  This did not work, still experiencing the issue.  Maintenance window placed back up
- `2024-02-13 @ 01:35 PM ET`: Determined that the initial PR #27808 needs to be reverted, this is the only option we have at this time, and cannot complete any testing in lower level environments
- `2024-02-13 @ 01:45 PM ET`: [PR #27962](https://github.com/department-of-veterans-affairs/vets-website/pull/27962) placed for the revert of [PR #29808](https://github.com/department-of-veterans-affairs/vets-website/pull/27962)
- `2024-02-13 @ 02:44 PM ET`: [Platform Support request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76100) opened for urgent review of [PR #27962](https://github.com/department-of-veterans-affairs/vets-website/pull/27962)
- `2024-02-13 @ 02:54 PM ET`: Advised by Curt Bonade that this will not make it into the Daily Deploy window, however an OOB can be done just after
- `2024-02-13 @ 02:59 PM ET`: Brandon Dech requested we fill out an OOB request ticket
- `2024-02-13 @ 03:11 PM ET`: Matt Long submitted the [OOB Ticket #76115](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76115)
- `2024-02-13 @ 02:59 PM ET`: Brandon Dech triggered a [PagerDuty](https://dsva.pagerduty.com/incidents/Q06LE037B31IH2) to notify on call OOB deployment for approval
- `2024-02-13 @ 02:59 PM ET`: Bill Chapman expressed that he was not a fan of troubleshooting by revert, however recognizes that the error correlated with the deployment - APPROVED OOB
- `2024-02-13 @ 05:36 PM ET`: Maintenance window expired, PR has not yet been deployed
- `2024-02-13 @ 06:19 PM ET`: Placed maintenance window back up
- `2024-02-13 @ 11:06 PM ET`: As of this date/time, the OOB deploy has continuously failed after 7 hours of runs. We are stopping for the night and will engage Platform and Frontend CoP in the morning
- `2024-02-14 @ 07:30 AM ET`: Patrick Bateman attempted a run of the failed ones, to no avail
- `2024-02-14 @ 07:30 AM ET`: Curt Bonade suggested doing a full rerun to see if it helps
- `2024-02-14 @ 08:56 AM ET`: Matt Long merged the Main branch and has started a new workflow, Curt Bonade is monitoring
- `2024-02-14 @ 09:16 AM ET`: Decision was made to document a local passing run and Platform will override branch protections and merge - Suggested by Adrian Rollett and confirmed by Curt Bonade and Clint Little
- `2024-02-14 @ 09:25 AM ET`: Matt Long began the step "kicking off a full local run, documenting the branch and commit its being run on"
- `2024-02-14 @ 09:35 AM ET`: Adrian Rollett stated "looking at Monday's release it doesn't look like anything was changed outside of individual apps"
- `2024-02-14 @ 09:36 AM ET`: Patrick Bateman posted to the Identity team requesting whether anything went out in website, vets-api, or elsewhere on monday afternoon that touched how va.gov handles users in general and/or LOA3 users specifically?
- `2024-02-14 @ 09:54 AM ET`: Patrick Bateman starts a meeting to step through the LOA3 hypothesis and see if we can’t come up with supporting / counter theories. 
- `2024-02-14 @ 10:11 AM ET`: Alexander Garcia on Identity team confirmed no issues are seen and no changes made to vets-website or vets-api
- `2024-02-14 @ 10:54 AM ET`: Patrick Bateman informed Clint Little that we can't get CI to complete locally after several very long runs.  Different tests have failed or timed out during each run.
- `2024-02-14 @ 10:54 AM ET`: Curt Bonade submitted a [PR #27965](https://github.com/department-of-veterans-affairs/vets-website/pull/27965) to help "unstick" the unit tests ("Throw all the hardware at it" approach).  This is meant as a temporary solution, and Curt will continue to investigate
- `2024-02-14 @ 11:30 AM ET`: Curt Bonade confirmed the PR mentioned above has been merged.  Advised to pull main and re-run the CI, should be all set
- `2024-02-14 @ 11:30 AM ET`: Matt Long merged main into the branch he is working on, Test run has begun
- `2024-02-14 @ 12:53 PM ET`: Matt Long provided update that we are waiting on QA merge status check to complete before we can move forward
- `2024-02-14 @ 01:01 PM ET`: Matt Long confirmed all checks have passed, though blocked on an approval from the product forms team. Matt has reached out to that team
- `2024-02-14 @ 01:01 PM ET`: Bill Chapman confirmed no OOB approvals technically needed during ongoing incident
- `2024-02-14 @ 01:02 PM ET`: Matt Long received approval from Forms team, began merging
- `2024-02-14 @ 01:11 PM ET`: Merge is still held up.  Per Curt Bonade **looks like archive requires the full unit test step to be passing, regardless of it not being required for the initial merge (GitHub limitation on how you set branch protections and they don’t line up with checking the status of the workflow step). Quickest route is likely the branch i merged that is going through CI now. That one should pass unit tests since the coverage report step is disabled, and if that deploys, we can send out the deploy from that commit and it will include yours**
- `2024-02-14 @ 03:00 PM ET`: Curt Bonade confirmed that this deploy will take place of the daily deploy.  OOB is not needed for our fix to be deployed
- `2024-02-14 @ 04:20 PM ET`: Curt Bonade confirmed deploy approved and launching
- `2024-02-14 @ 04:22 PM ET`: Successfully deployed to production
- `2024-02-14 @ 04:23 PM ET`: PagerDuty maintenance window was ended so that the 10-10EZ can be accessed in production by all users
- `2024-02-14 @ 04:25 PM ET`: Matt Long validated that the 10-10EZ form is accessible to authenticated (LOA3) users by logging into a test account
- 
- ...

## Contributors

- [@hdjustice](https://github.com/hdjustice)
- [@longmd](https://github.com/@longmd)
