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

Folks in the `scroll-viewport-admins` Confluence user group have publishing power.

## Paths forward

### Option 1: Include Platform PMs in the publishing workflow

#### Option 1a (recommendation): Include them _immediately_

Grant PMs publishing power right away.  This allows the us to:

- **Empower Platform teams to self-serve by creating and publishing their own docs:**  We hypothesize that allowing self-service will allow more autonomous and timely maintenance of Platform Website content.
  - _More detail:_  The need to release information on the Platform Website outweighs the need for rigorous QA and strict editorial control.  The Content Team does not have enough people power to enforce rigorous QA and strict editorial control.

_Future consequences:_
- The Content team would need to:
  - Tease apart the types of trainings we are hosting: How to audit your content, How to contribute to the PW, and now How to publish content
  - Specify the minimum quality bar; examples:
    - Using "Platform" instead of "VSP"
    - Defining when to use numbered vs bulleted lists
  - Clarity that the person who clicks the "publish" button isn't necessarily on the hook for conducting the minimum QA

#### Option 1b: Include them _later_ (perhaps mid/end of Q3)

Grant PMs publishing power _after_ we iron out all the kinks in the guidance.  This allows the us to:

- **Surface initial concerns/issues with structure or publishing guidelines before letting more people loose in the admin console**: This takes a sequential, waterfall approach to development.


### Option 2: Never have PMs be part of the publishing workflow

The Content team holds sole publishing power.  This allows us to enforce rigorous QA and maintain strict editorial control.
- _More detail:_ We would have visibility into changes being made and could flag quality/editorial concerns.  However, this comes at the expense of being a bottleneck to Platform teams' ability to write/release information to VFS teams.  To mitigate this bottleneck risk, the Content Team would have to work out and maintain a regular content “deployment” schedule, which would very likely come at the expense of future initiative work.

### Option 3: Have everyone be able to publish (raised in 5/6 sync)
- We don't know if there is a limit to the size of `scroll-viewport-admins`
- Even if someone in the Scroll Viewport admin group does accidentally change a blueprint, it doesn't have the same scope of consequences as messing up VA.gov
- 

## Decision

To come.


notes with Amy:
- PMs to do QA
  - avoiding common publishing errors re: not screwing uup someone else's stuff (workflow, COnf oreiented)
  - basics of Conf, how to use the templates, how to use spaces
  - style guide
  - not willy nilly, YOU are the point person for collaborating with us
