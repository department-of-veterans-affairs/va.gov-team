# Proposed Epics and Timeline Per team 

> This links to the Excel file that was to the team at the end of Sept 2023

## va.gov team

### Epic: UX Research - MVP

> Dates: Sept 01, 2023 thru Nov 30th, 2023

#### Scope & Epic details

- Create a research plan to for UX research study for BTSSS on va.gov
- Using the UI from past contract as a starting point. 
- Synthesize a readout, including recommendations and a propose UI
- Determine what teams on va.gov we need to cooridnate with for MVP
- Define feature set MVP for va.gov, to be released by summer 2024

### Epic: UX Research - next steps

> Dates: Spring 2024

#### Scope & Epic details

- Create a research plan to for UX research study for BTSSS on va.gov
- Define and explore what the next steps are for a BTSSS tool and what that looks like in a multichannel experience

### Epic: Build a prototype for stating

> Dates: Nov 1st thru Dec 30th, 2023

#### Scope & Epic details

- Start create the infrastructure for the va.gov FE, including
  - Scaffolding of react application
  - feature toggle creation 
  - Integrated with the vets-api created during this epic
- Start the co-lab cycle
- Determine rough IA 
- Vets-api Integration with v1 API
  - At least 1 endpoint successfully working with the new `v1 API` 

### Epic: Prep for rollout

> Dates: Jan 01, 2024 thru Feb 29th, 2024

#### Scope & Epic details

- Working details such as IA and co-lab cycle
- Create release plan 


### Epic: Rollout tool behind feature toggle

> Dates: March 1, 2024, thru June 30, 2024

### Scope & Epic details

- slowly increase usage using the feature toggle system

### Epic: Development work on features

> Dates: Jan 1, 2024, thru Aug 30, 2024

### Scope & Epic details

- Represents the dev work to build the tool
- Includes building out monitoring, analytics and alerts
- Continuously deploying using the va.gov CI/CD pipeline

### Epic: Full rollout on va.gov to 100% of users

> Dates: July, 2024

### Scope & Epic details

- 100% of Veterans can use the MVP we can created on VA.gov 


## New API Team (v1 API)

### Epic: Requirements gathering, architecture, design

> Dates: Sept 1, 2023 thru Oct 30, 2023

### Scope & Epic details

- Designed & Architect the new API 
  - Using [this swagger](https://editor.swagger.io/?url=https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/health-care/beneficiary-travel/engineering/assets/ideal-swagger.json) as a guide for functionality
- Focusing on requirements for 
  - Functionality
  - Stability
  - Performance 
  - Monitoring/Alerting
  - Security 
- Determine MVP and milestones for the API 
- Determine deployment CI pipeline

### Epic: Implementation of v1 API MVP (submit claim?) & infrastructure

> Dates: Sept 1, 2023 thru Oct 30, 2023

### Scope & Epic details

- Start the development work for the API including
  - MVP
  - Deployment pipeline

### Epic: Integration with va.gov

> Dates: Nov 1, 2023 thru Dec 30, 2023

### Scope & Epic details

- Work with the va.gov team to implement integration 
 
### Epic: Iteration and development of new functionality

> Dates: Dec 1, 2023 thru Aug 30, 2024

### Scope & Epic details

- Doing the dev work on the endpoint in an incremental method, priority guided by the va.gov team

 
### Epic: onboarding of mobile/PCI teams to use v1 API

> Dates: Late Spring 2024

### Scope & Epic details

- Migrating the PCI and Mobile teams over to the new v1 API
- ASSUMPTION:  The new API is ready for production use. Our goal is that it should be by now  


## Current API (v0)

### Epic: Async Endpoint Deployment

> Dates: Sept 1 2023 thru Oct 30 2023

### Scope & Epic details

- Deploy & promote the async endpoint 
- Should include some basic monitoring tools

### Epic: onboard Mobile application team 

> Dates: Sept 1 2023 thru Nov 30 2023

### Scope & Epic details

- Assist in the getting the mobile team set up and integrated into the current API
- This should include the async endpoint 
- Minor API support


### Epic: Support and Maintenence 

> Dates: Nov 1 2023 thru `onboarding of PCI/Mobile team` is complete

### Scope & Epic details

- Support in tracking bugs and answering questions
- only critical development work on the existing API


### Epic: Deprecation of v0 API 

> Dates: When `onboarding of PCI/Mobile team` is complete

### Scope & Epic details

- Sunset existing API
