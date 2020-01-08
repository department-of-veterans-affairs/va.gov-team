# Problems to Solve
- How to add to Formation and design.va.gov
  - https://design.va.gov/documentation/updating-this-site – needs clarification, plus how to add component changes
  - Updating the issue templates to be clearer for new people
  
- [Header Stacks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/patternLibraryInitiatives/headings.md)

- Form controls with errors - document the error message styling for form controls in the design system

- Relationship of aside/sidenav and main element to be compliant. Currently, the design system uses divs so the code passes, but the classes indicate the aside/sidenav nature of the div that is inside the main element, thereby breaking the semantic relationship of the elements and interfering with the screen reader identification of areas of content.
  - Current `<main>` would be more compliant and semantic if it were `<section>`
  - Sidenav is currently a `<div>` and would benefit from semantics of `<aside>` or `<nav>` (although the breadcrumbs are currently coded as `<nav>`)
  - The primary content on the page would benefit from being contained in `<main>` and additional content items in `<article>`s
  - A right rail would also be an `<aside>` element, differentiated from a subnav using the content and landmark role

- Icons, accessible treatment: 
  - This issue became visible due to Kevin Hoffman's request for a download link.
  - Icons need aria-hidden, if they're decorative
  - If they're not decorative and there's semantic meaning (do we have any of these? then we use sr-only), hide the icon, provide the semantic language [https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic)
  - File naming convention of the download content, so that users can identify what they've downloaded. For example, VA-017-Brochure-One-Pager-3.2.pdf vs VA-GeneralBenefitsInfo-3.2.pdf.
  - This may be a painstaking effort of scouring the site to uncover where this pattern is coming from that it is implemented like [https://www.va.gov/outreach-and-events/outreach-materials/](https://www.va.gov/outreach-and-events/outreach-materials/).
  - [Mural collection of icon links](https://app.mural.co/t/vsa8243/m/vsa8243/1572978262728/21af0a3299046b16f45678c564a7535797473f0b)
  
- 'button' styling without actual _button_ appearance, should follow 'link' styling and include the underline
  - [https://design.va.gov/content-style-guide/button-labels](https://design.va.gov/content-style-guide/button-labels)
  - [https://design.va.gov/components/buttons](https://design.va.gov/components/buttons)
  - [https://design.va.gov/content-style-guide/links](https://design.va.gov/content-style-guide/links)

- 'card' styling — when is it a card, a table, an alert, a dialog, and what semantic structure makes the most sense, is flexible for the different implementations? For example, if it's an injected message does a heading level make sense, or would a neutral definition list allow more flexibility?
  - ~~[Mural Collection of card patterns](https://app.mural.co/t/vsa8243/m/vsa8243/1572902707497/848781c021d10b7bb4674bea3f357b19dec73b59)~~
  - [DEPO's Mural of card patterns](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1574086026453/e8ba87ed25507f73b7c0b5c40267a3ae95a20b09)

- guidance for spacing of interactive items, such as lists of links
  - Interaction best practices recommend spacing interactive items sufficiently to help people, including those with mobility considerations, from accidentally selecting the wrong item (recovering from mistakes can be quite a hurdle for many)

- guidance for required vs optional form controls

