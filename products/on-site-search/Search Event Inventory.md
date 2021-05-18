# Description
The following is a list of search events and the variables being supplied along with them.

### Search Initiated
- Event Name: "view_search_results"

#### Data Provided
- 'search-page-path': url of the page where search was initiated
- 'search-query': the query that a user input (not necessarily which suggestion they chose)
- 'search-selection': will be set to "All VA.gov" for any site-wide searches we are concerned about
- 'search-typeahead-enabled': whether or not typeahead was enabled for this user (will be 100% on after launch)
- 'sitewide-search-app-used': will be set to true during onsite search from the search menu bar, false all other times (including from the search page)
- 'type-ahead-option-keyword-selected': if a typeahead suggestion was selected, it will be here. if one was not selected, will be: (not set)
- 'type-ahead-option-position': where in the options list did the above suggestion fall? will be: (not set) if suggestion is blank
- 'type-ahead-options-list': list of all suggestions presented,
- 'type-ahead-options-count': number of suggestions presented, 

### Search Result Clicked
- Event Name: "onsite-search-results-click"

#### Data Providded
- 'search-page-path': url of the page where the result was clicked
- 'search-query': the user query that landed them on the results page
- 'search-result-chosen-page-url': the url of the link they clicked on
- 'search-result-chosen-title': title of the search result they clicked on
- 'search-results-pagination-current-page': page the search result was on
- 'search-results-position': where on the search results page was the clicked link
- 'search-results-total-count': total number of results for the query above
- 'search-results-total-pages': total number of pages of results for the query above
- 'search-results-top-recommendation': true if the clicked result was a best bet, false otherwise
- 'search-result-type': "title" for onsite searches
- 'search-selection': will be set to 'All VA.gov' on any site-wide search
- 'search-typeahead-enabled': true if typeahead is enabled
- 'search-typeahead-used': true if a suggestion was used to get to the results page
