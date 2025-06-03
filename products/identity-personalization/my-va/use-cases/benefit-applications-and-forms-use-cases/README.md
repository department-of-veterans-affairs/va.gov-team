# My VA: Applications and forms use cases

**Last updated: June 2025**

LOA1 and LOA3 (identify verified) users can see all use cases.

- User flow
- Figma files
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

- [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md#how-to-reproduce)
- [User has submitted a benefit application and/or form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md#how-to-reproduce)
- [User has no benefit applications, forms, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md#how-to-reproduce)

</details>


## Phase 1, 3.0 experience
- This feature shows a card for any benefit applications or forms that a user has started or completed. TBD on how many are shown or how we break this up per other conversations.
  - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
  - Completed forms only show for 60 days, at which point they disappear from My VA.
  - TBD need to add PDF download to this section.
- An accordion component with information pertaining to tracking benefit applications and forms statuses is always visible at the bottom of this section unless an error is preventing the displaying of forms.


## Common use cases

<details><summary>User does not have any drafts or completed forms</summary>

- **Use case:** When a user does not have any saved benefit application drafts, they will see ... TBD.
- **Status code:** TBD
- **Content:**

You have no benefit application drafts to show.

- **Format:** TBD
- [Link to designs]
- [Link to code]

</details>


<details><summary>User has a benefit application or form draft saved but not yet submitted</summary>

- **Use case:** When a user has a benefit application draft saved in progress, they will see a card in this section that tells them the form code, application type, an expiration date for the application, the date that they last saved it, and a link to continue the application.
- **Status code:** TBD
- **Content:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)

</details>


<details><summary>User has submitted a benefit application and/or form</summary>

- **Use case:** When a user has submitted a supported application or form, they will see a card that provide submission information and errors in cases of action is needed. Cards only stay for 60 days then are removed from My VA. TBD need direction on PDFs.
- **Status code:** TBD
- **Content:**

   - Current step in the submission process (Submission in progress, Received, or Action needed)
   - Form name
   - Form code
   - Submitted on date
   - Last updated date
   - IF action needed: an error alert

- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs]
- [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)

</details>


## Edge cases:

### System:
The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error (MPI error).

---

<details><summary>Archive | My VA: Benefits applications and forms use cases, November 2024</summary>

# My VA: Applications and forms use cases

**Last updated:** November 13, 2024 - updated links

There are two different types of content that can be shown in the Benefit application and forms section of My VA: 
- __Drafts__
- __Submitted applications and forms (that are supported)__

In addition, the section may have neither drafts nor forms. 

## Overview of Drafts:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit applications that a user has started and saved but not yet submitted, or text stating that the user has no benefit applications or forms (if there are no tracked submitted forms as well).
  - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- An 'accordion' component with information pertaining to tracking benefit application and form statuses is visible at the bottom of this section unless an error is preventing the display of forms.

## Common use cases:

- [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md)
- [User has a benefit application or form that's been submitted and is trackable](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md)
- [User has no benefit applications and/or forms being tracked, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md)

## Edge cases:

### System:
The data for saved applications is gathered from the same API as the main user call. Therefore, there are no errors specific to just this section. If the main user call fails, the entire My VA page displays an error (MPI error).

## Flow diagrams:
- [User flow for benefit applications and forms (including drafts) on My VA](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A7642&mode=design&t=CREOF8xG3jKa75nz-1)

## Overview of Submitted Forms:

- For all of these use cases, the user must be LOA3 (identity verified). All LOA3 (and LOA1) users will see this section on My VA.
- This feature shows a card for any benefit application or form that a user has completed and submitted __that can be tracked and displayed on My VA__, or text stating that the user has no benefit applications or forms (if there are no drafts as well).
- Submitted form cards have three different states: submission in progress, received, and action needed

</details>
