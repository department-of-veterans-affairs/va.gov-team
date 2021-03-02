# View Payment History - Use Cases

_Track and maintain the various use cases that exist for a given product -- best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Payment History](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-payment-history/README.md)

## Contents
<details>
<summary></summary>
  
- [Use Case A - Has Payment History](#use-case-a---has-payment-history) 
- [Use Case B - No Payment History](#use-case-b---no-payment-history)
- [Use Case C - API Error](#use-case-c---api-error) 

</details>

## Use Case A - Has Payment History

* **Description**
  - User visits **Your VA payments** page, and sees a list of payments made by VA:
    - If history has >6 received pmts, list is paginated (6/pg), and User can navigate to other pages of payments.
    - If history includes returned pmts, they're on a separate list.  List conditionally paginates same as above.

* **Link to designs**
  - [Adobe XD prototype](https://xd.adobe.com/view/5f609803-b045-428a-510e-1754e404af3e-2951/screen/6a2de0f2-3a3b-4da0-b252-471e5cdcb7e9/specs/)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Go to https://staging.va.gov/va-payment-history/payments/ -- sign-in as **`vets.gov.user+228@gmail.com` (Colder)**
  
* **TestRail Test Case**: [C1006](https://dsvavsp.testrail.io/index.php?/cases/view/1006)

## Use Case B - No Payment History

* **Description**
  - User visits **Your VA payments** page, and since (s)he has no payment history, sees instead an alert stating this fact.

* **Link to designs**
  - [Adobe XD prototype](https://xd.adobe.com/view/5f609803-b045-428a-510e-1754e404af3e-2951/screen/338e991f-d104-4bf4-b040-ced7f18617a0/specs/)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Go to https://staging.va.gov/va-payment-history/payments/ -- sign-in as **`vets.gov.user+4@gmail.com` (Alfredo)**
  
* **TestRail Test Case**: [C1016](https://dsvavsp.testrail.io/index.php?/cases/view/1016)

## Use Case C - API Error
**NOTE**: This API-error case is not testable on Staging.  Instead, a local-environment screenshot of the error will be provided to QA by the Product Team.

* **Description**
  - User visits **Your VA payments** page, and sees an error message if the API data-endpoint is down or fails to return data properly.

* **Link to designs**
  - [Adobe XD prototype](https://xd.adobe.com/view/5f609803-b045-428a-510e-1754e404af3e-2951/screen/b605cd69-728a-4b12-988b-558dc734375c/specs/)

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - [See NOTE above for this Case]
  
* **TestRail Test Case**: [C1125](https://dsvavsp.testrail.io/index.php?/cases/view/1125)
