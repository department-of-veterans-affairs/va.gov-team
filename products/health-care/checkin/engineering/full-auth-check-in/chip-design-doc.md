# CHIP Authenticated Check-In API Design Document

## Introduction
This document outlines the design and specifications for the Authenticated Check-In API Lambdas in CHIP. The purpose of this API is to allow users to check into appointments from an application that has a fully authenticated user. This document covers the API's endpoints, request and response formats, authentication and authorization mechanisms, and business rules and requirements for Check-In.

## Eligibility Requirements
For an appointment to be eligible for patient check in through the web or any mobile application cetain criteria need to be met. These include:
- Insurance information needs to be valid and up to date
- Demographics: contact, emergency contact, and next of kin information has to have been reviewed by the veteran and confirmed
- The appointment needs to be valid
  - Does the clinic for the appointment have e-check-in enabled
  - Is it within the check in window(45 min before - 15 minutes after start time)
  - Is the appointment type an in clinic appointment
  - Is the appointment status valid

## Base URL
The base URL for accessing the API is: `[base-path]/actions`

## Endpoints

### Authentication
CHIP provides a `/token` endpoint which is used to retrieve a token that can be used to authenticate in subsequent calls. 

#### `POST /token`
- Description: Post api credentials and get a token
- Request Header:
  - `Authorization` (base64 encoded string): `api_user:api_key`
- Responses:
  - Status Code: 200 OK
  - Body (object): The Response Object which contains the following fields
    - `token` (string): token
  ---
  - Status Code: 403
  - Body: (object):
    - `message` (string): Forbidden
  ---

### Check-In

#### `POST /authenticated-check-in`
- Description: Check into an appointment and Set eCheckInStarted (happens in initiateCheckIn now), setCheckIn, and eCheckInComplete in vista.
- Request Body:
  - `appointmentIEN` (string): The unique identifier of the appointment.
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
- Responses:
  - Status Code: 200 OK
  - Body (object): The Response Object which contains the following fields
    - `code` (string): check-in-success
    - `message` (string): Check-in success with appointmentIen: ${appointmentIen}, patientDfn: ${patientDfn}, stationNo: ${stationNo}
  ---
  - Status Code: 400
  - Body: (object): Invalid Patient and/or Appointment data
    - `code` (string): check-in-failure
    - `errors` (string comma separated):
      - clinic-e-check-in-not-allowed
      - appointment-has-bad-status
      - appointment-check-in-too-early
      - appointment-check-in-too-late
      - patient-contact-info-needs-update
      - patient-emergency-contact-needs-update
      - patient-next-of-kin-needs-update
      - patient-insurance-needs-update
    - `message` (string): Check-in unsuccessful with appointmentIen: ${appointmentIen}, patientDfn: ${patientDfn}, stationNo: ${stationNo}

### Demographics

#### `GET /authenticated-demographics`
- Description: This endpoint is for retrieving demographics confirmation information which includes a field indicating if insurance verification is needed, patient contact information, emergency contact information and next-of-kin contact information.
  - Requirements for patient check-in:
    - all three `needsConfirmation` fields need to be `false`
    - `insuranceVerificationNeeded` needs to be `false`

- Request Body:
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
- Response:
  - Status Code: 200 OK
  - Body (object): The demographics object
    - `id` (string): The patientDfn
    - `type` (string): AuthenticatedGetDemographicsResponse
    - `data`(object)
	    - `insuranceVerificationNeeded` (boolean)
	    - `needsConfirmation` (boolean)
	    - `mailingAddress` (object)
	      - `street1` (string)
	      - `street2` (string)
	      - `street3` (string)
	      - `city` (string)
	      - `county` (string)
	      - `state` (string)
	      - `zip` (string)
	      - `zip4` (string)
	      - `country` (string)
	    - `residentialAddress` (object)
	      - `street1` (string)
	      - `street2` (string)
	      - `street3` (string)
	      - `city` (string)
	      - `county` (string)
	      - `state` (string)
	      - `zip` (string)
	      - `zip4` (string)
	      - `country` (string)
	    - `homePhone` (string)
	    - `officePhone` (string)
	    - `cellPhone` (string)
	    - `email` (string)
	    - `emergencyContact` (object)
	      - `needsConfirmation` (boolean)
	      - `name` (string): "VETERAN,BROTHER"
	      - `relationship` (string)
	      - `phone` (string)
	      - `workPhone` (string)
	      - `address` (object)
	        - `street1` (string)
	        - `street2` (string)
	        - `street3` (string)
	        - `city` (string)
	        - `county` (string)
	        - `state` (string)
	        - `zip` (string)
	        - `zip4` (string)
	        - `country` (string)
	    - `nextOfKin`
	      - `needsConfirmation` (boolean)
	      - `name` (string): "VETERAN,BROTHER"
	      - `relationship` (string)
	      - `phone` (string)
	      - `workPhone` (string)
	      - `address` (object)
	        - `street1` (string)
	        - `street2` (string)
	        - `street3` (string)
	        - `city` (string)
	        - `county` (string)
	        - `state` (string)
	        - `zip` (string)
	        - `zip4` (string)
	        - `country` (string)

#### `POST/PATCH /authenticated-demographics`
- Description: Edit demographics confirmations
- Request Body:
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
  - `demographicConfirmations` (object): The demographics object with the following fields
    - `contactNeedsUpdate` (boolean)
    - `emergencyContactNeedsUpdate` (boolean)
    - `nextOfKinNeedsUpdate` (boolean)
- Response:
  - Status Code: 200 OK
  - Body (object): The updated demographicConfirmations object
    - `id` (string): PatientDfn
    - `type` (string): 'patientDemographicsStatusResponse'
    - `contactNeedsUpdate` (boolean)
    - `contactConfirmedAt` (date)
    - `emergencyContactNeedsUpdate` (boolean)
    - `emergencyContactConfirmedAt` (date)
    - `nextOfKinNeedsUpdate` (boolean)
    - `nextOfKinConfirmedAt` (date)


### Example Responses

#### Check-in success
```
{
	"code": "check-in-success",
	"message": "Check-in success with appointmentIen: 38847, patientDfn: 366, stationNo: 530",
	"type": "AuthenticatedCheckinResponse"
}
```
#### Check-in failure 400
```
{
	"code": "check-in-failure",
	"errors": [
		"patient-contact-info-needs-update",
		"patient-emergency-contact-needs-update",
		"patient-next-of-kin-needs-update",
		"patient-insurance-needs-update",
		"appointment-has-bad-status",
		"appointment-check-in-too-late"
	],
	"message": "Check-in unsuccessful with appointmentIen: 38846, patientDfn: 366, stationNo: 530",
	"type": "AuthenticatedCheckinResponse"
}
```
#### Check-in failure 500
```
{
	"errors": [
		{
			"status": "500",
			"title": "Authenticated Check-in vista error."
		}
	]
}
```
#### GET Demographics Success
```
{
	"data": {
		"insuranceVerificationNeeded": true,
		"needsConfirmation": true,
		"mailingAddress": {
			"street1": "Any Street",
			"street2": "",
			"street3": "",
			"city": "Any Town",
			"county": "",
			"state": "WV",
			"zip": "999980071",
			"zip4": null,
			"country": ""
		},
		"residentialAddress": {
			"street1": "",
			"street2": "",
			"street3": "",
			"city": "",
			"county": null,
			"state": "",
			"zip": "",
			"zip4": null,
			"country": ""
		},
		"homePhone": "222-555-8235",
		"officePhone": "222-555-7720",
		"cellPhone": "3153789190",
		"email": "",
		"emergencyContact": {
			"name": "",
			"relationship": "",
			"phone": "",
			"workPhone": "",
			"address": {
				"street1": "",
				"street2": "",
				"street3": "",
				"city": "",
				"county": null,
				"state": "",
				"zip": "",
				"zip4": "",
				"country": ""
			},
			"needsConfirmation": true
		},
		"nextOfKin": {
			"needsConfirmation": true
		}
	},
	"id": "366",
	"type": "authenticatedGetDemographicsResponse"
}
```
#### GET Demographics Failure
```
{
	"errors": [
		{
			"status": "500",
			"title": "Error getting demographics from VistA API: Request failed with status code 500"
		}
	]
}
```
#### POST Demographics Success
```
{
	"id": "366",
	"type": "patientDemographicsStatusResponse",
	"contactNeedsUpdate": false,
	"demographicsConfirmedAt": "2023-08-07T10:21:42.178-04:00",
	"nextOfKinNeedsUpdate": false,
	"nextOfKinConfirmedAt": "2023-08-07T10:21:42.178-04:00",
	"emergencyContactNeedsUpdate": false,
	"emergencyContactConfirmedAt": "2023-08-07T10:21:42.178-04:00"
}
```
#### POST Demographics Failure
```
{
	"errors": [
		{
			"status": "400",
			"title": "Invalid arguments: \"demographicConfirmations.contactNeedsUpdates\" is not allowed"
		}
	]
}
```
