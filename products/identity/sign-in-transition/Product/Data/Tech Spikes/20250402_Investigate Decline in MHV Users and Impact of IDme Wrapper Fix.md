# Spike: Investigate Decline in Active, Premium MHV Users & the Impact of the ID.me Wrapper Fix
**Completed:** April 2, 2025  
**Contributor:** Steve Dickson   
**Jira Ticket:** [SIT-864](https://jira.devops.va.gov/browse/SIT-864)

## Situation
Following the decommissioning of the MHV CSP on March 5, we observed a significant decline in Active, Premium MHV users who require a modern credential in the weekly reports.
While a general decline was expected due to the MHV username/password being disabled, the sharper-than-anticipated drop warranted further analysis to confirm expected behavior and identify potential contributing factors, including IAM’s recent fix of the ID.me wrapper. 

## Known Challenges with Reporting Accuracy
Due to discrepancies in reported numbers across different weeks, the reports are not reliable for accurately tracking the number of Veterans signing up for modern credentials each week.
- Historic weekly totals of Users with MHV Accounts needing Modern Credentials are shifting week to week instead of remaining static. 
- Prior weekly reports show increasing numbers of users needing modern credentials, rather than remaining stable. It is expected that the historic values remain unchanged.
Up to the week beginning 3/2, the historic values dropped by about 6k. This could be due to a number of factors, including accounts becoming inactive. After 3/9, historic values shifted, showing an increase in users needing modern credentials.

### Historical Reporting Data of Total MHV Users Needing Modern Credentials
| Week  | Reported on 3/30 | Reported on 3/23  | Reported on 3/16 | Reported on 3/9 |
| :---- | :---- | :---- | :---- | :---- |
| 3/2 \- 3/9 | 1,005,048 | 988,680 | 966,627 | 922,653 |
| 3/9 \- 3/16 | 946,693 | 930,005 | 907,189 | N/A |
| 3/16 \- 3/23 | 893,542 | 876,821 | N/A | N/A |
| 3/23 \- 3/30 | 852,151 | N/A | N/A | N/A |

### Context & Contributing Factors
Each week, we are generating the historic trend using only the latest AuthDB snapshot (see [Appendix](#Approaches-for-Reporting-of-Historic-Credential-Totals) for rationale). Among other reasons, this was done based on the assumption that the record creation dates remain static. While there are benefits to this approach for generating the history, it is susceptible to a changing history week-over-week due to: 1) complexities in the data, data flow and calculations, and 2) modifications to certain data values which were assumed to be static across reporting periods (e.g. record creation date).

### Key Events Impacting Credential Counts
- **MHV CSP Decommissioning (March 5):** Expected to drive an increase in the number of Veterans signing up for modern credentials.  
- **IAM Data Fix (March):** Deployed to address a data privacy issue, this fix involved unlinking and deactivating ID.me credentials which were being used via the ID.me wrapper, but which weren’t necessarily identity-proofed. These credentials targeted for unlinking are identified by a 200VIDM CSP identifier and with either an “IDME_MHV” or “IDME_DSL” in the CSP Method field.  

From our prior analysis into the anticipated impact from the IAM data fix, we identified approximately 40k Veterans who would shift into the category of needing a modern credential until they logged in again with a modern credential (see [Appendix](#Causes-for-Anticipated-Spike-of-~40k-Users-Needing-Modern-credentials) for details).

## Findings & Observations
1. The expected shift of 40k Veterans into the “needing modern credential” category likely occurred, but concurrent impacts from the IAM datafix and the disabling of MHV Option 2 make it difficult to isolate this effect.
2. The number of Veterans needing modern credentials continue to drop weekly, even during the IAM data fix rollout. Since the MHV CSP was disabled around the same time, it is expected that there would be a spike in users transitioning to modern credentials.
3. The IAM datafix affected not only the current week’s numbers, but also the generation of the full weekly/monthly history calculations. Furthermore, once users log in again, a new credential record will be created and linked with AuthDB, along with a new record creation date. Thus, the generated history is aligning with the new record creation dates in IAM and giving a false indication of increased ID.me adoption.
4. There are about 11k 200VIDM records unlinked which had an “IDME” CSP method, versus the expected focus on unlinking records with “IDME_MHV” or “IDME_DSL” CSP methods. It is possible that these are records associated with the privacy issue. It’s also likely that this number was higher, but that Veterans have since logged in again.

### Unlinked 200VIDM Records (Veterans who haven’t logged back in) 
As of the 3/30 AuthDB data extract, a total of 1,738,064 200VIDM records remain unlinked/deactivated where the Veteran has not yet logged back in with ID.me. Breakdown by CSP method: 
- IDME_MHV: 977,284
- IDME_DSL: 748,118 
- IDME: 11,654 
- Null: 1,008 

Determining how many of these users have logged back in since their credentials were unlinked would require further investigation, estimated ~1 day of work. Note that only the CSP Methods of “IDME” or “Null” will impact the segment totals within our MHV reports.

## Options & Recommendations

|  | Option 1: Expand use of SSOe authentication transaction data | Option 2: Retain and use snapshots of input data sources | Option 3: Capture a snapshot of transformation output |
|------------|--------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| **Approach** | Use SSOe data to reintroduce missing users (~12.6k) and retain credential history for both the 12.6k and ~40k users whenever they log back in. | Revert to a snapshot-based approach for historical reporting to ensure consistency, preserving trends even when credentials are removed. Track data source changes to reflect the impact of data cleanup. | Capture transformation output as a snapshot to ensure consistency in reporting. Evaluate impact on ‘last active’ filter. Can be combined with Option 1 to account for the ~12k increase in reported Veterans needing modern credentials due to the IAM fix. |
| **Level of Effort** | ~1 day | ~3 sprints | ~2 sprints |
| **Pros** | - Low effort to implement. <br> - Maintains more accurate credential history with minimal changes to existing transformations. | - Provides a reliable historical record. <br> - Preserves trends even when credentials are removed. | - Solves ‘revisionist history’ issue and ensures consistency across weekly reports. <br> - May reduce processing time by only generating the current month. <br> - Could support history retention versus the current 12-month history limitation due to processing time constraints. |
| **Cons** | - Does not prevent the initial spike of ~40k users needing modern credentials-only improves accuracy once they log back in. | - Requires significant effort to overhaul existing transformations. <br> - Complexity in aligning datasets on different update schedules. <br> - May require additional calculations for total reporting in periods that don’t align with snapshot dates. <br> - Requires rebaselining reports with no history (or additional steps to seed history). | - May not support filtering by users’ last active date without a major design overhaul or tradeoffs in performance. <br> - Adds complexity to reporting. <br> - Requires rebaselining reports with no history (or additional steps to seed history). |

## Suggested Next Steps
1. Investigate the 11k unlinked “IDME” CSP method records and confirm their impact with IAM.
2. Implement **Option 1** (SSOe data usage) for immediate reporting stability. 
3. Assess feasibility and tradeoffs of **Option 3** (snapshot approach) as a long-term solution.
4. Regroup with POs on long-term strategy for using **MPI as source of truth**.
   
---

# Appendix

### Approaches for Reporting of Historic Credential Totals
|   | Generated History (Current Process) | Snapshots (Alternative Approach) |
|------------|------------------------------------|--------------------------------|
| **Approach** | Calculates history based on credential fields (e.g., record creation date) rather than storing past snapshots. | Retains snapshots from each reporting period and uses them to track historical totals. |
| **Pros** | - Does not rely on receiving data every period and can generate a complete history. <br> - Requires only the most recent snapshot. <br> - Enables faster processing of transformations. | - Ensures consistent reporting across different reporting windows. <br> - Data corrections are applied proactively rather than retroactively. <br> - Can reduce complexity depending on reporting requirements (e.g., if only reporting on a single snapshot and only on received dates). |
| **Cons** | - Susceptible to revisionist history. <br> - Prone to errors due to the complexity of transformations for history generation. | - Requires storing large datasets (~20M records/week), leading to potential cost concerns. <br> - Long processing times (~4 hours for six months of data, increasing as data volume grows). <br> - Gaps may occur if snapshots are missing from certain weeks. <br> - Complexities in aligning snapshots from multiple data sources arriving at different times. |

### Causes for Anticipated Spike of ~40k Users Needing Modern Credentials
Several factors contributed to the ~40k spike in reported users needing modern credentials:
1. **AuthDB tracking limitations** - AuthDB does not distinguish users who initially logged in with an MHV credential via the ID.me wrapper and later logged in directly with a verified ID.me account. 
2. **User identification discrepancy** - We only receive user identifiers from AuthDB when a linked credential exists for an active user.

**Note:**  SSOe data could account for the missing users but since it can’t tell us which user accounts were deactivated and dropped from AuthDB on purpose, we are unable to use it to address these ~40k users.
