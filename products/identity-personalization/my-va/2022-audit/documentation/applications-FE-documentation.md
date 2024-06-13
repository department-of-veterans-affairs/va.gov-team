# My VA Benefit Application Drafts Frontend Documentation
Last updated: April 29, 2024 (added note about when forms expire)

## When to show the ‘Benefit application drafts’ section
We show this section for every LOA3 user.

---

### Benefit application draft card
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/8AB87684-AE2C-42F4-BC9D-60E4B26AE1BB)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/28297FB0-D585-45CF-84CB-1935A09F74F3)

**Show card**

- If a user has started an application for benefits but has not yet submitted it.

**Do NOT show card**

- If a user does not have any benefit applications that they have not yet submitted.

**Visual specs**

- Use the [form status version of the card component](https://design.va.gov/components/card#form-status) in the VA design system.
- The "Continue your application" link should use the [active link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default#active) in the VA design system.

#### **Content**

Form code

Application type

`exclamation-circle` Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)


#### **Content specs**

- The data for the benefit application draft card is gathered from the same API call as the main user call.

---

### How does an application in progress end up showing in a card on My VA?

- As outlined on the [Platform website](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage), changes are required in the User Profile code for in-progress forms to be displayed on My VA.
- A form must have Save in Progress (SiP) enabled, must have a form ID added to the VA_FORM_IDS object in the [/platform/forms/constants file](https://github.com/department-of-veterans-affairs/vets-website/blob/bbd17c20a03e01ef22e5247a37d073ee10c47992/src/platform/forms/constants.js#L1), and add form information in the [personalization dashboard helpers file](https://github.com/department-of-veterans-affairs/vets-website/blob/e812cfb6b7bad2822498e7c88d60bd78b3796179/src/applications/personalization/dashboard/helpers.jsx#L1) to specified objects as outlined in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage).
- Applications expire after 60 days of inactivity. The draft is no longer available. Veteran must restart the application/form.

---

### If a user has multiple benefit application drafts to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B58922A6-13FB-4CF1-9DCB-F270B9DD2DC0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/D5EA049B-1179-4824-9F30-80920CE5EF1E)

**Positioning**

Cards are displayed side by side on desktop and stacked on mobile as shown in the mockups above. If a user has more than two drafts to show, they keep stacking in this way on desktop with two per row max.

---

### If a user does not have any benefit application drafts to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/10A09E21-70D7-4606-9E8A-1EBB31AE8EC9)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C7F1D33D-5400-41CE-8F6D-78F43105AE91)

#### **Content**

You have no benefit application drafts to show.

**Positioning**

This text appears directly below the "Benefit application drafts" header on the lefthand side of the page on desktop.

---

## Error States

- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.
