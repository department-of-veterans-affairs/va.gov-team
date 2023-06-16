---
name: Authenticated Experience Profile New Issue Template
about: Basic template for creating Authenticated Experience Profile team issues
title: Practice Area | Profile | [Project]| [Issue Name]
labels: authenticated-experience, needs-refinement, profile
assignees: ''

---

## Background

Describe the issue background and scope


## Tasks
- [ ] Conduct Unit tests 
- [ ] Run E2E tests covering current code and regression
- [ ] Notify PM if this needs to be deployed to Staging behind feature flag

## Acceptance Criteria
- [ ] Complete all unit testing
- [ ] End-to-end tests showing 0 violations
- [ ] All axe checks pass
- [ ] Notify Product Manager that the change is ready to be validated on Staging
- [ ] Incorporate any changes resulting from Staging review & re-test & have re-validated
- [ ] Confirm PM has opened a new ticket to deploy changes to Production using feature flag, if needed

## Validation
- Who can validate this ticket? (FE, BE, Design, PM)?
- How can this work be validated?
- What updates need to be made (e.g. product outline, use cases, contact center guide)

## How to configure this issue
- Include practice area in title -- e.g., [Design], [FE], [BE]
- Include project/initiative name - e.g., Auth Profile: Address Change Messaging
- Add label for practice area (frontend, backend, design)
- Add label for project if applicable
- Assign to a Profile team member
- Associate with an Epic if applicable
- If creating for yourself: estimate work if enough info exists to do so


<details>
  <summary>Discovery Ticket</summary>

## Tasks 
- [ ] review previous research 

## Acceptance Criteria 
- [ ] summary and recommendations of research 
- [ ] ready for mock ups / design intent ([artifacts](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/design-intent#Designintent-Artifacts)) 
</details>

<details>
  <summary>Design Ticket</summary>

## Tasks
- [ ] Create mock-ups / update sketch files
- [ ] Review w/ team
- [ ] Get content approved
- [ ] Revise mock-ups as needed
- [ ] Let team know ready for FE

## Acceptance Criteria
- [ ] Ready for FE
</details>

<details>
  <summary>FrontEnd Ticket</summary>
  
## Tasks
- [ ] Conduct Unit tests 
- [ ] Run E2E tests covering current code and regression
- [ ] Notify PM if this needs to be deployed to Staging behind feature flag
  
## Acceptance Criteria
- [ ] Complete all unit testing
- [ ] End-to-end tests showing 0 violations
- [ ] All axe checks pass
- [ ] Notify Product Manager that the change is ready to be validated on Staging
- [ ] Incorporate any changes resulting from Staging review & re-test & have re-validated
- [ ] Confirm PM has opened a new ticket to deploy changes to Production using feature flag, if needed
</details>

<details>
  <summary>Backend Ticket</summary>
 
 ## Tasks
- [ ] Conduct Unit tests 
- [ ] Run E2E tests covering current code and regression
- [ ] Notify PM if this needs to be deployed to Staging behind feature flag
  
## Acceptance Criteria
- [ ] Complete all unit testing
- [ ] End-to-end tests showing 0 violations
- [ ] All axe checks pass
- [ ] Notify Product Manager that the change is ready to be validated on Staging
- [ ] Incorporate any changes resulting from Staging review & re-test & have re-validated
- [ ] Confirm PM has opened a new ticket to deploy changes to Production using feature flag, if needed
</details>
