# STS OAuth Integration: Eventbus Gateway to Vets-API

## Overview

This integration enables the Eventbus Gateway to securely send POST requests to a dedicated `vets-api` endpoint (`/v0/event_bus_gateway/send_email`) using OAuth-based service account authentication via VA’s Secure Token Service (STS).

This work supports the Decision Letter Notification initiative and was handed off to Benefits Management Tools Team 2 from the previous BMT1 team.

## Problem

The Eventbus Gateway needs to send POST requests containing Veteran data (e.g., `participant_id`) to `vets-api` for email delivery. To do so securely and without relying on user authentication, the service must integrate with STS to act as a non-user service client.

Requirements:
- Secure, scoped service-to-service access
- A dedicated vets-api endpoint that does not require user context
- Protection against unauthorized internet access

## 1. STS Configuration (Identity Team)

**ServiceAccountConfig Attributes**
- `service_account_id`: `75d8725d-1fa9-4cbd-b8a7-2252da6e25c1`
- `access_token_audience`: `eventbus-gateway-prod`
- `scopes`: `["https://api.va.gov/v0/event_bus_gateway/send_email"]`
- `access_token_user_attributes`: `["participant_id"]`
- Public certificate: Provided by Eventbus Gateway team; validated and added to vets-api configuration

These values are configured in `vets-api` to authorize access from the Eventbus Gateway using STS.

## 2. Certificate and Token (Eventbus Gateway Setup)

**JWT Assertion Flow**:
- Gateway creates an assertion JWT signed with its private key.
- Sends the JWT to `/v0/sign_in/token`.
- Receives an access token scoped for the authorized endpoint.

**Key Management**:
- Private key: Securely stored by the Eventbus Gateway team (recommended: AWS Parameter Store).
- Public certificate: Provided to Identity team for STS registration.

**JWT Sub Field**:
- Accepts any string (no enforced format); `participant_id` is acceptable.

## 3. Endpoint Design (vets-api)

**Path**: `/v0/event_bus_gateway/send_email`

**Controller Setup**:
- Controller: `EventBusGatewayController`
- Inherits from: `SignIn::ServiceAccountApplicationController`

**Authentication Features Inherited**:
- Skips CSRF protection
- Automatically validates STS access token
- Only permits requests with:
  - Valid `scope`
  - Matching `audience`
  - Signed JWT from registered `service_account_id`

**Business Logic**:
- Extracts `participant_id` from:
  ```ruby
  service_account_access_token.user_attributes['participant_id']

## 4. Key Notes and Troubleshooting

| Issue                     | Cause                          | Resolution                                  |
| ------------------------- | ------------------------------ | ------------------------------------------- |
| 403 Forbidden             | CSRF token missing             | Use `ServiceAccountApplicationController`   |
| 500 Internal Server Error | Invalid certificate formatting | Remove extra whitespace or newlines in cert |

## 5. Contacts

Role	Contact
Identity Team	Trevor Bosaw, Joe Niquette, John Bramley
Benefits Management Team	Stacy Wise
Eventbus Gateway Dev	Ian Donovan, Dariusz Dzien
Incident Response	#benefits-management-tools, event-bus@veterans-affairs.pagerduty.com

