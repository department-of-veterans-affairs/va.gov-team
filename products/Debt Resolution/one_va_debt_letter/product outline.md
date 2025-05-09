## One VA Debt Letter



## Overview
Establish a single click mechanism allowing Veterans to view/download a letter that summarizes various types of VA debts from within the portal.

## High Level User Story/ies
As a Veteran, I need a way to generate a single PDF that shows both my benefit overpayment debts as well as my medical copays so I have one document which summarizes my VA financial obligations.

## Problem Statement
Veterans who have overpayment debts and/or medical copayments currently receive multiple forms of communication about these financial obligations from VA. These communications are often in different formats and do not have a standard format or structure. As part of the [Veterans Benefit Transition​ Act of 2018 (year 7)​](https://www.congress.gov/115/plaws/publ407/PLAW-115publ407.pdf) we are mandated to provide Veterans with a standardized format that unifies their debt information on a single document. 

## User Outcomes
**Desired**
- Veterans have access to view and download a single document that consolidates information about two types of debt in a "one letter" format.
- Ensure document is easy to read, understand and available for Veterans to download and save for their records
- Layout clearly differentiates between the various types of debt
- Can easily generate a PDF or document that Veterans can be printed or saved for their records
- Data should accurately reflect debt information to maintain trust and avoid confusion

**Undesired**
- A format not consistent with what they are used to receiving from VA. 
- Incomplete or incorrect debt information.

## Business Outcomes
**Desired**
- Simplify and streamlined process for viewing debts and copays on a singular letter format.
- Decreased confusion of the current debt level.
- Improved customer satisfaction and Veteran experience
- Standardization of the complete debt overview to align with Stakeholder provided template.

**Undesired**
 - Presenting Veterans with an incomplete view of debt information
 - Providing a format inconsistent with the current copay statements sent by VHA or the demand letters sent by DMC

## Requirements
- As a general guideline, if the information is on the letter that is mailed to a Veteran (copay statement or demand letter) then it should be included on the One VA Debt Letter. Included elements to include: Veteran Information including Name, Address, File Number;  Outstanding/Current Account Balance;  Payment;  Late fees;   Date debt was generated.
- Document must be in a format that veteran can download print or save a copy for their records
- Format of letter should emulate medical co-pay statements and draft provided by stakeholders as accurate as closely as possible. Presenting "card" information in the format generally provided by HMTL will not align with business requirements
- Data needs to be accurate and consistent with information seen on the va.gov debt portal
- Only outstanding payment information needs to be reflected; any debts or copays that have been paid will not be added to this letter
- Provide users with an easy “Download” or “Generate” button to generate this letter
- Letter needs to be formatted properly to ensure readability and clearly display information 2 users
- Analytics need to be established to track the number of letters that have been generated
- Provide detailed error messaging to help diagnose and fix issues if and when they occur
- Ensure the generated letter is mobile friendly
- Usability testing is required to ensure accurate data representation
- Previous payment information can be included on but is not required for MVP
- 
  
**VA One Debt Letter MVP Draft can be found on Super Epic**


## Scope
**In Scope**
- Integrating two debts (medical copays and benefit overpayments) into a single PDF document
- Ability to view and download document from the debt summary page on the debt portal. 
- Integration of "payments made" in the transaction information on the letter
- leverage existing data provided (for copays by VBS API; for overpayments by DMC API)

**Out of Scope**
- Additional debt types beyond the two initially planned (meaning only copays and benefit overpayments will be included in MVP)
- Copay Data from Lighthouse API integration will not be included in the MVP of this Letter

|REFERENCE LINKS|
|----------------------------------------------|
|[GitHub Super Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/84175)|
|QA Test Plan  |
|[Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md) |



# Measuring Success
### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |Customer Satisfaction (CSAT) | Total number of letters viewed| Medallia Survey Feedback Results |Error Rate:_Total number of letter generation errors/failures_      |
| KPI      |            | Total number of letters downloaded|                    |        |


#### Baseline KPI Values
* This letter does not exist today; therefore there are no baseline metrics
* Could compare to number of medical copay statements and demand letters being sent by VHA and DMC

### Objectives and Key results (OKRs)
- Objective: Create a unified, user-friendly letter format that clearly communicates both types of debt on one form to improve Veteran understanding and ability to resolve efficiently. 
  - Key result: Achieve at lease 75% positive feedback from users on clarity and ease of understanding 
  - Key result: Achieve a letter generation rate of 65% of users visiting the debt summary page

 
# Approach 


## Assumptions
-   Users have various levels of technical proficiency.
-   Users expect a simple and complete view of the debts.
-   Users may wish to print out the letter.

## Solution Approach
-   Build an online experience where Veterans are able to digitally view a list of theirt debts.
-   After viewing the debt information the Veteran will have the ability to locally save or print the letter.
-   We will incorporate logic to track the number of times the request is made and monitor for letter creation errors and failures.

## Launch Strategy
- Initiatives:
  -    **1.0 Release - One VA Debt Letter**  -Establish an online process for Veterans to view and print their debts.
  -   **2.0 Release - One VA Debt Letter format update**  - If the initial release is in an HTML format we may update that technology to utilize a PDF format pending formatting challenges.

- _How are Veterans and others using this product going to know it exists?_
	Experience will be highlighted where appropriate across the debt portal  [https://www.va.gov/manage-va-debt/](https://www.va.gov/manage-va-debt/)
-   _What marketing, outreach, or communications are necessary for this product to be successful?_
  As of now, no specific communication plans have been established by either Debt Management Center or VHA.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - March 25, 2025
- *Actual Launch Date* 
  - April 30, 2025
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

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

<details>

- Team Name: Financial Management
- GitHub Label: #vsa-debt
- Slack channel: #financial-management
- Product POCs: Denise Coveyduc - VA OIT Office of CTO
- Stakeholders: Robert Vitt - Debt Management Center (DMC)

</details>

#### Team Members

<details>
 
 - VA PO: Denise Coveyduc 
 - PM: Tom Davis
 - Delivery Manager: Heather Rienks
 - Engineering: Andrew Rodiek, Brandyn Sullins, Aaron Ponce, Derek Dyer, Josh Mills
 - UX Research/Design: Megan Gayle, Joseph Lee, Charlotte Cesana, Marcela Rojas
 
</details>


