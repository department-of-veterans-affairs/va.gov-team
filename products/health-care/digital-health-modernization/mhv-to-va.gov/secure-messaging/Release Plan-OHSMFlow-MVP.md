# --DRAFT-- (In Progress)

# Update Start a New Message Flow: MVP Release Plan
## Guidance

_This Release Plan Template is intended to help ensure your new message flow for OH product is ready for MVP launch and will deliver the desired user outcomes._

**Target: Readiness by Week of 9/2/25**

**Staging Review- 9/5/25**


## Product Outline (Background)

As a Veteran with Oracle Health facilities in my profile, I need to be able to find and select the care team when I send a new message, so that I can continue to manage my care and communicate with my providers.

**MVP Epic**: Here: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=123015170&issue=department-of-veterans-affairs%7Cva.gov-team%7C116017

**MVP Staging Review Epic**: Here: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=123018281&issue=department-of-veterans-affairs%7Cva.gov-team%7C116023

## Hypothesis

If we change the user flow for sending a new message then we expect it will be able to accommodate very different data structure for triage groups coming from Oracle Health, so that any user will be able to send a new message no matter what EHR their facility runs on.

_Note: This realease will be staged approach with an MVP target for the week of 9/2 and staging review for 9/6 estimated as noted above_

## Step 3: Production rollout

### Do I need a staged rollout?

Yes

### Define the Rollback process (To be Updated-does not apply to SM, below is just a SAMPLE template)

**(Need Eng Input Here-Below is an example)**

Our PM, Engineering Lead, Research Lead, and stakeholders will monitor analytics both on Google Analytics and DataDog. If they see a spike in errors or unexpected behavior, they will flag to the engineering team that there is a problem. The engineering team will do the following:
#### If a critical severity issue
1. The feature toggle will be disabled for all users
2. Debugging will start immediately
3. The fix will be tested and deployed through normal CI/CD practices
4. The feature toggle will be re-enabled, possibly at a lower percentage of logged-in users
#### If a high-severity issue
1. The feature toggle will remain enabled, possibly at a reduction of availability (e.g. lowered percentage of logged in users)
2. The offending commit will be reverted through normal `git` operations
3. Remove offending code by deploying the revert commit
4. A fix will be highly prioritized and worked on
5. The fix will be tested and deployed through normal CI/CD practices
#### If a low-severity issue
1. The toggle will remain enabled with no reduction in availability
2. A fix will be prioritized and worked on
3. The fix will be tested and deployed through normal CI/CD practices, with no interruption to feature uptime.

### Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)

#### Rollout Planning  (Sample)

- Date range or test duration: Aug 22 - Sept 4
- Number of users: 2
- How you'll recruit the right production test users: We have identified two BAH Veterans
- How you'll conduct the testing: UAT
- How you'll give the test users access to the product in production w/o making it live on VA.gov: Through use of a feature flag

#### Results  (Sample)

- Number of users: 2
- Number of bugs identified / fixed: 2
  - STS Bug: Our service account wasn't configured correctly to include the ICN; team resolved this.
  - Incorrect config: The team was using out-of-date credentials; upstream service provided us with the updated credentials.
  - Overwrite issue: our request headers were getting overridden - the root cause was the need to support two API keys, but our team was able to resolve this as well.
- Was any downstream service affected by the change?: No
- Types of errors logged: N/A
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: No
- Latency: For succesful responses to the API, we had between 4 seconds and 23 seconds of latency. The team suspects that latency had a positive correlation with number of claims.


team was able to resolve this as well.
- Was any downstream service affected by the change?: No
- Types of errors logged: N/A
- Any changes necessary based on the logs, feedback on user challenges, or VA challenges? [PICK_ONE]: No
- Latency: For succesful responses to the API, we had between 4 seconds and 23 seconds of latency. The team suspects that latency had a positive correlation with number of claims.

## Post MVP Metrics Launch Plan

1. **Data Dog**: Increasing DD collection to 100% for those users on the new flow

2. **Error rates** - the base for comparison, data from the new flow can be separated out and compared to base.  This will require some eng capacity.



3. **CSAT** - continue to monitor CSAT for the base, and the new flows.  We should be able to break out the new flows with URLs and compare feedback.

4. **Messsages**- Number of messages successfully submitted by platform - this is already tracked




## Datadog Dashboard  (Input from ENG- Alex)

Add Link HERE

| Metric Name | Description |
| ----------- | ----------- |
|  |  |
| |  |
|  | |

**User-Facing Metrics (Google Analytics and Call Center)**

Add Link Here

| Metric Name | Description |
| ----------- | ----------- |
| |  |
|  |  |
| |  |
| |  |
|  |  |
|  |  |
| |  |







## Post-launch Questions

**Post MVP Epic Here**: Here: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=126050940&issue=department-of-veterans-affairs%7Cva.gov-team%7C117885

*To be completed once you have gathered your initial set of data, as outlined above.*

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were/were not validated?
4. How might your product evolve now or in the future based on these results?


