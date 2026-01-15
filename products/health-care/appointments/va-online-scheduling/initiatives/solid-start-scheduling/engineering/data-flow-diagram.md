# Data flow diagram

flowchart TD
    A[Veteran] -- Schedules/Confirms Appointment<br/>Inputs: Last Name, DOB, OTC --> B[va.gov Frontend]
    B -- Inputs sent via HTTPS/TLS 1.3+ --> C[vets-api]
    C -- OTC validated (hashed, stored in Redis)<br/>JWT issued if valid --> D[Redis (short-lived)]
    C -- Appointment APIs (JWT Bearer via TLS) --> E[VASS API]
    E -- Calls over TLS --> F[MS Dynamics DB]
    F -- Appointment Data<br/>(PII, minimal; only as needed)
    C -- Sends email/OTC via HTTPS/TLS --> G[VA Notify (GovCloud)]
    
    subgraph Storage_Locations [Data Storage]
      D
      F
    end

    %% Audit trails
    C -- Logs Auth attempts, OTC issuance/validation, API access, error events (audit log) --> H[Audit Log (Splunk/Cloudwatch)]

    %% Access Levels
    A-.->|Read/Write self|B
    B-.->|Read/Write session<br/>(transient)|C
    C-.->|Read/Write (OTC cache)<br/>Read/Write appointments|D
    C-.->|Read/Write appointments|E
    E-.->|Read/Write appointments|F

    %% Data encryption notes
    classDef encrypted fill:#e5f5e0,stroke:#32cd32;
    class D,F encrypted;
