# MHV Medication Details Page renewal flow

```mermaid
flowchart TD
  %% START
  B[Medication Details page]:::page
  L[Medications List page with Success Alert]:::success

  %% STATUS CHECK
  B --> D{Medication status\neligible for renewal?}

  %% ELIGIBILITY DETAILS
  D -.-> Dn[Eligible statuses: Active-zero-refills - Active-zero-refills-refill-inprogress - Active-zero-refills-refill-submitted - Expired-within-120-days]:::note

  %% OUTCOMES
  D -- No --> Y[Fallback content shown]:::muted
  D -- Yes --> R[Show Send renewal request CTA]

  %% LINK ACTION
  R -- User clicks link --> M[[Modal: 'Send a secure message for renewal?']]

  %% MODAL ACTIONS
  M -- Proceed --> SM([Secure Message Flow]):::external
  M -- Cancel --> B

  %% AFTER SUCCESS
  SM --> L

  %% STYLES
  classDef page fill:#eef,stroke:#446;
  classDef external fill:#efe,stroke:#393;
  classDef success fill:#e6ffed,stroke:#1a7f37,stroke-width:2px;
  classDef muted fill:#f7f7f7,stroke:#bbb,color:#666;
  classDef note fill:#fff8dc,stroke:#e6b800,color:#5c4b00;
```
