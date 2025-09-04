# --DRAFT-- (In Progress)

# Update Start a New Message Flow: Release Plan (MVP and Post MVP)
## Guidance

_This Release Plan Template is intended to help ensure your new message flow for OH product is ready for MVP launch and will deliver the desired user outcomes._

## Product Outline (Background)

## MVP: Update Start a New Message Flow

EPIC: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=123015170&issue=department-of-veterans-affairs%7Cva.gov-team%7C116017

**Summary:** The "send a new message" flow must expand into additional screens in order to accommodate variations in data for triage groups that come in from Oracle Health. This work is "done" when Veterans can message providers at facilities operating on either EHR successfully.

## Hypothesis

If we change the user flow for sending a new message then we expect it will be able to accommodate very different data structure for triage groups coming from Oracle Health, so that any user will be able to send a new message no matter what EHR their facility runs on.

**Target: Readiness by Week of 9/2/25**

**Staging Review- 9/5/25**

## Post MVP: Add Recent Recipient Flow

EPIC: https://github.com/orgs/department-of-veterans-affairs/projects/1729/views/1?pane=issue&itemId=126050940&issue=department-of-veterans-affairs%7Cva.gov-team%7C117885

**Summary:**
-Building out a new "shortcut" screen at va.gov/my-health/secure-messages/new-message/recent to allow Veterans to quickly identify -their most recently messaged care providers
-Adding those same recent care providers into the combo box component on the /select-care-teams page
-Adjusting the flow for users who do not have any recent recipients

**Staging Review- 9/25/24**



## Step 3: Production rollout

### Do I need a staged rollout?

MVP and Post MVP will Luanch together. Separate Feature toggles
A defined set of users will be whitelisted in `mhv_secure_messaging_cerner_pilot` Flipper toggle to gain access to the new experience


## Overall Roll out Plan: Release the FULL (MVP and Post MVP (Recent Recipient Flow)  together)

Small % Release Rollout then 100% to All Users

1. Replace existing toggle we are using with a new one to decouple from OH integration work

2. Utilize a separate feature toggle recent recipient which will avoid  delaying % release until the FULL feature (including recent recipients). This will ensure that  some users who may be accessing the recent recipient flow while it is still in progress with the team avoid seeing work that is undone




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



## Post MVP Metrics Launch Plan

1. **Data Dog**: Increasing DD collection to 100% for those users on the new flow

2. **Error rates** - the base for comparison, data from the new flow can be separated out and compared to base.  This will require some eng capacity (estimated a full day for dashboard build)


3. **CSAT** - continue to monitor CSAT for the base, and the new flows.  We should be able to break out the new flows with URLs and compare feedback.

4. **Messsages**- Number of messages successfully submitted by platform - this is already tracked




## Datadog Dashboard

Parent [MHV Secure Messaging Metrics Dashboard](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics) contains [additional section](https://vagov.ddog-gov.com/dashboard/39q-93p-ftw/mhv-secure-messaging-metrics?tile_focus=8373464859678247) to monitor additional metrics for the introduced functionality

| Metric Name | Description |
| ----------- | ----------- |
| [web] New Drafts created on va.gov| count of requests grouped by status code  |
| [web] Drafts updated on va.gov | count of requests grouped by status code |
| [web] Drafts deleted on va.gov| count of requests grouped by status code |
| [web] Messages Sent on va.gov| count of requests grouped by status code |
| [web] Latency - Drafts/Send Message| metrics on latency for requests above sampled only for user of the new flow on `/select-care-team` page  |
| [web] click on Care System Radio button | RUM metrics to track interaction with new care system selection radio button |
| [web] click on "Update your contact list" link | RUM metrics to track interaction with URL on `/new-message/select-care-team` page |
| [web] click on "Can't find your care team" link | RUM metrics to track interaction with URL on `/new-message/select-care-team` page |
| [web] click on "Select different care team" link | RUM metrics to track interaction with URL on `/new-message/start-message` page |


**User-Facing Metrics (Google Analytics and Call Center)**- Applicable here or chop?

| Metric Name | Description |
| ----------- | ----------- |
|  |  |
| |  |
|  | |






## Post-launch Questions

*To be completed once you have gathered your initial set of data, as outlined above.*

1. What percentage of overall SM users are sending new messages each month?
2. How many do they send on average?
3. What is the breakdown of those users on mobile v. desktop devices (web)?
4. How many VHAB mobile app users send new messages each month?
5. Pie chart: What % of users are sending messages across each of these spaces:
     My VA Health (OH platform)
     My HealtheVet on VA.gov (web)
     VHAB mobile app
6. Does the expansion of the "start a new message" flow impact the # of users submitting messages in a negative way?
     Is there a decrease in how many users are sending messages, or how many messages they're sending as a result of this flow?
7. Is the the /new-message/recent page serving most users?
     What % of overall users benefit from this "shortcut" page and are able to select a care team here, and directly go to the /new-     message/start-message page (bypassing /new-message/select-care-teams page)?
     What % of users select "a different care team" from the radio button options?
     Path analysis: what % of users go from /recent directly to /start-message (found the team they were looking for)
     Path analysis: what % of users go from this page to/select-care-team page (did not find the team they were looking for)

8. What percentage of new messages throw an error upon submission?



