# [DRAFT] Medical Copays - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

[Product Outline][mcp-product-outline]

[Designs][designs] [Status-variations and Line-items TBD]

## On this page
<details>
<summary>[click to expand/collapse]</summary>
  
- [Use Case A - Active, Single Facility](#use-case-a---active-single-facility) 
- [Use Case B - Active, Multiple Facilities](#use-case-b---active-multiple-facilities)
- [Use Case C - In Collection](#use-case-c---in-collection)
- [Use Case D - Resolved, Single Facility](#use-case-d---resolved-single-facility)
- [Use Case E - Active + Resolved, Multiple Facilities](#use-case-e---active--resolved-multiple-facilities)
- [Use Case F - Prescriptions only](#use-case-f---prescriptions-only)
- [Use Case G - No History](#use-case-g---no-history)
- [Use Case H - Not Enrolled in Health Care](#use-case-h---not-enrolled-in-health-care)
- [Use Case I - Financial Hardship](#use-case-i---financial-hardship)
- [Use Case J - Balance Suspended](#use-case-j---balance-suspended)
- [Use Case K - Deceased](#use-case-k---deceased)

</details>

## Use Case A - Active, single facility
Last updated 2021-08-13

* **Description**
  - Veteran has active copays at one facility

* **Link to designs**
  - [Copay overview - Active balance at one facility][copay-overview-active-one-facility]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+80@gmail.com`


## Use Case B - Active, multiple facilities
Last updated 2021-08-13

* **Description**
  - Veteran has active copays at multiple facilities

* **Link to designs**
  - [Copay overview - Active balances at mulitple facilities][copay-overview-active-multiple-facilities]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+81@gmail.com`


## Use Case C - In collection (Not a current use case)
Last updated 2021-08-13

* **Description**
  - Veteran has copays referred to DoT for collection

* **Link to designs**
  - N/A

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+82@gmail.com`


## Use Case D - Resolved, single facility
Last updated 2021-08-13

* **Description**
  - Veteran has a resolved (paid) balance at one facility

* **Link to designs**
  - [Copay overview - Resolved balance at one facility][copay-overview-resolved-one-facility]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+83@gmail.com`


## Use Case E - Active + Resolved, multiple facilities
Last updated 2021-08-13

* **Description**
  - Veteran has a mixture of active and resolved copay balances at multiple facilities

* **Link to designs**
  - [Copay overview - Active and resolved at multiple facilities][copay-overview-active-and-resolved-multiple-facilities]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+84@gmail.com`


## Use Case F - Prescriptions only (Not a current use case)
Last updated 2021-08-13

* **Description**
  - Veteran doesn't pay copays but pays for prescriptions.
  - **Note:** We determined that this was not a valid use case for now, the details pages will simply show only prescription charges in the table.

* **Link to designs**
  - N/A

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+85@gmail.com`


## Use Case G - No history
Last updated 2021-08-13

* **Description**
  - Veteran no history of copays

* **Link to designs**
  - [Copay overview - No copay history][copay-overview-no-copay-history]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+86@gmail.com`


## Use Case H - Not Enrolled in Health Care
Last updated 2021-08-13

* **Description**
  - Veteran is not enrolled in Health Care

* **Link to designs**
  - [Copay overview - Not enrolled][copay-overview-not-enrolled]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+87@gmail.com`


## Use Case I - Financial Hardship
Last updated 2021-08-13

* **Description**
  - Veteran qualifies for financial hardship determination

* **Link to designs**
  - [TBD]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+88@gmail.com`


## Use Case J - Balance suspended
Last updated 2021-08-13

* **Description**
  - Veteran's balance is suspended for [reasons TBD]

* **Link to designs**
  - [TBD]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+89@gmail.com`


## Use Case K - Deceased
Last updated 2021-08-13

* **Description**
  - Veteran's deceased

* **Link to designs**
  - [Copay overview - Veteran is deceased][copay-overview-veteran-deceased]

* **Instructions to access in Staging** [Passwords stored in [MVI Staging Users doc][mvi-staging-users] \(private repo\)]
  - `vets.gov.user+90@gmail.com`



[mcp-product-outline]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/Medical_Copays/Product_Outline_Medical_Copays.md
[designs]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/140826057/simulate/sitemap?mode=i%5D
[mvi-staging-users]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv
[copay-overview-open-alert]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/140669280/simulate/sitemap?mode=i
[copay-overview-active-one-facility]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141466536/simulate/sitemap?mode=i
[copay-overview-active-multiple-facilities]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141468774/simulate/sitemap?mode=i
[copay-overview-resolved-one-facility]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141466576/simulate/sitemap?mode=i
[copay-overview-active-and-resolved-multiple-facilities](https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141469738/simulate/sitemap?mode=i)
[copay-overview-not-enrolled]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141468871/simulate/sitemap?mode=i
[copay-overview-no-copay-history]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141468842/simulate/sitemap?mode=i
[copay-overview-veteran-deceased]: https://preview.uxpin.com/16e8675a9898914d5615d6ea2d23e310b7d8dfaa#/pages/141469718/simulate/sitemap?mode=i
