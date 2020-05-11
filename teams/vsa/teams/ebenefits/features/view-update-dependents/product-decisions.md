# High Level Product Decisions: 686c application
This is to help guide and memorialize decisions made about different funcitonalities and behaviors for the feature we are working with.
## VA File Number  
`May 8, 2020`  
**A decision was made about how to handle the VA File Number and it's impact on the Veterans' ability to proceed into the Form 21-686c Dependent Claims application.**  
  
_Steve: "Since file number is a critical field for establishment of a claim, AND it tracks with SSN, AND SSN is often vulnerable to off-by-one errors, it's critical we try to derive the file number so we don't accidentally establish a claim for a different person."_
- There should be no user input of the VA file number. No UI for this first version.  
  - Research: where and how to get a hold of this number from the backend   
  - If the file number is not present in the API response, then the user is in an error state.  
  - The VA file number is required to submit   
- Next iteration may eventually show masked versions of the SSN and VA File Number
  
**TL;DR - We are going to run a check on this and if we are _not_ able to get it, we need to send the user to a phone number to ensure their VA file number is in place in the VA system of record via some error messaging (WIP):**
  
![you're missing critical info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/images/your-profile-is-missing-info.png)
------------
## Additional Pension Questions  
`May 5, 2020`  
**Some questions have come to light involving a Veterans Pension information.  These questions are:** 
When adding dependent, ask an additional (optional) question: "Did this dependent have income in the last 365 days?"

Ask a global (optional) question: "Did the household have a total income of less than $XXX in the last tax year?"
  
_This should be handled with care and context so that financial questions are not off-putting to the Veteran_
- Design the presetnation of these questions in a way that conveys their intent and gives confidence to the Veteran about what they are answering and what it is for.

**TL;DR - 2 new pension questions to be added.  Create a mockup for later implementation**

------------
## Issue Title  
`Date decided`  
**Description.**  
  
_Note/ Guiding principle_
- Action item

**TL;DR - what does this mean?  what do we do next?**
