# Analytics

[How to Generate an Analytics Report for Stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/analytics/how-to-generate-analytics-report-for-stakeholders.md)
 - This needs to be updated based on the outcome of the meeting with Stephen & Jeff/Leah

## Metrics Dashboards for Reporting Purposes
- For page views, button clicks, & collapses/expands of collapsible components
  - [PCI GA4 Check-in Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/v08dnfMeRpi0OZRusDBV9w)
  - [PCI GA4 Pre-Check-in Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/fBTnZD1-T3SQ5HtcKHsT_A)
  - [PCI GA4 Travel Metrics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/tPiLrf3xTV6yL_RPS8eFEA)
  - [OH Travel GA4 Metrics]() - TBD
- For audience count, completion count, verification rate, conversion rate, and error rate (based on API call successes/failures)
  - [PCI Datadog Metrics](https://vagov.ddog-gov.com/dashboard/be6-5ki-272?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1716916715976&to_ts=1719508715976&live=true)
- For overall PCI downtime (used to calculate uptime) & individual application latencies
  - [PCI SLO Metrics](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1716916742233&to_ts=1719508742233&live=true)
- For customer satisfaction score
  - [DOMO Medallia Metrics](https://va-gov.domo.com/page/825663825)
    - Can select the Patient Check-in filter and scroll down below the "Feedback Survey" title to get the overall PCI customer satisfaction score
    - Can select each application path individually to get individual customer satisfaction scores

## DataDog Dashboards
- Public (with url)
     - [Check In (Travel Claims)](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-3a95d2603bfb8826abb8aa81a04efd03)
     - [Check In (Travel Claims) for Stakeholders](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-a97e86a93c36244163f942ed0859de7b?refresh_mode=sliding&tpl_var_env%5B0%5D=eks-prod&from_ts=1703524114192&to_ts=1706116114192&live=true)
     - [Travel Claims (Oracle Health)](https://vagov.ddog-gov.com/dashboard/njk-mi6-mxy/travel-claims-oracle-health?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1712594733353&to_ts=1712598333353&live=true)
     - [Check-In Simple View](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-656d5fd1f385d165c9ce28403df3a8c4?refresh_mode=sliding&from_ts=1703522923071&to_ts=1706114923071&live=true)
     - [Check-In Time in seconds](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-023e70fff5e0b68e7a22c36867342e09?refresh_mode=sliding&from_ts=1703523118249&to_ts=1706115118249&live=true)
     - [Check ins completed vs. initiated](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-22977a93743227c4a10bc22e38be5531)
     - [45MR Sent for eCheck-in (VeText)](https://app.ddog-gov.com/sb/e92f059a-aa2c-11ec-9c41-da7ad0900007-3b0997c27aff287795ba5d8659125f46?refresh_mode=sliding&from_ts=1707935759563&to_ts=1708540559563&live=true)
     - [Service Level Objectives (SLOs) (Uptime, Downtime, Latency)](https://app.ddog-gov.com/sb/afc0766e-74a2-11ec-a15a-da7ad0900007-f07231c7d8d7f3accba69b77ccf16410?refresh_mode=sliding&from_ts=1708884911568&to_ts=1711476911568&live=true)
     - [Check In (vets-api)](https://app.ddog-gov.com/sb/f327ad72-c02a-11ec-a50a-da7ad0900007-c10c66c6f09b417039c4512bf4d83047)
 
- Configure (requires log in)
     - [Check-In Time in seconds](https://tevi.ddog-gov.com/dashboard/x67-auh-wqv/check-in-time-metrics-in-seconds?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1713100432798&to_ts=1713273232798&live=true)
     - [Check In (Travel Claims) for Stakeholders](https://vagov.ddog-gov.com/dashboard/eax-4m7-3de/check-in-travel-claims-stakeholder?fromUser=true&refresh_mode=sliding&view=spans&from_ts=1682971494000&to_ts=1714593894000&live=true)
     - [Check In (vets-api)](https://vagov.ddog-gov.com/dashboard/zps-5fk-azw/check-in-vets-api?fromUser=true&refresh_mode=sliding&view=spans&from_ts=1683563580000&to_ts=1715185980000&live=true)
       
## VSignals Feedback
- [How to Request and Process VSignals Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/VSignals)

## Medallia Feedback
- [How to Request and Process Medallia Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/how-to-request-medalia-feedback.md)
