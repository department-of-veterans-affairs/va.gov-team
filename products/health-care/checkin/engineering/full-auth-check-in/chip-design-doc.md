# CHIP Authenticated Check-In API Design Document

## Introduction
This document outlines the design and specifications for the Authenticated Check-In API Lambdas in CHIP. The purpose of this API is to allow users to check into appointments from an application that has a fully authenticated user. This document covers the API's endpoints, request and response formats, authentication and authorization mechanisms, and business rules and requirements for Check-In.

For an appointment to be eligible for patient check in through the web or any mobile application cetain criteria need to be met. These include:
- Insurance information needs to be valid and up to date
- Demographics, emergency contact and next of kin information has to have been reviewed by the veteran and confirmed
- The appointment needs to be valid
  - Does the clinic for the appointment have e-check-in enabled
  - Is it within the 45 minute check in window(30 min before - 15 minutes after start time)
  - Is the appointment type an in clinic appointment
  - Is the appointment status valid

## Base URL
The base URL for accessing the API is: `/#{base_path}/actions`

## Authentication
The API uses OAuth 2.0 for authentication and requires client credentials to obtain an access token. Clients must include the access token in the `Authorization` header for each request. The API supports the following grant types: Client Credentials.

## Endpoints

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
      - `message` (string): Check-In successful
  - Status Code: 400
    - Body: (object): The demographics information needs to be confirmed
      - `code` (string): invalid-demographics
      - `message` (string): Details which blocks of information needs to be confirmed
  - Status Code: 400 
    - Body (object): The Insurance information is missing/needs to be updated Response Object which contains the following fields
      - `code` (string): invalid-insurance
      - `message` (string): Insurance needs validation
  - Status Code: 400
    - Body (object): Invalid appointment object with the following fields
      - `code` (string): invalid-appointment
      - `message` (string): Details which fields are invalid (too-early, too-late, e-check-in-not-enabled, invalid-status, invalid-type)

### Demographics

#### `GET /demographics`
- Description: This endpoint is for retrieving demographics information which includes a field indicating if insurance verification is needed and patient contact information, emergency contact information and next-of-kin contact information.
  - Requirements for patient check-in:
    - all three contact, emergency and next-of-kin `needsConfirmation` fields need to be `false`
    - `insuranceVerificationNeeded` needs to be `false`

- Request Body:
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
- Response:
  - Body (object): The demographics object
    - `insuranceVerificationNeeded` (boolean)
    - `needsConfirmation`
    - `address`
    - `homePhone`
    - `email`
    - `emergencyContact`
      - `needsConfirmation` (boolean)
      - `address`
      - `homePhone`
      - etc.
    - `nextOfKin`
      - `needsConfirmation` (boolean)
      - `address`
      - `homePhone`
      - etc.

#### `PATCH /demographics`
- Description: Edit demographics by suppling fields you wish to modify
- Request Body:
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
  - `demographics` (object): The demographics object with the following fields
    - `patientContactInfo` (object): The patient contact information
      - `needsConfirmation` (boolean)
    - `emergencyContact` (object): The emergency contact information
      - `needsConfirmation` (boolean)
    - `nextOfKin` (object):
      - `needsConfirmation` (boolean)
- Response:
  - Status Code: 200 OK
    - `Body` (object): The updated demographics object
    
### Error Handling
The API follows standard HTTP status codes for indicating the success or failure of a request. Additionally, specific error responses are returned with relevant error messages in the response body.

## Authentication and Authorization
The API uses OAuth 2.0 for authentication. The access token must be included in the `Authorization` header for each request.

