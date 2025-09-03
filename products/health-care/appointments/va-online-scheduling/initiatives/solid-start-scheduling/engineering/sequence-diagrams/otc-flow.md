### First touch point (OTC)

VASS sends email to form with EDIPI encoded in URL 

``` mermaid
sequenceDiagram
    participant E as Email Service
    participant U as User
    participant F as VASS Application(vets-website)
    participant V as vets-api
    
    participant N as VANotify
    participant S as VASS-API
    
    E->>U: VASS sends email with EDIPI encoded URL
    U->>F: Enter Lastname DOB(something to match up with EDIPI)
    F->>V: Send lastname + DOB + encoded EDIPI
    V->>S: Check encoded EDIPI in VASS-API

    S-->>V: Exists? (Yes -> return user information, No -> return error)

    V->>V: Check lastname and dob match user information (Yes -> continue) 
    V->>V: Generate one-time code (OTC) for EDIPI
    V->>N: Send user information email
    N-->>U: Send OTC (email) with VANotify

    U->>F: Enter OTC
    F->>V: Verify OTC
    V-->>F: Return EDIPI if valid

    U->>F: Select appointment
    F->>V: Submit appointment with EDIPI
    V->>S: Submit appointment with EDIPI
    S-->>V: Appointment confirmed
    V-->>F: Appointment confirmed
    F-->>U: Confirmation message
```
