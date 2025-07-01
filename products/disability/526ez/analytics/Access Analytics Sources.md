# How-To: Access Analytics and Data Sources 

**Office of the CTO - Digital Experience, 526EZ, Disability Benefits Experience HCD**


Date: June 27, 2025

Irene Vailikit (irene.vailikit@aquia.io), Momo Miyazaki (momo@verdance.co)

## Jump to
* [Context](#Context)

* [Platforms and Data Descriptions](#Platforms-and-Data-Descriptions)
  
* [Domo](#Domo)

* [Google Analytics (GA4)](#Google-Analytics)

* [MyVA411](#MyVA411)

* [Medallia](#Medallia)

* [Datadog](#Datadog)


## Context

The following document details how to access analytics platforms and data sources used by VA benefits portfolio to monitor products.This document was compiled by UX researchers on the Disability Benefits Crew in June 2025 to support the [UX monitoring of the 0781 Mental Health Form](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110224) within the 21-526EZ product.

This information will support the onboarding process of anyone looking to gain access to data in order to monitor 21-526EZ user flow and features within it.


## Platforms and Data Descriptions

- The following describes the platforms and data sources that our team was interested in gaining access to and we compiled this information based on our own research and experience by reaching out in Slack to the teams listed below, as well as reading documentation. 

- [Platform Data Sources](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/platform-data-sources) lists out information on additional data sources.

| Platform / Data Source     | What does it track?                                                                                                                                                                                                                  | Who is it useful for?                                                       | Who owns it?                                                                                                                                                        | Documentation / Support Link                                                                                                                                                        |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Domo                       | Aggregates and visualizes data of VA applications from Google Analytics, MyVA411, and Medallia into separate dashboards and allows teams to monitor trends.                                     | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | Two teams own the creation of Domo dashboards depending on the data source. Contact the team that owns the data you want to see aggregated.                         | `#vfs-analytics` (Google Analytics)<br>`#vsp-contact-center-support` (MyVA411 and Medallia)<br>VA Platform Analytics and Insights Documentation                                      |
| Google Analytics           | Used to track usability and user behavior on VA applications, such as clicks, navigation paths, and completion of tasks.                                                                                   | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vfs-analytics`                                                                                                                                                    | VA Platform Analytics and Insights Documentation<br>VFS Analytics Canvas<br>`#platform-analytics` (collaboration channel)                                                            |
| MyVA411 Call Center Data   | Case notes are provided by call agents and  are used to track where users encounter issues or need assistance with VA applications or paper forms. Users may call about both the online and paper version of the form.                                                                             | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vsp-contact-center-support`                                                                                                                                       | VA Platform Documentation – MyVA411 Data                                                                                                                                              |
| Medallia                  | Used to track user sentiment and satisfaction (CSAT) with VA applications. It is captured via Feedback Surveys (users have the option to provide feedback on every page) and Intercept Surveys (users are randomly prompted to fill out a survey) to identify pain points and opportunities for improvement.                                                          | Product Managers<br>Product Owners<br>HCD Designers / Researchers            | `#vsp-contact-center-support`                                                                                                                                       | VA Platform Documentation – Medallia                                                                                                                                                  |
| Datadog                   | Datadog monitors the technical performance and reliability of systems, as well as some key performance indicators for user behaviors. It detects errors, slow load times, service disruptions, and tracks certain classifications of user choices.                                                                         | Product Managers<br>Engineers<br>HCD Designers / Researchers                 | `#vfs-platform-support` (for access)<br>Application teams manage their own dashboards.                                                                               | VA Platform Documentation – Datadog<br>`#public-datadog` (collaboration channel)                                                                                                     |




# Domo
_Slack channel for general Domo access and support:_ [_#vfs-analytics_](https://dsva.slack.com/archives/C1Q4294JJ)


## What is Domo?

Domo is a business intelligence platform that allows VA product teams to visualize and interact with data collected for their application from different data sources (Google Analytics (GA4), MyVA411, Medallia). 


## Requesting Access to Domo

- You can submit a [Domo Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) ticket to see default dashboards already created.

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

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Domo%201.png)

### MyVA411 Contact Center Data 

The following is an aggregated view of types of cases being tagged/opened by call center agents. The data comes from Salesforce. 

- This view has the following filters applied: _disability claim application_; _disability compensation_; _disability compensation overpayments_. 

- The date range applied is: _This Quarter_

To get this view:

- Select “Contact Center” in the left navigation > “Salesforce Issues MVP”

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Domo%202%20Contact%20Center.png)


### Medallia Intercept Survey and Feedback Survey Data 

The following is a view of both Medallia Intercept Survey data and Feedback Survey data

- This view has the following filters applied: _disability_

- The date range applied is: _This Month_

To get this view:

- Select “Contact Center” in the left navigation > “Medallia Report”

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Domo%203%20Medallia.png)


## CSAT (Customer Satisfaction) Score Dashboard

The following is an aggregate view of how users answered [CSAT questions](https://depo-platform-documentation.scrollhelp.site/analytics-monitoring/how-to-use-medallia-data-in-domo#HowtouseMedalliadatainDOMO-Chartdefinitions) that are asked in both the Feedback Survey and Intercept Survey through Medallia.

- This view has the following filters applied: _every URL with 526ez in it was selected._

- The date range applied is: _This Month_

To get this view:

- Select “CSAT Score Dashboard” in the left navigation.

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Domo%204%20CSAT.png)

# Google Analytics
_Slack channel:_ [_#vfs-analytics_](https://dsva.slack.com/archives/C1Q4294JJ)

## What is Google Analytics (GA4)?

Google Analytics is used to track user behavior on websites. It provides the data that feeds into Domo’s KPI dashboards. While Google Analytics also provides dashboards where you can visualize what is happening with your product, the Platform Analytics team prefers to feed Google Analytics data into Domo for viewing.

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Google%20Analytics%20Full.png)

Screenshot of default Google Analytics Dashboard once access to the platform is granted. This provides an overview of all [_VA.gov_](http://va.gov) usage.

## Requesting Access to GA4

- Submit [Google Analytics](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) access request

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

[**Platform Analytics Office Hours**](https://oddball-io.zoom.us/j/86920766098) is hosted every Tuesday and Thursday from _3:30pm - 4:00pm ET._ The team, led by Jamie Stutt will be able to deep dive with you and help you determine if you will be able to answer your questions with GA4 data. 

**Other helpful information:**

* Join the [platform-analytics channel](https://dsva.slack.com/archives/CKCRMLGAC).

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

* User Experience of the 0781 Form ([#111243](https://github.com/department-of-veterans-affairs/va.gov-team/issues/111243))

_Some tips:_

* There is no way to request data specifically about the paper vs. digital form. You can sometimes infer this information from the case notes.

## Requesting the data

Fill out a [Quantitative Data Request (Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ianMcCullough-ob%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request.)). Follow the instructions in the form to request the data that you need. It takes about a week for someone to fulfill the request.

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/MyVA411%20Examples.png)

An example of MyVA411 returned data, scrubbed of PII 

## Receiving the data

The data will be sent to you via the email you included in the Github ticket (VA email). It will be a link to a spreadsheet in the VA’s Sharepoint space. Make sure to delete any PII before moving the data to a secure location outside the VA network. 

# Medallia
_Slack channel:_ [_#vsp-contact-center-support_](https://dsva.slack.com/archives/CNCEXNXK4)

## What is Medallia data?

Medallia is experience management software that the VA uses to get feedback on their digital products. This feedback is captured in two ways: Feedback Surveys (users have the option on every page to actively provide feedback) and Intercept Surveys (users are randomly prompted to fill out a survey). The questions aim to track user sentiment and satisfaction as a Customer Satisfaction Score (CSAT). 

![Screenshot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Medallia%20Survey%20Example.png)

_Feedback Surveys are accessed via a “Feedback” button at the bottom of every page_

## Prerequisites to accessing Medallia data

### To access Feedback/Intercept survey data:

* Access to VA email, as you will need it to setup a Github account and to receive the data in an email

* Access to the VA Github, as you will be requesting data through that platform

* Access to VA Sharepoint, as you will receive data via a Sharepoint link To access CSAT score data
  
* Access to the VA Github, as you will be requesting access to Domo to view the data

## Preparing to request data

Preparing to access Feedback/Intercept survey data:

* First, look at the [Medallia User Surveys Overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/df0864a1636955f6746b70ea98fc93b85ae50e7a/teams/vsp/teams/contact-center/medallia) will help you understand the questions that the surveys present and what type of data they gather. 

* When you request Medallia data, you will need to fill out a [Quantitative Data Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ianMcCullough-ob%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request.) form in Github. Look at the data input fields to understand how you should format your request.
  
Preparing to access CSAT score data:

* Submit a [Domo Access Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joanneesteban\&labels=analytics-insights%2C+analytics-request%2C+access-request\&template=analytics-request-google-analytics-domo-access.md\&title=Request+access+to+Google+Analytics+and%2For+Domo) ticket to see default dashboards already created.

## Requesting the data

For Feedback/Intercept survey data, fill out the [Quantitative Data Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=ianMcCullough-ob%2C+ATMiddleton\&labels=VSP-contact-center%2Ccc-data-request\&projects=\&template=qualitative-data-request.yml\&title=Qualitative+Data+Request.) form. 

* Data Type Requested: “User Surveys”

* Data Source Type: “Medallia”

* *_Some tips_* Even if you want feedback left about specific pages of the form, it may be beneficial to request access to data left on many other pages of the form. People may not leave feedback about a page, on that page. 

## Receiving the data

### To access Medallia Source Data within Domo

* [Domo Medallia Data Dashboard](https://va-gov.domo.com/page/825663825)

  - Includes data from both Intercept and Feedback surveys

  - “file-disability-claim-form-21-526EZ” filter can be applied. 

* [Domo CSAT Score Dashboard](https://va-gov.domo.com/page/1545882322)

  - CSAT from both Medallia Intercept and Feedback surveys
  - [Instructions to see CSAT scores](https://drive.google.com/file/d/13CoM_q6ONls6Qe0cakQI4cRE8MPX01x_/view?usp=drive_link) and manipulate dashboard

# Datadog
_Slack channel for general access:_ [_#vfs-platform-support_](https://dsva.slack.com/archives/CBU0KDSB1)

## What is Datadog?

Datadog monitors the technical performance and reliability of systems, as well as some key performance indicators for user behaviors. It detects errors, slow load times, service disruptions, and tracks certain classifications of user choices.

## Requesting Access to Datadog

**_Prerequisites to accessing Datadog include a PIV card and OKTA access._**

* Create an OKTA account by connecting to the VA network via your PIV card and card reader to your contractor laptop.

* We have found that this does not work on Chrome unless you use an incognito window, or use Firefox, or use your GFE.

* Fill this out: “[OKTA Account Creation Request](https://auth.devops.va.gov/app/veteransaffairs-devops_vajira_1/exkc2jpqy8u1hxdty4h7/sso/saml?SAMLRequest=jZJRb5swFIXf9yuQ38HgUcisQJU1qhapW1GT7mEvkTGXxB3Y1New5N%2BPkEXKJrXa6%2FU937k6x%2FPbQ9t4A1hURmckCkLigZamUnqXkefNvT8jt%2FmHOYq26fiid3v9BK89oPMWiGDdKLszGvsW7BrsoCQ8Pz1kZO9ch5zSF2VFUMFgOgwGEezMQLum3ymNdFQPDTh6QlMxkom3HLlKCzfdckGcnv5BiK6jAziwQqOoa6Es%2BueN7SBOltuIwuGnZC%2Fd63HWR%2FtD5Y7xPqWIZvIj3mqZke3sU5SUTDJgcRKnJSs%2FpsCgrKVMUyHDZFzDQiCqATJSiwbhNMEeVhqd0C4jLGQ3fpj4UbKJEn4T8ygOWBr%2BIF5hjTPSNJ%2BVPofZW82NQIVcixaQO8nXi68PnAUhL89LyL9sNoVfPK43xPt%2BKYWdShlr0sinGt5HdX98ST6Vxqd77ZX%2Bfbm4tErytzuc0yv02Yd1%2FNsIWy0L0yh59BZNY37dWRBujM7Zfkzu3thWuLftoyCaJqry62mV9xo7kKpWUF0nwP43ApqfL%2F375%2Ba%2FAQ%3D%3D\&RelayState=%252Fservicedesk%252Fcustomer%252Fportal%252F89\&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256\&Signature=Y8U9IKO%2B5zyWSwYGCYhDzT%2FU2ZUVjDq85eCGJDTeJNMpo2QFM34NI4Zy%2F5m3neb2NMwz3PjqgDZV%0Ad%2BBxK6kJ34SFQxWBrvfbJSoX1ARdjTLKipJrZ3BdEdZJhfznXVgTFuYQ4LD4adyNiofGikF5doiU%0AQey0qx77B7R0yabo1poYL9I8O2CbVJSUi8bTXd4AgzpNmOcYWil1EgFdvGxZymYfChfe3tqw3ZlQ%0A5R1QlSzrJ7CWXn8N2dRc864YfeZvDXE6ptekNq9DAolkE1E7jWyNxwJzzPfWRDBkFHFqWeg4COPH%0A94dlUPbtlNC%2F0AM5vhmnF%2BL%2Bo%2Ba67KkZNeuzBA%3D%3D)” 

* Choose your VA email address as your username

* Choose your program manager for your VA Manager

* You may get into a loop where you cannot access the ticket template linked above to create an OKTA Account because you do not have an OKTA account. If that is the case, you can request that someone else with access fill out the ticket for you.

**_Once you have a PIV card and OKTA access:_** Follow these [Instructions for accessing Datadog](https://depo-platform-documentation.scrollhelp.site/developer-docs/get-access-to-datadog#GetAccesstoDatadog-Step2:GainAccesstoDatadog)

## Default Dashboards Provided in Datadog

![](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/analytics/platform_images/Datadog%20Screen.png)

_This is a screenshot of the default dashboard in Datadog provided for the Disability Benefits application as of 6/16/2025._
