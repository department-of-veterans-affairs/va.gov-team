# VAOS Service Integration - Initiative Brief

## Overview

As a customer of the VA Mobile Framework (VAMF) platform, we must update our scheduling and appointment endpoints to utilize the new VAOS Service. The VAOS Service is an aggregate service that provides a logical API and aimed at helping consuming applications and services more easily transition to the FHIR model.

Stakeholder/Business Drivers: The VAOS Service will be integrated with HSRM, which will allow VAOS to display Community Care appointments from HSRM.

### Desired Outcomes
No changes to the user experience when using the VAOS tool. This is an infrastructure project.

## Implementation Information

### Solution Approach

- Create new middleware endpoints (`vaos/v2/`) to replace current middleware endpoints (`vaos/v0/`)
- Divide work into 4 groups with frontend toggles:
  - Community Care appointments (`va_online_scheduling_vaos_service_cc_appointments`)
  - Facilities (`va_online_scheduling_facilities_service_v2`)
  - Request-related services (`va_online_scheduling_vaos_service_requests`)
  - VA VistA-based appointments (`va_online_scheduling_vaos_service_va_appointments`)

### Timeline
2021
- May: Integration planning
- June-September: Middleware and frontend updates
- September: Staging testing and support

Rollout: TBD

### Important Context and Decisions
- PI 3 commited objective: The capability for Veteran CC requests to be received and processed in HSRM by Request managers will be in Staging for testing/debugging (requires FE & BE changes; Dependency: HSRM, back-end)

## Open Questions

## Resources
- Additional information can be found in [VAMF's service design document](https://coderepo.mobilehealth.va.gov/projects/VAR/repos/vaos-service/browse/docs/SRVDD.md) for the project.
