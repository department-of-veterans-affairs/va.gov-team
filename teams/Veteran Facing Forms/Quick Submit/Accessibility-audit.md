# Quick Submit Accessiblity Audit

Tuesday, March 12, 2024   
Auditor: Jeana Clark - jeana.clark@adhocteam.us   
Team: Veteran Facing Forms

## Rationale
In preparation for a usability study using the Quick Submit tool, the Veteran Facing Forms team did a quick accessibility audit to ensure a successful experience for screen reader users.

## Scope
This is not a full, comprehensive or complete audit. The auditor only had access to one user flow through the tool (Veteran Family Member) and tested only on one device. All user flows, and all screens and components in each user flow should be tested.  NVDA and JAWS should also be used for further testing.

## Methods
Following VA.gov's foundational accessibility testing template, the tests were conducted using a Mac Laptop, with Voice Over, and the Chrome browser. The [Axe Browser Extension](https://www.deque.com/axe/browser-extensions/) supplemented the testing.

## Reported findings
The findings in this report are focused on three areas:

1. **Color contrast** We want all of our applications to be usable by users who may be experiencing low-vision, or color-blindness. Insuring proper color contrast also helps our applications to work well in various lighting situations, like outside, or in brightly lit rooms.

2. **Keyboard operability** We want the application to be fully functional using keyboard. Keyboard operability is important because it's how screen reader users who may be blind navigate the web. Also, users with tremors or other dexterity issues may use the keyboard and not the mouse.

3. **Understandability / Plain language**  The language on the page should be clear and understandable. All form and navigational elements should be labeled properly connecting their form input to the proper label.

<br /><br />

### Finding 1: Color Contrast

[WCAG SC 1.4.3_AA & WCAG SC 1.4.6_AAA](https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced)

<img width="500" alt="3-1-ColorContrast" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/5eb18c91-f727-4b44-b6c9-60afa9e64af6">

**Caption:** Screenshot from chrome browser showing the Axe browser extension highlighting an orange button that does not meet WCAG Color contrast rules.

Color contrast issues were found on every page of the application that was tested. Color contrast applies to all text through out the page, and the contrast ratio must be higher the smaller the text is.

<br /><br />

### Finding 2: No keyboard accessible form fields - Sign-up Screen 

[WCAG SC 3.3.2_A](https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions)

https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/aaa01507-2ab7-4ea0-814d-9dacb27302d4

In this video, I enabled the Mac Voiceover screen reader and navigated through the page. With the keyboard, a user can only select "cancel" or their browser interactive elements. A screen reader or keyboard user could never select their user type and get past this screen.

When I inspected the code, I discovered that there were no native form elements on this page. Unfortunately users using screen readers and keyboard only would never be able to select a user type from this screen and get into the tool

<br /><br />

### Finding 3: Content causes the user's keyboard focus to get trapped - Preview file

[WCAG SC 2.1.2_A](https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap)

https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/3375e470-8132-4c11-a912-28833419d193

Now, say a user was somehow able to get past that screen, maybe a family memeber helped them with the selection. Once inside the quick submit tool, there are more keyboard issues.

In the demo, the user is "previewing" an uploaded file. A modal pops up - but the focus for the keyboard user is stuck *behind* the modal - they are unable to interact with anything that pops up in the preview -- including closing the preview.

If a keyboard user were to access this modal, they would only be able to get out of it by refreshing their browser, or closing it completely and starting over.

<br /><br />

### Finding 4: Page functionality isn't keyboard accessible -  Tool Tips

[WCAG SC 2.1.1_A[(https://www.w3.org/WAI/WCAG21/quickref/#keyboard)

https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/02b29ea1-90ad-4a79-ba7a-f30ab2a7f1a2

Throughout the application, there are small icons in blue circles. These are tooltips. The tool tips are providing important information that tells the user what file types are acceptable, how many files can be uploaded, or how big they can be. But, I am unable to access/open the tool tips using a keyboard alone. In the video I attempt a number of different types of keystrokes to open the tooltip and nothing works. Finally, I reached for the mouse and was able to click on the tooltip link and it opened. The screen reader was then able to read the text in side the tooltip, and I was able to close the tooltip using the keyboard

<br /><br />

### Finding 5: Labels or instructions aren't provided when content requires user input - Preview and Delete

https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/116fe9a1-5234-4334-948b-fc65041b3636

[WCAG SC 4.1.2 A](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=412#name-role-value)

In this example, I'm using the keyboard to navigate to two icons to the right of the file name. The screen reader announces Link Link, and then link and link again when I navigate over the icons. There is not an accessible name associated with these links or icons, so a user never has an understanding of where these links go or what they do. In this example, one of the links is an icon of a trashcan. When a sighted user clicks that link, it removes the file. It's considered a constructive action, but that action is never announced to the user. They have no idea what just happened. It should be noted that in this case both of these icons should be buttons, not links. Links are used for navigation, buttons help tell the user that a something is happening, or a state is changing on the page. 


<br /><br />

### Finding 6: Name and role can't be programmatically determined for UI components - Middle initial & checkbox

[WCAG SC 3.1.4 AAA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html)   

https://github.com/department-of-veterans-affairs/va.gov-team/assets/117098918/bdacbfbe-d6e1-428b-b28d-3834e508b24b

In this example, when a user tabs through the name fields, the second text input announces "MI". In context, a user could infer that this refers to middle initial, but it could be more clear that they need to enter "Middle Initial".

[WCAG SC 4.1.2 A](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=412#name-role-value)

Also - when navigating to the checkbox - “International Veteran” is not announced. The screen reader just announces that it's a checkbox. A user has no idea what the checkbox is for. 
When the box is selected, the label on a different field changes without alerting the user.

<br /><br />
## Summary

This is a small sample of the errors that were identified, and not every element was thorougly tested.

But based on these few findings - a screen reader user cannot do the following:

1. Select their user type upon account setup (They'd never be able to get past the first screen).
2. If they were able to get help and get past the first screen a screen reader user would never know what types of files they can upload (for example, txt files are not accepted, but you don't know that unless you read the "tool tip" which a screen reader cannot access).
3. Screen reader users cannot review the documents they uploaded because the modal is not focusable (if they were to open the modal, they would be stuck, and the only way out would be to refresh the page or leave the application).

## Links

Full findings from the quick audit of Quick Submit
- [Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/76159) (not an exhaustive audit)

VA.gov accessibility links
- [Platform guidance on Accessibility Testing](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review)
- [How to do screen reader testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/screen-reader-testing)
- [Accessibility and the VA.gov Design System](https://design.va.gov/about/accessibility/)

