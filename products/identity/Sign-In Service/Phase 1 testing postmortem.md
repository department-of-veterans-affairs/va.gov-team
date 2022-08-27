# Description
This document exists to capture feedback from our initial test of our Sign-in Service on VA.gov. Relevant test details as follows:  
**Test Start:** 1200EST  
**Test End:**  1800EST  
**Total Users Impacted:**  4,560 (50% of expected)   
**Success Rate:**  65.58%  (add details about max of 80%)
**Return Rate:**  76.35%  (add definition)
**Notes:**  Success rate was negatively impacted by DSLogon issues 

# Test Summary
At 1200 EST on 8/25, we began directing 10% of VA.gov sign-in attempts to our new Sign-in Service.  During this time, we served 4,560 users, which was about 50% of our anticipated traffic.  For the duration of our test, we had a success rate of 65.58% for sign-in attempts, compared to a normal average of around 70%.  This 65.58% was number was negatively impacted by an issue we identified early on, where we noticed that users without complete CSP data were being prevented from authenticating.  We were able to resolve this issue in less than 2 hours, which is a dramatic increase over our usual resolution time when using SSOe.  

During the entirety of our test, no critical issues were discovered and our success rate never dropped below 50% (our threshold for stopping the test).  All of our metrics were in-line with or better than the current SSOe implementation.  During our initial testing, we saw reduced login times with certain CSP's.

Of the areas of improvement noted in this test, of significant importance is our ability to quickly identify and resolve issues.  Due to our improved logging tools (DataDog) and capabilities, we can identify issues being experience by users before they are surfaced to Help Desk, implement a fix, and deploy it within 24 hours.  Utilizing our Sign-in Service, we are able to account for 100% of the users within our system, making identifying these issues incredbibly easy.

Our next step is to conduct a 48-hour test in the coming weeks, targeting 30% of VA.gov users.  This will allow us to get closer to a typical load of a fully-implemented service, and properly test reductions in login time.  

## Went well:
- No critical issues 
- Minor Issues identified and resolved quickly 
- Team did an excellent job preparing  
- Monitoring and tools were set up well ahead of time.  
- Datadog was a standout versus Loki   
- Team was available for monitoring and issue resolution. 
- Able to account for 100% of users going through our system  
- Quickly identified DSLogon issue, reached out to ID.me, and put a fix in place.  In old (IAM) system, this likely would have taken weeks to months.  We resolved in 4 hours.  This dramatically reduces the impact on users due to quick fixes.  We are also able to notify users of issues/resolution.



## Related Tickets:  
- [46260](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46260)  
- [46259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46259)
- [42626](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46262)
- [46258](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46258)
- [46257](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46257)
- [46255](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46255)
- [46252](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46252)
- [46259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46259)

## Issues During Testing
### Issue Description 
**Link to ticket:** 
**Status:**  

### Issue Description 
**Link to ticket:** 
**Status:**  


## Key Takeaways
- Improved Logging Capabilities: 
- Improved Notification Capabilities:
- Removes a party (IAM) from the issue resolution process:
- 


## Next Steps
A second test is currently being scheduled.  Our goal is 48 hours with 30% of users being directed to the sign-in service.
Resolve open tickets 
Resolve two issues identified during testing (listed above)
