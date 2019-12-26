# USWDS/Foundation

| | | | |
| --- | --- | --- | --- |
|**Last Decision Made:**|Keep Foundation for grid for now| **Decision Date:** | 05/2017 |
|**Revisit Decision:**| Yes | **Revisit Date:** | 06/2017 |

**Revisit Criteria:** Once keeping Foundation with an older version of USWDS starts to create too much pain for developers, or once USWDS adds additional functionality that we need.

## Summary

We needed to reach a decision on whether or not to finish the work of stripping out Foundation.

Pros:
- It would streamline our front-end frameworks
- It would reduce bloat
- It would enable us to upgrade to the latest version of USWDS

Cons:
- It would be a huge investment of time and resources.
- It wasn't actually causing that much developer pain to continue to use Foundation.
- It might be possible to reduce bloat without having to totally remove Foundation
- USWDS didn't have all the functionality we needed out of the box.

## History

Removing Foundation from vets-website became a project our team wanted to tackle for a few reasons:
1. We wanted to remove bloat from our bundle (both in taking out Foundation and the JavaScript it relied upon)
2. It seemed unnecessary to be including 2 separate grid frameworks in our codebase (Foundation and USWDS)
3. Foundation had conflicts with the latest version of USWDS, preventing us from upgrading

Tiffany Brown (front-end dev) had been working on trying to remove Foundation from vets-website for a few months. It was a tangled problem that touched every part of Vets.gov and had cascading effects.

She left the team on Friday, May 12 with the following work:
1. The [original ticket]() that includes a ton of documentation
2. An [open PR](https://github.com/department-of-veterans-affairs/vets-website/pull/5353) 
3. [Hand-off notes]()

Tiffany got us pretty far before she left, but there was still a good amount of work left to do to complete this project.

## Decision Meeting - May 18, 2017

We set up a meeting to decide on next steps for finishing the work of stripping out Foundation.

Attendees:
- Alex Yale-Loehr (Vets.gov tech lead)
- Anne Kainic (Front-end dev)
- Jeff Balboni (Front-end dev)
- Claire Hsu (Front-end dev)
- Raquel Romano (Front-end dev)
- Ben Shyong (Front-end dev)
- Eugene Doan (Front-end dev)
- Bill Hunt

There were 2 questions we had to answer:

1. Was the work of stripping out Foundation and exclusively using USWDS worth the effort it was going to take?
2. If so, what was the best approach for doing it?

For question 1 (was the work worth the effort it would take), developers were not currently experiencing a lot of pain in having to work between USWDS and Foundation. We believed it might be possible to strip our jQuery and the Foundation JavaScript without having to remove the Foundation grid and visibility classes, the only part of Foundation we were currently using. This would take care of the bloat problem without having to go through the enormous effort of switching grid classes everywhere and fixing visual regression issues.

An additional problem with removing Foundation was that USWDS did not provide all the functionality we needed that we currently got from Foundation (small width grid classes and visibility classes). We would either have to talk to the USWDS team and figure out a way to include those things in USWDS, or write our own styles on top of it so that we could do all the same things we were doing before with Foundation. This would mean additional time and resources.

The one downside to deciding not to remove Foundation was that it seemed to conflict with the latest upgrade of USWDS. This would mean we could not keep up to date with USWDS releases.

For question 2 (what was the best approach), if we decided to remove Foundation, we had 2 possible routes to do so:
1. Have all the front-end developers devote 2-3 days of exclusively working on converting the grid classes for all the apps and content pages and get the changes merged as soon as possible. 
  - Advantages: the fastest solution to finishing this work. 
  - Disadvantages: an investment of resources and probably some pain.
2. Create a parallel set of styles that did not use Foundation, and move apps and content pages over to using the new set of styles when possible. 
  - Advantages: gives us the flexibility to migrate when we have time. 
  - Disadvantages: a lot of overhead work.

## The Decision

The short-term decision was to explore ways of not removing the Foundation grid.

There were 3 action items that came out of this decision:
1. Try removing jQuery and the Foundation JavaScript to ensure that everything continues to work without those two larger pieces of JavaScript.
2. Investigate what we miss out on by not upgrading the newest version of USWDS --> [GH issue with documentation]()
3. Talk to the 18f team about some of the features that we would need in USWDS to be able to fully use their framework (small width grid classes and visibility classes)
