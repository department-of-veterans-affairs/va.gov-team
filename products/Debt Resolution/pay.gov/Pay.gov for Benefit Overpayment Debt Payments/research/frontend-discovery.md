Starting frontend work for the Pay.gov Hosted Collection Pages (HCP) integration this week. I’ve reviewed the Web Services Overview and the Hosted Collection Pages Technical Reference (April 2025). This will follow the Peace Corps model where the user selects a payment amount, gets redirected to Pay.gov to complete payment, and is returned to our site for confirmation.

This will be implemented within `vets-website`. Here’s the initial frontend scope and config needed to get things moving:

### Key Flow
1. User initiates payment on our site
2. Backend sends a `startOnlineCollection` SOAP request to Pay.gov and returns a token
3. Frontend redirects to Pay.gov using that token and the app ID
4. After payment, Pay.gov redirects back to our success or cancel URL
5. Frontend calls backend with the token to finalize the transaction (`completeOnlineCollectionWithDetails`)
6. Confirmation or error is shown to the user

### Frontend Values to Capture
- `transaction_amount`
- `account_holder_name`
- `billing_address`, `billing_zip`, `billing_state`, `billing_country`, `email_address`
- Optional: up to 12 `custom_fields` (e.g., invoice number, user ID, form context)
- `url_success` and `url_cancel` should match our React routes for confirmation and error handling
- `tcs_app_id` (will come from the backend config/env)

### Routes and Components to Build
- `/payment/start`: Initial form to gather info
- `/payment/redirect`: Handles redirect logic to Pay.gov
- `/payment/success`: Displays confirmation after successful payment
- `/payment/cancel`: Displays message if user cancels or there's a failure

### Redirect URL (QA Environment)
`https://qa.pay.gov/tcsonline/payment.do?token={token}&tcsAppID={tcs_app_id}`

### Notes
- Token expires after 3 hours
- We'll use WSDL version 3.2 to support recurring/deferred ACH payments later if needed
- Minimal customization is supported: logo (≤400 KB) and footer color
- Refunds and transaction cancellations are not handled through HCP—those will be supported through separate TCS services if needed

