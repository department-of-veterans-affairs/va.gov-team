# CST: Download Decision Letters - Feature Brief   
- GitHub Label: download-decision-letter
- Slack channel: #benefits-team-1
- Product: CST
- GitHub Issue: https://github.com/department-of-veterans-affairs/va.gov-team/issues/42954

## Executive Summary
Multiple research study findings suggest that the ability to download decision letters is a feature many veterans would like included in the Claim Status Tool. Currently, veterans need to wait for their decision letters to arrive via physical mail and, if they lose them, need to request one by reaching out to a call center representative or through other online channels with transaction costs that diminish their experience.

Veterans often need to provide copies of their decision letters to a representative to pursue disagreement pathways related to the decision. In addition, some benefits provided by third-parties require a decision letter as proof of the veterans’ disability status. 

## Problem Statement(s)
As a veteran who is being represented under a  POA agreement, after a claims decision is rendered by an adjudicator, I must wait for my decision letter to arrive through physical mail in order to have tangible evidence of that decision. As a result, I am unable to immediately pursue the appropriate disagreement pathway because my representative requires the decision letter to take action on my behalf. 

Screenshot of current experience: 
![current experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/CST%20compensation%20claim.png)
	
- As a veteran who has lost the physical decision letter mailed to me, I must reach out to the VA, request a new one, and then wait for it to arrive via snail mail. In the meantime, I am unable to provide the letter to my representative or a third party benefit provider who needs it to prove my disability status. 
- As a call center representative, I often receive inquiries from veterans about how they can obtain their decision letters, which takes time away from answering other important inquiries veterans have. 

## Desired Outcomes
- As a veteran, I am able to download my decision letter(s) through the CST, and provide it to a representative or third party benefits provider so that I can more quickly receive benefits I need.
- As a call center representative, I am receiving less calls from veterans related to obtaining a decision letter. 

## Audiences Served
- Veterans who filed benefits claims
- Call-center representatives who answer questions about benefits claims

## Assumptions
- Because there is a unique decision letter file in each veteran’s e-folder, we will be able to create a means to provide that file to veterans when it becomes available. 
- Veterans do not necessarily need their claims decision tied to a specific claim within the CST UI to know how to use their decision letters.
- We’ll be able to sort disability decision letters by the dates in which they were issued. 

## Core Bet
We bet that if veterans have the ability to download their decision letters through the CST, they will choose to do so and, as a result, pursue disagreement pathways faster and be less-inclined to reach out to the Call Center. 

### How we will know if we are right (KPIs)
- number of decision letters downloaded (daily, weekly, monthly)
- Average time between decision and disagreement pathway chosen
- number of Call Center calls related to decision letters (daily, weekly, monthly)

## Discovery Takeaways
- [2021 Research Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/SummaryCSTresearchOct2021/Summary%20CST%20Research%2C%20Oct%202021.pdf)
 - NCC (Call Center) Research: identified decision letter downloads as a high-value feature requested by veterans
 - VSO Research: confirmed decision download letters as a high value feature to veterans
- [Jan 2022 Initial Technical Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/issues/29082#issuecomment-1015560303) 
 - Generic name of "Notification Letter", and not all notification letters in the efolder are "Decision Letters", all of these are named "Notification Letter", but only 2 of them are actual Decision Letters.
 - High level of effort required to tie letters to specific claims.
 - High level of effort required to parse contents of a PDF.

- Stakeholder interviews
 - [Paul Schute](https://docs.google.com/document/d/1GX-wt_DwJxYFJvyGKgzFmb4_VjoUPW8L396vlq1663Y/edit)
- Aug 2022 [Technical Discovery](https://docs.google.com/document/d/1SVmdrkqBnCgD1gJ0RVYJ3CcwpfkdCGcRIU8xGr6jKQQ/edit#heading=h.wmymj7j6vuhi)

## Solution Approach
### MVF
As a minimum viable feature (MVF), launch a feature that allows veterans to see their decision letters in a listview sorted by date in reverse chronological order.

**Proposed In-scope functional requirements**
- Decision letters sorted in reverse chronological order (if multiple)
- Decision letters are able to be downloaded as PDFs
- Decision letters from the past are visible in list view and able to be downloaded

**Additional opportunities after technical discovery**
- Ability to pull in document details from existing e-folder endpoint
- Possible to distinguish between types of notification letters

**Out of scope**
- Decision letter files included as part of “claims details”. We want to avoid the technical hurdles of having to associate these files to specific claims. 
- Decision letter language extracted from the pdf file provided as in-line page content

**Possibly in-scope pending technical discovery and feasibility assessment**
- Unique file names separate from what’s available within the veteran’s e-folder
- Unique decision letter identifiers presented in the list view

**Hypotheses to test**
- Veterans will download decision letters if given the opportunity to do so. 
- Having easier access to decision letters will reduce the time delay between receiving a disability decision and pursuing a disagreement pathway. 
- Once veterans have the ability to download their decision letters, there will be less decision letter inquiries that come into the Call Center.

##Post-MVF
Consider alternative ways in which decision letter downloads can be provided within the veterans’ claims user journey; build out the feature to fit more seamlessly into the UI and optimize redundancy so that veterans know the feature is available when it is most relevant to their place in the journey.

##Implementation Information
## Timeline
[Feature Roadmap](https://app.mural.co/t/coforma8350/m/coforma8350/1660574900043/cbffb96845626ec1a3429178a2278580fb7a1504?sender=u7b04181b0deced23bce71680)

### Important Context and Decisions

### Open Questions

### Resources and Documentation
(Detailed research summary coming soon)
