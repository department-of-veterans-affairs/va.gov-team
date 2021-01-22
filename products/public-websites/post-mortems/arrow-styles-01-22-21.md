# No styles applied to right arrow svg's

Date: 01/22/2020

Authors: Sandra Hallie

Status: Resolved

## What happened
For accessibility purposes, we needed to make an update to the DOM hierarchy in the `linkTeaser`. There was an `a` tag wrapping an `h3` (or `b`) header tag, which needed to be changed. We wanted the `a` tag to be rendered witin the header tag.
I, Sandra Hallie, a developer on the authenticated experience team, pushed up a PR as my team had a light sprint and I was helping out public websites.

### What went wrong
In some cases (more specifically when the `parentFieldName` is `field_spokes` in the template `linkTeaser`), we render a blue right pointing arrow next to the link. By changing the DOM hierarchy, this arrow was no longer wrapped by an `a` tag.
The arrow was dependent on the `a` tag as a parent to [receive styles that defined its `width` and `height`](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/blob/8d39616e957cb44b6664a658b2c51dca8076fe7e/packages/formation/sass/modules/_m-hub-page-link-list.scss).
The result of this was that the `height` and `width` were defaulting to 400px, the size of the svg.

## Solution
We reverted the PR.

### What went right
We found the issue the evening of the deploy, identified the issue, and pushed up a revert PR within minutes. Since we caught the issue late in the evening (around 11PM EST), the fix went out with an off-scheduled deploy in the morning around 10.30AM EST.
No functionality was broken due to this PR, it was a styling problem.

### Lessons
1. Some elements of static pages rely on fragile css selectors. These specific css selectors might be easily overlooked by developers who are not familiar with this part of the codebase. Styles can break after changing the DOM hierarchy.
2. Developers who don't usually work on the public website's pages might not know how to find all the pages affected by a change to a template.

### Timeline (EST)
- 3:42pm Production deploy went live, arrows lost their set `height` and `width`
- ~10:58pm Issue was found through manual testing
- ~11.15pm Revert PR was pushed up
- ~9:45am Pull Request was merged into Master
- 10:25pm off-schedule deploy was requested and initiated
- 10:40am Production deploy of fix went live, arrows received their previous styling
