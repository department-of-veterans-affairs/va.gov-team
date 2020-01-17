# Product Success Tool Phased Rollout

## Product North Star
Number of VFS teams that use the Product Success Tool to make product decisions.

## Goals
1. Release the Product Success Tool for VFS product decision maker in order to improve data-informed decisions for VA.gov product strategy.
2. Minimize risk that new tool won't be accepted by VFS teams and integrated into their workflow; conversely, maximize chances of VFS team acceptance & culture change throught adoption, which should result in more data-informed decisions
3. Generate buy in for the Product Success Tool and using more holistic data

## How do we get there?
- Leverage a phased rollout strategy to test VFS acceptance of the Product Success Tool in production
- Introduce the new tool with only a few teams to start to ensure that VFS teams find the tool useful and so that we can quickly change designs based on user feedback as needed
- Monitor core experience metrics very closely at each phase to ensure that we're only expanding and introducing the Product Success Tool to more VFS teams once we are sure that performance is acceptable and **teams are using key identified metrics to inform product decisions**
- Have a 'No Go' plan in case the tool doesn't perform as expected in production; identifying No-Go issues on a smaller scale will allow us to minimize time spent on details that don't affect 
- Receive feedback from a few VFS teams before launching full out efforts to expand to all VFS teams so that we know that the Product Success Tool is actually useful for product metrics 
- Minimize risk that we are pushing vanity metrics that hinder true decision making
  - So basically allows us time to build trust

-----

## Phase 0: Pre-launch & launch prep [Due Pre-Launch]
The goal of this stage is to ensure the tool is holistically ready for production launch
- [VSP pre-launch checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/Product%20Development%20Checklist.md) "relevant" items complete
    - [ ] Accessibility/508 Review
    - [ ] Content Review
    - [ ] KPIs set
- Manual QA testing and bug squashing
- Go / No Go decision for continuing to Phase 1:
  - [ ] All pre-launch checks completed without issue
  - [ ] No show-stopping bugs found in testing
  - [ ] Acceptance Criteria for MVP met 
     - [ ] VSP can provide access to VFS Team members
     - [ ] Easy log in for VFS team members
     - [ ] VFS team members have an actionable KPI 
     - [ ] VFS team members can easily read/understand metrics and targets
     - [ ] VFS team members can relay KPI success back to VSP

## Phase 1: MVP live for Education Team [Sprint 17-18]
The goal of this phase is to understand how the tool works in the production environment and to perform targeted acceptance testing on the tool.
- Targeting Education Team stakeholders to try the various flows (schedule, request, view, cancel) in the new tool
- User testing with goals can happen
- Go / No Go decision for continuing to phase 2:
  - [ ] Education Stakeholders logging in to the tool
  - [ ] Education Stakeholders reporting back to VSP about data decision making
  - [ ] No critical severity bugs or errors identified

## Phase 2: Increase Data and Test Subjects
The goald of this phase is to stand up the data warehouse with available metrics and test the Tool with additional VFS teams to prove behavior change and usage. 
- Stand up BigQuery with:
  - [ ] Google Analytics
  - [ ] Historical ForeSee data
  - [ ] Available Prometheus data
- Go / No Go decision for continuing to Phase 3:
  - [ ] Education Stakeholders logging in to the tool
  - [ ] Education Stakeholders reporting back to VSP about data decision making
  - [ ] Error reports debugged & resolved; any Sentry errors triaged and resolved

## Phase 3: 
The goal of this phase is to fully launch the tool on VA.gov while paving the way for sunsetting legacy VAOS
- Stand up BigQuery with:
  - [ ] Medallia integration
  - [ ] Historical Call Center data
- Go / No Go decision for continuing to Phase 5:


## Phase 4: 

