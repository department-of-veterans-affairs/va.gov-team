# Description
As part of our rollout strategy for the Sign-in service, we want to test web functionality with a small subset of our active userbase.  In order to do this, we want to temporarily roll our sign-in service out to 10% of our active users (in a typical day, 220,000 users successfully authenticate, so our test should impact 900-1000 users per hour) over a six hour service window.

We hope to use this test to measure any improvements in sign-in time from our baseline metrics, as well as evaluate how it impacts the user experience through any increase in helpdesk calls or other metrics.  

If at any point during our testing, the login success rate falls below 50%, we intend to pause the test while we evaluate causes.

# Potential Impact on SSOe users
If a user has a current SSOe session, we will not force the user to sign in with our sign-in service.  Which means that the only impact to the user would be if they initiate a login from VA.gov first, and then go to another SSOe-enabled site.

# Baseline Metrics (Default)

### Time to log in

| CSP       | Test 1 | Test 2 | Test 3 |
|-----------|--------|--------|--------|
| ID.me     |        |        |        |
| MHV       |        |        |        |
| DSLogon   |        |        |        |
| Login.gov |        |        |        |

### Success Rate

# Baseline Metrics (Sign-in Service)

### Time to log in

| CSP       | Test 1 | Test 2 | Test 3 |
|-----------|--------|--------|--------|
| ID.me     |        |        |        |
| MHV       |        |        |        |
| DSLogon   |        |        |        |
| Login.gov |        |        |        |

### Success Rate

# Breakpoints 

At each hour if the success (login) % is under 50%, we should pause/terminate the test
900-1200 users an hour (10% of our hourly users) potential impact

# Test Plan
**Test Start:**  
**Test End:**

# Alerting and Monitoring
**[Sentry URL](http://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=is%3Aunresolved+assigned%3A%23vsp-identity&statsPeriod=14d)** : Used for error logging.    
**[Datadog Dashboard](https://vagov.ddog-gov.com/account/login?next=%2Fdashboard%2F52g-hyg-wcj%2Fvsp-identity-monitor-dashboard%3Ffrom_ts%3D1657623600000%26to_ts%3D1657663200000%26live%3Dfalse)** : Used for monitoring production outages and alerting through PagerDuty and Slack.  
**[Loki URL](https://grafana.vfs.va.gov/explore?orgId=1&left=%5B%22now-6h%22,%22now%22,%22Loki%20(Prod)%22,%7B%22expr%22:%22%7Bapp%3D%5C%22vets-api-server%5C%22%7D%20%7C%20json%22%7D%5D)** : When searching the logs, users should use the request_ID (located in the headers of the VA.gov response).  

# Communications Plan
Our intention is to communicate our testing at least 14 days in advance via Team of Teams, our channel at #vsp-identity, and through any other relevant slack channels.  

# To add
- Communication plan

