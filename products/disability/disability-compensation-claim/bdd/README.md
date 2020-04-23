# Benefits Delivery at Discharge

## Communications
- GitHub Label: [???](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a (#vsa-benefits-memorials)
- Product POCs: Andrea Schneider and Luke Majewski
- va.gov link: https://www.va.gov/claim-or-appeal-status/
- Stakeholders: Lots and lots of people... but Paul Shute is likely our main stakeholder/champion

## The Problem
Service members who are separating and plan to file for disability can file their claim
before separation. This is done through the Veterans Affairs (VA) Benefits Delivery at
Discharge (BDD) program. This program allows Service members to apply for VA
disability compensation benefits prior to separation. Claims must be filed between
180 to 90 days prior to separation.

### Program Requirements
To be eligible for BDD, Service members must:
- Know their separation date
- File their claim between 180 and 90 days prior to separation
- Provide a copy of their service treatment record
- Be available for 45 days from the date the claim is submitted to attend VA exams
The following issues and conditions are excluded from BDD:
- Service members who do not meet the requirements above,
- Claims requiring case management, such as Service members who:
-- Are seriously ill or injured
-- Lost a body part
-- Are terminally ill
- Claims requiring a VA exam in a foreign country, except those that can be
processed through Landstuhl, Germany or Camp Humphreys, Korea,
- Claims for Service members awaiting discharge while hospitalized in a VA or
military treatment facility,
- Claims for pregnant service women, or
- Claims that require a character of discharge determination.

### History
The current method for obtaining BDD benefits is either through a paper 526 form or through an eBenefits process. This is a new capability but uses 95% of existing technology on the front end and back end.  Most of the work will be design and research in case there are some issues with how we ask about their service.

### User Goals
Apply on VA.gov and enjoy the smoother process of using disabilty claims flow versus eBenefits.

### Business Goals
1. Increase the number of service members that apply for their BDD benefit.
2. Reduce the number of paper forms.
3. Turn off the capability on eBenefits.

## Assumptions
1. New flow for the front-end but it is highly based on the 526 form.
2. Most of the complex changes like STR are downstream from us and therefore have significantly.
3. Will rely on Original Claims.

## Questions
See research (Luke needs to link)

## Requirements
#### In Scope 
See research results.

#### Out of Scope
See research results (Luke needs to link)

## Solution Approach
Reuse the existing 526 form and flow with only changes related to seperation dates.

## Value Propositions
Service members being able to apply for their first VA benefits on VA.gov versus eBenefits will improve their overall experience and likelyhood of filing for these benefits.

## KPIs
1. We will see an increase in traffic to our 526 forms of 10% (based on traffic in eBenefits)
2. After 6 months, we will see another 5% increase as the program is advertised to more service members.

---

# Implementation Info

## Status
1. MVP design completed.
2. Front-end implementation almost complete.
3. No major-back end changes identified except maybe submission of date.

## Technical Decisions/Discovery
[STR 2.1 Integration Architecture SHA Addendum.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/4476115/STR.2.1.Integration.Architecture.SHA.Addendum.pdf)

- Goal: reduce incidence of duplicate exams

- View from 50k feet:
	- VA tells DoD a claim was filed and submits Notification of Interest (NOI) to request pre-discharge service treatment records (STRs)
	- DOD gives pre-discharge service treatment records (STRs) to the VA
	- Exam Vendor performs Separation Health Assessment (SHA) exams and gives those exam results to VA, VA passes results to the DoD

- Agency and system level interaction:
	- Service member 1. updates Release from Active Duty (RAD) date, and 2. files a BDD claim or intent-to-file 180-90 days prior to RAD date
		- => Claim created by user in VA's VBMS Claim Services or VBMS UI
		- => pre-discharge claims are enumerated in the form "BSD255 - Request STRs for Pre-Discharge Claims Supporting Attributes List (SAL)", list EP and claim label
	- Exam Vendor performs SHA exam and returns results to VA
		- => Exam vendor submits results to VA's Data Access Service (DAS)
	- Claim is passed around within VA
		- => VBMS sends NOI with Pre-Discharge Claim Information Type to DAS.
		- => If RAD is updated in VBMS, new NOI is submitted with new date. (Can be mult NOIs for single claim.)
	- VA sends request to DoD for pre-separation Service Treatment Records
		- => VA Data Access Service (DAS) sends NOI to DoD's Health Artifact and Image Management Solution (HAIMS) system
		- => DAS will store the most recent/final NOI Submission Status message (indicates if NOI succeeded/failed to relay to HAIMS)
	- DoD sends VA pre-separation Service Treatment Records if the RAD date listed on the NOI has not passed
		- => After all 5 required STR documents are present, DoD's HAIMS transfers pre-separation Service Treatment Records to VA's DAS
	- If Vet receives care from private doctor, VA sends Disability Benefits Questionnaires (DBQ- exam completed with private doctor for disability claims process) to DoD
		- => If DAS receives DBQ results before the RAD date, it sends results to HAIMS. Otherwise, it doesn't share.
	- After veteran separates, DoD sends final Post discharge records
		- => HAIMS will only send Post discharge STR manifest once all results are available and there is a certification memo.

## Product Decisions

## Team

- VA Digital Strategist(s): Andrea Schneider and Luke Majewski
- Product Manager: Luke Majewski 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers:
   
## Screenshots

### Before

### After

