# How MHV on VA.gov manages access to and visibility of tools

This is an attempt to diagram whether various pages/tools/apps under `/my-health/` are viewable or not, or if some features/sections are viewable or now.

## Notes/Context

- "ID-verified" relates to the Level of Assurance (LOA) for that account. LOA3 indicates a user's account is verified/proved by identification
- The presence of one of more facilities in a person's account can indicate if that person has health benefits or has been seen at a VA facility
- In certain situations, non-veterans may be seen at VA health facilities, e.g. when that is the closest medical center in an emergency
- The MHV API currently requires an MHV account identifier to be able to look up a person's data in MHV systems. This identifier may exist regardlesss of how a person logs in.

## MHV Landing Page

Rules that can affect if a veteran can see all or some parts of the MHV-on-VA.gov landing page.

```mermaid
graph TD

MHVLanding.AccessQ[Can I access the MHV Landing Page?]
MHVLanding.LoggedInQ[Are you logged in?]
MHVLanding.AuthReq[You must be logged in <br>to view this page]
MHVLanding.Viewable[You can see the landing page]
MHVLanding.MessagesDotQ[Will I see the unread <br>messages indicator?]
MHVLanding.ToolLinksQ[Will I see links to <br>MHV tools?]
MHVLanding.FacilitiesQ[Have you been seen at <br>a facility or registered with one?]
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

Meds.AccessQ[Can I access the Medications tool?]
Meds.LoggedInQ[Are you logged in?]
Meds.ReleaseToggleQ[Is the <i>release</i> toggle on?]
Meds.AboutPage[You will see the <i>About</i> page]
Meds.AuthReq[You must be logged in <br>to view this page]
Meds.AcessAllowed[You will be able to see the primary medicaitons page]

Meds.AccessQ --> Meds.ReleaseToggleQ
Meds.ReleaseToggleQ -->|No| Meds.AboutPage
Meds.ReleaseToggleQ -->|Yes| Meds.LoggedInQ 
Meds.LoggedInQ -->|No| Meds.AuthReq
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
