# WBC Cross-Platform Dashboard #
**Objective:**

* Track performance of preview.va.gov and post-WBC VA.gov, evaluating cross-platform data sources.
* Provide dashboard reporting on KPIs and metrics we will monitor for WBC and ongoing into the future.
* Provide up to date information as brand consolidation takes place.

Beyond dashboarding, additional detailed reporting is also expected to take place following relaunch. That research which will be a longer-term project to tell the story of WBC success.

## Data Sources ## 
* Google Analytics
* CX (ForeSee/Medalia)
* Contact Centers (WBC, others TBD)
* Search
* Error Logging and Performance (Graphana, etc.)
* ID.me

## Metrics ##
Proposed reporting will highlight:
* Transactions from Veteran Facing Tools
     * Self-service transactions relative to total transactions
          * Ideally compared to projected or actual offline transactions in the same period
     * By product area
     * By tool
* User Accounts
     * Total unique user accounts
          * LOA levels
          * Federations from MHV and DSLogon
          * Weekly active users
          * LOA3 Abandons / Failures
          * Others TBD
* GA Users, Sessions, Traffic
     * Referral VA.gov to MHV
     * Referral VA.gov to eBenefits
* Top Search Terms
     * Changes in Top Search Terms
          * New and Decreasing terms
* Site Performance (Page load times, error rates, others TBD)
* CX/Satisfaction Data from ForeSee/Medallia
* Contact Center Metrics
     * Call volume
     * Call escalations by product area
     * Call escalations by tool
* 508 Complaints / Accessibility Issues (TBD if this is possible).
* Others metrics TBD as the reporting evolves.

## Status of Data Sources & Frequency of Access ##

| Data Source  | Metrics | Access (Y/N) | Current Access Frequency | 
| ------------ | ------- | :----------: | :-------: |
| Google Analytics | Online transactions, sessions, users, site latency, conversion funnels, ... | Y | On-Demand |
| ForeSee | Feedback tool (Ratings & Comments), Traffic Capture Survey for pre-post launch | Y | On-Demand |
| Medalia | Feedback tool (Ratings & Comments) | Y | On-Demand |
| WBC Contact Center | Call volume, escalations | Y | Weekly |
| Other Contact Centers | Call volume, escalations, offline transactions | N | Unknown |
| Search | Top search terms, change in search terms, ... | Y | Unknown |
| Error Logging | Failed transactions, system errors, other errors | N | Unknown |
| ID.me | Total accounts, LOA levels, federation of other account types, daily active users, LOA3 abandons and failures | Y | Limited/Weekly |
| Total/Offline Transactions | Total applications by product area, by equivalent tool, by mode | N | Unknown |
| 508 & Accessibility *(if possible)* | Complaints, reports of issues, other metrics TBD | N | Unknown |

## Existing Metrics for August ## 

### User Accounts (Vets.Gov) ###
| Source | Date | Metric | # | 
| ------ | ---- | ------ | - |
| ID.me  | 8/28 | Total Unique User Accounts | 1,285,849 |
| ID.me  | 8/28 | Total ID.me LOA 3 Users | 455,465 |
| ID.me  | 8/28 | Total DSLogon Premium Federations | 406,613 |
| ID.me  | 8/28 | Total MHV Premium Federations | 136,641 |
| ID.me  | 8/28 | Weekly Active Users | 57,222 |
| ID.me  | 8/28 | Weekly LOA3 Abandon/Unsuccessful | 29% |

### GA Traffic ###
| Property | Source | Date | Metric | # | 
| -------- | ------ | ---- | ------ | - |
| Vets.gov | Google Analytics | 8-1 - 8/31 | GA Users | 1,003,039 |
| Vets.gov | Google Analytics | 8-1 - 8/31 | GA Sessions | 1,650,867 |
| Vets.gov | Google Analytics | 8-1 - 8/31 | GA Pageviews | 11,326,520 |
| Vets.gov | Google Analytics | 8-1 - 8/31 | Referrals from VA.gov | 56,504 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | GA Users | 3,953,381 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | GA Sessions | 7,311,530 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | GA Pageviews | 40,832,176 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | Referrals from VA.gov | -- |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | GA Users | 1,438,603 |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | GA Sessions | 6,280,971 |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | GA Pageviews | 36,577,772 |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | Referrals from VA.gov | -- |

### Search ###
| Source | Date | Metric | # | 
| ------ | ---- | ------ | - |
| -- | -- | Top Terms | -- |
| -- | -- | Others TBD | -- |

### Site Performance ###
| Property | Source | Date | Metric | # | 
| -------- | ------ | ---- | ------ | - |
| Vets.gov | Google Analytics | 8-1 - 8/31 | Avg. Page Load Time (s) | 4.11 |
| Vets.gov | Google Analytics | 8-1 - 8/31 | Avg. Server Response Time (s) | 0.42 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | Avg. Page Load Time (s) | 4.66 |
| myhealth.va.gov | Google Analytics | 8-1 - 8/31 | Avg. Server Response Time (s) | 0.61 |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | Avg. Page Load Time (s) | 5.14 |
| ebenefits.va.gov | Google Analytics | 8-1 - 8/31 | Avg. Server Response Time (s) | 1.19 |
| Vets.gov/preview.va.gov | Graphana / Error Logs | -- | TBD | -- |

### CX/Feedback ###
| Property | Source | Date | Metric | # | 
| -------- | ------ | ---- | ------ | - |
| VA.gov | ForeSee | 8/1 - 8/31 | Avg. Satisfaction (1-10 scale) | 6.0 |
| preview.va.gov | ForeSee | -- | Avg. Satisfaction (1-10 scale) | -- |
| VA.gov | ForeSee | 8/1 - 8/31 | CSAT Score | 54.0 |
| preview.va.gov | ForeSee | 8/1 - 8/31 | CSAT Score | -- |
| VA.gov | ForeSee | 8/1 - 8/31 | Success Question *(Did you find what you were looking for today?)* | 52% |
| preview.va.gov | ForeSee | -- | Success Question *(--)* | -- |

### Contact Center (HRC) ###
| Source | Date | Metric | # | 
| ------ | ---- | ------ | - |
| HRC General Dynamics | 8/1 - 8/31 | Calls Handled | 18,701 |

#### Calls by Purpose / Tool (8/1 - 8/31) ####
| Purpose | Calls | Escalation (%) |
| ------- | ----- | -------------- | 
| 21P-527EZ(pension) | 40 | 5% |
| 21P-530(burial) | 17 | 0% |
| 22-1990 | 3531 | 1% |
| 22-1990E | 350 | 0% |
| 22-1990N | 8 | 0% |
| 22-1995 | 584 | 0% |
| 22-5490 | 63 | 0% |
| 22-5495 | 27 | 0% |
| 28-1900(vr&e) | 21 | 0% |
| 40-10007 | 9 | 11% |
| Account | 17 | 18% |
| Appeal Status | 98 | 37% |
| Burial Benefits | 31 | 6% |
| Comp & Pen | 790 | 2% |
| Crisis Call | 1 | 0% |
| Dashboard | 3 | 0% |
| Discharge Upgrade Tool | 46 | 4% |
| Employment Center | 24 | 4% |
| Facility Locator | 65 | 0% |
| GI Bill Comparison Tool | 36 | 8% |
| HCA | 304 | 1% |
| Homepage | 8 | 50% |
| Life Insurance | 22 | 0% |
| Non-Vets.gov | 1089 | 0% |
| Opt Out Info Sharing | 1 | 0% |
| Profile | 19 | 47% |
| Rx Refill | 25 | 0% |
| Secure Messaging | 17 | 0% |
| Sign in/ Sign up | 1890 | 7% |
| Statement of Benefits | 534 | 7% |
| VA Health Records | 21 | 10% |
| VA Home Loan | 65 | 0% |
| VA Letters | 69 | 16% |
| VIC | 4336 | 1% |
| Welcome Kit | 6 | 0% |

### 508 (TBD) ###
--

### Veteran Facing Tools Transactions Detail (8/1 - 8/31) ###
| Veteran Facing Tool | MHV | eBenefits | Vets.gov | V1 Transaction Definition |
| ------------------- | --- | --------- | -------- | ------------------------- |
| VCL | -- | -- | 2354 | Clicks to chat |
| Search | -- | -- | -- | TBD |
| Welcome Kit | -- | -- | 1627 | Downloads of both PDFs |
| Discharge Upgrade | -- | -- | 4804 | Hits to last page |
| Profile Page | -- | -- | 27223 | Saved transactions - login |
| Dashboard Page | -- | -- | 245703 | All transactions - login |
| Claims + Appeals Status | -- | -- | 243271 | View Details & Tracker |
| Download VA Letters | -- | -- | 20087 | GA events: letter downloaded |
| Access Health Records | -- | -- | 5789 | GA events Health Record Download (PDF + Text) |
| Secure Messaging | -- | -- | 12894 | GA events: sent + views |
| Prescriptions Refill | -- | -- | 7063 | GA events: confirmed + track status |
| Health care application 1010-EZ | -- | -- | 13997 | GA events |
| Post-9/11 GI Bill Statement of Benefits | -- | -- | 21,009 | GA events |
| GI Bill Comparison Tool | -- | -- | 111,997 | GA event: View Profile |
| Education benefits application 22-1990 | -- | -- | 28220 | GA events |
| Education benefits application 22-1990E | -- | -- | 6,395 | GA events |
| Education benefits application 22-1990N | -- | -- | 173 | GA events |
| Education benefits application 22-1995 | -- | -- | 26,901 | GA events |
| Education benefits application 22-5490 | -- | -- | 7,601 | GA events |
| Education benefits application 22-5495 | -- | -- | 3,309 | GA events |
| Pension benefits application 21P-527-EZ | -- | -- | 590 | GA events |
| Burial benefits application 21P-530 (incl pre-need) | -- | -- | 590 | GA events |

## Next Steps In Progress ## 
* Access remaining data sources 
* Centralize data in reporting system
* Generate dashboards and reports
