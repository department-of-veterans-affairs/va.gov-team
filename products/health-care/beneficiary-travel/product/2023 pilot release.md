# Travel Pay + PCI Release plan 

## Theory we are testing

As a Veteran seeking care at a VA facility, I can submit a simple Beneficiary Travel claim (mileage only, no other receipts, traveled by personal vehicle from home address, 1 appointment) during the digital check in process. 

## Prep work 

- [x] feature toggle and facility restriction is in place
- [ ] Analytics are in place 
- [ ] Colab Cycle has passed 
- [ ] Coordination with Facility is complete
- [ ] Getting Travel Office on board
- [ ] Go/no-go decision made on ______

## Production rollout

**How will you make the product available in production while limiting the number of users who can find/access it**

We have a feature toggle and the ability to restrict to Veterans only at a facility


### Define the Rollback process

We will roll back if 

#### 1) Error rates are high

**Condition**: If there are >5% (adjustable) error rate of submission, then we will disable the feature via feature toggle 

**Where are the numbers located**: [Datadog_link]

**Who is watching** Mark Dewey + PCI team 

**path to reenable** Dev team will Address the Error and deploy a solution


#### 2) Travel office gets overloaded with manual claims

**Condition**: IF the number of claims in the manual process overwhelms the travel office

**Where are the numbers located**: See KPI 3 & 4

**Who is watching** Mark Dewey + Travel Pay Office

**path to reenable** Mark Dewey will work with the various teams to lead a retro to identity the issues and create a solution. 


### Questions to answer after each Phase

- Is this providing value to the Veteran?
- What is the Veterans response to this? (VSignals, on premise feedback)? 
- What is the Clinicians response to this? (VSignals, on premise feedback)? 
- How is this affecting the Travel office workflow?
- What minor tweaks can be made before rolling this out to more Veterans?
- What new metrics arouse that we care about? 

### Phase Staged Rollout 

#### Phase: First Facility  - Wilkes Barre

**Desired date range** 

Mid-Late June 2023

**What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**

> PCI check numbers are not negatively affected

- **CURRENT --** 693 for the week of 5/11-5/17
- **GOAL --** No significant drop in [CURRENT_WB_CHECK_IN_NUMBERS]
- **Key Numbers to look at** 
  - Total Check Ins
  - Successful Total Check Ins
  - Dropped Total Check Ins  
- **Where to find that information**
  - OCTO Health team
  - Python script

> Veterans successfully send claims during check ins;

- **CURRENT --** None
- **GOAL --** Any
- **Key Numbers to look at** 
  - Total Check Ins 
  - Number of Veterans show the Travel Pay screen 
  - Number of Claims that get a 200 from the BTSSS API
  - Number of Claims that get a Non-200 from BTSSS API
- **Where to find that information**
  - PCI team
  - TODO: datadog link/Google Analytics
 
> Increase usage of BTSSS system claims from X to Y
 *NUMBERS TAKEN ON 5/16*
- **CURRENT --** 179 for 5/15
- **GOAL --** greater than [CURRENT_CLAIMS_PER_DAY_AT_WB]
- **Key Numbers to look at** 
  - [CURRENT_CLAIMS_PER_DAY_AT_WB]
- **Where to find that information**
  - BTSSS team 
  - https://app.powerbigov.us/groups/me/apps/04fc3e0c-7f65-45ed-97cd-7a4b2b189b28/reports/428c89eb-7d97-45ca-aa21-94f21c1105be/ReportSection?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf

> Back office for Travel pay is not flooded with claims

- **CURRENT --** [CLAIMS_THAT_ARE_MANUALLY_REVIEWED]
- **GOAL --** The ratio of [CURRENT_CLAIMS_PER_DAY_AT_WB]:[CLAIMS_THAT_ARE_MANUALLY_REVIEWED]:[CLAIM_REVIEW_TIME](186:39:8 days ) stays roughly the same
- **Key Numbers to look at**
    - [CURRENT_CLAIMS_PER_DAY_AT_WB] :186
    - [CLAIMS_THAT_ARE_MANUALLY_REVIEWED]:39
    - [CLAIM_REVIEW_TIME]: 8 days, Avg days to claim paid
- **Where to find that information**
  - BTSSS Team
  - https://app.powerbigov.us/groups/me/apps/04fc3e0c-7f65-45ed-97cd-7a4b2b189b28/reports/896a1f0d-5486-49eb-b02b-864ceb47ad0a/ReportSection?ctid=e95f1b23-abaf-45ee-821d-b7ab251ab3bf

**To move to the next phase** 

- All four goals have been met and sustained for 3 weeks
- Buy in from 
  - OCTO
  - Travel Office
  - Veteran?

#### Phase: VISN 04 roll out

**Desired date range** 

3-4 weeks after successful rollout to Wilkes Barre

**What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**

Same as First Facility


**To move to the next phase** 

- All four goals have been met and sustained for 3 weeks
- Buy in from 
  - OCTO
  - Travel Office
  - Veteran?

#### Phase: VISN 06 roll out

**Desired date range** 

3-4 weeks after successful rollout to Wilkes Barre

**What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**

Same as First Facility


**To move to the next phase** 

- All four goals have been met and sustained for 3 weeks
- Buy in from 
  - OCTO
  - Travel Office
  - Veteran?

#### Phase: Iterative release 

> Phase goal

Rollout to next biggest Veteran market with solid utilization, goal is 25% of digital check ins give the option for facilities; Working with stakeholders to determine where/what that looks likex

**Desired date range** 

3-4 weeks after successful rollout to Wilkes Barre

**To move to the next 25%** 

- All four goals have been met and sustained for 3 weeks
- Buy in from 
  - OCTO
  - Travel Office
  - Veteran?
**Next phases are to iterate to +25% more until we reach 100%**



--- 
#### file history

- v1.0.0 - initial draft
