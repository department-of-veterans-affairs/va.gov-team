# 10-10EZ Short Form Release plan

## Phase 1: UAT

### Planning
- UAT Go / No Go: 06/06/2022
- Link to [Readiness Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Short%20Form/UAT%20Readiness%20Checklist.md)
- Desired range or test duration: 06/10/2022 - 06/17/2022
- Desired number of users: 9
- Recruitment method: Perigean
- How testing will be conducted: Sessions over Zoom
- How users will be given access without making it fully available in production: Feature flag

### Results
- Number of users: 10
- Number of bugs identified / fixed: 0
- UX/Content changes required, based on feedback, logs, or challenges
  -  [Replace the self-report first alert (you are on step 3 of 4) with the green expandable alert that is on all following pages](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43434)
  -  [Blue confirm page to be updated](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43435)
  -  [Authenticated immediate alert- updated](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43438)
  -  [Remove the text on the authenticated immediate alert page](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43440)
  -  [Check short form specific pages on mobile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43443)


## Phase 2: Staged Rollout

### Planning
- Launch Go / No Go: 07/21/2022
- Desired date range: 7/25/2022 - 7/29/2022
- Success criteria to be reviewed prior to advancing rollout to the next stage
  - Completion rate of short form
  - Minimal to no increase in drop off rate in short form sections
- Dashboards showing success criteria metrics
  - [Domo Dashboard](https://va-gov.domo.com/page/447193050)
  - [Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?from_ts=1657212129534&to_ts=1657215729534&live=true)
  - 

### Phased Rollout
- 5% of users (2 days): 07/25/2022 - 7/27
- 100% of users (1 week): 07/27/2022 (based on positive results)


## Go Live!

### Planning
- Desired date: 07/11/2022
- Actual date: 07/28/2022

**Key Result:** Increase number of application submissions
*Use last 6 months to calculate Baselines*
| KPI / Metric | Baseline: TBD | Post-launch Week 1 | Post-launch Month 1 |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Submissions per Month | 13.5k | TBD | TBD |
| Pct. Applications Completed | 44.2% | TBD | TBD |

**Key Result:** Reduce Sesssions / Time taken to complete application 
| KPI / Metric | Baseline: TBD | Post-launch Week 1 | Post-launch Month 1 |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Sessions per Submission | 1.38 | TBD | TBD |

**Key Result:** Reduce abandoned applications
*To calculate, check how many people started the application (use the actual number, not the gimongous number) and compare it to how many people left during the household information section*
| KPI / Metric | Baseline: 3/22 - 6/22 | Post-launch Week 1 | Post-launch Month 1 |
| ------------ | ------------- | ------------------ | ------------------- |
| Avg. Applications Abandoned | TBD | TBD | TBD |
| Pct. Applications Abandoned | TBD | TBD | TBD |


## Post-Launch Questions
1. How do the KPIs you gathered compare to your pre-launch definition(s) of *success*?
2. What qualitative feedback have you gathered from users or other stakeholders, if any?
3. Which of the assumptions you listed in your product outline were / were not validated?
4. How might your product evolve now or in the future, based on these results?
