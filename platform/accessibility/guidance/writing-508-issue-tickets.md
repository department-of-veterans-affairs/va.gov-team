# [IN PROGRESS] Writing 508 issue tickets

Accessibility issues may be particularly challenging to document. Communicating why it matters and the potential remediation techniques needs to be coherent for the audience, which may range from product managers to designers to developers. 

## Instructions

1. Click or press the gear icon next to the "Labels" heading on the right. Search for your team in the labels list. If your team is not listed in the Labels menu, please leave a comment after you have created this issue. The Product Support team will create a new label for your team.
2. If this issue is being opened by a VFS team, please add the `triage-incident` and `product support` labels.
3. **Issue tickets should be tested when you have created a pull request.** This gives the 508, or quality assurance, person time to review your code before it is merged into the `master` branch. Once code is merged into `master` it will be deployed to Staging. Reviewing and correcting issues becomes more difficult at this point.
4. Text inside `<-- comment -->` blocks will not appear in your issue ticket. These comments offer guidance on what information you should provide for each section.
5. Create an h1 with a link to the 508 defect severity level: 

    - [508-defect-0 :exclamation: Launchblocker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-0)
    - [508-defect-1 :exclamation: Launchblocker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-1)
    - [508-defect-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2)
    - [508-defect-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-3)
    - [508-defect-4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-4)


## Title

The title of the issue ticket should communicate a few things about the issue:

    * severity
    * category
    * issue itself
    * location
    
Since the issue title appears in various places, it is helpful to communicate necessary details in the title so it isn't necessary to open the issue itself. For example, on an epic for an accessibility review, it's helpful for PMs to know the severity level so they may prioritize for launch, and the location of the issue so the team knows where it needs to be fixed.

Enter an issue title using the format [ERROR TYPE]: Brief description of the problem

[SCREENREADER]: Edit buttons need aria-label for context
[KEYBOARD]: Add another user link will not receive keyboard focus
[AXE-CORE]: Heading levels should increase by one
[COGNITION]: Error messages should be more specific
[COLOR]: Blue button on blue background does not have sufficient contrast ratio

### Sample issue ticket heading

> sitewide, design system 508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one

## Severity

## Description

## Acceptance Criteria

## Environment

## Steps to Recreate

## Possible Fixes (optional)

## WCAG or Vendor Guidance (optional)

## Screenshots or Trace Logs (optional)

