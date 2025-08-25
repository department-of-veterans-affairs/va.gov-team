# Event Bus Gateway Email Notification System - Complete Documentation

This comprehensive document covers the complete Event Bus Gateway email notification system, including process flows, retry mechanisms, error handling, monitoring, and implementation details.

## Table of Contents
1. [Overview](#overview)
2. [Related Diagrams](#related-diagrams)
3. [System Architecture](#system-architecture)
4. [Process Flow](#process-flow)
5. [Dual-Level Retry Mechanism](#dual-level-retry-mechanism)
6. [Database Schema](#database-schema)
7. [Monitoring & Observability](#monitoring--observability)
8. [Error Handling](#error-handling)
9. [Feature Flags](#feature-flags)

## Overview

The Event Bus Gateway provides a reliable email notification service for veterans when letters are ready for download. The system includes comprehensive retry logic, callback handling, monitoring, and a dual-level retry mechanism for maximum resilience.

### Key Features
- **Asynchronous Processing** - Immediate API response with background job processing via Sidekiq
- **Dual-Level Retry System** - Both callback-triggered and job execution retries
- **Comprehensive Monitoring** - StatsD metrics and structured logging throughout
- **Intelligent Callbacks** - VA Notify status callbacks trigger appropriate actions
- **Maximum Resilience** - Up to 273 total delivery attempts possible (after first email resulting in `temporary-failure` scenarios)
- **Enhanced DataDog Integration** - Comprehensive team/portfolio/dependency tagging

## Related Diagrams

For visual representations of the system architecture and data flows, refer to these companion documents:

- **[Architecture Diagram](Architecture%20Diagram.md)** - High-level system architecture and component relationships
- **[Data Flow Diagram](Data%20Flow%20Diagram.md)** - Detailed data flow through the initial request and callback retry processes
- **[Sequence Diagram](Sequence%20Diagram.md)** - Sequential interactions and timing between system components

These diagrams complement this technical overview by providing different perspectives on how the Event Bus Gateway email notification system operates.

## System Architecture

### Core Components
- **EventBusGatewayController** - REST API endpoint for email requests
- **LetterReadyEmailJob** - Primary Sidekiq job for initial email sending
- **LetterReadyRetryEmailJob** - Sidekiq job for retry attempts
- **VANotifyEmailStatusCallback** - Handles delivery status callbacks
- **VaNotify::Service** - Service client for VA Notify API integration
- **EventBusGatewayNotification** - Database model for tracking notifications
- **Constants Module** - Shared configuration and tagging

### External Services Integration
- **BGS (Benefits Gateway Service)** - Veteran personal information
- **MPI (Master Person Index)** - Veteran profile lookup
- **VA Notify API** - Government notification service
- **DataDog** - Comprehensive metrics and monitoring

## Process Flow
Diagrams

### 1. Initial Email Request

**Endpoint**: `POST /v0/event_bus_gateway/send_email`

**Authentication**: Service account access token with participant_id

**Request Flow**:
1. Controller extracts participant_id from service account token user_attributes
2. Queues `LetterReadyEmailJob` asynchronously with participant_id and template_id
3. Returns 200 OK immediately (no validation at controller level)

**Error Handling**:
- Authentication handled by `SignIn::ServiceAccountApplicationController` base class
- 401 Unauthorized if service account token is invalid/missing
- No participant_id validation at controller level - delegated to job execution

### 2. Email Processing Job (`LetterReadyEmailJob`)

**Data Gathering Process**:
1. **BGS Lookup** - Retrieves veteran personal information using participant_id
2. **MPI Profile** - Fetches veteran profile using name, DOB, SSN from BGS
3. **User Account** - Locates UserAccount record using ICN from MPI profile

**Email Sending Process**:
1. Creates VA Notify service client with callback configuration
2. Sends email with recipient identifier, template ID, and personalization data
3. Creates `EventBusGatewayNotification` record with attempt count = 1
4. Records success metrics with comprehensive DataDog tags

**Configuration**:
- **Sidekiq Retries**: 16 attempts over ~2 days, 1 hour, 47 minutes
- **StatsD Metrics**: `event_bus_gateway.letter_ready_email.*`
- **DataDog Tags**: Comprehensive team/portfolio/dependency tagging
- **Error Handling**: Comprehensive logging with context + retry exhaustion callbacks

### 3. VA Notify Service Integration

**Callback Configuration**:
- Registers `EventBusGateway::VANotifyEmailStatusCallback` as handler
- VA Notify posts delivery status updates to configured callback URL

### 4. Callback Processing

**Callback Flow**:
1. **Authentication** - Bearer token validation with multi-token support
2. **Notification Lookup** - Finds VANotify::Notification by notification_id
3. **Status Update** - Updates notification with new status and reason
4. **Default Callback** - Standard VA Notify callback processing
5. **Custom Callback** - EventBusGateway-specific status handling

**Status Processing**:
- **delivered** - Success metrics, no further action
- **permanent-failure** - Error logging + metrics, no retry
- **temporary-failure** - Error logging + retry mechanism (if enabled by feature flag)

## Dual-Level Retry Mechanism

The system implements two distinct retry mechanisms for different failure scenarios (not compounding):

### Level 1: Job Execution Retries (Sidekiq)

**Purpose**: Handle failures in job execution (BGS/MPI/VA Notify API failures)
**Scope**: Each individual Sidekiq job (both `LetterReadyEmailJob` and `LetterReadyRetryEmailJob`)
**Configuration**: 16 Sidekiq retries per job (~2 days, 1 hour, 47 minutes)

### Level 2: Callback-Triggered Retries (Email Delivery)

**Purpose**: Handle email delivery failures after successful API submission
**Trigger Conditions**:
- Status: "temporary-failure" from VA Notify callback
- Feature flag: `event_bus_gateway_retry_emails` enabled
- Attempt count: < MAX_ATTEMPTS (16)

**Retry Process**:
1. **Notification Lookup** - Find EventBusGatewayNotification by va_notify_id
2. **Attempt Validation** - Check attempts <= MAX_ATTEMPTS
3. **Fresh Data Gathering** - Re-fetch veteran profile and current information
4. **Retry Scheduling** - Queue `LetterReadyRetryEmailJob` after 1 hour delay

**Retry Job Execution**:
- Each `LetterReadyRetryEmailJob` also has Level 1 (Sidekiq) retries
- Up to 17 job attempts per callback-triggered retry (1 + 16 Sidekiq retries)
- Updates attempts counter and va_notify_id upon successful send

**Exhaustion Handling**:
- **Callback Exhaustion**: When 16 callback retries reached → no more callback retries
- **Job Exhaustion**: When individual retry job fails 17 times → job abandoned
- Separate StatsD metrics for each exhaustion type

### Combined Resilience Strategy

**Two Distinct Failure Scenarios** (mutually exclusive):

**Scenario A - Job Execution Failures**:
- Initial job fails repeatedly (BGS/MPI/VA Notify API failures)
- Up to 17 total job attempts (1 + 16 Sidekiq retries)
- No email successfully sent, no callbacks, no retry jobs

**Scenario B - Delivery Failures**:
- Initial job succeeds, email sent to VA Notify successfully
- EventBusGatewayNotification created, callbacks received
- Up to 16 callback-triggered retries, each with up to 17 job attempts
- **Maximum: 273 total attempts** (1 initial + 16×17 callback retries)
- **Mutual Exclusivity**: Job execution failures prevent callback-triggered retries (no successful email send = no notification record = no callbacks)
- **Dual Exhaustion**: Independent exhaustion handling for each scenario
- **Enhanced Monitoring**: Separate metrics tracking distinguishing between job vs delivery failures

## Database Schema

### EventBusGatewayNotification Model

```sql
CREATE TABLE event_bus_gateway_notifications (
  id BIGSERIAL PRIMARY KEY,
  user_account_id UUID NOT NULL,
  va_notify_id VARCHAR NOT NULL,
  template_id VARCHAR NOT NULL,
  attempts INTEGER DEFAULT 1,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

-- Index
CREATE INDEX index_event_bus_gateway_notifications_on_user_account_id
  ON event_bus_gateway_notifications (user_account_id);

-- Foreign Key Constraint
ALTER TABLE event_bus_gateway_notifications
  ADD FOREIGN KEY (user_account_id) REFERENCES user_accounts(id);
```

**Relationships**:
- `belongs_to :user_account` - Links to veteran's account record
- Used for tracking retry attempts and VA Notify correlation

**Key Fields**:
- `va_notify_id` - Correlation ID from VA Notify API response
- `template_id` - Email template identifier
- `attempts` - Current retry attempt count (starts at 1)

### Migration History

**Initial Schema** (`20250717152023`):
- Basic table creation with user_account, va_notify_id, template_id

**Attempts Column** (`20250819181708`):
- Added attempts column for retry tracking

**Data Migration**:
- Sets attempts = 1 for existing records without attempt counts
- Ensures consistent retry counting across all notifications

## Monitoring & Observability

### StatsD Metrics Hierarchy

**Primary Job Metrics**:
- `event_bus_gateway.letter_ready_email.success` - Successful email sends
- `event_bus_gateway.letter_ready_email.failure` - Job execution failures
- `event_bus_gateway.letter_ready_email.exhausted` - Sidekiq retry exhaustion

**Retry Job Metrics**:
- `event_bus_gateway.letter_ready_retry_email.success` - Successful email sends
- `event_bus_gateway.letter_ready_retry_email.failure` - Job execution failures
- `event_bus_gateway.letter_ready_retry_email.exhausted` - Sidekiq retry exhaustion

**Callback Metrics**:
- Existing generic metrics:
  - `api.vanotify.notifications.delivered` - VA Notify delivery confirmations
  - `api.vanotify.notifications.permanent_failure` - VA Notify permanent failures
  - `api.vanotify.notifications.temporary_failure` - VA Notify temporary failures
  - `callbacks.event_bus_gateway.va_notify.notifications.delivered` - Delivery confirmations
  - `callbacks.event_bus_gateway.va_notify.notifications.permanent_failure` - Permanent failures
  - `callbacks.event_bus_gateway.va_notify.notifications.temporary_failure` - Temporary failures
- Callback specific metrics:
  - `event_bus_gateway.va_notify_email_status_callback.va_notify.notifications.#{status}` - Status notifications for callback
  - `event_bus_gateway.va_notify_email_status_callback.queued_retry_success` - Retry queuing success
  - `event_bus_gateway.va_notify_email_status_callback.queued_retry_failure` - Retry queuing failure
  - `event_bus_gateway.va_notify_email_status_callback.exhausted_retries` - Callback retry exhaustion

**Default Callback Metrics**
These metrics are sent in modules/va_notify/lib/va_notify/default_callback.rb before the custom callback app/sidekiq/event_bus_gateway/va_notify_email_status_callback.rb:
- `silent_failure_avoided` - delivered with no service or function tags
- `silent_failure` - temporary or permanent failure with no service or function tags

### DataDog Tag Strategy

**Comprehensive Tagging** (from Constants module) to adhere to [VA Platform Monitoring Tag standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards):
```ruby
DD_TAGS = [
  'service:event-bus-gateway',
  'team:cross-benefits-crew',
  'team:benefits',
  'itportfolio:benefits-delivery',
  'dependency:va-notify'
].freeze
```

### Logging Strategy

**Structured Logging Elements**:
- **Job Context** - job_id, timestamps, error class/messages (Sidekiq exhaustion)
- **Error Context** - error messages for job execution failures
- **Callback Context** - notification_id, status, status_reason, source_location
- **Retry Context** - ebg_notification_id, max_attempts (retry exhaustion)
- **Security Note** - participant_id is deliberately NOT logged to protect PII

## Error Handling

### Primary Job Failures

**BGS/MPI Lookup Failure/VA Notify API Failuress**:
- **Cause** - Service unavailable, invalid participant_id, data inconsistencies, authentication issues, etc.,
- **Handling** - Sidekiq automatic retry (16 attempts)
- **Logging** - Job context with error messages (participant_id NOT logged for PII protection)
- **Metrics** - `event_bus_gateway.letter_ready_email.failure`

### Retry Job Failures

**Notification Validation Failures**:
- **Cause** - EventBusGatewayNotification not found
- **Handling** - EventBusGatewayNotificationNotFoundError raised
- **Prevention** - Enhanced validation before email sending
- **Logging** - Clear error context with notification_id
- **Metrics** - `event_bus_gateway.letter_ready_retry_email.failure`

**Execution Failures**:
- **Cause** - BGS/MPI/VA Notify issues during retry
- **Handling** - Sidekiq automatic retry (16 attempts per retry)
- **Metrics** - `event_bus_gateway.letter_ready_retry_email.failure`
- **Exhaustion** - Dedicated exhaustion handling

### Callback Processing Failures

**Authentication Failures**:
- **Cause** - Invalid bearer tokens, configuration issues
- **Handling** - 401 Unauthorized response + logging
- **Security** - No sensitive information in error responses

**Processing Failures**:
- **Cause** - Invalid notification data, database issues
- **Handling** - Graceful degradation, comprehensive logging
- **Impact** - No interruption to retry flow continuity
- **Metrics** - `event_bus_gateway.va_notify_email_status_callback.queued_retry_failure`

## Feature Flags

**System Control Flags**:
- `event_bus_gateway_retry_emails` - Enables callback-triggered retry mechanism
