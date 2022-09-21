# Initiative Outline - Improve Facility Selection on the 10-10CG

#### [Epic for 10-10CG Improve Facility Selection](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19433)
#### [Transition document for Facility Selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Facility%20selection.md)

---

## Overview
* We want to increase the confidence with which Veterans select a facility on the 10-10CG, since it's key to getting their application routed appropriately.  

**Request from CG Team:**

>- Current
>     - Provide VA.gov a limited list of VAMCs for Veterans to select
>          - Filtered to where CSC is and does not allow a Veteran to fully answer the questions
>               - **Name of VA medical center or clinic where you receive, or plan to receive, health care services**
>               - **Name of facility where you last received medical treatment**
>     - Worked with Lighthouse team to add “CSC” present toggle in the API
>- PI 7
>     - Connect Lighthouse API to updated internal CARMA VAMC info
>- Needed from VA.gov
>     - Original plan was to have VA.gov connect to Lighthouse as well so they could switch away from the manual list
>     - Open up choices for the Veteran to choose from for those 2 questions
>          - CARMA or MuleSoft would then route the application to the correct VAMC queue in CARMA
>
>CARMA looking into connection with Lighthouse API for VAMC info (eg name, phone number, address, etc)
>- Would go to prod in ~August 2022
>- VA.gov Scope: look into changing VA.gov list of VAMC info for Veteran questions on 1010CG from manual CARMA list to the Lighthouse API

**Feedback from the Facilities team:**
>The facilitator locator uses the Lighthouse API to get data out of the legacy VAST facilities dB to populate search results. 

## Problems to solve

* Facility names change often
* Veterans may not know the name of the larger VA Medical Facility 
* Applicants may not know the name of a facilty with Caregiver services
* The layout of the page has been confusing in user research

 
## Desired User Outcomes
- Facility selection is easy and builds confidence
- Facility names are up-to-date, accurate and complete

## Undesired User Outcomes
- Increased difficulty completing the online form
- Delayed application processing due to misrouting

## Desired Business Outcomes
- Applications will be processed at the appropriate facility
- CSCs won't have to reroute applications because of incorrect facility selection

## Undesired Business Outcomes
- Increase in the number of applications that are misrouted 

---
## Measuring Success


### Key Performance Indicators (KPIs)

- User feedback (Medallia)
- Feedback from CSCs on misrouted applications


#### Baseline KPI Values
- Number of online Caregiver applications filled out per month:

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Make it easier for Veterans with representatives to fill out the online form
  - Key result: number of applications that are not misrouted or delayed **Where can we get this information??**
  - Key result: Facilities list is complete, accurate and up to date
       - [JSON static file](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/8cdc5f35ad743af51170adad84b92a8b49504bdf/dist/caregiverProgramFacilities.json) contained 142 facilities
       - Facilities API contains **NUMBER** facilities
  - 
  


---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Applicants want to select the facility that's best for them.

- **Usability Risks** (can people figure out how to use it):
  - Applicants may not understand the reason for selecting a facility.
  - Applicants may not understand how to use the facility selector/search.
  - Applicants may be given too much information about facility, location, and so on and feel overwhelmed when making a decision.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - API dependencies may cause unplanned outages, causing the facility selector page to be unresponsive
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder End-to-End testing

### What're you building
- Provide an updated facility selection page that is easy to use and understand.
  - Connect with active Facilities API in place of the current static JSON file
  - Revisit UI against the current Facilities selection page on VA.gov and other private sector locator search pages
  - Condust research/usability sessiosn with Veterans to determine the best, easiest to use design
  - Redesign facility selection page
    - Provide applicants with an idea of location/distance of any given facility to ensure they can select the one that is correct for them.
--- 

## Launch Planning
### Collaboration Cycle

- Kickoff ticket #..
  - Design Intent
  - Research Review
  - IA Review
  - Midpoint Review
  - Staging Review
  - Privacy & Security
  - Contact Center guide review

### Incident Response Info
- The 1010CG form is currently in production
- We are calling a new API (API NAME NEEDED)
- We are changing how the facility list is retrieved (MORE INFO WILL BE NEEDED HERE)
- 1010CG [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd


## Screenshots

### Before

![image](https://user-images.githubusercontent.com/92328831/189940306-bef18277-a751-45f4-9fef-b84963310cc8.png)


### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): cg-facilities
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice, Mark Fallows

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Katherine Lawyer, Mark Dewey
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)


