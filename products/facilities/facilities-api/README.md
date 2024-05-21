# Facilities API
Last updated: May 10, 2024

## Code
https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/facilities_api
Current versions: 
* V1 = maps to Lighthouse V0. LH V0 slated for deprecation June 1, 2024.
* V2 = maps to Lighthouse V1. Shipped May 10, 2024

## Customers
1. Facility Locator
2. 1010 Health apps team - PM: Heather Justice (May 2024)

## Data sources
- Lighthouse Facilities API (/va endpoint)
- PPMS / Community Care (/ccp endpoint)

### vets-API Facilities API v1
```mermaid
flowchart LR
    O(VAST) -->|Most VA facility names, addresses etc.| V
    P(CARMA) --> |Health services - Caregiver Support| V
    R(Legacy data source) -->|Health services - most others| V
    S(Sandy's DB)-->|Benefit services and benefit facility data| V
    U(PPMS) -->|Non-VA facility and service data| X
    V[Lighthouse Facility API v0] -->|VA facility and service data| X
    X[vets-api Facility API v1]

```

### vets-API Facilities API v2
```mermaid
flowchart LR
    O(VAST) -->|Most facility names, addresses etc.| W
    P(CARMA) --> |Health services - Caregiver Support| W
    S(Sandy's DB)-->|Benefit services| W
    U(PPMS) -->|Non-VA facility and service data| Y
    T(Drupal) -->|Health services - most others| W
    T -.->|Benefit services| W
    Q(???) -->|Health services - Mental health| W 
    W[Lighthouse Facility API v1] -->|VA facility and service data| Y
    Y[vets-api Facility API v2]
```
