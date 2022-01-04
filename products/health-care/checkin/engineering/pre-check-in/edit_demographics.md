
# Pre Check-in and day of Check-In: Demographics Editing - A Technical Discovery and Systems Architecture exploration document

## Table of Contents
- [Slack Channels](#slack-channels)
- [Team Members](#team-members)
- [Related Documents](#related-documents)
- [Pilot Site](#pilot-site)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [User Scenarios](#user-scenarios)
    - [Happy Path Stories](#happy-path-stories)
    - [Error Path Stories](#error-path-stories)
    - [Clever Case Stories](#clever-case-stories)
- [Exploring Workflows](#exploring-workflows)
    - [VA.gov Profile Exclusively](#use-the-existing-vagov-profile-exclusively)
    - [VA Profile Exclusively](#use-the-existing-va-profile-servicedifferent-from-vagov-profile-exclusively)
    - [Build New Services](#build-additional-systems-and-services-in-order-to-handle-updated-demographics-information)
- [Staff Facing Dependencies](#staff-facing-dependencies)
- [Engineering Questions](#engineering-questions)
- [Engineering Proposals](#engineering-proposals)
- [Engineering Solutions](#engineering-solutions)
- [Testing Questions](#testing-questions)
- [Testing Solution](#testing-solution)
- [Application Performance Management](#application-performance-management)
- [Applications and Services](#applications-and-services)
    - [Vets Website](#vets-website)
    - [Vets-API](#vets-api)
    - [CHIP](#chip)
    - [LoROTA](#lorota)
    - [Profile Service](#profile-service)
    - [Vista](#vista)
    - [VEText](#vetext)
    - [VA.gov Profile](#vagov-profile)
    - [VA Profile](#va-profile)
- [Footnotes](#footnotes)

### Slack Channels

- [#check-in-experience](https://dsva.slack.com/archives/C022AC2STBM)
- [#check-in-experience-engineering](https://dsva.slack.com/archives/C02G6AB3ZRS)
- [#check-in-experience-ux](https://dsva.slack.com/archives/C02GXKL8WM6)

### Team Members  
  
|Name|Role|Email|
|----|----|-----|

## Related Documents
* [Sketch](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
* [Check-In Test Data Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
* [Check-In Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/README.md)
* [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## Pilot Site

## Problem Statement
### Ideal situation
Veterans can update their _demographics data_[^2] for upcoming care(appointemnts) during their Pre-Check-In or their day of Check-In workflows through the va.gov website and updated _demographics data_[^2] is saved instantly to all of the internal systems which require and rely on that data for business needs.

### Reality
Veterans **cannot** update their _demographics data_[^2] for upcoming appointments during their Pre-Check-In or their day of Check-In workflows through the va.gov website. Veterans can update the **contact** information portion of their total demographics set through their **VA.gov profile**, after they have _fully authenticated_[^1] on the va.gov website. However, currently, there are no workflows, business or engineering, which facilitate a veteran to update their next-of-kin or emergency contact information, and save that updated information to relevant internal VA systems through the va.gov website.

### Consequences

Not having the ability to update _demographics_data_[^2] is a loss of value to the Check-In and Pre-Check-In features.

### Proposal

The Check-In-Experience team seeks to resolve this issue iteratively by leveraging existing engineering pipelines and systems, and additionally, identifying and implementing new systems and services which will facilitate the desired workflow.

## User Outcomes

### Positive
### Negative

## Business Outcomes

### Positive
### Negative

## Measuring Success

## User Scenarios

### Happy Path Stories

---

#### Case A:
> **In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
> **As a** Veteran  
> **I want** the ability to securely edit and save my demographics information to the va systems during my Pre-Check-In work flow  

#### Scenario Setup:    
**Given** I have an upcoming appointment in the system at a facility/clinic where I'm registered at  
**And** currently it's before the day of the appointment  
**And** I have received a SMS notification with a shortened URL to the Pre-Check-In flow for the appointment  
**And** I have clicked on the shortened URL  
**And** I have been successfully redirected to Pre-Check-In starting page on the va.gov site  

**Scenario:** User has NOT _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL  

**Given** I have not _fully authenticated_[^1] prior using my va.gov credentials  
**And** I have successfully, minimally authenticated using my last name and the last four digits of my SSN  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am redirected to the main va.gov login page  
**when** I login using my va.gov credentials  
**Then** I am successfully redirected back to my Pre-Check-In demographics page  
**And** I have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  

**Scenario:** User HAS _fully authenticated_[^1] with their va.gov credentials prior to clicking on the URL  

**Given** I have _fully authenticated_[^1] prior using my va.gov credentials  
**Then** my minimal authentication was automatically handled using the information from my profile  
**And** I'm not shown the minimal authentication page  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am NOT redirected to the main va.gov login page  
**And** I remain on the Pre-Check-In flow demographics page  
**And** I now have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** I can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it 

#### Case B:
> **In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
> **As a** Veteran  
> **I want** the ability to securely edit and save my demographics information to the va systems ON the day of Check-in  

**Scenario:** User has NOT not completed their Pre-check-in flow prior to the day of Check-in and user is not _fully authenticated_[^1]  

**Given** I have not completed my Pre-Check-In flow for an appointment  
**And** I am at the facility/location on the day of the appointment  
**And** I have arrived before the appointment is set to begin  
**And** I have not _fully authenticated_[^1] on va.gov prior to initiating the Check-in flow  
**And** I have initiated the Check-in in flow on my mobile device  
**When** I click on the Check-in URL  
**And** I successfully, and minimally, authenticate using my last name and the last four digits of my SSN  
**Then** I have started my Check-in flow  
**And** I can see my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am redirected to the main va.gov login page  
**when** I login using my va.gov credentials  
**Then** I am successfully redirected back to my Pre-Check-In demographics page  
**And** I have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  

**Scenario:** User has NOT not completed their Pre-check-in flow prior to the day of Check-in and user is _fully authenticated_[^1]  

**Given** I have not completed my Pre-Check-In flow for an appointment  
**And** I am at the facility/location on the day of the appointment  
**And** I have arrived before the appointment is set to begin  
**And** I have _fully authenticated_[^1] on va.gov prior to initiating the Check-in flow 
**And** I have initiated the Check-in in flow on my mobile device  
**When** I click on the Check-in URL  
**Then** my minimal authentication was automatically handled using the information from my profile  
**And** I'm not shown the minimal authentication page  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am NOT redirected to the main va.gov login page  
**And** I remain on the Check-In flow demographics page  
**And** I now have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** I can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  
**And** I can see that I have the ability to Check-In to my appointment without any further types of authentication  

### Error Path Stories

---
> **In order** to understand why my demographics update failed and what actions I need to take next  
> **As a** Veteran  
> **I want** to be shown clear and easy to understand failure notifications  

**Scenario:** User attempts to submit demographics information without any edits 

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have not made any changes to my current demographics information  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which requires me to make a change to my information before submitting  
**And** my browser should not initiate a request to any APIs inorder to update my information  
**And** I should continue to remain on the demographics page  

**Scenario:** User attempts to submit blank demographics information 

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have cleared the form of all or some of my demographics information  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which requires me to enter valid demographics information in all required fields  
**And** my browser should not initiate a request to any APIs inorder to update my information  
**And** I should continue to remain on the demographics page  

**Scenario:** User attempts to submit demographics information after browser session has timed out   

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have made changes to my current demographics information on the form    
**And** I wait on the edit page until my va.gov session times out  
**When** I submit the form to update and save my information to the VA systems  
**Then** I should be shown a message which informs me that my va.gov session has timed out and that I need to re-autheticate fully again before editing    
**And** I should continue to remain on the demographics page    

**Scenario:** User submits valid demographics information changes and their is an error downstream in the services layer  

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have made valid changes to my current demographics information  
**When** I submit the form to update and save my information to the VA systems  
**And** there is an error processing the data downstream or the service is simply unavailable  
**Then** I should be shown a message which apologizes to me and asks me to retry again or see a staff member 
**And** I should continue to remain on the demographics page  
**And** the edits I made prior to the error should still be available in the form    

### Clever Case Stories

---
> **In order** to not have a bad user experience when I use the demographics update feature in a way that it's not meant to be  
> **As a** Veteran  
> **I want** the website to catch my actions and show me meaningful messages   

**Scenario:** User attempts to submit invalid demographics 

**Given** I have _fully authenticated_[^1] using my va.gov credentials  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**And** I have entered into edit mode on the form  
**And** I have entered meaningless information(random words or strings) into the form   
**When** I submit the form to update and save my information to the VA systems  
**Then** the backend services should be smart enough to recognize that something is not right with the submitted information  
**And** I should be shown a message asking me to talk with a staff member first  
**And** I should continue to remain on the demographics page  

## Exploring Workflows

### Use the existing VA.gov Profile exclusively
* User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop
* Vets-Website requests pre-stored demographics data for the user from Vets-API
* Vets-API Check-In service requests for the latest user data from the LoROTA service
* Vets-API returns the user data back to the Vets-Website(VA.gov FE)
* User edits ALL of their demographics information in the UI and submits the changes
* Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
* Vets-API then internally leverages the VA.gov Profile interface and directly submits the updated demographics data to the VA.gov Profile
* VA.gov Profile, through it's set of down stream services, updates and saves the user's demographics information in the VA systems
* VA.gov Profile returns a success status and message back to the Vets-API
* Vets-API invokes the data refresh endpoint on the CHIP service
* CHIP service pulls the user's latest demographics information and then updates LoROTA with that data
* CHIP returns a success status and message back to Vets-API
* Vets-API queries LoROTA for the user's latest demographics data with the appropriate UUID
* Vets-API returns a success message as well as the newly updated demographics data back to the Vets-Website
* User is able to view their updated demographics information in the UI on their modbile device or desktop
#### Challenges:

### Use the existing VA Profile service(different from VA.gov Profile) exclusively
* User clicks on SMS for the Pre-Check-In workflow on their mobile device or desktop
* Vets-Website requests pre-stored demographics data for the user from Vets-API
* Vets-API Check-In service requests for the latest user data from the LoROTA service
* Vets-API returns the user data back to the Vets-Website(VA.gov FE)
* User edits ALL of their demographics information in the UI and submits the changes
* Vets-Website POSTs the updated information to a Vets-API endpoint in the Check-In module
* Vets-API uses a new integration with the VA Profile, yet to be established via the Check-In module, to submit the the updated demographics data to the VA Profile service
* VA Profile updates and saves the user's demographics information in the VA systems
* VA Profile returns a success status and message back to the Vets-API
* Vets-API invokes the data refresh endpoint on the CHIP service
* CHIP service pulls the user's latest demographics information and then updates LoROTA with that data
* CHIP returns a success status and message back to Vets-API
* Vets-API queries LoROTA for the user's latest demographics data with the appropriate UUID
* Vets-API returns a success message as well as the newly updated demographics data back to the Vets-Website
* User is able to view their updated demographics information in the UI on their modbile device or desktop
#### Challenges:

### Build additional systems and services in-order to handle updated demographics information
#### Challenges:

## Staff Facing Dependencies

## Engineering Questions

## Engineering Proposals

## Engineering Solutions

## Testing Questions

## Testing Solution

## Application Performance Management
* APM tools
    * [Datadog Check-In](https://app.datadoghq.com/dashboard/tmn-f5f-e9r/check-in-vets-api?from_ts=1638711177523&to_ts=1641303177523&live=true)
    * Cloudwatch
    * Grafana
    * [Sentry Error Tracking](http://sentry.vfs.va.gov/organizations/vsp/issues/?project=3&project=4)
    * ELK
    * [Loki Logs](http://grafana.vfs.va.gov/explore?orgId=1&left=%5B%22now-24h%22,%22now%22,%22Loki%20(Prod)%22,%7B%7D%5D)

## Applications and Services

### Vets Website

* This is the application that powers the main va.gov website.  
* Day of Check-In: This application is for veterans to check into their health appointments on the day of care. 
* Pre-Check-In: This application is going to be filled out by veterans days before the appointment. The veteran will be able to confirm various aspects of their appointment and information.
* Built with reactJS
* Uses Vets-API as the main backend API and service bus
* [Day of Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/check-in/day-of#readme)  
* [Pre-Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/check-in/pre-check-in#readme)  

### Vets-API

* This project provides common APIs for applications that live on VA.gov (formerly vets.gov APIs)
* The Check-In module engine inside the Vets-API acts as general purpose service and as a service bus to the LoROTA service and the CHIP API.
* Built with Ruby on Rails
* Is the main backend service for the Vets-Website
* Calls the LoROTA and CHIP services for Check-In and Pre-Check-In
* [Vets-API Readme](https://github.com/department-of-veterans-affairs/vets-api/#readme)  
* [Check-In Engine Readme](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/check_in#readme)  

### CHIP

* Check-In Integration Point API. 
* Provides Veterans with a unified front door experience for preparing for and checking into their clinical appointments. 
* Includes, changing the process for outpatient clinical workflow that improves efficiency and decrease devices requiring publicly accessible shared surfaces that may increase the transmissions of communicable diseases like COVID-19.
* [CHIP Readme](https://github.com/department-of-veterans-affairs/chip#readme)  

### LoROTA

* Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique key (UUID)passed between a user and various services to authenticate that user for certain low risk activities, like form submission.
* [LoROTA Readme](https://github.com/department-of-veterans-affairs/lorota#readme)  

### Profile Service

* Provides functionality related to grouping of clinics  

### VISTA

* Stands for Veterans Health Information Systems and Technology Architecture, and it's one of the VA's systems for managing veterans electronic health records.

### VEText

* VEText is an interactive mobile solution to send notifications through text messages to veterans about and around their upcoming and scheduled appointements. 
* [VEText Information](https://www.va.gov/health/VEText.asp)  

### VA.gov Profile

* The VA.gov profile provides a centralized place where users can see what information the VA knows about them, and where they can update that information as needed.
* Currently, the VA.gov profile supports the following information:
    * Personal information
    * Contact information
    * Military information
    * Direct deposit information
    * Notification preferences
    * Account security
    * Connected apps (managed by the Lighthouse team)
* References:
  - [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

### VA Profile
* This is a backend system that was formerly known as Vet360. 
* It came about in 2018 to act as a connector between a bunch of VA backends and frontends, so that veterans could update their info in one place and it would save everywhere (or almost everywhere). 
* The VA Profile team is not part of the OCTO/DEPO contracts. They are an entirely separate team that we work with, and they work with a lot of other teams.
* References:
  - [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## Footnotes
[^1]: Fully authenticated: User has authenticated on va.gov using their ID.me account or another identity provider.  
[^2]: Demographics data: Includes veteran contact information, next of kin information, and emergency contact information.  
