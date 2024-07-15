# Community Care Request Copy

## Preferred date

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request`

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

## Nearest city

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/closest-city`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
What's the closest city to you?
```

**PAGE CONTENT**

```diff
- (H1) What's the closest city to you?
+ (H1) What's the nearest city to you?
@@ GH51668 @@
```

```diff
- Choose a city that is near you. This ensures that we send your community care request to your closest VA health system. (*Required)
+ (*Required)
@@ GH51668 @@
```

- {registered site}
- {registered site}


**ERROR VALIDATION**

### City/State - no selection

Please provide a response


**NAVIGATION BUTTONS**

```Back```

```Continue```

---

## Request a provider (Optional)


**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/preferred-provider`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Request a {type of care} provider
```

**PAGE CONTENT**

```
We’ll call you to confirm your provider choice or to help you choose a provider if you skip this step.
You can request a provider for this care. If they aren’t available, we’ll schedule your appointment with a provider close to your home.

[Choose a provider](link)

```

### Provider section - home address on file

```
{H} Choose a provider

Displaying {#} of {total number} providers.

Show providers closest to
{Option - Default} Your home address
{Option} Your current location
{Option} {registered site city, state}
{Option} {registered site city, state}
...

{Option} {provider name}
{Option} {provider address}
{Option} {distance} miles
...

```

```Choose provider```

```Cancel```



### Provider section - no home address

```
{H} Choose a provider

Displaying {#} of {total number} providers.

Show providers closest to
{{registered site city, state}, Your current location}
Show providers closest to
{Option - Default} {registered site city, state}
{Option} {registered site city, state}
...
{Option} Your current location

Note: To show providers near your home, you need to add your home address to your [VA profile]{Link to VA profile}.

{Option} {provider name}
{Option} {provider address}
{Option} {distance} miles
...

```

### Provider Selected

```
Selected Provider
{provider name}
{provider address}
{distance} miles

[Change provider]{Link to provider section} [Remove]{Removes provider}

```

**PROGRESS BUTTONS**

```BACK```

```CONTINUE```

---

## Choose a language

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/preferred-language`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Choose a preferred language
```

**PAGE CONTENT**

```diff
- (H1) Choose a preferred language
+ (H2) What language do you prefer?
@@ GH51668 @@
```

```diff
- (H2) Select your language preference for your community care provider. (*Required)
+ (H2) Select the language you'd preferred your provider to speak?
@@ GH51668 @@
```
{English, Chinese, French, German, Italian, Korean, Portuguese, Russian, Spanish, Tagalog (Filipino), Vietnamese, Other}

#### Language - no selection

```diff
- Please provide a response
+ Select a language
@@ GH51668 @@
```

**PROGRESS BUTTONS**

```Back```

```Continue```

---

## Reason for Appointment

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/reason`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Tell us the reason for this appointment
```

**PAGE CONTENT**

```
Please let us know any additional details about your symptoms that may be helpful for the community health provider to know. (Optional)

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

## Contact Information

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/contact-information`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
How should we contact you?
```

**PAGE CONTENT**

```
We’ll use this information to contact you about your appointment. Any updates you make here will only apply to VA online appointment scheduling.

Want to update your contact information for more VA benefits and services?
{Link} Go to your VA profile.

Your phone number (*Required)
{Input field}
```

```

What are the best times for us to call you? (*Required)
{Checkbox} Morning (8:00 a.m. - noon)
{Checkbox} Afternoon (noon - 4:00 p.m.)
{Checkbox} Evening (4:00 p.m. - 8:00 p.m.)

```

```
Your email address (*Required)
{Input field)
```


**ERROR VALIDATION**

### Phone number - empty field

```
Please enter a phone number
```

### Best times - empty field

_tbd_

### Email address - empty field

```
Please enter an email address
```

### Phone number - invalid entry

```
Please enter a valid 10-digit phone number (with or without dashes)
```

### Email address - invalid entry

```
Please enter a valid email address
```

**PROGRESS BUTTONS**

```Back```

```Continue```

---

## Review Appointment Details

**NAVIGATION**

URL: `https://va.gov/my-health/appointments/schedule/community-request/review`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `VA.gov home > My HealtheVet > Appointments > [Page Header]`

Form title: NEW APPOINTMENT

**PAGE HEADER**

```
Review your appointment details
```

**PAGE CONTENT**

```
You're requesting a{n} {type of care} appointment

Please review the information before submitting your request. If you need to update any details, click Edit to go back to the screen where you entered the information. After you update your information, you’ll need to go through the tool again to request your appointment.

COMMUNITY CARE

{type of care}

Preferred date and time
{appointment date} at {appointment time}

---

Preferred provider
{Provider name | No provider specified}

Prefers provider to speak {Language}

---

{reason for appointment}     {Link}Edit
{booking note}

---

Your contact details         {link}Edit
{email address}
{phone number}

```

```
Call {morning, afternoon, evening}
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

---

## Confirmation Page

See [confirmation states](appointment-details.md#confirmation-states) in the apoointment detail pages copy doc

---









