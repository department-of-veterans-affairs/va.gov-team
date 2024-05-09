# How MHV on VA.gov manages access to and visibility of tools

This is an attempt to diagram whether various pages/tools/apps under `/my-health/` are viewable or not, or if some features/sections are viewable or now.

## General Notes/Context

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
MHVLanding.LinkedMHVIdQ[Do you have an MHV ID linked <br>to your account?]
MHVLanding.ShowUnverified[You will see a <i>Not verified</i> alert. <br>Links to MHV tools will be hidden.]
MHVLanding.ShowUnregistered[You will see an <i>Unregistered</i> alert. <br>Links to MHV tools will be hidden.]
MHVLanding.ToolLinksVisible[Links to MHV tools <br>will be visible]
MHVLanding.MessagesDotUnavailable[You will not see the unread messages indicator because <br>an MHV id is not available to fetch data from MHV]
MHVLanding.MessagesDotAvailable[You may see the unread messages indicator if <br>a call to the MHV API indicates you have unread messages]

MHVLanding.AccessQ -.-> MHVLanding.LoggedInQ
MHVLanding.LoggedInQ -->|No| MHVLanding.AuthReq
MHVLanding.LoggedInQ -->|Yes| MHVLanding.Viewable
MHVLanding.Viewable -.- MHVLanding.ToolLinksQ
MHVLanding.ToolLinksQ --> MHVLanding.IdVerifiedQ
MHVLanding.IdVerifiedQ -->|No| MHVLanding.ShowUnverified
MHVLanding.IdVerifiedQ -->|Yes| MHVLanding.FacilitiesQ
MHVLanding.FacilitiesQ -->|No| MHVLanding.ShowUnregistered
MHVLanding.FacilitiesQ -->|Yes| MHVLanding.ToolLinksVisible
MHVLanding.ToolLinksVisible -.- MHVLanding.MessagesDotQ
MHVLanding.MessagesDotQ --> MHVLanding.LinkedMHVIdQ
MHVLanding.LinkedMHVIdQ --> |No| MHVLanding.MessagesDotUnavailable
MHVLanding.LinkedMHVIdQ --> |Yes| MHVLanding.MessagesDotAvailable
```

### Notes

- The facilities check was the original test of whether someone may have used medical services through the VA.
- The unread messages indicator looks at `mhvAccountState`, an indicator of whether the user has an active MHV identfier linked to their login/profile
  - An MHV identifier used to be tied to an MHV login, but work has been undertaken to decouple the MHV id from and MHV login

## Medications

WIP: While mapping this out, I didn't find a check for an active MHV identifier

```mermaid
graph TD

Meds.AccessQ[Can I access the Medications tool?]
Meds.LoggedInQ[Are you logged in?]
Meds.ReleaseToggleQ[Is the <i>release</i> toggle on?]
Meds.AboutPage[You will see the <i>About</i> page]
Meds.AuthReq[You must be logged in <br>to view this page]
Meds.DowntimeQ[Is there an active <br>downtime #quot;maintenance window#quot;?]
Meds.ShowDowntime[You will see an alert that <br>the tool is undergoing maintenance]
Meds.AccessAllowed[You will be able to see <br>pages within the tool]
Meds.SeePrescriptionsQ[Will I see a list of prescriptions and/or allergies on the main page?]
Meds.EmptyPrescriptionsAlert[You will see a message:<br> #quot;You don’t have any VA prescriptions or medication records#quot;]
Meds.HavePrescriptionsQ[Do you have prescriptions through the VA?]
Meds.ShowPrescriptions[You should see a list of your <br>medications and allergies, if any are recorded in MHV systems]
Meds.LinkedMHVIdQ[Do you have an MHV ID linked <br>to your account?]

Meds.AccessQ -.-> Meds.ReleaseToggleQ
Meds.ReleaseToggleQ -->|No| Meds.AboutPage
Meds.ReleaseToggleQ -->|Yes| Meds.LoggedInQ 
Meds.LoggedInQ -->|No| Meds.AuthReq
Meds.LoggedInQ -->|Yes| Meds.DowntimeQ
Meds.DowntimeQ --> |Yes| Meds.ShowDowntime
Meds.DowntimeQ --> |No| Meds.AccessAllowed
Meds.AccessAllowed -.- Meds.SeePrescriptionsQ
Meds.SeePrescriptionsQ --> Meds.LinkedMHVIdQ
Meds.LinkedMHVIdQ --> |No| Meds.EmptyPrescriptionsAlert
Meds.LinkedMHVIdQ --> |Yes| Meds.HavePrescriptionsQ
Meds.HavePrescriptionsQ --> |No| Meds.EmptyPrescriptionsAlert
Meds.HavePrescriptionsQ --> |Yes| Meds.ShowPrescriptions
```

### Notes 

- Much of the access logic lives in `src/applications/mhv/medications/containers/App.jsx`
- `isAuthenticatedWithSSOe` is called in a few places. The app's `Alert` component accepts an `ssoe` prop, but doesn't use it currently
- Calls to MHV API appear to be made regardless of `mhvAccountState`
    
## Appointments

WIP

```mermaid
graph TD

Appts.Access[Can I access the Appointments tool?]
Appts.LoggedIn[Are you logged in?]
Appts.AuthReq[You must be logged in <br>to view this page]

Appts.Access --> Appts.LoggedIn
Appts.LoggedIn -->|No| Appts.AuthReq
```

## Technical Details

- [Search for `mhvAccountState`](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-website%20mhvAccountState&type=code) in `vets-website` frontend
- [Definition of `mhv_account_state`](https://github.com/department-of-veterans-affairs/vets-api/blob/ccafd3850e16a303874b0159150622fdbd5cff18/app/models/user.rb#L245-L251) in `vets-api` backend. In short, does the user have one or more active mhv ids in the MPI profile?
