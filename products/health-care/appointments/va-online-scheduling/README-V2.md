# VA Online Scheduling

VA online scheduling (VAOS) is a Veteran-facing healthcare appointment scheduling tool on VA.gov.

[Other Veteran-facing appointments tools]()

**Jump to**
- [About VAOS]()
- [What we're working on]()
- [Quick links]()
  - [Product]()
  - [Engineering]()
  - [User Experience]()
  - [Support and incident response]()
- [VAOS features](#vaos-features)()
- [VAOS team contact information]()

## About VAOS
[Product guide]()

## What we're working on
[Current initiatives]()

## VAOS General Reference

- [Business rules]()
- [User flows]()
- [Copy docs]()
- [Page templates]()
- [User research]()
- [Analytics]()

## Quick links

### Product and UX

| Product | User Experience |
|---|---|
| [Product roadmap]() | [Screen templates]() |
| [Open issues]() | [Design files]()
| [Closed issues]() | |

### Engineering

| Engineering | Front end | Back end |
|---|---|---|
| [MAPSUP ticket creation]() | [Front-end practices and tips]() | [Back-end engineering practices and tips]() |
| [Users for staging]() | [Front-end code reviewer guide]() | [Vets API developer setup]() |
| [Swagger editor]() | [Front-end testing guidance]() | [Vets API user creation and VAOS session validation]() |
| [VAOS internal tools]() | [Using Sentry on VAOS]() | [Vets API Review Instances]() |
| [VAOS incident response playbook]() | [Maintenance messages in VAOS]() | [LogQL (Querying with Loki)]() |
|  |  | [Application monitoring with Datadog]() |

### Support and Incident Response

## VAOS Features

### View appointment lists
An overview of appointments and requests. Helps get a sense of appointments at a high level.

| Feature | Usage | Documentation | 
|---|---|---|
| Upcoming appointments | View all future and in progress appointments | [Staging URL](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments) <br> [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/copy-docs/homepage.md#appointment-list-cards) <br> [Design template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=182%3A18201&t=VF6bPXzS8n4lnB6O-4) <br/> [Logic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#upcoming-appointments) |
| Past appointments | View all appointments from the last two years | [Staging URL](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/past) <br> [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/copy-docs/homepage.md#past-1) <br> [Design template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=1125%3A28605&t=VF6bPXzS8n4lnB6O-4) <br/> [Logic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#past-appointments) |
| Pending appointments | View all pending and canceled requests | [Staging URL](https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/pending) <br> [Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/copy-docs/homepage.md#requests-1) <br> [Design template](https://www.figma.com/file/twogqAIoOL9WAFRqvUbwiS/VAOS-Templates?node-id=1125%3A28986&t=VF6bPXzS8n4lnB6O-4) <br/> [Logic](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#pending-appointments) |

### View appointment details
All the information about a single appointment. VAOS can display 8 types of appointments.

| Feature | Description | Documentation |
|---|---|---|
| VA In person  | | |
| VA In person Vaccine | | |
| VA Video Care at Home | | |
| VA Video Care at a VA location | | |
| VA Video Care on GFE | | | 
| VA Video Care at an ATLAS location | | |
| VA Phone Appointment | | |
| Community Care Appointment | | |

### View request details
All the information about a single appointment.

| Feature | Description | Documentation |
|---|---|---|
| VA Appointment Request  | | |
| Community Care Appointment request | | |

### Manage appointments and requests
Tools Veterans can use to manage their appointments and requests.

| Feature | Description | Documentation | 
|---|---|---|
| Cancel appointment/request | | |
| Add to calendar | | |
| Print | | | 

### Schedule and request appointments
How Veterans can schedule or request appointments through VAOS

| Feature | Description | Documentation |
|---|---|---|
| Direct-schedule or request appointment at VA  | | |
| Direct-schedule COVID-19 vaccine at VA | | |
| Request community care | | |
