# Facility Locator UX Redesign Narrative

The purpose of this document is to provide a narrative of the iterations and decisions made during the UX redesign. 

## Timeline and Versions
- [September/October 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative.md#beginning-septemberoctober-2019)
- [v1: November 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative.md#v1-november-2019)
- [v2: December 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/product/solution-narrative/ux-redesign-narrative.md#v2-december-2019)

## Beginning: September/October 2019

### Background
- The Facility Locator team was formed during September/October of 2019. 
- The Facility Locator allowed users to search for locations within VHA (including Vet Centers), VBA, NCA and Community Care (recently added). 
- Based on known legacy issues and business need, it became clear that the recent implementation of Community care was not supporting Veterans, especially in their searches for urgent care. 
- Urgent care is a component of Community Care. Users searching for a Community Care facility are required to specify a service type as part of the search parameters. The logic for the search is not consistent with Veteran mental models for healthcare, causing frustration. 
- The search functionality and data quality concerns meant a link to TriWest's urgent care locator would persist above the search feature on the Facility Locator page. The workflow beyond VA.gov includes a PDF which explains urgent care benefits to Veteran, provider and pharmacy, A step in the process is downloading the PDF to take to the visit. 

![Community Care Search](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/community%20care.png)

![Iconography](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/iconography.png)

## v1: November 2019

### Background
- The team spent two Discovery sprints understanding users and the data to inform the redesign. 
- User research conducted during these sprints made it clear that the presentation of search results in both the list and map was confusing to users and that Veterans search by a specific service and by distance when choosing a location to visit. 
- The following images are from the first wireframe: 

![Form 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v1.png)


![Form 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v2.png)


![Form 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v3.png)


![Form 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v4.png)


- These wireframes were discussed as a team. 
- Based on DEPO and OCC input, urgent care search improvements became the priority. 
- The issues remaining with non-urgent care community care are related to taxonomy and presentation at individual provider level rather than facility location level. 

## v2: December 2019

### Background
The following images are from the next iteration, a prototype used in user research during December 2019. 
- The goals of the research were to learn the best way to provide location information for Urgent Care facilities on the Find VA Locations page of VA.gov and to learn how Veterans view "retail" and "urgent" locations.

This iteration tested making urgent care and community health more prominent in the drop-down. 

![New Dropdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/facility%20type%20drop%20down%20v2.png)


And providing more education about the differences between the sub-types. 

![Urgent care definitions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/urgent%20care%20filter%20by%20service%20v2.png)

This iteration also included some map modifications made after user research revealed existing icongraphy was confusing. 

![Urgent care results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/urgent%20care%20results%20v2.png)

![Service type](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/v2%20service%20filter.png)


- The approaching addition of Optum as a network provider made the UX redesign MVP necessary by 2/1/2020. 

