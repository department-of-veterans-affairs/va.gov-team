# VA.gov search

Search on VA.gov uses the Search Results API provided by Search.gov

The help manual can be found [here](http://search.digitalgov.gov/manual/).

## Current Tools
- "Search API" is how we provide search results to users. The implementation guide is [here](https://search.usa.gov/sites/7378/api_instructions) and the vets-api endpoint used for search is [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_controller.rb). Results are parsed on the FE and rendered using the search app[here](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/search)
- "Search Click tracking" is one of the ways we are tracking our click-through rates for global search. 
    From the [search.gov homepage](https://search.usa.gov/sites/7378) navigate to 

    analytics -> clicks 
    
    or 
    
    analytics -> monthly reports 

    This tracking allows us to monitor queries with low click through rates and create best bets or typeahead suggestions to correct the issue. Search click tracking uses the click tracking API, [instructions here](https://search.usa.gov/sites/7378/click_tracking_api_instructions), and uses vets-api to obfuscate the private API keys, [endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_click_tracking_controller.rb)
- "Search Typeahead" uses a database of suggestions to assist users in finding what they are looking for on va.gov. The instructions for implementing this api is [here](https://search.usa.gov/sites/7378/type_ahead_api_instructions). We use a Vets-API endpoint to obfuscate the private API key [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_typeahead_controller.rb). These suggestions are algorithmically generated (if a query is searched X number of times, input it as a suggestion, and then remove it if it goes Y days without being searched Z times). These numbers are controlled by search.gov, and we do not have much control over them.
- "Best Bets" is a way to boost content on the va.gov site.  More information can be found on [this site](https://search.gov/manual/best-bets.html). Best Bets are added on the search.gov portal which requires approval to access. If a best bet needs to be added or changed reach out to the search.gov team at search@gsa.gov or contact Danielle Thierry on the VA Content team.

## Getting Access
In order to get access to the search.gov console, you have to have a log in and be approved. This process is best accomplished by emailing search@gsa.gov.  When you do so, be sure to CC your PO as part of the process, as they track VA approval for all credentialed accounts they distribute.

## In Case of Issues
- The primary contact point for any search related issues is going to be search.gov. Their primary mode of contact is email: search@gsa.gov

### FE issues
In the event of a front end issue with search, all of the front end code can be found in the following locations:
- Search in the Header
[Search Header](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/user-nav/components/SearchMenu.jsx)
- Search Results Page
[Search App}(https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/search)

### BE issues
In the event of a back end issue with search, all of the back end code can be found in the following locations:
- Search Results API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_controller.rb)
- Search Typeahead API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_typeahead_controller.rb)
- Search Click Tracking API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_click_tracking_controller.rb)

