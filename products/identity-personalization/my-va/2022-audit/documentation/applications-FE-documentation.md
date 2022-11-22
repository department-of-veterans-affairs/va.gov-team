# My VA Saved Applications Frontend Documentation
Last updated: October 26, 2022

## When to show the ‘Saved applications’ section
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

- This dropdown appears directly below the "Saved applications" header, above any saved application cards or text stating that the user does not have any saved applications.
- When the dropdown is expanded, any saved applications or text stating that the user does not have any saved applications is pushed down below the expanded menu as shown in the mockups linked above.

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

### Saved application card
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/8AB87684-AE2C-42F4-BC9D-60E4B26AE1BB)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/28297FB0-D585-45CF-84CB-1935A09F74F3)

**Show card**

- If a user has started an application for benefits but has not yet submitted it.

**Do NOT show card**

- If a user does not have any saved benefit applications that they have not yet submitted.

**Visual specs**

- Use the [form status verison of the card component](https://design.va.gov/components/card#form-status) in the VA design system.

#### **Content**

Form code

Application type

`exclamation-circle` Application expires on: Date

Last opened on: Date

Continue your application (linked to saved application)

#### **Content specs**

- The data for the saved applications card is gathered from the same API call as the main user call.

---

### If a user does not have any applications in progress to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/10A09E21-70D7-4606-9E8A-1EBB31AE8EC9)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C7F1D33D-5400-41CE-8F6D-78F43105AE91)

#### **Content**

You have no saved applications to show.

**Positioning**

This text appears below the "What benefits does VA offer?" dropdown, on the lefthand side of the page on desktop.

---

## Error States

- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.
