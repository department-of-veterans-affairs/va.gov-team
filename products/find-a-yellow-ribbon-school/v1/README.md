# Yellow Ribbon MVP Product Outline

https://va.gov/education/yellow-ribbon-participating-schools/


## POCs

- Slack channel: [#iir-product-teams-public](https://dsva.slack.com/channels/iir-product-teams-public)

  

| Name          | Role                                          |
| ------------- | --------------------------------------------- |
| Jeff Barnes   | VA Product Owner                              |
| Pete Egan     | IIR Product manager                           |
| Luke Tickner  | Education/GI Bill Comparison Tool SME Contact |
| Tammy Hurley  | Yellow Ribbon SME Contact                     |
| Darrell Neel  | GI Data Service Tech SME Contact              |
| Matt Self     | GIBCT Product Manager                         |
| Brian Grubb   | SharePoint contact for Yellow Ribbon data     |

---

### Table of Contents

# Executive Summary 

- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [KPIs](#KPIs)

# Implementation Information

- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

---

# Executive Summary

To provide Yellow Ribbon. (YR) participating school information as more user-friendly content than the current experience of 50+ manual table pages.  The current experience exists as it does today because there is no single source of Yellow Ribbon data.

Our MVP will be a single-page application that leverages an existing API (GI Data Service) and allows users to search for YR schools based on relevant criteria.

## User Problem Statement

As a Veteran, I want to easily find information about schools I'm interested in that participate in the Yellow Ribbon program so that I can maximize my education benefits.

As a content resource, I want to more easily provide Veterans with timely up-to-date Yellow Ribbon school information.

As a Yellow Ribbon data producer, I want to submit timely up-to-date Yellow Ribbon school information to the va.gov. team.

## Solution Goals

- Bring YR participating school information into the benefit hub as a more dynamic, user-friendly content than the current experience of 50+ manual table pages.
- Improve UX for YR tables so that users can easily find info they're looking for
- Reduce the level of effort for stakeholder to keep YR data up-to-date on Veteran-facing page
- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.
- Gain a better understanding of the information most relevant to Veterans as they research education options


### User Goals

- Identify schools I'm interested in that participate in Yellow Ribbon program, and understand the benefit details that are specific and unique to each school.
- Eliminate manual updates of Yellow Ribbon information

#### **Additional Considerations**

- After learning more about the complexities of Yellow Ribbon data gathering, we have determined our MVP will not address the Yellow Ribbon data producer user needs at this time.

  

## Hypothesis

- Side-by-side comparison functionality will be helpful for Veterans
- Veterans will want the ability to reduce the number of the initial search results (filtering)
- Benefit amount will be the most important variable in the search results
- Veterans will be confused about the difference between this and the GIBCT, and not understand the need for two separate tools

### Assumptions

- Veterans find the current presentation of YR information tedious to parse through
- Veterans know the degree level, and location, or name of the school they're interested in when they begin their research
- Veterans interested in using education benefits are familiar with the GI Bill Comparison tool

## Requirements 

- Yellow Ribbon participating schools information is available through the Education benefit hub
- YR data is presented in a dynamic way that allows users to find data they're looking for based on the criteria (which data fields) that's most useful to them
- Users can perform a side by side comparison on selected schools (exact number of schools informed by research). Comparison functionality is a stretch goal.
- Solution provides an improved experience for content manager, minimizing manual updating of Yellow Ribbon school information
- Solution utilizes the most up-to-date Yellow Ribbon data available via an API

## Constraints

- Drupal is not a viable solution to manage this content:
  - it is unable to manage large datasets via CSV upload functionality
  - It can't handle complex real-time queries and filtering
- We don't know yet what types of criteria Veteran students will want to filter on
- GIDS API 
  - Does not have sorting functionality.
  - When searching by school name, the API looks at the name, city, and employer.
  - Can filter YR schools ONLY by `name OR city` or ONLY by `city`.
  - Unclear where we derive `Program or school` from on the search result model.
  - Unclear how degree levels map since they can either be strings or numbers.
  - Unclear if we should use `tuitionInState` or `tuitionOutState` for max benefit $.

## Discovery Takeaways

- Discovery notes from meeting with Yellow Ribbon and Education SME contacts can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/yellow-ribbon-mvp/research/dec-2019-sme-discovery.md)
- Drupal is not feasible as a solution to manage this data with a dynamic front-end
- Exploration of non-Drupal solutions in [this Slack thread](https://dsva.slack.com/archives/C52CL1PKQ/p1576766725011100)
- MVP informed by [the research conducted for the GIBCT](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Education/Research/July-2019/End-to-End/EducationJourney-Phase1-KevinMhoffman-Draft-V003%20(1).pdf)

## Decisions

- At this time, we are not updating the GIBCT as part of the effort to improve the Veteran experience for Yellow Ribbon. Our goal is to create an MVP that can improve the front-end experience and the GIBCT has complexities extending beyond the scope of our MVP.  Additionally, it is managed by another team, and their timeline and priorities for updates are TBD at this time. 
- We are not addressing the process of gathering and inputting Yellow Ribbon data, or taking it upon ourselves to ensure accuracy of this data
- We will leverage the GIDS API for our data source
- Our MVP will stand alone rather than on the current Yellow Ribbon hub page
- [IA Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/websites-yellow-ribbon.md) from VSP available as of 2/19/20
- [History of design decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/yellow-ribbon-mvp/yellow-ribbon-design-decisions.md) available to review
- For the first year, provide a PDF spreadsheet link to the upcoming school year information on our tool landing page
  - Depends on Janice and Joe providing the consolidated list of new/updated school info as a spreadsheet
  - Ask them to provide this no later than first week of June, so we have at least 2 days to PDF it and add the link to the tool landing page
  - Link would be published mid-June, and we would remove the link on July 31/Aug1 -- when the 'upcoming' school info becomes 'current' in GIDS
- Prior years info: We will not provide links to these in the modernized experience. We will not redirect the legacy page that has the repository of old years: https://www.benefits.va.gov/gibill/yellow_ribbon/yellow_ribbon_info_schools.asp

#### Pending Decisions

- Redirect strategy for existing Yellow Ribbon content to our tool, work captured in [#4975](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4975)

## The Plan

- Design an interactive prototype with hi-fidelity screens
- Research
  - Conduct ~ 3 user interviews with tasks focused on current YR presentation to establish a baseline
  - Conduct ~ 3 user interviews with tasks focused on prototype to learn from our proposed solution
  - Both groups will be interviewed with the same questions around their education decision making process and understanding of the Yellow Ribbon program
- In parallel with design and research work, FE development will begin to build MVP in phases
  - Phase one: search + results
  - Phase two: comparison
- Iterate on our solution based on research findings
- Once GIDS is updated with latest Yellow Ribbon data, launch Yellow Ribbon MVP on production
- Initiate redirects of legacy pages



## Measuring Success

### Analytics 
**View: _Production - Education Modernized View_**

- [Number of people visiting YR pages per month](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p184334251/_u.date00=20200101&_u.date01=20200914&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&explorer-graphOptions.selected=analytics.nthMonth)


- [Yellow Ribbon Searches and Refinements](https://analytics.google.com/analytics/web/?authuser=1#/report/content-site-search-pages/a50123418w177519031p184334251/explorer-segmentExplorer.segmentId=analytics.searchKeyword&_r.drilldown=analytics.searchStartPage:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&explorer-table.plotKeys=%5B%5D)

- [Yellow Ribbon Exit Pages](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p184334251/_r.drilldown=analytics.pagePath:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&_r.tabId=navigationsummary)

### KPIs
**Experience Metrics**
- % exit to university pages 
- % exit to other VA.gov links  
  - Find out if you qualify for the Yellow Ribbon Program
  - Find out if you're eligible for the Post-9/11 GI Bill
  - Apply for Post-9/11 GI Bill benefits
- Avg. number of search refinements
- Frequency of search criteria usage
- Search results load speed

**Outcomes Metrics**
- % of Post-911 GI Bill benefit applications started in session with a visit to YR
- % of sessions with successful logins following a visit to YR
- % of sessions with success account creations following a visit to YR

**Consider for a Domo Dashboard**
Many of these are currently available in GA (see Yellow Ribbon Searches and Refinements above). And I'm not sure how this'll translate to Domo, if at all. 

|Metric|Value|
|--|--|
|Frequency of search criteria usage |bc it explains whether/how people use the YR tool|  
|% exit to university pages|bc it indicates whether we're triggering users to take the next step to research individual institutions. We cannot, however, know what happens next.|
|% exit to other VA.gov links|bc it indicates whether users are continuing the benefit discovery process|
|% of Post-911 GI Bill benefit applications started in session with a visit to YR|bc we want to enable wider usage of benefits specifically the Post-911 GI Bill benefit, which is necessary for participation in the YR program|
|% of sessions with successful logins following a visit to YR|bc we want to learn if we're prompting Veterans to leverage their existing profiles|
|% of sessions with success account creations following a visit to YR|bc we want to learn if we're incentivizing Veterans to create accounts and eventually start the benefit application process|

### OKRs

- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.

### Tracking

- Event tags for interactive components - search fields, comparison functionality, sorting and/or filters (depending on what is added)

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
  - 05/08/2020
- *What is your date for when you'll evaluate impact after launch?*
  - 05/15/2020

---


## Solution Narrative

- **December 2019**: Discovery and design begins

- **1/16/2020**: Research plan and conversation guide submitted

- **January 2020**: Development begins

- **1/30/2020**: Started Usability testing

- **March 2020**: Launch on production

## Error Handling
- Currently API requests have basic error handling on the front end.  Failures are logged in sentry with a "Failure to fetch" error code, and users would be shown an error message: 'We’re sorry. Something went wrong on our end. Please try again later.'

## 

## API Calls and Dependent Systems

GIDS API (need link from developers)
API repo is here
https://github.com/department-of-veterans-affairs/gibct-data-service

Data is imported via CSVs from sharepoint team to the GIDs service where it is made available via the rails API

Sample endpoint: https://www.va.gov/gids/v0/yellow_ribbon_programs?page=1&per_page=30000

Sample response: {"data":[{"id":"3374647","type":"yellow_ribbon_programs","attributes":{"city":"New York","contribution_amount":"99999.0","country":"USA","degree_level":"Graduate School/Continuing Professional Studies","division_professional_school":"All","facility_code":"33000232","institution_id":51114287,"insturl":"www.bankstreet.edu/","number_of_students":99999,"name_of_institution":"BANK STREET COLLEGE OF EDUCATION","state":"NY","street_address":"610 W 112th Street"}}],"links":{"self":"https://api.va.gov/gids/v0/yellow_ribbon_programs?city=new+york&name=bank&page=1&per_page=10&state=NY","first":"https://api.va.gov/gids/v0/yellow_ribbon_programs?city=new+york&name=bank&page=1&per_page=10&state=NY","prev":null,"next":null,"last":"https://api.va.gov/gids/v0/yellow_ribbon_programs?city=new+york&name=bank&page=1&per_page=10&state=NY"},"meta":{"version":{"number":834,"created_at":"2023-05-17T15:23:37.504Z","preview":false},"count":1}}

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/61624970/6545a82b-5765-4a13-b188-c6f04064670f)


## Design 

### Screenshots

#### Yellow Ribbon Before
![Screenshot of Yellow Ribbon hub page, highlighting open accordion list of states linking to Yellow Ribbon school lists ](../images/yr-hub-feb2020.png)
![An example Yellow Ribbon page on benefits.va.gov showing a large data table listing schools](../images/yr-example-state-page-feb2020.png)
