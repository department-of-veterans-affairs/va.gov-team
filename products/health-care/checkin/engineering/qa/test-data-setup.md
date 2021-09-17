# Check In Experience Test Data Setup

# Sections
1. [Overview](#overview)
2. [End to End Testing Workflow](#end-to-end-testing-workflow)
3. [VistA Configuration Data](#vista-configuration-data)
4. [Endpoints](#endpoints)
    1. [Appointments](#appointments-endpoint)
        1. [Make Appointment](#makeappointment)
        2. [Get Appointments](#getappointments)
        3. [Delete Appointment](#deleteappointment)
        4. [Checkin to Appointment](#checkinappointment)
        5. [Find Appointment Slots](#appointmentslots)
    2. [Test Patient Management](#patients)
        1. [Get Patient Demographics](#getPatient)
        2. [Update Phone Number](#putPatient)

# Overview
Check In Experience is a mobile workflow that will be tested on mobile device browsers, or mobile device simulators on a computer.

To test the Check in process, an appointment must exist in the test VistA instance for a user with a specific phone number.

Additionally, to initiate the Check In Experience workflow, the tester must send an SMS message from a phone number known to the vetext system.

Endpoints are available to allow test users to view thier existing appointments, create a new appointment, delete an existing appointment and update the phone number associated with their assigned test user. An additional endpoint is available to see the available appointment slots for a specific clinic; a slot must be available to make an appointment.

These endpoints require entering the patientDfn (this is the patient Identifier in a VistA system) and ClinicIen (this is the clinic identifier in a VistA system). The patientDFN and clinicIen values configured in the test VistA syteme are noted below.

# End to End Testing Workflow

## Assign Phone Number
If you have not already done so, use the `/patients` endpoint to add your phone number to your assigned VistA test patient.

## Create Appointment

Execute the POST to the `/appointments` endpoint described above to create a new appointment. There must be an open time slot for the clinicIen at the time specified in `startDateTime`.

- **Note**: use the `/appointments/slots` GET request to find available appointment slots to schedule into

Once the appointment has been scheduled, send a text message to initiate the Check In Experience workflow.

- **Note**: Currently the time window that an appointment can be checked in to is 30 minutes prior to and 10 minutes past the appointment start time.

## Send Text

- **Note**: The text message must come from the phone number associated with the test Patient.

Once an appointment has been created, send `check in` as a text message to `254.278.2622`. An SMS similar to this will be returned:

```
Check in for your VA appointment at https://go.usa.gov/xyz123
```

## Access Check In Experience va.gov Workflow

Click on the link returned in the SMS to access the va.gov Health Care Experience workflow.

# VistA Configuration Data

### Available Clinics

- formatted as `clinicIen: clinicName`

```json
{
  "64": "Audiology",
  "195": "Cardiology",
  "62": "Dermatology",
  "23": "General Medicine",
  "427": "Opthamology",
  "429": "Pulmonary",
  "430": "Sleep Lab"
}
```

### Assigned DFNs

Formatted as `"patientIcn": "Name (Assigned To)"`

```json
{
  "237": "One,Patient (Shane)",
  "205": "Two,Patient (Rob) ",
  "25": "Three,Patient (Paras)",
  "229": "Four,Patient (Andy)",
  "231": "Five,Patient (Justin)",
  "418": "Six,Patient (Kevin)",
  "253": "Seven,Patient (Carl)",
  "3": "Eight,Patient (Stephen)",
  "217": "Nine,Patient (Kennon)",
  "8": "Ten,Patient (QA Team)",
  "224": "Eleven,Patient (Patrick)",
  "204": "Twelve,Patient (Mark)",
  "228": "Thirteen,Patient (Dillo)",
  "271": "Fourteen,Patient (Kristen)"
}
```

#

# Endpoints

**Note**: All endpoints must be executed from within the VA Network

Replace all `<EXAMPLE>` values in smaple code with real values prior to executing.

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

- 200 OK - `Appointment Created at 2021-07-27 18:00 in Sleep Lab (430)`

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

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
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

- `patientDFN` - This is the VistA identifier assigned to each testing team. It is vital that each team ensures this is set to their assigned DFN to ensure they do not impact other testers. See assigned DFNs.
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

This endpoint provides a PUT action to allow a tester to update the phone number associated with their assigned test patient. This endpoint will update both the VistA Patient record and the vetext database used to receive SMS messages for Check In Experience. The primary use case for this is to allow testing teams to share a VistA test user by modifying the phone number to be that of the current tester, such that the SMS workflow will work from that testers mobile phone.

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

