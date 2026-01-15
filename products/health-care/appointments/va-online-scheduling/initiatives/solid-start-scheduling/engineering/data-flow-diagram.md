# Context Diagram (Level 0)
```mermaid
flowchart LR
    User[User (Browser)]
    VASSAPI[VASS API<br/>(External Service)]
    VANotify[VA Notify<br/>(VA Infra)]

    System[VASS Scheduling Experience]

    User -->|Requests, Identity Data| System
    System -->|Availability, Confirmations| User

    System -->|Scheduling, Cancellation Requests| VASSAPI
    VASSAPI -->|Availability, Appointment Data| System

    System -->|Email Requests| VANotify
    VANotify -->|Emails (OTC, Confirmation)| User

```


# Level 1 DFD — Scheduling
```mermaid
flowchart LR
    %% External Entities
    User[User (Browser)]
    VASSAPI[VASS API]
    VANotify[VA Notify]

    %% Processes
    P1[Verify Identity & OTC]
    P2[Request Availability]
    P3[Submit Appointment]

    %% Data Stores (Internal)
    D1[(Invitation / Veteran Data)]
    D2[(OTC Store)]

    %% Identity Verification
    User -->|Last Name, DOB, UUID| P1
    P1 --> D1
    P1 --> D2
    P1 -->|OTC Email Request| VANotify
    VANotify -->|OTC Email| User
    User -->|Entered OTC| P1

    %% Availability
    User -->|Availability Request| P2
    P2 -->|Availability Query| VASSAPI
    VASSAPI -->|Available Slots| P2
    P2 -->|Available Slots| User

    %% Create Appointment
    User -->|Selected Slot, Agent Skills| P3
    P3 -->|Create Appointment| VASSAPI
    P3 -->|Confirmation Email Request| VANotify
    VANotify -->|Confirmation Email| User

```
# Level 1 DFD — Cancellation
```mermaid
flowchart LR
    %% External Entities
    User[User (Browser)]
    VASSAPI[VASS API]
    VANotify[VA Notify]

    %% Processes
    P1[Verify Identity & OTC]
    P4[Retrieve Appointment Details]
    P5[Cancel Appointment]

    %% Data Stores
    D2[(OTC Store)]

    %% Identity Verification
    User -->|Last Name, DOB, UUID| P1
    P1 --> D2
    User -->|Entered OTC| P1

    %% Retrieve Appointment
    User -->|View Appointment Request| P4
    P4 -->|Get Appointment Details| VASSAPI
    VASSAPI -->|Appointment Details| P4
    P4 -->|Appointment Details| User

    %% Cancel Appointment
    User -->|Cancel Request| P5
    P5 -->|Cancel Appointment| VASSAPI
    P5 -->|Cancellation Email Request| VANotify
    VANotify -->|Cancellation Confirmation Email| User

```
# Level 1 DFD - OTP
```
flowchart LR
    %% External Entities
    User[User (Browser)]
    VASSAPI[VASS API]
    VANotify[VA Notify]

    %% Process
    P1[Verify Identity & OTP]

    %% Data Stores
    D1[(Invitation / Veteran Data)]
    D2[(OTP Store)]

    %% Request OTP
    User -->|Last Name, DOB, UUID| P1
    P1 -->|Validate UUID| VASSAPI
    VASSAPI -->|Veteran / Invitation Data| P1
    P1 -->|Generated OTC| D2
    P1 -->|OTP Email Request| VANotify
    VANotify -->|OTP Email| User

    %% Validate OTP
    User -->|Entered OTP| P1
    P1 -->|OTP Lookup| D2

```
