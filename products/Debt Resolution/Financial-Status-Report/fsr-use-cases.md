# Financial Status Report (FSR) - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Financial-Status-Report/FSR-Product-Outline.md

## Contents
<details>
<summary></summary>
  
- [Use Case A](#use-case-a---has-benefits-on-record) 
- [Use Case B](#use-case-b---no-benefits-on-record)
- [Use Case C](#use-case-c---one-debt-on-record)
- [Use Case D](#use-case-D---two-debts-on-record) 

</details>

## Use Case A - Has benefits on-record

* **Description**
  - Veteran has VA Benefits on record, which are prefilled in FSR form -- no need to manually fill-in.

* **Link to designs**: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+228@gmail.com` (Colder)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4182](https://dsvavsp.testrail.io/index.php?/cases/view/4182)

## Use Case B - No benefits on-record

* **Description**
  - Veteran does not have VA benefits on record -- must fill-in benefits manually in FSR form.

* **Link to designs** https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+5@gmail.com` (Frank)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4350](https://dsvavsp.testrail.io/index.php?/cases/view/4350)

## Use Case C - One debt on-record

* **Description**
  - Veteran has only 1 debt on record -- can only choose that debt in FSR form debt-selection page.

* **Link to designs** https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+14@gmail.com` (Jerry)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4354](https://dsvavsp.testrail.io/index.php?/cases/view/4354)

## Use Case D - Two debts on-record

* **Description**
  - Veteran has only 2 debts on record -- can choose one or both in FSR form debt-selection page.

* **Link to designs** https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+1@gmail.com` (Greg)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4355](https://dsvavsp.testrail.io/index.php?/cases/view/4355)
