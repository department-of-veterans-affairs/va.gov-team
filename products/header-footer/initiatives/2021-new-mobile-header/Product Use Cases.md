# Use Cases: New Mobile Header

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Link to product outline: [New VA.gov Mobile Header (also known as Mobile Header V2)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/header-footer/initiatives/2021-new-mobile-header/product-outline.md)

Demo environment - VA.gov New Mobile Header is in http://staging.va.gov

## Contents
<details>
<summary></summary>
  
- [Use Case A](#use-case-a) 
- [Use Case B](#use-case-b)
- [Use Case C](#use-case-c) 
- [Use Case D](#use-case-d) 


</details>

## Use Case A

* **Description - broken link**
  - A user clicks on the menu button and exspander menu doesn't render full memu to include accordions or "Va benefits and Health Care" and "About VA".  
  - The new hamberger icon should act as an expander opener for deeper menu items.  

* **Link to designs**
  - [Sketch Mockups](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - accessible via staging.va.gov 

## Use Case B

* **Description - no search results**
  - User enters a search query on the new drop down search bar under the menu icon and doesn't get return results as desired. 
  - User is taken to drop down menu search element and receives `null` results. 
  - The user should receive legacy search results based on search logic applied to the new mobile header. 

* **Link to designs**
  - [Sketch Mockups](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - staging.va.gov


## Use Case C

* **Description - Dismissible Banners**
  - User pulls up new mobile header and should have the ability to dismiss "Facility" Banner and "help" sticky banner from the mobile view.
  - User should see blue "X" for dismissal and once clicked, screen should refresh with banners removed.   

* **Link to designs**
  - [Sketch Mockups](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - staging.va.gov

## Use Case D

* **Description - New VA Logo Redirect to VA.gov Homepage**
  - New logo has been implimented as part of this initiative, its desired that users can click the "VA" logo on mobile and be redirected to VA.gov homepage. 
  - User should be reset on homepage when clicking the VA.gov homepage.  

* **Link to designs**
  - [Sketch Mockups](https://www.sketch.com/s/63193c20-04fc-4d4f-8b54-abf698c48636/a/Vr8Zzrw)

* **Instructions to access in demo environment (for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - staging.va.gov
