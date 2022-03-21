```mermaid
flowchart TB
    Title(Higher-Level Review v2 flow)

    subgraph one [Wizard]
    A{Compensation claim}
    A -. Yes .-> B[Introduction page]
    A -. No .-> C[Download form]
    end

    B --> D[Veteran Information]
    D --> E[Homeless]
    E --> F[Contact Info]

    F -.-> G[Update address] -.-> F
    F -.-> H[Update phone] -.-> F
    F -.-> I[Update email] -.-> F

    F --> J[Contestable Issues]

    J -.-> K[Add or edit issue] -.-> J

    J --> L[Area of Disagreement followup]
    L -. Each \n selected \n issue .-> L
    L --> M[Opt-in]
    M --> N[Issue Summary] -. Go back and add more .-> J

    N --> O[Informal conference]
    O -. No .-> T[Review & submit]
    O -. Call me .-> S[Availability]
    O -. Call rep .-> R[Representative Info]
    R --> S
    S --> T
    T --> U[Confirmation]
```
