# Decision: Travel Claim Document Download Strategy

Status: Proposed

## Context

The Travel Pay application's front-end needs to implement functionality to download claim attachment binaries from a dedicated endpoint. These documents are displayed on the travel claim details page, and users may choose to download them. We need to determine the best approach for retrieving these binary files.

## Decision Drivers

* Page load performance
* User network peformance
* User experience when downloading documents
* Complexity of implementation
* Error handling

## Considered Options

### Option 1a: Fetch All Documents on Page Load

Download binary data for all documents when the travel claim details page loads.

### Option 1b: Pre-fetch a Portion of Documents before Page Load

From the claim status list page, hovering on the link to the claim details kicks off the download API calls for user submitted documents. 

### Option 2: Fetch Single Document on Click

Download binary data only when a user clicks on a specific document link.

### Option 3: On-Demand with Caching

Similar to Option 2, but with local caching of downloaded documents to prevent redundant network requests.

## Decision Outcome

[PENDING DECISION]

## Pros and Cons of the Options

### Option 1a: Fetch All Documents on Page Load

* Good
  * Simplified loading and error state handling. Loading can be bundled with the page load spinner and error could be a global alert on the page.
  * Immediate download response when a user clicks (no waiting)
  * Single error handling implementation for all documents
* Bad
  * Potentially wasteful network usage if users don't download all documents
  * Increased initial page load time, especially on slow connections
 
### Option 1b: Pre-fetch a Portion of Documents before Page Load

* Good
  * Reduced perceived load time for the claim details page
  * Downloads occur during user consideration time (hover state)
  * More responsive experience for downloading user-submitted documents
* Bad
  * Complex implementation for hover-based prefetching
  * Potentially wasted downloads if user hovers but doesn't navigate

### Option 2: Fetch Single Document on Click

* Good
  * Network efficient - only downloads what the user actually needs
  * Faster initial page load
* Bad
  * More complex implementation for loading and error states per document
  * User experiences a delay when clicking a document link
  * Need to implement loading states for individual document links

### Option 3: On-Demand with Caching

* Good
  * All advantages of Option 2
  * Improved performance for repeated downloads of the same document
* Bad
  * All disadvantages of Option 2 (for uncached download)
  * Increased implementation complexity
  * Additional memory usage for caching
  * Potentially over-engineered if repeated downloads are rare

## Implementation Notes

If Option 2 or 3 is selected, we'll need to:
1. Implement individual loading indicators for each document link
2. Handle error states per document
3. Consider timeout scenarios

If Option 3 is selected, we'll also need to:
1. Design a caching strategy (store binary strings or object URLs)

## Validation

User research and/or API log analysis should be conducted to determine:
1. Document binary fetch call latency times
2. How frequently users download multiple documents from the same claim
3. How frequently users download the same document multiple times
4. User tolerance for initial page load time vs. on-demand download delays
