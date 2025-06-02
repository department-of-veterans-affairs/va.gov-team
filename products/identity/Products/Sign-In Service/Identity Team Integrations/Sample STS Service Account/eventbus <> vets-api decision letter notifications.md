# STS OAuth Integration: Eventbus Gateway to Vets-API

## Overview

This integration enables the Eventbus Gateway to securely send POST requests to a dedicated vets-api endpoint (`/v0/event_bus_gateway/send_email`) using OAuth-based service account authentication via VA’s STS.

This work supports the Decision Letter Notification initiative and was handed off to Benefits Management Tools Team 2 from the previous BMT1 team.

## Problem

VA’s Eventbus Gateway service needs to send POST requests with Veteran data (e.g., participant ID) to vets-api for email delivery. This requires:

- Secure, scoped access from a service-level (non-user) client
- STS integration between Eventbus Gateway and vets-api
- A new endpoint that does not require user context but should not be publicly accessible

## Integration Steps

### 1. STS Configuration (Identity Team)

- Service Account ID: `75d8725d-1fa9-4cbd-b8a7-2252da6e25c1`
- Audience: `eventbus-gateway-prod`
- Scope: `https://api.va.gov/v0/event_bus_gateway/send_email`
- User Attribute: `participant_id`
- Controller: `EventBusGatewayController` in vets-api
- Parent Class: `SignIn::ServiceAccountApplicationController`
  - Skips CSRF
  - Enables token validation

### 2. Certificate and Token

- Public certificate: Provided by BMT team and added by Identity
- Private key: Stored securely by BMT team (recommended: Parameter Store)
- JWT Assertion: Created by Eventbus Gateway and submitted to `/v0/sign_in/token` to obtain an access token

### 3. Endpoint Design (vets-api)

- Path: `/v0/event_bus_gateway/send_email`
- Authenticates via STS token
- Extracts `participant_id` from `access_token.user_attributes`
- Only accepts requests from clients with valid scopes and tokens

## Key Notes and Troubleshooting

- The `sub` claim in the JWT can use `participant_id`. No strict validation is enforced.
- Use VA AWS Parameter Store for storing private keys.
- Staging was tested successfully with endpoint: `https://staging-api.va.gov/v0/event_bus_gateway/send_email`
- Production configuration is identical. All attributes should be reviewed before enabling.

### Common Errors

| Error                     | Cause                          | Resolution                                      |
|--------------------------|---------------------------------|------------------------------------------------|
| 403 Forbidden             | CSRF or missing auth headers   | Inherit from `ServiceAccountApplicationController` |
| 500 Internal Server Error| Invalid public certificate     | Remove extra whitespace or newlines in cert    |

## Contacts

| Role                    | Contact                              |
|-------------------------|--------------------------------------|
| Identity Team           | Trevor Bosaw, Joe Niquette, John Bramley |
| Benefits Management     | Stacy Wise                          |
| Eventbus Gateway Dev    | Ian Donovan, Dariusz Dzien         |
| Incident Response       | #benefits-management-tools, event-bus@veterans-affairs.pagerduty.com |

## Next Steps

- Staging config tested successfully
- Production config created (May 22)
- Certificate validated and added
- Schedule final security sign-off (week of May 27)
- Proceed with production deployment when app is ready

## References

- [STS Auth Flow Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/service_account_auth_flows.md)
- [GitHub Epic: Decision Letter Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/issues/77622)
