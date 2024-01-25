# 2023-01-24 - HCA API Errors

## Summary

The gem savon was upgraded, which modifed the SOAP request's XML payload.  Once this was deployed, the change caused over 3,900 HCA API errors.  Since yesterday’s afternoon deployment, no successful submissions for the 10-10EZ were completed.  This is also impacting the 10-10EZR, however the impact is low due to the form only at 10% production traffic.


## Impact

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

- Product Owner: Patrick Bateman
- Platform Support: Rachal Cassity
- VES contact: Joshua Faulkner
- OCTO Engineer: Adrian Rollett

## Action Items

| Description | Type | Owning Team | Issue # |
| --- | --- | --- | --- |
| Implement a monitor on HTTP calls to es_backend at the fwd proxy/Add Alerts | Data Analytics Work | [@1010-health-apps](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | [10-10 Health Apps - 74405](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74405) and [10-10 Health Apps - 74406](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74406)|
|Create monitors and filtered logs to prevent large errors from going unnoticed| TBD | [@vfs-platform-support](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) [@1010-health-apps](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | TBD|
| Look into 500s that appeared in staging, potentially adding alerts for staging errors like this | Data Analytics Work | [@1010-health-apps](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team) | [10-10 Health Apps - 74411](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74411)|
|External service outage monitors in staging and prod (will be up later today 1/25) | TBD | [@vfs-platform-support](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team)    | TBD|
|The backend engineers are gathering error trends and logs. These tools will make it easy for developers to monitor their changes after deployment in all environments. | TBD | [@vfs-platform-support](https://github.com/orgs/department-of-veterans-affairs/teams/owning-team)    | TBD|

## Root Cause Analysis

### What happened?

- The upgrade to the savon gem impacted how SOAP/XML payloads got serialized. This changes the contents of the request to the enrollment system.
- VCR cassettes are essentially a contract - , if vets-api sends this request, the upstream system will send this response back. (albeit a brittle contract since it represents a point in time, in this case 2017)
- The developer focused on making specs pass, so manually changed the contents of the VCR cassette to match what savon was now generating.
- But, this effectively broke the contract with enrollment system, by unilaterally changing the request. Essentially the cassette no longer matches reality because the upstream system has never indicated that it will generate the same response to the updated request. 
- To mitigate, either need to (a) make sure the request payload remains unchanged with the updated gem or (b) re-record the cassettes, in other words make sure that given (new request payload), the upstream will still return (expected response). 


### Why did it happen?

The gem savon was upgraded. This update impacted how SOAP requests were throwing errors, causing the HCA API errors. In this [PR #14930](https://github.com/department-of-veterans-affairs/vets-api/pull/14930), the gem was bumped and the cassette that would have raised this error was manually modified, unintentionally hiding the error. As a result of not being able to see the error, the 10-10 Team was unable to intervene until the error reached Production.


### What will we change to ensure this doesn't happen again?

- Avoid manual changes to VCR cassettes unless absolutely neccessary, and consult with other teams who may be impacted by the downstream effects
- Implement a monitor on HTTP calls to es_backend at the fwd proxy and add alerts
- Look into 500s that appeared in staging, potentially adding alerts for staging errors like this
- Look into the conditions and add a spec that fails with these conditions
- Create monitors and filtered logs to prevent large errors from going unnoticed
- Create monitors for Staging so that we're immediately made aware if health checks are failing
- Discuss better practices for re-recording cassettes when deemed necessary
- Broadcast why manually changing a VCR cassette is a major risk to as many backend developers as possible (both platform and VFS).
- Consider adding a check to the CI pipeline to detect manual changes to VCR cassettes, for extra scrutiny (one indication is that the Date header is unchanged, indicating the VCR cassette was not actually re-recorded). I don't know if this one is worth the implementation effort.
- Overall, lack of ability to re-record VCR cassettes is a systemic risk to vets-api - consider a larger backlog item to make this a more feasible routine maintenance item. (For reference, the HCA cassettes were recorded in 2017)
- External service outage monitors in staging and prod (will be up later today 1/25).
- The backend engineers are gathering error trends and logs. These tools will make it easy for developers to monitor their changes after deployment in all environments.

## Resolution

[PR #14930](https://github.com/department-of-veterans-affairs/vets-api/pull/14930/files) was found to be the source of the issue.  The commit was reverted and redeployment was completed.  After about 10 minutes, the 10-10EZ submissions reported successful. All 10-10EZ applications that were in a "retry" state were retried succesfully.

The 10-10 Team went through DataDog and Sentry logs to retrieve information from Veterans who tried and failed to submit 10-10EZ and EZRs so that the HEC team could follow up with these Veterans as needed.

### What went well

With the assistance of Patrick Bateman, Adrian Rollett, Rachal Cassity and Lihan Li, the issue was found and resolved within two (2) hours of being reported.  Since the issue started showing up in the Staging environment prior to the Production deployment, it was easier to narrow down the offending commit and revert it quickly. The impact to Veterans was minimized to several dozen 10-10EZs taking a little bit longer than usual to reach the enrollment system.  There were a total of five (5) forms, including three (3) 10-10EZs and two (2) 10-10EZRs, that exceeded submission retries and did not flow through application processing.  The Veteran contact information was retrieved and send directly to Health Enrollment center staff to contact and assist with getting their information submitted.  This was approximately a 24-hour delay from their original submission time.


### What went wrong

* We seem to have health checks in place to help catch similar issues, but nobody noticed them because we don't have strict monitoring in Staging
* Cassettes were modified that would have protected us from the incident. One should be absolutely confident in their changes before manually modifying a casette.

### Where we got lucky

We were able to see the errors occuring in Staging on the previous day, which led to a quick discovery of the issue source.

## Event Timeline

- `2024-01-22 @ 05:10 PM ET`: [PR #15229](https://github.com/department-of-veterans-affairs/vets-api/commit/43c4c4b4dee582b00fd413d2f328df5b28e08dfe) was created
- `2024-01-22 @ 05:37 PM ET`: [PR #15229](https://github.com/department-of-veterans-affairs/vets-api/commit/43c4c4b4dee582b00fd413d2f328df5b28e08dfe) was merged and deployed to Staging
- `2024-01-23 @ 03:00 PM ET`: [PR #15229](https://github.com/department-of-veterans-affairs/vets-api/commit/43c4c4b4dee582b00fd413d2f328df5b28e08dfe) was deployed to Production
- `2024-01-24 @ 9:15 AM ET`: During a routine review of Datadog, it was noticed that there have been only HCA API errors being logged, and no submissions since the previous day at approximately 3:00 PM ET. Patrick Bateman was tagged in a Slack message to the 10-10 Health Apps team (#1010-health-apps channel)
- `2024-01-24 @ 09:16 AM ET`: A Pagerduty Maintenance Window was put in place
- `2024-01-24 @ 09:16 AM ET`: Issue was [reported to Platform Support](https://dsva.slack.com/archives/CBU0KDSB1/p1706105805136009) (#vfs-platform-support Slack channel) - [Github issue #74356](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74356) was opened by Rachal Cassity
- `2024-01-24 @ 09:37 AM ET`: Sent message to Joshua Faulkner to find out if any issues were being experienced on the VES side
- `2024-01-24 @ 09:39 AM ET`: Adrian Rollett and Patrick Bateman started the triage, reviewing various Datadog monitors.  A [PR #15229](https://github.com/department-of-veterans-affairs/vets-api/commit/43c4c4b4dee582b00fd413d2f328df5b28e08dfe) was found to have changes to rest_client and http libraries.  This was thought to be the source of the issue.
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
- `2024-01-24 @ 01:59 PM ET`: The contact information for all five (5) Veterans that were impacted by this issue wwas sent to the Health Eligibility/Enrollment center
- `2024-01-24 @ 01:40 PM ET`: Joshua Faulkner responded that there were no issues seen on the VES side, although they can see the gap in submissions from 6PM ET 1/23 to 11AM ET 1/24.
- `2024-01-25 @ 11:07 AM ET`: Sent follow up email to HEC requesting acknowledgment of receiving the Veteran contact info and will be reaching out.

## Contributors

- [@hdjustice](https://github.com/hdjustice)
- [@rachalcassity](https://github.com/RachalCassity)
- [@ryan-mcneil](https://github.com/ryan-mcneil)
- [@alexseelig](https://github.com/alexseelig)
