

# Product Outline: Streamlined Waiver Process

## Overview
As part of the President's initiative to support Veterans experiencing financial hardship we are simplifying the process for claiming medical debt forgiveness by streamlining the request process and offering instant determination for Veterans who meet the criteria according to the Veterans Health Administration (VHA).


## Problem Statement
During the State of the Union Address in March 2022, President Biden announced that Veterans who are experiencing financial hardship will be able to leverage a simplified online process for submitting waiver requests as they relate to any medical copayments that they may have.  Today, all Veterans are asked to complete the entire VA Form 5655 Financial Status Report which asks extensive details about their financial status, employment, assets etc. For Veterans who are struggling financially many of the questions asked do not apply and asking them is insensitive the to Veteran’s current circumstances.


**EXCERPT:**  
> **Reducing Financial Hardship**
> 
> The President’s American Rescue Plan provided $17 billion to help veterans, ensuring the Department of Veterans Affairs (VA) had funding to provide health care services for veterans, including funding for homelessness programs, and to implement a rapid retraining assistance program to help veterans impacted by the pandemic. The American Rescue Plan also eliminated all out-of-pocket medical cost for veterans and provided much needed financial relief to veterans experiencing economic hardship during the COVID-19 pandemic.
>
> Veterans in financial hardship who get treatment through VA are entitled to get their medical debt forgiven. But currently, they can only apply for that medical debt relief through a complex, paper form with complicated eligibility requirements. Veterans may be deterred from applying for much-needed relief because the application process is too confusing and time-consuming. To address this barrier, today the President is announcing that VA is:
> 
> **Simplifying the process for claiming medical debt forgiveness.** VA will streamline the request process and set a simple income threshold for receiving medical debt relief. The request process will include an online option for veterans and reduce the effort required by veterans to access relief. These changes will go into effect in the next 90 to 120 days. This change comes on top of the approximately $1 billion in medical debt the VA has already forgiven for veterans under the American Rescue Plan, which eliminated all out-of-pocket medical cost for veterans and provided much needed financial relief to veterans experiencing economic hardship during the COVID-19 pandemic. It also comes on top of a  [final rule](https://www.va.gov/opa/pressrel/pressrelease.cfm?id=5758)  VA issued in February 2022, under which it will virtually cease reporting unfavorable debt, including medical debt, to consumer reporting agencies.

**SOURCE DOCUMENTATION:**  [WhiteHouse Statement: Reducing Financial Hardship for Veterans](https://www.whitehouse.gov/briefing-room/statements-releases/2022/03/01/fact-sheet-supporting-veterans-experiencing-financial-hardship-and-addressing-the-harmful-effects-of-military-environmental-exposures/)
## VHA Requirements
Requirements established by Veterans Health Administration (VHA)  project team 
- **Requirement:** As a Veteran Services Technician, I need the VODA portal to send the automated income review & business logic calculation decision (approval/needs further review) in the file transfer package that is sent to the Huron Workflow Tool, so that the Veteran's account can be auto-adjudicated by the Huron Workflow Tool or worked manually by a Veteran Services technician.
- **Requirement:**  As a Veteran Services Technician, I need VODA to provide an indicator to Huron when a Veteran submits a debt relief request through the VODA portal to indicate if the debt is at "VistA", "CERNER", or "VistA & Cerner" systems, so that I can ensure I review all of a Veteran's debt
- **Requirement:**  As a Veteran Services Technician, I need VODA to provide Huron a unique ID (SSN) to the Veteran when CERNER debt is present,  so that I can ensure quickly search for the Veteran in CERNER.

 
## Desired User Outcomes
 - Streamlined/shortened process to collect necessary information for waiver submission
 - Clear and concise messaging describing why financial information being asked for is needed. 
 - Veterans who meet the criteria based on their responses will receive an immediate determination on their request.
 - Veterans who do not meet the criteria will have a seamless process as they proceed through the experience to submit additional information required  as part of the VA Form 5655 - Financial Status Report (FSR) for the Veterans Health Administration to process their request fully. 

## Undesired User Outcomes
- All Veterans are required to enter all information needed for the Financial Status Report and the process is not streamlined or simplified in any way for Veterans who meet criteria for streamlined process
- Veterans are left confused as to what is being asked and why. 


## Desired Business Outcomes
- Reduce the number of waivers that require manual review
- Reduce number of call center calls by providing clear information through the online experience. 
- Decreased processing times for copay waiver submissions

## Undesired Business Outcomes
- Increase number of calls to contact centers






---
## Measuring Success


### Key Performance Indicators (KPIs)
To understand if MVP functionality is meeting desired outcomes described above we will track the following metrics. 

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |  Total number of Streamlined Waiver Waiver Submissions                  |                    |        |
| KPI      |             | Comparing total number of copay streamlined waiver submissions vs waiver submissions that required a complete FSR to be completed                   |                    |        |
| KPI      | Form completion rates             |                    |                    |        |
| KPI      |             |                    |                  Average experience rating  |        |
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |



**Link to Domo or Google Analytics Dashboards/Reports:**
- [Form 5655- Financial Status Report Domo Dashboard](https://va-gov.domo.com/page/447193050) 
- Google Analytics Report Links: [to be added when available]

#### Baseline KPI Values
- Average number of FSR submissions per month - TBD
- Form Completion Rate - 16% 

### Objectives and Key results (OKRs)
_Measurable targets that delivers value for Veterans_

- **Objective:** Improve the waiver submission process for medical copays easier for Veterans who are experiencing financial hardship. 
  - *Key result:* Increase form completion rate by 10% in the first month
  - *Key result:* Decrease number of 'full FSR waivers' required by 10% in the first month.
  - *Key result:* Increase average experience rating by 1 in the first 30 days. 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

 - The initial MVP experience will present Veterans with FSR questions in an order that enables the business logic calculation to take place. An "approval" or " needs further review" decision will be populated in field 3 of the form for VHA staff to review. Veterans will be presented with information that informs them that there are questions that they are able to skip based on the answers they have provided. 
 - Future iterations will be directly impacted by Veteran feedback through user research sessions.
 - Future iterations will attempt to increase Veteran's ability to easily and efficiently complete the waiver and submit their information. Increasing clarity as much as possible to ensure clear Veteran understanding and reduce the burden of time to complete the form. 


### Initiatives
- MVP Streamlined Waiver Experience| [Link to Initiative Brief](#)
- Streamlined Waiver 2.0| [Link to Initiative Brief](#)

--- 

## Go-to-market Strategy
***Release Plan:***
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

***Veteran Communications:***
- *How are Veterans and others using this product going to know it exists?*
	- Initial release will be a phased approach and Veterans will discover experience as they proceed through waiver submission process
	- Once experience reaches 100% user base and has been harded, anticipated communication to Veterans from VHA.   
- *What marketing, outreach, or communications are necessary for this product to be successful?*
	- VHA will communicate via letters sent to Veterans
	- DMC will communicate to contact center representatives


## Launch Dates
- Target Launch Date:  August 17, 2023
- Actual Launch Date: TBD


---

## Solution Narrative

### Current Status
- **7/24/2023:** Experience is being coded by front end engineers. Research team is preparing for user research study and copy for confirmation page is being finalized and discussed with VHA stakeholders and sitewide content

### Key Decisions
- **7/11/2023:**  Proceed with MVP initiative for August 17,2023 launch date in order to align with stakeholder requirements to meet Presidential initiative. This initial implementation will enable the determination to be made using the business logic calculation and an approved/needs more review decision to be sent to VHA. User research sessions will proceed with Veterans and alterations will be made based on the feedback that they provide. 
---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Debt Resolution
- GitHub Label: StreamlinedWaiver
- Slack channel: #benefits-debt-resolution
- Product POCs: Denise Coveyduc, Heather Rienks, Tom Davis
- Stakeholders: Jill Anderson (DMC)

</details>

#### Team Members

<details>
 
 - OCTO Lead: Denise Coveyduc
 - PM: Tom Davis
 - DM: Heather Rienks
 - Engineering: Scott James, Andrew Rodiek, Brandyn Sullins, Aaron Ponce, Kevin Suarez
 - Research/Design: Megan Gayle, Joseph Lee, Charlotte Cesana
 
</details>


#### Stakeholders

<details>
 
- Debt Management Center (DMC) 
 - Veterans Health Administration (VHA)
</details>

