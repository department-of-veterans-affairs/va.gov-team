# Phased rollout of back-end tables
## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration:  
Actual date range of test duration:  

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- DataDog:    


### Results:  


## Phase II: 25% - 100%
### Planning 
Desired date range or test duration:  
Desired number of users:
- In this phase we will expand the release at increments of 25%, allowing at least one full bnusiness day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- DataDog: ensure that all doc transactions are in fact for 5103 Letters. Note any discrepancies in metadata that would indicate the wrong letter typse are getting pulled into DDL
- DataDog: No increase in error rates directly caused by addition of this letter type

# Phased rollout of document service migration
## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration: 
Actual date range of test duration: 

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- DataDog:     


### Results:  


## Phase II: 25% - 100%
### Planning 
Desired date range or test duration: 3/11/24 - 3/25/24  
Desired number of users: 3000, 6000, 9000, 12,000
- In this phase we will expand the release at increments of 25%, allowing at least one full bnusiness day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- DataDog: ensure that all doc transactions are in fact for 5103 Letters. Note any discrepancies in metadata that would indicate the wrong letter typse are getting pulled into DDL
- DataDog: No increase in error rates directly caused by addition of this letter type
