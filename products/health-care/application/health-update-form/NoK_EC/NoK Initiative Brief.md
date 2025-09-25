# Next of Kin Initiative Brief
Alex Seelig, 3/26/2025
#### Overview

---

## Outcome Summary

* Add two Next of Kin contacts to the 10-10EZR, including Name, Address, Relationship, Phone.

**Related/Associated product(s)**
- 10-10EZR Standalone form - [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)

## Problem
- Veterans are currently unable to enter or change their Next of Kin online, and must do so either in a VA facility or over the phone. Per Medallia reports from the MHV Cartography team, the phone number to call is confusing and the call center cannot always do the change.
- This has been an issue since the inception of online forms, and no one has ever worked to solve this problem. 
- This allows Veterans to do another task online that they could not previously do.

---
## Measuring Success

### Key Performance Indicators (KPIs)
#### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase 10% of Veterans who successfully add their NOK and/or EC information online
**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.

| Product KPI |  Monthly Target | Post-Launch 1 week |Post-Launch 1 month|
|-------------|-------------- |-------------- |-------------- |
|NOK add (Yes)|500 | TBD |TBD |
|NOK edit/view existing|500 | TBD |TBD |
|EC add (Yes) |500 | TBD |TBD |
|EC edit/view existing|500 | TBD |TBD |
|Errors | 0 errors| TBD| TBD|

- Links to the dashboard(s) showing "success criteria" metrics:
     - [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/kjp-9wp-u47/10-10ezr?historicalData=true&index=&refresh_mode=sliding&view=spans&from_ts=1703092684168&to_ts=1703179084168&live=true)
     - [Google Analytics - EZR Events](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/B1BuF9JgTgCgLV3cx4EB4Q)

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Will Veterans take the time to enter/change their Next of Kin?
- **Usability Risks** (can people figure out how to use it):
  - Will Veterans understand how to enter/change their NoK? Can we make it simple enough for them?
  - Do Veterans understand what a Next of Kin is? Do they know it's the person who gets their stuff if something happens to them? 
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Will the List&Loop bugs be fixed so that we can release?
    - Will the Associates API from the VES team be released to Prod so we can test and release?
    - Will we be able to delete using the new Associates API?
    - How will adding a new API impact the performance and ZSF of the EZR?
    Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):


### What're you building
- In-Scope
     - Add NoK to EZR. Allow users to enter name, address, phone. Have address be optional. Have all of NoK be optional. 

- Out of Scope
     - Any other changes to other sections

- Our solution will allow Veterans to enter their NoK online, and will include error monitoring for the new Associates API. 

#### Go-to-market 

- Have HEC notify users about this in their mailers
- Let Veterans know they can do this online at VA facilities 
--- 

## Launch Planning

### Timeline 
* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/NoK_EC/EC%20and%20NoK%20Release%20Plan.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - 9/22/2025

---
   
## Screenshots

### Before

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps
- GitHub Label(s): 1010-team
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO
- Contact(s): Patrick Bateman
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
