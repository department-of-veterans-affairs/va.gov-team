The basic sequence for most BTSSS is straightforward:

```mermaid
sequenceDiagram
autonumber
actor veteran as Veteran
box VA.gov
participant vets-website
participant vets-api
end
participant travel-pay-api as Travel Pay API


veteran->>vets-website: Navigate to travel pay

Note over vets-website, vets-api: Assumes Veteran is authenticated via the Sign-in Service (SiS)

activate vets-website

vets-website->>vets-api: vets-api endpoints (/claims, /appointments, etc.)
vets-api->>travel-pay-api: travel-pay endpoints (/claims, /appointments, etc.)

travel-pay-api-->>vets-api: claims and appoinments data response(s)
vets-api-->>vets-website: vets-api response(s)

vets-website-->>veteran: website UX

deactivate vets-website
```

What's to be determined is how we deal with any profile information updates. According to the BTSSS team, when a veteran first logs in to the portal, their contact information "is dependent on their data in enrollment services." Any contact updates from that point onward appear to be isolated within the dynamics database used by the portal.

Since we'll have users coming from VA.gov with their information coming from their VA.gov profile/VA Profile, we'll need to account for any discrepancies between the two and update accordingly, with the VA.gov information being the source of truth.
