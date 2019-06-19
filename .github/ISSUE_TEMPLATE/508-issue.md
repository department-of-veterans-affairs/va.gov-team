---
name: 508 Accessibility
about: To describe issues related to Section 508 Accessibility Standards
title: ''
labels: '508/Accessibility'
assignees: ''

---

# Title
[ERROR TYPE]: Brief description of error

KEYBOARD: Divs styled as buttons ignore Spacebar keypress

## Issue
This is a detailed description of the issue. It should include a restatement of the issue title, and more background information.

## Acceptance Criteria
As a keyboard user, I want to open the Level of Coverage widget by pressing Spacebar or pressing Enter. These keypress actions should not interfere with the mouse click event also opening the widget.

## Environment
* Operating System, including `<VERSION>` or "latest"
* Browser,including `<VERSION>` or "latest"
* Screenreading device, if applicable
* Server destination (localhost, Docker container, staging, production)

## Steps to Recreate
1. Enter `<IP ADDRESS>` in browser
2. Start screenreading device listed in Environment
3. Navigate to the second step by tabbing to Continue button, pressing Spacebar
4. Tab 3 times until Select Level of Coverage button has keyboard focus. The button should have a light blue halo around it.
5. Press Spacebar to open the Level of Coverage widget
6. Verify the widget does not open when Spacebar is pressed

## Possible Fixes (optional)
If the issue is one that can be fixed easily by changing HTML, CSS, or JavaScript markup, include the snippet in the issue description. If it is a longer fix or you do not have a ready solution, remove this section.

```html
<button
	aria-label="Open Level of Coverage Tool"
	class="adc-c-button adc-c-button--large"
	type="button"
>
	Level of Coverage
</button>
```

## WCAG or Vendor Guidance (optional)
* [Making actions keyboard accessible by using keyboard event handlers](https://www.w3.org/WAI/GL/wiki/Making_actions_keyboard_accessible_by_using_keyboard_event_handlers_with_WAI-ARIA_controls)
* [MDN: Using the button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
