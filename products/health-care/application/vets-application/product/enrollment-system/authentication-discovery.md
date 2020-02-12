1. What additional information do we need to send with the form submission to the authenticated endpoint?
  - The only thing that changes in the submission is authentication level (usually at the bottom of the payload, outside of the form piece)
  - Level 2 authentication level
  - Fully qualified ID from MVI (ICN, preferred, or EDIPI)
  - Everything in the form submission is the same

2. Is this information stuff we can get from MVI?
  - Yes, it comes from MVI

3. When we do the authenticated path we can prefill the form
  - Integration with E&E (enrollment and eligibility) service
  - They send us everything they already have in ES so we can prefill the form
  - About 50% of users are already in ES
  - SOAP service
  - Josh to send us the service subscriptions and sample payloads
  - Uses the same schema as the VOA service (data looks nearly identical)
