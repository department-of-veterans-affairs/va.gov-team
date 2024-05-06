# My VA LOA1 State Frontend Documentation
Last updated: May 6, 2024 - added VA-icons and updated screenshots

## When to show the LOA1 state
This view is applicable to users who have not yet verified their identity (LOA1).

## UX Specs
### Identity verification call-to-action
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A246&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A911&mode=design&t=CREOF8xG3jKa75nz-1)

**Visual specs**

- Use the [sign in or tool prompt component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#sign-in-or-tool-prompt) in the VA design system.
- The link to verify your identity should use the [primary action link style](https://design.va.gov/components/link/action#primary) in the VA design system.

**Positioning**

- This call-to-action should appear at the top of the page after the profile link.

#### **Content**
Verify your identity to access more VA.gov tools and features

We need to make sure you’re you—and not someone pretending to be you—before we can give you access to your personal and health-related information. This helps to keep your information safe, and to prevent fraud and identity theft.

This one-time process takes about 5-10 minutes.

[Verify your identity](https://va.gov/verify/)

---

### Learn how to verify your identity on VA.gov link
- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A246&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A911&mode=design&t=CREOF8xG3jKa75nz-1)

**Visual specs**

- Use the [default link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default) in the VA design system.

**Positioning**

- This link appears directly below the LOA1 call-to-action.

#### **Content**
[Learn how to verify your identity on VA.gov](https://www.va.gov/resources/verifying-your-identity-on-vagov/)

---

### Claims and appeals section

<img width="417" alt="Screenshot 2024-05-06 at 6 03 21 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/140ad60e-c8e3-4ce1-bf2c-bcbec7ca7ba2">

**Visual specs**

- Use VA-icon `description` for icon (as of 5/24)

**Positioning**

- This dropdown appears directly below the "Learn how to verify your identity" link.

#### **Content**

**Claims and appeals**

[Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/)

---

### Health care section

<img width="418" alt="Screenshot 2024-05-06 at 5 34 19 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/caeb1563-26ae-4b30-80a8-533488333743">

**Visual specs**

- Use VA-icon `note_add` for icon (as of 5/24)

**Positioning**

- This dropdown appears directly below the "Claims and appeals" section.

#### **Content**

**Health care**

[Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)

---

### Education and training section

<img width="525" alt="Screenshot 2024-05-06 at 6 07 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/151555388/c305c91a-7ef9-40f0-b27e-a73b9056cdc6">

**Visual specs**

- Use VA-icon `school` for icon (as of 5/24)

**Positioning**

- This dropdown appears directly below the "Health care" section.

#### **Content**

**Education and training**

[Learn how to apply for VA education benefits](https://va.gov/education/how-to-apply/)

---

### Benefit application drafts section

- This section shows for all VA.gov users and works the same way whether a user is LOA1 or LOA3.
- This section has two states: a user has benefit applications in progress to show, and a user does not have any benefit applications in progress to show.

---

### If a user does not have any applications in progress to show

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A246&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A911&mode=design&t=CREOF8xG3jKa75nz-1)
  
<img width="345" alt="Screenshot 2023-08-28 at 12 49 30 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/b9938e01-f8a0-4411-bd1b-b0859a998179">

#### **Content**

**Benefit application drafts** 

You have no benefit application drafts to show.

#### **Positioning**

This section should appear directly below the "Education and training" section.

---

### If a user has applications in progress to show

- [Desktop](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A239&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A905&mode=design&t=CREOF8xG3jKa75nz-1)

<img width="427" alt="Screenshot 2023-08-28 at 12 49 37 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/3083529a-6266-4015-9c52-6348c9b35a67">

**Show card**

- If a LOA1 user has started an application for benefits but has not yet submitted it, and [criteria is met for a save-in-progress application to show on My VA](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage).

**Visual specs**

- Use the [form status version of the card component](https://design.va.gov/components/card#form-status) in the VA design system.

#### **Content**

Form code

Application type

`exclamation-circle` Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)

---

## Error States

- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.
