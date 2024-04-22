Disorganized notes

Probably easiest to link existing user with appointments to BTSSS data, though Mark described the process for creating new users with appts.

## Use cases:
- Temporal
  - Recently submitted travel claim(s)
  - Travel claims submitted 6+ months ago
- Status-based
  - Claims with statuses:
    - In Process
    - Claim Submitted
    - In Manual Review
    - Denied
    - Appealed
    - Closed/No Payment
    - Partial Payment
    - On Hold
    - Approved
    - Submitted for payment
    - Fiscal Rescinded
    - Paid
    - Payment Canceled
- Complexity-based (only relevant if we want to show status history)
  - Simple success
  - Simple failure
  - Complex success
    E.g. in process -> submitted -> manual review -> denied -> appealed -> approved -> submitted for payment -> paid
  - Complex failure
    E.g. in process -> submitted -> manual review -> denied -> appealed -> denied -> appealed -> on hold -> approved → fiscally rescinded (??)


## Users
- User 1: No claims
  - No submitted claims
- User 2: Simple cases only
  - Claim in process (started but unsubmitted)
  - Simple, closed (no payment) claim
  - Simple, successfully paid claim (mileage only)
  - Simple, rejected claim (mileage only)
- User 3: Complex cases
  - Claim success after appeal
  - Claim rejected after appeal
  - Claim approved but fiscal rescinded/canceled
