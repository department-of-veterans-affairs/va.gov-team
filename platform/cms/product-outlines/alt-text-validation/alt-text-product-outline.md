# Alt Text Validation

Alternative (alt) text is essential for web accessibility.  Creating accurate alt text can be challenging for Drupal CMS editors, all of whom have varying degrees of web accessibility compliance and best practices.  

The CMS team will be implementing client-side error messaging to display to editors when they upload an image to reenforce web accessibility best practices and compliance before content publishes on the website. 

## Problem statement

Lengthy alt text, filenames and certain phrases can all create a poor experience for Veterans who rely on screen readers when visiting the site. CMS team's goal is to create a better alternative (alt) text experience for Veterans visiting VA.gov. 

## Hypothesis or Bet

* By putting validation in place within the CMS to prevent these types of errors from being included within the image alt text, we are working towards this goal of improving the alt text that is provided on VA.gov.

## We will know we're done when... ("Definition of Done")

* CMS editors will receive an error in the image editor space when they upload a new image or edit an existing image and fail to meet the following alt text requirements:
  * Is over 150 characters longs
  * Contains a file extension (.png, .jpg, .jpeg, or .gif)
  * Uses phrases like, "image of", "photo of", "graphic of", "picture of"
* Impacted teams and editors are notified in advance of the changes. 
  * Teams: VFS-Facilities and Public Websites
  * Editors: VA-MC, Vet Centers, and VBA
* Knowledge base articles are created and/or updated:
  * [How to edit or add alternative text](https://prod.cms.va.gov/help/cms-basics/alternative-text)
  * [Alternative Text for Images](https://prod.cms.va.gov/help/cms-basics/alternative-text-for-images)
  
## User Stories

* As an editor, the system shall display errors when alt text for an image upload does not meet the following requirements so that my alt text follows best practices for accessbility compliance:
  * Is Over 150 characters long
  * Contains a file extension (.png, .jpg, .jpeg, or .gif)
  * Uses phrases like “image of”, “photo of”, “graphic of”, “picture of”

## Related Backlog 
* [#16661](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/gh/department-of-veterans-affairs/va.gov-cms/16661) Create Datadog dashboard to capture alt text error messages

## Contacts
- Product Owner: Erika Washburn (OCTO-DE)
- Delivery Manager: Berni Xion (Agile 6)
- Design System Design Lead: Blake Organ (CivicActions)
- Engineering: CMS Team/Edmund Dunn 
- Accessibility Lead: Laura Flannery (CivicActions)
