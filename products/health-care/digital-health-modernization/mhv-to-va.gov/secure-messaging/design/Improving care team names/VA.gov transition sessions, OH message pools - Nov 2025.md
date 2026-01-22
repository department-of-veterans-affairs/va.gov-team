# VA.gov transition sessions, OH message pools - Nov 2025
This doc summarizes discussions on message pools during the all-day multi-stakeholder VA.gov Patient Portal Transition Plan Sessions on 11/12. 

## In this doc
- [Takeaways](#takeaways)
- [Next steps ](#next-steps)

## Takeaways
 - **No patient display names**: VA.gov is not going to get patient display names through the API. 
 - **VA.gov experience**: Receiving just the message pool name through the API is sufficient for now. VA.gov will display the message pool to users. 
- **Internal-only pools**: We need to update message pool names, so we can implement logic on VA.gov to hide internal-only names. There's no backend field or flag in our API response that tells us this right now.
- **Provider names**: Provider names are only included for primary care message pools because of their relationship to PCMM. Non-primary care message pools likely won't have provider names

## Next steps
- Schedule meeting with these goals (currently scheduled for 11/20 at 9am ET) 
   - Determine which message pools are internal-only
   - Decide on how to distinguish internal-only
