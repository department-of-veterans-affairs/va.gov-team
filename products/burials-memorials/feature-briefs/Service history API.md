
# Service history API for Burial (21P-530EZ), Ch 36 PCPG (27-8832), and COE (26-1880)

## Background

The burial 530EZ form requires users to upload a copy of their DD214 Veteran Service Record document. Matt Dingee mentioned that there is an API that can import DD214 information directly into forms. The Chapter 33 Post 9/11 GI Bill form has successfully leveraged this API to pull in history into their form and then prompt the Veteran to review/confirm it. This functionality does require that the Veteran logs into their VA.gov account, so we'll need to consider how to handle the specific use cases associated with the burial form.

Other impacted forms: Ch 36 PCPG (27-8832), and COE (26-1880) 

Associated tickets: [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092) and [#81430](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/1?sliceBy%5BcolumnId%5D=Assignees&sliceBy%5Bvalue%5D=fiorella-io&pane=issue&itemId=62886109)


## Problem or Opportunity
For Burial, Ch 36 PCPG, and COE, the claimants have to manually enter the Veteran/service member's military history, except (in some cases) Burial as mentioned above. The Burial form can upload a DD214 and skip manually entering the deceased Veteran's information. 

We need to determine the best approach for pre-filling a Veteran's Service History through the Service History API to reduce the time it takes to complete each form. 
We've also heard through other research efforts Veterans complaining why they need to add this information when VA should have this information. 

## Proposed Solution

Learn what information resides in Vet's API and the minimum data required to find a Veteran/service member's military history. Then prefill all information, when military information is found. 

## In of Scope


  
## Out of Scope



## Success
- All online forms prefill the Veteran/service member's military history
  
## Risks
- Non-Veteran/service member error. Pulling the wrong Veteran's information
- Fraud. Using a non-veteran/service member's military history to claim benefits

## Plan

The new paper form is estimated to be released around the end of June, but this timeline could change. We want to be ready to launch our updated online version shortly thereafter.

Discovery 
- ✅ Identify information stored on Vet's API [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092)
- Learn how the Vet's API process works (pair with engineered) and create flow on how to handle the Vet's API for each form
- Learn and create a flow to understand what happens back-end and after a claim is submitted (SME session)

Design

- Draft low-fidelity designs, reviewing with OCTO and VBA stakeholders to answer questions along the way
- Create high-fidelity designs in Figma and coordinate with FE engineers on the implementation
- CAIA review and Collab Cycle

Research


## Guiding Principles

- Aim to reduce the amount of information entered by a claimant
- Aim to prefill as much information as possible

