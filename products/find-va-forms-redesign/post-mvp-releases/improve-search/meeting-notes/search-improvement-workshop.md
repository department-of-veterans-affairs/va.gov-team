# Search Improvement Workshop
## Date: 2021-02-17
## Attendees: John Hashimoto, Marci McGuire

## Follow-up question
- Are people searching for the non-VA forms (ex - DD-214) on Find a VA Form?

## Notes
- "Fault tolerance" has to support all the different variations (1010ez, 10-10ez, 10-10 ez, va form etc.)
- Will fixing solve our biggest problems?
- Explain exactly what we are solving (VA-09995 = 09995)

## Questions/Things to Research
- Would type ahead help?
- Weighting
- 5 most popular forms that start with whatever characters they've put in
- "Best bets" - 5 most popular things
- What sort of instructions/formatting tip (what's the secret sauce?)
- Search instructions (prescribed format)
- What if we had more most-used form links?
- Do the Veterans know the form numbers? (we think so)
- How many people are clicking on those links that aren't to actual forms?
- Review the research done for the Search team: https://docs.google.com/spreadsheets/d/1Mob5Zz0hvxJ2NdDPPoQ9ril2zT5KDir18gKYgKQftpw/edit#gid=0


## Initial Search Priorities
1. String Matching - Lighthouse dependency
2. Type Ahead - Lighthouse dependency
3. Search Tips
4. Why don't we put the "when to use this form" teaser info in the search results?
    - API Payload already contains "related to" or "when to use" data currently.
5. Redesign the search landing page with the most popular X forms.
6. If they type in something with the word "health" or "here are our 10 most popular 10 forms related to "health"  Or "do you mean... " (match words up to "related to" categories)?
