# My VA Health (OH) transition - Content audit Health Care hub
By: Sara Sterkenburg, Tori Moore

## Overview
When all health tools have integrated OH data, we can begin transitioning current (OH) users of the My VA Health portal over to My HealtheVet on VA.gov to manage their care. At that point, we may no longer want to advertise anything about the "My VA Health portal" on unauthenticated Drupal pages in the health care hub or R&S hub. This audit covers an analysis of which pages in these hubs currently have content or URL references to the My VA Health (OH) portal, and recommendations for what to do at the time of transition.

## Timeline
<img width="1034" height="496" alt="Screenshot 2025-09-22 at 1 02 19 PM" src="https://github.com/user-attachments/assets/2eda7a16-f1a4-4e72-90cb-b16ee0a242d8" />

## Questions
* When would we want to make changes to the `/health-care` hub pages? This are unauthenticated pages, and all users would see any changes. Do we wait until Spring 2026 when all current OH facilities are seeing transition messaging elsewhere? 

## Pages covered by audit
Pages that fall in the "Manage your health care section" including: 

### Table 1 - Health care hub
|Page title | URL| signed-out notes| signed-in notes |
|--------|-------|-------|-----|
| Manage your health care with My HealtheVet| `va.gov/health-care/manage-health/` | Has "note" about My VA Health portal directly beneath the sign-in widget| Still has "note" about My VA Health portal - once signed in, it appears beneath the primary action link to the health portal |
| Manage your health appointments | `va.gov/health-care/manage-appointments/` | _same as above_ | _same as above_  |
| Refill prescriptions and manage medications | `va.gov/health-care/manage-prescriptions-medications/` | _same as above_ | _same as above_ |
| Review medical records online | `va.gov/health-care/review-medical-records/` | _same as above_ | _same as above_ |
| Send and receive secure messages | `va.gov/health-care/send-receive-messages/` | _same as above_ | _same as above_ |

### Table 2 - Resources & support hub

TBD - Tori will run audit in Drupal
|Page title | URL| notes|
|--------|-------|-------|
|

### Table 3 - Other pages on VA.gov

TBD - Tori will run audit in Drupal
|Page title | URL| notes|
|--------|-------|-------|

## Changes needed by December 2025
Because the My VA transition experience will only be visible to OH users at the Columbus, OH facility at this time, **we do not recommend changing the content strategy** allowing all OH users of the My VA Health portal at this time. 

Drupal pages cannot accommodate conditional logic for a subset of users, even when signed in, so anything like that would have to be handled via React widgets which are complicated and time consuming to implement. 

The most visited pages with any My VA Health portal references are those related to Managing healthcare in the Health Care hub. The langauge used related to the My VA Health portal on all of these pages is very flexible, and Tori Moore thinks that this language works for our transition scenario and does not require updating. This decision has been approved by Danielle Thierry as of October 2025. 

## Changes needed when all current OH facilities using the My VA Health portal can see transition comms (ETA Spring 2026) 
1. Remove the **note** beneath the sign-in widget (and primary action links once users authenticate) on all of the pages in the Health Care hub listed in Table 1 above.
2. Move any conditional information about My VA Health to only the facility pages for the 6 OH facilities whose users have experience the My VA Health portal.

