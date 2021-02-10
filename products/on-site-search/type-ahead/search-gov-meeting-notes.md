## Type Ahead - Search.gov Meeting & Implementation Notes



### 2/10 Email Exchange

**VA.gov: We are seeing broken links based on testing of SERP URLs for routed query keywords – see attached.   Our engineer (Sam) believes we will need to implement changes on our side to support routed queries (see attached) and we are not 100% convinced this effort (estimated as a medium) will improve Type Ahead enough to take that step.**
- Understood on the technical issues with routed queries - for our awareness, can you share what's blocking the search from loading on the VA side? If you set up a routed query for a unique-enough search term, we can see what API requests we're getting on our end and investigate in case there's something else going on. Let us know how we can help!

**VA.gov: As we continue to think through ways to improve the Type Ahead suggestions: It would help us to have a data dump of the VA.gov Type Ahead suggestions – can you provide?  This will help us pinpoint where improved/”canned” suggestions are needed.**
-  Attached.

**VA.gov: We plan to implement “Did you mean” suggestions for misspellings.  This will help us reduce any need for “blacklisting” certain terms that we see in our search keyword data – e.g. “ebenfits”, “ goverment”.  That said: Can you give us a sense of what’s on the global keyword blacklist for Search.gov?**
-  With respect to the misspellings in the typeahead suggestions, we have two separate concepts that might help - we have a blacklist of "bad" words (typically profanity, but also blocking unhelpful terms like specific people's names), and a misspellings list (that can map the "bad" version of a spelling to the good one). As a note, both of these are global & impact site search across experiences.
-    For the global blacklist, we're considering adding state names and territories so that queries including those would be filtered out of suggestions - we're doing some analysis on our end first, but will let you know if we move forward with implementing.
- It sounds like the main use case is for the misspellings - I've added a correction for "ebenfits" to "ebenefits" as an example, so you should no longer see suggestions containing "ebenfits" show in typeahead. For these more site-specific corrections, feel free to pass over a list and we can evaluate and add! 

** VA.gov: You mentioned that in order for us to get click tracking data for Best Bets, we need to invoke a module code – can you provide more specific details for that?**
- Here's a link to the API documentation that references Module Code as a parameter (https://open.gsa.gov/api/searchgov-clicks/) and here's the list of Module Codes: https://search.gov/manual/module-codes.html. 

** VA.gov: Could we get an Excel download of our current Best Bets??**
- Attached
