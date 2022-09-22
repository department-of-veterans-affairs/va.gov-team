# Decision Letter Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to feature outline: [CST Decision Letters]([#](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Decision%20Letter%20Feature%20Brief.md))

## Contents
  
- [Veteran has at least one Notification letter in e-folder, not enough to require pagination] 
- [Veteran has enough Notification letters to require pagination])
- [Veteran does not have any notification letters in their e-folder]
- [Application end point fails]
- [Unauthenticated user attempts to access Notification Letters listing page]

</details>

## Veteran has at least one Notification letter in e-folder, not enough to require pagination

* **Description**
  - Veteran has as decision letter. No pagination required. Has VA.gov credentials and access.

* **Link to designs**
  - 

* **Instructions to access in Staging (or Prod for Drupal)** 
  - Test user? (yes/no): 
  - Link to sensitive repo: 

## Veteran has enough Notification letters to require pagination

* **Description**
  - Veteran has so many notification letters, we need to offer at least one more page of Notification Letters.

* **Link to designs**

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Test user? (yes/no): 
  - Link to sensitive repo: 


## Veteran does not have any notification letters in their e-folder

* **Description**
  - Veteran has a VA.gov account, is authenticated, and doesn't have a notification letter in their e-folder, but they somehow get the URL for notification letters

* **Link to designs**
  - lorem ipsum

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Test user? (yes/no): 
  - Link to sensitive repo: 

## Application end point fails
* **Description**
  - For whatever reason, connect_VBMS fails to actually pull in the e-folder data

* **Link to designs**

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Test user? (yes/no): 
  - Link to sensitive repo: 

## Unauthenticated user attempts to access Notification Letters listing page

* **Description**
  - A user attempts to access the Notifications Letters page, but is not logged in.

* **Link to designs**

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Test user? (yes/no): 
  - Link to sensitive repo: 
