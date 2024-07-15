# Initiative Brief - Improve Facility Selection on the 10-10EZ

## Outcome Summary
* We want to simplify the process for a Veteran to select their VA facility when applying for health care by ensuring that they can select the correct one in relation to the City, State or Zip Code they enter.

**Related/Associated product(s)**
- Product | [Link to product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20-%20Product%20Outline.md)
- Epic | [Link to the Initiative Epic #30650](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30650)
- [JSON static file](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/8cdc5f35ad743af51170adad84b92a8b49504bdf/src/common/va-medical-facilities.js) contained 1040 facilities

---
## Problem
* Facility names change often and Veterans may know a facility based on location and not name.
* Veterans may also be unaware of other VA locations that are actually closer to (and potentially more convenient for) them.
* The current layout of the page is complicated and unintuitive.

### Desired User Outcomes
* Facility selection becomes easy and simple.
* Veterans can select the specific facility they want based on knowledge, location, etc..


### Undesired User Outcomes
* Facility selection becomes complicated or difficult.
* Veterans face _analysis paralysis_ due to volume of information presented to them.


### Desired Business Outcomes
* Veterans select the correct facility and book appointments at the location they actually intend to visit.


### Undesired Business Outcomes
* Veterans select the incorrect facility when applying for health care and need information/appointments manually changed/updated.

---
## Measuring Success

### Key Performance Indicators (KPIs)


We currently have the following qualitative metrics:
 * User feedback (Medallia)

### Objectives and Key Results
* Objective: Make it easier for Veterans to search for and select the facility that's correct for them, so they don't have to navigate away from the application to determine their facility location.
  - Key result: Reduce the number of link clicks/visits to the Find Locations page
 
|TBD| Baseline (Jan-June 2023)| Target | 1 Month after launch|
|--------|-----------------------|----------|--------------------|
|Visits to Find Locations page, from the Facility Selection page | 10,871 | 5,000 | TBD |

- [Google Analytics](https://analytics.google.com/analytics/web/#/report/content-pages/a50123418w177519031p176188361/_u.date00=20230101&_u.date01=20230630&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Ffind-locations~2F&_r.tabId=navigationsummary&navigationsummary.rowCount=50&navigationsummary-fromNavigationSummaryTable.filter=insurance-information/) - page navigation from Facility selection page to Facility Locator page

       
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Applicants may not understand why they have to choose the facility at the time of application.
  - Applicants may have concerns about selecting a facility and feeling "locked in" to that selection, potentially anticipating difficulty when changing to another facility later

- **Usability Risks** (can people figure out how to use it):
  - Applicants may not understand the reason for selecting a facility.
  - Applicants may not understand how to use the facility selector/search.
  - Applicants may be given too much information about facility, location, and so on and feel overwhelmed when making a decision.
  - Applicants may be expecting a visual "map" to assist with selection

- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - API dependencies may cause unplanned outages, causing the facility selector page to be unresponsive.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - VA Stakeholder change requests to final designs
  - VA stakeholder End-to-End testing

### What're you building
#### In Scope
- Update UI to allow for dynamic facility location search based on City, State or Zip Code
- Only one facility can be selected
- Display facility name and address in the list of facilities returned from search


#### Out of Scope
- Changes to other sections of the online form
- Allowing for name or address search
- Allowing for radius/distance search
- Connecting to Facility Locator page for selections
- Display a map for visual reference
- Selecting multiple facilities


## Dependencies
- Lighthouse Facilities API connection
- End-to-End testing with Enrollment system to ensure Facility codes are sent as expected (This is an existing process today)

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
- The 1010EZ form is currently in production
- We are calling a new Lighthouse Facilities API
- We are changing how the facility list is retrieved - search by city, state or zip code
- Full application flow and Short Form flow (50% & higher disability rating) ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
- 1010EZ [Datadog monitoring dashboard](https://app.datadoghq.com/dashboard/8it-wik-f5q/vsa-1010-team)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative - TBD](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Before
Accordion closed

- ![image](https://user-images.githubusercontent.com/92328831/189935552-dd447e0a-5352-455c-87be-24f25b58bdd0.png)


Accordion Open

- ![image](https://user-images.githubusercontent.com/92328831/189935728-1b3b29ce-d0c2-4e49-9b7f-bc433df2e305.png)

### After

---

#### Communications
*Where will you discuss this initiative?*

<details>

- Team Name: 10-10 Health Apps team
- GitHub Label(s): ez-facilities
- Slack channel: #1010-health-apps
- Product POCs: Heather Justice, Alex Seelig

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Kristen McConnell
 
</details>

---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)

