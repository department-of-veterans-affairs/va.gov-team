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
<table>
  <tr>
   <td>Description of When To Use
   </td>
   <td>Data Layer Specification
   </td>
   <td>Dev Notes
   </td>
  </tr>
  <tr>
   <td><em>When the user has performed a search AND search results have been returned</em>
<p>
<strong><em>For type ahead search, this is implemented just prior to next page load when the user lands on /search</em></strong>
   </td>
   <td><code> 'event': 'view_search_results'</code>
<p>
<code> 'search-page-path': //without <a href="www.va.gov">www.va.gov</a> hostname, the page path where the search occurred</code>
<code> 'search-query': //full query input from the user</code>
<p>
<code> 'search-typeahead-enabled': //true when the user has typeahead enabled </code>
<p>
<code> 'search-selection': //scope of search, values include: 'All VA.gov','Resources and Support','Yellow Ribbon',  'Find Forms'</code>
<p>
<code> 'search-filters-list': {} //key value pairs of search filter parameters</code>
<p>
<code>'type-ahead-option-keyword-selected': //type ahead option selected by user to perform search</code>
<p>
<code>'type-ahead-options-list': [] //full array list of type ahead options presented to user at time of search</code>
<p>
<code>'type-ahead-option-position': //rank position chosen from type ahead options list </code>
<p>
<code> 'sitewide-search-app-used': //true only when the header search box is used, otherwise false</code>
<p>
<code> 'search-results-total-count': //full count of search results returned</code>
<p>
<code> 'search-results-total-pages': //full count of search result pages returned</code>
   </td>
   <td>Please be sure to push `undefined` for any variable that is not available from the system
<p>
For all non-type ahead search, please push boolean value <code>false </code>for <code>search-typeahead-enabled</code>
<p>
Example of <code>search-filters-list </code>used for Yellow Ribbon Search <code>{ stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}</code>
   </td>
  </tr>
</table>

### Type Ahead Search Specific - Other Search Products to Ignore

<table>
  <tr>
   <td>Description of When To Use
   </td>
   <td>Data Layer 
   </td>
   <td>Dev Notes 
   </td>
  </tr>
  <tr>
   <td><em>When the next page load <strong>for a typeahead search has occurred</strong></em>
<p>
<em>Exclusively used on type ahead search for the purpose of maintaining consistent metadata extraction while coping with the difficulty of the timing between when search is executed, next page load, and search result metadata is returned</em>
   </td>
   <td><code>'event': 'onload_view_search_results',</code>
<p>
<code>'search-query': //full query input from the user</code>
<p>
<code> 'search-typeahead-enabled': //true when the user has typeahead enabled </code>
<p>
<code> 'search-selection': //scope of search, values include: 'All VA.gov','Resources and Support','Yellow Ribbon',  'Find Forms'</code>
<p>
<code>'sitewide-search-app-used': //true only when the header search box is used, otherwise false</code>
<p>
<code> 'search-results-total-count': //full count of search results returned</code>
<p>
<code> 'search-results-total-pages': //full count of search result pages returned</code>
   </td>
   <td><em>See above dev notes for consistencies </em>
   </td>
  </tr>
</table>


### On Search Results Click
Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the user has clicked on a search result from the search results list_ |  `'event': 'onsite-search-results-click',`<br>`'search-result-type': 'title' //dynamically populate with 'pdf', if pd for 'cta' if a cta click`<br>`'search-filters-list': { stateOrTerritory: //state, city: //city name, contributionAmount: "unlimited" //or undefined if not used, numberOfStudents: "unlimited" //or undefined if not used}`<br>`'search-results-top-recommendation': true\|false //populate boolean according to if result clicked was a top recommendation`<br>`'search-selection': 'All VA.gov' //dynamically changed according to search application + scope`<br>`'search-result-chosen-page-url': https://benefits.va.gov/benefits //dynamically populate accoding to the url href`<br>`'search-result-chosen-title': Veterans Benefits Administration Home' //dynamically populate with the top level title` <br>`'search-query': 'health assessment',`<br>`'search-results-total-count': 999,`<br>`'search-results-total-pages': <total_result_pages>,`<br>`'search-result-position': 4`<br>`'search-result-page': 1` | - The position number should reflect the position on the page -- For example, if 10 results are returned and the first result is clicked, `'search-result-position'` should populate with 1 <br> - If introducing a search result type that is not a title, pdf, or cta, please ask analytics team for what this value should populate with 

### On Search Result Change
- As of 1/5/2021, the primary filtering mechanism was introduced as part of [this user story](https://github.com/department-of-veterans-affairs/va.gov-team/issues/17901)

Description/Screenshot of Interaction | DataLayer | Dev Notes
------------ | ------------- | -------------
_When the orientation of the way search results are presented is changed, either with **filtering** or **sorting**_  | `'event': 'onsite-search-results-change',`<br>`'search-query': '10-10EZ', //dynamically populate with the search query`<br>`'search-page-path': '/find-forms', //dynamically populate with where the search occured`<br>`'search-results-change-action-type': 'sort', //dynamically populate with 'sort' or 'filter'`<br>`'search-results-change-action-label': 'newest', //'oldest' //populate according to the text label of user selection indicating the more specific action`<br>`'search-results-pagination-current-page': 1, //populate with the current pagination number`<br>`'search-results-total-count': 999, //populate with the total number of search results`<br>`'search-results-total-pages': 100, //populate with total number of result pages` | - **Pagination of search results is tracked using a seperate taxonomy**
