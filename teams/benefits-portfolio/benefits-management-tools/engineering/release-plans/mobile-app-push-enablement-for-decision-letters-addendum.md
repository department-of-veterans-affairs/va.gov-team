# VANotify Mobile App Push Enablement for Decision Letters Release Plan - Addendum

## 1. Overview

This release introduces push notifications for Decision Letter Availability (DLA) into the existing vets-api → VANotify → VEText pipeline. It builds on:

- A new `VANotify::PushClient` (custom client, inherits from `Common::Client::Base`)
- `VANotify::Service` `send_push` instance method delegating to this client
- Adds a `LetterReadyNotificationJob` to call `send_push` in addition to `send_email`
- A feature flag that controls whether push is invoked at all
- Coordination with VANotify, Notification API, VEText, and the mobile app team

The push template is owned/hosted by VEText, and VANotify acts as the intermediary to VEText's push endpoint.

## 2. Objectives

- Use VANotify + VEText as the single pipeline to send DLA push notifications, instead of direct VEText calls from our side.
- Ensure vets-api can call `POST /v2/notifications/push` using the VA Flagship Mobile App service ID & API key.
- Keep email and push keys/services separate:
  - BMT service + key for email
  - VA Mobile App service + key for push
- Provide sufficient observability via:
  - vets-api logs + monitoring (`Common::Client::Monitoring`)
  - VEText / Notification API logs (Datadog) for a comprehensive paper trail
- Use a feature flag for safe rollout and quick disable.

## 3. Scope & Constraints

### In Scope

**VANotify::PushClient:**
- Inherits from `Common::Client::Base`
- Implements `send_push(args)` calling `/v2/notifications/push`
- Uses `with_monitoring` for metrics and logging

**VANotify::Service:**
- Instantiates an internal client (e.g., `@internal_client`) for push
- Adds `send_push(args)` that delegates to `@internal_client.send_push(args)`
- Does not create `VANotify::Notification` records for push

**LetterReadyNotificationJob:**
- Calls `send_push` alongside `send_email`, gated by feature flag

**Feature flag:**
- Checks flag before invoking push to VANotify

**Configuration:**
- Separate service IDs and API keys for email vs push
- vets-api still expects UUID-style VANotify keys (`...-service_uuid-uuid_secret`)

**QA / Validation:**
- End-to-end testing using the staging VA Mobile App service ID & push API key
- Use VANotify NotificationPortal & Postman collection for push endpoint

### Out of Scope / Known Limitations

**No callbacks / status polling for push:**
- VANotify API does not store push notifications
- No `VANotify::Notification` records
- No callback support for push (unlike email/SMS)

**Delivery confirmation:**
- Success = VANotify → VEText returns 201 (request accepted), not device delivery
- Deeper status checks require VEText Datadog logs access

**Template management:**
- Push template remains in VEText, not in VANotify self-service portal
- We do not replicate the template in VANotify

## 4. Ownership & Collaboration

**VANotify module in vets-api:**
- Custodians: VANotify team (Michael Marchand + tech lead Nathan Wright)
- Our team is implementing push per their expectations and patterns.

**Notification API team:**
- Owns notification-api, API keys, and Postman collections.
- Provides correct service ID + key combinations and key format.

**VEText team:**
- Owns push template and mobile integration behavior.
- Provides "paper trail" via Datadog logs.

**Mobile app team (VA Flagship):**
- Previously validated template behavior and routing in the app.
- Our work focuses on "writing the service that calls VANotify to trigger these messages."

## 5. API & Credential Strategy

### 5.1 Service IDs & Keys

**Email:**
- Uses existing BMT service ID & key (e.g., `efd5806d-64d8-4453-acc9-8f842b2c5d65` in staging).

**Push:**
- Uses VA Flagship Mobile App service in staging (e.g., `92bf7f4b-4d65-47d1-9bbe-9ef31708141c`) and a corresponding push API key.
- We will receive a separate production push key specifically for DLA push work.

**Important decisions from Slack:**
- Push must use the service ID & key provided by Notification API/VANotify for the mobile app service, not the BMT email service.
- The push API key must follow the legacy vets-api format: name + service UUID + key UUID, because vets-api parses it that way.
- Keys have a 180-day rotation policy; new keys will be issued and must be updated in configuration.

### 5.2 Service Initialization Pattern

Final design agreed with VANotify:

- Keep `VANotify::Service` initialization signature unchanged (no `push_api_key` parameter added).
- Use separate instances of `VANotify::Service` in calling code:

**Example:**
```ruby
email_and_sms_service = VANotify::Service.new(email_api_key, callback_options)
push_service          = VANotify::Service.new(push_api_key, callback_options)

email_and_sms_service.send_email(email_params)
push_service.send_push(push_params)
```

- Clarify naming in calling code (e.g., `email_and_sms_service` vs `push_service`) to avoid confusion.

## 6. Implementation Details

**VANotify::Client:**
- Under `modules/va_notify/lib/va_notify/`
- `send_push(args)`:
  - Calls `POST /v2/notifications/push`
  - Uses `args.to_json` (no extra `build_payload` indirection)
  - Uses `with_monitoring` internally (so `Service#send_push` doesn't double-wrap)
  - Handles 2xx vs 4xx/5xx errors using existing `Common::Client` conventions
- Tests:
  - Successful 200/201
  - 4xx/5xx handling
  - timeouts & retries

**VANotify::Service#send_push(args):**
- Instantiates `VANotify::Client`
- Pattern:
```ruby
def send_push(args)
  response = @internal_client.send_push(args)
  response
end
```

- Does not:
  - Call `create_notification`
  - Use push callbacks
  - Depend on `va_notify_notification_creation` flipper

**LetterReadyNotificationJob:**
- When feature flag is ON:
  - Uses the email/SMS service for email
  - Uses the push-specific `VANotify::Service` instance for push
- Push payload includes:
  - `recipient_identifier` (PID)
  - `template_id` for the VEText push template
  - personalization fields matching email

## 7. Environment & Configuration Plan

### Local

- Use local/mocked keys or sandbox keys for dev.
- Feature flag: ON for developer testing.
- Validate:
  - Service instantiation pattern (two services)
  - Basic push client behavior with mocked responses

### Staging

- Use:
  - BMT staging service ID/key for email
  - VA Flagship Mobile App staging service ID/key for push (UUID-format key from Notification API)
- Feature flag:
  - ON for QA and end-to-end testing
- Tests:
  - Postman collection against `/v2/notifications/push` with correct service ID, key, and template ID.
  - End-to-end DLA event → vets-api → VANotify → VEText push → demo mobile app.

### Production

- Prerequisite: Production-level push key issued by Notification API/VANotify for the mobile app service.
- Feature flag:
  - OFF at time of code deploy.
  - Turned ON incrementally as part of rollout (see rollout steps below).

## 8. Testing & Validation (Refined)

### 8.1 Pre-Implementation / Discovery Validation

- Confirmed via Notification Portal / docs:
  - Push endpoint contract and request/response schemas.
- Validated that:
  - Notifications client gem (`notifications-ruby-client`) does not support push.
  - A custom client is required.

### 8.2 Functional & Integration Testing

**With Postman (staging):**
- Use service ID + key from Notification API team.
- Successfully send a push notification and confirm:
  - 201 from VEText (through VANotify).
  - Correct template ID used.

**Within vets-api:**
- Validate:
  - `send_push` calls the correct endpoint with expected JSON.
  - Authentication works with staging push key.
  - Error handling matches vets-api conventions.

**Using EB Gateway DLA events:**
- Trigger a decision letter event in staging.
- Confirm:
  - Email still works (existing behavior).
  - Push triggered when flag ON.
  - Personalization parity between push and email.

### 8.3 Observability & Creating a Paper Trail

**In vets-api:**
- Logs show:
  - Request to push endpoint.
  - Response status / errors.
- Monitoring:
  - Counts of push attempts, failures, timeouts.

**In VEText / Notification API:**
- Confirm:
  - 201 indicates VEText accepted the push request (not final delivery).
  - Teams can request access to VEText Datadog logs to inspect push status further.

### 8.4 Limitations Confirmed

- No `id` in successful push response (only `{"result":"success"}`).
- No `VANotify::Notification` records to store or track push.
- No callback mechanism for push status.
- These are accepted constraints and must be noted in release documentation and stakeholder comms.

## 9. Rollout Steps (Production)

### 9.1 Pre-Deployment

- Ensure PRs implementing `PushClient`, `Service#send_push`, feature flag usage, and job updates are:
  - Approved by VANotify team (Michael/Nathan).
  - Merged into vets-api main.
- Ensure production push API key is issued (Notification API / VANotify) and configured:
  - Correct UUID-style format.
  - Associated with VA Mobile App production service.
- Verify config:
  - Email keys unchanged.
  - Push key correctly wired to pushing portion of the code.
- Confirm monitoring dashboards and log filters exist for:
  - Push successes/failures.
  - Job failures and retries.

### 9.2 Deployment

- Deploy vets-api to production with:
  - Push key configured.
  - Feature flag OFF.
- Smoke test:
  - Trigger DLA events.
  - Confirm email notifications work.
  - Confirm no push calls appear in logs (flag working).

### 9.3 Gradual Enablement (Feature Flag)

**Step 1 – Internal / Very Limited**
- Enable push flag for internal / test PIDs or a small cohort.
- Trigger a DLA event.
- Validate:
  - 201 from VEText via logs.
  - No unexpected failures or timeouts.

**Step 2 – Controlled Rollout**
- Expand flag to a small percentage of real traffic (or defined user cohort).
- Monitor:
  - vets-api error rate (push-related).
  - Sidekiq job performance.
  - Any impact on EB Gateway or downstream systems.

**Step 3 – Full Enablement**
- Enable flag globally.
- Announce "push enabled for DLA" to BMT, VANotify, Notification API, VEText, and mobile teams.
- Document final state as "push live in production."

## 10. Rollback & Mitigation

**Primary lever: Feature flag**
- Turn OFF to stop all push calls while keeping email intact.

**If systemic issues persist:**
- Turn off flag.
- Investigate vets-api logs + VEText Datadog logs
- If necessary, roll back to prior vets-api deployment.

Since there are no push callbacks and no `VANotify::Notification` records, recovery focuses on:
- Preventing further push attempts.
- Understanding error patterns via logs/metrics.

## 11. Credential Rotation & Maintenance

Push keys are subject to 180-day rotation.

**Operational plan:**
- Track rotation windows from VANotify/Notification API comms.
- Update staging & production config with new keys prior to expiration.
- Run a quick smoke test after each key update:
  - Postman push call.
  - One EB Gateway-triggered DLA event.

## 12. Communication Plan

### Internal Stakeholders

**Engineering / QA (BMT + EB Gateway)**
- Technical overview of `PushClient` and `send_push`.
- Clear explanation of no callbacks / no notification records.

**VANotify / Notification API / VEText**
- Confirm rollout dates and any anticipated load.
- Confirm Datadog logging access for troubleshooting.

**Mobile App team**
- Verification that DLA push template is stable and still routing correctly.
- FYI on production enablement timeline.

### Documentation

Update:
- vets-api VANotify module docs (including push behavior and keys)
- Release notes for BMT3
- Internal runbook for:
  - Enabling/disabling push via flag
  - Updating push API keys
  - Investigating failures with VEText logs
