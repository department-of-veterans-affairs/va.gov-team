
# Grouping Prescriptions Initiative Brief

---
## Outcome Summary
The medications list has one object (card) for each medication (medication name + doage + form). Prescriptions are rolled up to the medication level and not separated into indivudal cards.

**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem
The goal with medications on VA.gov was to create one holistic view for Veterans to be able to manage their medications, both VA and non-VA.  The first iteration, focused on prescriptions and what's available today in MHV. As the medications product outline states, the current application (MHV legacy) is associated with prescriptions and prescription refills, but the goal is for Veterans to think of medications they take holistically and give them information they can use to discuss with their provider. The medications list today includes two different types of objects: prescriptions and medications, wich causes user confusion and frustration. MHV legacy and VAHB app only show medications from the past 6 months, but there was a requirement on VA.gov to show all historical medications, this has added a tremendous amount of expired or discontinued objects to the list, making it very difficult for users to navigate.

## Supporting Veteran Feedback
Since rolling medications out to Phase 1, we have heard a bunch of positive feedback from veterans but we have seen a consistent theme of findability come up as a source of frustration.  Below are some Medallia comments and details from a findability study to support this initative: 
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
- Veterans find the medications list is easy to navigate and find what they are looking for. 
- Veterans know how to find a complete list of medications they have on file at VA, as well as any relevant details about those medications. This includes all historical information about a medication including past prescription history.
- Improve transparency / reduce confusion around medications a Veteran is taking (VA and non-VA)
- Veterans are well-informed about the status of their medications (when something needs to be refilled or renewed, shipment tracking updates, etc.)

## Undesired User Outcomes
- Medication section doesn’t provide the user with the same functionality that they have today- causing frustration and dissatisfaction.
- Veterans are confused about medications they are taking.
- Veterans are confused by VA and non-VA medications that are the same medication. 
-
## Desired Business Outcomes
- Veterans have access to all historical information about a medication including past prescription history.
- Misalignment in data and functionality on VA Health and Benefits Application and MHV on va.gov.
- Enabling users to understand and self-service medication needs leads to more timely care, reduces burden on clinical staff, and increases patient safety. 
- Have one place for veterans to find all their medication information and self serve their medication needs.
- Easily accessible and identifiable medications list will alleviate congressional and patient safety questions.

## Undesired Business Outcomes
- Users find the medications on VA.gov complex and difficult to accomplish their tasks and continue to default to MHV legacy to self-serve their needs.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery

### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?

#### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94684)

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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
---

#### Communications
- Team Name: Medications on VA.gov
- GitHub Label(s): MHV-Medications
- Slack channel: #mhv-medications-devs, #mhv-medications-rx
- Product POCs: Kaitlin Fink (acting), Kay Lawyer (parental leave)

#### Stakeholders
- OCC: Eric Spahn (RX)

---
