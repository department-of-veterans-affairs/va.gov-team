# Jan 3, 2022 | Payment Info - Q&A, Age of payment & error state

Attendees: Heather, Lihan, Liz, Taylor, Tressa

## Notes
- Payments
     - Payments over 31 days old (last payment), do not show payment info block
          - Show statement “You have had no payments in the last 30 days”
- Debt
     - Can still have debt if no longer receiving payments
     - Still show debt block (if applicable) even if no payments (older than 31 days)
          -  This is a case where the user is no longer receiving payments, but still has outstanding debt for overpayment
- Error states
     - API failure on Debt data pull
          - If able to determine debt exists but not how many outstanding, display alternative verbiage (similar to new messages alternative for Health care)
     - API failure on Payment data pull
          - If able to determine a payment was made but not the details, can/should we display alternative verbiage here?
     - We could utilize the same error models from the Health Care section
     - We can talk with Debt and Payment history team on how the failures might come through
          - What data would we receive?
