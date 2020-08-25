# Claim and Appeal Status Tool

## Communications
- GitHub Label: [???](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a ([#vsa-benefits-memorials](https://dsva.slack.com/channels/vsa-benefits-memorials))
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

## OKRs and KPIs
Note: An attempt was made to tranfer the Google Doc table to a markdown table.  However, you cannot have different columns density and it looked very bad in markdown.  Image with link seems to work better.
![Image of OKRs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/image.png)

## Product Decisions
It was decided early on that there would be two paths through the CST rollout. Initially, it was thought that a few low hanging bugs would be fixed and deployed.  However, as the product discovery and initial investigation has progressed, we have received many requests to reduce issues in the existing tool. A lot of Call Center (NCC) data and IRIS data has been getting attention at the CTO and undersecretary level(s). Therefore, we have been working more of a "technical debt" initiative.

Initial work:
| Enhancement| Dependencies/Tech decisions:| Timeline |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Messaging enhancements to clarify common confusion•Provide a timeframe of how long it takes for faxed/mailed/uploaded evidence to processed by VBA before claim status changes •Provide information about how to get a copy of your Comp/Pen Exam •Provide information about how long it takes from the time a claim decision is made until decision is communicated and the first payment is sent/deposited | •N/A| Accomplish by end of next sprint (July 1) barring no technical complications|
| Information on Time Estimate to Complete (for Appeals):NCC recommendation was to mask estimates longer than one year; upon further investigation, the data feed needs improvement, so initially going to remove estimate messaging until the data can be resolved| •Technical investigation on calculation of estimated time to complete | Accomplish by end of next sprint (July 1) barring no technical complications|
| Clear indication on when the notification letter was mailed| •Mail date information available in VBMS •Determine how VA.gov can consume this information for display in the Claim Status Tool – current reliance on EVSS | Technical discovery to begin in mid-July|
| Allow notification letter to be downloaded (or decision to be viewed) online, or provide statement that the notification letter is not available to be viewed online | •Policy decision from VBA about allowing this information to be downloaded from the Claim Status Tool •Determine appropriate method to retrieve and display the notification letter online| •Policy discussion can begin immediately •Also discuss if there is value in adding the overall disability rating for a Veteran to the Claim Status page •Technical discovery to begin in mid-July |

The next round of changes came after a meeting with the NCC.
### Prioritized VA.gov Change Requests:
-  Temporarily replace the estimated claim completion date with a general statement.  This will need to be reviewed and reconsidered after the COVID-19 situation has resolved.
-  Allow the Notification Letter to be accessed once the package has been sent via US Mail.
-  Allow the Veteran to easily view exam information (scheduled date, contact information, etc.) and to submit a request to reschedule an exam if necessary.
-  Update status of claim language to provide the necessary information to address the status request.
-  Create option for claimants to easily upload evidence and information to address a pending tracked item and/or submit statement to address tracked item that will close the tracked item.
-  Add proact-  ive texting/emails to advise of status updates or outstanding requests.

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
- *What is your date for when you'll evaluate impact after launch?*

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
- VA Digital Strategist(s): Andrea Schneider
- Product Manager: Luke Majewski 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Anna Carey, Ed Mangimelli, Robin Garrison, Nick Sprinkle
   
## Screenshots
### Before
![Screen 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-001.jpg)
![Screen 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-002.jpg)
![Screen 3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-003.jpg)
![Screen 4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-004.jpg)
![Screen 5](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-005.jpg)
![Screen 6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-006.jpg)
![Screen 7](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/readme/Claims%20Tool%20(staging%2C%20April%202020)-page-007.jpg)

### After
