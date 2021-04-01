# How would we build towards "V3" in 2021 Q2?

This doc provides context to make a decison around the actions needed to deprecate the Home Page MVP.

_Authors:_ Liani Lye and Gretchen Maciolek, Platform Team: Content/IA

_Decision maker:_ Rachael Roueche, Platform OCTO-DE lead


## Platform Documentation artifacts

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/platform-website-product-outline.md)
- Product iterations
  - [Pre "Platform Website": The old, practice area-based "Home Page MVP"](https://department-of-veterans-affairs.github.io/va.gov-team/)
  - [V1: Backend development documentaton](https://depo-platform-documentation.scrollhelp.site/developer-docs/)
  - [V2: Persona-based landing pages](https://va-platform-docs.scrollhelp.site/getting-started/)
  - [V3: In-progress](https://va-platform-docs.scrollhelp.site/index.html)
- 2021 Q2 "Develop IA" initiative: [Platform Website — Develop IA for Platform Website #22189](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/22189)


## Context

In 2021 Q1, the Content team populated the Platform Website with persona-based landing pages.  In 2021 Q3, we aim to have Platform teams begin populating the Platform Website.  However, we cannot have simultaneously maintain Platform Website and Home Page MVP, as we would then have two sources of truth re: how to build on the VA.gov Platform.  Here are the options we see in deprecating the Home Page MVP.


## Paths forward

All options would be followed by the release plan outlined in [Documentation Site — Migrate Homepage MVP documentation to Confluence: Release plan#17376](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/17376).

### Option 1 (recommended by the Content/IA team): Create persona-based landing pages with exit page tracking to GH, instead of content transformation

Migrate and apply tracking on the viable links from The Home Page MVP, creating landing pages following the personas from the customer segmentation research, to inform product-based IA.

This allows us to:

- **Understand what people are clicking on:** We hypothesize that knowing the info our audience is seeking will allow us to have a better idea of what content to transform.
- **More thoroughly develop our Plan Initiative:** We hypothesize that going light on the migration will allow us more time to iterate on a Q2-and-beyond plan with VSP PMs.


_Considerations:_
- Scroll Viewport landing pages that point to GitHub pages might lead to disjointed reading experience.
- Because pages will be in GitHub, we don't have a full view of a person's "complete click path," but we can stitch together understanding to inform IA based on that click info along with user interviews/surveys and search queries.

### Option 2: Follow practice area-based IA, migrate all viable content, and transform a subset of documents

Migrate home- and top-level pages from The Home Page MVP.

- **All viable content from The Home Page MVP will be reflected on the Platform Docs MVP2 landing page:** We will be bound by the same practice-based IA, that does not follow the customer segmentation research.
- **We would not be able to thoroughly develop our Plan Initiative:** The Content/IA team does not have the subject matter expertise in isolation - we would have to rely heavily upon other VSP teams to dedicate time to working with us on content transformation.  Time spent on collaborating with other teams' ICs means time _not_ spent on developing our Q2-and-beyond plan.

## Decision

To come.
