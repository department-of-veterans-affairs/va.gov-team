# Dependency Verification Modal - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to feature outline: [Dependency Verification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ebenefits/dependency-verification/README.md)

**IMPORTANT TESTING RESTRICTION**: Staging test-accounts will be "**burnt**" if you click **Verify...** to confirm dependents info is correct -- backend will mark dependents verified and modal will not return for another year for that account.

## Use Case A - Change dependent(s) now

* **Description**

  - Dependent-record(s) are out-of-date, and Veteran intends to update now.
  - General flow:
    - Clicks change-dependents modal-control.
    - Modal closes, and page displays change-dependents alert.

* **Link to designs**
  - [Modal](https://xd.adobe.com/view/659d31d9-4d54-4400-ad7b-25bbe62ef212-30ce/screen/8d9f1404-ebe1-40f8-8242-a5a90bea180d/)
  - [Page alert](https://xd.adobe.com/view/659d31d9-4d54-4400-ad7b-25bbe62ef212-30ce/screen/9ebd5377-29b3-49ef-9a32-4019f8262c62/)

* **Instructions to access in Staging**
  - https://staging.va.gov/view-change-dependents/view/
  - [Request a testable Staging account (with unverified dependents) from VSA eBenefits Migration team Product Manager]

## Use Case B - Change dependent(s) later

* **Description**

  - Dependent-record(s) are out-of-date, but Veteran intends to update later.
  - General flow:
    - Clicks change-dependents modal-control.
    - Modal closes, and page displays change-dependents alert.

* **Link to designs**
  [same as Case A above]

* **Instructions to access in Staging**
  - https://staging.va.gov/view-change-dependents/view/
  - [Request a testable Staging account (with unverified dependents) from VSA eBenefits Migration team Product Manager]


## Use Case C - Verify dependent(s)

* **Description**

  - Dependent-record(s) are up-to-date, and Veteran intends to confirm.
  - General flow:
    - Clicks verify-dependents modal-control.
    - Modal closes, and page displays thank-you alert.

* **Link to designs**
  - [Modal same as Case A above]
  - [Page alert](https://xd.adobe.com/view/659d31d9-4d54-4400-ad7b-25bbe62ef212-30ce/screen/633b0cc2-7bd5-4a0c-bd9f-373496f84276/)

* **Instructions to access in Staging**
  - https://staging.va.gov/view-change-dependents/view/
  - [Request a testable Staging account (with unverified dependents) from VSA eBenefits Migration team Product Manager]
