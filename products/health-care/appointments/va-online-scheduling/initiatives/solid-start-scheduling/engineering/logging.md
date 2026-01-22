# VASS Module Logging Documentation

This document describes all logging events in the VASS (Veteran Appointment Self-Scheduling) module.

## Overview

All VASS logging uses a standardized format via the `Vass::Logging` concern. Each log entry is output as JSON with the following base fields:

| Field | Description |
|-------|-------------|
| `service` | Always `"vass"` |
| `action` | The specific event being logged |
| `timestamp` | ISO8601 timestamp |
| `controller` | Controller name (for controller logs) |
| `component` | Class name (for service/model logs) |
| `vass_uuid` | Veteran UUID for traceability (when available) |

## Log Levels

- **INFO** - Normal operations, successful events
- **WARN** - Recoverable issues, security events (rate limits, invalid OTC)
- **ERROR** - Failures requiring attention

---

## Authentication & Session Events

### `jwt_issued`
**Level:** INFO  
**Location:** `SessionsController#handle_successful_authentication`  
**Description:** Logged when a JWT token is successfully issued after OTC validation.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |
| `jti` | JWT ID for audit trail correlation |

**Example:**
```json
{"service":"vass","action":"jwt_issued","timestamp":"2026-01-21T10:30:00Z","controller":"sessions","vass_uuid":"abc-123","jti":"def-456"}
```

---

### `auth_failure`
**Level:** WARN  
**Location:** `JwtAuthentication#log_auth_failure`  
**Description:** Logged when JWT authentication fails.

| Field | Description |
|-------|-------------|
| `reason` | Failure reason: `missing_token`, `expired_token`, `invalid_token`, `missing_veteran_id` |
| `error_class` | Exception class name (for decode errors) |

---

## OTC (One-Time Code) Events

### `otc_generated`
**Level:** INFO  
**Location:** `SessionsController#complete_otc_creation`  
**Description:** Logged when an OTC is successfully generated and sent.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |

---

### `invalid_otc`
**Level:** WARN  
**Location:** `SessionsController#log_invalid_otc`  
**Description:** Logged when a user submits an incorrect OTC.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |

---

### `otc_expired`
**Level:** WARN  
**Location:** `SessionsController#handle_expired_otc`  
**Description:** Logged when a user attempts to validate an expired OTC.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |

---

## Rate Limiting Events

### `rate_limit_exceeded`
**Level:** WARN  
**Location:** `SessionsController#log_rate_limit_exceeded`  
**Description:** Logged when OTC generation rate limit is exceeded.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID (identifier) |

---

### `validation_rate_limit_exceeded`
**Level:** WARN  
**Location:** `SessionsController#log_validation_rate_limit_exceeded`  
**Description:** Logged when OTC validation attempt rate limit is exceeded.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID (identifier) |

---

## Identity Validation Events

### `identity_validation_failed`
**Level:** WARN  
**Location:** `SessionsController#handle_identity_validation_error`  
**Description:** Logged when submitted last_name/dob don't match VASS records.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |

---

### `missing_contact_info`
**Level:** ERROR  
**Location:** `SessionsController#handle_missing_contact_info_error`  
**Description:** Logged when veteran has no contact information in VASS.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |

---

### `metadata_not_found`
**Level:** ERROR  
**Location:** `Session#create_authenticated_session`  
**Description:** Logged when veteran metadata is not found in Redis during session creation.

---

## Appointment Events

### `missing_booking_session`
**Level:** WARN  
**Location:** `AppointmentsController#retrieve_appointment_id_from_session`  
**Description:** Logged when booking session data is not found in Redis.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |
| `jti` | JWT ID (via audit_metadata) |

---

### `missing_edipi`
**Level:** ERROR  
**Location:** `AppointmentsController#set_appointments_service`  
**Description:** Logged when veteran EDIPI is not found for API calls.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |
| `jti` | JWT ID (via audit_metadata) |

---

### `unexpected_availability_status`
**Level:** ERROR  
**Location:** `AppointmentsController#render_availability_result`  
**Description:** Logged when an unexpected status is returned from availability check.

| Field | Description |
|-------|-------------|
| `status` | The unexpected status value |
| `jti` | JWT ID (via audit_metadata) |

---

## External Service Events

### `vass_api_error`
**Level:** ERROR  
**Location:** `SessionsController#handle_vass_api_error`, `SessionsController#handle_authenticate_otc_error`  
**Description:** Logged when VASS API returns an error.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |
| `error_class` | Exception class name |

---

### `vanotify_error`
**Level:** ERROR  
**Location:** `SessionsController#handle_vanotify_error`  
**Description:** Logged when VANotify service fails to send notification.

| Field | Description |
|-------|-------------|
| `vass_uuid` | Veteran UUID |
| `error_class` | Exception class name |
| `status_code` | VANotify error status code |
| `contact_method` | Contact method attempted (email) |

---

## OAuth Events

### `oauth_cache_miss`
**Level:** INFO  
**Location:** `Client#ensure_oauth_token`  
**Description:** Logged when OAuth token is not in cache and must be minted.

| Field | Description |
|-------|-------------|
| `correlation_id` | Request correlation ID |

---

### `oauth_token_missing`
**Level:** ERROR  
**Location:** `Client#mint_oauth_token`  
**Description:** Logged when OAuth token response is missing access_token.

| Field | Description |
|-------|-------------|
| `correlation_id` | Request correlation ID |
| `status` | HTTP response status |
| `has_body` | Whether response had a body |

---

### `auth_retry`
**Level:** ERROR  
**Location:** `Client#log_auth_retry`  
**Description:** Logged when retrying after authentication failure.

| Field | Description |
|-------|-------------|
| `correlation_id` | Request correlation ID |

---

### `auth_failed`
**Level:** ERROR  
**Location:** `Client#log_auth_error`  
**Description:** Logged when authentication ultimately fails.

| Field | Description |
|-------|-------------|
| `correlation_id` | Request correlation ID |
| `error_type` | Type of authentication error |
| `status_code` | HTTP status code |

---

## Data Parsing Events

### `json_parse_failed`
**Level:** ERROR  
**Location:** `RedisClient#veteran_metadata`, `RedisClient#session`  
**Description:** Logged when cached JSON data fails to parse.

| Field | Description |
|-------|-------------|
| `key_type` | Type of data: `veteran_metadata` or `session_data` |

---

### `date_parse_failed`
**Level:** ERROR  
**Location:** `AppointmentsService#parse_vass_date`  
**Description:** Logged when VASS API returns an unparseable date format.

| Field | Description |
|-------|-------------|
| `correlation_id` | Request correlation ID |

---

## Service Error Events

### Generic service errors
**Level:** ERROR  
**Location:** `AppointmentsService#log_error`  
**Description:** Logged for general service-level errors.

| Field | Description |
|-------|-------------|
| `error_class` | Exception class name |
| `correlation_id` | Request correlation ID |

---

## Validation Events

### `validation_error`
**Level:** WARN  
**Location:** `SessionsController#log_validation_error`  
**Description:** Logged for general validation errors.

---

## Audit Trail Usage

The `jti` (JWT ID) field enables audit trail correlation. All actions performed with a single JWT token share the same `jti`, allowing you to:

1. **Trace all actions from a login session** - Search logs by `jti` to see everything done with that token
2. **Investigate security incidents** - If a token is compromised, find all actions taken
3. **Debug issues** - Correlate errors back to specific authentication events

**Example query:**
```
jti:"abc-123-def-456" | Filter by service:vass
```

This returns all log entries from a single authenticated session.
