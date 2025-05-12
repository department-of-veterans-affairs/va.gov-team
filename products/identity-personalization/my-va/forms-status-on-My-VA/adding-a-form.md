# Adding A Form [WIP]
Currently, we have two types of forms that are already able to show the Form Status:
- a selected group of Lighthouse Benefits Intake API form
- uploadable forms

We can explore `vets-api` to see where these forms are added: `app/controllers/v0/my_va/submission_statuses_controller.rb`

We will briefly discuss adding forms that are from either of the categories above. And then dive more into adding a form that is not part of either of the categories above.

## Table of Contents
- [Lighhouse Benefits Inatake API Forms](#lighhouse-benefits-inatake-api-forms)
  - [Already Included forms](#already-included-forms)
  - [Including Other Lighhouse Benefits Inatake API forms](#including-other-lighhouse-benefits-inatake-api-forms)
    - [Test Implementation for Lighhouse Benefits Inatake API](#test-implementation-for-lighhouse-benefits-inatake-api)
- [Other Forms](#other-forms)
- [Other References](#other-references)

----------------------------------------
### Lighhouse Benefits Inatake API Forms
#### Already Included forms:

| Form Name                                        | Form ID            |
|:-------------------------------------------------|:-------------------|
| Request personal records                         | 20-10206           |
| Priority Processing                              | 20-10207           |
| Authorization to Release third party information | 21-0845            |
| Alternate Signer                                 | 21-0972            |
| Lay/witness Statement                            | 21-10210           |
| Request Private Medical Facilities               | 21-4142 & 21-4142a |
| Request to be a substitute claimant              | 21P-0847           |

#### Including Other Lighhouse Benefits Inatake API forms:

We have decided to complete this work in future sprints.
While investigating, we have not identified a reason to add the remaining forms one by one.

In our `app/controllers/v0/my_va/submission_statuses_controller.rb` we have a list of Allowed Forms.
```
      def allowed_forms
        %w[20-10206 20-10207 21-0845 21-0972 21-10210 21-4142 21-4142a 21P-0847] + uploadable_forms
      end
```
- Add the new form ID (ex: Statement in Support of Claim 21-4138) to the list of form IDs seen above

##### Test Implementation for Lighhouse Benefits Inatake API:
- [ ] Find a test user that has the Statement in Support of Claim 21-4138 form past the Draft status
- [ ] Log in as the test user
- [ ] Add the form ID to the array above
- [ ] Refresh the user's MyVA and look for the form that should now display the status


----------------------------------------
### Other Forms
It is important to note that we only support the [Document Submission Statuses listed by the Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs?version=current).
If your form has different form statuses we will encourage you to match/map them to the ones listed in the link above.
If your form is already included in:
- `SimpleFormsApi::V1::UploadsController::FORM_NUMBER_MAP`
 - we can add your form ID to the array noted above for Including Other Lighhouse Benefits Inatake API forms
If your form is completely new:
- We encourage you to start [by implementing Save In Progress](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) (this will allow your form to show a Draft status) for your new form
 - within that guide, you will also find a guide to [Configuring prefill in vets-api](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-work-with-pre-fill)
- Following the step above will make it possible to have your form show a submission status by simply addinf the form ID to the `allowed_forms` list noted under "Including Other Lighhouse Benefits Inatake API forms"


**Other References:**
- [Project outline: Forms Status on My VA MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA)
  - This document will provide context for the MVP of Form Status 
- [Form Submission Status: Backend Documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/7693b23eafaabac7c52a288ce89ae04d45972170/products/identity-personalization/my-va/form-status/backend_documentation.md)
  - This document hold the final and current backend implementation of the Form Status
  - You can reference this document if you want more insight into how we work with the Lighthouse Benefits Intake API to retrieve the status of submitted forms
