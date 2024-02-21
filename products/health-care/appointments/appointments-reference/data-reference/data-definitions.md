# Appointment Data Definitions

Reference for data that VAOS displays for different appointment types.

## VA Appointments and Requests


### VA Booked Appointments


#### Appointment Date and Time

The day and time of the appointment. May be in the future or the past. The time displayed is in the facility's time zone.

#### Clinic Name

The name of the clinic where the appointment has been scheduled.

##### Patient-friendly Clinic Name

The same as clinic name but written so that it will make sense to the patient.

#### Clinic Location

They physical location of the clinic at the facility; for example, the building, floor, and room number.

#### Facility Phone Number

The main phone number for the facility where the appointment has been scheduled.

#### Instructions: How to Join

Instructions on how to join a telehealth appointment.

#### Instructions: Prepare for Telehealth Visit

VAOS displays these instructions via `comment` field for `home video` and `atlas` appointments. The `comment` field contains instructions passed from Virtual care Manager (VCM). Right now, VAOS only accepts/support 2 types of instructions ('Video Visit Preparation' & 'Medication Review' instructions) due to limitations in the way data is passed to us in that field.Video visit instructions from Virtual Care Manager (VCM) instructions are suppressed if the instructions are any of the following:
  - `Message sent in MyHealtheVet`
  - `Resources Mailed to Patient`
  - `Signup for My HealtheVet  Message` 

##### Video Visit Preparation - Video at home

```
Before your appointment:
- If you're using an iPad or iPhone for your appointment, you'll need to download the VA Video Connect iOS app (https://itunes.apple.com/us/app/va-video-connect/id1224250949?mt=8) beforehand. If you're using any other device, you don't need to download any software or app before your appointment.
- You'll need to have access to a web camera and microphone. You can use an external camera and microphone if your device doesn't have one.

To connect to your Virtual Meeting Room at the appointment time, click the "Join session" button on this page or the link that's in your confirmation email.

To have the best possible video experience, we recommend you:
- Connect to your video appointment from a quiet, private, and well-lighted location
- Check to ensure you have a strong Internet connection before your appointment
- Connect to your appointment using a Wi-Fi network if using your mobile phone, rather than your cellular data network

```

##### Medication Review - ATLAS

```
Medication review
During your video appointment, your provider will want to review all the medications, vitamins, herbs, and supplements you're taking — no matter if you got them from another provider, VA clinic, or local store.
Please be ready to talk about your medications during your video visit to ensure you're getting the best and safest care possible.
```

#### Location Address

Two-line address for the VA facility or clinic where the appointment is scheduled.

#### Location Name

Name of the facility where the appointment is scheduled.


#### Modality/Method of attendance

How a Veteran will attend an appointment, whether in-person, or through telehealth.


#### Provider Name

The name of the facility staff who will be seeing/treating the Veteran.


#### Type of Care

The type of assessment or treatment the Veteran will receive.

VAOS Display Requirements:
- Type of Care for VA appointments must be set to the `serviceType` **except** when:  
  - `serviceType` is `NULL`, Front End will set type of care to ‘VA appointment’.
  - OR`serviceCategory` is other than `regular`, Front End will set type of care to ‘VA appointment’. 
- Backend sets the `serviceType` when the stop codes from the remote procedure call match VATS service type (VAT or CCM stop codes).  
- Type of Care may not be available for phone appointments and video appointments from Virtual Care Manager (VCM) and/or Telehealth Management Platform.
- A VistA appointment with an `APPOINTMENT TYPE = Compensation and Pension` must display in VAOS with `type of care = Compensation and pension exam`.    

#### Veteran Reason For Appointment

### VA Requests

#### Facility Phone Number

#### Preferred Dates and Times


#### Preferred Facility Address


#### Preferred Facility Name


#### Preferred Modality


#### Type of Care


#### Veteran Contact Information


#### Veteran Reason for Appointment


## Community Care Appointments and Requests

### CC Booked Appointments


#### Appointment Date and Time

The day and time of the appointment. May be in the future or the past. The time displayed is in the facility's time zone.

#### Type of Care


#### Provider Name


#### Treatment Specialty

VAOS Display Requirements:
- Front End receives the HSRM "Service Requested" data in the `serviceType` for community care.  HSRM "Service Requested" maps to CPRS/CTB Standard Episode of Care field which would be too cryptic for the user. So for now Type of Care is not being displayed for CC appointments and instead provider name is displaying.


#### Provider Address


#### Provider Phone Number


#### Veteran Reason For Appointment

### CC Requests

#### Type of Care


#### Preferred Provider


#### Preferred Dates and Times


#### Veteran Reason for Appointment


#### Veteran Contact Information
