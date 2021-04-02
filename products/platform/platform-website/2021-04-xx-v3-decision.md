# WORK IN PROGRESS

# What would "V3" look like at the end 2021 Q2?

This doc provides context to make a decison around the scope of our Platform Website V3.

_Author:_ Liani Lye, Platform Team: Content/IA

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

All options would be paired with deprecating the Home Page MVP, described in this ["How do we deprecate the Home Page in tandem with building out "V3?"" decision](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/2021-04-xx-deprecate-homepage-decision.md).

followed by the release plan outlined in [Platform Website — Migrate Homepage MVP documentation to Confluence: Release plan#17376](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/17376).

### Option 1: Deprecate the Home Page MVP -after- we have created a Platform Website with multiple content sources - targeting end-of-April

#### Option 1a (recommended by the Content Team): Move V2's "Designer landing page" and distribute all V1 content amongst V3 content sources

Outcome: The V3 portal page will reflect multiple content sources, all which contain content.

We hypothesize that providing multiple content sources will allow team members across a single VFS team to have a comprehensive Platform Website reading experience.

Steps:
1. Move the [V2 designer landing page](https://va-platform-docs.scrollhelp.site/getting-started/Designer-guide.970654156.html) to [V3's](https://va-platform-docs.scrollhelp.site/index.html) "Research and Design" content source.
2. Break up the [V1 Backend development documentaton](https://depo-platform-documentation.scrollhelp.site/developer-docs/) into the appropriate [V3](https://va-platform-docs.scrollhelp.site/index.html) content sources. 
3. Add redirect verbiage to the Home Page MVP.


#### Option 1b: Move V2's "Designer lading page" into a single V3 "Research and Design" content source

Outcome: The V3 portal page will reflect a single content sources.

Steps:
1. Move the [V2 designer landing page](https://va-platform-docs.scrollhelp.site/getting-started/Designer-guide.970654156.html) to [V3's](https://va-platform-docs.scrollhelp.site/index.html) "Research and Design" content source.
2. Break up the [V1 Backend development documentaton](https://depo-platform-documentation.scrollhelp.site/developer-docs/) into the appropriate [V3](https://va-platform-docs.scrollhelp.site/index.html) content sources. 
3. Make sure we have accounted for all links from the Home Page MVP, in V3.  
4. Add redirect verbiage to the Home Page MVP.


### Option 2: Deprecate the Home Page MVP, without any redirection to the Platform Website

After looking at the Home Page MVP's usage data, we cannot confirm that _no one_ uses the site.  

We hypothesize that leaving the Home Page MVP live until we are able to direct to the Platform Website will minimize the possibility that customers cannot find the information they need.

## Decision

To come.
