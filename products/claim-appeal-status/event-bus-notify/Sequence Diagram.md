# Decision Letter Email Notifications Sequence Diagram

## Sequence Diagrams

### 1. Initial Request Flow

This diagram shows the initial email request handling and job queuing:

```mermaid
sequenceDiagram
    participant Client as EventBusGateway
    participant Controller as EventBusGatewayController
    participant Sidekiq as Sidekiq Scheduler

    Note over Client, Sidekiq: Initial Email Request Flow
    Client->>Controller: POST /send_email<br/>(participant_id, template_id)
    Controller->>Controller: Extract participant_id from token user_attributes
    Controller->>Sidekiq: Queue LetterReadyEmailJob.perform_async(participant_id, template_id)
    Controller-->>Client: 200 OK (immediate response)
    Note right of Controller: Job processing happens asynchronously
```

### 2. LetterReadyEmailJob Processing

This diagram shows the detailed job execution, data gathering, email sending, and retry handling:

```mermaid
sequenceDiagram
    participant Sidekiq as Sidekiq Scheduler
    participant Job as LetterReadyEmailJob
    participant BGS as BGS Service
    participant MPI as MPI Service
    participant VANotify as VaNotify::Service
    participant DB as Database
    participant VANotifyAPI as VA Notify API
    participant StatsD as StatsD Metrics

    Note over Sidekiq, StatsD: Email Processing Job (16 Sidekiq retries)
    Sidekiq->>Job: Execute LetterReadyEmailJob

    alt No Downstream Failures
        Job->>BGS: Find person by participant_id (get_bgs_person)
        BGS-->>Job: Person details (name, DOB, SSN)
        Job->>MPI: Find profile by attributes (using BGS person data)
        MPI-->>Job: MPI profile with ICN

        Job->>VANotify: send_email(recipient_identifier, template_id, personalisation) with callback_klass

        VANotify->>VANotifyAPI: POST email notification
        VANotifyAPI-->>VANotify: Response with notification_id

        alt va_notify_notification_creation enabled
            VANotify->>DB: Create VANotify::Notification record
        end

        VANotify-->>Job: Email response with notification_id
        Job->>DB: Find UserAccount by ICN (during notification creation)
        Job->>DB: Create EventBusGatewayNotification<br/>(user_account, template_id, va_notify_id, attempts=1)
        Job->>StatsD: Increment success metric (with DD_TAGS)

    else BGS lookup fails / MPI lookup fails / VA Notify API fails
        Job->>StatsD: Increment failure metrics (record_email_send_failure)
        Job-->>Sidekiq: Job failed, trigger retry mechanism
        alt Sidekiq retries remaining (< 16 retries)
            Sidekiq->>Sidekiq: Schedule retry attempt (exponential backoff)
            Note right of Sidekiq: Will re-execute LetterReadyEmailJob after delay
        else All Sidekiq retries exhausted (16 retries)
            Sidekiq->>Job: Trigger sidekiq_retries_exhausted callback
            Job->>StatsD: Increment exhausted metric (with DD_TAGS)
        end
    end
```

### 3. Callback Processing and Retry Decision Flow

This diagram shows how callbacks are processed and retry decisions are made:

```mermaid
sequenceDiagram
    participant VANotifyAPI as VA Notify API
    participant CallbackController as VANotify::CallbacksController
    participant StatusCallback as VANotifyEmailStatusCallback
    participant DB as Database
    participant MPI as MPI Service
    participant Sidekiq as Sidekiq Scheduler
    participant StatsD as StatsD Metrics

    Note over VANotifyAPI, StatsD: Callback Processing Flow
    VANotifyAPI->>CallbackController: POST callback<br/>(notification_id, status, status_reason)
    CallbackController->>CallbackController: Authenticate bearer token
    CallbackController->>DB: Find VANotify::Notification
    CallbackController->>DB: Update notification status


    CallbackController->>StatusCallback: Call custom callback (VANotifyEmailStatusCallback)
    StatusCallback->>StatsD: Increment status-specific metrics (with DD_TAGS)

    alt status == "temporary-failure" AND retry_emails enabled
        StatusCallback->>DB: Find EventBusGatewayNotification by va_notify_id

        alt attempts > MAX_ATTEMPTS (16)
            StatusCallback->>StatsD: Increment exhausted_retries metric (callback-level exhaustion)
            Note right of StatusCallback: handle_exhausted_retries called
        else attempts < MAX_ATTEMPTS
            StatusCallback->>DB: Get user_account.icn
            StatusCallback->>MPI: Get fresh profile by ICN
            MPI-->>StatusCallback: Updated profile
            StatusCallback->>StatusCallback: Extract first_name from profile
            StatusCallback->>Sidekiq: Schedule LetterReadyRetryEmailJob
            StatusCallback->>StatsD: Increment queued_retry_success metric
        end
    end
```

### 3. LetterReadyRetryEmailJob Processing

This diagram shows the detailed retry job execution with enhanced validation:

```mermaid
sequenceDiagram
    participant Sidekiq as Sidekiq Scheduler
    participant RetryJob as LetterReadyRetryEmailJob
    participant DB as Database
    participant VANotify as VaNotify::Service
    participant VANotifyAPI as VA Notify API
    participant StatsD as StatsD Metrics

    Note over Sidekiq, StatsD: Callback-Triggered Retry Job (up to 16 callback retries)
    Note over Sidekiq, StatsD: Each retry job has its own Sidekiq retries (17 total attempts per job)

    activate RetryJob
    Sidekiq->>RetryJob: Execute LetterReadyRetryEmailJob
    RetryJob->>DB: Get EventBusGatewayNotification by notification_id

    alt Job execution succeeds
        RetryJob->>VANotify: send_email(recipient_identifier, template_id, personalisation) with callback_klass
        VANotify->>VANotifyAPI: POST retry email notification
        VANotifyAPI-->>VANotify: New response with new notification_id
        VANotify-->>RetryJob: Email response
        RetryJob->>DB: Update EventBusGatewayNotification<br/>(increment attempts, update va_notify_id)
        RetryJob->>StatsD: Increment success metrics (with DD_TAGS)
    else Notification not found / BGS/MPI lookup fails / VA Notify API fails
        RetryJob->>StatsD: Increment failure metrics (record_email_send_failure)
        alt Sidekiq retries remaining (< 16 retries)
            Note right of RetryJob: Sidekiq will retry job (exponential backoff)
        else All Sidekiq retries exhausted (16 retries)
            RetryJob->>StatsD: Increment exhausted metrics (with DD_TAGS)
        end
    end
    deactivate RetryJob


    Note over VANotifyAPI, StatsD: Retry Callback Processing
    VANotifyAPI->>CallbackController: POST callback for retry (triggers callback flow from diagram #3)
    Note right of CallbackController: Potential for additional callback-triggered retries

    Note over Sidekiq, StatsD: Maximum Resilience: Two Distinct Scenarios (Mutually Exclusive)
    Note right of Sidekiq: A) Job Execution Failures: Up to 17 attempts per job, no callbacks<br/>B) Email Delivery Failures: 1 initial success + 16 callback retries (17 attempts each)<br/>Total Maximum: 273 attempts (scenario B)
```

## Quick Reference Summary

### Key Flow Steps
1. **Request Reception** → EventBusGatewayController receives POST to `/send_email`
2. **Job Queuing** → LetterReadyEmailJob queued asynchronously
3. **Data Gathering** → Fetch veteran data from BGS and MPI services
4. **Email Sending** → Send via VA Notify API with callback configuration
5. **Status Tracking** → Create EventBusGatewayNotification record with attempts=1
6. **Callback Processing** → VA Notify posts status updates back to callback endpoint
7. **Retry Logic** → Temporary failures trigger intelligent dual-level retry mechanism
8. **Comprehensive Monitoring** → Enhanced metrics and logging with DataDog integration

### Critical Components
- **EventBusGatewayController** - REST endpoint with token validation
- **LetterReadyEmailJob** - Primary email job (16 Sidekiq retries + DD_TAGS)
- **LetterReadyRetryEmailJob** - Enhanced retry job (16 Sidekiq retries + validation)
- **VANotifyEmailStatusCallback** - Status callback handler with retry logic
- **VaNotify::Service** - VA Notify API client with monitoring
- **EventBusGatewayNotification** - Enhanced tracking model with attempts
- **Constants Module** - Centralized configuration and DataDog tagging

### Maximum Resilience Strategy
**Two Distinct Scenarios (Mutually Exclusive)**:
- **Job Execution Failures**: Up to 17 attempts (BGS/MPI/VA Notify API failures)
- **Email Delivery Failures**: Up to 273 attempts (1 successful send + 16 callback retries × 17 job attempts each)
- **Separate Exhaustion Handling**: Independent metrics and logging for each failure type
- **Enhanced Monitoring**: Comprehensive DataDog tagging distinguishing failure scenarios

## Notes

- All communication between the Eventbus Gateway and Kafka is secured through IAM roles connected across AWS accounts, since LHDI is hosted in a separate environment from vets-api and the Eventbus Gateway.
- The `event_bus_gateway_controller` in `vets-api` inherits from `ServiceAccountApplicationController` and leverages that to check the validity of the token before any action is executed.
