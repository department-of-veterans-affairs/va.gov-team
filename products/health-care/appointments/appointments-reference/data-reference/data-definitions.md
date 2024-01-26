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


#### Instructions: Prepare for Visit

Instructions on anything the Veteran is expected to do before the appointment. 

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

**Technical notes**
- Type of Care for VA appointments must be set to the `serviceType` except if any of the following are true:  
  - `serviceType` is `NULL`, Front End will set type of care to ‘VA appointment’.
  - `serviceCategory` is other than `regular`, Front End will set type of care to ‘VA appointment’. 
      - Note, Backend sets the `serviceType` when the stop codes from the remote procedure call match VATS service type (VAT or CCM stop codes).  

- Type of Care may not be available for phone appointments and video appointments from Virtual Care Manager (VCM) and/or Telehealth Management Platform.

- A VistA appointment with an APPOINTMENT TYPE = Compensation and Pension must display in VAOS with type of care = Compensation and pension exam.    

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


**Related fields**
[Type of care](#type-of-care)

**Technical notes:**

Treatment Specialty: Front End receives the HSRM "Service Requested" data in the `serviceType` for community care.  HSRM "Service Requested" maps to CPRS/CTB Standard Episode of Care field which would be too cryptic for the user. So for now Type of Care is not being displayed for CC appointments and instead provider name is displaying.


#### Provider Address


#### Provider Phone Number


#### Veteran Reason For Appointment

### CC Requests

#### Type of Care


#### Preferred Provider


#### Preferred Dates and Times


#### Veteran Reason for Appointment


#### Veteran Contact Information
