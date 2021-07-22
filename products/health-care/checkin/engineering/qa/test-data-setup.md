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
  "427": "Opthamology"
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
  "204": "Twelve,Patient ()",
  "228": "Thirteen,Patient ()"
}
```

### Endpoint Execution

#

Using Curl

**Note**: replace `<DFN>` with the appropriate DFN your team has been assigned.
**Note**: replace `<API KEY>` with the API Key delivered separately

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

Using [insomnia](https://insomnia.rest/)
The easist way to import a curl statement into insomnia is to copy the complete curl statement into the device clipboard, choose `import data` from insomnia preferences and selct `import from clipboard`. This will configure ab insomnia endpoint that mimics the behavior of the curl statement. It is recommended to rename the endpoint in insomnia to something descriptive like `CIE - Make Appointment`. It is also recommended to create a collection in insomnia, and import all related endpoints into that collection.

## Update Phone Number Endpoint

# End to End Testing Workflow

## Create Appointment

## Send Text

Once an appointment has been created, send `check in` as a text message to 254.278.2622. A link should be returned that will allow you to check in to your appointment.
