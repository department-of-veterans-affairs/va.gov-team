# My VA Benefit Application Drafts Frontend Documentation
Last updated: February 28, 2023

## When to show the ‘Benefit application drafts’ section
We show this section for every LOA3 user.

## UX Specs
### What benefits does VA offer? (dropdown)
*Closed state:*

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/B58922A6-13FB-4CF1-9DCB-F270B9DD2DC0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/28297FB0-D585-45CF-84CB-1935A09F74F3)

*Open state:*

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C85D4811-EE36-4BC4-A128-91204CA032C0)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A4773221-DDEB-4512-A53B-75C191ECEF7E)

**Visual specs**

- Use the [additional info component](https://design.va.gov/storybook/?path=/docs/components-va-additional-info--default) in the VA design system.

**Positioning**

- This dropdown appears directly below the "Benefit application drafts" header, above any saved application cards or text stating that the user does not have any applications to show.
- When the dropdown is expanded, any application draft cards or text stating that the user does not have any application drafts to show is pushed down below the expanded menu as shown in the mockups linked above.

#### **Content**
*Closed state:*

What benefits does VA offer?

*Open state:*

What benefits does VA offer?

**Explore VA.gov to learn about the benefits we offer.**
- [Health care](https://va.gov/health-care/)
- [Education and training](https://va.gov/education/)
- [Disability compensation](https://va.gov/disability/)
- [Careers and employment](https://va.gov/careers-employment/)
- [Pension](https://va.gov/pension/)
- [Housing assistance](https://va.gov/housing-assistance/)
- [Burials and memorials](https://va.gov/burials-memorials/)
- [Life insurance](https://va.gov/life-insurance/)
- [Service member benefits](https://va.gov/service-member-benefits/)
- [Family member benefits](https://va.gov/family-member-benefits/)

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

This text appears below the "What benefits does VA offer?" dropdown, on the lefthand side of the page on desktop.

---

## Error States

- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.
