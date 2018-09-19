# WBC Cross-Platform Dashboard #
**Objective:**

* Track performance of preview.va.gov and post-WBC VA.gov, evaluating cross-platform data sources.
* Provide dashboard reporting on KPIs and metrics we will monitor for WBC and ongoing into the future.
* Provide up to date information as brand consolidation takes place.

Beyond dashboarding, additional detailed reporting is also expected to take place following relaunch. That research which will be a longer-term project to tell the story of WBC success.

## Data Sources ## 
* Google Analytics
* CX (ForeSee/Medalia)
* Call Centers (WBC, others TBD)
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
          * Daily active users
          * LOA3 Abandons / Failures
          * Others TBD
* GA Users, Sessions, Traffic
* Top Search Terms
     * Changes in Top Search Terms
          * New and Decreasing terms
* Site Performance (Page load times, error rates, others TBD)
* CX/Satisfaction Data from ForeSee/Medallia
* Call Center Metrics
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
| WBC Call Center | Call volume, escalations | Y | Weekly |
| Other Call Centers | Call volume, escalations, offline transactions | N | Unknown |
| Search | Top search terms, change in search terms, ... | N | Unknown |
| Error Logging | Failed transactions, system errors, other errors | N | Unknown |
| ID.me | Total accounts, LOA levels, federation of other account types, daily active users, LOA3 abandons and failures | Y | Limited/Weekly |
| Total/Offline Transactions | Total applications by product area, by equivalent tool, by mode | N | Unknown |
| 508 & Accessibility *(if possible)* | Complaints, reports of issues, other metrics TBD | N | Unknown |

## Next Steps In Progress ## 
* Access remaining data sources 
* Centralize data in reporting system
* Generate dashboards and reports
