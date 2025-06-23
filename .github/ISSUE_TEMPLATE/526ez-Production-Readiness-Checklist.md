---
name: 526EZ Production Readiness Checklist
about: Checklist for production readiness for 526EZ application (Application for Disability
  Compensation and Related Compensation Benefits) changes that do not engage collab
  cycle
title: "<Production Checklist> - <Feature>"
labels: disability-experience
assignees: ''

---

## Issue Description
This ticket covers tasks to be completed for a production change that is done outside of the collab cycle.

### Contact Center Review 
<details>
  <summary>Toggle Contact Center Review</summary>

#### VFS actions
- [ ] Is the change veteran facing?
- [ ] Does it affect how a user fills the form / workflow?
- [ ] Does it affect how contact center team may support the veteran in filling out the form or trouble shooting?
- [ ] If applicable, complete the [Contact Center review process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Contact-center-review.1782317061.html)
    - Link to the Contact Center review request ticket below
</details>

**Content artifacts**

- [ ] Github ticket for any relevant static content page and entry point updates for tool or feature (if applicable)

**IA artifacts**

- [ ] Please include a link to any [Sitewide Content & IA](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/sitewide-content-and-ia-intake-request) feedback you received, including an IA review document or intake form.


**QA artifacts**

An artifact that corresponds to each standard in the [QA Standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards).
- [ ] [Regression test plan](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-regression-test-planRegressionTestPlan)
- [ ] [Test plan](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-test-planTestPlan)
- [ ] [Coverage for References](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-traceability-reportsTraceabilityReports)
- [ ] [Summary(Defects) reports](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-traceability-reportsTraceabilityReports)
- [ ] [E2E tests](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-e2e-test-participationE2ETestParticipation) (provide a link to the product’s code)
- [ ] [Code coverage](https://depo-platform-documentation.scrollhelp.site/developer-docs/quality-assurance-standards#QAstandards-unit-test-coverageUnitTestCoverage) (provide a link to the product’s code)  


**Accessibility artifacts**
  
- [ ] [Completed accessibility testing artifact](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D). For details, see [Prepare for an accessibility staging review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review)

### Privacy, Security, Infrastructure Readiness Review
<details>
  <summary>Toggle Privacy, Security, Infrastructure Readiness Review</summary>
  
#### VFS actions
- [ ] Complete the [Privacy, security, infrastructure readiness review process](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Privacy-and-security-review.1782317101.html)
- [ ] Link to the Readiness Review ticket below
</details>

## Tasks
- [ ] _What work is necessary for this story to be completed?_

## Acceptance Criteria
- [ ] Content has been reviewed by the IA team, if applicable to the changes. If not, provide an explanation.
- [ ] Accessibility test has been completed, if applicable to the changes. If not, provide an explanation.
- [ ] QA completed with test runs by Product and Design in test rail
- [ ] Privacy, security, infrastructure readiness review completed
- [ ] Reviewed the changes with the Contact Center team
- [ ] Product Guide updated and shared with Contact Center team
- [ ] Form Flow update requested for addition/removal of new pages, changes in the flow or sigifanct page chagnes.
- [ ] Anaytics funnel for Completion Rate and Exit Rate requested along with page tracker updated if new Urls are added or removed or if order of flow is impacted
---
## How to configure this issue
- [ ] **Attached to a Milestone** (when will this be completed?)
- [ ] **Attached to an Epic** (what body of work is this a part of?)
- [ ] **Labeled with Team** (`product support`, `analytics-insights`, `operations`, `service-design`, `Console-Services`, `tools-fe`)
- [ ] **Labeled with Practice Area** (`backend`, `frontend`, `devops`, `design`, `research`, `product`, `ia`, `qa`, `analytics`, `contact center`, `research`, `accessibility`, `content`)
- [ ] **Labeled with Type** (`bug`, `request`, `discovery`, `documentation`, etc.)
