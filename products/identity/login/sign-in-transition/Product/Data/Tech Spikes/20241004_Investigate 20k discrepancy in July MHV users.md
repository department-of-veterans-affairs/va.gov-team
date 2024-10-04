# Spike: Investigate 20k Discrepancy in July MHV Users  
**Completed:** October 4, 2024  
**Contributor:** John Marchi  
**Jira Ticket:** [SIT-88](https://jira.devops.va.gov/browse/SIT-88)

## Situation  
We identified a 20K discrepancy in the monthly MHV user totals, specifically between July's initially reported 900k users without modern credentials and the updated July total of 922k. The purpose of this spike is to investigate the cause of the discrepancy and determine if the methodology for calculating active users needs to be revised. 

## Findings  
The discrepancy is due to the structure of the MHV data, which classifies users as "active" based on activity in the last two years. The data recalculates user counts each month, including reactivated users who were previously inactive. This process introduces previously inactive accounts into the calculation, creating a noticeable increase in the total number of users reported for prior months.  

For example, September's data included 9,104 reactivated users, causing a larger-than-normal jump. The reactivations over the past three months led to a total increase of 20,534 users:

- Reactivated on or before 8/1/2024: 5,882  
- Reactivated on or before 9/1/2024: 5,538  
- Reactivated on or before 10/1/2024: 9,104  

This highlights a potential gap in how active user metrics are calculated and raises the question of whether older ICNs (inactive accounts) should also be requested from MHV to ensure a more comprehensive user count.

The inclusion of older data could present challenges, such as matching users to credentials, but it may prevent gaps in outreach for users who need to update their credentials but haven't been active in several years.
