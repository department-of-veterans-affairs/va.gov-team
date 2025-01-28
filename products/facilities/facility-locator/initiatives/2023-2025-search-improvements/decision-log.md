## Facility Locator Search Improvements Decision Log

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
