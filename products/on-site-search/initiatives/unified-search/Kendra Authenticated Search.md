# Authenticated Search with Kendra: Why Not?

### Summary

The unified search team researched AWS Kendra as a potential tool for implementing our product, including both unauthenticated and authenticated search.
**It remains our preference for unauthenticated (public) search**,  but there are a number of obstacles around its use for authenticated (private) search
that will be prohibitive to mitigate. These fall into three buckets: Cost, Privacy, and Compliance.

### Cost Concerns

An in-depth cost analysis [can be found here](https://github.com/department-of-veterans-affairs/unified-search/issues/71).
The long and short of it is that if we decide to index all of the Benefits Claims (one aspect of authenticated search), that would
be over 100m records, which would cost over $500,000 a month. The top-line issue with authenticated search, not just Benefits
Claims, is that veterans and other users of VA.gov have produced **a lot** of forms, submissions, files, and other miscellany
that we'd want to index. It will be a lot of documents, and those documents will cost money to store in Kendra.

There are strategies we can take to mitigate this, such as reducing the number of documents we index, but those introduce
technical and usability problems. For instance, if we choose to only index the last 3 years of Claims, then only those
Claims will be searchable, which would require additional messaging to the veteran. We would also need to develop a system
of aging out claims as a rolling deletion.

### Privacy Concerns
### Not Specific to Kendra

Any solution we choose to implement that involves indexing user data to be searched raises significant privacy concerns.
We do not want the user's PII to be indexed, or searchable, or passed along in search queries. When we index documents, we
need to redact PII out of those documents. Our experience with other products indicates that veterans tend to submit PII
in forms and places we don't expect (e.g. filenames) so we need to be vigilant about keeping it out of the index.

### Specific to Kendra (or other AI tools)
#### Non-Technical
Kendra uses Natural Language Processing to parse queries and improve search results. For example, a query of "How do I
appeal a decision?" would be "understood" by the engine better and yield more accurate results about the appeals process
than an engine that does not use NLP. However, this means user input is being fed into the LLM, which could pose a privacy
problem and at minimum would likely require a disclosure.
**This is true for both authenticated and unauthenticated search because the query itself is passed through the model.**

The same goes for the data being indexed. I believe Kendra has this as a setting you can toggle on or off, but we would
likely need to either disable or disclose any LLM behavior in the indexing itself (as opposed to the aforementioned query).

#### Technical
The way Kendra tackles authenticated search seems geared towards internal products, i.e. a search engine only accessible within
a company. Individual documents are assigned a "username" and then, when present, that document is only returned in queries
that pass along that username. (The username is not a literal name, it can be any identifier or even a group.)

For an application as large and populous as VA.gov, this solution is less than ideal. vets-api would be the only entity to
append the "username" to the query -- i.e. the user themself would never enter or interact with it -- but the fact remains that
vets-api would have immediate access to anyone's documents if it has the username. This opens up a few security vulnerabilities
that were discussed during our Architecture Intent but not fleshed out -- suffice to say the group did not like this approach.

### Compliance Concerns

**to be filled in after discussion**
