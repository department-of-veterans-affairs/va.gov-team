# How-To: Access Analytics Sources 

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Disability Benefits Experience HCD**


Date: June 27, 2025

Irene Vailikit (irene.vailikit@aquia.io), Momo Miyazaki (momo@verdance.co)

# Context

The following document details how to access analytics platforms and data sources used by VA benefits portfolio to monitor products.This document was compiled by UX researchers on the Disability Benefits Crew in June 2025 to support the [UX monitoring of the 0781 Mental Health Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110224) within the 21-526EZ product.

This information will support the onboarding process of anyone looking to gain access to data in order to monitor 21-526EZ user flow and features within it.


# Platforms and Data Descriptions

- The following describes the platforms and data sources that our team was interested in gaining access to and we compiled this information based on our own research and experience by reaching out in Slack to the teams listed below, as well as reading documentation. 

- [Platform Data Sources](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/platform-data-sources) lists out information on additional data sources.

| Platform / Data Source     | What does it track?                                                                                                                                                                                                                  | Who is it useful for?                                                       | Who owns it?                                                                                                                                                        | Documentation / Support Link                                                                                                                                                        |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Domo                       | Aggregates and visualizes data of VA applications from Google Analytics, MyVA411, and Medallia into separate dashboards and allows teams to monitor trends.                                     | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | Two teams own the creation of Domo dashboards depending on the data source. Contact the team that owns the data you want to see aggregated.                         | `#vfs-analytics` (Google Analytics)<br>`#vsp-contact-center-support` (MyVA411 and Medallia)<br>VA Platform Analytics and Insights Documentation                                      |
| Google Analytics           | Tracks usability and user behavior on VA applications, such as clicks, navigation paths, and task completion.                                                                                   | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vfs-analytics`                                                                                                                                                    | VA Platform Analytics and Insights Documentation<br>VFS Analytics Canvas<br>`#platform-analytics` (collaboration channel)                                                            |
| MyVA411 Call Center Data   | Call agent case notes used to track where users encounter issues or need help with VA applications or paper forms.                                                                             | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vsp-contact-center-support`                                                                                                                                       | VA Platform Documentation – MyVA411 Data                                                                                                                                              |
| Medallia                  | Tracks user sentiment and satisfaction (CSAT) via Feedback and Intercept Surveys to identify pain points and improvement opportunities.                                                          | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vsp-contact-center-support`                                                                                                                                       | VA Platform Documentation – Medallia                                                                                                                                                  |
| Datadog                   | Monitors technical performance and reliability: errors, load times, service disruptions, and some user behavior metrics.                                                                         | Product Managers<br>Engineers<br>HCD Designers / Researchers                 | `#vfs-platform-support` (for access)<br>Application teams manage their own dashboards.                                                                               | VA Platform Documentation – Datadog<br>`#public-datadog` (collaboration channel)                                                                                                     |




# Domo
_Slack channel for general Domo access and support:_ [_#vfs-analytics_](https://dsva.slack.com/archives/C1Q4294JJ)


# What is Domo?

Domo is a business intelligence platform that allows VA product teams to visualize and interact with data collected for their application from different data sources (Google Analytics (GA4), MyVA411, Medallia). 


# Requesting Access to Domo

- You can submit a __[Domo Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) ticket to see default dashboards already created.

- Note: This is **not** a request to create a specific dashboard for your team. Depending on the kind of data you want to access, you will have to put in a separate request to the team that owns that data. How to do this is detailed in the document tabs: [Google Analytics](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.d9ks0x6zmiws), [MyVA411](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.gmlrh1e6oeg9), [Medallia](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.ipdxaqv1lege).


# Default Dashboards provided in Domo include information from:

- **Product Specific KPI dashboards**

  - Google Analytics Data (owned by [Platform Analytics Team](https://dsva.slack.com/archives/CKCRMLGAC))

- **Contact Center Data**

  - MyVA411 Quantitative Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))

  - Medallia Survey Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))

- **CSAT Score**

  - Medalia Survey Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))


# Domo Dashboard Screenshots

The following are screenshots of examples of default dashboards provided in Domo that show information related to 526EZ.


## Product Specific KPI Dashboard for 526EZ

The following shows submissions, form completion, form timing and exits for 526EZ for this quarter.

- This view has the following filters applied: _Form 21-526EZ - Disability Compensation; Form 21-526EZ - Original Disability Claim_ 

- The date range applied is: _This Quarter_

_Note: Further instructions on how to use KPI Dashboards is provided in_ [_VA Platform Analytics and Insights Documentation._](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-va-gov-kpi-dashboards)

To get this view:

- Select “VA.gov Forms KPIs” in the left navigation.
