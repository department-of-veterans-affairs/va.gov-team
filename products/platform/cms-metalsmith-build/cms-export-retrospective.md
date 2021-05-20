# CMS Export Retrospective 

## Learnings and recommendations 

_Bullets are quotes from CMS Export retrospective, but not all retro cards are quoted here._

### Thorough documentation of decisions, justification, alternatives explored, and approvers is important in any initiative. These records become more crucial on cross-team and time-boxed initiatives.

* _“Hard to find documentation about the super team itself — what decisions were made and why, what alternatives were considered and how thoroughly, etc”_
* _“Project Management changed hands, context lost”_
* _“The Super Team did not resolve in consensus between all engineers - how could that have been made clearer?_”

### Familiarize yourself with the sunk cost fallacy. Re-evaluate progress quarterly (at minimum). Actively opt in to pursuing the same solution or re-assess pivoting to potential alternatives.

* _“Felt like we had blinders on after at some point last year we hit the ‘point of no return’”_
* _“What could we have done to validate the CMS Export approach earlier on?”_

### Prioritize generating high confidence estimates of a roadmap, milestones, and level of effort. If we can’t estimate the percent of work completed/remaining with reasonable accuracy, it will be difficult, if not impossible, to assess whether a pivot is warranted.

* _“Understanding of the level of effort/complexity/time to complete (the expected timeline was consistently “six more weeks”)”_

### Consider the impact of the proposed solution on all user groups, including developers.

* _“We were really focused on the user experience of editors, and publishing time. We sacrificed the developer experience.”_
* _“The dev experience was considered in that theoretically it would be easier to maintain a few transformers if you had to modify them. But it wasn’t considered the initial creation which is a lot of effort.”_
* _“it was exhausting to do things both ways — graphQL and CMS Export.”

### All initiatives must have clear, documented responsibility and accountability across contracts and teams. All affected contracts and teams should sign off on the documented ownership.

* _“From the beginning it seems like there wasn’t a clear solution that everyone agreed on. The transformer solution was considered acceptable by some and an abomination by others.”
* _“High level team organization. There didn’t seem to be a driving force to help unite teams.”_
* _“Lots of miscommunication about who owned what (current and future states of ownership)”_
* _“Superteam was disbanded from daily standups. Should have been kept together, working across teams on daily basis.”_

### Product Owners must set technically realistic requirements given resource constraints and be willing to engage in conversations about trade offs and prioritization in good faith.

* _“Solution was expected to be implemented in 3 months, and publish time goal was under 1 minute. This was far too short, especially after it was determined to disband daily scrum. Incremental publishing was far too risky to compete in that time frame.”_
* _“It was really hard to push back on VA.”_

## Purpose of this document

This document is a resource for VA and contracting teams to learn from past experiences. It is not intended to point blame. We hope that folks will refer to these learnings moving forward, particularly for big ambitious projects that may seem difficult to break into iterative or incremental work, and for cross-contract initiatives. 

Please share this document with anyone that you think would find it useful!

## Background 

“CMS Export” was an approach for rearchitecting the content build pipeline, which publishes content from the VA.gov CMS to VA.gov. The approach is based on [Tome Sync](https://tome.fyi/docs/sub-modules/). 

For more info, check out: 

* [Documented decision for pivoting away from CMS Export](https://github.com/department-of-veterans-affairs/va.gov-team/issues/20165)
* [CMS Super Team draft charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/cms-metalsmith-build/2019-11-superteam-draft-charter.md)
* [Notes about previous and future architecture states and work distribution](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/cms-metalsmith-build/2020-01-drupal-publishing-current-future-states.md) 
* [CMS Export overview/status update from Dec 2020](https://vfs.atlassian.net/l/c/0T4A217E) 

## Timeline 

* October 2019: SuperTeam was formed with members from CMS, VSP, and VFS teams.
* November 2019: SuperTeam disbanded
* 2020: Teams worked toward implementing the CMS Export approach (CMS, then VSP, then VFS)
* February 2021: Risk was identified that existing architecture would hit scalability limits somewhere between 4k-12k nodes, and the timeline for CMS Export implementation was potentially too long to meet the short term node scalability needs.
* February 2021: Public Websites team parallelized GraphQL, significantly improving scalability of content releases [PR](https://github.com/department-of-veterans-affairs/vets-website/pull/15974).
* February 2021: Decision was made to pivot away from CMS Export approach. 
* April 2021: CMS Export retrospective met with all SuperTeam participants and key personnel from throughout the initiative.
* May 2021: This doc was created by Megan K to summarize learnings discussed in retro.
