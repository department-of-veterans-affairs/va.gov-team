# Post-MVP Forms Status on My VA Frontend Documentation (WIP)

**Last updated: October 21, 2024**

During the course of MVP design and research there were multiple points of functionality that were planned as future enhancements. 
In addition, support for PDF downloads were not able to make the cut during development for MVP due to technical constraints, and so that will be a future enhancement as well. 
Also, the 21-0966 form was pulled from MVP due to an inability to consistently let users know the status of its submission without further engineering work to make that possible - it will also be coming in a future iteration of form status functionality.

The possible future enhancements are as follows (the order of items does not indicate their level of priority), with enhancements we are committed to marked as such:

- (Committed) PDF download support on form status cards (Submission in progress, Received, Action needed)
- ~(Committed) Support for 21-0966 (Intent to file)~ This is no longer needed, this should show up on the Claim Status Tool Instead 
- The addition of a page level alert that appears at the top of My VA, indicating when a form submission has had a detectable system-based error
- Possible addition of a Process List component, mirroring the one shown on the submission confirmation page
- Possible removal of the 'error' icon on the Draft cards (expiration dates)
- Possible addition of truncation and dedicated page for form status cards
- Possible addition of secondary link going to a dedicated Resources page for form statuses
- (Committed) In-take process for scaling (non-Veteran facing)
- Revisit expansion of error scenarios (e.g. when drafts work but submitted forms don't)
- Revisit draft card expiration dates
- Revisit overall card content
 

## List of Forms w/Categories 
- [Mural list of forms and their categories w/corresponding API ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710506605775/2f8e0b8d2f952dae0b7e8424d44242c827503a36?sender=u9ae4d29a0ed5c3d2753a7824)

Documentation for these points are below:

## PDF download support on form status cards (Submission in progress, Received, Action needed)

<img width="462" alt="Application Card" src="https://github.com/user-attachments/assets/6563f18e-e633-4b35-b9c8-7028b9b9658d">

**New card content, on all forms cards**

Download your application, available until X/X/XXXX (PDF)

**Visual specs**
- The Card component in [VADS](https://design.va.gov/components/card#variations) is used, with the default white background variation.
- The Tag component in [VADS](https://design.va.gov/components/tag) is used.
- Link component styles:
  - ['default' for benefits hotline number and TTY](https://design.va.gov/components/link/), ['download' for PDF download](https://design.va.gov/components/link/#download)
- Typography: 'h3', 'vads-font-size-base', tag component uses its default 'regular' font style

### Errors
- PDF cannot be generated
- PDF cannot be downloaded due to the expiration of file availability (based on ATO guidelines)

#### PDF cannot be generated

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2107-27599&t=xjD6hDcxAO3klDmb-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2107-42621&t=xjD6hDcxAO3klDmb-1)

If it is detected that a PDF cannot be generated at page load, the link will not appear on the form card(s). If it cannot generate but the link is visible, a browser-based error will appear (this is slated to be addressed in a future enhancement). All other content on the card will remain the same for that status type (Received, etc.).

#### PDF cannot be downloaded due to the expiration of file availability (based on ATO guidelines)

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2134-26236&t=1xBs1o2BLdUQ1mpr-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2136-41730&t=1xBs1o2BLdUQ1mpr-1)

A user selecting the link to download the PDF will cause a browser-based error to appear, akin to what is shown in Figma (representing a Firefox error state).

## Support for 21-0966 (Intent to file)

_No additional design work is required for this_

More details to come.

## The addition of a page level alert that appears at the top of My VA, indicating when a form submission has had a detectable system-based error

The [error variant of the 'warning' component](https://github.com/orgs/department-of-veterans-affairs/projects/1174/views/29?sliceBy%5Bvalue%5D=mattmarino-adhoc&pane=issue&itemId=81954186&issue=department-of-veterans-affairs%7Cva.gov-team%7C94153) will appear when a submitted form has experienced a deteced error in the process.

### One form with an 'action needed' status

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1241-24524&t=IzebklllHwsoqqU2-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2647-43905&t=1ZSN5IjvhAkT0vuu-1)

### 2+ forms with an 'action needed' status

[Desktop](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1242-25952&t=IzebklllHwsoqqU2-1)

[Mobile](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=2647-44362&t=1ZSN5IjvhAkT0vuu-1)

## Possible addition of a Process List component, mirroring the one shown on the submission confirmation page

_This was part of user testing in May 2024, after which the decision was made to not include it in MVP and revisit its usage later._ 

More details to come.

<img width="462" alt="Application Card" src="https://github.com/user-attachments/assets/f4048e0e-4477-478a-a22d-9a0c1e191510">

## Possible removal of the 'error' icon on the Draft cards (expiration dates)

_The current use of an error icon adjacent to the expiration date of the draft has questionable value to users, and deviates from existing patterns used on My VA's other types of cards. There is a case for its removal._

More details to come.

## Possible addition of truncation and dedicated page for form status cards

_Some discussion has happened previously regarding the potential implication of some way to minimize the number of cards visible on My VA at a given time, to make information easier to process. There could be the introduction of a dedicated forms status page, akin to the CST page. This is *NOT* something we are committed to doing._

More details to come.

## Possible addition of secondary link going to a dedicated Resources page for form statuses

_As the number of supported forms increases, instructional information for users that includes the list of forms that currently lives in the accordion component in the "Benefit applications and forms" section of My VA will need space beyond what is acceptable for the component's usage. A "Resources" page that provides the complete list of supported forms (and other relevant info) may be necessary._

More details to come.

## In-take process for scaling (non-Veteran facing)

_The engineering approach for scaling beyond MVP needs to be determined._

More details to come.

## Revisit expansion of error scenarios (e.g. when drafts work but submitted forms don't)

_Drafts and submitted forms use two separate services, and it is possible that one could fail while the other does not. At this time, we handle all failures the same way but there is the possibility of varying error handling depending on what service(s) fails._

It appears that drafts are tied to the user service, and it is likely that a failure with drafts implies a user won't be able to see any of My VA. If this is the case, then it limits the kinds of messaging we can show. 

More details to come.

## Revisit overall card content

_CAIA has previously expressed concern about some elements of the content on cards, we will review with them again._

More details to come.

