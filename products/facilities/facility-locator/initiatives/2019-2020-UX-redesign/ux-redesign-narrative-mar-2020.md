# Narrative: Facility Locator UX Redesign and Urgent Care MVP 

The purpose of this document is to provide a narrative of the iterations and decisions made during the UX redesign.
It is preceded by 
- [Beginning September/October 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2019-2020-UX-redesign/ux-redesign-narrative-sept-2019.md)
- [v1: November 2019](https://https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2019-2020-UX-redesign/ux-redesign-narrative-nov-2019.md)
- [v2: December 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2019-2020-UX-redesign/ux-redesign-narrative-dec-2019.md)
- [v3: February 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/initiatives/2019-2020-UX-redesign/ux-redesign-narrative-feb-2020.md)

## Final MVP: March 2019

## Background

### TriWest Link

The Office of Community Care requested a number of changes to be made prior to the March 18, 2020 official roll out date. 

Previously, users searching for urgent care or urgent care pharamcies were directed away from the Facility Locator to the TriWest Provider Locator. 

![Links to TriWest](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/70838910-3c8c2d00-1dbf-11ea-9a52-daa31c557749.png)

These links to the TriWest site were removed in the final phase of this project. These links were present:
- in the intro text above the search boxes
- above the map, when the VA facility type searched was urgent care, community pharmacies or community providers
- in the error message that displayed when no results were found

To support Veterans in the new search workflow, text in the area above the search box was changed to include more explicit instructions for searching for urgent care and urgent care pharmacies. 

![Intro Text](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/intro%20text.png)

### Pharmacies

Labeling for pharmacies changed several times during this project. Because community pharmacies can be used in several scenarios, each with particular criteria, the determination was made to use "Community urgent care pharmacies (in VA's network)". 

In the week before the 3/18 roll out date, a discussion about the possibility of Veterans visiting an urgent care facility and an urgent care pharmacy in different regions led to the decision to hide "Community urgent care pharmacies (in VA's network)" from the VA facility type drop down. This decision was made to avoid providing misleading or inaccurate pharmacy information which could lead to a Veteran paying out of pocket for the prescription.  

This decision also required an additional update to the language in the intro text (shown above), removing the reference to pharmacies. 

### Alert

When **VA facility type** = Urgent care and **service type** = Community urgent care providers (in VA's network), users see an alert with a call to action to visit a webpage from the office of Community care to learn about eligibility and billing. 

![Alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/urgent%20care%20alert.png)

When urgent care pharmacies are again visible from the VA facility type dropdown, the same alert will be displayed for those searches. 

### Search result subhead

A bug causing the results summary subhead to update prematurely was discovered during the QA process. In addition, the number of search results were incorrect for any PPMS (community care) related searches. PPMS data is not paginated in the response and despite significant effort, we were unable to resolve the issue. 

Although not ideal, the decision was made to hide the subhead for all Facility Locator searches, regardless of Facility type. The goal is to prevent user confusion from the incorrect search summary and to provide a consistent Veteran experience. This is intended to be temporary, until the root cause(s) for the issue(s) can be addressed. 

[Hidden subhead](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/hidden%20subhead.png)

### Post-MVP

Although this narrative outlines the changes made as part of the Urgent Care MVP release, there are outstanding issues in the backlog which will further improve the Veteran experience, including: 

- "No service type found" notification
- Addition of "you are here" indicator 
- Correlation between map pin and cards in search results
- Phone number display bug
- Hours of operation for cemeteries bug
- 508 Accessibility issues

Other search improvements will be forthcoming, following user research conducted in March 2020 


