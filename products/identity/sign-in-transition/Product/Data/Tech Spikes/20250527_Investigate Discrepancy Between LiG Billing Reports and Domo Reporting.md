# Spike: Investigate Discrepancy Between Login.gov and VA Domo Usage Reporting  
**Completed:** May 27, 2025  
**Contributors:** Steve Dickson\
**Jira Ticket:** [SIT-1026](https://jira.devops.va.gov/browse/SIT-1026)

## Situation  
Our Product Owner requested an investigation into the discrepancy between usage metrics reported by Login.gov and those reflected in VA Domo dashboards for March 2025. Specifically, there were notable differences in both **monthly active users** and **newly billed users**:

| Metric | Login.gov Reported | VA Domo Reported | Discrepancy |
|--------|--------------------|------------------|-------------|
| Monthly Active Users | 1,051,223 | 881,393 | ~170,000 |
| New Billed IdV Users | 224,091 | ~174,000 | ~50,000 |

Initial assumptions suggested that some of the discrepancy could be due to Login.gov’s billing cycle, including reactivated users being counted as new. Further analysis was required to validate this and explore other potential contributing factors.

## Findings  

### Active Users  
- Domo reported **881,393** unique Login.gov users at IAL2.
- SSOe logs included **216,153** additional IAL1 users.

Breakdown of available auth data:
- **Login.gov IAL1 & IAL2 (SSOe + VA.gov):** 899,821  
- **Login.gov IAL2 (SiS-only):** 102,879  
- **Combined unique Login.gov authentications (IAL2 + SSOe IAL1):** 1,002,690

### New Users  
- Login.gov’s “Newly Billed IdV Users (Year 1)” may include:
    - First-time users  
    - Users reactivating after their 1-year or 5-year billing cycle reset  
- Using 7 months of SSOe data, **56,000 reactivations** were identified in March. 
    - This significantly narrows the gap between Login.gov and Domo’s new user counts.
    - SiS transaction data would increase this number further, but was not included in this analysis.

### ICN Assignment Clarification  
- Only **ID-verified (IdV)** Login.gov accounts receive an **ICN**.
- All users captured in Domo’s Login.gov dataset are IdV (IAL2), meaning they should have ICNs.

## Challenges  
- **Double-counting risk** when users transition from IAL1 to IAL2.
- **Different definitions** of "new users" (e.g., billing vs. actual first-time use).
- **Data silos** between SSOe, VA.gov, SiS, and Login.gov reporting systems.

## Potential Next Steps  
- **Align definitions**: Confirm with Login.gov how “Newly Billed IdV Users” is calculated and how reactivations are included.
- **Incorporate SiS data**: To complete the picture and reduce underreporting in Domo.
- **Deduplication logic**: Consider excluding known IAL1→IAL2 transitions within reporting windows to reduce overcounting.
