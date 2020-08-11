
## Data Fields from VAOS

 The Data here represents sample data for some typical responses. It was obtained from mock data used by vets-website and vets-api. In some cases a summarized returned JSON has been provided as the resulting JSON can be long in some cases.
 
 VAOS calls VAMF and passes the data back and acts as a pass thru. There is some data normalization and flattening of data that occurs mostly in serializers. 
 

#### Appointment page in VAOS

The schedule and view your appointments page:
```
http://staging.va.gov/health-care/schedule-view-va-appointments/appointments/
```
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/appointments%20page.png?raw=true" width="30%" heigh="30%" />


This page makes these requests to the backend and recieves the results shown:


```
http://staging.va.gov/vaos/v0/appointments?start_date=2020-08-04T04:00:00.000Z&end_date=2021-09-04T04:00:00.000Z&type=va
```
<!---- 'confirmed_va.json' on frontend mocks ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_va.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_va_sum.json)

---

```
http://staging.va.gov/vaos/v0/appointments?start_date=2020-08-04&end_date=2021-09-04&type=cc
```
<!---- confirmed_cc.json' on frontend mocks --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_cc.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_cc_sum.json)

---

```
http://staging.va.gov/vaos/v0/appointment_requests?start_date=2020-07-05&end_date=2020-08-04
```
<!--- requests.json --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/requests.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/requests_sum.json)


The returned JSON will be a series of records, each having a reason for visit field

[Reason for visit field](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md#reason-for-visit-field)

---

```
http://staging.va.gov/vaos/v0/facilities?facility_codes[]=553
```
<!--- facilities.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facilities.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facilities_sum.json)

---

```
http://staging.va.gov/vaos/v0/request_eligibility_criteria?parent_sites[]=648
```
<!----- /request_eligibility_criteria.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/request_eligibility_criteria.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/request_eligibility_criteria_sum.json)

---

```
http://staging.va.gov/v1/facilities/va?ids=vha_442,vha_442GC,vha_552,vha_442GB,vha_442HK
```
<!---- facility_data.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facility_data.json)

[Summarized Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facility_data_sum.json)

---

## New Appointment

The facility listing page for a new appointment

```
https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility
```
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/facilities-for-new-appointment.png?raw=true" width="30%" heigh="30%" />

This page makes this request to the backend

```
http://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/sites-supporting-var.json)

---

## Express Care Appointment

Express care appointment appointment page

```
http://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-express-care-request/form
```

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/new-express-care-appointment.png?raw=true" width="30%" heigh="30%"/>


Clicking submit will POST to:
```
http://staging.va.gov/vaos/v0/appointment_requests?type=va
```

[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/post_appointment_req.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/app_req_post.yml.json)

[Contact Info Saved to VAOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/data%20from%20VAOS.md#contact-info-saved-to-vaos)
---

## Other backend requests comeing from vets-website:
```
/v0/appointment_requests/${requestId}/messages
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/get_messages_yml.json)

---

```
/v0/community_care/eligibility/${typeOfCare}
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/get_eligibility.yml.json)

---

v0/preferences

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/preferences.yml.json)

---

```
/v0/systems/${systemId}/direct_scheduling_facilities?type_of_care_id=${typeOfCareId}&parent_code=${parentId}
/v0/facilities/${facilityId}/visits/${directOrRequest}?system_id=${systemId}&type_of_care_id=${typeOfCareId}
/v0/facilities/${facilityId}/limits?type_of_care_id=${typeOfCareId}
/v0/facilities/${facilityId}/clinics?type_of_care_id=${typeOfCareId}&system_id=${systemId}
/v0/systems/${systemId}/pact
/facilities/va/vha_${getStagingId(facilityId)}
/v0/facilities/${facilityId}/available_appointments?type_of_care_id=${typeOfCareId}&clinic_ids[]=${clinicId}&start_date=${startDate}&end_date=${endDate}
/v0/facilities/${systemId}/cancel_reasons

```

#### PUT Requests

```
v0/preferences
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/put_requests.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/put_preferences.yml.json)

---

```
/v0/appointment_requests/${req.id}
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/put_requests.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/put_request.yml.json)

---

```
/v0/appointments/cancel
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/cancel_appointment.yml.json)
Status OK returned

---

#### POST Requests
```
/v0/appointments
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/post_appointment.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/post_appointment.yml.json)

---
```
/v0/appointment_requests/${id}/messages
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/appoint_req_msg.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/appoin_req_msg_post.yml.json)

---

## Reason for visit field

A GET call to the /v0/appointment_request route from the front end, results in a series of records being returned. Each record has a "reason for visit" field

```
On the backend, recorded VCR mock data indicates possible values for "reasons for visit" to be:
Allergies, Cold, Ear, Fever, Itching, Other, Rash
```

The front end mock data, has these possible values:
```
"Stomach and bowel problems such as diarrhea, constipation, nausea, vomiting, heartburn",
"Joint/muscle pain such as knee, shoulder, hip, ankle or foot pain",
"Joint/muscle pain such as knee, shoulder, hip, ankle or foot pain",
"High or low blood sugar, blood pressure, heart rate",
"Rash"
```

---

The front end code indicates a POST request to the appointment_request endpoint to vets-api.
It is returned data that includes a "reason for visit field". Keep in mind that this is also mock data used by the front end

```
/v0/appointment_requests?type=${type}
```

```
 data: {
    id: 'testing',
    attributes: {
      email: request.email,
      phoneNumber: request.phoneNumber,
      typeOfCareId: request.typeOfCareId,
      reasonForVisit: request.reasonForVisit,
      additionalInformation: request.additionalInformation,
      status: 'Submitted',
   }
```

## Status Indicators and States of Appointment

This spreadsheet listing appointment statuses was obtained from Jeff Balboni.
[Spreadsheet of appointment statuses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/Appointment%20Statuses.xlsx)

A GET call to /v0/appointments returns confirmed appointments. 

- These records have a hexidecimal ID field
- They containt a type field which is either "va_appointments" or "cc_appointments"
- The following fields apply to the "cc_appointments" type
  - an appointmentTime and timeZone field
  - an instructionsToVeteran text field
  - an attributes.address field
- The following fields apply to the "va_appointments" type
  - there is a attributes.facilityId field  
  - There is a vvsAppointments array that may exist that contains the appointment data with the following fields
    - multiple patient records
    - multiple provider records
    - a type field with values such as "SERVICE CONNECTED", "REGULAR", "ORGAN DONORS", "COMPENSATION & PENSION"    
    - a status field with values such as: "status": { "description": "F", "code": "FUTURE" }
    - an appointmentKind field with values such as "ADHOC", "MOBILE_GFE"
    - a dateTime field
    - a duration field
  - There is a vdsAppointments array that may exist that contains appointment data with the following fields
    - a type field with values similar to those in vvsAppointments array type field
    - an appointmentTime field
    - an appointmentLength field
  a sample of vdsAppointments and vvsAppointments lists is shown below
 
```
"vvsAppointments": [
          {
            "id": "8a74bdfa-0e66-4848-87f5-0d9bb413ae6d",
            "appointmentKind": "ADHOC",
            "sourceSystem": "SM",
            "dateTime": "2020-11-25T15:17:00Z",
            "duration": 20,
            "status": { "description": "F", "code": "FUTURE" },
            "schedulingRequestType": "NEXT_AVAILABLE_APPT",
            "type": "REGULAR",
            "bookingNotes": "T+90 Testing",
            "instructionsOther": false,
            "instructionsTitle": "Video Visit Preparation",
            "patients": [
              {
                "name": { "firstName": "JUDY", "lastName": "MORRISON" },
                "contactInformation": {
                  "mobile": "7036520000",
                  "preferredEmail": "marcy.nadeau@va.gov"
                },
                "location": {
                  "type": "NonVA",
                  "facility": {
                    "name": "CHEYENNE VAMC",
                    "siteCode": "983",
                    "timeZone": "10"
                  }
                },
                "patientAppointment": true,
                "virtualMeetingRoom": {
                  "conference": "VVC8275247",
                  "pin": "3242949390#",
                  "url": "https://care2.evn.va.gov/vvc-app/?join=1&media=1&escalate=1&conference=VVC8275247@care2.evn.va.gov&pin=3242949390#"
                }
              }
            },
            
            ],
            "providers": [
              {
                "name": { "firstName": "Test T+90", "lastName": "Test" },
                "contactInformation": {
                  "mobile": "8888888888",
                  "preferredEmail": "marcy.nadeau@va.gov",
                  "timeZone": "10"
                },
                "location": {
                  "type": "VA",
                  "facility": {
                    "name": "CHEYENNE VAMC",
                    "siteCode": "983",
                    "timeZone": "10"
                  }
                },
                "virtualMeetingRoom": {
                  "conference": "VVC8275247",
                  "pin": "7172705#",
                  "url": "https://care2.evn.va.gov/vvc-app/?name=Test%2CTest+T%2B90&join=1&media=1&escalate=1&conference=VVC8275247@care2.evn.va.gov&pin=7172705#"
                }
              }
            ]
          }
            ...
          ]
             
```

```
 "vdsAppointments": [
          {
            "bookingNote": null,
            "appointmentLength": "30",
            "appointmentTime": "2020-11-20T17:00:00Z",
            "clinic": {
              "name": "CHY VISUAL FIELD",
              "askForCheckIn": false,
              "facilityCode": "983"
            },
            "type": "REGULAR",
            "currentStatus": "FUTURE"
          }
        ],
```

#### Contact Info Saved to VAOS

These calls will result in patient data as shown below being sent to VAOS along with other data

```
POST /v0/appointment_requests

PUT /v0/appointment_requests/${req.id}

```

```
  "patient":{
   "displayName":"Morrison,
    Judy",
   "firstName":"Judy",
   "lastName":"Morrison",
   "dateOfBirth":"Apr 01, 1953",
   "patientIdentifier":{
      "uniqueId":"1259897978"
   },
   "ssn":"796061976",
   "inpatient":false,
   "textMessagingAllowed":false,
   "id":"1259897978",
   "objectType":"Patient"
},
"bestTimetoCall":[
   "Morning"
],
"appointmentRequestDetailCode":[
   {
      "userId":"1012845331V153043",
      "detailCode":{
         "code":"DETCODE8"
      }
   }
],
"patientIdentifier":{
   "assigningAuthority":"ICN",
   "patientIdentifier":"1012845331V153043"
}
}
  
```    

## VAOS Swagger JSON

There is JSON that can be plugged into swagger though it is not complete

[https://staging-api.va.gov/vaos/v0/apidocs](https://staging-api.va.gov/vaos/v0/apidocs)
