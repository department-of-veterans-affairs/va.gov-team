


# Release Plan: RX Renewal Flow- MVP  (To be Updated- In Progress)

## Background: 

**Product Outline:** : https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/Medical%20Renewal%20Flow%20Items/Updated%20Product%20Brief.md

## Overview

Today, an automatic renewal button on the medication portal is not possible for online medications renewal.

This is due to the the Medications API limitations of not having a direct established correlation between the meds provider and the SM provider in both systems. This correlation is necessary to send the renewal request to the provider through SM.

User Goal: Renew Medications Online for Vista (December 2025-MVP). Note: Post MVP will be Vista and OH Users.




## Step 1: Development
Feature Toggles

| Toggle name | Description |
| ----------- | ----------- |
| `mhv_secure_messaging_medications_renewal_request` | Enables/disables Secure Messaging Medications Renewal Request feature |




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

Udpated HERE


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
    

##  Metrics Based Criteria: (Update HERE)



