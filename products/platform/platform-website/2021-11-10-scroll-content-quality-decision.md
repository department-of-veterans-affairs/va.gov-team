# Should we add the Scroll Content Quality linter to the Platform website?

This doc provides context to make a decision around using k15t's Scroll Content Quality plug-in to augment our Confluence-based Platform website.

_Authors:_ Liani Lye, Amy Goldman, Platform Content/IA

_Decision makers:_ Rachael Roueche, OCTO-DE Crew Chief

## Platform Documentation artifacts
- [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/platform-documentation/product-outline.md)
- [Platform website](https://depo-platform-documentation.scrollhelp.site/)
- [More in-depth pro/con list](https://vfs.atlassian.net/wiki/spaces/~832277940/pages/1944027159/Scroll+Content+Quality+plug-in#Pros-and-cons)

## Context

In 2021 Q2, Platforms teams began contributing their own content to the Platform website.  However, because writing was distributed, there were many approaches and teams did not necessarily follow the style guide.  There were a lot of inconsistencies in the content, in terms of terminology, style, grammar, etc - all which affect the impression of the Platform as a professional VA.gov offering.  It also makes the documentation less usable, less clear, and less helpful.

We are proposing adding a linter so that teams can self-serve content maintenance and easily help ensure the overall quality of the Platform webste and the content we create for our customers. 

## Paths forward

### Option 1 (recommended by the Content/IA team): Apply the linter

Add Scoll Content Quality plug-in to the six Platform website spaces.  This allows us to:

- **Ensure terminology compliance:** We hypothsize... benefits: 1/ automated correction, instead of manual (things can fall thru gaps).  Saves time.  2/ Makes content clearer, less confusing.  3/ increases contributors' confidence in content creation.  (OCTO-DE instead of DEPO, Platform instead of VSP)

  - _Risks:_ 
  - key risks:
  - 2/ People might not actually correct the violations even through the linter calls em out.  Ppl might publish anyway.  violations do not prevent publishing.
  - 3/ does not check spelling, grammar, and sentence structure.  Would need a supplementary tool.  
  - smaller risks:
  - 5/ Divergence in rules across spaces - but rules should be the same across spaces.  Word list should be updated alongside linter.
  - 1/ Security risks - we don't know how to determine. 
  - 4/ Doesn't check casing in titles.  If we create a sentence case rule for headings, it corrects headings with numbered lists to all lowercase because it reads the number as the first character (e.g. corrects 1. Embed the image to 1. embed the image)
  
 _Cost considerations:_ Content Scroll Quality is a beta plug-in.

## Decision


