# Data flow diagram
```mermaid
flowchart LR
    Veteran[Veteran] -->|Last Name, DOB| Frontend[va.gov Frontend]
    Frontend -->|UUID, Last Name, DOB| VetsAPI[vets-api]
    VetsAPI -->|Validate UUID| VASSAPI[VASS API]
    VASSAPI <-->|User data| Dynamics[MS Dynamics DB]
    VASSAPI -->|User data| VetsAPI
    VetsAPI -->|Store hashed OTP| Redis[Redis Cache]
    VetsAPI -->|Send OTP| VANotify[VA Notify]
    VANotify -->|Email OTP| Veteran
    
    Veteran -->|Enter OTP| Frontend
    Frontend -->|OTP + UUID| VetsAPI
    VetsAPI -->|Verify OTP| Redis
    VetsAPI -->|Issue JWT| Frontend
    
    Frontend -->|JWT + Get slots| VetsAPI
    VetsAPI -->|Get availability| VASSAPI
    VASSAPI -->|Slots| VetsAPI
    VetsAPI -->|Slots| Frontend
    
    Frontend -->|JWT + Book appt| VetsAPI
    VetsAPI -->|Save appt| VASSAPI
    VASSAPI -->|Store appt| Dynamics
    Dynamics -->|Trigger email| VANotify
    VANotify -->|Confirmation| Veteran
    VASSAPI -->|Appt info| VetsAPI
    VetsAPI -->|Appt info| Frontend
```
