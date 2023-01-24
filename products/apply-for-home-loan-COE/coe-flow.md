```mermaid
flowchart TB
    Title(Certificate of Eligibility flow)

    A[Applicant Information] --> B[Contact Information - mailing address]
    B --> C[Additional contact info - phone & email]
    C --> D[Service status]

    D -- Veteran\u0020or\u0020activated\u000aReserves/Guard --> E[Service history]
    D -- Never\u0020activated\u000aReserves,\u0020or\u0020Guard --> E

    E --> F[Existing loan]
    F -- No --> I[Supporting documents]

    F -- Yes --> G[Loan intent]
    G --> H[Loan history]
    H --> I

    I --> J[Review & submit]
    J --> K[Confirmation page]
```
