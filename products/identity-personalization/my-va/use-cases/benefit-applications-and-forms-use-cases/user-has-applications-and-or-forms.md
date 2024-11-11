# My VA Benefit Applications and Forms Use Cases: User has submitted a benefit application and/or form(s)

**Last updated:** November 11, 2024

For LOA3 users who sign in and have a [**_Supported_** benefit application or form saved (or multiple](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA#the-mvp-will-target-the-following-forms)), we will show a card (or cards) for:
- their application(s) in the Benefit applications and forms section on My VA that provides a link for them to continue their application
- Note that benefit application or forms drafts will be visible as well

## UX
- Any logged in LOA1 or LOA3 user can see the Benefit applications and forms section on My VA.
- When a user has submitted a [supported application or form](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA#the-mvp-will-target-the-following-forms), they will see a card in this section that tells them:
  - Current step in the submission process (submission in progress, received, or action needed)
  - Form name
  - Form code
  - Submitted on date
  - Last updated date
  - (If action needed ONLY: an error alert)
- This card is always displayed on the left hand side of the page on desktop (a single column)
- If a user has multiple benefit application, forms, or drafts saved, they will see a card for each of them in this section and they are stacked vertically for both desktop and mobile
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockups, from left to right](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1233-60863&t=h5JX191NQ2q0JjVp-1)
- [Mobile mockup, from left to right](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1326-46257&t=h5JX191NQ2q0JjVp-1)

For more details on the user experience, appearance, variations, and error handling, [consult the FE documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md).

## How to reproduce
- Find a staging user who has a supported benefit application or form 
- Log into staging.va.gov with a test user who has a supported benefit application or form that has been submitted within the last 60 days.
- Once logged in, you will be redirected to My VA.
- Verify that you see a card for the benefit application or form in this section.
