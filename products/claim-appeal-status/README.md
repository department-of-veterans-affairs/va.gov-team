# Claim and Appeal Status Tool

## Communications
GitHub Label:  claim-status-tool
Slack channel: #benefits-team-1 
Product POCs: Matt Self 
va.gov link: https://www.va.gov/claim-or-appeal-status/
Stakeholders:
## Executive Summary 
 
The Claim and Appeal Status Tool (CST) exists to provide veterans information about their benefits claims. A veteran can use this tool to check the status of a VA claim or appeal for compensation related to the following:
Disability compensation 
Veterans or Survivors Pension benefits
Special monthly compensation (such as Aid and Attendance)
Dependency and Indemnity Compensation (DIC)
Burial allowance to help pay for a Veteran’s burial and funeral expenses
While there may be opportunities to expand the tool’s functionality to include other benefits, it is important to keep in mind that the vast majority of veterans coming to the tool are there to learn about the claim status for their disability benefits specifically; much of our discovery and exploration of the opportunity space will be focused on how best to serve this audience.  
 
 
 
## User Problem Statement
 
As a veteran applying for disability benefits or filing various forms of disagreements/appeals for past decisions, it is often difficult to know the status of my claim and to identify action items I could take to accelerate the VA’s decision-making process, so that I can receive the benefits I earned, including compensation that will help me meet my basic needs. 
While VA.gov has helped bring a level of transparency to the claims process by providing me with a landing page containing a “Claim StatusTool”, the information contained on this page is often insufficient. Pain points: 
The content provided doesn’t provide enough information to help me truly understand where the claim sits in the overall process or help me predict how long it will take to resolve.
The content provided does not always let me know when I could take an action that could help expedite my claim/appeal. 
The content provided is often misaligned with status information I receive when I call a veteran help center or information my VSO representative sees when they check the status of my claim using a different system; in other words, I don’t know if I can trust it. 
Solution Goals
User Goals
Obtain clarity on where a claim/appeal sits in the process in real time. 
Have expectations managed around when a claim or appeal decision will be rendered/resolved
Understand what specific action items can be taken to expedite the decision-making process. This includes responding to requests to provide additional documentation or evidence as they arise. 
Know when a claim/appeal status has changed without having to refresh the page over and over again. 
Receive confirmation that files uploaded as part of evidence gathering successfully reach their intended target.
Business Goals
Be able to process claims, appeals, and decision reviews more quickly by reducing the time it takes to receive additional information requested.
Reduce the number of calls coming into call centers inquiring about claims status information. 
Increase trust in the information veterans receive through VA.gov related to their claim
Increase veteran satisfaction in the disability claims process overall
 
## Assumptions
 
The underlying data stores (VBMS and CorpDB) likely provide significantly more data than our first-layer API partners (EVSS/Lighthouse, BGS)
In order to get what we need, we will have to work with a team that is not in sustainment. Veterans are used to using tracker and status tools with significantly more information than the current tool
Veterans mainly care about claims status information that does at least one of the following
manages their expectations around timing 
provides them clear action items that will help them receive a decision faster
Provides them clear instructions about how to effectively take action on a decision with which they disagree 
The majority of the traffic coming into the Claim Status Tool is from veterans looking to find information related to disability claims specifically
The veterans who are most dissatisfied with the Claim Status Tool are veterans who are specifically concerned with their disability claims service journey
Open Questions
(more to come in this section later)
 
## Solution Approach
(more to come in this section, links to Initiative Briefs)	
Value Propositions
User Value
Greater transparency on status of claim and managed expectations around decision-timing.
Ability to take actions that will lead to faster decisions
Business Value
Fewer questions coming into call center about disability claims and appeals
Higher level of veteran satisfaction
Less time spent tracking down information needed to process claims
 
## North Star
Average number of days it takes for the VA to arrive at claims and appeals decisions.   
## KPIs
### User actions
# successful submissions for requests for additional evidence
Average # of days between request for additional evidence and evidence submitted by veteran
# conversions from CST to VAOS for appointment scheduling
Average # of days between requests for exam scheduling and exam scheduled by veteran
### Call Center
# of inquiries about claims status
# of repeat (same user) inquiries about claims status
% of inquiries that are related to claims status
% of inquiries that are repeat (same user) inquiries related to claims status
### Errors
# of upload submission errors
# of “fail-to-process” errors (data submitted successfully on va.gov, but failing to reach its intended destination)
### VA.gov Ux
Unique sessions/unique visitors 
# unique visitors
Load time related metrics
Time on page
Medallia score
 
## OKRs 
 
### Objective 1: 
Quicker Turnaround Time between requests/opportunities for actions becoming available and veterans taking those actions. 

#### Key Results
Medical exams scheduled within 3 business days of request
New evidence submitted within 5 business days of request
Veterans determine which disagreement pathway to pursue, if any, within 20 business days and begin that process. 

### Objective 2: 
The information supplied by the CST successfully addresses burning questions veterans have about their claims and/or appeals status
#### Key Results
Call volumes related to disability claims questions at call centers drops by 75%
Repeat call center calls related to disability claims questions volume drops by 50%

### Objective 3:
Veterans can trust that the application will function properly 
#### Key Results
No FE or BE sentry errors
No upload submission errors
Reduced application load times
