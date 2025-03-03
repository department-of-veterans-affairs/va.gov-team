# Phased rollout of back-end tables
## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration: 3/3-3/4 2025 
Actual date range of test duration:  

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
#### DataDog:
- Failures to write to table: 0
- Successful table writes: any

### Results:  

## Phase II: 25% - 100%
### Planning 
Desired date range or test duration: 3/4-2-7 2025  
Desired number of users:1,000 - 10,000
- In this phase we will expand the release at increments of 25%, allowing at least one full bnusiness day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

#### DataDog:
- Failure to write to table: 0
- Successful table writes: scale proportionally with rollout increments

# Phased rollout of document service migration
## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration: 3/10 2025
Actual date range of test duration: 

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

#### DataDog:
     
- Failure to poll: 0
- Successful polling: > 0
- Failure to email: 0
- Successful email: > 0

### Results:  


## Phase II: 25% - 100%
### Planning 
Desired date range or test duration: 3/11/24 - 3/25/24  
Desired number of users: 600, 1000, 1400
- In this phase we will expand the release at increments of 25%, allowing at least one full bnusiness day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
#### Data Dog

- Failure to poll: < 1% 
- Successful polling: 99%
- Failure to email: < 1%
- Successful email: 99%
