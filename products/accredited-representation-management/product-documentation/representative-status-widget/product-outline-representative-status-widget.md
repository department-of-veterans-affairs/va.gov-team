# Product Outline: Representative Status Widget
Team: Accredited Representation Management

---

## Overview
Create a user-friendly, accessible widget on VA.gov that reflects a user's (Veteran or claimant) current representative status.  

## Problem Statement
There is not currently an experience on VA.gov for users to understand their current representative status. Without insight into existing representation a Veteran or claimant may accidentally remove a representative that is actively assisting with a claim and delay their already lengthy claims process. 

Additionally, when appointing a representative for the first time, there are no feedback mechanisms in place for Veterans to review their pending appointment request as they await approval. Without this feedback, a Veteran may try to appoint additional representation which can cause confusion and delay appointment overall.

**How might we provide Veterans with insight into their current representative status on VA.gov?**
 
## Desired User Outcomes
1. Veterans and claimants can easily see if they have existing representation when interacting with the Find a Representative tool
2. Veterans and claimants can easily see if they have existing representation when interacting with the Appoint a Representative tool
3. Veterans and claimants can easily see their representative status in the Account Profile
4. Veterans and claimants can easily see when they have a pending request for representation.

## Desired Business Outcomes 
1. Increase the functionality of VA.gov to support Veteran’s insight into current representation. 

---
## Measuring Success


### Key Performance Indicators (KPIs)
1. % of user logins after widget prompt _Is our widget providing a compelling reason for users to login?_
    1. Broken out by page _Are users more compelled to login to the widget on certain pages/contexts?_
2. % users with representation who complete a search using our Find a Representative tool _What % of users with appointed representation are interested in new representation?_
3. ~% users with current representation who download a form using our Appoint a Representative tool _What % of users with appointed representation are interested in new representation?_~ Revisit when Appoint MVP is released

### Baseline KPI Values
1. Number of user logins after widget prompt per week/month _measuring growth_
2. % increase of user logins after widget prompt this week/month vs. last week/month _measuring proportional growth_

### Objectives and Key results (OKRs)
1. **Objective**: The widget provides unauthenticated users with a compelling reason to sign in and view their representative status
    1. **Key Result**: Increase in sign-ins based on a widget prompt (KPI #1)
2. **Objective**: The widget helps authenticated users understand if they have pre-existing representation that they can go to for support
    1. **Key Result**: We see a high bounce and/or exit rate on Find a Representative for authenticated users with existing representation
    2. ~**Key Result**: We see a high bounce and/or exit rate on Appoint a Representative for authenticated users with existing representation~ Revisit when Appoint MVP is released
3. **Objective**: The widget helps authenticated users avoid replacing a current representative or re-applying for an appointment that is already in progress
    1. **Key Result**: Reduced usage of Find a Representative for users that already have existing representation (KPI #2)
    2. ~**Key Result**: Reduced usage of Appoint a Representative for users that already have existing representation (KPI #3)~ Revisit when Appoint MVP is released

---

## Assumptions
1. Many Veterans are unaware that they have a current representative appointed
2. Veterans would like to see the status of their representative appointment request

## Solution Approach
Our immediate goal for the Representative Status Widget MVP is to provide Veterans and claimants with insight into any existing representation on VA.gov.  The MVP launch will involve adding the Representative Status Widget to the [accredited representative landing page](https://www.va.gov/get-help-from-accredited-representative/) and the live [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).

When the Appoint a Representative product launches, the Representative Status Widget will be included in the user flow to help users understand if they have existing representation, and that any requests for new representation will replace their current appointed representative.

Future iterations of the Representative Status Widget could include: 

1. Adjusting the content to match the Profile design pattenrs, and including representative status information directly in the user Profile.
2. Including a link in the Claims Status Tool, that points to the representative status inforamtion in Profile.
3. Introducing a new status, when users have a pending request for new representation. 
4. Add the Representative Status Widget to any related VA.gov pages where Veterans would benefit from seeing their representative status in context.
5. Consider scenarios where a Veteran may have multiple representatives, each appointed to assist with different responsibilities.

--- 

## Launch Strategy
### MVP Launch 
1. The Find a Representative tool will include the Representative Status Widget, encouraging Veterans to sign in and view any current or pending representation

### Future
1. The Appoint a Representative tool will include the Representative Status Widget, encouraging Veterans to sign in and view any current or pending representation
2. The Profile page will include the Representative Status Widget, enabling Veterans to see any current or pending representation
3. Make the Representative Status Widget code available to other teams, so they can embed this widget in their products if the context makes sense

## Launch Dates
1. MVP launch date: May 2024
   
---
## Product Playbook / Incident Response Plan

[Representative Status Widget Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials/product-playbook-incident-response-plan.md)

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

- **Team Name**: Accredited Representation Management
- **GitHub Label**: accredited-representation-management-team
- **Slack channel**: #benefits-representation-management

#### Team Members
 
 - **DEPO Lead**: Jennifer Bertsch
 - **PM**: Lindsay Li-Smith
 - **Engineering**: Holden Hinkle
 - **Research/Design**: Janelle Finnerty

#### Stakeholders
 - Dr. Brandi Traylor (Office of Business Strategy)
