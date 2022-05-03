# Writing 508 issue tickets

Accessibility issues may be particularly challenging to document. Communicating why it matters and the potential remediation techniques needs to be coherent for the audience, which may range from product managers to designers to developers. 

## Instructions

1. Use the [508 Issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=).
1. **Labels:** Click or press the gear icon next to the "Labels" heading on the right. Search for your team in the labels list. If your team is not listed in the Labels menu, please leave a comment after you have created this issue. The Product Support team will create a new label for your team.
1. If this issue is being opened by a VFS team, please add the `vsp-product-support` label.
1. **Issue tickets should be tested when you have created a pull request.** This gives the reviewer time to test your code before it is merged into the `main` branch. Once code is merged into `main` it will be deployed to Staging. Reviewing and correcting issues becomes more difficult at this point.<br/><br/>
We recommend using [ZenHub](https://app.zenhub.com/login) for linking issue tickets with your pull requests.
    - Install the [ZenHub for GitHub extension](https://help.zenhub.com/support/solutions/articles/43000507578-installing-the-zenhub-extension-for-cloud) in Firefox or Chrome
    - Sign into ZenHub using your GitHub credentials
    - [Link your pull request to an issue ticket](https://www.zenhub.com/blog/github-issue-pull-request-linking/) from the GitHub pull request screen
1. Text inside `<-- comment -->` blocks will not appear in your issue ticket. The comments offer guidance on what information you should provide for each section.
1. **Severity:** Review the [Accessibility Defect Severity Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#accessibility-defect-severity-rubric). Create an h1 and with a link to the 508 defect severity level (included in the issue template). 

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
    
Since the issue title appears in various places, it is helpful to communicate necessary details in the title so it isn't necessary to open the issue itself. For example, on an epic for an accessibility review, it's helpful for PMs to know the severity level so they may prioritize for launch, and the location of the issue so the team knows where it needs to be fixed. It isn't necessary to include that the issue is sitewide, design system, CMS, or the defect level, but it can be helpful.

Enter an issue title using the format:

> [ERROR TYPE]: Brief description of the problem

### Sample issue ticket headings

> sitewide, design system - 508-defect-2 [AXE-CORE]: Heading levels SHOULD increase by one

> [SCREENREADER]: Edit buttons need aria-label for context

> [KEYBOARD]: Add another user link will not receive keyboard focus

> [AXE-CORE]: Heading levels should increase by one

> [COGNITION]: Error messages should be more specific

> [COLOR]: Blue button on blue background does not have sufficient contrast ratio

## Feedback framework definitions

Provide guidance in the format consistent with the feedback framework:

**Feedback framework**

- **❗️ Must** for if the feedback must be applied 
- **⚠️Should** if the feedback is best practice 
- **✔️ Consider** for suggestions/enhancements 


## Description

This is a detailed description of the issue. It should include a restatement of the title, and provide more background information. Consider how to communicate the issue so that a product manager, designer, and developer will understand. Explain like the reader is five, as best you can. 

When the issue is discovered using the axe browser scan, it's helpful to use the language from the error shown. The title of the issue from the browser scan is the base of the title, the explanation can be used in the description. There's a "Learn more" link that opens Deque University documentation that is helpful (especially the Why It Matters section). There's also an impact rating which can be paired to determine what the severity rating is.

## Point of contact

If this issue is being opened by a VFS team member, please add a point of contact. Usually this is the same person who enters the issue ticket.

## Acceptance criteria

### Sample

As a keyboard user, I want to open the Level of Coverage widget by pressing Spacebar or pressing Enter. These keypress actions should not interfere with the mouse click event also opening the widget. 

## Environment

Include the details for where the issue is located.

### Sample

* Operating System: All
* Browser: Internet Explorer 11
* Screenreading device: JAWS
* Server destination: URL (web address or addresses) where you spotted the issue. This could be in staging or production.


## Steps to recreate

List the steps to recreate the issue.

### Sample

1. Enter `<IP ADDRESS>` in browser
2. Start screenreading device listed in Environment
3. Navigate to the second step by tabbing to Continue button, pressing Spacebar
4. Tab 3 times until Select Level of Coverage button has keyboard focus. The button should have a light blue halo around it.
5. Press Spacebar to open the Level of Coverage widget
6. Verify the widget does not open when Spacebar is pressed

## Possible fixes (optional)

If the issue is one that can be fixed easily by changing HTML, CSS, or JavaScript markup, include the snippet in the issue description. If it is a longer fix or you do not have a ready solution, remove this section.


### Sample

Add an aria-label for screen reader users to communicate the button context.

```html
<button
  aria-label="Open Level of Coverage Tool"
  class="adc-c-button adc-c-button-large"
  type="button">
  Level of Coverage
</button>
```

## WCAG or vendor guidance (optional)

Provide links to guidance. The axe browser scan "Learn more" link to the Deque University page can be added here.

### Sample

* [Making actions keyboard accessible by using keyboard event handlers](https://www.w3.org/WAI/GL/wiki/Making_actions_keyboard_accessible_by_using_keyboard_event_handlers_with_WAI-ARIA_controls)
* [MDN: Using the button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)


## Screenshots or trace logs (optional)

Include any screenshots or error logs that might be useful for debugging.
