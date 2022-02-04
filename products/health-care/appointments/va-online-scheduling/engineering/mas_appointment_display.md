# How VAOS displays a MAS v1 appointment

The mobile appointment service (MAS) is our current source for VA appointment data, past and present. It collects both appointments from VistA as well as video appointments from TMP and VCM. There is currently a version 2 update in progress that will change the data format returned and also shift the focus of MAS to serving both staff and veteran facing clients. When this happens, veteran facing clients will need to switch to pulling appointments from the new VAOS service appointments endpoint.

## Determining type

There are four broad types of appointments that can come from MAS:

- Video appointments
- In person VA (VistA) appointments
- Phone appointments
- Community care appointments (currently hidden)

This is the logic to detect those types:

- If an appointment has an entry in `appointment.vvsAppointments`, then it's a [video appointment](#video-appointments)
- If `appointment.phoneOnly` is true, then it's a [phone appointment](#phone-appointments)
- If `appointment.communityCare` is true, then it's a [community care appointment](#community-care)
- If none of the above are true, it's an [in person VA appointment](#in-person-va)

General notes:
- We always prefer using top level properties on `appointment` as opposed to properties on items in `vvsAppointments` or `vdsAppointments`. MAS does some work to pull up properties associated with patients, which is normally what we want to use.
- It's a bad idea to try to break up the appointments in MAS, when you encountered merged records. The merging logic is there for a reason and staying consistent with MAS's merging means that all clients using MAS are more likely to display appointments similarly.
- It's also a bad idea to combine other sources of appointments together with MAS, unless you are very sure that there are no duplicates. VAOS does this with community care appointments, because we know that MAS is hiding the VistA records for those appointments. MAS should be the source of truth.
- On VAOS, if there are multiple entries in vdsAppointments, we use the first one. We may want to switch to sorting these by earliest time, since we've seen one example where a provider VistA record that was 5 minutes after the patient VistA record was listed first
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

Video appointments where `vvsAppointment.appointmentKind` is `NO_VA_ID` are not shown.

- `NO_VA_ID` appointments are for patients who aren't enrolled and won't show up through VAOS

### Clinic based 

Clinic based appointments are video appointments where `vvsAppointment.appointmentKind` is `CLINIC_BASED` or `STORE_FORWARD`. They are sourced from `TMP`. `STORE_FORWARD` appointments might be diagnostic appointments, or intake appointments at the start of a in person clinic appointment.

- Label: VA Video Connect at a VA location
  - Under review, TMP is not VA Video Connect so this may be misleading
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

- Label: VA Video Connect at home
  - Under review for TMP (MOBILE_ANY), since they are not VA Video Connect and this may be misleading
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

- Label: VA Video Connect using a VA device
  - Under review, since they are not VA Video Connect and this may be misleading
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

- Label: VA appointment
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

- Label: Phone call
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

These are VistA appointments that have `appointment.communityCare` set to true. They are basically a stub for tracking purposes. They are not returned in MAS (that logic is controlled by feature flag), they will not be returned in MAS v2 (CC appointments will come from HSRM directly), and so VAOS has no plans to actually show them in production when using MAS v1.

- Label: Community care
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
