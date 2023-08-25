# My VA Benefit Application Drafts Use Case: User has a benefit application draft saved but not yet submitted

**Last updated:** July 31, 2023

For LOA3 users who sign in and have a benefit application draft saved (or multiple), we will show a card (or cards) for their saved application(s) in the Benefit application drafts section on My VA that provides a link for them to continue their application.

## UX
- Any logged in LOA3 user can see the Benefit application drafts section on My VA.
- Below the Benefit application drafts header, the user will see an expandable dropdown that says “What benefits does VA offer?” 
	- If the user expands this dropdown, they will see a list of links for all VA benefits which link to the same landing pages as the main navigation: Health care, Education and training, Disability compensation, Careers and employment, Pension, Housing assistance, Burials and memorials, Life insurance, Service member benefits, and Family member benefits.
- When a user has a benefit application draft saved in progress, they will see a card in this section that tells them the form code, application type, an expiration date for the application, the date that they last opened it, and a link to continue the application.
	- Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- This card is always displayed on the left hand side of the page on desktop when there is only one card to show.
- If a user has multiple benefit application drafts saved, they will see a card for each of them in this section and they are displayed side by side on desktop with two max per row.
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/8AB87684-AE2C-42F4-BC9D-60E4B26AE1BB)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/28297FB0-D585-45CF-84CB-1935A09F74F3)

## How to reproduce
- Find a staging user who has a benefit application draft in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has a saved benefit application draft.
- Once logged in, you will be redirected to My VA.
- Verify that you see the dropdown for VA benefits below the section header.
- Verify that you see a card for the saved application in this section and that it links to the page where the user can continue the application.
