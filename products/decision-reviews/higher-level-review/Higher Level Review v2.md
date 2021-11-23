# Higher Level Review v2

## Communications
- GitHub Label: [hlr](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a ([#vsa-benefits-memorials](https://dsva.slack.com/channels/vsa-benefits-memorials))
- Product POCs: Matt Self and Ronnie Henry
- va.gov link: https://www.va.gov/decision-reviews/higher-level-review/
- Physical form: https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf
- Stakeholders: AMO (Jane Chi jane.chi1@va.gov, Lauren Sylvia Lauren.Sylvia@va.gov), Lighthouse (Kelly Lein Kelly.Lein@va.gov, Premal Shaw Premal.Shah@va.gov) and VBA (Paul Shute Paul.Shute@va.gov)

## The Problem
The Higher Level Review form has been updated. We need to update the MVP with a new iteration to address backend and frontend updates. 
![Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/Appeals_Process_Higher_Level_Review_Flowchart-1.png)

### Program Requirements
If you disagree with VA’s decision, you can request to have a senior reviewer take a new look at your case. The reviewer will determine whether the decision can be changed based on a difference of opinion or an error.

1. Can I request a Higher-Level Review?
  - You can request a Higher-Level Review of an initial claim or Supplemental Claim decision. You have one year from the date on your decision letter to request a Higher-Level Review. 
  - This option isn’t available after a previous Higher-Level Review or Board Appeal on the same claim. It’s also not available if you have a contested claim (this is rare).
2. Note:
  - You can’t submit any evidence.
  - You and/or your representative can speak with the reviewer on the phone. You can tell them why you think the decision should be changed and identify errors. 

### History
This is the second iteration of the HLR form.


### User Goals
1. Apply on VA.gov without leaving my home or mailing anything in.
2. Quicker decision time.
3. Clear process for getting a decision

### Business Goals
1. Reduce the number of errors in submissions.
2. Reduce the number of paper forms.
3. Take advantage of the Claims and Appeals status tool.

## Assumptions
1. Updated flow but based on existing design and general flow of VA forms.
2. Similar look and feel to 526.
3. AMO will drive information such as required fields, etc.
4. LightHouse owns the PDF generation for the submission.
5. We will not be doing automated submission, the PDF will be the primary submission vehicle.

## Questions
See research:
https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/higher-level-review/research

## Iteration 2 Requirements
#### In Scope 
The following pages are being built out.  

- Add v2 feature flag & migration code
- Add ‘I am Homeless’ flag (required)
- Remove Same Office selection
    - Update Informal Conference fields
        - Change Rep Name format
        - Explicitly take in Rep phone# and email
        - Change time window selection
 - Add SOC/SSOC Date field per Issue (only if opting in to AMA) - this will likely be tied to the new Legacy Issues endpoint Lighthouse will build.
 - Start sending in Veteran Contact Info
 - Support write-in Issues - similar to NOD
 - Hook up FE to API

#### Out of Scope
- 

## Value Propositions
Service members being able to apply for their first VA benefits on VA.gov versus eBenefits will improve their overall experience and likelyhood of filing for these benefits.

## OKRs and KPIs
## KPIs
- Number of HLR submissions (input KPI)
- Time to HLR decision (input KPI)
- Is there a higher ratio of accepted HLR claims than before (input KPI for part of the ratio)
- % of "rejected" HLR claims (input KPI)

### Baseline KPIs
- HLR Submissions: Total HLR EPs established FY 2020 through July. Average: 7k a month
- HLR ADC: Monthly and FYTD average days pending, through July. 
-

Details Here: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/higher-level-review/metrics/HLR_FY2020.xlsx
--- 

## Go-to-market Strategy
1. Banner on eBenefits
2. Ads in Miltary Times Magazine
3. TAP

## Launch Date
- *Target Launch Date*
  - November for UAT
  - Early December for Launch
  - 
- *Actual Launch Date*
  - 
- *What date will you evaluate impact after launch?*
  - One month after launch (although we will be looking at data during)

---
## Results and Recommendations
### Results
- TBD after launch

### Recommendations
- TBD after launch

# Implementation Info

## Status
1. Iteration 2 design completed.
2. Front-end implementation complete.
3. Back-end complete 



## Technical Decisions/Discovery

## Product Decisions



## Team

- VA Digital Strategist(s): Matt Self
- Product Manager: Ronnie Henry
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers: Robin Garrison, Michel McDonald, Csaba Németh

## Incident Response
- Primary POCs (Ronnie Henry, Matt Self)
- Engineering POCs (Michel McDonald, Robin Garrison)
- Lighthouse for Downstream API POCs (Kelly Lein, Pramal Shah)
- Dashboards:
  - Production: http://grafana.vfs.va.gov/d/qCRjZjDMk/hlr-higher-level-review?orgId=1&var-data_source=Prometheus%20(Production)
  - Staging: http://grafana.vfs.va.gov/d/qCRjZjDMk/hlr-higher-level-review?orgId=1&var-data_source=Prometheus%20(Staging)
   
## Screenshots

### Before
N/A

### After
