# VAOSR Community Care Provider Selection - Product Initiative
---

## Overview
**Idea:** Create in-app community care provider selection experience that allows for multi-select options for potential community providers based on veteran's location. 

## Problem Statement
Veteran's who are community care eligible have the option to seek care with community providers. For some veteran's this is a new option that they discover as part of the VA online scheduling flow. For other Veteran's, this is an optin they know/have used in the past and have a preferred, eligible community care provider in mind. 

Right now the VAOS experience for making that provider selection choice is - not great. Because they must select providers that are in the CCN (VA community care network) they are forced to jump out of the VAOS app experience into Facility Locator, find the provider, then proceed to copy/paste the provider information into VAOS. Not cool. 

Likewise, if Veteran's aren't doing this because the cumbersome in the app, the burden is falling on the Schedulers to spend more time triaging community care provider suggestions. 

Additionally, the existing source for community care provider data - Provider Profile Management System (contains the community care providers (PPMS) - has some limitations based on how it's structured and how it performs.

## Knowns:
- PPMs is the data source we need to make this happen
- PPMS has some technical issues we need to work through
- Most Veterans using VAOS that are CC eligible discover they are CC eligible for the first time while using the app
- Launch heavily dependent on technical solution for PPMS data taxonomy mapping to VHA healthcare taxonomy 

## Known unknowns:
- Question: Should results be displayed based on drive time radius based on time, no miles?
- Question for stakeholders: do we limit results to the service-specific drive radius? (30 minutes for primary care, 60 minutes for 1 of the 5 specialty care services)
- Question: Should a Veteran be able to enter an alternate address (other than the residential address on file) so Veteran can request appointment with Community Care provider in my current location?
-  Question: Has the PACT requirement for community care been resolved with CCE API team/Dave M.?

## Desired Outcomes

- Improve the Community Care provider selection experience as part of a Veteran's scheduling experience
- Improve understanding of available CC providers (based on VA network) for Veteran's interested in CC care
- Decrease dropoff of Community Care requests in VAOS due to confusing and complicated provider information gathering

## Undesired Outcomes
- Creating a feature that has poor performance because data is performance/services used are poor

## Hypothesis/Bet 
We believe that by providing approved community care providers to Veterans during their community care request process in VAOS we will descrease request dropoff for these appointment types and also improve triage/booking time for Request Managers because information for these appointments is easier to find and easier to triage.


## How might we
Improve the provider selection experience while also improving the quality of data that's being displayed to veterans?

## Definition of Done
- [ ] VAOS app will automatically search for closest community care providers based on my residential address and type of care selected (closest providers within the service-specific drive radius (30 minutes for primary care, 60 minutes for 1 of the 5 specialty care services: i.e. routine audiology exam (includes hearing aid support), routine optometry exam, routine podiatry, and nutrition services)
- [ ] Ability to enter an alternate address so Veteran can request appointment with Community Care provider in my current location
- [ ] Desirable to be able to display both provider name and group name

---
## Measuring Success
- Improve the community care provider selection experience as part of a Veteran's scheduling experience
- Improve understanding of available community care providers (based on CCN) for Veteran's interested in community care
- Decrease dropoff of Community Care requests in VAOS due to confusing and complicated provider information gathering

### Key Performance Indicators (KPIs)
- Completion of provider preferences step(s)
- Community Care request submissions

#### Baseline KPI Values
- Current funnel https://va-gov.domo.com/page/443732151
- Initiative dashboard (request https://github.com/department-of-veterans-affairs/va.gov-team/issues/18828)


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

--- 

## Go-to-market Strategy
[Release Plan](cc-provider-selection-release-plan.md)

## Launch Dates
- *Target Launch Date*
  - Canary - February 17, 2021
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - 
---

## Solution Narrative

### Current Status

### Key Decisions
