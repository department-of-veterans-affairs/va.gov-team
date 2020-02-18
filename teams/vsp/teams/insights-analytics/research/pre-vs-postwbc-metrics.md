# VA.gov Reporting Standards

### Objective: 
Provide accurate data reflecting pre- vs. post-WBC performance

### Pain Points:
- Pre-WBC metrics were not collected within the same Google Analytics property.
- Metrics used across Modernized vs. legacy brands may have not used the same methodology.
- Visualizing pre- vs. post-WBC can show large, misleading differences due to the differences in data collection methods

### Analytics-Insights Recommendations
**We recommend utilizing a 13-month trendline as we have data from November 2018-onward in the brand-consolidated Google Analytics property**
- This visualization would show a year's worth of VA.gov data for historical trends while also including the same month in the previous year for comparison
- Due to the analysis below, we recommend only providing pre- vs. post-WBC comparisons on a case-by-case basis
- For direct historical comparison requests, we recommend the previous comparison month begin November 2018

| Metric | Pre-WBC (Vets.gov, MHV, eBenefits, Other Legacy VA.gov Content) | Post-WBC VA.gov | 
| --- | --- | --- | 
| Users | **Deduplication is not possible with former Google Analytics structure** <br>- eBenefits, MHV, Modernized, and other parts of VA.gov were measured in separate Google Analytics properties, so these users cannot be deduped to understand what a true, unique count is" | eBenefits, MHV, Modernized, and other parts of VA.gov are measured together and will de-dupe users navigating across these sections of the site |
| Pageviews | **Deduplication is not an issue with reporting aggregate pageviews <br> - Reports Vets.gov aggregate pageviews <br>- Have access to eBenefits pageviews via their reporting property <br>- Do not have access to MHV pageviews | - Depending on the requirements, we can report either pageviews to Modernized sections only OR report on VA.gov in aggregate |
| Logins | - Measures logins to Modernized tools via ID.me, MHV, and DSLogon on Vets.gov <br> - Analytics-Insights did not configure tracking to capture logins for users authenticating on MHV or eBenefits; we could review the unique pageviews to the authenticated dashboard to approximate logins | - Tracking logins to Modernized tools via ID.me, MHV, and DSLogon on VA.gov <br> - Similar to pre-WBC, Analytics-Insights did not configure tracking to capture logins for users authenticating on MHV or eBenefits post-WBC | 
| Claims Views | - Tracking was in place to measure claim views on Vets.gov <br> - Claims views for eBenefits was in place for 1 month before the brand consolidation within the core VA.gov Google Analytics property; we have access to a separate eBenefits Google Analytics property for any data before October 2018 | - When using the "VA.gov - All Production" view, we are pulling eBenefits and Modernized claims views <br> - eBen claims views were deprecated beginning June 2019 |
| Customer Satisfaction | Nothing that separates pre-WBC from post. We have been using the question "Did you notice the redesign" to distinguish between CSAT for pre- and post-WBC, but it's not a healthy 1:1, and given that we are >1 year post-WBC, this question may be irrelevant | |

### Data Request Standards
In order to provide more accurate reporting, we will be asking the following questions for a better data framework. To expedite the process, we recommend sending VSP Analytics & Insights responses for these questions:

- Who is your audience?
- Why do you need this data?
- What are you hoping to find?
- What is your hypothesis that you're hoping the data will support?
- What timeframes are you looking to analyze (e.g. before vs. after)?
- What area of the VA are you hoping to assess?
- How frequently do you need this data? 
