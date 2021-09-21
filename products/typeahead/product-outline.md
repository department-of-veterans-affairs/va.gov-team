# Product Outline - Typeahead
---

## Overview
Our goal is to help veterans navigate to relevant content more quickly by providing them with typeahead suggestions that match the characters that they type. These suggestions will ideally offer relevant queries that they can select to surface up relevant results.


## How It Works
- Up to 5 suggestions are presented to a user after they have typed 3 characters or more in the query input box.

- Suggestions are derived using two methods:

1) **Search Algorithm** that leverages the searches performed on VA.gov website.
     - A given term/phrase must be searched 5 times in a 24-hour period to appear as a suggestion.
     - If a suggestion does not meet those requirements, then it will be removed from circulation after a 30-day period.
     - Certain queries will not appear as suggestions for privacy and security purposes. (e.g., Names, SIN, etc.)
     - Terms related to geographical locations will not appear including cities and states.

2. A **hardcoded list of specific terms** curated to align with VA topics. Terms that are added to this list include:
   - hard to spell terms, particularly long ones (benefits, government)
   - alphanumeric form titles (10-10ez)
   - common veteran tasks
   - top va.gov searches (benefits)
   - best bets (e.g., Covid-19 vaccine)
   - promoting va content to aid in wayfinding (e.g., Find a form or how do I?)

- The 5 suggestions that are presented to users are selected from the suggestion database (combination of both the algorithm terms and the hardcoded terms).

- The suggestions are ranked using the following rules:
   - Use query to find ALL possible matches
   - Sorted list by hardcoded/canned suggestion
   - Remove any hardcoded suggestions from the algorithm list 
   - Then by algorithm / non-canned suggestion
   - Sort by best match (still preserving the above order)
   - Take the top 5

- Search.gov's implementation of type-ahead does support fuzzy string matching to help with typos.

## API Calls and Dependent Systems

-   Search.gov  [Type-Ahead suggestions API](https://open.gsa.gov/api/searchgov-suggestions/)


## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
Veterans are currently searching for a wide variety of topics that don't always showcase good results aligned to their query. Offering them typeahead suggestions will allow them to quickly get to results they are looking for. 

Suggestions are created using a combination of 1) A hardcoded list of VA specific actions and activities and 2) based on top VA.gov user queries.
 
 
## Desired User Outcomes

- *Why would a user want to use this? High Level User Story/ies*
    - As a veteran, I need a faster, easier way to search for information on VA.gov so I can save time and avoid wading through lots of content.
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
  - As a veteran, I will be able to conduct a query more quickly given that I can see and select relevant suggestions for each query I conduct. 

## Undesired User Outcomes


## Desired Business Outcomes

- *Why would your business want this to exist?*
  - **If**  _we leverage the type-ahead feature from Search.gov in on-site search_  **then**  _we can expect VA.gov site users to find what they need faster, saving time and reducing cognitive load_.
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

[Typeahead Domo Dashboard Link](https://va-gov.domo.com/page/439942537?userId=1724393873)

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |    Typeahead Conversion Rate         |                    |                    |        |
| KPI      |     Overall Volume        |                    |                    |        |
| KPI      |     Typeahead Usage        |                    |                    |        |
| KPI      |     Typeahead Searches by Page       |                    |                    |        |
| KPI      |     Top Typeahead Terms        |                    |                    |        |


#### Baseline KPI Values
 * _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
n/a

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

-   **Strategy Goal**: Decrease the time users spend waiting for an outcome.
-   **Objective**: Make VA.gov site search a more effective, reliable way for users to more quickly get the information they seek
-   **Success metrics**: 
    1.  Increased use of on-site search
    2.  High click throughs for type-ahead "suggestions"
    3.  Increased conversion from search to most popular pages and tasks

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
	- Typeahead is a commonly uses feature for search experiences. We have conducted two POCs in advance of moving forward with Typeahead 1.0 (100% launch)
	- POC Details for reference:
	   - [**Typeahead POC**](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8896): Dec 23-Jan 31 : 5% of users -   [Findings inconclusive due to Search.gov defect](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8896#issuecomment-795647840)
      - **[Typeahead POC2](https://github.com/department-of-veterans-affairs/va.gov-team/issues/21316)** - April 12-25, 2021 : 35% of VA.gov users (Findings TBD)
 - [**Search usability research findings**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/research/user-research/research-study-jan-2021/research-findings.md)
- *Why this solution / approach over other solutions / approaches?*
  - TBD
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - We decided not to bold the typed word because [search.gov](http://search.gov/) only allows the typed word to appear at the beginning of the suggestion. It is recommended that the emphasis (text in bold) should be on the suggestion when the typed word is always shown first. For more information, review this [typeahead improvements presentation  ](https://docs.google.com/presentation/d/1re7s91M3Yi-qdXMXyvmMBiTIWbFczn6bZAM_zDN4CgA/edit?usp=sharing)
 -  *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
    - Additional typeahead suggestions will be added over time to align with user objectives
    - Evaluation of queries that resulted in no typeahead suggestions in order to identify the need for typeahead suggestions and or content gaps
    - Expand acronym using VA acronym list to improve clarity
    - Remove State references from suggestions unless typed directly from user
    - Add typeahead to results page refinement search
    - Hover over suggestions fill out search input
    - Improving Suggestion Quality
         a)Enhance Fault Tolerance for spelling mistakes (eg “goverment”)
         b)Don't allow plural/singular terms in same suggestion set
         c)Explore ways to improve the algorithm search.gov uses to establish suggestions (decrease weighting of frequently searched for terms, establish a blacklist to remove terms that we don't want to appear)
    
### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
	- Veterans will encounter typeahead as they conduct a search. Once a user types the first three characters of their query they will be presented with suggestions which they can click on in order to complete their search. 
- *What marketing, outreach, or communications are necessary for this product to be successful?*
	- No communications re required.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates

 - *Target Launch Date*
   - May 18, 2021
- *Actual Launch Date* 
  - TBD
 -  *What date will you evaluate impact after launch?*
    - Weekly monitoring of impact will take place for the first month after which time we likely will shift to monthly evaluation dates.  
 
---

## Solution Narrative

### Current Status

### Key Decisions
***Downshift Implementation***
Our current implementation of Typeahead has a couple key requirements that resulted in our implementation choices.

- we need to be able to track the suggestions a user receives, what their query is, and whether they used the suggestions presented
- we need to meet accessibility standards for usability.
The original proposed implementation for Typeahead was to use a Datalist, however this component does not allow for custom event handlers, which did not meet many of our analytics requirements for this feature.

As a result, we had two options:

- The first was to create a custom component to be owned and maintained by va.gov to implement typeahead in such a way that would meet analytics and accessibility requirements
- The second was to use the 3rd party component DownShift, which had previously been used on VA.gov for a typeahead experience.
Due to this product being a POC, the decision was made to use Downshift, rather than sped the time required to build a custom component from scratch, saving us a LOT of time in approvals and streamlining the release process.

However, Downshift lacks a large number of customization options, and obfuscates a lot of functionality from the developer (certain elements can't have event listeners added to them, or cannot be interacted with from outside of the component). It is because of these quirks that many of the "Nice to have" features are not an option for us currently.

Additionally, because the downshift component hides a lot of its interior elements, there are some functionalities that might "flake out" due to the component loading, such as focusing the input field on clicking the search menu button.

There are talks about creating a unified sitewide search, and as part of that process a more robust "custom" typeahead component would be designed and built that would allow for many of these features to exist. 

---
   
## Screenshots

### Before:  VA.gov Search (Site Header)
![Screen Shot 2020-05-07 at 2 55 56 PM](https://user-images.githubusercontent.com/63107147/81336073-a959d980-9076-11ea-8ff7-e2057c744d2e.png)

## Typeahead Experience can be seen and explored on Staging.va.gov

### After -  VA.gov Search with Typeahead Enabled (Site Header) 
<img width="899" alt="After with typeahead" src="https://user-images.githubusercontent.com/72393866/117859446-01648680-b25d-11eb-8c4f-4605defed8c0.png">


---

#### Communications

<details>

- Team Name: Search & Discovery
- GitHub Label: vsa-search-discovery
- Slack channel: #va-search
- Product POCs:
	- Typeahead POC
	- Typeahead POC2
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: John Hashimoto
 - PM: Denise Coveyduc
 - Engineering: Sam Suddath
 - Research/Design: Megan Gayle
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

