# VASS Module Logging

This document describes logging in the VASS (Veteran Appointment Self-Scheduling) module.

## Log Format

All VASS logs are output as JSON with a standardized structure:

| Field | Description |
|-------|-------------|
| `service` | Always `"vass"` |
| `action` | Event identifier (e.g., `jwt_issued`, `otc_expired`) |
| `timestamp` | ISO8601 timestamp |
| `controller` or `component` | Source context (controller name or service class) |
| `vass_uuid` | Veteran UUID for request tracing (when applicable) |
| `jti` | JWT ID for session-level audit trails (on authenticated requests) |
| `correlation_id` | Request correlation ID (on service-layer calls) |

**Example log entry:**
```json
{
  "service": "vass",
  "action": "jwt_issued",
  "timestamp": "2026-01-21T10:30:00Z",
  "controller": "sessions",
  "vass_uuid": "da1e1a40-1e63-f011-bec2-001dd80351ea",
  "jti": "550e8400-e29b-41d4-a716-446655440000"
}
```

---

## Security & Authentication Events

Events related to user authentication, authorization, and security monitoring.

| Event | Level | When It Fires | Key Fields |
|-------|-------|---------------|------------|
| `jwt_issued` | INFO | JWT token successfully issued after OTC validation | `vass_uuid`, `jti` |
| `auth_failure` | WARN | JWT authentication fails (expired, invalid, missing) | `reason`, `error_class` |
| `invalid_otc` | WARN | User submits incorrect OTC code | `vass_uuid` |
| `otc_expired` | WARN | User attempts to use an expired OTC | `vass_uuid` |
| `identity_validation_failed` | WARN | Submitted last name or DOB doesn't match VASS records | `vass_uuid` |

**`auth_failure` reasons:**
- `missing_token` - No Authorization header provided
- `expired_token` - JWT has expired
- `invalid_token` - JWT signature validation failed
- `missing_veteran_id` - JWT payload missing required `sub` claim

---

## Rate Limiting Events

Events for monitoring and investigating rate limit enforcement.

| Event | Level | When It Fires | Key Fields |
|-------|-------|---------------|------------|
| `rate_limit_exceeded` | WARN | Veteran exceeds OTC generation limit | `vass_uuid` |
| `validation_rate_limit_exceeded` | WARN | Veteran exceeds OTC validation attempt limit | `vass_uuid` |

Rate limits protect against brute-force attacks and abuse. When these fire frequently for a single `vass_uuid`, it may indicate:
- Automated attack attempts
- User confusion requiring UX improvements
- Integration issues with consuming applications

---

## External Service Events

Events for monitoring dependencies on external services.

| Event | Level | When It Fires | Key Fields |
|-------|-------|---------------|------------|
| `vass_api_error` | ERROR | VASS upstream API returns an error | `vass_uuid`, `error_class` |
| `vanotify_error` | ERROR | VANotify fails to send OTC notification | `vass_uuid`, `status_code`, `contact_method` |
| `oauth_cache_miss` | INFO | OAuth token not in cache, requesting new token | `correlation_id` |
| `oauth_token_missing` | ERROR | OAuth token response missing access_token | `correlation_id`, `status` |
| `auth_retry` | ERROR | Retrying request after authentication failure | `correlation_id` |
| `auth_failed` | ERROR | OAuth authentication ultimately failed | `correlation_id`, `error_type`, `status_code` |

---

## Session & Data Events

Events related to session management and data integrity.

| Event | Level | When It Fires | Key Fields |
|-------|-------|---------------|------------|
| `otc_generated` | INFO | OTC successfully created and sent to veteran | `vass_uuid` |
| `missing_contact_info` | ERROR | Veteran has no email address for OTC delivery | `vass_uuid` |
| `missing_edipi` | ERROR | EDIPI not found when making VASS API calls | `vass_uuid`, `jti` |
| `missing_booking_session` | WARN | Booking session data expired or not found in Redis | `vass_uuid`, `jti` |
| `metadata_not_found` | ERROR | Veteran metadata missing from Redis during session creation | - |
| `json_parse_failed` | ERROR | Cached data in Redis is corrupted/unparseable | `key_type` |

---

## Appointment Flow Events

Events specific to the appointment scheduling workflow.

| Event | Level | When It Fires | Key Fields |
|-------|-------|---------------|------------|
| `unexpected_availability_status` | ERROR | Availability check returned unknown status | `status`, `jti` |
| `date_parse_failed` | ERROR | VASS API returned date in unexpected format | `correlation_id` |
| `validation_error` | WARN | General request validation failure | - |

---

## Audit Trail

The `jti` (JWT ID) field enables session-level correlation. Every JWT issued contains a unique `jti`, and all subsequent authenticated requests include this value in logs.

**Use cases:**
- **Incident investigation:** Find all actions taken with a potentially compromised token
- **User support:** Trace a user's session to debug reported issues
- **Compliance:** Demonstrate what actions occurred during a specific session

**Example query:** 
```
service:vass AND jti:"550e8400-e29b-41d4-a716-446655440000"
```

This returns all log entries from a single authenticated session, showing the complete sequence of API calls made.
