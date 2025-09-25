# Next of Kin Initiative Brief
- Last updated: Heather Justice 09/25/2025

## Outcome Summary
- Enable Veterans to add, edit, and remove Emergency Contacts and Next of Kin directly on the VA.gov profile page, including fields such as Name, Address, Relationship, and Phone.

**Related/Associated product(s)**
- [10-10EZR Standalone form - Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- [10-10EZR EC Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/NoK_EC/Emergency%20Contact%20Initiative%20Brief.md)
- [10-10EZR NOK Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/health-update-form/NoK_EC/NoK%20Initiative%20Brief.md)
- [VA.gov Profile Page - Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile)

## Problem
- Veterans can currently view their Emergency Contacts and Next of Kin on the VA.gov profile page but cannot add, edit, or remove these contacts. Changes must be made through the 10-10EZR form.
- Relying on the 10-10EZR form for such updates is cumbersome and not user-friendly.
- Allowing these updates directly on the profile page will provide a more seamless and efficient experience for Veterans.

---
## Measuring Success

### Key Performance Indicators (KPIs)
#### Objective: Provide an effortless online experience for Veterans to update their information for health care benefits
#### **Key Result #1:** Increase 10% of Veterans who successfully add their NOK and/or EC information online
**Note** Paper submissions are based on the average provided by HEC for volumes that are received by the HEC centralized processing center.  This does not include individual facilities, as there are no mechanisms in place to track them.

| Product KPI |  EZR avg monthly volume |Monthly Target | Post-Launch 1 week |Post-Launch 1 month|
|------------- |-------------- |-------------- |-------------- |-------------- |
|NOK add (Yes)|TBD |TBD | TBD |TBD |
|NOK edit/view existing|TBD |TBD | TBD |TBD |
|EC add (Yes) |TBD |TBD | TBD |TBD |
|EC edit/view existing|TBD |TBD | TBD |TBD |
|Errors |TBD | 0 errors| TBD| TBD|

- Links to the dashboard(s) showing "success criteria" metrics:
     - TBD

---

## Discovery
### Assumptions/Risks

- **Value Risks** (will people use it): 
  - Will Veterans utilize the ability to add, edit, and remove their Emergency Contacts and Next of Kin?

- **Usability Risks** (can people figure out how to use it):
  - Will Veterans find the interface intuitive for managing their contacts?
  - Can we clearly communicate the purpose and importance of Emergency Contacts and Next of Kin information?

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Is the new VES Associations API fully stable and functional for production use?
  - Can the VA.gov profile page handle the integration and ensure real-time updates without performance degradation?
  - Will we encounter any issues related to data synchronization or reliability?

- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Will we encounter resistance from either business partners in our attempt to eliminate this kind of update from a form

### What're you building
- In-Scope
     - Develop functionality to allow adding, editing, and removing Emergency Contacts and Next of Kin on the VA.gov profile page.
     - Enable error monitoring for interactions with the VES Associations API.

- Out of Scope
     - Changes to other sections of the profile page or other unrelated functionalities.

- Our solution will allow Veterans to enter their NoK online, and will include error monitoring for the new Associates API. 

 
--- 

## Launch Planning

### Timeline 
* [Link to Release Plan for this Initiative](TBD)

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

- Team Name: Health Apps
- GitHub Label(s): health-apps-team, ezr-profile-enhancement
- Slack channel: 1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO
- Contact(s): Premal Shah
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
