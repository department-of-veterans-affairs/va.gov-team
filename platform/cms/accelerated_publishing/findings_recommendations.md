*** DRAFT ***

## Overview

In March of 2021, the CMS team was asked to lead a [discovery initiative](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4748) to address various pain points around the VA.gov publishing & content deploy process, including:

- As a CMS Editor, I would like to publish content to VA.gov as quickly and easily as possible, and no longer than 5 minutes, so that I can most effectively deliver content to Veterans and the public.
- As a DEPO product owner, I would like to understand CMS Editor content publication use cases and paint points affected by publishing speed so that I can plan improvements and features to most effectively support them.
- As a VSP engineer, I would like to understand the content build architecture so that I can best apply technical solutions.

The CMS team then initiated a two-pronged discovery effort:

- [UX research](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4995) to more clearly understand CMS editors' pain points, goals and business needs to better inform technical solutions and prioritization of implementation effort. This effort is in progress as of May 28 2021.
- [Technical research](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4803) to discover available solution spaces and obtain a basic understanding of level of effort required. The research began with a [solution brainstorming session](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4809) open to all involved engineers and VFS leadership. The suggested solutions were then further refined in [internal brainstorming sessions](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/4810). The team moved from there into discovery effort for 3 main solution architectures:
   - Coupled Drupal: using Drupal to render and directly serve pages to users. ("Coupled Drupal" in the [Real-time CMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/proof-of-concepts-summaries/RealTimeCMS.md) solution summary)
   - Decoupled (or headless) Drupal: publicly exposing Drupal's content API to allow a Single Page Application (SPA) or other client-side applications to access Drupal data directly. ("Decoupled/Headless Drupal" in the [Real-time CMS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/proof-of-concepts-summaries/RealTimeCMS.md) solution summary)
   - Single Page Publishing: using the existing preview server in the current content build to render and publish pages "on demand", allowing extremely rapid publishing of static pages using the current deployment model. ([solution summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/accelerated_publishing/proof-of-concepts-summaries/SinglePageBuildsUsingPreviewServer.md))

## Recommendation matrix

The team has created a (DRAFT) [recommendation matrix](https://docs.google.com/spreadsheets/d/1qrXyjnED4aaJuQ0AgqHHFK2RMjjqeAP1GL1hw5lo0tU/edit?usp=sharing), evaluating each possible technical solution against a number of criteria and scoring each criterion with a Pro/Neutral/Con system.

[AP - Solution Options Matrix - Sheet1.pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/6563167/AP.-.Solution.Options.Matrix.-.Sheet1.pdf)

## Recommendation

If starting a new project, the CMS team would recommend one of the Real-Time CMS solutions (or possibly a hybridized approach) as the most scalable and forward-looking solution. Under the current constraints, the CMS team recommends implementing the Single Page Publishing approach as an interim solution. Our recommendation is made for the following reasons:

- The lift to prove content parity is far lower, since existing code is used to render the content and no template rewriting is required
- No ATO modifications are required
- An iterative implementation approach is possible, allowing:
   - a short timeframe to initial implementation (A working PoC for a single content type has already been implemented)
   - the team to focus on the highest-value use cases
   - no single "launch day cutover" is required
   - small chunks of work may be practically estimated and allow selection for greatest value
- Some of the effort involved will also benefit the existing full site build (e.g. direct publishing of static assets)
- The amount of content in the CMS may be continued to be scaled

We believe that implementing Single Page Publishing will resolve immediate Editor pain points and allow content to be continued to scaled, providing breathing room to implement a long-term solution as time & resources are available.

## Risks

- Continuing to invest resources in the current build system (vs. Real-Time CMS)
- Maintaining an additional build system
- Timeline implications of Accelerated Publishing team downsizing

## Next steps

| Action | Timeframe |
| ------------- | ------------- |
| Publicize recommendation and demonstrate Single Page Publishing (SPP) PoC to OCTO-DE | Week of May 31 |
| Create ADR and Technical Architecture Documentation for SPP | First half of June |
| Discovery for Static Asset Publishing Solution | First half of June |
| SPP Technical Architecture Implementation with single Content Type | Second half of June |
| Discovery/prototyping for VAMC Status Alert SPP | Second half of June |
| Synthesize UX Recommendations and create recommendations for further implementation timeline | Late June - Early July |
| Complete implementation for all content types currently supported by the preview server | Mid August - Mid September |
