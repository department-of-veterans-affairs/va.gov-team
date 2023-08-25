# Appointment Details Copy Doc

---

<details><summary>Use the following template for content structure.</summary>
  
![va-appt-template-xsmall copy](https://user-images.githubusercontent.com/72046525/123011888-1c570a00-d376-11eb-8eb1-5c8e19a60b0d.png)

</details>

---

## VA Requests

### VA Request - Confirmed

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]?confirmMsg=true`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]?confirmMsg=true`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```diff
- Pending {type of care} appointment
+ We received your request
@@ GH51648 @@
```

**PAGE DESCRIPTION**

```diff
- Your appointment request has been submitted. The time and date of this appointment are still to be determined.
+ We'll try to schedule your appointment in the next 2 business days. Check back here or call your facility for updates.
@@ GH51648 @@
```

```diff
- Review your appointments
+ Review your upcoming appointments
@@ GH51648 @@
```

```diff
- Schedule a new appointment
+ Schedule a new appointment
@@ GH51648 @@
```

**PAGE CONTENT**

```diff
+ [Type of care]

- VA appointment
+ Facility
{Facility name}
{Facility address line 1}
{Facility address line 2}
Directions

Main phone: {phone number} (TTY: 711)

- Preferred type of appointment
- {Office visit, Phone call, Telehealth (through VA Video Connect)}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

- You shared these details about your concern
+ Details you’d like to share with your provider
{Reason}: {Booking note}

+ How you want to attend
[Selected modality]

- Your contact details
+ Your contact information
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

**ACTIONS**

```Cancel request```


### VA Request - Pending

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```diff
- Pending {type of care} appointment
+ Request for appointment 
@@ GH52490 @@
```

**PAGE DESCRIPTION**

```diff
- The time and date of this appointment are still to be determined.
+ We will review your request and contact you to schedule the first available appointment.
@@ GH52490 @@
```

**PAGE CONTENT**

```diff
+ [Type of care]


- VA appointment
+ Facility
{Facility name}
{Facility address line 1}
{Facility address line 2}
Directions

Main phone: {phone number} (TTY: 711)

- Preferred type of appointment
- {Office visit, Phone call, Telehealth (through VA Video Connect)}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

- You shared these details about your concern
+ Details you’d like to share with your provider
{Reason}: {Booking note}

+ How you want to attend
[Selected modality]

- Your contact details
+ Your contact information
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

**ACTIONS**

```Cancel request```


---

### VA Request - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```diff 
- {Type of care} appointment request
+ Canceled request for appointment
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this request. If you still need an appointment, call us or request a new appointment online.
```

**PAGE CONTENT**

```diff
+ [Type of care]


- VA appointment
+ Facility
{Facility name}
{Facility address line 1}
{Facility address line 2}
Directions

Main phone: {phone number} (TTY: 711)

- Preferred type of appointment
- {Office visit, Phone call, Telehealth (through VA Video Connect)}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

- You shared these details about your concern
+ Details you’d like to share with your provider
{Reason}: {Booking note}

+ How you want to attend
[Selected modality]

- Your contact details
+ Your contact information
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

---

## VA In-person

### VA In-person - Confirmed

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]?confirmMsg=true`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]?confirmMsg=true`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to appointments`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
We've scheduled and confirmed your appointment.
```

```Review your appointments```

```Schedule a new appointment```

**PAGE CONTENT**

```
Type of care: {Type of care} 

VA appointment
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Reason}: {Booking note}
```

**ACTIONS**

```Add to calendar```

```Print```

```Cancel appointment```

---

### VA In-person - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA appointment
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Reason}: {Booking note}
```

**ACTIONS**

```Add to calendar```

```Print```

```Cancel appointment```


---

### VA In-person - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of care}

VA appointment
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Reason}: {Booking note}
```

**ACTIONS**

```Print```


---

### VA In-person - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment. If you want to reschedule, call us or schedule a new appointment online.
```

**PAGE CONTENT**

```
Type of care: {Type of care}

VA appointment
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Reason}: {Booking note}
```

---

### VA In-person Vaccine Appointment - Confirmed

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]?confirmMsg=true`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]?confirmMsg=true`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to appointments`

**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
We've scheduled and confirmed your appointment.
```

```Review your appointments```

```Schedule a new appointment```

**PAGE CONTENT**

```
Type of care: {Type of care}

COVID-19 vaccine
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?
Contact this provider if you need to reschedule or cancel your appointment.
```

---

### VA In-person Vaccine Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of care}

COVID-19 vaccine
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?

Contact this provider if you need to reschedule or cancel your appointment.
```


---

### VA In-person Vaccine Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of care}


COVID-19 vaccine
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

**ACTIONS**

```Print```

---

### VA In-person Vaccine Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment. If you want to reschedule, call us or schedule a new appointment online.
```

**PAGE CONTENT**

```
Type of care: {Type of care}


COVID-19 vaccine
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

---

## VA Video Care Appointments

### VA VVC at Home Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at home

You can join this meeting from your home or anywhere you have a secure internet connection.
You can join VA Video Connect up to 30 minutes prior to the start time.

Join appointment

You'll be meeting with
{Provider name}

Prepare for video visit

Before your appointment:
- If you’re using an iPad or iPhone for your appointment, you’ll need to download the VA Video Connect iOS app beforehand. If you’re using any other device, you don’t need to download any software or app before your appointment.
- You’ll need to have access to a web camera and microphone. You can use an external camera and microphone if your device doesn’t have one.

To connect to your Virtual Meeting Room at the appointment time, click the “Join session” button on this page or the link that’s in your confirmation email.

For the best video experience, we recommend you:

- Connect to this appointment from a quiet, private area that has good light
- Check to ensure you have a strong internet connection
- Connect to this appointment on a Wi-Fi network if using a mobile phone, rather than a cellular data network
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?

Contact this provider if you need to reschedule or cancel your appointment.
```

--- 

### VA VVC at Home Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at home

Provider
{Provider name}
```

**ACTIONS**

```Print```


---

### VA VVC Home Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}


VA Video Connect at home

Provider
{Provider name}
```


---

### VA VVC at VA Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at a VA location

You must join this meeting from this VA location:

{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You'll be meeting with
{Provider name}
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?

Contact this provider if you need to reschedule or cancel your appointment.
```


---

### VA VVC VA Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at a VA location

{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You'll be meeting with
{Provider name}
```

**ACTIONS**

```Print```


---

### VA VVC VA Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}


VA Video Connect at a VA location

{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You'll be meeting with
{Provider name}
```

---

### VA VVC GFE Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect using a VA device

You can join this video meeting using a device provided by VA.

You'll be meeting with
{Provider name}
```

```Add to calendar```

```Print```

```
Need to make changes?

Contact this facility if you need to reschedule or cancel your appointment:

{Facility name}
Type of care: {Type of Care}

VA Video Connect at a VA location

You must join this meeting from this VA location:

{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)

You'll be meeting with
{Provider name}
```

---

### VA VVC GFE Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}


VA Video Connect using a VA device

Provider
{Provider name}
```

**ACTIONS**

```Print```


---

### VA VVC GFE Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect using a VA device

Provider
{Provider name}
```


---

### VA VVC ATLAS Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at an ATLAS location
You must join this video meeting from this ATLAS (non-VA) location:
{Location address}
Directions

Appointment code: {Appt code}

You will use this code to find your appointment using the computer provided at the site.

You'll be meeting with
{Provider name}
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?

Contact this facility if you need to reschedule or cancel your appointment:

{Facility name}
Main phone: {phone number} (TTY: 711)

```


---

### VA VVC ATLAS Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at an ATLAS location
{Location address}
Directions

Provider
{Provider name}
```

**ACTIONS**

```Print```


---

### VA VVC ATLAS Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA Video Connect at an ATLAS location
{Location address}
Directions

Provider
{Provider name}
```

---

### VA Phone Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA appointment over the phone
Someone from your VA facility will call you at your phone number on file at the appointment time.

{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

```
You shared these details about your concern

{Reason}: {Booking note}
```

**ACTIONS**

```Add to calendar```

```Print```

```Cancel appointment```


---

### VA Phone Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA appointment over the phone
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

```
You shared these details about your concern

{Reason}: {Booking note}
```

**ACTIONS**

```Print```


---

### VA Phone Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]`

Page title: `VA appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment. If you want to reschedule, call us or schedule a new appointment online.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

VA appointment over the phone
{Facility name}
{Facility address}
Directions

Clinic: {Clinic name}
Main phone: {phone number} (TTY: 711)
```

```
You shared these details about your concern

{Reason}: {Booking note}
```

**ACTIONS**

```Print```


---

## Community Care Requests

### CC Request - Confirmed

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]?confirmMsg=true`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]?confirmMsg=true`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [H1 of previous page]`


**PAGE HEADER**

```diff
- Pending {type of care} appointment
+ We have recieved your request
@@ GH51668 @@ 
```

**PAGE DESCRIPTION**

```diff
- Your appointment has been submitted. The time and date of this appointment are still to be determined.
+ We'll try to schedule your appointment in the next 2 business days. Check back here or call your facility for updates.
@@ GH52490 @@
```

```diff 
- Review your appointments
+ Review your upcoming appointments
@@ GH52490 @@
```

```diff
- Request a new appointment
+ Schedule a new appointment 
@@ GH52490 @@
```

**PAGE CONTENT**

```diff
Preferred community care provider
{Provider name}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

You shared these details about your concern
{Booking note}

Your contact details
Email: {Email address}
Phone number: {phone number}
- Call {morning, afternoon, evening}
@@ GH50990 @@
```

```diff

+ Type of care 

Preferred community care provider
{Provider name}

- Preferred date and time
+ Preferred date and timeframe
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

+ Scheduling facility
+ {Facility name} 
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Preferred provider
+ [Provider name]
+ [Address]
+ Directions
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Language you’d prefer the provider speak
+ [Language]

- You shared these details about your concern
- {Booking note}
+ Details you’d like to share with your provider
+ [Booking note]

Your contact details
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

**ACTIONS**

```Cancel request```

---

### CC Request - Pending

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```diff
- Pending {type of care} appointment
+ Request for community care
@@ GH51668 @@
```

**PAGE DESCRIPTION**

```diff
- The time and date of this appointment are still to be determined.
+ We'll try to schedule your appointment in the next 2 business days. Check back here or call your facility for updates.
@@ GH51668 @@
```

**PAGE CONTENT**

```diff
Preferred community care provider
{Provider name}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

You shared these details about your concern
{Booking note}

Your contact details
Email: {Email address}
Phone number: {phone number}
- Call {morning, afternoon, evening}
@@ GH50990 @@
```

```diff
+ Type of care 

Preferred community care provider
{Provider name}

- Preferred date and time
+ Preferred date and timeframe
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

+ Scheduling facility
+ {Facility name} 
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Preferred provider
+ [Provider name]
+ [Address]
+ Directions
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Language you’d prefer the provider speak
+ [Language]

- You shared these details about your concern
- {Booking note}
+ Details you’d like to share with your provider
+ [Booking note]

Your contact details
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

**ACTIONS**

```Cancel request```

---

### CC Request - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/pending/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]`

Page title: `[Page Header] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`

**PAGE HEADER**

```diff
- {Type of care} appointment request
+ Canceled request for community care
@@ GH52490 @@
```

**PAGE DESCRIPTION**

```diff
- {Canceler} canceled this appointment. If you want to reschedule, call us or schedule a new appointment online.
+ [Canceler] canceled this request. If you still need an appointment, call us or request a new appointment online.
@@ GH52490 @@
```

**PAGE CONTENT**

```diff
Preferred community care provider
{Provider name}

Preferred date and time
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

You shared these details about your concern
{Booking note}

Your contact details
Email: {Email address}
Phone number: {phone number}
- Call {morning, afternoon, evening}
@@ GH50990 @@
```

```diff

+ Type of care 

Preferred community care provider
{Provider name}

- Preferred date and time
+ Preferred date and timeframe
{Preferred date & time #1}
{Preferred date & time #2}
{Preferred date & time #3}

+ Scheduling facility
+ {Facility name} 
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Preferred provider
+ [Provider name]
+ [Address]
+ Directions
+ Main phone number: [XXX-XXX-XXXX](TTY: 711) 

+ Language you’d prefer the provider speak
+ [Language]

- You shared these details about your concern
- {Booking note}
+ Details you’d like to share with your provider
+ [Booking note]

Your contact details
Email: {Email address}
Phone number: {phone number}
@@ GH52490 @@
```

---

## Community Care Appointments

### CC Appointment - Upcoming

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/cc/[ID]`

Page title: `Community care appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

none

**PAGE CONTENT**

```
Type of care: {Type of Care}

Community care provider
{Provider name}
{Treatment specialty}

{Provider address}
Directions

Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Booking note}
```

**ACTIONS**

```Add to calendar```

```Print```

```
Need to make changes?

Contact this provider if you need to reschedule or cancel your appointment.
```

---

### CC Appointment - Past

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/past/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/past/cc/[ID]`

Page title: `Community care appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
This appointment occurred in the past.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

Community care provider
{Provider name}
{Treatment specialty}

{Provider address}
Directions

Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Booking note}
```

**ACTIONS**

`Print`


---

### CC Appointment - Canceled

**NAVIGATION**

New URL: `https://va.gov/my-health/appointments/[ID]`

Current URL: `https://va.gov/health-care/schedule-view-va-appointments/appointments/cc/[ID]`

Page title: `Community care appointment on [Weekday], [Month] [DD], [YYYY] | Veterans Affairs`

Breadcrumb: `< Back to [h1 of previous page]`


**PAGE HEADER**

```
{appointment date} at {appointment time}
```

**PAGE DESCRIPTION**

```
{Canceler} canceled this appointment. If you want to reschedule, call us or schedule a new appointment online.
```

**PAGE CONTENT**

```
Type of care: {Type of Care}

Community care provider
{Provider name}
{Treatment specialty}

{Provider address}
Directions

Main phone: {phone number} (TTY: 711)

You shared these details about your concern
{Booking note}
```

**ACTIONS**

none

---

### Community Care Variations

The copy below may be used in place of some copy above based on the data available.

#### No Provider Preferences

```
Preferred community care provider
No provider selected
```












