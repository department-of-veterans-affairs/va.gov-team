# Data Flow Diagram: EventBus Gateway & `/v0/event_bus_gateway/send_email` (with Authorization)

This diagram illustrates the data flow for events coming into the EventBus Gateway application, including the authorization flow for the `/v0/event_bus_gateway/send_email` endpoint in the `vets-api` application.

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
        F["EventBusGateway::LetterReadyEmailJob<br/>(Background Job)"]
        G["BGS Service<br/>(Fetch Profile for Personalization)"]
        H["VaNotify::Service<br/>(Send Email)"]
    end
    K(((User's Email))):::external

    %% Data flow lines
    A -- "#1. Kafka Event<br />Contains VeteranParticipantId,<br />ClaimTypeCode, etc.<br />(Authenticated via OAuth/IAM role configuration)" --> B
    B -- "#2. Parse Event<br />(deserialize JSON)" --> C
    C -- "#3. Validate & Extract Data<br />(e.g., VeteranParticipantId, ClaimTypeCode)" --> D
    D -- "#4. Request Access Token<br />Identifier: VeteranParticipantId" --> I
    I -- "#5. Access Token containing encrypted VeteranParticipantId" --> D
    D -- "#6. POST /v0/event_bus_gateway/send_email<br />{ template_id }<br />(with Bearer Token)" --> E
    E -- "#7. Validate Access Token" --> J
    J -- "#8. On Success: Enqueue<br />LetterReadyEmailJob" --> F
    J -. "#9. On Failure: 401 Unauthorized" .-> D
    F -- "#10. Look up Profile<br />via BGS Service" --> G
    F -- "#11. Send Email via VaNotify" --> H
    G -- "Profile Information" --> F
    H -- "#12. User email client receives email<br />(including first name,<br />link to claim letters download page)" --> K

    %% Styling
    classDef external color:#000,fill:#9cf,stroke:#333,stroke-width:2px
    class A external

    %% Dashed arrow for error
    %% J -. "Unauthorized" .-> D
```

## Data & Authorization Flow Details

- **Kafka Event (input):**  
  - Receives a JSON message with keys like `VeteranParticipantId`, `ClaimTypeCode`, etc.

- **EventBus Gateway:**  
  - Securely subscribed to `decision_letter_availability` topic via cross-account IAM roles (LHDI/DSVA) configured to connect to one another.
    Scope of access in Kafka is restricted to the relevant topic.
  - Consumes and parses Kafka events.
  - Extracts key data (`VeteranParticipantId`, `ClaimTypeCode`).
  - Requests an access token using the `VeteranParticipantId` from the Sign-In Service (`vets-api`).
  - Calls the `/v0/event_bus_gateway/send_email` endpoint in `vets-api` with the access token (`participant_id` encrypted within the token),
    sending the `template_id` for use with this notification.
  - All data being handled is read-only.

- **vets-api:**
  - `/v0/event_bus_gateway/send_email` controller validates the access token.
  - If valid, enqueues a Sidekiq job (`LetterReadyEmailJob`).
  - The token is **not** stored anywhere for later use.
  - If token validation fails, responds with 401 Unauthorized.
  - The job fetches additional info (first name) from BGS using `participant_id`.
  - Sends an email through VaNotify, using the resolved name and template provided by the gateway.
  - The email contains a link to the Claim Letters Page, but no automatic login is included in the link
    (the user must authenticate when they access the page, as normal).
  - Data being handled is read-only; Sidekiq writes some portion of it to the queue for use with VA Notify.  No Veteran information is updated
    or changed as part of this process.

---

**Legend:**
- Blue Nodes: External systems
- Grouped Nodes: Application boundaries
- Arrows: Data flow (with key data highlighted)
- Dashed Arrow: Error/Unauthorized path
