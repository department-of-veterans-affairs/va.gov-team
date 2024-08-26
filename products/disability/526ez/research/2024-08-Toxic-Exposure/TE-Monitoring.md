
# Monitoring Toxic Exposure Release

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

**Dates:** August-September 2024

**Product/UX:** Jared Pace [Jared.pace@agile6.com] & Evelyn Hilbrich Davis [evelyn@cityfriends.tech] 

## Background
We are monitoring the 1.0 and 1.1 release of the new Toxic Exposure feature for the 526ez, starting at 5% in late August 2024. By tracking interactions and gathering feedback, we will identify any issues with TE early so we can make data-driven improvements.
- This report will document GA4, Data Dog, and Medallia survey data over the course of the release.
- We are considering adding Contact Center as a data source to capture the feedback of Veterans calling for help on TE.
- Relevant tickets: [(#90466)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90466) and [(#88714)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88714)

**Note:** We will be responsive to the release, updating our monitoring approach as we learn more/better! 

**8/26 UX-Product sync:** We recognized that Medallia data will not impact decision-making on whether or not we will proceed with the roll-out. Therefore, we are moving Medallia data review to the end of each phase of the rollout in order to capture a hollistic picture and saving a lot of work. 

## Scope of this report
This reporting will seek to keep all stakeholders informed of the rollout's progress. Beyond this documentation, DBEX Team 1 will monitor the TE release daily to identify bugs/challenges and make informed decisions about pacing the rollout. Any resulting concerns will be immediately escalated to OCTO/VBA via slack.  

## Schedule of reporting
Success metrics will be updated in this document at the end of each rollout percentage, starting with 5%. At the end of both the 1.0 and 1.1 release, we will review Medallia data in order to add more detail to the user experience of the feature. 

### 526 Success Metrics
|**Rollout %**|**Dates of 1.0 rollout (Based on [release plan calendar](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721757550661/f347c9e1144d8093a8b75d4da6dae2b9c0bd42ad?sender=u9f3830b1ee3516bdcf2e2000))**|
|--|--|
|5%| Aug 28 - Sep 2 | 
|10%| Sep 3 - 8 | 
|25% | Sep 9 - Sep 11 |
|50%|Sep 12- 15|
|75%|Sep 16- 17|
|100%|Sep 18 |

## Summary of GA4/Data Dog
### 526ez Success Metrics by % rollout
| Product KPI | Baseline  | Target | 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|--|
| Abandonment rates|  | | | | | | |  |[GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)|
| TE Opt-in rate % | | | |  | | | | |[GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)<br>[Datadog](https://vagov.ddog-gov.com/logs?query=env:%22eks-prod%22%20@http.referer:*21%5C-526ez%5C/toxic%5C-exposure*%20&agg_m=@payload.user_uuid&agg_m_source=base&agg_q=@http.referer&agg_q_source=base&agg_t=cardinality&analyticsOptions=%5B%22bars%22,%22dog_classic%22,null,null,%22value%22%5D&cols=host,service&fromUser=true&messageDisplay=inline&storage=hot&stream_sort=desc&top_n=10&top_o=top&viz=timeseries&x_missing=true&from_ts=1723791600000&to_ts=1723877940000&live=false)|
| Submission errors | 0.62% | ≤ 0.62% | | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
|% of submissions that use normal path| 99.38% | 99.38%*  | | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| % of uses of backup and failsafe path | | | | | | | | | Pending Backup Path monitoring |

*Inferred from % of submission errors

### [Overall Form Abandonment]((https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ))
'Form abandonment' defined in OCTO language: On each page in the form, what percentage of people drop-off and don't continue to the next page.
| Step # | 526 Page| Baseline  | Target | 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|--|--|
|Step 1|Introduction | 0.48% | 0.48% | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 2| Veteran Information | 38.93% | 38.93% | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 3| Disabilities | 17.57% | 17.57% | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 4| Supporting Evidence | 19.23% | 19.23% || | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 5| Additional Information | 3.67% | 3.67% | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 6| Review and Submit | 7.58% | 7.58% | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |
|Step 7| Confirmation | - | - | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/KHKBycWYRfqDVxVPWNwZyA) |

### Toxic Exposure Abandonment 
Add table here. Currently being workshopped by Christine and Jared so we can understand how far into the TE flow Veterans are getting and places they might exit. 
| Step # | TE Page| 5% | 10%| 25%| 50%|75% |100%| Data Source |
|--|--|--|--|--|--|--|--|--|
|Step 1| Toxic Exposure Conditions | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 2| Gulf War 1990 | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 3| 1990 Summary | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 4| Gulf War 2001 | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 5| 2001 Summary | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 6| Herbicide | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 7| Herbicide Summary | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 8| Additional Exposures | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
|Step 9| Additional Exposures Summary | | | | | | | [GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |

## Summary of Medallia survey data (Evaluated at completion of 1.0 and 1.1 rollouts)
Before launch, we reviewed Medallia survey data **from July 1-August 9** to help set a baseline for the 526ez user experience. This 6 week period of data will appear in charts as "Pre-launch." [[See full report here.]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/2024-08-Medallia-Review.md)
  
### Guiding Questions for UX Monitoring
1. What portion of Veterans are choosing to answer the TE questions? [opt-in %]
2. When are Veterans abandoning the TE flow? Are we seeing more drop-offs than baseline at later points in the form?
3. What challenges (usability issues, bugs, general pain points) are Veterans encountering with the feature? 
4. How satisfied are Veterans with the overall performance of the feature?[Intercept and Feedback customer satisfaction]
5. What impact does the new feature have on Veteran trust in VA?
   
### Overall 526ez
|**Data point**|**Baseline (2024)**|**Pre-Launch**| **1.0 rollout** | **1.1 rollout**|
|--|--|--|--|--|
|**CSAT-Intercept**| 37.7%|41.9% | | |
|**Feedback satisfaction**|2.3|2.8|
|**Task completion**| 26% | 44.5% | | |
|**Trust Overall (High distrust 1 to high trust 5)**|3.53| 3.29 | | |
|**Trust Gained/Lost (Percent difference from increase and decrease)**|-6.1%| 9.2% | | |

### Toxic Exposure feature
|**Data point**| **1.0 rollout** | **1.1 rollout**|
|--|--|--|
|**CSAT-Intercept**| | | | |
|**Feedback satisfaction**|||
|**Task completion**| | | | |
|**Trust Overall**| | | | |
|**Trust Gained/Lost**| | | | |

### **Themes across Medallia survey responses**
I coded all qualitative user feedback--see Appendix for full list of codes/themes and definitions. 

**Top themes**
|Rank|Pre-launch (6 weeks)|  **1.0 rollout** | **1.1 rollout**|
|--|--|--|--|
|1|Usability (33)|--|--|||
|2|Navigation (33)|-- |
|3|PACT (26)| |--|
|4|Error (26)||--| --|
|5|Getting help (23)|--|

## Top 5 Takeaways 
Top takeaways will come from the combined review of GA4 and Medallia each week. These insights will work to explain trends we see across qualitative and quantitative data points as they pertain to Toxic Exposure. 

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
