# Check In Experience Test Data Setup

# Sections
1. [Overview](#overview-section)
2. [End to End Testing Workflow](#end-to-end-testing-workflow-section)
3. [VistA Configuration Data](#vista-configuration-data-section)
4. [Endpoints](#endpoints-section)
    1. [Appointments](#appointments-endpoint-section)
        1. [Make Appointment](#makeappointment)
        2. [Get Appointments](#getappointments)
        3. [Delete Appointment](#deleteappointment)
        4. [Checkin to Appointment](#checkinappointment)
        5. [Find Appointment Slots](#appointmentslots)
    2. [Test Patient Management](#patients)
        1. [Get Patient Demographics](#getPatient)
        2. [Update Phone Number](#putPatient)
5. [VistA Access](#vista-access)
    1. [SSH Access](#ssh-connectivity-for-dev)
    2. [Insurance Verification](#how-to-update-insurance-verification-timestamp)
<a name=""></a>
<a name=""></a>
<a name="overview-section"></a>

# Overview
Check In Experience is a mobile workflow that will be tested on mobile device browsers, or mobile device simulators on a computer.

To test the Check in process, an appointment must exist in the test VistA instance for a user with a specific phone number.

Additionally, to initiate the Check In Experience workflow, the tester must send an SMS message from a phone number known to the vetext system.

Endpoints are available to allow test users to view thier existing appointments, create a new appointment, delete an existing appointment and update the phone number associated with their assigned test user. An additional endpoint is available to see the available appointment slots for a specific clinic; a slot must be available to make an appointment.

These endpoints require entering the `patientDfn` (this is the patient Identifier in a VistA system) and `ClinicIen` (this is the clinic identifier in a VistA system). The `patientDFN` and `clinicIen` values configured in the test VistA syteme are noted below.

Make sure you have an assigned test user DFN before setting up appointment tests. Update the [assigned DFN table](#assigned-dfns) after you are assigned a test user.

<a name="end-to-end-testing-workflow-section"></a>

# Pre check-in and day of check-in Testing Workflow

## Web Tool

A web UI is available (for staging only) [here](https://vigilant-couscous-ab7fb4a4.pages.github.io). It is accessible on VPN (GFE/CAG) to anyone with access to [the staging scheduler repo](https://github.com/department-of-veterans-affairs/cie-staging-scheduler/). It allows you to:

- View and create clinic appointments
- View patient appointments
- Create check-in/pre-check-in links
- view and reset demographics confirmations
- clear a test patient's insurance flag
- update a test patient's phone number

Guidelines for use:

- please use the test patient assigned to you or a person that is not currently on the team if you need to add appointments for additional patients
- if you receive an error message regarding your cell phone number when creating a check-in or pre-check-in link, update the phone number associated with your patient
- for questions or if you encounter any errors, post in the #check-in-experience-engineering channel and tag the front end team

## Network access

You must use CAG or GFE to follow this testing workflow, the endpoints are not accessible via SOCKS.

## Test harness

You will need the CHIP Insomnia collection, ask a CHIP team member for it. When using Insomnia make sure to have `Validate certificates` unchecked in the Request/Response section of the Insomnia preferences.

You can download Insomnia at [http://insomnia.rest](http://insomnia.rest)

## Create Appointment

Using the 'Make Appointment' endpoint under the `VEText Appointments` heading, create an appointment for any time between tomorrow and 14 days from now. Note the `appointmentIEN` in the response, you'll need it for the next step.

- **Note**: use the `/appointments/slots` GET request to find available appointment slots to schedule into. Use the `startDatetime` from the slot you wish to use and set the endDatetime to be 30 minutes after the start.

## Call the pre-checkin endpoint

Using the CHIP/Test Harness Insomnia collection:

- Select the "CHIP Preprod" environment at the top left
- Select "Pre Check In" Under the CHIP collection on the left
- Ensure that the station number, appointment IEN, patient IEN and patient details match those used for the appointment you created
- After re-sending the request with the correction `appointmentIEN`, you should receive a UUID back - to test pre-checkin, go to:

http://staging.va.gov/health-care/appointment-pre-check-in/?id={uuid}

# End to End Testing Workflow

## Network access

You must use CAG or GFE to follow this testing workflow, the endpoints are not accessible via SOCKS.

## Assign Phone Number
If you have not already done so, [use the `/patients` endpoint to add your phone number to your assigned VistA test patient](#put---update-only-the-phone-number-for-a-specific-test-user).

## Create Appointment

Execute the POST to the `/appointments` endpoint described above to create a new appointment. There must be an open time slot for the `clinicIen` at the time specified in `startDateTime`.

- **Note**: use the `/appointments/slots` GET request to find available appointment slots to schedule into. Use the `startDatetime` from the slot you wish to use and set the endDatetime to be 30 minutes after the start.

## Send Text
Once the appointment has been scheduled, send a text message to initiate the Check In Experience workflow.

- **Note**: Currently the time window that an appointment can be checked in to is 30 minutes prior to and 5 minutes past the appointment start time.

- **Note**: The text message must come from the phone number associated with the test Patient.

Once an appointment has been created, send `check in` as a text message to `254-278-2622`. An SMS similar to this will be returned:

```
Check in for your VA appointment at https://go.usa.gov/xyz123
```

## Access Check In Experience va.gov Workflow

Click on the link returned in the SMS to access the va.gov Health Care Experience workflow.

- **Note**: You will need the test Patient's last name and the last four digits of their social security number to complete the workflow.  These can be retrieved by using the `/patients` GET request to view the demographic data associated with the test patient. 

<a name="vista-configuration-data-section"></a>

# VistA Configuration Data

### Available Clinics (station 530)

| `clinicIen` | `clinicName` | Patient Friendly Name | Usual Availability (ET) | E-Checkin Allowed |
| --- | ---------------- | ------ |------| ------|
| 451 | STG/CARDIO/1 | | M-F 8AM - 330PM | Yes |
| 463 | STG/CARDIO/3 | | M-F 8AM - 330PM | Yes |
| 464 | STG/ECHO/3 | | M-F 8AM - 330PM | Yes |
| 478 | STG/ECHO/5 | | M-F 8AM - 330PM | Yes |
| 485 | STG/ECHO/6       | | M-F 8AM - 330PM | No |
| 449 | STG/ENDROCRINE/1 | | M-F 8AM - 330PM | Yes |
| 500 | STG/MH/8 | | M-F 8AM - 330PM | Yes |
| 525 | STG/SLEEP LAB | | M-Su 3PM - 2030PM | Yes |
| 64  | Audiology | Hearing |M-F 7AM - 230PM | Yes |
| 195 | Cardiology | | M-F 7AM - 230PM | Yes |
| 62  | Dermatology | | M-F 7AM - 230PM | Yes |
| 468 | STG/PULMO 4 (Telephone) | | M-F 8AM - 4PM | Yes |
| 527 | STG/BC/PULMONARY | | M-F 8AM - 4PM | Yes |
| 528 | STG/MN/PRIMARY CARE | | M-F 8AM - 4PM | Yes |
| 529 | STG/CV/DNA CONSULTATION | | M-F 8AM - 4PM | Yes |


### Available Clinics (station 500)

| `clinicIen` | `clinicName` | Patient Friendly Name | Usual Availability (ET) | E-Checkin Allowed |
| --- | ---------------- | ------ |------| ------|
| 64 | Audiology | Hearing |M-F 7AM - 230PM | Yes |
| 195 | Cardiology | | M-F 7AM - 230PM | Yes |
| 62 | Dermatology | | None | Yes |
| 23 | General Medicine| | M-Th 7AM - 245PM, F 7AM - 1145AM | Yes |
| 427 | Opthamology | |None | Yes |
| 429 | Pulmonary | |M-F 12PM - 8PM | Yes |
| 430 | Sleep Lab | Nap Time|M-F 4PM - 11PM | Yes |
| 431 | Nurse Triage | Nurse Triage Clinic |M-F 8AM - 345PM | Yes |
| 428 | Anticoagulation | | M-Su    8AM - 4PM| No |

### Available Clinics (station 442)

| `clinicIen` | `clinicName` | Usual Availability (ET) | 
| --- | ---------------- | ------ |
| 5085 | OCTO-Cardiology | M-Su 7AM - 4PM |
| 5086 | OCTO-Sleep Lab | M-Su 4PM - 10PM |



### Assigned DFNs
You will be assigned a specific test user in VistA that will have an identifier associated with it referred to as the `DFN`, or Data File Number. The `DFN` will be used when making calls to many of the endpoints. The `DFN` represents the Internal Entry Number (`IEN`) of the VistA record associated with this test Patient. For our use, `patientDfn` and `patientIen` can be used interchangeably. 

## Stations 500 and 530

| `patientDFN`  | Name | DoB | Assigned To | 500 | 530 |
| ------------- | ---- | --- | ----------- | --- | --- |
| 237 | One, Patient | 1935-04-07 | Shane | - | √ |
| 237 | Harris, Sheba | 1935-04-07 | Shane | √ | - |
| 205 | Two, Patient | 1935-04-07 | Rob  | √ | √ |
| 25  | Three, Patient | 1935-04-07 | Paras | √ | √ |
| 229 | Four, Patient | 1935-04-07 | Andy | √ | √ |
| 231 | Five, Patient | 1935-04-07 | Event Bus Team 1 | √ | √ |
| 418 | Six, Patient | 1935-04-07 | Peyton | √ | √ |
| 253 | Seven, Patient | 1935-04-07 | Event Bus Team 2 | √ | √ |
| 3   | Eight, Patient | 1935-04-07 | Stephen | √ | √ |
| 8   | Ten, Patient | 1935-04-07 | QA Team | √ | √ |
| 224 | Eleven, Patient | 1935-04-07 | Patrick | √ | √ |
| 204 | Twelve, Patient | 1935-04-07 | Jose Beltran (508 Office) | √ | √ |
| 228 | Thirteen, Patient | 1935-04-07 | Demo & Staging Reviews | √ | √ |
| 271 | Fourteen, Patient | 1935-04-07 | Lee | √ | √ |
| 723 | Twentysix, Patient | 1935-04-07 | Adrian | √ | √ |
| 366 | Twentyeight, Patient | 1935-04-07 | John | √ | √ |
| 350 | Twentynine, Patient | 1935-04-07 | Gaurav | √ | √ |
| 391 | Thirty, Patient | 1935-04-07 | Lori | √ | √ |
| 384 | Thirtyone, Patient | 1935-04-07 | Kanchana | √ | √ |
| 140 | Thirtytwo, Patient | 1935-04-07 | Nathan Douglas | √ | √ |
| 442 | Thirtythree, Patient | 1935-04-07 | Paras | √ | √ |
| 267 | Thirtyfour, Patient | 1935-04-07 | NSOC Team | √ | √ |
| 217 | Nine,Patient | 1935-04-07 | Christina | √ | √ |
| 240 | Thirtyfive,Patient | 1935-04-07 | Michael K | √ | √ |
| 260 | Thirtysix,Patient | 1935-04-07 | Cheryl Wills (OVAC) | √ | √ |
| 218 | Thirtyseven,Patient | 1935-04-07 | Shawn | √ | √ |
| 151 | Thirtyeight,Patient | 1935-04-07 | Event Bus Team 3 | √ | √ |
| 347 | Thirtynine,Patient | 1935-04-07 | Event Bus Team 4 | √ | √ |
| 520 | Forty,Patient | 1935-04-07 | Event Bus Team 5 | √ | √ |
| 41  | Zzzretsixfortytwo,Patient | 1935-04-07 | Zach | √ | √ |
| 42  | Zzzretfourfiftyfour,Patient | 1935-04-07 | Ben | √ | √ |
| 569 | Fotrythree,Patient | 1935-04-07 | Brian | √ | √ |
| 692 | Fortyfour,Patient | 1935-04-07 | CIE Team Demos/Reviews / Platform Design | √ | √ |
| 168 | Fortyfive,Patient | 1935-04-07 | CIE Team Demos/Reviews / Platform Accessibility | √ | √ |
| 301 | Fortysix,Patient | 1935-04-07 | CIE Team Demos/Reviews / Platform Content | √ | √ |
| 744 | Fortyseven,Patient | 1935-04-07 | CIE Team Demos/Reviews / Platform IA | √ | √ |
| 745 | Fortyeight,Patient | 1935-04-07 | CIE Team Demos/Reviews Platform QA | √ | √ |
| 100851 | TYLER,JOHN | 1988-01-23 | Mark Dewey | - | √ |
| 100852 | ADAMS,JOHN | 1989-01-23 | Mark Dewey | - | √ |
| 100853 | MONROE,JAMES | 1990-01-23 | Mark Dewey | - | √ |
| 100854 | MADISON,JAMES | 1991-01-23 | Mark Dewey | - | √ |
| 100855 | JACKSON,ANDREW | 1992-01-23 | Mark Dewey | - | √ |
| 100856 | POLK,JAMES | 1988-01-23 | Mark Dewey | - | √ |
| 100857 | BUCHANAN,JAMES | 1988-01-23 | Mark Dewey | - | √ |
| 100858 | HAYS,RUTHERFORD | 1988-01-23 | Mark Dewey | - | √ |
| 100859 | PIERCE,FRANKLIN | 1988-01-23 | Mark Dewey | - | √ |
| 100860 | FILLMORE,MILLARD | 1988-01-23 | Mark Dewey | - | √ |

**Station 442**

| `patientDFN`  | Name | Assigned To |
| --- | ------------ | ----- |
| 7242569 | One, Patient |  |
| 7242570 | Two, Patient |   |
#

<a name="endpoints-section"></a>
# Endpoints

**Note**: All endpoints must be executed from within the VA Network

Replace all `<EXAMPLE>` values in smaple code with real values prior to executing.

<a name="appointments-endpoint-section"></a>
## Appointments Endpoint

This RESTful endpoint provides `GET`, `POST` and `DELETE` actions on appointments in the test VistA.

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments`

<a name="makeappointment"></a>
## `POST` - Make Appointment 
**Note**: There must be an available appointment timeslot in the clinic.

### Parameters as Example

```json
{
  "patientDFN": "3",
  "startDateTime": "2021-07-30 09:00",
  "endDateTime": "2021-07-30 09:30",
  "apptLength": "30",
  "clinicIen": "195",
  "clinicName": "Cardiology"
}
```

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
- `startDateTime` - the start date and time of the appointment, in format yyyy-mm-dd hh:mm.
- `endDateTime` - the end date and time of the appointment, in format yyyy-mm-dd hh:mm.
- `apptLength` - the length of the appointment. This should corespond to the start and end dateTimes.
- `clinicIen` - This is the VistA identifier for the clinic where the appointment will be made.
- `clinicName` - This is the name of the clinic where the appointment will be made.

### curl Example

```bash
curl --request POST \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments \
  --header 'Content-Type: application/json' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --header 'x-api-key: <API KEY>' \
  --data '{
  "body": {
    "patientDfn": "<DFN>",
    "startDateTime": "2021-07-22 12:00",
    "endDateTime": "2021-07-22 12:30",
    "clinicIen": "195",
    "clinicName": "Cardiology",
    "apptLength": "30"
  }
}'
```

### Expected Responses

### Success

- 200 OK - `Appointment Created at 2021-07-22 12:00 in Cardiology (195)`

### Failure

- 400 Bad Request - With the following statuses:

  - Cannot create appointment because of OVERBOOK
  - Cannot create appointment because NO OPEN SLOTS
  - Cannot create appointment because ALREADY SCHEDULED AT SAME TIME
  - Cannot create appointment because APPOINTMENT COULD NOT BE CREATED

- 502 Bad Gateway - This indicates an issue with the AWS Lambda or a downstream dependency

<a name="getappointments"></a>
## `GET` - Get Appointments for Date

### Parameters as Example

```json
{
  "patientDFN": "3",
  "date": "2021-07-30"
}
```

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team member ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
- `date` - the date to query for appointments, in format yyyy-mm-dd.

### curl Example

```bash
curl --request GET \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments/ \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
  "body": {
    "patientDfn": "3",
    "date": "2021-07-27"
  }
}'
```
<a name="deleteappointment"></a>
## `DELETE` - Delete an Appointment

This endpoint will change the status of the specified appointment to `CANCELLED BY PATIENT`.

- **Note**: You cannot cancel an appointment in the past. However, you can check in to a past appointment using the provided `/appointments/checkin` endpoint.

### Parameters as Example

```json
{
  "patientDFN": "3",
  "startDateTime": "2021-07-30 09:00",
  "apptLength": "30",
  "clinicIen": "195",
  "clinicName": "Cardiology"
}
```

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team member ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
- `startDateTime` - the start date and time of the appointment, in format yyyy-mm-dd hh:mm.
- `apptLength` - the length of the appointment.
- `clinicIen` - This is the VistA identifier for the clinic where the appointment will be deleted.
- `clinicName` - This is the name of the clinic where the appointment will be deleted.

### curl Example

```bash
curl --request DELETE \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
  "body": {
    "patientDfn": "3",
    "startDateTime": "2021-07-27 11:30",
    "clinicIen": "195",
    "clinicName": "Cardiology",
    "apptLength": "30"
  }
}'
```
<a name="checkinappointment"></a>
## Appointment Checkin endpoint

This endpoint provides a POST action to check in to a specific appointment.

When executed, this endpoint will change the status of the specified appointment to `ACT REQ/CHECKED IN`, which is the expected value when an appointment has been check in to.

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments/checkin`

### Parameters as Example

```json
{
  "patientDfn": "3",
  "clinicIen": "64",
  "startDateTime": "2021-07-30 14:30"
}
```

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
- `clinicIen` - This is the VistA identifier for the clinic where the appointment will be found to be checked in.
- `startDateTime` - the start date and time of the appointment to check in, in format yyyy-mm-dd hh:mm.

### curl Example

```bash
curl --request POST \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments/checkin \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
  "body": {
    "patientDfn": "3",
    "startDateTime": "2021-07-29 14:30",
    "clinicIen": "64"
  }
}'
```


### Expected Responses

### Success

- 200 OK - `Appointment Checked In`

### Failure

- 400 Bad Request - With the following statuses:
    - Invalid Appointment Date/Time Format
    - Invalid Appointment
    - Other VistA Error

<a name="appointmentslots"></a>
## Appointment Slots endpoint

This endpoint provides a GET action to query the VistA system for available appointment slots in a specific clinic for a specified date.

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments/slots`

### Parameters as Example

```json
{
  "date": "2021-07-30",
  "clinicIen": "195",
  "status": "available"
}
```

- `clinicIen` - This is the VistA identifier for the clinic where the appointment availability will be queried.
- `date` - The date of the appointment availability
- `status` - The status of the appointments to be queried. To find appointment slots that can be scheduled into set status to `available`. To see all appointments regardless of status, completely remove the status paramater from the request.

### curl Example

```bash
curl --request GET \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments/slots \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
  "body": {
    "clinicIen": "430",
    "date": "2021-07-27",
    "status": "available"
  }
}'
```
<a name="patients"></a>
## Patients Endpoint
This RESTful endpoint provides `GET` and `PUT` actions on Patients in the test VistA.

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/patients`

<a name="getPatient"></a>
## `GET` - Get all demographics data for a specific test user
This endpoint provides a GET action to fetch all demographics information associated with this test VistA user

### Parameters as Example 

```json
{
  "body": {
    "patientDfn": "<DFN>",
  }
}
```

### curl Statement

```bash
curl --request GET \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/patients \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
    "body": {
    "patientDfn": "<DFN>"
  }
}'
```

<a name="putPatient"></a>
## `PUT` - Update only the phone number for a specific test user

This endpoint provides a PUT action to allow a tester to update the phone number associated with their assigned test patient. This endpoint will update both the VistA Patient record and the vetext database used to receive SMS messages for Check In Experience. The primary use case for this is to allow testing teams to share a VistA test user by modifying the phone number to be that of the current tester, such that the SMS workflow will work from that tester's mobile phone.

### Parameters as Example 

```json
{
  "body": {
    "patientDfn": "<DFN>",
    "cellPhone": "5554443322"
  }
}
```

### curl Statement

```bash
curl --request PUT \
  --url https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/patients \
  --header 'Content-Type: application/json' \
  --header 'x-api-key: <API KEY>' \
  --header 'x-apigw-api-id: ij4ry1zth2' \
  --data '{
    "body": {
    "patientDfn": "<DFN>",
    "cellPhone": "5554443322"
  }
}'
```
# VistA Access 

There may be a need to access VistA directly to schedule an appointment or change data for a test patient. 

## SSH connectivity for dev

To access Vista, ssh to the following system using port 2222 instead of 22. (VPN access required)

For example:

`ssh -p 2222 vista@oitdvrappclin03.r01.med.va.gov`

email shane.elliott@va.gov for Access and Verify Code. 

## How to update insurance verification timestamp

- SSH into VistA as above
- Select `Edit Insurance Timestamp`
- type the test patient's name in `last, first` format
- enter a date to set the insurance timestamp, such as `T@8AM` for today at 8 AM

![vista_insurance_timestamp](https://user-images.githubusercontent.com/101649/161555137-896ffff7-1855-4c71-98ec-adbc06903823.png)
