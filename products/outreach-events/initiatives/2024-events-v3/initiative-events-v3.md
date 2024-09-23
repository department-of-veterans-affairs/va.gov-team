# Events v3 Initiative Briefing
  
## Brief Description 

### Backend Description

How might we rebuild the Events backend/infrastructure so as not to adversely affect content build at all? e.g. no longer have it be part of content build.

How might we provide editors and content publishers the ability to publish events more quickly, thus bringing events to Veterans faster?

### Frontend Description

How might we enhance a Veteran's experience when they're searching for and viewing events, allowing them to easily find events pertinent to their needs with plenty of lead-time to attend either online or in-person? 

## The Problems to be Solved 
  
### MVP Solutions 

__Note that the usage of Veterans et al means Veterans, their family, caregivers and survivors.__

* Enable editors to publish events that will no longer rely on content build, thus speeding up the publishing process.
* Ensure current front-end features and functionality are still available to end-users (editors/veterans)
* Design schema to support future work, e.g. store lat/long, apply tags to events, etc. 

### Non-MVP Problem Solutions: 

* Provide a better ability for Veterans to filter events.
* Provide the ability for Veterans to 'find events near me'.
* Provide editors the ability to edit lat/long for cases it's incorrect. 
* Provide editors the ability to add non-VA locations' lat/long information. 

#### Evidence to support the Problem: 

* Current build time data: 
* Demand for features by editor types 
* Veteran demand for events near me 
* Veteran demand for better filtering/search ability

## How does this initiative help further OCTO-DE's mission and goals? 

### **The VA North Star:** Increase the quality, quantity, and reliability of events published in VA.gov  

**OCTO OKRs Applied to Events V3** 

* Reduce the burden on the Veteran (or user) experience 
  * Correct lat/longs
  * Better filtering/search capabilities
* CSAT scores increased due to enabling filtering, and displaying only current/future events (not past) 
* Number of events processed has increased 
* Processing time / speed increased
 
## Outcome Summary 

Implementing the new React app backend will greatly reduce content build time, and remove the risk of increasing it exponentially, which would cause events to not reach Veterans on the VA.gov frontend in time for them to plan and attend. This will also increase the publishing time, bringing Events to Veterans in a more timely manner, thus giving them greater lead time to plan their attendance. By implementing finding 'events near me', as well as enhancing the filtering capabilities, Veterans will be able to more quickly find events they're interested in, and then plan accordingly. 

## In Scope Features

For this initiative, we will implement in multiple phases, with MVP being the first, and then Post-MVP work which will be a combo of backend and Veteran- & Editor-facing design work. 

### MVP Scope 
_**Note: The MVP will focus mainly on backend functionality and research**_

#### Epics - MVP
  - [[EPIC] [Events v3 - MVP] Create an Events API & Data Model #17911](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17911)
    - [Events] SPIKE: Feasibility of automating event data files for every event list [#10003](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10003)
      - Can Daniel add more details/explain this so we can decide if it remains on the Events v3 Initiative? 
  - [EPIC] [Events v3 - MVP] FE, UX, and Unit Test Updates [#18277](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18277)
    - [Events] VAMC Events: Update Home breadcrumb per outcome of testing [#9439](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9439)
    - [Events] Update text on Outreach events page [#15892](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15892)
    - [Events] [FE] Create an application for Events in vets-website [#16594](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16594)
      - Repurpose the one above, or? (we won't be replacing events in vets website.

#### Questions - MVP
- _Question_: Considering the work the AP team is doing with Events in Next Build. It will be a react app; but not new.
  - _Answer_: Won't be replacing 

#### Engineering/Backend: 
- Rebuild events from static HTML into a dynamic React app driven by an API, thus allowing more events to be published faster outside of content build. 
   - Ensure existing functionality is retained/not degraded.
   - if rebuilding into a React up makes the front-end looks different to editors, then a KB article will be needed.
   - Ensure the schema stores future-need items, such as: 
         - lat/long > for forward lookup, and editing by editors (actual implementation of forward lookup and editing by editors has been added to Post-MVP requirements) 
         - tagging e.g. audience for categorization (actual implementation of tagging has been added to Post-MVP requirements) 
         - anything else? Language; 
- Build dynamic front-end to support new react app, ensuring no features/functionality are lost. 
- Write unit tests to cover at least 80% of the code (collaboration cycle requirement). 
- Write architectural documentation 
- Generic prioritized defects
- Explore feasibility of automating event data files for every event list (something similar to KISS, but automated for every event list (event_listing) node. 
  - ask Daniel Sasser about this and detail it better. Share with Michelle. [Spike](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/10003) already created and needs refining

#### UX/Research
- Research to support design system request to make year into dropdown year list instead of text field. 
  - Engineering implementation of the above, along with defaulting to current year. 

### Post-MVP Scope 

#### Epics - Post-MVP Scope
_**Post-MVP Scope consists of 'Fast-Follow', and possibly 'Future-State' work**_

#### Questions - Post-MVP Scope
- _Question_:
  - _Answer_: 

#### Drupal Engineering (Editor FE)
- Ability for editors to add/edit lat/long of event location, especially for non-VA locations and Vet Center CAPs. 
  - Provide Editors the ability to view/validate lat/long are correct for locations. 
  - Provide editors the ability to edit/correct lat/long if necessary 
  - Provide editors the ability to add lat/long for non-VA event locations. 
- Ability for editors to add tags to events (for categorization and also to be used in FE search by Veterans et al 
- Backend work (if any) to support Veterans ability to look-up/'events near me' using lat/long 
- Only future events display to Veterans
- Consider how to make events data via an API outside Drupal that can be consumed (e.g. for use in another app, or non drupal page. 

#### VA.gov Frontend (Veteran Experience)
- Provide Veterans the ability to find/search for events near them (one of the long-time top-requested features). 
- Provide Veterans the ability to filter events by certain criteria (to be determined by research effort). Keep in mind we’ll be allowing editors to add tags to events. Perhaps that will be a search and not filtering change, though. 
- Add disclaimer on all O&E pages that events featured do not constitute an endorsement from the VA. 
- Determine (with CAIA's aid) which metatdata should display when an event is shared by a Veteran on social media. 

#### UX/Research
- Discovery of Veteran experience in general, including facility level vs. System level (e.g. for the event page on VAMC at facility level.) 
  - What is the best experience for Veterans related to the display of facility events? e.g. Current events are displayed at the healthcare system level. 
- What do events look like for each of the products, and how might we individualize UX/display for the products? 
  - if we expand to VBA (to consider), how should it look for them?  
- Design Drupal CMS editorial flows and run usability testing with editors. 
  - Consider: 
    - ability to add a recurring event to my calendar without having to add each instance. 
    - if an event has more than one location, including one being physical and one being virtual. 
    - if an event spans across multiple days. 
    - if an event is a month-long event. 
    - if an event has multiple locations (more than one VAMC, or includes Vet Centers, VBA Facilities, etc.). 
  - ability to share events (e.g. i’m the owner of an event; another editor (even at a different facility type) should be able to post / promote to my facility/audience. 

### Out of Scope 
- Adjust styles, moving content away from edges, on lower page widths. 
  - **Reason out of Scope:** This will be a larger audit/adjustment of styles across all PW products.
- Allow editors to add multiple images to events
  - **Reason out of Scope:** We can understand multiple images for stories, but not for events, especially at the risk of negatively affecting Veterans with low internet bandwidth, causing slow display of events if multiple (or any) images are attached. 
- Integrate events into the enterprise tool currently in discovery 
  - **Reason out of Scope:** This will be a separate decision, and then possibly separate effort, from the Events rebuild 
- Addition of Outreach video help information to reflect how to upload a video
  - **Reason out of Scope:** This isn't Events; it's Outreach
- Calendar view of events (similar to what's on Teamsites)
  - **Reason out of Scope:** Not accessible, or mobile-friendly. Also, for recurring events, the view to Veteran’s will be confusing and ‘busy’, whereas a list view is mobile-friendly and easy to scan visually. 
- Ability for an editor to create more than one repeating pattern for an event
  - **Reason out of Scope:** Too many scenarios to implement and test. Reason out of Scope: Difficult to make a solid UX. 
- Content managers' ability to review a report of address and geodata for events.  
  - **Reason out of Scope:** 
- Outreach Hub Representative's ability to view how many events were posted to the Outreach Hub with a set date range 
  - **Reason out of Scope:** 
- Add social media sharing options for events: Reason out of Scope: We already provide sharing options for all major social media sites) 
  - **Reason out of Scope:** 
- Update breadcrumbs based on testing. [Ticket referenced](VAMC Events: Update Home breadcrumb per outcome of testing #9439) 
  - **Reason out of Scope:** 
 
#### Questions: 

- Question (answered):  Is there already a MapBox plugin available?) 
  - Answer: Forward lookup is available via Mapbox, which we’re already paying for. 
- Do we need to build a MapBox forward lookup for Drupal capability? 
  - Answer: We will need editorial experience informed by user research. 
  
### EPICS:  

__[2024-08-01] Note that the epics need to be edited to match the edits just published in the Initiative.__

- [[SUPER EPIC] Events v3](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/17871) 

  - [[Events v3 - Fast-follow] Enhancements or alterations to Events v3 that will come directly after MVP #18282](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18282) 
  - [[EPIC] [Events v3 - Future State] Events filters #9435](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9435) 
  - [[EPIC] [Events v3 - Future State] Publish Events to multiple Facilities + Outreach Events #15562](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/15562) 
  - [[EPIC] [Events v3 - Future State] UX/FE/BE Events Future State Work #18279](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/18279) 
  
### Artifacts 

- List of already existing [Events tickets in Sharepoint/Excel](​xlsx icon Existing Events Tickets.xlsx) 
- [Previous work](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9617) was done by Public Websites in 2022 to design Drupal CMS editorial flows   

#### User stories 

 **Use Case:** Viewing only current and future events; hide past events. 

AS A Veteran, their family member, caregiver or survivor, I WANT to view only current or future events, SO THAT I know which events are available based on my schedule and availability, allowing me to plan attendance accordingly. 

**USE CASE:** React-app's ability to process events faster. 

**AS A Veteran**, their family member, caregiver or survivor, ** to have better lead-time prior to events **SO THAT** can make plans to attend, especially in-person events 
**AS a PO/PM** who manages the Events product and is concerned about content build time and stability, **I WANT** to have the Events product built as a React app and no longer rely on content build at all, **SO THAT** events are published faster, and we no longer need be concerned with content build times 
  
**USE CASE:** Editor and content publisher’s ability to create/publish events faster 

- **AS A content editor/publisher**, **I WANT** to be able to publish events faster **SO THAT** I can ensure Veterans, their family members, caregivers and survivors have a longer lead-time in order to plan  

**USE CASE** Editor and content publisher’s ability to publish events with greater location accuracy

- **AS A content editor/publisher**, **I WANT** to be able to view and edit existing lat/long, or add lat/long on non-VA facilities **SO THAT** when Veterans, their family members, caregivers and survivors use 'the events near me' feature, they are presented with accurate information, thus reducing confusion and angst if lat/long is incorrect.

## Undesired Editor-User Outcomes 
**TBD**

## Desired Veteran et al User Outcomes
**TBD**

## Desired Business Outcomes 
**TBD**

- *Why would your business want this to exist?* 

- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes 

## Measuring Success   

### Key Performance Indicators (KPIs) 


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


## Discovery 


### Assumptions/Risks 
  

#### Value Risks (will people use it) 

  -  

#### Technical Risks  


#### Usability Risks (can people figure out how to use it) 

  - Noting feedback from Amanda regarding a study, via Slack thread [here](https://dsva.slack.com/archives/C03LFSPGV16/p1715637703887209): In today's weekly design meeting, Matt Marino (he/him), shared an unexpected finding during a MyVA study that relates to the Sitewide Events product. The number of folks that mentioned this surprised me. It was unclear of where Veterans expected to find this information, MyVA or on a Facility page. The majority of participants indicated they were interested in being informed of VA news, events, alerts, and info about related Veterans organizations. (8 of 15 participants). 

#### Viability Risks/Constraints (will there be a positive organizational impact) 

### Current User Path

Outreach & Events | User flows & inbound links 

![Screen Shot 2021-10-28 at 10 55 42 AM](https://user-images.githubusercontent.com/70410912/139301132-8c3ddf53-ed54-47d6-aa6e-6f85da90e1ec.png) 
  

### Technical Analysis  


## Launch Planning 

### Collaboration Cycle 

- Ticket:
- Questions:
- Requests:  
 

### Go-to-market  

|Date| Decision | 

|--|--| 

|X|  Michelle to review initiatives briefing and validate | 
| TBD |  Determine KPIs and Success Measures | 
| TBD |  Validate KPIs and Success Measures | 
| TBD |  Complete VSP Collaboration Cycle events  | 
| TBD |  Complete Release Plan per action items | 

### Timeline  
- Link to release plan: TBD 

#### Initiative Launch Dates 

- *Target Launch Date* 
  - tbd 

- *Actual Launch Date*  
  - tbd 

## Screenshots 

### Existing Veteran-Facing Screenshots 


### Existing Editor-Facing Screenshots 


#### Communications 

Primary communication for this initiative will be via #VSA-Public-Websites slack channel. 
 
- Team Name: Public Websites  
- GitHub Label(s): VSA-Public-Websites 
- Slack channel: #vsa-public-wesbites 
- Product POCs: Michelle Middaugh (PO), Fran Cross (PM) 

#### Stakeholders 

PO - Michelle Middaugh | Veteran Experience Office (VA)  
</details>

---


