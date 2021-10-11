----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/Google-Analytics-Data-Dictionary.1810464912.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

## Tracking Common User Interactions
As you begin building your product, you may have questions about what types of interactions are already tracked and what might need to be customized for your product. The VSP Analytics-Insights team looks for ways to ensure very common user interactions are tracked globally. 

This resource outlines common site interactions that should not require further customization by your product team. 

_Audience for this Resource_: Product Owners and Engineers

### How are these organized in Google Analytics?
Google Analytics defines user interactions as **events**, and uses a hierarchy of Event Category, Event Action, and Event Label. To access Event tracking in the Modernized areas of VA.gov, please visit the [Top Events report in Google Analytics.](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p184624291/_u.dateOption=last30days/)

These are the broad Event Categories you will find in Google Analytics:

- **Interactions:** The user clicks on some UI element to interact with our site but does not result in a call to a back-end system.
- **Transactions:** These represent a successful self-service action that is considered a "conversion." These should be the "end goal" actions of each VA.gov product. Using a separate category allows us to take a site-wide picture of transaction volume and trends in a simple manner.
- **Sign-on:** The user takes some action related to their profile (logging in, registering, etc.).
- **API Calls:** The front-end submits something (a form's content, etc.) on behalf of a user to the VA.gov API but does not represent a successful conversion.
- **Internal:** For tracking items of interest of the VA.gov team but not directly about external users.

### Common User Interactions
Many basic Interactions are tracked within Google Analytics. Common elements that are already configured include: 

| User's Activity | Google Analytics Event Category | Google Analytics Event Action |
| --- | --- | --- |
| Downloading a PDF, Spreadsheet or Image File | Interactions | Event Action begins with "PDF Downloaded - ", "Spreadsheet Downloaded - ", or "Image Downloaded" | 
| Clicks to Non-VA.gov links, including email addresses, phone numbers, and other external sites | Interactions | Event Action begins with "Outbound Link Clicked - " |
| Signing onto the Modernized tools | Sign-on | Login - vagovprod | 

#### Design System Components
There are several common navigation elements that use the [Design System components](https://design.va.gov/components). We'll continue building this library with the components and matching Google Analytics navigation elements. These elements will require additional dataLayer code within the front-end. 

