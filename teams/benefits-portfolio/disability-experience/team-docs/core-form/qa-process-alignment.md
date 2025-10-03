# QA & Review Process Proposal  

## Current State  
- **Testing Practices**: We currently rely on a mix of unit tests, some Cypress coverage, and other programmatic tests.  
- **Manual QA**: Local testing is common, with some additional testing performed on staging.  
- **Collaboration**: Pairing happens, sometimes extending into PR reviews, though not consistently.  
- **PR Workflow**: Reviewers may pull code locally and run submissions. Documentation is updated as needed, and PR action items are tracked.  

## Problems / Gaps  
- **Inconsistent QA Tracking**: There’s no standard way to capture how a PR was tested or reviewed, which makes it difficult to verify quality across the board.  
- **Undefined Testing Requirements**: We don’t have clear expectations for what types of tests (unit, integration, end-to-end) are required per ticket or PR.  
- **Walk-through Ambiguity**: It’s not clear when walkthroughs should happen or if they’re required.  
- **Staging Review Coverage**: It’s unclear who is responsible for validating changes on staging and how thorough that process should be.  
- **PR Quality Signals**: PR descriptions often vary in quality, and may lack repro notes, screenshots, or confirmation that code was tested locally.  

## Recommendations  

### 1. Pairing & Review  
- Encourage more frequent pairing, even if it’s just walking through a PR together. This ensures shared context and improves knowledge transfer.  
- Require PR reviewers to explicitly state *how* they tested (e.g., pulled locally, submitted locally, code review only) in the PR comments.  
- Provide guidance for PR descriptions. Each PR should include:  
  - Bug reproduction steps  
  - Screenshots where applicable  
  - Flipper details (if relevant)  
  - Instructions for pulling down and running the code locally  

### 2. Process Enhancements  
- Add a **staging review column** in the kanban board so QA steps are visible and tracked.  
- Require proof of local submission (e.g., screenshot of a successful run) in PR comments. This ensures at least one validation before merging.  
- Define lightweight testing criteria per ticket/PR to set expectations, while keeping the process lean enough to avoid unnecessary slowdowns.  
- Explore the feasibility of **review instances** that allow anyone to test changes without a heavy local setup.  

### 3. Automation & Tooling  
- Expand Cypress test coverage to cover more user flows and reduce reliance on manual testing.  
- Add automated reviewers (e.g. Copilot) to provide a first-pass review and highlight potential issues early.  
- Continue improving monitors and watchdog processes so any issues that get missed are caught earlier after release

### 4. Team Workflow  
- Explore using sub-issues or child tickets for complex features. This improves clarity, makes work more reviewable, and helps track QA coverage per component.  
- Require staging validation for all code changes.  
- Dedicate a regular slot in weekly engineering syncs to discuss QA practices, share learnings, and iterate on improvements.  

## Phased Rollout Plan  

**Phase 1 (Immediate: next 1–2 weeks)**  
- Standardize PR descriptions (include repro steps, screenshots, Flipper details, and instructions to run locally).  
- Require reviewers to document *how* they tested in PR comments.  
- Begin pairing more intentionally, particularly on PR reviews.
- Add a **staging review swim lane** in the kanban board.
- Add automated reviewers (i.e. Copilot) across all PRs for early feedback.
- Share our new processes with the broader team

**Phase 2 (Short-term: 3–6 weeks)**  
- Require proof of local submission (e.g., screenshot) in PR comments.  
- Trial use of child tickets/sub-issues for larger or more complex features.  
- Dedicate ~5 minutes in engineering syncs for QA discussions and feedback.
- Align with other teams on how we want to review cross-team PRs  

**Phase 3 (Medium-term: 6–12 weeks)**  
- Expand Cypress coverage in priority areas where manual testing is currently heavy.  
- Explore review instances and evaluate feasibility for the team.  

**Phase 4 (Long-term: 3–6 months)**  
- Continue scaling Cypress test coverage to cover more workflows.  
- Strengthen monitoring and watchdog processes to reduce time-to-detection for issues.  
- Revisit QA process in engineering syncs and refine based on team feedback.  
