## Incident Investigation Traceability 08/15/2025

## Summary of the incident
_Leave blank until incident is resolved, then summarize the issue and its resolution as a BLUF_

## Action Items
- Make a datadog monitor specifically for catching issue like this in mobile.

## Timeline
1. Rachal Cassidy reached out in the #beneficiary-travel-team channel alerting us that in the past 3 days, she's seen a more-than-normal issue
2. Notified stakeholders and partners using the incident repsonse plan v2.
3. Collabed with Josh Patterson and traced it down to 403s from assumed non-Veterans trying to submit claims.
4. Lined up timing of uptick in errors with mobile release on 8/12
<img width="1534" height="140" alt="image" src="https://github.com/user-attachments/assets/40c5636f-ca9d-4be1-9950-c2724618a6d7" />


## Investigatoin Log
_Use this section to keep a log of the debugging avenues you went down. Be detailed in this section._

* I first validated that the problem Rachal was seeing was actually an issue and not a fluke.
* Then I wondered why we weren't the first to know about this issue - it turns out we don't have a mobile monitor set up to catch/alert us to the problem.
* I pinpointed the vets-api call to fetching the claim in the smoc_service.rb:47
* I further pinpointed the travel pay API call to `POST /eis/api/btsss/travelclaim/api/v2/appointments/find-or-add`
* Messaged Josh Patterson in slack to ask for API-side correlation
* Josh tied it to a 403 response, with no actual invocation of the CRM, which led him to believe it was a non-Veteran trying to submit a claim
* Unclear right now if it's happening more than usual.
* Turns out it is happening more than ususal - Josh thinks it's due to stale or inaccurate Veteran indicator data in BTSSS.
