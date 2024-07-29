## Attendees (Bold in attendance):
- Regenscheid, Andrew R. 
- Cale Rubenstein
- Carrie McGrath
- LaSalle, Connie 
- Daniel Lopez-Braus
- Temoshok, David M.
- Dawn Muñoz 
- Jeffrey Bordogna
-Jesse James 
- Rahaghi, John
- Jonathan Hooper 
- Micah Saul 
- mossadeq.zia
- Galluzzo, Ryan J
- Sofia Kirkman
- *Sophia Philip 
- Svenja Leggewie 
- Black, Thomas M
- Tiffany Andrews 

## Agenda:
1. Introductions
2. VA MVP Pilot
Technical discussion and correlating to trusted referee requirements
i. In person proofing flow overview
ii. Federating credential to Login.gov
3.. Future phases (federal shared service)
Trusted referee for in person and remote
 Core “Login.gov” vs. Agency specific “VA”

## Notes:
### Introduction
- Question: Is the goal to get to rev4 IAL2 or IAL1?
  - Today, the current VA IPP doesn’t result in a credential that meets IAL2 level of assurance.
  - Two different processes exist but unclear procedure and consistency in process
    - Currently, identifying what is in place and today focus is on identity tool kit, used by identity verifiers at VA, results in proofing a credential and getting different types of VA ID
    - Integrated with VA, there is a process but has gaps
    - Goal is to fill in gaps to ensure compliant process
  - Identity proofing process used now is in house
  - Policy discussion:
    - OMB codifies policy as an EO or memos. Some specify NIST 800-63 guidelines, others specifically state “IAL2”
    - Simultaneously agencies like VA have their own directives
      - Currently 6510 identity policy at VA is going through a re-draft, but bottom line is VA will follow NIST guidance which creates duty for VA and its products
    - No one offers certification so unclear how to externally show compliance
      - Currently closest VA has it the Identity Governance Council
      - Within VA, includes CIO chairs, HSPD_12 head also leads
    - Need to clarify in 6510 whether IAL1 or IAL2 is required, but most important goal for that directive is to ensure veterans have access to verification
  - Fragmented landscape of IAL-1, IAL-2, and LOA3; they are VERIFIED but NON COMPLIANT
  - Unclear where people from Login.gov verify [I think MO is helping with this, yea!]
  - Goal is to build a Proofing Agent application building off of Toolkit using MPI [Master Person Index, aggregates user data] to make getting a credential easier and meets IAL2 assurance levels per rev 4.
    - History, had a previous effort to have Login.gov inherit credentials from MHV. Gaps identified the process (w.r.t. 800-62) did not allow credentials to be inherited anymore and because they weren’t compliant->paused effort to review process and anticipate gaps
 	MVP of the pilot is a VA product that is IAL2
  - **TL:DR - The goal is to get to rev4 IAL2. While rev 4 IAL1 may have sufficient controls, policy guidance states IAL2.**

### Section 1: Veteran View Wireframe Walkthrough
- Walk through existing Login.gov flow and suggest a branch to go either in person or the current remote process
- Showed custom VA IPP app wireframes. 
  - State Issued ID, Govt ID and address were chosen to model USPS pilot flow 
  - Key difference of VA IPP and USPS: for USPS is PII is validated remotely first instead of in person. In person for USPS is just a backup option
- Important to note that the day you leave service you need to go through a process in person to receive card that allows VA to recognize those becoming veterans
- Clarify evidence types that can be considered STRONG/SUPERIOR  
  - Good enough:
    - State ID
    - Passport
    - Veteran Health ID card (VHIC)
  - Not good enough: College ID, 
- IPP Intake
  - What this process achieves is it creates a case number between when veteran starts this process and when they come in to validate documents–ability to track [for a certain amount of time]
  - How do we avoid the obstacle that veterans have to give their personal information again since they are often asked for this information?
  - Provide messaging on why this is needed and alternative use cases for this credential
  - What is needed to accept MPI as an authoritative source?
    - Policy: 6510 policy could be a place where justification of this process is shared out to avoid friction for veterans who feel they've had to do this repeatedly
    - Can 6510 list the document types that are accepted
  - Barcode->do we need to treat this as a secret? Which indicates degree of security
  - Option to do in person session to is USAccess
    - USAccess requires registration prior to coming in person
    - What’s important is to have a process governance that allows applicant to go to the next step.
      - Scheduling style of email with bar code was used as that is based on style guide as login.gov
  - Question about whether direct message with a link might be more helpful
    - Sofia Kirkman explained that it is optimal to avoid taking them to too many pages
  - Only offering walk-ins for pilot to avoid exclusion
  - Code expires after 10 days
    - In email message with bar code there is a date mentioned to explain when veteran has to come in
    - Should the request expire, they only create a new request, NOT a new account
### Section 2 Proofing Agent View Wireframe Walkthrough
- Exploring whether agent can set up Login.gov account with veteran 
- Current wireframe is identity management toolkit, will be reusing this for this IPP pilot but going to adapt functionality 
- MPI includes employees and the intention is that this application will pull from this MPI to locate veterans who have requested IPP
- Need to confirm where address is being pulled from
  - Via MHV, easy to update address. Unclear how quickly it makes it back into MPI.
    - Does not take long, however in this use case the Veteran had an account already (MHV). 
    - Did the MHV credential require MFA? There are some ways to bypass MFA on MHV.
- Current approach:
  - Proofing agent will use two apps. One application is resolving another existing app’s gaps (identity toolkit). 
    - We could modify the Identity Management Toolkit Application but unclear how much MO Studio can change
  - Example of a gap: As of now, no way to ensure if the proofing agent can validate the documents are real instead of just checking off whether they have a document and verifying the information the veteran input the info correctly
  - Data validation is pulled from MPI database
    - Is that authoritative data? Our assumption is it is authoritative data because it is what VA uses to validate eligibility for medical benefits
    - MPI has a correlation score that provides insight as to how many data sets have this information.
- Question is: what is the criteria for a data source to be considered an authoritative data source? And for what document types?
  - NIST (Ryan) understands that authoritative sources may also have gaps / inconsistencies. So have to take a pragmatic view
  - Part of the equation is what will this be used for.
  - MPI has drawbacks because unclear if MPI updates frequently enough
  - Understanding what evidence was presented to input the identity data (ex. MPI uses VHA data sets that include patient intake) will inform what document types MPI can be considered an authoritative source for.
  - Given VHIC is issued using MPI data, it’s a issuing source for VHIC.
- Note: while in today’s process, the verifier could update some data (like spelling but not any document numbers) based on what’s on the ID, that is not going to be part of this flow. We are looking to take MPI data as is.
- To achieve IAL2 do we need to store the image of the document?
  - No scanning of images or pictures taken are needed
  - But do need to store document type
- What about human validation on whether a document is authentic?
  - No tool used to validate authenticity of document; 
  - NIST indicates that when in person, it need not go through the same level of depth as remote (i.e. decoding barcode with comparison to the front). What do the current training verifiers receive?
    - Identity Management Training as of now:
      - Training on how to use tool
      - No training how to determine authentic document
    - We want some capability to look at some of the security features, and those should be documented
    - Should also confirm document is not expired
    - Even with PIV there’s not much more than using sight to verify documents and validate them to the person
    - Training may be an opportunity to do this
      - For example, raised letters
- What about number of pieces of evidence? Only requires one document to verify as of now
- For verification, is there the ability to pull an image from MPI for verification? Could be helpful in increasing strength of source
  - Unsure whether Identity Toolkit bring ups images from  MPI.
  - Nice to have, facial matching is sufficient for IAL2.
- Only if evidence and MPI data match will we consider the IPP event to be successful where it would lead to an Login.gov verified account.
  - Have to design support/scenarios if those do not match.
### Section 3: Veteran Experience with Proofing Agent
- Research has revealed veterans would prefer to have in person assistance upon receiving confirmation of verification
- What metrics are you all considering to assess success of pilot?
  - Still open
  - Use of open versus closed cases it offers metrics to assess process length, unfinished/expired cases
- What about participants for the pilot?
  - May collaborate with MHV coordinators to be pilot proofing agents
  - VA has a recruiting service for Veteran participants 
  - Also looking to recruit internal VA participants who are Veterans  to first test if flow is feasible before roll out
    - For Veteran, you are able to complete steps in Section 1 on a computer or on phone (even in transit)
- If MPI is currently used to track benefits for veterans, can that be considered as authoritative even though there are gaps
  - VA views MPI as authoritative, include that in a policy directive (6510?)
  - Having a writeup available on what data constitutes MPI and how that can act as authoritative sources for supported document types.
### Break
- Review of what was covered in first half and questions from each section featured in the Mural
- Consider when is the right time for a proofing agent to reach out to another resource for help
- Consider baseline fraud controls
  - NIST guidance in rev4 will focus on fraud controls for remote proofing flows (device integrity etc)
  - What should be done though is notification to address of record that proofing event has occurred.
  - How rigorous is the process to make changes in MPI and what is the refresh timeline for MPI ?
    - Include in writeup of MPI
- What about address confirmation step, could VA tap into that part of Login.gov’s flow or do we need our own?
  - NIST (Andy) : Address verification for in-person is different than remote. So the letter with PIN/OTP done by Login.gov would not be necessary.
- Now that we have a validated credential, how do we safely encrypt and send the data to Login.gov so it can be protected with the hot dog (2nd layer of encryption using the users password)?
  - Login (Hooper) - sets context on how Login.gov protects PII with users passwords.
  - Goal : minimize the time VA keeps validated PII and meet Login’s 2 layers of encryption model 
    - OIDC has some patterns, but that is designed primarily for a synchronous exchange, not one where it can occur over a series of days.
    - Login.gov has an upcoming implementation where it can achieve the desired encryption level without needing the user’s password in context.
    - Action: Micah Saul and engineer from Login.gov Adoption team to align on approach for pilot.

### Wrap up
- From discussion today, the flow would work for IAL2 if we cover on:
  - MPI as an authoritative source for specific documents
  - Training for Proofing Agents on how to validate authenticity of evidence provided by Veteran (what to look for on an ID)
- NIST does not need to be as involved on implementation, that’s more between VA and Login.gov
  - But available to answer questions as they arise
- Next logical touchpoint for implementation is the monthly Login.gov/VA IPP meeting 8/15


### Next Steps:
- Define How to train attendant/proofing agent (specifically on document authentication)
- Document how MPI is as an authoritative source
  - What documents are supported
  - Capabilities MPI has on retrieval of images to aid in verification
- Updating flow not requiring veteran to enter information at particular moment in process in preparation of 8/15 monthly meeting for Login.gov
- KPIs for IPP pilot
- Contact USAccess for scheduling flow/wireframe use cases
- Encryption approach discussion between LGA engineering and Login.gov (Micah)



1. Use a pattern of authentication requests and responses in OIDC per this sequence diagram.
  - Login.gov authentication sessions provide currently provide a mechanism where the Login.gov has assurance of an authenticated user. During these sessions, Login.gov can ask the user for their password to encrypt data. 
  - The challenge is to know when Login.gov sends an authenticated user to our IPP application is whether the Veteran is at the start, in process, or completed IPP
  - The idea is as follows:
    - Login.gov sends UUID (and if needed, email) of the Veteran’s account
    - Assumption:
      - Our IPP application can store validated PII for a brief period of time (i.e. 24 hours if we will have the Proofing Agent ask the Veteran to login to their account right after IPP process ocurs)
    - Pre-conditionsWe can use that UUID to track whether there exists a current enrollment ID or not.
      - Search for UUID
        - If at the start, neither and active enrollment code or validated PII will exist in our application.
        - If in process, an active enrollment code will exist or not.
        - If complete, an inactive/complete enrollment code exists but more importantly, validated PII.
- PROS
  - Can use current OIDC exchange mechanism.
- CONS
  - We have to store validated PII and rely on the Veteran logging to their account prior to leaving the IPP site.
  - OIDC authentication pattern wasn’t designed to be used across authentication sessions.


2. Leverage a passwordless encryption method that Login.gov may be launching.
  - Login.gov is implementing a path similar to public/private key where the private key is generated from the users’ password.
  - The public key is stored with the users’ account which can be shared with our IPP application.
  - We will then be able to send the users validated PII to Login.gov encrypted with this public key, upon immediate completion of the IPP event, avoiding the need to store users validated PII in our IPP application.
  - Login.gov will store this information and decode it when the user has presented their password (thus preserving Login.gov’s security constraint of 2 level encryption for validated PII)
- PROS
  - No storing of validated PII on our system
- CONS
  - Dependent on Login.gov’s launch of this capability




