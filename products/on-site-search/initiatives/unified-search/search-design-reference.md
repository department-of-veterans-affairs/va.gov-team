# Search design reference

## Purpose

This reference guide is a collection of search data, user survey feedback, and past research to help illustrate four ways we can improve the current keyword-based search with a modern (buzzword: intelligent) approach. It provides the foundation we need as a product team to make confident decisions about which problems to solve, which features to prioritize, what to research, and how to design as we transition to a search platform like AWS Kendra, Elasticsearch, or Microsoft Azure.

The document is organized into four themes, illustrating current search issues:

**1. Current search has trouble understanding intent and determining relevancy**  
Generic queries like "benefits" fail while specific queries succeed.

**2. Search returns information pages when Veterans want to complete specific tasks**  
Searches for "secure messaging" lead to definitions instead of direct access.

**3. Veterans have difficulty finding facilities, contacts, and specific digital services**  
Searches for VA offices or phone numbers return zero or irrelevant results.

**4. Multiple search tools create confusion and fragmentation**  
Veterans must navigate separate searches for forms, locations, and web content.

### Quick Reference: Four Themes

| Theme                        | Core Problem                                | Key Evidence                                          | Possible solutions using modern search                       |
|------------------------------|---------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------|
| **1. Intent & Relevance**    | Generic queries fail while specific succeed | "benefits" = 1% CTR vs. "chapter 35" = 52% CTR        | Semantic search, query understanding, Natural language processing |
| **2. Info vs. Action**       | Veterans want tools, get articles           | "endless articles of WHY but not HOW"                 | Intent classification, entity ranking                        |
| **3. Facilities & Contacts** | Location/contact info not findable          | Zero results for "VA community care phone number"     | Multi-source indexing, entity recognition                    |
| **4. Fragmentation**         | Multiple separate search tools              | "It would be helpful if everything were consolidated" | Unified interface, blended results                           |

## Theme 1: Current search has trouble understanding intent and determining relevancy

### Problem
Veterans get dramatically different results based on how specific their query is, and generic terms—even with massive search volume—return unhelpful results.

### Keyword patterns

#### Generic keywords have low CTR despite massive query volume.
| Query         | Volume  | Clicks | CTR |
|---------------|---------|--------|-----|
| quick submit  | 14,218  | 545    | 3%  |
| verification letter | 2,251  | 169  | 7% |
| c file | 2,878  | 126  | 8% |
| ask va        | 16,310  | 1,757  | 10% |
| quick submit tool upload | 9,444  | 1,284  | 13% |


#### More specific searches have better outcomes.
| Generic → Specific | CTR |
|-------------------|-----|
| "claims" → "supplemental claim" | 21% → 37% |
| "disability" → "disability letter" | 25% → 67% |
| "file a claim" → "file a disability claim" | 33% → 56% |

**Source:** `search keyword data July to October, 2025`

#### Why this matters
Veterans who don't know the exact terminology get stuck. Those with more VA knowledge (who can be specific) succeed.

### Veteran sentiment

> "the search did not help me locate the specific office or page I was looking for today."
> *User got **999 results**, first 10 were news items (wrong content type)*.

> “Search engine clunky.  Easier to find info WITHIN VA site by using Google.” → *Build trust by improving results*.

> “I was told to look for the "quick submit access" to submit a "mandatory verification of dependents" form. There is no hot link I could find just going through the site. So I did a search and there were 999 results." → *Too many results*.

> “The search function isn't specific enough.  You get a large list of links but none of them pertain to what I searched for” → “Too many results.*

> “Your Search function doesn't seem to allow multi-word filtering. I enter "Dermatology + Arizona" and I get results for just "dermatology," and results for just "Arizona."  This means that apparently the only way I can find out about dermatology services in Arizona is to search for "Dermatology" and then wade through the thousands of results looking for some indication that there's an Arizona connection. I'm no stranger to searching on the internet.  This is not how it's supposed to work.” → *Faceted search.*

### What past research found

**[Jan 2021 Study:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/research-study-jan-2021/research-findings.md)**
- "When asked how far they typically look through search results, most stated that they would not look past the first page and usually only the first few results."
- “When a Best Bet / 'Top Recommendation' was shown, there was a higher chance of the user finding the information they needed."
- Participant quote: "From a user experience model, the layout is great, the location, all of that is fine, but the indexing is poor. The search feature seems to be good for simple things, but not difficult things."

**[Aug 2021 Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/2021-Aug-research-study/research-findings.md)**
- "Users get stuck due to poor surfacing of search tools and confusing search experiences.”
- One participant noted: having only **14 results** from Find a VA Form instead of **999** from site search "tells me that I'm getting closer to what I'm looking for"
- 2 participants "specifically called out the search result 'Lenders Page - VA Home Loans' as completely irrelevant" when searching for "college credit"

### Additional observations

- Generic queries return "999 results,” which users interpret as a search failure
- Results don't distinguish between information pages and tools (evidenced by Veteran frustration)
- No apparent understanding of query intent - "benefits" returns the same type of results whether the user wants info or action
- If generic queries don't surface relevant results in the top 3-5, users are more likely to abandon the search

### Design questions

* How might we detect when a term like "benefits" is too generic and ask clarifying questions or surface top categories?
* How might we understand that "file a claim" and "file a disability claim" are related and show consistent results for both?
* How might we limit results to high-confidence matches instead of showing "999" results?
* How might we improve rankings to surface the most relevant result types (tools vs. info vs. news) based on query intent?
* How might we handle misspellings and variations gracefully?
* How might we extract intent signals (question words, action verbs) to route appropriately?
* How might we help users be more specific in their queries? (type-ahead, suggested refinements, query understanding)?
* How might we use faceted search or collections to help users filter large result sets?

---

## Theme 2: Search returns information pages when Veterans want to complete specific tasks                                                                                                         

### The Problem
Veterans searching to complete tasks (like filing claims or accessing secure messaging) receive educational articles instead of direct links to the tools themselves. They want to DO something, but search gives them pages explaining WHAT that thing is.

### Veteran sentiment

> "every time I select a link thinking it will take me to that option, it gives me a definition instead of going to the selected option. Example, I want to go to Secure messaging, I put that into the Search Window and it takes me to something about what secure messaging is, instead of taking me to secure messaging." → *Explicitly describes the info vs. action problem.*

> “Searched the term 'quick submit,' so I can upload my current active duty orders to stop receiving my payments, so I don't owe the VA over 10k like I already do, and nothing helpful pops up" → *Search failing during critical, time-sensitive need.*

> "I have been trying to add 2 step verification to my account for weeks. All I want is to use Google Authenticator App and I cannot find where to add the app. I CAN FIND ENDLESS ARTICLES OF WHY TO USE IT, BUT CANNOT FIND HOW TO INSTALL IT." → *Veteran wants action; gets endless information.*

> “the search bar doesn't take me straight to the page I know must exist for VET-HOME when that's all I put in the search bar”  → *Veteran knows what they want but can't find the action, only information*.

> “I’m trying to find out when you're sending my travel reimbursement but all I get are articles about the topic.”  → *Veteran knows what they want but can't find the action, only information*.

> “I have been trying to access the fiduciary fast reporting form. its like trying to find a needle in a haystack. I have been sent to every training page on how to use it but not able to get to the access website.”  → *Veteran knows what they want but can't find the action, only information*.

> “Simply trying to renew my VHIC.  You show 35 entries but still couldn't (yet) find the site to renew.  Have been using your site for many years and am reasonably comfortable navigating websites but yours is now becoming too 'bloated' with way too many links and increasing difficulty to get anything done.”  → *Veteran knows what they want but can't find the action, only information*.

### Problems with traditional search

* Current search struggles to distinguish between:
  * Informational intent (“What are claims?”)
  * Navigational intent (“Take me to my claims”)
  * Transactional intent ("file my claim now")
* Current results favor informational content regardless of intent
* Tools/applications may not be indexed at all
* Educational content about apps ranks higher than the apps themselves
* No structured data to indicate "this is an app” vs. "this is information about the app”

### Design questions
* How might we detect action verbs ("file", "upload", "submit", "check") and prioritize apps and actions over educational content?
* How might we distinguish Veteran questions ("what is?”, "how do I?”) from commands ("file a claim”)?
* How might we differentiate between informational content and actionable tools in search results?
* How might we improve the display of CTAs: "File a disability claim" button vs. "Learn about disability claims" links?
* How might we show authentication requirements directly in the results?

---
## Theme 3: Veterans have difficulty finding facilities, contacts, and specific digital services

### The Problem
Veterans searching for specific VA offices, phone numbers, or facilities get no results or irrelevant results. These searches don't appear in the top 100 queries by volume, but generate disproportionate frustration and high complaint volume.

### Veteran sentiment

> "the search did not help me locate the specific office or page I was looking for today. Office of Mental Health." → *Looking for Office of Mental Health. Got: 999 results, first 10 are news items*

> "Searching website at top of page in 'SEARCH' for VA Community care phone number, ZERO results populated." → *Looking for contact information. Got no results at all*.

> "Trying to find access to Optum VA CCN Veteran Patient Portal. As usual I just wander around cause you don't directly answer questions nor do I find useful responses to searches" → *“As usual" indicates repeat failure; systemic problem*

> “Couldn't find the Fargo, ND main VA contact information easily.”

> “I’m a veteran trying to get to "Myhealth" VA account, and there's no way that I can find out how to do that.”

> “VHID card renewal. Been looking for an hour. Cannot find out how to do it online.”

**Sample of what Veterans are looking for:**
* Office of Mental Health
* VA community care phone number
* WEAMS
* Vaccine info at a specific location
* Services at a particular facility
* How to replace lost medals
* Search for a chiropractor
* Patient portals (Optum, My HealtheVet)

### Problems with traditional search

* Location information lives in a separate "Find a VA Location" database
* Contact information may not be consistently structured or indexed
* Office directory data may exist only in PDFs or unstructured content
* Phone numbers may not be indexed as searchable entities
* There can be a disconnect between facility names and location data
* Multiple independent search experiences: location search is disconnected from site search

### Design questions
* How might we surface location-specific information, contact details, and facility-specific services within general search results?
* How might we connect facility names to the location database automatically?
* How might we provide "call now" or "get directions" actions inline?
* How might we handle variations in facility names ("VA hospital Knoxville" = "Knoxville VA Medical Center”)?
* How might we recognize user intent ("phone number for X" = show phone number prominently)?
* How might we extract location context from queries ("chiropractor near me" when combined with user location)?

---

## Theme 4: Multiple Search Tools Create Confusion and Fragmentation

### The Problem
Veterans assume site search includes everything, but need to learn about and navigate to multiple different search interfaces, and may not know which tool to use for which task. This creates confusion and increases the likelihood of getting stuck.

#### Current state:
* **VA.gov site search** (Search.gov) - general web content
* **Find a VA Form** - separate search for forms only
* **Find a VA Location** - separate search for facilities
* **Resources & Support** - separate search for FAQs

### Veteran sentiment

> "It would be helpful if everything were consolidated onto one page.” *→ Using different search tools on different pages can be confusing (i.e., VA.gov site search, Find a VA Form, Resources and Support)*

> "Maybe that result is on page 2 or 3, but the odds of me going there are slim.” → *Participant assumed form results WERE in site search, just buried*

> “Could not find a list of the authorized Urgent Care facilities in my city.” *→ Survey response from Veteran who couldn’t find authorized urgent care facilities in their city.*

> “Unable to find out how to book an appointment for hearing aid assessment.” *→ Survey response about booking an appointment.*

### What past research found

#### [Aug 2021 Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/2021-Aug-research-study/research-findings.md)
- Participants said that it was confusing to go to different pages to use different search tools, and that it would be simpler if they all were in one place. 2 of them also said that they didn't want to have to load a separate page for each tool on the search landing page, given the slowness of their Internet connections. Their ideas included radio buttons beneath the search box or a drop-down menu that appears when you click Search on the home page to select what you want to search for.
#### [Jan 2021 Study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/research-study-jan-2021/research-findings.md)
- Most participants did not see the right column with 'More VA search tools' because of browser width/mobile use.

### Problems with traditional search

* Each search tool is a separate implementation with a separate database/index
* No cross-search capability
* Veterans must:
  1. Know other tools exist
  2. Understand what each tool searches
  3. Navigate to the correct tool
  4. Search again with a potentially different interface
* Even when participants saw links to other tools, they didn't understand when to use them

### Design questions

* How might we display blended results from all sources in a single results page (web, forms, locations, FAQs)?
* How might we use machine learning to rank the best result regardless of the source?
* How might we show category filters based on actual results ("3 forms, 12 pages, 5 locations”)?
* How might we let users refine by type if needed, but don't require an upfront decision
* How might we detect form-related queries automatically ("form 21-526" → prioritize form results)?
* How might we recognize location queries ("hospital in Knoxville" → prioritize location results)?
* How might we show mixed results when the query is ambiguous?

---
## Conclusion & Next Steps

This reference guide helps establish the foundation for transitioning VA.gov search from keyword-based matching to a more modern, intent-driven search. Immediate next steps will consist of refining the problem statement, creating a research plan, and exploring the modern search results page UI/UX experience. 

### Design exploration ideas:

**Blended Results Display**
- How might we show mixed content types (pages, forms, locations) in a single result list?
- How do we balance showing diversity of results vs. showing the best match?

**Intent-Based Ranking**
- How might we surface "action" results (tools, forms) above "information" results when intent suggests action?
- What visual hierarchy communicates "this is the thing you want to DO" vs. "this is information about that thing"?

**Query Refinement & Guidance**
- Where and how do we show suggestions when a query is too generic?
- What does "zero results" guidance look like when location data or forms exist, but web content doesn't?

**Faceted Navigation**
- How might we let Veterans filter by content type after seeing initial results?
- How do we show result counts by type without overwhelming the interface?

---
*This is a living document that will evolve as we learn more.*
