

# Typeahead Suggestion Strategy

## Typeahead suggestions are being generated in two ways:

|                                                   | 1- Search.gov Algorithm                                                                                                                                                                            | 2- Curated Hardcoded Suggestion List                                                                                                                                                                                           |
|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| What is it?                                       | "leveraging va.gov search history to identify terms based on user queries"                                                                                                                         | "a curated list align with VA topics"                                                                                                                                                                                          |
| Benefits                                          |  Leverages user based queries to identify suggestions and therefore what is top of mind for the veteran community                                                                                                                                                                                                  | Particularily helpful for hard to spell terms, particularly long ones (benefits, government), alphanumeric form titles (10-10ez), common veteran tasks                                                                         |
| How is it generated?                              | A given term/phrase must be searched 5 times in a 24-hour period to appear as a suggestion. This logic is established by Search.gov                                                                | Search & Discovery team establishes the list of suggestioned based on top va.gov searches (benefits), use of best bets (e.g., Covid-19 vaccine) and promoting va content to aid in wayfinding (e.g., Find a form or how do I?) |
| When will it change?                              | Variable + Change over time based on real-time searches and algorithm logic. If a suggestion does not meet the above requirements, then it will be removed from circulation after a 30-day period. | List is fixed ("locked") and will only change when changes are identified. Monthly audit and review is conducted to identify any required amendments.                                                                          |
| What restrictions exist/ terms will not included? | Terms related to geographical locations will not appear including cities and states and other terms for privacy and security purposes. (e.g., Names, SIN, etc.)                                    | Same.                                                                                                                                                                                                                          |

## Seeding Strategy & Frequency
In an effort to enhance the effectiveness of typeahead continued monitoring and examination will be required. This strategy will ensure that typeahead suggestions are being constantly evaluated and enhanced over time. A variety of strategies will be used to enhance the list of hardcoded suggestions, each will follow the same set of review steps.
| Review Name | Description |
|--|--|
| **Monthly User Query Review** | On a ***monthly*** basis (1st week of each month) review the top 200 queries that ***did not*** return any related typeahead suggestions during prior month queries. |
|  Best Bet Additions|  |





## Review steps:

1. ***CLASSIFICATION:*** Each query terms will be classified as either '*actionable*' or '*not actionable*'
    - *ACTIONABLE:* terms that have potential to generate a new and valuable typeahead suggestion - worth exploring further
    - *NOT ACTIONABLE:* terms that are unlikely to generate a valuable typeahead suggestion and therefore no further action required (e.g. Spelling Mistakes, Finger Fumbles, character strings)
    
2.  **EXPANSION:** Actionable queries will then be reviewed in more depth with the goal to identify terms that could expanded the list of typeahead suggestions for users. As actionable terms are being reviewed the following questions will be used as guideposts. <br/> 
 *- What related terms are already included on the hardcoded list?*
 
3. **ADDITION:** Terms may be added to the hardcoded list when they meet the following criteria:
    - *Does the term generate a relevant search result within the top 4 results?*
    - *must be all lower case*
    - *must not include any names*
    - *does not include any special characters such as & or '
 4. **IMPLEMENTATION:** Newly identified terms will be sent to Search.gov to be added to the hardcoded list of suggestion. 




## Tracking changes to hardcoding list
Event log of terms added or removed at various stages.  

| Date          | Event                                         | Total Terms            | Notes     |
|---------------|-----------------------------------------------|------------------------|-----------|
| April 5/21| Initial hardcoded suggestion list established | 1268                   | Base List          |
| April 8/21 | Additional VA terms added to list             | 1369 |Added 101 new terms          |
| June 1/21  | May 2021 Monthly Review                            |    TBD                    | Rate limit error made it difficult to review the list of suggestions that did not present users with suggestions because any term that hit the rate limit was showing that 0 suggestions were available. Rate limit error was resolved on May 13 which did not yield a big list of suggestions to be reviewed.    |

## Complete Typeahead Suggestion List

 - As needed Search.gov can generate a report of all terms being presented to users as suggestions. 
- This report will have a filter available (true/false) to toggle between hardcoded suggestions and suggestions generated by the algorithm. 
	- "True" terms have been curated and therefore hardcoded onto the suggest list.
	- "False" terms users have searched for that also met the threshold and deprecate logic set by Search.gov team. These terms are then added to the suggestion list until such time they don't meet the criteria and then fall off the list.
- For reference, the **complete typeahead suggestion list** from **May 20, 2021**  
[VA SAYT Export - 2021-05-20.xlsx](https://github.com/department-of-veterans-affairs/va.gov-team/files/6580580/VA.SAYT.Export.-.2021-05-20.xlsx)
