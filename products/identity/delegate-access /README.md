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

[Discovery doc: Healthcare POA and Court-appointed guardians_Current VA processes](https://dvagov.sharepoint.com/:w:/s/IdentityTeam/EdnNB2cRRblEqOEjZQHLLPQBasBqTRKuDwWAmlqblnX9Fw?e=do1zEY)

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
