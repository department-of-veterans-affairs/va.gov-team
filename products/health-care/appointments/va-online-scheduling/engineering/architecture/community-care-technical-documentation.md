
# External Referral Appointment Scheduling System

## Goals
1. Streamline the process of scheduling external referral appointments for veterans
2. Reduce manual intervention in the referral and appointment scheduling process
3. Improve veteran experience by providing easy access to referral information and appointment scheduling
4. Ensure data security and privacy throughout the referral and appointment process
5. Integrate with existing VA systems (Palantir, EPS, Vista) to provide a seamless experience

## Overview
The External Referral Appointment Scheduling System is designed to automate and simplify the process of managing external referrals and scheduling appointments for veterans. It involves a nightly job to fetch and process referral data from Palantir, secure storage of this data, veteran notifications, and a user-friendly workflow for veterans to schedule appointments based on these referrals. The system integrates with VA Notify for communications and EPS for appointment management.

## Scope
- Implementation of a nightly job to fetch and process external referral data from Palantir
- Secure storage of referral data in a Postgres database
- Integration with VA Notify for sending referral notifications to veterans
- Development of a frontend interface for veterans to view referrals and schedule appointments
- Integration with the External Provider Services (EPS) system for appointment management
- Implementation of a data retention policy for referral data
- Ensuring compliance with VA accessibility standards

## Assumptions
1. Palantir provides up-to-date and accurate referral data
2. Veterans have access to either SMS or email for receiving notifications
3. The EPS system is available and can be integrated for appointment scheduling
4. Staff members will continue to manually synchronize appointment data between EPS and Vista systems
5. The existing vets-api encryption library is suitable for securing referral data
6. The system will operate within the VA's existing authentication framework

## Design Decisions
1. Use of Sidekiq for scheduling and running the nightly job
2. Storage of encrypted referral data in a Postgres database for security
3. Utilization of Redux for state management in the frontend
4. Integration with VA Notify for sending notifications to veterans
5. Use of the existing vets-api encryption library for securing referral data
6. Implementation of a two-tier approach for referral data retention
7. Daily checks for appointment synchronization between EPS and Vista

## System Architecture

```mermaid
graph TB
    User((User))
    subgraph "VA.gov"
        VW[Vets-Website<br>React App]
        subgraph "CC Experience"
            VA_API[Vets-API<br>Ruby on Rails]
            VA_NOTIFY[VA Notify]
            POSTGRES[(Postgres DB)]
            REDIS[(Redis Cache)]
            SIDEKIQ[Sidekiq Job]
        end
    end
    PALANTIR[Palantir System]
    EPS[EPS System]
    TWILIO[Twilio]

    User -->|HTTPS| VW
    VW -->|HTTPS| VA_API
    VA_API -->|Read/Write| POSTGRES
    VA_API -->|Cache| REDIS
    VA_API -->|Trigger| SIDEKIQ
    SIDEKIQ -->|Fetch Data| PALANTIR
    VA_API -->|Schedule Appointments| EPS
    VA_NOTIFY -->|Send Notifications| TWILIO
    TWILIO -->|SMS/Email| User
    VA_API -->|Send Notifications| VA_NOTIFY
    
    classDef vaSystem fill:#e6f3ff,stroke:#333,stroke-width:2px;
    classDef external fill:#f9f9f9,stroke:#333,stroke-width:2px;
    class VW,VA_API,VA_NOTIFY,POSTGRES,REDIS,SIDEKIQ vaSystem;
    class PALANTIR,EPS,TWILIO external;
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

### Nightly Job
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (FE)
    participant VetsAPI as Vets API
    participant Sidekiq as Sidekiq Job
    participant Postgres as Postgres DB
    participant Palantir as Palantir
    participant EPS as EPS System
    participant VA as VA Notify

    Note over Sidekiq: Nightly Job
    Sidekiq->>Palantir: getExternalReferralData()
    Palantir-->>Sidekiq: Return referral data
    Sidekiq->>VetsAPI: parseConsultIntoReferral()
    VetsAPI->>VetsAPI: checkReferralData()
    VetsAPI->>Postgres: Check for duplicates and expiration
    Postgres-->>VetsAPI: Return check results
    VetsAPI->>VetsAPI: encryptReferralData()
    VetsAPI->>Postgres: storeData()
    VetsAPI->>VA: sendNotification()
    VA-->>User: Send SMS/Email with referral link
```

### Workflow once SMS/Email received
```mermaid
sequenceDiagram
    participant User
    participant Frontend as Frontend (FE)
    participant VetsAPI as Vets API
    participant Sidekiq as Sidekiq Job
    participant Postgres as Postgres DB
    participant Palantir as Palantir
    participant EPS as EPS System
    participant VA as VA Notify

    Note over Sidekiq: Nightly Job
    Sidekiq->>Palantir: getExternalReferralData()
    Palantir-->>Sidekiq: Return referral data
    Sidekiq->>VetsAPI: parseConsultIntoReferral()
    VetsAPI->>VetsAPI: checkReferralData()
    VetsAPI->>Postgres: Check for duplicates and expiration
    Postgres-->>VetsAPI: Return check results
    VetsAPI->>VetsAPI: encryptReferralData()
    VetsAPI->>Postgres: storeData()
    VetsAPI->>VA: sendNotification()
    VA-->>User: Send SMS/Email with referral link

    Note over User: User clicks link in SMS/Email
    User->>Frontend: Open appointments page
    Frontend->>VetsAPI: getReferralData()
    VetsAPI->>Postgres: Fetch referral data
    Postgres-->>VetsAPI: Return referral data
    VetsAPI-->>Frontend: Return referral data
    Frontend->>Frontend: Store referral data in Redux
    Frontend->>VetsAPI: checkEPSAppointments()
    VetsAPI->>EPS: Check for EPS appointments
    EPS-->>VetsAPI: Return EPS appointments
    VetsAPI-->>Frontend: Return EPS appointments
    Frontend->>Frontend: Combine EPS appointments with existing appointments in Redux

    Note over User: Starting appointment process page
    Frontend->>Frontend: getReferralData() from Redux
    Frontend-->>User: Display referral data

    Note over User: Schedule your appointment page
    User->>Frontend: View provider availability
    Frontend->>VetsAPI: getProviderAvailability()
    VetsAPI->>EPS: Fetch provider availability
    EPS-->>VetsAPI: Return provider availability
    VetsAPI-->>Frontend: Return provider availability
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

### Nightly Job
1. `getExternalReferralData()`: Pulls referral data from Palantir for the next 3 months.
2. `parseConsultIntoReferral()`: Vets API parses consult data into a referral object.
3. `checkReferralData()`: Ensures referrals are not expired and don't exist in the Postgres DB.
4. `encryptReferralData()`: Encrypts referral data using the vets-api encryption library.
5. `storeData()`: Stores encrypted data in Vets API Postgres DB.
6. `sendNotification()`: Sends notification to user via VA Notify (SMS or email) with a referral link.

### User Workflow
1. User receives SMS/Email with referral link and clicks it.
2. User is directed to login and authenticate.
3. After authentication, user is redirected to the referral page.
4. Frontend retrieves referral data from Vets API and stores it in Redux.
5. Frontend checks for EPS appointments and combines them with existing appointments in Redux.

## Data Retention Policy

### Two-tier Approach

#### First Pass (Initial Release)
- Store referral data from Palantir until the appointment exists in vista-api-x.
- Daily checks for appointment existence in Vista.
- Additional check when user views appointments.
- Remove referral data once the appointment is verified in Vista.
- Verification involves matching patientICN, provider, and other data between EPS and Vista.

#### Second Tier (Future Implementation)
- Utilize HSRM to provide referralID.
- Remove need to store referral information after user makes an appointment.
- Use HSRM (via VAOS) to pull referral data and associated appointments from EPS or other systems.

#### Addendum
- Delete referrals after the expiration date (ReferralToDate).
- Perform deletion during the daily scan for new referrals.

## Security Considerations
- Referral data encrypted using the existing vets-api encryption library.
- Referral link in notifications contains an encrypted referralID.
- Full authentication required before accessing referral information.

## Integration Points
1. Palantir: Source of referral data
2. VA Notify: For sending notifications to veterans
3. EPS (External Provider Services): For appointment management
4. Vista: For verifying appointment creation and syncing

## Performance Considerations
- The nightly job is not time-critical and can run for a couple of hours if needed.
- Daily scans for appointment verification and referral expiration.

## Accessibility
- The frontend interface will comply with existing VA accessibility standards.
- No additional accessibility requirements specific to this project.

## Open Questions and Future Considerations
1. What metrics should be tracked to measure the system's effectiveness and user satisfaction?
