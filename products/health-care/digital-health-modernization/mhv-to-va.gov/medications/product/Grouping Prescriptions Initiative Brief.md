
# Grouping Prescriptions Initiative Brief

---
## Outcome Summary
The medications list has one object (card) for each medication (medication name + dosage + form). Prescriptions are rolled up to the medication level and not separated into indivudal cards.

**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem

The goal with medications on VA.gov was to create one holistic view for Veterans to be able to manage their medications, both VA and non-VA.  The first iteration focused on prescriptions and what's available today in MHV. As the medications product outline states, the current application (MHV legacy) has historically been narrowly associated with prescriptions and prescription refills. However, the goal is for Veterans to think of medications they take holistically and give them information they can use to discuss with their provider.

Today, the medications list consists of two different types of objects: prescriptions and medications. This causes user confusion and frustration. MHV legacy and the VAHB app only show medications from the past 6 months, but VA.gov is required to show all historical medications. This has added a tremendous amount of expired or discontinued objects to the list, making it very difficult for users to navigate.

## Supporting Veteran Painpoints

Since rolling medications out to Phase 1, we have heard a bunch of positive feedback from veterans, but findability has consistently come up as a source of frustration.  Below are some Medallia comments and details from a findability study to support this initative: 
  * Do not like having all the medicines that have been discontinued listed and all the non-VA medicines listed. - September Veteran feedback
  * Why do I need to see multiple scripts for the same drug ordered for 3 years? It is pointless clutter. - August Veteran feedback
  * I can not go through 584 medications to find the few that I'm actually using. - August Veteran feedback
  * Very confusing. Too much information. - August Veteran feedback
  * Why do you still post a medication that is no longer active? - July Veteran feedback
  *  [Findability study findings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2024-02-findability-study):
     * Half the participants (9 of 18) stated they are looking for their medication names when first logging into their medications platform.
     * Most participants (14 of 18) placed the non-VA active medication after the active medications, followed by expired and discontinued medications.
     * All participants (18 of 18) stated they want medications they no longer take or need removed from their medication list.
     * Most participants (14 of 18) reported relying on the name when looking for a medication in their medication platform.

## Desired User Outcomes
- Veterans find the medications list to be easy to navigate and can quickly find what they are looking for. 
- Veterans know how to find a complete list of medications they have on file at VA, as well as any relevant details about those medications. This includes all historical information about a medication including past prescription history.
- Improve transparency / reduce confusion around medications a Veteran is taking (VA and non-VA)
- Veterans are well-informed about the status of their medications (when something needs to be refilled or renewed, shipment tracking updates, etc.)

## Undesired User Outcomes
- Medication section doesn’t provide the user with the same functionality that they have today, causing frustration and dissatisfaction.
- Veterans are confused about medications they are taking.
- Veterans are confused by VA and non-VA medications that are the same medication. 

## Desired Business Outcomes
- Veterans have access to all historical information about a medication including past prescription history.
- Enabling users to understand and self-service medication needs leads to more timely care, reduces burden on clinical staff, and increases patient safety. 
- Veterans have one place to find all their medication information and self serve their medication needs.
- Easily accessible and identifiable medications list will reduce congressional and patient safety questions.

## Undesired Business Outcomes
- Users find the medications application on VA.gov complex, have difficulty accomplishing their tasks and continue to default to MHV legacy to self-serve their needs.
- Misalignment in data and functionality on VA Health and Benefits Application and MHV on va.gov.
- 
---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*
- Positive CSAT increases over time | Baseline 65% | Goal 75% after 3 months | [Monthly reports](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/analytics)
- Negative CSAT decreases over time | Baseline 26% | Goal 20% after 3 months | [Monthly reports](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/analytics)
- Monitor CSAT qualitative comments for findability and frustrations with the list view (as outlined in Veteran painpoints above)
- Conduct additional findability research after additional improvements have been made
- Total refills made on VA.gov stays consistent or increases | Baseline 3.4% | Goal >3.4% | [Datadog](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1726461222529&to_ts=1729025404109&live=true)
- Total % of veteran users stays consistent or increases | Baseline 3.5% | Goal >3.5% | [Datadog](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1726461222529&to_ts=1729025404109&live=true)

---

## Discovery

### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - Veterans are used to what exists today and changing that logic/behavior will be difficult for them to adopt. 
  - Veterans don't understand (or get why) that the medications product on VA.gov includes all historical medicaitons including those over 6 months old. 
- **Usability Risks** (can people figure out how to use it):
   - Veterans will find it harder to navigate than MHV today.
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
   - We have to update the vets-api and possibly MHV layer.
   - Pagination on VA.gov today gets tricky and we will likely have to create new endpoints in the API.
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
   - VA.gov, MHV legacy and VAHB all display different types of objects and date ranges.  This problem exists today, but the objects will be even more different with these changes.
   - May need training and additional education for helpcenters and MHVC.
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?
- The medication list should only have one card per medication name (name + dose + form), unless there is a VA and non-VA med with the same medication name. This will group similar medications that are separate prescriptions together under one object. 
- A veteran can find details about each prescription in the details page.
- This list view should display the most recent status, which should help veterans find their active medications more quickly. 
- This should be built in a way that other clients (ie. VAHB) can use the same logic. 
- Initally this is not in scope for VAHB since the app focuses on VA prescriptions currently and only shows Rx from the last 6 months.  In the future as we think about what should be included in VAHB medications experience the same logic should be able to be applied. 

#### V1
- Group medications that have the same RX# + alpha character into one object (card).  These are prescriptions and their associated renewals. 
   - Example:
    - Medication = Ibprofen 200MG tab
    - Prescription 1234567, Prescription 1234567A, Prescription 1234567B would all be grouped together under this medication vs. having three separate cards.  The most recent Rx would be the status shown on the card.  All previous Rx details would be listed under the details page.  
#### V2
- Explore grouping medications by NDC and/or Medication name (name + dose + form).  
- Likely would not want to group VA meds + non-VA meds together as one object even if NDC or medication name is the same.

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94684)
- 10/16 - PO Sync
- 10/23 - Architecture Review
- 10/24 - Design Intent
- 11/15 - Midpoint
- 12/10 - Staging
- Release V1 by end of PI 17 - Jan 21.

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- The medications product is working on a variety of findability improvements in PI17 based on the current user problems we've identified.  Rather than doing research for each indivdual solution, the team is planning to conduct research in combination with other changes in PI18.

#### Initiative Launch Dates
- *Target Launch Date*
  - V1 - Jan 2025
  - Possible V2 coming later
- *Actual Launch Date* 
  - tbd

---
   
## Example of 3 different prescriptions as separate objects on the medications list
![image](https://github.com/user-attachments/assets/432d12f0-b523-43ec-a2bf-5f9a870aabc9)

### Additional resources 
- [Medications Data Modeling & Lo-fi Re-Structure Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708968755045/4bdbe77c90fbcf529afa0cf7c05342f6357c7997?sender=uffe0b1e17d72421900bf8566) from IA
- [Inital Slack Discussion](https://dsva.slack.com/archives/C059Q28DV99/p1725994741982699)
---

#### Communications
- Team Name: Medications on VA.gov
- GitHub Label(s): MHV-Medications
- Slack channel: #mhv-medications-devs, #mhv-medications-rx
- Product POCs: Kaitlin Fink (acting), Kay Lawyer (parental leave)

#### Stakeholders
- OCC: Eric Spahn (RX)

---
