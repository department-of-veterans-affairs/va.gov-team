# Focus outline SHOULD be removed from non-linked heading

## [508-defect-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-3)

## Description

Focus outline **should** not be applied to non-interactive focusable content, as a pattern on VA.gov.

## Acceptance Criteria

As a keyboard user, I want to identify interactive focusable items by distinctive focus styles.


## Environment

Operating System: all
Browser: all
Server destination: staging

## Steps to Recreate

1. Enter [URL] in browser
2. Start screenreading device listed in Environment
3. Tab through the process flow, noting that the focus outline appears on the non-linked headings as shown in the screenshot

## Possible Fixes (optional)

See [#457](https://github.com/department-of-veterans-affairs/va.gov-team/issues/457)

## WCAG or Vendor Guidance (optional)

* [W3C Understanding WCAG 2.0 - Consistent Identification SC 3.2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html)
