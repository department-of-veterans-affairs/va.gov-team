# Description
This document exists to capture feedback from our initial test of our Sign in Service on VA.gov. Relevant test details as follows:  
**Test Start:** 1200EST  
**Test End:**  1800EST  
**Total Users Impacted:**  4,560 (50% of expected)   
**Success Rate:**  65.58%   (SSOe: 74%)  
**Return Rate:**  76.35%  (SSOe: 72.75%)   
**Notes:**  
- Success rate was negatively impacted by DSLogon issues during the first 2 hours of our test.  We have identified several bugs and issues that should allow us to bring our Success Rate within 2-4% of our Return Rate, in-line with SSOe.  
- Past user studies indicate that ~15% of users abandon the sign-in process after leaving VA.gov, meaning the maximum theoretical Return Rate is about 85%.
- Return Rate is defined as the % of users that were sent to a CSP to sign in, for whcih we received a response from the CSP (either successful sign-in or failed)
- Success Rate is the percentage of users that were sent to a CSP to sign in and returned to VA.gov successfully signed in.  The theoretical maximum success rate is 100% of the Return Rate.
- Login time is negatively impacted by the fact that we have to make two round-trips to ID.me and Login.gov to determine user LOA.  Once these partners implement single round-trip we anticipate a significant reduction in sign-on time.


# Test Summary
At 1200 EST on 8/25, we began directing 10% of VA.gov sign-in attempts to our new Sign in Service.  During this time, we served 4,560 users, which was about 50% of our anticipated traffic.  For the duration of our test, we had a success rate of 65.58% for sign-in attempts, compared to a normal average of around 70%.  This 65.58% was number was negatively impacted by an issue we identified early on, where we noticed that users without complete CSP data were being prevented from authenticating.  We were able to resolve this issue in less than 2 hours, which is a dramatic increase over our usual resolution time when using SSOe.  

During the entirety of our test, no critical issues were discovered and our success rate never dropped below 50% (our threshold for stopping the test).  All of our metrics were in-line with or better than the current SSOe implementation.  During our initial testing, we saw reduced login times with certain CSP's.

Of the areas of improvement noted in this test, of significant importance is our ability to quickly identify and resolve issues.  Due to our improved logging tools (DataDog) and capabilities, we can identify issues being experience by users before they are surfaced to Help Desk, implement a fix, and deploy it within 24 hours.  Utilizing our Sign in Service, we are able to account for 100% of the users within our system, making identifying these issues incredbibly easy.

Our next step is to conduct a 48-hour test in the coming weeks, targeting 30% of VA.gov users.  This will allow us to get closer to a typical load of a fully-implemented service, and properly test reductions in login time.  

## Key Takeaways
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
**Issue Description:** During authentication we take CSP data and send it to MPI to allow them to have up-to-date information. If the CSP Data was missing a necessary attribute (First, Last, DOB, SSN), the update would fail and block authentication. We don't feel that blocking auth is appropriate in this scenario as missing the data at the CSP-level is not indicative of it missing at the MPI level.  
 
**Link to ticket:** [LINK](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/46258)  
**Status:**  Closed

**Issue Description**: During our test of sign in service, we noticed iD.me was not returning attributes we expected. For most users, this had no impact but for some users who, for unknown reasons to us, were not labelled as LOA3.
We suspect this is similar to MHV Premium Users.  

**Link to ticket:** [LINK](https://app.zenhub.com/workspaces/identity-5f5bab705a94c9001ba33734/issues/department-of-veterans-affairs/va.gov-team/46262)  
**Status:** Closed


## Next Steps
A second test is currently being scheduled.  Our goal is 48 hours with 30% of users being directed to the sign in service.
Resolve open tickets 
Resolve two issues identified during testing (listed above)

## Supplement: Average Login Times for SSOe and Sign in Service:

**Login time is negatively impacted by the fact that we have to make two round-trips to ID.me and Login.gov to determine user LOA.  Once these partners implement single round-trip we anticipate a significant reduction in sign-on time.**

While testing our sign in service, we saw an average reduction in user login time of one second (6%), with some CSP's seeing as much as a 33% reduction in time taken to sign-in.  For Login.gov, average time to sign in was reduced from 11.35 seconds to 8.11 seconds, which was the most dramatic reduction.  The most significant reduction in the sign-in process was from CSP selection to CSP sign-in screen, which was cut in half (4.33 seconds to 2.13 seconds). 


### Time to log in (SSOe)

|           |Time (Seconds)   |    |            |    |
|-----------------|-----------------|----------|------------------|----------|
|                 |CSP->Login Screen|Login->MFA|MFA->VA.gov Loaded|Total Time|
|DS Logon 1       |7.35             |4.62      |10.42             |22.39     |
|DS Logon 2       |5.62             |3.23      |10.20             |19.05     |
|DS Logon 3       |6.39             |4.79      |8.97              |20.15     |
|**DS Logon Average** |**6.45**             |**4.21**      |**9.86**             |**20.53**     |
|MHV 1            |5.66             |6.01      |8.79              |20.46     |
|MHV 2            |5.06             |5.94      |6.38              |17.38     |
|MHV 3            |4.97             |5.22      |8.24              |18.43     |
|**MHV Average**    |**5.23**           |**5.72**      |**7.80**             |**18.76**     |
|ID.me 1          |2.62             |5.97      |7.35              |15.94     |
|ID.me 2          |3.15             |3.01      |7.4               |13.56     |
|ID.me 3          |3.1              |3.35      |6.1               |12.55     |
|**ID.me Average**    |**2.96**             |**4.11**     |**6.95**              |**14.02**    |
|Login.gov 1      |3.26             |2.13      |10.84             |16.23     |
|Login.gov 2      |2.43             |1.5       |5.54              |9.47      |
|Login.gov 3      |2.44             |1.44      |4.47              |8.35      |
|**Login.gov Average**|**2.71**            |**1.69**    |**6.95**             |**11.35**     |

### Time to log in (Sign in Service)

|CSP           |Time (Seconds)   |    |            |    |
|-----------------|-----------------|----------|------------------|----------|
|                 |CSP->Login Screen|Login->MFA|MFA->VA.gov Loaded|Total Time|
|DS Logon 1       |3.70             |4.32      |13.92             |21.94     |
|DS Logon 2       |2.90             |4.53      |11.54             |18.97     |
|DS Logon 3       |3.21             |4.73      |12.22             |20.16     |
|**DS Logon Average** |**3.27**             |**4.53**      |**12.56**            |**20.36**     |
|MHV 1            |3.67             |5.97      |9.21              |18.85     |
|MHV 2            |4.05             |5.14      |8.32              |17.51     |
|MHV 3            |4.56             |5.82      |8.41              |18.79     |
|**MHV Average**     |**4.09**           |**5.64**   |**8.65**             |**18.38**     |
|ID.me 1          |1.32             |2.04      |12.25             |15.61     |
|ID.me 2          |1.03             |1.8       |10.16             |12.99     |
|ID.me 3          |1.12             |1.62      |9.95              |12.69     |
|**ID.me Average**    |**1.16**            |**1.82**    |**10.79**             |**13.76**  |
|Login.gov 1      |0                |1.37      |7.8               |9.17      |
|Login.gov 2      |0                |1.42      |6.28              |7.70      |
|Login.gov 3      |0                |1.46      |6.01              |7.47      |
|**Login.gov Average**|**0.00**          |**1.42**    |**6.70**           |**8.11**    |
