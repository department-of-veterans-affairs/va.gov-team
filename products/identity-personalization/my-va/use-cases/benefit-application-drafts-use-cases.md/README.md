# My VA: Benefit Applications and Forms Use Cases

**Last updated:** July 31st, 2024 - added new use cases and titles

## Overview of Benefit Applications and Forms:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 users will see this section on My VA.
- [LOA1 users](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/use-cases/LOA1-use-cases) will not see this section on My VA.
- This feature shows a variety of several types of cards representing benefit applications and related forms:
  - for any benefit applications that a user has started and saved but not yet submitted, or text stating that the user has no benefit application drafts.
  - for any submitted form that has its progress tracked on My VA that has not yet been received after being processed through VBMS, a card with the status tag "Submission in progress".
  - for any submitted form that has its progress tracked My VA that has been received, a card with the status tag "Received"
  - for a submitted form that has its progress tracked on My VA and experiences a known error during the submission process, a card with the status tag "Action needed" and an accompany alert message
- This feature shows an accordion that is 
  - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.

## Common use cases:

- [User has a benefit application draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-application-drafts-use-cases.md/user-has-applications-drafts.md)
- [User has no benefit application drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-application-drafts-use-cases.md/user-has-no-application-drafts.md)

## Edge cases:

### System:
The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error.

## Flow diagrams:
- [User flow for benefit application drafts on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A7642&mode=design&t=CREOF8xG3jKa75nz-1)

