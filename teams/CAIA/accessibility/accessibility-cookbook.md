# Accessibility cookbook

![Julia Child with a wooden hammer held aloft, happily grinning as she is about to smash something she is cooking in a TV kitchen.](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/CAIA/accessibility/bin/julia-with-hammer.jpg)

## What is this

This document serves as a place to record **solutions** for all sorts of accessibility issues we run into in our day-to-day work. 

While folks working in [content](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/CAIA/content) are able to lean on the [content style guide](https://design.va.gov/content-style-guide/), there isn't such a singular source of truth for accessibility; we look to WCAG, the [VA Design System](https://design.va.gov/), and our own best judgement, but sometimes we need something more.

## Who is this for

This cookbook aims to fill that gap, for the time being. While primarily intended for use by CAIA accessibility specialists, we invite the entire community of practice within OCTO to contribute recipes. Our hope is that this collection of recipes can help us create greater alignment between all accessibility specialists as we provide support and guidance to folks implementing and updating Veteran-facing products.

## Suggested format

While there isn't a strict template to follow when adding a recipe to the cookbook we suggest that it include a few key pieces of information as makes sense: 

- Description of the accessibility problem being solved
- Description of the ideal end-state
- Implementation/remediation details, if possible, including code samples and/or annotated screenshots
- Date recipe was added/last updated

*** 

## Headings and accessibility best practices

Headings are one of the most used HTML elements on pages, and they play a vital role for a page's understandability, scannability and navigation for screen readers.

### Accessibility problem being solved

How might we create a heading structure on pages and forms that help everyone, particularly people who use screen readers, get oriented to the page and navigate around it.

### Ideal state

- Pages should have one - and only one - `<h1>` heading that covers the topic of the content.
  - On Drupal pages, the "Page title" field is converted to `<h1>`.
  - On non-Drupal pages, `<h1>` needs to be coded manually.
- Heading levels shouldn't skip levels, only increasing by one level (h1 to h2, for example).
- HTML elements and/or CSS styling for bold, italics and font sizing aren't used in place of headings.
- Headings are used for their semantic meaning, not their styling (using an `<h4>` because of its small font size, for example).
  - Use [utility classes](https://design.va.gov/foundation/utilities/) to change a heading's style.
- Headings are informative and don't repeat information available in other headings.
- Headings aren't stacked, meaning one heading level followed by another. For example, a `<h1>` followed immediately by a `<h2>`.

### Implementation notes

- Headings should be hierarchical, meaning arranged in order from most important to least important.
- Review VA's [Page titles and section titles page](https://design.va.gov/content-style-guide/page-titles-and-section-titles) for content guidance.

### Resources
-  [HeadingsMap Chrome extension](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?pli=1)
-  [HeadingsMap Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/)

### Further reading

- [W3C page structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)

### Last updated

3/6/24

***

## Choose the right element: Buttons vs. links

Many people struggle to select the right element when choosing between a button or link. Making the right choice can help make an interface easier to use, especially for people who use assistive technology. Buttons and links are the primary ways users interact with information on a web page. Links are for navigation; buttons are for action.

### Accessibility problem being solved

In general, make links look like links and buttons look like buttons. Designing buttons as buttons and links as links improves usability and accessibility by:
- setting honest expectations of interaction behavior
- providing clear signifiers of affordances
- creating experiences that are consistent with web standards

Assistive technology users rely on proper semantics to access web content. They may choose to navigate by button, or link, depending on what they’re looking for. It’s vital that our content meets users’ expectations - link items, coded as buttons, could make those links hard to find, for example.

### Ideal state

- Buttons are:
  - Used for actions, including:
    - Submitting a form
    - Opening a modal
    - Changing the state of something (such as “Back / Continue” buttons on a form)
    - Expanding something (like an accordion)
  - Created using the [Button component](https://design.va.gov/components/button/) or [Button group component](https://design.va.gov/components/button/button-group), or with [standard semantic HTML button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  - Styled to look like buttons and shouldn’t include link signifiers, such as underlines
- Links are:
  - Used for navigation:
    - Navigation bars
	- Skip links / jump links (such as the On this page component)
	- Links to internal web pages
	- Links to external websites (read the [Content style guide](https://design.va.gov/content-style-guide/links#linking-to-external-sites) for additional information)
    - Links to PDFs, whether static or generated on the fly
  - Created using the [Link component](https://design.va.gov/components/link/), the [Action link component](https://design.va.gov/components/link/action) if you need extra visual emphasis, or with [standard semantic HTML link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
  - Styled to look like links and shouldn’t include button signifiers, such as borders

### Implementation notes

![Button or link flow chart](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/CAIA/accessibility/bin/button-or-link.png)

#### Should this be a button or link?

  - **Is the purpose of the control to navigate elsewhere?**
    - Yes
      - Examples: Going to a page; Going to a static file, like a PDF
      - **Is data submitted before navigation?**
        - Yes
          - Examples: Sending data to a server or saving client side before moving to a new page, like a form
          - _Make it a Button_
        - No
          - **Does it need to stand out from surrounding design elements?**
            - No
              - Examples: Link in body text; Link in the footer of a form; Links in a menu
              - _Make it a Link_
            - Yes
              - Examples: A link to a page which will begin a new form; A link on a page with an existing button as the primary action that’s needs more visual weight than other links
              - _Make it an Action Link_
    - No
      - **Is the purpose of this control to generate data for a file?**
        - Examples: Creating a PDF from a web page; Creating a PDF from data on the server
        - Yes
          - _Make it a Link_
        - No
          - _Make it a Button_

### Further reading

- [Buttons and links (presentation)](https://docs.google.com/presentation/d/1hv7kENiPuXGcZDwQSM5hItnbyXezu4nY9lFksMQpSK4/edit?usp=sharing)

### Last updated

3/6/24
