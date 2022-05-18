<!-- markdownlint-disable no-duplicate-heading -->

# Editing Demographics Data during Pre-Check-In

- [Editing Demographics Data during Pre-Check-In](#editing-demographics-data-during-pre-check-in)
  - [Slack Channels](#slack-channels)
  - [Team Members - HCE](#team-members---hce)
  - [Related Documents](#related-documents)
  - [Problem Statement](#problem-statement)
    - [Ideal situation](#ideal-situation)
    - [Current Situation](#current-situation)
  - [Outstanding Questions](#outstanding-questions)
    - [Engineering Questions](#engineering-questions)
    - [Staff Facing Questions](#staff-facing-questions)
    - [UX Questions](#ux-questions)
  - [Measuring Success](#measuring-success)
  - [Systems in play](#systems-in-play)
    - [CHIP](#chip)
    - [LoROTA](#lorota)
    - [Profile Service](#profile-service)
    - [VA Profile](#va-profile)
    - [Address validation API](#address-validation-api)
    - [VeTExt](#vetext)
    - [Vets-API](#vets-api)
    - [Vets Website](#vets-website)
    - [VISTA](#vista)
  - [Recommend Solutions](#recommend-solutions)
    - [Feature Documentation](#feature-documentation)
    - [Use the existing VA Profile service exclusively](#use-the-existing-va-profile-service-exclusively)
  - [User Stories to Validate against, Happy Paths](#user-stories-to-validate-against-happy-paths)
    - [Scenario Setup](#scenario-setup)
    - [Scenario 1: User has NOT _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL](#scenario-1-user-has-not-fully-authenticated1-with-their-vagov-credentials-prior-to-clicking-on-the-url)
    - [Scenario 2: User HAS _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL](#scenario-2-user-has-fully-authenticated1-with-their-vagov-credentials-prior-to-clicking-on-the-url)
  - [User Stories to Validate against, Edge Cases](#user-stories-to-validate-against-edge-cases)
    - [Scenarios Setup](#scenarios-setup)
    - [Assumption](#assumption)
    - [Scenario 1: User attempts to submit demographics information without any edits](#scenario-1-user-attempts-to-submit-demographics-information-without-any-edits)
    - [Scenario 2: User attempts to submit blank demographics information](#scenario-2-user-attempts-to-submit-blank-demographics-information)
    - [Scenario 3: User attempts to submit demographics information after browser session has timed out](#scenario-3-user-attempts-to-submit-demographics-information-after-browser-session-has-timed-out)
    - [Scenario 4: User submits valid demographics information changes and their is an error downstream in the services layer](#scenario-4-user-submits-valid-demographics-information-changes-and-their-is-an-error-downstream-in-the-services-layer)
    - [Scenario 5: User attempts to submit invalid demographics](#scenario-5-user-attempts-to-submit-invalid-demographics)
    - [Scenario 6: User performs partial edits but does not submit the changes](#scenario-6-user-performs-partial-edits-but-does-not-submit-the-changes)
    - [Scenario 6: Address Validation with Postal Service](#scenario-6-address-validation-with-postal-service)
  - [Workflows we are not using](#workflows-we-are-not-using)
    - [Scenario: Use the existing VA.gov Profile Interface](#scenario-use-the-existing-vagov-profile-interface)
      - [Workflow](#workflow)
      - [Reasoning](#reasoning)
      - [Outstanding Questions](#outstanding-questions-1)
    - [Scenario: Use the existing VA Profile service(different from VA.gov Profile) exclusively](#scenario-use-the-existing-va-profile-servicedifferent-from-vagov-profile-exclusively)
      - [Workflow](#workflow-1)
      - [Reasoning](#reasoning-1)
      - [Outstanding Questions](#outstanding-questions-2)
  - [Meetings: Notes and next steps](#meetings-notes-and-next-steps)

## Slack Channels

- [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM)
- [#check-in-experience-engineering](https://dsva.slack.com/archives/C02G6AB3ZRS)
- [#check-in-experience-ux](https://dsva.slack.com/archives/C02GXKL8WM6)

## Team Members - HCE  
  
|Name|Role|Email|
|----|----|-----|
|Patrick Bateman|Product Owner/Office of the CTO|patrick.bateman@va.gov|
|Stephen Barrs|Architect/Lead|stephen.barrs@va.gov|
|Corey Parker|Sr. Product Manager|corey.parker@gcio.com|
|Kristen McConnell|Managing Senior UX Designer HCE|Kristen.McConnell@adhocteam.us|
|Nira Datta|UX/Content/Research|nira.datta@civicactions.com|
|Ya-ching Tsao|Product Designer HCE|yaching.tsao@civicactions.com|
|Zach Park|UX/UI Designer HCE|zach.park@agile6.com|
|Adrian Rollett|Software Engineer HCE|adrian.rollett@agile6.com|
|Mark Dewey|Senior Front End Engineer HCE|mark.dewey@gcio.com|
|Brian Seek|Front End Engineer HCE|brian.seek@civicactions.com|
|Dan Goodwin|Front End Engineer HCE|dan.goodwin@civicactions.com|
|Gaurav Gupta|Senior Engineer HCE|ggupta@kindsys.us|
|Kanchana Suriyamoorthy|Senior Engineer HCE|ksuriyamoorthy@kindsys.us|
|Dillo Raju|Senior Back End Engineer HCE|dillo.raju@gcio.com|

## Related Documents

- [Sketch - Editing wireframes](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/p/56D56797-C485-4B53-95E7-36EBF66B6698/canvas)
- [Sketch - Overall pre-check-in MVP wireframes](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
- [Interactive Sketch prototype](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/a/PGzGPJr/play)
- [Check-In Test Data Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
- [Check-In Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/README.md)
- [Research Documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research)
- [Engineering Documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering)
- [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)  

## Problem Statement

> **In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
> **As a** Veteran  
> **I want** the ability to securely edit and save my _demographics data_[^2] to the va systems during my Pre-Check-In work flow  

### Ideal situation

Veterans can update their _demographics data_[^2] for upcoming care(appointments) during their Pre-Check-In workflow through the va.gov website and their updated _demographics data_[^2] is saved instantly to all of the internal systems which require and rely on that data for business needs.

### Current Situation

Veterans **cannot** update their _demographics data_[^2] for upcoming appointments during their Pre-Check-In workflow through the va.gov website. Veterans can update the **contact** information [^3] portion of their total demographics set through their **VA.gov profile**, after they have _fully authenticated_[^1] on the va.gov website. However, currently, there are no workflows, business or engineering, which facilitate a veteran to update their next-of-kin or emergency contact information, and save that updated information to relevant internal VA systems through the va.gov website. Not having the ability to update _demographics_data_[^2] is a loss of value to veterans and the Pre-Check-In feature.

## Outstanding Questions

### Engineering Questions

- How are we establishing an integration with the VA Profile service from the CHIP service?
- Who is responsible for initiating the conversation with the VA Profile team?
- What is the engineering scope for establishing the integration between the CHIP service and the VA Profile service?
- Currently, VA Profile only supports updating a veteran's contact information.
- We cannot submit a veteran's updated _Next-of-Kin_ or _Emergency Contact_ information to the VA Profile service
- Can we get the VA Profile team to support updating _Next-of-Kin_ or _Emergency Contact_ information?
- Who will be responsible for spear heading this initiative?
- How long will it take the VA Profile team to provide this additional functionality if they agree to implement our request?
- How will this affect other teams on va.gov?
- Will the user demographics changes be reflected instantaneously across the relevant VA systems?
  - What all systems are we updating? Are VBA databases impacted too? What does VA Profile integrate with? We need to know, because Veterans want to know what is impacted when making a change within pre-check-in.(We will surface this information in the UI.)
- What is the subset of information that can edited vs what we want to be edited?
- What systems does the updated _demographics data_[^2] need to be saved to?
- What all systems are we updating? Are VBA databases impacted too? What does VA Profile integrate with? We need to know, because Veterans want to know what is impacted when making a change within pre-check-in.(We will surface this information in the UI.)
- Can we programmatically access a user's last name and SSN, necessary for performing minimal auth against LoROTA, after the user has fully authenticated on va.gov?
- Where does user demographics information(contact, next-of-kin, emergency-contact) belonging to a veteran live?
  - The VA Profile team is responsible for the veterans contact information.
  - The VA Profile team will be responsible for the next-of-kin and emergency-contact data belonging to veterans(once the team has agreed to support these)
  - We're not certain at this point about what databases or systems house the veterans _demographics data_[^2]
- Where can we find the contact information for the VA Profile team?
  - Corey to find out
- Who is responsible for initiating the conversation with the VA Profile team?
  - Stephen Barrs will serve as a potential point of contact while we explore the integration
  - Product to Product communication to be established
- How can we validate an address which a veteran might update or enter from the UI?
  - VA Profile API provides its clients an address validation endpoint which we can use to make sure that the provided address is valid
  - Do we need to validate next of kin and emergency contact addresses in addition to Veteran addresses?
- Can we get the VA Profile team to support updating _Next-of-Kin_ or _Emergency Contact_ information and who will be responsible for spear heading this initiative?
  - Discussion held on 2/4/22 with VA Profile, _Next-of-Kin_ is housed in the _Associated Party_ payload and is already supported. Need to verify data structure.
  - _Emergency Contact_ still to be determined.
- How long will it take the VA Profile team to provide this additional functionality if they agree to implement our request?
  - Pending
- How will this affect other teams on va.gov? Will this have a negative effect on the VA.gov Profile system?
- Will the user demographics edits/changes be reflected instantaneously across the relevant VA systems?
  - What all systems are we updating? Are VBA databases impacted too? What does the system we are integrating with integrate with? We need to know, because Veterans want to know what is impacted when making a change within pre-check-in.(We will surface this information in the UI.)
- Will it be confusing for the user to navigate to their profile page after editing their next-of-kin or emergency-contact information and not see that information populated in the profile?
- Does VA Profile have the ability to update the timestamp on file 41.41 if the veteran confirms that none of their demographics information has changed using their mobile device or desktop computer?
- What happens when a veteran updates their contact information from the VA.gov Profile today? Are the staff members able to view that information immediately through the VSE application? If so, was the timestamp on file 41.41 updated? Is the update associated with an external system?
- Can we still provide this(demographics edit) functionality to the veteran through the Pre-Check-In flow if our ability to update file 41.41 is denied?

### Staff Facing Questions

- VSE Clinical Staff will need access to the veterans updated _demographics data_[^2]. What additional work(integrations/endpoint-support/components/lambdas) will CHIP need to provide in-order to facilitate this access for VSE?
- When a staff member confirms a veterans information on site, the timestamp on file 41.41 is updated and the staff members ID is associated with the file and the updated timestamp. This action that a staff member takes on multiple occasions with several veterans on site is taken into consideration when the staff members receives a performance evaluation. Will an external system(the pre-check-in flow) performing the same job as a staff member cause an issue?
- Will an external system(VA Profile for instance) be given permission to update file 41.41 without confirmation by a staff member?

### UX Questions

- Do we need address validation on emergency contact and next of kin?
- Do we need error message wording if the Veterans hits "update" and the information isn't immediately seen on the review pages? Check with the profile team on how they handle this and if they have any wording already created.
- Look into the zip code component. How does it handle the zip 4? There is a backlog ticket in platform to improve it. Do we need to do the work ourselves?
- Should we reuse any of this information from VA.gov profile? [Test cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/qa-508/test-cases.md) and [Error messages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/error%20messages/ErrorCodesForOverride_withExamples.xlsx)

## Measuring Success

1. A veteran should be able to update their existing _demographics data_[^2] for upcoming appointments during their Pre-Check-In workflow through the va.gov website.
2. The feature is available for use in production, with metrics of usage
3. The updated demographics information should be propagated to relevant internal systems

## Systems in play

### CHIP

- Check-In Integration Point API.
- Provides Veterans with a unified front door experience for preparing for and checking into their clinical appointments.
- Includes, changing the process for outpatient clinical workflow that improves efficiency and decrease devices requiring publicly accessible shared surfaces that may increase the transmissions of communicable diseases like COVID-19.
- [CHIP Readme](https://github.com/department-of-veterans-affairs/chip#readme)  

### LoROTA

- Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique key (UUID)passed between a user and various services to authenticate that user for certain low risk activities, like form submission.
- [LoROTA Readme](https://github.com/department-of-veterans-affairs/lorota#readme)  

### Profile Service

- Provides functionality related to grouping of clinics  

### [VA Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

- is a team not part of OCTO/DEPO.  They are an entirely separate team that we work with, and they work with a lot of other teams.
- This was formerly known as Vet360.
- They provide a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.
- [Address validation docs](https://developer.va.gov/explore/verification/docs/address_validation?version=current)

### Address validation API
- Sandbox endpoint: https://sandbox-api.va.gov/services/address_validation/v2/candidate
- Prod endpoint: https://api.va.gov/services/address_validation/v2/candidate

- API docs: https://developer.va.gov/explore/verification/docs/address_validation?version=current 

- Requires an API key for the sandbox and production. I have applied for a sandbox key. For production we will need to apply again.

- Initial research in the comments of this ticket: https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/36745

### [VeTExt](https://www.va.gov/health/VEText.asp)

is an interactive mobile solution to send notifications through text messages to veterans about and around their upcoming and scheduled appointments.

### Vets-API

- This project provides common APIs for applications that live on VA.gov (formerly vets.gov APIs)
- The Check-In module engine inside the Vets-API acts as general purpose service and as a service bus to the LoROTA service and the CHIP API.
- Built with Ruby on Rails
- Is the main backend service for the Vets-Website
- Calls the LoROTA and CHIP services for Check-In and Pre-Check-In
- [Vets-API Readme](https://github.com/department-of-veterans-affairs/vets-api/#readme)  
- [Check-In Engine Readme](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/check_in#readme)  

### Vets Website

- This is the application that powers the main va.gov website.  
- Day of Check-In: This application is for veterans to check into their health appointments on the day of care.
- Pre-Check-In: This application is going to be filled out by veterans days before the appointment. The veteran will be able to confirm various aspects of their appointment and information.
- Built with reactJS
- Uses Vets-API as the main backend API and service bus
- [Day of Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/check-in/day-of#readme)  
- [Pre-Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/check-in/pre-check-in#readme)  

### VISTA

- Stands for Veterans Health Information Systems and Technology Architecture, and it's one of the VA's systems for managing veterans electronic health records.

## Recommend Solutions

### Feature Documentation

- [Integration with Authentication](demographics_edit_auth.md)
- [Edit data flow](demographics_edit_data_flow.md)

### Use the existing VA Profile service exclusively

- User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop

- Vets-Website requests pre-stored _demographics data_[^2] for the user from Vets-API
- Vets-API Check-In service requests for the latest user data from the LoROTA service
- Vets-API returns the user data back to the Vets-Website(VA.gov FE)
- User edits ALL of their demographics information in the UI and submits the changes
- Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
- Vets-API uses a new downstream integration with the VA Profile, yet to be established via the CHIP service, to submit the updated _demographics data_[^2] to the VA Profile service
- VA Profile updates and saves the user's demographics information in the VA systems
- VA Profile returns a success status and message back to the CHIP service
- The CHIP service responds back with a success message and status to the Vets-API
- Vets-API invokes the data refresh endpoint on the CHIP service
- CHIP service pulls the user's latest demographics information(updated previously by VA Profile) and then updates LoROTA with that data
- CHIP returns a success status and message back to Vets-API
- Vets-API queries LoROTA for the user's latest _demographics data_[^2] with the appropriate UUID
- Vets-API returns a success message as well as the newly updated _demographics data_[^2] back to the Vets-Website
- User is able to view their updated demographics information in the UI on their modbile device or desktop

## User Stories to Validate against, Happy Paths

### Scenario Setup

**Given** I have an upcoming appointment in the system at a facility/clinic where I'm registered at  
**And** currently it's before the day of the appointment  
**And** I have received a SMS notification with a shortened URL to the Pre-Check-In flow for the appointment  
**And** I have clicked on the shortened URL  
**And** I have been successfully redirected to Pre-Check-In starting page on the va.gov site  

### Scenario 1: User has NOT _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL  

**Given** I have not _fully authenticated_[^1] prior using my va.gov credentials  
**And** I have successfully, minimally authenticated using my last name and the last four digits of my SSN  
**And** I am looking at my pages with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am successfully redirected to the edit page for a specific demographic (such as mailling address) and submit the changes
**Then** I return to the main demographics page upon cancel, submission of chnages, or navigating via breadcrumbs  
**when** I login using my va.gov credentials  
**Then** I am successfully redirected back to my Pre-Check-In demographics page  
**And** I have the ability to edit all of my _demographics data_[^2]  
**When** I edit any or all of my _demographics data_[^2] and submit the changes  
**Then** I can see that my changes have been validated  
**And** can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  

### Scenario 2: User HAS _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL  

**Given** I have _fully authenticated_[^1] prior using my va.gov credentials  
**Then** my minimal authentication was automatically handled using the information from my profile  
**And** I'm not shown the minimal authentication page  
**And** I am looking at my pages with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am NOT redirected to the main va.gov login page  
**And** I remain on the Pre-Check-In flow demographics page  
**And** I now have the ability to edit all of my demographics information
**Then** I am successfully redirected to the edit page for a specific demographic (such as mailling address) and submit the changes
**Then** I return to the main demographics page upon cancel, submission of chnages, or navigating via breadcrumbs
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** I can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it

## User Stories to Validate against, Edge Cases

### Scenarios Setup

**Given** I have an upcoming appointment in the system at a facility/clinic where I'm registered at  
**And** currently it's before the day of the appointment  
**And** I have received a SMS notification with a shortened URL to the Pre-Check-In flow for the appointment  
**And** I have clicked on the shortened URL  
**And** I have been successfully redirected to Pre-Check-In starting page on the va.gov site  

### Assumption

**In order** to understand why my demographics update failed and what actions I need to take next  
**As a** Veteran  
> **I want** the website to catch my actions and show me meaningful messages

### Scenario 1: User attempts to submit demographics information without any edits

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have not made any changes to my current _demographics data_[^2]  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which requires me to make a change to my information before submitting  
**And** my browser should not initiate a request to any APIs in order to update my information  
**And** I should continue to remain on the demographics page  

### Scenario 2: User attempts to submit blank demographics information

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have cleared the form of all or some of my demographics information  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which requires me to enter valid demographics information in all required fields  
**And** my browser should not initiate a request to any APIs inorder to update my information  
**And** I should continue to remain on the demographics page  

### Scenario 3: User attempts to submit demographics information after browser session has timed out

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have made changes to my current demographics information on the form
**And** I wait on the edit page until my va.gov session times out  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which informs me that my va.gov session has timed out and that I need to re-autheticate fully again before editing
**And** I should continue to remain on the demographics page

### Scenario 4: User submits valid demographics information changes and their is an error downstream in the services layer  

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have made valid changes to my current demographics information  
**When** I submit the form to update and save my information to the VA systems  
**And** there is an error processing the data downstream or the service is simply unavailable  
**Then** I should be shown a message which apologizes to me and asks me to retry again or see a staff member
**And** I should continue to remain on the demographics page  
**And** the edits I made prior to the error should still be available in the form

### Scenario 5: User attempts to submit invalid demographics

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have entered meaningless information(random words or strings) into the form
**When** I submit the form to update and save my information to the VA systems  
**Then** the backend services should be smart enough to recognize that something is not right with the submitted information  
**And** I should be shown a message asking me to talk with a staff member first  
**And** I should continue to remain on the demographics page  

### Scenario 6: User performs partial edits but does not submit the changes

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form
**And** I have entered partial updates into the form  
**And** I take no further action  
**And** I return to my demographics page again before my the time of my appointment  
**And** I fully authenticate  
**When** I get redirected to my demographics page  
**Then** I should see my demographics information from when I first got the pre-check-in flow SMS  
**And** I should see that my partial edits to my demographics were not saved  

### Scenario 6: Address Validation with Postal Service

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form for an address field
**And** I have entered partial updates into the form that would fail address validation
**And** I try to save my changes
**Then** I should see a message informing me that the address is invalid with suggestions for valid addresses
**And** I should be able to select a recommended address or keep my address that I inputted
**And** I should be able to save my changes
**And** I should see that my partial edits to my demographics were saved client side
**And** I am able to submit my changes to the va.gov system

## Workflows we are not using

> documenting for posterity

### Scenario: Use the existing VA.gov Profile Interface

#### Workflow

- User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop
- Vets-Website requests pre-stored _demographics data_[^2] for the user from Vets-API
- Vets-API Check-In service requests for the latest user data from the LoROTA service
- Vets-API returns the user data back to the Vets-Website(VA.gov FE)
- User edits ALL of their demographics information in the UI and submits the changes
- Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
- Vets-API then internally leverages the VA.gov Profile interface and directly submits the updated _demographics data_[^2] to the VA.gov Profile
- VA.gov Profile, through it's set of down stream services, updates and saves the user's demographics information in the VA systems
- VA.gov Profile returns a success status and message back to the Vets-API
- Vets-API invokes the data refresh endpoint on the CHIP service
- CHIP service pulls the user's latest demographics information and then updates LoROTA with that data
- CHIP returns a success status and message back to Vets-API
- Vets-API queries LoROTA for the user's latest _demographics data_[^2] with the appropriate UUID
- Vets-API returns a success message as well as the newly updated _demographics data_[^2] back to the Vets-Website
- User is able to view their updated demographics information in the UI on their modbile device or desktop

#### Reasoning

There is not a desired UX for leaving an app, using the Profile section and returning back to the middle of the app.

#### Outstanding Questions

- Currently, we can only submit a veteran's updated _contact_ information to the VA.gov Profile
- We cannot submit a veteran's updated _Next-of-Kin_ or _Emergency Contact_ information to the VA.gov Profile
- VA.gov Profile team has no plans in their roadmap to support showing/updating _Next-of-Kin_ or _Emergency Contact_ information
- How can we get the VA.gov Profile team to support the additional demographics feature requirements?
- Who will be responsibile for initiating this conversation and overseeing this initiative?
- How long will it take for this additional ability to be delivered by the VA.gov Profile team?
- How will this addition affect other teams on va.gov?
- If the VA.gov Profile team decides not to support showing or updating next-of-kin and emergency contact information, do we(Check-In) provide partial functionality for updating only the veterans contact information through them?
- Will the user demographics changes be reflected instantaneously across the relevant VA systems?
  - What all systems are we updating? Are VBA databases impacted too? What does VA.gov Profile integrate with? We need to know, because Veterans want to know what is impacted when making a change within pre-check-in.(We will surface this information in the UI.)

### Scenario: Use the existing VA Profile service(different from VA.gov Profile) exclusively

#### Workflow

- User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop

- Vets-Website requests pre-stored _demographics data_[^2] for the user from Vets-API
- Vets-API Check-In service requests for the latest user data from the LoROTA service
- Vets-API returns the user data back to the Vets-Website(VA.gov FE)
- User edits ALL of their demographics information in the UI and submits the changes
- Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
- Vets-API uses a new downstream integration with the VA Profile, yet to be established via the CHIP service, to submit the updated _demographics data_[^2] to the VA Profile service
- VA Profile updates and saves the user's demographics information in the VA systems
- VA Profile returns a success status and message back to the CHIP service
- The CHIP service responds back with a success message and status to the Vets-API
- Vets-API invokes the data refresh endpoint on the CHIP service
- CHIP service pulls the user's latest demographics information(updated previously by VA Profile) and then updates LoROTA with that data
- CHIP returns a success status and message back to Vets-API
- Vets-API queries LoROTA for the user's latest _demographics data_[^2] with the appropriate UUID
- Vets-API returns a success message as well as the newly updated _demographics data_[^2] back to the Vets-Website
- User is able to view their updated demographics information in the UI on their modbile device or desktop

**This workflow is not being considered at this time**  

- User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop
- Vets-Website requests pre-stored _demographics data_[^2] for the user from Vets-API
- Vets-API Check-In service requests for the latest user data from the LoROTA service
- Vets-API returns the user data back to the Vets-Website(VA.gov FE)
- User edits ALL of their demographics information in the UI and submits the changes
- Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
- Vets-API submits the updated _demographics data_[^2] to a new service or a set of services
- Proposed new services update the user's demographics information, saving it to the appropriate VA systems
- Proposed service returns a success message and status back to the Vets-API
- Vets-API invokes the data refresh endpoint on the CHIP service
- CHIP service pulls the user's latest demographics information and then updates LoROTA with that data
- CHIP returns a success status and message back to Vets-API
- Vets-API queries LoROTA for the user's latest _demographics data_[^2] with the appropriate UUID
- Vets-API returns a success message as well as the newly updated _demographics data_[^2] back to the Vets-Website
- User is able to view their updated demographics information in the UI on their modbile device or desktop

#### Reasoning

To much red tape and duplication of efforts

#### Outstanding Questions

- Who can give our team the authorization to build this new service or services?
- Is it even possible to get the green light to do this from a business/legal/political standpoint?
- Who will be responsible for building these services?
- Will we get additional resources to accomplish this undertaking?
- What will be the responsibilies of this service or set of services?
- Where will these services be hosted?
- What tech stack will the services utilize?
- How long will it take to get these services up and running in all of our environments?
- How will these services ultimately update a veteran's demographics information in the VA systems?
- How long will it take to integrate Vets-API with the new services?
- Can we get another team to do the work on our behalf?
- Will we be duplicating functionality by not going with VA.gov Profile or VA Profile?

## Meetings: Notes and next steps
- 02/23/2022 Sprint Planning Breakout Session
  - Bring up VA Profile service integration with CHIP during team-of-teams meeting tomorrow(02/24/2022)
    - Should we integrate with Lighthouse, aka API Gateway, and wait for all the VA Profile endpoints to move to developer.va.gov?
    - Since Vets-API already integrates with Lighthouse, should we consider integrating it with the new VA Profile endpoints on the API Gateway?
  - Where can we view the VA Profile swagger(or equivalent) documentation?(02/24/2022)
  - Can we work on Edit and Test environment in parallel?
- 02/24/2022 Sprint Planning Continued
  - vets-api will integrate directly with lighthouse (not CHIP) for address verification
  - Stephen will work to get a timeline on lighthouse profile read/write api
  - if lighthouse timeline is too long, vets-api will work to integrate directly with va profile api
  - FE will work on both full auth and edit screens, kept behind feature flag
  - BE will work on setting up scaffolding the Lighthouse integration and mock data
  - Spike for figuring out how to handle minimal auth session vs full blown auth session

[^1]: **Fully authenticated**: User has authenticated on va.gov using their ID.me account or another identity provider.  
[^2]: **Demographics data**: Includes veteran contact information, next of kin information, and emergency contact information.  
[^3]: **Contact information:** Includes veteran's ?????
