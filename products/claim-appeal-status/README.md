# Claim and Appeal Status Tool

## Communications
- GitHub Label: [???](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a (#vsa-benefits-memorials)
- Product POCs: Andrea Schneider and Luke Majewski
- va.gov link: https://www.va.gov/claim-or-appeal-status/
- Stakeholders: Lots and lots of people... but Paul Shute is likely our main stakeholder/champion

## The Problem
The original MVP for Claims Status was just that; an MVP. It has been many years since DSVA has taken a look at improving the status tool and we have learned a lot in the three years since it was deployed. Since claims status is one of the key applications for the VA.gov website, it is time to take a fresh look and see what is truly possible when it comes to claims status. Our current integrations may expose only a partial amount of the data that is truly available.

The Claim and Appeal Status tool is available to view more than just disability claims. It allows veterans to see the status of many different benefit applications and appeals. The following is pulled from the current website on VA.gov.

You can use this tool to check the status of a VA claim or appeal for compensation. Track your:
- Disability compensation (including claims based on special needs like an automobile or clothing allowance)
- Veterans or Survivors Pension benefits
- Special monthly compensation (such as Aid and Attendance)
- Dependency and Indemnity Compensation (DIC)
- Burial allowance to help pay for a Veteran’s burial and funeral expenses

You can also use this tool to check the status of a claim or appeal for other benefits like these:
- VA health care
- GI Bill or other education benefits
- Vocational rehabilitation and employment
- A home loan Certificate of Eligibility (COE)
- A Specially Adapted Housing (SAH) or Special Housing Adaptation (SHA) grant
- Life insurance
- A pre-need determination of eligibility to be buried in a VA national cemetery

### History
Originally this applciation was on eBenefits. The VA.gov version addressed the primary deficiencies where status could move back and forth and never offer the veteran a view into the "development" stage for a claims adjudicator. 

### User Goals
Provide a rich "status" experience that does not leave the veteran guessing as to either when or what is next in their appeal.  Also, take advantage of any additional details available in the VBMS or Corp DB.

### Business Goals
  - Reduce the number of calls to the call center

## Assumptions
We have a number of initial hypotheses and assumptions about the direction the tool should take in this next iteration. This product outline is meant to capture our perspective from a "greenfield" or "blue sky" starting point. Our most basic assumptions around the direction of this product can be captured simply by:

- The underlying data stores (VBMS and CorpDB) likely provide significatly more data than our first-layer API partners (EVSS, BGS)
- In order to get what we need, we will have to work with a team that is not in sustainment
- Veterans are used to using tracker and status tools with significantly more information than the current tool
- The main issues for veterans will be detailed status and some sort of timeframe for their claim/appeal adjudication

## Questions
Please see [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/April-2020-dicovery-concept-usability/Research-plan.md)

## Solution Approach
In work but essentially we are taking a "greenfield" approach to see what is possible.

## Value Propositions
The Claim Status Tool was launched approximately 3 years ago and only minor changes have been done since. The claim status tool is a priority to improve, as it is used frequently by millions of veterans (it is not uncommon for veterans to check their claim status several times a week). We see this as an opportunity to create a great user experience for veterans using and depending on this tool. Very little research has been done on the claim status tool. What has been done is shared here: [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status)


## KPIs
  - Call Center events

### Baseline KPIs
- TBD

## OKRs
 - Reduce the number of call center calls by 75%
  - Increase the number of status message granularity by 75%

---

## Results and Recommendations
### Results
TBD after launch
### Recommendations
TBD after launch

---

# Implementation Info

## Status

## Technical Decisions

## Product Decisions

## Team
- VA Digital Strategist(s): Andrea Schneider and Luke Majewski
- Product Manager: Luke Majewski 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Anna Carey, Sarah-Jaine Szekeresh, Robin Garrison, Nick Sprinkle
   
## Screenshots


### Before

### After
