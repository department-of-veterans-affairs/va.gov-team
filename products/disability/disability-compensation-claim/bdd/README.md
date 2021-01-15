# Benefits Delivery at Discharge

## Communications
- GitHub Label: [bdd](https://github.com/department-of-veterans-affairs/va.gov-team/labels/bdd)
- Slack channel: n/a ([#vsa-benefits-memorials](https://dsva.slack.com/channels/vsa-benefits-memorials))
- Product POCs: Andrea Schneider and Luke Majewski
- va.gov link: https://www.va.gov/disability/how-to-file-claim/
- Stakeholders: Barry Cooper (Barrett.Cooper@va.gov), Paul Shute (Paul.Shute@va.gov), Nancy Hogan (Nancy.Hogan@va.gov)

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
See research - we have a couple rounds you can dig into here:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd/BDD%20Research

## Requirements
#### In Scope 
Research results will likely update this list, but initial main findings:

-   Ensure that users having filed a BDD claim get enough updates, that they know their claim is in progress, and that nothing is holding it back. 
-   This will ensure that users know that their claim progress is normal, that there is no action needed on their part, and prevent users from contacting VA with questions or complaints. 
-   Add Benefits Delivery at Discharge to the navigation / UI.
-   Many users have never heard about the BDD program. Consider how to make it more known.  
-   Use only Benefits Delivery at Discharge (BDD) as the single term for this program. Remove Pre-discharge Claim. 
-   Simplify the Pre-discharge claim page. Less text, less overwhelming. Include a video.
-   Change copy on Military history page, New conditions page and the Supporting evidence page to avoid confusion.
-   Change text on the Claim exam page to be more supportive of veteran. Add phone number or area code from the vendor. Add a call back number on page or in voice mail, or add an email address to allow the user to reschedule.
-   Add email confirmation after submission of claim.
-   Build a status tracker or a dashboard to see the claim progress/status/changes. Include progress steps, timeline of process, time estimate for completion, information that the claim is tracked by social security number.

#### Out of Scope
-   Nothing really out of scope other than to explicitly say we are not doing IDES

## Solution Approach
Reuse the existing 526 form and flow with only changes related to seperation dates and separation location.  EVSS handles the back-end submission with correct EP codes, etc.

## Value Propositions
Service members being able to apply for their first VA benefits on VA.gov versus eBenefits will improve their overall experience and likelyhood of filing for these benefits.

## OKRs and KPIs
## KPIs
- Number of BDD submissions (input KPI)
- Time to BDD decision (input KPI)
- % of BDD claims that are closed as BDD (vs. converted to a regular claim) (input KPI)
- Number of physical exams completed "in time" (input KPI)
  - Faster scheduling
- Convert from BDD to "All Claims"
- % of "rejected / diverged" BDD claims (input KPI)

- Time to complete BDD form
  - Does anyone get stuck on a screen for some time?
  - How many people eventually give up (as a rate/%)
  - Can we compare this to legacy methods (eBenefits)
  - Time on page

- Number of BDD claims successfully "adjudicated" within *n* days  (North Star Metric)

**Lifecycle (Conversion funnel)**
w --> Physical exam && Submit service treatment record --> x --> y --> Submit BDD claim --> BDD claim decision

Notes:
- have to submit to a physical exam. if they don't and still submit a BDD, the claim turns into a regular claim. 
  - potential pain point if they don't do this step
- Service treatment record also needs to be submitted

### Baseline KPIs
- Working with Paul Shute but many of these may not be possible as baseline metrics (not captured by VBMS or anywhere)

## Objectives and Key Results (OKRs)
Many of these are inherited as general OKRs for BAM work on DSVA
1. Provide a simple and error free experience.
2. Simplify the process of filing for a disablity claim while still in active service.
3. Encourage more service members to file for disability claims under the BDD program.

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

- [Link to Phased Roll-out Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/disability-compensation-claim/bdd/release-plan-bdd.md)

Update 8/24: We are still considering some marketting options, etc, but this will be after full deployment of BDD and maybe 4-6 weeks to establish a new baseline on VA.gov.

## Launch Date
- *Target Launch Date*
  - Missed initial date of 24th
  - August 30th for UAT
- *Actual Launch Date*
  - December 22nd we went to 100%
- *What date will you evaluate impact after launch?*
  - One month after January 20th redirect from eBenefits

---
## Results and Recommendations
### Results
- TBD after launch

### Recommendations
- TBD after launch
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
1. Combine 526 form with BDD form.  Primarily this simplified the transfer of a BDD claim to a 526 claim upon expiration of the BDD time frame.  In other words, when a BDD claim is no longer eligable for BDD or BDD-excluded, we needed a way for the SIP data to move to 526 easily. This is possible by merging the two forms.  Our stakeholders agreed during our weekly BDD meeting.
2. During a meeting with EVSS we decided to not hard code separation location but instead use the API so we always have the latest.

## Team
- VA Digital Strategist(s): Andrea Schneider (retired to SSA)
- Product Manager: Luke Majewski 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Anna Carey, Robin Garrison, Nick Sprinkle
   
## Screenshots

### Before
Not really applicable since we added some fields for BDD.  After screen shots 
### After

