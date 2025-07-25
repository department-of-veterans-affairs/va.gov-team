### !! IN PROGRESS !! 
# Phased rollout

## Helpful Links

- Feature flipper: [`cst_claim_letters_use_lighthouse_api_provider`](https://staging-api.va.gov/flipper/features/cst_claim_letters_use_lighthouse_api_provider)
- DataDog Dashboard: [Benefits - Management Tools -  Claim Letters List and Download](https://vagov.ddog-gov.com/dashboard/zs5-erv-7fb?fromUser=false&refresh_mode=sliding&from_ts=1753386276650&to_ts=1753389876650&live=true)

## Phase I: Canary (1%)
### Planning: 
Desired date range or test duration: 7/28-8/01 2025

Actual date range of test duration: 

Desired number of users: 500  

How will you make the product available in production while limiting the number of users who can find/access it: feature toggle  
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  

#### DataDog:

> See "Helpful Links" section above for the dashboard!
     
- Index error rate: < 1%
- Download error rate: < 8.0%
- Call center complaints: 0

### Results:  

TBD

## Phase II: 25% - 100%
### Planning 
Desired date range or test duration: TBD

Desired number of users: 600, 1000, 1400
- In this phase we will expand the release at increments of 25%, allowing at least one full business day to gather the necessary data to ensure the information coming through to end users matches expected behavior.

What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
#### Data Dog

> See "Helpful Links" section above for the dashboard!

- Index error rate: < 1%
- Download error rate: < 8.0%

### Anticipated timeline

- [] **2025/08/04** - Lighthouse team plans to deploy required change to production
- [] **2025/08/07** - BMT1 to increase to 25%; monitor DataDog as described above
- [] **2025/08/08** - BMT1 to increase to 50%; continue to monitor DataDog
- [] **2025/08/09** - BMT1 to increase to 75%; continue to monitor DataDog
- [] **2025/08/12** - BMT1 to increase to 100%; continue to monitor DataDog through the remainder of the week

### Results:

TBD
