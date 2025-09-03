### First touch point (OTC)

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
    V->>S: Check encoded EDIPI in VASS-API(this is a new endpoint)

    S-->>V: Exists? (Yes -> return user information with IDIPI, No -> return error)

    V->>V: Check lastname and dob match user information (Yes -> continue) 
    V->>V: Generate one-time code (OTC) for EDIPI
    V->>N: Send email and templateId
    N-->>U: Send OTC email with VANotify

    U->>F: Enter OTC
    F->>V: POST OTC and EDIPI
    V->>V: Validate OTC against the one in redis
    V-->>F: Return EDIPI if valid
    F-->>U: Route user to scheduling appointment

    U->>F: Select appointment
    F->>V: Submit appointment with EDIPI
    V->>S: passthrough appointment with EDIPI
    S-->>V: Appointment confirmed
    V->>N: Send email address and confirmed templateId
    N-->>U: Send confirmation email(with link to cancel)
    V-->>F: Appointment confirmed
    F-->>U: Display Confirmation message
```
