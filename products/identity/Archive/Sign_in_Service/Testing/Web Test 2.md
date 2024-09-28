# Description
As part of our rollout strategy for the Sign-in service, we want to test web functionality with a small subset of our active userbase.  In order to do this, we want to temporarily roll our sign in service out to 30% of our active users (in a typical day, 220,000 users successfully authenticate, so our test should impact 900-1000 users per hour) over a 48 hour service window.

We hope to use this test to measure any improvements in sign-in time from our baseline metrics, as well as evaluate how it impacts the user experience through any increase in helpdesk calls or other metrics.  

If at any point during our testing, the login success rate falls below 50%, we intend to pause the test while we evaluate causes.

# Potential Impact on SSOe users
If a user has a current SSOe session, we will not force the user to sign in with our sign in service.  Which means that the only impact to the user would be if they initiate a login from VA.gov first, and then go to another SSOe-enabled site.

# Breakpoints 

At each hour if the success (login) % is under 50%, we should pause/terminate the test. 


# Test Plan
Our primary goal with testing is to look for improvements in success rate and a reduction in login time.  Success rate is monitored via Datadog, while login time is tested by checking the time for each step of the login process and tallying these up.  


**Test Start:** 0900EST 9/1/2022  
**Test End:** 1700 EST 9/2/2022

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
- [X] Test Date Established and Communicated

# Test Day Checklist
- [X] Notification in VFS-All-Teams
- [x] Notification in VSP-Identity
- [x] Flippers Flipped (sign_in_service_enabled)
- [x] [Monitors Monitored](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vsp-identity-monitor-dashboard?from_ts=1659719278244&to_ts=1660324078244&live=true)
- [ ] Post-Mortem Meeting scheduled for team
- [x] Test ended and Flippers Unflipped

# Abort Checklist
- [ ] Login success rate falls below 50%
- [ ] Abnormally high error rate

# Post-Test Tasks
- [ ] Writeup of results
- [ ] Details on any further testing discussed
- [ ] Tickets created for any follow-on work



