## Search Events

### Context
- The following spec serves as a standardized spec for tracking search consistently across the various search touchpoints of the VA.gov, including but not limited to: 
   - Type ahead search
   - Resources and support search
   - Find Forms
 - This spec captures both the search and search result click tracking
 
 
 ### On Search

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has performed a search AND search results have been returned_ | `'event': 'view_search_results'`<br>`'search-page-path': '/', //for homepage`<br>`'search-text-input': 'heal',`<br>`'type-ahead-option-keyword-selected': 'health assessment',`<br>`'type-ahead-option-position': 2,`<br>`'type-ahead-options-list': {'healing touch', 'health assessment', 'health problems that i have', 'health coverage statement 2019', 'health topics'}` | - **Please be sure to push `undefined` for any variable that is not available from the system** <br> - **For all non-type ahead search, please push boolean value `false` for `search-typeahead-enabled`**

### On Search Results Click
Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has clicked on a search result from the search results list_ |  `'event': 'onsite-search-results-click',`<br>`'search-query': 'health assessment',`<br>`'search-total-results': 999,`<br>`'search-total-result-pages': <total_result_pages>,`<br>`'search-result-position': 4`<br>`'search-result-page': 1` | N/A
