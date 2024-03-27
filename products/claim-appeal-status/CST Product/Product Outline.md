# Claim and Appeal Status Tool Product Outline (updated 3.27.2024)

## Communications
- GitHub Label:  claim-status-tool
- Slack channel: #benefits-team-1 
- Product POCs: Matt Self 
- va.gov link: https://www.va.gov/claim-or-appeal-status/
- Stakeholders:

# Executive Summary 
 
The Claim and Appeal Status Tool (CST) exists to provide veterans information about their benefits claims. A veteran can use this tool to check the status of a VA claim or appeal for compensation related to the following:
- Disability compensation 
- Veterans or Survivors Pension benefits
- Special monthly compensation (such as Aid and Attendance)
- Dependency and Indemnity Compensation (DIC)
- Burial allowance to help pay for a Veteran’s burial and funeral expenses
- While there may be opportunities to expand the tool’s functionality to include other benefits, it is important to keep in mind that the vast majority of veterans coming to the tool are there to learn about the claim status for their disability benefits specifically; much of our discovery and exploration of the opportunity space will be focused on how best to serve this audience.  
 
 ## User Problem Statement
 
As a veteran applying for disability benefits or filing various forms of disagreements/appeals for past decisions, it is often difficult to know the status of my claim and to identify action items I could take to accelerate the VA’s decision-making process, so that I can receive the benefits I earned, including compensation that will help me meet my basic needs. 
While VA.gov has helped bring a level of transparency to the claims process by providing me with a landing page containing a “Claim StatusTool”, the information contained on this page is often insufficient. Pain points: 
1. The content provided doesn’t provide enough information to help me truly understand where the claim sits in the overall process or help me predict how long it will take to resolve.
2. The content provided does not always let me know when I could take an action that could help expedite my claim/appeal. 
3. The content provided is often misaligned with status information I receive when I call a veteran help center or information my VSO representative sees when they check the status of my claim using a different system; in other words, I don’t know if I can trust it. 

## Solution Goals
### User Goals
- Obtain clarity on where a claim/appeal sits in the process in real time. 
- Have expectations managed around when a claim or appeal decision will be rendered/resolved
- Understand what specific action items can be taken to expedite the decision-making process. This includes responding to requests to provide additional documentation or evidence as they arise. 
- Know when a claim/appeal status has changed without having to refresh the page over and over again. 
- Receive confirmation that files uploaded as part of evidence gathering successfully reach their intended target.

### Business Goals
- Be able to process claims, appeals, and decision reviews more quickly by reducing the time it takes to receive additional information requested.
- Reduce the number of calls coming into call centers inquiring about claims status information. 
- Increase trust in the information veterans receive through VA.gov related to their claim
- Increase veteran satisfaction in the disability claims process overall
 
# Assumptions
 
- The underlying data stores (VBMS and CorpDB) likely provide significantly more data than our first-layer API partners (EVSS/Lighthouse, BGS)
- In order to get what we need, we will have to work with a team that is not in sustainment. Veterans are used to using tracker and status tools with significantly more information than the current tool
- Veterans mainly care about claims status information that does at least one of the following
  - manages their expectations around timing 
  - provides them clear action items that will help them receive a decision faster
  - Provides them clear instructions about how to effectively take action on a decision with which they disagree

 # Previous assumptions that have been answered
 - The majority of the traffic coming into the Claim Status Tool is from veterans looking to find information related to disability claims specifically: this is factually the case. Our DataDag monitors show that compensation claims related to disability are by far the most common claim time by an order of magnitude. 
 - The veterans who are most dissatisfied with the Claim Status Tool are veterans who are specifically concerned with their disability claims service journey: This is mostly true based on all the research we've done to date. Majority of pain points expressed have to do with a lack of transparency or clear direction for disability claims in particulr. 

# Open Questions
- What claim types should show in the claim status tool based on prior communications?
- What opportunities are there to provide more accurate information about decision timing or claim phase timing?
- How useful/accurate is the "your place in line/docket" feature for appeals?
 
# Solution Approaches
- [CST: Download Decision Letter Feature Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Decision%20Letter%20Feature%20Brief.md):  
- [CST: Improved Evidence Submission Initative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Improved%20Evidence%20Requests%20Initiative.md)
- [CST: Claims API Migration to Lighthouse Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Claims%20API%20Migration%20to%20Lighthouse%20Initiative.md)
- [CST: Claim Understanding/Contextualization Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Improved%20Claims%20Process%20Understanding%20Initiative.md)
- [CST: Claim Notifications Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Event-Driven%20Notifications%20Initiative.md)

## Value Propositions
### User Value
- Greater transparency on status of claim and managed expectations around decision-timing.
- Ability to take actions that will lead to faster decisions
- Business Value
- Fewer questions coming into call center about disability claims and appeals
- Higher level of veteran satisfaction
- Less time spent tracking down information needed to process claims
 
# North Star
CSAT scores. 

# KPIs
## User actions
- Number of successful submissions for requests for additional evidence
- Average # of days between request for additional evidence and evidence submitted by veteran
- Average # of days between requests for exam scheduling and exam scheduled by veteran

## Call Center
- number of inquiries about claims status
- number of repeat (same user) inquiries about claims status
- % of inquiries that are related to claims status
- % of inquiries that are repeat (same user) inquiries related to claims status

## Errors
- number of upload submission errors
- number of “fail-to-process” errors (data submitted successfully on va.gov, but failing to reach its intended destination)

## VA.gov UX
- Unique sessions/unique visitors 
- number ofunique visitors
- Load time related metrics
- Time on page
- Medallia score
 
# OKRs 
 
## Objective 1: 
Reduced Turnaround Time between requests/opportunities for actions and veterans taking those actions. 

### Key Results
- *Medical exams scheduled within 3 business days of request
- (X% of veterans are satisfied with their initial decision and do not pursue a decision review.)
- New evidence submitted within 5 business days of request
- Veterans determine which disagreement pathway to pursue, if any, within 20 business days and begin that process. 

## Objective 2: 
- CST provides a singular online source for successfully addressing burning questions Veterans have about their claims and appeals

### Key Results
- Call volumes related to disability claims questions at call centers drops by 75%
- Task completion rates (Medallia)
- Reduce evss claim status view/transactions" to zero

## Objective 3:
- Veterans can trust that the application will function properly 

### Key Results
- Resolve all level 2 and level 1 accessibility defects.
- Reduced evidence submission errors
- Reduced application errors in Sentry and DataDog
- Reduced silent failurse to zero
