# Questions and Hypotheses

Originally part of the [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/delegate-access%20#readme).

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
