# Product Outline: Representative Status Widget
Team: Accredited Representation Management

Product URL: [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep) \
Landing Page URL: [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)

---

## Overview
Create a user-friendly, accessible widget on VA.gov that reflects a user's (Veteran or claimant) current representative status.  

## Problem Statement
There is not currently an experience on VA.gov for users to understand their current representative status. Without insight into existing representation a Veteran or claimant may accidentally remove a representative that is actively assisting with a claim and delay their already lengthy claims process. 

**How might we provide Veterans with insight into their current representative status on VA.gov?**
 
## Desired User Outcomes
1. Veterans and claimants can easily see if they have existing representation when interacting with the Find a Representative tool.
2. Veterans and claimants can easily see if they have existing representation when interacting with the Appoint a Representative tool.
3. Veterans and claimants can easily see their representative status in the Account Profile.

## Desired Business Outcomes 
1. Increase the functionality of VA.gov to support Veteran’s insight into current representation.

## Assumptions
1. Many Veterans are unaware that they have a current representative appointed.
2. Veterans would like to see if they have current representation.

## Solution Approach
Our immediate goalis to provide Veterans and claimants with insight into any existing representation, by way of a Widget that can easily be implemented to any page on VA.gov.

## Launch Strategy
Thehe Representative Status Widget MVP launch will involve adding the Representative Status Widget to the [accredited representative landing page](https://www.va.gov/get-help-from-accredited-representative/) and the live [Find a Representative page](https://www.va.gov/get-help-from-accredited-representative/find-rep/).

**Launch Dates:**
1. MVP release: May 2024 ([release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/release-plan-representative-status-widget-1.0.md)).

## Measuring Success
An early peek at post-launch metrics can be viewed in the [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/release-plan-find-a-representative-2.0.md).

Monthly performance metrics are documented in [Sharepoint](https://dvagov.sharepoint.com/:x:/s/vaabdvro/Ecl2SmYyCAZGk2RfrJWNoBsBN-TO5da5L6dOhKPZV0j_Uw?e=7F4aIo).

We are actively outlining our [ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) and hope to visualize these in a Domo dashboard at a future time.

## Supporting Documentation
1. [Decision and Change Log: Representative Status Widget](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/decision-change-log-representative-status-widget.md)
2. [Representative Status Widget Playbook/Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/representative-status-widget/launch-materials/product-playbook-incident-response-plan.md)
3. [Contact Center Guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management/product-documentation/representative-status-widget/contact-center)
4. [Service Map](service-map.md)

## Future Plans and Ideas
When the Appoint a Representative product launches, the Representative Status Widget will be included in the user flow to help users understand if they have existing representation, and that any requests for new representation will replace their current appointed representative.

We are also partnering with the Profile and MyVA teams to include a version of the representative status information that better matches existing design patterns.

Longer term ideas for the Representative Status Widget are stored in our [ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.

#### Communications

- **Team Name**: Accredited Representation Management
- **GitHub Label**: accredited-representation-management-team
- **Slack channel**: #benefits-representation-management

#### Team Members
 
 - **DEPO Lead**: Jennifer Bertsch
 - **PM**: Lindsay Li-Smith
 - **Engineering**: Holden Hinkle
 - **Research/Design**: Janelle Finnerty

--- 
## Archive

### Key Performance Indicators (KPIs) - Initial Brainstorm 
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
