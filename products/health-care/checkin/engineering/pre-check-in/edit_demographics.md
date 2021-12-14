
# Pre Check-in, Demographics Editing: Systems Design and Architecture exploration

## Related documents, wire-frames, and flow diagrams
* [Sketch](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
* [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)

## End goals:
**In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
**As a** Veteran  
**I want** the ability to securely edit and save my demographics information during my **Pre-checkin** work flow  

*---Begin User Scenarios---*  

**Given** I have an upcoming appointment in the system at a facility/clinic where I'm registered at  
**And** I have received a SMS notification with a shortened URL to the Pre-checkin flow for the appointment  
**And** I have clicked on the shortened URL  
**And** I have been successfully redirected to Pre-checkin starting page on the va.gov site  
**And** I have successfully, minimally authenticated using my last name and the last four digits of my SSN  
**And** I am looking at my demographics page with Contact, Next-of-kin, and Emergency Contact information  
**When** I attempt to edit Contact OR Next-of-kin OR Emergency Contact information  
**I** am redirected to the main va.gov login page  

*---End User Scenarios---*  

**In order** to provide all concerned parties my latest demographics changes before a scheduled appointment  
**As a** Veteran  
**I want** the ability to securely edit and save my demographics information ON the **day of Check-in** provided that I had not done so already during my **pre-checkin** flow  

## Exploring Workflows
### Workflow one
#### Outstanding problems:
* one
* two  

## Engineering questions that must be answered

## Engineering outcomes and proposed plan for implementation

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
