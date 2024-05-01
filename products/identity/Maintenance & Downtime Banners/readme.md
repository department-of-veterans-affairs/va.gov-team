# Maintenance & Downtime Banners

## Overview
Make it easier for users of VA.gov to know when the site is going to be down for upcoming maintenance, or is down for current maintenance.

- Documented process for publishing downtime/uptime/maintenance.
- Workflow/Process for publishing outage banner alerts or planned maintenance with roles/responsibilities/timelines.
- Updated content for banner messages to ensure accuracy/consistency
- Alternative methods for Veterans to achieve tasks, if any.

This maps to _O1KR2: VA.gov authentication SLOs are developed._


## Problem Statement
There are currently inadequate downtime & maintenance communications for VA.gov authentication services. This can lead to confusion and frustration for VA.gov users when the site is down for either scheduled maintenance or unexpected reasons.  A full overhaul of the process is needed, so that we may fully communicate downtime to our customers.

## Relevant Documents:
* [Product Refinement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Maintenance%20%26%20Downtime%20Banners/Product%20Refinement%20Excerpts.md)
* [Content Research For Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/Content%20research%20for%20Veterans.md)

## What's In Scope: 

- Established process for publishing downtime.
- Established process for publishing banner alerts.
- Publishing alternative methods for Veterans to achieve tasks



## Out of Scope: (for this iteration)
* SLO & SLA for veterans
* SLA for Veterans
* SLO & SLA for VA.gov Product Teams
* Incident Response
  * Accountability in SLOs - who gets assigned & their impact toward total numbers
    * Automation
      * Notify when investigations are happening.
      * Slack notifications when SLOs reach a certain level.
     
## Use Cases:

- As a Veteran I would like to know when planned maintenance is going to happen, so that I may work around the scheduled downtime.
- As a Veteran, I would like to see informative banners apprising me of when the login to the site is down, and when it might be back up in order to properly do my business on VA.gov.
- As a Veteran, when the site is down, I would like to know alternative means of doing my business so downtime doesn't keep me from accessing my benefits.

## Assumptions:


## Solution Approach: 

### Research the problems
- The current process to display a downtime banner through sitewide/CAIA
- Current Identity response roster & schedule.
- Audit existing banner & alert messages.
- How the current auto set by datadog monitors is working.
- How the "scheduled through IR bot" maintance is being displayed on VA.gov.
- Can these be automated?
  - Process for planned outage
  - Process for unplanned outage
  - Issue found by team w/ need to inform & take action
- Alternate methods for certain tasks users could still accomplish during outage.



### Deliverables
- UI which allows a person to manually set "Current outage" message on VA.gov login page
- Rewritten messages based upon input from Engineers
- Automation of the following, if possible
  - Process for planned outage
  - Process for unplanned outage
  - Issue found by team w/ need to inform & take action
- Add alternative methods to access benefits if folks can't sign in to messaging.
  - This page might be a resource: [Helpful VA phone numbers](https://www.va.gov/resources/helpful-va-phone-numbers/)
- Updated Identity response roster & schedule.
- Make sure all research & documentation is in github


## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------| 
|  |      |
|  |       |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:------------- | 
|  |   |





## Future Scope:

