
# Service history API for Burial (21P-530EZ), Ch 36 PCPG (27-8832), and COE (26-1880)

## Background

The burial 530EZ form requires users to upload a copy of their DD214 Veteran Service Record document. Matt Dingee mentioned that there is an API that can import DD214 information directly into forms. The Chapter 33 Post 9/11 GI Bill form has successfully leveraged this API to pull in history into their form and then prompt the Veteran to review/confirm it. This functionality does require that the Veteran logs into their VA.gov account, so we'll need to consider how to handle the specific use cases associated with the burial form.

Other impacted forms: Ch 36 PCPG (27-8832), and COE (26-1880) 

Associated tickets: [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092) and [#81430](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/1?sliceBy%5BcolumnId%5D=Assignees&sliceBy%5Bvalue%5D=fiorella-io&pane=issue&itemId=62886109)


## Problem or Opportunity
For Burial, Ch 36 PCPG, and COE, the claimants have to manually enter the Veteran/service member's military history, except (in some cases) Burial as mentioned above. The Burial form can upload a DD214 and skip manually entering the deceased Veteran's information. 

We need to determine the best approach for pre-filling a Veteran's Service History through the Service History API to reduce the time it takes to complete each form. 

We've also heard through other research efforts that Veterans are complaining about why they need to add their military history when the VA should have it. 

## Proposed Solution

Learn what information resides in Vet's API and the minimum data required to find a Veteran/service member's military history. Then prefill all information, when military information is found. 

## Outstanding questions
- Can and should we save information to a Veteran's profile or back to Vet's API when they update their military history? How about when non-veteran/service members update it?
- What minimum key information do we need to know to search and find a Veteran's service history?
- What should we do if a non-veteran/service member enters a Veteran's identifying information to find we don't have any military history for that Veteran?
     - Would we ever not have a Veteran's or service member's military history?
     - For Ch 36, should we allow them to upload their DD214 (if they are discharged) and skip all Service history questions?
     - What other form can they upload if they are on active duty so that they get to skip some of the service history questions?
- How can we prevent fraud?
- How do processors verify legitimate connection to the Veteran? (pair with Burial VBA folks)
- Should we update Burial's list and loop pattern to the [latest multi-page pattern](https://design.va.gov/patterns/ask-users-for/multiple-responses#how-to-design-and-build---multi-page) in the Military history step?

## In of Scope
- Collaborate with OCTO and VBA stakeholders throughout the design process
- Collaborate with the Profile / Authenticated Experience team (if it's in-scope to update the military information to the Veteran/service member's profile)
- Review content changes with CAIA, including any changes needed to the benefits hub content related to the form change
- Review new designs with the Platform team through the Collaboration Cycle
- Implement updates to all 3 forms

  
## Out of Scope
- Update Vet's API information?
- 

## Success
- All non-disability online forms prefill the Veteran/service member's military history
  
## Risks
- Non-Veteran/service member error. Pulling the wrong Veteran's information
- Fraud. Using a non-veteran/service member's military history to claim benefits

## Plan

The new paper form is estimated to be released around the end of June, but this timeline could change. We want to be ready to launch our updated online version shortly thereafter.

Discovery 
- ✅ Identify information stored on Vet's API [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092)
- Learn how the Vet's API process works (pair with the engineering team) and create flow on how to handle the Vet's API for each form
- Learn and create a flow to understand what happens back-end and after a claim is submitted (Burial SME session)

Design

- Draft low-fidelity designs, reviewing with OCTO and VBA stakeholders to answer questions along the way
- Create high-fidelity designs in Figma and coordinate with FE engineers on the implementation
- CAIA review and Collab Cycle

Research
- Burial SME interview to learn about processing of forms


## Guiding Principles

- Aim to reduce the amount of information entered by a claimant
- Aim to prefill as much information as possible

