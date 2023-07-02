# Homepage Copy Doc

## Upcoming appointments

**NAVIGATION**

URL: `https://va.gov/my-health/appointments`

Old URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments`

**PAGE HEADER**

(H1) `Appointments`

**PAGE CONTENT**

(Primary Button) `Start scheduling`

    [Secondary Nav]
        (Link - Selected) Upcoming   
        (Link) Pending (#)  
        (Link) Past
    [/Secondary Nav]

`[List - Upcoming]`

**PAGE FOOTER**

[Appointments footer](./shared-content.md#appointments-footer) (Shared content)

### Upcoming state - empty

```
You don't have any upcoming appointments

You can schedule an appointment online now, or call your VA medical center to schedule an appointment.

{Link} `Schedule an appointment`
```

### Upcoming alert - Generic message if any of the systems are unavailable (VSP, VVS and HSRM) 

```
(H1) We can't display all your appointments.

(H2) We're working to resolve this issue.  To manage an appointment that is not shown in this list, contact the facility at which it was scheduled.

{link} Facility locator 
```

---

## Pending appointments

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/requests`

Old URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/pending`

Page title: `Requests | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > Pending appointments`

**PAGE HEADER**

(H1) `Pending appointments`

**PAGE CONTENT**

These appointment requests haven’t been scheduled yet.

    [Secondary Nav]
        (Link) Upcoming  
        (Link - Selected) Pending (#)  
        (Link) Past
    [/Secondary Nav]

`[List - pending requests]`

(H2) `Canceled requests`

These appointment requests have been canceled.

`[List - canceled requests]`

**PAGE FOOTER**

[Appointments footer](./shared-content.md#appointments-footer) (Shared content)

### Request state - empty

You don't have any appointment requests

You can schedule an appointment online now, or call your VA medical center to schedule an appointment.

(Link) `Schedule an appointment`


### Request alert - Generic message if any of the systems are unavailabe (VSP, VVS and HSRM) 

```
(H1) We can't display all your requests.

(H2) We're working to resolve this issue.  To manage an appointment that is not shown in this list, contact the facility at which it was scheduled.

{link} Facility locator 
```

---

## Past appointments

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/past`

Old URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > Past appointments`

**PAGE HEADER**

(H1) `Past appointments`

**PAGE CONTENT**

```
    [Secondary Nav]
        (Link) Upcoming  
        (Link) Pending (#)  
        (Link - Selected) Past
    [/Secondary Nav]
```
```
    [Date filter]

        (Label) Select a date range

        (Options)
            Past 3 months
            All of {current year}
            All of {prior year}
            {5 months prior} - {3 months prior}
            {8 months prior} - {6 months prior}
            {11 months prior} - {9 months prior}
        (/Options)

    [/Date filter]
```

`[List - Past appointments]`

**PAGE FOOTER**

[Appointments footer](./shared-content.md#appointments-footer) (Shared content)

### Past state - empty

```
You don't have any past appointments

You can schedule an appointment online now, or call your VA medical center to schedule an appointment.

(Link) `Schedule an appointment`
```

### Past alert - Generic message if any of the systems are unavailabe (VSP, VVS and HSRM) 

```
(H1) We can't display all your appointments.

(H2) We're working to resolve this issue.  To manage an appointment that is not shown in this list, contact the facility at which it was scheduled.

{link} Facility locator 

```




