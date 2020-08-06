
## Data Fields from VAOS

#### Appointment page in VAOS

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/content/images/appointments%20page.png?raw=true" width="30%" heigh="30%" />

Going to the schedule and view your appointments page:
```
http://localhost:3001/health-care/schedule-view-va-appointments/appointments/
```

Results in these requests to backend:

'confirmed_va.json' on frontend mocks

```
http://localhost:3000/vaos/v0/appointments?start_date=2020-08-04T04:00:00.000Z&end_date=2021-09-04T04:00:00.000Z&type=va
```

'confirmed_cc.json' on frontend mocks

```
http://localhost:3000/vaos/v0/appointments?start_date=2020-08-04&end_date=2021-09-04&type=cc
```


```
http://localhost:3000/vaos/v0/appointment_requests?start_date=2020-07-05&end_date=2020-08-04
```
requests.json
[Returned JSON](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/content/JSON/requests.json)


./facilities.json

```
http://localhost:3000/vaos/v0/facilities?facility_codes[]=553
```




