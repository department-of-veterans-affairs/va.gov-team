# Recommendation

### Suggestion - Drupal based content and search data with a JavaScript filtering mechanism

Of the three existing search mechanisms for VA.gov, I would recommend using a similar setup to the Resources and Support search and implementing 'fact sheets' through a Drupal content type.

- Drupal based content will be the easiest to update, maintain and categorize.
- While content build is in place, the data for searching fact sheets can be created in a similar way and searched on demand via a JS based search implementation.
- After a public api becomes available, the other drupal based search solutions that are more traditional may be used instead of a content build base data dump process.
	- The existing search Drupal module details can be viewed at https://www.drupal.org/project/search_api
	- The search module is regularly updated and can provide more advanced searching and fine grained results

### Reasons for not recommending other solutions

#### Search.gov 

The search.gov results don't appear to be fine grained enough to provide the needed functionality. If there is an API that could customize the way searching works, then there is the possibility of using search.gov and the indexing that is automated by the search engine, but that is unknown. From looking at the documentation available at https://open.gsa.gov/api/searchgov-results/#parameters there are some filtering capabilities, but they are not specific to the VA and would not be fine grained enough for fact sheets.

#### Find forms search

The search for forms is implemented through the lighthouse api and uses a very specific, relatively low quantity or data points to provide searching. The data itself is maintained via strictly code, and so there would not be a way to maintain this with frequently updated pages and new pages being added regularly once a clear path forward was executed in creating the content. If we did decide to use this solution, then updates may take longer and involve more engineering staff than would seem needed for a document / fact sheet search.
