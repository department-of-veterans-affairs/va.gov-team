# My VA Benefit Application Drafts Use Case: User has a benefit application draft saved but not yet submitted

**Last updated:** February 15, 2024 - added Figma links

For LOA3 users who sign in and have a benefit application draft saved (or multiple), we will show a card (or cards) for their saved application(s) in the Benefit application drafts section on My VA that provides a link for them to continue their application.

## UX
- Any logged in LOA3 user can see the Benefit application drafts section on My VA.
- When a user has a benefit application draft saved in progress, they will see a card in this section that tells them the form code, application type, an expiration date for the application, the date that they last opened it, and a link to continue the application.
	- Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- This card is always displayed on the left hand side of the page on desktop when there is only one card to show.
- If a user has multiple benefit application drafts saved, they will see a card for each of them in this section and they are displayed side by side on desktop with two max per row.
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A370&mode=design&t=CREOF8xG3jKa75nz-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A820&mode=design&t=CREOF8xG3jKa75nz-1)

## How to reproduce
- Find a staging user who has a benefit application draft in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has a saved benefit application draft.
- Once logged in, you will be redirected to My VA.
- Verify that you see a card for the saved application in this section and that it links to the page where the user can continue the application.
