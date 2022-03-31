# 10-10 EZ Short Form: Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/product-outline.md)

## Contents
<details>
<summary></summary>
  
- Authenticated-immediate alert ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/EL9RYvq))
- Authenticated-self-report ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/jgDjqJb))
- Unauthenticated-self-report ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/dlvDq7j))
- Full application flow/ less than 50% disability rating ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))
  
  
</details>

## Use Case A

* **Description** Authenticated / Disability 50% +
  - Veteran is logged-in (authenticated) and has a disability rating of 50% or higher.
    - General flow: customer sees standard bio info (name, ssn, dob), etc
    - Next is presented with a new "Short form alert" page
    - From here s/he enters Veteran info as shown in the flow diagram (required fields that are not pre-populated)
    - And lastly, goes to Insurance screen
    - And then Review and Submit
  

* **Link to designs**
  - ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/EL9RYvq))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Name: Colder
  - email: vets.gov.user+228@gmail.com
  - Password: [check [MVI Staging Users doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) (private repo)] 
  - Disability: 100% disability rating

## Use Case B 

* **Description** Authenticated / Disability rating of 40% - [pre-populated rating or no rating (self-report)]
  - Veteran is logged-in (authenticated) and we don't have a disability rating of 40% or lower.
    - General flow: Customer progresses through standard authenticated flow and enterans Veteran Info
    - Upon reaching the "Current Compensation from VA" screen, they select the radio button option for a disability rating of 40% or lower
    - From there, gets original long-form flow.


* **Link to designs**
  - ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/jgDjqJb))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)

- B1
  - Name: Eric
  - email:vets.gov.user+11@gmail.com
  - Password: 187SsNrLgPv5
  - Disability rating: 40% (auto short-form)
- B2
  - Name: Christian
  - email:  vets.gov.user+6@gmail.com
  - Password: [check [MVI Staging Users doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) (private repo)] 
  - Disability rating: none (User self-reports)
  
## Use Case C

* **Description** Unauthenticated / Self Reports Disability rating of 50% +
    - General flow: Customer progresses through standard flow; enterans Veteran Info
    - Upon reaching the "Current Compensation from VA" screen, they select the radio button option for a disability rating of 50% o higher
    - Sees a confirmation screen asking to confirm their rating is 50% or higher
    - From there, goes into the short-form flow as per Use Case A.


* **Link to designs**
  - ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/dlvDq7j))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Gmail: n/a

## Use Case D

* **Description** Unauthenticated flow / less than 50% disability rating
  - Veteran unauth
  - Less than 50% disabilty rating
  - Gets original long-form flow
  

* **Link to designs**
  - ([chart](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/a/zxZzO2l))

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Gmail: n/a

