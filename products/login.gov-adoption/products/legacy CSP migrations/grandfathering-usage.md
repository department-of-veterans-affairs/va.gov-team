# Legacy CSP Grandfathering Usage

## Summary
This solution will enable veterans who have existing DS Logon LOA2 user accounts to set up a Login.gov account without needing to proof or send account data.

## Description
The Office of the CTO  is in process of designing a "grandfathering" flow to streamline the migration of users from DS Logon to Login.gov. This step will support subsequent removal of DS Logon as a sign-in option for VA.gov, MHV and eBenefits. Grandfathering is meant as the creation of a IAL1 Login.gov account and binding it to an existing LOA2 DS Logon account, and whereby users are provided the same access with the Login.gov account as they have with their DS Logon account.  In other words, the bound Login.gov account would maintain existing permissions at VA, but outside of VA be an IAL1 account that would require identity proofing. The goal is that users will eventually identity proof at a later time to upgrade their Login.gov account to IAL2.
Note: This pathway assumes we would not have identity data from DoD to share with Login.gov that could help with ‘inherited proofing’ of existing accounts. 

Specifically, we are requesting support from IAM with:
 - a flow for users with existing DS Logon LOA2 user accounts to set up a Login.gov account without needing to proof or send account data.
 - binding the DS Logon LOA2 account with a Login.gov IAL1 account and exposing the full trait set associated with the DS Logon account to partner applications when users log in with a grandfathered/bound Login.gov IAL1 account.
 - supporting these accounts if/when users subsequently identity proof and they become an IAL2 account.


