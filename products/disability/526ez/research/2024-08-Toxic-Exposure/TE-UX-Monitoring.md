
# UX Monitoring Toxic Exposure Release

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

**Dates:** August-September 2024

**Product/UX:** Jared Pace [Jared.pace@agile6.com] & Evelyn Hilbrich Davis [evelyn@cityfriends.tech] 

## Background
We are monitoring the 1.0 release of the new Toxic Exposure feature for the 526ez, starting at 5% in late August 2024. This report will document the change in Medallia survey respones, GA4, and Data Dog data over time. 

Before launch, we reviewed Medallia survey data **from July 1-August 9** to help set a baseline for the 526ez user experience. This 6 week period of data will appear in charts as "Pre-launch." [[See full report here.]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/2024-08-Medallia-Review.md)

**For more details on this work, please see the following tickets:** [UX monitoring of TE Release (#90466)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/90466) and [Review Medallia survey data to prepare for TE launch (#88714)](https://app.zenhub.com/workspaces/disability-benefits-experience-team-1-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/88714)


### Goals
- We are monitoring the TE release to ensure it meets user expectations and performs effectively in real-world scenarios. By tracking interactions and gathering feedback, we will identify any issues early so we can make data-driven improvements.
- - We will be responsive to the release, updating our monitoring approach as we learn more/better! 

### Scope
- This reporting will seek to keep all stakeholders informed of the rollout's progress at a higher level with a special focus on user experience.
- Daily reporting is out of scope: Product will monitor the TE release daily to identify bugs/challenges and make informed decisions about pacing the rollout. Any resulting concerns will be immediately escalated to OCTO/VBA. 

### Guiding Questions for UX Monitoring
1. What portion of Veterans are choosing to answer the TE questions? [opt-in %]
2. When are Veterans abandoning the TE flow? Are we seeing more drop-offs than baseline at later points in the form?
3. What challenges (usability issues, bugs, general pain points) are Veterans encountering with the feature? 
4. How satisfied are Veterans with the overall performance of the feature?[Intercept and Feedback customer satisfaction]
5. What impact does the new feature have on Veteran trust in VA?

### Schedule of reporting
Every Friday after the first full week of the rollout, we will request Medallia data from Contact Center and share the report on the data from the previous week. 

**Open question for OCTO meeting:** We have organized reporting around a weekly check-in, but also acknowledge value in monitoring the roll-out by % to get a more granular view of how the feature performs at different stages. One proposal would be to include an additional dashboard tracking GA4 success metrics along with the % rollout. 

|**Report**|**Dates**| **Rollout %**| **Reporting document updated**|
|--|--|--|--|
|**Week 1** | Aug 28 - Sep 6 | (5%-10%)| Sep 13 |
|**Week 2**| Sep 7 - 13 | (10-50%) | Sep 20 |
|**Week 3** | Sep 14 - Sep 20 | (50%-100)| Sep 27|


## Summary of GA4/Data Dog
### 526ez Success Metrics
| Product KPI | Baseline  | Target | Pre-Launch | Week 1 | Week 2| Week 3| Week 4| Data Source |
|--|--|--|--|--|--|--|--|--|
| Abandonment rates| 24% | ≤ 24% | | | | | | [Domo](https://va-gov.domo.com/page/447193050/kpis/details/1994399128?pfilters=%5B%7B%22column%22:%22form_name%22,%22operand%22:%22IN%22,%22values%22:%5B%22Form%2021-526EZ%20-%20Original%20Disability%20Claim%22%5D,%22dataType%22:%22string%22,%22affectedCardUrns%22:%5B%5D,%22label%22:%22form_name%22,%22key%22:%22form_name:%22,%22dataSourceId%22:%22e83cb7cf-0e3d-4699-89b3-761589681307%22%7D%5D)<br>[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
| Form exits | | | | | | | | |
| TE Opt-in rate % | | | | | | | |[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)                                                              |
| Submission errors | 0.62% | ≤ 0.62% | | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
|% of submissions that use normal path| 99.38% | 99.38%*  | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| % of uses of backup and failsafe path | | | | | | || Pending Backup Path monitoring |

*Inferred from % of submission errors

### [Form Abandonment - Jared to update]((https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ))
| Step # | 526 Page | Week 1 | Week 2| Week 3| Week 4|
|--|--|--|--|--|--|
|Step 1| 
|Step 2|
|Step 3|
|Step 4|
|Step 5|
|Step 6|
|Step 7|
|Step 8|
|Step 9|
|Step 10|

## Summary of Medallia survey data

### Overall 526ez
|**Data point**|**Baseline (2024)**|**Pre-Launch**| **Week 1** | **Week 2**| **Week 3**| **Week 4**|
|--|--|--|--|--|--|--|
|**CSAT-Intercept**| 37.7%|41.9% | | |
|**Feedback satisfaction**|2.3|2.8|
|**Task completion**| 26% | 44.5% | | |
|**Trust Overall (High distrust 1 to high trust 5)**|3.53| 3.29 | | |
|**Trust Gained/Lost (Percent difference from increase and decrease)**|-6.1%| 9.2% | | |

### Toxic Exposure feature
|**Data point**| **Week 1** | **Week 2**| **Week 3**| **Week 4**|
|--|--|--|--|--|
|**CSAT-Intercept**| | | | |
|**Feedback satisfaction**|||
|**Task completion**| | | | |
|**Trust Overall**| | | | |
|**Trust Gained/Lost**| | | | |

### **Themes across Medallia survey responses**
I coded all qualitative user feedback--see Appendix for full list of codes/themes and definitions. 

**Top themes**
|Rank|Pre-launch (6 weeks)| Week 1 of launch| Week 2 of launch| Week 3 of launch| Week 4 of launch|
|--|--|--|--|--|--|
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
|Rank|Pre-launch (6 weeks)|Week 1 of launch|Week 2 of launch|Week 3 of launch|Week 4 of launch|
|--|--|--|--|--|--|
|-|Total responses (462)||||||
|1| Introduction (116 / 25%)|||||
|2| Confirmation (76 / 16%)|||||
|3| Start (64 / 14%)|||||
|4| Review & Submit (19 / 4%)| ||||

**Intercept survey**
|Rank|Pre-launch (6 weeks)|Week 1 of launch|Week 2 of launch|Week 3 of launch|Week 4 of launch|
|--|--|--|--|--|--|
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
