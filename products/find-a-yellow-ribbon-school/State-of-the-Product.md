
# State of Product: Find a Yellow Ribbon School

## Table of Contents: ###

  * [What is the Problem to be Solved?](#what-is-the-problem-to-be-solved)
  * [Our Bet: Find a Yellow Ribbon School](#our-bet-find-a-yellow-ribbon-school)
  * [Goals](#goals)
  * [How We Define Success](#how-we-define-success)
  * [Success Metrics](#success-metrics)
  * [Product Requirements](#product-requirements)
  * [Product Analytics](#product-analytics)
  * [Key Workflows](#key-workflows)
  * [Product Enhancements](#product-enhancements)
  * [Key Artifacts](#key-artifacts)
  * [Technical Artifacts](#technical-artifacts)

## What is The Problem to be Solved?

- As a Veteran, I want to easily find information about schools I'm interested in that participate in the Yellow Ribbon program so that I can maximize my education benefits.

- As a content resource, I want to more easily provide Veterans with timely up-to-date Yellow Ribbon school information.

- As a Yellow Ribbon data producer, I want to submit timely up-to-date Yellow Ribbon school information to the va.gov. team.

## Our Bet: Find a Yellow Ribbon School

If we make the Find a Yellow Ribbon School experience more intuitive and user-friendly and provide highly-visible links to relevant content pages and tools, veterans will be able to more quickly access schools that participate in the Yellow Ribbon Program.

- Side-by-side comparison functionality will be helpful for Veterans
- Veterans will want the ability to reduce the number of the initial search results (filtering)
- Benefit amount will be the most important variable in the search results
- Veterans will be confused about the difference between this and the GIBCT, and not understand the need for two separate tools

### The Find a Yellow Ribbon School tool **is**:

 - A tool to help Veterans locate schools that participate in the Yellow Ribbon program
 - A resource for accessing contact information provided by Yellow Ribbon schools
 - A resource for accessing Yellow Ribbon school websites
 
### The Find a VA Form search is **not**:
- A source for detailed information about the Yellow Ribbon Program
- A tool for determining one's eligibility for the Yellow Ribbon program
- A tool for applying to Yellow Ribbon Schools

**[Include relevant screen shots]**

## Goals

### Desired Business Outcomes
- Bring YR participating school information into the benefit hub as a more dynamic, user-friendly content than the current experience of 50+ manual table pages.
- Improve UX for YR tables so that users can easily find info they're looking for
- Reduce the level of effort for stakeholder to keep YR data up-to-date on Veteran-facing page
- Take technical learnings about Drupal functionality and table data IX to inform future research for MVP 2.0 solution or solutions for database-driven table content.
- Gain a better understanding of the information most relevant to Veterans as they research education options
- Identify schools I'm interested in that participate in Yellow Ribbon program, and understand the benefit details that are specific and unique to each school.
- Eliminate manual updates of Yellow Ribbon information

### Undesired Business Outcomes
- Veterans and their caregivers will...
     - Encounter 404 (not found) errors when attempting to download a PDF form or access an online tool
     - Abandon their form search after unfruitful attempts
     - Call the Contact Center for assistance in using the Find a VA Form tool
     - Download/complete the wrong form or access the wrong online tool
     
- Outdated/deleted forms will...
     - Continue to be made available in search results on VA.gov


## How We Define Success 

Describe ways that success will be measured, followed by a bulleted list of behaviors that will validate success, along with any instrumentation required to capture those behaviors.
    
 - Veterans and their caregivers will download forms and access online tool equivalents more frequently than before the Find A VA Form Redesign
     - The search tool returns relevant results
     - Links to the PDF forms work correctly
     - Links to online tools, when available, work correctly
 - Describe how pages / objects will need to be instrumented in order to capture behaviors and measure success (1)
 - Describe how pages / objects will need to be instrumented in order to capture behaviors and measure success (2)

### Success Metrics

#### **Experience Metrics**
- % exit to university pages 
- % exit to other VA.gov links  
  - Find out if you qualify for the Yellow Ribbon Program
  - Find out if you're eligible for the Post-9/11 GI Bill
  - Apply for Post-9/11 GI Bill benefits
- Avg. number of search refinements
- Frequency of search criteria usage
- Search results load speed

#### **Outcomes Metrics**
- % of Post-911 GI Bill benefit applications started in session with a visit to YR
- % of sessions with successful logins following a visit to YR
- % of sessions with success account creations following a visit to YR

### Product Requirements
Provide a bulleted outline describing the required features of the product
    
**[Include relevant images, screen designs]**

### Key Workflows ###
* [How New Yellow Ribbon Schools are Added](URL TBD)

## Product Analytics

**View: _Production - Education Modernized View_**

- [Number of people visiting YR pages per month](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p184334251/_u.date00=20200101&_u.date01=20200914&explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&explorer-graphOptions.selected=analytics.nthMonth)


- [Yellow Ribbon Searches and Refinements](https://analytics.google.com/analytics/web/?authuser=1#/report/content-site-search-pages/a50123418w177519031p184334251/explorer-segmentExplorer.segmentId=analytics.searchKeyword&_r.drilldown=analytics.searchStartPage:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&explorer-table.plotKeys=%5B%5D)

- [Yellow Ribbon Exit Pages](https://analytics.google.com/analytics/web/?authuser=1#/report/content-pages/a50123418w177519031p184334251/_r.drilldown=analytics.pagePath:~2Feducation~2Fyellow-ribbon-participating-schools~2Findex.html&_r.tabId=navigationsummary)

- [Standard Domo Dashboard - Filter by Yellow Ribbon](https://va-gov.domo.com/page/1964748112)

## Post-MVP Product Enhancements ##

**Incorporate search tips message into Yellow Ribbon Search
- GitHub Epic: https://github.com/department-of-veterans-affairs/va.gov-team/issues/#17938
- While the team was focused on a higher-priority product, a minor change was added to notify users to use full school names rather than abbreviations. 
- Long-term, the search algorithm needs to be changed so that it utilizes school abbreviation metadata. [Related discovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/26829)

-----

## Product Team ##
|Team|Name|Role|Organization|
|--|--|--|--|
|Decision Tools|[John Hashimoto](https://github.com/johnhashva)|Product Owner|USDS/DSVA|
|Decision Tools|[Marci McGuire](https://github.com/MarciMcGuireGCIO)|Product Manager|GCIO|
|Decision Tools|[Zachary Morel](https://github.com/zacharymorel)|Front-End Engineer|GCIO|
|Decision Tools|[Laurel Lawrence](https://github.com/laurellawrence)|Research/Design-Front-End|Ad Hoc|

## Key Artifacts
- |[MVP Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-yellow-ribbon-school/README.md)| Statement of purpose with goals, design intent, etc.| 

-----

## Technical Artifacts
- [Front-end Code Repository](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/yellow-ribbon)| 
- [Decision Tools Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/decision-tools)
- [GI Bill Comparison Tool Client Data Service (GIDS) Documentation|powers Yellow Ribbon and GI Bill Comparison Tool](https://github.com/department-of-veterans-affairs/gibct-data-service)

