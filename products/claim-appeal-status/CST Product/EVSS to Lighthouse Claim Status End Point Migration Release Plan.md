# EVSS to Lighthouse Claim Status End Point Migration Release Plan
## Phase I: Internal Testing and UAT
### Planning: 
Desired date range or test duration: 1/18-2/7 
Desired number of users: 4  
How you'll recruit the right production test users: We’ll be using personal and professional networks to recruit production test users.  
How you'll conduct the testing: Live, virtual sessions, giving users assigned tasks to test use cases.  
How you'll give the test users access to the product in production w/o making it live on VA.gov: feature toggle  

### Additional testing
- Automated testing
- Fixture Testing

#### Benchmarks
- Sentry Errors: 0
- Unsuccessful test cases: 0
- Unsuccessful fixture tests: 0

### Results:  
- Number of users:   
- Number of bugs identified / fixed: 
- Types of errors logged: 

## Phase II: Staged Rollout (also known as unmoderated production testing) 
### Planning X
How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

 - Zero errors logged in Sentry    
  
Links to dashboard(s) showing "success criteria" metrics: <a href = "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Claims%20API%20Migration%20to%20Lighthouse%20Initiative.md">Lighthouse Migration Initiative</a>  

### Stage A: Canary 
#### Planning  
Length of time: 2 days
Percentage of Users (and roughly how many users do you expect this to be): 1%
#### Results:  
- Sentry Errors

### Stage B: moderate  
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 25% 
#### Results:  
- Sentry Errors  
What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges? 
### Stage C: High 
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  
- Sentry Errors:   
- Metrics at this stage (per your "success criteria"): 
### Stage C: Very High 
#### Planning  
Length of time: 2 days  
Percentage of Users (and roughly how many users do you expect this to be): 75% 
#### Results  
- Sentry Errors: 2 days  
- Metrics at this stage (per your "success criteria"): 
What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?
## Go Live! 
### Planning:
Desired date: 1/11/2023
### KPIs  

- Sentry Errors: 
- Application Latency: 


## Post-launch Questions  
To be completed once you have gathered your initial set of data, as outlined above.   
1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?  
2. What qualitative feedback have you gathered from users or other stakeholders, if any?  
3. Which of the assumptions you listed in your product outline were/were not validated?  
4. How might your product evolve now or in the future based on these results? 

