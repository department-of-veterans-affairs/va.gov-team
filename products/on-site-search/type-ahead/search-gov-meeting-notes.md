## Type Ahead - Search.gov Meeting & Implementation Notes

### 2/26 Email Exchange

**Typeahead Cleanup Schedule:**
- We'll go ahead and schedule the work this upcoming sprint for the initial sample you've sent (to be completed by end of next week, 3/5)
- Would we be able to consolidate the implementation of Round 2 and Round 3, delivering those deletions by April 16?
- Round 4 looks good - do you have a sense of how many these will be? If there are a handful (10-20) that you want to seed ahead of the full list, we can definitely handle those manually.

**Spell Correction Feature**
- My apologies for sending a Bing example previously. A hybrid approach isn't possible, but here's an example of an implementation on a Search.gov powered index - https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=ready&sort_by=&query=goverment. 
- Dawn and I will definitely add your feedback to our spell correction customer requests - appreciate you flagging these examples to our team.

**Removing State References**
- We've put these state name and abbreviation filters in this morning, so you should see those suggestions removed shortly
- Correct, we did not add "va" to these filters as well as some other state abbreviations that have common overlap so that those suggestions are preserved.

### 2/12 Email Exchange

- Email invite sent to John and Sam for this Friday to talk about routed queries -- and any open items related to Type Ahead.

**Type-ahead Lists**

- Go ahead and send us your full lists (for adds, removes, and misspellings) in priority order. We'll do these in batches weekly (as it's a bit manual on our end), likely aiming to cover 50 or so per list per week. 

**Spell Correction Questions**

- If a user searches a misspelled word, will the user see the results for the correct spelling and see “search instead for (misspelled word)”? Or will they see search results for the misspelled word and see “did you mean (correctly spelled word)”?

   - The API will return the property "spelling_correction" in the response with the corrected term and the results will reflect the corrected term. The way this is represented to the user is up to your implementation!

- Will a misspelled search term with any number of results still trigger the web:spelling_correction feature (e.g. benfits (https://www.va.gov/search/?query=benfits) )?

    - Yes - if there are documents in the index that match that misspelled term, those will be returned in the results, ahead of any fuzzy matching being applied, and the "spelling_correction" will return as null in the API response.

- How are misspellings determined? Is this changeable?

  - The corrections are determined by Elastic's fuzzy matching and are unfortunately not configureable per search experience. That said, there are likely improvements we can make to this fuzzy matching in the future - please pass over any specific examples / wishlist items and we'd love to add them to track as a customer request for prioritization on our roadmap.

- Is there a government agency using this Search.gov feature you can point us to see an example?

  - The spellcheck / fuzzy matching is built-in to all search experiences (and impacts search results), but the representation in the SERP depends on how a customer implements it, if they're using the API. In the out of the box experience, it's represented as "Showing results for [[corrected term]]" - here's an example: https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=usagov&query=resourcs 

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
