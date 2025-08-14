# Initiative Outline - Improve Facility Selection on the 10-10CG

#### [Epic for 10-10CG Improve Facility Selection](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19433)
#### [Transition document for Facility Selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/Transition%20hub/In%20progress%20features/Facility%20selection.md)
#### [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md)

---

## Overview
* Veterans and their Caregivers will have confidence in selecting the Veteran's preferred facility, which will also ensure the submitted application is routed to the appropriate Caregiver service facility for processing

<details>
 
<summary>Initial Request from CG Team:</summary>

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

</details> 
 
<details>
 <summary>Notes from Stakeholder meetings</summary>
 
#### 9/30/2022
**Facilities question**
- This work was not prioritized for CG team to work on in PI 9
- Is there a way for VA.gov team to work on the Facilities work without CARMA work
     - Mapping on va.gov backend matching up clinics to CSC centers and send that to CARMA
          - Lighthouse API has this mapping and already has a mechanism in place to keep it accurate
     - We need to discuss more on what we need to ask for and what needs to be sent to CARMA
     - How can we make sure the user is clear on what this information is being used for and why they are selecting a location?
- **Jenna** will set up a refinement meeting with all parties to go through existing Facilities page and potential solutions on updating the UX

>**Notes from 9/23/22 initial Facilities conversation**
>- Originally, we restrict the locations that Veteran can chose from when completing the 1010 CG to be the ones that have a CSC at them AND are the ones that CARMA has a queue for.
>- The goal originally:
>     - To reduce the manual effort of updating the names of the facilities and where the CSC sits (which is updated in Lighthouse API)
>     - Open up the drop down to allow the Veteran to list wherever and for behind the scenes to route to the correct VAMC queue
>     - Required field on the form
>     - Helps with the in person assessments and checks
>     - Help application assigned to correct CSC and reduces processing times
>     - Potentially opportunity – can we automate using ES? VistA? CERNER? CDW? Prepopulate and allow to change
>- Facility data – has lots of data, but may not be very human friendly

 
</details>

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
- Number of online Caregiver applications filled out per month
     - Using the same timeframe of Jan 1, 2022 through Jan 25, 2023, there were about 77,000 applications submitted.

### Objectives and Key results (OKRs)

### Objective: Make it easier for Veterans with representatives to fill out the online form
#### Key result: Reduce the number of applications that are rerouted (obtained from CSP leadership)
- From Jan 1, 2022 through Jan 25, 2023, there were 5,496 CARMA cases rerouted to a different facility.
   - At this time, there is no simple way to determine whether the case was rerouted at the Veteran/Caregiver request or due to having a non-caregiver supported facility on the form.
- Data Source: Caregiver Stakeholder team and [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=false&fullscreen_end_ts=1730229097128&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1730225497128&fullscreen_widget=1652960129845848&refresh_mode=sliding&from_ts=1730224696206&to_ts=1730228296206&live=true)
 
|Applications | Monthly Average Baseline (Jan 2022-Jan 2023)| Target | 1 Month after launch (2/14-3/14)|5 months aver launch (2/14-6/14)|
|--------|-----------------------|----------|--------------------|--------------------|
|Total Apps Rerouted | 423 | TBD | TBD |
|Total Apps Submitted | 5,923 | No decrease | TBD |


#### Key result: Maintain or reduce the amount of time a user selects a facility
- Data Source: [Google Analytics - CG Facility page views & time](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8un9wi5nSN-WZ-KqWHHBPA)

|Average time on page |Monthly Average Baseline (Jan-Dec 2024)| Target | 1 Month after launch (2/14-3/14)|5 months aver launch (2/14-6/14)|
|--------|-----------------------|----------|--------------------|--------------------|
|Search page| 52 seconds |30 seconds|1m 9s|1m 6s|
|Confirmation page |NEW|15 seconds|1m 0s|58s|

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
  - Applicants may be given too much information about facility, location, and Caregiver support association and feel overwhelmed when making a decision.

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - API dependencies may cause unplanned outages, causing the facility selector page to be unresponsive
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA stakeholder End-to-End testing

---
### Decisions Made
- As a result of the Architecture Intent review meeting, we are advised to replace the GET function to POST to ensure URLs do not expose PII. Our current endpoint for retrieving the facilities list is a GET request where we pass the lat/long as query params in the URL. Because we log the urls, this is exposing what could be PII (the lat/long of a Veteran's address).

- Simply changing GET to POST could be considered an anti-pattern. There were several ideas discussed in the team's meeting Slack thread, captured in the meeting notes. We have explored these and other options that may be the best solution here. Since other options required a more sitewide approach and is in the purview of the Platform Architecture team, the decision was made to follow their initial suggestion of changing from GET to POST which is also the same as the Facility Locator.

---
### What're you building
- Provide an updated facility selection page that is easy to use and understand.
  - Connect with active Facilities API in place of the current static JSON file
  - Revisit UI against the current Facilities selection page on VA.gov and other private sector locator search pages
  - Condust research/usability sessiosn with Veterans to determine the best, easiest to use design
  - Redesign facility selection page
    - Provide applicants with the option to search by city, state or postal code of any given facility to ensure they can select the one that is correct for them.
--- 

### Outstanding Questions
- What does the Facility question ideally look like in the future?
  - What information is needed?
  - What is the ultimate purpose this information will serve?
  - How might we get this information a different way?
  - Scenarios
     - If the facility location selected helps determine the associated CG Facility for processing, how does this work if they live in a different state?
     - How does this work for seasonal travelers?

---

## Launch Planning
### Collaboration Cycle

- [Kickoff ticket #51980](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/gh/department-of-veterans-affairs/va.gov-team/51980)
  - [x] Design Intent 3/20/2023
  - [x] [Research Review](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/674) 9/10/2024
  - [x] Architecture Intent review (NEW step - added in October 2024) 11/26/2024
  - [x] IA Review
  - [ ] Midpoint Review
  - [x] Staging Review 12/12/2024
  - [x] Privacy & Security
  - [x] Contact Center guide review

### Incident Response Info
- The 1010CG form is currently in production.  This is an improvement to the Facility Selection page, providing a search function rather than a static dropdown list.
- The new paginated request endpoint is /v0/caregivers_assistance_claims/facilities
- [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md)
- Datadog Dashboards
     - [1010CG Datadog monitoring dashboard](https://vagov.ddog-gov.com/dashboard/zcn-whk-r5h/1010-cg-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1736185712882&to_ts=1736200112882&live=true)
     - [Sitewide Facilities](https://vagov.ddog-gov.com/dashboard/3vy-h6h-4ek/sitewide-facilities?fromUser=false&refresh_mode=sliding&from_ts=1736196473816&to_ts=1736200073816&live=true)
- Points of Contact:
     - Product manager - Heather Justice | heather.justice1@va.gov / heather.justice@adhocteam.us / GH "hdjustice"
     - Engineer - Brandon Cooper |brandon.cooper1@va.gov / brandon.cooper@adhocteam.us /  GH "coope93'
     - Engineer - Mitch Saltykov | dmitry.saltykov@va.gov / mitch.saltykovs@agile6.com / GH "mitch-a6"
     - Product Owner - Patrick Bateman | patrick.bateman@va.gov
     - MuleSoft/CARMA tech team
          - Paul Kuprionas | paul.kuprionas@va.gov - CARMA tech lead
          - Ramesh Dugar | ramesh.dugar@va.gov - CARMA engineer
          - David Wald | David.Wald@va.gov - testing/integration lead
          - Ranganathan Vekataraman | Ranganathan.Vekataraman@va.gov - CARMA engineer
          - Igor Khurgin | igor.khurgin@va.gov - CARMA engineer
          - Waleed Jaffar | wjaffar@salesforce.com - CARMA engineer
          - Marla Clayton | marla.clayton@va.gov - Technical Project Manager CARMA

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative - template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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
- Product POCs: Heather Justice

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Lois Lewis
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)


