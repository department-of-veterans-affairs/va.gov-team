# Healthcare Experience - Check-in 


## Overview
This product is reimagining the ecosystem that allows a Veteran to check-in for a medical appointment. This development team in particular will be creating the portion of the ecosystem that enables a Veteran to utilize their mobile device to check-in via va.gov as well as possibly via a VA-owned digital device within waiting areas. This team will also spearhead the coordination with other product teams, such as VeText, VAOS, MyVA, and the mobile app, in order to implement the full ecosystem.

## Problem Statement
Currently, VA medical facilities have a kiosk that are utilized by the Veterans to check-in for medical appointments when they arrive. These Kiosks are being sun-setted in CY 2022. The purpose of this product is to: 

 1. Replace and enhance functionaility from the kiosk and improve the experience of check-in for the Veteran.
 2. Put in place infrastructure for an end-to-end solution for Veteran digital check-in experience with VA health services, as this is a POC for consolidating data from disparate systems into a seamless solution.

 
## Desired User Outcomes

 - Easy to use check-in UX that Veterans want to use instead of face-to-face check-in
 - Improve wait times between arrival and completion of check-in
 - EZ and fast authentication to check-in for medical appointments

## Undesired User Outcomes

 - An experience that is inferior or less intuitive to use then the current physical kiosks 
 - Increasing wait times between arrival and completion of check-in
 - Increase in face-to-face interactions

## Desired Business Outcomes

 - Ability to eliminate physical Kiosks resulting in savings for the VA
 - Streamlined check-in process resulting in operational efficiency.
 - Setting foundation for unified digital healthcare experience 

## Undesired Business Outcomes

 - Increased face-to-face interactions

---
## Measuring Success

### Key Performance Indicators (KPIs)

 We will be evaluating the below metrics: 

 - Percentage of Veterans who chose digital check-in vs. face-to-face interaction
 - Check-in time variances between digital solution vs. physical kiosk


#### Baseline KPI Values
* Pending 

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

 - Number of Veterans who use digital check-in vs. face to face in pilot phase 

---

## Assumptions

All data will be available via Vets API integration. Data work is being done by a different team that will aggregate all the disparate systems into a micro services layer integrated into Vets API. VetText has existing functionality that will be leveraged - at this time the technical integration is the biggest unknown and risk. The risk will decrease as Vets API migration gets underway.

## Solution Approach

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the Initiative Brief Template*

**MVP**
The MVP will first focus on day of the appointment check-in product only.

**Potential Future Iterations**
Will focus on pre-check in (week before) and post visit functionality
![116461630-7cc64100-a836-11eb-9c3a-20ef58b26977.jpg (1280×720)](https://user-images.githubusercontent.com/66287082/116461630-7cc64100-a836-11eb-9c3a-20ef58b26977.jpg)


- Initiative | Link to Initiative Brief

--- 
## Go-to-market Strategy
- Choose a Pilot site (St. Louis, MO)
- Follow and support Pilot faciliites
- Conduct research interviews with Veterans and staff at Pilot sites (April 27-29, 2022)
- Make pre-check-in and check-in available to first VIZN (~ May 2, 2022)
- Make pre-check-in and check-in available to other VIZNs (~ 1 per week)

- [Link to Release Plan]There is no release plan at this time.

## Launch Dates
- *Target Launch Date*
  - 7/30/2021
- *Actual Launch Date* 
  - ???
- *What date will you evaluate impact after launch?*
  - Beginning Jan, 2022


## Solution Narrative

A Veteran will receive a text and email linking them to an easy to use check-in UI. A Veteran can also chose to text - I am here using their mobile device. Once that is done, the VA medical facility will be notified (via existing backend systems) that the Veteran has checked in. 

### Current Status

- Veteran and onsite (Veteran and staff) research has been completed. 
- MVP is in a Pilot phase

### Key Decisions

- Full authentication is necessary in order to allow Veterans to update their personal contact, emergency contact, and/or next-of-kin contact information.
   
## Screenshots

### Before








