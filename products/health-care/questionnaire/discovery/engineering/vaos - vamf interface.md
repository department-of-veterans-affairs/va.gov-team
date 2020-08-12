
## VAOS/VAMF interface

VAOS makes various requests to VAMF. Below is a list of URI endpoints obtained from the vcr_cassette yaml files.


#### Summarized

```
uri: https://veteran.apps.va.gov/appointments/v1

uri: https://veteran.apps.va.gov/cce/v1
uri: https://veteran.apps.va.gov/cdw/v1
uri: https://veteran.apps.va.gov/facilities/v3

uri: https://veteran.apps.va.gov/mvi
uri: https://veteran.apps.va.gov/users/v2/session
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/*
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/facility-service/*
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/patient/*

uri: https://veteran.apps.va.gov/vsp/v1/Appointment/*
uri: https://veteran.apps.va.gov/vsp/v1/HealthcareService
uri: https://veteran.apps.va.gov/vsp/v1/Location/*
uri: https://veteran.apps.va.gov/vsp/v1/Organization
uri: https://veteran.apps.va.gov/vsp/v1/Patient
uri: https://veteran.apps.va.gov/vsp/v1/Slot
```

#### Complete list

```
uri: https://veteran.apps.va.gov/appointments/v1/patients/1012845331V153043/appointments?endDate=2020-07-02T08:00:00Z&pageSize=0&startDate=2020-06-02T07:00:00Z&useCache=false
uri: https://veteran.apps.va.gov/cce/v1/patients/1012845331V153043/eligibility/NotAType
uri: https://veteran.apps.va.gov/cce/v1/patients/1012845331V153043/eligibility/PrimaryCare
uri: https://veteran.apps.va.gov/cdw/v3/facilities/442/clinics?clinicIds=16&pageSize=0
uri: https://veteran.apps.va.gov/cdw/v3/facilities/442/clinics?clinicIds=16,90,110,192,193&pageSize=0
uri: https://veteran.apps.va.gov/facilities/v1/request-eligibility-criteria
uri: https://veteran.apps.va.gov/facilities/v1/request-eligibility-criteria?parent-sites=983
uri: https://veteran.apps.va.gov/facilities/v1/request-eligibility-criteria?parent-sites=984
uri: https://veteran.apps.va.gov/facilities/v1/request-eligibility-criteria?site-codes=534
uri: https://veteran.apps.va.gov/facilities/v1/request-eligibility-criteria?site-codes=688
uri: https://veteran.apps.va.gov/mvi/v1/patients/session/identifiers.json
uri: https://veteran.apps.va.gov/users/v2/session/jwts
uri: https://veteran.apps.va.gov/users/v2/session?processRules=true
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1000123456V123456/appointments
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1000123456V123456/appointments?endDate=08/22/2020&startDate=08/20/2019
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016eebd3b8820347/messages
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016ef6a8b1bf0396/messages
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointments
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointments/system/var/id/8a4886886e4c8e22016e92be77cb00f9
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/community-care-appointment
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/clinical-services/patient/ICN/1000123456V123456/clinics?clinical-service=323&institution-code=983&three-digit-code=983
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/clinical-services/patient/ICN/1000123456V123456/clinics?clinical-service=323&institution-code=984GA&three-digit-code=984
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions?clinical-service=323&facility-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions?clinical-service=323&facility-code=688&parent-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/institutions?clinical-service=CR1&facility-code=983&parent-code=983
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites?facility-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/parent-sites?facility-code=984
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/1000123456V123456/request-limit?clinical-service=323&institution-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/patient/ICN/1012845331V153043/booked-cc-appointments?endDate=2020-07-02T08:00:00Z&pageSize=0&startDate=2020-06-02T07:00:00Z&useCache=false
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/688/patient/ICN/1000123456V123456/available-appointment-slots?clinicIds=2276&endDate=02/19/2020&startDate=11/22/2019
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/688/patient/ICN/1000123456V123456/direct-eligibility/visited-in-past-months?clinical-service=323&institution-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/688/patient/ICN/1000123456V123456/pact-team
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/688/patient/ICN/1000123456V123456/request-eligibility/visited-in-past-months?clinical-service=323&institution-code=688
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/983/patient/ICN/1012845331V153043/booked-appointments
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/983/patient/ICN/1012845331V153043/cancel-appointment
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/direct-scheduling/site/984/patient/ICN/1000123456V123456/cancel-reasons-list
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/facility-service/supported-facilities?siteCodes=1,2
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/facility-service/supported-facilities?siteCodes=983,984
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/patient/ICN/1000123456V123456/preference
uri: https://veteran.apps.va.gov/var/VeteranAppointmentRequestService/v4/rest/patient/ICN/1012845331V153043/preference
uri: https://veteran.apps.va.gov/vsp/v1/
uri: https://veteran.apps.va.gov/vsp/v1/Appointment
uri: https://veteran.apps.va.gov/vsp/v1/Appointment/1631
uri: https://veteran.apps.va.gov/vsp/v1/Appointment/1631X
uri: https://veteran.apps.va.gov/vsp/v1/Appointment?_include=Appointment:location&date=lt2010-08-31T17:00:00Z&patient:Patient.identifier=1012845331V153043
uri: https://veteran.apps.va.gov/vsp/v1/Appointment?_include=Appointment:location&date=lt2020-08-31T17:00:00Z&patient:Patient.identifier=1012845331V153043
uri: https://veteran.apps.va.gov/vsp/v1/HealthcareService?_include=HealthcareService:location&organization.identifier=983
uri: https://veteran.apps.va.gov/vsp/v1/HealthcareService?organization.identifier=123
uri: https://veteran.apps.va.gov/vsp/v1/Location/353000
uri: https://veteran.apps.va.gov/vsp/v1/Location/393833
uri: https://veteran.apps.va.gov/vsp/v1/Organization
uri: https://veteran.apps.va.gov/vsp/v1/Organization/1234567
uri: https://veteran.apps.va.gov/vsp/v1/Organization/353000
uri: https://veteran.apps.va.gov/vsp/v1/Organization/353830
uri: https://veteran.apps.va.gov/vsp/v1/Organization?identifier=101
uri: https://veteran.apps.va.gov/vsp/v1/Organization?identifier=983,101
uri: https://veteran.apps.va.gov/vsp/v1/Organization?identifier=983,984
uri: https://veteran.apps.va.gov/vsp/v1/Patient?identifier=200000008
uri: https://veteran.apps.va.gov/vsp/v1/Patient?identifier=identifier-value
uri: https://veteran.apps.va.gov/vsp/v1/Slot?schedule=Schedule/sch.nep.AVT987.20191208
uri: https://veteran.apps.va.gov/vsp/v1/Slot?schedule=no-such-resource
uri: https://veteran.apps.va.gov/vsp/v1/Slot?start=2020-12-08
```
