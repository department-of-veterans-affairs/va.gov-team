
## Data Fields from VAOS

#### Appointment page in VAOS

<img src="https://user-images.githubusercontent.com/11604461/89568936-068a3600-d7f2-11ea-9a6f-8643c3d3ea58.png" width="50%" heigh="50%" />


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

./requests.json

```
http://localhost:3000/vaos/v0/appointment_requests?start_date=2020-07-05&end_date=2020-08-04
```

<a href="https://raw.githubusercontent.com/massrb/images-and-content/master/requests.json" target="_blank">Returned JSON</a>


./facilities.json

```
http://localhost:3000/vaos/v0/facilities?facility_codes[]=553
```




