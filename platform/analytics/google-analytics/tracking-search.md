## Search Events

### Context
- The following spec serves as a standardized spec for tracking search consistently across the various search touchpoints of the VA.gov, including but not limited to: 
   - Type ahead search
   - Resources and support search
   - Find Forms
   - Yellow Ribbon Search
 - This spec captures both the search and search result click tracking
 - The `'view_search_results'` event is designed to align with future initiatives which include the introduction of GA4 -- as `'view_search_results'` serves as an [automatically collected events](https://support.google.com/analytics/answer/9234069?hl=en). 
 
 
 ### On Search

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has performed a search AND search results have been returned_ | `'event': 'view_search_results'`<br>`'search-page-path': '/', //for homepage`<br>`'search-query': 'heal',`<br>`'search-typeahead-enabled': true\|false //based on whether the search has type ahead capability`<br>`'search-selection': 'All VA.gov' //dynamically changed according to search application + scope`<br>`'search-filters-list': { stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}`<br>`'type-ahead-option-keyword-selected': 'health assessment',`<br>`'type-ahead-option-position': 2,`<br>`'type-ahead-options-list': {'healing touch', 'health assessment', 'health problems that i have', 'health coverage statement 2019', 'health topics'}` | - **Please be sure to push `undefined` for any variable that is not available from the system** <br> - **For all non-type ahead search, please push boolean value `false` for `search-typeahead-enabled`**

### On Search Results Click
Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has clicked on a search result from the search results list_ |  `'event': 'onsite-search-results-click',`<br>`'search-result-type': 'title' //dynamically populate with 'pdf', if pd for 'cta' if a cta click`<br>`'search-filters-list': { stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}`<br><br>`'search-results-top-recommendation': true\|false //populate boolean according to if result clicked was a top recommendation`<br>`'search-selection': 'All VA.gov' //dynamically changed according to search application + scope`<br>`'search-result-chosen-page-url': https://benefits.va.gov/benefits //dynamically populate accoding to the url href`<br>`'search-result-chosen-title': Veterans Benefits Administration Home' //dynamically populate with the top level title` <br>`'search-query': 'health assessment',`<br>`'search-total-results': 999,`<br>`'search-total-result-pages': <total_result_pages>,`<br>`'search-result-position': 4`<br>`'search-result-page': 1` | - The position number should reflect the position on the page -- For example, if 10 results are returned and the first result is clicked, `'search-result-position'` should populate with 1 <br> - If introducing a search result type that is not a title, pdf, or cta, please ask analytics team for what this value should populate with 

### On Search Result Change
- As of 1/5/2021, the primary filtering mechanism was introduced as part of [this user story](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17901)

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the orientation of the way search results are presented is changed, either with **filtering** or **sorting**_  | `'event': 'onsite-search-results-change',`<br>`'search-query': '10-10EZ', //dynamically populate with the search query`<br>`'search-page-path': '/find-forms', //dynamically populate with where the search occured`<br>`'search-results-change-action-type': 'sort', //dynamically populate with 'sort' or 'filter'`<br>`'search-results-change-action-label': 'newest', //'oldest' //populate according to the text label of user selection indicating the more specific action`<br>`'search-results-pagination-current-page': 1, //populate with the current pagination number`<br>`'search-results-total-count': 999, //populate with the total number of search results`<br>`'search-results-total-pages': 100, //populate with total number of result pages` | - **Pagination of search results is tracked using a seperate taxonomy**
