



# Digital Debt Dispute
---

## Overview
Establish an online process for Veterans to dispute various types of VA debts that they owe. 

## Problem Statement

If a Veteran has a VA debt that they would like to dispute there is currently no formalized process for them to follow. Disputes can currently be submitted in a variety of formats (verbal, written, etc.) and the information required is not clearly defined.  This experience can be confusing for Veterans and inefficient as additional information may need to be collected from the Veteran for the VA to process the dispute effectively. 
 
## Desired User Outcomes

- Ability to dispute either the existence or amount of a VA Debt
- Easy access to user-friendly process with clear instructions and minimal and simple input required from user.
- Clear understanding of timelines and next steps in the dispute process
- Ability to submit a written statement to present their individual situation and reasoning for disputing the debt.
- Receives an email confirmation of their debt dispute submission.

## Undesired User Outcomes
- Confusion across the experience that leads to frustration and stress.
- An experience that is difficult to use or discourages Veterans from engaging with the process.
- Long processing times or lack of clarity on next steps that cause anxiety or worsening financial situation.

## Desired Business Outcomes

- Simplify and streamlined process for receiving debt disputes from Veterans. 
- Achieve faster resolution and reducing processing times
- Decreased disputes being processed through debt management center and HRC. 
- Improved customer satisfaction and Veteran experience
- Standardization of debt dispute process

## Undesired Business Outcomes
- Prolonging the debt dispute process.
- Overwhelming the review system by not clearly describing the dispute process to users
- Overburden dispute process with debt dispute requests that have not been processed yet. 

---
## Measuring Success


### Key Performance Indicators (KPIs)

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |  Total number of digital debt disputes                  |                    |        |
| KPI      |  Customer Satisfaction (CSAT)           |                    |     Medallia Survey Feedback Results               |        |
| KPI      |             |   Total number of submission confirmations sent            |                    |        |
| KPI      |             |                    |                    |     Error Rate: *Total number of errors/failures*

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

Current disputes being processed by DMC; as of June 1, 2025.
|Type|Count| 
|--|--|
|C&P Dispute  | 7071 |
|EDU Dispute  |394  |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Enhance User Experience in the Online Debt Dispute Process
  - Key result: Achieve an average user satisfaction score (CSAT) of 60% in the first quarter post launch
  - Key result: Resolve 90% technical issues related to experience within 48 hours 
  - Key result: Achieve a 95% success rate for users completing the debt dispute submission process without technical issues or errors.

---

## Assumptions
- Users have various levels of technical proficiency.
- Users expect quick and transparent dispute resolutions.
- Users may wish to dispute debt across various devices
- All disputes will require VA representatives to review information provided. Due to the complexity of debt and individual situations additional information may be required which would lengthen the processing time and require multiple touchpoints with the Veteran.

## Solution Approach

- Build an online experience where Veterans are able to digitally submit a request to dispute a VA debt. To align the Veteran experience we are initially designing the experience with both benefit overpayment debts and medical copay debts in mind. Initally, we will launch the dispute process for a benefit overpayment debt which is typically a similar implementation with less API complexity and easier to test. Once that experience has been launched into production we will look to incorporate a dispute process for medical copayment debts. 
- The experience will enable the Veteran to select a debt that they would like to dispute.  They will be asked if they are disputing the existence of the entire debt or simply the amount of the debt.  They will then be asked to provide a written statement to provide additional clarification and information to support their dispute request. 
- After submission the Veteran will receive a submission confirmation email to confirm their request has been received
- We will incorporate logic to monitor for submission errors and failures. Should the submission fail the Veteran will be notified after retry attempts have been made. 
- At the moment, we will not be offering Veterans the ability to upload supporting documentation as that functionality is not something we have availabe across the debt portal at the moment.  This feature will be integrated into future release work as Veterans may need to provide additional documentation to support their dispute. 


### Initiatives
- **MVP Release -  Digital Debt Dispute for Benefit Overpayment Debt (VBA)** -Establish an online process for Veterans to dispute VBA Benefit Overpayment debts.
- **1.0 Release - Digital Debt Dispute for Medical Copay (VHA)** -Establish an online process for Veterans to dispute medical copay debts.
- **2.0 Release - TBD! Supporting Documentation)** - Provide Veterans with a way to upload supporting documentation to support their digital debt dispute. 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
	- Experience will be highlighted where appropriate across the debt portal https://www.va.gov/manage-va-debt/
	- We send an email notifying Veterans of new debt and will eventually be updating the language to highlight the options available to them across the debt portal
- *What marketing, outreach, or communications are necessary for this product to be successful?*
	- As of now, no specific communication plans have been established by either Debt Management Center or VHA.
- [Link to Release Plan for Digital Debt Dispute](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/digital-dispute/release-plan.md)

## Launch Dates
- *Target Launch Date*
  - Late November/ Early December 2024
- *Actual Launch Date* 
  - TBD
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - Early February 2025

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before
Currently Veterans who would like to dispute a debt online are presented with the following information:
![image](https://github.com/user-attachments/assets/65c238b5-82dc-49d6-9f8a-2b0be0342674)

CURRENT OPTIONS TO DISPUTE A BENEFIT OVERPAYMENT DEBT:
![image](https://github.com/user-attachments/assets/6ab69b6e-6625-452e-9c10-8333115bda11)

CURRENT OPTIONS TO DISPUTE A HEALTH CARE COPAY:
https://www.va.gov/health-care/pay-copay-bill/dispute-charges/


### After

---

#### Communications

<details>

- Team Name: Debt Resolution
- GitHub Label: vsa-debt
- Slack channel: #debt-resolution
- Product POCs: Denise Coveyduc, Tom Davis
- Stakeholders: Robert Vitt; Debt Management Center (DMC)

</details>

#### Team Members

<details>
 
 - DEPO Lead: Denise Coveyduc  
 - PM: Tom Davis
 - Engineering:
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
- Debt Management Center (DMC)
- Veterans Health Administration (VHA) 
- Health Resource Center (HRC)
 
</details>

