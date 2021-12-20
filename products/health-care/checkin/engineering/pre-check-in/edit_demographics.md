
# Pre Check-in, Demographics Editing: Systems Design and Architecture exploration

## Sections
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Related Documents](#related-documents)
- [User Scenarios](#user-scenarios)
    - [Happy Path Stories](#happy-path-stories)
    - [Error Path Stories](#error-path-stories)
    - [Clever Case Stories](#clever-case-stories)
- [Exploring Workflows](#exploring-workflows)
    - [Workflow One](#workflow-one)
- [Staff Facing Dependencies](#staff-facing-dependencies)
- [Engineering Questions](#engineering-questions)
- [Engineering Proposals](#engineering-proposals)
- [Engineering Solution](#engineering-solution)
- [Testing Questions](#testing-questions)
- [Testing Solution](#testing-solution)
- [Application Performance Management](#application-performance-management)
- [Applications and Services](#applications-and-services)
    - [Vets Website](#vets-website)
    - [Vets-API](#vets-api)
    - [CHIP](#chip)
    - [LoROTA](#lorota)
    - [Vista](#vista)
    - [VEText](#vetext)
    - [VA.gov Profile](#vagov-profile)
    - [VA Profile](#va-profile)
- [Footnotes](#footnotes)

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

## Related Documents
* [Sketch](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
* [Check-In Test Data Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
* [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

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
#### Case A:
> **In order** to understand why my demographics update failed and what actions I need to take next  
> **As a** Veteran  
> **I want** to be shown clear and easy to understand failure notifications  

### Clever Case Stories

## Exploring Workflows

### Workflow one
#### Outstanding problems:
* one
* two  

## Staff Facing Dependencies

## Engineering Questions

## Engineering Proposals

## Engineering Solution

## Testing Questions

## Testing Solution

## Application Performance Management

## Applications and Services

### Vets Website

> This is the application that powers the main va.gov website.  
> **Day of Check-In**  
> This application is for veterans to check into their health appointments on the day of care. 
> 
> **Pre-Check-In**  
> This application is going to be filled out by veterans days before the appointment. The veteran will be able to confirm various aspects of their appointment and information.

[Day of Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/check-in/day-of#readme)  
[Pre-Check-In Readme](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/check-in/pre-check-in#readme)  

### Vets-API

> This project provides common APIs for applications that live on VA.gov (formerly vets.gov APIs). 
> The Check-In module engine inside the Vets-API acts as general purpose service and as a service bus to the LoROTA service and the CHIP API. 

[Vets-API Readme](https://github.com/department-of-veterans-affairs/vets-api/#readme)  
[Check-In Engine Readme](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/check_in#readme)  

### CHIP

> Check-In Integration Point API. Provides Veterans with a unified front door experience for preparing for and checking into their clinical appointments. Including, changing the process for outpatient clinical workflow that improves efficiency and decrease devices requiring publicly accessible shared surfaces that may increase the transmissions of communicable diseases like COVID-19.

[CHIP Readme](https://github.com/department-of-veterans-affairs/chip#readme)  

### LoROTA

> Low Risk One Time Authentication, or LoROTA, is a simple service that uses a unique key (UUID)passed between a user and various services to authenticate that user for certain low risk activities, like form submission.

[LoROTA Readme](https://github.com/department-of-veterans-affairs/lorota#readme)  

### VISTA

> Stands for Veterans Health Information Systems and Technology Architecture, and it's one of the VA's systems for managing veterans electronic health records.

### VEText

> VEText is an interactive mobile solution to send notifications through text messages to veterans about and around their upcoming and scheduled appointements. 

[VEText Information](https://www.va.gov/health/VEText.asp)  

### VA.gov Profile

> The VA.gov profile provides a centralized place where users can see what information the VA knows about them, 
> and where they can update that information as needed.
>
> The VA.gov profile is a section of VA.gov, which you can view at https://staging.va.gov/profile/personal-information 
> with pretty much any staging user. The VA.gov profile is a frontend only; we do not store any information. 
> We rely entirely on various VA backend systems to show and save data. VA Profile is only one of them, 
> which we currently use to show and save contact information.
>
> Currently, the VA.gov profile supports the following information:
>
> * Personal information
> * Contact information
> * Military information
> * Direct deposit information
> * Notification preferences
> * Account security
> * Connected apps (managed by the Lighthouse team)

- #### References:
  - [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

### VA Profile
> This is a backend system that was formerly known as Vet360. 
> It came about in 2018 to act as a connector between a bunch of VA backends and frontends, 
> so that veterans could update their info in one place and it would save everywhere (or almost everywhere). 
> The VA Profile team is not part of the OCTO/DEPO contracts.
> They are an entirely separate team that we work with, and they work with a lot of other teams.

- #### References:
  - [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## Footnotes
[^1]: Fully authenticated: User has authenticated on va.gov using their ID.me account or another identity provider.  
[^2]: Demographics data: Includes veteran contact information, next of kin information, and emergency contact information.  
