# Alt Text Validation
## Description
CMS team's goal is to create a better alternative (alt) text experience for Veterans visiting VA.gov. Lengthy alt text, filenames and certain phrases can all create a poor experience for Veterans who rely on screen readers when visiting the site. 

By putting validation in place within the CMS to prevent these types of errors from being included within the image alt text, we are working towards this goal of improving the alt text that is provided on VA.gov.

Alternative (alt) text is essential for web accessibility.  Creating accurate alt text can be challenging for Drupal CMS editors, all of whom have varying degrees of web accessibility compliance and best practices.  

The CMS team will be implementing client-side error messaging to display to editors when they upload an image to reenforce web accessibility best practices and compliance before content publishes on the website. 
## Value
* Reliable and accurate experience for Veterans who visit VA.gov and rely on screen readers
* Web accessibility compliance across Drupal CMS editors.
## What's Changing
CMS Editors, who _upload a new image_ to either the Media Library or within a Content node will be shown errors if the alt text they add for their image:
* Is Over 150 characters long
* Contains a file extension (.png, .jpg, .jpeg, or .gif)
*Uses phrases like “image of”, “photo of”, “graphic of”, “picture of”.

These errors will be shown immediately upon focusing out of the alt text field, meaning that the editor will receive the feedback that something within their alt text must be corrected prior to trying to save the image.

CMS Editors, who _edit an existing image_, will be shown errors if the existing alt text for the image violates one of the following:
* Is Over 150 characters long
* Contains a file extension (.png, .jpg, .jpeg, or .gif)
* Uses phrases like “image of”, “photo of”, “graphic of”, “picture of”.

These errors will be shown even if the editor's original intention was not to edit the alt text. These errors will be shown when the editor attempts to save the image and must be corrected before the image will be allowed to be saved.
## Impact
### Teams
* VFS-Facilities
* Public websites
### Editors
* VHA-MC
* Vet Centers
* VBA

## Communication
### CMS Team Points of Contact
* Erika Washburn - Product Owner
* Marcia Ortiz - Product Manager
* Berni Xiong - Delivery Manager
* Nate Douglas - Lead Engineer
### CMS team slack channel
[#sitewide-cms-platform](https://dsva.slack.com/archives/CT4GZBM8F)
### Internal Communication of new feature
* Facilities PO/PM/DM 
  * Type: async
  * Assignee: Marcia and Berni
* VFS-CMS & Sitewide All Team Demo Time! (meeting)
  * Type: demo
  * Assignee: TBD
* Team of Team (ToT)
   * Type: slide for ToT
  * Assignee: Marcia and Berni
### External Communication of new feature
* VHA-DM Office Hours
   * Type: demo
  * Assignee: Marcia or Berni
### Documentation
* KB article (if applicable): add link here
* Drupal login alert (if applicable): add verbiage and publish date
## Engineer tasks ?
## Blockers
* Blocker 1
  * Impact: 
* Block 2
  * Impact: 
## Pre-launch
* Training:
    * Teams:
    * Start date: 
    * End date: 
* Testing:
    * Teams:
    * Start date: 
    * End date: 
* Code merge freeze
  * Teams:
  * Start date:
  * End date: 
* PR Reviews
  * Product team reviewers:
  * Start date: 
  * End date: 

## Day of Launch
* Task 1 
  * Start time: 9:00am ET
  * End time: 
  * Duration: 
* Task 2
  * Start time: 
  * End time: 
  * Duration: 
## Post-launch
- [ ] CMS Engineers monitor Datadog
- [ ] CMS Help Desk monitor issues post launch and escalate any critical bugs to team
## CMS Help Desk
Editors should report issues by [creating a ticket via JIRA](https://va-gov.atlassian.net/servicedesk/customer/portal/3) that will go directly to CMS Help Desk

