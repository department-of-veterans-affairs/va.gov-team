This flow chart shows a user entering the Facility locator from va.gov/find-locations. The data connections are with the vets-api facilities-api service but secondary connections to external services like PPMS (for Community Care Providers) is shown and sometimes generates errors.

```mermaid
flowchart TD
    A(("fa:fa-user User on va.gov/find-locations")) --> B("fa:fa-location-arrow  User enters address or selects use current location")
    B --> C("fa:fa-caret-down Selects VA Health/VA Benefits/VA Cemeteries/Vet Centers") & D("fa:fa-caret-down Community Pharmacies in VA's network") & E("fa:fa-caret-down Selects Urgent Care all in-network or Emergency Care all in-network") & E2("Selects Community Providers in VA's network")
    C --> F("Data transmission")
    D --> F
    E --> F
    F -- Success (2xx) --> G("Output shown to user")
    F -- Error (400 or 500) --> H("Error shown to user<br>'Find VA locations isn’t working right now'")
    E2 --> I("Requests services")
    I -- Success --> J("User selects service form combobox")
    J --> F
    I -- Error --> K("Silent failure")
```
