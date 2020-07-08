# Express Care - Product Initiative
---

## Overview
Idea: Create initial MVP of same day telehealth/screening requests in VAOS (aka - Express Care) using existing data flow currently used in legacy implementation of Express Care.

## Problem Statement
Veterans have medical needs that may either be resolved without an in-person appointment and/or want guidance about how to seek additional care for a medical concern, yet may not demand a trip to the ER. For various reasons, the Veteran may not be able to go into a physical location for this care. In both cases, however, the Veteran needs to talk to a medical professional today.

### Users:
1. *Veterans who:*
   - want to minimize potential exposure (eg COVID-19)
   - have limited access to transportation / funds for transportation
   - have medical questions that can be triaged either via phone or telehealth appointment 
   - in our research all Veteran interviews indicated they would use a same day, telehealth appointment option
2. *Internal VA staff* _(this is the staff managing the Schedule Manager queue for EC requests)_
   - MSAs (Medical Support Staff) & NPs (Nurse Practitioners)
   - LIPs (Licensed Independent Practitioner)
   
## Hypothesis:
We believe that by providing Veterans with option to request same day consultation/telemedicine for specific symptoms, we can either get them the care they need without f2f visit.

We also believe that this option is going to become a desirable feature for Veterans that helps them lessen the burden of coming into to VAMC for care that can be triaged over the phone/telehealth video visit.

 
## Desired User Outcomes
 - Can make same-day requests for medicial concerns withouth going in to a VAMC or CC clinic

## Undesired User Outcomes
 - That Veteran is confused by what Express Care is
 - That we have a high number of Veterans incorrectly using Express Care for appointments that should follow to typcial appointment path

## Desired Business Outcomes
 - That VAMC are able to meet initial request within 1 hour of submission from Veteran through VAOS
 - That it's clear how many EX requests are resolved with first phone call vs. second phone call or necessary ad hoc telehealth VVC visit
 - That the current VAMC pilots using EC find value both with Veterans and the facility 
 - That more VAMC begin to adopt Express Care option for their VAMC and Veterans - the option/feature usage grows in VAOS

## Undesired Business Outcomes
 - That VAMC are not able to address the Express Care queues within their 1hr window
 - That Veterans develop a mistrust for online appointments and/or the Express Care option because of confusion or response time being too slow

---
## Assumptions:
  - this offering will be to a low number of users as it's being piloted in SF and soon Wilmington, NC
  - we expect to see low overall usage numbers, but we hope to see high usage numbers for facilities that have enabled this option
  - we assume there is no substantial data changes necessary to implement this feature
  - we will need to take into consideration current EC implementation since it's based on specific stakeholder direction

## Solution Approach
- Initial design and build of this feature is based on current data model being used by legacy VAOS
- We want our initial implementation in new VAOS to be as lean as possible as this offering is only being piloted with VAMCs at the moment
- If the desire for this feature grows with potential of usage growth - we will continue to iterate on our implementation to improve experience
- We have done research on Express Care and are actively testing an Express Care prototype 

--- 

## Go-to-market Strategy
 - This will be a phased / iterative release
 - We have mapped out 2 iterations to date to allow for both user-centered design/development and also rapid feature release:
    - MVP: Enable access to Express Care option in new VAOS and redirect user to current legacy implementation of Express Care
    - v1.0: Enable the "happy path" for Express Care - If Veteran is registered at one VAMC & that facility has EC turned on and available for today then display EC prompt on Appts homepage
    - v1.1: Enable - Veteran is registered at 2+ VAMCs but only 1 of the VAMCs offered Express Care
    - v1.2: Enable - Veteran is registered at 2+ VAMCs and multiple of those VAMCs offeres Express Care

## Launch Dates
- *Target Launch Dates:
  - MVP: 7/22/20 (estimated)
  - v1.0: 8/5/2020 (esti.)
  - v1.1: TBD
  - v1.2: TBD
- *Actual Launch Date* 
  - tbd
---

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
