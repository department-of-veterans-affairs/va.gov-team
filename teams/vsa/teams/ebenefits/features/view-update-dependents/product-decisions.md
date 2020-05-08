# High Level Product Decisions: 686c application
This is to help guide and memorialize decisions made about different funcitonalities and behaviors for the feature we are working with.
## VA File Number
A question arose around whether this should be a user-inputable field...
_Steve: "Since file number is a critical field for establishment of a claim, AND it tracks with SSN, AND SSN is often vulnerable to off-by-one errors, it's critical we try to derive the file number so we don't accidentally establish a cliam for a different person"_
- There should be no user input of the VA file number. No UI
  - Research: where and how to get a hold of this number from the backend
  - If the file number is not present in the API response, then the user is in an error state.
- 
