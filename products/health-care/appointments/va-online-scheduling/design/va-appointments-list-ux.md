# VA appointments list UX [WIP]

The VAOS appointments list displays a summary of a Veteran's upcoming, past, and pending appointments.

## Resources

[**Appointment list content**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/copy-docs/homepage.md)
All the copy displayed to Veterans in the appointments list. See also the definitions of [**terms [WIP]**](https://docs.google.com/spreadsheets/d/1zGfyAjwLgcU6KNpCQK09hQzKoN4ZmrM8u5Ejpitem1Q/edit#gid=520523114) (Google Sheets) used in the appointments lists and detail pages.

[**Appointments list UI [WIP]**](https://www.figma.com/file/XEYv3OTKEs389H2aZ59zZ9/?node-id=0%3A1)(Figma)

## Confirmed appointments

Confirmed appointments are created when a Veteran direct-schedules an appointment through VAOS, or when a scheduler at a facility creates the appointment it in one of a few systems.

The VAOS appointments list answers these questions:

* When is my appointment?
* What's it for?
* Who's it with?
* How will I be attending it?

A Veteran can complete some tasks on these appointments

* Print my list, or individual appointments
* Add an appointment to my calendar
* Cancel my appointment

Confirmed appointments may be canceled, or occur in the past.

## Pending appointments

A pending appointment is created when a Veteran requests an appointment through VAOS - [more details can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md). Once requested, these show on the pending appointments list in VAOS. This list answers these Veteran questions:

* What appointments have I requested that haven't been confirmed?
* What kind of care did I request?
* Who did I request it from?
* Are any of my requests canceled, and if so, by whom?

The pending appointments list shows appointments that have been pending for 120 days. After that, these drop off the list, whether or not they've been resolved by the facility. Canceled pending appointments drop off this list after 30 days. 

A Veteran may cancel any pending appointment.

## Other appointment lists

### MyHealtheVet

**Appointments list**
![image (1)](https://user-images.githubusercontent.com/2536801/149034028-8834d330-5b03-4a92-a673-0e3e56ba9579.png)

**Details**
![image](https://user-images.githubusercontent.com/2536801/149033969-50bde6f8-4d8c-4c00-b975-7d948abd5760.png)

### VA Mobile App

**Appointments list**

![List](https://user-images.githubusercontent.com/2536801/149032222-d5a871d5-6835-48ce-9eee-9a10575a2a6d.png)
![List (1)](https://user-images.githubusercontent.com/2536801/149032244-a95861a5-790a-4ac0-838e-d5cdbabbe333.png)

**Details**

![Appointment](https://user-images.githubusercontent.com/2536801/149032265-67e68cac-3633-4bf7-9825-7db1b224b6a7.png)

### My VA

My VA shows a summary of many important events, including appointments. The link sends Veterans over to VAOS.

<img width="322" alt="Screen Shot 2021-11-18 at 10 43 37 AM" src="https://user-images.githubusercontent.com/2536801/149032303-a104084e-4909-419c-97ac-b7dce32d0255.png">

### Check-in experience

Veterans can access the check-in experience on the day of their appointments via their mobile phone. It shows a summary of their upcoming appointments for that day.
https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/a/nRAMP7l

A pre check-in experience that includes appointment information is also in the works: https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/p/847B453D-F19E-4D55-9EE6-C523E7408879


