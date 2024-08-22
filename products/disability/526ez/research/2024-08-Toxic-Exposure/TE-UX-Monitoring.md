
# UX Monitoring Toxic Exposure Launch

**Office of the CTO - Digital Experience (OCTO-DE), 526EZ, DBEX 1**

**Dates:** August-September 2024

**Product/UX:** Jared Pace [Jared.pace@agile6.com] & Evelyn Hilbrich Davis [evelyn@cityfriends.tech] 

## Background
We are monitoring the 1.0 launch of the new Toxic Exposure feature for the 526ez, starting at 5% in late August 2024. This report will document the change in user feedback and GA4 data over time with the goal of capturing any issues reuslting from the launch. 

Before launch, we reviewed Medallia survey data **from July 1-August 9** to help set a baseline for the 526ez user experience. This 6 week period of data will appear in charts as "Pre-launch." [See report here.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2024-08-Toxic-Exposure/2024-08-Medallia-Review.md).

### Schedule of reporting
Every Friday after the first full week of the rollout, we will request Medallia data from Contact Center and share the report on the data from the previous week. 
|**Report**|**Dates**| **Rollout %**| **Submit reporting**|
|--|--|--|--|
|**Week 1** | Aug 28 - Sep 6 | (5%-10%)| Sep 13? |
|**Week 2**| Sep 7 - 14 | (10-50%) | |


## Summary of GA4/Data Dog
### Overall 526ez

| Product KPI | Baseline  | Target | Pre-Launch | Week 1 | Week 2| Week 3| Week 4| Data Source |
|--|--|--|--|--|--|--|--|--|
| Abandonment rates| 24% | ≤ 24% | | | | | | [Domo](https://va-gov.domo.com/page/447193050/kpis/details/1994399128?pfilters=%5B%7B%22column%22:%22form_name%22,%22operand%22:%22IN%22,%22values%22:%5B%22Form%2021-526EZ%20-%20Original%20Disability%20Claim%22%5D,%22dataType%22:%22string%22,%22affectedCardUrns%22:%5B%5D,%22label%22:%22form_name%22,%22key%22:%22form_name:%22,%22dataSourceId%22:%22e83cb7cf-0e3d-4699-89b3-761589681307%22%7D%5D)<br>[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
| Form exits | | | | | | | | |
| TE Opt-in rate % | | | | | | | |[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)                                                              |
| Submission errors | 0.62% | ≤ 0.62% | | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
|% of submissions that use normal path| 99.38% | 99.38%*  | | | | | | [v0 Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/y2b-q9c-7pb)<br>[LH Submit errors](https://vagov.ddog-gov.com/s/f327ad72-c02a-11ec-a50a-da7ad0900007/94n-6kh-g5e) |
| % of uses of backup and failsafe path | | | | | | || Pending Backup Path monitoring |

*Inferred from % of submission errors


### Toxic Exposure pages [define range]
| KPI | Baseline  | Target | Pre-Launch | Week 1 | Week 2| Week 3| Week 4|Data Source|
|--|--|--|--|--|--|--|--|--|
| Abandonment rate                        | 24%       | ≤ 24%           ||||  |                            | [Domo](https://va-gov.domo.com/page/447193050/kpis/details/1994399128?pfilters=%5B%7B%22column%22:%22form_name%22,%22operand%22:%22IN%22,%22values%22:%5B%22Form%2021-526EZ%20-%20Original%20Disability%20Claim%22%5D,%22dataType%22:%22string%22,%22affectedCardUrns%22:%5B%5D,%22label%22:%22form_name%22,%22key%22:%22form_name:%22,%22dataSourceId%22:%22e83cb7cf-0e3d-4699-89b3-761589681307%22%7D%5D)<br>[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ) |
| Form exits                                                            |       |    |                                               |       ||||                                                       |
| Opt-in rate %                                                            |           |              ||||   |                              |[526 Toxic Exposure GA](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/BtqeUqzLR3y7cFsUETgZwQ)            

## Summary of Medallia survey data

### Overall 526ez
|**Data point**|**Baseline (2024)**|**Pre-Launch**| **Week 1** | **Week 2**| **Week 3**| **Week 4**|
|--|--|--|--|--|--|--|
|**CSAT-Intercept**| 57%| | | |
|**Task completion**| 26% | | | |
|**Trust Overall**| | | | |
|**Trust Gained/Lost (Percent difference from increase and decrease)**|.22| | | |

### Toxic Exposure pages [define range]
|**Data point**|**Baseline (2024)**|**Pre-Launch**| **Week 1** | **Week 2**| **Week 3**| **Week 4**|
|--|--|--|--|--|--|--|
|**CSAT-Intercept**| | | | |
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
1. Answer
2. Answer
3. Answer
4. Answer
5. Answer
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
|Code|Feedback count| Intercept count|Definition|
|--|--|--|--|
|Usability|  |--|Responses that describe specific usability issues not encompassed by other tags. Examples include character limits, inability to update prefill, not being able to continue, etc.|
|PACT| |--| Responses that reference Toxic Exposure or the PACT Act|
|Error| |--| Responses that describe an error message they came across in the form |
|Navigation | || Responses that describe moving from one part of the application to another and wayfinding |
|Getting help| || Responses that describe seeking help from the hotline, VSOs, professionals, or other sources|
|Evidence/evidence upload| ||Responses that describe evidence or medical records, uploading or downloading|
|Pain point| ||Responses that express distress or frustration, but don’t fall into another tag |
|Submission|  |--| Responses that describe submitting their form and/or the confirmation page|
|Intent to File| | -- |Responses that reference Intent to File or upcoming ITF deadlines|
| Bright spot|  || Positive feedback or something that’s working well|
|General| || Responses that included non-specific qualitative information, such as "filing"|
