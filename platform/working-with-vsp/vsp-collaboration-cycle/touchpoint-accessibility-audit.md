# Full Accessibility and 508 Office Audit

Did we recommend a Full Accessibility and 508 Office Audit? If so, follow the below guidelines to get started.

## When should I request this touchpoint?

Schedule a full audit when your product is launched to production, when code is relatively stable. All accessibility defects that were identified at Staging Review must be fixed before requesting a full audit.* **Note:** This touchpoint should be scheduled as early as possible. 

_*VSP understands that other teams may be accountable for fixing the defects identified at Staging Review. These defects are exempt and will not block a team from scheduling this touchpoint._

## What is the collaboration format?

Asynchronous review

## What is the objective of this touchpoint?

Accessibility experts complete a full accessibility audit and coordinate with the VA’s 508 office for feedback and approval. Review the [accessibility post-launch audit processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md) document for more information.

## How do I request this touchpoint?

VFS Product Manager submits a [Full Accessibility & 508 Office Audit](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+shiragoodman%2C+noahgelman&labels=508%2FAccessibility%2C+vsp-product-support%2C+collaboration-cycle%2C+collab-cycle-review&template=full-accessibility-and-508-office-audit.md&title=Full+Accessibility+%26+508+Office+Audit+%5BTeam+Name+-+Feature+Name%5D) ticket.

## What artifacts do I provide?

VFS provides:
- Access information for the tool or feature in production do not put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository
- Verify foundational accessibility tests are complete. Choose one of these 2 options:
  - **(preferred)** Use the [TestRail VSP accessibility testing checklist](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc).
  <br/>**OR**
  - Certify the checklist of required accessibility items in the audit request issue
  - **Required accessibility checklist**
    - [ ] [Axe scans in daily development](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)
    - [ ] [Axe scans included in end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)
    - [ ] [Color tests for proper contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)
    - [ ] [Content zoomed to 200%, 300%, 400%](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)
    - [ ] [Keyboard navigation check](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)
    - [ ] [Screen reader tests (VoiceOver + Safari or NVDA + Firefox)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests)
  - **Recommended accessibility checklist**
    - [ ] [Keyboard end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#future-accessibility-tests)
    - [ ] [Axe-coconut scans in daily development](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
    - [ ] [WAVE tool spot checks](https://wave.webaim.org/)

## What is the outcome of this touchpoint?

Accessibility experts identify any outstanding accessibility concerns with your product. VA's 508 office reviews and approves (as applicable) your product.

