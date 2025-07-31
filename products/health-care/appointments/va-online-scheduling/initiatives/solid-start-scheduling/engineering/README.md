# Solid Start Scheduling - Engineering Documentation

This folder contains technical documentation and recommendations for the Solid Start Scheduling initiative, which aims to streamline appointment scheduling for Veterans through va.gov integration with VASS (VA Appointment Solid Start).

## Overview

The Solid Start Scheduling project creates a seamless appointment scheduling experience for Veterans by connecting va.gov frontend with Microsoft Dynamics backend through a standardized API layer.

## Files in this Directory

### [📝 recommendations.md](./recommendations.md)

Main technical recommendations and feedback document:

- API standards alignment (VA Standards, JSON API, OpenAPI)
- Specific endpoint feedback and improvements
- RESTful design principles
- Authentication and monitoring considerations
- Big picture architectural decisions

### [🔐 api-authenicate.md](./api-authenicate.md)

Authentication implementation strategy:

- Sign in Service (SiS) integration approach
- JWT token flow between va.gov and VASS API
- Real-world example from Travel Pay implementation
- Authentication sequence diagrams and patterns

### [🏗️ high-level-architecture.md](./high-level-architecture.md)

System architecture diagram:

- Mermaid diagram showing component relationships
- va.gov frontend → vets-api → VASS API → MS Dynamics flow
- Cloud grouping and service boundaries

### [🔄 simple-happy-path.md](./simple-happy-path.md)

User flow sequence diagram:

- Step-by-step appointment scheduling process
- SMS initiation to confirmation workflow
- API calls and data flow visualization
- Veteran interaction points

### [📊 standard-api-response.md](./standard-api-response.md)

API response standardization:

- Proposed unified response structure
- Correlation ID implementation
- Error handling and success patterns
- Before/after examples for endpoint improvements

## Key Architectural Decisions

1. **Frontend/Backend Split**: Veterans use va.gov interface, staff use Dynamics interface
2. **Data Storage**: All data stored in MS Dynamics database
3. **API Layer**: Standardized REST API between va.gov and Dynamics
4. **Authentication**: Sign in Service (SiS) integration with JWT tokens
5. **Notifications**: VA Notify integration for SMS and email

## Getting Started

1. Start with `recommendations.md` for high-level technical direction
2. Review `high-level-architecture.md` for system overview
3. Check `simple-happy-path.md` for user flow understanding
4. Dive into `api-authenicate.md` for auth implementation details
5. Use `standard-api-response.md` for API design patterns

## Outstanding Questions

The following questions need to be addressed during implementation:

## Dev access

- Can we get access to a lower environment (sandbox) to play with

### Infrastructure & Operations ([recommendations.md](./recommendations.md))

- How are we monitoring?
- How are we deploying?
- Should we be versioning the endpoints?
- Where is the source code located? Github?

### API Design - GetAppointments ([recommendations.md](./recommendations.md))

- What is the upperbound of number of appointments a Veteran could have?

### API Design - AppointmentAvailability ([recommendations.md](./recommendations.md))

- Should the get appointment slots support pagination?
- When does the time slot get locked?
- How are skills related to appointments?

### API Design - SaveAppointment ([recommendations.md](./recommendations.md))

- This is a UPSERT, that's fine, but what all fields get updated?

### API Design - CancelAppointment ([recommendations.md](./recommendations.md))

- What is the response? A HTTP 204?

## Related Resources

- [VA API Standards](https://code.va.gov/docs/default/component/va-api-standards/)
- [JSON API Standards](https://jsonapi.org/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [VA Notify Documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/README.md)
