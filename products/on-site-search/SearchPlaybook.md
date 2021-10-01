#vets.gov search

Search on vets.gov uses GSA's [DigitalGov Search](http://search.digitalgov.gov/). To get a login, contact @ayaleloehr with your .gov email address. 

The help manual can be found [here](http://search.digitalgov.gov/manual/).

Current facts:

- We use Best Bets to return recommended results at the top of specific queries. One example of this is that if a user searches "job search", the recommended result is vets.gov/employment/job-seekers/search-jobs.
- We use Routed Queries, which allow us to send someone directly to the page they searched for instead of to a search results page (like "I'm feeling lucky" on Google, except it happens automatically). Currently we have "vec" and "veterans employment center" go to vets.gov/employment and "gi bill tool" and "gi bill comparison tool" go to vets.gov/gi-bill-comparison-tool.  If a user does the same search twice in a row, it takes them to the search results page on the second search, so they are not in an endless loop going to a page they don't seem to actually want to visit. 
- You can somewhat customize the UX (including the header and footer images) under the Display button on the left hand side after logging in. 
- This was set up April 27th, so there is no data for before that date. 

Potential future state:

- There is actually a search API (which we are not using currently) if we want to bring this to a vets.gov page and keep the vets.gov look and feel. The information about this can be found under Activate link on the left side and then "Search Results API Instructions."  Of note, this page says: to retrieve web results through this API, you must either use our indexes or you must purchase an API key from Bing or Google to use their results. We are not able to pass Bing results through APIs."  Currently we use Bing results, so this would need to be looked into. 
