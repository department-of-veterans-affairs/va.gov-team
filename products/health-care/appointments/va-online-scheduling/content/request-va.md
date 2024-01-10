# VA Appointment Request Copy

## Preferred Date

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/va-request`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Choose an appointment day and time
```

**PAGE CONTENT**

```
Choose your preferred date and time for this appointment. You can request up to 3 dates. A scheduling coordinator will call you to schedule your appointment.


{Monday-Friday calendar}
```

**NAVIGATION BUTTONS**

```Back```

```Continue```

---

## Reason for Appointment

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/va-request/reason`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Choose a reason for this appointment
```

**PAGE CONTENT**

```
Let us know why you’re making this appointment. (*Required)

{Option} This is a routine or follow-up visit.
{Option} I have a new medical issue.
{Option} I have a concern or question about my medication.
{Option} My reason isn’t listed here.

Please provide any additional details you'd like to share with your provider about this appointment. (*Required)

{Input box}
{###} characters remaining

(H) If you have an urgent medical need, please:
- Call 911, or
- Call the Veterans Crisis hotline at 988 and select 1, or
- Go to your nearest emergency room or VA medical center. {Link} Find your nearest VA medical center
```

**PROGRESS BUTTONS**

```Back```

```Continue```

---

## Preferred modality

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/va-request/preferred-method`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Choose a type of appointment
```

**PAGE CONTENT**

```
Please let us know how you would like to be seen for this appointment. (*Required)

{Option} Office visit
{Option} Phone call
{Option} Telehealth (through VA Video Connect)

```

**PROGRESS BUTTONS**

```Back```

```Continue```

---

## Contact Information

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/va-request/contact-information`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Confirm your contact information
```

**PAGE CONTENT**

```
We’ll use this information to contact you about your appointment. Any updates you make here will only apply to VA online appointment scheduling.

Want to update your contact information for more VA benefits and services?
{Link} Go to your VA profile.

Your phone number (*Required)
{Input field}
```

```diff
- - What are the best times for us to call you? (*Required)
- - Morning (8:00 a.m. - noon)
- - Afternoon (noon - 4:00 p.m.)
- - Evening (4:00 p.m. - 8:00 p.m.)
@@ GH47728 @@
```

```
Your email address (*Required)
{Input field}
```


**ERROR VALIDATION**

#### Phone number - empty field

```
Please enter a phone number
```

#### Best times - empty field

_tbd_

#### Email address - empty field

```
Please enter an email address
```

#### Phone number - invalid entry

```
Please enter a valid 10-digit phone number (with or without dashes)
```

#### Email address - invalid entry

```
Please enter a valid email address
```

**PROGRESS BUTTONS**

```Back```

```Continue```

---

## Review Appointment Details

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/va-request/review`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Review your appointment details
```

**PAGE CONTENT**

```
You're scheduling a{n} {type of care} appointment

Please review the information before submitting your request. If you need to update any details, click Edit to go back to the screen where you entered the information. After you update your information, you’ll need to go through the tool again to request your appointment.

VA APPOINTMENT

{type of care}

Preferred date and time
{appointment date} at {appointment time}

---

{facility name}              {Link}Edit
{city, ST}

---

{reason for appointment}     {Link}Edit
{booking note}

---

How to be seen
{Modality}

---

```diff
Your contact details         {link}Edit
{email address}
{phone number}
- Call {morning, afternoon, evening}
@@ GH47728 @@
```

**PROGRESS BUTTONS**

```Request appointment```


### Endpoint Alert - Server error

```
We couldn't schedule this appointment

We're sorry. Something went wrong when we tried to submit your request. You can try again later, or call your VA medical center to help with your request.

{facility name}
{facility address}
Main phone: {phone number}
TTY: 711
```

### Endpoint Alert - Configuration error

```
We couldn't schedule this appointment

We're sorry. Something went wrong when we tried to submit your request. Call your VA medical center to schedule this appointment.

{facility name}
{facility address}
Main phone: {phone number}
TTY: 711
```

---

## Confirmation Page

See [confirmation state](./appointment-details.md#va-request---confirmed) in the apoointment detail pages.

---