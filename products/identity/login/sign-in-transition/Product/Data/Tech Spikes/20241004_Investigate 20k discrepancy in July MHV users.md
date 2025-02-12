# Spike: Investigate 20k Discrepancy in July MHV Users  
**Completed:** October 4, 2024  
**Contributors:** John Marchi, Steve Dickson  
**Jira Ticket:** [SIT-88](https://jira.devops.va.gov/browse/SIT-88)

## Situation  
We identified a 20K discrepancy in the monthly MHV user totals, specifically between July's initially reported 900k users without modern credentials and the updated July total of 922k. The purpose of this spike is to investigate the cause of the discrepancy and determine if the methodology for calculating active users needs to be revised. 

## Findings  
The discrepancy between our July numbers of 900k users without modern credentials and our current July total of 922k is due to an optimization of how we're tracking MHV credentials in Domo, once a user is reactivated we are losing track of the window of months of their inactivity.

The data we receive from MHV includes the ICNs of users with activity within the last two years who are what we consider "active" users that form the basis of the proceeding calculations. Each month, we see some users (usually around 5,000) who have signed in that month for the first time since they were considered inactive and are tagged as "reactivated". Since their accounts did exist but were not included in the preceding months calculations, we then get new matches on older CSP data causing the total number of users for previous months to increase.  

The September data included a larger than normal set of 9,104 reactivated users causing the jump to be more noticeable. The totals for the last three months account for the increase in roughly 20k users that triggered this investigation:

- Reactivated on or before 8/1/2024: 5,882  
- Reactivated on or before 9/1/2024: 5,538  
- Reactivated on or before 10/1/2024: 9,104

Total: 20,534 users

This raises a question of whether we should update the process to request not just active MHV users, but all available ICNs. Introducing older data may add new challenges in terms of matching these users to their credentials and understanding where they fit into the system overall, but it may also prevent gaps in campaigns for users who need to update their credentials but have not been active in several years. 
