# VA Direct Schedule Appointment Copy

## Choose a VA Location

**FORM TITLE**

```
NEW APPOINTMENT
```

**PAGE HEADER**

```
Choose a location
```

**PAGE CONTENT**

#### State: Sorted by Home Address

```
Select a VA facility where you’re registered that offers {type of care} appointments.(*Required)

Sort facilities

{Option 1 - Default} By your home address
{Option 2} By your current location
{Option 3} Alphabetically

{Facility options}
{Facility name}
{City, ST}
{####} miles
{Link - Cerner sites only} Schedule online at My VA Health

{Link} + {1-5} more locations

```

#### State: No Home Address on File

```
Select a VA facility where you’re registered that offers {type of care} appointments.(*Required)

Sort facilities

{Option 1} By your current location
{Option 2 - Default} Alphabetically

Note: to show facilities near your home, add your residential address in your VA profile.

{Facility name}
{City, ST}
{Link - Cerner sites only} Schedule online at My VA Health
...

{Link} + {1-5} more locations
```

#### State: Can't Sort by Location

```
Select a VA facility where you’re registered that offers {type of care} appointments.(*Required)

Sort facilities

{Option 1} By your home address
{Option 2 - Selected} By your current location
{Option 3} Alphabetically

{Alert Box}
{H} Your browser is blocked from finding your current location.

Make sure your browser’s location feature is turned on.

{Link} Retry searching based on current location
{/Alert Box}

```

#### State: Single Clinic

TBD


**NAVIGATION BUTTONS**

```Back```

```Continue```

---

## ALT Path: Cerner Offboard 

**FORM TITLE**

```
NEW APPOINTMENT
```

**PAGE HEADER**

```
How to schedule
```

**PAGE CONTENT**

```

{Facility name}

{Facility address}

To schedule an appointment online at this facility, go to My VA Health.

Or call this facility to schedule:

Main phone: {phone number}
TTY: 711

```

**NAVIGATION BUTTONS**

```Back```

```Continue```

---

## Choose a VA Clinic

**FORM TITLE**

```
NEW APPOINTMENT
```

**PAGE HEADER**

```
Choose a VA clinic
```

**PAGE CONTENT**

#### State: Multiple Clinics

```
In the last {number} months you’ve had {a/an} {type of care} appointment at the following {facility name} clinics:

Choose a clinic below or request a different clinic for this appointment. (*Required)

{Option}{Clinic name}
{Option}{Clinic name}
...
{Option}{I need a different clinic}
```

#### State: Single Clinic

```
{Type of care} appoinments are available at {clinic name}:

{facility name}
{facility address}

Main phone: {phone number}(TTY: 711)

Would you like to make an appointment at {clinic name}? (*Required)

(Option 1) Yes, make my appointment here
(Option 2) No, I need a different clinic
```

**NAVIGATION BUTTONS**

```Back```

```Continue```

---

## Choose a Desired Date


**PAGE HEADER**

```
When do you want to schedule this appointment?
```

**PAGE CONTENT**

```
Tell us the earliest day you’re available and we'll try to find the date closest to your request. (*Required)

Choose a date within the next 13 months for this appointment.
```

---

## Choose a Date

**FORM TITLE**

```
NEW APPOINTMENT
```

**PAGE HEADER**

```
Choose a date and time
```

**PAGE CONTENT**

#### State: Default

```
Please select an available date and time from the calendar below. Appointment times are displayed in {time zone}.


{Sunday-Saturday calendar}
```
#### State: Alert - Urgent Care - has slot

```
Your appointment time

The earliest we can schedule your appointment is {date} at {time}.

If this date doesn't work, you can:
- Submit a request for an earlier date, or
- Pick a date from the calendar below, or
- Call your local VA medical center

If you have an urgent medical need or need care right away:
- Call 911, or
- Call the Veterans Crisis hotline at 800-273-8255 and select 1 or
- Go to your nearest emergency room or VA medical center
```
```Request an earlier appointment OR Contact your local VA medical center```


#### State: Alert - Urgent Care - no slot

```
We couldn't find an appointment for your selected date

To schedule this appointment, you can:
- Call your local VA medical center, or
- Submit a request for another date

If you have an urgent medical need or need care right away:
- Call 911, or
- Call the Veterans Crisis hotline at 800-273-8255 and select 1 or
- Go to your nearest emergency room or VA medical center
```

```Request an earlier appointment OR Contact your local VA medical center```


**PROGRESS BUTTONS**

```Back```
```Continue```

---

## Reason for Appointment

**FORM TITLE**

```
NEW APPOINTMENT
```

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

(H2) If you have an urgent medical need, please:
- Call 911, or
- Call the Veterans Crisis hotline at 800-273-8255 and select 1, or
- Go to your nearest emergency room or VA medical center. (link) Find your nearest VA medical center
```

**PROGRESS BUTTONS**

```Back```
```Continue```

---

## Contact Information

**FORM TITLE**

```
NEW APPOINTMENT
```

**PAGE HEADER**

```
Confirm your contact information
```

**PAGE CONTENT**

```
We’ll use this information to contact you about your appointment. Any updates you make here will only apply to VA online appointment scheduling.

Want to update your contact information for more VA benefits and services?
{Link} Go to your VA profile

Your phone number (*Required)

{input field}

Your email address (*Required)

{input field)
```

**PROGRESS BUTTONS**

```BACK```
```CONTINUE```

## Review Appointment Details

**FORM TITLE**

_in Page Content_

**PAGE HEADER**

```
Review your appointment details
```

**PAGE CONTENT**

```
You're scheduling a {type of care} appointment

Make sure the information is correct. Then confirm your appointment. If you need to update any details, click Edit to go back to the screen where you entered the information. After you update your information, you'll need to go through the tool again to schedule your appointment.

VA APPOINTMENT

{type of care}

{appointment date} at {appointment time}

{clinic name}
{facility name}
{city, ST}

{reason for appointment}     {Link}Edit
{booking note}

Your contact details         {link}Edit
{email address}
{phone number}
Call {morning, afternoon, evening}
```

**PROGRESS BUTTONS**

```Confirm appointment```

---

## Confirmation Page

See [confirmation states](appointment-details.md#confirmation-states) in the apoointment detail pages copy doc

---
