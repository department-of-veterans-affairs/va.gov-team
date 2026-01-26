# Data Flow Diagrams
## Context Diagram (Level 0)
```mermaid
flowchart LR
    User["User"] -- "Identity / Lookup Data - Last Name, DOB, UUID" --> Process(("Schedule Appointment System"))
    Process -- Scheduling Request --> VASS["VASS Scheduling API - External System"]
    VASS -- "Scheduling Data - User Info, Topics, Slots, Booked Appointment" --> Process
    Process -- Scheduling Response / Next Steps --> User
```
<details>
    <summary>PNG</summary>
    <img width="5677" height="1400" alt="level-0-Flow-2026-01-16-182715" src="https://github.com/user-attachments/assets/df27cb71-b5f1-4b78-b871-cd44c62248bb" />
</details>

## Level 1 DFD — Scheduling
```mermaid
flowchart RL
 subgraph Scheduling_System["Schedule Appointment System"]
        P1["Verify User & Retrieve Scheduling Data"]
        P2["Select & Confirm Appointment"]
  end
    User["User"] -- Identity Data<br>(Last Name, DOB, UUID) --> P1
    P1 -- Scheduling Request --> VASS["VASS Scheduling API<br>(External)"]
    VASS -- Scheduling Data<br>(User Info, Topics, Slots) --> P1
    P1 -- Available slots and topics --> User
    User -- Selected Slot --> P2
    P2 -- Booking Request --> VASS
    VASS -- Booked Appointment Details --> P2
    P2 -- Scheduling Status / Next Steps --> User
```
<details>
    <summary>PNG</summary>
    <img width="4328" height="2480" alt="level1-scheduling-Flow-2026-01-16-182704" src="https://github.com/user-attachments/assets/b0cc6291-9143-40ed-a242-407f509d8fef" />
</details>

## Level 1 DFD — Cancellation
```mermaid
flowchart LR
    User["User"]
    VASS["VASS Scheduling API<br/>(External)"]

    subgraph Cancellation_System["Cancel Appointment System"]
        P1["Verify User & Retrieve Appointment"]
        P2["Confirm Cancellation"]
    end

    User -->|"Identity Data<br/>(Last Name, DOB, UUID)"| P1
    P1 -->|"Appointment Lookup Request"| VASS
    VASS -->|"Booked Appointment Details"| P1
    P1 -->|"Appointment Details"| User

    User -->|"Cancellation Confirmation"| P2
    P2 -->|"Cancellation Request"| VASS
    VASS -->|"Cancellation Result"| P2
    P2 -->|"Cancellation Status / Next Steps"| User
```
<details>
    <summary>PNG</summary>
    <img width="4428" height="2165" alt="level1-cancellation-Flow-2026-01-16-182620" src="https://github.com/user-attachments/assets/f1610643-88de-484f-9102-e4a52ef59808" />
</details>

## Level 2 DFD - OTP
```mermaid
flowchart RL
 subgraph OTP_Verification["Verify User (OTP Flow)"]
        P1["Generate OTP"]
        P2["Send OTP Notification"]
        P3["Validate OTP"]
  end
    User["User"] -- Identity Data --> P1
    P1 -- OTP + Correlation ID --> Redis[("Redis Store")]
    P1 -- OTP Payload --> P2
    P2 -- OTP Email --> Email["Email Service<br>(VANotify)"]
    User -- Submitted OTP --> P3
    P3 -- OTP Lookup --> Redis
    Redis -- OTP Record --> P3
    P3 -- Verification Result --> User
```
<details>
    <summary>PNG</summary>
    <img width="5835" height="1422" alt="OTP-Flow-2026-01-16-181337" src="https://github.com/user-attachments/assets/a9458050-5396-44be-8479-7ebbe35674b1" />
</details>


---

## Data Collection and Usage

### Data Categories

#### Personal Identifiable Information (PII)
| Data Element | Purpose | Source | Storage Location |
|--------------|---------|--------|------------------|
| Last Name | Identity verification | User input | VASS Backend (permanent) |
| Date of Birth (DOB) | Identity verification | User input | VASS Backend (permanent) |
| Email Address | OTP delivery, notifications | VASS Backend | VASS Backend, VANotify (transient) |
| EDIPI | Veteran identification | VASS Backend | VASS Backend, Redis (1 hour) |

#### Authentication Data
| Data Element | Purpose | Storage | TTL |
|--------------|---------|---------|-----|
| One-Time Passcode (OTP) | Authentication | Redis (hashed temporary) | 10 minutes |
| OAuth Access Token | VASS API authorization | Redis (hashed temporary) | 1 hour |
| JWT Token | vets-api session | Not stored | 1 hour |

#### Application Data
| Data Element | Purpose | Storage | Persistence |
|--------------|---------|---------|-------------|
| UUID | Session identifier, user lookup | Redis, VASS Backend, datadog(logging) | 1 hour |
| appointment_id | Booking reference | Redis (1 hour), VASS Backend | Permanent |
| Appointment slots | Availability data | VASS Backend | Dynamic |
| Topics/Skills | Scheduling categories | VASS Backend | Configuration data |

#### Rate Limiting & Security Data
| Data Element | Purpose | Storage | TTL |
|--------------|---------|---------|-----|
| OTP generation attempts | Rate limiting | Redis | 15 minutes |
| OTP validation attempts | Brute-force prevention | Redis | Session-based |
| Account lockout status | Security enforcement | Redis | 15 minutes |


