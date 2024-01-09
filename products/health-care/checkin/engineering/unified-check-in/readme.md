# Unified Check-in Upcoming Appointments - Technical Design

<aside>
🚧 WIP

</aside>

## Goals

This is a technical design document for implementing upcoming appointments in Patient Check-in project as a part of [Unified Check-in project](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/unified-check-in-experience.md). The goal of the project is to provide a unified view of check-in and pre check-in workflows to reduce confusion among veterans. As part of the [Priority 1 initiatives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/unified-check-in-experience.md#priority-1-new-landing-page--accompanying-content-changes-in-progress), the upcoming appointments view displays the appointments that are scheduled for the veteran for future. This view is shown during both the check-in and pre check-in workflows.

## Ubiquitous Language

**Check-in** *The process for Veterans to “check in” for their appointment once they arrive at the facility that confirms to the staff that the patient has arrived and are ready to be seen by the provider.*

**Pre Check-in** *The process for Veterans to answer certain pre-visit questions, like confirming their contact information, emergency contact and Next of Kin information. This saves them time on the day of their appointment when checking in.*

**VAOS** *VA online scheduling service*

**MAP** *Mobile Application Platform - provides shared services like the OAuth Secure Token Service (STS)*

**Clinic**

**Facility**

**Provider**

## Overview

The core functionality provided by this feature consists of showing upcoming appointments to the Veterans when they login to check-in or pre check-in for their appointments (as shown in the wireframes below). Please refer to Unified check-in and pre check-in [user flows](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0F9F62F0-68A0-4C8B-9105-A92D0A6448DB/canvas) and [wireframes](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/868762F3-8E8F-4E23-B0DA-34C1783F0A03/canvas).

| Appointments List Page | Appointments Details Page |
| :---: | :---: |
| ![Appointments List Page](images/appointments-list-page.png) | ![Appointments Details Page](images/appointments-details-page.png)

## Design

### Container Diagram

![Check In Experience - Upcoming Appointments](images/containerDiagram_checkInExp-appts.png)

### Sequence Diagram

```mermaid
sequenceDiagram
    actor vet as Veteran
    participant web as vets-website
    participant api as vets-api
    participant l as LoROTA
    participant vaos as VAOS
    participant fa as facilities API
    participant cl as clinics API

        activate vet
        vet->>+web: Enter dob/last name
        web->>+api: POST /sessions
        api->>+l: POST /token
        l--)-api: valid session
        api--)web: return 'read.full'
        deactivate api
        web->>+api: GET check-in appointments
        api->>+l: GET data
        l--)-api: data
        api--)-web: serialized data (appointments + demographics)

        web->>+api: GET /appointments
        api->>+vaos: GET /appointments
        vaos--)-api: appointments
				
				loop for each appointment
	        api->>+fa: GET /facilities
	        fa--)-api: facilities
	        api->>+cl: GET /clinics
	        cl--)-api: clinics
				end
        api--)-web: appointments (incl. facilities, clinics)

        opt demographics confirmations needed
            web--)vet: demographics page
        end
        web--)-vet: appointments page
        deactivate vet
```

### Integration

To show the upcoming appointments in check-in experience pages, we have to call not only the appointments data from VAOS appointments service, but also facilities, clinics and provider services

- Authentication
    
    Authentication is handled through the MAP OAuth Secure Token Service (STS). The STS service requires a registered `client_id` and a `client_assertion` scoped to the patient identifier. The `access_token` needs to be added as a header to the appointments request. It is valid for 15 minutes and should be cached to avoid multiple requests if the user refreshes the appointments page.

- VAOS Appointments Service
    
    Staging URL: [`https://veteran.apps-staging.va.gov/vaos/v1`](https://veteran.apps-staging.va.gov/vaos/v1)
    
    As mentioned above, the requests to this service require the `access_token` in `X-VAMF-JWT` header from the STS. 
    
    - Sample Request
        
        ```bash
        curl --request GET \
          --url 'https://veteran.apps-staging.va.gov/vaos/v1/patients/{patient_icn}/appointments?start=2023-11-10T17%3A12%3A30.174Z&end=2023-12-12T17%3A12%3A30.174Z' \
          --header 'Content-Type: application/x-www-form-urlencoded' \
          --header 'X-VAMF-JWT: <jwt_token>'
        ```
        
    - Sample Response
        
        ```json
        {
          "data": [
            {
              "id": "180766",
              "identifier": [
                {
                  "system": "Appointment/",
                  "value": "413938333130383736"
                },
                {
                  "system": "http://www.va.gov/Terminology/VistADefinedTerms/409_84",
                  "value": "983:10876"
                }
              ],
              "kind": "clinic",
              "status": "booked",
              "serviceType": "amputation",
              "serviceTypes": [
                {
                  "coding": [
                    {
                      "system": "http://veteran.apps.va.gov/terminologies/fhir/CodeSystem/vats-service-type",
                      "code": "amputation"
                    }
                  ]
                }
              ],
              "serviceCategory": [
                {
                  "coding": [
                    {
                      "system": "http://www.va.gov/Terminology/VistADefinedTerms/409_1",
                      "code": "REGULAR",
                      "display": "REGULAR"
                    }
                  ],
                  "text": "REGULAR"
                }
              ],
              "patientIcn": "1013125218V696863",
              "locationId": "983GC",
              "clinic": "1081",
              "start": "2023-11-13T16:00:00Z",
              "end": "2023-11-13T16:30:00Z",
              "minutesDuration": 30,
              "slot": {
                "id": "3230323331313133313630303A323032333131313331363330",
                "start": "2023-11-13T16:00:00Z",
                "end": "2023-11-13T16:30:00Z"
              },
              "created": "2023-08-02T00:00:00Z",
              "cancellable": true,
              "extension": {
                "ccLocation": {
                  "address": {}
                },
                "vistaStatus": [
                  "NO ACTION TAKEN"
                ],
                "preCheckinAllowed": true,
                "eCheckinAllowed": true,
                "clinic": {}
              }
            }
          ]
        }
        ```

### Resources

`GET /appointments` - returns a list of upcoming appointments for the patient

`GET /appointments/{appointment_id}` - returns the details of the specific appointment for the patient

## References

[1] [Unified Check-in Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/unified-check-in-experience.md)
