# How-To: Access Analytics Sources 

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Disability Benefits Experience HCD**


Date: June 27, 2025

Irene Vailikit (irene.vailikit@aquia.io), Momo Miyazaki (momo@verdance.co)

## Context

The following document details how to access analytics platforms and data sources used by VA benefits portfolio to monitor products.This document was compiled by UX researchers on the Disability Benefits Crew in June 2025 to support the [UX monitoring of the 0781 Mental Health Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110224) within the 21-526EZ product.

This information will support the onboarding process of anyone looking to gain access to data in order to monitor 21-526EZ user flow and features within it.


## Platforms and Data Descriptions

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


## What is Domo?

Domo is a business intelligence platform that allows VA product teams to visualize and interact with data collected for their application from different data sources (Google Analytics (GA4), MyVA411, Medallia). 


## Requesting Access to Domo

- You can submit a __[Domo Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) ticket to see default dashboards already created.

- Note: This is **not** a request to create a specific dashboard for your team. Depending on the kind of data you want to access, you will have to put in a separate request to the team that owns that data. How to do this is detailed in the document tabs: [Google Analytics](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.d9ks0x6zmiws), [MyVA411](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.gmlrh1e6oeg9), [Medallia](https://docs.google.com/document/d/16jSN9JqAFDby8H4Ahd1s-F9hJu0xLNfu7LDU3cWxxn8/edit?tab=t.ipdxaqv1lege).


## Default Dashboards provided in Domo include information from:

- **Product Specific KPI dashboards**

  - Google Analytics Data (owned by [Platform Analytics Team](https://dsva.slack.com/archives/CKCRMLGAC))

- **Contact Center Data**

  - MyVA411 Quantitative Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))

  - Medallia Survey Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))

- **CSAT Score**

  - Medalia Survey Data (owned by [Veteran Support Team](https://dsva.slack.com/archives/CNCEXNXK4))


## Domo Dashboard Screenshots

The following are screenshots of examples of default dashboards provided in Domo that show information related to 526EZ.


### Product Specific KPI Dashboard for 526EZ

The following shows submissions, form completion, form timing and exits for 526EZ for this quarter.

- This view has the following filters applied: _Form 21-526EZ - Disability Compensation; Form 21-526EZ - Original Disability Claim_ 

- The date range applied is: _This Quarter_

_Note: Further instructions on how to use KPI Dashboards is provided in_ [_VA Platform Analytics and Insights Documentation._](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-va-gov-kpi-dashboards)

To get this view:

- Select “VA.gov Forms KPIs” in the left navigation.

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Domo%201.png?raw=true)

### MyVA411 Contact Center Data 

The following is an aggregated view of types of cases being tagged/opened by call center agents. The data comes from Salesforce. 

- This view has the following filters applied: _disability claim application_; _disability compensation_; _disability compensation overpayments_. 

- The date range applied is: _This Quarter_

To get this view:

- Select “Contact Center” in the left navigation > “Salesforce Issues MVP”

![](INSERT IMAGE)


### Medallia Intercept Survey and Feedback Survey Data 

The following is a view of both Medallia Intercept Survey data and Feedback Survey data

- This view has the following filters applied: _disability_

- The date range applied is: _This Month_

To get this view:

- Select “Contact Center” in the left navigation > “Medallia Report”

![](INSERT IMAGE)


## CSAT (Customer Satisfaction) Score Dashboard

The following is an aggregate view of how users answered [CSAT questions](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-medallia-data-in-domo#HowtouseMedalliadatainDOMO-Chartdefinitions) that are asked in both the Feedback Survey and Intercept Survey through Medallia.

- This view has the following filters applied: _every URL with 526ez in it was selected._

- The date range applied is: _This Month_

To get this view:

- Select “CSAT Score Dashboard” in the left navigation.

![](INSERT IMAGE)

# Google Analytics
_Slack channel:_ [_#vfs-analytics_](https://dsva.slack.com/archives/C1Q4294JJ)

## What is Google Analytics (GA4)?

Google Analytics is used to track user behavior on websites. It provides the data that feeds into Domo’s KPI dashboards. While Google Analytics also provides dashboards where you can visualize what is happening with your product, the Platform Analytics team prefers to feed Google Analytics data into Domo for viewing.

![](INSERT IMAGE)

Screenshot of default Google Analytics Dashboard once access to the platform is granted. This provides an overview of all_ [_VA.gov_](http://va.gov) _usage._

## Requesting Access to GA4

- Submit __[Google Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) access request

- Submitting this ticket will just allow you to see the default dashboards already available in Google Analytics. This is not a request to create a specific dashboard for your team. That will be covered in the next section. 

## Requesting Data and a Custom Dashboard

### First, write down the questions you want to answer with this data. 

It is beneficial to have a list of questions you imagine you’ll be able to answer once you have access to this. You’ll be able to share this with the Platform Analytics team and they can support you in understanding what is feasible. _Example Questions we wanted answered for our 0781 feature:_

* _How are Veterans accessing the 526? (Mobile vs. Desktop)_

* _How many claimants complete the 0781 vs. how many started the form? At what points in the flow are users abandoning the form?_ 

* _How many claimants choose to undo the process of filing the 0781, but continue to file the 526?_ 

* _Which pages or questions are users spending the most time on? (Engagement time)_

* _Which help links or supporting content are most frequently accessed?_ 

### Second, attend Platform Analytics Office Hours.

[**Platform Analytics Office Hours**](https://oddball-io.zoom.us/j/86920766098) is hosted every Tuesday and Thursday from _3:30pm - 4:00pm ET._ The team, led by Jamie Stutt will be able to deep dive with you and help you determine if you will be able to answer your questions with GA4 data. **Other helpful information:*** Join the [platform-analytics channel](https://dsva.slack.com/archives/CKCRMLGAC).

* Read [Platform Analytics documentation](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/getting-started-with-platform-analytics-insights). 

### Third, request Analytics Implementation and Domo Dashboard Creation.

- Submit an [Analytics Implementation Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=\&labels=analytics-insights%2C+analytics-request%2C+collab-cycle-review%2C+collaboration-cycle%2C+gtm\&projects=\&template=analytics-google-analytics-implementation-request-template.md\&title=Analytics+Implementation+or+QA+Support+for+%5BTeam+Name+-+Feature+Name%5D)

- See an example of [our filled out ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110901). 

- Submit a [KPI Dashboard Request in Domo](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=michelle-dooley\&labels=analytics-insights%2C+analytics-request%2C+kpi-dashboard\&projects=\&template=analytics-request-and-update-kpi-dashboard.md\&title=Analytics+New+KPI+dashboard+request+%26+KPI+dashboard+update+request+for+%5BTeam%5D)

- See an example of [our filled out ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111019).

# MyVA411
_Slack channel:_ [_#vsp-contact-center-support_](https://dsva.slack.com/archives/CNCEXNXK4)

## What is MyVA411?

MyVA411 is the VA’s main information phone line that provides information and assistance around VA resources, and runs 24/7. Every phone call is a case; case notes are provided by call agents and document the conversation.

## Prerequisites to accessing MyVA411 data

- Access to VA email, as you will need it to setup a Github account to receive the data in an email

- Access to the VA Github, as you will be requesting data through that platform

- Access to VA Sharepoint, as you will receive data via a Sharepoint link 

## Preparing to request data

When you request MyVA411 data, you will need to fill out a [Quantitative Data Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ianMcCullough-ob%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request.) form in Github. Look at the data input fields to understand how you should format your request.

* “Date Range Start/End” refers to the window of time you want to be collecting data from.

* In the “Survey URL(s), key term(s), case category or type” section use the [Case Categorization chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/contact-center/va411-categorizarion.md) (Github) to describe what  _Past data request examples:_* User Experience of the Toxic Exposure section ([#93379](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93379))

* User Experience of the 0781 Form ([#111243](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111243))_Some tips:_* There is no way to request data specifically about the paper vs. digital form. You can sometimes infer this information from the case notes.

## Requesting the data

Fill out a [Quantitative Data Request (Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ianMcCullough-ob%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request.)). Follow the instructions in the form to request the data that you need. It takes about a week for someone to fulfill the request.

![](INSERT IMAGE)

An example of MyVA411 returned data, scrubbed of PII 

## Receiving the data

The data will be sent to you via the email you included in the Github ticket (VA email). It will be a link to a spreadsheet in the VA’s Sharepoint space. Make sure to delete any PII before moving the data to a secure location outside the VA network. 
