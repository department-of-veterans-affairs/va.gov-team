

# Product brief: In-Person Proofing MVP



## **Problem statement**

VA has prioritized investment in adoption of Login.gov (as well as continuing support for id.me). While these credential providers offer a shared service, allowing access to VA and other government agencies via a single account, they have the following issues:

- They rely primarily on remote identity verification.  Many folks are uncomfortable, unfamiliar with online services.
- The number of controls required in NIST 800-63 when identity proofing remotely presents significant challenges.
    - Of the applicants that tried to submit documentation, only ~55% successfully completed the process.
    - Further, ~20% of applicants abandon the process without even attempting.
- In-person support is offered a backup, not a primary method of identity proofing.

Limited capacity, which can put dependencies on CSPs at risk.
While NIST guidance provides for in person proofing, it does not provide as much guidance compared to remote proofing. It provides the flexibility and puts the onus on the identity verifier to establish those processes. VA has more intimacy with Veterans and their community compared to CPSs that act as a shared service to  the entire US population. VA also has access to information that facilitates identity proofing for Veterans.
How might we leverage VA’s intimacy with Veterans to provide simple, secure, and privacy preserving in person verification (and support) for Veterans (and their community)?

**How might we leverage VA’s intimacy with Veterans to provide simple, secure, and privacy preserving in person verification (and support) for Veterans (and their community)?**


## **In Person Proofing**
During remote identity proofing, a computerized system acts as the system that attests the identity of the Veteran. Typically, the Veteran approaches this transaction as an unknown individual to the remote proofing process, leading the computerized system to have the Veteran go through the normative requirements of NIST 800-63.

In-person proofing presents opportunities (and challenges) that remote verification does not. During in-person proofing a person, acting as a trusted representative of VA (i.e. a trusted referee) asserts the identity of the Veteran. At times, a Veteran is an unknown individual to this trusted referee (such as in the case of MHV coordinators). As such, for the trusted referee to assert the Veteran’s identity, they ask the Veteran to go through the normative requirements of NIST 800-63 while providing in-person assistance through the process.

At other times, a Veteran is a well known individual to a trusted referee (clinician, case worker etc). This pre-existing relationship allows the trusted referee to assert the Veteran’s identity with a lighter weight process, while still maintaining the same level of identity assurance. What this lighter weight process is varies based on the nature of the pre-existing relationship between the trusted referee and the Veteran.

These two scenarios offer a perspective that allows the VA (and other federal agencies) to offer in-person proofing flows that provide a high level of identity assurance while reducing the friction for Veterans during identity verification.

This can easily expand to a large effort. How can VA approach in-person proofing with an initial iteration (MVP)

### **MVP of trusted referee administration**

During remote identity verification, the computer systems that assert that identity are heavily protected by security controls such as those enumerated in NIST 800-53. NIST 800-63C is a volume dedicated to secure federation of credentials. These controls are imperative in preserving the integrity of the system, and thus the assurance of identity.

If in-person proofing is to provide a similar level of identity assurance as remote identity verification; trusted referees must be protected by security controls analogous to those that protect its computer system counterparts. 
In other words, how might we:

- Ensure individuals acting as trusted referees are indeed trusted referees? (similar to ensuring authentication of a back-end system)
- Ensure trusted referees are following the prescribed processes to assert a Veteran’s identity? (similar to audit logs in computer systems?)
- Ensure a trusted referee is keeping up with latest certifications (similar to upgrades, patches in computer systems?)
- Ensure a trusted referee has not lost their authority, or left the VA? (similar to CAs in computer systems?)

So as part of the in-person proofing MVP, we will establish an MVP to administer trusted referees. This will provide the fundamental plumbing needed to support the first in-person proofing flow, but will grow to support additional flows for Veterans.

So how might we approach this initial trusted referee administration system?
- A trusted referee is a VA employee provisioned with basic access as a trusted referee (active, inactive).
- Confirmation this VA employee has an active (unrevoked) PIV. 

Applications that provide in person proofing flows will then be able to authenticate a trusted referee prior to allowing that individual to assert a Veteran’s identity.

<Placeholder - sequence diagram>

### **First flow - building on MHV coordinator in-person proofing**

Building off the current MHV coordinator in-person flow that steps a user up to an MHV premium account is the ideal candidate for a first flow because:
- MHV coordinators already  act as trusted referees for MHV Premium accounts.
- The MHV coordinator in-person flow roughly follows the normative guidance of 800-63 (resolution, validation, verification).

   While the current flow has some gaps, this first flow could address those gaps; thus solving a problem currently affecting the ability for Login.gov to inherit MHV premium credentials.

#### Resolution

Currently, MHV premium allows a coordinator to accept multiple forms of documentation. However, the coordinator is not required to validate enough documentation (i.e “evidence” per NIST 800-63) to be able to “resolve” to a unique identity.
For example, the Veteran can present a passport. Because VA is not an authoritative (or issuing) source of passports, name and date of birth cannot reliably resolve down to a unique individual. The MHV coordinator would need to request additional FAIR evidence that would allow resolution to a unique individual. While CSPs typically look for evidence that bears address, given VA’s intimacy with Veterans, are there medical records (prescriptions, disability rating) that the MHV coordinator can use to supplement a Passport to fulfill resolution.
Whatever process is pursued to achieve resolution, auditability of the trusted referees actions is key in preserving identity assurance.

#### Validation
Once resolved, ostensibly much of the Veteran’s identity information can be validated by ensuring those records exist in the MPI.
   
#### Verification
Verification that the Veteran is indeed the person on the identification presented can easily be performed by the MHV coordinator. Similar to resolution, auditability of this step is necessary.

#### Address confirmation

Note, while these steps are enumerated in this order in the document, they need not follow the same order. Address confirmation is a step that could be done earlier on. For example, if VA were to do outreach and send out notifications to addresses on file (mailing, phone) nudging Veterans to validate their identity next time they come in for an appointment, it could leverage those notifications to confirm address was correct.

Notionally, the interaction between the trusted referee (MHV coordinator) and Veteran would be:

- MHV coordinator (trusted referee) authenticates with PIV to validate they are authorized to attest for a Veteran.
- Application guiding MHV Coordinator through the flow launches
   - Veteran shows ID (and other evidence) to MHV coordinator. MHV coordinator validates the documents are authentic.
   - MHV coordinator verifies Veteran is same person on ID
   - MHV coordinator looks up Veteran’s record and confirms match with evidence
   - MHV coordinator attests identity for Veteran
   - Application keeps record / audit of interaction between MHV coordinator and Veteran.
<Placeholder - sequence diagram>
   
### Second flow - proofing with VHIC

With VA being an authoritative source for VHIC may be fast follow flow.
Note: VA is also an authoritative source for CAC, however the burden to support authenticating to the CAC via PIN and tracing the certificates back to the root PKI is a significant effort.
From a Veteran and Trusted referee perspective it would go as follows:
- Resolution - Trusted referee authenticates document as genuine.
- Validation 
    - Trusted referee inputs PII from document
    - In person proofing flow “application” validates information against authoritative records (ex. MPI)
- Verification - Trusted referee performs verification (given they are in person)
How might we build out that flow?
- Build out on top of trusted referee administration a bank that will keep record of flows. It will also keep an association of a flow and what trusted referees are able to log into those flows.
- Each flow will be its own “application”
- Interaction of this flow application and the administration app will look like:

<Placeholder - sequence diagram>

## Awareness of Login.gov in-person proofing and trusted referee efforts

Login.gov, is using portions of its [TMF investment](https://tmf.cio.gov/projects/#logingov) to “add equitable identity verification and in-person options for vulnerable populations.” Earlier in 2023, Login.gov rolled out in-person proofing at 18,000 USPS locations.
   
With this in mind, as we proceed with developing an in-person proofing framework and associated flows it is important to keep in close contact with Login.gov to:

- Understand their experiences with USPS IPP (success and pain points)
- Consider Veteran experience that may have multiple avenues for in person proofing (USPS, MHV Coordinator)
- Understand policy and compliance needs to accept credentials established at VA in person proofing
- Technical and product roadmaps for similar functionality
- Timelines between VA and Login.gov on developing trusted referee framework and flows


