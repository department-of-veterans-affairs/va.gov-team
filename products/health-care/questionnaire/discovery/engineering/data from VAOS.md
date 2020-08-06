
## Data Fields from VAOS

 The Data here represents sample data. It was obtained from mock data used by vets-website and vets-api

#### Appointment page in VAOS

The schedule and view your appointments page:
```
http://localhost:3001/health-care/schedule-view-va-appointments/appointments/
```
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/appointments%20page.png?raw=true" width="30%" heigh="30%" />


This page makes these requests to the backend and recieves the results shown:


```
http://localhost:3000/vaos/v0/appointments?start_date=2020-08-04T04:00:00.000Z&end_date=2021-09-04T04:00:00.000Z&type=va
```
<!---- 'confirmed_va.json' on frontend mocks ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_va.json)

---

```
http://localhost:3000/vaos/v0/appointments?start_date=2020-08-04&end_date=2021-09-04&type=cc
```
<!---- confirmed_cc.json' on frontend mocks --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_cc.json)

---

```
http://localhost:3000/vaos/v0/appointment_requests?start_date=2020-07-05&end_date=2020-08-04
```
<!--- requests.json --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/requests.json)

---

```
http://localhost:3000/vaos/v0/facilities?facility_codes[]=553
```
<!--- facilities.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facilities.json)

---

```
http://localhost:3000/vaos/v0/request_eligibility_criteria?parent_sites[]=648
```
<!----- /request_eligibility_criteria.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/request_eligibility_criteria.json)

---

```
http://localhost:3000/v1/facilities/va?ids=vha_442,vha_442GC,vha_552,vha_442GB,vha_442HK
```
<!---- facility_data.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facility_data.json)

---

The facility listing page for a new appointment
```
https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility
```
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/facilities-for-new-appointment.png?raw=true" width="30%" heigh="30%" />

This page makes this request to the backend

```
http://localhost:3001/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/sites-supporting-var.json)

---

Express care appointment appointment page

```
http://localhost:3001/health-care/schedule-view-va-appointments/appointments/new-express-care-request/form
```

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/new-express-care-appointment.png?raw=true" width="30%" heigh="30%"/>


Clicking submit will POST to:
```
http://localhost:3000/vaos/v0/appointment_requests?type=va
```
(json may vary)

---

## Other backend requests comeing from vets-website:
```
/v0/appointment_requests/${requestId}/messages
```
[Returns JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/get_messages_yml.json)

---

```
/v0/community_care/eligibility/${typeOfCare}
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/get_eligibility.yml.json)


```
/v0/systems/${systemId}/direct_scheduling_facilities?type_of_care_id=${typeOfCareId}&parent_code=${parentId}
/v0/facilities/${facilityId}/visits/${directOrRequest}?system_id=${systemId}&type_of_care_id=${typeOfCareId}
/v0/facilities/${facilityId}/limits?type_of_care_id=${typeOfCareId}
/v0/facilities/${facilityId}/clinics?type_of_care_id=${typeOfCareId}&system_id=${systemId}
/v0/systems/${systemId}/pact
/facilities/va/vha_${getStagingId(facilityId)}
/v0/facilities/${facilityId}/available_appointments?type_of_care_id=${typeOfCareId}&clinic_ids[]=${clinicId}&start_date=${startDate}&end_date=${endDate}
/v0/facilities/${systemId}/cancel_reasons
v0/preferences
```

#### PUT Requests

```
v0/preferences
```
[Sent JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/send/put_requests.yml.json)

[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/put_preferences.yml.json)

```
/v0/appointments/cancel
```

```
/v0/appointment_requests/${req.id}
```
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/put_request.yml.json)


#### POST Requests
```
/v0/appointments
/v0/appointment_requests/${id}/messages
```

