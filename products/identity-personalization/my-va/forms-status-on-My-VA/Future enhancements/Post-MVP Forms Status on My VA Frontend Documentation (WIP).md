# Post-MVP Forms Status on My VA Frontend Documentation (WIP)

**Last updated: October 17, 2024 - File created**

_As of Oct. 17, 2024_ - During the course of MVP design and research there were multiple points of functionality that were planned as future enhancements. 
In addition, support for PDF downloads were not able to make the cut during development for MVP due to technical constraints, and so that will be a future enhancement as well. 
Also, the 21-0966 form was pulled from MVP due to an inability to consistently let users know the status of its submission without further engineering work to make that possible - it will also be coming in a future iteration of form status functionality.

The future enhancements are as follows (the order of items does not indicate their level of priority):

- PDF download support on form status cards (Submission in progress, Received, Action needed)
- Support for 21-0966
- The addition of a page level alert that appears at the top of My VA, indicating when a form submission has had a detectable system-based error
- Possible update to content in cards
- Possible addition of a Process List component, mirroring the one shown on the submission confirmation page
- Possible removal of the 'error' icon on the Draft cards
- Possible addition of truncation and dedicated page for form status cards
- Possible addition of secondary link going to a dedicated Resources page for form statuses  

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


