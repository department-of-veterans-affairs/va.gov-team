# Facility Locator UX Redesign Narrative

The purpose of this document is to provide a narrative of the iterations and decisions made during the UX redesign.
It is preceded by 
- [Beginning September/October 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative-sept-2019.md)
- [v1: November 2019](https://https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative-nov-2019.md)
- [v2: December 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative-dec-2019.md)

## vx: March 2019

## Background

### TriWest Link

The Office of Community Care requested a number of changes to be made prior to the March 18, 2020 official roll out date. 

The links to search for urgent care and pharmacies using the TriWest page were in the final phase of this project. These links were present:
- in the intro text above the search boxes
- above the map, when the VA facility type searched was urgent care, community pharmacies or community providers
- in the error message that displayed when no results were found

To support Veterans in the new search workflow, text in the area above the search box was changed to include more explicit instructions for searching for urgent care and urgent care pharmacies. 

### Pharmacies

Labeling for pharmacies changed several times during this project. Because community pharmacies can be used in several scenarios, each with particular criteria, the determination was made to use "Community urgent care pharmacies (in VA's network)". 

In the week before the 3/18 roll out date, a discussion about the possibility of Veterans visiting an urgent care facility and an urgent care pharmacy in different regions led to the decision to hide "Community urgent care pharmacies (in VA's network)" from the VA facility type drop down. This decision was made to avoid providing misleading or inaccurate pharmacy information which could lead to a Veteran paying out of pocket for the prescription.  

This decision also required an additional update to the language in the intro text, removing the reference to pharmacies. 

### Alert

When Facility type = Urgent care and Service type = Community urgent care providers (in VA's network), users will see an alert with a call to action to visit a webpage from the office of Community care to learn about eligibility and billing. 

![Alert](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/urgent%20care%20alert.png)

When urgent care pharmacies are again visible from the VA facility type dropdown, the same alert will be displayed for those searches. 

### Search result subhead

During QA of Urgent Care MVP Phase 1, it was discovered that the results summary subhead updated prematurely. In addition to this bug, the number of search results were incorrect for any PPMS (community care) related searches. Although not ideal, the decision was made to hide the subhead for all Facility Locator searches, regardless of Facility type. The goal is to prevent user confusion from the incorrect search summary and to provide a consistent Veteran experience. This is intended to be temporary, until the root cause(s) for the issue(s) can be addressed. 
