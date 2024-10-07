# Accessibility Testing for Prefilled pattern


## Findings from Tab Navigation and VoiceOver on Mac

### Tested on: Chrome, Safari, Firefox

- **Focus order is correct.**
- In alerts that have a heading (e.g., `h3`) and other text (`p` tags), only the heading is read by the screen reader.
- In prefill alerts where "Note" is bolded, the screen reader only reads “Note” and nothing else.

### Task Green

- **Home page →** Prefill alert needs `tabindex=0` and possibly `role="alert"`
  `_mock-form-ae-design-patterns/shared/components/alerts/VerifiedPrefillAlert.jsx`

- **Home page →** Sign-in alert needs `tabindex=0` and possibly `role="alert"`.
  Note: `p` tags after `h3` do not get read by the screen reader.
  `_mock-form-ae-design-patterns/shared/components/SaveInProgressInfo1010Ezr.jsx`

> **All alerts on the page should have `tabindex=0` added.**

### Task Yellow

- **Confirm mailing address →** Prefill alert needs `tabindex=0` and possibly `role="alert"`
  `_mock-form-ae-design-patterns/shared/components/alerts/PrefillAlert.jsx`

- **Gray card? →** The Edit link is correctly focused, but the card needs `tabindex=0` if we want the screen reader to read the current mailing address.

- **After editing and saving new address →** Success alert needs `tabindex=0` and possibly `role="alert"`
  `_mock-form-ae-design-patterns/shared/components/alerts/MailingAddressSaveSuccessAlert.jsx`

### Task Purple

1. **Home page →** Prefill alert needs `tabindex=0` and possibly `role="alert"`
   `platform/forms/save-in-progress/SaveInProgressIntro.jsx`

2. **Edit home phone →** Gray card with current number? Does it need to be focused?
   `_mock-form-ae-design-patterns/patterns/pattern1/TaskPurple/EditContactInfo.jsx`

3. **After editing & saving →** Success alert needs `tabindex=0`
   `_mock-form-ae-design-patterns/patterns/pattern1/TaskPurple/ContactInfo.jsx`

> **`tabindex=0` should be added to all alerts (e.g., Missing info) on this page.**

### 10-10EZR

- **Home page →** Prefill alert needs `tabindex=0` and possibly `role="alert"`
  `_mock-form-ae-design-patterns/shared/components/alerts/VerifiedPrefillAlert.jsx`

- **Confirm mailing address page →** Success alert after editing and saving new info needs `tabindex=0`
  `_mock-form-ae-design-patterns/shared/components/alerts/MailingAddressSaveSuccessAlert.jsx`

- **Household-information/marital-status →** Prefill alert here is not using the `va-alert` component. It is using the `PrefillMessage` component.
  - Do we add `tabindex="0"` to the existing `div` or update this to use the `va-alert` component?
  - We also need to add a yellow highlight around the `div` on focus when the screen reader is off. When the screen reader is on, there is a black border on the `div` (once `tabindex="0"` is added).
  `_mock-form-ae-design-patterns/patterns/pattern1/ezr/config/chapters/householdInformation/maritalStatus.js`
  `platform/forms/save-in-progress/PrefillMessage.jsx`

- **Household-information/dependent-information →** Warning alert needs `tabindex="0"`
  `_mock-form-ae-design-patterns/patterns/pattern1/ezr/components/SaveInProgressWarning.jsx`

- **Insurance-information/medicaid-eligibility →** Similar to the household info page, this does not use the `va-alert` component.
  `platform/forms/save-in-progress/PrefillMessage.jsx`

### Findings from Using aXe Dev Tool Extension on Mac

#### Chrome & Firefox

- **Moderate issue under “Best practices”**
  Landmarks should have a unique role or role/label/title (i.e., accessible name).
  **Element Location:**
  `<nav>`
  To solve this problem, the landmark must have a unique `aria-label`, `aria-labelledby`, or `title` to make landmarks distinguishable.

  **Related Node:**
  `<div id="vetnav" role="navigation">`

- **Moderate issue under “Best Practices”**
  In `mock-form-ae-design-patterns/1/task-purple/veteran-information`, heading levels should only increase by one.
  Ensure the order of headings is semantically correct.
  **Element Location:**
  `h4:nth-child(1)`
  `<h4 class="vads-u-font-size--h4 vads-u-width--auto vads-u-margin-top--0p5">Home phone number</h4>`

  To solve this problem, the heading order is invalid.

### Safari

Currently, there are no aXe, Lighthouse, or WAVE browser extensions available for Safari. While the WAVE web tool can be used, it does not work when testing locally. When I ran Codespaces and accessed the URL through WAVE, the page failed to load completely.

I believe the accessibility issues identified are minimal. Any best practice "errors" detected with aXe in Chrome and Firefox were consistent. Additionally, tab navigation and VoiceOver produced the same results in all three browsers.

## Findings from Tab Navigation on NVDA via Windows


### Tested on: Chrome, Firefox, Edge

- **Focus order is generally correct for tabbing**

- Unlike Voiceover, In alerts that have a heading (e.g., `h3`) and other text (`p` tags), the SR read out the header and content correctly.

- Some pieces of information like home phone and mobile phone are not read when they are displayed with an edit link, due to them being aria-hidden


### Green Task



- Unauthed and authed alert are somewhat broken up by SR, but I think that NVDA puts pauses in the program at odd times

- Personal info page, full name is broken up whereas SSN, DOB, and Gender are all read together.

- Saving changes to mailing address reads ‘Saving changes” twice before redirecting to success page

- Alert not focused on page load after saving, but heading and main alert content are read correctly




### Yellow Task

- Gray uneditable personal information card has info broken up. Full name, Social Security is broken up while DOB and Gender are read in on go per item.

- The prefill alert on Mailing Address page pronounces prefilled incorrectly.




### Purple Task

- ‘blank’ is read out on the Introduction page, right after the prefill alert content is read

- home phone number and mobile phone number values are not read by the SR on the Contact Information page

- Save button is announces and ‘button save’ and cancel button is read as “clickable button cancel” idk if that matters


Axe scanning wasn't working on my PC for the codesandbox, so I think there may be something with that domain name and it being blocked by the axe tools for some reason


## Open Questions and proposed next steps



- How do we want to handle unlocked and locked cards? Do we want to add focus? Should screen readers read the text inside (since it will contain the prefilled info)?

- For the pages using `PrefillMessage` components with `divs` instead of `va-alert` components, do we want to convert them to use the `va-alert` components?

Potential next steps / issues to create
- [ ] Address tabindex and programatic focus fixes. See slack thread: https://dsva.slack.com/archives/C07909N7U8Z/p1725649068620909
- [ ] work on fix for content not being read when heading present in alert or bolded note is present in alert.
- [ ] update telephone number display text so that it is read by SR
- [ ] Change title of the form to not have AE and be easy to understand on screen reader.
- [ ] Navigation needs a unique aria label for the tab bar nav
- [ ] Task buttons to links on session landing pages. Discuss with design about buttons vs links. https://design.va.gov/components/button/#when-to-use-a-button
- [ ] Fix `inProgressFormId` usage in the `Save`  so that it show in the in progress green alert. Add that id to the mock form so it shows in our user research sessions. See slack thread: https://adhoc.slack.com/archives/C078WMPSFNU/p1727983523317499
- [ ] PrefillMessage and MilitaryPrefillMessage should be updated to use the alert component and content should be audited.
- [ ] Fix 'saving changes' being read twice after clicking on save button
- [ ] Clean up how certain text is read / group full name and name info so pause isn't present, get 'Note' to be read together with it's following content
