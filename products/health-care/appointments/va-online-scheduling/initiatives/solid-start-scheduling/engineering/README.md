# Solid Start Scheduling - Engineering Documentation

This folder contains technical documentation and recommendations for the Solid Start Scheduling initiative, which aims to streamline appointment scheduling for Veterans through va.gov integration with Microsoft Dynamics.

## Overview

The Solid Start Scheduling project creates a seamless appointment scheduling experience for Veterans by connecting va.gov frontend with Microsoft Dynamics backend through a standardized API layer.

## Files in this Directory

### [adr-authentication-approach.md](./adr-authentication-approach.md)

Architecture Decision Records documenting key technical decisions made during the project.

### [api-authenticate.md](./api-authenticate.md)

Authentication implementation strategy:

- **Veteran Authentication (OTP Flow):**
  - Veterans receive unique scheduling link via email with UUID
  - Identity validation using last name, date of birth, and UUID
  - One-time passcode (OTP) sent via VA Notify for verification
  - Scoped, time-limited access without full SSO
  - Single-use OTP grants access to appointment scheduling features
- **Service-to-Service Authentication (vets-api to VASS API):**
  - OAuth 2.0 client credentials flow with Microsoft Azure AD
  - Automatic token acquisition, caching in Redis, and refresh
  - Bearer token and Azure API Management subscription key headers
  - Correlation ID for request tracing and logging
  - Automatic retry on token expiration
- Authentication sequence diagrams and patterns

### [api-specification.md](./api-specification.md)

API specification and contract definitions for the Solid Start Scheduling API.

### [data-flow-diagram.md](./data-flow-diagram.md)

Data flow diagrams and documentation:

- API calls and data flow visualization
- Data Collection and usage

### [high-level-architecture.md](./high-level-architecture.md)

System architecture documentation:

- Component relationships and interactions
- va.gov frontend → vets-api → VASS API → MS Dynamics flow
- Cloud grouping and service boundaries

### [logging.md](./logging.md)

Logging strategy and implementation:

- Log levels and structured logging patterns
- Correlation ID tracking across services
- PII/PHI handling in logs
- Log aggregation and querying

### [metrics.md](./metrics.md)

Metrics and monitoring documentation:

- Key performance indicators (KPIs)
- System health metrics
- Alerting thresholds and escalation
- Dashboard configurations

## Key Architectural Decisions

1. **Frontend/Backend Split**: Veterans use va.gov interface, staff use Dynamics interface
2. **Data Storage**: All data stored in MS Dynamics database
3. **API Layer**: Standardized REST API between va.gov and Dynamics
4. **Authentication:** 
   - One-time passcode (OTP) flow for veteran authentication
   - OAuth 2.0 client credentials for service-to-service authentication
5. **Notifications**: VA Notify integration for email delivery

## Related Resources

- [VA API Standards](https://code.va.gov/docs/default/component/va-api-standards/)
- [VA Notify Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md)

