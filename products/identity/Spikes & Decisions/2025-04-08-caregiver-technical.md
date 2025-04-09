# Delegate Access - Caregivers

## Purpose
To identify the requirements for Caregivers delegate access as it pertains to the technical side. Evaluates the pros/cons of using the Veteran Delegate Tool (IAM Toolkit) versus building it a tool ourselves.

## Quick summary
TL/DR
The Identity team should build the delegation tool ourselves rather than relying on IAM’s Veteran Delegation Tool. We should utilize MPI as the single source of truth for delegation by using PersonTypes or PersonTypes with subtypes to allow future extensibility.

## Technical analysis
### Veteran Delegation Tool (also known as the AMS)
The Veteran Delegation Tool is an IAM tool that allows someone a Veteran trusts to view their VA data (usually through applications like My HealtheVet).
The tool guides a user to fill out an Authorization form.

**Pros**
- It is already built and integrated into Master Person Index (MPI)
- Supports DoD and VA PIV cards for authentication
- Emails contain time limits on invitations and accept/decline actions
  - Could have better UX hierarchy
- It was a Pilot program and could have case studies or UX interviews associated with it

**Cons**
- Does not follow standardized VA Design System
  - This could lead to a confusing experience for the Veterans and Delegates
  - See example of Progress Bar
- Uses slower authentication broker (aka SAML-based)
- You have to search for a user already in MPI (VA Records)
  - Note: You can select yourself as a delegate
- It displays the filled form 10-1047A and has an option to view PDF through a screenreader
  - This does not follow VA Forms patterns
- Double-login required to sign form
- Email doesn’t specify who you sent the invitation
  - Could be bad UX on forcing a user to sign in to remember who they appointed as their Caregiver
- It is technically a paused Pilot program which means its not currently being used
  - There are a lot of unknowns - issues, bugs, hosting, budget

### Questions / More information required
- Is VA Form 10-10147A (Nov 2018) still valid? 10147B?
  - Is there a superseding form?
  - Does 10-5345 come into play here?
    - (Request for and authorization to release health information) 
  - Does 21-0845 come into play here?
    - Authorization to Disclose Personal Information to a Third Party
- We don’t have insights to issues or bugs with the current system
- We don’t know budget or hosting
- Where does the VHA Form 10147A go after VDT sends it?
  - VHA Delegation Administrator? Who is this? Where is this?

## Build-Our-Own

**Pros**
- We could roll this into a new application on VA.gov
  - Better UX and consistency in VA’s promise of saying its the “one place for all of VA things”
- We could allow more extensibility in future iterations to allow more than VA Online Health Representatives (Caregivers)
- Gathering explicit user requirements from the perspective of Veterans, Caregivers, and VA Staff could allow us the opportunity to build something helpful

**Cons**
- Would require more time to fully build out the system
- Targeting 3 user personas/groups at the time could be difficult
- We would need to redesign emails hierarchy to make important information at the forefront for users
  - This would probably require more
- Could get more complex as more requirements come into play
- Manual processes would still be there
- Requires DoD and PIV card authentication support

### Questions / More information required
- Do we need to leverage VA Notify or the MVI.System@va.gov to send emails?
- Where do we host this thing?
  - On VA.gov or a separate tool?
  - Probably need a spike ticket for where this should live
- MPI question: What’s the difference between these PersonTypes: Associated Individual and Guardian?
  - Can these people be caregivers?
  - Validate if and where the subtypes are in MPI? Example: Beneficiary => “Compensation and Pension”

## Recommendations
- Either
  - We create a new “Caregiver” mapping to PersonType in MPI OR
  - We use the **"Guardian"** or **"Associated Individual"** PersonTypes
    - Create a new “Caregiver” subtype

More questions / miscellaneous information
- Caregivers - 38 CFR - 17.32 - VA Online Health Delegate
- Considered a Surrogate sub-type of Delegate
- Look into form VA 10-0137 to appoint a durable Power of Attorney for Health Care (DPAHC)
- Authorize disclosure of health information using 10-5345, Request for and Authorization to Release Health Information
- Full vs limited data access
  - What does this mean?
- Audit reports
  - Research P2Sentinel (Audit logs for Cerner and My VA Health)
  - CPRS - Computer Patient Record System (VistA)
    - Monitoring via Splunk
    - Allows clinicians to enter, review, and update all order-related information connected a patient.
- Does a user need to be entered into VES (VHA Enrollment System)?
- Is a VA Online Health Delegate the same as a Caregiver?

