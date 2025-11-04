### First touch point (OTC)

``` mermaid
sequenceDiagram
    participant user as User (Browser)
    participant vetsWebsite as VASS Frontend (vets-website)
    participant vetsApi as vets-api
    participant vassBackend as VASS Backend (API + Email)
    participant vaNotify as VANotify

    %% Step 1: Email Invitation
    vassBackend->>vaNotify: Queues email invitation with (UUID, cohortId)
    vaNotify-->>user: sends invitation email with scheduling link 

    %% Step 2: User validates identity
    user->>vetsWebsite: Opens link, enters last name + date of birth
    Note over user,vassBackend: One-Time Code (OTC) verification flow
    vetsWebsite-->>user: Redirect to scheduling page

    %% Step 3: View available times
    vetsWebsite->>vetsApi: Request appointment availability
    vetsApi->>vassBackend: Fetch available times
    vassBackend-->>vetsApi: Return availability data
    vetsApi-->>vetsWebsite: Return availability
    user->>vetsWebsite: Select preferred time slot

    %% Step 4: Agent skills
    vetsWebsite->>vetsApi: Request agent skills
    vetsApi->>vassBackend: Fetch agent skills
    vassBackend-->>vetsApi: Return agent skills
    vetsApi-->>vetsWebsite: Return agent skills
    user->>vetsWebsite: Select agent skills
    vetsWebsite->>vetsWebsite: Display review page

    %% Step 5: Confirm appointment
    user->>vetsWebsite: Submits appointment (EDIPI)
    vetsWebsite->>vetsApi: Submit appointment request (EDIPI)
    vetsApi->>vassBackend: Save appointment to VASS
    vassBackend->>vaNotify: Triggers confirmation email
    vaNotify-->>user: Confirmation email with cancel link
    vaNotify-->>vassBackend: Return success
    vassBackend-->>vetsApi: Appointment confirmed

    vetsApi-->>vetsWebsite: Return appointment confirmation
    vetsWebsite-->>user: Display confirmation message
```
### Cancellation

``` mermaid
sequenceDiagram
    participant user as User (Browser)
    participant vetsWebsite as VASS Frontend (vets-website)
    participant vetsApi as vets-api
    participant vassBackend as VASS Backend (API + Email)
    participant vaNotify as VANotify

    %% Step 1: Confirmation Email
    vassBackend->>user: Sends confirmation email with cancel link (UUID)

    %% Step 2: User validates identity
    user->>vetsWebsite: Opens link, enters last name + date of birth
    Note over user,vassBackend: One-Time Code (OTC) verification flow
    vetsWebsite-->>user: Proceed to cancellation page

    %% Step 3: Retrieve appointment details
    vetsWebsite->>vetsApi: Request appointment details
    vetsApi->>vassBackend: Get appointment details
    vassBackend-->>vetsApi: Return appointment details
    vetsApi-->>vetsWebsite: Return appointment details
    user->>vetsWebsite: Click cancel button

    %% Step 4: Cancel appointment
    vetsWebsite->>vetsApi: Submit cancellation request (EDIPI + appointmentId)
    vetsApi->>vassBackend: Cancel appointment in VASS
    
    vassBackend->>vaNotify: Send cancellation confirmation email
    vaNotify-->>user: Email with cancelled appointment info and reschedule link
    vaNotify-->>vassBackend: Return success
    vassBackend-->>vetsApi: Appointment cancellation confirmed
    vetsApi-->>vetsWebsite: Return cancellation confirmation

    %% Step 5: Refresh appointment details
    vetsWebsite->>vetsApi: Request updated appointment details
    vetsApi->>vassBackend: Get updated appointment details
    vassBackend-->>vetsApi: Return updated appointment details
    vetsApi-->>vetsWebsite: Return updated details
    vetsWebsite-->>user: Show appointment details with cancelled message

```

### One Time Code

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as VASS Application (vets-website)
    participant V as vets-api
    participant S as VASS-API
    participant N as VANotify
    participant E as Email Service
    %% Step 1: request OTC
    F->>V: Sends Lastname + DOB + UUID
    V->>S: Validate UUID in VASS-API
    S-->>V: Return user info (EDIPI) or error
    V->>V: Check Lastname + DOB match
    V->>V: Generate One-Time Code (OTC)
    V->>N: Send OTC email (templateId)
    N-->>U: OTC email sent

    %% Step 2: User enters OTC
    U->>F: Enters OTC
    F->>V: Validate OTC
    V->>V: Check OTC in Redis
    V-->>F: Return EDIPI if valid
```


### Questions:

Are we going to need to send the confirmation emails?
ANSWER: Yes we do


