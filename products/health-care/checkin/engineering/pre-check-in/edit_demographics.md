
# Pre Check-in, Demographics Editing: Systems Design and Architecture exploration

## Sections

## Related documents, wire-frames, and flow diagrams
* [Sketch](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
* [Check-In Test Data Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
* [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## End goals
### Happy Path Stories

#### Case A:
> **In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
> **As a** Veteran  
> **I want** the ability to securely edit and save my demographics information to the va systems during my **Pre-checkin** work flow  

#### Scenario Setup:    
**Given** I have an upcoming appointment in the system at a facility/clinic where I'm registered at  
**And** I have received a SMS notification with a shortened URL to the Pre-checkin flow for the appointment  
**And** I have clicked on the shortened URL  
**And** I have been successfully redirected to Pre-Check-In starting page on the va.gov site  

**Scenario:** User has NOT fully authenticated with their va.gov credentials prior to clicking on the URL  

**Given** I have not fully authenticated prior using my va.gov credentials  
**And** I have successfully, minimally authenticated using my last name and the last four digits of my SSN  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am redirected to the main va.gov login page  
**when** I login using my va.gov credentials  
**Then** I am successfully redirected back to my Pre-checkin demographics page  
**And** I have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  

**Scenario:** User HAS fully authenticated with their va.gov credentials prior to clicking on the URL  

**Given** I have fully authenticated prior using my va.gov credentials  
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

**Scenario:** User has NOT not completed their Pre-check-in flow prior to the day of Check-in and user is not fully authenticated  

**Given** I have not completed my Pre-Check-In flow for an appointment  
**And** I am at the facility/location on the day of the appointment  
**And** I have arrived before the appointment is set to begin  
**And** I have initiated the Check-in in flow on my mobile device 
**And** I have not fully authenticated on va.gov prior to initiating the Check-in flow  
**When** I click on the Check-in URL  
**And** I successfully, and minimally, authenticate using my last name and the last four digits of my SSN  
**Then** I have started my Check-in flow  
**And** I can see my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**Then** I am redirected to the main va.gov login page  
**when** I login using my va.gov credentials  
**Then** I am successfully redirected back to my Pre-checkin demographics page  
**And** I have the ability to edit all of my demographics information  
**When** I edit any or all of my demographics info and submit the changes  
**Then** I can see that my changes have been validated  
**And** can see that my validated changes have been successfully saved in the va systems so that all relevant parties can view it  

### Error Path Stories
### Clever Case Stories

## Exploring Workflows
### Workflow one
#### Outstanding problems:
* one
* two  

## Staff facing dependencies

## Engineering questions that must be answered

## Engineering outcomes and proposed implementation plan

## Existing Applications and APIs
### Vets-API
### CHIP
### LoROTA
### VISTA

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

## Systems Monitoring and Error reporting

## Testing
