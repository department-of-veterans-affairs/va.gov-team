# [DRAFT] Direct Deposit for Education Benefits - Use Cases

[Based on Use-Cases spreadsheet provided by Team]

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Direct Deposit - Edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md)

## Contents

<details>

<summary></summary>

- [Use Case A](#use-case-a---loa2---2fa-alert) 
- [Use Case B](#use-case-b---loa3---direct-depost-for-edu-not-set-up-no-longer-valid)
- [Use Case C](#use-case-c---loa3---direct-deposit-for-edu-set-up) 
- [Use Case D](#use-case-d---loa3---ineligible-for-edu---eligible-for-comp--pen) 
- [Use Case E](#use-case-e---loa3---ineligible-for-any-direct-deposit) 
- [Use Case F](#use-case-f---loa3---ineligible-for-comp--pen)
</details>

## Use Case A - LOA2 - 2FA Alert
* **Description**
  - A logged-in LOA2 veteran (identity-verified but no 2FA; considered LOA3 for many apps but not Direct Deposit) should see an alert/prompt to set up 2FA under Direct-Deposit section on Profile page, instead of actual Direct-Deposit info.
  - TestRail Test Case: [C2142](https://dsvavsp.testrail.io/index.php?/cases/view/2142)
* **Link to designs**
  - [n/a -- this has not changed]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - **NOTE**: No Staging test-acct exists to support this Case.  Instead, API-response will be locally overridden [in Safari browser only] to validate this case.
  - Staging test-account: **`vets.gov.user+378@gmail.com` (Kenneth)** [same as for Test Case C -- see Note above]

## Use Case B - LOA3 - Direct Depost for Edu not set up [no longer valid]
* **NOTE**: There's no specific UI-state for this scenario.  There's no back-end support for adding bank-info.

## Use Case C - LOA3 - Direct Deposit for Edu set up
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) with direct deposit for edu set up should see their direct deposit for edu info along with an edit links in the direct deposit tab of the profile.
  - TestRail Test Case: [C2144](https://dsvavsp.testrail.io/index.php?/cases/view/2144)
* **Link to designs**
  - https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: **`vets.gov.user+378@gmail.com` (Kenneth)**

## Use Case D - LOA3 - Ineligible for Edu
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is ineligble for direct deposit for education benefits should see content indicating ineligibility along with link to eligibility information. 
  - TestRail Test Case: [C2143](https://dsvavsp.testrail.io/index.php?/cases/view/2143)
* **Link to designs**
  - https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/screen/11a0357f-5fbe-487b-a60a-6d415a0eae17/
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: **`vets.gov.user+226@gmail.com` (Johnny)**

## Use Case E - LOA3 - Ineligible for any Direct Deposit
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is not eligible for any kind of direct deposit should *not* see the direct deposit tab of the profile.
  - TestRail Test Case: [C2146](https://dsvavsp.testrail.io/index.php?/cases/view/2146)
* **Link to designs**
  - [n/a - Left-nav simply hides Direct Desposit link]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: **`vets.gov.user+175@gmail.com` (Edith)**

## Use Case F - LOA3 - Ineligible for Comp & Pen
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is ineligble for direct deposit for disability compensation & pension benefits should see content indicating ineligibility along with links to eligibility information.
  - TestRail Test Case: [C4150](https://dsvavsp.testrail.io/index.php?/cases/view/4150)
* **Link to designs**
  - https://xd.adobe.com/view/532272b2-b423-4e1b-a8c6-d1a583da3d37-0671/screen/b24aaba3-b810-4472-87e4-ade9db63467d
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - **NOTE**: No Staging test-acct exists to support this Case.  Instead, API-response will be locally overridden [in Safari browser only] to validate this case.
  - Staging test-account: **`vets.gov.user+378@gmail.com` (Kenneth)** [same as for Test Case C -- see Note above]
