# Description
As part of our rollout strategy for the Sign-in service, we want to test web functionality with a small subset of our active userbase.  In order to do this, we want to temporarily roll our sign-in service out to 10% of our active users (in a typical day, 220,000 users successfully authenticate, so our test should impact 900-1000 users per hour) over a six hour service window.

We hope to use this test to measure any improvements in sign-in time from our baseline metrics, as well as evaluate how it impacts the user experience through any increase in helpdesk calls or other metrics.  

If at any point during our testing, the login success rate falls below 50%, we intend to pause the test while we evaluate causes.

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

# Communications Plan


# To add
- SSO Stats
- Monitoring details
- Communication plan
- 
