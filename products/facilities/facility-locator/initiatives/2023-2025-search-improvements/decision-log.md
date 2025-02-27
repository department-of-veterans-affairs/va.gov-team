## Facility Locator Search Improvements Decision Log

### 2025-02-27 Priority changes due to Perigean contract end / Sitewide contract timing
https://github.com/department-of-veterans-affairs/va.gov-cms/issues/16001#issuecomment-2689051079
From UX sync: Given: 
* Perigean recruitment changes
* End of PoP upcoming 
* Potential risk to shipping both Mobile Map and Progressive Disclosure changes , with both of those in mind

Some strategic changes to our plans for these FL features.

**Mobile map / Progressive Disclosure**: 
want to move ahead toward trying to launch, and not block on research. **Next step: staging review.** Scheduling will require
    * All the artifacts (QA standards, Technical architecture, Foundational a11y testing, etc etc etc etc, check the Collab Cycle docs)
    * 4-business-day lead time for Governance to review those artifacts before Staging Review date

**Services Autosuggest:** 
* will still pursue research options, Brittany will continue on plan / convo guide as soon as mobile map artifacts are settled. 
* Study will still include Progressive Disclosure since it's a desktop/mobile research plan, just the feature will be live in prod (assuming we get to ship) while we research.

### 2025-02-18 Priority order for research: Mobile map first
Mobile map prototype is complete. While Progressive Disclosure is complete, Services autosuggest still requires some work to implement the new autosuggest component. With this in mind, and because Mobile Map already has a starting point for draft plan & conversation guide, we will prioritize Mobile Map research study during 2025 Q1. 

### 2025-01-28: Suggested results matching / weighting
Business logic that is used to order suggested results is documented in [engineering README](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/facility-locator/engineering#services-autosuggest).

### 2025-01-13: Feature groupings for research
Due to implementation details & UX questions that arose during build, Michael proposed researching the Progressive Disclosure changes, rather than shipping ([here](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/19489#issuecomment-2560084702)).

Product sync: Michelle signed off: https://dsva.slack.com/archives/C07BVDGCY8H/p1736527370365169?thread_ts=1736527133.055279&cid=C07BVDGCY8H.

Features 1 & 2, Services Autosuggest & Progressive Disclosure, will be researched and ship together. 
Feature 3, mobile map, will be researched and ship separately.

Jill to file Midpoint review request for SA+PD. Will split Mobile Map into its own Collab Cycle request. (Governance sign off in [20276 comments](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61610#issuecomment-2591335989))


### 2023-? State-level pages are out of scope
NCA had a use case for providing state-level search results. This was deemed out of scope for this initiative. We will instead provide an adjusted handling for radius in search when filtering by NCA facilities, to address the need.

Work to date is tracked in [#14915](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14915).
Design work was completed within the epic [#13792](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11542)

### 2023-09-21 Provider core training filters
Provider core training data was integrated into vets-api. 
Data shows the number of providers who have received the Veteran-specific training is less than 1%. Until the training is more common, most searches will fail to return any results meeting the criteria and this filter will be likely to introduce more confusion than usefulness. 

Front-end work is paused until training #s improve. ([Github comment](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14913#issuecomment-1729954124))


### 2024-03-31: Contract boundary > Staffing changes
Facility Locator mobile map research will pause due to contract boundary / staffing changes. 
Tickets in research epic ([#14518](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14518)) will reflect the work done, and open tickets will be prioritized when staffing is sorted and project is prioritized for next steps.
