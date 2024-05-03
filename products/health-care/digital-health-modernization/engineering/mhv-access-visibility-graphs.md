# How MHV on VA.gov manages access to and visibility of tools

```mermaid
graph TD

MHVLanding.Access[Can I access the MHV Landing Page?]
MHVLanding.LoggedIn[Are you logged in?]
MHVLanding.AuthReq[You must be logged in <br>to view this page]
MHVLanding.Viewable[You can see this page/tool]
MHVLanding.MessagesDot[Will I see the unread messages indicator?]
MHVLanding.ShowToolLinks?[Will I see links to MHV tools?]
MHVLanding.ShowUnverified?["`Will I see a _Not verified_ alert?`"]
MHVLanding.ShowUnregistered?["`Will I see an _Unregistered_ alert?`"]
MHVLanding.isLOA1[Is your account LOA1?]
MHVLanding.isUnverified["`You will see a _Not verified_ alert`"]

MHVLanding.Access --> MHVLanding.LoggedIn
MHVLanding.LoggedIn -->|No| MHVLanding.AuthReq
MHVLanding.LoggedIn -->|Yes| MHVLanding.Viewable
MHVLanding.Viewable -.- MHVLanding.MessagesDot
MHVLanding.Viewable -.- MHVLanding.ShowUnverified
MHVLanding.Viewable -.- MHVLanding.ShowToolLinks
MHVLanding.ShowToolLinks --> MHVLanding.isLOA1
MHVLanding.ShowUnverified --> MHVLanding.isLOA1
MHVLanding.isLOA1 -->|Yes| MHVLanding.isUnverified
MHVLanding.isLOA1 -->|No| MHVLanding.isUnverified
```

```mermaid
graph TD

Meds.Access[Can I access the Medications tool?]
Meds.LoggedIn[Are you logged in?]
Meds.AuthReq[You must be logged in <br>to view this page]
Meds.Viewable[You can see this page/tool]

Meds.Access --> Meds.LoggedIn
Meds.LoggedIn -->|No| Meds.AuthReq
Meds.AuthReq -->|Yes| Meds.Viewable
```


```mermaid
graph TD

Appts.Access[Can I access the Appointments tool?]
Appts.LoggedIn[Are you logged in?]
Appts.AuthReq[You must be logged in <br>to view this page]
Appts.Viewable[You can see this page/tool]

Appts.Access --> Appts.LoggedIn
Appts.LoggedIn -->|No| Appts.AuthReq
Appts.AuthReq -->|Yes| Appts.Viewable
```
