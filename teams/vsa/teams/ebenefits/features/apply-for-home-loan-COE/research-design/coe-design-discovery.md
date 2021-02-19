# Certificate of Eligibility (COE) design discovery
**VSA eBenefits Team | February 2021**

`James Adams, designer`

---

## Problem
A VA-issued Certificate of Eligibility (COE) is needed by Veterans, service members and surviving spouses looking to get a VA-backed home loan or Native American Direct Loan (NADL). There are service-based requirements for obtaining VA loans, and a COE confirms for lenders that an applicant qualifies for this benefit. Specific requirements depend on service dates and details.

Home loan applicants must apply for a COE to ensure they meet eligibility requirements.

#### Solution

Veterans, service members and surviving spouses need an easy, accessible way of automatically generating a COE. If a COE cannot be automatically generated, users need a simple form to submit an electronic 26-1880.

- Do not ask for information VA should have
- Minimize time in the form
- Surface form access quickly in searches
- Inform users of the steps, processing time, and next steps
- Give users multiple paths for follow-up
- Generate a COE automatically for users who immediately meet all requirements

<!-- ### Business cases -->

### Business processes

Users can apply for a COE by submitting VA Form 26-1880 by mail. Online, users can log into eBenefits and electronically submit the form. Many eBenefits users will have a COE automatically generated for download. Some lenders can generate a COE via VA's Web LGY system. 

<details>
  <summary><strong>Current COE business process</strong> (Click to show diagram)</summary>
  
  ![How to request a Certificate of Eligibility (COE)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/research-design/COE_Process_Diagram_1.png)
</details>

#### VA Form 26-1880

The "paper" form is available [online](https://www.vba.va.gov/pubs/forms/vba-26-1880-are.pdf) as a fillable PDF. The form is a single page with an additional two pages of instructions and addresses. The form encourages users to apply electronically using eBenefits. The form has four sections:

- Section 1 -- Applicant information
- Section 1 -- Applicant's military service info
- Section 3 -- Previous VA loans
- Section 4 -- Certification and signature

## Users

### Eligibility

There are differing requirements for getting a VA loan depending on the nature of an applicant's service. These are summarized below. Specific eligibility can be found on [VA.gov here.](https://www.va.gov/housing-assistance/home-loans/eligibility/)

**Veteran**
- 181 days of service during peacetime
- 90 days of service during war time
- Submit DD214 (Certificate of Release or Discharge)

**Service member**
- 181 days of service during peacetime
- 90 days of service during war time
- Submit statement of service signed by commander, adjutant, or personnel officer

**National Guard or Reserve member**

Depending on service details, there are various requirements. 
- 6 years of service in the Reserves or National Guard
- Submit NGB Form 22 (Report of Separation and Record of Service)
- Submit NGB Form 23 (Retirement Points Statement)
- Submit statement of service signed by commander, adjutant, or personnel officer
- Submit proof of character of service

**Surviving spouse**

Surviving spouses may also be eligible for a COE and VA home loans. [Details of eligibility are here.](https://www.va.gov/housing-assistance/home-loans/surviving-spouse/)

### Use cases
There are several general use cases around Certificate of Eligibility:
- Qualified user with no VA loan history wants to apply for COE
- User (qualifications unknown) wants to apply for COE
- User wants to learn about COE elibgibility
- User wants to learn about COE process
- User want to check status of COE application
- User wants to review and download/print COE
- User needs to update COE information

### User journey

Applying for (and receiving) A COE is part of the process for getting a VA direct or VA-backed home loan. More detail to follow.

## Certificate of Eligibility feature

#### eBenefits feature flow

<details>
  <summary><strong>eBenefits user flow diagram</strong> (Click to show diagram)</summary>
  
  ![Current eBenefits user flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/research-design/COE_Breakdown_1.png)
</details>

#### Proposed VA.gov feature flow

<details>
  <summary><strong>eBenefits user flow diagram</strong> (Click to show diagram)</summary>
  
  ![VA.gov use case flows](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/research-design/COE_Usecase_Workflows_1.png)
</details>

#### Suggested IA placement

<details>
  <summary><strong>eBenefits user flow diagram</strong> (Click to show diagram)</summary>
  
  ![VA.gov information architecture placement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/research-design/COE_VAgov_IA_Flows_1.png)
</details>

#### Potential improvements

- Move feature to VA.gov will improve overall form experience, and connect form to current content 
   - Outline of form process
   - List of required documentation
   - Confirmation screen with next steps
   - Connection with My VA and Claim Status Tool
- Target one-click COE authorization for qualified users
- Require LOA3 sign-in for form access; pre-fill personal, contact and service info if possible
- Connect to loan history service if possible
- Consolidate form if/then logic to present only relevant info fields/selection
- Provie inline document upload

## Next steps

#### Research
- [ ] Conduct discovery interviews
- [ ] Document/analyze discovery interview findings

#### Design
- [ ] Design initial screen mocks
- [ ] Create prototype
- [ ] Inplement UX/UI refinements

#### Testing
- [ ] Conduct usability testing
- [ ] Document/analyze usability findings
- [ ] Conduct UAT

## References

- [VA Form 26-1880 (PDF)](https://www.vba.va.gov/pubs/forms/vba-26-1880-are.pdf)
- [About VA Form 26-1880](https://www.va.gov/find-forms/about-form-26-1880/)
- [Eligibility requirements for VA home loan programs](https://www.va.gov/housing-assistance/home-loans/eligibility/)
- [How to apply for a VA home loan Certificate of Eligibility](https://www.va.gov/housing-assistance/home-loans/how-to-apply/)
- [VA home loan programs for surviving spouses](https://www.va.gov/housing-assistance/home-loans/surviving-spouse/)
- [Check your VA claim or appeal status](https://www.va.gov/claim-or-appeal-status/)
- [Certificate of Eligibility for Home Loan (eBenefits landing page)](https://www.ebenefits.va.gov/ebenefits/about/feature?feature=cert-of-eligibility-home-loan)

---
