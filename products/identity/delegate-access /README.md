# Initiative outline: Delegate access MVP

**Last Updated: April 22, 2025 -- Added legal questions**
     
## POCs
**Slack channel**: [#identity](https://dsva.slack.com/channels/identity); [#sign-in-experience](https://dsva.slack.com/channels/sign-in-experience)

|**Team member**|**Role**|
|----------------|---------------|
|Samara Strauss | OCTO Product Lead 
|Tom Black | OCTO Engineering Lead 
|Joelle Wells | Contractor Product Manager
|Lainey Trahan | Contractor Product Manager
|Joe Niquette | Contractor Engineering Lead
  
## Overview

VA recently retired its use of the My HealtheVet user ID and password (March 2025), and plans to retire its use of DS Logon after 9/30/2025. As such, VA is requiring all people to create an ID.me or Login.gov account if they want to manage their VA health care and benefits online.

Both ID.me and Login.gov require that a person verify as themselves, and verifying on behalf of someone else is not allowed. As such, ID.me and Login.gov will not allow delegates to verify a credential for another person (ie. the veteran whom they care for), which means that delegates can not transition to ID.me or Login.gov as we are asking other users to do.

### My HealtheVet delegate solution

In 2021, the My HealtheVet team worked with the IAM team to launch a delegate solution for the My HealtheVet website. IAM built a tool that supported delegate designation. This tool sent a consent form to a Veteran to designate a delegate, and then tied that Veteran's information to that of their delegate. The tool could also revoke delegate access. When people who'd been granted delegate access signed into My HealtheVet, they would see an option to view My HealtheVet as themselves or as the Veteran for whom they were a delegate.

Despite being fully built out, My HealtheVet never fully utilized delegate access outside of a small group of internal staff. This functionality was never launched to the broader Veteran/caregiver population.

### Current need

The OCTO Login & Identity team has been tasked with validating a user need around online delegate access. If that need is validated, our team needs to determine the MVP use case and user needs for delegate access, determine the unique security concerns and constraints for providing delegate access on VA.gov, and build the infrastructure and end-user experience that will support delegate access on VA.gov.

## User Problem Statement

- As a delegate, I need to manage a(nother) Veteran's business with VA on their behalf.
- As a person who interacts with VA, I need an ID.me or Login.gov account to manage my VA business online.

## Business goals

- Determine need for delegate access to VA.gov.
- Support delegates and caregivers in conducting business with VA on behalf of another person, whether they would like to conduct that business online, over the phone, or in person.
- Abide by all privacy and security laws and protocols required to protect people's information.
- Create a delegate infrastructure that is maintainable and scalable. Avoid an overly complex matrix of permissions.

## Questions and Hypotheses

### What we already know

Based on the [current delegate landscape at VA (on Sharepoint)](https://dvagov.sharepoint.com/:b:/r/sites/IdentityTeam/Shared%20Documents/Delegate%20access/VA%20Delegate%20Access%20Current%20State%20v1.12%20-%2020230314%20(1).pdf?csf=1&web=1&e=FsdeSH) we know that there are multiple types of delegate roles at VA, many of which already have digital systems they can log into to complete a task on behalf of a Veteran. Examples include: QuickSubmit, which allows VSOs and other people/organizations to submit a disability claim on behalf of a Veteran; Fiduciary Accountings Submission Tool (FAST), which allows fiducaries to do business with VA on behalf of Veteran.

The hole that seems to be missing is what we anecdotally heard during the MHV user ID and password sign-in transition -- caregivers that help manage a Veteran's care have no way to do business online with VA since they can't sign up for ID.me or Login.gov and get access to their Veteran's information.

### Questions

- There are many kinds of delegates at VA. Where should we focus our MVP?
- How do caregivers manage their Veterans' business at VA (Eg. online, over the phone, in-person, etc)? What do caregivers actually do on behalf of Veterans?
- What consent forms are needed to designate someone online delegate access?
- How can we revoke access?
- How do court-appointed guardians manage their Veterans' care now? What do they manage (eg. just health care; other benefits)?
- What are the consequences if we do not build delegate access?
- Can we leverage the existing IAM delegate tool? If not, what do we need to build?
- Where should the delegate designation and delegate <> Veteran relationship be stored?
- Where should delegate consent forms be stored?

### Process questions

- How do doctors/medical staff determine someone is a caregiver that they're allowed to speak to, especially if a Veteran is unable to speak for themselves?
- Once a doctor/medical staff has determined someone is a caregiver, what is that caregiver allowed to do (eg. refill prescriptions, talk to the medical team, etc)?
- How does the caregiver program determine that someone is legitimately a caregiver?

### Legal questions

- Is the only way to give a person HIPAA-compliant access to a(nother) Veteran's online health tools through explicit consent?
- Is there any way that is HIPAA-compliant to give court-appointed guardians or caregivers of people who are incapacitated access to a Veteran's online health tools?
- What is the legal difference between a caregiver being there in person at an appointment vs. online access? Is it proving someone is who they say they are? Something else?

### Hypotheses

- The primary delegate access use case will be for caregivers. This population only needs to manage health care-related tasks on behalf of the Veteran they care for.
- Caregivers do not actually need to see a(nother) Veteran's entire VA.gov account.

## Challenges and Risks

- VA has a ton of delegate types. Needing to account for multiple delegate types or access nuances on VA.gov could quickly become complex and unwieldy.
- VA.gov houses both health and benefit information. In order to give a person access to someone else's information, we need to make sure that proper consent is given and meets HIPAA and other privacy laws.
- IAM has built a delegate tool, but IAM has a full roadmap and might not be able to develop and update that tool on the timeline we need them to.
- It is unclear whether we can legally give a caregiver access to their Veteran's information if that Veteran isn't able to provide informed consent.

## Timeline

- August 2024: MHV coordinators have been raising this problem repeatedly, and it is clear that retiring the MHV credential without considering how to support POAs would cause this group to not be able to manage their veterans' benefits.
- September and October 2024: Oddball team conducted discovery and connected the guardian use case to the production user test case; IAM demo'd the delegate tool they built to OCTO and MHV.
- November 2024: OCC seems onboard with extending the MHV username and password for guardians, giving us a short-term path to support these users before we have proper delegate access.
- March 2025: Discovery resumes; Activity log work
- April 2025: Discover interviews with caregivers

## Backend

(Add background backend documentation and links to other relevant documentation)

## Frontend

(Add background frontend documentation and links to other relevant documentation)

## Design and UX

(Add background design documentation and links to other relevant documentation, like Figma files, UX research, etc)
- [discovery interviews research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/delegate-access%20/Research/preliminary_caregiver_research_plan.md)
