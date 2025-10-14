# My VA Health (OH) transition - Content audit Health Care hub
By: Sara Sterkenburg, Tori Moore

## Overview
When all health tools have integrated OH data, we can begin transitioning current (OH) users of the My VA Health portal over to My HealtheVet on VA.gov to manage their care. At that point, we may no longer want to advertise anything about the "My VA Health portal" on unauthenticated Drupal pages in the health care hub or the rest of VA.gov. This audit covers an analysis of which pages in these hubs currently have content or URL references to the My VA Health (OH) portal, and recommendations around what updates to make throughout the transition.

## Timeline
<img width="1034" height="496" alt="Screenshot 2025-09-22 at 1 02 19 PM" src="https://github.com/user-attachments/assets/2eda7a16-f1a4-4e72-90cb-b16ee0a242d8" />

## Questions
* When would we want to make changes to the `/health-care` hub pages? Thess are unauthenticated pages, and all users would see any changes. Do we wait until Spring 2026 when all current OH facilities are seeing transition messaging elsewhere?
* What other pages on VA.gov mention the My VA Health portal?
  * Does that language need to be updated at all? If yes, does it need to be updated _before_ the first current OH site begins to see transition comms?

## Pages covered by audit

### Health care hub
|Page title | URL| signed-out notes| signed-in notes |
|--------|-------|-------|-----|
| Manage your health care with My HealtheVet| `va.gov/health-care/manage-health/` | Has "note" about My VA Health portal directly beneath the sign-in widget| Still has "note" about My VA Health portal - once signed in, it appears beneath the primary action link to the health portal |
| Manage your health appointments | `va.gov/health-care/manage-appointments/` | _same as above_ | _same as above_  |
| Refill prescriptions and manage medications | `va.gov/health-care/manage-prescriptions-medications/` | _same as above_ | _same as above_ |
| Review medical records online | `va.gov/health-care/review-medical-records/` | _same as above_ | _same as above_ |
| Send and receive secure messages | `va.gov/health-care/send-receive-messages/` | _same as above_ | _same as above_ |

### Other areas of VA.gov
Tori ran a Drupal content audit against these sections of static (Drupal) VA.gov: 
* Benefits Detail Page
* Benefits Hub Landing Page
* Centralized Content
* FAQ page
* Landing Page
* Resources and Support Detail Page
* Reusable Q&A
* Step-by-Step

There are several mentions of My VA Health, but we cannot have conditional content on static unauthenticated Drupal pages, so it does not make sense to update this language until all 6 current OH facilities are at a point in the transition where we no longer want to advertise the My VA Health portal to them. At that point, we can change or remove the language everywhere. 

### Facility pages: 
Horizon team noticed that the 6 sites for current facilities on the Oracle Health EHR system have pages that tell patients how to access the My VA Health patient portal, but the information is outdated/ inaccurate and routes them to the wrong places. All facilities pages are owned outside of OCTO by VHA, and the Content & IA team has already informed them of these findings. 

There could be several pages on each facility's site that have problematic content related to 
1.) the My VA Health patient portal, 
2.) How to access it - which today is via many URLs to the My HealtheVet Classic website that was sunset back in June and is no longer a good place to send users, and 
3.) Sign-in credentials - which should only reference ID.me and Login.gov moving forward - all other credentials are obsolete

Facilities pages in question: 
| Facility name | URL | 
| -- | ---|
| VA Roseburg Healthcare System | [Link](https://www.va.gov/roseburg-health-care/programs/my-va-health/) | 
| Jonathan M. Wainwright Memorial VA Medical Center | [Link](https://www.va.gov/walla-walla-health-care/programs/my-va-health/) | 
| White City VA Medical Center | [Link](https://www.va.gov/southern-oregon-health-care/programs/my-va-health/) |
| Mann-Grandstaff Department of Veterans Affairs Medical Center | [Link](https://www.va.gov/spokane-health-care/programs/my-va-health/) |
| Captain James A. Lovell Federal Health Care Center | ??? Looks like they don't have the same pages related to EHR modernization or My VA Health |
| Chalmers P. Wylie Veterans Outpatient Clinic | [Link](https://www.va.gov/central-ohio-health-care/programs/my-va-health/) |

## Changes needed by December 2025
Because the My VA transition experience will only be visible to OH users at the Columbus, OH facility at this time, **we do not recommend changing the content strategy** around the My VA Health portal at this time. 

Drupal pages cannot accommodate conditional logic for a subset of users, even when signed in, so anything like that would have to be handled via React widgets which are complicated and time consuming to implement. 

The most visited pages that mention the My VA Health portal are those related to Managing healthcare in the `/health-care hub`. The langauge used related to the My VA Health portal on all of these pages is very flexible, and Tori Moore thinks that this language works for our transition scenario and does not require updating. This decision has been approved by Danielle Thierry as of October 2025. 

## Changes needed when all current OH facilities using the My VA Health portal can see transition comms (ETA Spring 2026) 
1. Remove the **Note** beneath the sign-in widget (and primary action links once users authenticate) on all of the pages in the `/health-care` listed in "Health care hub" section above.
2. Remove references to the My VA Health portal from the "Other areas of VA.gov" per Tori's content audit once all 6 current OH facilities are seeing transition comms within My HealtheVet on VA.gov.
3. Remove information about My VA Health from the facility pages for the 6 OH facilities whose users have experience the My VA Health portal (included in table the "Facility pages" section above). 

