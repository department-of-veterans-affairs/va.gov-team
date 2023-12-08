## Full Auth Check In Sequence Diagrams

### Check-in

For apps that rely on fully authenticated veteran session (like VA's flagship mobile app), online check-in has a different user flow than a low-auth (LoROTA) scenario. In a full-auth scenario, currently the list of appointments and their elgibility for online check-in is determined by the app (through VAOS). For appointments that are determined to be eligible for online check-in, a call is made to the vets-api CHIP library to start and complete the check-in, including checking for any demographics data that needs to be updated. The CHIP vets-api library provides a convenient interface of the underlying CHIP functions which interact with VistA to set the statuses. 

```mermaid

sequenceDiagram
    actor vet as Veteran
    participant vam as VA Mobile App
    participant va as vets-api
    participant chip as Chip
    participant vista as vista-api/CW/veText

    vet->>vam: Click check-in for eligible appointment
    vam->>va: GET /appointments/check-in/demographics
    va->>chip: GET /authenticated-demographics
    chip->>vista: Fetch demographic/insurance statuses
    chip->>vista: Fetch demographic data
    vista->>chip: Return demographic/insurance statuses
    vista->>chip: Return demographics data
    chip->>va: Return combined demographic statuses and data
    va->>vam: Return combined demographic statuses and data
    alt demographic info needs to be confirmed
        vam-->>vet: Present demographic confirmations screens
        vet-->>vam: Confirm demographic information
        vam-->>va: PATCH /appointments/check-in/demographics
        va-->>chip: POST /authenticated-demographics
        chip-->>vista: Patch demographic status
        vista-->>chip: Demographic status patch response
        chip-->>va: Demographic status patch response
        va-->>vam: Demographic status patch response
    end
    vam->>va: POST /appointments/check-in
    va->>chip: POST /authenticated-checkin
    chip->>vista: Fetch insurance and demographics statuses for patient
    chip->>vista: Fetch appointment
    chip->>chip: Evaluate demographic/insurance statuses
    chip->>chip: Evaluate appointment
    chip-->>vista: Check patient into appointment if passes validation
    vista-->>chip: Return success/fail for check-in
    chip->>va: Check-in response success/fail
    va->>vam: Check-in response success/fail
    vam->>vet: Confirmation/Error screen
```

