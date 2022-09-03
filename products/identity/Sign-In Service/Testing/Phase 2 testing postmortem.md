# Description
This document exists to capture feedback from our initial test of our Sign-in Service on VA.gov. Relevant test details as follows:  
**Test Start:** 0900EST 9/1/2022  
**Test End:**  1700EST 9/2/2022  
**Total Users Impacted:**   
**Success Rate:**  )  
**Return Rate:**    
**Notes:**  



# Test Summary


## Key Takeaways



## Related Tickets:  


## Issues During Testing
**Issue Description:** ID.me users are presented with a consent request on sign-in, even though they previously consented to share their information with VA.gov.  This is due to the fact that ID.me sees them as new users because we are sending them via Sign-in Service instead of SSOe.  This leads to some users rejecting consent, which prevents login.  In our initial testing, we saw about 3% of users reject consent.  While an immediate solution is not possible from the VA.gov side, we should work with ID.me to implement a solution as this negatively impacts our success rate. 
**Link to ticket:** 
**Status:**  

**Issue Description:** 
**Link to ticket:** 
**Status:**


## Next Steps


## Supplement: Average Login Times for SSOe and Sign-in Service:

**Login time is negatively impacted by the fact that we have to make two round-trips to ID.me and Login.gov to determine user LOA.  Once these partners implement single round-trip we anticipate a significant reduction in sign-on time.**



### Time to log in (SSOe)
