# DBEX Document Upload Service Migration Release Plan

## Overview Checklist
- [ ] Phase I: Internal Testing and Review
    - [ ] Pre-release Testing
      - [X] Tools Access
      - [ ] Dashboard
      - [ ] Code Completion
      - [ ] Manual Testing
    - [ ] Review Cases
    - [ ] Canary
- [ ] Phase II: Staged Rollout 
    - [ ] Stage A: 0.5%
    - [ ] Stage B: 5%
    - [ ] Stage C: 10%
    - [ ] Stage D: 25%
    - [ ] Stage E: 50%
    - [ ] Stage F: Go live!
- [ ] Post-launch questions

## Phase I: Internal Testing and Review

### Pre-Release Testing
- [X] Tools Access
  - [X] Gain access to VBMS UAT (for accessing test user eFolders)
  - [X] Gain access to DataDog
  - [X] Gain access to Test Rail

- [ ] Complete [initial testing landscape spike](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70109)

- [ ] Dashboard
  - [ ] Complete Dashboard Design - staging and prod
  - [ ] Implement staging dashboard
  - [ ] Implement prod dashboard

- [ ] Code Completion
  - [ ] Backfill solution: SupportingEvidenceAttachment vs. LighthouseSupportingEvidenceAttachment
  - [ ] Code completion and approval
  - [ ] Staging sanity check: upload supporting evidence to confirm it works in staging currently
  - [ ] Code merged (after daily prod deploy)
  - [ ] Staging sanity check: upload supporting evidence

- [ ] Manual Testing
  - [ ] Identify suitable staging user to test with
  - [ ] Attempt to complete submission end to end
  - [ ] Document steps in Test Rail


### Review Cases
- [ ] TBD determine use cases we want to cover


### Canary
- [ ] Sync with VA re: anything special we need to do (believe we can cancel the claim immediatley after so it doesnt get processed)
- [ ] Identify users from this list we can use in prod as Canaray users

## Phase II - Staged Rollout (also known as unmoderated production testing)
### Metrics
How will you make the product available in production while limiting the number of users who can find/access it: [Flipper Dashboard](https://api.va.gov/flipper/features)
<br>
What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:  
- Monitor relative success rate of uploads to Lighthouse vs EVSS. 
- Links to dashboard(s) showing "success criteria" metrics: TBD

#### Rollback
- Rollback if any of the following is encountered
    

### Stage A: Monitoring phase 
#### Planning  
- Date Started: 
- ZH Tracking:
- Length of time: 
- Percentage of Users (and roughly how many users do you expect this to be): 5% 

#### Results:  

<br>

### Stage B: Moderate ramp up
#### Planning  
- Date Started: 
- ZH Tracking:
- Length of time: 
- Percentage of Users (and roughly how many users do you expect this to be): 5% 
#### Results:  

<br>


### Stage C: Another moderate ramp up
#### Planning
- Date Started:
- ZH Tracking:
- Length of time: 
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  

<br>


### Stage D: Final moderate ramp up
#### Planning
- Date Started:
- ZH Tracking:
- Length of time: 
- Percentage of Users (and roughly how many users do you expect this to be): 10% 
#### Results  


<br>


### Stage E: High traffic
#### Planning
- Date Started:
- ZH Tracking:
- Length of time: 1 week
- Percentage of Users (and roughly how many users do you expect this to be): 50% 
#### Results  

<br>


### Stage F: Go Live!
- Date Started: 
- Percentage of Users (and roughly how many users do you expect this to be): 100% 
#### Results  

<br>

## Post-launch Questions  

TBD
