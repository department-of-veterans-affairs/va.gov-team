## Summary
The Preview Server is used by editors to see their changes on the website as a standalone page with any unpublished revisions. 

For instance, if you visit `http://prod.cms.va.gov/health-care/` in the CMS, click `Preview`, you will be navigated to  `http://preview-prod.vfs.va.gov/preview?nodeId=67`. This is the same as `www.va.gov/health-care/`, plus any unpublished revisions.

The Preview Server does this by operating essentially as a floating Metalsmith build - it is a Node.js server that fetches pages from the CMS using GraphQL via the `nodeId` query parameter then passes it through its own Metalsmith pipeline (separate from the Content Build but shares most code with it), then finally returns the resultant HTML page to the editor's browser. Basically, it can render a page on-the-fly instead of doing a full Content Build via Jenkins.

The Preview Server then is an opportunity to actually _publish_ a page as well. For instance, instead of returning an HTML page to the user's browser, the Preview Server could possibly upload the HTML page to S3, along with any required files. 

### Pros
- Relatively low unknowns
- Simple architecture
- Bypasses the overhead of a Jenkins job - No Docker container setup, Git checkout, GitHub releases, various other small updates.
- Potentially, presents an opportunity to architect the the Preview Server as a CRUD server that manipulates the HTML "cache" in S3 on behalf of the CMS. Like our own "Gatsby Cloud".

### Cons
- Does not simplify the Content Build
- The Preview Server still uses a monolithic GraphQL query that is slow and sometimes times out. We need to fix this - it needs to be refactored and optimized the same way as the Content Build's GraphQL queries so that it is also lightning fast. __This is very doable but I would need 1-2 days of solid focus time.__
- We _might_ need to consider ways to centralize certain menu configs into `.json` files if we are worried about inconsistencies if a section menu is edited then a single page in that section it published - it would get the updated menu before the rest of the section.

### Unknowns
- Will the Preview Server be _allowed_ to upload to S3? As in, we will need the AWS credentials available in its environment.
- Is it okay to _not_ create a GitHub Release for every content change?
- Any issues w/the `nonce` info added to script tags?
