# Data Flow Diagram: EventBus Gateway & `/v0/event_bus_gateway/send_email` (with Authorization)

This document provides two focused data flow diagrams reflecting the current architecture:
- Diagram 1: Initial request through successful email sending via `EventBusGateway::LetterReadyEmailJob`.
- Diagram 2: Callback processing via `EventBusGateway::VANotifyEmailStatusCallback` and retry enqueuing via `EventBusGateway::LetterReadyRetryEmailJob`.

### Diagram 1 — Initial Request to Successful Email Send (LetterReadyEmailJob)

```mermaid
flowchart TD
    %% External Event Source
    A[Kafka Topic<br/>Event Message]:::external

    subgraph EventBus Gateway Application
        B["EventBus Gateway<br/>Kafka Consumer"]
        C["Event Handler / Processor"]
        D["API Client<br/>(vets-api)"]
    end

    subgraph vets-api Application
        E["EventBusGatewayController<br/>/v0/event_bus_gateway/send_email"]
        I["Sign-In Service<br/>(Service Account)"]
        J["Access Token Validation"]
        Q["Sidekiq Scheduler"]
        F["EventBusGateway::LetterReadyEmailJob"]
        G["BGS Service<br/>(Find person by ptcpnt_id)"]
        M["MPI Service<br/>(Find profile by attributes)"]
        H["VaNotify::Service<br/>(Send Email)"]
        N[("Database<br/>(EventBusGatewayNotification)")]
    end

    K(((User's Email))):::external

    %% Data flow lines
    A -- "#1 Kafka Event<br />Contains VeteranParticipantId, ClaimTypeCode, etc." --> B
    B -- "#2 Parse Event (deserialize JSON)" --> C
    C -- "#3 Validate & Extract Data<br />(e.g., VeteranParticipantId, ClaimTypeCode)" --> D
    D -- "#4 Request Access Token<br />Identifier: VeteranParticipantId" --> I
    I -- "#5 Access Token (contains participant_id)" --> D
    D -- "#6 POST /v0/event_bus_gateway/send_email<br />{ template_id } with Bearer Token" --> E
    E -- "#7 Validate Access Token" --> J
    J -- "#8 On Success: Enqueue Job" --> Q
    Q -- "#9 Queue perform_async(participant_id, template_id)" --> F
    Q -. "401 Unauthorized" .-> D

    F -- "#10 get_bgs_person(participant_id)" --> G
    G -- "BGS person (name, DOB, SSN)" --> F
    F -- "#11 get_mpi_profile(using BGS data)" --> M
    M -- "MPI profile (ICN)" --> F
    F -- "#12 send_email(recipient_identifier: PID, template_id, personalisation)" --> H
    H -- "#13 Response (notification_id)" --> F

    F -- "#14 Find UserAccount by ICN; Create EventBusGatewayNotification<br />(template_id, va_notify_id, attempts=1)" --> N
    H -- "#15 Email delivered (success path)" --> K

    %% Styling
    classDef external color:#000,fill:#9cf,stroke:#333,stroke-width:2px
    class A,K external
```

### Diagram 2 — Callback Processing and Retry Enqueue (VANotifyEmailStatusCallback ➜ LetterReadyRetryEmailJob)

```mermaid
flowchart TD
    %% External System
    V[VA Notify]:::external

    subgraph vets-api Application
        CC["VANotify::CallbacksController<br/>(Bearer auth)"]
        DC["Update VANotify::Notification<br/>status + reason"]
        SC["EventBusGateway::VANotifyEmailStatusCallback"]
        DB[("Database<br/>(EventBusGatewayNotification)")]
        MPI["MPI Service<br/>(Find profile by ICN)"]
        SJ["Sidekiq Scheduler"]
        RJ["EventBusGateway::LetterReadyRetryEmailJob"]
        NS["VaNotify::Service<br/>(Send Retry Email)"]
    end

    %% Flow
    V -- "#1 POST callback<br/>(notification_id, status, status_reason)" --> CC
    CC -- "#2 Authenticate + Find VANotify::Notification" --> DC
    DC -- "#3 Update status + reason" --> SC

    SC -- "#4 Add metrics for status" --> SC
    SC -- "#5 If status == temporary-failure AND feature enabled" --> SC
    SC -- "#6 Find EBG Notification by va_notify_id" --> DB
    SC -- "#7 Check attempts <= MAX_ATTEMPTS (16)" --> SC
    SC -- "#8 get_profile_by_icn(icn)" --> MPI
    MPI -- "Profile (participant_id, names)" --> SC
    SC -- "#9 Enqueue" --> SJ
    SJ -- "#10 Schedule LetterReadyRetryEmailJob" --> RJ

    RJ -- "#11 send_email" --> NS
    NS -- "new notification_id" --> RJ
    RJ -- "#12 Update EventBusGatewayNotification<br/>(attempts += 1, new notification_id)" --> DB

    %% Styling
    classDef external color:#000,fill:#9cf,stroke:#333,stroke-width:2px
    class V external
```

## Data & Authorization Flow Details

- EventBus Gateway requests an access token using the `VeteranParticipantId` and calls `/v0/event_bus_gateway/send_email` with `template_id`.
- vets-api validates the token, enqueues `LetterReadyEmailJob`, which fetches BGS + MPI data and sends email via VA Notify.
- On VA Notify callback with `temporary-failure`, `VANotifyEmailStatusCallback` looks up the corresponding notification, ensures attempts are within limit, and enqueues `LetterReadyRetryEmailJob` using `perform_in(1.hour, ...)` with fresh personalisation.
- The retry job sends a new email via VA Notify and atomically updates the `EventBusGatewayNotification` with incremented attempts and the latest `va_notify_id`.

---

**Legend:**
- Blue Nodes: External systems
- Grouped Nodes: Application boundaries
- Arrows: Data flow (with key data highlighted)
