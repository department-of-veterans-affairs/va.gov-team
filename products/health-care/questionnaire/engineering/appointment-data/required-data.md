# Required data for the UI

This document will serve as a plce to document the needed information in the UI for an appoinment and where we the data is coming form. This is just for appointment data, not questionnaire data.

- [Required data for the UI](#required-data-for-the-ui)
  - [Required data](#required-data)
    - [Questionnaire List page](#questionnaire-list-page)
    - [Questionnaire Form](#questionnaire-form)
    - [Complete List](#complete-list)
  - [Mapping from MAP](#mapping-from-map)
    - [Sample MAP Object](#sample-map-object)
    - [Mapped Properties for MAP object](#mapped-properties-for-map-object)
  - [Mapping from FHIR](#mapping-from-fhir)
    - [Sample FHIR Object](#sample-fhir-object)
    - [Mapped Properties for FHIR object](#mapped-properties-for-fhir-object)
    - [What is missing](#what-is-missing)

## Required data

### Questionnaire List page

- Appointment Type (Primary Care, Mental Health, etc. )
- Clinic Name
- Facility Name
- Appointment Date Time
- Appointment Status
- Appointment Identifier

### Questionnaire Form

- Appointment Type (Primary Care, Mental Health, etc. )
- Clinic Name
- Clinic Phone
- Facility Name
- Facility Phone
- Appointment Date Time
- Appointment Status
- Appointment Identifier
- Booking Note
- Reason for Visit

### Complete List

- Appointment Type (Primary Care, Mental Health, etc. )
- Clinic Name
- Clinic Phone
- Facility Name
- Facility Phone
- Appointment Date Time
- Appointment Status
- Appointment Identifier
- Booking Note
- Reason for Visit

## Mapping from MAP

### Sample MAP Object

<details>
  <summary>Full Sample Object</summary>

    ```json
  "appointment": {
    "id": "195bc02c0518870fc6b1e302cfc326b60",
    "type": "va_appointments",
    "attributes": {
     "startDate": "2020-08-26T15:00:00Z",
     "sta6aid": "983",
     "clinicId": "848",
     "clinicFriendlyName": "CHY PC VAR2",
     "facilityId": "983",
     "communityCare": false,
     "patientIcn": "1013124304V115761",
     "vdsAppointments": [{
      "bookingNotes": "Follow-up/Routine: testing reason for visit field availability",
      "appointmentLength": "20",
      "id": "848;20200826.090000",
      "appointmentTime": "2021-03-27T15:00:00Z",
      "clinic": {
       "name": "CHY PC VAR2",
       "stopCode": "323"
       "askForCheckIn": false,
              "facilityCode": "983",
              "phoneNumber":"5558675309",
              "facility": {
                "displayName": "VDS Facility Primary Care Display Name"
                "phoneNumber":"5558675309",
              },
      },
      "type": "REGULAR",
      "currentStatus": "FUTURE"
     }],
     "vvsAppointments": []
    }
   },
    ```

</details>

### Mapped Properties for MAP object

- Appointment Type (Primary Care, Mental Health, etc. )
- `appointment.attributes.vdsAppointments[n].stopCode`
- Clinic Name
- `appointment.attributes.clinicFriendlyName`
- Clinic Phone
- `appointment.attributes.vdsAppointments[n].clinic.phoneNumber`
- Facility Name
- `appointment.attributes.vdsAppointments[n].clinic.facility.displayName`
- Facility Phone
- `appointment.attributes.vdsAppointments[n].clinic.facility.phoneNumber`
- Appointment Date Time
- `appointment.attributes.vdsAppointments[n].appointmentTime`
- Appointment Status
- `appointment.attributes.vdsAppointments[n].clinic.stopCode`
- Appointment Identifier
- `appointment.id`
- Booking Note
- `appointment.attributes.vdsAppointments[n].bookingNotes`
- Reason for Visit
- `appointment.attributes.vdsAppointments[n].bookingNotes`

## Mapping from FHIR

### Sample FHIR Object

[Link to source](https://github.com/department-of-veterans-affairs/health-apis-patient-generated-data/blob/API-000-mapping/mapping/appointment.md)

<details>
  <summary>Full object</summary>

  ``` json
{
  "resourceType" : "Appointment",
  "id" : "I2-SLRRT64GFGJAJGX62Q55NSQV44VEE4ZBB7U7YZQVVGKJGQ4653IQ0000",
  "status" : "cancelled",
  "cancelationReason" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
        "display" : "OTHER"
      }
    ],
    "text" : "OTHER"
  },
  "appointmentType" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/v2-0276",
        "display" : "WALKIN"
      }
    ],
    "text" : "WALKIN"
  },
  "description" : "Used for veterans with a service connected % of 50% and greater.",
  "start" : "2017-05-26T07:00:00Z",
  "end" : "2017-05-26T07:20:00Z",
  "minutesDuration" : 20,
  "created" : "2017-05-25T16:00:00Z",
  "participant" : [
    {
      "actor" : {
        "reference" : "https://sandbox-api.va.gov/services/fhir/v0/r4/Location/I2-XPW2ECZK2LTNSPLNVKISWC5QZABOVEBZD5V2CKFRVEPAU5CNZMJQ0000",
        "display" : "PROSTHETIC CONSULTS"
      },
      "status" : "accepted"
    },
    {
      "actor" : {
        "reference" : "https://sandbox-api.va.gov/services/fhir/v0/r4/Patient/1011537977V693883",
        "display" : "TEST,PATIENT ONE"
      },
      "status" : "accepted"
    }
  ]
}
  ```

</details>

### Mapped Properties for FHIR object

- Appointment Type (Primary Care, Mental Health, etc. )
- `appointment.specialty[n].coding[n].display`
- `appointment.specialty[n].coding[n].code`
- Clinic Name
- Clinic Phone
- Facility Name
- Facility Phone
- Appointment Date Time
- `appointment.start`
- Appointment Status
- `appointment.status`
- Appointment Identifier
- `appointment.id`
- Booking Note
- `appointment.comment` - maybe?
- Reason for Visit
- `appointment.appointmentType.coding[n].code`

### What is missing

- Clinic Name
- Clinic Phone Number
- Facility Name
- Facility Phone Number

But these points are asscociated to the appointment by the location in `appointment.actor` in the. The `Location` is a clinic and a `Organization` is a facility. See the linked example for the the details on how they are linked.

The interaction with PGD:

Appointments will only have a reference. We grab the locations id, then call for the locations then grab the organization id then get the locations. 
