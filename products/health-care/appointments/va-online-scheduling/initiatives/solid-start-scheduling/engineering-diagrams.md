## Sequence diagram - happy path

```
sequenceDiagram

    participant SMSSerivce as TBD SMS Service
    actor Veteran
    SMSSerivce ->> Veteran: Sends Text with shortend URL
    Veteran ->> va-gov: starts loading "Schedule Appointment" Page

    va-gov ->> VASS API: querys  POST /GetAppointments
    VASS API ->> va-gov: Returns {veteran data, current appointments}
    note over va-gov: Store veteran data in session
    va-gov ->> VASS API: query POST /ApointmentAvailibilty
    VASS API ->> va-gov: returns {timeslots, skills}
    note over va-gov: Show Scheduling Page
    Veteran <<->> va-gov: Selects desired date
    note over va-gov: Show Review Page
    Veteran <<->> va-gov: Confirms Review
    va-gov -> VASS API: querys POST /SaveAppointment
    VASS -> va-gov: returns { ok | can't confirm, appointment details }
    note over va-gov: displays confirmation page
```
