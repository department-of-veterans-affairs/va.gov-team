# 21P-601 Post Go-Live Information
Production URL: [21P-601 Apply For Accrued Benefits Online](https://www.va.gov/family-and-caregiver-benefits/survivor-compensation/apply-for-accrued-benefits-form-21p-601/introduction)  
Launch Date: 12/19/2025

## Submission Tracking
- Datadog Dashboard: [BIO-HEART Simple Forms API submissions](https://vagov.ddog-gov.com/dashboard/xhy-ewx-dsr/bio-heart---simple-forms-api?fromUser=false&refresh_mode=sliding&from_ts=1768510855576&to_ts=1769115655576&live=true)
- Google Analytics: [BIO-HEART Form Metrics](https://analytics.google.com/analytics/web/#/analysis/a50123418p419143770/edit/63Ngko26SZO0TupVarOq4A) *requires VA network
- Individual Submission Tracker: [21P-0601 Post-Go-Live Submission Tracker.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/raw/refs/heads/master/teams/benefits-portfolio/benefits-intake-optimization/post-go-live/21p-601/21P-601%20Post-Go-Live%20Submission%20Tracker.xlsx)

### Submission Stats
Expected Annual Submission: 3790  
| Date     | # Week | Total | % of Year |
|----------|--------|-------|-----------|
| 12/23/25 | 0      | 0     |           |
| 12/30/25 | 0      | 0     |           |
| 01/06/26 | 0      | 0     |           |
| 01/13/26 | 1      | 1     | 0.0%      |
| 01/20/26 | 4      | 5     | 0.1%      |
| 01/27/26 | 0      | 5     | 0.1%      |

## Post-MVP Enhancements
| Update Type | <div style="width: 300px;">Title / Description</div> | Category | Due Near-Term? | Layer | SME Discussion? | SME Testing? | Status | Story | Staging PR | Staging Merged Date | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Finding | **New tab link accessibility issue** <br> Link should open in new tab, doesn’t follow content guidelines | Staging Finding | - | Front-end |  | N | Complete | [127766](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127766) | [40986](https://github.com/department-of-veterans-affairs/vets-website/pull/40986) | 12/30/2025 |  |
| Finding | **Remove unnecessary content from widget** <br> Content team that uses the widget requested we remove this text to better match content conventions | Vendor Team Suggestion | - | Front-end |  | N | Complete | [128831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128831) | [41133](https://github.com/department-of-veterans-affairs/vets-website/pull/41133) | 01/02/2026 |  |
| Enhancement | **Inconsistent use of optional** | SME Request | - | Front-end |  |  | Complete | [12777](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12777) | [40990](https://github.com/department-of-veterans-affairs/vets-website/pull/40990) | 01/02/2026 |  |
| Enhancement | **Remove header from widget** <br> Content team that uses the widget requested we remove this text so they could shift it out of the widget and into the parent Drupal page | Vendor Team Suggestion | - | Front-end |  | N | Complete | [128831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128831) | [41136](https://github.com/department-of-veterans-affairs/vets-website/pull/41136) | 01/05/2026 |  |
| Finding | **Use va-introtext class on description** <br> Non-functional styling change to meet platform style requirements (this was a non-blocking staging finding) | Staging Finding | - | Front-end |  | N | Complete | [123793](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123793) | [41542](https://github.com/department-of-veterans-affairs/vets-website/pull/41542) | 01/20/2026 |  |
| Finding | **Remove extra line breaks on intro page** <br> Text flow improvement | Staging Finding | - | Front-end |  | N | Complete | [123819](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123819) | [41538](https://github.com/department-of-veterans-affairs/vets-website/pull/41538) | 01/20/2026 |  |
| Update | **Spell out full form names in intro page** <br> Non-blocking staging finding. Rather than just referencing other form numbers, we needed to expand those designations to include full form names for clarity | Staging Finding | - | Front-end |  | N | Complete | [123815](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123815) | [41537](https://github.com/department-of-veterans-affairs/vets-website/pull/41537) | 01/20/2026 |  |
| Update | **Updates OMB expiration to match that provided on the PDF** | Form-Related Update | - | Front-end |  | N | Complete | [127557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127557) | [41482](https://github.com/department-of-veterans-affairs/vets-website/pull/41482) | 01/20/2026 |  |
| Update | **Fix apartment unit field in PDF mapper** <br> Update PDF mapper so that non-digit characters in the "apt number" field get stamped in the PDF | Form-Related Update | - | Back-end | N | N | In Progress | [130195](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130195) | [26149](https://github.com/department-of-veterans-affairs/vets-api/pull/26149) |  |  |
| Enhancement | **MMS/GCIO Integration** | Form-Related Update | - | Back-end | N | N | In Progress | [130768](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130768) |  |  |  |
| Finding | **Submitting button low contrast** | Staging Finding | - | Front-end |  |  | In Progress (Platform dependency) | [123825](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123825) |  |  |  |
| Enhancement | **Find a Form search results page content** <br> Include a link to the online tool and update the form name. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130091](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130091) |  |  |  |
| Enhancement | **Find a Form page content** <br> Include a link to the online tool and update the form name. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130092) |  |  |  |
| Enhancement | **Add Benefit Reinstatement Education** <br> A surviving spouse whose remarriage has ended needs to understand they may be eligible to have their benefits restored. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130113](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130113) |  |  |  |
| Enhancement | **Explain One-Year Deadline** <br> A surviving family member dealing with a recent loss needs to understand the one-year filing deadline and the consequences of missing it so they can act in time. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130114) |  |  |  |
| Enhancement | **Clarify Executor Documentation Requirements** <br> An executor filing Form 21P-601 needs clear guidance on what documentation VA accepts and when it's required to avoid submission errors and claim delays. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130116](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130116) |  |  |  |
| Enhancement | **Plain Language for "Waiver of Substitution"** <br> Someone unfamiliar with legal terminology needs a plain-language explanation of "waiver of substitution" with examples to make an informed decision about pending claims. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130171](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130171) |  |  |  |
| Enhancement | **Remove Four-Expense Entry Limit** <br> Someone with multiple funeral, medical, and estate expenses needs the ability to add more than 4 expenses so they can claim all eligible costs without combining or omitting items. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130173](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130173) |  |  |  |
| Enhancement | **Explain "Additional Remarks"** | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130174](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130174) |  |  |  |
| Enhancement | **Remove redundant yes/no question to debt flow** <br> When a user answers "no" to whether the beneficiary had outstanding debts, the form should not immediately ask if they have a debt to add. | Vendor Team Suggestion | - | Front-end | Y | Y | Not Started | [130272](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130272) |  |  |  |

**Update Type:** Enhancement, Update, Finding, Defect Fix, or Bug Fix  
**Categories:** SME Requirement/Request, Staging Finding, or Vendor Team Suggestion  
**Layer:** Front-end, Back-end, Both  
**Statuses:** Not Started, In Progress, Blocked, or Complete  
