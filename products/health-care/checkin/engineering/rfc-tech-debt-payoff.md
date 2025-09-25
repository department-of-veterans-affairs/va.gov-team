# RFC: Time to pay down some debt

**To be Reviewed By:** All Check-in Experience (CIE) contributors

**Authors:** Patrick Bateman; 

**Status:** **Draft** | Discussion | Active | Dropped | Superseded

Superseded by: N/A

Related: N/A

## Problem
The speed at which CIE has been developed has led to under-investment in some key reliability and stability areas. Continued pushes for additional feature development preclude making these investments. The CIE does not have the capacity to take on feature development and make the necessary reliability and stability investments at the same time.

### Anti-Goals
Attempt to correct the reliability or stability of systems or processes beyond the CIE team's control or influence.

## Solution
Pause feature development for two weeks and focus all CIE efforts on the following areas:

### Increase system-level integration test coverage
- need to decrease frequency of breaking changes making it any env

### Health check endpoints
- simple ping to monitor availability and alert immediately if component is not reachable

### Cross system traceability
- each transaction should be positively traceable across all parts of the system

### True `dev` and `staging` environments
- need separate VistAs?
- need appropriate env parity with VSE clinical app

### Improve local development tooling
- run various CIE components locally

### Establish load testing protocol and run before scaling
- load test across all possible components

### Enhance testing availability and access
- need more appointment slots / different way of creating new appointments for testing
- how will we handle when lots of people are testing







