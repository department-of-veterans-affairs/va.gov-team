# Travel Pay + PCI Release plan 

## Theory we are testing

As a Veteran seeking care at a VA facility, I can submit a simple Beneficiary Travel claim (mileage only, no other receipts, traveled by personal vehicle from home address, 1 appointment) during the digital check in process. 

## Prep work 

- [x] feature toggle and facility restriction is in place
- [x] Analytics are in place 
- [x] Colab Cycle has passed 
- [x] Coordination with Facility is complete
- [x] Getting Travel Office on board
- [x] Go/no-go decision made on 6/15/2023

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
- What new metrics arise that we care about? 


#### Phase 0: First Facility  - Wilkes Barre

**Desired date range** 

06/26/2023 - 07/31/20212

**What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?:**

> PCI check numbers are not negatively affected

**GOAL --** ✅ No significant drop in usage, we saw usage **slight** increase

> Veterans successfully send claims during check ins

**GOAL --** ✅ Total of ~210 claims created during the pilot, ~2% of all travel claims created at WB
![total pilot claims](./assets/grand%20btsss%20total.png)


> Increase usage of BTSSS system claims from X to Y

**GOAL --** 🔵 June had ~5800, July had ~7300. This increase is good, but probably not because of the pilot
**GOAL**: ✅ 92% of claims created were approved 

> Back office for Travel pay is not flooded with claims

- **GOAL --** ➕ There were fewer paper claims, ➖ but every claim was sent into manual review  

> Claims are paid faster 

**GOAL --** ✅ from June (14.4 days), claims were paid in ~12 days


**To move to the next phase** 

- ✅ All metrics are happy enough
- Buy in from 
  - ✅ OCTO 
  - Travel Office
  - ✅ Veteran


#### Phase 1: VISN 0? roll out

**Desired date range** 

Go live mid September 2023 + 8 weeeks

**To go live** 

- [ ] Identify training needs for the Travel Clerks and MSAs on the front line
- [ ] Coordindate with Travel Office on preferred VISN (6, 8, or 15) 
  - proposed Criteria
      PCI Utilization - % of Check ins using PCI
      BTSSS Utilization - Number of Claims created in BTSSS
      Travel Pay process maturity (staff turnover rate, vacancies, etc) - ?????
      Staff willingness to participate - ????
- [ ] Update PCI to add the new VISN
- [ ] Sign off from 
  - [ ] OCTO
  - [ ] BTSSS API Team
  - [ ] IVC
  - [ ] VTP 
  - [ ] VISN XX Travel Office


## Phase 2: More VISNs 

> GOAL: Roll out to a total of 3 VISNS

**Desired date range** 

Go live Jan 2024+ 4 weeks

**To go live** 

- [ ] Identify training needs for the Travel Clerks and MSAs on the front line
- [ ] Idenity any technical or design updates needed
  -  [ ] ???
  -  [ ] ???
  -  [ ] ???
  -  [ ] ???
- [ ] Update PCI to add the new VISN
- [ ] Sign off from 
  - [ ] OCTO
  - [ ] BTSSS API Team
  - [ ] PCI
  - [ ] IVC
  - [ ] VTP 
  - [ ] VISN XX Travel Offices


#### Phase 2: Nationwide

**Desired date range** 
+6 weeks after Phase 1, early Nov timeframe

**Where** 
The other two VISNs

#### Phase 3: Nationwide rollout

**Desired date range** 
start Mid January 2024

**Where** 
Add a new VISN every 2 weeks until we are nationwide



#### file history

- v2.0.0 - After Pilot update
- v1.0.0 - initial draft
