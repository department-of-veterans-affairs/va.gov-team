# Accessibility cookbook

![Julia Child with a wooden hammer held aloft, happily grinning as she is about to smash something she is cooking in a TV kitchen.](https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/teams/ADE/bin/julia-with-hammer.jpg)

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

Published to the VA Design System - [Structure your content](https://design.va.gov/content-style-guide/plain-language/structure-your-content#content-and-accessibility-best-practices) page

### Last updated

July 7, 2025

Written by: @davidakennedy 

***

## Choose the right element: Buttons vs. links

Published to the VA Design System - [Link - Action](https://design.va.gov/components/link/action#choose-the-right-element-buttons-vs-links) page

### Last updated

July 7, 2025

Written by: @davidakennedy
Buttons vs. links flow chart by @jrfbz and @davidakennedy

***

## When to use ARIA

Published to VA Platform - [When to use ARIA](https://depo-platform-documentation.scrollhelp.site/developer-docs/when-to-use-aria)

### Last updated

July 9, 2025

Written by @davidakennedy, adapted for Platform by @coforma-jamie

***

## Visually hidden link / button text best practices

Published to VA Platform - [Visually hidden link and button text best practices](https://depo-platform-documentation.scrollhelp.site/developer-docs/visually-hidden-link-and-button-text-best-practice)


### How we tested
First, we created a [testing script](https://coforma-jamie.github.io/VoiceCommandTest/) to test interactive elements - links, buttons, radio buttons, checkboxes, text inputs - with unique instances of `aria-label` and `aria-labelledby` for a variety of "vanilla" semantic HTML interactive elements and VADS components.

Then we tried activating each element using the visual label and its `aria` accName (if applicable), and recorded our findings in a [spreadsheet](https://docs.google.com/spreadsheets/d/154S4eYogg-k-Lx-GFLZuriIs8Nr3q2LO7gRY3jxamvU/edit?gid=0#gid=0).

To test, we used these apps:
- Voice Control (MacOS and iOS)
- Dragon
- Windows Speech Recognition (Win 10)
- Windows Voice Access (Win 11)
- Talon
- Android Voice Access

### Last updated
July 9, 2025

Written by @coforma-jamie

***

## Fieldsets, Legends, Labels

Published to the VA Design System - [Form - Overview](https://design.va.gov/components/form/#fieldsets-legends-and-labels) page

### Last updated
July 7, 2025

Written by: @Jeana-adhoc 

With thanks to: @davidakennedy, @briandeconinck, @coforma-jamie 

***

## When a screen reader needs to announce content

Published to the VA Design System - [When a screen reader needs to announce content](https://design.va.gov/about/accessibility/when-a-screen-reader-needs-to-announce-content)

### Last updated

July 7, 2025
