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

- Pages should have one `<h1>` heading that covers the topic of the content.
- Heading levels shouldn't skip levels, only increasing by one level.
- HTML elements and/or CSS styling for bold, italics and font sizing aren't used in place of headings.
- Headings are informative and don't repeat information available in other headings.
- Headings aren't stacked, meaning one heading level followed by another. For example, a `<h1>` followed immediately by a `<h2>`.

### Implementation notes

- Headings should be hierarchical, meaning arranged in order from most important to least important.

### Further reading

- [W3C page structure tutorial](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [Accessible heading structure](https://www.a11yproject.com/posts/how-to-accessible-heading-structure/)

### Last updated

2/27/24
