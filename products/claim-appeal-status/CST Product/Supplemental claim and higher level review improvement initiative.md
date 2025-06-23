# CST: Supplemental claim and higher level review improvement Initiative

- **Product:** CST

## Problem Statement

Supplemental claims and higher level reviews are not returned through the Lighthouse API Claim Status endpoints but are instead managed through the Caseflow API, which is less robust.
Users cannot access detailed information about supplemental claims as they can for initial compensation claims, leading to frustration.

## Solution Approach

There are two approachs for CST to get SC/HLR from Lighthouse API Claim Status endpoints:

1. Still rely on Caseflow API to get the lists of SC/HLR and call Lighthouse API to get inidividual claim information
   - We need to Caseflow API to return the claim id from VBMS for each claim when it returns the list of claim
   - With the VBMS claim Id, we can call Lighthouse to get more detailed information for each claim as we do for disability claims
2. Fully rely on Lighthouse API to return a lists of claim includes SC and HLR
   - Lighthouse is calling BEP's EbenefitsBnftClaimStatusWebService /findBenefitClaimsStatusByPtcpntId endpoint to get the list of claim for the user. BEP's currently have setting in their database to set what type of claims is allowed to display to users and what type of claims is allowed to display to employers. BEP needs to change the categorization in order SC/HLR to come in from EbenefitsBnftClaimStatusWebService /findBenefitClaimsStatusByPtcpntId endpoint.
   - The change from BEP team will affect the Lighthouse API endpoint by returning more claims. We need to make sure this is not going to affect other service calling this endpoint(such as mobile).
   - After we are switching the call to Lighthouse, we would want Caseflow API to allow filtering so they only return appeals without SC/HLR to avoid display duplicate claims.

We are pursuing both approach at the moment because there are a lot of prerquisite from other teams we are not sure which one will be able to achieve sooner. However, the 2nd approach is the more preferable and long term solution due to less redundant API calls for better performance. In addition, we learned that SC and HLRs have always ended in VBMS, even if they were started in another system, so the risk of losing data with option two is low.

## Prerequisite effort from other teams

1. BEP: change the categorization in order SC/HLR to come in from EbenefitsBnftClaimStatusWebService /findBenefitClaimsStatusByPtcpntId endpoint
2. Lighthouse team: determine if the BEP change will affect other teams and how we should do to avoid it
3. Caseflow: add VBMS claim Id and filtering option in the endpoint V2/appeals/ssn

## Current progress

As of 4/23/2025:

1. Started the conversation with BEP team to ask for the datebase change, currently working with OBA to confirm the list of EP030 and EP040 claim labels that should be visible to a user in CST.
2. Submitted a request ticket for Caseflow endpoint changes
