# Appointment Cancellation Rules

This file details how the `vetsapi-patient-gateway` (VPG) service determines whether a given Appointment or appointment
request is cancellable by the patient.

An Appointment may be cancelled by the patient through VPG if it was returned from the service with the `cancellable`
field set to `true`.

```json
GET /vpg/v1/patients/{icn}/appointments?...

{
  "data": [
    {
      "id": "97ff00db-7d18-4baa-ad45-73b1db3335fd",
      ...
      "cancellable": "true"
    }
  ]
}
```

An Appointment may not be cancelled by the patient through VPG if it was returned with the `cancellable` field set to
`false`. If a VPG client attempts to cancel an Appointment that is not cancellable an HTTP 400 error will be returned.

The rules and logic to determine whether a given Appointment is cancellable by the patient is different for each EHR.

## Oracle Health (Cerner)

VAOS OH scheduling policies are located in and retrieved from the Cerner Terminology Policy Service (CTPS). These
policies are defined for each VAOS type of care and are analogous to the VATS policies defined for VAOS VistA scheduling.

### Appointment Requests

An OH Appointment request is cancellable by the patient, unless:

1. The Appointment status is not `proposed`.
2. The OH Millenium API indicates the Appointment is not cancellable
   ([Millenium reference](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#custom-extensions)). The
   reasons why an OH Appointment would have the `is-cancelable` extension set to true are unknown at this time.
3. The Appointment is classified as a VAOS type of care, and the CTPS policy for that type of care has cancellation of
   appointment requests disabled.
4. If the Appointment contains a Cerner 14249 scheduling appt type code that is configured as not schedulable.

### Booked Appointments

A booked OH Appointment is cancellable by the patient, unless:

1. The Appointment status is not `booked`.
2. The OH Millenium API indicates the Appointment is not cancellable
   ([Millenium reference](https://fhir.cerner.com/millennium/r4/base/workflow/appointment/#custom-extensions)). The
   reasons why an OH Appointment would have the `is-cancelable` extension set to true are unknown at this time.
3. The Appointment is classified as a VAOS type of care, and the CTPS policy for that type of care has cancellation of
   booked appointments disabled.
4. If the Appointment contains a Cerner 14249 scheduling appt type code that is configured as not schedulable.

### Accessing Cerner Terminology Policy Service (CTPS)

#### Staging / SQA

Testers and developers can directly access all staging VAOS OH type of care policies from a browser on the VA network:
https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/

Individual type of care policies can be accessed by appending the type of care VATS ID:
* Amputation Services: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/amputationServices
* Audiology: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/audiology
* Clinical Pharmacy-Primary Care: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/clinicalPharmacyPrimaryCare
* COVID Vaccine: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/covid
* CPAP: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/cpap
* Home Sleep Testing: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/homeSleepTesting
* MOVE! Program: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/moveProgram
* Ophthalmology: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/ophthalmology
* Optometry: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/optometry
* Mental Health: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/outpatientMentalHealth
* Nutrition: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/foodAndNutrition
* Primary Care: https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/primaryCare

The staging list of Cerner 14249 scheduling appt type codes that are configured as not schedulable can be found at:
https://veteran.apps-staging.va.gov/ctps/v1/serviceTypes/notCancellable

#### Production

CTPS is not deployed in PROD yet.

## VistA

TODO
