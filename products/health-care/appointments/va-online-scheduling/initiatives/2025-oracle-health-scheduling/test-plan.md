
# Oracle Health Scheduling Staging QA Test Plan

Last Updated: 2025-12-15
Author: [Shaimun Nakib/Appointments]

## Introduction & Overview

### Feature Description

Adding support for scheduling Oracle Health appointments to the Appointments tool on VA.gov. 

[Figma designs for OH scheduling flow](https://www.figma.com/design/EHR9zBpGnAgc7bHqeIGEoT/OH-Scheduling-MVP-%7C-Appointments-FE?node-id=7744-17062&t=dRXcalqg4bJq2uHJ-0)


### Goals of this Test Plan

- Verify functionality of features related to the new Oracle health scheduling flow

## Scope of Testing

### In Scope

- Scheduling an appointment at an Oracle Health Facility
- Requesting Oracle Health appointments
- Canceling scheduled and requested OH appointments

### Out of Scope

- Cancellation Flow

## Testing Objectives

- To verify that all functional requirements of Oracle Health Scheduling are met as per the specification.
- To identify and report any defects or issues in Oracle Health Scheduling.
- To confirm that existing functionalities are not adversely affected by the introduction of [Feature Name].

## Test Strategy & Approach

### Types of Testing

- Functional Testing: Verifying each function of the software as specified in the requirements.
- Compatibility Testing: Testing on different browsers, devices, and operating systems.
- Regression Testing: Ensuring existing functionality is not broken by new changes.
- Accessibility Testing: Ensuring the feature is usable by people with disabilities.

### Approach

Manually testing each scenario in Staging environment.

## Test Environment & Setup

### Test Environment

Testing will occure in the staging environment for va.gov

Staging Environment: [staging.va.gov](https://staging.va.gov/)

OH Test users:
| Login Option  | Name |Username                   | Password |
|---------------|-----------------------------|----------|---|
| ID.me         | BEARDEDIPO, VANCE J (Patient/72228720) |vagovohtestpatient+beardedipo@gmail.com | ni^FcZ@3g0Md@slh |


### Test Data Requirements

Test users with the following configurations:
- 1 provider available for scheduling
- 2 or more providers available for scheduling
- No providers available for scheduling
- No relationships with any providers

### Tools

- Manual testing
- [Accessibility testing checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/accessibility-testing-checklist.md)

## Main Test scenarios

- Verify user can access scheduling flow for Oracle health      
- Verify User can request up to 2 appointment requests
- Verify user cannot request appointments after having 2 existing requests
- Verify user sees messaging for not having relationships with Providers in OH

## Regression testing scnearios

- Verify User can access Vista scheduling flow
- Verify user can request appointments for Vista clincs

## Test cases 

Test cases below wll focus on the main scenarios for testing the flow as well as additional paths/regression for testing. These test cases are housed in [DSVA Testrail](https://dsvavsp.testrail.io/index) instance.

| Test Case ID | Test Case Name | 
| :---: | :--- |
| [C157693](https://dsvavsp.testrail.io/index.php?/cases/view/157693)  | Verify user can schedule OH appointment flow | 
| [C157705](https://dsvavsp.testrail.io/index.php?/cases/view/157705) | Verify Direct Scheduling when only single facility When request limit reached messaged  |
| [C157700](https://dsvavsp.testrail.io/index.php?/cases/view/157700) | Verify Page: What date and time do you want for this appointment OH scenarios | 
| [C157702](https://dsvavsp.testrail.io/index.php?/cases/view/157702) | Verify Contact Info Confirmation for OH Scenarios | 
| [C157704](https://dsvavsp.testrail.io/index.php?/cases/view/157704) | Verify fetch error for choose a location for OH | 
| [C157698](https://dsvavsp.testrail.io/index.php?/cases/view/157698) | Verify Page: Which Provider do you want to schedule with scneairos | 
| [C157703](https://dsvavsp.testrail.io/index.php?/cases/view/157703) | Verify permutations for types of care work for direct scheduling flow | 
| [C157709](https://dsvavsp.testrail.io/index.php?/cases/view/157709) | Verify Schedule Vista appt error states | 
| [C157707](https://dsvavsp.testrail.io/index.php?/cases/view/157707) | Verify Schedule Vista appt Multiple Facilities Regression for New OH Flow Added |
| [C157706](https://dsvavsp.testrail.io/index.php?/cases/view/157706) | Verify Single Facility is displayed | 
| [C157694](https://dsvavsp.testrail.io/index.php?/cases/view/157694) | Verify user can request appointment for OH scheduling request flow | 
| [C157695](https://dsvavsp.testrail.io/index.php?/cases/view/157695) | Verify user cannot request appointments after limit of creating 2 existing ones | 
| [C157696](https://dsvavsp.testrail.io/index.php?/cases/view/157696) | Verify User see messaging for not having relationships with providers in OH 
| [C157701](https://dsvavsp.testrail.io/index.php?/cases/view/157701) | Verify What's the reason for this appointment page OH scenarios |
| [C157697 ](https://dsvavsp.testrail.io/index.php?/cases/view/157697) | OH Page: "Which Va Location would you like to go to" states |
| [C157708](https://dsvavsp.testrail.io/index.php?/cases/view/157708) | Schedule Vista appt Single facility Regression for New OH Flow Added |

### Page Behavior based on flow

## Page: Which VA location would you like to go to?

- System attempts to fetch facility registrations and configurations.
  - Fetch fails: Display 500 error   
- User selects a facility that supports direct scheduling for selected care type: continue to provider selection  
- User selects a facility that supports requests only: direct user to request flow
   - Note: this will change once we sort out requesting with a specific provider
- User is directed to the request flow but has hit limit of allowed requests: show message “Please call to schedule”  
- User selects a facility that supports neither direct schedule nor requests: show message “Please call to schedule”  
- User has never had an appointment for selected care type at facility: : show message “Please call to schedule”  
- User selects “current location” from drop-down and has blocked browser location: display alert
- If user hasn't been seen at a facility in the last 36 months, facility doesn't display in list
- Appointment for care type at facility is outside allowed timeframe: block with Dead End: You can't schedule this appointment online 
- User is not registered at any OH facility: display error
- If the patient has only been seen for telehealth appts, don't show facility

## Page: Which provider do you want to schedule with?

- Page displays providers the user can direct-schedule with for the selected type of care. 
- Page displays providers the user can request appointments with for the selected type of care. 
- Verify that provider's recent-visit configuration is correct for the type of care
- Verify user can't request if over the limit 
- Users can request appointments with providers they have seen before          
- Display providers a user can call to schedule with.             
- If system errors out when loading the list of providers, display an alert.            

## Direct Scheduling
- Direct scheduling for type of care can be enabled or disabled

System: Attempts to fetch available providers (GET /vaos/v2/relationships)
IF Call fails, Display alert:

<img width="721" height="2444" alt="image" src="https://github.com/user-attachments/assets/501e3c91-c846-4abd-a37b-8f00e58976b8" />

IF call succeeds, Continue

System: Checks if direct scheduling and requests are enabled in VPG.

## Provider Relantionship conditions
- If the Veteran has had an appointment with a provider at this facility for this type of care in the past 36 months: include that provider in the list  

- If at least one of the user’s registered or recent facilities has direct scheduling enabled and availability for this type of care:  
  - Show all providers the Veteran has seen in the past 36 months, including request-only providers  
  - If a provider’s request limit is reached: show “Call to schedule” under that provider  

- Direct scheduling and appointment requests can appear together in the list  
- Direct scheduling and “Call to schedule” can appear together if requests are disabled due to request limits  
- Provider relationship exists but at a different facility: do not show provider  
- Requests are enabled: display information with link to request at the bottom of the provider list  
- Requests are not enabled (due to request limit reached): display info with facility phone number at the bottom of the provider list

## Patient Indicated Date Page

- User enters preferred date that is not same-day: accept input and continue to next page  
- User enters same-day date: show warning they can’t schedule today + instructions for immediate medical help  
- User leaves preferred date blank: show validation error  

## Page: What date and time do you want for this appointment?

- Appointment time available: display calendar with appointment slots of selected provider  
- API call to fetch slots fails, requests are enabled: display alert with request option  
- API call to fetch slots fails, requests are not enabled: display alert with “Call to schedule”  

## Page: What’s the reason for this appointment?

- Reason provided: continue  
- Field left blank: block with validation error  

## Contact Info Confirmation

- Contact info confirmed or edited: proceed  
- Contact info empty: block with validation error  

## Final Review and Confirmation

- Show all appointment data: user selects confirm: allow confirmation  

## Request Flow Specifics

- Facility has requests enabled, direct scheduling is not: continue to request path  
- Direct scheduling enabled but no time slots available: fallback to request path  
- User wants different provider: allow request if enabled  
- Request submitted: confirmation message displayed  
- Request fails due to limit or error: show failure message  

## System Errors, etc.

- System returns no eligible facilities: block, show fallback messaging  
- User tries to go back and change care type: preserve data and flow  
- Unexpected errors during scheduling: display general error fallback  

## Defect Reporting

During testing, any bugs/issues found will be documented and communicated to internal and external teams

## Requirement Traciability Matrix

Testrail will house the test cases above and those test cases will have references to what features are tested. Once test execution is complete a coverage for references document will be linked to the [Staging collab cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87703)

## Risk Mitigation

Based on testing and any identification of Launch blocker issues, Staging review completeness may be adjusted given discussion between internal/ external teams and stakeholders. 



