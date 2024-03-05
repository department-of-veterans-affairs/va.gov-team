# Description
As part of our rollout strategy for the Sign-in service, we want to test web functionality with a small subset of our active userbase.  In order to do this, we want to temporarily roll our sign in service out to 10% of our active users (in a typical day, 220,000 users successfully authenticate, so our test should impact 900-1000 users per hour) over a six hour service window.

We hope to use this test to measure any improvements in sign-in time from our baseline metrics, as well as evaluate how it impacts the user experience through any increase in helpdesk calls or other metrics.  

If at any point during our testing, the login success rate falls below 50%, we intend to pause the test while we evaluate causes.

# Potential Impact on SSOe users
If a user has a current SSOe session, we will not force the user to sign in with our sign in service.  Which means that the only impact to the user would be if they initiate a login from VA.gov first, and then go to another SSOe-enabled site.

# Baseline Metrics (Default)

### Time to log in
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


### Success Rate

# Baseline Metrics (Sign in Service)

### Time to log in

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


### Success Rate

# Breakpoints 

At each hour if the success (login) % is under 50%, we should pause/terminate the test. 


# Test Plan
Our primary goal with testing is to look for improvements in success rate and a reduction in login time.  Success rate is monitored via Datadog, while login time is tested by checking the time for each step of the login process and tallying these up.  


**Test Start:**  
**Test End:**

# Alerting and Monitoring
**[Sentry URL](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d)** : Used for error logging.    
**[Datadog Dashboard](https://vagov.ddog-gov.com/account/login?next=%2Fdashboard%2F52g-hyg-wcj%2Fvsp-identity-monitor-dashboard%3Ffrom_ts%3D1657623600000%26to_ts%3D1657663200000%26live%3Dfalse)** : Used for monitoring production outages and alerting through PagerDuty and Slack.  
**[Loki URL](https://grafana.vfs.va.gov/explore?orgId=1&left=%5B%22now-6h%22,%22now%22,%22Loki%20(Prod)%22,%7B%22expr%22:%22%7Bapp%3D%5C%22vets-api-server%5C%22%7D%20%7C%20json%22%7D%5D)** : When searching the logs, users should use the request_ID (located in the headers of the VA.gov response).  

# Communications Plan
Our intention is to communicate our testing at least 14 days in advance via Team of Teams, our channel at #vsp-identity, and through any other relevant slack channels.  

During our testing phase, we will monitor our public channel (#vsp-identity) for any issues, and encourage any VA teams to report them there.  We will have a dedicated engineering resource monitoring this channel during the test, and responding and prioritizing any issues to determine if we need to stop the test.

# Pre-Launch Checklist
- [x] Notify VSP Engineering Channel
- [x] Notify VSP Identity Channel
- [x] Team of Teams 
- [x] Monitors Created
- [x] Test Date Established and Communicated

# Test Day Checklist
- [x] Notification in VFS-All-Teams
- [x] Notification in VSP-Identity
- [x] Flippers Flipped (sign_in_service_enabled)
- [x] [Monitors Monitored](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1659719278244&to_ts=1660324078244&live=true)
- [x] Post-Mortem Meeting scheduled for team
- [x] Test ended and Flippers Unflipped

# Abort Checklist
- [ ] Login success rate falls below 50%
- [ ] Abnormally high error rate

# Post-Test Tasks
- [x] Writeup of results
- [x] Details on any further testing discussed
- [x] Tickets created for any follow-on work




