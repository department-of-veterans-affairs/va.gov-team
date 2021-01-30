# Should we use Scroll Viewport for Platform Documentation?

This doc provides context to make a decision around using Scroll Viewport to augment our Confluence-based Platform Documentation.

_Author:_ Liani Lye, Product Manager, VSP Content/IA

_Decision makers:_ Rachael Roueche, Dror Matalon, both VSP OCTODE leads

## Platform Documentation artifacts
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-documentation/product-outline.md)
- [Backend development documentaton (Platform Documentation in Confluence)](https://depo-platform-documentation.scrollhelp.site/developer-docs/)
- [May 2020 VSP Documentation Tool Solution Recommendation](https://docs.google.com/document/d/1dFsMtRUJ2nINSXWN6TOISHi79DfVRVOIaqm9ULG_5Eo/edit#heading=h.qizq3wqyrva4), which includes a recommendation for Scroll Viewport

## Context

In 2020 Q4, the Content/IA team piloted the documentation tool Confluence for backend developer documentation.  We tested a plugin called Scroll Viewport to customize the look and feel of the site.  Now that Scroll Viewport's free trial period is over, we have to evaluate if we want to continue using Scroll Viewport as a paid customer.

## Paths forward

### Option 1 (recommended by the Content/IA team): Continue using Scroll Viewport with Confluence Cloud

Continue to use Scroll Viewport as a paid customer.  This allows us to:

- **Customize the look and feel of our Platform Documentation:** We hypothesize that customizing the look/feel will lead to increased trust in reliability and accuracy.
  - _More detail:_ We are able to customize the site's theme, header and footer, and navigation elements -- all elements not available in "vanilla Confluence."  We are currently unable to customize the site's font, but we understand that the Scroll Viewport team will start adding that functionality in 2021 Q1.  (Kevin Hoffman, Rachael Roueche, and Liani Lye spoke to the Scroll Viewport team in Dec 2020.)
- **Have greater control over the publishing workflow:** We hypothesize that increasing publishing workflow control will allow the Content/IA team to act as a layer of quality control.
  - _More detail:_ With Scroll Viewport, there is an additional manual step between modifying Confluence pages and "publishing" them, ie making them publicly viewable.  Given the distributed nature of writing content for Platform Documentation -- multiple Platform Teams will be involved -- having the Content/IA team be in control of that manual publishing step adds a layer of quality control.
  - _Risks:_ The Content/IA team might be setting ourselves up to be bottlenecks (an IC could write a document, but it doesn't reach its intended audience on time because we didn't press "publish".)  We started a publishing workflow process during the 2020 Q4 BE docs pilot, and will be refining it in 2021 Q1, as part of our initiative, [Documentation Site — Create Confluence migration plan for VFS-facing docs #17375](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17375).
  
 _Cost considerations:_ Due to Scroll Viewport's pricing structure, increased cost may have implications on the number of editors.


### Option 2: Cease using Scroll Viewport, reverting to "vanilla Confluence Cloud"

Cease to use Scroll Viewport, instead using "vanilla Confluence Cloud" with no other look/feel customization plugin.

- **We will not be able to customize the look and feel of our Platform Documentation:** We will be bound to Confluence's default color scheme and navigation layout.
- **We will have to come up with an alternative process to maintain control over the publishing workflow:** Unless a page is restricted to specific viewers, published pages are viewable by the public, by default.  Doing this work is not a large decision factor in our (Content/IA's) recommendation.


### Option 3: Switch from Confluence Cloud to Data Center

_Options 3a and 3b were added during our 2021-01-29 OCTODE <> Content/IA sync._

#### Option 3a: Use vanilla Confluence Data Center

asdf


### Option 3b: Use Confluence Data Center, augmented by Scroll Viewport

asdf


## Decision

Decision made on 2021-01-29:
- Platform Documentation will continue be hosted via Confluence Cloud with the Scroll Viewport plugin.
- Confluence Data Center is an investigation that will be conducted in the future (no firm timeline), because the Content/IA team should focus on migrating The Home Page MVP per this initiative, [Migrate Homepage MVP documentation to Confluence #17060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17060).
