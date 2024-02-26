# 2024-02-13 - 10-10EZ - Form not loading for authenticated users

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

After the daily deploy on 02/12/2024, the 10-10EZ application lost the ability for authenticated users to access the application. Only the heading and "Need Info" sections are displayed on the screen.  Content was not rendering between the 2 sections. Frontend [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808) was determined to be the change that triggered the incident, and was eventually reverted.

Additionally, the attempt to merge the revert PR and trigger an out-of-band deploy was significantly delayed by ongoing issues with the CI/CD pipeline, increasing the duration of the incident by about a day. 

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
| Update EZ RUM config w/ addt'l attributes| Frontend | 10-10 Health Enrollment | Va.gov-team - [#76235](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76235)|
|Move 10-10 apps to CD pipeline | Frontend| 10-10 Health Enrollment | Va.gov-team - [#76209](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76209)|
|Refine the 1010 team's incident response process| Product Manager| 10-10 Health Enrollment| VA.gov-team - [#76787](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76787) and [#77008](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/gh/department-of-veterans-affairs/va.gov-team/77008)|
|Create intro page fall-through/default display|Frontend|10-10 Health Enrollment|Va.gov-team - [#75437](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75437)|
|CI/CD pipeline improvements to stability|Frontend/Backend|Platform|Va.gov-team - [Epic #72068](https://app.zenhub.com/workspaces/reliability-team-633b069d2920b776613c93d8/issues/gh/department-of-veterans-affairs/va.gov-team/72068)|
|Update maintenance window service mapping (avoid disabling both forms)|Engineers & PM|10-10 Health Enrollment|Va.gov-team - [#76791](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76791) |
|Create tighter post-deployment anomaly thresholds & alerts|Data Analyst|10-10 Health Enrollment|Va.gov-team - [#76793](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76793)

## Narrative
On Friday, Febrary 9, an engineer merged frontend [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808) to main. The intent of the PR was to increase test coverage of the 1010ez health care application in advance of upcoming changes. The PR included some additional refactoring and cleanup, decomposing helper methods into smaller files/modules. The engineer followed a typical process for such a PR - merging it to main after the day's daily production deploy to allow time for it to be tested in staging in advance of the next production deploy. The engineer ran the updated code through end-to-end tests, tested it locally and on a review instance, and in staging. The engineer expressed no expectation that behavior of this code would differ significantly in production.

On Monday February 12, the PR was included in the day's daily production deploy. Monday's production deploy occurred later than normal, at 5:25 PM ET.

On Tuesday, February 13, an engineer from the VHA Enrollment System (ES) team notified the 1010 application team in their slack channel that submissions from VA.gov to ES were coming through at a rate much lower than normal. Various team members began trying to debug and isolate the issue. They confirmed that submissions appeared lower than normal in existing dashboards maintained by the 1010-health-apps team. Of note, while submission rate was low, it was not zero, indicating that the application was partially functional. And the issue was reported in the early morning when the baseline application rate is normally fairly low. 

An engineer asserted that there were no apparent backend connectivity issues or relevant changes. Another engineer checked the timing of the most recent production deploys for both vets-api and vets-website, and saw a correlation between the vets-website deploy and the change in submission rate. From there the engineer examined the PRs included in that deploy and found only one PR (27808) related to the 1010ez application. In parallel, another engineer tried to reproduce any issues in staging, and eventually production, and was able to confirm that the issue only occurred in production, and only for users who were both signed in and verified (LOA3). 

During this process, the team also decided to configure a maintenance window for the product to avoid confusion and frustration for end users. A product manager for the team was able to configure that successfully. They noted that because maintenance windows are configured in terms of upstream dependencies, it was necessary to take both the 1010ez and 1010ezr applications offline, even though only the former was affected. 

The decision was made to revert the PR, either in Tuesday's upcoming production deploy or if necessary via an out-of-band (OOB) deploy. The team engaged the VA.gov platform team via the vfs-platform-support channel. They missed the window of opportunity for the production deploy. An OOB deploy was approved, and the remainder of the incident duration has to do with getting a successful CI/CD run to complete in order to deploy the reverted code. 

Engineers from the 1010 and platform teams spent about 7 hours on Tuesday afternoon/evening attempting to get a successful CI/CD run of the revert PR to no avail. They encountered unrelated instablility in the CI/CD pipeline that had started about a week earlier, on February 6. The next morning on February 14, team members continued trying to get a successful merge and deploy, while in parallel adjusting aspects of the pipeline to try to increase chances of success. Adjustments included increasing the hardware resources of the Github runners and breaking up the test execution into smaller per-application runs. At various points, platform engineers needed to temporarily adjust branch protection/merge policies in order to get a successful merge and deploy. 

Platform engineers identified 3 contributing issues to the instability: 
* An isssue with Cypress being unable to download dependencies.
* A logic bug in a Github Action around targeting builds to different environments
* One or more memory leaks in unit tests, leading to unbounded execution time of the test suite and eventual timeouts/failures.

Eventually the reverted code was merged to main. Since this occurred shortly before Wednesday's scheduled production deploy, the OOB deploy was cancelled and the daily deploy was allowed to complete. After confirming the deploy was successful, team members verified restoration of functionality through manual testing in production, through examination of Datadog dashboards, and by requesting confirmation of normal submssion rate from the ES team. 

## Analysis

### How did it happen?

- The original code change was intended to increase code coverage and modularity of the code. None of the routine testing steps (unit tests, end-to-end tests, manual testing in local environment, review instances or staging) displayed the issue that eventually occurred in production.
- During a debrief, engineers from both the 1010 and platform teams expressed confusion about what differences to expect between staging and production environments.

- Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?
- What should ordinarily have been done to prevent this, but wasn't done?
- What could have been done to prevent this, but isn't part of our modus operandi right now.
- 

### What will we change to ensure this doesn't happen again?
_The following ideas for remediation were raised and discussed during the debrief session on 2/21. Final determination of which ones to implement and translation to issues will be completed by the relevant teams.
_

- [#76209](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76209) Consider implementing isolated app deploy for the 1010ez app
- [#75437](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75437) Explore the possibility that the 1010ez introduction page does not have a fall-through/default case in its conditional display logic
- [#76787](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76787) Refine the 1010 team's incident response process to incorporate a wider time range of on-call coverage
- Consider refining automated alerting to distinguish between errors for authenticated/unauthenticated users
- [#76235](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76235) Add additional RUM monitoring attributes to allow for distinguishing between different authenticated/LOA/enrollment status scenarios.
- Consider creating a single place to look for "when was the last deploy" and "what code is currently in production" instead of having to go to multiple sources.
- Consider making deploy information available directly in Datadog so that dashboards can be annotated with deployment events to speed up troubleshooting.
- [#76793](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76793) Consider implementing tighter anomaly thresholds for automated alerting immediately after deployment events
- [#76791](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76791) Consider making maintenance window service mapping more granular to allow disabling single applications rather than all applications that share an upstream dependency.
- Consider automated smoke tests in production (note this would require automated smoke tests to be capable of acting as authenticated, and in this case LOA3, users)
- Platform team has identified an [epic](https://app.zenhub.com/workspaces/reliability-team-633b069d2920b776613c93d8/issues/gh/department-of-veterans-affairs/va.gov-team/72068) containing CI/CD pipeline improvements in response to the overall instability of the pipeline.
- Determine what difference between staging and production exists that accounts for the differing behavior of this code in those environments. Once determined, assess whether to (a) eliminate that difference or (b) document it for increased understanding by VA.gov developers and (c) account for it in automated tests. 

## Resolution
The incident was resolved by reverting the original code change and (eventually) deploying the reverted code to production. 

### What went well
- Point of Contact from the ES team had direct access to the 1010 team in Slack and raised the issue there.
- Connecting the start of the issue to the deployment of the relevant PR occurred fairly quickly.
- The issue did not require a production user with Veteran status to reproduce, meaning non-Veteran team members were able to use their own verified accounts to reproduce the issue. 
- 1010 team was able to engage with platform support and make an orderly decision about daily deploy vs. OOB deploy

### What went wrong
- The issue only occurred in production, not in any lower environments.  All tests (automated and manual) for the original PR were completed successfully.  There was no indication that an issue would be introduced into production.
- Monday's daily production deploy was delayed until after normal east coast working hours, meaning fewer people were around to notice a potential issue.
- The unrelated instability with the CI/CD pipeline increased the time-to-recovery by nearly a full day.
- The team was forced to disable the 1010ezr application even though it was unaffected by this issue, because of the available granularity of maintenance windows.
- The nature of the issue meant that some submissions still succeeded (unauthenticated users, LOA1 users, users who loaded the application before the Monday deploy), making it less likely that an anomaly monitor would catch the issue

### Where we got lucky

**PENDING**  
Describe cases where, ordinarily, you would have expected to or could have encountered a roadblock, or a hurdle in getting to the resolution, but this _accidentally_ didn't happen (i.e. we got _lucky_). Do not include items that are part of standard operating procedure. In other words, describe instances where the process failed successfully. You can also use this to describe where safeguards did kick in, provided those safeguards prevented much worse from precipitating.

## Event Timeline

Include the step that describes when and how the issue was identified (i.e. how you detected that the issue existed).

- `2024-02-09 @ 04:21 PM ET`: [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808) was merged to main. 
- `2024-02-12 @ 05:25 PM ET`: The Daily Deploy was completed - [List of commits deployed](https://github.com/department-of-veterans-affairs/vets-website/compare/v0.1.2510...6bd6d33c9045a79229b63e5228b91827cfd7a1e1)
- `2024-02-13 @ 09:54 AM ET`: Joshua Faulkner posted in the #1010-health-apps Slack channel that the 10-10EZ forms submissions had dramatically dropped off since the previous night around midnight
- `2024-02-13 @ 10:04 AM ET`: Adrian Rollett assisted with some Datadog insights, a Sidekiq retries chart had peaked and had not yet returned to normal
- `2024-02-13 @ 11:09 AM ET`: It was confirmed there were no backend issues reported 
- `2024-02-13 @ 11:24 AM ET`: Validated that authenticated users would be directed to a screen with just the title of the application and the "Need Help" section.  The unauthenticated user flow was unaffected
- `2024-02-13 @ 11:29 AM ET`: A ticket was open with Platform Support for assistance - [Github support ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76020)
- `2024-02-13 @ 11:29 AM ET`: Patrick Bateman was notified of the issue
- `2024-02-13 @ 11:42 AM ET`: Validated that the Staging environment did not experience this issue for either authenticated or unauthenticated users
- `2024-02-13 @ 12:03 PM ET`: Validated that the RUM dashboard in Datadog also showed user session replays where they are not able to view the form as expected
- `2024-02-13 @ 12:05 PM ET`: PagerDuty Maintenance window is placed
- `2024-02-13 @ 01:20 PM ET`: Call started with Matt Long (FE Engineer) and Chapley Watson (Full stack Engineer) to triage the issue and talk through solutions 
- `2024-02-13 @ 01:33 PM ET`: Pulled PagerDuty Maintenance window down to run a quick test after a refresh by Frontend.  This did not work, still experiencing the issue.  Maintenance window placed back up
- `2024-02-13 @ 01:35 PM ET`: Determined that the initial PR #27808 needs to be reverted, this is the only option we have at this time, and cannot complete any testing in lower level environments
- `2024-02-13 @ 01:45 PM ET`: [PR #27962](https://github.com/department-of-veterans-affairs/vets-website/pull/27962) placed for the revert of [PR #27808](https://github.com/department-of-veterans-affairs/vets-website/pull/27808)
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
- `2024-02-14 @ 04:25 PM ET`: Matt Long validated that the 10-10EZ form is accessible to authenticated (LOA3) users by logging into Production with a verified (LOA3) test account


## Contributors

- [@hdjustice](https://github.com/hdjustice)
- [@longmd](https://github.com/@longmd)
- [Patrick Vinograd](https://github.com/@patrickvinograd)

A debrief/discussion of this incident was completed on 2/21/24, facilitated by Patrick Vinograd and including the following representatives from the 1010 and platform teams: Matt Long (1010), Curt Bonade (Platform), Clint Little (Platform), Adrian Rollett (Platform), Heather Justice (1010), Alex Seelig (1010)
