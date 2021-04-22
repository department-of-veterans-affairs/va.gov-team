# NoD Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [Notice of Disagreement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Notice-of-Disagreement/readme.md)

Link to HLR Test User Info doc: https://dsva.slack.com/files/UN2J9UE1L/F01BTMV0RDX/hlr_test_user_info.docx

## Contents
<details>
<summary></summary>
  
- [Authenticated user would like to file a decision review digitally with evidence submission](#use-case-a) 
- [Authenticated user would like a representative to file a claims appeal electronically](#use-case-b)
- [Authenticated user would like to file a decision review digitally, selecting direct board review option](#use-case-d)
- [Authenticated user would like a representative to file a claims appeal electronically, selecting hearing with judge board review option ](#use-case-d)


</details>

## Use Case A

* **An authenticated user would like to file a decision review **
  - An authenticated user on the Request A Board Appeal page is either homeless or not
  - From list of known issues, user selects issue(s) for review 
  - Check the opt-in button
  - Request board review option (evidence submission)
  - Option to submit additonal evidence
  - Review submission
  - Check privacy policy
  - Submit
  

* **Link to designs**
  - https://vsateams.invisionapp.com/share/8Y10I6K7DU9R#/screens/447558866_NOD_-_Info_Page

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - https://staging.va.gov/decision-reviews/board-appeal/request-notice-of-disagreement-form-10182

## Use Case B

* **Authenticated user would like a representative to assist them with filing a claims appeal **
  - If the user answers yes, they have a representative, then they enter the rep's name
  - Select issues eligible for review or add
  - Check the opt-in button
  - Request board review option (direct review)
  - Optio to submit additonal evidence 
  - Review submission
  - Check privacy policy
  - Submit

* **Link to designs**
  - https://vsateams.invisionapp.com/share/8Y10I6K7DU9R#/screens/447558866_NOD_-_Info_Page

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - https://staging.va.gov/decision-reviews/board-appeal/request-notice-of-disagreement-form-10182

## Use Case C

*  **An authenticated user would like to file a decision review **
  - An authenticated user on the Request A Board Appeal page is either homeless or not
  - From list of known issues, user selects issue(s) for review 
  - Check the opt-in button
  - Request board review option (direct)
  - Option to submit additonal evidence
  - Review submission
  - Check privacy policy
  - Submit
  

* **Link to designs**
  - https://vsateams.invisionapp.com/share/8Y10I6K7DU9R#/screens/447558866_NOD_-_Info_Page

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - https://staging.va.gov/decision-reviews/board-appeal/request-notice-of-disagreement-form-10182
  
  ## Use Case D

* **Authenticated user would like to file a decision review **
  - If the user answers yes, they have a representative, then they enter the rep's name
  - From list of known issues, user selects issue(s) for review
  - Check the opt-in button
  - Request board review option (hearing with judge)
  - Review submission
  - Check privacy policy
  - Submit

* **Link to designs**
  - https://vsateams.invisionapp.com/share/8Y10I6K7DU9R#/screens/447558866_NOD_-_Info_Page

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - https://staging.va.gov/decision-reviews/board-appeal/request-notice-of-disagreement-form-10182


* **Access NOD:
- Go to https://staging.va.gov/decision-reviews/board-appeal/request-board-review-form-10182
- Log into any of the HLR test users (https://dsva.slack.com/archives/C5AGLBNRK/p1601069669025200?thread_ts=1601069567.024300&cid=C5AGLBNRK)
- Design: https://vsateams.invisionapp.com/share/8Y10I6K7DU9R#/screens/447558866
- Note: It's still a WIP and we're missing a page - if the Veteran chooses "Hearing with a Veterans Law Judge" the next page will ask the type of hearing: virtual, video conference or central office.

