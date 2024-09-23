# Product Outline: Appoint a Representative
Team: Accredited Representation Management

🚧 This experience is currently in development, and not yet available on VA.gov.

---

## Overview
Create a user-friendly, accessible tool for Veterans to digitally complete a 21-22 or 21-22a form, with the ultimate goal of appointing an accredited VSO, Attorney or Claims Agent. This experience is intended to mirror the search functionality of the older, external tool [eBenefits]([url](https://www.ebenefits.va.gov/ebenefits/vso-search)).

## Problem Statement
There is not currently an experience on VA.gov for Veterans to appoint a representative. The current experience happens either in person (offline) or through an older system (eBenefits) which does not provide a great user experience: confusing errors, dead ends, and inconsistent user flows.

**How might we enable Veterans to appoint a representative on VA.gov and provide clear instructions and expectations around next steps?**
 
## Desired User Outcomes
1. Veterans can select a VSO, attorney or claims agents on VA.gov for new representation
2. Veterans can fill out (but not submit) a 21-22 or 21-22a form on VA.gov
3. Veterans can download a filled-out 21-22 or 21-22a form (accessible PDF) from VA.gov
4. Veterans will be given guidance on next steps, including obtaining a representative signature and submitting their form outside of VA.gov (in person, via mail, through an online tool like QuickSubmit)

## Desired Business Outcomes 
1. Increase the functionality of VA.gov to support appointing accredited representatives
2. Reduce the time it takes for Veterans to appoint an accredited representative
3. Facilitate and support claim automation initiatives and processes aimed at reducing the amount of time it takes to render decisions and deliver benefits
4. Expedite the deprecation of the legacy eBenefits platform by delivering replacement services

## Assumptions
1. Veterans are interesting in appointing a representative online through VA.gov
2. Veterans would prefer to complete a form online, compared to printing the form out and completing it by hand

## Solution Approach
Our immediate goal for the Appoint a Representative MVP is to mirror the 21-22 / 21-22a digital form fill functionality on eBenefits, but with a more consistent and intuitive experience that lives directly on VA.gov.  

As we work towards this MVP, we will also be preparing for a future goal of digital submission by migrating EVSS endpoints to Lighthouse's Benefits Claims API (specifically the POA services) and working with the Accredited Representative Facing team.  

## Launch Strategy
1. Any VA.gov eBenefits links that set expectations around appointing a representative will be re-routed to Appoint a Representative when that MVP launches
2. The About VA Form 21-22 page will include a link to the Appoint a Representative form-fill tool 
3. The MyVA page will include a reference to any in-progress and completed 21-22/21-22a forms

**Launch Dates**
1. MVP target release: October 2024 (release plan TBD)

## Measuring Success
We are actively outlining our [ARM OKRs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718224425278/b300ea8d63dcaaa0cdad0ebf6b4a65a20fcc9371?sender=ubac5f0487f25bc4431288699) and hope to visualize these in a Domo dashboard at a future time.

## Supporting Documentation
1. [Decision and Change Log: Appoint a Representative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/decision-change-log-appoint-a-representative.md)
2. [Required Form Fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/appoint-a-representative/required-form-fields.md)


## Future Plans and Ideas
We are actively designing for a v2 iteration, which will include the ability to submit a 21-22 form digitally on VA.gov, for a representative to approve (or decline) in the Accredited Representative Portal.  Lighthouse's Benefits Claims API POA services will manage the auto-establishment of POA (including generating the PDF form, attaching esignatures, and uploading to VBMS) and email notifications to Veterans, when their request is accepted or declined.

Longer term ideas for Appoint a Representative are stored in our [ARM Future Ideas](https://dsva.slack.com/docs/T03FECE8V/F06JUJ4CR19) Slack canvas.

## Communications

- **Team Name**: Accredited Representation Management
- **GitHub Label**: accredited-representation-management-team
- **Slack channel**: #benefits-representation-management

## Team Leads
 
 - **DEPO Lead**: Jennifer Bertsch
 - **PM**: Lindsay Li-Smith
 - **Engineering**: Holden Hinkle
 - **Research/Design**: Janelle Finnerty

---
## Archive

### Key Performance Indicators (KPIs) - Initial Brainstorm
1. SEO insights for...
    1. SEO insights for the Appoint a Representative tool landing page _How are users discovering the Appoint a Representative tool?_
        1. Page views
        2. Unique page views
        3. % of unique views 
        4. Bounce rate _What percent of users land on this page and immediately leave VA.gov without any interaction?_
        5. Entrance rate _What percent of users enter the VA.gov site on this page?_
        6. Exit rate _What percent of users first interact with or view other pages on VA.gov, before viewing this page and then leaving VA.gov?_
        7. Top previous pages by % _What pages are users coming from?_
        8. Top next pages by % _What pages are users visiting next?_
6. % of completed forms by representative type (VSO, Attorney, Claims Agent) _What representative types are users most interested in appointing?_
7. % of completed forms with Veteran phone number
8. % of completed forms with Veteran email 
9. % of completed forms with claimant information
    1. % with claimant phone number
    2. % with claimant email address
7. % of completed forms with full medical authorization
8. % of completed forms with address authorization
9. Drop off for each page of the tool process _Are users exiting our flow on any particular pages?_
10. % of users who end up downloading a form after initiating a search _Are users making it through the entire flow?_
    1. Authenticated vs. unauthenticated _Do users understand that signing in can improve the experience?_
    2. Representative status breakout (has representation, pending representation, no representation) _Are veterans searching for new representation?_
11. Average time (minutes) from form start → form download _How long does it take to complete the entire flow?_
    1. Break out by pages _Are users spending more time on any particular pages?_
    2. Would be nice to pair the average metric with a bar chart that shows the minutes from starting a form to downloading a form (to understand the average and median, but also the range)

  
### Baseline KPI Values
1. Number of form downloads per week/month _measuring growth_
    1. Pre-launch: the 21-22 blank form download link
    2. Post-launch: the completed form download link at the end of the Appoint a Representative tool
2. % increase of completed form downloads this week/month vs. last week/month _measuring proportional growth_
   
### Objectives and Key results (OKRs)
1. **Objective**: Veterans start moving away from legacy processes for appointing a representative, in favor of our solution on VA.gov
    1. **Key Result**: Increase in form downloads on VA.gov (Baseline KPIs #1 and #2)
2. **Objective**: Veterans are able to quickly complete a 21-22 / 21-22a form through our Appoint a Representative tool
    1. **Key Result**: Minimize the average time to complete and download a form (KPI #4)
3. **Objective**: Veterans find value in completing a 21-22 / 21-22a form through our Appoint a Representative tool
    1. **Key Result**: There is an increase in completed form downloads (Baseline KPIs #1b and #2)  and a decrease in blank form downloads (Baseline KPI #1a)
