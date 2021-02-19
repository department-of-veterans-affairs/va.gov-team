# Staging Review
Did we recommend a Staging Review? If so, follow the below guidelines to get started.

## When should I request this touchpoint?
Before you begin launch, allowing enough time to implement feedback. This will vary depending on the size of your product.

## What is the collaboration format?
Synchronous 30-minute meeting

## What is the objective of this touchpoint?
Get feedback on your completed build before rolling out to users. VSP will identify any launch-blocking issues that must be addressed prior to launch.

## How do I request this touchpoint?
VFS Product Manager submits a [Staging Review ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+Shiragoodman&labels=vsp-product-support%2C+collaboration-cycle%2C+staging-review%2C+collab-cycle-review&template=staging-review.md&title=Staging+Review+%5BTeam+Name+-+Feature+Name%5D).

## Who attends this touchpoint?
VFS brings:
   - Product manager (required)
   - DEPO product lead (recommended)
   - Anyone else from your team who significantly contributed to the artifacts provided (required)
   - Content, IA, accessibility, and QA specialists (if applicable)
   - 
VSP brings (when applicable):
   - Design
   - Accessibility
   - Content
   - QA
   - Product
   - Information architecture
   - VSP’s DEPO co-leads
   - Analytics (optional)

## What artifacts do I provide?
VFS provides:
- Link to [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md)
- Link to [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Link to the tool or feature  in staging. Do not put staging credentials in your va.gov-team ticket; store or reference them in a .md file in the va.gov-team-sensitive repository.
- Staging test user information (if applicable)
- Link to your [QA test plan](https://dsvavsp.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc) in TestRail with [test results](https://dsvavsp.testrail.io/index.php?/runs/view/7&group_by=cases:section_id&group_order=asc) for QA practice area review
- Link to your [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/12) and [Summary(Defects)](https://dsvavsp.testrail.io/index.php?/reports/view/14) reports in TestRail for QA practice area review
- Review the [staging accessibility review processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)
- Verify foundational accessibility tests are complete. Choose one of these 2 options:
   - (preferred) Use the [TestRail VSP accessibility testing checklist](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc).
OR
   - Certify the checklist of required accessibility items in the staging review issue. All required items should be checked off so the accessibility specialist can start their review on time.
   - Foundational accessibility checklist (required)
      - [Axe scans in daily development](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-daily-development)
      - [Axe scans included in end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#axe-scans-in-end-to-end-tests)
      - [Color tests for proper contrast and colorblindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#color-tests)
      - [Content resized to 200%, 300%, 400%](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#content-resize-check)
      - [Keyboard navigation check](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#keyboard-navigation-check)
   - Advanced accessibility checklist (recommended)
       - [Screen reader tests (VoiceOver + Safari or NVDA + Firefox)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#screen-reader-tests)
       - [Axe-coconut scans in daily development](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
       - [WAVE tool spot checks](https://wave.webaim.org/)
   - Future accessibility checklist
       - [Keyboard end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#future-accessibility-tests)
- List of known issues (with links to tickets when applicable)
- Please provide these artifacts at least **4 days before the scheduled review meeting**.

VSP brings:

- Feedback on the artifacts from the following practice areas: design, accessibility, content, QA, I/A (and optional: product, analytics, engineering).


## What is the outcome of this touchpoint?
VSP reviewers document their feedback in a GitHub ticket. VSP will escalate critical issues if necessary to ensure they are addressed prior to launch. VSP will identify launch-blocking accessibility issues and provide assistance, if requested, in getting issues resolved.
