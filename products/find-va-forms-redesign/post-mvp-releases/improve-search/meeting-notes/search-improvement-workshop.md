# Search Improvement Workshop
## Date: 2021-02-17
## Attendees: John Hashimoto, Marci McGuire, Zach Morel, Laurel Lawrence

## Follow-up question
- Are people searching for the non-VA forms (ex - DD-214) on Find a VA Form? (we know they are searching for them on VA.gov)

## Notes
- "Fault tolerance" has to support all the different variations (1010ez, 10-10ez, 10-10 ez, va form etc.)
- Will fixing the matching algo solve our biggest problems?
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
    -  e.g., When user types four numeric digits in Search (ignoring if they type Form or VA Form first) -- e.g. 10-2 -- the five most popular 10-2 forms will be suggested in a drop down box.
4. Search Tips
    - e.g., Provide a visual example of the preferred format for searching forms -- 10-10ez (this may not be necessary if we get string matching working really well)
6. Why don't we put the "when to use this form" teaser info in the search results?
    - API Payload already contains "related to" or "when to use" data currently.
7. Redesign the search landing page with the most popular X forms.
    - Let's get data on how many users are clicking the Frequently used VA forms and Manage your VA benefits and other information online links.  If there is little usage, let's "test" -- via A/B or user testing -- a new Search landing page with the three or five most searched forms for top categories: Health, Disability, Education, Jobs/Careers.
9. If they type in something with the word "health" or "here are our 10 most popular 10 forms related to "health"  Or "do you mean... " (match words up to "related to" categories)?
