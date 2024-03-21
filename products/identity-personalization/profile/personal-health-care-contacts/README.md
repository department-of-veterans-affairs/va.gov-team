# Product Outline: Personal health care contacts 

**Last updated:** 10/5/23

## Table of Contents

## POCs
This page is owned by the [My HealtheVet on VA.gov Cartography team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization#landing-pagehome-team) with guidance from [VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/README.md#team) and

- **Github labels**: `emergency-contact`, `next-of-kin`, `my-health-CTO-HEALTH-TEAM OCTO`, `my-health-INTEGRATION`, `personal-health-care-contacts`
- **Slack channel:** #mhv-on-vagov-cartography-team #accountexp-authexp

## Overview

Next-of-kin and emergency contact information provides clinical and administrative staff the information needed to coordinate care in the event the Veteran is unconscious or deceased.  Currently this information is collected on the 10-10EZ PDF form upon enrollment for healthcare, but is not collected on the online form as of September, 2023.  

Another touchpoint to collect this data is the online appointment check-in experience, where Veterans are asked to confirm their next-of-kin and emergency contact information.  If the data is incorrect, the Veteran can work with staff at the medical facility to update the information on the day of appointment, or call in to update this information.  

This product is intended to introduce a self-service way to review and edit emergency contact and next-of-kin information.

## Problem Statement

There is an absence of a digital self-service method that allows Veterans to proactively view, add, or edit their next-of-kin and emergency contact information at their convenience. This gap means that Veterans are not reminded to update this information until they are at a scheduled appointment check-in stage, which could lead to outdated or missing information that may be necessary in the event of an emergency or medical complication.

### User Goals
- **Proactive Management:** Veterans should be able to update their emergency contact information proactively, without waiting for a medical appointment or having to call in to make changes.
- **Streamlined Check-In Process:** By proactively managing their emergency contact and next-of-kin information, Veterans can avoid last minute manual data correction methods at the check-in process for medical appointments
- **Data Integrity**: Veterans aim to maintain accurate, up-to-date next-of-kin and emergency contact information to ensure that medical staff can reach the correct individuals in case of an emergency.

### Desired User Outcomes
- **Streamlined Appointment Experience:** Reduction in the average time spent during the appointment check-in process due to pre-verified next-of-kin and emergency contact information.
- **Lower rate of missing data:** There is a significant decrease in missing data for emergency contact and next-of-kin information for Veterans, resulting in the better preparedness for the Veteran in the case of an emergency
- **Higher rate of correct data**: In the event of an emergency, next-of-kin and emergency contact data is up-to-date for more Veterans

### Undesired User Outcomes
Veterans are confused about the scope of what their updates to emergency contact and next-of-kin covers (healthcare only)
Data is not updated across systems in a timely manner, resulting in Veteran frustration

### Desired Business Outcomes
- **Reduced Call Center Dependency:** A noticeable decrease in the number of calls made to the VA for the specific purpose of updating next-of-kin and emergency contact information.
- Reduced burden on staff at VA clinical sites to update next-of-kin and emergency contact information

### Undesired Business Outcomes


## Projects

# Analytics

## GA / Domo Dashboards

## Measuring Success

### Key Performance Indicators (KPIs)
- _What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?_
     - Veterans are viewing and updating their next-of-kin and emergency contact information on the self-service tool, as measured by interactions on Google Analytics / Domo
- _What are the most important metrics that track with this product/initiative's success?_
     - Number of updates made to next-of-kin and/or emergency contact through the self-service option
_Include links to Domo or Google Analytics Dashboards/Reports_
_Limit 5-6 KPIs per product_

|Category|Ease of use|Service completion|Trust/Satisfaction|Health|
|---|---|---|---|---|
|KPI|||||
|KPI|||||


**Baseline KPI Values**
- Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits.

## Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_
-Objective:
     -Key result:
     -Key result:

## Assumptions
- _Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality_
     - Veterans will want to proactively update their next-of-kin and emergency contact information
## Solution Approach
- _What are you going to build now, and why have you decided to start there?_
     - In the VA Profile Authenticated Experience, we will first build a view-only option for next-of-kin and emergency contact information. We have decided to start there to understand user interaction with a view-only option, and release value to users as early as possible.  A read-only feature is significantly lower risk and lower effort technically.
- _Why this solution / approach over other solutions / approaches?_
      - There has been careful consideration as to where next-of-kin and emergency contact data should be able to be viewed and updated.  After collaboration with multiple teams, we have determined that it makes the most sense for these data to be exposed / editable in the VA Profole.
- _What have you explicitly decided to not include in this initial set of functionality, and why?_
     - In the initial set of functionality, we have decided to
          - Only display the first / primary next-of-kin and emergency contact, not multiple.  The assumption here is that only 1 for each is absolutely critical
          - Offer read-only at first for reasons outlined above
- _How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?_
     - The current planned path is to:
          - Introduce read-only MVP for next-of-kin and emergency contact to measure interaction
          - Link to the read-only feature from the online appointment scheduling process in order to drive more users to view and confirm their next-of-kin and emergency contact information earlier in the process before their appointment check-in
          - Introduce add/edit feature for emergency contact and next-of-kin
## Launch Strategy
- _How are Veterans and others using this product going to know it exists?_
     - In the first iteration, the current design is that there will be a prominent link in the VA profile that allows a user to view this information
     - In the second iteration, the Veteran will be linked for the online appointment scheduling process
     - [Launch plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-health-care-contacts/release-plan/release-plan-mvp-mar-2024.md) for read-only iteration
- _What marketing, outreach, or communications are necessary for this product to be successful?_
     - None planned as of right now, but this may change based on user interaction metrics with the product

## Launch Dates

- Link to Release Plan (with launch dates)

What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?
tbd

## Solution Narrative

The VA Profile will have a new link in the left-navigation that will bring the user to a new page that will allow the Veteran to view (Iteration 1) and add/update (iteration 2) next-of-kin and emergency contact information.  It will be a single page that displays 1 next-of-kin name and associated contact information, 1 emergency contact and associated contact information, and instructions for how to update this information if it is missing or incorrect.

There are multiple reasons we are leaning towards the current design being a new left-navigation link as opposed to adding new fields to existing features like personal information.

1. Next-of-kin and emergency contact applies to healthcare only, and is populated within the healthcare enrollment system as well as VISTA instances.  We need to make it very clear to users through multiple signals (including the left-nav link title) that this is next-of-kin and emergency contact for the purpose of healthcare
2. While the MVP will only include 1 emergency contact, and 1 next-of-kin, it is possible that future iterations will allow the user to read/add/edit multiple records for each, as the backend API (health-benefits) allows for multiple entries, as does the Enrollment system and VISTA.  Separating these new fields from existing links will reduce future scalability concerns
3. There is a vision to link to this new feature from other applications, including the appointment confirmation page for online appointment scheduling.  Decoupling from existing left-nav links will allow us to be pointed in where we send users to, to update information, rather than sending them to a page where they would have to scroll through other information to find next-of-kin and emergency contact
4. Isolating these fields into their own page will lower the risk of negatively affecting the user experience of other sections of the Profile as changes are made

## Current Status
## Key Decisions
|Date|Decisions|Reason|Impacts|
|---|---|---|---|
|10/3/2023|Team decided to create a dedicated page for personal health contacts instead of adding to existing page| Improve scalability, clearer UX, increase ability to measure usage| Increased technical scope and IA considersations, adds time to launch|
|||||

## Design and UX
## Frontend
## Backend

