# High Level Product Decisions: 686c application
This is to help guide and memorialize decisions made about different funcitonalities and behaviors for the feature we are working with.
## VA File Number
A question arose around whether this should be a user-inputable field...  
_Steve: "Since file number is a critical field for establishment of a claim, AND it tracks with SSN, AND SSN is often vulnerable to off-by-one errors, it's critical we try to derive the file number so we don't accidentally establish a cliam for a different person"_
- There should be no user input of the VA file number. No UI for this.  
  - Research: where and how to get a hold of this number from the backend   
  - If the file number is not present in the API response, then the user is in an error state.  
  - The VA file number is required to submit   
  
**TL;DR - We are going to run a check on this and if we are not able to get it, we need to send the user to a phone number to ensure their VA file number is in place in the VA system of record.**


