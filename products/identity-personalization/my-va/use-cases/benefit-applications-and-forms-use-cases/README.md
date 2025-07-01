# My VA: Forms and applications use cases

**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746474542228/c397457f63aa34d09dee9f34d785af90cd3b8b96?wid=36-1746474575795&outline=open)
- [Figma files](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5307-57763&t=KhCgIDPMpZ6FClDG-1)
- Test Rail QA
- Product documentation
   - [How to add a form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/forms-status-on-My-VA/adding-a-form.md)

<details><summary>Archive | How to reproduce in staging</summary>

- [User has a benefit application or form draft saved but not yet submitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-drafts.md#how-to-reproduce)
- [User has submitted a benefit application and/or form](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-applications-and-or-forms.md#how-to-reproduce)
- [User has no benefit applications, forms, or drafts saved](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/benefit-applications-and-forms-use-cases/user-has-no-applications-forms-or-drafts.md#how-to-reproduce)

</details>


## Phase 1, 3.0 experience
- LOA1 and LOA3 (identify verified) users can see all use cases.
- This feature shows a card for any applications or forms that a user has started or completed.
   - Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
   - **Forms and applications submitted through the Lighthouse Benefits Intake API (LH BI API)** will have a downloadable PDF on My VA, provided the PDF is available in S3. My VA does not generate PDFs, so if the file isn't stored in S3, it won't be shown.
      - Forms and applications **NOT** submitted through the LH BI API will not have a PDF shown.
   - Completed forms and PDFs only show for 60 days, at which point they disappear from My VA.
- An additional information component with information pertaining to tracking benefit applications and forms statuses is always visible at the bottom of this section unless an error is preventing the displaying of forms.


## Common use cases

<details><summary>User does not have any drafts or completed forms</summary>

- **Use case:** When a user does not have any form or application drafts or completed forms they will see information informing them of such, and an additional information component on what to do if they think there are missing forms.
- **Status code:** TBD
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16410&t=KhCgIDPMpZ6FClDG-1)
- [Link to code]
- **Content:** See designs.

</details>


<details><summary>User has a benefit application or form draft saved but not yet submitted</summary>

- **Use case:** When a user has a benefit application draft saved in progress, the card appears in the in-progress section.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16011&t=KhCgIDPMpZ6FClDG-1)
- [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
- **Content:** See designs

</details>


<details><summary>User has submitted a benefit application and/or form not on LH BI API</summary>

- **Use case:** When a user has submitted a supported application or form **not** on Lighthouse Benefits Intake API they will see a card.
   - Submission in progress and Received statuses appear in the Completed forms section.
   - Action needed statuses appear in the In-progress section.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16246&t=KhCgIDPMpZ6FClDG-1)
- [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
- **Content:** See designs

</details>


<details><summary>User has submitted a benefit application and/or form on LH BI API</summary>

- **Use case:** When a user has submitted a supported application or form on the Lighthouse Benefits Intake API, they will see a card.
   - Submission in progress and Received statuses appear in the Completed forms section.
   - Action needed statuses appear in the In-progress section.
- **Status code:** TBD
- **Format:** [Card component](https://design.va.gov/components/card)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5077-16327&t=vSC00tzVjcFZ2rHY-1)
- [Link to code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/engineering-docs/frontend/benefit-applications-and-forms.md)
- **Content:** See designs

</details>


## Edge cases

### Validation
This feature has no validation use cases.

### Flags
There are no flags with this feature.

### Errors

<details><summary>The API that shows forms is down</summary>
  
- **Use case:** If an LOA3 user logs in and there is an error with the API that displays forms and applications, then we show an alert informing the user the information is currently unavailable. No other information shows in the section.
- **Status code:** TBD
- **Format:** [Warning slim alert](https://design.va.gov/components/alert/#warning-alert)
- [Link to designs](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=5350-14507&t=vSC00tzVjcFZ2rHY-1)
- [Link to code]
- **Content:**

We can’t show your forms and applications right now. Refresh this page or try again later.

</details>

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
