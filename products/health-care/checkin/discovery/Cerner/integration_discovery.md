# Cerner Millenium Integration

## Problem Statement

VA is [transitioning to a new electronic health record (EHR) system](https://www.ehrm.va.gov) ([Cerner Millenium](https://www.cerner.com/solutions/health-systems)) over a 10-year period scheduled to end in 2028. In order to support self-service patient check-in at all VA Medical Facilities, the check-in app must interoperate with Cerner to retrieve appointment records and update appointment statuses.

## Potential Integration Routes

### Unified APIs

Various efforts to provide unified access to data coming from VistA and Millenium are proposed, planned or in progress. If one or a combination of services can provide access to the required data, integration will be simplified.

#### VAOS Service

The VAOS Service allows veteran and staff users to fetch and schedule appointments (and appointment requests) for 
veterans. The request and data model is inspired by FHIR and aimed at helping consuming applications and services more
easily transition to the FHIR model used by the 
[Enterprise Appointment Service](https://coderepo.mobilehealth.va.gov/projects/CSS/repos/enterprise-appointment-service/browse).

The VAOS Service is a **_transitional service_**: it will be superseded in the near future by the [Enterprise Appointment
Service](https://coderepo.mobilehealth.va.gov/projects/CSS/repos/enterprise-appointment-service/browse).

##### Challenges

- The VAOS service does not appear to currently support Cerner data.

#### Enterprise Appointment Service

From the facilities team: Another initiative is working on an enterprise appointment service which is intended to be the hub for all appointment related data. Will begin with VISTA and add Cerner later. Steve Eaton is POC. ([ref](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30209#issuecomment-936648507)) 

##### Resources

- [source repo](https://coderepo.mobilehealth.va.gov/projects/CSS/repos/enterprise-appointment-service/browse) (requires auth)

#### VDIF

VDIF is a single, common middleware platform to service and enable VistA, includes the ability to read, write, and share VistA data. ([ref](https://github.com/department-of-veterans-affairs/vdif-ep-devops))

##### Challenges

- No interoperability with Cerner is currently advertised in public materials. A brief review of [the source](https://github.com/department-of-veterans-affairs/Redacted-Public-Release-VDIF-EP-v2.34.0-May-2021) reveals some references, but it does not appear that full integration is available.

#### Lighthouse: VA Clinical Health API (FHIR)

The [Clinical Health API](https://developer.va.gov/explore/health/docs/clinical_health?version=current) allows you to develop clinical-facing applications which pull patient demographic and health information for clinical settings.

##### Opportunities

- This would likely be the lowest lift from a administrative/security perspective.

##### Challenges

- Support from business owners may be needed to help on the timeline [ref](https://dsva.slack.com/archives/C01DGGY71T9/p1634592825245500?thread_ts=1627066655.430300&cid=C01DGGY71T9)
- The API currently only provides `GET` endpoints, with no ability to update appointment statues, write demographic updates, etc.
- Depending on the source, data may be available in real-time or up to 48 hours after entry 

### Direct API access

#### Millenium

Millenium is Cerner’s implementation of the HL7® FHIR® standard. An application for pulling real-time health records from VistA and returning them in a FHIR compliant format also exists: https://github.com/department-of-veterans-affairs/health-apis-vista-fhir-query

##### Opportunities

- This is likely to be the most direct path to Cerner data access.

##### Challenges

- May require ATO/other approvals for use.

##### Resources

[Api Docs](https://fhir.cerner.com/millennium/overview/)


## API cross-reference

| Purpose  | VistA endpoint | VistA Required Params | Millenium Endpoint | Millenium Required Params |
| -------- | -------------- | --------------------- | ------------------ | ------------------------- |
| Retrieve appointments by patient | [`GET /v1/sdes/appts-by-patient/{stationNo}/{patientDFN}/T/T+1`](https://github.com/department-of-veterans-affairs/chip#multiple-appointments) | `stationNo`, `patientDFN` | [`GET /Appointment?:parameters`](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#search) | `patient`, `location`, `practitioner` |
| Set appointment status | [`PUT /checkin-status-get-all/{stationNo}/{sdesApptIen}`](https://github.com/department-of-veterans-affairs/chip#multiple-appointments) | `stationNo`, `sdesApptIen` | [`PATCH /Appointment/:id`](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#example---update-status-to-booked) | `id` |
| Retrieve patient demographics | [`GET /v1/sdes/demographics/${stationNo}/${patientDFN}`](https://github.com/department-of-veterans-affairs/chip/blob/3aa487837da7fa37b2620005f1371ed3f0f2acbe/layers/utilities/nodejs/vistaService.js#L65) | `stationNo`, `patientDFN` | [`GET /Patient/:id`](https://fhir.cerner.com/millennium/r4/base/individuals/patient/#retrieve-by-id) | `id` |

## Data requirements

List of data points that check-in currently requires.

#### Resources

- [Api Docs](https://developer.va.gov/explore/health/docs/clinical_health?version=current)
- [Clinic Status](https://github.com/department-of-veterans-affairs/health-apis-vista-fhir-query/wiki)
