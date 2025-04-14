
# External Referral Appointment Scheduling System
## Better known as the Community Care system or CC

## Goals
1. Streamline the process of scheduling external referral appointments for veterans
2. Reduce manual intervention in the referral and appointment scheduling process
3. Improve veteran experience by providing easy access to referral information and appointment scheduling
4. Ensure data security and privacy throughout the referral and appointment process
5. Integrate with existing VA systems (MAP, EPS, Vista) to provide a seamless experience

## Overview
The External Referral Appointment Scheduling System is designed to automate and simplify the process of managing external referrals and scheduling appointments for veterans.  The system integrates with VA Notify for communications and EPS for appointment management.

## Scope
- Integration with VA Notify for sending referral notifications to veterans
- Development of a frontend interface for veterans to view referrals and schedule appointments
- Integration with the External Provider Services (EPS) system for appointment management
- Integration with the CCRA (VA referrals and other info) via the MAP services as a pass through service
- Ensuring compliance with VA accessibility standards

## Assumptions
1. Referral data through MAP services which references CCRA (which is built within HSRM, a 3rd party cloud system)
2. Veterans have access to either SMS or email for receiving notifications
3. The EPS system is available and can be integrated for appointment scheduling
4. Staff members will continue to manually synchronize appointment data between EPS and Vista systems
5. The system will operate within the VA's existing authentication framework

## Design Decisions
1. Utilization of Redux for state management in the frontend
2. Integration with VA Notify for sending notifications to veterans
3. Use of the existing vets-api encryption library for securing referral data
4. Implementation of a two-tier approach for referral data retention
5. Daily checks for appointment synchronization between EPS and Vista

## System Architecture

```mermaid
graph TB
    User((User))
    
    subgraph "VA.gov"
        VW[Vets-Website<br>React App]
        subgraph "CC Experience"
            VA_API[Vets-API<br>Ruby on Rails]
            VA_NOTIFY[VA Notify]
        end
    end
    
    MAP[MAP System]
    CCRA[CCRA System]
    EPS[EPS System]

    User -->|HTTPS| VW
    VW -->|HTTPS| VA_API
    VA_API -->|Send Notifications| VA_NOTIFY
    VA_API -->|Access Referral Data| MAP
    MAP -->|Retrieves Referral Data| CCRA
    VA_API -->|Schedule Appointments| EPS
    EPS -- "Manual Entry (Air Gap)" --> CCRA

    classDef vaSystem fill:#e6f3ff,stroke:#333,stroke-width:2px;
    classDef external fill:#f9f9f9,stroke:#333,stroke-width:2px;
    class VW,VA_API,VA_NOTIFY vaSystem;
    class MAP,EPS,CCRA external;
```

## Referral Data Model

```mermaid
classDiagram
    class Referral {
        +Sta6aKey: String
        +ReferralStatus: String
        +ReferralCreateDate: Date
        +ReferralFromDate: Date
        +ReferralToDate: Date
        +FirstActiveDateTime: Date
        +FirstScheduledDateTime: Date
        +HSRM_AllocatedDate: Date
        +HSRM_DateSetToAccepted: Date
        +HSRM_DateSetToApproved: Date
        +HSRM_DateSetToFirstAppointmentMade: Date
        +HSRM_DateSetToInitialCareGiven: Date
        +HSRM_DateSetToRejected: Date
        +EarliestDate: Date
        +CareCategory: String
        +ReferralNumber: String
        +VendorName: String
        +VendorNPI: String
        +Zip: String
        +ReasonForReturn: String
    }
```
## Sequence Diagrams

### Workflow starting with VeText

```mermaid
sequenceDiagram
    participant Vetext
    participant Veteran
    participant vets-website
    participant vets-api
    participant CCRA
    participant EPS

    Vetext->>Veteran: Sends encoded UCID in short URL
    Veteran->>vets-website: Clicks text message
    vets-website->>vets-api: Calls /referral(s)/:id (encoded UCID)
    vets-api->>vets-api: Decodes UCID
    vets-api->>CCRA: Requests referral data
    CCRA-->>vets-api: Returns referral data
    vets-api->>EPS: Checks for existing appointments with referral number
    vets-api->>CCRA: Checks for existing appointments with referral number
    EPS-->>vets-api: Returns appointment status
    CCRA-->>vets-api: Returns appointment status
    alt Status is good (not 'booked')
        vets-api->>vets-website: Returns serialized referral data with empty appointments array
        vets-website->>Veteran: Display referral card
    else Status is 'booked'
        vets-api->>vets-website: Returns serialized referral data with populated appointments array
        vets-website->>Veteran: Display already scheduled alert
    end
```

### Workflow once SMS/Email received
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (FE)
    participant VetsAPI as Vets API
    participant VistA as VistA
    participant EPS as EPS System
    participant VA as VA Notify

    Note over User: User clicks link in SMS/Email
    User->>Frontend: Open appointments page
    Frontend->>VetsAPI: Get referral data
    VetsAPI->>Postgres: Fetch referral data (or MAP system once complete possibly)
    Postgres->>VetsAPI: Return referral data
    VetsAPI->>VistA: Get VistA appointments
    VistA->>VetsAPI: Return VistA appointments
    VetsAPI->>EPS: Get EPS appointments for patientId
    EPS->>VetsAPI: Return EPS appointments for patientId
    VetsAPI->>VetsAPI: validateAppointments() (for referrals already made in EPS, for referrals that are already appointments in VistA)
    VetsAPI-->>Frontend: Return referral data
    Frontend->>Frontend: Store referral data in Redux
    

    Note over User: Starting appointment process page
    Frontend->>Frontend: getReferralData() from Redux
    Frontend->>VetsAPI: Get provider data
    VetsAPI->>EPS: Create Draft Appointment (patient ID, and referral ID)
    EPS->>VetsAPI: Get appointmentId from this call
    VetsAPI->>EPS: Get provider data based on referral / patient preferred provider (NPI? ID?)
    VetsAPI->>EPS: Get drive time to provider, combine with provider data
    EPS->>VetsAPI: Return provider data
    VetsAPI->>Frontend: Return provider data
    Frontend-->Frontend: Store provider data in referral Redux object
    Frontend-->>User: Display referral data for this appointment

    Note over User: Schedule your appointment page
    User->>Frontend: View provider Slot availability
    Frontend->>VetsAPI: getProviderSlotAvailability()
    VetsAPI->>EPS: Fetch provider slot availability
    EPS-->>VetsAPI: Return provider slot availability
    VetsAPI-->>Frontend: Return provider slot availability
    User->>Frontend: Select date/time and click next
    Frontend->>Frontend: Store provider and appointment data in Redux

    Note over User: Confirm page
    Frontend->>Frontend: getReferralData() from Redux
    Frontend-->>User: Display referral and appointment details
    User->>Frontend: Click confirm
    Frontend->>VetsAPI: confirmAppointment()
    VetsAPI->>EPS: Send appointment details
    EPS-->>VetsAPI: updateReferralStatus() Confirm appointment scheduled
    VetsAPI->>Postgres: Mark referral as confirmed appointment

    Note over User: Review page
    Frontend->>Frontend: getReferralData() from Redux
    Frontend-->>User: Display appointment data
```

## Key Processes

### User Workflow
1. User receives SMS/Email with referral link and clicks it.
2. User is directed to login and authenticate.
3. After authentication, user is redirected to the referral page.
4. Frontend retrieves referral data from Vets API and stores it in Redux.
5. If an appointment exists that matches a referral number of the referral coming in, reject the apppointment, as we are ONLY booking first referral appointments
6. Frontend checks for EPS appointments and combines them with existing appointments in Redux for the list.
7. Clicking into the scheduling process shows referral information
8. After the user verifies this information, they may go to the slots of the provider available (slots are date/time unique points that a user can book an appointment in)
9. After choosing a slot, the user sees a final verification page
10. Clicking confirm, will book the appointment in CCRA, and send the user a notification (there are some async processes here in the EPS system and the airgap to the CCRA system)

## Resources

Since we already have 'Appointment' resource under VAOS (VA Online Scheduling) service, we're going to use that resource. We have discussed this with the VAOS backend engineering team and they are in agreement with this approach. This avoids any confusion for the Appointment resource and object. However the downside is that we're going to have to add logic to retrieve the appointments from EPS and dedupe those within the existing appointments service code, which is going to add complexity and latency for existing consumers.

'Referral' and 'Provider' are going to be a new resources. Endpoints are:

### * GET `/vaos/v2/referrals` (new)
```
[
  {
    "uuid": "123_123456",
    "categoryOfCare": "Physical Therapy",
    "referralDate": "2025-06-02T10:30:00Z",
    "expirationDate": "2025-06-02"
  }
]
```
### * GET `/vaos/v2/referrals/{referralNo}`
Response when not booked ie: no appointments have been booked for this referral)
```
{
  "uuid": "1234",
  "referralDate": "2025-06-02T10:30:00Z",
  "expirationDate": "2024-12-12",
  "referralNumber": "VA0000009880",
  "referringFacility": "Batavia VA Medical Center w/ Dr. Moreen S. Rafa",
  "status": "Approved",
  "categoryOfCare": "Physical Therapy",
  "stationID": "528A4",
  "sta6": "534",
  "referringFacilityInfo": {
    "facilityName": "Batavia VA Medical Center",
    "facilityCode": "528A4",
    "description": "Batavia VA Medical Center",
    "address": {
      "address1": "222 Richmond Avenue",
      "city": "BATAVIA",
      "state": "NY",
      "zipCode": "14020"
    },
    "phone": "(585) 297-1000"
  },
  "referralStatus": "open",
  "provider": {
    "id": 111,
    "name": "Dr. Moreen S. Rafa",
    "location": "FHA South Melbourne Medical Complex"
  },
  "appointments": []
}

```
Response when an appointment is found
```
{
  ...the referral response 
  "appointments": [
    {
      "id": "1234",
      "startDate": "2025-03-15 10:30 AM",
      "location": {
        "address": "123 Main St, Springfield, IL, 62704",
        "room": "Suite 405"
      },
      "confirmationStatus": "confirmed"
    }
  ]
}
```
### * POST `/vaos/v2/appointments/create_draft` (new)
Request:
```
{
  "referral_id": "add2f0f4-a1ea-4dea-a504-a54ab57c6800"
}
```
Response:
```
{
  "data": {
    "id": "string",
    "provider": {
      "id": "string",
      "name": "string",
      "isActive": boolean,
      "individualProviders": ["string"],
      "providerOrganization": "string",
      "location": {
        "address": "string",
        "latitude": number,
        "longitude": number
      },
      "networkIds": ["string"],
      "schedulingNotes": "string",
      "appointmentTypes": [
        {
          "id": "string",
          "name": "string",
          "isSelfSchedulable": boolean
        }
      ],
      "specialties": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "visitMode": "string",
      "features": {
        "isDigital": boolean
      }
    },
    "slots": [ // Optional - Only included if available
      {
        "id": "string",
        "start": "ISO8601 datetime",
        "end": "ISO8601 datetime"
      }
    ],
    "driveTime": { // Optional - Only included if available
      "origin": {
        "latitude": number,
        "longitude": number
      },
      "destination": {
        "latitude": number,
        "longitude": number
      }
    }
  }
}
```
### * GET `/vaos/v2/appointments` (existing)
* NOTE: Will include eps appointments unless a vaos appointment for a given referral is already returned in the collection.

### * GET `/vaos/v2/appointments/{appointmentId}` (existing)
* NOTE: this existing endpoint will be utilized for retrieving appointment details for an eps appointment through the use of a parameter flag

Request:
```
GET /vaos/v2/appointments/{id}?_include=eps
```

Response:

```
{
  "data": {
    "id": "string",
    "type": "appointments",
    "attributes": {
      "id": "string",
      "status": "string", // "booked" or "proposed"
      "patientIcn": "string",
      "created": "ISO8601 datetime",
      "locationId": "string", // Optional
      "clinic": "string", // Optional
      "start": "ISO8601 datetime", // Optional
      "contact": "string", // Optional
      "referralId": "string", // Optional
      "referral": { // Optional
        "referralNumber": "string"
      },
      "providerServiceId": "string", // Optional
      "providerName": "string" // Optional
    }
  }
}
```

### * GET `/vaos/v2/eps_appointments/{appointmentId}` (new)
* NOTE: this endpoint will not be utilized for eps appointment details retrieval for referral appointment creation workflow but will instead use `/vaos/v2/appointments/{appointmentId}` as seen directly above
```
{
  "data": {
    "id": "qdm61cJ5",
    "type": "eps_appointment",
    "attributes": {
      "appointment": {
        "id": "qdm61cJ5",
        "status": "booked",
        "patientIcn": "care-nav-patient-casey",
        "created": "2025-02-10T14:35:44Z",
        "locationId": "sandbox-network-5vuTac8v",
        "clinic": "Aq7wgAux",
        "start": "2024-11-21T18:00:00Z",
        "referralId": "12345",
        "referral": {
          "referralNumber": "12345",
          "facilityName": "Linda Loma",
          "facilityPhone": "555-555-5555"
          "typeOfCare": "Physical Therapy"
          "modality": "In Person"
        }
      },
      "provider": {
        "id": "test-provider-id",
        "name": "Timothy Bob",
        "isActive": true,
        "individualProviders": [
          {
            "name": "Timothy Bob",
            "npi": "test-npi"
          }
        ],
        "providerOrganization": {
          "name": "test-provider-org-name"
        },
        "location": {
          "name": "Test Medical Complex",
          "address": "207 Davishill Ln",
          "latitude": 33.058736,
          "longitude": -80.032819,
          "timezone": "America/New_York"
        },
        "networkIds": [
          "sandbox-network-test"
        ],
        "schedulingNotes": "New patients need to send their previous records to the office prior to their appt.",
        "appointmentTypes": [
          {
            "id": "off",
            "name": "Office Visit",
            "isSelfSchedulable": true
          }
        ],
        "specialties": [
          {
            "id": "test-id",
            "name": "Urology"
          }
        ],
        "visitMode": "phone",
        "features": null
      } 
    }
  }
}
```
### * POST `/vaos/v2/appointments/submit_referral_appointment` (existing)
Request:
```
{
  "id": "string", // Required - Draft appointment ID
  "network_id": "string", // Required
  "provider_service_id": "string", // Required
  "slot_ids": ["string"], // Required - Array of slot IDs
  "referral_number": "string", // Required
  "birth_date": "string", // Optional
  "email": "string", // Optional
  "phone_number": "string", // Optional
  "gender": "string", // Optional
  "address": { // Optional
    "type": "string",
    "line": ["string"],
    "city": "string",
    "state": "string",
    "postal_code": "string",
    "country": "string",
    "text": "string"
  },
  "name": { // Optional
    "family": "string",
    "given": ["string"]
  }
}
```
Response:
```
{
  "data": {
    "id": "string",
    "provider": {
      "id": "string",
      "name": "string",
      "isActive": boolean,
      "individualProviders": ["string"],
      "providerOrganization": "string",
      "location": {
        "address": "string",
        "latitude": number,
        "longitude": number
      },
      "networkIds": ["string"],
      "schedulingNotes": "string",
      "appointmentTypes": [
        {
          "id": "string",
          "name": "string",
          "isSelfSchedulable": boolean
        }
      ],
      "specialties": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "visitMode": "string",
      "features": {
        "isDigital": boolean
      }
    },
    "slots": [ // Optional - Only included if available
      {
        "id": "string",
        "start": "ISO8601 datetime",
        "end": "ISO8601 datetime"
      }
    ],
    "drivetime": { // Optional - Only included if available
      "origin": {
        "latitude": number,
        "longitude": number
      },
      "destination": {
        "latitude": number,
        "longitude": number
      }
    }
  }
}
```
### * GET `/vaos/v2/providers` (new)
### * GET `/vaos/v2/providers/{providerId}/slots` (new)
### * GET `/vaos/v2/providers/{providerId}/drivetime` (new)


## Removing duplicates and preventing duplicates of referrals
- A duplicate referral refers to a referral that has already been entered into our system. The incoming referral ID will match an existing referral ID in our postgress DB. This is likely a referral that hasn't been scheduled into an appointment yet. See blow for existing appointment
- An existing appointment refers to an appointment that has been made with a referral ID, that referral ID matches to a "new" referral, which means it was already made. We can also possibly hold referrals in our DB and mark them as "completed" or "referral made" in the same manner, after the user has completed making an appointment with a referral
- Expired referrals are referrals whose end date has expired, regardless of if an appointment exists or not

## Submit Asynchronous Process
1. When confirming and submitting the final appointment, the async process will be dual
2. The FE will submit the appointment and if successful poll the /appointments/{appointmentId} endpoint until a valid response or failure returns (up to 30 to 60 seconds)
3. The BE will poll the same endpoint, but send a notification via VA Notify the user on success or failure

## Integration Points
1. CCRA: Source of referral data
2. VA Notify: For sending notifications to veterans
3. EPS (External Provider Services): For appointment management

## Performance Considerations
- Drive time seems to take a long time to retrieve results
- Async process in the confirmation

## Accessibility
- The frontend interface will comply with existing VA accessibility standards.
- No additional accessibility requirements specific to this project.

## Open Questions and Future Considerations
1. Need to get what will be referred to as the providerID for the EPS system that matches to what's in the CCRA object. Refer to EPS document/yaml/json for the call `provider-services/{providerServiceId}`
2. Get user data from full auth user object in vets-api to get address and phone and email
