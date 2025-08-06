# Release Plan: Representative Status 2.0 (In Profile and MyVA)

Feature Toggle/flag:
`representative_status_enable_v2_features` will be disabled prior to staged rollout and will be enabled as part of the 2.0 rollout. 

This feature toggle is setup for authenticated users and we can also enable early access in Production to individual users, via email address.

#### Preparing for Release
- [x] All "launch blocking" items from Staging Review have been addressed
- [x] All "Before release" items have been addressed
- [x] Analtyics Request for Domo dashboard updates - https://github.com/department-of-veterans-affairs/va.gov-team/issues/107490
- [x] Monitoring in the [Profile Datadog dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=sliding&from_ts=1746734846272&to_ts=1747339646272&live=true) is setup
- [x] Contact Center Review - https://github.com/department-of-veterans-affairs/va.gov-team/issues/109902
- [x] Privacy, Security, IA Readiness Review - https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/3986

#### Go/No Go Meeting Thursday, 5/22 1:00pm ET
- [x] Test the 2.0 Profile and MyVA experience in Production
- [x] Review the release plan
- [x] Address any open questions or concerns 
- [x] Determine a verdict

**Verdict:GO!**

# Staged Rollout Details

- Limited production access to the v2 features of Appoint a Representative will be controlled through the frontend feature toggle `representative_status_enable_v2_features`
- Errors will be tracked in Datadog and will trigger a Slack alert to our team channel #benefits-representation-management-notifications, to initiate our rollback process (detailed below)

#### Rollout dates: May 22 - June 2, 2025
_The Profile page typically has ~130k users per week, but it can climb up to ~150k users per week._
1. Stage A: 25% of users (~4.6k users per day) - Thursday, 5/22 + _inform Platform Support in case any issues arise over the holiday weekend_
2. Stage B: 50% of users (~9.2k users per day) - Tuesday, 5/27
4. Stage C: 100% of users (~18.5k users per day) - Monday, 6/2

***

## Rollback Process

While we cannot think of any events that would be critical enough to merit a rollback, the following rollback process has been outlined just in case we need it.

**The rollback process is:**
1. Turn off the frontend feature toggle `representative_status_enable_v2_features` 
   1. Submit a PR
2. Alert the team in [#benefits-representation-management](https://slack.com/archives/C05L6HSJLHM) that the rollback process has been initiated
   1. Include any details as to what triggered the rollback
   2. Tag relevant teammates (@benefits-arm-core, @benefits-ar-enablement)
3. Create a ticket to document:
   1. A summary of what caused the rollback process
   2. Confirmation that the feature toggle has been turned off (or that a PR has been submitted)
   3. Next step ideas for solving the rollback trigger
   4. Other relevant links/images
   5. Link to initial Slack alert for reference
4. Follow up in the Slack alert thread with a link to the ticket

***

## Staged Rollout Metrics
### Stage A
Datadog Endpoint activity:
1. 98.7% success rate for returning a representative status, when the LH API is called ([Rep Status dashboard](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status?fromUser=true&refresh_mode=paused&from_ts=1747897200000&to_ts=1748027517007&live=false))
2. 125 requests to the /profile/accredited-representative URL with a 93.6% success rate for page load. ([Profile dashboard](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/cvt-efh-hzf))
   1. There is one `301` status, indicating "the requested web page has been permanently moved to a new location". This is odd since the URL should be valid, will keep an eye on this one as we advance to Stage B.
   2. There are two `499` statuses, indicating the connection was closed before the page could load.
   3. There are five `304` statuses, indicating the browser used a cached version of the page instead of initiating a new request to load the page.

### Stage B 
Datadog Endpoint activity:
1. 99.0% success rate for the page load, with a total of 5.58k requests to Profile subpage (Profile dashboard)
2. 98.8% success rate for returning a representative status, when the LH API is called (Rep Status dashboard) - no change.

Known issue: [Unexpected No Rep state UI in Profile Production](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110911). The team is actively working to address this and does not feel the UI difference is a critical issue; the user is still presented with the correct representative status and a link to our FAQ page for more info.

## Post Launch Metrics

### 1-Week Results Post-Launch (June 2-9, 2025)
1. 52.5k requests to Lighthouse for the representative status, with a 98.65% success rate. ([Rep Status dashboard](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status?fromUser=true&refresh_mode=paused&from_ts=1747897200000&to_ts=1748027517007&live=false))
   1. This is 2.7x more requests, compared to the 19.21k requests the week prior to staged rollout (May 14-21).
2. 10.59k requests on the frontend, to our /profile/accredited-representative URL, with a 98.92% success rate. ([Profile dashboard](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/cvt-efh-hzf))

### 1-Month Results Post Launch (June 2 - July 2, 2025)

**1 Issue Uncovered + Resolved**: 
1. On June 12, an issue was raised that users were seeing an old/expired representative as still being appointed.
2. On June 16, the root cause was determined -- the "end date" was not being factored into the Lighthouse Benefits Claims API service, for retrieving representative status.
3. On June 23, the issue was resolved -- the "end date" is now factored in to ensure only acitve representation is being reported to users.

**Datadog and Contact Center results:**
1. 287.92k requests to Lighthouse for the representative status, with a 97.16% success rate. ([Rep Status dashboard](https://vagov.ddog-gov.com/dashboard/ttj-p2z-9gh/arm-representative-status?fromUser=false&refresh_mode=paused&from_ts=1748847600000&to_ts=1751525999999&live=false))
   1. This is 3.3x more requests, compared to the 86.23k requests the month prior to staged rollout (May 2025).
   2. Note: June is likely experiencing higher traffic than usual, due to a MyHealtheVet campaign that was delivered to 6 million Veterans and pointed them to Profile (specifically Contact Information, with a call to action to update their email on file).
2. 45.24k requests on the frontend, to our /profile/accredited-representative URL, with a 98.70% success rate. ([Profile dashboard](https://vagov.ddog-gov.com/dashboard/86m-u8e-z5x/authenticated-experience-profile?fromUser=false&refresh_mode=paused&from_ts=1748847600000&to_ts=1751525999999&live=false))
3. Contact Center calls (MyVA411): N/A
4. Feedback survey submmissions (Medallia):
   1. 14 submissions on this URL, 7 of which included feedback. Only 2 submissions included relevant feedback and they speak to the issue detailed above.


