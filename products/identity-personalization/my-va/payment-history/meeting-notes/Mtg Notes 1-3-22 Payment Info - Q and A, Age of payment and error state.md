# Jan 3, 2022 | Payment Info - Q&A, Age of payment & error state

Attendees: Heather, Lihan, Liz, Taylor, Tressa

## Notes
- Payments
     - Payments over 31 days old (last payment), do not show payment info card
          - Show statement “You haven't received any payments in the past 30 days.”
          - Confirmed by [Danielle Thierry in Ticket #33839](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33839#issuecomment-1006718120)
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

### Action Items
- Review error models used for the Health Care section and whether that could be used for payment info section
- Meet with Debt and Payment teams to discuss what kind of failures they see and what info could be available to us in such cases
- Technical discovery [ticket #34704](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34704)
