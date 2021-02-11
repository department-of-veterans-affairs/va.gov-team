## Type Ahead - Search.gov Meeting & Implementation Notes

### 2/11 Email Exchange

### Routed Queries

VA: We need to do work to fully implement routed queries.
- Search.gov: On routed queries, I agree a call might be helpful - does Sam have any availability next Friday (2/19) 3-4PM ET?

#### Typeahead

- For the typeahead queries, three lists from your team would be helpful:
   - A list of misspellings: This correction will take into effect anytime a suggestion is created, ensuring that the misspellings are not presented to the user. I've added the ones already listed in this ticket.
   - A list of suggestions to add: I've added the ones you've listed here. Any "modifications" of suggestions are essentially just solved by creating new ones, so those would fall into this list.
   - A list of suggestions to delete: Once deleted, these should no longer appear as suggestions. 

- From those lists, we should be able to address the majority of this SAYT cleanup! Let us know if you have a sense of the volume of these lists; it'll just require some manual work on our end, so will help us give you an estimate on when we can incorporate the changes.

-Lastly, the filtering we're implementing on state names & abbreviations should take care of the Locations examples you've listed! Names will be harder to systematically do, but if you add those to the "suggestions to delete" list we will be good to go.

### Spellcheck

- We use spelling suggestions provided by Elastic to trigger the display of the "corrected" query. Let us know if there's any specific behavior that you want us to look into.

 - Since the search term does match the document text in the "goverment" case, we would expect those results to show - hopefully, the typeahead will help coax users to use the right spelling.


### 2/10 Email Exchange

**VA.gov: We are seeing broken links based on testing of SERP URLs for routed query keywords – see attached.   Our engineer (Sam) believes we will need to implement changes on our side to support routed queries (see attached) and we are not 100% convinced this effort (estimated as a medium) will improve Type Ahead enough to take that step.**
- Understood on the technical issues with routed queries - for our awareness, can you share what's blocking the search from loading on the VA side? If you set up a routed query for a unique-enough search term, we can see what API requests we're getting on our end and investigate in case there's something else going on. Let us know how we can help!

**VA.gov: As we continue to think through ways to improve the Type Ahead suggestions: It would help us to have a data dump of the VA.gov Type Ahead suggestions – can you provide?  This will help us pinpoint where improved/”canned” suggestions are needed.**
-  Uploaded [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/assets-docs/VA.gov%20-%20SAYT%20Suggestions%20Export.csv)

**VA.gov: We plan to implement “Did you mean” suggestions for misspellings.  This will help us reduce any need for “blacklisting” certain terms that we see in our search keyword data – e.g. “ebenfits”, “ goverment”.  That said: Can you give us a sense of what’s on the global keyword blacklist for Search.gov?**
-  With respect to the misspellings in the typeahead suggestions, we have two separate concepts that might help - we have a blacklist of "bad" words (typically profanity, but also blocking unhelpful terms like specific people's names), and a misspellings list (that can map the "bad" version of a spelling to the good one). As a note, both of these are global & impact site search across experiences.
-    For the global blacklist, we're considering adding state names and territories so that queries including those would be filtered out of suggestions - we're doing some analysis on our end first, but will let you know if we move forward with implementing.
- It sounds like the main use case is for the misspellings - I've added a correction for "ebenfits" to "ebenefits" as an example, so you should no longer see suggestions containing "ebenfits" show in typeahead. For these more site-specific corrections, feel free to pass over a list and we can evaluate and add! 

**VA.gov: You mentioned that in order for us to get click tracking data for Best Bets, we need to invoke a module code – can you provide more specific details for that?**
- Here's a link to the API documentation that references Module Code as a parameter (https://open.gsa.gov/api/searchgov-clicks/) and here's the list of Module Codes: https://search.gov/manual/module-codes.html. 

**VA.gov: Could we get an Excel download of our current Best Bets??**
-  Uploaded [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/assets-docs/VA.gov%20-%20Best%20Bets%20Export.csv)
