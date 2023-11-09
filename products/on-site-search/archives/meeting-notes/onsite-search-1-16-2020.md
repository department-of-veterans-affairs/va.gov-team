# Onsite Search:  Notes from Initial Meeting 1/16/20
​
## What do we know:
- Search SEO encompasses all VA.gov
​
## Guiding Lights to our Discovery:
- Most Relevant
- Easiest to Use
- Relevant and up-to date content wherever that may live
​
## Initial Discovery Questions:
- What control do we have over Best Bets?
- What capabilities do we have from within search.gov?
​
## What Does our Ideal State Look Like?
- Help Veterans find most relevant content for Search terms
- Our Main focus is to keep an eye on the Veterans using search (less about VA employees)
​
## Known Problems:
- Benefit Hubs: longevity of cloned content out of date
- UX: core problem is getting people to the right destination
- VA.gov doesn’t have “street cred” as other subdomains
- No site search XML
- list of everything included in Best Bets for text search
- Requests to search.gov for Benefits.va.gov are being crawled manually
- Collections: small sub containers - how do they work and how can we isolate areas?
- Currently no tracking of CTR
- No routed queries – Search.gov provides usa.jobs.gov
- Look into Explore for Jobs on Right side of page
- Needs analytics – What is the Best content for Veterans?
​
## MVP Focus Areas:
- Majority using search tool are Veterans and we need to address those problems first
- Tier 1 & Tier 2 Content
​
## Best Bets:
- How did those get into place the first time?  We know it was done manually, but what was the process?
- Get a list of what our Best Bets are now
- Quality in terms of Best Bets?
- Top Recommended Results – Find out how these are being designed (work closely with Mikki)
​
## Redirects:
#### Server-side redirects:
- are faster without needing response HTML at all
- www.va.gov server-side subdomain – client side is still in indexes
- Are there other drawbacks to SEO
- 200 – 500 Milliseconds
- Using React is ok for SEO
- Not using www – stick with benefits.va.gov
​
#### Client-side Redirects:
- Injecting header & footer using JavaScript provides a more modernized experience
- Blue Sky:  Keep these listed but blocked technically (still want to keep list of that) (?)
​
## Epic / Stories:
- Establish Epic to begin creating stories and tasks (priority of where this starts)
- a good chunk of this happens via request tickets to search.gov
- How is our site search produced?
  - Via site search XML?
  - Are we using their API instead?
- Need to determine best way to integrate internally
- Need full analytics tracking
​
## APIs / Queries:
- We use API.search.gov- requires access token to get API Key
- Results Queries
- Queries are successful but lack capabilities due to API or implementation
- Need Analytics!
- Bypassing search results page usability: do we bypass search results page?
- Will likely require usability to see if this makes sense for veterans
- Routed queries:  types query you already predicted – can take you directly to destination if e.g., they type healthcare it would take user to healthcare benefit hub page
- What control do we have over Best Bets? Can we get below via API?
- 1st recommended Jobs
- 2nd looking for transition
- Support request ticket to see how this is done
- What comes first?  If it is by published date, we can’t go back to populate them
- How to prioritize Best Bets, keywords? Something from API based off of date?
#### Historical:
- Roots in vets.gov
- 2 PM deployment would take .MD files and turn them into website that would read them (vets.gov) on every build
#### Sitemap:
- Does timestamp exist? Should contain a modernized page on VA.gov on XML sitemap
- Sitemap should contain every private page that comes out of Drupal
#### Validate and document: Is this going to be indexed or not?
#### Publisher’s Journey:  need to be able to explain that experience
- When can a Publisher see their work appear in the search results?
- As editors are done and other sites are deprecated, how frequently does XML file recrawl?
​
## Business Process:
- What are veterans looking for the most (analytics)
- Outside of Best Bets, what’s happening with organic search
- Work with Search.gov to suppress domains that are polluting results
- Organically eBenefits crawls return a lot of results
- Once Find Forms page is built, 1st Best Bet bounce to put in place
​
Kara Has more to Add on Monday re:  epic, roadmap etc. !!!!
