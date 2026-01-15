# Context Diagram (Level 0)
```mermaid
flowchart LR
    User["User Browser"]
    VASSAPI["VASS API External"]
    VANotify["VA Notify"]

    System["VASS Scheduling Experience"]

    User -->|Requests and identity data| System
    System -->|Availability and confirmations| User

    System -->|Scheduling and cancellation requests| VASSAPI
    VASSAPI -->|Availability and appointment data| System

    System -->|Email requests| VANotify
    VANotify -->|OTC and confirmation emails| User


```


# Level 1 DFD — Scheduling
```mermaid
flowchart LR
    User["User Browser"]
    VASSAPI["VASS API"]
    VANotify["VA Notify"]

    P1["Verify identity and OTC"]
    P2["Request availability"]
    P3["Submit appointment"]

    D1[("Invitation and veteran data")]
    D2[("OTC store")]

    User -->|Last name DOB UUID| P1
    P1 --> D1
    P1 --> D2
    P1 -->|OTC email request| VANotify
    VANotify -->|OTC email| User
    User -->|Entered OTC| P1

    User -->|Availability request| P2
    P2 -->|Availability query| VASSAPI
    VASSAPI -->|Available slots| P2
    P2 -->|Available slots| User

    User -->|Selected slot and skills| P3
    P3 -->|Create appointment| VASSAPI
    P3 -->|Confirmation email request| VANotify
    VANotify -->|Confirmation email| User



```
# Level 1 DFD — Cancellation
```mermaid
flowchart LR
    User["User Browser"]
    VASSAPI["VASS API"]
    VANotify["VA Notify"]

    P1["Verify identity and OTC"]
    P4["Retrieve appointment details"]
    P5["Cancel appointment"]

    D2[("OTC store")]

    User -->|Last name DOB UUID| P1
    P1 --> D2
    User -->|Entered OTC| P1

    User -->|View appointment| P4
    P4 -->|Get appointment details| VASSAPI
    VASSAPI -->|Appointment details| P4
    P4 -->|Appointment details| User

    User -->|Cancel request| P5
    P5 -->|Cancel appointment| VASSAPI
    P5 -->|Cancellation email request| VANotify
    VANotify -->|Cancellation email| User



```
# Level 1 DFD - OTP
```mermaid
flowchart LR
    User["User Browser"]
    VASSAPI["VASS API"]
    VANotify["VA Notify"]

    P1["Verify identity and OTC"]

    D1[("Invitation and veteran data")]
    D2[("OTC store")]

    User -->|Last name DOB UUID| P1
    P1 -->|Validate UUID| VASSAPI
    VASSAPI -->|Veteran data| P1
    P1 -->|Generated OTC| D2
    P1 -->|OTC email request| VANotify
    VANotify -->|OTC email| User

    User -->|Entered OTC| P1
    P1 -->|OTC lookup| D2



```
