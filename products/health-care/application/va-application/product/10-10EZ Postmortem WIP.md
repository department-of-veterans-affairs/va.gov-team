# 2023-01-24 - HCA API Errors

Fill out every section of this document, if there is no content for a particular section, explicitly call out that there is no content.

## Summary

The gem savon was upgraded. which modifed the XML request.  Once this was deployed, the change caused over 3,900 HCA API errors.  Since yesterday’s afternoon deployment, no successful submissions for the 10-10EZ were completed.  This is also impacting the 10-10EZR, however the impact is low due to the form only at 10% production traffic.


## Impact

Quantified statement about the impact of the incident.

- How many users were affected?
     - Initially, 3,900 Veterans' applications were failing
     - After applications were retried, a total of 5 Veterans' applications failed completely
- What time period were users impacted?
     - Starting on 1/23/2024 at 3:00pm ET to 1/24/2024 at 11:12am ET
- What impact did this have on the SLO?
     - This outage will show in the breakers dashboard


## Ownership

Team: 10-10 Health Apps team

PO: Patrick Bateman

Crew: Health Tools crew

## Stakeholders

Ensure that the list of stakeholders involved are recorded in the post-mortem and must include at the very least (but may not be limited to):

- Product Owner: Patrick Bateman
- Platform Support: Rachal Cassity
- VES contact: Joshua Faulkner
- OCTO Engineer: Adrien Rollett

## Action Items

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Implement a monitor on HTTP calls to es_backend at the fwd proxy/Add Alerts | Data Analytics Work | [@1010-health-apps](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | [10-10 Health Apps - 74405](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74405) and [10-10 Health Apps - 74406](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74406)|
|... Look into the conditions and add a spec that fails with these conditions | TBD | [@Team name TBD](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | TBD|
|Create monitors and filtered logs to prevent large errors from going unnoticed| TBD | [@vfs-platform-support](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | TBD|
| Look into 500s that appeared in staging, potentially adding alerts for staging errors like this | Data Analytics Work | [@1010-health-apps](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | [10-10 Health Apps - 74411](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74411)|


## Root Cause Analysis

Engaged Platform support to assist in triage of the HCA API errors. 
Determined when the issue first showed up, reviewed datadogs reports and PRs that lined up with the timing.
We were able to look into the Staging env which helped us narrow the source of the issue.
**@Ryan we need more here**

... This section provides a detailed analysis of the event and provides this analysis from a systemic vantage point. Post-mortems are not intended as a "self-criticism" event, but rather as an opportunity to document, learn and improve. This section focuses on providing that input into the learning and adaptation process.

### What happened?

An update caused HCA Requests to the HCA service to fail.
**@Ryan we need more here**

... Describe in detail what actually happened and what the downstream effect of the event was outside of the information provided in the "Impact" section. Provide insight into the dependencies between the different moving parts of the problem-space. Start from earliest known trigger and work your way through the cascading events.

### Why did it happen?

The gem savon was upgraded. In this [PR #14930](https://github.com/department-of-veterans-affairs/vets-api/pull/14930), a cassette was manually modified that bypassed the error.

This update impacted how SOAP requests were throwing errors, causing the HCA API errors.

**@Ryan we need more here**

... - Which mitigations were in place that should have prevented this, but failed to prevent it? How and why did these mitigations fail?
- What should ordinarily have been done to prevent this, but wasn't done?
- What could have been done to prevent this, but isn't part of our modus operandi right now.

### What will we change to ensure this doesn't happen again?

- Implement a monitor on HTTP calls to es_backend at the fwd proxy, add alerts
- Look into 500s that appeared in staging, potentially adding alerts for staging errors like this

These monitors and alerts can be created and accessed in Datadog by the 10-10 Health Apps team.
Alerts will be tied to the #health-tools-1010-apm Slack channel that notifies all 10-10 Health Apps team members.
- Once notified, the team will begin an investigation into the error and root cause.
- If assistance is needed, the team will engage the #vfs-platform-support Slack channel

- Look into the conditions and add a spec that fails with these conditions
- Create monitors and filtered logs to prevent large errors from going unnoticed

**@Ryan we need more here**

... Provide recommendations and concrete plans of action of how you will provide a systemic defense against this type of issue happening again in the future, including how will you ensure these recommendations are implemented & measured? How will you know if these new activities fail(ed)? In most cases, steps listed here should have corresponding action items.

## Resolution

[PR #14930](https://github.com/department-of-veterans-affairs/vets-api/pull/14930/files) was found to be the source of the issue.  The commit was reverted and redeployment was completed.  After about 10 minutes, the 10-10EZ submissions reported successful.  All 10-10EZ applications that were in a "retry" state were retried succesfully.

### What went well

With the assistance of Patrick Bateman, Adrian Rollett, Rachal Cassity and Lihan Li, the issue was found and resolved within 2 hours of being reported.  Since the issue started showing up in the Staging environment prior to the production deployment, it was a bit easier to narrow down the offending commit and revert it quickly. The impact to Veterans was minimized to several dozen 10-10EZs taking a little bit longer than usual to reach the enrollment system.


### What went wrong

... Describe instances where our standard operating procedure around how getting to a resolution for this issue failed. This is a meta-question and deals with the process of this specific incident (not the process in general).
Explicitly list 'N/A' if there are no such instances.
**@Ryan we need more here**

### Where we got lucky

We were able to see the errors occuring in Staging on the previous day, which led to a quick discovery of the issue source.

## Event Timeline

Include the step that describes when and how the issue was identified (i.e. how you detected that the issue existed).

- `2024-01-24 @ 9:15 AM ET`: During a routine review of Datadog, it was noticed that there have been only HCA API errors being logged, and no submissions since the previous day at approximately 3:00 PM ET. Patrick Bateman was tagged in a Slack message to the 10-10 Health Apps team (#1010-health-apps channel)
- `2024-01-24 @ 09:16 AM ET`: A Pagerduty Maintenance Window was put in place
- `2024-01-24 @ 09:16 AM ET`: Issue was [reported to Platform Support](https://dsva.slack.com/archives/CBU0KDSB1/p1706105805136009) (#vfs-platform-support Slack channel) - [Github issue #74356](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74356) was opened by Rachal Cassity
- `2024-01-24 @ 09:37 AM ET`: Sent message to Joshua Faulkner to find out if any issues were being experienced on the VES side
- `2024-01-24 @ 09:39 AM ET`: Adrien Rollett and Patrick Bateman started the triage, reviewing various Datadog monitors.  A [PR #15229](https://github.com/department-of-veterans-affairs/vets-api/commit/43c4c4b4dee582b00fd413d2f328df5b28e08dfe) was found to have changes to rest_client and http libraries.  This was thought to be the source of the issue.
- `2024-01-24 @ 09:46 AM ET`: The Pagerduty Maintenance Window was removed
- `2024-01-24 @ 10:05 AM ET`: PR was reverted and redeployed to production
- `2024-01-24 @ 10:17 AM ET`: Noticed that the HCA API was not coming back online and submission failures were still occuring.  The reverted PR was not the source of the issue.
- `2024-01-24 @ 10:17 AM ET`: It was found that the errors were occuring in the Staging environment since the previous day's deployment.
- `2024-01-24 @ 10:30 AM ET`: Investigating the issue in Staging assisted in narrowing down the source of the problem
- `2024-01-24 @ 10:33 AM ET`: [PR #14930](https://github.com/department-of-veterans-affairs/vets-api/pull/14930/files) was found that updated savon/httpi
- `2024-01-24 @ 10:35 AM ET`: A Sentry log was found to identify the first time the error occured in Staging, confirming we were on the right track
- `2024-01-24 @ 11:03 AM ET`: PR was reverted and redeployment started
- `2024-01-24 @ 11:12 AM ET`: Confirmed 10-10EZ forms were now being succesfully submitted
- `2024-01-24 @ 11:15 AM ET`: All 10-10EZ and 10-10EZR forms that were still in a retry cycle were successfully retried
- `2024-01-24 @ 01:40 PM ET`: Joshua Faulkner responded that there were no issues seen on the VES side, although they can see the gap in submissions from 3PM ET 1/23 to 11AM ET 1/24.
- ...

## Contributors

- [@hdjustice](https://github.com/hdjustice)
- [@rachalcassity](https://github.com/RachalCassity)https://github.com/RachalCassity
- [@ryan-mcneil]([url](https://github.com/ryan-mcneil))
- @alexseelig https://github.com/alexseelig
