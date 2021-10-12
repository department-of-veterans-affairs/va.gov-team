----

# We're moving our docs! 
### Find [more information about this topic](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Google-Analytics.1877999672.html#GoogleAnalytics-TrainingResources) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Google Analytics Tracking Overview
Objective: This resource defines common Google Analytics terms and provides more context on their usage within VA.gov. 

### How do I view data for a particular area of the site? 

#### All VA.gov Data
To see users, sessions, and pageviews for all Modernized, MyHealtheVet, eBenefits and other parts of the VA.gov site, the "All VA.gov Production" View aggregates activity across these sections of the site. There are several subdomains and subdirectories that have not been fully implemented onto the same VA.gov Google Analytics property.

#### All Modernized Data
To see data to only the Modernized content of VA.gov, there is a "WBC Modernized View" in Google Analytics. This allows you to see activity across all the Modernized content and veteran-facing products on the site. 

Goals are configured in this view, but there is a limitation of only 20 views. For deeper product analysis and additional goals, you can view goals for each Modernized product suite, like Health Care Modernized, Disability Modernized, etc.

#### Historical Data for MHV, eBenefits, and Vets.gov
MyHealtheVet and eBenefits began populating into the VA.gov Production Property in mid-2018, with basic pageview and session data. In November 2018, the modernized Vets.gov experience was consolidated with VA.gov as part of the Web Brand Consolidation.
 
Data before November 2018 for VA.gov, MHV, and eBenefits does not exist within the same VA.gov property, though it may be collected in other Google Analytics properties that are not within the VSP Analytics & Insights team's control. 

[View a list of VA.gov Views](google-views.md)

### How does Google Analytics measure usage and activity on VA.gov? 
- Users: Google Analytics measures users by counting activity of unique device IDs. This ID is a numeric identifier that does not contain any private veteran information. The out-of-box user metric does not deduplicate users across devices. 

While this is possible to dedupe authenticated users with additional configuration, the Platform Analytics & Insights team does not have this configured at this time. 

   _Example_: If a veteran browses on their laptop and then on a desktop, Google Analytics counts each device as a user. 

- Sessions: Google Analytics measures activity on the site as the start of a session. A user of VA.gov (aka device) can have multiple session over a time period, but sessions will expire after 30 minutes of inactivity on the site.

- Pageviews and Unique Pageviews: Google Analytics tracks the individual view of each page as a pageview. This includes multiple views of a page within the same session. You may also see the metric for a unique pageview. A unique pageview indicates that a page was viewed _once_ within a session, but it only increments once. 

   _Example_: In a session, a veteran visits https://www.va.gov/health-care/ to learn more about available Health Care benefits. The veteran then clicks to https://www.va.gov/health-care/eligibility/. They decide they need to look at more information and returns back to https://www.va.gov/health-care/. This is how Google Analytics would view the activity:

| Page | Pageviews | Unique Pageviews |
| -- | -- | -- |
| https://www.va.gov/health-care/ | 2 | 1 | 
| https://www.va.gov/health-care/eligibility/ | 2 | 1 |

   _How should I interpret this data?_ It's helpful to look at total pageviews to understand the engagement that content within your product area is receiving. In these reports, you can identify content that might be underperforming against your hypothesis. 
   
### How are common veteran interactions tracked?

- Clicks on Navigation Elements
- Scroll Depth
- Form Submissions and Other Veteran Interactions

### What custom dimensions and metrics do we have configured?

 - [Custom Dimensions](google-custom-dimensions.md)
 - [Custom Metrics](google-custom-metrics.md)
 
 ### Where can I find answers to common reporting questions?
 
  - View our [Frequently Asked Questions](google-frequently-asked-questions.md)
 
