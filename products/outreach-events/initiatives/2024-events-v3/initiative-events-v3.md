# Events v3 Intiative Briefing

## Brief Description
How might we enhance a Veteran's experience when they're searching for and viewing events, allowing them to easily find events pertinent to their needs with plenty of lead-time to attend either online or in-person.

How might we ensure that content build times do not exceed 60 minutes when more events are being published?

## The Problem to be Solved

* Problem Defined:
  * How might we enable editors the ability to publish all VA events in order to make them available to Veterans in Outreach & Events?
  * How do we quickly get more editors to publish events without negatively affecting the FE build time? Content build times shouldn't exceed 60 minutes.

* Evidence to support the Problem: 



* How does this initiative help further OCTO-DE's mission and goals?
     * VA North Star: Increase the quality, quantity, and reliability of events published in VA.gov 

## Outcome Summary
  
For this initiative, we will implement in multiple phases, with MVP being the first, and then a fast-follow of a combo of backend and Veteran- & Editor-facing design work.

#### MVP:
- Engineering/Backend: The first iteration will focus on backend functionality:
  - Rebuild events from static HTML into a dynamic React app driven by an API, thus allowing more events to be published without negatively affecting content publish time.
  - Ability to capture/store lat/long of event location.
    
#### Fast-follow:
(in order of priority)
- Design Drupal CMS editorial flows and run usability testing with editors
  - Consider:
    - if an event has more than one location, including one being physical and one being virtual
    - if an event spans across multiple days
    - if an event is a month-long event
- Provide Veterans the ability to find/search for events near them (one of the long-time top-requested features).
- Provide Editors the ability to validate lat/long are correct for locations.
- What do events look like for each of the products?

#### Out of Scope

#### Questions:
- Is there already a MapBox plugin available?
- Do we need to build a MapBox forward lookup for Drupal capability?

### EPICS: 
- [[SUPER EPIC] Events v3](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17871)
- [[EPIC] [Events v3] Create an Events API & Data Model](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17911)
- [IIR's work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/outreach-events/initiatives/2024-events-v3/2024-IIR-Handoff.md) included FE designs
- 
### Artifacts
- List of already existing [Events tickets in Sharepoint/Excel](https://dvagov.sharepoint.com/:x:/r/sites/SitewidePublicWebsites/_layouts/15/Doc.aspx?sourcedoc=%7B1d81bc4d-d972-4e1b-aa55-1523d419e9fd%7D&action=edit&wdenableroaming=1&wdlcid=en-US&wdorigin=ItemsView&wdhostclicktime=1717177303908&wdredirectionreason=Force_SingleStepBoot&wdinitialsession=4fbb0378-03c7-ac19-5f26-30f8c7b84877&wdrldsc=2&wdrldc=1&wdrldr=ContinueInExcel)
- [Previous work](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9617) was done by Public Websites in 2022 to design Drupal CMS editorial flows
   
   
#### User stories

**As a user:**
  
- I want so that I know what events are available based on my schedule/availability. 
- I want to have better lead-time prior to events so that I can plan accordingly to attend, especially in-person events.

**As an events content editor/publisher:**

- I want to be able to publish events faster so that I can ensure Veterans have access to events coming up

**As the Outreach Events product owner:**

- I want an 
    
<!--
## Desired User Outcomes
- Build times do not exceed 60 minutes.
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

## Undesired User Outcomes
## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes
-->

---
## Measuring Success

### Key Performance Indicators (KPIs)

-   

### Analytic Insights:
* 

#### CSAT Scores

| Month/Quarter | CSAT Score % 
| --- |:---:|
| Aug 2024 | # |
| Jul 2024 | # |
| Jun 2024 | # |
| May 2024 | # |
| Apr 2024 | # |
|**Q1 Rollup 2024** | **77.85%** |
| Mar 2024 | 76.38% |
| Feb 2024 | 70.97% |
| Jan 2024 | 86.21% |
|**Q4 2023 Rollup** | **74.64%** |
| Dec 2023 | 70.37% |
| Nov 2023 | 75.76% |
| Oct 2023 | 77.78% |


**CSAT Scores retrieval:**
* Domo > CSAT Score Dashboard 
* Filter by Directory
* Enter outreach-and-events (note that this includes outreach tools) and click Apply
* Define date range and apply
* Look at the first graph "Average User Experience & Count of Survey Responses by Directory"
---

## Discovery

### Assumptions/Risks

* #### Value Risks (will people use it)
  - 
* #### Technical Risks 
  - 
* #### Usability Risks (can people figure out how to use it)
  - Noting feedback from Amanda regardog a study, via Slack thread [here](https://dsva.slack.com/archives/C03LFSPGV16/p1715637703887209): In today's weekly design meeting, Matt Marino (he/him), shared an unexpected finding during a MyVA study that relates to the Sitewide Events product. The number of folks that mentioned this surprised me. It was unclear of where Veterans expected to find this information, MyVA or on a Facility page. The majority of participants indicated they were interested in being informed of VA news, events, alerts, and info about related Veterans organizations. (8 of 15 participants).
  - 
* #### Viability Risks/Constraints (will there be a positive organizational impact)
   -
### Current User Path

Outreach & Events | User flows & inbound links
![Screen Shot 2021-10-28 at 10 55 42 AM](https://user-images.githubusercontent.com/70410912/139301132-8c3ddf53-ed54-47d6-aa6e-6f85da90e1ec.png)

### Technical Analysis 
- 

### Solution Scope for MVP
**In Scope**
- 

**Not In Scope**
- 
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket
- 

### Go-to-market 

|Date| Decision |
|--|--|
| TBD |  Dave Conlon to review initiatives briefing and validate |
| TBD |  Determine KPIs and Success Measures and validate |
| TBD |  Complete VSP Collaboration Cycle events  |
| TBD |  Complete Release Plan per action items |

### Timeline 

- Link to release plan: TBD



#### Initiative Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd

---
   
## Screenshots

### Existing Veteran-Facing Screenshots




### Existing Editor-Facing Screenshots

---

#### Communications
Primary communication for this initiative will be via #VSA-Public-Websites slack channel. 

<details>

- Team Name: Public Websites 
- GitHub Label(s): VSA-Public-Websites 
- Slack channel: #vsa-public-wesbites
- Product POCs: David Conlon (PO), Fran Cross (PM)


#### Stakeholders
PO - Dave Conlon 
Veteran Experience Office (VA)

<details>
  
- Office/Department: N/A
- Contact(s): N/A
 
</details>

---


