# No styles applied to right arrow svg's

Date: 01/22/2020

Authors: Sandra Hallie, Nick Sullivan

Status: Resolved

## What happened
The Public Websites team was lended extra engineering support by a fellow VSA team, the Authenticated Experience, due to some extra bandwidth in the latter team's sprint. Issues were pulled from the Public Websites backlog, many of which describing changes to code that had not been visited in quite some time.

An [issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3556) was assigned for a benefit to the website's accessibility on a common component - the "link teaser." This issue called for a change to the HTML written in a CMS template. An Authenticated Exp engineer opened a [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/15698) implementing the change, which was reviewed by Public Websites and then merged into the vets-website main branch. The vets-website daily deployment was delayed due to unrelated cirumstances, so this change was deployed at roughly 5:30 PM ET.

At roughly 11 PM ET, a team member at DSVA raised a visual issue on the benefit hub landing pages. The "right arrow" icons that appear at the end of each "link teaser" were appearing very large on the page. The team quickly identified this as a visual regression that resulted as an unintended side effect of the change described above. The team opened a PR to revert the change, which was merged and deployed to production the following morning.

### What went wrong
In some cases (more specifically when the `parentFieldName` is `field_spokes` in the template `linkTeaser`), we render a blue right pointing arrow next to the link. By changing the DOM hierarchy, this arrow was no longer wrapped by an `a` tag.
The arrow was dependent on the `a` tag as a parent to [receive styles that defined its `width` and `height`](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/8d39616e957cb44b6664a658b2c51dca8076fe7e/packages/formation/sass/modules/_m-hub-page-link-list.scss).
The result of this was that the `height` and `width` were defaulting to 400px, the size of the svg.

## Solution
We identified and reverted the PR, then executed a deployment in the morning.

### What went right
- We found the issue the evening of the deploy, identified the issue, and pushed up a revert PR within minutes. Since we caught the issue late in the evening (around 11PM EST), the fix went out with an off-scheduled deploy in the morning around 10.30AM EST.
- No functionality was broken due to this PR, it was a styling problem.

### Lessons
1. Some style rules are very tightly coupled to a certain HTML structure and used in several places on the site. This can easily lead to unseen side effects when changes (that otherwise appear to be simple) are made. 
1. Developers who don't usually work on the Public Website's area of the website might not know how to find all the pages affected by a change to a template.

#### Action items
- [ ] Brainstorm tooling and strategies for evaluating visual regressions - https://github.com/department-of-veterans-affairs/va.gov-team/issues/18869
- [ ] Potentially (but not as an official assigned task) consider revisiting and rewriting the [style for the "link teasers"](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/8d39616e957cb44b6664a658b2c51dca8076fe7e/packages/formation/sass/modules/_m-hub-page-link-list.scss) to use that [standard code conventions](https://design.va.gov/components/#adding-variants) defined by our design system.


### Timeline (EST)
- ~5:30pm Production deploy went live, arrows lost their set `height` and `width`
- ~10:58pm Issue was found through manual testing
- ~11.15pm Revert PR was pushed up
- ~9:45am Pull Request was merged into Master
- 10:25pm off-schedule deploy was requested and initiated
- 10:40am Production deploy of fix went live, arrows received their previous styling
