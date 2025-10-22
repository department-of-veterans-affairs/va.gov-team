## An Example of Authenticated/"Private" Search in Kendra

### What are we trying to do?

The Unified Search team is looking to implement a cohesive, authenticated search experience within VA.gov. As part of this, we need the search to accommodate private documents, i.e., the user will only see results that they are allowed to see, but not others. For example, a user will see their own benefits claims, but not those belonging to others.

### How is this done?

We are using Amazon Kendra for our proofs of concept, and in this instance, we are putting documents into the index via [BatchPutDocument](https://docs.aws.amazon.com/kendra/latest/APIReference/API_BatchPutDocument.html).

When we upload a document, Kendra supports a [Principal](https://docs.aws.amazon.com/kendra/latest/APIReference/API_Principal.html) object within that document. This Principal, of which a document can have many, clearly outlines the document's visibility. We can either ALLOW or DENY the document to a specific user or a user group.

When we query for documents, we can [pass in the username](https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html#context-filter-attribute) and Kendra will return documents that are visible for that user, and not others.

### What is your Proof of Concept?

[I made an index with two documents in it](https://us-east-2.console.aws.amazon.com/kendra/home?region=us-east-2#indexes/4fa21011-76a3-4213-b559-c0c982f57bec/search), two Benefits Claims objects from Staging.  I set these documents to have a "username" of the given user's ICN. As an aside, there isn't a ton of info returned from Lighthouse about the claims that I think would be helpful when searching. I suspect the primary actual use of this search would be someone searching for "claims" or "compensation" and being shown a list of their claims -- there isn't really data within the claim they would query.

This is a screenshot of searching without any user auth applied:

<img width="1482" height="1040" alt="image" src="https://github.com/user-attachments/assets/d10b9d46-0791-44ae-9240-f632269b136e" />

I am noticing and acknowledging that a search without a username attached returns both results, and the ideal scenario here would be returning 0 results instead. It's a bit of a counterfactual because in our application this search would only be performed by a logged-in user, so the query would always contain their icn/username, but the docs should not default to visible in this way.

Upon refreshing, I can hit "test query with user name or groups" to give it a username. So searching with a username of User One's ICN looks like this:

<img width="1528" height="1312" alt="image" src="https://github.com/user-attachments/assets/71788360-d95f-4e40-b364-2151842e6941" />

As you can see, it returns just the one result!

Switching to User Two's ICN gets the other result:

<img width="1516" height="1212" alt="image" src="https://github.com/user-attachments/assets/7917a399-7270-4a0a-aa7e-835413185165" />

### How does this inform the final product?

Going forward in the actual app, I think we need to associate any document we consider to be private or authenticated with the given user's ICN, and then include that ICN in the query. **I have questions about whether the ICN is PII**, whether we should use a more general signifier, etc., but the great news is that as far as Kendra is concerned the username can be anything. So we could just as easily use their user_account_id or literally any other identifier if ICN is frowned upon.
