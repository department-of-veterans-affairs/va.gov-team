# My VA: Benefit Applications and Forms Use Cases

**Last updated:** November 6, 2024 - updated to reflect updates with form status tracking

There are two different types of content that can be shown in the Benefit application and forms section of My VA: 
- __Drafts__
- __Submitted forms (that are supported)__

## Overview of Drafts:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit applications that a user has started and saved but not yet submitted, or text stating that the user has no benefit applications or forms (if there are no tracked submitted forms as well).
  - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- An 'accordion' component with information pertaining to tracking benefit application and form statuses is visible at the bottom of this section unless an error is preventing the display of forms.

## Common use cases:

- [User has a benefit application draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-application-drafts-use-cases.md/user-has-applications-drafts.md)
- [User has no benefit application drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-application-drafts-use-cases.md/user-has-no-application-drafts.md)

## Edge cases:

### System:
The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error (MPI error).

## Flow diagrams:
- [User flow for benefit application drafts on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A7642&mode=design&t=CREOF8xG3jKa75nz-1)

## Overview of Submitted Forms:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit application or form that a user has completed and submitted __that can be tracked and displayed on My VA__, or text stating that the user has no benefit applications or forms (if there are no drafts as well).
- Submitted form cards have three different states: submission in progress, received, and action needed

