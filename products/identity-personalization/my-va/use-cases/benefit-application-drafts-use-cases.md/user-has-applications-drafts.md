# My VA Benefit Applications and Forms Use Cases: User has a benefit application draft saved but not yet submitted

**Last updated:** November 3, 2024 - added new link for Form Statuses

For LOA3 users who sign in and have a benefit application draft saved (or multiple), we will show a card (or cards) for:
- their saved application(s) in the Benefit applications and forms section on My VA that provides a link for them to continue their application
- Note that [some completed forms that have been submitted may be visible as well](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA)

## UX
- Any logged in LOA1 or LOA3 user can see the Benefit applications and forms section on My VA.
- When a user has a benefit application draft saved in progress, they will see a card in this section that tells them the form code, application type, an expiration date for the application, the date that they last saved it, and a link to continue the application.
	- Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- This card is always displayed on the left hand side of the page on desktop
- If a user has multiple benefit application drafts saved, they will see a card for each of them in this section and they are stacked vertically for both desktop and mobile
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-26447&t=D9AmNbDyzhvCGW9h-1)
- [Mobile mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1264-32620&t=D9AmNbDyzhvCGW9h-1)

## How to reproduce
- Find a staging user who has a benefit application draft in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has a saved benefit application draft.
- Once logged in, you will be redirected to My VA.
- Verify that you see a card for the saved application in this section and that it links to the page where the user can continue the application.
