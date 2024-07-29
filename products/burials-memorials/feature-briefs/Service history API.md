
# Prefill military history for Burial (21P-530EZ), Ch 36 PCPG (27-8832), and COE (26-1880)

## Background

We learned that an API can import service history information directly into forms. The Chapter 33 Post 9/11 GI Bill form ([VA form 22-1990](https://www.va.gov/education/apply-for-education-benefits/application/1990/introduction/)) and the VA health care
 form ([VA Form 10-10EZ](https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction))  have successfully leveraged connection to an API to pull history into their form and then prompt the Veteran to review/confirm it. This functionality requires that the veteran logs into their VA.gov account, so we'll need to consider how to handle the Burial benefits form and the Ch 36 PCPG form, where the veteran is not the claimant. 


**Impacted forms:** Burial benefits (21P-530EZ), (Ch 36 PCPG (27-8832), and COE (26-1880)
**Two available APIs with service history** are Vets API and Profile Service V3 API. The service history in both is the same. 

**Associated tickets:** [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092) and [#81430](https://github.com/orgs/department-of-veterans-affairs/projects/1237/views/1?sliceBy%5BcolumnId%5D=Assignees&sliceBy%5Bvalue%5D=fiorella-io&pane=issue&itemId=62886109)


## Problem
### Veterans or service members 
Claimants manually enter their service history by memory or using their DD214 form before submission– research from other teams.
Through other research efforts, we've also heard that Veterans have complained about why they need to add their service history when the VA should have it.

### Non-veterans or service members
Claimants manually enter the Veteran or service member’s service history before submission using the Veteran’s DD214. To skip service period questions, the claimant can upload the deceased Veteran’s DD214 for the Burial benefits form. 

### Unauthenticated experience

Claimants related to the Veteran,  beneficiaries, have power of attorney, are fiduciary, or an accredited representative cannot create an account on VA.gov, so they must always enter the Veteran’s information for the impacted forms.

Some Veterans may avoid creating an account and prefer to complete unauthenticated forms. 

## Opportunity
We must determine the best approach for pre-filling a Veteran's Service History through the Vet’s API or the Profile Service V3 API to reduce the time to complete each impacted form for authenticated and unauthenticated experiences. 


## Proposed Solution

Learn what information resides in Vet's API and the minimum data required to find a Veteran/service member's military history. Then prefill all information, when military information is found. 

## Outstanding questions
- How can we prevent fraud?
- How do processors verify legitimate connection to the Veteran? (pair with Burial VBA folks)


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

#### Discovery 
- ✅ Identify information stored on Vet's API [#68092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68092)
- Learn how the Vet's API process works (pair with the engineering team) and create flow on how to handle the Vet's API for each form
- Learn and create a flow to understand what happens back-end and after a claim is submitted (Burial SME session)
- Understand the power of attorney (POA) process
- Understand the fiduciary process
- Understand non-veteran accounts
- Learn from other teams who are prefilling service history and other information (10-10 and Ch 33 teams)

#### Design

- Draft low-fidelity designs, reviewing with OCTO and VBA stakeholders to answer questions along the way
- Create high-fidelity designs in Figma and coordinate with FE engineers on the implementation
- CAIA review and Collab Cycle

#### Research
- Burial SME interview to learn about how forms are processed
- Power of attorney (POA) SME interview
- Fiduciary SME interview
- Profile team interview to learn about non-veteran accounts
- 10-10 and ch 33 team interview to learn about their process of prefilling information in their form


## Guiding Principles

- Aim to reduce the amount of information entered by a claimant
- Aim to prefill as much information as possible

