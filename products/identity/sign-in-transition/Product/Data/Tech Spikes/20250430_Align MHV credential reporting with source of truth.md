# Spike: Align MHV Credential Reporting with Source of Truth
**Completed:** April 30, 2025  
**Contributors:** Dennis O'Neill, Steve Dickson, Bess Green  
**Jira Ticket:** [SIT-202](https://jira.devops.va.gov/browse/SIT-202)

## Situation
Currently, six graphs in the *Credential Segments* section of the SSiT Domo dashboard use **AuthDB** as the primary data source. While AuthDB accurately reflects DSL, ID.me, and LiG credential counts, it significantly **overstates MHV credential usage** — reporting over 2.1 million users with MHV credentials, 500k of which do not have modern credentials.

In contrast, the actual **MHV data source**, which we consider the system of record, reports only ~2,000 active MHV users. This discrepancy results in **inflated totals** and **misleading views of credential distribution**.

Of the six graphs, four currently display MHV credential data directly and are the primary candidates for correction:
1. Users with ID-verified DS Logon, MHV, ID.me, or Login.gov Credentials - Monthly
2. Users with ID-verified DS Logon, MHV, ID.me, or Login.gov Credentials - Weekly
3. Users with ID-verified MHV or DS Logon Credentials - Monthly
4. Users with ID-verified MHV or DS Logon Credentials - Weekly

These graphs are most affected by the inflated counts from AuthDB and require updates to reflect accuracte MHV data going forward. 

---

## Challenges
- **Inaccurate MHV Data**: AuthDB includes outdated or unmodernized credentials, creating a distorted picture of MHV usage.
- **Skewed Totals**: Dashboards combining all credential types reflect inflated numbers due to the AuthDB MHV data.
- **Data Trustworthiness**: Confidence in reports may suffer when inconsistencies between sources become apparent.
- **Historical Data Tradeoffs**: The MHV source only retains approximately 6 months of data, whereas AuthDB provides a longer history.

---

## Options & Recommendations

| Category   | Option A:<br>**Remove MHV Credential from AuthDB-driven charts** | Option B:<br>**Use MHV Source for MHV credentials, retain AuthDB for others** | Option C:<br>**Do Nothing** |
|------------|------------------------------------------------|--------------------------------------------------------------|-----------------------------|
| **Summary** | Remove MHV credential data from the four graphs; keep AuthDB for other CSPs. | Use MHV as the source of truth for MHV credentials; retain AuthDB for DSL, ID.me, and LiG. | Leave everything as-is with AuthDB providing all credential data, including MHV. |
| **Pros** | - Simple to implement (½ sprint)<br>- Minimal dashboard change | - Accurate representation of MHV<br>- Maintains full credential view<br>- Preserves recent (6-month) MHV history | - No engineering effort<br>- No disruption to existing dashboards |
| **Cons** | - Creates different reporting pattern (MHV missing from some charts)<br>- Partial view of credential usage in 4 graphs<br>- Loses all MHV history in charts | - Slightly longer to implement<br>- Added complexity to transforms<br>- MHV history limited to 6 months | - Continues to show inflated MHV counts<br>- Potentially undermines confidence in reporting |
| **Verdict** | Quick fix, but loses MHV credential history. | Best balance of accuracy and visibility.<br>**Chosen path forward.** | Not recommended due to ongoing inaccuracy. |

---

## Next Steps
Following a review with our Product Owner on 4/30, the team agreed to move forward with **Option B: Use MHV as the source for MHV credential data** in the 4 Credential Segment graphs:
- Update the data pipeline to pull MHV credential data directly from the MHV source.
- Continue using AuthDB for DSL, ID.me, and LiG.
- Accept that **MHV history will be limited to ~6 months**, which is sufficient for our reporting needs.
- Ensure existing dashboard structure is preserved; update only the underlying data sources.
