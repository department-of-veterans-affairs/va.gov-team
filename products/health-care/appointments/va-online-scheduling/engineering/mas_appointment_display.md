# How VAOS displays a MAS v1 appointment

There are a few broad types of appointments that come through MAS.

## Determining type

There are four broad types of appointments in MAS:

- Video appointments
- In person VA (VistA) appointments
- Phone appointments
- Community care appointments

This is the logic to detect those types:

- If an appointment has an entry in `appointment.vvsAppointments`, then **it's a video appointment**
- If `appointment.phoneOnly` is true, then it's a **phone appointment**
- If `appointment.communityCare` is true, then it's a **community care appointment**
- If none of the above are true, it's an **in person VA appointment**

General notes:
- We always prefer using top level properties on `appointment` as opposed to properties on items in `vvsAppointments` or `vdsAppointments`. MAS does some work to pull up properties associated with patients, which is normally what we want to use.
- `appointment.facilityId` is the `sta3n` id (or VistA site id).
- `appointment.sta6aid` is the id of the actual appointment location, based on the `facilityId` and `appointment.clinicId`.

## Filtered statuses

Certain VistA statuses indicate an appointment should not be shown

Appointments in the past:
- FUTURE
- DELETED
- `<null>`
- Deleted
  
Appointments in the future:
- NO-SHOW
- DELETED

## Video appointments

Video appointments have their own set of types with different rules. As a shorthand, `vvsAppointment` refers to `appointment.vvsAppointments[0]`.

Video appointments where `vvsAppointment.appointmentKind` is `STORE_FORWARD` or `NO-VA-ID` are not shown.

- `STORE_FORWARD` appointments are diagnostic test appointments
- `NO_VA_ID` appointments are for patients who aren't enrolled and won't show up through VAOS

### Clinic based 

Clinic based appointments are video appointments where `vvsAppointment.appointmentKind` is `CLINIC_BASED`. They are sourced from `TMP`.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id `appointment.facilityId`.
- Location: Facilities api data associated with `appointment.sta6aid`
  - Using `appointment.facilityId` is misleading, as this is the VistA site for the appointment, but not necessarily the actual location a patient will need to visit
- Clinic name: `appointment.clinicFriendlyName` or `vdsAppointment.clinic.name`
- Video link: Not shown
- Providers: `vvsAppointment.providers`, if they exist
    - Unclear if this is populated for this type of video appointment)
- Status: Use `vvsAppointment.status.code` to determine if appointment should be marked as cancelled
    - Date is used to mark appointment as in the past 
    - VVS defaults this to `FUTURE`, unclear it TMP sets this value
- Booking notes: Not shown
- Cancelable: No
- Cancel directions: Facilities api data associated with `appointment.sta6aid`

### At home

At home appointments are video appointments where `vvsAppointment.appointmentKind` is `ADHOC` or `MOBILE_ANY`. `ADHOC` appointments come from VCM and `MOBILE_ANY` come from from TMP.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id of `appointment.facilityId`.
- Location: Not shown
  - VAOS directs users to cancel at facility associated with `appointment.facilityId`, but that is the VistA site, not necessarily the location of a provider associated with the appointment
- Clinic name: Not available
- Video link: `vvsAppointment.patients[0].virtualMeetingRoom.url`
  - Link is only enabled 30 minutes before the appointment time and up to 4 hours after.
- Providers: `vvsAppointment.providers`, if they exist
  - Unclear if this is populated for `MOBILE_ANY`
- Status: Not shown. Date is used to mark appointment as in the past
   - Cancelled video appointments are not returned
   - VVS defaults `vvsAppointment.status.code` to `FUTURE`, unclear it TMP sets this value
- Instructions: Text based on `vvsAppointment.instructionsTitle`
   - VAOS switches between two sets of instructions depending on the `instructionsTitle` value.
   - There are text instructions in the appointment that are not suited to displaying on the web
- Cancelable: no
- Cancel directions: Facilities api data associated with `appointment.facilityId`, if it exists
   - No facility id for MOBILE_ANY appointments

### VA device

VA device appointments are video appointments where `vvsAppointment.appointmentKind` is `MOBILE_GFE`. They are sourced from `TMP`.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id `appointment.facilityId`.
- Location: Not shown
  - VAOS directs users to cancel at facility associated with `appointment.facilityId`, but that is the VistA site, not necessarily the location of a provider associated with the appointment
- Clinic name: Not shown
- Video link: Not shown, message about using provided VA device shown instead
- Providers: `vvsAppointment.providers`
  - Unclear if this is populated for this type of video appointment)
- Status: Not shown. Date is used to mark appointment as in the past
   - Unclear how appointments are cancelled
   - VVS defaults `vvsAppointment.status.code` to `FUTURE`, unclear it TMP sets this value
- Booking notes: Not shown
- Cancelable: No
- Cancel directions: Facilities api data associated with `appointment.facilityId`, if it exists

## In person VA

These are VistA appointments that are not phone or community care.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id `appointment.facilityId`.
- Location: Facilities api data associated with `appointment.sta6aid`
  - Using `appointment.facilityId` is misleading, as this is the VistA site for the appointment, but not necessarily the actual location a patient will need to visit
- Clinic name: show `appointment.clinicFriendlyName` or `vdsAppointment.clinic.name`
- Video link: Not shown
- Providers: Not shown
- Status: Marked as cancelled if status is one of
  - CANCELLED BY CLINIC
  - CANCELLED BY PATIENT
  - CANCELLED BY PATIENT & AUTO-REBOOK
  - CANCELLED BY CLINIC & AUTO-REBOOK
- COVID-19 vaccine: if `appointment.char4` is `CDQC`, the appointment is marked as a COVID-19 vaccine appointment
- Booking notes: Not shown unless starts with VAOS reason string
  - Self scheduled appointments start with a set of reason strings, VAOS will display booking notes when the notes start with one of those strings
- Cancelable: Yes, if not COVID-19 vaccine
- Cancel directions: Facilities api data associated with `appointment.sta6aid`, if COVID-19 vaccine

## Phone appointments

These are VistA appointments that have `appointment.phoneOnly` set to true.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id `appointment.facilityId`.
- Location: Facilities api data associated with `appointment.sta6aid`
  - Using `appointment.facilityId` is misleading, as this is the VistA site for the appointment, but not necessarily the actual location a patient will need to visit
- Clinic name: show `appointment.clinicFriendlyName` or `vdsAppointment.clinic.name`
- Video link: Not shown
- Providers: Not shown
- Status: Marked as cancelled if status is one of
  - CANCELLED BY CLINIC
  - CANCELLED BY PATIENT
  - CANCELLED BY PATIENT & AUTO-REBOOK
  - CANCELLED BY CLINIC & AUTO-REBOOK
- COVID-19 vaccine: Not shown
- Booking notes: Not shown (can't be self-scheduled)
- Cancelable: Yes
- Cancel directions: None shown

## Community care

These are VistA appointments that have `appointment.communityCare` set to true. This is basically a stub for tracking purposes. They are not returned in MAS and we do not want to show these if possible.

- Appointment time: `appointment.startDate` or `vvsAppointment.dateTime`.
  - Date is in ISO format, in UTC
  - Displayed in timezone of facility with id `appointment.facilityId`.
- Location: Not shown
- Clinic name: Not shown
- Video link: Not shown
- Providers: Not shown
- Status: Marked as cancelled if status is one of
  - CANCELLED BY CLINIC
  - CANCELLED BY PATIENT
  - CANCELLED BY PATIENT & AUTO-REBOOK
  - CANCELLED BY CLINIC & AUTO-REBOOK
- COVID-19 vaccine: Not shown
- Booking notes: Not shown (can't be self-scheduled)
- Cancelable: No
- Cancel directions: Facilities api data associated with `appointment.sta6aid`
