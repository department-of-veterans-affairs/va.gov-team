
## Data Fields from VAOS

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


```
http://localhost:3000/vaos/v0/appointments?start_date=2020-08-04&end_date=2021-09-04&type=cc
```
<!---- confirmed_cc.json' on frontend mocks --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/confirmed_cc.json)


```
http://localhost:3000/vaos/v0/appointment_requests?start_date=2020-07-05&end_date=2020-08-04
```
<!--- requests.json --->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/requests.json)



```
http://localhost:3000/vaos/v0/facilities?facility_codes[]=553
```
<!--- facilities.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facilities.json)


```
http://localhost:3000/vaos/v0/request_eligibility_criteria?parent_sites[]=648
```
<!----- /request_eligibility_criteria.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/request_eligibility_criteria.json)


```
http://localhost:3000/v1/facilities/va?ids=vha_442,vha_442GC,vha_552,vha_442GB,vha_442HK
```
<!---- facility_data.json ---->
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/facility_data.json)


