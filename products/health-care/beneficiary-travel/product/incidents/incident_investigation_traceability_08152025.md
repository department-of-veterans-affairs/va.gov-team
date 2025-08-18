# Incident Investigation Traceability 08/15/2025

## Summary of the incident
On 8/14 @ 5:25pm ET, a platform team member noticed an increase in the number of errors for Travel Pay SMOC on mobile. Investigation began that evening and was picked back up on 8/15 @ 9:00am ET. After some investigation we discovered the root cause of the issue to be stale/outdated/incorrect Veteran status (is this user a Veteran or not?) in the BTSSS CRM. The timing of the increase in errors (to ~9%) coincided with the latest deploy of the mobile app. This problem was apparently ongoing but only was noticed when the amount of users increased.

## Relevant Slack Threads
- https://dsva.slack.com/archives/C05UTPZRZFY/p1755206730237449
- https://dsva.slack.com/archives/C05UTPZRZFY/p1755263237873709

## Action Items
- Make a datadog monitor specifically for catching issue like this in mobile.
- Add error handling in the appointment service to log errors that capture the 403
- Investigate if there is a way to check `is a Veteran` on mobile before allowing travel-pay related actions
- Implement `is a Veteran` check on mobile

## Timeline
1. Rachal Cassidy reached out in the #beneficiary-travel-team channel alerting us that in the past 3 days, she's seen a more-than-normal issue
2. Notified stakeholders and partners using the incident repsonse plan v2.
3. Collabed with Josh Patterson and traced it down to 403s from assumed non-Veterans trying to submit claims.
4. Lined up timing of uptick in errors with mobile release on 8/12
5. Liz and Josh pointed out that users should not be able to get to the point of submission because all routes should return a 403 if a non-Veteran.
6. Veteran data being stale is an ongoing issue and Josh mentioned it is stale because the logic for IDing a Veteran in BTSSS changed
7. We talked about the fact that MHV has `is a Veteran`-gating, but it's hard to make that `is-a-Veteran` determination on mobile, which may contribute to the higher errors on mobile than on web

### Mobile release timing lines up with uptick in errors
<img width="1534" height="140" alt="image" src="https://github.com/user-attachments/assets/40c5636f-ca9d-4be1-9950-c2724618a6d7" />
It is feasible that we see an uptick in errors because mobile users have to intentionally update the application. If enough word got out about the ease of submitting travel pay on mobile, it could
cause more Users to update to get the latest features. This increase in app users could cause an increase in the number of users who have stale Veteran status in BTSSS and experience errors.

## Investigation Log
_Use this section to keep a log of the debugging avenues you went down. Be detailed in this section._

* I first validated that the problem Rachal was seeing was actually an issue and not a fluke.
* Then I wondered why we weren't the first to know about this issue - it turns out we don't have a mobile monitor set up to catch/alert us to the problem.
* I pinpointed the vets-api call to fetching the claim in the smoc_service.rb:47
* I further pinpointed the travel pay API call to `POST /eis/api/btsss/travelclaim/api/v2/appointments/find-or-add`
* Messaged Josh Patterson in slack to ask for API-side correlation
* Josh tied it to a 403 response, with no actual invocation of the CRM, which led him to believe it was a non-Veteran trying to submit a claim
* Unclear right now if it's happening more than usual.
* Turns out it is happening more than ususal - Josh thinks it's due to stale or inaccurate Veteran indicator data in BTSSS.
* Trying to reverse engineer a whole request from the error to see if there's anything I can glean from the whole process (incl claim association to appts)
  * I traced the whole session of a user who experience the error above by:
    * going to the error at a top level
    * Clicking the Trace tab
    * Clicking the lowest erroring bar in the flame graph
    * Clicking "View trace in APM"
    * Clicking the Logs tab
    * Clicking a log that I knew to be from vets-api (I knew by matching the log content in datadog with the log content in the code)
    * Enabling the `@payload.session` column from the column options
    * Searching for that session id by replacing the search bar content with `@payload.session:sessionid_from_before`
  * I found the log that matches find appointments by date
  * I clicked on the trace tab
  * I found the erroring `GET` call in the flame graph
  * I viewed the trace in APM to verify that it was **also getting a 403**
* Liz looked into it and found we _do not_ do an `is a Veteran` check on Mobile
