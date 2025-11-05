
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
    
    MAP[MAP - Services connecting to VISTA and HSRM]
    HSRM[HSRM - HealthShare Referral Manager]
    EPS[EPS - Wellhive System for appointments and providers]
    VW[vets-website]
    VA_API[vets-api]

    User -->|HTTPS| VW
    VW -->|HTTPS| VA_API
    VA_API -->|Send Notifications| VA_NOTIFY
    VA_API -->|Access Referral Data| MAP
    MAP -->|Retrieves Referral Data| HSRM
    VA_API -->|Schedule Appointments| EPS
    EPS -- "Manual Entry (Air Gap)" --> HSRM

    classDef vaSystem fill:#e6f3ff,stroke:#333,stroke-width:2px;
    classDef external fill:#f9f9f9,stroke:#333,stroke-width:2px;
    class VW,VA_API,VA_NOTIFY vaSystem;
    class MAP,EPS,HSRM external;
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

### Workflow for booked vs not booked

```mermaid
sequenceDiagram
    participant Vetext
    participant Veteran
    participant vets-website
    participant vets-api
    participant CCRA
    participant EPS

    Vetext->>Veteran: Sends short URL
    Veteran->>vets-website: Clicks text message
    vets-website->>vets-api: Requests referrals
    vets-api->>CCRA: Requests referrals
    CCRA-->>vets-api: Returns referrals
    vets-api->>vets-website: Returns referrals
    Veteran->>vets-website: Veteran selects referral
    vets-website->>vets-api: Requests referral details
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

### Scheduling flow
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (FE)
    participant VetsAPI as Vets API
    participant map as MAP services
    participant vaos as VAOS
    participant EPS as EPS System
    participant VA as VA Notify

    Note over User: User clicks link in SMS/Email
    User->>Frontend: Opens referrals and requests page
    Frontend->>VetsAPI: Get referral list data
    VetsAPI->>map: Fetch referral list data
    map-->>VetsAPI: Return referral list data
    VetsAPI-->>Frontend: Return referral list data

    User->>Frontend: Veteran clicks a referral
    Note over User: Referral Info/Details Page
    Frontend->>VetsAPI: Request referral details
    VetsAPI->>EPS: Get EPS appointments for patientId
    EPS-->>VetsAPI: Return EPS appointments for patientId
    VetsAPI->>vaos: Get vaos appointments
    vaos-->>VetsAPI: Return vaos appointments
    VetsAPI->>VetsAPI: Combine appointment data with referral data
    VetsAPI-->>Frontend: Return referral data with appointments
    Frontend->>Frontend: Determine if booking is allowed
    User->>Frontend: Click schedule appointment
    
    Note over User: Schedule Appointment Page
    Frontend->>VetsAPI: POST create draft
    VetsAPI->>EPS: Create Draft Appointment
    EPS-->>VetsAPI: Return appointment object
    VetsAPI->>EPS: Get provider data
    VetsAPI->>EPS: Get drive time to provider, combine with provider data
    EPS->>VetsAPI: Return provider data
    VetsAPI->>Frontend: Return provider data with slots
    User->>Frontend: Select date/time and click next

    Note over User: Review page
    User->>Frontend: Click submit
    Frontend->>VetsAPI: Submit appointment
    VetsAPI->>EPS: Submit appointment
    EPS-->>VetsAPI: return success
    VetsAPI-->>Frontend: return success
    Frontend->>VetsAPI: Poll for booked status(see polling process)
    VetsAPI->>EPS: Fetch appointment details
    EPS-->VetsAPI: Return appointment details
    VetsAPI-->Frontend: Return booked appointment

    Note over User: Confirm page
    Frontend-->>User: Display appointment data
```

## Key Processes

### Referral Appointment Scheduling Flow

1. The user receives an SMS or email notification indicating that they can self-schedule an appointment for a referral.  
2. The notification directs the user to the **Referrals and Requests** page on **vets-website**, which lists all active referrals.  
3. The user selects the relevant referral from the list.  
4. **vets-website** retrieves the referral details and displays them to the user.  
5. If no appointment exists for that referral, the user can begin the scheduling process.  
6. The user navigates to the **Scheduling View**, where a draft appointment is created and available time slots are displayed.  
7. After selecting a time slot, the user reviews the appointment details on a **Final Verification** page.  
8. When the user clicks **Confirm**, the appointment is successfully booked.  
9. At a later point, the booked appointment is manually synced to external systems by staff.


## Resources

Since we already have 'Appointment' resource under VAOS (VA Online Scheduling) service, we're going to use that resource. We have discussed this with the VAOS backend engineering team and they are in agreement with this approach. This avoids any confusion for the Appointment resource and object. However the downside is that we're going to have to add logic to retrieve the appointments from EPS and dedupe those within the existing appointments service code, which is going to add complexity and latency for existing consumers.

## Referral Appointments API Specifications

This document describes the API specifications for VAOS referral appointments, defining the request/response structures between vets-website and vets-api.

### API Endpoints

#### GET /vaos/v2/referrals

Retrieves a list of referrals for the current user.

**Response:**
```json
{
  "data": [
    {
      "id": "6cg8T26YivnL68JzeTaV0w==00",
      "type": "referrals",
      "attributes": {
        "stationId": "659",
        "categoryOfCare": "CHIROPRACTIC",
        "referralNumber": "VA0000007241",
        "uuid": "6cg8T26YivnL68JzeTaV0w==00",
        "expirationDate": "2026-04-09"
      }
    }
  ]
}
```

#### GET /vaos/v2/referrals/{referralId}

Retrieves detailed information about a specific referral.

**Response** (when no appointments have been booked for this referral):
```json
{
  "data": {
    "id": "6cg8T26YivnL68JzeTaV0w==00",
    "type": "referrals",
    "attributes": {
      "uuid": "6cg8T26YivnL68JzeTaV0w==00",
      "categoryOfCare": "CHIROPRACTIC",
      "status": "ACTIVE",
      "referralNumber": "VA0000007241",
      "expirationDate": "2025-06-02",
      "serviceName": "Referral",
      "hasAppointments": false,
      "referralDate": "2023-01-01",
      "stationId": "659",
      "facilityName": "VAMC Facility",
      "facilityPhone": "555-555-5555",
      "preferredTimesForPhoneCall": [],
      "timezone": "America/New_York",
      "provider": {
        "name": "Dr. Moreen S. Rafa",
        "npi": "1346206547",
        "phone": "(937) 236-6750",
        "facilityName": "fake facility name",
        "address": {
          "street1": "76 Veterans Avenue",
          "city": "BATH",
          "state": null,
          "zip": "14810"
        }
      },
      "referringFacility": {
        "name": "Batavia VA Medical Center",
        "phone": "(585) 297-1000",
        "code": "528A4",
        "address": {
          "street1": "222 Richmond Avenue",
          "city": "BATAVIA",
          "state": null,
          "zip": "14020"
        }
      },
      "providerId": null,
      "receivingStaffName": null,
      "receivingStaffPhone": null,
      "referredToName": null,
      "sendingStaffEmail": null,
      "sendingStaffName": null
    },
    "relationships": {}
  }
}
```

**Note**: When appointments exist for a referral, the `hasAppointments` field will be `true` and appointment data may be included in the response.

#### POST /vaos/v2/appointments/draft

Creates a draft appointment for a referral with available providers and time slots.

**Request:**
```json
{
  "referral_number": "VA0000007241",
  "referral_consult_id": "984_646907"
}
```

**Response:**
```json
{
  "data": {
    "id": "appointment-for-VA0000007241",
    "type": "draft_appointment",
    "attributes": {
      "referralNumber": "VA0000007241",
      "provider": {
        "id": "9mN718pH",
        "name": "Dr. Bones @ FHA South Melbourne Medical Complex",
        "isActive": true,
        "individualProviders": [
          {
            "name": "Dr. Bones",
            "npi": "91560381x"
          }
        ],
        "providerOrganization": {
          "name": "Meridian Health (Sandbox 5vuTac8v)"
        },
        "location": {
          "name": "FHA South Melbourne Medical Complex",
          "address": "1105 Palmetto Ave, Melbourne, FL, 32901, US",
          "latitude": 28.08061,
          "longitude": -80.60322,
          "timezone": "America/New_York"
        },
        "networkIds": ["sandboxnetwork-5vuTac8v"],
        "schedulingNotes": "New patients need to send their previous records to the office prior to their appt.",
        "appointmentTypes": [
          {
            "id": "ov",
            "name": "Office Visit",
            "isSelfSchedulable": true
          }
        ],
        "specialties": [
          {
            "id": "208800000X",
            "name": "Urology"
          }
        ],
        "visitMode": "phone",
        "features": {
          "isDigital": true,
          "directBooking": {
            "isEnabled": true,
            "requiredFields": ["phone", "address", "name", "birthdate", "gender"]
          }
        }
      },
      "slots": [
        {
          "id": "5vuTac8v-practitioner-1-role-2|e43a19a8-b0cb-4dcf-befa-8cc511c3999b|2025-01-02T15:30:00Z|30m0s|1736636444704|ov0",
          "providerServiceId": "9mN718pH",
          "appointmentTypeId": "ov",
          "start": "2025-01-02T15:30:00Z",
          "remaining": 1
        }
      ],
      "drivetime": {
        "origin": {
          "latitude": 40.7128,
          "longitude": -74.006
        },
        "destination": {
          "distanceInMiles": 313,
          "driveTimeInSecondsWithoutTraffic": 19096,
          "driveTimeInSecondsWithTraffic": 19561,
          "latitude": 44.475883,
          "longitude": -73.212074
        }
      }
    }
  }
}
```


#### GET /vaos/v2/eps_appointments/{appointmentId}

Retrieves details for a specific EPS (Community Care) appointment.

**Response:**
```json
{
  "data": {
    "id": "EEKoGzEf",
    "type": "epsAppointment",
    "attributes": {
      "id": "EEKoGzEf",
      "status": "booked",
      "start": "2024-12-05T18:00:00Z",
      "isLatest": true,
      "lastRetrieved": "2025-11-05T15:15:07Z",
      "referralId": "123abc",
      "past": false,
      "modality": "communityCareEps",
      "provider": {
        "id": "test-provider-id",
        "name": "Dr. Smith @ Acme Cardiology - Anywhere, USA",
        "practice": "Acme Cardiology",
        "phone": "555-555-0001",
        "location": {
          "name": "Meridian Health",
          "address": "7500 CENTRAL AVE, STE 108, PHILADELPHIA, PA 19111-2430",
          "latitude": 40.06999282694126,
          "longitude": -75.08769957031448,
          "timezone": "America/New_York"
        }
      },
      "location": {
        "id": "test-location-id",
        "type": "appointments",
        "attributes": {
          "name": "Meridian Health",
          "timezone": {
            "timeZoneId": "America/New_York"
          }
        }
      }
    }
  }
}
```
#### POST /vaos/v2/appointments/submit

Submits a referral appointment for booking.

**Request:**
```json
{
  "id": "EEKoGzEf",
  "referralNumber": "VA0000007241",
  "slotId": "5vuTac8v-practitioner-1-role-2|e43a19a8-b0cb-4dcf-befa-8cc511c3999b|2025-01-02T15:30:00Z|30m0s|1736636444704|ov0",
  "networkId": "sandboxnetwork-5vuTac8v",
  "providerServiceId": "9mN718pH"
}
```

**Response:**
```json
{
  "data": {
    "id": "EEKoGzEf"
  }
}
```
### Error Responses

All endpoints may return error responses in the following format:

**404 Not Found:**
```json
{
  "errors": [
    {
      "title": "Referral not found",
      "detail": "Referral with ID {referralId} was not found",
      "code": "404",
      "status": "404"
    }
  ]
}
```

**500 Internal Server Error:**
```json
{
  "errors": [
    {
      "title": "Internal Server Error",
      "detail": "An error occurred while processing the request",
      "code": "500",
      "status": "500"
    }
  ]
}
```


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
3. EPS (External Provider Services): For appointment management (Wellhive)
    - https://wellhive.github.io/api-docs/

## Performance Considerations
- Drive time seems to take a long time to retrieve results
- Async process in the confirmation

## Accessibility
- The frontend interface will comply with existing VA accessibility standards.
- No additional accessibility requirements specific to this project.

## Open Questions and Future Considerations
1. Need to get what will be referred to as the providerID for the EPS system that matches to what's in the CCRA object. Refer to EPS document/yaml/json for the call `provider-services/{providerServiceId}`
2. Get user data from full auth user object in vets-api to get address and phone and email

## Proposed Cancellation Feature

moved to separate doc file:
https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/community-care-appts-cancellation.md
