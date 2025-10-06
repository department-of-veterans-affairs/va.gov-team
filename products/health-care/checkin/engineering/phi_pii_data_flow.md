
## PHI/PII Data Flow Architecture

```mermaid
flowchart TD
    %% Define styles for data sensitivity levels
    classDef phiData fill:#ffcdd2,stroke:#d32f2f,stroke-width:3px,color:#000
    classDef piiData fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef sessionData fill:#e8f5e8,stroke:#388e3c,stroke-width:1px,color:#000
    classDef platformData fill:#e1f5fe,stroke:#1565c0,stroke-width:2px,color:#000
    classDef externalParty fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#000

    %% Veteran Entry Point
    VET[Veteran<br/>Mobile Browser]

    %% Platform ATO Boundary
    subgraph "Platform ATO Boundary - Transitory PHI Processing"
        PROXY[VA.gov Reverse Proxy]

        WEBSITE[vets-website<br/>CIE Frontend Modules<br/>• Day-of Check-in<br/>• Pre-check-in<br/>• Travel Claims<br/>• Travel Pay]

        API[vets-api<br/>CIE Backend Modules<br/>• check_in module<br/>• travel_pay API]

        REDIS[(Redis Cache<br/>Session Management)]
    end

    %% CIE ATO Boundary
    subgraph "CIE ATO Boundary - Time-Limited PHI Storage"
        LOROTA[LoROTA Authorization]
        CHIP[CHIP Integration API]
        DYNAMODB[(DynamoDB<br/>Time-Limited Storage)]
    end

    %% External Systems by Data Sensitivity
    subgraph "HIGH PHI - VA Internal Systems"
        VISTA[VistA EHR<br/>Full Medical Records]
        VISTAAPI[Vista API Service]
        BTSSS[BTSSS Travel Claims]
        MAPCCRA[MAP/CCRA<br/>Community Care]
    end

    subgraph "MEDIUM PII - Communication Services"
        VETEXT[VEText SMS<br/>DSVA Service]
        VANOTIFY[VANotify Email<br/>VA OIT Service]
    end

    subgraph "HIGH PHI - Third Party External"
        EPS[EPS Community Care<br/>Wellhive/TriWest]
        TWILIO[Twilio SMS Provider]
    end

    %% Main Data Flow (Simplified)
    VET -->|PHI: Name, DOB, Demographics| PROXY
    PROXY --> WEBSITE
    WEBSITE -->|API Calls| API
    API -->|Session Data| REDIS

    %% ATO Boundary Crossings
    API -->|PHI: Identity Verification| LOROTA
    API -->|PHI: Appointment Requests| CHIP
    LOROTA -->|PHI: Session Storage| DYNAMODB

    %% External System Integration
    CHIP -->|PHI: Appointment Data| VISTAAPI
    VISTAAPI -->|Full PHI: EHR Records| VISTA

    API -->|PHI: Travel Claims| BTSSS
    CHIP -->|PHI: Community Care| MAPCCRA
    API -->|PHI: CC Scheduling| EPS

    CHIP -->|PII: SMS Notifications| VETEXT
    API -->|PII: Email Notifications| VANOTIFY
    VETEXT -->|PII: SMS Delivery| TWILIO

    %% Apply styles
    class VISTA,BTSSS,VISTAAPI,MAPCCRA,EPS phiData
    class VETEXT,VANOTIFY,TWILIO piiData
    class REDIS,DYNAMODB,LOROTA sessionData
    class PROXY,WEBSITE,API,CHIP platformData
```

## Data Classification Matrix

### 🔴 PHI - Protected Health Information (HIPAA Covered)

| Data Type | Collection Point | Processing Location | Storage Duration | Transmission Scope |
|-----------|------------------|-------------------|------------------|-------------------|
| **Last Name** | vets-website | Platform (transient) | Redis: Session only | LoROTA verification |
| **Date of Birth** | vets-website | Platform (transient) | Redis: Session only | LoROTA verification |
| **Appointment Details** | VistA (source) | CIE (processing) | LoROTA: Time-limited | Veterans (display) |
| **Travel Claim Data** | vets-website | Platform → BTSSS | BTSSS: Permanent | BTSSS processing |
| **Community Care Data** | MAP/CCRA | CIE → EPS | EPS: Per contract | External providers |

### 🟡 PII - Personally Identifiable Information

| Data Type | Collection Point | Processing Location | Storage Duration | Transmission Scope |
|-----------|------------------|-------------------|------------------|-------------------|
| **Phone Numbers** | VistA/Demographics | VEText → Twilio | Twilio: Per contract | SMS delivery |
| **Email Addresses** | Platform/User | VANotify | VA service contract | Email delivery |
| **First/Last Names** | VistA/Platform | Multiple systems | Varies by system | Notifications/verification |
| **Demographics** | VistA (source) | CIE (processing) | LoROTA: Time-limited | Veterans (verification) |
| **Contact Information** | VistA (source) | CIE (processing), Platform (transit only) | LoROTA: Time-limited | Veterans (confirmation) |
| **Emergency Contacts** | VistA (source) | CIE (processing), Platform (transit only) | LoROTA: Time-limited | Veterans (confirmation) |
| **Next of Kin** | VistA (source) | CIE (processing), Platform (transit only) | LoROTA: Time-limited | Veterans (confirmation) |
| **ICN (Veteran ID)** | VA Profile | MAP/CCRA/EPS | Varies by system | System integration |

### 🔵 System Identifiers - Non-PII Operational Data

| Data Type | Collection Point | Processing Location | Storage Duration | Transmission Scope |
|-----------|------------------|-------------------|------------------|-------------------|
| **UUID Session Tokens** | LoROTA | Platform/CIE | Time-limited | Session management |
| **Appointment IDs** | VistA | All systems | Operational | System integration |
| **Status Codes** | Multiple | All systems | Operational | Status tracking |
| **Feature Flags** | Platform | All systems | Configuration | System behavior |

## Data Retention & Disposal Policies

### Platform ATO Boundary
- **Redis Session Cache**: Automatic expiration based on session timeout
- **API Transit Data**: Immediate disposal after transmission
- **Logs**: Standard Platform retention policy (consult Platform team)
- **No Persistent PHI Storage**: All PHI is transitory processing only

### CIE ATO Boundary
- **LoROTA DynamoDB**: Time-limited storage with automatic expiration
- **CHIP Processing**: No persistent storage - integration layer only
- **Logs**: CIE-specific retention policy (consult CIE DevOps team)
- **Session Management**: Automatic cleanup based on business rules

### External Systems
- **VistA**: Permanent EHR storage per VA medical record policies
- **BTSSS**: Financial record retention per VA travel claim policies
- **Third-Party Systems**: Per contractual data processing agreements
