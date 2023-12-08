# API UX Requirements for medical records
Last updated on 5/18/2023

## Table of contents
* [Context](#context)  
* [API requirements](#api-requirements)
  * [List view](#list-view)
  * [Details view](#details-view)
  * [Notifications](#notifications)


## Context
For the past many years, MHV has only given Veterans access to their health records by downloading a PDF or TXT file, typically in the form a Blue Button report. Report driven interfaces are outdated, inaccessible, and don't allow Veterans to easily find what they are looking for. Therefore, as part of the MHV on VA.gov project, the teams have developed a new approach and design for medical records that provides access to  historical health information in-browser, rather than only via downloadable reports. 

This new design includes two primary UI patterns. 

## API requirements
This new design includes two primary UI patterns, both of which need to be supported by the API. 

### List view  
Shows user a list of discrete pieces of information within a particular data domain. For example, a list of lab results, a list of clinical notes, or a list of vaccines. 

**List view API requirements**
- [ ] As a Veteran, I can find all historical pieces of information within a particular category, such as labs and test results
- [ ] As a Veteran, I can load pages of results one at a time in a peformant way (i.e. we need to support server-side pagination)
- [ ] As a Veteran, I can filter all pages within the list view by type, provider, location, and date
- [ ] As a Veteran, I can search across all pages within the list view by name, type, provider, location, and date  

![Lab and test results - Mobile](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87662120/36c3bedd-4ae7-400f-8d48-92851269fbaa)


### Details view
Shows user all of the data fields for . For example, a list of lab results, a list of clinical notes, or a list of vaccines. 

**Details view API requirements**
- [ ] As a Veteran, I can follow a URL to jump directly into a result (i.e. we need to support deep linking)
- [ ] As a Veteran, I can read all details for a specific piece of information. For example, I can see all the included test results within a CBC on one page.

![Chemistry and hematology](https://github.com/department-of-veterans-affairs/va.gov-team/assets/87662120/6691592c-2bb4-4fc2-90dd-63be8fcef6c1)

### Notifications

**Notification API requirements**
- [ ] As a Veteran, I can receive a notification by email or text when a new result comes in. This should be as timely as possible, preferably right away.

