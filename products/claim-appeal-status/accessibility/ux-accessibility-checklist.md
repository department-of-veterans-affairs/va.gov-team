# UX Accessibility Checklist WCAG 2.2 

An accessibility gut-check for your Figma designs! 

This is a list of common things to look for when reviewing Figma designs for accessibility, before handing off to engineering. This is not an exhaustive list, and not all items in the list may apply to your design. Topics are ordered alphabetically.

**This checklist was last updated by @bacitracin on November 4, 2025.** It references the Success Criteria (SC) from the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/WAI/WCAG22/quickref/?currentsidebar=%23col_customize&versions=2.2), which is the most recent WCAG version. This list was cross-checked with the [ADE Design Review Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/templates/design-review-template.md)

## Topic Shortcuts
- [Adaptability / Mobile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#adaptabilitymobile)
- [Animation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#animation)
- [Audio / Video ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#audio--video)
- [Color & Contrast ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#color--contrast)
- [Dynamic Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#dynamic-content)
- [Focus Order & Reading Order](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#focus-order--reading-order)
- [Form Elements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#form-elements)
- [GitHub Markdown Files](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#github-markdown-files)
- [Headings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#headings)
- [Images](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#images)
- [Language / Cognitive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#languagecognitive)
- [Links & Buttons](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#links--buttons)
- [Lists](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#lists)
- [Modals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#modals)
- [Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#navigation)
- [Tables](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#tables)
- [Tooltips](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#tooltips)
- [VA Design System (VADS) Components](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#va-design-system-vads-components)


## Adaptability/Mobile

- [ ]  Have you designed for responsiveness and adaptability across devices and viewports (including mobile, desktop, and 400% zoom)?
- [ ]  Does the layout work in both orientations (landscape and portrait) without requiring horizontal scrolling?
- [ ]  Are interactive elements (like buttons, links, text inputs) at least 44px x 44px and spaced to prevent accidental taps or clicks? [WCAG SC 2.5.5 Target Size (Enhanced)(Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

## Animation

- [ ]  If you’re using animation, do we have a no/low motion version for users who prefer reduced motion? Example: there is a “shimmer” animation on the Claim Status Tool’s skeleton loader. For users who prefer reduced motion, we have a flat version that includes no animation.
    
    <img width="412" height="280" alt="The Claim Status Tool's skeleton loader cards show grey lines as a placeholder for text, with no shimmer loading animation when the user prefers reduced motion" src="https://github.com/user-attachments/assets/b5417cc4-42b2-4545-9866-6bfccacbdae2" />

- [ ]  If there is content that starts automatically (carousels, image sliders, video, music), does it autoplay for 5 seconds or less? If it’s longer than 5 seconds there should be a way for users to pause, stop or hide the media. [WCAG 2.2.2 Pause, Stop, Hide (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
- [ ]  Do animations avoid fast flashing (no more than 3 flashes per second)? More than 3 flashes per second can trigger a seizure. [WCAG 2.3.1 Three Flashes or Below Threshold (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
- [ ]  If there is scrolling behavior in the design, be sure to mark in the annotations that developers should also code a non-scrolling version for users who prefer reduced motion. Or even better, avoid adding smooth scrolling at all.

## Audio / Video

- [ ]  Audio or video does not play automatically unless it plays for 3 seconds or less
- [ ]  Does audio / video content include captions or transcripts?
- [ ]  If there’s an embedded audio / video player can you control the playback using keyboard alone?

## Color & Contrast

- [ ]  Do all text & design elements pass color contrast requirements? (including in grayscale and common colorblindness modes). For text the minimum is **4.5:1** for normal text, **3:1** for large text. Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or [TPGi’s Color Contrast Analyzer tool](https://www.tpgi.com/color-contrast-checker/). We need to meet contrast for WCAG 2.2 Level AA.
- [ ]  If the design includes a custom component have we designed keyboard focus states for the component that pass color contrast?
    
    Example: the conditions autocomplete component on the [add a new condition page of the 526 disabilities form](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/new-disabilities/add) is a non Design System custom component that has focus states added in. See the yellow focus ring in the screenshot.
    
    <img width="494" alt="An autocomplete component with the text 'tinn' in the search input. Possible matching conditions populate an open dropdown of search results, and a yellow focus ring wraps the active item 'anorexia (type of eating disorder)'." src="https://github.com/user-attachments/assets/abbaa5a4-00ea-4d3e-82d6-3c06343d55b8" />


- [ ]  Is any information conveyed ONLY through color? (See also under [Language/Cognitive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#languagecognitive) for related guidance)
    
    Example: Date text is red to indicate that the item is overdue. To fix it we’re still using the color red, but we’ve included text that says overdue.
    
    <img height="50" alt="Due date label with the calendar date in red text" src="https://github.com/user-attachments/assets/a408f475-8199-4ea0-9368-29640e74b876" />
    <img height="50" alt="Due date label with the calendar date in red text and 'overdue' included in the label" src="https://github.com/user-attachments/assets/82471da2-6a1a-42a9-b791-323f64a24c8d" />

## Dynamic Content

- [ ]  Focus behavior on dynamic fields should follow logical reading order (see [Focus Order & Reading Order](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#focus-order--reading-order) section)
- [ ]  Is success and failure feedback available? For example, when submitting something, often we show the VA-Alert success/error and move focus to the alert.
    
    <img width="556" height="598" alt="Example from the 526ez form that shows a success alert with focus around the alert body annotated" src="https://github.com/user-attachments/assets/9d2a08e9-a1a2-46ed-a3c4-20555d1d010b" />

- [ ]  Does this design include conditional showing & hiding of new fields? Avoid this when possible. If we do want to continue with this design, we may want to include an “aria-live” section to communicate to AT users that the new section has appeared/disappeared. We may also want to manage focus. [More on live regions](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/#what-are-aria-live-regions%3F)
- [ ]  Are status messages announced to AT users?
- [ ]  When the user focuses on an element, it must not automatically trigger a change of context, unless the user has been advised ahead of time. [WCAG SC 3.2.1 On Focus (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)
- [ ]  When the user changes an element’s value it must not automatically trigger a change of context, unless the user has been advised ahead of time. [WCAG SC 3.2.2 On Input (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html) Example: Previously on the 0995 Supplemental Claim form, on the authorization page for the 4142, if you checked and unchecked the authorization checkbox at the bottom of the page, it triggered an error that stole focus and moved the user all the way back up to the top of the page. Fix: Triggering the validation and error/focus management when the user presses “Continue” to go submit their information and go to the next page.

## Focus Order & Reading Order

- [ ]  Is the reading/navigation order of focusable elements logical and intuitive? If there is something unusual in the focus order, it should be annotated.

## Form Elements

- [ ]  Are the interactive elements easy to identify?
- [ ]  Is content not hidden behind scrollable areas or modals with a clear way to close them?
- [ ]  Touch targets need to meet the minimum size and have sufficient spacing. See under [Adaptability / Mobile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/accessibility/ux-accessibility-checklist.md#adaptabilitymobile).
- [ ]  Do all form elements have clear, always-visible labels (not just placeholders)? [WCAG 3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
- [ ]  Are the form labels and instructions immediately adjacent to their form element so that users (including users of screen magnification) can easily connect the form element with its label and instructions?
- [ ]  Are all controls in close proximity to the content they are controlling? Example: Edit and Delete buttons are next to the content they modify.
- [ ]  Do the error messages appear close to the inputs they correspond to?
- [ ]  Do the error messages provide enough information for users to correct their error?
- [ ]  Does the user need to enter the same information twice? Information previously
entered by or provided to the user that is required to be entered again in the same process MUST be either auto-populated or available for the user to select, with some exceptions. (New WCAG 2.2 rule)
- [ ]  Are <fieldset> and <legend> elements being used (where appropriate)?
- [ ]  Will the input field support autocomplete (where appropriate)?
- [ ]  Are you using the right input option (radio button, select, text input…) for the job? Does the input component type follow [current platform guidance](https://design.va.gov/components/form/select#choosing-the-right-component-for-the-task)?
    - **2 - 5 options:** Use [Radio button](https://design.va.gov/components/form/radio-button) when there are only a few options that can all be exposed at once.
    - **6 - 15 options:** Use [Select](https://design.va.gov/components/form/select) for a limited number of options.
    - **16 - 100 options:** Use [Combo box](https://design.va.gov/components/form/combo-box), which combines a select with typeahead functionality for easier selection.
    - **101+ options:** Use [Search input](https://design.va.gov/components/search-input) with typeahead to help users quickly find the right option from a large set.

## GitHub Markdown Files

- [ ]  Review the Platform documentation around how to format GitHub files for accessibility



## Headings

- [ ]  Is there exactly one unique H1 on the page, and does it clearly convey the page’s purpose?
- [ ]  Are headings concise, descriptive, and styled consistently across screens? Many assistive technology (AT) users navigate the page via a shortcut screen of headings, concise headings will help them.
- [ ]  If something looks like a heading, is it actually marked up as a heading?
- [ ]  Do the heading levels increase in order as you go down the page? You can’t have an H1, then skip directly to an H3. The next heading level to encounter would be an H2.
      Example: "Files we couldn't receive" is an H1. "Files not received" is an H2. So the "Filename: PDF name" headings on the cards on the page should be an H3. Instead they are H4. Axe DevTools caught this issue.
<img width="1436" height="1342" alt="A screenshot of an Axe DevTools automated accessibility scan run on the Files We Could Not Receive page. The scan shows an issue with the heading level order of the page" src="https://github.com/user-attachments/assets/6f3a4069-38f2-4ff2-abe0-5e3e0c616e36" />

## Images

- [ ]  Is alt text is provided for all images, or if the image is decorative, is it marked as such so that it will be ignored by AT.
- [ ]  Are icons accompanied by visible labels if their meaning is not universally understood (magnifying class, trash can)?
- [ ]  Is there any text are embedded in images? They should be real text instead (exceptions for text in logo).
- [ ]  If there is a complex image such as a chart/graph/map, is there a text alternative?
- [ ]  Are images and linked pdfs optimized for quick loading without compromising quality? Check the dimensions and resolution of the image. Make sure it’s appropriate for its use case (e.g., 1x for standard displays, 2x for Retina displays).

## Language/Cognitive
- [ ] Does the content use ableist or non-inclusive language?
      Example: "You should see your condition below." Fix: "Your condition should be listed in the New Conditions section."
- [ ]  Does the language rely solely on sensory characteristics (color, shape, position)?
      Example: “Select the checkbox at the bottom of the page.” Fix: “Select the checkbox labeled ‘Yes, I consent.”
- [ ]  Is your language plain, concise, and easy to understand? A good check is seeing if content is at an grade 8 reading level. Try pasting your content into the [Hemingway app](https://hemingwayapp.com/).  See [WCAG 3.1.5 Reading Level (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html)
- [ ]  For blocks of text does each line have no more than 80 characters? Lines that are too long can cause eye strain and make it harder to track from the end of one line to the start of the next.
- [ ]  Is the tone and style consistent throughout?
- [ ]  Are abbreviations, jargon, or acronyms explained or avoided?
- [ ]  Does anything shown on the page require users to remember? If they are answering a question, do they have all the information they need on the page to complete it? Example: Form question asks “When were you treated for your condition?” Fix: question is “When were you treated for your arthritis?”
- [ ]  Does the content rely on unusual punctuation or special characters? Check to see [its screen reader support](https://www.elevenways.be/en/articles/screenreaders-special-characters)
- [ ]  All capital letters - Screen readers may have issues with content that is in all caps. In development we can apply a style that makes it ok for SR users, but in documents like PDFs, MS Word and GitHub markdown it may be a problem.
- [ ]  Does the content use emoji? Again screen readers may have problems with emoji.

## Links & Buttons

- [ ]  Are you choosing the correct element for the job? Does clicking on your item do something, or go somewhere? If it goes somewhere (either to a different page or to a different location on the same page), it should be a link. Buttons activate scripted functionality (e.g. make a dialog appear, expand a collapsed menu, turn font bold, etc.), usually on the same page, but a button can also submit form data. [When to use a button vs a link](https://design.va.gov/components/link/action#choose-the-right-element-buttons-vs-links) according to the VA Design System.
- [ ]  Is the link/button text clear and descriptive (no “Click here” or “Learn more”)? If there are multiple of this link on the page, does it have a more specific aria-label? Does the link text reveal PII?
- [ ]  Are you opening the link in a new window? If so, tell users in the link text. When you can, it’s better to keep links opening in the same browser tab. This is because AT users can become disoriented by new tabs opening and it can be burdensome to return to their previous location.
- [ ]  Are links visually distinguishable (e.g., underlined or styled consistently)?
- [ ]  Touch target size and spacing (see Adaptability/Mobile)
- [ ]  If there are multiple links on the page with the same label, do they go to the same place? [WCAG 3.2.4 Consistent Identification (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html)
- [ ]  Similarly, if there are buttons that do the same thing, are they labelled the same way? Example from the Claim Status Tool: 2 buttons that allow the veteran to edit their address are labelled differently. One has button text of "Edit" with an aria-label of "Edit address" for screen reader users, while the other button just has "Edit address" text (no aria-label). Fix: We made the button text/aria-labels match.
<img width="1600" height="1200" alt="Two edit address buttons with inconsistent labeling. One button is labelled 'Edit' while the second button is labelled 'Edit address.'" src="https://github.com/user-attachments/assets/9a8bf66f-c5ad-4e98-9e3f-e9db9d1df37e" />


## Lists

- [ ]  If it looks like a list, it should be coded as one. Use `<ul>` for unordered (bulleted) lists, and `<ol>` for ordered (numbered) lists.
- [ ]  Does the nesting of the list make sense?
- [ ]  Don’t mix in non list items like paragraphs or headings into a list.
- [ ]  Don’t use lists for layout purposes.
- [ ]  Avoid using custom images for the list bullets.

## Modals

- [ ]  Are you sure that you need this modal? Would this content make more sense as a separate page and URL?
- [ ]  Is there an indication in the design of where focus should go when the modal opens?

## Navigation

- [ ]  Are the navigation options clear and consistent (in naming, styling and positioning)? [WCAG SC 3.2.3 Consistent Navigation (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html)
- [ ]  If there’s pagination, is there a visual and AT friendly indication of which view is the active view?

## Tables

- [ ]  Is the table actually for presenting tabular data with meaningful relationships between the rows and columns (ex: a table of students and their grades)? If not, it probably should not be coded as a table. Tables should not be used for the purpose of purely visual/non data layout.
- [ ]  Does the data table include a caption element, and are columns and rows properly labeled?

## Tooltips

- [ ]  Avoid using tooltips in your design. But if you must have one, there are [specific rules](https://www.a11y-collective.com/blog/tooltips-in-web-accessibility/) that we need to follow.

## VA Design System (VADS) Components

- [ ]  Does your design use the `AdditionalInfo` component? That component is undergoing some redesign right now, and has some accessibility issues. Reconsider using the component.
