# Minimal form flow

Last updated: 10/23/2025

The updated form step template uses a minified header and footer in a form flow. The header and footer is reduced to not show any navigation elements. It frees up space on the page, and allows the user to focus on the task at hand. Also, the h1 on each form page becomes unique and is the 'thing' on the page (no longer the repeated form title).

First used in the check-in experience in November 2022. Expanded on by Veteran Facing Forms in August 2024

- [Original product outline](https://github.com/department-of-veterans-affairs/va.gov-team/issues/55121)

## Research

- [2022-11 Header (default) vs Minimal header comparison](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/500)
- [2023-09 Form Header Usability Testing](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/tree/main/research/2023-09-form-header-usability-testing)
- [2024-08 Reduce 21-4138 Submissions | Usability Study](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/618)

## Timeline

- **November 2022** - Check-in Team research
- **November 2022** -[Experimental Design Request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1339)
- **Septebmer 2023** - Veteran Facing Forms team research
- **November 2023** - Added to Design System
- **August 2024** - Veteran Facing Forms team research with VADS components
- **December 2024** - Working on forms team documentation
- **March 2025** - Took form 21-4138 through staging review using the pattern. [Staging review findings](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aissue%20label%3A21-4138%20label%3AStaging)
- **April 2025** - [Published template documentation on VADS](https://design.va.gov/templates/forms/form-step-minimal)
- **August 2025** - Used minimal form flow in form 20-10206 for [save-in-progress research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/digital-experience/ADE/research/2025-05-save-in-progress/research-report.md)
- **October 2025** - [Received recommendation to make the stepper a heading](https://github.com/department-of-veterans-affairs/va.gov-team/issues/118210#top). It was decided that we're not going to change the design at this time.

## Problem Statement
The form header usability testing aims to address pain-points related to the amount of redundant or unnecessary content above the fold. In recent studies, we've observed that:
- some sighted Veterans are confused by repetitive content in forms as the h1 and step heading may repeat for several pages in a row
- screen reader users are disorientated by repetitive h1s as the h1 is meant to be a unique description of the current page (not a summary of an overall flow e.g. a form title) for Veterans with low vision who use magnification on mobile devices, questions can be hidden below the fold completely
- How might we validate the usability of a more minimal header that improves users navigation through a form?

## Artifacts
- **Storybook**
  - [Header - Minimal](https://design.va.gov/storybook/?path=/docs/components-va-header-minimal--docs)
  - [Minimal - Footer](https://design.va.gov/storybook/?path=/docs/components-va-minimal-footer--docs)
- **VA Design system**
  - [Header - Minimal](https://design.va.gov/components/header/header-minimal)
  - [Footer - Minimal](https://design.va.gov/components/footer/footer-minimal)
- **Figma**
  - [Minimal Header components](https://www.figma.com/design/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?node-id=988-5402&node-type=frame&t=oPRQyMGvaaFArsoY-11)
  - [Minimal Footer components](https://www.figma.com/design/JDFpGLIojfuQwANXScQjqe/VADS-Component-Examples?node-id=1024-3269&node-type=frame&t=oPRQyMGvaaFArsoY-11)
- **Coming soon!**
  - [Figma Form template with minimal header & footer ](https://www.figma.com/design/Prr3ApW0oQDCvUDUNj4Pgx/zzzz-VFF-Toolbox?node-id=48-2403&t=N2zx9wgtg7lx6AM0-1) - This tempalte is currently stored in the VFF teams figma library. It will eventually be moved to VADS template library.
- **Draft Documentation**
  - [For designers. Draft in Google docs.](https://docs.google.com/document/d/1Y_ExSQkexEiom1siC3EaL_hwKrsw6NNLxBuX-TSQrk0/edit?usp=sharing) (Request permission to view) 

## Slack channels
- [#veteran-facing-forms](https://dsva.slack.com/channels/veteran-facing-forms)
- [#platform-design-system](https://dsva.slack.com/channels/platform-design-system)

## Documentation 
- [Mock form example on Staging](https://staging.va.gov/mock-form-minimal-header/introduction)
- [Using Minimal header & footer in forms](form-step-WIP.md)
