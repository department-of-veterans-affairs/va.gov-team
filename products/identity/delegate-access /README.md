# Initiative outline: Delegate access MVP

**Last Updated: June 10, 2025 -- Added questions for policy/privacy**
     
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

Prior to the My HealtheVet user ID and password sign-in transition, many caregivers would use their Veterans' MHV user ID and password to sign in and manage their health care. However, now that the MHV user ID and password has gone away, people who care for incapacitated individuals have lost access, as ID.me and Login.gov require that a person verify as themselves, and verifying on behalf of someone else is not allowed. 

In April, the OCTO Login and Identity team did some user research on caregivers to make sure that they do indeed need and expect online delegate access. Many folks were able to verify a Login.gov or ID.me credential for their Veteran and use that even if they technically aren't supposed to, and those who were not able to verify a modern credential did indeed lose access. When we initially talked to privacy/policy folks about this, they made it seem virtually impossible to help the latter group, and it seemed like the only path forward was through explicit consent. However, recent conversations with privacy/policy have been more fruitful, and we are hopeful we may be able to draw from the "analog" processes for tracking court-appointed guardians/health care POAs for people who are incapacitated.

Recently, the OCC team has pointed to the fact that MyChart and other digital tools support online delegate access. While this is true, it's becoming clear that the technology is only able to support this functionality if a given hospital system has infrastructure in place to support delegate access both for people who are capable of giving explicit consent and for people who are incapacitated and need a legal guardian or health care POA. Going forward, it seems that the first step of this work is to figure out how VHA can support the infrastructure needed to track who is someone's health care POA or guardian in a way that is consumable by technology to make online delegate access possible.

### My HealtheVet delegate solution

In 2021, the My HealtheVet team worked with the IAM team to launch a delegate solution for the My HealtheVet website. IAM built a tool that supported delegate designation. This tool sent a consent form to a Veteran to designate a delegate, and then tied that Veteran's information to that of their delegate. The tool could also revoke delegate access. When people who'd been granted delegate access signed into My HealtheVet, they would see an option to view My HealtheVet as themselves or as the Veteran for whom they were a delegate.

Despite being fully built out, My HealtheVet never fully utilized delegate access outside of a small group of internal staff. This functionality was never launched to the broader Veteran/caregiver population.

### Current status

June 2025: We've completed caregiver research and initial discussions with policy/privacy. In order for the VA.gov frontend to support online delegate access, we need VHA to have both a process and technology infrastructure that supports updated and consummable data on who has a valid health care POA or guardian and if these designations are ever revoked or deemed inactive (eg. a Veteran is temporarily incapactitated).

## User Problem Statement

- As a delegate, I need to manage a(nother) Veteran's business with VA on their behalf.
- As a person who interacts with VA, I need an ID.me or Login.gov account to manage my VA business online.

## Business goals

- Validate need for delegate access to VA.gov.
- Support delegates and caregivers in conducting business with VA on behalf of another person, whether they would like to conduct that business online, over the phone, or in person.
- Abide by all privacy and security laws and protocols required to protect people's information.
- Create a delegate infrastructure that is maintainable and scalable.
- Avoid an overly complex matrix of permissions.

## Current questions

### Health care POA

1. What is a health care POA, and what is this person allowed to do?

- The document is the DPOA; person is the health care agent. This person is allowed to make health care decision for the Veteran when they lose decision making capacity. Decision making capaccity is assesed on a decision-dependent.
- Dr Erickson: In her state, DPOA can act on behalf of the Veteran all the time; regardless of decision making capacity.
- VA advanced directive guides assessment of specific decisions; if there is a state-level advance directive that allows blanket decision making capacity, VA is still confirming with a Veteran what their preferences are with the level of decision making power for the Veteran. This preserves Veteran autonomy.
- DPOA is for decision making care; this does not mean they have access to medical records. **The DPOA needs to state that they should have access to medical records**. We need to confirm whether the DPOA form for VA has access to medical records. **People do not get carte blanche access to anything**. Staff has to confirm exactly what privileges are granted to the DPOA based on the health agents' forms.
- It is important to note that the medical record is protected in general, but there are certain medical conditions that are protected beyond general HIPAA guidelines.
- There are additional statutes we need to follow in government that do not apply to the private sector.

2. How does a Veteran designate a health care POA?



5. Can someone have multiple health care POAs?
6. How does someone prove to VA they are a health care POA?
7. Who at VA validates that someone is a health care POA?
8. Where in VA is the designation of health care POA tracked?
9. Under what circumstances does a health care POA become responsible for acting on behalf of a Veteran? And when this occurs, how is this communicated to medical staff?
10. Under what circumstances does someone acting as a health care POA no longer need to make medical decisions for a Veteran? And when this occurs, how is this communicated to medical staff?
11. To the best of your knowledge, are these processes relatively standard across facilities? Or is there little standardization?
12. To the best of your knowledge, are there any notable variations by state with regards to the above questions?

- State forms and privileges for DPOAs can vary widely and do not necessarily grant access to medical records.

### Court-appointed guardian

1. What is a court-appointed guardian, and what is this person allowed to do?
2. How does someone become a court-appointed guardian? Under what circumstances does this occur?
3. Can someone have multiple court-appointed guardians?
4. How does someone prove to VA they are a court-appointed guardian?
5. Who at VA validates that someone is a court-appointed guardian?
6. Where in VA is the designation of court-appointed guardian tracked?
7. Under what circumstances does a court-appointed guardian become responsible for acting on behalf of a Veteran? And when this occurs, how is this communicated to medical staff?
8. Are there any circumstances in which a court-appointed guardianship is revoked? If so, what are they, and how is this communicated to medical staff?
9. To the best of your knowledge, are these processes relatively standard across facilities? Or is there little standardization?
10. To the best of your knowledge, are there any notable variations by state with regards to the above questions?

## Timeline

- August 2024: MHV coordinators have been raising this problem repeatedly, and it is clear that retiring the MHV credential without considering how to support POAs would cause this group to not be able to manage their veterans' benefits.
- September and October 2024: Oddball team conducted discovery and connected the guardian use case to the production user test case; IAM demo'd the delegate tool they built to OCTO and MHV.
- November 2024: OCC seems onboard with extending the MHV username and password for guardians, giving us a short-term path to support these users before we have proper delegate access.
- March 2025: Discovery resumes; Activity log work.
- April 2025: Discovery interviews with caregivers.
- June 2025: Regrouped for a second time with privacy/policy and made progress talking about the "analog" process for tracking active health care POAs and court-appointed guardians.

## Backend

(Add background backend documentation and links to other relevant documentation)

## Frontend

(Add background frontend documentation and links to other relevant documentation)

## Design and UX

- [Delegate access research folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/delegate-access%20/Research)
