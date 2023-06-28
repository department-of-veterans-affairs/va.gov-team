# CHIP Authenticated Check-In API Design Document

## Introduction
This document outlines the design and specifications for the Authenticated Check-In API Lambdas in CHIP. The purpose of this API is to allow users to check into appointments from an application that has a fully authenticated user. This document covers the API's endpoints, request and response formats, authentication and authorization mechanisms, and business rules and requirements for Check-In.

## Eligibility Requirements
For an appointment to be eligible for patient check in through the web or any mobile application cetain criteria need to be met. These include:
- Insurance information needs to be valid and up to date
- Demographics: contact, emergency contact, and next of kin information has to have been reviewed by the veteran and confirmed
- The appointment needs to be valid
  - Does the clinic for the appointment have e-check-in enabled
  - Is it within the 45 minute check in window(30 min before - 15 minutes after start time)
  - Is the appointment type an in clinic appointment
  - Is the appointment status valid

## Base URL
The base URL for accessing the API is: `[base-path]/actions`

## Authentication


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
    - `message` (string): A list of demographics that need to be confirmed. ie. Patient Information, Emergency Contact, Next-of-Kin

  - Status Code: 400 
  - Body (object): The Insurance information is missing/needs to be updated Response Object which contains the following fields
    - `code` (string): invalid-insurance
    - `message` (string): Insurance needs to be validated

  - Status Code: 400
  - Body (object): Invalid appointment object with the following fields
    - `code` (string): invalid-appointment
    - `message` (string): Details specific reasons the appointment is invalid (too-early, too-late, e-check-in-not-enabled, invalid-status, invalid-type)

### Demographics

#### `GET /demographic-confirmations`
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

#### `PATCH /demographic-confirmations`
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
    - `contactNeedsUpdate` (boolean)
    - `emergencyContactNeedsUpdate` (boolean)
    - `nextOfKinNeedsUpdate` (boolean)
    


