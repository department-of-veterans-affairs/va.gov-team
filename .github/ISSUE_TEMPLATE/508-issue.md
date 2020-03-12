---
name: 508 Accessibility Issue
about: Describe an issue related to Section 508 Accessibility Standards
title: ''
labels: 508/Accessibility
assignees: ''

---

## Instructions

1. Click or press the gear icon next to the "Labels" heading on the right. Search for your team in the labels list. If your team is not listed in the Labels menu, please leave a comment after you have created this issue. The Product Support team will create a new label for your team.
2. If this issue is being opened by a VFS team, please add the `triage-incident` and `product support` labels.
3. **Issue tickets should be tested when you have created a pull request.** This gives the 508, or quality assurance, person time to review your code before it is merged into the `master` branch. Once code is merged into `master` it will be deployed to Staging. Reviewing and correcting issues becomes more difficult at this point.
4. Text inside `<-- comment -->` blocks will not appear in your issue ticket. These comments offer guidance on what information you should provide for each section.
5. Leave a link here to the 508 defect severity level: 


    - [508-defect-0 :exclamation: Launchblocker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-0)
    - [508-defect-1 :exclamation: Launchblocker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-1)
    - [508-defect-2 :exclamation: Launchblocker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-2)
    - [508-defect-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-3)
    - [508-defect-4](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-4)

<!--
Enter an issue title using the format [ERROR TYPE]: Brief description of the problem
---
[SCREENREADER]: Edit buttons need aria-label for context
[KEYBOARD]: Add another user link will not receive keyboard focus
[AXE-CORE]: Heading levels should increase by one
[COGNITION]: Error messages should be more specific
[COLOR]: Blue button on blue background does not have sufficient contrast ratio
---
-->

<!-- It's okay to delete the instructions above, but leave the link to the 508 defect severity level for your issue. -->

**Feedback framework**

- **❗️ Must** for if the feedback must be applied 
- **⚠️Should** if the feedback is best practice 
- **✔️ Consider** for suggestions/enhancements 

## Description

<!-- This is a detailed description of the issue. It should include a restatement of the title, and provide more background information. -->

## Point of Contact

<!-- If this issue is being opened by a VFS team member, please add a point of contact. Usually this is the same person who enters the issue ticket.
-->

**VFS Point of Contact:** _First name only. Delete if not applicable._

## Acceptance Criteria

<!-- As a keyboard user, I want to open the Level of Coverage widget by pressing Spacebar or pressing Enter. These keypress actions should not interfere with the mouse click event also opening the widget. -->

## Environment

<!--
* Operating System, including `<VERSION>` or "latest"
* Browser, including `<VERSION>` or "latest"
* Screenreading device, if applicable
* Server destination (localhost, Docker container, staging, production)
-->

## Steps to Recreate

<!--
1. Enter `<IP ADDRESS>` in browser
2. Start screenreading device listed in Environment
3. Navigate to the second step by tabbing to Continue button, pressing Spacebar
4. Tab 3 times until Select Level of Coverage button has keyboard focus. The button should have a light blue halo around it.
5. Press Spacebar to open the Level of Coverage widget
6. Verify the widget does not open when Spacebar is pressed
-->

## Possible Fixes (optional)

<!--
If the issue is one that can be fixed easily by changing HTML, CSS, or JavaScript markup, include the snippet in the issue description. If it is a longer fix or you do not have a ready solution, remove this section.

```html
<button
  aria-label="Open Level of Coverage Tool"
  class="adc-c-button adc-c-button-large"
  type="button"
>
  Level of Coverage
</button>
```
-->

## WCAG or Vendor Guidance (optional)

<!--
* [Making actions keyboard accessible by using keyboard event handlers](https://www.w3.org/WAI/GL/wiki/Making_actions_keyboard_accessible_by_using_keyboard_event_handlers_with_WAI-ARIA_controls)
* [MDN: Using the button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
-->

## Screenshots or Trace Logs

<!-- Drop any screenshots or error logs that might be useful for debugging -->
