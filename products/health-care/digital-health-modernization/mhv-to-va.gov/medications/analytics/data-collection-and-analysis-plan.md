# **Medications on VA.gov Data Collection Plan for Phase 1**

## **Hypothesis**

If we have designed a strong user experience for Phase 1 Medications on VA.gov, then we will see steady or increased usage each month suggesting that they understand and are able to use the new version.

## **Primary Metrics**

**Product usage**

- Total fills/refills on VA.gov
- Total Veterans who filled at least one medication on VA.gov
- Total medications tracked
- Total Veterans who tracked at least one medication on VA.gov

## **Secondary Metrics**

**Use of ‘Go back to pharmacy on the My HealtheVet website’ link**

- Datadog: Top Actions

**Sentiment analysis of qualitative feedback data**

- Medallia: Intercept and Feedback survey data
- MyVA411: Salesforce phone data
- Helpdesk: Tier II/Tier III Salesforce data

## **Performance Metrics**

**Dropoff/Page Exits**

- Datadog: Funnel analysis
  - Do Veterans follow the expected flow?
  - Is a Veteran able to fill one or more prescriptions?

**Conversion events**

- Datadog: Top Actions, Click events
  - Is a Veteran able to refill medication(s)
  - Is a Veteran able to view medication details?
  - Is a Veteran able to download their medication list?
  - Is a Veteran able to download an individual medication?
  - Is a Veteran able to print their medication list?
  - Is a Veteran able to print an individual medication?
  - Is a Veteran able to sort their medications list?
  - Is a Veteran able to view their medications list?
  - Is a Veteran able to find information on renewing their medications?

### **Data Collection and Reporting**

| Metric | Collection Cadence | Collection Format | Reporting Cadence | Reporting Format | Audience |
| --- | --- | --- | --- | --- | --- |
| Total Fills/Refills | Weekly | Oracle SQL | Monthly | Post in #mhv-medications-rx Slack channel | MHV Stakeholders |
| Total Veterans who filled at least one Rx | Weekly | Oracle SQL | Monthly | Post in #mhv-medications-rx Slack channel | MHV Stakeholders |
| Total medications tracked | Weekly | Oracle SQL | Monthly | Post in #mhv-medications-rx Slack channel | MHV Stakeholders |
| Total Veterans who tracked at least one medication on VA.gov | Weekly | Oracle SQL | Monthly | Post in #mhv-medications-rx Slack channel | MHV Stakeholders |
| Use of ‘Go back to Pharmacy on the My HealtheVet website’ link | Weekly | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1714536000000&to_ts=1717100181580&live=true) | Monthly | Post in #mhv-medications-rx Slack channel | MHV Stakeholders |
| Sentiment analysis of qualitative feedback data | Daily | Excel Spreadsheet + [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1717100337676/5ce86a1002efa00d8a8a6e1d1aa265c002bb2d0b?sender=u8633abbc30765ec4537308010) | As patterns develop | Post in #mhv-medications-rx Slack channel | Kay, Kaitlin, Robyn, By Light UCD team |
| Dropoff/Page exits | Weekly | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1714536000000&to_ts=1717100181580&live=true) | Monthly | Post in #mhv-medications-rx Slack channel | Kay, Kaitlin, Robyn, By Light UCD team |
| Conversion Events | Weekly | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1714536000000&to_ts=1717100181580&live=true) | Monthly | Post in #mhv-medications-rx Slack channel | Kay, Kaitlin, Robyn, By Light UCD team |
| Session Count, Duration, Page Views | Weekly | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1714536000000&to_ts=1717100181580&live=true) | Monthly | Post in #mhv-medications-rx Slack channel | Kay, Kaitlin, Robyn, By Light UCD team |

### **Data Collection Tools**

| Tool | Data Type | Access | Status |
| --- | --- | --- | --- |
| Datadog | Web traffic/ User behavior | [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p4s-ppk-kpw/rx-on-vagov?fromUser=false&refresh_mode=monthly&view=spans&from_ts=1714536000000&to_ts=1717100181580&live=true)  | Running |
| Domo | Dashboard to aggregate various sources | N/A | Analytics team cannot have ready in time, Medallia and Salesforce will only be current to the end of the previous month |
| Google Analytics | Web traffic/ User behavior | Google Analytics | Tagging ticket submitted 5/31/2024 |
| Medallia | Veteran feedback from Intercept and Feedback surveys, My411 data, Tier II and Tier III data | Daily emails sent to [anne.costello@va.gov](mailto:anne.costello@va.gov), [Katherine.lawyer@va.gov](mailto:Katherine.lawyer@va.gov), [melissa.ashton@va.gov](mailto:melissa.ashton@va.gov), [tanner.bird@va.gov](mailto:tanner.bird@va.gov), <robyn.singleton@va.gov> | Ticket #84227 and #84178 submitted 5/29/2024 |
| MHV feedback email | Trusted user feedback | Tanner Bird processes, Anne Kennedy has access | Running |
| Oracle SQL Developer | Total fills/refills and Total Veterans who filled at least one Rx | Anne Kennedy | Running |
