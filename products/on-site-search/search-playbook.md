# VA.gov search

Search on VA.gov uses the Search Results API provided by Search.gov

The help manual can be found [here](http://search.digitalgov.gov/manual/).

## Current Tools
- "Search API" is how we provide search results to users. The implementation guide is [here](https://search.usa.gov/sites/7378/api_instructions) and the `vets-api` endpoint used for search is [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_controller.rb). Results are parsed on the FE and rendered using the search app [here](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/search)
- "Search Click tracking" is one of the ways we are tracking our click-through rates for global search. 
    From the [search.gov homepage](https://search.usa.gov/sites/7378) navigate to 

    analytics -> clicks 
    
    or 
    
    analytics -> monthly reports 

    This tracking allows us to monitor queries with low click through rates and create best bets or typeahead suggestions to correct the issue. Search click tracking uses the click tracking API, [instructions here](https://search.usa.gov/sites/7378/click_tracking_api_instructions), and uses vets-api to obfuscate the private API keys, [endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_click_tracking_controller.rb)
- "Search Typeahead" uses a database of suggestions to assist users in finding what they are looking for on va.gov. The instructions for implementing this api is [here](https://search.usa.gov/sites/7378/type_ahead_api_instructions). We use a `vets-api` endpoint to obfuscate the private API key [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_typeahead_controller.rb). These suggestions are algorithmically generated (if a query is searched X number of times, input it as a suggestion, and then remove it if it goes Y days without being searched Z times). These numbers are controlled by search.gov, and we do not have much control over them.
- "Best Bets" is a way to boost content on the va.gov site. More information can be found on [this site](https://search.gov/manual/best-bets.html). Best Bets are added on the search.gov portal which requires approval to access. If a best bet needs to be added or changed reach out to the search.gov team at search@gsa.gov or contact Danielle Thierry on the VA Content team.
- React javascript indexing is enabled on the Search.gov side. (https://search.gov/indexing/what-searchgov-indexes.html)

## Getting Access
In order to get access to the search.gov console, you have to have a log in and be approved. 

* Visit search.gov
* Select Login
* You'll be redirected to a Login.gov authentication screen.
    * If you are not set up for Login.gov, do that. ([help docs](https://www.login.gov/help/get-started/create-your-account/))
    * For search.gov, you will need to use a .gov email address, or associate your .gov email address with your existing Login.gov account. (If you try to use your agency email address, you may receive a response like this: "Because you don't have a .gov or .mil email address, we need additional information. If you are a contractor on an active contract, please use your .gov or .mil email address on this account, or have your federal POC email search@gsa.gov to confirm your status.`)
* Login at Login.gov using your .gov email address
* Provide your PIV keycode when prompted
* You should be logged in.
* If not: contact search@gsa.gov for help and CC your PO as part of the process, as they track VA approval for all credentialed accounts they distribute.

## In Case of Issues
- The primary contact point for any search related issues is going to be search.gov. Their primary mode of contact is email: search@gsa.gov
- In case of load testing or VA.gov incidents that might hit the Search.gov rate limit, we can/should forwarn the Search.gov customer experience team: search-cx@gsa.gov

### FE issues
In the event of a front end issue with search, all of the front end code can be found in the following locations:
- Search in the Header
[Search Header](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/site-wide/user-nav/components/SearchMenu.jsx)
- Search Results Page
[Search App}(https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/search)
- Resources and Support Search Bar [Searching "All VA.gov"](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/resources-and-support/components)

### BE issues
In the event of a back end issue with search, all of the back end code can be found in the following locations:
- Search Results API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_controller.rb)
- Search Typeahead API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_typeahead_controller.rb)
- Search Click Tracking API
[endpoint here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/search_click_tracking_controller.rb)

