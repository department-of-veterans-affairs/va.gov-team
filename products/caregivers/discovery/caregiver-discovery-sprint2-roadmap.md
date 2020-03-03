# Caregiver Discovery
## Sprint 2
David Bao - Deputy Executive Director, Digital Service - david.bao@va.gov
September 27, 2019

[Caregiver Discovery Sprint 2 Roadmap Presentation, 968kb PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/discovery/20191001%20Caregiver%20Discovery%20Sprint%202%20Roadmap.pdf)

## Introduction

### Introduction
The Mission Act of 2018 mandates the expansion of the Program of Comprehensive Assistance for Family Caregivers (PCAFC) beyond Post-9/11 Veterans.
To prepare for this expansion, DSVA conducted a deep-dive into the Caregiver Family Support application process to understand the Veteran, Caregiver, and Veteran Service Organization (VSO) experience with the program and the application process to identify how to support the expanding demand.  
While the initial focus was on digitizing the VA form 10-10CG to interface directly with the Caregiver Record Management Application (CARMA), research uncovered a number of areas beyond creating an online application that will help to efficiently meet the increasing interest and applications.
This brief builds on Sprint 1’s user and technical research to recommend initial requirements and a roadmap for implementation. 

## Sprint 1 Summary Takeaways

### Summary Takeaways 1 of 4
#### Online Form Application and Submission
- Providing an electronic footprint reassures of application submission and VA receipt. Veteran Service Organizations (VSO) said electronic submittal is easier for them to help Veterans apply.
- An online form allows applicants to legibly complete at their own pace, save progress, and take breaks as needed, which some expressed difficulties with using the PDF online.
- Many Veterans and Caregivers expressed they have poor handwriting, so an online application eases the workload for VA personnel processing applications.
- When designing the Caregiver benefit online form, make sure not to assume the Veteran is filling out the form, that in many cases it may be the Caregiver, VSO, or Caregiver Support Coordinator (CSC).
- As Caregivers may not be native English speakers, use [plain language](https://plainlanguage.gov) to support usability.
- Consider adding contextual help and info where a person will fill out the form. 
- Once an application is submitted, redirect applicant to an “information and resources” page outlining next steps.
- To help applicants understand requirements and set realistic expectations, provide eligibility criteria and application instructions for this audience that is time and attention challenged. 
- Providing transparency about guidelines, rules, roles, and responsibilities may reassure and encourage more to apply for help they actually need.

### Summary Takeaways 2 of 4
#### Caregiver Benefit Program Single Source of Truth
- There is a need for a “single source of truth” to prevent confusion about the Caregiver Benefit Program. Providing this information in a central location where it may be readily updated by the VA based on feedback may reduce stress for all.
- There should be an online space designated as a definitive information about eligibility criteria, the application system, appeals process, and other resources.
- Consider providing clarity on when applicants may receive a decision on their application, as well as thorough explanations for why folks were denied.
- If Caregivers are reaching out to their social media groups for information, they may be receiving incorrect information.
- Possibly coordinate with other organizations to discover the resources Caregivers most need.

### Summary Takeaways 3 of 4
#### Caregiver Login, Profile, and Portal, Associated with Veteran Profile
- An online application portal that includes status and contact functionality affords an opportunity to address any missing documentation, eases the burden on local VA facilities, reduces stress on Veterans, and streamlines the system. To reduce anxiety for applicants, possibly include a visual representation of where they are in the process, paired with the range of time they may expect things to take during each stage, providing applicants the ability to plan accordingly
- Currently, some Caregivers may use the Veteran’s login credentials, which may have legal risk vulnerabilities for the Veteran, Caregiver, and the VA. This would be addressed if Caregivers had their own profile login, and views, associated with the Veteran’s profile.
- Increase awareness of existing Caregiver support services.    
- There is interest in providing an online space for Caregivers to access information, particularly resources in their local area. A personalized portal where Caregivers and Veterans can see options available to them, resources filtered by Zip Code, with caregiver benefits as a potential route. 
- Caregivers expressed being comfortable providing personal information when applying online or creating a profile.  
- Many wanted an opportunity to speak with someone as part of the application process due to issues with their medical paperwork, and to provide clarity on their medical record or circumstances.

### Summary Takeaways 4 of 4
#### Security and Access
- Some Veterans are unsure what information Caregivers have access to, which could have negative implications if a Veteran would prefer to keep certain information private.  
- If a Caregiver’s personal relationship with a Veteran changes, the Veteran would need to be able to manage or remove access for the Caregiver. 
- Currently, some Caregivers may use the Veteran’s login credentials, which may have legal risk vulnerabilities for the Veteran, Caregiver, and the VA. This would be addressed if Caregivers had their own profile login, and views, associated with the Veteran’s profile. [Also listed on #3]

## Technical Discovery Findings

### Top Findings
1. Other high volume VA forms use a checkbox in place of a signature (such as eBenefits on VA.gov).
2. The Caregiver Record Management Application (CARMA) is a new system and there are no existing APIs that can be leveraged for VA.gov.
3. Form creation on VA.gov is a straightforward process; existing VA.gov forms use pre-built components that we can reuse.
4. A “Save in Progress” pre-built component is available to address applicants’ desire to complete the form at their own pace.
5. On VA.gov currently there is only one user type. No mechanism exists to distinguish Veterans, Caregivers, or other user roles. 


**How do we currently collect signatures on forms for VA.gov and what will that mean for our form?**
### 1. Other high volume VA forms use a checkbox in place of a signature (such as eBenefits on VA.gov).
Participation in the Program of Comprehensive Assistance for Family Caregivers requires both administrative and clinical assessments for eligibility. 

**IMPLICATIONS**
- An applicant is interviewed and verified in stages during a review process, so a wet signature may not be necessary. Final OGC approval for this is still necessary. There is precedence for this from VBA, but this is a dependency to be worked out. 
- This Finding also means we may reduce our scope and level of effort by reusing existing form elements to collect certification.

**What is involved in interfacing with the Caregiver Record Management Application (CARMA) system?**
### 2. The Caregiver Record Management Application (CARMA) is a new system and there are no existing APIs that can be leveraged for VA.gov.
Much of the functionality necessary to integrate with CARMA is not yet available in the system, as the CARMA API is not usable, yet. The process for intake of information from an online form and transmittal to the CARMA system is not yet defined. The CARMA team will provide an estimate of their efforts given our high-level needs.

**IMPLICATIONS**
APIs and endpoints will need to be developed to transmit and retrieve data to/from CARMA. Integration with CARMA needs to be built.

**What is the scope involved with creating a form on VA.gov?**
### 3. Form creation on VA.gov is a straightforward process; existing VA.gov forms use pre-built components that we can reuse.
We can use pre-built components that are compliant with the VA.gov Design System and already user tested on other VA.gov initiatives.
**IMPLICATIONS**
- This will make the initial creation of our form lower effort than anticipated. 
- Most of the scope will come from other aspects of the project noted in this deck. 

**How does the 'save in progress' feature for forms on VA.gov work from a technical standpoint?**
### 4. A “Save in Progress” pre-built component is available to address applicants’ desire to complete the form at their own pace.
The “Save in Progress” feature requires the user to create an account to associate form progress with the individual. Accounts are currently created VA.gov using ID.me.

**IMPLICATIONS**
- The level of effort necessary to implement “Save in Progress” may be lower than anticipated given we may use existing infrastructure.
- This functionality exists today, however, the ability to save to and retrieve from a distinct user account must be created. 
- With the existing VA.gov components, best practices for form design are included for free building on VA.gov, with features such as pre-fill and save-in-progress.

### 5. On VA.gov currently there is only one user type. No mechanism exists to distinguish Veterans, Caregivers, or other user roles. 
While this is not required for MVP, currently all users logging into VA.gov are shown the same information. There is no distinction between Veterans, Caregivers, or anyone else. To provide an experience that is unique for a Caregiver with distinct information shown to the Caregiver, and another distinct experience for the Veteran, additional system architecture must be created.

**IMPLICATIONS**
- The creation of these distinct user roles and corresponding associations has benefits for other projects that were unable to implement functionality due to the lack of these roles.
- Once the appropriate account architecture is created, it must be applied throughout other API structures to categorize data accordingly.
- Additional research must be done to inform a solution.

## Prioritized Backlog

### Caregiver prioritized backlog
1. Online VA form 10-10CG application, including:
    a. Certification of application requirements
    b. Confirmation of application submission
    c. Save application submission in-progress
    d. Obtain application status
2. User-centered, authoritative PCAFC area of VA.gov
3. Searchable Caregiver-specific resources on VA.gov PCAFC area
4. Authenticated Caregiver profile account creation
5. Caregiver portal with application(s) status and customized resources for individual circumstances and Zip Code
6. Display application status in Veteran account
7. Contact the CSC assigned to their submission for assistance with one’s application 

### Online VA form 10-10CG application
Form creation on VA.gov is a straightforward process; existing VA.gov forms use pre-built components that may be reused. Adherence to requirements may be sufficiently certified by checkbox, since an applicant is interviewed and verified in stages during a review process. Final OGC approval for this is still necessary. This form is reliant upon the CARMA team to implement parts of the CARMA system for application info intake and transmittal.

|  User Story | Feature | Assumptions, Unknowns |
| ----------- | ----------- | ----------- |
| *As an applicant completing VA form 10-10CG, I should be able to: a) understand the needs at the outset so that I can apply efficiently; b) complete online so that it is easier and my handwriting is not an issue; c) submit electronically so that I don’t need to mail it or go to a VA facility; d) certify my application information meets the indicated requirements; e) complete my information and submit electronically.* | Online VA Form 10-10CG application | As VBA has clearance for checkbox signatures on online eBenefits forms, we expect to address similar VHA approvals with OGC. Clearing internal processes for approval is a large assumption and/or risk. |
| *As a Caregiver I may submit the VA form 10-10CG application on VA.gov associated with the profile of the Veteran I care for. As a Veteran I may submit the VA form 10-10CG application on VA.gov associated with the profile of my Caregiver.* | Form directly submits to CARMA system via CARMA API | Reliance upon the CARMA team to quickly set up API endpoints for data submission. |
| *As a Veteran or Caregiver completing VA form 10-10CG, I should receive confirmation my application was submitted successfully so I feel confident the VA received it.* | Submission confirmation | It is unknown whether confirmation must also be emailed or mailed, and how confirmation will be generated. |
| *As a Veteran or Caregiver applicant, I should be able to save progress on the VA form 10-10CG so that I may complete over multiple sessions.* | Save submission in-progress | We assume we can save the form progress in CARMA system. |
| *As a Veteran or Caregiver applicant, I should be able to obtain the status of my application so that I feel informed of progress and may fix issues promptly.* | Obtain application status online | The engineering required to implement this depends upon additional research. | 

### Provide Caregivers definitive information area about the PCAFC on VA.gov
At present, Caregiver.VA.gov, [https://www.va.gov/health-care/family-caregiver-benefits/comprehensive-assistance/](https://www.va.gov/health-care/family-caregiver-benefits/comprehensive-assistance/), and [https://www.va.gov/caregiver-quick-start-guide.pdf](https://www.va.gov/caregiver-quick-start-guide.pdf) co-exist, and dyads expressed confusion when seeking information about the program. There is a need for a “single source of truth.”

|  User Story | Feature | Assumptions, Unknowns |
| ----------- | ----------- | ----------- |
| *As someone interested in the PCAFC, I shall have definitive data on the PCAFC, eligibility criteria, and guidelines on program roles and responsibilities on VA.gov so that info is easily accessible.* | User-centered PCAFC info, online VA form 10-10CG, eligibility criteria, guidelines | We assume we may consolidate the existing caregiver.va.gov and PCAFC page on VA.gov. |
| *As someone seeking information about the PCAFC on VA.gov, I shall be able to comprehend information readily so I may understand the PCAFC.* | Adherence to the [Plain Writing Act](https://plainlanguage.gov/), so info is easier to read, understand, | N/A |
| *As someone interested in the PCAFC, I shall be able to access VA form 10-10CG requirements so that I may prepare for applying.* | Centralized form requirements | N/A |
| *As someone interested in the PCAFC, I shall be able to understand the VA form 10-10CG application process so that I may capably plan.* | Focused info on the VA form 10-10CG application process | N/A |

### Searchable Caregiver-specific resources on VA.gov PCAFC area
Much of this new service uses existing components and infrastructure, but consumes / displays information in new ways better suited to Caregiver’s needs. 

|  User Story | Feature | Assumptions, Unknowns |
| ----------- | ----------- | ----------- |
| *As a Veteran or Caregiver, I should be able to search for and easily find Caregiver-related resources so that I can get the support I need to support the Veteran and/or Caregiver.* | Searchable Caregiver-specific resources on VA.gov PCAFC area | Participants asked for this, however the effort to deliver this is significant. |

### Creation of a Caregiver login, account, profile, and personalized portal
This enhanced Caregiver functionality significantly builds on and extends the current VA.gov infrastructure.

|  User Story | Feature | Assumptions, Unknowns |
| ----------- | ----------- | ----------- |
| *As a Caregiver, I should be able to create an account on VA.gov associated with the Veteran(s) I care for so that I can login using my own credentials.* | Authenticated Caregiver profile account creation, associated with the Veteran(s) they care for | That we can add different user types; inability to add this has halted projects in the past |
| *As a Caregiver, I should be able to sign into my account on VA.gov so that I may view the status of my application(s).* | Caregiver portal with one’s application(s) status | That we can save the form progress in the CARMA system by adding a field |
| *As a Caregiver, I should be able to log into my account on VA.gov so that I may view resources for my Veteran(s) and myself.* | Caregiver portal with resources for one’s circumstances and Zip Code | That we can pull data for this from various needed APIs without slowing UX significantly |
| *As a Veteran, I should be able to sign into my account on VA.gov so that I may view  my application’s status.* | Display application status in Vet’s account | That we can add a field for this to the Vet’s view |
| *As a Veteran or Caregiver applicant, I should be able to contact the CSC assigned to my application so that I may obtain assistance if I have questions about my application.* | Contact CSC assigned to one’s submission for assistance with one’s application  | That data may be pulled from needed APIs without slowing UX significantly to render user account with application status and assigned CSC |
| *As a Veteran or Caregiver applicant, I should be able to provide an ink signature with  my application so that I may certify the data is true to the best of my knowledge .* | Add wet signature to form | The checkbox signature recommended in Phase 1 may be insufficient, and this Phase 3 item may need to be moved to Phase 1. |

## Prioritized Roadmap

### Prioritized Roadmap

| Phase    | 1 - MVP for mandated timeline                                                                                                                                               | 2                                                                                                                                                                   | 3                                                                                                                                                                                                                                                                                                                                                               |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Goal     | Provide definitive information about the PCAFC on VA.gov, paired with the ability to submit VA Form 10-10CG online,  to meet mandated timeline for MVP | Enhancements to online VA form 10-10CG application and PCAFC, requiring additional and substantial research, design, and engineering                                | Creation of a Caregiver login, account, profile, personalized portal                                                                                                                                                                                                                                                                                            |
| Features | - Online VA Form 10-10CG application  - Confirmation of submission - Integration with CARMA - User-centered, authoritative PCAFC area of VA.gov        | - Searchable Caregiver-specific resources on VA.gov PCAFC area - Save submission in-progress - Enhance form signature, if needed - Obtain application status online | - Caregiver creates own profile account for login, associated w/ Veteran(s) cared for - Authenticated Caregiver portal w/ application(s) status, resources for their circumstances and Zip Code - Application status in Veteran’s view - Contact CSC assigned to their submission for assistance with their application  - Add wet signature to form, if needed |

### Phase 1
Goal: Provide the ability to submit VA Form 10-10CG online paired with definitive information about the PCAFC on VA.gov for MVP to meet the mandated timeline
- Online VA Form 10-10CG application 
- User-centered, authoritative PCAFC area of VA.gov 
- Confirmation of submission
- Integration with CARMA
- Obtain application status via Caregiver Support Line

### Phase 1 Sequence for Online VA form 10-10CG application with submission confirmation and integration with CARMA

#### User research
Conduct research with stakeholders and users to understand constraints, needs, priorities
####  UX strategy
Define a user-centered application workflow based on research findings
#### Design
- Design a prototype of the application process, coordinate with research to validate with users, iterate as needed
- Creation of a user-centered application process, and validating with users, will be the bulk of the effort
#### Develop
- The VA form 10-10CG will leverage React, as all VA.gov web forms do. It will tie into the existing VA.gov API and submit to the CARMA system. These VA.gov applications are largely created by a scaffold generator so basic setup is automated with some configuration.
- Custom code will be created for the VA form 10-10CG to submit data to the CARMA system. The components were created with this type of customization in mind. We will also need to work with the CARMA team to create areas for data submission.
- Develop application with CARMA API endpoints
- Validate with unit tests 
#### QA
- QA with user testing, iterate, or generate backlog for additional work

### Phase 1 Milestones for Online VA form 10-10CG application

#### Initial VA 10-10CG Form Development, Single Applicant
- User research findings to understand use cases, priorities, constraints
- Development of a simple VA form 10-10CG application workflow to be completed by one person
- Content review of the Form to ensure comprehension and ease-of-use
- Integration with CARMA; proof that data can flow appropriately
- Usability testing, QA, and UAT
#### VA 10-10CG Form Workflow, Multiple Signatures
- User research findings to understand use cases, priorities, constraints
- Development of VA form 10-10CG application workflow to transfer a form initiated by the Veteran or Caregiver to others who need to sign
- Usability testing, QA, and UAT
#### Improving VA Form 10-10CG Discoverability
- Well-researched strategy for directing as many people as possible to the online form
- User-centered strategy for reconciling and deprecating and/or redirecting existing PDF links

### Phase 1 Sequence for User-centered, authoritative PCAFC area of VA.gov 

####  User research
Conduct research with stakeholders and users to understand constraints, needs, priorities
#### UX strategy
Define design strategy based on research findings
#### Information architecture (IA) & content strategy
- Inventory and audit existing content to define architecture, co-create taxonomy with users, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
- Content review, creation, copy editing, and information architecture is the bulk of the effort
#### Design
- Create site design leveraging the design.va.gov patterns, prototype, and coordinate with user research to validate with users
- Designing a user-centered flow of information will be the bulk of the effort
- Design and research for obtaining application status, beyond calling the Caregiver Support Line, would be included in this phase of work, while feature delivery is scoped for Phase 2
#### Develop
- Build pages for VA.gov using existing infrastructure
- Validate with unit tests
#### QA
Validate with user testing, iterate, generate backlog for additional work

### Phase 1 Milestones for User-centered, authoritative PCAFC area of VA.gov 

#### Definitive PCAFC Website Content
- User research findings regarding use cases, guidelines, instructions, criteria, and resources that support learning about the PCAFC
- Information architecture to organize content so it is optimized and user-centered
- Content review to ensure comprehension and ease-of-use
- Curated content, consolidating existing sources with necessary supplements
#### PCAFC Website Development
- User-centered designs built with the VA design system patterns and best practices 
- User research findings to inform and supplement functionality
- Development of system architecture to support transfer and maintenance of website
#### Service Strategy
- User-centered strategy for reconciling the three disparate sources and deprecating and/or redirecting to a “single source of truth”
- Processes for coordinating efforts for ongoing website maintenance

### Phase 2
Goal: Provide enhancements to online VA form 10-10CG application and PCAFC, requiring additional and substantial research, design, and engineering
- Searchable Caregiver-specific resources on VA.gov PCAFC area
- Save submission in-progress
- Enhance form signature, if needed
- Obtain application status online

### Phase 2 Sequence for Searchable Caregiver-specific resources on VA.gov PCAFC area

#### User research
- Research with users to determine information to include and understand use cases
- Interviews with stakeholders (engineering) to determine feasibility
#### UX strategy
Define approach based on research
#### IA & Content Strategy
Inventory and audit content to define architecture, co-create taxonomy with users, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
#### Design
Design user-centered prototypes, coordinate with user research for user validation, iterate
#### Develop
- Research to understand complexity and feasibility of desired solutions for vets  API endpoints and resources
- Search functionality for local Veteran resources currently exists on VA.gov. We propose to use that same search component but connect to resources for Caregivers through the vets API.  
- Coordinate with the team on Search.Va.gov to create API endpoints to access and migrate resources to search.va.gov database
- Engineering of front-end components, unit testing
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 2 Sequence for Save submission in-progress

#### UX Strategy
Evaluate options and define course of action
#### Develop
- Existing “Save in Progress” component will be used on the front-end but will need to be connected to, and have services built out in, for new functionality in the vets API; this functionality requires working with the CARMA team to create a field in the CARMA system that can save a form’s current progress point and allow that progress to be called when the form is continued; functionality calls for creating a vets API infrastructure to support and use the progress data from the CARMA system
- Set up fields in CARMA to save progress
- Extend save-in-progress to hit CARMA for progress data
#### Design
Pair design with development to align with VA design standards 
#### User Research
Validate with users, iterate
#### QA
Unit test components, validate with users and UX

### Phase 2 Sequence for Obtain application status improvements
Users may obtain application status in Phase 1 via the Caregiver Support Line. Phase 1 will include user research, IA, design, and user validation of potential improvements for obtaining application status, while development will occur in Phase 2. An online application status mitigates potential load on the contact center that may result from program expansion. Scoping delivery for Phase 2 is to scope MVP for realistic May 2020 deliverable to meet the mandate.

#### UX Strategy
Evaluate options and define course of action
#### Develop
- Determine existing application status field in CARMA system and possible API responses. Based on that, if this field does not exist it will need to be created.
- Build back-end API endpoint to retrieve status from CARMA system
- Write unit tests and Integration tests for back-end API endpoint
- Build front-end components to display application status
- Write unit tests, integration tests, and smoke tests
#### QA
Test on staging, validate with users and UX

### Phase 2 Sequence for Enhance form signature (if needed)

#### User Research
Research user-centered workflow for multiple people signing application
#### UX Strategy
Design a user-centered application workflow based on research findings
#### Design
Design a prototype of the process, coordinate with research to validate with users, iterate as needed
#### Develop
- Build needed back-end API endpoints for “sharing” the form (however that is designed)
- Unit test and integration test components
- Build or extend front-end components as needed. Unit test, integration test, and smoke test components
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 3
Goal: Provide creation of a Caregiver login, account, profile, personalized portal
- Caregiver creates own profile account for login, associated w/ Veteran(s) cared for
- Authenticated Caregiver portal w/ application(s) status, resources for their circumstances and Zip Code
- Application status in Veteran’s view
- Contact CSC assigned to their submission for assistance with their application 
- Add wet signature to form, if needed 

### Phase 3 Sequence for Caregiver creates their own profile account for login, associated with the Veteran(s) they care for

#### User research
- Research with users to understand the user expectations
- Interviews with stakeholders (engineering) to determine feasibility
#### UX strategy
Define the course of action based on research
#### IA & Content Strategy
Inventory and audit content to define architecture, co-create taxonomy with users, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
#### Design
- Design user-centered Create Account flows for Veteran, Caregiver-Primary, and Caregiver-Secondary, plus associations 
- Create prototypes, coordinate with user research for user validation, iterate
#### Develop
- While anyone can create an account on VA.gov today, accounts are not specific to a “type” of user (i.e. Veteran or Caregiver), nor are any accounts associated with other(s), such as a Veteran(s) and their Caregiver(s). 
- Research to split functionality and permissions between “Veteran”, “Caregiver-Primary”, and “Caregiver-Secondary” user roles; determine needed back-end components to be modified for these user roles, what front-end components need to be modified for these user roles; the ability to “associate” Caregiver account(s) with Veteran account(s)
- Design and build new database structures for “Veteran”, “Caregiver-Primary”, and “Caregiver-Secondary” user roles, allow a Caregiver(s) (who may also be a Veteran) to associate with Veteran(s), update all API endpoints to use separate user roles and permissions, associate accordingly, and render info from.va.gov database
- Engineering of front- and back-end components, unit testing
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 3 Sequence for Personalized Caregiver portal with application(s) status and resources relevant for their circumstances and location

#### User research
Research with users and stakeholders to understand range of application status, user scenarios, and desired, as well as available, Caregiver resources
#### UX strategy
Define the course of action based on research
#### IA & Content Strategy
Inventory and audit content to define architecture, co-create taxonomy with users, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
#### Design
Design user-centered solution to communicate application status and personalized resources in prototypes, coordinate with user research for user validation, iterate
#### Develop
- The form status functionality will need to be created from scratch, all API endpoints, front-end, back-end, and infrastructure components will need to be researched, designed, and built from the ground up.
- Design and build back-end API endpoints to retrieve application status data from CARMA system
- Build or extend existing front-end libraries to display application status data
- Build front-end components to display personalized results
- Design and build back-end API endpoints to retrieve data from multiple places determined in the first phase
- Unit test, integration test, and smoke test front- and back-end components and API endpoints
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 3 Sequence for Display application status in Veteran account
(much the same as for Caregiver account status)

#### User research
Research with stakeholders to understand range of application status and workflow possibilities
#### UX strategy
Define the course of action based on research
#### IA & Content Strategy
Inventory and audit content to define architecture, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
#### Design
Design user-centered solution to communicate application status in prototypes, coordinate with user research for user validation, iterate
#### Develop
- Design and build back-end API endpoints to retrieve application status data from CARMA system
- Unit test and integration test API endpoints
- Build or extend existing front-end libraries to display application status data. Unit test, integration test, and smoke test front-end components
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 3 Sequence for Contact CSC assigned to application submission for assistance with application, which could be presented outside of a Caregiver profile

#### User Research
- Research to further understand how users and stakeholders might want to communicate beyond the information to contact the Caregiver Support Line by telephone 
- Interviews with stakeholders (engineering) to understand feasibility, risks, and options
#### UX Strategy
Define the course of action based on research, to build this feature requested by dyads
#### IA & Content Strategy
Inventory and audit content to define IA, inform content strategy, address content needs, and ensure outcome meets the Plain Writing Act requirements
#### Design
Design prototypes, coordinate with research to validate with users, iterate as needed
#### Develop
- Research feasibility of desired solutions to provide enhanced ability to contact the CSC assigned to a submitted application
- Requires authenticated Caregiver account, and accessed to personalized data
- Add solution to PCAFC area of VA.og
- Unit test, integration test, and smoke test
#### QA
QA with user testing, iterate, or generate backlog for additional work

### Phase 3 Sequence for Add wet signature to form, if needed

####  User research
- Research with users to understand use cases
- Interviews with stakeholders to determine feasibility
#### UX strategy
Define the course of action based on research
#### Design
Design user-centered prototypes, coordinate with user research for user validation, iterate
#### Develop
- Research to understand complexity and feasibility of desired solutions
- Build new or extend existing solution. 
- Unit test, integration test, and smoke test
#### QA
QA with user testing, iterate, or generate backlog for additional work

## Proposed Roadmap

### Roadmap Summary
Recommended phases are intended to ensure meeting the mandated requirements for May 2020. 
- The items recommended for the MVP are the minimum necessary to provide clear guidance, instructions, and assistance paired with the ability to complete and submit the VA form 10-10CG online.  
- The Phase 2 and 3 scope will enhance the experience for Veterans and Caregivers, allowing for sufficient research, design, system architecture changes, and validation with users. 
- Phase 2 aims to provide enhancements that are more complicated than may be implemented by Summer 2020. 
- Phase 3 requires significant research, as well as process and architecture modernization. Phase 3 is dependant on authorization for this particularly complicated functionality. If these features are desired, resources must be allocated for additional research to define, engineering to adapt systems, as well as design to create and validate solutions.
