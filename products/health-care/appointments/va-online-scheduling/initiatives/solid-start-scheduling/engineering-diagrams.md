## Sequence diagram - happy path

```
sequenceDiagram
    participant SMSSerivce as TBD SMS Service
    actor Veteran
    SMSSerivce->>Veteran: Sends Text with shortened URL
    Veteran->>va-gov: starts loading "Schedule Appointment" Page

    va-gov->>VASS API: queries POST /GetAppointments
    VASS API->>va-gov: Returns {veteran data, current appointments}
    Note over va-gov: Store veteran data in session
    va-gov->>VASS API: query POST /AppointmentAvailability
    VASS API->>va-gov: returns {timeslots, skills}
    Note over va-gov: Show Scheduling Page
    Veteran-->>va-gov: Selects desired date
    Note over va-gov: Show Review Page
    Veteran-->>va-gov: Confirms Review
    va-gov->>VASS API: queries POST /SaveAppointment
    VASS API->>va-gov: returns { ok \| can't confirm, appointment details }
    Note over va-gov: displays confirmation page
```
