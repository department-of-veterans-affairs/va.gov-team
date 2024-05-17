

# Product overview: In-Person Proofing MVP

## **Problem statement**

VA has prioritized investment in adoption of Login.gov. Login.gov currently offers remote identity verification along with an in-person option at USPS. However, there are opportunity areas where VA can help address that:
- Login.gov relies primarily on remote identity verification. During our discovery phase, Veterans are seeking a channel where they can rely on attendants to help them through identity verification.
    - The current USPS in-person support is offered as a backup, not a primary method of identity proofing.
- The number of controls required in NIST 800-63 when identity proofing remotely presents significant challenges. As of the May 2023 Login.gov identity verification report:
    - Of the applicants that tried to submit documentation, only ~53% successfully completed the process;
    - Further, ~27% of applicants abandon the process without even attempting to upload their documents.
- The draft revision 4 of NIST 800-63 is indicating that an in-person proofing option is required to meet IAL2.
VA has more intimacy with Veterans and their community compared to CSPs that act as a shared service to the entire US population. VA also has access to information that facilitates identity proofing for Veterans.

**How might we leverage VA’s intimacy with Veterans to provide simple, secure, and privacy-preserving in-person verification (and support) for Veterans (and their community)?** 

The following product brief outlines an approach for an initial pilot that:
- Leverages existing data (MPI) and systems (Identity Toolkit) to facilitate identity verification for Veterans;
- Complements those systems to ensure the IPP process meets upcoming rev 4 standards for IAL2;
- Can be expanded to include proofing agents that are not VA staff.


## A glance at a long term vision for IPP
During remote identity proofing, a computerized system acts as the system that attests the identity of the Veteran. Typically, the Veteran approaches this transaction as an unknown individual to the remote proofing process, leading the computerized system to have the Veteran go through the normative requirements of NIST 800-63.

In-person proofing presents opportunities (and challenges) that remote verification does not. During in-person proofing a person, acting as a trusted representative of VA (i.e. a proofing agent or trusted referee) asserts the identity of the Veteran. At times, a Veteran is an unknown individual to this proofing agent (such as in the case of MHV coordinators). As such, for the proofing agent to assert the Veteran’s identity, they ask the Veteran to go through the normative requirements of NIST 800-63 while providing in-person assistance through the process.

At other times, a Veteran is a well known individual to the proofing agent (clinician, case worker etc). This pre-existing relationship allows the proofing agent to act as a trusted referee to assert the Veteran’s identity through risk based decisions, potentially resulting in a lighter weight process; while still maintaining the same level of identity assurance. What this lighter weight process is varies based on the nature of the pre-existing relationship between the trusted referee and the Veteran and the manner by which the trusted referee is making a risk-based decision.

These two scenarios offer a perspective that allows the VA (and other federal agencies) to offer in-person proofing flows that provide a high level of identity assurance while reducing the friction for Veterans during identity verification. However, for the purposes of an initial pilot we will be focusing on the former scenario: in-person proofing by a proofing agent. 


## IPP Pilot (MVP)

This section represents the scope of the initial pilot for in-person proofing. On July 27, 2023, a workshop was held amongst VA (Login.gov Adoption Team), the authors of NIST 800-63 draft revision 4, and Login.gov to ensure that the controls in this in-person pilot align with the upcoming revision 4 guidance. The following flow reflects the outcome of those discussions, aligning on an in-person proofing flow that meets IAL2 level of assurance controls.

### The players
**Veteran applicant:** A Veteran who is seeking to complete identity verification to access VA services via a modern credential, Login.gov.

**Proofing agent:** VA staff who will walk the Veteran applicant through the in-person proofing process, aiding the Veteran in securing a verified Login.gov credential. This staff will need to have a VA PIV and be provisioned with the Identity Verifier role of the Identity Toolkit.

**Identity Toolkit:** An internal VA tool that has integrated with MPI and enables validating a Veteran’s identity attributes. Access to this tool requires a VA PIV as well as having an Identity Verifier role. This toolkit supports LOA2 validation, which doesn’t provide as much identity assurance as IAL2. Our team does not have the requisite access to modify this toolkit to meet IAL2 level of assurance, our team will have to use the Identity Toolkit “out of the box”. I.e. our working assumption is that the pilot is constrained by the current functionality of Identity Toolkit.

**Proofing application:** An application that will serve a few purposes:
- Enable a Veteran to complete intake, registering their unverified Login.gov account (IAL1) for in-person proofing (resulting in an IAL2 account).
- Guide the proofing agent through the in-person proofing process, ensuring the process meets IAL2 level of assurance
- Bridge the in-person proofing event with Login.gov, resulting in a Login.gov verified account.
  
**MPI (Master Person Index):** An authoritative source of Veteran information owned by VA. It aggregates data from various data sources from both within the VA (VAMCs) as well as integrations with other agencies (SSA, VADIR). MPI is also used to validate eligibility for VA services as well as issue Veteran Health ID Cards (VHICs)

**VA.gov:** A marquee piece of OCTO and VA’s modernization efforts to consolidate access to Veteran services into a single platform. Efforts are underway to migrate from legacy portals (MHV, eBenefits) towards VA.gov. Veteran-facing services are hosted on this platform and will be the host of the Proofing Application. While the pilot will limit proofing agents to be VA staff with VA PIVs, a future goal of the Proofing Application is to enable trusted agents, such as VSOs and caregivers, to act as proofing agents for Veterans.

**Login.gov:** A federal-owned shared service operated by the General Services Administration (GSA). Login.gov’s vision is to be the public’s one account for government. i.e. Use one account and password for secure, private access to participating government agencies, such as VA. By facilitating access to a verified Login.gov account, the Veteran applicant will not only be able to access VA services but other agency services as well (ex: SSA, SBA)

### The Flow
We have a [service blueprint](https://app.mural.co/t/innovationboards1199/m/innovationboards1199/1691694815464/049f49ad1c3f14aa3f5e252581b04481e74e24ff?sender=u1cdf5efd431a84e736d31400) that puts the in-person proofing process in a visual form. The following sections provide a narrative of the process steps to provide context for our team. We will use the service blueprint and this overview to serve as the foundational context as we move towards implementation. 
Further the service blueprint will allow us to communicate where we are with respect to progress towards launching the IPP pilot. The following sections are represented in the service blueprint.

#### Intake
When a Veteran opts to verify their identity in person, this intake process serves as a registration for the Veteran. During this step we are registering, or binding, the Veterans (IAL1/unverified) Login.gov account to the upcoming in-person proofing process. 

This binding is necessary to meet NIST guidelines that state that an IAL2 credential (the credential that will exist after in-person proofing) is tightly bound to an AAL2 authenticator (the Login.gov account). This ensures that the IAL2 credential is adequately protected after creation, i.e. a bad actor cannot take control of the credential because of a weak password without MFA.

When a Veteran reaches this intake step, we know what their Login.gov account is (via UUID and email). As part of intake we bind that account to another ID (a case ID) that the Veteran will take to their in-person proofing event. Thus at the end of the proofing event, where we will have an IAL2 credential, that case ID will allow us to know which Login.gov AAL2 account it should be associated with.

NIST guidelines provide guidance on requirements around the case ID (ex. Entropy/Complexity requirements of the ID, validity duration etc).

From a Veteran applicant’s perspective we need to provide: 
- Awareness of the process and expectation setting
- Key information about the Case ID (validity etc)
- How to proceed to the next step of the process, where and when it is, and what to bring
- Requisite reminders (especially as expiration of the Case ID approaches)
  
While the intake can happen several days before the in-person proofing event, we should allow for intake to occur immediately before / during the in-person proofing event. This allows a Veteran to recover from an expired (or non-existent) Case ID when they begin interacting with the proofing agent in-person.

To instill motivation for the Veteran to complete the in person proofing event, case ID's will expire after 10 days. Should a Veteran's case ID expire, they will need to restart the Intake process. This can be done remotely or with an in person proofing agent.

 ![intake](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/design/intake.png)

#### In-person proofing process
After intake, the Veteran applicant then meets with the proofing agent who will guide them through the process.

##### Validating a proofing agent
First, however, we need to ensure the person claiming to be the proofing agent is legitimate. For the pilot, we will know who is a legitimate agent so we will be able to manually configure who can act as a proofing agent. Beyond the pilot we will need to support a more robust form of proofing agent administration.

So, when a Veteran approaches a proofing agent with their case ID, the proofing agent will first need to authenticate to the proofing application, thus ensuring only a valid proofing agent can help a Veteran applicant through in-person proofing. 

The proofing agent will then take the Veteran’s case ID and search for it in the proofing application. Again, this is needed so that once identity verification is complete, we will know which Login.gov account should then become verified. Should a case ID not be found, the proofing agent can help the Veteran perform the intake process on the spot to then complete the in-person proofing during the same visit (thus not wasting the trip for the Veteran).

![search for case ID](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/design/search-case-ID.png)

Following are the normative requirements to establish an IAL2 credential for an in-person process. Note that these process steps need not necessarily occur in the same sequence as in this document. However, all steps do need to occur at some point.

##### Resolution
This step requires that the Veteran provide enough evidence to resolve to a unique identity (and that we can validate that identity in the next step). NIST revision 3 is a good reference to the various evidence types required to resolve down to a unique identity. For the purposes of this overview, we will focus primarily on “SUPERIOR” or “STRONG” evidence (i.e. photo ID) and what is required. 

The proofing agent needs to confirm the authenticity of the document presented by the Veteran. This is an area where the current training and capabilities within the Identity Toolkit don’t necessarily meet IAl2 standards. This includes:
- Identity Toolkit doesn’t mandate seeing a photo ID
- Identity Toolkit training doesn’t provide guidance on how to detect a fake ID.

We will close these gaps using the proofing application.

In a remote (online) identity verification process, the applicant is asked to upload scans/pictures of the photo ID and an automated service runs it through various authenticity checks (validating security features are present, decodes the back barcode of the ID and compares to what has been OCR’d from the front). 

NIST has indicated during the workshop that it’s impractical to expect a human proofing agent to achieve that level of detail (e.g. how would we expect a proofing agent to decode the back bar code). But the fact the transaction occurs in-person already changes the risk profile (increased difficulty to scale attacks in person compared to remote). Further it allows for a tactile check which is not possible in a remote setting. However, NIST did indicate we do need to ensure the proofing agent has training or guidance on how to perform a security (authenticity) check of the documents in-person. 

The proofing application will ask the proofing agent to capture the Veteran’s information on the ID and enter it into the proofing application. With this information, the proofing application will be able to let the proofing agent know how to conduct a security (authenticity) check on the document. I.e. For Illinois IDs, check these holograms, for Wyoming, check for these watermarks etc. 

The philosophy we want to adopt is that rather than relying on training, the proofing application will provide the guidance in situ. This ensures we are not relying on a proofing agent’s ability to remember all their training that would now include knowing what IDs have what security features. The added benefit is we now avoid the administrative burden of keeping training records and ensuring everyone has kept up to date when something changes (ex. a state came out with a new layout for their ID).

![checks ID](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/design/check-ID.png)

By the end of this step, the proofing agent has determined that the photo ID presented by the Veteran is unexpired and authentic. They now know which identity they are going to validate against authoritative records.

##### Validation
In this step, the proofing agent will need to take the identity from the photo ID and validate that identity exists in authoritative records. We are going to use MPI as the authoritative record which has the most complete information about Veterans.

In the interest of time, our pilot will leverage the existing capabilities in the Identity Toolkit to complete this step. This does mean a bit of swivel-chairing will be required of the proofing agent between the proofing application and the Identity Toolkit. In a future release (after the pilot) we can look at integrating the proofing application directly to MPI APIs.

The proofing agent will need to:
- Log into the Identity Toolkit 
- Look up the Veteran information they captured in the proofing application
- Search for that identity in the Identity Toolkit.
- Once found in the Identity Toolkit, the proofing agent will mark the identity as validated in the proofing application.

  ![validation via swivel chair](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/design/validation.png)

While MPI is the most complete source of Veteran identity information, it is not 100%. Should a Veteran participant in the pilot not be found in the Identity Toolkit, we will have to develop a protocol to handle instances where the application was unsuccessful in validating against MPI: 
- Thank the Veteran for their participation, 
- Inform them that, unfortunately, we will not be able to complete verification
- Capture enough information from the Veteran so that our team can investigate why they weren’t found
- Provide an alternative path (ex. deferred-identity proofing if available, id.me)

##### Verification
In this step, the proofing application will ask the proofing agent to ensure the Veteran that presented the photo ID is the Veteran on the photo ID (i.e. compare the Veteran’s face to the photo on the ID). NIST clarified that verification can occur at any stage in the process, it need not follow validation.

![Verification facial match](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/in-person-proofing/design/verification.png)
 
In a later phase, we can see if MPI has photos to which we can compare the Veteran rather than the photo ID. This would be a stronger control, but is not needed in the pilot.

##### Address confirmation
In remote proofing, the Veteran applicant needs to present an enrollment code (one time password) from SMS sent to the phone or a letter to the address of record. 

In in-person proofing, as a general requirement, the Veteran applicant needs to provide an address (either verbally or on a piece of evidence) and that address should be confirmed in the authoritative source (MPI). For in-person proofing, this step is already covered in the validation step.
By the end of this process, the proofing agent has now validated the identity attributes at an IAL2 level of assurance. It is now time to bind that IAL2 credential to a Login.gov account.

#### Yielding a Login.gov verified account

Login.gov treats validated PII with extreme care: any validated PII is protected by a second level of encryption based on the user’s password (the equivalent of row level encryption for a table), ensuring not even Login.gov operators with root level access to their databases can see users' PII. 

Additionally, we want to minimize the amount of time an IAL2 credential will be persisted on VA systems (i.e. the proofing application). The longer PII is persisted, the greater a target it becomes.

There are a couple techniques that can be used to meet Login.gov’s encryption requirement as well as reduce the amount of time PII is persisted in the proofing application.

- (Preferred) Login.gov is working on a facility where applications can send PII encrypted protected by that second level of encryption. This would allow our proofing application to immediately send the PII validated during the in-person event to Login.gov, precluding the need for the proofing application to store any PII. This capability is currently in development with Login.gov.
- Should that capability not be available in time for the pilot, another option is to leverage  OIDC patterns of relying party (RP) and credential service provider (CSP). These can ensure PII is transacted only when the user’s Login.gov password context is present. This allows us to meet Login.gov’s encryption requirement and limit the amount of time the proofing application needs to save information. We would add a step for the proofing agent to ask the Veteran to log back into their account to trigger this exchange within minutes; after which the PII would be removed from the proofing application.

Other options may also exist. We will need a follow on technical discussion with Login.gov to align on the best approach for the pilot, should the preferred option above not be available in time for the pilot.

#### Supported document types / proofing evidence
The document types we will be able to support will be based on the document types MPI can act as an authoritative or issuing source for.
Thus far under consideration:
- Definite - VHIC
- Likely - State ID (driver’s license and state ID) 
- Potentially - US Passport

## Pilot considerations
### Volunteer proofing agents
  As a pilot, we will need to recruit volunteer proofing agents. Recall that these volunteers will need to be VA staff that have the prerequisites to be assigned an Identity Verifier role in the Identity Toolkit. By seeking volunteers, it may also limit the need for union notification as it’s:
- Not being rolled out at scale for the pilot.
- Not a hard requirement of their official job function (i.e. it’s volunteer)

### Locations
Having our team able to observe the in-person interactions will be key to gleaning valuable insight from the pilot. As we determine which in-person facilities we will pilot in, we should aim for locations that are local to our team members. 

### Canary
Given the complexity and cross-agency integration required of this pilot, we should have a canary phase where we will recruit Veterans from MO or OCTO. The intent of this phase of the pilot is strictly a functional test to ensure the integrations are working in production. This will flesh out any fundamental / show stopper issues prior to a larger pilot.

### Pilot
We will need a formal pilot plan that we can execute once we’ve successfully validated end-to-end capabilities during the Canary.

## Awareness of Login.gov in-person proofing and trusted referee efforts
Login.gov, is using portions of its TMF investment to “add equitable identity verification and in-person options for vulnerable populations.” Earlier in 2023, Login.gov rolled out in-person proofing at 18,000 USPS locations.
With this in mind, as we proceed with developing an in-person proofing framework and associated flows, it is important to keep in close contact with Login.gov to:
- Understand their experiences with USPS IPP (success and pain points)
- Consider Veteran experience that may have multiple avenues for in-person proofing (USPS, MHV Coordinator)
- Understand policy and compliance needs to accept credentials established at VA in-person proofing
- Technical and product roadmaps for similar functionality
- Timelines between VA and Login.gov on developing attended identity verification (of which in-person proofing is one) framework and flows

## (A few) Relevant policies
### Privacy Act
The Privacy Act mandates that any system that persists PII that is later retrieved must publish a SORN (System of Records Notice) in the Federal Register indicating what that system is used for, how the PII is protected etc. This publication can take several months before a SOR can be used in production.
There are various ways to manage this dependency:
- Research if there is a wide reaching (blanket) SORN that our proofing application can fall under. Can range anywhere from a VA.gov SORN or a VA SORN.
- Work with the Privacy office to confirm at what threshold is a SORN required, i.e. for a pilot of a few thousand Veterans, can that be considered small enough where the pilot isn’t considered a system of record.

### VA directive 6510
This the VA wide directive dealing with the use of identity and access to services. A new revision is being evaluated and we have an opportunity to codify certain aspects of our pilot into this revision. For example: what document types is MPI an authoritative source for?

## Risks
Given the complexity of this effort, calling out a few risks we should be actively managing (or have managed)

### Dependency on Identity Toolkit changes
Based on discussions with our POs, changes required to the Identity Toolkit would require IAM to prioritize and execute upon. Additional feedback is that to prioritize this work for IAM, we would need to involve the VA CIO. With this in mind, we have decided to manage this risk by not seeking any changes to the existing functionality of the Toolkit for the pilot.

### Dependency on Login.gov changes
Login.gov is not a large team and it has its own priorities. We are looking to minimize dependency risk with Login.gov via:
- Monthly coordination meetings on IPP
- Offering to leverage Login.gov’s open source code and submit PRs implementing Login.gov changes needed for IPP.
- As a last option, evaluating other solutions that do not require Login.gov changes for the pilot.











