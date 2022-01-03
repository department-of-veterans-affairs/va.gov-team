# Claim Status Tool V2 - Product Discovery Outline

### Where we are currently
In our pre-discovery of the claim status tool, we have conducted co-design sessions, have done a competitive analysis, have reviewed call center statistics, and have reviewed findings from past usability sessions.

We’ve generated a list of action items our team members will take in order to get the best understanding of what’s possible and what opportunities we can pursue with a full redesign of the claim status tool.

### Action items

#### Do some technical discovery with the current tool
-	What is the exhaustive list of all possible claims for the CST?
-	What is the exhaustive list of all possible appeals for the CST?
-	Where does the claim status come from?
-	What are all the (existing) possible claim statuses?
-	Where does the ‘steps’ data come from?
-	What are all the (existing) possible steps?
-	What services are called to populate a user’s claim list?
-	What endpoints exist today? Do we need to make new endpoints?

#### Do some business process discovery with the current tool
-	Who/what team handles the status changes?
-	What is the current business process for handling claims?
-	What software is utilized by staff to update claim statuses?
-	Are there any automatic (non-human) processes that affect statuses or steps?
#### Further quantitative and qualitative analysis of the current tool
-	Look at all use cases that exist within the CST
-	Burial and Memorials
-	Pension claims
-	Compensation
-	Education?
-	Housing? 
-	What are the touchpoints the VA has with the user during this process?
-	Letter in the mail?
-	Emails? 
-	Phone calls? (CP exam)
-	Ask a question (IRIS)
-	Pain points that have been expressed
-	What detailed call center data can we access to understand usability issues in the current tool?
-	What usability issues have been identified as a part of past usability testing?
-	What types of metrics can we pull?
-	Can we determine how many claims an average user has at a given time?
-	Can we determine what types of claims are most prevalent?
-	Can we determine wait times between the existing steps?
#### Understanding of the political climate of the claim status tool
-	Who are our stakeholders?
-	Should we ensure that there is at least one representative from each area we identify (if there are multiple teams/disciplines)?
-	What could cause friction in the process?
-	What do we already know about needs/wants from different stakeholders?
-	Set up meetings with all relevant stakeholders.
-	Conduct stakeholder interviews (set of questions)

## Solution Approach
Our focus will be to incrememntally address bugs and UX updates. Next we will focus on a complete redesign of the product.

### Expected Work
Based on our research:



## OKRs and KPIs
Note: An attempt was made to tranfer the Google Doc table to a markdown table.  However, you cannot have different columns density and it looked very bad in markdown.  Image with link seems to work better.
![Image of OKRs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/image.png)

# Implementation Info

## Status
January 2022...

## Product Decisions
Why we did what we did...

Initial work:
| Enhancement| Dependencies/Tech decisions:| Timeline |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Messaging enhancements to clarify common confusion•Provide a timeframe of how long it takes for faxed/mailed/uploaded evidence to processed by VBA before claim status changes •Provide information about how to get a copy of your Comp/Pen Exam •Provide information about how long it takes from the time a claim decision is made until decision is communicated and the first payment is sent/deposited | •N/A| Accomplish by end of next sprint (July 1) barring no technical complications|
| Information on Time Estimate to Complete (for Appeals):NCC recommendation was to mask estimates longer than one year; upon further investigation, the data feed needs improvement, so initially going to remove estimate messaging until the data can be resolved| •Technical investigation on calculation of estimated time to complete | Accomplish by end of next sprint (July 1) barring no technical complications|
| Clear indication on when the notification letter was mailed| •Mail date information available in VBMS •Determine how VA.gov can consume this information for display in the Claim Status Tool – current reliance on EVSS | Technical discovery to begin in mid-July|
| Allow notification letter to be downloaded (or decision to be viewed) online, or provide statement that the notification letter is not available to be viewed online | •Policy decision from VBA about allowing this information to be downloaded from the Claim Status Tool •Determine appropriate method to retrieve and display the notification letter online| •Policy discussion can begin immediately •Also discuss if there is value in adding the overall disability rating for a Veteran to the Claim Status page •Technical discovery to begin in mid-July |
