# EVSS to Lighthouse Claim Status End Point Migration Release Plan
## Phase I: Internal Testing and UAT
### Planning: 
Desired date range or test duration: 5/18-5/25 
Desired number of users: 4  
How you'll recruit the right production test users: We’ll be using personal and professional networks to recruit production test users.  
How you'll conduct the testing: Live, virtual sessions, giving users assigned tasks to test use cases.  
How you'll give the test users access to the product in production w/o making it live on VA.gov: feature toggle  

### Additional testing
- Automated testing
- Fixture Testing

#### Benchmarks
- New Sentry Errors: 0
- Unsuccessful test cases: 0
- Unsuccessful fixture tests: 0
- Call center complaints: 0
- New 504 Errors: 0
- New 499 Errors: 0
- Latency: 2-4s on average

### Results:  
- Number of users:   
- Number of bugs identified / fixed: 
- Types of errors logged: 

## Phase II: Staged Rollout (also known as unmoderated production testing) 
### Planning X
How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

 - Zero errors logged in Sentry
 - All functional QA tests passed
 - All end-to-end and unit tests pass     
  
Links to dashboard(s) showing "success criteria" metrics: <a href = "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Claims%20API%20Migration%20to%20Lighthouse%20Initiative.md">Lighthouse Migration Initiative</a>  

### Stage A: Canary 
#### Planning  
Date: 6/13/2023

Length of time: 2 days
Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  

- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency: 

### Stage B: moderate ramp up
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency: 

What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 
### Stage C: another moderate ramp up
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency: 

### Stage D: final moderate ramp up
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency:

### Stage E: High
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency: 

### Stage F: Very High 
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 75% 
#### Results  
- New Sentry Errors: 
- Unsuccessful test cases: 
- Unsuccessful fixture tests: 
- Call center complaints: 
- New 504 Errors: 
- New 499 Errors: 
- Latency: 

## Go Live! 
### Planning:
Desired date: 6/26/2023
### KPIs  

- Sentry Errors: 
- Application Latency:
- Call center complaints:


## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders, if any?  
3. Which of the assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results? 

