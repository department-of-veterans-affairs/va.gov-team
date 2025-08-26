# LoROTA Idea

## Questions

- How long does the link need to live? Ever short code makes a new one?
  - LoROTA works for short lived (days) url
  - Could use `text "schedule" to get a link approach`
- If veteran is fully authenticated what do they see after login where is the link to VASS services?
  - THis could be solved on the appointments page

## Pros

- Low barrier to entry to get Veterans into a signed in state
  - full auth is hurdle with fully verified
- could be fully short code enabled flow

## Cons

- urls are short lived
  - extra complexities of making sure the Veteran always has a the a working link
- not fully authenticated so the urls could expire and leave the Vetaran without knowledge

## Diagrams

### First touch point

``` mermaid
sequenceDiagram

    actor Veteran
    Veteran ->> SMSService: Texts short code    
    SMSService ->> Dynamics: Pulls data via phone number { number, edipi, last name, dob }
    SMSService ->> LoROTA: Creates unique entry
    LoROTA ->> SMSService: Returns GUID
    Note over SMSService: Creates shortenURL
    SMSService ->> Veteran: Sends Text with shortened URL
    Veteran ->> va-gov: loads VASS Low-auth app
    Note over va-gov: authenicates with last name and date of birth
    va-gov ->> LoROTA: loads initial data of { edipi } 
    Note over va-gov: loads "Schedule Appointment" Page
    va-gov->>VASS API: queries POST /GetAppointments
    VASS API->>va-gov: Returns {veteran data, current appointments}
    Note over va-gov: Store veteran data in session
    va-gov->>VASS API: query POST /AppointmentAvailability
    VASS API->>va-gov: returns {timeslots, skills}
    Note over va-gov: Show Scheduling Page
    Veteran-->>va-gov: Selects desired date
    Note over va-gov: Show Review Page
    Veteran-->>va-gov: Confirms Review
    va-gov->>VASS API: queries POST /SaveAppointment
    VASS API->>va-gov: returns { ok | can't confirm, appointment details }
    Note over va-gov: displays confirmation page

```

### Alternate approach
``` mermaid
sequenceDiagram
    participant U as User
    participant F as Scheduling Form(vets-website)
    participant V as vets-api
    
    participant M as MPI
    participant N as VANotify
    participant D as VASS-API
    

    U->>F: Enter SSN + DOB
    F->>V: Send SSN + DOB
    V->>M: Lookup in MPI
    M-->>V: Return ICN + EDIPI (if match)
    V->>D: Check EDIPI in VASS-API

    D-->>V: Exists? (Yes → return user information, No → stop)

    V->>V: Generate one-time code (OTC) for EDIPI
    V->>N: Send user information email/phone
    N-->>U: Send OTC (SMS/email) with VANotify

    U->>F: Enter OTC
    F->>V: Verify OTC
    V-->>F: Return EDIPI if valid

    U->>F: Select appointment
    F->>V: Submit appointment with EDIPI
    V->>D: Submit appointment with EDIPI
    D-->>V: Appointment confirmed
    V-->>F: Appointment confirmed
    F-->>U: Confirmation message
```
