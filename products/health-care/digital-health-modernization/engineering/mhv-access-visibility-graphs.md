# How MHV on VA.gov manages access to and visibility of tools

This is an attempt to diagram whether various pages/tools/apps under `/my-health/` are viewable or not, or if some features/sections are viewable or now.

## MHV Landing Page

Rules that can affect if a veteran can see all or some parts of this tool.

```mermaid
graph TD

MHVLanding.AccessQ[Can I access the MHV Landing Page?]
MHVLanding.LoggedInQ[Are you logged in?]
MHVLanding.AuthReq[You must be logged in <br>to view this page]
MHVLanding.Viewable[You can see the landing page]
MHVLanding.MessagesDotQ[Will I see the unread <br>messages indicator?]
MHVLanding.ToolLinksQ[Will I see links to <br>MHV tools?]
MHVLanding.FacilitiesQ[Have you been seen at a facility or registered with one?]
MHVLanding.IdVerifiedQ[Is your account ID-verified?]
MHVLanding.ShowUnverified[You will see a <i>Not verified</i> alert. <br>Links to MHV tools will be hidden.]
MHVLanding.ShowUnregistered[You will see an <i>Unregistered</i> alert. <br>Links to MHV tools will be hidden.]
MHVLanding.ToolLinksVisible[Links to MHV tools <br>will be visible]

MHVLanding.AccessQ -.-> MHVLanding.LoggedInQ
MHVLanding.LoggedInQ -->|No| MHVLanding.AuthReq
MHVLanding.LoggedInQ -->|Yes| MHVLanding.Viewable
MHVLanding.Viewable -.- MHVLanding.MessagesDotQ
MHVLanding.Viewable -.- MHVLanding.ToolLinksQ
MHVLanding.ToolLinksQ --> MHVLanding.IdVerifiedQ
MHVLanding.IdVerifiedQ -->|No| MHVLanding.ShowUnverified
MHVLanding.IdVerifiedQ -->|Yes| MHVLanding.FacilitiesQ
MHVLanding.FacilitiesQ -->|No| MHVLanding.ShowUnregistered
MHVLanding.FacilitiesQ -->|Yes| MHVLanding.ToolLinksVisible
```

## Medications

WIP 

```mermaid
graph TD

Meds.Access[Can I access the Medications tool?]
Meds.LoggedIn[Are you logged in?]
Meds.AuthReq[You must be logged in <br>to view this page]

Meds.Access --> Meds.LoggedIn
Meds.LoggedIn -->|No| Meds.AuthReq
```


## Appointmen

WIP

```mermaid
graph TD

Appts.Access[Can I access the Appointments tool?]
Appts.LoggedIn[Are you logged in?]
Appts.AuthReq[You must be logged in <br>to view this page]

Appts.Access --> Appts.LoggedIn
Appts.LoggedIn -->|No| Appts.AuthReq
```
