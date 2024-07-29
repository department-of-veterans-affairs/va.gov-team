# External Auth Status Pages

_(Currently on hold, as per VA.gov PO)_

## Overview
Create and maintain an external-facing status page for users of VA.gov, including

- Documented process for publishing downtime/uptime/maintenance.
- Workflow/Process for publishing outage banner alerts or planned maintenance with roles/responsibilities/timelines.
- Updated content for banner messages to ensure accuracy/consistency
- Alternative methods for Veterans to achieve tasks, if any.

- This maps to _O1KR2: VA.gov authentication SLOs are developed._


## Problem Statement
There is currently inadequate external-facing status pages for VA.gov authentication services. This lack of transparency can lead to confusion and frustration for VA.gov users when issues arise. An external-facing status page would help mitigate these problems by providing real-time updates on the status of these services, leading to clearer communication and better overall service.

## Relevant Documents:
* [Login SLO Product Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Login%20SLO.md)
* [Public Facing SLO Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-df6fa7bc92140323ffecbf4e10b16346?refresh_mode=sliding&from_ts=1710016052679&to_ts=1712608052679&live=true)
* [Branding Exercise](https://docs.google.com/presentation/d/1Q3WnJY-0fJ3HcuYNptZnAbJaWUGK3FGCkvH19AJYFJo/edit#slide=id.g2c630c18cda_1_141)
* [Accessibility and Maintenance Standards for Federal Site Availability Dashboards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/2024-03%20Accessibility%20and%20federal%20regulation%20compliance%20with%20dashboards.md)
* [Content Research For Veterans](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2024-03%20Service%20Level%20Objectives/Content%20research%20for%20Veterans.md)

## What's In Scope: 
- Status page.
- Established process for publishing downtime.
- Established process for publishing banner alerts.
- Publishing alternative methods for Veterans to achieve tasks



## Out of Scope: (for this iteration)
* SLA for Veterans
* SLO & SLA for VA.gov Product Teams
* Incident Response
  * Accountability in SLOs - who gets assigned & their impact toward total numbers
    * Automation
      * Notify when investigations are happening.
      * Slack notifications when SLOs reach a certain level.
     
## Use Cases:
- As a Veteran, I would like to see high-level data visualizations related to the status and performance of authentication services on VA.gov, so that I am provided with immediate, comprehensive information about the status of services that I am using.
- As a Veteran I would like to know when planned maintenance is going to happen, so that I may work around the scheduled downtime.
- As a Veteran, I would like to see informative banners apprising me of when the login to the site is down, and when it might be back up, in order to properly do my business on VA.gov
- As a Veteran, when the site is down, I would like to know alternative means of doing my business so downtime doesn't keep me from accessing my benefits.

## Assumptions:
- We publish around the dashboard created in the Login SLO project.

## Solution Approach: 

### Research the problems
- Can these be automated?
  - Process for planned outage
  - Process for unplanned outage
  - Issue found by team w/ need to inform & take action
- The current process to display a downtime banner through sitewide/CAIA
- Current Identity response roster & schedule.
- Audit existing banner & alert messages.
  - Work w/ Engineers to update and/or improve messaging to ensure accuracy.
- How the current auto set by datadog monitors is working.
- How the "scheduled through IR bot" maintance is being displayed on VA.gov.
- Alternate methods for certain tasks uders could still accomplish during outage.
- Where are we going to host the status page?

### Create the dashboard and document the processes
- UI which allows a person to manually set "Current outage" message on VA.gov login page
- Determine what we want to publish on status page then do it!
  - Add service detection mechanisms to status page
- Document alternative methods to access benefits if folks can't sign in.
  - This page might be a resource: [Helpful VA phone numbers](https://www.va.gov/resources/helpful-va-phone-numbers/)
  - Add these methods to outage messaging
- Updated Identity response roster & schedule.
- Add link to status page within an incident notification (on sign in page)
- Communicate our status page availability
- Make sure all research & documentation is in github


## Technical Considerations:
| Issue         | Notes         | 
| ------------- |:-------------| 
| VA Policy |  Is there VA policy surrounding availability & response times?     |
| Industry Standards |  Are there industry standards surrounding availability & response times?     |

## UX/ Design Considerations:
| Issue         | Notes         | 
| ------------- |:------------- | 
| Explaining what the dashboards mean |   Would like UX help in crafting the publishing language          |
| Veterans who don't speak tech | How do we ensure they understand what they might be seeing? |





## Future Scope:
* Determining our response to observed service degradation.
* As the Identity Team adds new products and takes on new responsibilities, it is anticipated that new pieces of information will need to be established and published.
