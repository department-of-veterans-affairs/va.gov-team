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
  - Veteran has VA Benefits on record, which are prefilled in FSR form -- sees benefit cards displayed on benefits page.

* **Link to designs**:
  - [See ALL screens]: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701647/simulate/sitemap?mode=i [Test-case for this use-case covers all flows that are common across all the use-cases]
  - Benefits page: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/136159512/

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+228@gmail.com` (Colder)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4182](https://dsvavsp.testrail.io/index.php?/cases/view/4182) [This is the "Main flow" test-case, and includes ALL form-internal flows that are common across all use-cases]

## Use Case B - No benefits on-record

* **Description**
  - Veteran does not have VA benefits on record -- sees alert w/ follow-up contact-info.

* **Link to designs**
  - Benefits page: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/137058261/

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+42@gmail.com` (Russell)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4350](https://dsvavsp.testrail.io/index.php?/cases/view/4350) [This is a truncated test-case, covering ONLY flow-deviations for this use-case data-scenario; all other (common) flows are covered in test-case above for Use Case A (Has benefits prefilled)]

## Use Case C - One debt on-record

* **Description**
  - Veteran has only 1 debt on record -- can only choose that single debt in FSR form debt-selection page.

* **Link to designs**
  - Debt-selection page: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701779/ EXCEPT only 1 debt will be displayed.

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+14@gmail.com` (Jerry)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4354](https://dsvavsp.testrail.io/index.php?/cases/view/4354) [This is a truncated test-case, covering ONLY flow-deviations for this use-case data-scenario; all other (common) flows are covered in test-case above for Use Case A (Has benefits prefilled)]

## Use Case D - 2+ debts on-record

* **Description**
  - Veteran has 2 or more debts on record:
      - can choose one, some, or all debts on debt-selection page.
      - IF 2+ debts are selected above:
          - separate repayment/relief options pages will be displayed (1 for each debt), allowing separate option-selections.
         - [TBD] IF a non-waiver option's chosen for 1 debt and a waiver option for the other(s), either 2+ separate statement pages or 1 combined statement page is subsequently displayed for input.

* **Link to designs**
  - Debt-selection page: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/133701779/
  - Repayment/relief options pages:
      - Non-waiver: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/136429387/
      - Waiver [GI Bill]: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/135678340/
      - Waiver [Comp & Pen]: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/135678339/
  - Statement pages:
      - Non-waiver: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/135732390/
      - Waiver: https://preview.uxpin.com/803dc24213cf723bfce6c5e3eaef5a2c3f3e344b#/pages/135943815/

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Login on Staging **[homepage](https://staging.va.gov)** first, then sign-in via ID.me as **`vets.gov.user+1@gmail.com` (Greg)**.
  - Go to **[Request help with VA debt...](https://staging.va.gov/manage-va-debt/request-debt-help-5655/)**.

* **TestRail test case**: [C4355](https://dsvavsp.testrail.io/index.php?/cases/view/4355) [This is a truncated test-case, covering ONLY flow-deviations for this use-case data-scenario; all other (common) flows are covered in test-case above for Use Case A (Has benefits prefilled)]
