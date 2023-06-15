# CHIP Authenticated Check-In API Design Document

## Introduction
This document outlines the design and specifications for the Authenticated Check-In API. The purpose of this API is to allow users to check into appointments. This document covers the API's endpoints, request and response formats, authentication and authorization mechanisms, and any additional considerations.

## Base URL
The base URL for accessing the API is: `/#{base_path}/actions`

## Authentication
The API uses OAuth 2.0 for authentication and requires client credentials to obtain an access token. Clients must include the access token in the `Authorization` header for each request. The API supports the following grant types: [list the supported grant types].

## Endpoints

### E-Check-In Eligibility

#### `GET /echeckineligibility`
- Description: Check the eligibility of appointments for E-Check-In.
- Request Parameters:
  - `appointments` (required, array of objects): A list of appointment objects containing the following fields:
    - `appointmentIEN` (string): The unique identifier of the appointment.
    - `patientDFN` (string): The unique identifier of the patient.
    - `stationNo` (string): The station number.
- Response:
  - Status Code: 200 OK
  - Body: Array of appointment objects with the following fields:
    - `appointmentIEN` (string): The unique identifier of the appointment.
    - `isEligible` (boolean): Indicates whether the appointment is eligible for E-Check-In.

### Demographics

#### `GET /needInsuranceVerification`

#### `GET /demographics`
- Description: Retrieve demographic information for patient.
- Request Parameters:
  - fpo
- Response:
  - Status Code: 200 OK
  - Body: An Object containing patient demographic information with the following fields
    - `cellPhone` (string): The patient's phone number
    - `emailAddress` (string): The patients's email
    - `homeAddress` (object): The patients's home address containing the following fields:
      - `street1`
      - `street2`
      ...
    - `homePhone` (string)
    - `mailingAddress` (object): The patients's home address containing the following fields:
      - `street1`
      - `street2`
      ...
    - `workPhone` (string): The patient's work phone
    - `emergencyContact` (Object): The patient's emergency contact with the following fields:
      - `address` (Object):
        - `street1`
        - `street2`
        ...
      - `name` (string): The emergency contact's name,
      - `phone` (string): The emergency contact's phone number,
      - `relationship` (string): The emergency contact's relationship to the patient,
      - `workPhone` (string): The emergency contact's work phone number,
    - `nextOfKin1` (object): An object containing information about patient's next of kin with the following fields:
      - `address`: (object): The patients's next of kin address containing the following fields:
        - `street1`
        - `street2`
        ...
      - `name` (string): Next of kin name
      - `phone` (string):  Next of kin phone
      - `relationship` (string): Next of kin relationship
      - `workPhone` (string): Next of kin work phone
    - `nextOfKin2` (object): An object containing information about patient's next of kin with the following fields:
      - `address` (object): The patients's next of kin address containing the following fields:
        - `street1`
        - `street2`
        ...
      - `name` (string): Next of kin name
      - `phone` (string): Next of kin phone
      - `relationship` (string): Next of kin relationship
      - `workPhone` (string): Next of kin work phone
    

#### `PATCH /demographics`
  - Description: Send modified demographic information to update demographics for the patient.
  - Request Body:
    - Body: An Object containing patient demographic information with the following fields
    - `cellPhone` (string): The patient's phone number
    - `emailAddress` (string): The patients's email
    - `homeAddress` (object): The patients's home address containing the following fields:
      - `street1`
      - `street2`
      ...
    - `homePhone` (string)
    - `mailingAddress` (object): The patients's home address containing the following fields:
      - `street1`
      - `street2`
      ...
    - `workPhone` (string): The patient's work phone
    - `emergencyContact` (Object): The patient's emergency contact with the following fields:
      - `address` (Object):
        - `street1`
        - `street2`
        ...
      - `name` (string): The emergency contact's name,
      - `phone` (string): The emergency contact's phone number,
      - `relationship` (string): The emergency contact's relationship to the patient,
      - `workPhone` (string): The emergency contact's work phone number,
    - `nextOfKin1` (object): An object containing information about patient's next of kin with the following fields:
      - `address`: (object): The patients's next of kin address containing the following fields:
        - `street1`
        - `street2`
        ...
      - `name` (string): Next of kin name
      - `phone` (string):  Next of kin phone
      - `relationship` (string): Next of kin relationship
      - `workPhone` (string): Next of kin work phone
    - `nextOfKin2` (object): An object containing information about patient's next of kin with the following fields:
      - `address` (object): The patients's next of kin address containing the following fields:
        - `street1`
        - `street2`
        ...
      - `name` (string): Next of kin name
      - `phone` (string): Next of kin phone
      - `relationship` (string): Next of kin relationship
      - `workPhone` (string): Next of kin work phone

### Check-In

#### `POST /authenticated-check-in`
- Description: Check into an appointment and Set eCheckInStarted (happens in initiateCheckIn now), setCheckIn, and eCheckInComplete in vista.
- Request Body:
  - `appointmentIEN` (string): The unique identifier of the appointment.
  - `patientDFN` (string): The unique identifier of the patient.
  - `stationNo` (string): The station number.
- Response:
  - Status Code: 200 OK
  - Body: The updated appointment object.

### Error Handling
The API follows standard HTTP status codes for indicating the success or failure of a request. Additionally, specific error responses are returned with relevant error messages in the response body.

## Authentication and Authorization
The API uses OAuth 2.0 for authentication. The access token must be included in the `Authorization` header for each request. Additionally, the API compares the provided `patientDFN` in the request with the patientDFN in the authentication token to ensure authorization for checking into the appointment.

## Conclusion
This API design document provides an overview of the endpoints for checking the eligibility of appointments for E-Check-In and checking into appointments in the [API Name] API. It serves as a reference for developers to understand how to interact with the API and implement client applications accordingly.
