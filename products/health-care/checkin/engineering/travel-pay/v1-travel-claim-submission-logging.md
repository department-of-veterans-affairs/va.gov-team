# Travel Claim Submission Logging Guide

This document explains the logging that occurs during the travel claim submission process and what to look for in different scenarios.

## Overview

The travel claim submission process flows through three layers:

1. **Controller Layer** (`CheckIn::V1::TravelClaimsController`) - Handles HTTP request/response
2. **Service Layer** (`TravelClaim::ClaimSubmissionService`) - Orchestrates the submission workflow
3. **Client Layer** (`TravelClaim::TravelPayClient`) - Makes API calls to Travel Pay (BTSSS) service

The complete flow involves:

1. **Request Reception** - Controller receives POST request
2. **Authorization** - Validates session and feature flags
3. **Service Initialization** - Service validates parameters
4. **Client Initialization** - Client loads data from Redis
5. **Authentication** - Obtaining VEIS and BTSSS tokens
6. **Appointment Lookup/Creation** - Finding or creating an appointment record
7. **Claim Creation** - Creating a new travel claim
8. **Expense Addition** - Adding mileage expense to the claim
9. **Claim Submission** - Submitting the claim for processing
10. **Response** - Controller returns success or error response
11. **Notification** - Background job sends SMS notification (if enabled)

All logging follows PHI/PII safety guidelines - no patient health information or personally identifiable information is logged.

## Log Message Structure

### Controller Logs

Controller logs use the `HCE-Check-In` logger and include:

- `workflow` - Workflow identifier (empty for travel_claims)
- `uuid` - Check-in session UUID from request
- `controller` - Controller name ('travel_claims')
- `action` - Action name ('create')
- `initiated_by` - Who initiated the request (empty for travel_claims)
- `facility_type` - Facility type from request params ('oh' or 'vamc')
- `filter` - `:before_action` or `:after_action`
- `api_status` - API status extracted from response body (after_action only)

### Service Logs

All service logs include:

- `message` - Prefixed with "CIE Travel Claim Submission:"
- `facility_type` - Facility type ('oh' or 'vamc')
- `check_in_uuid` - Check-in session UUID

**Note:** Service logs are only written when the `check_in_experience_travel_claim_logging` feature flag is enabled.

### Client Logs

All `TravelPayClient` log messages include:

- `correlation_id` - Unique identifier for tracking a request through the system
- `check_in_uuid` - Check-in session UUID
- `veis_token_present` - Boolean indicating if VEIS token exists
- `btsss_token_present` - Boolean indicating if BTSSS token exists

### Notification Job Logs

All notification job logs include:

- `message` - Prefixed with job class name (e.g., "CheckIn::TravelClaimNotificationJob: ...")
- `status` - Status of the notification attempt:
  - `'sending'` - SMS is being sent
  - `'success'` - SMS API request succeeded
  - `'failed'` - SMS failed but will retry
  - `'failed_no_retry'` - SMS failed and won't retry
- `template_id` - VaNotify template ID used
- `phone_last_four` - Last four digits of phone number (for privacy)
- `uuid` - Check-in UUID (only included in error logs, not success logs)

**Note:** Notification jobs run asynchronously via Sidekiq, so logs may appear after the controller response.

## Complete Request Flow and Logging

### Stage 1: Controller Request Reception

**Log Messages:**

- `HCE-Check-In` (before_action) - Request received
  - Fields: `workflow`, `uuid`, `controller: 'travel_claims'`, `action: 'create'`, `facility_type`, `filter: :before_action`

**What Happens:**

- Controller receives POST request to `/check_in/v1/travel_claims`
- Validates feature flag `check_in_experience_travel_reimbursement`
- Validates session authorization
- Calls `ClaimSubmissionService.submit_claim`

**What to Look For:**

- Missing `uuid` in logs indicates parameter validation failure
- Missing `facility_type` suggests request parameter issue

### Stage 2: Service Initialization and Validation

**Log Messages (when feature flag enabled):**

- `CIE Travel Claim Submission: Travel claim transaction START` - Service begins processing
  - Fields: `facility_type`, `check_in_uuid`

**What Happens:**

- Service validates required parameters (appointment_date, facility_type, check_in_uuid)
- Validates appointment date format (must be ISO 8601 with time component)
- Initializes `TravelPayClient` with validated parameters

**What to Look For:**

- If this log doesn't appear, check feature flag status
- Parameter validation errors raise `BackendServiceException` with codes:
  - `VA902` - Appointment date missing
  - `VA903` - Facility type missing
  - `VA904` - Check-in UUID missing
  - `VA905` - Invalid appointment date format

### Stage 3: Client Initialization

**Log Messages:**

- `TravelPayClient initialization failed` - When required arguments are missing
  - Fields: `missing_arguments`, `redis_data_loaded`
- `TravelPayClient Redis error` - When Redis operations fail during initialization
  - Fields: `operation`, `icn_present`, `station_number_present`
- `TravelPayClient identity context missing` - When ICN or station_number is missing after Redis load
  - Fields: `icn_present`, `station_number_present`

**What to Look For:**

- Missing ICN or station_number indicates Redis data not available
- Redis errors suggest connectivity or configuration issues

### Stage 2: Authentication (VEIS Token)

**Log Messages:**

- `TravelPayClient VEIS endpoint error` - When VEIS token request fails
  - Fields: `status`, `endpoint: 'VEIS'`
- `TravelPayClient authentication failed` - When authentication fails after retry
  - Fields: `error_type`, `status_code`
- `TravelPayClient 401 error - retrying authentication` - When 401 occurs and retry is attempted

**What to Look For:**

- Status `504` indicates timeout - check VEIS service availability
- Status `500/502` indicates server errors - check VEIS service health
- Status `401` after retry suggests invalid credentials or token expiration

### Stage 3: Authentication (BTSSS Token)

**Log Messages:**

- `TravelPayClient BTSSS auth preflight` - Info log before BTSSS token request
  - Fields: `correlation_id`, `icn_present`
- `TravelPayClient BTSSS endpoint error` - When BTSSS token request fails
  - Fields: `status`, `endpoint: 'BTSSS'`
- `TravelPayClient BTSSS token mint aborted (missing ICN)` - When ICN is missing for BTSSS token
  - Fields: `icn_present: false`
- `TravelPayClient building headers without tokens` - Warning when headers built without tokens

**What to Look For:**

- Status `504` indicates timeout - check BTSSS service availability
- Status `500/502` indicates server errors - check BTSSS service health
- Missing ICN errors suggest data loading issues

### Stage 4: Claim Submission Workflow

**Log Messages (when feature flag enabled):**

- `CIE Travel Claim Submission: Get appointment ID` - Starting appointment lookup
- `CIE Travel Claim Submission: Create claim` - Starting claim creation
- `CIE Travel Claim Submission: Add expense to claim` - Starting expense addition
- `CIE Travel Claim Submission: Submit claim` - Starting claim submission
- `CIE Travel Claim Submission: Sending success notification` - When notification is queued (if enabled)
- `CIE Travel Claim Submission: Sending error notification` - When error notification is queued (if enabled)
- `CIE Travel Claim Submission: Failed to extract claim number` - When claim number extraction fails
- `CIE Travel Claim Submission: Unexpected error` - When non-BackendServiceException occurs
  - Fields: `error_class`

**API Error Logs:**

- `TravelPayClient BTSSS endpoint error` - For any BTSSS API call failure
  - Fields: `status`, `endpoint: 'BTSSS'`
- `TravelPayClient existing claim error` - When claim already exists (400 with "already been created")
  - Fields: `message: 'Validation failed: A claim has already been created for this appointment.'`

**What to Look For:**

- Each stage logs its start - if a stage doesn't complete, check for error logs after that stage
- Status codes indicate the type of failure:
  - `400` - Bad request (validation errors, duplicate claims)
  - `404` - Resource not found
  - `500/502/503` - Server errors
  - `504` - Gateway timeout

### Stage 5: Controller Response

**Log Messages:**

- `HCE-Check-In` (after_action) - Request completed
  - Fields: `workflow`, `uuid`, `controller: 'travel_claims'`, `action: 'create'`, `facility_type`, `api_status`, `filter: :after_action`

**What Happens:**

- Controller renders JSON response with success or error
- Response status codes:
  - `200` - Success
  - `400` - Bad request (validation errors)
  - `401` - Unauthorized (session not authorized)
  - `409` - Conflict (duplicate claim)
  - `422` - Unprocessable entity
  - `429` - Too many requests
  - `502` - Bad gateway (API errors)

**What to Look For:**

- `api_status` field shows the status extracted from response body
- Check `api_status` to understand final outcome

### Stage 6: Notification (Background Job)

**Log Messages:**

- `CheckIn::TravelClaimNotificationJob: Sending Travel Claim Notification SMS` (info)
  - Fields: `status: 'sending'`, `template_id`, `phone_last_four`
- `CheckIn::TravelClaimNotificationJob: Travel Claim Notification SMS API request succeeded` (info)
  - Fields: `status: 'success'`, `template_id`, `phone_last_four`
- `CheckIn::TravelClaimNotificationJob: Failed to send Travel Claim Notification SMS: ...` (error)
  - Fields: `status: 'failed'` or `'failed_no_retry'`, `template_id`, `phone_last_four`, `uuid`
- `Travel Claim Notification retries exhausted: ...` (error)
  - Fields: Context includes `template_id`, `phone_last_four`, `claim_number`

**What Happens:**

- Job is queued asynchronously after successful claim submission (if notifications enabled)
- Job retrieves phone number from Redis using UUID
- Validates required fields (phone_number, template_id, appointment_date)
- Sends SMS via VaNotify service
- Retries up to 14 times (approximately 25 hours) on failure
- Logs to Sentry when all retries exhausted

**What to Look For:**

- Job runs asynchronously - logs may appear after controller response
- Missing phone number results in `failed_no_retry` status
- Invalid appointment date format results in `failed_no_retry` status
- VaNotify API failures trigger retries (status: `'failed'`)
- After 14 retries, job logs to Sentry and stops

**StatsD Metrics:**

- `api.check_in.travel_claim.notify.success` - SMS API request succeeded
- `api.check_in.travel_claim.notify.error` - SMS failed (all failures)
- `api.check_in.travel_claim.notify.silent_failure` - Silent failures (for error/failure templates)

## Error Scenarios

### Scenario 1: Successful Submission

**Complete Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `CIE Travel Claim Submission: Create claim`
5. `CIE Travel Claim Submission: Add expense to claim`
6. `CIE Travel Claim Submission: Submit claim`
7. `CIE Travel Claim Submission: Sending success notification` (if notification enabled)
8. `HCE-Check-In` (after_action) - Request completed with `api_status: 'success 200'`
9. (Background) `CheckIn::TravelClaimNotificationJob: Sending Travel Claim Notification SMS` (if notification enabled)
10. (Background) `CheckIn::TravelClaimNotificationJob: Travel Claim Notification SMS API request succeeded` (if notification enabled)

**StatsD Metrics:**

- `api.check_in.btsss.success` (CIE) or `api.check_in.oh.btsss.success` (OH)
- `api.check_in.travel_claim.notify.success` (if notification enabled)

**What to Look For:**

- All service stage logs should appear in sequence
- Final controller log should show `api_status: 'success 200'`
- Notification job logs appear asynchronously after controller response
- Notification success log indicates SMS API request succeeded (not delivery confirmation)

### Scenario 2: Parameter Validation Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. Controller error handler renders 400 response
3. `HCE-Check-In` (after_action) - Request completed with error status

**Error Codes:**

- `VA902` - Appointment date missing
- `VA903` - Facility type missing
- `VA904` - Check-in UUID missing
- `VA905` - Invalid appointment date format

**What to Check:**

- Verify request parameters are present and correctly formatted
- Check appointment date includes time component (ISO 8601 format)

### Scenario 3: Session Authorization Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. Controller returns 401 Unauthorized
3. `HCE-Check-In` (after_action) - Request completed with `api_status: 'unauthorized'`

**What to Check:**

- Verify session token is valid
- Check session expiration
- Review authorization logic

### Scenario 4: Authentication Failure (VEIS/BTSSS)

**Log Messages:**

- `TravelPayClient VEIS endpoint error` with status `500/502/504`
- OR `TravelPayClient BTSSS endpoint error` with status `500/502/504`
- OR `TravelPayClient authentication failed` with `error_type` and `status_code`
- `CIE Travel Claim Submission: Sending error notification` (if enabled)
- `HCE-Check-In` (after_action) - Request completed with error status

**What to Check:**

- Verify VEIS/BTSSS service availability
- Check credentials configuration
- Review token expiration settings

### Scenario 5: Appointment Not Found/Created

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `TravelPayClient BTSSS endpoint error` with status `404` or `500/502`
5. `CIE Travel Claim Submission: Sending error notification` (if enabled)
6. `HCE-Check-In` (after_action) - Request completed with error status

**StatsD Metrics:**

- `api.check_in.btsss.appointment_error` (CIE) or `api.check_in.oh.btsss.appointment_error` (OH)

**What to Check:**

- Verify appointment date/time format
- Check station number validity
- Review BTSSS appointment service logs

### Scenario 6: Claim Creation Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `CIE Travel Claim Submission: Create claim`
5. `TravelPayClient BTSSS endpoint error` with status `400/500/502`
   - OR `TravelPayClient existing claim error` (if duplicate)
6. `CIE Travel Claim Submission: Sending error notification` (if enabled)
7. `HCE-Check-In` (after_action) - Request completed with error status

**StatsD Metrics:**

- `api.check_in.btsss.claim_create_error` (CIE) or `api.check_in.oh.btsss.claim_create_error` (OH)
- OR `api.check_in.btsss.duplicate` (CIE) or `api.check_in.oh.btsss.duplicate` (OH) for duplicates

**What to Check:**

- For `400` errors: Check if claim already exists for this appointment
- For `500/502`: Check BTSSS claim service health
- Review appointment ID validity

### Scenario 7: Expense Addition Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `CIE Travel Claim Submission: Create claim`
5. `CIE Travel Claim Submission: Add expense to claim`
6. `TravelPayClient BTSSS endpoint error` with status `400/500/502`
7. `CIE Travel Claim Submission: Sending error notification` (if enabled)
8. `HCE-Check-In` (after_action) - Request completed with error status

**StatsD Metrics:**

- `api.check_in.btsss.expense_add_error` (CIE) or `api.check_in.oh.btsss.expense_add_error` (OH)

**What to Check:**

- Verify claim ID is valid
- Check date format (should be YYYY-MM-DD)
- Review expense type and amount validation

### Scenario 8: Claim Submission Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `CIE Travel Claim Submission: Create claim`
5. `CIE Travel Claim Submission: Add expense to claim`
6. `CIE Travel Claim Submission: Submit claim`
7. `TravelPayClient BTSSS endpoint error` with status `400/500/502`
8. `CIE Travel Claim Submission: Sending error notification` (if enabled)
9. `HCE-Check-In` (after_action) - Request completed with error status

**StatsD Metrics:**

- `api.check_in.btsss.claim_submit_error` (CIE) or `api.check_in.oh.btsss.claim_submit_error` (OH)

**What to Check:**

- Verify claim is in correct state for submission
- Check BTSSS submission service health
- Review claim completeness

### Scenario 9: Duplicate Claim

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `CIE Travel Claim Submission: Get appointment ID`
4. `CIE Travel Claim Submission: Create claim`
5. `TravelPayClient existing claim error`
   - Message: `'Validation failed: A claim has already been created for this appointment.'`
6. `CIE Travel Claim Submission: Sending error notification` (if enabled, with duplicate template)
7. `HCE-Check-In` (after_action) - Request completed with `api_status: 'conflict 409'`

**StatsD Metrics:**

- `api.check_in.btsss.duplicate` (CIE) or `api.check_in.oh.btsss.duplicate` (OH)

**What to Check:**

- This is expected behavior - user attempted to submit duplicate claim
- Check if user is retrying submission unnecessarily
- Controller returns 409 Conflict status

### Scenario 10: Timeout Errors

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. (Service stage logs up to timeout point)
4. `TravelPayClient VEIS endpoint error` with status `504`
   - OR `TravelPayClient BTSSS endpoint error` with status `504`
5. `CIE Travel Claim Submission: Sending error notification` (if enabled)
6. `HCE-Check-In` (after_action) - Request completed with error status

**What to Check:**

- Network connectivity issues
- Service response times
- Timeout configuration values
- Service availability/load

### Scenario 11: Redis Errors

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `TravelPayClient Redis error`
   - Fields: `operation`, `icn_present`, `station_number_present`
4. `TravelPayClient initialization failed` (if critical)
5. `HCE-Check-In` (after_action) - Request completed with error status

**What to Check:**

- Redis connectivity
- Redis configuration
- Data availability in Redis cache

### Scenario 12: Initialization Errors

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. `TravelPayClient initialization failed`
   - Fields: `missing_arguments`, `redis_data_loaded`
4. `HCE-Check-In` (after_action) - Request completed with error status

**What to Check:**

- Required parameters (appointment_date_time, ICN, station_number)
- Redis data availability
- Parameter validation

### Scenario 13: Notification Job Missing Phone Number

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. ... (claim submission succeeds)
4. `CIE Travel Claim Submission: Sending success notification`
5. `CheckIn::TravelClaimNotificationJob: Failed to send Travel Claim Notification SMS: missing phone_number, Won't Retry`
   - Fields: `status: 'failed_no_retry'`, `template_id`, `uuid`

**StatsD Metrics:**

- `api.check_in.travel_claim.notify.error`

**What to Check:**

- Verify phone number exists in Redis for the UUID
- Check Redis data availability
- Review phone number field names (patient_cell_phone or mobile_phone)

### Scenario 14: Notification Job Invalid Date Format

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. ... (claim submission succeeds)
4. `CIE Travel Claim Submission: Sending success notification`
5. `CheckIn::TravelClaimNotificationJob: Failed to send Travel Claim Notification SMS: invalid appointment date format, Won't Retry`
   - Fields: `status: 'failed_no_retry'`, `template_id`, `uuid`

**StatsD Metrics:**

- `api.check_in.travel_claim.notify.error`

**What to Check:**

- Verify appointment date is in YYYY-MM-DD format
- Check date parsing logic

### Scenario 15: Notification Job VaNotify API Failure

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. ... (claim submission succeeds)
4. `CIE Travel Claim Submission: Sending success notification`
5. `CheckIn::TravelClaimNotificationJob: Sending Travel Claim Notification SMS`
6. `CheckIn::TravelClaimNotificationJob: Failed to send Travel Claim Notification SMS: ...`
   - Fields: `status: 'failed'`, `template_id`, `phone_last_four`, `uuid`
7. (Job retries up to 14 times)
8. `Travel Claim Notification retries exhausted: ...` (if all retries fail)

**StatsD Metrics:**

- `api.check_in.travel_claim.notify.error` (on each failure)
- `api.check_in.travel_claim.notify.silent_failure` (if error/failure template, after retries exhausted)

**What to Check:**

- VaNotify service availability
- Network connectivity
- API key configuration
- Check Sentry for retry exhaustion errors

### Scenario 16: Notification Job Success

**Log Sequence:**

1. `HCE-Check-In` (before_action) - Request received
2. `CIE Travel Claim Submission: Travel claim transaction START`
3. ... (claim submission succeeds)
4. `CIE Travel Claim Submission: Sending success notification`
5. `CheckIn::TravelClaimNotificationJob: Sending Travel Claim Notification SMS`
   - Fields: `status: 'sending'`, `template_id`, `phone_last_four`
6. `CheckIn::TravelClaimNotificationJob: Travel Claim Notification SMS API request succeeded`
   - Fields: `status: 'success'`, `template_id`, `phone_last_four`

**StatsD Metrics:**

- `api.check_in.travel_claim.notify.success`

**What to Look For:**

- Both "Sending" and "succeeded" logs should appear
- Note: This logs API request success, not actual SMS delivery
- Actual delivery status is tracked via VA Notify callbacks (if enabled)

## StatsD Metrics

### Success Metrics

- `api.check_in.btsss.success` - Successful claim submission (CIE)
- `api.check_in.oh.btsss.success` - Successful claim submission (OH)

### Error Metrics

- `api.check_in.btsss.appointment_error` - Appointment lookup/creation failed (CIE)
- `api.check_in.oh.btsss.appointment_error` - Appointment lookup/creation failed (OH)
- `api.check_in.btsss.claim_create_error` - Claim creation failed (CIE)
- `api.check_in.oh.btsss.claim_create_error` - Claim creation failed (OH)
- `api.check_in.btsss.expense_add_error` - Expense addition failed (CIE)
- `api.check_in.oh.btsss.expense_add_error` - Expense addition failed (OH)
- `api.check_in.btsss.claim_submit_error` - Claim submission failed (CIE)
- `api.check_in.oh.btsss.claim_submit_error` - Claim submission failed (OH)
- `api.check_in.btsss.duplicate` - Duplicate claim detected (CIE)
- `api.check_in.oh.btsss.duplicate` - Duplicate claim detected (OH)

### Notification Metrics

- `api.check_in.travel_claim.notify.success` - SMS API request succeeded
- `api.check_in.travel_claim.notify.error` - SMS failed (all failures)
- `api.check_in.travel_claim.notify.silent_failure` - Silent failures (for error/failure/timeout templates)
  - Tagged with `service:check-in` and facility type tags (CIE or OH)

## Debugging Tips

1. **Follow the complete flow**: Start with controller `before_action` log, then service logs, then client logs, and finally controller `after_action` log. This gives you the full request lifecycle.

2. **Use correlation_id**: All TravelPayClient logs include a `correlation_id` that can be used to trace a single request through all log entries across all layers.

3. **Use check_in_uuid**: Both service and client logs include `check_in_uuid` which can be used to correlate logs across layers.

4. **Check feature flags**: Service-level logs (ClaimSubmissionService) only appear when `check_in_experience_travel_claim_logging` is enabled.

5. **Follow the sequence**: Logs appear in sequence - if you see "Get appointment ID" but not "Create claim", the failure occurred during appointment lookup.

6. **Status codes**: HTTP status codes in error logs indicate the type of failure:

   - `4xx` - Client errors (validation, not found, etc.)
   - `5xx` - Server errors (internal errors, bad gateway, etc.)
   - `504` - Timeout errors

7. **Controller api_status**: The `after_action` log includes `api_status` extracted from the response body, which shows the final outcome.

8. **Token presence**: Check `veis_token_present` and `btsss_token_present` fields in client logs to understand authentication state.

9. **Endpoint identification**: Error logs include `endpoint: 'VEIS'` or `endpoint: 'BTSSS'` to identify which service failed.

10. **Layer identification**:
    - Controller logs: Look for `HCE-Check-In` and `filter: :before_action` or `:after_action`
    - Service logs: Look for `CIE Travel Claim Submission:` prefix
    - Client logs: Look for `TravelPayClient` prefix

## Example Log Queries

### Find complete request flow for a specific check-in UUID:

```
uuid:<check_in_uuid> AND (HCE-Check-In OR "CIE Travel Claim Submission" OR TravelPayClient)
```

### Find all errors for a specific check-in UUID:

```
check_in_uuid:<uuid> AND (TravelPayClient OR "CIE Travel Claim Submission")
```

### Find all requests for a specific correlation_id (cross-layer):

```
correlation_id:<correlation_id>
```

### Find all authentication failures:

```
"TravelPayClient authentication failed" OR "TravelPayClient VEIS endpoint error" OR "TravelPayClient BTSSS endpoint error"
```

### Find all timeout errors:

```
status:504 AND (TravelPayClient VEIS endpoint error OR TravelPayClient BTSSS endpoint error)
```

### Find duplicate claim errors:

```
"TravelPayClient existing claim error" OR "already been created"
```

### Find all controller requests:

```
HCE-Check-In AND controller:travel_claims AND action:create
```

### Find all successful submissions:

```
HCE-Check-In AND controller:travel_claims AND api_status:"success 200"
```

### Find all failed submissions:

```
HCE-Check-In AND controller:travel_claims AND NOT api_status:"success 200"
```

### Find all notification job logs:

```
CheckIn::TravelClaimNotificationJob
```

### Find notification job failures:

```
CheckIn::TravelClaimNotificationJob AND status:failed
```

### Find notification job retry exhaustion:

```
"Travel Claim Notification retries exhausted"
```

## Related Documentation

- [Travel Claims Controller](../app/controllers/check_in/v1/travel_claims_controller.rb)
- [Claim Submission Service](../app/services/travel_claim/claim_submission_service.rb)
- [Travel Pay Client Implementation](../app/services/travel_claim/travel_pay_client.rb)
- [Travel Claim Notification Job](../app/sidekiq/check_in/travel_claim_notification_job.rb)
