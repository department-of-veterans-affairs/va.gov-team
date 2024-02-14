# Description
This document exists to capture feedback from our initial test of our Sign in Service on VA.gov. Relevant test details as follows:  
**Test Start:** 0900EST 9/1/2022  
**Test End:**  1700EST 9/2/2022  
**Total Users Benefitted:** 41,200   
**Success Rate:** 74.25%    
**Return Rate:** 78%  
**Login Performance:** 21.26% average reduction in time to log in (tested in Chrome across CSP's)  
**Callback Failures:** 1,360  (Errors detected between authentication with the CSP and returning to VA.gov)  
**Notes:**  
- In a test using Chrome, our average sign-in time across all CSP's was reduced by 20% using our Sign in Service over SSOe
- During our test, our rate of successful sign-in increased by up to 20% (averaging 10-12% for the entire test) for users utilizing Safari and Chrome and our Sign in Service over SSOe (Safari and Chrome account for 75% of our daily users)  
- Issues impacting other teams were resolved in 2 hours or less, with fixes released in time for the same-day production deploy
- Our success rate was negatively impacted by ID.me viewing our traffic as new users and requesting they consent to sharing information with VA.gov
- Our login time can be improved by certain CSP's implementing Single Round-Trip for our Sign in Service (specifically ID.me and Login.gov)   
- During our test, we identified a Token Exchange Error with ID.me and Login.gov resulting in 414 (1% of users) callback failures from ID.me, accounting for 30% of our failures  
- No major issues were identified (defined as issues requiring us to stop our test ahead of our planned end time)




# Test Summary
We began our test at 0900 EST on Thursday, September 1 2022.  During the 36 hours the test ran, ending at 1700 EST on Friday, September 3 2022, 41,200 users were sent through our Sign in Service from VA.gov.  Of these users we saw 30,590 successfully sign in.  We continue to see a lower than desired success rate with ID.me as they view traffic from our sign in service as new users and request that the users consent to share information with VA.gov again.  The only other issue of note was that the 1010EZ team notified us of an issue related to the changes we have made to refresh tokens.  The time to resolution for this issue was less than 2 hours from it being brought to our attention, and a fix was implemented before the end of the day we were notified that will prevent other teams from being impacted by this in the future.


## Related Tickets:  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46620  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46619  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46618  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46616  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46583  
https://github.com/department-of-veterans-affairs/va.gov-team/issues/46696  - Token Exchange Error



## Issues During Testing
**Issue Description:** ID.me users are presented with a consent request on sign-in, even though they previously consented to share their information with VA.gov.  This is due to the fact that ID.me sees them as new users because we are sending them via Sign in Service instead of SSOe.  This leads to some users rejecting consent, which prevents login.  In our initial testing, we saw about 3% of users reject consent.  While an immediate solution is not possible from the VA.gov side, we should work with ID.me to implement a solution as this negatively impacts our success rate. 
**Link to ticket:** 
**Status:**  

**Issue Description:** 
**Link to ticket:** 
**Status:**


## Next Steps
We would like to utilize or Sign in Service for 100% of users in staging and below, while still providing users with an SSOe URL for testing.  Following this, we would like to roll out to 100% of production, again maintaining SSOe capabilities via URL for users in need of that functionality.  Our goal for a full production rollout would be the end of September to allow the MyVA team to complete their work on other products.  We will continue to honor inbound SSOe users for VA.gov after this rollout.  

## Supplement: Average Login Times for SSOe and Sign in Service:

**Login time is negatively impacted by the fact that we have to make two round-trips to ID.me and Login.gov to determine user LOA.  Once these partners implement single round-trip we anticipate a reduction in sign-on time of 1-2 seconds.**  On average, we saw a 20% reduction in sign-in time with the Sign in Service over the existing SSOe solution.



### Time to log in (Sign in Service)
All tests performed on live VA.gov, with times measured at 3 points. All tests were performed 3 times with the average being displayed below.
## Login.gov  
**Average time from CSP selection to sign-in screen:** 0 seconds (SSOe: 2.71)  
**Average time from sign-in to MFA screen:** 1.2 seconds (SSOe: 1.69)      
**Average time from MFA completion to return to VA.gov:** 4.9 seconds (SSOe: 6.95)  
**Average total sign-in time:** 6.1 seconds (SSOe: 11.35)    

## My HealtheVet  
**Average time from CSP selection to sign-in screen:** 4.2 seconds (SSOE: 5.23s)   
**Average time from sign-in to MFA screen:**  5.46 seconds (SSOe: 5.72s)  
**Average time from MFA completion to return to VA.gov:** 6.7 seconds (SSOe: 7.80s)    
**Average total sign-in time:**  16.36 seconds (SSOe: 18.76s) 

## DSLogon
**Average time from CSP selection to sign-in screen:** 2.7s (SSOe: 6.45)  
**Average time from sign-in to MFA screen:**  4.9s (SSOe: 4.21)   
**Average time from MFA completion to return to VA.gov:** 5.6s (SSOe: 9.86)  
**Average total sign-in time:** 13.3s (SSOe: 20.53)  

## ID.me  
**Average time from CSP selection to sign-in screen:** 0s (SSOe: 2.96)  
**Average time from sign-in to MFA screen:**  2.13s (SSOe: 4.11)  
**Average time from MFA completion to return to VA.gov:** 10.79s (SSOe: 6.95)  
**Average total sign-in time:** 15.31s (SSOe: 14.02)    
**NOTE:** Due to an issue with ID.me, Sign in Service requires two round trips to verify LOA.  Once we resolve this we anticipate a reduction in the time it takes to sign in of at least 1-2 seconds)


# Appendix: Definitions of Return and Success Rate  

**Return Rate:** We define the Return Rate as the percentage of users who click on a CSP button on the sign in page of VA.gov, are sent to a CSP for sign-in, and are then returned to VA.gov.  This includes users who sign in successfully, as well as users who fail sign-in for whatever reason (wrong password, for example).  Based on past user behavior studies, 15-20% of our users abandon the sign-in process, so in general we assume a theoretical maximum return rate between 80 and 85%  
  
  
**Success Rate:** We define Success Rate as the percentage of users who click on a CSP button on the sign in page of VA.gov, are sent to a CSP for sign-in, and are then returned to VA.gov **successfully logged in**.  The theoretical maximum success rate would be 100% of the Return Rate.

**Success/Return Rate Example**  
100 users click a CSP button to sign in  
Of those users, 80 are returned to VA.gov, signed in or not.  This gives us a return rate of 80%. (80/100 users)  
Of the 80 users returned, 75 are returned signed in.  This gives us a success rate of 75% (75/100 users)


