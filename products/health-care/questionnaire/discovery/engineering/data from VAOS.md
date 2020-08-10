
## Data Fields from VAOS

 The Data here represents sample data for some typical responses. It was obtained from mock data used by vets-website and vets-api. In some cases a summarized returned JSON has been provided as the resulting JSON can be long in some cases.

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


