# Check In Experience Test Data Setup

Check In Experience is a mobile workflow that will be tested on mobile device browsers, or mobile device simulators on a computer.

To test the Check in process, an appointment must exist in the test VistA instance for a user with a specific phone number.

Additionally, to initiate the Check In Experience workflow, the tester must send an SMS message from a phone number known to the vetext system.

Endpoints are available to allow test users to create appointments and update a phone number for a specific user.

**Note**: All endpoints must be executed from within the VA Network

## Create Appointment Endpoint

An endpoint exists to allow test users to create an appointment in the test VistA.

**Note**: There must be an available appointment timeslot in the clinic. Currently the error message returned is not clear. If you encounter errors makeing an appointment, please try a different time. We are working on the ability to show available appointment time slots for a clinic.

### Required Parameters

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
- `endDateTime` - the start date and time of the appointment, in format yyyy-mm-dd hh:mm.
- `apptLength` - the length of the appointment. This should corespond to the start and end dateTimes.
- `clinicIen` - This is the VistA identifier for the clinic where the appointment will be scheduled. There are
- `clinicName` - This is the name of the clinic where the appointment will be scheduled.

### Available Clinics

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

Format is `"patientIcn": "Name (Assigned To)"`

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

### /appointment URL

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/appointments`

### /appointment POST curl Statement

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

## Update Phone Number Endpoint

A `/patients` endpoint exists to allow the phone number associated with a test PatientDfn to be changed. This endpoint will update the VistA Patient record and the vetext database. The primary use case for this is to allow testing teams to share a VistA test user by modifying the phone number to be that of the current tester, such that the SMS workflow will work from that testers mobile phone.

### Required Parameters

```json
{
  "body": {
    "patientDfn": "<DFN>",
    "cellPhone": "5554443322"
  }
}
```

### /patients URL

`https://vpce-06399548ef94bdb41-lk4qp2nd.execute-api.us-gov-west-1.vpce.amazonaws.com/dev/patients`

### /patients PUT curl Statement

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

#

## Endpoint Execution

### Using Curl

- **Note**: replace `<DFN>` with the appropriate DFN your team has been assigned.
- **Note**: replace `<API KEY>` with the API Key delivered separately

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

#

### Using [insomnia](https://insomnia.rest/)

The easist way to import a curl statement into insomnia is to copy the complete curl statement into the device clipboard, choose `import data` from insomnia preferences and selct `import from clipboard`. This will configure ab insomnia endpoint that mimics the behavior of the curl statement. It is recommended to rename the endpoint in insomnia to something descriptive like `CIE - Make Appointment`. It is also recommended to create a collection in insomnia, and import all related endpoints into that collection.

# End to End Testing Workflow

## Create Appointment

Execute the POST to the `/appointments` endpoint described above to create a new appointment. There must be an open time slot for the clinicIen at the time specified in `startDateTime`.

- **Note**: At this time the API returns an unhelpful error message if there is no available appointment slot; this error should be more clear in the future. Additionally, we are thinking through how we might surface the available time slots for each clinic in an easy to use way.

When an appointment has been successfully created, a response similar to the following will be returned:

- `Appointment created at <startDateTime>`

If the test Patient already has an appointment scheudled in any clinic at the same `startDateTime`, the following response will be returned:

- `"APPOINTMENT IN <clinicName> ALREADY SCHEDULED AT THE SAME TIME."`

Once the appointment has been scheduled, send a text message to initiate the Check In Experience workflow.

- **Note**: ~~Currently the time window that an appointment can be checked in to is 30 minutes prior to the appointment start time.~~

- **Note: There is currently a bug in the system such that the valid appointment check in time starts from the time the initial text message is sent and ends 30 minutes later. This Note will be removed when the bug is fixed.**

## Send Text

- **Note**: The text message must come from the phone number associated with the test Patient.

Once an appointment has been created, send `check in` as a text message to `254.278.2622`. An SMS similar to this will be returned:

```
Check in for your VA appointment at https://go.usa.gov/xyz123
```

## Access Check In Experience va.gov Workflow

Click on the link returned in the SMS to access the va.gov Health Care Experience workflow.
