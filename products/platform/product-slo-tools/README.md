# Product/Service SLO Tools

## Problem Statement

We currently don't have SLO-culture, in order to data-drive decisions we need SLOs defined

## Risks

## Proposed Solution


## Alternatives

- datadog
- home-rolled dashboard

## Assumptions

The Googly way

- service or product? pick one? define a glossary?
- servie is some code that's compiled & released on networked infra that users access via the web

Maturity level could be:

- greenfield with no current deploys
- system in prod w/ some monitoring (no formal objectives/error budget/100% goal)
- running deployment w/ SLO below 100% w/o common understanding on how to leverage (SLO w/o teeth)


State needs to see true for:

- SLOs are present and all stakeholders approve for the product
- People are responsible for ensuring service agree its possible to meet SLO
- Organization commits to using error budget for decision making/priotizing (formalize this)
- Process in place for refining the SLO

Risk: SLO compliance is simply another KPI or metric that's not a decision-making tool

> Even if you could achieve 100% reliability within your system, your customers would not experience 100% reliability. The chain of systems between you and your customers is often long and complex, and any of these components can fail.3 This also means that as you go from 99% to 99.9% to 99.99% reliability, each extra nine comes at an increased cost, but the marginal utility to your customers steadily approaches zero.

>  it needs to be owned by someone in the organization who is empowered to make tradeoffs between feature velocity and reliability.

> While many numbers can function as an SLI, we generally recommend treating the SLI as the ratio of two numbers: the number of good events divided by the total number of events. For example:

    
Choose one application for which you want to define SLOs. If your product comprises many applications, you can add those later.
    
Decide clearly who the “users” are in this situation. These are the people whose happiness you are optimizing.
    
Consider the common ways your users interact with your system—common tasks and critical activities.
    
Draw a high-level architecture diagram of your system; show the key components, the request flow, the data flow, and the critical dependencies. Group these components into categories listed in the following section (there may be some overlap and ambiguity; use your intuition and don’t let perfect be the enemy of the good).


- [ ] templates for SLIs that we suggest using for products that make sense in our realm
  - [ ] numerator, denominator, threshold
- [ ] what's our feedback loop look like?
- [ ] where does this live in the product onboarding cycle & collaboration cycle?
- [ ] how do we enforce/adopt decision-by-data design?
