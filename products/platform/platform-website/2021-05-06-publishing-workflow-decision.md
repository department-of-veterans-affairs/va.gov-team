# Should Platform PMs be a part of Platform Website publishing workflow?

This doc provides context to make a decison around _including or excluding_ Platform PMs in the Platform Website's publishing workflow.

_Authors:_ Liani Lye, Platform Team: Content/IA

_Decision maker:_ Rachael Roueche, Platform OCTO-DE lead


## Platform Documentation artifacts

- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/platform-website-product-outline.md)
- Platform Website links
    - [Public site](https://depo-platform-documentation.scrollhelp.site/index.html)
    - [Scroll Viewport admin console](https://vfs.atlassian.net/wiki/plugins/servlet/ac/com.k15t.scroll.scroll-viewport/k15t-vpc-overview-page)
- This rec is for the [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23799) called "Publish guidelines re: how to contribute to the Platform Website (Develop guidelines)"
  - The ticketed work is part of the 2021 Q2 ["Develop guidelines" initiative](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22190): Platform Website — Develop migration, publishing, and maintenance guidelines for Platform Teams #22190


## Context

In 2021 Jan, [OCTO-DE and the Content Team decided to use Scroll Viewport](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/2021-01-29-scroll-viewport-decision.md#option-1-recommended-by-the-contentia-team-continue-using-scroll-viewport-with-confluence-cloud) to, in part, maintain greater control over the publishing workflow.

Now, the Content Team is explaining the Confluence and Scroll Viewport publishing workflow in our [Create a new Platform website page](https://vfs.atlassian.net/wiki/spaces/~369451595/pages/1397194792/Create+a+new+Platform+website+page) guidance.  A section of the guidance outlines how to turn a draft page into a publicly viewable one on the Platform Website (aka the act of "publishing," which is a sub-step of the publishing workflow).  

To finish writing publishing instructions, we need to determine who on the Platform is able to publish documents.

## Paths forward

### Option 1: Include Platform PMs in the publishing workflow

#### Option 1a (recommendation): Include them _immediately_

Add PMs to the `scroll-viewport-admins` Confluence user group right away.  This allows the us to:

they don't have to act as publishers immediately, tthey can have a transition period

- **Empower Platform teams to self-serve by creating and publishing their own docs:**  We hypothesize that...
  - Content Team not a bottleneck, faster maintenance of Platform Website

Considerations
- We'd have to do additional trainings with the PMs, esp since we said that we wanted to greater control over the publishing workflow in the [2021 Jan Scroll Viewport rec](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-website/2021-01-29-scroll-viewport-decision.md)
- We'd have to be specific about where draft pages can live so they don't get mixed up

the need to have things out quickly outweighs the need for editorial control
we don't have enough people on the content team to be super rigorous about qa and editorial control


before we have specific training, we'd have to tune the dial of 
we'd have to set the bar for minimum - Platform instead of VSP, are the numbers actaully sequential or should we have a bullet list
the person who hits teh "SVP publish button" isn't necesary the person who does the QA

- Pros: as soon as teams have their guidelines, they can be self-sufficient in creating and publishing their docs
- Cons: Our IA and guidelines are still incomplete/rough around the edges. Letting a bunch of publishers in ASAP might be a little chaotic


#### Option 1b: Include them _later_ (perhaps mid/end of Q3)

Add PMs to the `scroll-viewport-admins` Confluence user group after we go through a few reps with the guidance.  This allows the us to:

- **Surface initial concerns/issues with structure or publishing guidelines before letting more people loose in the admin console**: We hypothesize 
- Cons: teams have to wait to be fully self-service for (incomplete sentence)

### Option 2: Never have PMs be part of the publishing workflow

- Pros: Not many… Content team would have visibility into changes being made and could flag quality/editorial concerns 
- Cons: Teams can’t self-serve to publish. We could be a bottleneck. We’d have to work out a regular content “deployment” schedule and support it (e.g., someone from our team publishes daily at 3PM)


## Decision

To come.


notes with Amy:
- PMs to do QA
  - avoiding common publishing errors re: not screwing uup someone else's stuff (workflow, COnf oreiented)
  - basics of Conf, how to use the templates, how to use spaces
  - style guide
  - not willy nilly, YOU are the point person for collaborating with us
