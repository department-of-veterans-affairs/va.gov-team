### First touch point (OTC)

``` mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as VASS Application (vets-website)
    participant V as vets-api
    participant S as VASS-API
    participant N as VANotify
    participant E as Email Service

    %% Step 1: Email Invitation
    E->>U: Email with scheduling link (UUID)

    %% Step 2: User validates identity
    U->>F: Opens link, enters Lastname + DOB
    F->>V: Sends Lastname + DOB + UUID
    V->>S: Validate UUID in VASS-API
    S-->>V: Return user info (EDIPI) or error
    V->>V: Check Lastname + DOB match
    V->>V: Generate One-Time Code (OTC)
    V->>N: Send OTC email (templateId)
    N-->>U: OTC email sent

    %% Step 3: User enters OTC
    U->>F: Enters OTC
    F->>V: Validate OTC
    V->>V: Check OTC in Redis
    V-->>F: Return EDIPI if valid
    F-->>U: Proceed to scheduling page

    %% Step 4: Scheduling Flow
    F->>V: Request agent skills
    V->>S: Get agent skills
    S-->>V: Return agent skills
    V-->>F: Return agent skills
    U->>F: Select skills

    F->>V: Request appointment availability
    V->>S: Get availability
    S-->>V: Return availability
    V-->>F: Return availability
    U->>F: Select time slot

    %% Step 5: Confirm Appointment
    F->>V: Submit appointment (EDIPI)
    V->>S: Save appointment
    S-->>V: Appointment confirmed
    V->>N: Send confirmation email (templateId)
    N-->>U: Confirmation email with cancel link
    V-->>F: Appointment confirmed
    F-->>U: Show confirmation message

```
## Cancellation
``` mermaid
    participant U as User (Browser)
    participant F as VASS Application (vets-website)
    participant V as vets-api
    participant S as VASS-API
    participant N as VANotify
    participant E as Email Service

    %% Step 1: Confirmation Email
    E->>U: Confirmation with cancel link (UUID)

    %% Step 2: User validates identity
    U->>F: Opens link, enters Lastname + DOB
    F->>V: Sends Lastname + DOB + UUID
    V->>S: Validate UUID in VASS-API
    S-->>V: Return user info (EDIPI) or error
    V->>V: Check Lastname + DOB match
    V->>V: Generate One-Time Code (OTC)
    V->>N: Send OTC email (templateId)
    N-->>U: OTC email sent

    %% Step 3: User enters OTC
    U->>F: Enters OTC
    F->>V: Validate OTC
    V->>V: Check OTC in Redis
    V-->>F: Return EDIPI if valid
    F-->>U: Proceed to cancellation page

    %% Step 4: Cancellation Flow
    F->>V: Request appointment details
    V->>S: Get appointment details
    S-->>V: Return appointment details
    V-->>F: Return appointment details
    U->>F: Click cancel button

    %% Step 5: Confirm Cancelled Appointment
    F->>V: Submit appointment id appointment with (EDIPI)
    V->>S: Cancel appointment
    S-->>V: Appointment cancellation confirmed
    V->>N: Send confirmation email (templateId)
    N-->>U: Confirmation email with cancelled appointment info and link to reschedule
    V-->>F: Appointment cancellation confirmed

    %% Step 5: If cancel is successful request appointment details again
    F->>V: Request appointment details
    V->>S: Get appointment details
    S-->>V: Return appointment details
    V-->>F: Return appointment details 
    F-->>U: Show appointment details with cancelled message
```
