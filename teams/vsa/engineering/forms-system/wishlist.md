# Wish List
Things we would like to become items in a visible backlog.

## Visible Backlog (Transparency)
Visible backlog of VAFS/RJSF items in VSP that VSA developers can see so that we have transparency into what is known and not known as far as defect, features, workarounds, etc. WHEN or IF we get any of these improvements is a totally different story, but we at least need to keep track of the issues so that we don't keep stepping into them. Specifically for Forms, we would like to make known issues [defects, feature requests, known limits, etc] more transparent.
- Need clear guidelines on where VSA developers can view or search for items in the backlog so that we can to keep up with status, prevent duplication, know to check there first rather than asking in Slack over and over again. 
- Need clear guidelines on how VSA developers can *quickly* get draft items into the backlog (PBI candidates) so that we know that ideas, problems, or requests that were raised in Slack are being captured rather than lost. 
- When we get into the how/solutioning, VSA developers would be expected to work with VSP (joint effort, not something that would be expected to be handed down).

## VAFS/RJSF Community
VAFS is essentially open-source created by developers working on vets.gov (now va.gov). We need to identify and build a community of developers across VSP, VSA, VFS, etc. to
- improve existing understanding of the library
- as users (stakeholders) of the library, provide feedback
- as open source community users, contribute to the codebase
- assist with that backlog (especially if the forms system does 90% of what they need but need developer resouces to do the 10% that the forms library isn't providing)
- have a list of developers "VAFS forms experts" who can assist in the design process (such the VSP Design Review process)

## Document formConfig Options
Documentation on *formConfig* options such as *hideIf, hideOnReview, hideOnReviewIfFalse, updateFormData, updateSchema, expandUnder* (including limitations we have run into with *hideIf/expandIf*, and why).

## Assessment of Forms
(This might be VSA analysis but could involve non-VSA developers who historically know the other forms.)
Would like to have an empirical analysis that summarizes *all the forms* we have built in va.<span/>gov so far and identify what patterns we are using. For example, forms 2346, 526EZ, 686, 686c-674, 996 are listed under [src/applications/disability-benefits](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/disability-benefits). Are 80% just out-of-the box, and 20% special cases? Would like to know which ones are special, and for those special cases, what implementation patterns were used. This may help answer questions such as, "team X has done N number forms with no issues, why is team Y having issues right now?"

## Catalog Tool
A visual design-oriented catalog (test patterns, design palettes, shiowcase site, etc.) that shows the forms components integrated on test pages (100% traceability). Right now we have many of the components documented, but they are just statically listed in isolation.

## Prototyping Tool
A live playground or visual sandbox feature similar to the [one for the original RSFJ](https://rjsf-team.github.io/react-jsonschema-form/).