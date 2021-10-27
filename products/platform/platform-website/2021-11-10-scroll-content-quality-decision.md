# Should we add the Scroll Content Quality linter to the Platform website?

This doc provides context to make a decision around using k15t's Scroll Content Quality plug-in to augment our Confluence-based Platform website.

_Authors:_ Liani Lye, Amy Goldman, Platform Content/IA

_Decision makers:_ Rachael Roueche, OCTO-DE Crew Chief

## Platform Documentation artifacts
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-documentation/product-outline.md)
- [Platform website](https://depo-platform-documentation.scrollhelp.site/)

## Context
```
TBE -- In 2020 Q4, the Content/IA team piloted the documentation tool Confluence for backend developer documentation.  We tested a plugin called Scroll Viewport to customize the look and feel of the site.  Now that Scroll Viewport's free trial period is over, we have to evaluate if we want to continue using Scroll Viewport as a paid customer.
```
## Paths forward
```
### Option 1 (recommended by the Content/IA team): Apply the linter

Continue to use Scroll Viewport as a paid customer.  This allows us to:

- **Customize the look and feel of our Platform Documentation:** We hypothesize that customizing the look/feel will lead to increased trust in reliability and accuracy.
  - _More detail:_ We are able to customize the site's theme, header and footer, and navigation elements -- all elements not available in "vanilla Confluence."  We are currently unable to customize the site's font, but we understand that the Scroll Viewport team will start adding that functionality in 2021 Q1.  (Kevin Hoffman, Rachael Roueche, and Liani Lye spoke to the Scroll Viewport team in Dec 2020.)
- **Have greater control over the publishing workflow:** We hypothesize that increasing publishing workflow control will allow the Content/IA team to act as a layer of quality control.
  - _More detail:_ With Scroll Viewport, there is an additional manual step between modifying Confluence pages and "publishing" them, ie making them publicly viewable.  Given the distributed nature of writing content for Platform Documentation -- multiple Platform Teams will be involved -- having the Content/IA team be in control of that manual publishing step adds a layer of quality control.
  - _Risks:_ The Content/IA team might be setting ourselves up to be bottlenecks (an IC could write a document, but it doesn't reach its intended audience on time because we didn't press "publish".)  We started a publishing workflow process during the 2020 Q4 BE docs pilot, and will be refining it in 2021 Q1, as part of our initiative, [Documentation Site — Create Confluence migration plan for VFS-facing docs #17375](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17375).
  
 _Cost considerations:_ Due to Scroll Viewport's pricing structure, increased cost may have implications on the number of editors.
```
## Decision
```
Decision made on 2021-01-29:
- Platform Documentation will continue be hosted via Confluence Cloud with the Scroll Viewport plugin.
- Confluence Data Center is an investigation that will be conducted in the future (no firm timeline), because the Content/IA team should focus on migrating The Home Page MVP per this initiative, [Migrate Homepage MVP documentation to Confluence #17060](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17060).
```
