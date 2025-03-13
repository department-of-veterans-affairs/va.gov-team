# Spike: Merged SSOe & SiS data is resulting in lower user counts
**Completed:** Feburary 7, 2025  
**Contributor:** Steve Dickson  
**Jira Ticket:** [SIT-502](https://jira.devops.va.gov/browse/SIT-502)

## Situation
The new dashboard views with merged SSOe & SiS counts for unique user authentications are lower than the legacy dashboard views with SSOe-only totals.

## Findings

**Finding 1:** The authentication counts on the legacy cards, based on SSOe only, don't align with the new cards for authentication counts. Primarily, this is attributable to that the fact that the legacy cards are based on a Splunk query using a distinct count of CSPIDs, whereas the new cards use a distict count by SECID. All CSP login accounts have a CSPID, regardless of whether the account is ID-verified or not, but only ID-verified accounts will be associated to a SECID. 

Querying by CSPID, vs SECID, will include users who have authenticated at IAL1/LOA1. **Note:** this includes users who authenticated with non-ID-verified accounts, although authenticating at IAL1/LOA1 doesn't mean that the accounts aren't ID-verified. If these users also authenticated with a higher LOA/IAL, then they will be accounted for in the new reports. This latter situation does happen ~2000 times/month per CSP and very frequently for Login.gov (see next finding).  

The number of logins with CSPIDs attributable only to a IAL1/LOA1 (including non-ID-verified accounts) are relatively low, about ~2000/month for each of ID.me and MHV. DS Logon results will need more analysis. Login.gov is fairly high and addressed in next finding.

The query by CSPID is currently not accounting for the following: 
1. Each authentication federation provides a disinct CSPID for same user, i.e. a user will have an authn log with a distinct CSPID for each of ID.me wrapper of MHV versus SSOe to MHV.
2. Users can have multiple accounts with the same CSP and a distinct CSPID for each. CSPs take steps to prevent this and this is primarily just an issue with DS Logon.

**Finding 2:** The discrepancy for Login.gov is considerably higher than for other CSPs. This was attributed to logins at IAL1.  We believe that this is expected based on how the integration between VA.gov-SSOe-Login.gov and how users are up-leveled during the login flow, but would have to confirm this.

**Finding 3:** There is a known issue where some users have multiple SECIDs and in these cases, the correlation to ICN fails. There are relatively few instances of this issue, ~100/month. We're not currently attempting to map these to an ICN, so these users aren't accounted for in the new view.

**Finding 4:** The IAM team has introduced a new third index for the Splunk queries. Our queries had hard-coded the 2 prior indexes. The impact was small and causing about ~1000 users in each weekly and monthly report.

### **Recommendations**  

**For Finding 1:**
1. Update the legacy views to be based off of queries with distinct count by SECID.
2. Decide whether we want to track authentications by users who only authenticated with IAL1/LOA1: ~2000 for MHV and ID.me. (More analysis required to determine how many with DS Logon or Login.gov.)

**For Finding 2:** Follow up to understand the Login.gov flow and how it is affecting a large number of logins at IAL1.

**For Finding 3:** No action recommended.

**For Finding 4:** Update all Splunk queries to reference the indexes with a wildcard to catch any new indexes going forward.

