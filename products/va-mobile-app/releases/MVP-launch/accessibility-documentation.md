# Accessibility Documentation - VA Mobile App 
**App Store Release**

[Most up to date info on accessibility testing is in TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/29)

_This version of the document was shared with 508 office on 4/22/21_

# Part I | VA.gov Mobile Accessibility Testing Plan 

Link: [Our Broader Accessibility Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/Accessibility%20Test%20Plan.md)

The VA.gov mobile app development team considers accessibility to be a priority requirement in the design and implementation of the app. The purpose of this document is to outline:



1. The requirements that will guide the the VA.gov Mobile App build
2. The accessibility tools and materials that will be used during testing
3. The testing protocol and steps that will be taken when reviewing the accessibility capabilities in the app


## Section 1: Accessibility Requirements & Approach

The following items are based on WCAG 2.0 and Section 508 accessibility standards, organized by product function. Each item description reflects both the requirement and the referenced standard, along with the corresponding implementation approach.



*   Items that have “Design”/ “Designs” bolded reflect standards that must be facilitated by the design workstream
*   Items that have “Programmatically” bolded reflect standards that focus on technical implementation
*   Applicable WCAG 2.1 requirements are also included to reference best practice and may be followed in cases where added implementation scope is minimal.
*   Accessibility standards that relate to non-existent functionality in the app are marked N/A. In the event that the app’s design changes to include relevant functionality, these standards will be candidates to prioritize as requirements.


#### Spreadsheet


<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>WCAG / 508 Section</strong>
   </td>
   <td><strong>Implementation Approach</strong>
   </td>
  </tr>
  <tr>
   <td>Color
   </td>
   <td>Color contrast
<p>
(1.4.3_AA)
<p>
(1.4.6_AAA)
   </td>
   <td>Designs for the the app should consider the following:
<p>
Normal fonts (&lt; 19px)
<p>
• AA compliant: 4.5:1
<p>
• AAA compliant: 7:1
<p>
Large fonts (19px+)
<p>
• AA compliant: 3:1
<p>
• AAA compliant: 4.5:1
   </td>
  </tr>
  <tr>
   <td>Color
   </td>
   <td>Color
<p>
(1.4.1_A)
   </td>
   <td>Designs for the app should not use color as the sole conveyance of information.
   </td>
  </tr>
  <tr>
   <td>Color
   </td>
   <td>Non-text contrast
<p>
(1.4.11_AA)
   </td>
   <td>(2.1 requirement) Designs of UI components and graphical objects in the app designs that are used to understand the content should have a contrast ratio of at least 3:1.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Heading levels
<p>
(1.3.1_A)
   </td>
   <td>Designs for each page should have only, and at least one h1 on the page.
<p>
There are no skipped heading levels. (i.e. the headings don't jump from h1 to h>).
<p>
Programmatically specify ARIA level for all text headings in React Native.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Info and Relationships
<p>
(1.3.1_A)
<p>
(502.3.7) (502.3.8)
   </td>
   <td>Leverage React Native accessible components so that information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Tables
<p>
(1.3.1_A)
<p>
(502.3.3)
   </td>
   <td>N/A - Assumption: Not seeing complex tables in the designs. If we need to pull in a fancier table than what we can build with react native list views, then we may need to pull in a third party library that is accessible and meets the designs.
<p>
All tables should be programmatically identified and the table heading for applicable rows and columns should be announced.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Lists
<p>
(1.3.1_A)
   </td>
   <td>Leverage React Native accessible list component so lists can be programmatically determined.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Page title
<p>
(2.4.2_A)
   </td>
   <td>Each page on the app should programmatically have a unique title that is descriptive and differentiated.
<p>
React Native may provide libraries that facilitate this.
<p>
Screen reader should provide a breadcrumb like page read:
<p>
“[level 3]
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Headings and labels
<p>
(2.4.6_AA)
   </td>
   <td>Headings and labels design should describe topic or purpose and be programmatically determined as such.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Navigation consistency
<p>
(3.2.3_AA)
<p>
(c205.2.2)
   </td>
   <td>N/A according to section 508 (c205.2.2)
<p>
Designs for navigation mechanisms that are repeated across several pages should be consistent. (Color, icon, text, location, etc.)
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Sensory characteristics
<p>
(1.3.3_A) (502.3.8)
   </td>
   <td>Designs for pages should not require sensory characteristics such as shape, color, size, visual location, orientation, or sound to be understood or operable.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Bypass Blocks (Skip nav)
<p>
(2.4.1_A) (c205.2.2)
   </td>
   <td>N/A according to section 508 (c205.2.2) and no such nav exists in designs.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Link purpose in context
<p>
(2.4.4_A)
   </td>
   <td>Design so the purpose of each link can be determined by its text (e.g. "Schedule your appointment now") or the context it's surrounded by. (e.g. "There are a lot of ways to stay active during the pandemic.")
<p>
"Click/tap here" is a huge no.
   </td>
  </tr>
  <tr>
   <td>Headings & Navigation
   </td>
   <td>Multiple ways to reach each page
<p>
(2.4.5_AA) (c205.2.2)
   </td>
   <td>N/A according to section 508 (c205.2.2) since this is a non-web format.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Text alternatives
<p>
(1.1.1_A)
   </td>
   <td>Content / API should provide text alternatives for all non-text content
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Text alternatives for audio-only and video-only content
<p>
(1.2.1_A)
   </td>
   <td>N/A - no such content in the current designs.
<p>
Content / API should provide text alternatives for all non-text content
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Audio descriptions
<p>
(1.2.5_AA) (503.4.2)
   </td>
   <td>N/A - no such content in the current designs
<p>
Content / API for meaningful visual content should be programmatically described
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Video & live video captions
<p>
(1.2.2_A & 1.2.4_AA) (503.4.1)
   </td>
   <td>N/A - assumption: use native audio/video player from OS if needed
<p>
Content / API should provide captions for pre-recorded and live content should be offered
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Audio controls
<p>
(1.4.2_A) (503.4)
   </td>
   <td>N/A - assumption: use native audio/video player from OS if needed
<p>
Design so that all aud
<p>
io content has a mechanism to start, stop and adjust volume independent of the system
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Pause, stop, hide - Video & animation controls
<p>
(2.2.2_A)
   </td>
   <td>N/A - assumption: use native audio/video player from OS if needed
<p>
Design so that all media content has a mechanism to start, stop and hide
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Flashing content
<p>
(2.3.1_A)
   </td>
   <td>Designs should not include content or UI elements that have more than 3 flashes per second max. Avoid flashing content altogether if possible.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Label in name
<p>
(2.5.3_A) (502.3.6)
   </td>
   <td>For UI components with a visual label, make sure the label is programmatically available in the beginning of the name of the component.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Identify Input Purpose -
<p>
Form labels and instructions
<p>
(1.3.5_AA & 3.3.2_A) (502.3.6) (502.3.9) (502.3.12)
   </td>
   <td>Leverage React Native accessible form components so the purpose of each input field collecting information about the user can be programmatically determined.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Form error identification
<p>
(3.3.1_A)
   </td>
   <td>Leverage React Native accessible form components so any errors in filling out a form should be designed descriptive, clearly visible and read programmatically.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Input triggers
<p>
(3.2.2_A)
   </td>
   <td>Designs for the app when changing an input should not cause major changes in page content
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Form error suggestions
<p>
(3.3.3_AA)
   </td>
   <td>Designs for the app should include error messages that include suggestions on how to fix the error. Leverage React Native accessible form components so suggestions can be read programmatically.
   </td>
  </tr>
  <tr>
   <td>Non-text content & media
   </td>
   <td>Legal, financial and data error prevention
<p>
(3.3.4_AA)
   </td>
   <td>Designs for app should enable users to be able to reverse, check or confirm inputs for important data
   </td>
  </tr>
  <tr>
   <td>Text content
   </td>
   <td>Meaningful reading order
<p>
(1.3.2_A)
   </td>
   <td>Designs for app should make sure everything is read in an order that makes sense and is programmatically read.
   </td>
  </tr>
  <tr>
   <td>Text content
   </td>
   <td>Images of text
<p>
(1.4.5_AA) (502.3.8)
   </td>
   <td>Designs should not use images that are purely text, unless it’s visual style cannot be accomplished via styled text. (e.g. logo text)
   </td>
  </tr>
  <tr>
   <td>Text content
   </td>
   <td>Text spacing
<p>
(1.4.12_AA)
   </td>
   <td>N/A - 2.1 Requirement, but still best practice.
<p>
Design and set up text styles so that:
<p>
Line height/ spacing at least 1.5 times the font size
<p>
Paragraphs at least 2 times the font size
<p>
Letter spacing at least 0.12 times the font size
<p>
Word spacing at least 0.16 times the font size
   </td>
  </tr>
  <tr>
   <td>Text content
   </td>
   <td>Text Resizing
<p>
(1.4.4_AA)
   </td>
   <td>Design so that it’s possible to resize content significantly, and ideally to the max device size.
<p>
Programmatically, all font should scale with the font scaling the user has set in the OS.
   </td>
  </tr>
  <tr>
   <td>Miscellaneous
   </td>
   <td>Content on Hover or Focus
<p>
(1.4.13_AA)
   </td>
   <td>N/A 2.1 Requirement
<p>
Programmatically ensure that where content is suddenly visible, then not visible (e.g. a tool-tip) newly shown content is dismissible, hoverable and persistent. This specifically refers to actions that remove pointer hover, or when the keyboard focus triggers additional content.
   </td>
  </tr>
  <tr>
   <td>Miscellaneous
   </td>
   <td>Reflow
<p>
(1.4.10_AA)
   </td>
   <td>2.1 requirement. However, best practice is to design content so that it’s column based and thus expands vertically.
<p>
Programmatically leverage OS specific behavior to facilitate this as well.
<p>
Make sure content doesn't require both vertical and horizontal scrolling when resizing.
   </td>
  </tr>
  <tr>
   <td>Miscellaneous
   </td>
   <td>Time limits
<p>
(2.2.1_A)
   </td>
   <td>Time limits set by the content must be able to be turned off, adjusted, extended, or be longer than 20 hours. If the time limit is essential to the experience, then it is exempt.
   </td>
  </tr>
  <tr>
   <td>Miscellaneous
   </td>
   <td>(4.1.3_A) Status Messages (502.3.14)
   </td>
   <td>Programmatically ensure that users are aware of status changes by declaring status messages through roles or properties. For instance, ensuring that "invalid entry", "saved", or "submitted" is communicated to the user.
<p>
Design should also communicate a change in status
   </td>
  </tr>
  <tr>
   <td>Device specific
   </td>
   <td>Target Size
<p>
(2.5.5_AAA)
   </td>
   <td>Design should ensure that target pointer/ touch inputs are at least 44px by 44px (AAA, but best practice)
<p>
Programmatically, React Native accessible components on tap targets will be leveraged.
   </td>
  </tr>
  <tr>
   <td>Device specific
   </td>
   <td>Device orientation
<p>
(1.3.4_AA)
   </td>
   <td>N/A - 2.1 Requirement. Design should ensure that the UI supports portrait and landscape mode, although this is best practice when it comes to responsive design and designing for multiple devices/ screen sizes.
   </td>
  </tr>
  <tr>
   <td>Device specific
   </td>
   <td>Pointer gestures
<p>
(2.5.1_A) (503.2)
   </td>
   <td>Design so that no inputs require gestures and are possible with taps. All functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.
<p>
Assumption: The only feature that will not have a tap-based alternative is scrolling, and this can be supported by platform capabilities.
<p>
Both platforms have alternatives available to perform simple gestures (e.g. iOS has Assistive Touch built in.)
   </td>
  </tr>
  <tr>
   <td>Device specific
   </td>
   <td>Pointer cancelation
<p>
(2.5.2_A)
   </td>
   <td>Programmatically ensure that for functionality that can be operated using a single pointer, at least one of the following is true:
   </td>
  </tr>
  <tr>
   <td>Device specific
   </td>
   <td>Motion Actuation
<p>
(2.5.4_A)
   </td>
   <td>For a feature that requires device motion (e.g. Face ID), design an alternative way to use that feature that doesn't require device motion - assumption: a login username and password field is an alternative for Face ID. We are also assuming that taking a picture for document upload is an essential function that can’t be done in an alternative way.
   </td>
  </tr>
  <tr>
   <td>Code
   </td>
   <td>Parsing - Code validation
<p>
(4.1.1_A)
   </td>
   <td>N/A - there are no code validators for react native
   </td>
  </tr>
  <tr>
   <td>Code
   </td>
   <td>Page language
<p>
(3.1.1_A)
   </td>
   <td>The default human language and be determined programmatically.
   </td>
  </tr>
  <tr>
   <td>Code
   </td>
   <td>Name, role, value
<p>
(4.1.2_A) (502.3.1) (502.3.2) (502.3.4) (502.3.5) (502.3.14)
   </td>
   <td>All custom UI components should programmatically have a name, role and value.
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Keyboard focus visibility (2.4.7) (502.3.12)
   </td>
   <td>Keyboard will be supported by OS capabilities.
<p>
If an element is in focus, it should be clearly visible that it is.
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Keyboard focus order
<p>
(2.4.3_A) (502.3.10)
   </td>
   <td>The tab order should make logical sense. All focusable elements should be read aloud by a screen reader.
<p>
The tab order cannot be programmatically adjusted through React Native as it does not support indexing, therefore the tab order will be dependent on the visual order. However, we could index components using AccessibilityLabel over the indexes of the map over an array of data.
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Keyboard access
<p>
(2.1.1_A) (502.3.11) (502.3.13)
   </td>
   <td>Keyboard will be supported by OS capabilities.
<p>
All functionality of the content is operable through a keyboard
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Keyboard traps
<p>
(2.1.2_A) (502.3.13)
   </td>
   <td>Keyboard will be supported by OS capabilities.
<p>
Content does not “trap” keyboard focus, i.e. there are ways to exit modals and widgets using the keyboard
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Character Key Shortcuts
<p>
(2.1.4_A)
   </td>
   <td>Keyboard will be supported by OS capabilities.
<p>
Keyboard shortcuts must be able to be turned off, remapped or active only if the component is in focus
   </td>
  </tr>
  <tr>
   <td>Keyboard
   </td>
   <td>Focus triggers
<p>
(3.2.1_A)
   </td>
   <td>Keyboard will be supported by OS capabilities.
<p>
Changing focus should not trigger any unexpected changes to page content
   </td>
  </tr>
</table>



## 


## Section 2: Test Environment


### Device Matrix

The MVP will support both iOS and Android devices. Since there is a variance between accessibility capabilities across operating systems, one device will be manually tested from each platform.

These devices will be selected from the Device Matrix based on availability during the development cycle. Specific devices from the device matrix may be used depending on the test case. For instance, when testing text/ content resizing capabilities, devices with a smaller screen size should be prioritized.

While additional configurations may exist on other devices (i.e. non-Samsung Android devices), these settings are likely to be driven by personal user preferences and to go beyond fundamental platform accessibility capabilities.


### Test Tools

Multiple testing tools will be used to ensure adequate testing coverage. Where possible, platform specific assistive technology will be used to inspect accessibility properties that manifest differently across platforms.



*   Voiceover (iOS), and Talkback (Android) will be used to test Screen Reader capabilities
*   Bluetooth keyboards* will be used to test keyboard operability.
*   Google Accessibility Scanner will be used to audit the app as a comprehensive set of functionality is developed.
*   If needed, the results of the full app scan will be shared with the 508 Office nearing the end of the development cycle.




## Section 3: Testing Protocol

This testing protocol will be used to guide the testing process. This testing plan may be adjusted in cases where a requirement has been de-prioritized or is determined to be unfeasible for MVP.

In the criteria section, [P] and [F] denote passing and failing criteria, respectively. \



<table>
  <tr>
   <td><strong>Requirement Preference</strong>
   </td>
   <td><strong>Protocol</strong>
   </td>
   <td><strong>Criteria</strong>
   </td>
  </tr>
  <tr>
   <td>Color
   </td>
   <td>Visual observation that color is not the only method used to provide information.
   </td>
   <td>[P] if color is used but is not the only method to provide information.
<p>
[F] if color is the only method used to provide information.
   </td>
  </tr>
  <tr>
   <td>Color Contrast
   </td>
   <td>Use a contrast comparison tool to determine contrast ratio between text and background colors
   </td>
   <td>[P] if the contrast ratio is 4.5:1 or greater for normal fonts, and 3:1 or greater for 19px+ fonts, when comparing text to background colors.
<p>
[F] Less than 4:5:1 contrast ratio for normal fonts and 3:1 for large fonts, when comparing text to background colors.
   </td>
  </tr>
  <tr>
   <td>Heading levels, heading and labels
   </td>
   <td>Use a screen reader to:
<p>
-Ensure that there is only h1 on the page
<p>
-Ensure all heading levels are purposeful and in logical order
<p>
-Ensure that no headings are skipped
   </td>
   <td>[P] if there is only one h1 on the page and all heading levels are purposeful, in logical order and no headings are skipped.
<p>
[F] if any heading is skipped, read in illogical order, not purposeful or there is more than one h1 on the page.
   </td>
  </tr>
  <tr>
   <td>Info and Relationships
   </td>
   <td>Verify that the screen reader describes any visual information that denotes a relationship, e.g. a child-component relationship to a parent-component.
   </td>
   <td>[P] if the user is informed of visually communicated information and relationships
<p>
[F] if visually communicated information and relationships are not declared to the user
   </td>
  </tr>
  <tr>
   <td>Lists
   </td>
   <td>Ensure that the screen reader describes any list-like components as lists.
   </td>
   <td>[P] if lists are programmatically determined.
<p>
[F] if lists are not programmatically determined.
   </td>
  </tr>
  <tr>
   <td>Page title
   </td>
   <td>Review each page in the app and ensure that each unique page title is both descriptive and differentiated.
   </td>
   <td>[P] if each page title is unique, descriptive and differentiated.
<p>
[F] if a page title is misleading or undescriptive
   </td>
  </tr>
  <tr>
   <td>Sensory characteristics
   </td>
   <td>Visually inspect pages for any items that require characteristics like shape, color, size, visual location, orientation, or sound to be understood or operable.
   </td>
   <td>[P] if all components and pages are understood and operable without needing shapes, colors, size, visual locations, orientations or sounds.
<p>
[F] if pages require any shape, color, size, visual location, orientation, or sound to be understood or operable.
   </td>
  </tr>
  <tr>
   <td>Text alternatives
   </td>
   <td>Review any non-text content with the screen reader to ensure it has a text alternative.
   </td>
   <td>[P] User is able to interact with non-text content by way of text alternative.
<p>
[F] User has no alternative for non-text content.
   </td>
  </tr>
  <tr>
   <td>Flashing content
   </td>
   <td>N/A The app does not contain any flashing content. In the event this is added, the tester will ensure that any flashing content does not flash more than 3 times per second (3 Hz.)
   </td>
   <td>[P] No flashing content or if there is, it flashes 3 times per second or less.
<p>
[F] Flashing content > 3 times per second.
   </td>
  </tr>
  <tr>
   <td>Label in name
   </td>
   <td>Review all components with visual labels and ensure the name of the label either matches, or is part of, the accessible name that is read by the screen reader.
   </td>
   <td>[P] The label of the component either matches or is part of the accessible name.
<p>
[F] The label name is not included in the accessible name.
   </td>
  </tr>
  <tr>
   <td>Identify Input Purpose - Form labels and instructions
   </td>
   <td>Use the screen reader and visual observation to ensure all fields collecting information are well labeled so the user can easily tell what is needed.
   </td>
   <td>[P] Purpose for each input field for information collection from the user is easily determined.
<p>
[F] Input field does not clearly convey the information needed.
   </td>
  </tr>
  <tr>
   <td>Form error identification
   </td>
   <td>Use the screen reader and visual observation to verify that any form entry or submission errors are clearly conveyed to the user. In cases where the app automatically corrects an entered value, the constraint is also communicated.
   </td>
   <td>[P] Screen reader clearly informs users of errors that have occurred during entry or submission.
<p>
[F] Errors messages do not exist, or the screen reader fails to read errors appearing during entry or submission.
   </td>
  </tr>
  <tr>
   <td>Input triggers
   </td>
   <td>Visually observe that filling out form fields will not change the content of the page or form in any major way.
   </td>
   <td>[P] Filling in a form causes minor or no changes in page content.
<p>
[F] Input by the user causes major structural changes to the form or page.
   </td>
  </tr>
  <tr>
   <td>Form error suggestions
   </td>
   <td>Use the screen reader and visual observation while generating errors to ensure that the user is given suggestions on how to fix their input.
   </td>
   <td>[P] Input errors are accompanied by suggestions on how to fix the error.
<p>
[F] Upon entering information that results in an error, the user does not receive suggestions on how to fix the error.
   </td>
  </tr>
  <tr>
   <td>Legal, financial and data error prevention
   </td>
   <td>On the direct deposit page (and additional pages that are later determined to require legal or financial data input), ensure that a user can do at least one of the following:
<p>
-Review the information they’ve entered
<p>
-Confirm that the information they’ve entered is correct
<p>
-Reverse or change the information they’ve entered after submission
   </td>
   <td>[P] The user is able to review, confirm, reverse, or change financial and legal inputs.
<p>
[F] The user is unable to do any of the aforementioned actions and all legal and financial data inputs are final.
   </td>
  </tr>
  <tr>
   <td>Meaningful reading order
   </td>
   <td>Use the screen reader to ensure page content is read in a logical order.
   </td>
   <td>[P] Content is read in a logical order.
<p>
[F] Content is not read in a logical order and jumps around.
   </td>
  </tr>
  <tr>
   <td>Images of text
   </td>
   <td>Use visual observation to verify images are not purely text. If images of text do exist, determine whether this is essential to the information being conveyed.
   </td>
   <td>[P] Images are not purely text (unless it can’t be accomplished via styled text.)
<p>
[F] Image is purely text despite there being a viable alternative.
   </td>
  </tr>
  <tr>
   <td>Text Spacing
   </td>
   <td>(Not required, but best practice.)
<p>
- Use inspection tools to verify the following:
<p>
- Line height / spacing is at least 1.5 times the font size.
<p>
- Paragraphs are at least 2 times the font size.
<p>
- Letter spacing is at least 0.12 times the font size.
<p>
- Word spacing is at least 0.16 times the font size.
   </td>
   <td>[P] Line height / spacing is at least 1.5 times font size,
<p>
Paragraphs are at least 2 times font size,
<p>
Letter spacing is at least 0.12 times font size,
<p>
Word spacing is at least 0.16 times font size.
<p>
[F] Line height / spacing is less than 1.5 times font size,
<p>
Paragraphs are less than 2 times font size,
<p>
Letter spacing is less than 0.12 times font size,
<p>
Word spacing is less than 0.16 times font size.
   </td>
  </tr>
  <tr>
   <td>Text Resizing
   </td>
   <td>Use the OS font scaling settings to
<p>
verify user is able to resize content to the maximum device size.
<p>
Note: The header and navigation bar will not be reviewed for this criteria, as resizing these components significantly would make them unusable.
   </td>
   <td>[P] Text may be resized with no loss of functionality.
<p>
[F] User experiences some loss of functionality when text is resized.
   </td>
  </tr>
  <tr>
   <td>Time Limits
   </td>
   <td>N/A as no time limits currently exist. In the event this is added, the tester will use the screen reader and visual observation to ensure any time limits under 20 hours and set by the content can be turned off, adjusted, or extended.
   </td>
   <td>[P] if there are no time limits or any time limits existing may be adjusted, extended, or the limit is longer than 20 hours.
<p>
[F] if there is a time limit (other than essential) that may not be adjusted, extended or is longer than 20 hours.
   </td>
  </tr>
  <tr>
   <td>Status Messages
   </td>
   <td>Use the screen reader and visual observation to check that any errors or other status messages (like “save” or “submitted”) are communicated to the user.
   </td>
   <td>[P] All status messages are communicated to the user and may be seen or heard with a screen reader.
<p>
[F] Status messages are not communicated to the user or read by the screen reader.
   </td>
  </tr>
  <tr>
   <td>Target Size
   </td>
   <td>Use the inspection tool to verify all touch point / target pointer inputs on a page are at least 44px by 44px in size.
   </td>
   <td>[P] if all touch points on a page are 44px by 44px or larger.
<p>
[F] if any touch point on a page is smaller than 44px by 44px.
   </td>
  </tr>
  <tr>
   <td>Pointer gestures
   </td>
   <td>By observation, verify no inputs (other than scrolling) require any gestures other than tapping.
   </td>
   <td>[P] if all components (e.g. buttons, tabs, or sliders) may be operated with a simple tapping gesture to operate.
<p>
[F] if a component besides scrolling requires a sliding or path-based gesture to operate.
   </td>
  </tr>
  <tr>
   <td>Pointer cancelation
   </td>
   <td>By observation, verify that any functionality that can be operated using a single pointer has at least one of the following true:
<p>
- No down-event, abort or undo
<p>
- No up-reversal
<p>
(Unless it is essential.)
   </td>
   <td>[P] There is no down-event, abort, undo or there is no up-reversal (unless it is essential.)
<p>
[F] There are down-events, aborts, undos and up-reversals that are not essential.
   </td>
  </tr>
  <tr>
   <td>Motion Actuation
   </td>
   <td>By observation, verify there are alternatives to any feature requiring device motion (like Face ID) and that there is no required shaking or tilting of the device, etc.
<p>
Note: Taking a picture with the device is an exception because it is an essential function with no alternative.
   </td>
   <td>[P] if all functions using motion have an alternative that doesn’t require shaking or tilting of device.
<p>
[F] if shaking or tilting of the device is necessary without an alternative (other than taking pictures.)
   </td>
  </tr>
  <tr>
   <td>Page language
   </td>
   <td>N/A - the app only supports English
<p>
If an app supports multiple languages, ensure that the language can be accurately identified by the device by checking that:
<p>
- Screen readers can load the correct pronunciation rules.
<p>
- Characters and scripts are displayed correctly.
<p>
- Media players can show captions correctly.
   </td>
   <td>[P] Page is written in human language and is easily read, both visually and with the screen reader. Media players and characters/ scripts are also correct.
<p>
[F] Page is unable to be read visually or by screen reader. Characters and script do not match the selected language.
   </td>
  </tr>
  <tr>
   <td>Name, role, value
   </td>
   <td>Use the screen reader and visual observation to verify all custom UI components have a discernible, logical name and role, (and value when applicable)
   </td>
   <td>[P] The name, role, and when applicable, value of each custom component are clear and read by the screen reader.
<p>
[F] Any custom UI components are missing a name, role or value.
   </td>
  </tr>
  <tr>
   <td>Keyboard focus visibility
   </td>
   <td>Use a keyboard connected to the device and verify ability to tab through page elements, ensuring that focus is clearly visible.
   </td>
   <td>[P] if focus is clearly visible while tabbing through elements.
<p>
[F] if focus is difficult to determine while tabbing through elements.
   </td>
  </tr>
  <tr>
   <td>Keyboard focus order
   </td>
   <td>Use a keyboard connected to the device to tab through page elements. Verify the following:
<p>
- Tab order is logical.
<p>
- All focused elements are read aloud by the screen reader.
   </td>
   <td>[P] if tab order is in logical order AND all elements are read aloud by screen reader.
<p>
[F] if tab order jumps around the screen in an illogical order OR all elements are not read aloud.
   </td>
  </tr>
  <tr>
   <td>Keyboard access
   </td>
   <td>Use a keyboard connected to the device and verify that all functionality of content is accessible and operable through use of the keyboard.
   </td>
   <td>[P] if all elements on the screen are accessed and operable through the keyboard.
<p>
[F] if any element on the screen may not be operable through the keyboard.
   </td>
  </tr>
  <tr>
   <td>Keyboard traps
   </td>
   <td>Use a keyboard connected to the device and verify that all functions of the page are operable without becoming trapped in any particular element, modal, or widget (i.e. stuck and not able to leave the element.)
   </td>
   <td>[P] if a user is able to leave or exit all operations on the screen without becoming trapped or “stuck”.
<p>
[F] if a user gets caught in any sort of loop or element that they may not exit using any key or combination of keys on the keyboard.
   </td>
  </tr>
  <tr>
   <td>Character Key Shortcuts
   </td>
   <td>Use a keyboard connected to the device to verify that any custom keyboard shortcuts can be turned off, remapped or only active while the component is in focus.
   </td>
   <td>[P] if a custom keyboard shortcut is able to be turned off, remapped or is only active when the component is in focus
<p>
[F] if a custom keyboard shortcut cannot be modified or is active beyond in-focus components.
   </td>
  </tr>
  <tr>
   <td>Focus triggers
   </td>
   <td>Use a keyboard connected to the device to tab through and verify that no unexpected changes appear to page content by simply changing focus.
   </td>
   <td>[P] if no unexpected changes occur when changing focus
<p>
[F] if any unexpected changes occur to page content when changing focus
   </td>
  </tr>
</table>



### 


# Part II | Testing Strategy


## Approach

We are taking an integrated approach to testing - building QA activities into the agile development process so that testing takes place early and often as a key part of sprint operations. Identifying issues during development will minimize technical and functional debt and make for better product quality and more accurate progress reporting and delivery status. In addition, we will leverage automated testing tools in the development delivery chain to provide real time integration and accessibility checks.

Accessibility is a major requirement for the VA Mobile App and requires additional consideration beyond the standard testing process. Developers will write in accessibility tests during implementation using automation tools and QA will include accessibility checks in the manual functional testing activities.


## Tracking Requirements

While the Testing Protocolhelps guide requirements and the overall testing process, we have also built in feature-specific accessibility requirements into the frontend backlog to guide frontend development activities. At the feature level, this typically includes specifying accessibility labels, roles, states, and content headers. Just like any other functional requirement, these are defined as individual build requirements so that they are developed and tested to specification. Ultimately, these requirements (or “Acceptance Criteria”) are translated into test cases to guide manual testing. 


## Example | Backlog ticket with feature-level accessibility requirements


<table>
  <tr>
   <td><strong>Title</strong>
   </td>
   <td><strong><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20820">Confirmation screen to cancel Compose Message form (#20820)</a></strong>
   </td>
  </tr>
  <tr>
   <td><strong>User story</strong>
   </td>
   <td>As a user, I want to see a confirmation page after I’ve hit “Cancel” that gives me options to: cancel the draft, or go back to the Compose Message screen.
   </td>
  </tr>
  <tr>
   <td><strong>Acceptance Criteria</strong>
   </td>
   <td>
<ol>

<li>Upon hitting the “Cancel” large button on the Compose Message page, route the user to a new page where they can confirm that they want to cancel the draft 
<ol>
 
<li>Display Cancel button in the header
 
<li>Page header carries over from the Compose Message page: “Compose”
</li> 
</ol>

<li>Display a mobile alert on the page 
<ol>
 
<li>Pull in mobile alert CC
 
<li>Copy in the alert is hard-coded
 
<li>Display 2 buttons at the bottom of the alert
</li> 
</ol>

<li>“Cancel and go to Inbox” button (primary action UI) 
<ol>
 
<li>Selecting this button routes the user to the Inbox page without saving or sending the message
</li> 
</ol>

<li>“Go back to compose” button (secondary action UI) 
<ol>
 
<li>Selecting this button returns the user to the Compose Message form. Their message should retain the same state as when they left it (i.e. any edits they made to field entries, attachments, etc. should be visible when they go back to the page)
</li> 
</ol>
</li> 
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Designs</strong>
   </td>
   <td>https://adhoc.invisionapp.com/share/YM10HVPXJE7V#/screens/448823099_Cancel_Message
   </td>
  </tr>
  <tr>
   <td><strong>Accessibility Acceptance Criteria</strong>
   </td>
   <td>
<ol>

<li>Everything on the page should be read by the screen reader. 
<ol>
 
<li>If anything is being conveyed visually only (buttons, menu items, list, tables, images, headings, forms, etc.) the component type needs to be announced by the screenreader (Include name (title), role, value)
</li> 
</ol>

<li>Each page should support text resizing based on the OS font scaling settings without loss of content, content overlap, or horizontal scroll. 

<li>Each touch target must be at minimum 44px by 44px.

<li>The app needs to support operability by tap (no gestures) or voice control only. In cases where gestures occur, e.g. scroll, ensure these simple gestures are operable through the OS’ built-in capabilities. 

<li>All elements on a page should be able to be transversed by an auxiliary keyboard. As a usr uses the keyboard to navigate a page, its focus elements should be clear. 

<li>When a page opens, the first section or element should automatically be placed in focus.

<li>When a page opens, the title page should be announced.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Accessibility Implementation Guidelines</strong>
   </td>
   <td>
<ul>

<li>Mark ‘Cancel this message?’ as Header 2

<li>“Cancel and go to Inbox” button 
<ul>
 
<li>accessibilityLabel= “cancel and go to inbox”
 
<li>accessibilityHint= “cancel this message and go back to the Inbox page”
 
<li>accessibilityRole= “button”
</li> 
</ul>

<li>“Go back to compose” button 
<ul>
 
<li>accessibilityLabel= “go back to compose”
 
<li>accessibilityHint= “continue editing your message”
 
<li>accessibilityRole= “button”
</li> 
</ul>
</li> 
</ul>
   </td>
  </tr>
</table>





# Part III | Test Rail Results

Stats as of April 8th, 2021

110/126: 88% Pass rate

4/126: 3% Untest

12/126 10% fail 


#### Spreadsheet
(snapshot as of 4/22/21)


<table>
  <tr>
   <td><strong>Feature Category</strong>
   </td>
   <td><strong>Accessibility Factor from Test Rail</strong>
   </td>
   <td><strong>How we’ve completed</strong>
   </td>
   <td><strong>Testrail Ticket</strong>
   </td>
   <td><strong>Github Accessibility Tickets</strong>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Home page #13950 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/756&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/756&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Profile screen (UI) #13885 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/764&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/764&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Contact VA page + click-to-call #14015 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/750&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/750&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>View personal information #13890 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/770&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/770&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13890">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13890</a>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Navigation bar & 4 landing pages #13862 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/750&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/750&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>View direct deposit info #13902 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/782&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/782&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit direct deposit info (UI) #13907 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/782&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/782&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13907">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13907</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>View military information #13896 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/844&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/844&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13896">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13896</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>No letters screen (UI) #16035 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/840&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/840&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16035">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16035</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>How will you use my contact info page #13892 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/837&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/837&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13892">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13892</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>View list of letters #13941 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/831&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/831&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13941">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13941</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Incorrect service info page + click-to-call #13897 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/830&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/830&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13897">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13897</a>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Veteran Crisis Line page #14016 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/818&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/818&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14016">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14016</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Letters overview page #14706 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/813&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/813&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14706">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14706</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Update my personal information page #13891 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/810&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/810&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13891">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13891</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit email address #13895 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/785&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/785&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13895">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13895</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Appointments Overview Nav #13962 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/868&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/868&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13962">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13962</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Benefit Summary & Service Verification letter #13947 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/870&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/870&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13947">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13947</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Common component: Styling for toggle switch #15074 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/865&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/865&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15074">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15074</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Direct deposit - Confirm & Save (FE validation) #14714 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/858&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/858&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14714">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14714</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit International address (UI) #15059 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/856&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/856&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15059">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15059</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit Military Base address (UI) #15058 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/853&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/853&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit US address (UI) #13893 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/851&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/851&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13893">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13893</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Edit phone number #13894 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/846&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/846&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13894">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13894</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>View military information #13896 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/844&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/844&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13896">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13896</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: VAVC at a VA Location #15738 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/983&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/983&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15738">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15738</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: Community Care Facility #15741 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/981&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/981&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15741">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15741</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: VAVC at an ATLAS Location #15713 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/987&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/987&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15714">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15714</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: VAVC Using a VA Device #15742 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/985&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/985&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15742">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15742</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Filter past appointments #15763 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/916&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/916&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15763">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15763</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Past Appointments List (UI) #13994 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/882&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/882&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13994">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13994</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointments List (UI) #13971 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/877&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/877&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13971">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13971</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>View / edit address before opening letters & docs #13940 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/875&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/875&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13940">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13940</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Service Verification letter #13942 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/872&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/872&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13942">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13942</a>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Settings landing page #13957 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1037&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1037&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13957">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13957</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Update a11y for Contact VA page #15089 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1035&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1035&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15089">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15089</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Manage your account page #13958 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1033&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1033&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13958">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13958</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Canceled Appointment (UI) #15739 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1022&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1022&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15739">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15739</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Prepare for video visit page #15761 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1004&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1004&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15761">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15761</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>No upcoming appointments (UI) #15702 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/996&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/996&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15702">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15702</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Past Appointment Details (UI) #15754 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1020&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1020&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15754">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15754</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: VAVC at Home #15714 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1002&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1002&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15714">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15714</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Upcoming Appointment Details: VA Appointment #13995 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/994&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/994&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13995">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13995</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Closed Claims & Appeals (UI) #16698 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1060&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1060&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16698">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16698</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>No past appointments for selected date range (UI) #15987 Acce
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1057&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1057&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15987">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15987</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Claims & Appeals (UI) #14477 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1055&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1055&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14477">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14477</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Issues summary #16790 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1051&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1051&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16790">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16790</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Need help w/ Claim list item #16706 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1049&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1049&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16706">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16706</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Estimated decision date #16777 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1047&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1047&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16777">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16777</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Disagree with claims decision FAQ page #16700 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1045&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1045&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16700">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16700</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Consolidated claims FAQ page #16699 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1043&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1043&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16699">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16699</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims detail | Status/Issues segmented selector #16785 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1041&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1041&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16785">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16785</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Share app #13966 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1039&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1039&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13966">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/13966</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>No Claims & Appeals (UI) #16909 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1053&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1053&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16909">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16909</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Details summary #17369 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1133&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1133&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17369">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17369</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Appeals ahead of you #16860 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1129&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1129&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/168600">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/168600</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Current status #16858 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1127&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1127&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16858">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16858</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Join Virtual Session | iOS #15762 Accessibility
   </td>
   <td>Untested
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1121&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1121&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15762">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15762</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Join Virtual Session | Android #17633 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1119&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1119&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17633">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17633</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Closed Claims detail page (UI) #15624 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1091&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1091&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15624">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15624</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Need help w/ Appeal list item #16709 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1131&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1131&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16709">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16709</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Submit claim decision request (UI & FE validation) #17520 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1180&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1180&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17520">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17520</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Closed Appeals detail page (UI) #17373 Accessibility
   </td>
   <td>Untested
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1178&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1178&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17373">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17373</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims File Upload page | Section 3 #17510 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1176&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1176&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/175100">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/175100</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Ask for Claim Decision page (UI) #17511 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1174&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1174&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17511">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17511</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims File Upload page | Section 2 #17466 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1172&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1172&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17466">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17466</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Claims file upload page | Section 1 #16775 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1169&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1169&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/167755">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/167755</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Status/issues segmented selector #16857 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1139&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1139&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16857">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16857</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Active Appeals detail | Past events expand/collapse #16863 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1136&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1136&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16863">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/16863</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Generic Error State | Refresh before calling help center #18227 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1238&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1238&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182277">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182277</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Upload photos & files to claim w/ success message #18612 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1236&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1236&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/186122">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/186122</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Take photos page | with photo(s) added #18603 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1234&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1234&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/186355">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/186355</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Select a file page | No files added #18596 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1231&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1231&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18596">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18596</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Error | Invalid routing number #18233 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1228&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1228&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182333">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182333</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>File upload / Take photo buttons #18277 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1222&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1222&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18277">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18277</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Take photos page | No photos added #18584 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1219&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1219&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/185844">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/185844</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>App startup | Biometrics opt-in #18381 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1217&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1217&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18381">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18381</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>Add mobile alert with prototype disclaimer to login screen #18406 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1284&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1284&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18406">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18406</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Claims unavailable w/ no Appeals #18244 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1277&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1277&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18244">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18244</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Appeals unavailable w/ no Claims #18245 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1275&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1275&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182455">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/182455</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Claims unavailable #17471 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1273&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1273&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/174711">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/174711</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Photo exceeds max size #18798 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1269&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1269&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/187988">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/187988</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | File exceeds max size #18804 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1267&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1267&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/188044">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/188044</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | File type not accepted #18639 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1265&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1265&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18639">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18639</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>App startup | LOA1 Gate #15100 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1251&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1251&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15100">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/15100</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Appeals unavailable #18243 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1244&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1244&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18243">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18243</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Generic Error State | No network connection #18231 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1242&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1242&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18231">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18231</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Error | Upstream appointment error #18232 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1333&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1333&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18232">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18232</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Proof of Minimal Essential Coverage letter #14814 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1325&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1325&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14814">ttps://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14814</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Proof of Service letter #14812 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1323&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1323&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14812">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14812</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Proof of Creditable Prescription Drug Coverage letter #14813
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1321&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1321&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14813">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14813</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Update file request card UI after a successful submission #1909
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1306&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1306&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19098">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19098</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Error | Claims & Appeals unavailable #19079 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1304&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1304&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19079">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19079</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Confirmation screen for photo/file upload #19086 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1301&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1301&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19086">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19086</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Select a file page | with file added #18635 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1297&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1297&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18635">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18635</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Civil Service Preference letter #14809 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1358&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1358&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/148099">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/148099</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Benefit Verification letter #14811 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1356&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1356&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14811">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14811</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>Onboarding Screen #4 - Profile #19000 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1352&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1352&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/190000">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/190000</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>Onboarding Screen #3 - Claims & Appeals #18999 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1350&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1350&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18999">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18999</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>Onboarding Screen #2 - Appointments #18998 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1348&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1348&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/189988">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/189988</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>Onboarding Screen #1 - App overview #18997 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1346&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1346&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18997">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18997</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Error | Address Recognition: Confirm Unit Number #17698 Ac
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1343&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1343&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17698">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17698</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Error | Address Recognition: Add Unit Number #17700 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1341&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1341&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17701">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17701</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Error | Address Recognition w/ suggestions #17480 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1339&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1339&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/174800">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/174800</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Error | Address Recognition w/ no suggestions #17695 Accessib
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1337&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1337&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17695">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/17695</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Field errors for Edit Phone (UI) #19668 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1440&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1440&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19668">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19668</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Field errors for Edit Address (UI) #19662 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1438&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1438&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19662">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19662</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>UI updates for Edit Email #19582 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1436&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1436&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/195822">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/195822</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>UI updates for Edit Phone #19581 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1434&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1434&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19581">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19581</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>UI updates for Edit Address #18907 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1432&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1432&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18907">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/18907</a>
   </td>
  </tr>
  <tr>
   <td>Letters
   </td>
   <td>Error | Letter cannot be loaded #19836 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1426&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1426&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19836">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19836</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Commissary letter #14808 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1360&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1360&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14808">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/14808</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Unsuccessful cancelation #20463 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1490&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1490&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20463">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20463</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Successful cancelation #20462 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1488&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1488&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20462">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20462</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Confirmation screen for appointment cancelation #20459 Acc
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1485&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1485&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20459">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20459</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Cancel VA appointments #20457 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1483&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1483&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20457">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20457</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Cancel Community Care appointments #20454 Accessibility
   </td>
   <td>Untested
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1456&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1456&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20454">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20454</a>
   </td>
  </tr>
  <tr>
   <td>Appointment
   </td>
   <td>Cancel VAVC appointments #20441 Accessibility
   </td>
   <td>Untested
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1454&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1454&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20441">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20441</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>UI updates for Direct Deposit #20222 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1445&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1445&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20222">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20222</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Field errors for Edit Email (UI) #19669 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1442&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1442&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19669">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/19669</a>
   </td>
  </tr>
  <tr>
   <td>Claims/Appeals
   </td>
   <td>Content updates for File upload screen #21985 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1581&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1581&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21985">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21985</a>
   </td>
  </tr>
  <tr>
   <td>Onboarding/Start
   </td>
   <td>UI updates to biometrics opt in screen #21470 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1567&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1567&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/214700">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/214700</a>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Letters card button on Home screen #21070 Accessibility
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1549&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1549&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21070">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21070</a>
   </td>
  </tr>
  <tr>
   <td>Home
   </td>
   <td>Update a11y announcements for nav bar tabs #21270
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1528&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1528&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21270">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/21270</a>
   </td>
  </tr>
  <tr>
   <td>Profile
   </td>
   <td>Delete Contact Information CC #20334 Accessibility
   </td>
   <td>0%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1518&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1518&group_by=cases:section_id&group_order=asc</a>
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20334">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20334</a>
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Add accessibilityState to disabled buttons #20953
   </td>
   <td>100%
   </td>
   <td><a href="https://dsvavsp.testrail.io/index.php?/runs/view/1511&group_by=cases:section_id&group_order=asc">https://dsvavsp.testrail.io/index.php?/runs/view/1511&group_by=cases:section_id&group_order=asc</a>c
   </td>
   <td><a href="https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20953">https://app.zenhub.com/workspaces/va-mobile-app-5f205eac3155a2000f422ecb/issues/department-of-veterans-affairs/va.gov-team/20953</a>
   </td>
  </tr>
</table>





# Part IV | Next Steps


## Remediate
- We'll be addressing any failures identified in TestRail


## 508 Office Handoff
