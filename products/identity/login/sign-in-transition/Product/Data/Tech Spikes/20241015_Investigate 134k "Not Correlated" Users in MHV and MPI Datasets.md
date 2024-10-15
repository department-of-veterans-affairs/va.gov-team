# Spike: Investigate 134k "Not Correlated" Users in MHV and MPI Datasets  
**Completed:** October 15, 2024  
**Contributor:** Steve Dickson  
**Jira Ticket:** [SIT-105](https://jira.devops.va.gov/secure/RapidBoard.jspa?rapidView=12843&projectKey=SIT&view=detail&selectedIssue=SIT-105#)

---

## Situation  
We’ve identified approximately 134,000 users with MHV credentials that are not correlating between the MHV and MPI datasets. The objective is to investigate these users to determine if they require migration to modern credentials (ID.me, Login.gov). This discrepancy impacts the data presented in the Domo SIT Dashboard and could affect future migration strategies for users.

---

## Findings  

For about 134,000 users with MHV credentials, we are not able to determine if they already have modern credentials using the current approach to populate the Domo SIT Dashboard. 
 
We receive a list of ~4M ICNs from MHV each week for users who have MHV credentials (which have been used in the past 2 years*). From that, we are comparing it against data from IAM (AuthDB and SSOe) to determine if the users already also have ID.me and/or Login.gov credentials.  

Approximately 134K of these ICNs are not in the datasets that we are receiving from IAM. Based on spot-checking 10 of these with MHV and IAM, have following:

| **Number of ICNs** | **Category** | **Need Migrated to Modern Credential** | **No Correlation Expected** |
| ------------------ | ------------ | ------------------------------------- | -------------------------- |
| 3 | A. Have a MHV Premium account but have never signed into MHV with a modern credential | Yes | Yes |
| 4 | B. Have only used MHV as a modern credential | Yes | Yes |
| 3 | C. Have used ID.me and/or Login.gov to log into MHV | No | No |

Based on spot-checking, we can extrapolate that about 70% of these 134K "not correlated" users need modern credentials. This is in addition to the ~828K users that we are already able to identify.  

An investigation is ongoing for Category C and why the ICNs are not matching the users/credentials records we’re receiving from IAM. We do understand that ICNs are not statically assigned to individuals and that users are sometimes assigned new ICNs. For at least one of the above ICNs, the IAM team did confirm that the ICN was in MPI and could be correlated with a SECID, which subsequently could be used to find the user’s credentials in the AuthDB dataset the we receive.  

We are currently exploring some options for next steps:

| **Options** | **Notes** |
| ----------- | --------- |
| MHV to provide a different identifier | MHV doesn’t store the SECID.  TBD whether IAM has the MHVID and can  include in their extracts. |
| IAM to provide a means of mapping any/all ICNs associated with users to their SECID and user/credential records | TBD what IAM team can suggest. |
| Update the Domo Dashboard to better identify what “not correlated” means and “let it ride” | This won’t impact communication campaign since the list of  users is being identified and provided by MHV to Oddball. MHV team is aware of the nuances we had discovered of the IAM data related to the ID.me wrapper and expect they can (if not currently, then soon) provide a similar list of ICNs who need transitioned. |
