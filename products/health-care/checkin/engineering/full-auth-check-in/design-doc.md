# WIP CHIP Authenticated Check-In API Design Document

## Introduction
This document outlines the design and specifications for the Authenticated Check-In API Lambdas in CHIP. The purpose of this API is to allow users to check into appointments. This document covers the API's endpoints, request and response formats, authentication and authorization mechanisms, and any additional considerations.

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
- Responses: (custom status codes?)
  - Status Code: 200 OK
    - Body (object): The Response Object which contains the following fields
      - message (string): "Check-In successful"
  - Status Code: 200 OK
    - Body: (object): The demographics data so that it can be confirmed
  - Status Code: 200 OK
    - Body (object): The Insurance information is missing/needs to be updated Response Object which contains the following fields
      - message (string): Insurance needs validation
  - Status Code: 500
    - Body (object): Invalid appointment object with the following fields 
      - message (string): too-early, too-late, e-check-in-not-enabled, invalid-status, invalid-type

### Demographics
- Description: Optional endpoint if client application is confirming demographics, next of kin and emergency contact information.

#### `POST /demographics-status-update`
- Description: Send confirmations
- Request Body:
  - Body: An Object containing patient demographic information with the following fields
  - `demographics-confirmed` (bool): Whether or not the demographics were confirmed by user
- Response:
  - Status Code: 200 OK
    - Body: Confirmations Updated message.
    
### Error Handling
The API follows standard HTTP status codes for indicating the success or failure of a request. Additionally, specific error responses are returned with relevant error messages in the response body.

## Authentication and Authorization
The API uses OAuth 2.0 for authentication. The access token must be included in the `Authorization` header for each request.

