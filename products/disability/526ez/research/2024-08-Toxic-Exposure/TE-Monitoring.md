# Monitoring Toxic Exposure Release

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

**Dates:** August-October 2024

**Product/UX:** Jared Pace [Jared.pace@agile6.com] & Evelyn Hilbrich Davis [evelyn@cityfriends.tech] 

**Jump to:**
- [Background](#background)
- [Reporting Schedule](#reporting-schedule)
- [526ez Success Metrics](#526ez-success-metrics)
    - [Validating our metrics](#success-metric-validation)
- [Medallia survey and Contact Center data](#medallia-survey-and-contact-center-data)
- [Appendix](#appendix)
  
## Background
We are monitoring the 1.0 and 1.1 release of the new Toxic Exposure feature for the 526ez, starting at 5% in late August 2024. By tracking interactions and gathering feedback, we will identify any issues with TE early so we can make data-driven improvements. 
- This report will document GA4, Data Dog, Contact Center, and Medallia survey data over the course of the release.
- We are considering adding Contact Center as a data source to capture the feedback of Veterans calling for help on TE.
- Relevant tickets: [(#90466)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90466) and [(#88714)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88714)

### Goals & Impact
1. Monitoring the release will help us determine if and when we need to pause the incremental release of TE. We will be looking for major technical blockers or patterns of very negative open response feedback in the data to inform our decision-making.
2. Reviewing Medallia data will help us focus our upcoming usability research on the new feature. We will leverage early findings in monitoring to shape the research plan and hypotheses. 

**Note:** We will be responsive to the release, updating our monitoring approach as we learn more/better!

### Scope of this report
This reporting will seek to keep all stakeholders informed of the rollout's progress. Beyond this documentation, DBEX Team 1 will monitor the TE release daily to identify bugs/challenges and make informed decisions about pacing the rollout. Any resulting concerns will be immediately escalated to OCTO/VBA via slack.  

## Reporting Schedule
- Success metrics from GA4 will be updated in this document at the end of each increment of the rollout, starting with 5%. 
- Medallia data will reviewed at the midpoint (around 50%) and end (100%) of the 1.0 and 1.1 rollouts. Requesting and reviewing Medallia data takes 1-3 days; delay is noted in the table below. 

|**Rollout %**|**Dates of rollout (Based on [release plan calendar](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721757550661/f347c9e1144d8093a8b75d4da6dae2b9c0bd42ad?sender=u9f3830b1ee3516bdcf2e2000))**|GA4 reporting date | Medallia +Contact Center request
|--|--|--|--|
|5%| Aug 28 | Sept 3 [(Sheet evaluating the 5% metrics)](https://docs.google.com/spreadsheets/d/1zyBjDaUAhYkcA0QhOH0NCKgLrJmylCZOP9AupWGCX3w/edit?gid=1093610789#gid=1093610789))| 
|10%| Sept 5 - 15 | Sept 15|
|25% | Sept 16 - Sept 18 | Sept 18/19|
|50%|Sept 19- 22| Sept 23 |Request on Sept 20|
|75%|Sept 23- 24|Sept 25|
|100%|Sept 25- 30 | Sept 18| Request on Sept 27|
|1.1 5%|||
|25%|||
|50%||| Request on Oct 18 |
|75%|||
|100%|| | Request on Oct 25|

## 526ez Success Metrics
| Product KPI | Baseline  | Target | 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|--|
| Abandonment rates| 33.61% | 33.61% | 0% | 1.8% | | | |  |[GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q)|
| TE Opt-in rate* | - | - | 38% | 48% | | | | |[GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q)<br>[Datadog](https://vagov.ddog-gov.com/logs?query=env:%22eks-prod%22%20@http.referer:*21%5C-526ez%5C/toxic%5C-exposure*%20&agg_m=@payload.user_uuid&agg_m_source=base&agg_q=@http.referer&agg_q_source=base&agg_t=cardinality&analyticsOptions=%5B%22bars%22,%22dog_classic%22,null,null,%22value%22%5D&cols=host,service&fromUser=true&messageDisplay=inline&storage=hot&stream_sort=desc&top_n=10&top_o=top&viz=timeseries&x_missing=true&from_ts=1723791600000&to_ts=1723877940000&live=false)|
| Submission errors | 0.96% | ≤0.96% | 0.28% | 0.48% | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| % of submissions that use normal path| 99.04% | ≤99.04%  | 99.72% | 99.51% | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| % of uses of backup path | 0.94% | ≤0.94% | 0.04% | 10% | | | | | Weekly error tracker sheet |
| % of complete failure | 0.0001% | ≤0.0001% | 0% | 0% | | | | | Weekly error tracker sheet |

*For Veterans who saw the 2022 form version.

### Toxic Exposure Abandonment 
 
| Step # | TE Page| 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|
|Step 2| Gulf War 1990 | 0%| 3.6%  | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |
|Step 3| Gulf War 2001 |0% | 0.29% |  | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |
|Step 4| Herbicide | 0% | 1.4% | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |
|Step 5| Additional Exposures | 0%| 0.73% | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |
|Step 5| Additional Disabilities | 0%| 0.63% | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |

### Overall Form Abandonment
**Alternative approaches we're considering:** Removing all steps that are not seen by all Veterans (such as claim type) or exploring other non-funnel models for understanding the data. 

| Step # | 526 Page | Baseline | 5% | 10% | 25% | 50% | 75% | 100% |Data Source |
|--|--|--|--|--|--|--|--|--|--|
|Step 1| Introduction | 46.73% | 46.73% | 44.24% | | | | |  [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |
|Step 7| Confirmation | - | - |  | | |  | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/Rrt3L0B2TSerwEKFm5Lk8Q) |


### Success Metric Validation
We are regularly evaluating our top success metrics to make sure we can trust them. Below you will find tables examining 1) Abandonment rates and 2) TE opt-in and page views. 

||**Toxic Exposure Abandonment** |**Overall 526 Abandonment**|
|--------------|--------------|---|
|**Definition**|_Percentage of people drop-off in the TE flow and don't continue to the next page (measured by change in page views)._|_Percentage of people drop-off at each page in the 526 and don't continue to the next page (measured by change in page views)_
|**Takeaways from 5%**|- "Close to zero abandonment was observed in raw database data as well as GA4. We are wary of absolutely no abandonment and will continue to track this metric as the release continues.| - "The data at 5% did not align with expected behavior for abandonment. We are revisiting the approach to see if we can get better data.| 
|**Takeaways from 10%**|- We view it as a positive sign that abandonment rate with the TE flow is low, 1.33% on average.| 0 Overall abandonment rate at 10% increment is lower than the baseline, and remains steady +/-2%.
|**Takeaways from 25%**|||
|**Limitations**||- We know from past discovery that measuring drop off throughout the 526 is difficult to manage with the 10 step limit to GA4. <br> Because so many pages are conditional, it is also hard to find pages at regular intervals that all Veterans see. 
|**Any next steps**|Closely monitor as the release continues| -Christine and Jared decided to use a more blunt means of measing overall abandonment <br> -Selecting just the Introduction and Confirmation page since conditional logic issues are cirvumvented when using these two pages.


||**Toxic Exposure opt in** |**Top 10 Toxic Exposure page views**|
|--------------|--------------|---|
|**Definition**|_What portion of Veterans are choosing to answer the TE questions?_|_Report that shows the 10 top TE page views._ | 
|**Takeaways from 5%**|- We see 39% opt-in for the submission record (Aurora looked at raw database data) and GA4. <br> -We see this match up as evidence that we can use GA4 to measure ""opt-in"" throughout the release. <br> - 117 TE clams in EVSS around Aug 28th. Having more data improves overall accuracy.|- Christine generated this during our discovery to validate the 5% numbers. It is a straightforward count of page views.|
|**Takeaways from 10%**|-TE opt-in, currently at 48% is 10% greater than at the 5% increment.| -75% of Veterans viewing Toxic Exposure pages use a desktop browser, 24.6% use a mobile device. <br> -Page views of gulf war 1990, 2001, herbicide, and additional exposures are the most viewed and views across these pages are consistent, with only a 12.42% difference in page views between these pages.<br> -Other and MOS additional exposures were the least viewed of all Toxic Exposure pages, representing just 5% of total views.|
|**Takeaways from 25%**|||
|**Limitations**|- # of submissions isn't going to equal number of GA4 active users since GA4 does not track the same user across multiple sessions or devices. <br> -Submissions will be lower than page views. Some users may take more than one session to go back and forth in the form.|
|**Any next steps**|-Measure how many Veterans completed the TE questions at end of 1.0 and 1.1. -This will tell us what percentage of Veterans submitted vs. viewed TE questions, which could help inform research design. <br> -This is a nice-to-have addition. |We wonder if we could use this report down the road to calculate a rough average number of pages that a Veteran sees in the TE flow. |


## Medallia survey and Contact Center data 
Before launch, we reviewed Medallia survey data **from July 1-August 9** to help set a baseline for the 526ez user experience. This 6 week period of data will appear in charts as "Pre-launch." [[See full report here.]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/2024-08-Medallia-Review.md)
  
### Guiding Questions for UX Monitoring
1. What portion of Veterans are choosing to answer the TE questions? [opt-in %]
2. When are Veterans abandoning the TE flow? Are we seeing more drop-offs than baseline at later points in the form?
3. What challenges (usability issues, bugs, general pain points) are Veterans encountering with the feature? 
4. How satisfied are Veterans with the overall performance of the feature?[Intercept and Feedback customer satisfaction]
5. What impact does the new feature have on Veteran trust in VA?
   
### Overall 526ez
All Medalia survey data is reported as a % of 4+5 answers.
|**Data point**|**Baseline (1/1-6/30/24)**|**Pre-Launch**| **1.0 50%** |**1.0 100%** | **1.1 25%**|**1.1 100%**|
|--|--|--|--|--|--|--|
|**CSAT-Intercept**| 36.2%|41.9% | | |
|**Feedback satisfaction**|21.6%| 34.2%|
|**Task completion**| 23% | 44.5% | | |
|**Trust Overall**|41% |52% | |
|**WIP How interaction changed trust**||  | | |

### Toxic Exposure feature
|**Data point**|**1.0 - 50%** |**1.0 - 100%** | **1.1 - 25%**|**1.1 - 100%**|
|--|--|--|--|--|
|**CSAT-Intercept**| | | | |
|**Feedback satisfaction**|||
|**Task completion**| | | | |
|**Trust Overall**| | | | |
|**WIP How interaction changed trust**| | | | |

### **Themes across Medallia survey responses**
I coded all qualitative user feedback--see Appendix for full list of codes/themes and definitions. 

**Top themes**
|Rank|Pre-launch (6 weeks)|**1.0 - 50%** |**1.0 - 100%** | **1.1 - 25%**|**1.1 - 100%**|
|--|--|--|--|--|--|
|1|Usability (33)|--|--|||
|2|Navigation (33)|-- |
|3|PACT (26)| |--|
|4|Error (26)||--| --|
|5|Getting help (23)|--|

## Top 5 Takeaways 
Top takeaways will come from the combined review of GA4 and Medallia whenever the survey data is pulled. These insights will work to explain trends we see across qualitative and quantitative data points as they pertain to Toxic Exposure. 

### Week 1 Takeaways
1. Takeaway
2. Takeaway
3. Takeaway
4. Takeaway
5. Takeaway
### Week 2 Takeaways
### Week 3 Takeaways
### Week 4 Takeaways

## Appendix 

### 526ez pages with the most responses
**Feedback survey**
|Rank|Pre-launch (6 weeks)| **1.0 rollout** | **1.1 rollout**|
|--|--|--|--|
|-|Total responses (462)||||||
|1| Introduction (116 / 25%)|||||
|2| Confirmation (76 / 16%)|||||
|3| Start (64 / 14%)|||||
|4| Review & Submit (19 / 4%)| ||||

**Intercept survey**
|Rank|Pre-launch (6 weeks)| **1.0 rollout** | **1.1 rollout**|
|--|--|--|--|
|| Total responses (85)| |||||
|1|Introduction (42 / 49%)|||
|2| Start (22/ 26%)|||
|3| Veteran Information (7 / 8%)|||

### Codebook
See full list of codes and their definitions below. 
|Code|Definition|
|--|--|
|Usability|Responses that describe specific usability issues not encompassed by other tags. Examples include character limits, inability to update prefill, not being able to continue, etc.|
|PACT| Responses that reference Toxic Exposure or the PACT Act|
|Error| Responses that describe an error message they came across in the form |
|Navigation| Responses that describe moving from one part of the application to another and wayfinding |
|Getting help| Responses that describe seeking help from the hotline, VSOs, professionals, or other sources|
|Evidence/evidence upload|Responses that describe evidence or medical records, uploading or downloading|
|Pain point| Responses that express distress or frustration, but don’t fall into another tag |
|Submission|Responses that describe submitting their form and/or the confirmation page|
|Intent to File| Responses that reference Intent to File or upcoming ITF deadlines|
| Bright spot| Positive feedback or something that’s working well|
|General|Responses that included non-specific qualitative information, such as "filing"|
