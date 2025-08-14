## **Frontend Implementation Summary**

**Feature:** Pay.gov Hosted Collection Pages (HCP) Integration
**Purpose:** Replace pay.va.gov with a secure Pay.gov flow for Veterans to make overpayment debt payments.

---

### **User Flow**

1. **Initiate Payment** – User selects “Make a Payment” from debt details.
2. **Token Request** – Frontend calls backend, which creates a Pay.gov token (`startOnlineCollection`) and returns a fully formed `redirectUrl`.
3. **Redirect to Pay.gov** – Frontend sends user to Pay.gov for payment entry.
4. **Payment Processing** – User completes payment on Pay.gov.
5. **Return to VA.gov** – Pay.gov redirects to VA.gov `success` or `cancel` route with token.
6. **Finalize Transaction** – Frontend calls backend to complete (`completeOnlineCollectionWithDetails`) and display results.

---

### **Frontend Data Handling**

* **Captured:** Payment amount, internal payment context ID, optional recurring flag.
* **Not Captured:** Card/bank data, raw debt IDs (server-handled).

---

### **Routes**

* `/manage-va-debt/pay/start` – Start screen (amount + context confirmation)
* `/manage-va-debt/pay/redirect` – Optional loading screen before Pay.gov
* `/manage-va-debt/pay/return/success` – Confirmation screen with payment details
* `/manage-va-debt/pay/return/cancel` – Cancel/failure screen with next steps

---

### **UI & Behavior**

* Minimal start screen (amount, debt label, recurring only if supported).
* Clear redirect notice (“You will complete payment on Pay.gov”).
* Confirmation shows: amount paid, Pay.gov Tracking ID, date/time, payment method summary.
* Cancel/error states explain no charge made and link to help.
* Feature flag controlled (`enable_payment_processing`).
* Prevent double submissions and handle expired tokens gracefully.

---

### **Out of Scope for MVP**

* Multiple debts in one payment
* In-app refunds/cancellations
* Advanced recurring scheduling

---

### **Acceptance Criteria**

* User can start a payment from Manage VA Debt and is redirected to Pay.gov with correct amount and context.
* On return from Pay.gov, frontend calls backend with token to finalize transaction.
* Success page displays amount paid, Pay.gov Tracking ID, date/time, and payment method summary (if provided).
* Cancel page displays clear message that no charge was made, with option to retry or return to debt list.
* Error states handle:

  * Token expired (prompt user to restart)
  * Backend failure (show friendly retry message)
  * User cancel on Pay.gov (inform no charge made)
* Start button is disabled during token generation to prevent double submissions.
* Success and cancel routes are idempotent—refresh does not trigger duplicate backend calls.
* All frontend routes are hidden or display a “not available” message when `enable_payment_processing` flag is off.
* All pages meet VA.gov accessibility standards (focus management, ARIA live regions for status, plain language).
* No sensitive payment data (card/bank info) is captured or stored on the frontend.
* Analytics events are emitted for: start, redirected, returned, completed, canceled, expired, and failed (excluding sensitive values).


