---
name: Staging Review
about: Request a VSP staging review
title: Staging Review [Feature-Name]
labels: product support, content-ia-team, collaboration-cycle
assignees: andreahewitt-odd, meganhkelley

---

## Steps to complete Staging Review: 

- [ ] Product Manager: create this issue and fill in feature name in the title and other bolded information appropriately
- [ ] Link to this issue once created in #vfs-platform-support in Slack; tag @ Megan Kelley @ AndreaHewitt
- [ ] Andrea and Megan to schedule meeting with VSP reviewers and **requesting team** attendees (as listed below)
- [ ] At least 2 days before scheduled meeting, you must complete list of artifacts below
- [ ] VSP <> **requesting team** review meeting completed
- [ ] Practice area reviewers create sub-issues attached to this one with feedback for your team on *feature name*
- [ ] **Requesting team** completes attached feedback tickets based on definition of done included in each practice area feedback ticket (may differ for each practice area, please refer to attached tickets for further instruction)
- [ ] All requesting team attendees complete brief [VSP Collaboration Cycle Feedback](https://adhoc.optimalworkshop.com/questions/20260uu8-0-0/questions/before) survey

## Artifacts - _please provide the following artifacts at least 2 days before scheduled review meeting_
- Link to product outline ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md))
- Link to [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) with the "Planning" sections completed (in each section: Phase I, Phase II, Go Live)
- Access information for the tool or feature in staging _**do not put staging credentials in your `va.gov-team` ticket; store or reference them in a .md file in the `va.gov-team-sensitive` repository**_
- Link to your product test cases/test plan in TestRail with test execution logs ([learn more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-plan)) _for QA practice area review_
- Link to your [Coverage for References](https://dsvavsp.testrail.io/index.php?/reports/view/12) and [Summary(Defects)](https://dsvavsp.testrail.io/index.php?/reports/view/14) reports in TestRail _for QA practice area review_
- Certify that the following required accessibility tests are complete by checking each of these boxes (your accessibility specialist is available to help). Recommended items are optional, but highly encouraged.
  - [ ] Read the [accessibility staging review documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md) (required)
  - [ ] Read the [accessibility post-launch processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md) (recommended)
  - [ ] Conduct axe browser scan, and document or address issues found (required)
  - [ ] Ensure end-to-end tests - including the axe check, pass  (required)
  - [ ] Add keyboard end-to-end tests in CI/CD test runs (recommended)
  - [ ] Conduct axe-coconut browser scan, document or address issues found (recommended)
  - [ ] Test with WAVE tool (recommended)
  - [ ] Check color pairing for proper contrast (required)
  - [ ] Check for colorblindness issues (required)
  - [ ] Zoom to 200% and confirm readability, no info cut off, etc (required)
  - [ ] Repeat for 300% (required)
  - [ ] Repeat for 400% (required)
  - [ ] Navigate all pages and core functionality with keyboard only (required)
  - [ ] Test all pages and core functionality happy path  with MacOs + VoiceOver and/or NVDA+Firefox (required)
- _**Optionally**_ instead of the list of accessibility certification criteria above, you may use one of these two options to provide your accessibility test cases (your accessibility specialist is available to help):
  - [ ] **TestRail** [TestRail VSP accessibility test plan template](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) **OR**
  - [ ] **Markdown** [Github accessibility test cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md)
- Provide a list of known issues (with links to tickets, when applicable)

## Meeting attendees from **requesting team**
- Product Manager (required): **name**
- DEPO product lead (required): **name**
- Anyone else from your team who significantly contributed to the artifacts provided (required): **names**

## Scheduling
Preferred dates or times: 

## Additional Notes
During this collaboration point, you will receive feedback from the following practice areas: design, accessibility, content, QA, and optional: product, analytics, engineering, information architecture
