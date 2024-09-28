# Homepage Copy Doc

## Upcoming appointments

**NAVIGATION**

URL: `https://va.gov/my-health/appointments`

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
{Heading} You don't have any upcoming appointments

You can schedule an appointment online now, or call your {Link}VA health facility{/Link} to schedule an appointment.

{Link} `Schedule an appointment`
```

### Upcoming alert - Generic message if any of the systems are unavailable (VSP, VVS and HSRM) 

```
{H1} We can't display all your appointments.

{H2} We're working to resolve this issue.  To manage an appointment that is not shown in this list, contact the facility at which it was scheduled.

{link} Facility locator 
```

### Upcoming alert - Cerner redirect

```
{H2} To manage appointments at these facilities, go to My VA Health

- [Cerner facility]
- [Cerner facility]

{Action link} Go to My VA Health

{Additional info title} Having trouble opening My VA Health?

{Additional info content}
    Try these steps:
    - Disable your browser's pop-up blocker
    - Sign in to My VA Health with the same account you used to sign in to VA.gov
{End additional info content}
```

---

## Pending appointments

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/pending`

Page title: `[Page header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > Pending appointments`

**PAGE HEADER**

(H1) `Pending appointments`

**PAGE CONTENT**

```diff
- These appointment requests haven’t been scheduled yet.
+ Appointments that you request will show here until staff review and schedule them.
@@GH71716@@
```
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

```

{Heading} You don't have any appointment requests

If you request an appointment it will show here until staff review and schedule it. You can schedule an appointment online now, or call your {link}VA health facility{/link} to schedule an appointment.

```

{Link} `Schedule an appointment`


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
{Heading} You don't have any past appointments

You can schedule an appointment online now, or call your {link}VA health facility{/link} to schedule an appointment.

{Link} `Schedule an appointment`
```

### Past alert - Generic message if any of the systems are unavailabe (VSP, VVS and HSRM) 

```
(H1) We can't display all your appointments.

(H2) We're working to resolve this issue.  To manage an appointment that is not shown in this list, contact the facility at which it was scheduled.

{link} Facility locator 

```




