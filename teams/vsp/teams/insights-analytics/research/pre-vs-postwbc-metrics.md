#### Objective: 
- Leadership seeks accurate data reflecting pre- vs. post-WBC performance

#### Pain Points:
- Pre-WBC metrics were not collected within the same Google Analytics property.
- Metrics used across Modernized vs. legacy brands may have not used the same methodology.

#### Analytics-Insights Recommendations
- We recommend utilizing a 13-month trendline as we have data from November 2018-onward in the brand-consolidated Google Analytics property

| Metric | Pre-WBC (Vets.gov, MHV, eBenefits, Other Legacy VA.gov Content) | Post-WBC VA.gov | 
| --- | --- | --- | 
| Users | **Deduplication is not possible with former Google Analytics structure** <br>- eBenefits, MHV, Modernized, and other parts of VA.gov were measured in separate Google Analytics properties, so these users cannot be deduped to understand what a true, unique count is" | eBenefits, MHV, Modernized, and other parts of VA.gov are measured together and will de-dupe users navigating across these sections of the site |
| Pageviews | **Deduplication is not an issue with reporting aggregate pageviews <br> - Reports Vets.gov aggregate pageviews <br>- Have access to eBenefits pageviews via their reporting property <br>- Do not have access to MHV pageviews | - Depending on the requirements, we can report either pageviews to Modernized sections only OR report on VA.gov in aggregate |
| Logins | - Measures logins to Modernized tools via ID.me, MHV, and DSLogon on Vets.gov <br> - Analytics-Insights did not configure tracking to capture logins for users authenticating on MHV or eBenefits; we could review the unique pageviews to the authenticated dashboard to approximate logins | - Tracking logins to Modernized tools via ID.me, MHV, and DSLogon on VA.gov <br> - Similar to pre-WBC, Analytics-Insights did not configure tracking to capture logins for users authenticating on MHV or eBenefits post-WBC | 
| Claims Views | - Tracking was in place to measure claim views on Vets.gov <br> - Claims views for eBenefits was in place for 1 month before the brand consolidation within the core VA.gov Google Analytics property; we have access to a separate eBenefits Google Analytics property for any data before October 2018 | - When using the "VA.gov - All Production" view, we are pulling eBenefits and Modernized claims views <br> - eBen claims views were deprecated beginning June 2019 |
| Customer Satisfaction | Nothing that separates pre-WBC from post. We have been using the question "Did you notice the redesign" to distinguish between CSAT for pre- and post-WBC, but it's not a healthy 1:1. | |
