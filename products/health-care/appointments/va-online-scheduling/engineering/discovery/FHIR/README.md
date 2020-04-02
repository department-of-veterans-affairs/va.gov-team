# FHIR API Discovery

The purpose of this document is to serve as a table of contents for all the discovery efforts related to FHIR APIs from the perspective of VAOS redesign. A few high level points are identified below.

- ### Upcoming VAOS Architecture milestones
  - As discussed in Tampa, the following architectural milestones will provide guidance for FHIR API implementation as part of VAOS redesign. [VOAS Architecture Milestones](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/FHIR/VAOSArchitectSvcMilestones_20200109-VAOS-DesignEvolutionDraft.pdf)

- ### API design best practices
  - As discussed in Tampa, any new iteration on APIs would ideally follow some of the best practices identified here: [API design best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/api_observations.md).

- ### Business logic in APIs not up to application developers
  - The FE makes too many requests. Often these requests are needed to find out what type of scheduling a user is eligible for in the first place. This type of "business logic" should live behind the API, and it should never be up to the API consumer to have to determine eligibility by fetching from multiple sources. Examples of this include: 
  - Examples include Facilities logic, Eligibility based on past number of appointments
  - I think this is the most important point we can make from the redesign perspective to guide the future APIs. Having this variety of business logic consolidated in the APIs just makes sense from a maintainability standpoint, and helps ensure that Scheduling Manager, VAOS, and other shared services consumers abide by precisely the same set of agreed upon business logic.     - It should never be possible to break Scheduling Manager by making an invalid POST request -- this should be forbidden in the API layer. 
  - Similarly, fetching multiple resources to determine what types of appointment a veteran is eligible for is not something that API consumers should have to do, you should ideally fetch from one source and have this available. Places where this has been a problem will be called out in the subsections below.

## Epic
The epic tracking the individual components is accessible [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6387)

## Overview

We know the following resources will be available:

- Appointment
  - Represents an appointment or a request (a pending appointment)
- HealthcareService
  - This is possibly a VistA clinic or type of care
- Location
  - VA facility, Video appointment location, or CC provider
- Organization
  - VistA system (3 digit code)
- Patient
  - The current user
- Schedule
  - Collects available slots for a chosen health care service or practioner. No clear var-resources equivalent
- Slot
  - Appointment slot that can be booked into.

## Rails API related discovery

1. Figure out routes, folder hierarchy in vets-api repo for a new v1 VAOS API.

2. Investigate use of fhir_crucible gems and components or other rails specific FHIR commmunity maintained resources.

3. Instrumentation and operational challenges to supporting multiple API versions: breakers, errors, sentry, statsd, cloudwatch, rspec, others.

4. Documentation strategy for supporting multiple API versions

## UI related discovery

This is a work in progress. These will be augmented with flow diagrams detailing the decision tree in its current form with recommendations on where some of this business logic and decision tree logic ought to be moved to the "monolith" API layer.

### Appointments List
- [Discovery Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/FHIR/appointments.md) Needs feedback from Mike/Brad on the questions raised. Can feel free to answer questions in the github issue below, or make edits to the markdown file directly to answer questions.
- [Github Issue](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-team/issues/6386)
- Status: Blocked by questions

### New Appointment Flow
#### Types of care
- [Discovery Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/FHIR/types_of_care.md)
- [Github Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7511)
- Status: Blocked by questions

#### Community Cares
#### Facilities
  - Parent Facilities
  - What is supported?
#### Eligibility
#### Clinics
#### Time Slots (both request and self schedule)
#### Appointment Request Submission
  - Appointment Messages
#### Community Care Request
  - Appointment Messages
#### Direct Schedule Appointment
