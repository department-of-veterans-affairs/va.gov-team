```mermaid
sequenceDiagram
    participant Event Bus as Event Bus/<br /> Kafka
    participant Eventbus Gateway
    participant Sign In Service
    participant api.va.gov
    participant Sidekiq as Sidekiq Job
    participant BGS
    participant VA Notify
    actor User's Email

    Event Bus ->> Eventbus Gateway: decision letter availability event
    activate Eventbus Gateway
    Eventbus Gateway ->> Eventbus Gateway: filters for disability claim letters
    Eventbus Gateway ->>+ Sign In Service: request /v0/sign_in/token<br />using PID
    break when request parameters are invalid or malformed
        Sign In Service -->> Eventbus Gateway: returns 400
    end
    Sign In Service -->>- Eventbus Gateway: returns token
    Eventbus Gateway ->>+ api.va.gov: request /v0/event_bus_gateway/send_email<br />using token, template_id
    break when token is invalid
        api.va.gov -->> Eventbus Gateway: returns 401
    end
    api.va.gov -->> Eventbus Gateway: returns 200
    deactivate Eventbus Gateway
    api.va.gov ->>- Sidekiq: queue LetterReadyEmailJob
    activate Sidekiq
    Sidekiq ->>+ BGS: request user profile information
    break when participant ID cannot be found
        BGS -->> Sidekiq: returns error
    end
    BGS -->>- Sidekiq: returns user profile information
    Sidekiq ->>+ VA Notify: request to send email<br />using first_name, template_id, host
    break when personalization is missing
        VA Notify -->> Sidekiq: returns error
    end
    VA Notify ->> User's Email: email sent
    activate User's Email
    break when email bounces
        User's Email -->> VA Notify: returns error
        deactivate User's Email
        deactivate VA Notify
        VA Notify -->> Sidekiq: returns error
        deactivate Sidekiq
    end
```
