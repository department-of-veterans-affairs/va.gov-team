# Travel Pay Frontend URL Options

**All URLs begin with `https://va.gov/my-health`**

## Recommendation: Meaningful, API-Style URLs
- **Pros**: Consistent organization makes it easy to add other links in the future. Good readability makes URLs semantically meaningful.
- **Cons**: Organization can feel cumbersome while the project is small.
  
***Delivery Impact***: Around 1 sprint's worth of work, to account for IA involvement and work needed for setup/testing.

|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/|/travel-pay/claims/|A list of their travel reimbursement claims|
|/travel-pay/claims/|N/A|A list of their travel reimbursement claims|
|/travel-pay/claims/{claim_id}|N/A|Details about a single travel reimbursement claim|
|/travel-pay/claims/file-new-claim/|N/A|Mileage-only claim explanation & link to appointment list|
|/travel-pay/claims/file-new-claim/{appt_id}|N/A|The starting point for submitting a mileage-only claim|
|/travel-pay/help/|N/A|Text explaining the claim status definitions|

### Future Hypothetical Scenario
We begin working on a "preapproval" feature, which allows Veterans to submit preapprovals and check the status. Since these are not claims, we add the following URLs:
|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/pre-approvals|N/A|A list of their travel reimbursement pre-approvals|
|/travel-pay/pre-approvals/{preapproval_id}|N/A|Details about a single travel reimbursement pre-approval|
|/travel-pay/pre-approvals/file-new-approval|N/A|Create a new pre-approval|

It is easy to add these URLs because the organization is consistent - we know the pre-approvals are different from claims, but still related to travel-pay, so: `/travel-pay/pre-approvals`. This approach combines the consistent organization of alternative 1 with the readability of alternatives 2 & 3, making it our recommendation.

## Alternative 1: API-Style URLs
- **Pros**: Consistent organization makes it easy to add other links in the future.
- **Cons**: More effort needed to set this structure up from the beginning, maybe too much emphasis put on organization in favor of readability.

***Delivery Impact***: Around 1 sprint's worth of work, to account for IA involvement and work needed for setup/testing.

|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/|/travel-pay/claims/|A list of their travel reimbursement claims|
|/travel-pay/claims/|N/A|A list of their travel reimbursement claims|
|/travel-pay/claims/{claim_id}|N/A|Details about a single travel reimbursement claim|
|/travel-pay/claims/new/|N/A|Mileage-only claim explanation & link to appointment list|
|/travel-pay/claims/new/{appt_id}|N/A|The starting point for submitting a mileage-only claim|
|/travel-pay/help/|N/A|Text explaining the claim status definitions|

### Future Hypothetical Scenario
We begin working on a "preapproval" feature, which allows Veterans to submit preapprovals and check the status. Since these are not claims, we add the following URLs:
|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/pre-approvals|N/A|A list of their travel reimbursement pre-approvals|
|/travel-pay/pre-approvals/{preapproval_id}|N/A|Details about a single travel reimbursement pre-approval|
|/travel-pay/pre-approvals/new|N/A|Create a new pre-approval|

It is easy to add these URLs because the organization is consistent - we know the pre-approvals are different from claims, but still related to travel-pay, so: `/travel-pay/pre-approvals`. However, the readability of the URL, though organized, may be lacking when compared with options below.

## Alternative 2: Action Category URLs
- **Pros**: Separates notion of viewing claims and creating claims in the URL, which may be meaningful to Veterans.
- **Cons**: Inconsistent URL structure makes it more difficult to add URLs in the future.

***Delivery Impact***: Around 1 sprint's worth of work, to account for IA involvement and work needed for setup/testing.

|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/|/travel-pay/claims/|A list of their travel reimbursement claims|
|/travel-pay/claims/|N/A|A list of their travel reimbursement claims|
|/travel-pay/claims/{claim_id}|N/A|Details about a single travel reimbursement claim|
|/travel-pay/file-new-claim/|N/A|Mileage-only claim explanation & link to appointment list|
|/travel-pay/file-new-claim/{appt_id}|N/A|The starting point for submitting a mileage-only claim|
|/travel-pay/help/|N/A|Text explaining the claim status definitions|

### Future Hypothetical Scenario
We begin working on a "preaproval" features, which allows Veterans to submit preapprovals and check the status. Since these are not claims, we add the following URLs:
|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay/pre-approvals|N/A|A list of their travel reimbursement pre-approvals|
|/travel-pay/pre-approvals/{preapproval_id}|N/A|Details about a single travel reimbursement pre-approval|
|/travel-pay/file-for-pre-approval/|N/A|Create a new pre-approval|

It is somewhat easy to add these URLs because we know they're different from claims, yet related to travel pay. However, separating the notion of viewing pre-approvals and filing for them requires some thought and enforced consistency. This may be a useful approach to Veterans in terms of readability.

## Alternative 3: Claims-Specific URLs
- **Pros**: Consistent organization makes reading the URL easier; separates notion of viewing claims and creating claims in the URL, which may be meaningful to Veterans; basically how CST does it. No Redirects
- **Cons**: A stronger association with claims at the base level means potentially more effort and confusion when adding new URLs in the future.

***Delivery Impact***: Around 1/2 sprint's worth of work

|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay-claims|N/A|A list of their travel reimbursement claims|
|/travel-pay-claims/{claim_id}|N/A|Details about a single travel reimbursement claim|
|/travel-pay-claims/file-new-claim/|N/A|Mileage-only claim explanation & link to appointment list|
|/travel-pay-claims/file-new-claim/{appt_id}|N/A|The starting point for submitting a mileage-only claim|
|/travel-pay-claims/help/|N/A|Text explaining the claim status definitions|

### Future Hypothetical Scenario
We begin working on a "preaproval" features, which allows Veterans to submit preapprovals and check the status. Since these are not claims, we may add the following URLs:
|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay-claims/your-pre-approvals|N/A|A list of their travel reimbursement pre-approvals|
|/travel-pay-claims/your-pre-approvals/{preapproval_id}|N/A|Details about a single travel reimbursement pre-approval|
|/travel-pay-claims/file-for-pre-approval/|N/A|Create a new pre-approval|

**OR**:
|A Veteran navigates to...|...and is redirected to...|... and sees...|
|-|-|-|
|/travel-pay-preapprovals|N/A|A list of their travel reimbursement pre-approvals|
|/travel-pay-preapprovals/{preapproval_id}|N/A|Details about a single travel reimbursement pre-approval|
|/travel-pay-preapprovals/file-for-pre-approval/|N/A|Create a new pre-approval|

It will require some thought and planning to know which set of URLs to add. We may end up supporting multiple frontend applications to handle each of these, which fragments the experience overall. 
