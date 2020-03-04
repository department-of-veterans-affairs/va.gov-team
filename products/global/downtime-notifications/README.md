

# Surfacing Downtime Notifications Outline
- GitHub Label: Downtime-Notifications 
- Slack channel: #platform
- Vets.gov link: n/a
- Demo video link: n/a

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement
We want users to know as early as is useful whether a scheduled maintenance event in one of our backend dependencies will preclude their desired actions on Vets.gov. 

Today, we have some advance knowledge of upcoming maintenance windows but no way to surface that information efficiently to our users. We do manual workarounds (deploying a frontend change to display a banner, then reverting it, at) which leads to missing information and an inconsistent user experience, confusion, and frustration. 

## Solution Goals - MVP
For the first iteration of downtime notifications, we are keeping the scope confined to applications that are all or nothing in terms of functionality during an external service experiencing an outage.

**For applications that require authentication**

a. Downtime approaching
   - (Logged in) [informational modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/screenshots/modals/modal-info.png) when landing on the affected application

b. Downtime in effect, application unusable
   - (Logged in) [plain messaging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/screenshots/plain-text-replace-page.png) replaces content below page title on the affected application

**For applications that do *not* require authentication**

a. Downtime approaching
   - [Informational modal](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/screenshots/modals/modal-info.png) when landing on the affected application (for forms, will need different messaging for logged in vs. logged out)

b. Downtime in effect, application unusable
   - [Plain messaging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-system/guidelines/error-handling/screenshots/plain-text-replace-page.png) replaces content below page title on the affected application
  
**Additional implications**

If downtime goes into effect in the middle of a user session -- show applicable alert from (b) or (c) on the next page load.

------ 
### Affected Applications
The following applications should all have downtime notifications implemented during this MVP.
- Claims/Appeals Status
- Health Records
- Secure Messaging
- Veteran ID Card v1
- RX
- Facility Locator
- User Profile
- Post 911 GIB Status

[Spreadsheet about application dependencies](https://docs.google.com/spreadsheets/d/1QtHiKZW5DHpm8oZ8rtNFxCfgVNyIW7UNqaeBDdQg8u4/edit#gid=0)


### User Goals
- As a Veteran I want to know before I begin an action on the site that it will be successful so that I can avoid wasting my time
- As a Veteran I want to understand how a particular system downtime will concretely affect what I can and cannot do on the site so I can use my time wisely 

### Business Goals
- Increase user satisfaction with their experience
- Reduce the amount of developer time and effort it takes to get a downtime notification onto the site
- Increase the regularity and comprehensiveness of downtime notifications 
- Convert one-time visitors to regular users 

## Assumptions
- Users will use the downtime notifications to inform their activities on the site
- Knowing that a given service is down ahead of time is less frustrating than attempting to complete an action and failing
- There won’t be so many downtime notifications on the site that it is visually cluttering and makes it seem like the site never works properly 
- Vets.gov staff will regularly update the downtime notifications application
- We have access to the information we need regarding downtimes

## Requirements and Constraints
Need to map each service to all affected applications


## Discovery Takeaways

## Solution Approach
We will build an API that the frontend queries and uses to conditionally display a banner alerting users to downtime on affected pages. This would need to be broken down to the right granularity of backend service - MVI vs. MVH-SM vs. MHV-RX, etc.

An internal administrative tool to allow us to create/update/delete scheduled downtime events. Key fields needed:

- affected service
- user-facing alert message
- downtime start-end window
- alert start-end window (may be different from above so we can display an alert warning in advance of downtime event)

The UI and backend for the feature would be handled by PagerDuty's maintenance window feature. It allows you to schedule a maintenance window with a list of affected services and a description.

PagerDuty's GET /maintenance_windows endpoint lists all scheduled/active windows. We poll that API periodically (currently every 15 minutes), store the results locally, and expose them via vets-api. Then vets website retrieves the information from vets-api, and we display a banner and disable forms for any services with current or upcoming maintenance windows defined.

Once the maintenance window passes, and our cache of it has expired, the banners go away and forms are re-enabled.

*Pros*
- We don't have to build and host an admin tool ourselves.
- Creating the maintenance window in PagerDuty has a dual effect of instantiating the user notification and silencing PagerDuty alerts that on-call staff would receive for the backend system outage.

*Cons*
- Not as flexible as our own administrative tool.



## Value Propositions - Alignment with North Star Goals

### Increase use of self-service tools	
*Impactful* - users who know a system is down and when it will be available may be more likely to try again when the application is available rather than become frustrated and give up. 

### Faster access to care and more timely delivery of services
*Not impactful*

### Improve experience of users 
*Very impactful* - filling out a form or going through identity proofing can be tedious, and if users aren’t able to complete an action successfully they may become frustrated and lose trust in the site. However, if users know that they application is unusable AND when it is expected to become usesable again, this is a better user experience. 

### Tooling over Process	
*Very impactful* - When there is downtime, sprint teams can individually do things like put a banner on their app pages, disable form submissions, etc. But this requires manual work to create PRs, merge them at the right times (potentially on weekends), and revert them once downtime is over.

### Improves stability, performance, and/or security of Vets.gov
*Not impactful*

## KPIs
- Increased numbers of repeat visitors
- Qualitative positive feedback from users 

---

# Implementation Info

## Status
QA Testing

## Solution Narrative
- **Date**: summary of any big changes and why
- **Date**: summary of any big changes and why

## Team

- VA Executive Sponsor `*`: N/A
- VA Policy Expert(s): N/A
- VA Digital Strategist(s) `*`: N/A
- Product Manager `*`: Leanna Miller Sharkey
- Design Lead: Mel Woodard and Sophia Dengo
- Eng Lead: Patrick Vinograd
- VA Web Comms Partner: 
- VA Contact Center Partner(s): Brenda Torres-Hill
- Production Testing Partner(s):
- Designer(s): 
- Content Writer(s): Danielle Thierry 
- Front-end Engineer(s): Nick Sullivan, Ed Paget
- Back-end Engineer(s): Patrick Vinograd, Wyatt Walter

`*` = approval required for launch

## Resources and Documentation

- Discovery and Research
- [Technical Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/downtime-notifications/TechnicalOverview.md)
- Product specs
- Design
- Roadmap
- ATO documentation

### How to access in staging
- Link:
- Password protection info:
- User authentication info:

### Screenshots
#### Before
#### After


