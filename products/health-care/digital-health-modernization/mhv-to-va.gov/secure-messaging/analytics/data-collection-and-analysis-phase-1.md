# **Secure Messaging on VA.gov Data Collection and Analysis for Phase 1**

## **North Star Metric**

**Engagement rate / Bounce rate**

Definitions from Google:

- An engaged session is a session that lasts longer than 10 seconds, has a conversion event (i.e., click 'Send'), or has at least 2 pageviews or screenviews.
- The engagement rate is the  **percentage of engaged sessions**  on your website or mobile app. The bounce rate is the opposite of the engagement rate. The bounce rate is the  **percentage of sessions that were not engaged**.

## **Objectives and Key Results (OKRs)**

### **Objectives**

- Increase Veterans' involvement in managing their healthcare.
- Increase Veterans' adoption of Secure Messaging on VA.gov.

### **Key Results**

- Engagement rate of at least 80% 
- Bounce rate of no more than 20% 

## **Key Performance Indicators (KPIs)**

 - **Bounce Rate**

 - **Engagement Rate**

## **Hypothesis**

**If we have designed a strong user experience for Phase 1 Secure Messaging, then we will see a high engagement rate (low bounce rate), suggesting that users understand and are able to use the new version.**


![Link Text](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/analytics/images/sm-phase1-graphic.png)


## **Secondary Metrics**

**Use of 'Go back to previous version of secure messaging' link**

- Datadog: Top Actions, Heatmaps, Funnel analysis

**Sentiment analysis of qualitative feedback data**

- Medallia: Feedback survey data
- MyVA411: Salesforce phone data
- Helpdesk: Tier II/Tier III Salesforce data
- VSignals: Survey response data



## **Performance Metrics**

**Dropoff/Page Exits**

- Datadog: Funnel analysis

  - _Do Veterans follow the expected flow?_

  - _Is a Veteran able to send a message?_

  - _Is a Veteran able to reply to a message?_

**Conversion Events**

- Datadog: Top Actions, Click events

  - _Is a Veteran able to send a message?_

  - _Is a Veteran able to read a message?_

  - _Is a Veteran able to reply to a message?_

  - _Is a Veteran able to attach a file to a message?_

  - _Is a Veteran able to continue a draft?_

  - _Is a Veteran able to create a folder?_

  - _Is a Veteran able to move a message to a folder/trash?_

  - _Is a Veteran able to search for a message?_
  - _Is a Veteran able to extend a session?_

  - _Is a Veteran able to print messages?_
 
## **Data Collection, Analysis, and Reporting**
_Data will be updated in the [phase1-data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/analytics/phase1-data.md) document on GitHub as it is collected._

| **Metric** | **Collection Cadence** | **Collection Format** | **Reporting Cadence** | **Reporting Format** | **Audience** |
| --- | --- | --- | --- | --- | --- |
| Bounce Rate | Weekly | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) | Monthly | Post in #mhv-secure-messaging Slack channel | MHV Stakeholders |
| Engagement Rate | Weekly |[Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450)| Monthly | Post in #mhv-secure-messaging Slack channel | MHV Stakeholders |
| Use of 'Go back to previous version of secure messaging' link | Weekly | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) |  Monthly |  Post in #mhv-secure-messaging Slack channel | MHV Stakeholders |
| Sentiment analysis of qualitative feedback data | Daily | Excel Spreadsheet | As patterns develop | Post in #secure-messaging-ux Slack channel | By Light UCD team, Janie, Coulton, Lois, Robyn |
| Dropoff/Page Exits | Weekly | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) | Monthly | Post in #secure-messaging-ux Slack channel | By Light UCD team, Janie, Coulton, Lois, Robyn |
| Conversion Events | Weekly | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) |Monthly | Post in #secure-messaging-ux Slack channel | By Light UCD team, Janie, Coulton, Lois, Robyn |
| Session Count, Duration, Page Views | Weekly | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) |Monthly | Post in #secure-messaging-ux Slack channel | By Light UCD team, Janie, Coulton, Lois, Robyn |
|Messages Sent By Platform | Monthly | VistA Database via Oracle SQL Developer | Monthly | Post in #secure-messaging-ux Slack channel | By Light UCD team, Janie, Coulton, Lois, Robyn |

 ## **Data Collection Tools**
| **Tool** | **Data Type** | **Access** | **Status** |
| --- | --- | --- |  --- |  
| Datadog | Web traffic / User behavior | [Datadog Dashboard](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-0854b01ebd7d86bc121739b4f50b7450) | Running |
| Domo | Dashboard to aggregate various sources | N/A | Analytics team cannot have ready in time, Medallia and Salesforce will only be current to end of previous month |
| Google Analytics | Web traffic / User behavior | [Google Analytics Dashboard](https://analytics.google.com/analytics/web/#/dashboard/lGdc4RYGRhGcRVWgGjx8oQ/a50123418w177519031p176188361/) | GA4 expected to be set up by end of calendar year |
| Medallia | Veteran feedback from Intercept and Feedback surveys, My411 data, Tier II and Tier III data | Daily emails sent to jane.carnock@va.gov, anne.costello@va.gov, Lichelle.Bain@va.gov, Melissa.Ashton@va.gov | Running |
| MHV feedback email | Trusted user feedback | Lichelle Bain processes, Anne Kennedy has access | Running |
| Oracle SQL Developer | Messasges sent by platform | Anne Kennedy | Running |

### **Collection and Analysis Reporting Plan**
![Link Text](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/analytics/images/sm-phase1-reporting-plan.png)
