# Regression Test Plan for Dispute Debt

**Path:** `/manage-va-debt/dispute-debt/`

## 1. Review and Submit

### Front-end regression

Steps for `vets-website` that confirm PDF download and blob hand-off to the API

1. Sign in as a user who has an active VA debt  
2. Navigate to **Dispute your debt** and complete all required pages until the Review step  
3. Click **Submit**  
   * Expect a spinner while the request is in flight  
   * Browser prompts to download `dispute-debt-YYYYMMDD-HHMM.pdf`  
   * Open the PDF and verify it shows the answers just entered  

### Back-end regression

1. In the Network tab confirm a single `POST /v0/debt_disputes` (or equivalent)  
   * Request body is a binary blob with `Content-Type: application/pdf`  
   * Payload size is greater than zero bytes  
   * Response status is **200 OK** and returns a confirmation identifier  

***

## 2. Feature-flag toggle

### Front-end regression

Steps for `vets-website` that disable the Dispute Debt flow

1. Go to the **VA.gov Flipper Admin** portal in production  
2. Sign in with GitHub  
3. Locate the `dispute_debt` feature and click the link  
4. Click **Disable for everyone**  
5. Navigate to `/manage-va-debt/dispute-debt/`  
   * Expect a friendly message that the feature is unavailable  

### Back-end regression

No changes are required. Confirm that no new debt-dispute submissions reach the API while the flag is disabled.
