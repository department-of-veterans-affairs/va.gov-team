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

- [ ] Appointment Type (Primary Care, Mental Health, etc. )
- [ ] Clinic Name
- [ ] Facility Name
- [ ] Appointment Date Time
- [ ] Appointment Status
- [ ] Appointment Identifier

### Questionnaire Form

- [ ] Appointment Type (Primary Care, Mental Health, etc. )
- [ ] Clinic Name
- [ ] Clinic Phone
- [ ] Facility Name
- [ ] Facility Phone
- [ ] Appointment Date Time
- [ ] Appointment Status
- [ ] Appointment Identifier
- [ ] Booking Note
- [ ] Reason for Visit

### Complete List

- [ ] Appointment Type (Primary Care, Mental Health, etc. )
- [ ] Clinic Name
- [ ] Clinic Phone
- [ ] Facility Name
- [ ] Facility Phone
- [ ] Appointment Date Time
- [ ] Appointment Status
- [ ] Appointment Identifier
- [ ] Booking Note
- [ ] Reason for Visit

## Mapping from MAP

### Sample MAP Object

<details>
  <summary>Full Sample Object</summary>
    ```
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

- [ ] Appointment Type (Primary Care, Mental Health, etc. )
  - [ ] `appointment.attributes.vdsAppointments[n].stopCode`
- [ ] Clinic Name
  - [ ] `appointment.attributes.clinicFriendlyName`
- [ ] Clinic Phone
  - [ ] `appointment.attributes.vdsAppointments[n].clinic.phoneNumber`
- [ ] Facility Name
  - [ ] `appointment.attributes.vdsAppointments[n].clinic.facility.displayName`
- [ ] Facility Phone
  - [ ] `appointment.attributes.vdsAppointments[n].clinic.facility.phoneNumber`
- [ ] Appointment Date Time
  - [ ] `appointment.attributes.vdsAppointments[n].appointmentTime`
- [ ] Appointment Status
  - [ ] `appointment.attributes.vdsAppointments[n].clinic.stopCode`
- [ ] Appointment Identifier
  - [ ] `appointment.id`
- [ ] Booking Note
  - [ ] `appointment.attributes.vdsAppointments[n].bookingNotes`
- [ ] Reason for Visit
  - [ ] `appointment.attributes.vdsAppointments[n].bookingNotes`

## Mapping from FHIR

### Sample FHIR Object

<details>
  <summary>Full object</summary>
  ```
  {
    appointment: {
      "resourceType" : "Appointment",
      "id" : "202008211400983000084800000000000000",
      "text" : {
        "status" : "generated",
        "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\">Brian MRI results discussion</div>"
      },
      "status" : "booked",
      "serviceCategory" : [
        {
          "coding" : [
            {
              "system" : "http://example.org/service-category",
              "code" : "gp",
              "display" : "General Practice"
            }
          ]
        }
      ],
      "serviceType" : [
        {
          "coding" : [
            {
              "code" : "52",
              "display" : "General Discussion"
            }
          ]
        }
      ],
      "specialty" : [
        {
          "coding" : [
            {
              "system" : "http://snomed.info/sct",
              "code" : "394814009",
              "display" : "General practice"
            }
          ]
        }
      ],
      "appointmentType" : {
        "coding" : [
          {
            "system" : "http://terminology.hl7.org/CodeSystem/v2-0276",
            "code" : "FOLLOWUP",
            "display" : "A follow up visit from a previous appointment"
          }
        ]
      },
      "reasonReference" : [
        {
          "reference" : "Condition/example",
          "display" : "Severe burn of left ear"
        }
      ],
      "priority" : 5,
      "description" : "Discussion on the results of your recent MRI",
      "start" : "2013-12-10T09:00:00Z",
      "end" : "2013-12-10T11:00:00Z",
      "created" : "2013-10-10",
      "comment" : "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
      "basedOn" : [
        {
          "reference" : "ServiceRequest/myringotomy"
        }
      ],
      "participant" : [
        {
          "actor" : {
            "reference" : "Patient/1008596379V859838",
            "display" : "Peter James Chalmers"
          },
          "required" : "required",
          "status" : "accepted"
        },
        {
          "type" : [
            {
              "coding" : [
                {
                  "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  "code" : "ATND"
                }
              ]
            }
          ],
          "actor" : {
            "reference" : "Practitioner/I2-6NVSMKEGQKNB3KRDXBGE7NRIEY000000",
            "display" : "Dr Adam Careful"
          },
          "required" : "required",
          "status" : "accepted"
        },
        {
          "actor" : {
            "reference" : "Location/534-12975",
            "display" : "NORTH CHARLESTON VA CBOC, PRIMARY CARE/MEDICINE"
          },
          "required" : "required",
          "status" : "accepted"
        }
      ]
    }
  }
  ```
</details>

### Mapped Properties for FHIR object

- [ ] Appointment Type (Primary Care, Mental Health, etc. )
  - [ ] `appointment.specialty[n].coding[n].display`
  - [ ] `appointment.specialty[n].coding[n].code`
- [ ] Clinic Name
- [ ] Clinic Phone
- [ ] Facility Name
- [ ] Facility Phone
- [ ] Appointment Date Time
  - [ ] `appointment.start`
- [ ] Appointment Status
  - [ ] `appointment.status`
- [ ] Appointment Identifier
  - [ ] `appointment.id`
- [ ] Booking Note
  - [ ] `appointment.comment` - maybe?
- [ ] Reason for Visit
  - [ ] `appointment.appointmentType.coding[n].code`

### What is missing

- Clinic Name
- Clinic Phone Number
- Facility Name
- Facility Phone Number
