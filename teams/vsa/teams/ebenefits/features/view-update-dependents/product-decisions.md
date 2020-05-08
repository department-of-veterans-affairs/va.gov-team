# High Level Product Decisions: 686c application
This is to help guide and memorialize decisions made about different funcitonalities and behaviors for the feature we are working with.
## VA File Number  
`May 8, 2020`  
**A decision was made about how to handle the VA File Number and it's impact on the Veterans' ability to proceed into the form.**  
_Steve: "Since file number is a critical field for establishment of a claim, AND it tracks with SSN, AND SSN is often vulnerable to off-by-one errors, it's critical we try to derive the file number so we don't accidentally establish a claim for a different person."_
- There should be no user input of the VA file number. No UI for this.  
  - Research: where and how to get a hold of this number from the backend   
  - If the file number is not present in the API response, then the user is in an error state.  
  - The VA file number is required to submit   
  
**TL;DR - We are going to run a check on this and if we are _not_ able to get it, we need to send the user to a phone number to ensure their VA file number is in place in the VA system of record via some error messaging (WIP):**
  
![you're missing critical info](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/images/your-profile-is-missing-info.png)

