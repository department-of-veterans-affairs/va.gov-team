# Decision Letter Email Notifications Architecture Diagram

```mermaid
flowchart TD
    A[External Kafka Topic]:::external
    G[DataDog]:::external

    subgraph EventBus Gateway
      B["eventbus-gateway (Kafka Consumer)"]
    end

    subgraph vets-api
      C["Service Account Token Request<br/>(Sign-In Service)"]
      D["/v0/event_bus_gateway/send_email<br/>(API Endpoint)"]
      E[Internal Processing]
      F["VA Notify (Email Delivery)"]
    end

    H(((User's Email))):::external

    %% Flow
    A -- Produces decision_letter_availability Event --> B
    B -- Uses participant ID to request token --> C
    C -- Returns Token --> B
    B -- Calls API with template ID --> D
    D -- Processes Data --> E
    E -- Submits Email Data --> F
    B -- Logging --> G
    D -- Logging --> G
    F -- Sends to User --> H

    classDef external color:#999,fill:#004,stroke:#008,font-style:italic;
    classDef note color:#000,fill:#ff88,stroke:#fff8,stroke-width:5px,font-size:0.9rem;
```

## Legend

- Items in blue are external.

## Notes
- Communication between the Kafka topic and the Eventbus Gateway is authenticated via restricted IAM roles between the LHDI AWS
  account and the DSVA AWS account, ensuring that messages are encrypted and sent securely.
- Alternate consideration was to have the Eventbus Gateway send an email directly to VA Notify, but due to the convenience of
  having all the necessary items to craft and send the email (profile connection for personalization) already functioning within
  vets-api, the decision was to use a service authorization approach instead.
- Libraries being used by Eventbus Gateway are all preexisting within the va.gov ecosystem.
- No data is currently being persisted in relation to the incoming events outside of DataDog logging.
- No new code was introduced to the sign in service or VA Notify, but we are willing to discuss alternatives we hadn't considered
  on their use in this workflow.
