# My VA LOA1 State Frontend Documentation
Last updated: August 28, 2023

## When to show the LOA1 state
This view is applicable to users who have not yet verified their identity (LOA1).

## UX Specs
### Identity verification call-to-action
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/32BCF55D-35A5-4A17-9F37-3DCA903B7A50)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1B92AE9B-F7D6-42FE-9CCA-90B99A4747E9)

**Visual specs**

- Use the [sign in or tool prompt component](https://design.va.gov/storybook/?path=/docs/components-va-alert--default#sign-in-or-tool-prompt) in the VA design system. The link to verify your identity should use the [primary action link style](https://design.va.gov/components/link/action#primary) in the VA design system.

**Positioning**

- This call-to-action should appear at the top of the page after the profile link.

#### **Content**
Verify your identity to access more VA.gov tools and features

We need to make sure you’re you—and not someone pretending to be you—before we can give you access to your personal and health-related information. This helps to keep your information safe, and to prevent fraud and identity theft.

This one-time process takes about 5-10 minutes.

[Verify your identity](https://va.gov/verify/)

---

### Learn how to verify your identity on VA.gov link
- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/32BCF55D-35A5-4A17-9F37-3DCA903B7A50)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1B92AE9B-F7D6-42FE-9CCA-90B99A4747E9)

**Visual specs**

- Use the [default link style](https://design.va.gov/storybook/?path=/docs/components-va-link--default) in the VA design system.

**Positioning**

- This link appears directly below the LOA1 call-to-action.

#### **Content**
[Learn how to verify your identity on VA.gov](https://www.va.gov/resources/verifying-your-identity-on-vagov/)

---

### Claims and appeals section

<img width="424" alt="Screenshot 2023-08-28 at 12 48 14 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/c0a81375-9ec5-4d33-b738-9258d00ec9bd">

**Visual specs**

- Use font awesome icon `file-lines` for icon

**Positioning**

- This dropdown appears directly below the "Learn how to verify your identity" link.

#### **Content**

**Claims and appeals**

[Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/)

---

### Health care section

<img width="427" alt="Screenshot 2023-08-28 at 12 49 18 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/97965610/0d1c93c5-fc0b-4e23-b6d0-bc2e419eab5c">

**Visual specs**

- Use font awesome icon `file-medical` for icon

**Positioning**

- This dropdown appears directly below the "Claims and appeals" section.

#### **Content**

**Health care**

[Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)

---

### If a user has applications in progress

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/5B50B211-EE03-4796-8AEA-284AF040C31F)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/A7B61911-5E70-4A4E-A453-E13AF255E01C)

**Show card**

- If a LOA1 user has started an application for benefits but has not yet submitted it.

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

---

### If a user does not have any applications in progress to show

- [Desktop](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/32BCF55D-35A5-4A17-9F37-3DCA903B7A50)
- [Mobile](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1B92AE9B-F7D6-42FE-9CCA-90B99A4747E9)

#### **Content**

You have no applications in progress to show.

#### **Positioning**

This text should appear directly below the "Applications in progress" subheader.

---

## Explore VA benefits and health care

**Show**

- For all LOA1 users.

**Do NOT show**

- For LOA3 users.

![Screen Shot 2022-10-14 at 4 31 00 PM](https://user-images.githubusercontent.com/97965610/195938277-faf6c21e-201a-4128-9c73-a7f0c36cce07.png)

#### **Content**

`briefcase-medical` icon **Health care**

With VA health care, you’ll receive coverage for services like regular checkups with your health care provider and specialist appointments.

[Learn how to apply for VA health care](https://va.gov/health-care/how-to-apply/)


`file` icon **Disability compensation**

With VA disability benefits, you can get disability compensation for an illness or injury that was caused, or made worse, by your military service.

[Learn how to file a VA disability claim](https://va.gov/disability/how-to-file-claim/)


`graduation-cap` icon **Education and training**

With VA education benefits, you and your qualified family members can get help finding a college or training program and paying for tuition or test fees.

[Learn how to apply for VA education benefits](https://va.gov/education/how-to-apply/)

---

## Error States

- The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.
