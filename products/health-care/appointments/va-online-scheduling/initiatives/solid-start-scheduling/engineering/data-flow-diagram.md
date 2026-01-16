# Context Diagram (Level 0)
```mermaid
flowchart LR
    User["User"] -- "Identity / Lookup Data - Last Name, DOB, UUID" --> Process(("Schedule Appointment System"))
    Process -- Scheduling Request --> VASS["VASS Scheduling API - External System"]
    VASS -- "Scheduling Data - User Info, Topics, Slots, Booked Appointment" --> Process
    Process -- Scheduling Response / Next Steps --> User


```
# Level 1 DFD — Scheduling
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
# Level 1 DFD — Cancellation
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

# Level 2 DFD - OTP
```mermaid
flowchart LR
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

