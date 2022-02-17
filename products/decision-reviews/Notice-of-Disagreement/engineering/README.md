# Engineering

## Backend
###  Architecture Diagram
Technically vets-api and Lighthouse run on the same server, but we treat each other more like they're separate servers
![NOD Architecture Diagram](NOD_architecture.png)
[Architecture Diagram Source](NOD_architecture.drawio) - update with  https://app.diagrams.net/

### Sequence Diagram
![NOD sequence diagram](NOD_sequence_diagram.svg)
[sequence_diagram_source](sequence_diagram_source) - update with  https://sequencediagram.org/

## Front-end

- [Overview](NOD_frontend_overview)
- [Details](NOD_frontend_details)

```mermaid
flowchart TB
    Title(Notice of Disagreement flow)

    A[Veteran Information] --> B[Homeless]
    B --> C[Contact Info]

    subgraph one [Contact list loop]
    C -.-> D[Update address] -.-> C
    C -.-> E[Update phone] -.-> C
    C -.-> F[Update email] -.-> C
    end

    C --> G[Filing deadline]
    G --> H[Contestable Issues]

    subgraph two [Add issue list loop]
    H -.-> I[Add or edit issue] -.-> H
    end

    H --> J[Area of Disagreement followup]
    J -. Each \n selected \n issue .-> J
    J --> K[Issue Summary] -. Go back and add more .-> H
    K --> L{Board Review option}
    L -- Direct review --> M[Direct Review] --> Q[Review & submit]
    L -- Submit evidence --> N{Upload now}
    N -- No --> Q
    N -- Yes --> O[Upload] --> Q
    L -- Request hearing --> P[Hearing type] --> Q
    Q --> R[Confirmation page]
```
