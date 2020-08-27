- [Data Flow](#data-flow)
  - [Before Filling out the Form](#before-filling-out-the-form)
    - [From the VA.gov website](#from-the-vagov-website)
    - [From VeText](#from-vetext)
  - [Filling out the form](#filling-out-the-form)
    - [Step 1](#step-1)
    - [Step 2](#step-2)
    - [Step 3](#step-3)
    - [Step 4](#step-4)
    - [Step 5](#step-5)
    - [Step 6](#step-6)
    - [Summary](#summary)
  - [Submitting the form](#submitting-the-form)


# [Data Flow](#data-flow)

This document describes the flow of data from a beginning to end "happy path" scenario. This is written with the context of what data does the front end need and how does it get. 

For sources of data, checkout the [data-sources](data-sources.md)



## Before Filling out the Form

The data that is needed pre-form is that an appointment has to be created, with an `appointmentId`. This could be from any usual source.

### From the VA.gov website

Where a user can view their appointments, we can add a link flow to get to the form using the appointmentId, this will have a link that contain the appointment id. 

### From VeText

Once the system knows an appointment has been created (details of that are unclear as this writing). The vets will receive a text message with the URL to the form to fill out, which contains the appointment ID.



## Filling out the form

This is going to document where the data is coming from, to validate that we have all the data needed to start creating the form

![Dataflow](assets/HQ%20-%20dataflow.png)

The data needed to start the form is 

- an appointment
  - facility
  - id
  - time 
- Demographics (patient information)
  - Name
  - DoB
  - Address
  - phone

Optionally, Reason for Visit (called bookingNote on an appointment)

### Step 1

Each appointment will have an id, for now lets call it and `encounterId` this id is tied to the appointment that vet has made. 

In order to access the questionnaire, a user will navigate (see [Before Filling out the Form](#before-filling-out-the-form)) to this unique URL. This will load a landing page.

### Step 2

This landing page will be the kick off page for the form. This is the same page that is being created in [Ticket 12282](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12282)

### Step 3 

The landing page will then get the `encounterId` from the URL and. using the `encounterId` make a GET request to our Vets API. This will be a request to the Healthcare Questionnaire Service (HealthQuest service). 

The GET request url should look like:

`GET /v0/healthcare_questionnaire/{appointmentId}`

### Step 4

Once the the Healthcare Questionnaire Services receives the GET request with the `appointmentId`. The services should first make the call out to MAP to get the appointment information. 

This call looks like :  
`GET /patients/{icn}/appointments/{id}`

json returned
```json
{
  "id": "string",
  "startDate": "2020-08-26T18:16:04.504Z",
  "clinicId": "string",
  "clinicFriendlyName": "string",
  "clinicPhone": "string",
  "clinicPhoneExtension": "string",
  "facilityId": "string",
  "sta6aid": "string",
  "stationName": "string",
  "patientIcn": "string",
  "communityCare": true,
  "vvsAppointments": [...],
  "vdsAppointments": [
    {
      "id": "string",
      "appointmentLength": "string",
      "appointmentTime": "2020-08-26T18:16:04.504Z",
      "status": "string",
      "clinic": {
        "id": "string",
        "name": "string",
        "department": "string",
        "service": "string",
        "specialty": "string",
        "stopCode": "string",
        "facility": {
          "siteCode": "string",
          "name": "string",
          "displayName": "string",
          "regionId": "string",
          "lastEventTimestamp": "string",
          "lastEventReason": "string",
          "uid": "string",
          "pid": "string",
          "type": "string",
          "facilityCode": "string",
          "state": "string",
          "city": "string",
          "address": "string",
          "parentSiteCode": "string"
        },
        "askForCheckIn": false,
        "facilityCode": "string",
        "dssId": "string",
        "inactivate": "string",
        "reactivate": "string"
      },
      "patientId": "string",
      "bookingNote": "string",
      "labDateTime": "2020-08-26T18:16:04.504Z",
      "ekgDateTime": "2020-08-26T18:16:04.504Z",
      "xrayDateTime": "2020-08-26T18:16:04.504Z"
    }
  ],
  "ccsAppointments": [...]
}
```

### Step 5

After the service gets the appointment details, whihc includes the patient identifier, the services makes a call to get that patients information on files 

NEED: URL TO VAMF Patient endpoint

NEED: JSON of what is returned


### Step 6

After the two calls, the HealthcareService packages up all the data in JSON object that is returned to the landing page which then displays the information in the form for the user. 



### Summary

This will create an endpoint that is only available for authenticated users and has the signature 


`GET /v0/healthcare_questionnaire/{appointmentId}`

```json
{
  "appointment":{all the appointment details},
  "patient":{all the patient information}
}
```

which will load all the data needed for the form, when the user begins the form. 


## Submitting the form

... PGD... FHIR... etc... 