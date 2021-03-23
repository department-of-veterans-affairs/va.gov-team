# Contract Testing Product Outline

## Overview
Consumer-driven contract testing (CDCT) defines a contract between service consumers and providers (e.g. `vets-website` applications and `vets-api`). In this way, CDCT enables VFS teams to test integration points with `vets-api` in a non-production environment. This gives VFS teams the ability to ensure that their app is production-ready, and helps VSP ensure that platform-wide changes are non-breaking. 

## Problem Statement
The current process to test a frontend application (vets-website) with the backend (vets-api) is not suitable for the long term needs of the platform. The current process involves using a combination of Swagger docs, betamocks, JSON Schema and VCR recordings. These tools are theoretical tools and don’t actually reflect the current state of the APIs, which could lead them to being out of sync with what the actual response is expecting. An additional pain point is that in order for an application team to test their app with these backend tools they have to run both applications at the same time. The current solution is only testable in the staging environment as well.

How might we enable VFS teams to test integrations with vets-api in a non-production environment? How might we enable VSP to more easily confirm that platform-wide changes are non-breaking?

## Personas
* VFS Teams 
  * Developers (FE & BE) — _primary persona_
  * Product Managers
* Other teams that integrate with `vets-api`
  * Lighthouse team

## Measuring Success

### Key Performance Indicators (KPIs)
1. Number of incidents/quarter requiring postmortems related to `vets-api` integrations
1. Number of CDCTs (Pacts) in [broker](https://vagov-pact-broker.herokuapp.com/)
1. % of Pact tests that are passing
1. % of VFS teams who self-report using Pact for all new integrations with `vets-api` 
1. Qualitative feedback from VFS teams

#### Baseline KPI Values
| KPI | Value |  
| --- | --- |  
| Number of incidents/quarter requiring postmortems related to vets-api integrations | ~1 per quarter in 2020 |
| Number of CDCTs (Pacts) in broker | 5 |
| % of Pact tests that are passing | 5, 100% |
| % of VFS teams who self-report using Pact for all new integrations with vets-api | 5 |
| Qualitative feedback from VFS teams | NA |

---

## Assumptions
- VFS teams will adhere to a new VSP policy re: contract testing
- Support for and maintenance of a contract testing tool will not place an unreasonable burden of manual support on VSP
- A contract testing tool will identify breaking platform-wide changes before they are released
- A contract testing tool will identify bugs in VFSs before they are released

## Solution Approach

Pact has been identified as VSP's chosen contract testing tool, which will allow VFS teams to test integrations with `vets-api`. 

[Design doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6fbe00120865ff71779ba0c8b8e011a18e2cbf2f/platform/engineering/design-docs/2020-04-16-integration-testing-with-consumer-driven-contract-tests.md) for consumer-driven contract tests as a tool for testing integrations.

--- 

## Launch Dates
- *Launch Date*: Estimated launch Nov 2020

---
   
## Screenshots

### Before
N/A

### After

---

## Reference Material

_Link to the following materials as relevant._

- [VFS-facing Product README](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/contract-testing/README.md)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/contract-testing/pact-release-plan.md)
- [Pact broker dashboard](https://vagov-pact-broker.herokuapp.com/)

### Communications

<details>

- Team Name: FE Tools (primary) & BE Tools (secondary)
- GitHub Label: `tools-fe` `tools-be`
- Slack channel: `#temp-integration-testing` (private) & `vsp-tools-fe`
- Product POCs: Megan K (primary Product Manager)

</details>

### Stakeholders

<details>
 
DEPO
VFS teams
 
</details>
