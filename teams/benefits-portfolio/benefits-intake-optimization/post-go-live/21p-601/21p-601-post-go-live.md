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
| Enhancement | Description | Category | Layer | Status | SME Testing | Story | PR | Merged Date | Prod Date |
| -- | -- | -- | -- | -- | -- | -- | -- | -- | -- |
| Accessibility issues - Link should open in new tab, doesn’t follow content guidelines |  | Staging Finding | Front-end | Complete | N | [127766](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127766) | [40986](https://github.com/department-of-veterans-affairs/vets-website/pull/40986) | 12/30/2025 |  |
| Remove unnecessary content from widget |  Content team that uses the widget requested we remove this text to better match content conventions | Vendor Team Suggestion | Front-end | Complete | N | [128831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128831) | [41133](https://github.com/department-of-veterans-affairs/vets-website/pull/41133) | 01/02/2026 |  |
| Inconsistent use of optional |  | SME Request |  | Complete |  | [12777](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12777) | [40990](https://github.com/department-of-veterans-affairs/vets-website/pull/40990) | 01/02/2026 |  |
| Remove header from widget | Content team that uses the widget requested we remove this text so they could shift it out of the widget and into the parent Drupal page | Vendor Team Suggestion | Front-end | Complete | N | [128831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/128831) | [41136](https://github.com/department-of-veterans-affairs/vets-website/pull/41136) | 01/05/2026 |  |
| Use va-introtext class on description | Non-functional styling change to meet platform style requirements (this was a non-blocking staging finding) | Staging Finding | Front-end | Complete | N | [123793](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123793) | [41542](https://github.com/department-of-veterans-affairs/vets-website/pull/41542) | 01/20/2026 |  |
| Remove extra line breaks on intro page | Text flow improvement | Staging Finding | Front-end | Complete | N | [123819](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123819) | [41538](https://github.com/department-of-veterans-affairs/vets-website/pull/41538) | 01/20/2026 |  |
| Spell out full form names in intro page | Non-blocking staging finding. Rather than just referencing other form numbers, we needed to expand those designations to include full form names for clarity | Staging Finding | Front-end | Complete | N | [123815](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123815) | [41537](https://github.com/department-of-veterans-affairs/vets-website/pull/41537) | 01/20/2026 |  |
| Update OMB number and expiration date | Updates OMB expiration to match that provided on the PDF | Form-Related Update | Front-end | Complete | N | [127557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/127557) | [41482](https://github.com/department-of-veterans-affairs/vets-website/pull/41482) | 01/20/2026 |  |
| Fix apartment unit field in PDF mapper | Update PDF mapper so that non-digit characters in the "apt number" field get stamped in the PDF | Form-Related Update | Back-end | In Development | N | [130195](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130195) | [26149](https://github.com/department-of-veterans-affairs/vets-api/pull/26149) |  |  |
| MMS/GCIO Integration |  | Form-Related Update |  | In Development |  | [130768](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130768) |  |  |  |
| Submitting button low contrast |  | Staging Finding |  | In Development (Platform dependency) |  | [123825](https://github.com/department-of-veterans-affairs/va.gov-team/issues/123825) |  |  |  |
| Find a form search results page content |  | Vendor Team Suggestion |  | Proposed |  | [130091](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130091) |  |  |  |
| Find a form page content |  | Vendor Team Suggestion |  | Proposed |  | [130092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130092) |  |  |  |
| Add Benefit Reinstatement Education |  | Vendor Team Suggestion |  | Proposed |  | [130113](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130113) |  |  |  |
| Explain One-Year Deadline |  | Vendor Team Suggestion |  | Proposed |  | [130114](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130114) |  |  |  |
| Clarify Executor Documentation Requirements |  | Vendor Team Suggestion |  | Proposed |  | [130116](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130116) |  |  |  |
| Plain Language for "Waiver of Substitution" |  | Vendor Team Suggestion |  | Proposed |  | [130171](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130171) |  |  |  |
| Remove Four-Expense Entry Limit |  | Vendor Team Suggestion |  | Proposed |  | [130173](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130173) |  |  |  |
| Explain "Additional Remarks" |  | Vendor Team Suggestion |  | Proposed |  | [130174](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130174) |  |  |  |
| Remove redundant yes/no question to debt flow |  | Vendor Team Suggestion |  | Proposed |  | [130272](https://github.com/department-of-veterans-affairs/va.gov-team/issues/130272) |  |  |  |

**Categories:** SME requirement/request, Staging Finding, Form-Related Update, Vendor Team Suggestion  
**Layer:** Front-end, Back-end, Both  
**Statuses:** Proposed, In Development, Staging/Testing, Complete  
**SME Testing:** Y/N is SME testing seemingly required  
