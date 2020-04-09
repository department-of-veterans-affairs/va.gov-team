**This is a work-in-progress Data Dictionary that should be updated and migrated to the Platform folder once completed.**

# Data Dictionary
Objective: This resource defines common Google Analytics terms and provides more context on their usage within VA.gov. 

### Historical Data in Google Analytics
In November 2018, the modernized Vets.gov experience was consolidated with VA.gov as part of the Web Brand Consolidation. MyHealtheVet and eBenefits also began populating into the VA.gov Production Property in 2018, with basic pageview and session data. More granular veteran transactions on MHV and eBenefits do not exist in the VA.gov Production Property.


### How does Google Analytics measure usage and activity on VA.gov? 
- Users: Google Analytics measures users by counting activity of unique device IDs. This ID is a numeric identifier that does not contain any private veteran information. The out-of-box user metric does not deduplicate users across devices. While this is possible to dedupe users with additional configuration, the Platform Analytics & Insights team does not have this configured at this time. 

   _Example_: If I browse on a laptop and a desktop, Google Analytics counts each device as a user. 

- Sessions: Google Analytics measures activity on the site as the start of a session. A user of VA.gov (aka device) can have multiple session over a time period, but sessions will expire after 30 minutes of inactivity on the site.

_ Pageviews and Unique Pageviews: Google Analytics tracks the individual view of each page as a pageview. This includes multiple views of a page within the same session. You may also see the metric for a unique pageview. A unique pageview indicates that a page was viewed _once_ within a session, but it only increments once. 

   _Example_: In a session, a veteran visits https://www.va.gov/health-care/ to learn more about available Health Care benefits. The veteran then clicks to https://www.va.gov/health-care/eligibility/. They decide they need to look at more information and returns back to https://www.va.gov/health-care/. This is how Google Analytics would view the activity:

| Page | Pageviews | Unique Pageviews |
| -- | -- | -- |
| https://www.va.gov/health-care/ | 2 | 1 | 
| https://www.va.gov/health-care/eligibility/ | 2 | 1 |

   _How should I interpret this data?_ It's helpful to look at total pageviews to understand the engagement that content within your product area is receiving. In these reports, you can identify content that might be underperforming against your hypothesis. 
   
### How are common veteran interactions tracked?
