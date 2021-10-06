# Stakeholder Enterprise Portal (SEP) design discovery
**VSA eBenefits Team | October 2021**

`Candy Clark, designer`

---

## Problem
When a Veteran, Service Member, or one of their dependents nees help filing a claim, they can choose to appoint a Veteran Service Organization (VSO), attorney, or claims agent to act on their behalf by filing VA Form 21-22 (to appoint an organization) or VA From 21-22a (to appoint an individual). While the Veteran has access to veteran-facing tools, like va.gov and eBenefits, there is no representive role within those systems that allows the appointed representative to view and act on Veteran information.

The Stakeholder Enterprise Portal is the tool that provides access for VSOs and accredited agents to act on behalf of Veterans and view pending representation requests. It has been described as "eBenefits for VSOs". However, many VSOs do not use SEP and prefer to send information from their proprietary case management systems to VA through Direct Mail.

#### Solution

VSOs and accredited representatives that do not use their own system need a way to view pending representation requests and perform actions on behalf of veterans they are representing. Needed functions include:
- Log in as a VSO
- View pending requests from veterans who sent their request for representation directly to VA through eBenefits, mail, fax, or in person submission
    - Accept pending representation request
    - Decline pending representation request and send an explanation message
- Perform operations on behalf of veterans
    - Start an application (example: 526)
    - Check on an application
    - Continue an application
    - Upload documents
- Search for a veteran assigned to the VSO
- Get a list of queued requests in progress
- Send partial applications to other members within their organization for review and/or approval (example: some VSOs do not allow county service officers to submit. The CSO must send to the NSO for review. NSO can approve and submit or return to CSO for edits.)

<!-- ### Business cases -->
<!-- 
### Business processes

Users can apply for a COE by submitting VA Form 26-1880 by mail. Online, users can log into eBenefits and electronically submit the form. Many eBenefits users will have a COE automatically generated for download. Some lenders can generate a COE via VA's Web LGY system. 

<details>
  <summary><strong>Current COE business process</strong> (Click to show diagram)</summary>
  
  ![How to request a Certificate of Eligibility (COE)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/research-design/COE_Process_Diagram_1.png)
</details>
-->

#### VA Form 21-22 and VA Form 21-22a

VA Form 21-22 is to choose an organization for representation. This is the majority of cases. The "paper" form is available [online](https://www.vba.va.gov/pubs/forms/vba-21-22-are.pdf) as a fillable PDF. The form is two pages with an additional two pages of instructions, recognized service organizations, and addresses. The form encourages users to apply electronically. The form has four sections:

- Section 1 -- Veteran's Information
- Section 1 -- Claimant's Information (if other than veteran)
- Section 3 -- Service Organization Information
- Section 4 -- Authorization Information
- Section 5 -- Signatures

VA Form 21-22a is to choose an individual for representation. This is less common, and typically after a veteran has reached an appeal. The "paper" form is available [online](https://www.vba.va.gov/pubs/forms/VBA-21-22a-ARE.pdf) as a fillable PDF. The form is two pages with an additional page of instruction and addresses. The form encourages users to apply electronically. The form has four sections:

- Section 1 -- Veteran's Information
- Section 1 -- Claimant's Information (if other than veteran)
- Section 3 -- Service Organization Information
- Section 4 -- Authorization Information
- Section 5 -- Signatures

While veterans can submit these forms directly to the VA without a representative signature, they are not valid until the representative has signed.

#### Documentation requirements
If a veteran has submitted a 21-22a, there must be a fee schedule agreement for the attorney on file as well.

## Users and Usage
There are approximately 6000 current users of SEP. These users include:
- Veteran Service Officers (as members of a Veteran Service Organization)
- VA Accredited Agents
- Private attorneys

Many VSOs send information directly to VBMS through direct upload, bypassing SEP.
<details>
  <summary><strong>Claims submitted through SEP versus VA.gov and eBenefits</strong> (Click to show diagram)</summary>
  
  ![insert image from desktop]
</details>


### Eligibility
<!--
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

### Use cases
There are several general use cases around Certificate of Eligibility:
- Qualified user with no VA loan history wants to apply for COE
- User (qualifications unknown) wants to apply for COE
- User wants to learn about COE elibgibility
- User wants to learn about COE process
- User want to check status of COE application
- User wants to review and download/print COE
- User needs to update COE information
-->

### User journey



## SEP features

[Screen caps of the exisitng SEP features]()

<!-- 
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
-->
#### Potential improvements

- 

## Next steps

#### Research
- [ ] Conduct discovery interviews focused on SEP functionality
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

- [SEP](https://www.sep.va.gov/sep/web/guest/sep)
- [VA Form 21-22 (Veteran tool)](https://www.vba.va.gov/pubs/forms/vba-21-22-are.pdf)
- [VA Form 21-22a (Veteran tool)](https://www.vba.va.gov/pubs/forms/VBA-21-22a-ARE.pdf)
- [Proposed Workflow for Search and Appoint Rep (Veteran tool)](https://www.sketch.com/s/6fcfb0c5-8c2d-4231-8b1b-c423e75bf5e2/a/dlG4Y22)
- [Wireframes for Search ans Appoint Rep (Veteran tool)](https://www.sketch.com/s/6fcfb0c5-8c2d-4231-8b1b-c423e75bf5e2/a/PGJ3ZlP)
- [Check your VA claim or appeal status](https://www.va.gov/claim-or-appeal-status/)
- [Certificate of Eligibility for Home Loan (eBenefits landing page)](https://www.ebenefits.va.gov/ebenefits/about/feature?feature=cert-of-eligibility-home-loan)

---
