# Adding A Form [WIP]
Currently, we have two types of forms that are already able to show the Form Status:
- a selected group of Lighthouse Benefits Intake API form
- uploadable forms

We can explore `vets-api` to see where these forms are added: `app/controllers/v0/my_va/submission_statuses_controller.rb`

It's important to note that there is a feature toggle related to the expansion of forms: `my_va_display_all_lighthouse_benefits_intake_forms`

This feature toggle, when enabled, will not use the restricted list of forms that was determined for the MVP of showing the form status on forms.
Instead, the enabled feature toggle will retrive all of the user's submitted forms from Lighthouse Benefits Intake API with their respective status.

We will briefly discuss adding forms that are from either of the categories above. And then dive more into adding a form that is not part of either of the categories above.

## Table of Contents
- [Lighthouse Benefits Inatake API Forms](#lighhouse-benefits-inatake-api-forms)
  - [List of Known Forms](#list-of-known-forms)
  - [Including Other Lighhouse Benefits Inatake API forms](#including-other-lighhouse-benefits-inatake-api-forms)
    - [Test Implementation for Lighhouse Benefits Inatake API](#test-implementation-for-lighhouse-benefits-inatake-api)
- [Other Forms](#other-forms)
- [Other References](#other-references)

----------------------------------------
### Lighthouse Benefits Inatake API Forms
#### List of Known Forms

| Form Name                                        | Form ID            | Included as MVP| Included with Feature Toggle | Included in FE's VA_FORM_IDS |
|:-------------------------------------------------|:-------------------|:---------------|:---------------------------|:-------------------------------|
| Request personal records                         | 20-10206           |✅              |                            | ✅ |
| Priority Processing                              | 20-10207           |✅              |                            | ✅ |
| Authorization to Release third party information | 21-0845            |✅              |                            | ✅ |
| Alternate Signer                                 | 21-0972            |✅              |                            | ✅ |
| Lay/witness Statement                            | 21-10210           |✅              |                            | ✅ |
| Request Private Medical Facilities               | 21-4142 & 21-4142a |✅              |                            | ✅ ❌|
| Request to be a substitute claimant              | 21P-0847           |✅              |                            | ✅ |
| Intent to File                                   | 21-0966            |❌              |❌                          | ✅ |
| Statement in Support of Claimed Mental Health Disorder(s) Due to an In-Service Traumatic Event(s) | 21-0781 | ❌ |  | ❌ |
| Application for Veterans Pension                 | 21P-527EZ          |❌              |                            | ✅ |
| Application for Burial Benefits                  | 21P-530EZ          |❌              |                            | ✅ |
| Personalized Career Planning and Guidance/Chapter 36 | 27-8832        |❌              |                            | ❌ (typo? 28-8832) |
| Application for Pre-Need Determination of Eligibility for Burial in a VA National Cemetery | VA40-10007 |❌ |       | ✅ |
| Presidential Memorial Certificate Request Form   | 40-0247            |❌              |                            | ✅ |
| Report of Income from Property or Business       | 21P-4185-UPLOAD    |❌              |                            | ✅ |
| Election of Compensation in Lieu of Retired Pay<br/> or Waiver of Retired Pay to Secure Compensation<br/> from Department of Veterans Affairs (38 U.S.C. 5304(a)-5305)  | 21-651-UPLOAD |❌| | ✅ |
| Application for Benefits for a Qualifying Veteran's Child Born with Disabilities | 21-0304-UPLOAD | ❌      |       | ✅ |
| Certification of School Attendance or Termination| 21-8960-UPLOAD     |❌              |                            | ✅ |
| Court Appointed Fiduciary's Account              | 21P-4706c-UPLOAD   |❌              |                            | ✅ |
| Employment Questionnaire                         | 21-4140-UPLOAD     |❌              |                            | ✅ |
| Certificate of Balance on Deposit and Authorization to Disclose Financial Records | 21P-4718a  |❌              |   | ✅ |
| Notice to Department of Veterans Affairs of Veteran or Beneficiary Incarcerated in Penal Institution | 21-4193-UPLOAD |❌ |   | ✅ |
| Information Regarding Apportionment of Beneficiary's Award | 21-0788-UPLOAD |❌        |                            | ✅ |
| Notice of Waiver of VA Compensation or Pension to Receive Military Pay and Allowances | 21-8951-2-UPLOAD |❌      | | ✅ |
| School Attendance Report                         | 21-674b-UPLOAD     |❌              |                            | ✅ |
| Examination for Housebound Status or Permanent Need for Regular Aid and Attendance | 21-2680-UPLOAD |❌      |      | ✅ |
| Request for Nursing Home Information in Connection with Claim for Aid and Attendance | 21-0779-UPLOAD | ❌   |      | ✅ |
| Request for Employment Information in Connection with Claim for Disability Benefits | 21-4192-UPLOAD | ❌    |      | ✅ |
| Statement of Dependency of Parent(s)             | 21-509-UPLOAD      |❌              |                            | ✅ |
| Veteran's Application for Increased Compensation Based on Unemployability | 21-8940-UPLOAD | ❌              |      | ✅ |
| Improved Pension Eligibility Verification Report (Veteran with No Children) | 21P-0516-1-UPLOAD | ❌            |   | ✅ |
| Improved Pension Eligibility Verification Report (Veteran with Children) | 21P-0517-1-UPLOAD | ❌    |              | ✅ |
| Improved Pension Eligibility Verification Report (Surviving Spouse with No Children) |  21P-0518-1-UPLOAD | ❌    | | ✅ |
| Improved Pension Eligibility Verification Report (Child or Children) | 21P-0519C-1-UPLOAD | ❌ |                    | ✅ |
| Improved Pension Eligibility Verification Report (Surviving Spouse with Children) | 21P-0519S-1-UPLOAD | ❌    |    | ✅ |
| State Application for Interment Allowance (Under 38 U.S.C. Chapter 23) | 21P-530a-UPLOAD  | ❌ |                    | ✅ |
| Request for Details of Expenses                  | 21P-8049-UPLOAD    |❌              |                            | ✅ |


#### Including Other Lighhouse Benefits Inatake API forms:

We have decided to complete this work in future sprints (https://github.com/department-of-veterans-affairs/va.gov-team/issues/109573).

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
- [VA Forms Library - How to set up Save In Progress (SiP)](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) 
