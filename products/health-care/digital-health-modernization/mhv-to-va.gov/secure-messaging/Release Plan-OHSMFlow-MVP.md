

# Release Plan: Update Start a New Message Flow for Oracle Health

## Background: 

**Product Outline:** https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/oh_recipient_groups/initiative-brief.md

## Hypothesis

If we change the user flow for sending a new message then we expect it will be able to accommodate very different data structure for triage groups coming from Oracle Health, so that any user will be able to send a new message no matter what EHR their facility runs on.


## Step 1: Development
Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| Add MVP Feature toggle here- `mhv_secure_messaging_curated_list_flow` | Add description here-XX |
| Add Recent Recipient Feature toggle here- `mhv_secure_messaging_recent_recipients` | Add Description here-XX |

Replace existing toggle we are using with a new one to decouple from OH integration work

1. Create a feature toggle for post MVP and Post MVP recent recipient work
which will allow for flexibility

2. With the Plan for releaseing the FULL Feature (MVP and Post MVP), creating 2 feature toggles will allows us to flip when need be for that full release


## Step 2: Validation  

Since we use a [continuous delivery](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-process) model, once code is in the `main` branch, it will be deployed within 24 hours. 

Before enabling your feature toggle in production, you'll need to:

- [ ] Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing).
- [ ] Have your team perform as much validation in staging as possible. Validation may be challenging for some teams and systems due to downstream requirements, but the staging system should mimic the production system as much as possible.
- [ ] Work any downstream or dependant systems proactively to ensure that the feature is ready for use once it hits production.
- [ ] Have a go/no go meeting with the team to ensure that the feature is ready for use and signed off by each discipline and your DEPO/OCTO contact. During this meeting, you'll need to:
  - [ ] review the plan with your DEPO/OCTO representative.
  - [ ] review the release plan with your team.

## Step 3: Production rollout

### Do I need a staged rollout? 

**Yes**

MVP and Post MVP will Launch together. Separate Feature toggles
A defined set of users will be whitelisted in `mhv_secure_messaging_curated_list_flow` Flipper toggle to gain access to the new experience


### Define the Rollback process

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

## Overall Roll out Plan: Staged Release: Full Release- (MVP and Post MVP) (ALL USERS)

Staged Rollout (also known as unmoderated production testing)
Rollout Planning
Desired date range: **UPDATE DATE HERE**

-How will you make the product available in production while limiting the number of users who can find/access it: **By using a feature flag.**

-What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**Metrics Criteria Defined Below.**

-Links to the dashboard showing "success criteria" metrics: **ADD Data Dashboard Link Here**

-Who is monitoring the dashboard(s)?: **UX Leads, Engineering Lead, and Product Manager**
    

##  Metrics Based Criteria:

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


Release Monitoring Github: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/research/feedback-systems/rollout-monitoring/send-new-message-flow0925.md



## Monitoring (Post Monitoring Documentation)- To be Updated once monitoring begins


**Stage A: 5% of users**
Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**
-Length of time: 1 day, January 15 (Update Here_
-Percentage of Users (and roughly how many users do you expect this to be):**5%**

**Results**
-Number of unique users: XX
-Metrics at this stage (per your "success criteria"): please see detailed MVP monitoring doc
-Was any downstream service affected by the change?: No
-Types of errors logged: XX (Update Here)
-What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None, except for error messaging change

**Stage B: 25% of users**
Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**
-Length of time: 
-Percentage of Users (and roughly how many users do you expect this to be): **25%**

**Results**
-Number of unique users: 
-Metrics at this stage (per your "success criteria"): please see detailed MVP monitoring doc
-Was any downstream service affected by the change?: No
-Types of errors logged: 
-What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? None, except for error messaging change

**Stage C: 50% of users**
Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**
-Length of time: 
-Percentage of Users (and roughly how many users do you expect this to be): **50%**

**Results**
-Number of unique users: XX
-Metrics at this stage (per your "success criteria"): please see detailed MVP monitoring doc
-Was any downstream service affected by the change?: No
-Types of errors logged: XX
-What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?: None


**Stage D: 75% of users**
Test a larger user population to ensure larger usage patterns expose no issues.

**Planning**
-Length of time: XX
-Percentage of Users (and roughly how many users do you expect this to be): **75%**

**Results**
-Number of unique users: XX
-Metrics at this stage (per your "success criteria"): please see detailed MVP monitoring doc
-Was any downstream service affected by the change?: No
-Types of errors logged: XX
-What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges?: Error messaging for pages - work ongoing.


**Stage E: 100% of users**
**Planning**
-Length of time: XX
-Percentage of Users: **100%**

**Results**
-Number of unique users: XX
-Metrics at this stage (per your "success criteria"): please see detailed MVP monitoring doc
-Was any downstream service affected by the change?: [PICK_ONE]: no
-Types of errors logged: XX
-What changes (if any) are necessarily based on the logs, feedback on user challenges, or VA challenges? Error messaging deploys on Monday




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



