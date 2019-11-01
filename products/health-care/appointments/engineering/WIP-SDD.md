# Mobile Application System Design Document (SDD)

The System Design Document (SDD) is a dual-use document that provides the conceptual design as well as the as-built design. This document will be updated as the product is built, to reflect the as-built product. 

## 1. Mobile Application Information

### Overview

|   |   |
|---|---|
| Software Name                            | VA Online Scheduling (VAOS) Web Application  |
| Project Increment / Release Designation  | Beta? |
| Product Version (current)  | 0  |
| Source Repository Frontend | https://github.com/department-of-veterans-affairs/vets-website |
| Source Repository API Wrapper  | https://github.com/department-of-veterans-affairs/vets-api |
| Software Type | App |
| Intended Audience | Veteran |

### Data Storage

| Question  | Yes  | No  | If Yes, what information?  | If Yes, what consumer or source systems for the data?  |
|---|---|---|---|---|
| Does the new application pull data from VA Database (external to VAMF)?  | X  |   | <ul><li>Patient Information</li><li>Booked appointments</li><li>Facilities</li><li>Providers and clinics</li><li>Community care eligibility data</li></ul>  | <ul><li>VARDB</li><li>VistA</li><li>CDW</li><li>ADR</li></ul>  |
| Does the user enter information or data into the mobile application?  | X  |   | <ul><li>Appointment request information</li><li>VistA appointment information</li><li>Notification preference data</li></ul>  | <ul><li>VARDB</li><li>VistA</li></ul>  |
| Does the Mobile Application transmit/push data entered outside of the VAMF to VA?  | X  |   | <ul><li>Appointment request information</li><li>Appointment information</li></ul>  | <ul><li>VARDB</li><li>VistA</li></ul>  |
| Does the Mobile Application store in the VAMF or on the device data pulled from a VA Database | X |  | <ul><li>Patient Information</li><li>Patient preference data</li><li>Appointment request information</li><li>Community care eligibility data</li></ul> | <ul><li>VARDB</li><li>VistA</li></ul> |
| Does the Mobile Application store information or data entered by the user? | X |  | <ul><li>VARDB Oracle Database</li></ul> | <ul><li>VARDB</li><li>VistA</li></ul> |

### Application Classification

| Mobile Application Classification (Only one box may be checked) | Mark with X |
|-----------------------------------------------------------------|-------------|
| 1 - Very Low: Mobile Application does not use VA Resource | |
| 2 - Low: Read only access to VA Resources (No PII / PHI) | |
| 3 - Medium: Write access to VA Resources | |
| 4 - High: Read and/or Write access of sensitive data to VA Resources (include PII/PHI) | X |

### Supported Devices:

The new redesign is a web only interface, there is no native application component. It should be accessible across all smart devices that have a web client.

### Supported Browsers:

#### Browsers

| Browser | Minimum version  | Note |
|---------|------------------| ---- | 
| Internet Explorer | 11 |
| Microsoft Edge    | 14 |
| iOS               | 9 |
| Safari            | 10 |
| Chrome            | 60 |
| Chrome (Android)  | 64 |
| Firefox           | 56 |

Source: [Browser Support Policy](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/Engineering/DocumentedDecisions/Browser%20Support.md)

#### Accessibility (Screen Readers and 508 Compliance)

See: [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/5f0547fc2a8fbaa4d9004ceedb7da4d5989c5209/platform/accessibility/508-accessibility-best-practices.md)


### Capabilities:

1. View list of VistA booked appointments.
1. Cancel VistA booked appointments.
1. View list of appointment requests made in VAR.
1. Cancel appointment requests.
1. ~Directly book a VistA appointment at a clinic.~
1. Request an appointment at a facility.
1. Submit message to clerk along with request.
1. ~Submit an Express Care request.~
1. Request a Community Care appointment (This capability is available depending on the Veteran's community care eligibility based on EE codes from ADR)

## 2. Application Design

### Design Principles and Patterns

VA.gov is a single page application written in React.
VA.gov mostly interfaces with vets-api, a Ruby on Rails application that serves JSON.
VA.gov adheres to the strictest of REST standards. 
... ???

### Conceptual Perspective

Component diagram depicting how the new redesign web application connects across software in the VAOS Scheduling SUITE is illustrated below. < Need a Picture >

### Common Concepts

1. Feature Flags

### Logical Perspective

Functional Workflows Diagram

### Request Service Workflow Diagram

VA.gov -> VAMF

### User Service Workflow Diagram

VA.gov -> VAMF

### Appointments Service Workflow Diagram

VA.gov -> VAMF

### Community Care Eligibility Workflow Diagram

VA.gov -> VAMF

### Facility Service Workflow Diagram

VA.gov -> VAMF

### Messaging Service Diagram

VA.gov -> VAMF

## Technology Stack and Service Dependencies

### Technology Stack Overview

The following is a running list of all major technologies chosen to build out the new VAOS veteran facing application.

| Technology, Libraries, and Tools | Version | On the TERM (If not, provide a link to the waiver) |
|----------------------------------|---------|----------------------------------------------------|
| HTML 5 | 5 | Yes|
| CSS | 3 | Yes |
| Google Analytics | ? | Yes |
| Ruby | 2.4.5 | Yes |

MORE to come...


### VA.gov Intefaces

|Interface Name | Version | Domain | Description of Role | SDD |
|---------------|---------|--------|---------------------|-----|
| VA.gov API    | 0       | VA.gov | Wrapper for services in VAMF | N/A |

### VAMF Intefaces

[Existing Var Resources SDD](https://wiki.mobilehealth.va.gov/pages/viewpage.action?spaceKey=ARA&title=VA+Online+Scheduling+%28VAOS%29+VAR-Web+Application+4.18.x+SDD#VAOnlineScheduling(VAOS)VAR-WebApplication4.18.xSDD-4.TechnologyStackandServiceDependencies)

## Developer and Program Manager Contact Information





 
