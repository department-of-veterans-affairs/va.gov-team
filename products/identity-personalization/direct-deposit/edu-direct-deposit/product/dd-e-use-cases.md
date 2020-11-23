# [DRAFT] Direct Deposit for Education Benefits - Use Cases

[Based on Use-Cases spreadsheet provided by Team]

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Direct Deposit - Edu](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/edu-direct-deposit/README.md)

## Contents

<details>

<summary></summary>

- [Use Case A](#use-case-a---loa2---2fa-alert) 
- [Use Case B](#use-case-b---loa3---direct-depost-for-edu-not-set-up)
- [Use Case C](#use-case-c---loa3---direct-deposit-for-edu-set-up) 
- [Use Case D](#use-case-d---loa3---ineligible-for-edu---eligible-for-comp--pen) 
- [Use Case E](#use-case-e---loa3---ineligible-for-any-direct-deposit) 

</details>

## Use Case A - LOA2 - 2FA Alert
* **Description**
  - A logged-in LOA2 veteran (identity-verified but no 2FA; considered LOA3 for many apps but not Direct Deposit) should see an alert/prompt to set up 2FA under Direct-Deposit section on Profile page, instead of actual Direct-Deposit info.
* **Link to designs**
  - lorem ipsum
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: **jamie.wood** - DS Logon

## Use Case B - LOA3 - Direct Depost for Edu not set up
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is eligble for direct deposit for edu but does not already have it set up should see the direct deposit for edu section, but should see a link to add info instead of edit it. 
* **Link to designs**
  - [TBD]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: [TBD]

## Use Case C - LOA3 - Direct Deposit for Edu set up
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) with direct deposit for edu set up should see their direct deposit for edu info along with an edit links in the direct deposit tab of the profile.
* **Link to designs**
  - [TBD]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: [TBD]

## Use Case D - LOA3 - Ineligible for Edu - Eligible for Comp & Pen
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is eligble for direct deposit for comp & pen but NOT direct deposit for edu should still see the direct deposit section, but they should be able to add/edit direct deposit info for education benefits.
* **Link to designs**
  - [TBD]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: **`vets.gov.user+226@gmail.com` (Johnny)** - ID.me

## Use Case E - LOA3 - Ineligible for any Direct Deposit
* **Description**
  - A logged-in LOA3 veteran (identify-verified and 2FA) that is not eligible for any kind of direct deposit should *not* see the direct deposit tab of the profile.
* **Link to designs**
  - [TBD]
* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Staging test-account: [TBD]
