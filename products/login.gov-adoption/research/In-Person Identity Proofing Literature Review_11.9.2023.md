## In-Person Identity Proofing Literature Review
### Login.gov Adoption Team
### November 9, 2023

### Introduction
Veteran Affairs has been tasked with providing increased protection and access to its services and benefits without indirectly excluding Veterans. The executive orders driving these efforts are as follows:
- The Office of Management and Budget issued a memo on the federal government’s [Zero Trust Architecture (ZTA) strategy](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf) supporting the [Executive Order on Increasing the Nation’s Cybersecurity](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) in June 2022. One of the pillars of ZTA is to strengthen Identity and Access Management (IAM), a set of policies, processes, and technologies that help ensure only authorized users have access to their systems and data. The Department of Veterans Affairs, via the Technology Modernization Fund, is strengthening security by making an investment to strengthen identity verification and authentication.
- The Executive Orders on [Transforming Federal Customer Experience and Service Delivery to Rebuild Trust in Government](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/) highlights the need for the federal government to improve service delivery of benefits to users.
- The Executive Order on [Further Advancing Racial Equity and Support for Underserved Communities Through The Federal Government](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/02/16/executive-order-on-further-advancing-racial-equity-and-support-for-underserved-communities-through-the-federal-government/) shines a spotlight on historically marginalized communities. These communities are those disproportionately adversely affected by both those security controls as well as most likely targeted by fraudulent schemes.

Login.gov Adoption team is responsible for understanding how to enable more secure sign in experiences and in-person verification processes to uphold these executive orders and insure inclusion. By conducting a literature review, Login.gov Adoption aims to understand what relevant research might inform best practices for an in-person verification process and associated products at Veteran Affairs. The literature review is inclusive of research conducted internally by Login.gov Adoption during the discovery phase and external research conducted by other VA.gov teams or agencies exploring in-person verification processes. By reviewing prior research, Login.gov Adoption can better understand the needs and pain points for both Veterans and VA staff as well as gaps that require further investigation. 

### Method
For internal research review, Login.gov Adoption team reviewed the team’s internal Google Drive for all research done during discovery phase as well as research studies posted onto VA.gov’s Research Repository.

For external research review, Login.gov Adoption team used a keyword search on VA.gov’s Research Repository to identify potentially relevant research as well as on DSVA Slack channel. 

Keywords used:
- In person
- In-person
- VA staff
- Proofing
- Verification
- Identity verify
- Identity verifiers

Following review of the articles identified as relevant based on the key word search, researchers also looked at cited articles within the research studies. 

12 relevant research studies were identified. Attributes such as research method or unique participant demographics were recorded in an internal tracking document along with key takeaways. Two research studies were excluded as research had not yet been completed or findings had not been uploaded to VA.gov Github. 

### Takeaways
The following section presents takeaways organized into common themes that emerged as most prominent across the research reviewed, as well as evidence of gaps in either the Veteran or Veteran Staff experience. 

#### Attitudes and receptivity to in-person
- Veterans need and want in-person support.
    - Attitudes were shared across Veteran and non-Veteran populations that having in-person services available to Veterans for sign in service support are needed.
- Without in-person proofing options, there is risk of exclusion of Veteran populations that are not as familiar using technology, do not have access to the necessary technology to verify, are elderly, and/or experiencing homelessness.
- In person verification has less failure than remote verification.
#### Operations and Implementation
- Veteran Affairs facility sites are generally similar in space set up but do have variations from site to site that impact in-person service experience.
- Veteran Affairs staff do workarounds for processes in order to ensure Veterans are supported and get what they need. 
- Veteran Affairs facility sites do not always have strong internet connection which can impact a Veteran and VA staff members ability to fulfill a task on site.
#### Preparation and Education
- The most common reason Veterans fail in-person identity verification is due to bringing the wrong identification.
- VA staff’s attitude toward a service will influence Veterans’ perception of said service.
- Providing both VA staff and Veterans support and training is critical for the success of sign in credential migration and identity verification.
#### Technology
- Veterans use smartphones, but not all Veterans have smartphones.
- VA staff use a computer and applications need to be easy to use for quick adoption.

### Gaps
The literature review also revealed gaps in the available research.
- VA Staff Experience
    - Only 4 out of 12 studies explicitly collected data on VA staff experiences. Drawing conclusions about how to implement in-person verification processes can be difficult without further research on VA staff experiences.
- Non Veteran User Experiences
    - Only 1 out of 12 studies mentioned the non-Veteran and non-VA staff experience, i.e. the caregiver or care partner/family member. Veterans may only be able to complete identity verification, whether remote or in-person, with the assistance of a caregiver or care partner/family member. Further research is needed on understanding the needs and experiences of caregivers or care partner/family members to understand how their role may impact the success of an in-person identity verification service.  

### Recommendations
From the prior sections, the Login.gov Adoption team identified the following recommendations and next steps. Given the size of the Login.gov Adoption team and the scope of the work, next steps have been identified that are the most impactful as well as the most feasible given the aforementioned parameters. 
- Conduct SME interviews with VA staff that navigate remote and in-person processes currently within the VA to understand the current user journey for VA staff. 
    - Based on the research reviewed, a possible stakeholder group for interviews might be MHV coordinators or medical support assistants.
- Ensure in-person identity proofing services are inclusive of user journeys defined by VA staff and supportive of pain points and needs.
- Explore possible research methods to get non-Veteran and non-VA staff experience, i.e. the caregiver or care partner/family member, such as focus groups. 
- One study mentioned that the need to validate a Veteran Health Insurance Card can serve as a complementary verification process; Login.gov Adoption team is currently exploring the feasibility of including VHIC as a form of identity documentation for 
in-person identity proofing. 
- Further refinement is needed in defining what constitutes a “no show” for in-person identity proofing and the following steps that should be taken to support a Veteran. 
- One study mentioned that in-person identity proofing might be adapted to be an opt-in service for other benefits and services thus enabling Veterans to bundle their visits in one trip.
    - For the scope of the initial prototype service, Login.gov Adoption team will not explore the business case of integrating the in-person proofing system into appointment services at Veteran Affairs. However, for future expansion of the service beyond the initial prototype and a potential pilot, that is an integration that should be explored. 

### References
#### Internal Login.gov Adoption Research
1. [Login.gov Adoption Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/258ab7802d9d849c3dabd5e4fc83f8a578c90f58/products/login.gov-adoption/research/2022-10-Login.gov-Adoption-Discovery-Research/login.gov%20adoption%20discovery%20research%20plan.md)
2. [Deferred Identity Proofing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/2023-03-Deferred-Identity-Proofing-Round-1-Usability)
3. [Business Owner Interviews](https://drive.google.com/drive/folders/1fUVZABqqQmS-zTN1DZVslsCMS33H68bb)
4. [VA Login.gov Post Comment Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/research/Blog%20Post%20Comment%20Synthesis/Login.gov%20USPS%20In-person%20Proofing%20Post%20feedback.md)

#### External Login.gov Adoption Research
1. [Remote Identity Proofing and MFA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/258ab7802d9d849c3dabd5e4fc83f8a578c90f58/products/identity/Research/2022-07%20MHV%20transition%20to%20Login.gov%20as%20a%20single%20sign-on/Remote_Identity_Proofing_and_MFA.md)
2. [MHV on VA.gov + Sign In Transition and Adoption](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/research/research-tools-and-artifacts/MHV-on-VA.gov%2BSign_In_Transition_and_Adoption_Research_Brief.md#mhv-on-vagov--sign-in-transition-and-adoption)
3. [Proactive CSP Migration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research/2023-04%20Proactive%20CSP%20Migration)
4. [AMA: In Person Proofing at USPS](https://drive.google.com/file/d/1zv2MypmxC1KbUfznBqoGJO5W07DcPN_u/view?usp=sharing)
5. [VA.gov Health - Staff Facing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/staff-facing)
6. [Patient Check-In Travel Reimbursement Staff Interviews at Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Staff%20Interviews%20at%20Wilkes-Barre/research-plan.md)
7. [VA login.gov Post Comment Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2023-02%20Desk%20Research/Findings%20from%20VA%20login%20post%20comment%20analysis.md#va-logingov-post-comment-findings)
8. [First impressions of Login.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login.gov/Login.gov-Sign-In-Attributes-Card-Sort-Research-Findings.md)

#### Excluded research due to studies being in progress or no findings posted
1. [MHV Inherited Proofing - Ineligible Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/258ab7802d9d849c3dabd5e4fc83f8a578c90f58/products/identity/Research/MHV%20Inherited%20Proofing/Research%20Plan%20MHV%20Inherited%20Proofing%20-%20Ineligible%20Workflow.md)
2. [MHV Inherited Proofing - Eligible Workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/258ab7802d9d849c3dabd5e4fc83f8a578c90f58/products/identity/Research/MHV%20Inherited%20Proofing/Research%20Plan%20MHV%20Inherited%20Proofing%20-%20Eligible%20Workflow.md)

