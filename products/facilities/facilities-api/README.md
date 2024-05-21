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
Lighthouse Facilities API (endpoint?)
PPMS / Community Care (/ccp endpoint)

```mermaid
flowchart LR
    
    R(Legacy data source) -->|Health services| V
    S(Sandy's DB)-->|Benefit services| V
    S -->|Benefit services| W
    U(PPMS) -->|Community providers| X
    U -->|Community providers| Y
    T(Drupal) -->|most Health services| W
    T -.->|Benefit services| W
    Q(???) -->|Mental health| W 
    V[Lighthouse Facility API v0] --> X
    W[Lighthouse Facility API v1] --> Y
    X[vets-api Facility API v1] --> |Current path| Z
    Y[vets-api Facility API v2] -.-> |Future path| Z
    Z[Facility Locator]
```
