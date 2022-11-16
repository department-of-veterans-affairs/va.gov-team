# 10-10 EZ Household section optimization: Use Cases

- Link to product outline: [10-10EZ Veteran Healthcare application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- Link to Initiative: [Household Section Optimization](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Household%20section%20redesign/ReadMe.md)
- Link to form flow: [Household section form flow](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/208CCE1E-DC03-457F-B2FA-1232663983CF/canvas)
- Link to Epic: [Household section optimization epic #41403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41403)

We are reorganizing and updating the Household section of the 10-10EZ form.  The data gathered will be the same, we are looking to improve the flow and how the information is presented to Veterans.  We are also working to improve accessibility within the section.

Applicants can be either authenticated or unauthenticated to access this application, however this section will **only display** for those applicants with a disability rating 40% or less, or receive a pension only.

## Contents
<details>
<summary></summary>
  
- [Use Case A](#use-case-a) 
- [Use Case B](#use-case-b)
- [Use Case C](#use-case-c)
- [Use Case D](#use-case-d) 
- [Use Case E](#use-case-e)
- [Use Case F](#use-case-f)
- [Use Case G](#use-case-g)
- [Use Case H](#use-case-h)
- [Use Case I](#use-case-i)
  
  
</details>

## Use Case A

* **Applicant wants to disclose their financial information, is married, and has 2 dependents (1 spouse, 1 child), all with same address**
  - Applicant reviews the page that explains how VA uses their financial information and what information they will need to have
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that they want to disclose their financial information
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses the "Married" option in the dropdown list
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides Spouse name, date of birth and date of marriage
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that their spouse lived with them last year
  - Applicant chooses "Yes" radio button option, indicating that their spouse has the same address
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that they have dependents to report
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides the Dependent name, relationship, SSN, date of birth, date of becoming a dependent (ex: marriage or child birth date)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant selects and provides answers on the Dependent additional information page (permanent disability, school attendance, expenses, dependent residence last year)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that they have another dependent to report
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides the 2nd Dependent name, relationship, SSN, date of birth, date of becoming a dependent (ex: marriage or child birth date)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant selects and provides answers on the 2nd Dependent additional information page (permanent disability, school attendance, expenses, dependent residence last year)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides Annual Income from employment, farm/property/business, and any other income
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides the Spouse's Annual Income from employment, farm/property/business, and any other income
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides last year's deductible expenses
  - Applicant selects the "Continue" button to proceed through the rest of the application

* **Link to designs**
  - [Sketch flow of Household section](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/208CCE1E-DC03-457F-B2FA-1232663983CF/canvas)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 12](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 13.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on page 17.

## Use Case B

* **Applicant does not want to disclose their financial information**
  - Applicant reviews the page that explains how VA uses their financial information and what information they will need to have
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "No" radio button option, indicating that they do not want to disclose their financial information
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses any option in the dropdown list (does not change following pages)
  - Applicant selects the "Continue" button to proceed through the rest of the application

* **Link to designs**
  - [Sketch flow of Household section](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/208CCE1E-DC03-457F-B2FA-1232663983CF/canvas)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 13](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 13.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on page 17.


## ~Use Case C~

* **Applicant wants to disclose their financial information, is married, and has 1 dependent (1 child), all with different address**
  - Applicant reviews the page that explains how VA uses their financial information and what information they will need to have
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that they want to disclose their financial information
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses the "Married" option in the dropdown list
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides Spouse name, date of birth and date of marriage
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "No" radio button option, indicating that their spouse did not live with them last year
  - Applicant chooses "No" radio button option, indicating that their spouse does not have the same address
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses either radio option (does not change following pages), indicating whether the Veteran provided spousal support
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides Spouse address information
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses "Yes" radio button option, indicating that they have dependents to report
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides the Dependent name, relationship, SSN, date of birth, date of becoming a dependent (ex: marriage or child birth date)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant selects and provides answers on the Dependent additional information page, specifically choosing "No", indicating that the dependent did not live with them last year (permanent disability, school attendance, expenses, dependent residence last year)
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant chooses either radio option (does not change following pages), indicating whether the Veteran provided dependent support
  - Applicant chooses "No" radio button option, indicating that they do not have any other dependents to report
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides Annual Income from employment, farm/property/business, and any other income
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides the Spouse's Annual Income from employment, farm/property/business, and any other income
  - Applicant selects the "Continue" button to proceed to the next page
  - Applicant provides last year's deductible expenses
  - Applicant selects the "Continue" button to proceed through the rest of the application

* **Link to designs**
  - [Sketch flow of Household section](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/208CCE1E-DC03-457F-B2FA-1232663983CF/canvas)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 14](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 13.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on page 17.
 
## Use Case D

* **Applicant selects an option, goes back and selects a different option**
  - ~Applicant chooses "Yes" radio button option, indicating that they want to share their gender identity~
  - ~Applicant selects the "Continue" button to proceed to the next page~
  - Applicant chooses one of the radio button options to identify their gender identity
  - Applicant selects the "Continue" button to proceed through the application
  - Applicant selects the "Back" button on the next page to navigate back to the Gender Identity selection page
  - Applicant selects a different gender identity radio button option
  - Applicant selects the "Continue" button to proceed through the application

* **Link to designs**
  - [Sketch design of question with gender identity options](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/KvjzaoV)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 14](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 6.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on pages 8.

## ~Use Case E~

* ~**Applicant does not want to share, goes back and selects "Yes" and the next page question prompts to choose an option**~
  - ~Applicant chooses "No" radio button option, indicating that they do not want to share their gender identity~
  - ~Applicant selects the "Continue" button to proceed through the application~
  - ~Applicant selects the "Back" button on the next page to navigate back to the Gender Identity page~
  - ~Applicant chooses "Yes" radio button option, indicating that they want to share their gender identity~
  - ~Applicant selects the "Continue" button to proceed to the next page~
  - ~Applicant chooses one of the radio button options to identify their gender identity~
  - ~Applicant selects the "Continue" button to proceed through the application~

* ~**Link to designs**~
  - ~[Sketch design of 1st question page asking the applicant if they want to share their gender identity (Yes/No)](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/Kvel9Ag)~
  - ~[Sketch design of 1st question page with additional info accordion open](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/qemoRK2)~
  - ~[Sketch design of 2nd page question with gender identity options](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/wLkE92q)~

* ~**Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)~
  - ~Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)~
  - ~Authenticated flow: Log in with **[User 16](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new questions are on pages 6-7.~
  - ~Unauthenticated flow: Do not log in, proceed through application with any test data.  The new questions are on pages 8-9.~

## Use Case F

* **Applicant selected an gender identity option, edits on review page to select a different option**
  - ~Applicant chooses "Yes" radio button option, indicating that they want to share their gender identity~
  - Applicant chooses one of the radio button options to identify their gender
  - Applicant selects the "Continue" button to proceed through the application
  - Applicant selects the "Edit" button on the Review page
  - Applicant selects a different radio button option to change their gender identity selection
  - Applicant selects the "Update" button to save their new selection

* **Link to designs**
  - [Review page screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 15](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 6.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on pages 8.

## ~Use Case G~

* ~**Applicant selected not to share, edits on review page to "Yes" and select an option**~
  - ~Applicant chooses "No" radio button option, indicating that they do not want to share their gender identity~
  - ~Applicant selects the "Continue" button to proceed through the application~
  - ~Applicant selects the "Edit" button on the Review page~
  - ~Applicant chooses "Yes" radio button option, the Review page will update to display the 2nd question~
  - ~Applicant chooses one of the radio button options to identify their gender~
  - ~Applicant selects the "Update" button to save their new selection~

* ~**Link to designs**~
  - ~PENDING DESIGN/SCREENSHOT FOR REVIEW PAGE~

* ~**Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)~
  - ~Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)~
  - ~Authenticated flow: Log in with **[User 18](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new questions are on pages 6-7.~
  - ~Unauthenticated flow: Do not log in, proceed through application with any test data.  The new questions are on pages 8-9.~

## Use Case H

* **Applicant selects an option, edits on review page but does not make a change**
  - ~Applicant chooses "Yes" radio button option, indicating that they want to share their gender identity~
  - Applicant chooses one of the radio button options to identify their gender
  - Applicant selects the "Continue" button to proceed through the application
  - Applicant selects the "Edit" button on the Review page
  - Applicant does not make a change to their original selection
  - Applicant selects the "Update" button to retain their original selection to share their gender identity

* **Link to designs**
  - [Review page screenshots](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/Self%20Identifying%20Gender%20Identity%20(SIGI))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)
  - Authenticated flow: Log in with **[User 17](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new question is on page 6.
  - Unauthenticated flow: Do not log in, proceed through application with any test data.  The new question is on pages 8.
 
## ~Use Case I~

* ~**Applicant does not want to share their gender identity, edits on review page but does not make a new selection**~
  - ~Applicant chooses "No" radio button option, indicating that they do not want to share their gender identity~
  - ~Applicant selects the "Continue" button to proceed through the application~
  - ~Applicant selects the "Edit" button on the Review page~
  - ~Applicant does not make a new selection~
  - ~Applicant selects the "Update" button to retain their selection to not share their gender identity~

* ~**Link to designs**~
  - ~PENDING DESIGN/SCREENSHOT FOR REVIEW PAGE~

* ~**Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)~
  - ~Access the [Staging environment - healthcare application](https://staging.va.gov/health-care/apply/application/introduction)~
  - ~Authenticated flow: Log in with **[User 20](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)**.  The new questions are on pages 6-7.~
  - ~Unauthenticated flow: Do not log in, proceed through application with any test data.  The new questions are on pages 8-9.~
