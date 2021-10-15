# Cerner Integration

## API cross-reference


| Purpose  | VistA endpoint | VistA Required Params | Millenium Endpoint | Millenium Required Params |
| -------- | -------------- | --------------------- | ------------------ | ------------------------- |
| Retrieve appointments by patient | [`GET /v1/sdes/appts-by-patient/{stationNo}/{patientDFN}/T/T+1`](https://github.com/department-of-veterans-affairs/chip#multiple-appointments) | `stationNo`, `patientDFN` | [`GET /Appointment?:parameters`](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#search) | `patient`, `location`, `practitioner` |
| Set appointment status | [`PUT /checkin-status-get-all/{stationNo}/{sdesApptIen}`](https://github.com/department-of-veterans-affairs/chip#multiple-appointments) | `stationNo`, `sdesApptIen` | [`PATCH /Appointment/:id`](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#example---update-status-to-booked) | `id` |
| Retrieve patient demographics | [`GET /v1/sdes/demographics/${stationNo}/${patientDFN}`](https://github.com/department-of-veterans-affairs/chip/blob/3aa487837da7fa37b2620005f1371ed3f0f2acbe/layers/utilities/nodejs/vistaService.js#L65) | `stationNo`, `patientDFN` | [`GET /Patient/:id`](https://fhir.cerner.com/millennium/r4/base/individuals/patient/#retrieve-by-id) | `id` |


## Potential Integration Routes

### Millenium

Millenium is Cerner’s implementation of the HL7® FHIR® standard.

#### Opportunities

- This is likely to be the most direct path to Cerner data access.

#### Challenges

- May require ATO/other approvals for use.

#### Resources

[Api Docs](https://fhir.cerner.com/millennium/overview/)

### VA Clinical Health API (FHIR)

The Clinical Health API allows you to develop clinical-facing applications which pull patient demographic and health information for clinical settings.

#### Opportunities

- This would likely be the lowest lift from a administrative/security perspective.

#### Challenges

- The API currently only provides `GET` endpoints, with no ability to write demographic updates
- Depending on the source, data may be available in real-time or up to 48 hours after entry

#### Resources

- [Api Docs](https://developer.va.gov/explore/health/docs/clinical_health?version=current)
- [Clinic Status](https://github.com/department-of-veterans-affairs/health-apis-vista-fhir-query/wiki)
