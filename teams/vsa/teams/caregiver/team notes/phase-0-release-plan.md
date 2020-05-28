# 10-10CG Phase 0 Release Plan

- [Timeline](#timeline)
- [Dark Release Definition](#dark-release-definition)
- [Soft Release Definition](#soft-release-definition) 
- [Phase 0 User Stories](#user-stories)

## Timeline
| Date | Milestone | Notes | 
| --- | --- | --- | 
| April 16 | Content and design complete | [Complete](https://vsateams.invisionapp.com/share/9XWSQZ6SMG5) |
| April 16 | VSP Analytics request | [Complete](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8081) |
| April 23 | Payload validation testing with CARMA in QA/Dev | Complete| 
| April 24 | First draft frontend complete | Complete |
| April 27 | Submit VA.gov _first round_ Platform Staging Review Request | [Complete](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8479) |
| April 30 | CARMA Staging endpoint delivery | Recieved |
| May 1 | _First round_ VA.gov Platform Staging Review complete | Complete |
| May 4 | Staging demo - review VA.gov Platform feedback with Program team | Complete|
| May 4-8 | Program team reviews Staging functionality and provides additional feedback | Complete
| May 11 | Request Accessibility spot check | In progress
| May 15 | Frontend complete | In progress
| May 15 | Backend complete | In progress
| May 18 | VA.gov Platform Privacy and Security Review | On track
| May 18 | VA.gov Platform Staging Review  | On track|
| May 18 - May 22 | Dark Release functionality testing with CARMA| On track
| May 29 | Phase 0 Dark Release<sup>+</sup> | On track
| June 1 | VA.gov Platform Full Accessibility and 508 Office Audit |On track |
| July 30 | Soft Release<sup>+</sup> | On track


`+` As defined by the Program team
- [Dark Release Definition](#dark-release-definition)|
- [Soft Release Definition](#soft-release-definition) |

For more information on the VSP (VA.gov Platform) Collaboration touchpoints, please see documentation [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md).

## Dark Release Definition
(as of 4/15/20)
<ul> <li>Development work from VA.gov team is completed for all MVP US approved by the Business Owner.</li> <li> In May, the application and landing page is not a public URL. If a public URL must be used as part of the Va.Gov testing process, then the public URL can be temporarily used for testing and then made into a not-public URL once testing is complete (eg the public URL is “turned off” after testing).</li> <li> The public is not made aware of the landing page or 1010 CG online form. No announcements regarding the form until later (to be determined by the Business Owners).</li> <li> There will be testing in various testing environments prior to deployment between the two teams. After a successful testing, functionality will show that an application can flow successfully from VA.gov to CARMA.</li><li> No real applications (eg an actual veteran) will be sent from VA.gov to CARMA during this phase. If one is accidentally sent and goes into CARMA, the CARMA team will need to alert the CSCs so that they are aware and can work with the CARMA team to process the application.</li></ul>  

## Soft Release Definition
(as of 4/15/20)
<ul> <li>After all of the development work is tested and in production, a small group of CSCs will work with real applicants to submit online applications. CARMA completes remaining development items.</li> <li> Items flow through the usual testing, then push to prod, etc. VA.Gov team may complete enhancement items. Items flow through the usual testing, then push to prod, etc. After sign off, the Business Owners will decide when to make the announcement to the VA as a whole and do the public about the form now being available online. After the Business Owner decision, the form is now a public URL and is visible.</li></ul>

## Key
| Symbol | Meaning |
| --- | --- | 
| :white_check_mark:| Complete |
| :zap: | To Do
| :no_entry_sign:| blocked |

## User Stories
| Requirement | Ticket # | Status |
| --- | --- | --- |
| User will be able to: | 
| Navigate to the 10-10CG online application| n/a| :zap:
| View instructions if the online form is unavailable | n/a | :zap: |
| Start 10-10CG application online without logging in| 155 | :white_check_mark:|
| Fill in all fields from the paper 10-10CG form | n/a | :white_check_mark:|
| Ensure that all fields have been completed appropriately (data validation) | n/a | :white_check_mark:|
| Select a medical facility from a program-approved list | n/a | :white_check_mark:|
| Review entered data prior to submission | 176 | :white_check_mark:|
| Provide a signature for Veteran and Caregiver(s) | 164 | :white_check_mark:|
| Recieve and print a confirmation message after submission | n/a | :zap: |
| Receive instruction to print and mail the form if online submission is not available| n/a | :zap: |
| Not able to edit form after submission| 165 | :white_check_mark:|
| --- | --- | 
| Business will be able to: | 
| Verify veteran identity through MPI and ICN number | n/a| :zap: |
| Recieve application in CARMA immediately | n/a | :no_entry_sign:|
| Recieve a paper version of the 10-10CG with filled in information | n/a | :zap: |


