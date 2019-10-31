# Mobile Application System Design Document (SDD) Addendum

The System Design Document (SDD) is a dual-use document that provides the conceptual design as well as the as-built design. This document will be updated as the product is built, to reflect the as-built product. Per the Project Management Accountability System (PMAS) Guide, the SDD with conceptual design is required prior to the Milestone 1 Review.

## 1. Mobile Application Information

### Overview

Software Name: VA Online Scheduling (VAOS) Web Application

Project Increment / Release Designation: ?

Product Version (current): 0

Source Repository:

FE: https://github.com/department-of-veterans-affairs/vets-website
BE: https://github.com/department-of-veterans-affairs/vets-api

Software Type: App

Intended Audience for Mobile Application: Veteran

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

The new redesign is accessible across all modern browsers.

### Capabilities:

1. View list of VistA booked appointments.
1. Cancel VistA booked appointments.
1. View list of appointment requests made in VAR.
1. Cancel appointment requests.
1. Directly book a VistA appointment at a clinic.
1. Request an appointment at a facility.
1. Submit message to clerk along with request.
1. Submit an Express Care request.
1. Request a Community Care appointment (This capability is available depending on the Veteran's community care eligibility based on EE codes from ADR)

## 2 Application Design

< Talk about VA Platform >
< Talk about accessibility >

### Conceptual Perspective

Component diagram depicting how the new redesign web application connects across software in the VAOS Scheduling SUITE is illustrated below.

### Common Concepts

1. Feature Flags

### Logical Perspective

Functional Workflows Diagram

### Typical Request Workflow Diagram

### User Service Work Workflow Diagrams

### Mobile Appointments Service Workflow Diagram

### Community Care Eligibility Workflow Diagram

### Facility Resource Workflow Diagram

### Direct Scheduling Workflow Diagram

### Appointments Workflow Diagram

### Facility Workflow Diagram

### Messaging Service Diagram

## Technology Stack and Service Dependencies

### Technology Stack Overview

### VA.gov Intefaces

### VAMF Intefaces

## Developer and Program Manager Contact Information





 
