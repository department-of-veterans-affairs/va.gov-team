# Discovery -  Fact sheet search functionality

Fact sheets need to be searchable and displayed in various languages. Existing search functionality includes [find forms](https://www.va.gov/find-forms/), [general va wide search](https://www.va.gov/search/) (powered by search.gov), and [resources / support search](https://va.gov/resources). To start we need to gain knowledge around each search mechanism and see if one would suit being used to find Fact Sheets.

### General VA wide search

Code base: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/search

The general search functionality uses search.gov which is utilized via the endpoint `/search/?query=1010ez` to provide results and pagination of results. This is similar to the results that would be provided from google, and are based on a keyword query. The results are not really filterable or able to be narrowed down to any specific resource type (forms, pdfs, etc) so are best suited for general information and for providing results in the broadest sense.

PROS:

- Results include a title, url, and summary. These types of details are very familiar to people that have used other general search engines before.

- Search.gov indexes and provides the results without additional effort on the VA's side.

- Results include sub-domains in the result, so VAMCs and other 'non-core' pages can be shown

CONS:

- Results are not filterable by types or any other advanced criteria

- Since the results are provided by search.gov, there isn't any fine grained control given to engineering to customize the search functionality.

### Find Forms Search

Code base: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/find-forms

The form search functionality uses the endpoint `api.va.gov/v0/forms?query=1010ez` to provide results without any pagination of results. The search only provides forms, and if no query is passed to the endpoint, then all forms will be returned.

The api endpoint controller is available here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/forms_controller.rb This forms controller only accepts a query parameter and returns all forms. 

It appears that the endpoint is actually just a proxy to the lighthouse api where all the form data stored on it. The client proxy code lives here: https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/forms/client.rb

The root api call requires an api key, but is accessed via https://sandbox-api.va.gov/services/va_forms/v0

PROS:

- The search results are entirely controlled by the api endpoint and the resulting UI that is provided via React. That means that we could filter and display results in any way that we would like.
- Using the lighthouse api provides an official way to update the result set that is queried.

CONS:

- The base request for all results (no query string passed) takes some time, and may get pretty long if there are thousands of fact sheets in the database. This can obviously be optimized, but may need to be evaluated further.
- It appears that the results contain deleted forms as well as "current" live forms, and also forms with validePDFs / invalid PDFs, so filtering is done on the front-end to only display active forms with valid PDFs. This is sub optimal, but probably a limitation with the API. I would recommend that filtering to happen on the API side instead of the front-end to minimize response time.

### Resources and Support Search

Code Base: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/resources-and-support

The resources and support search is different than the other searches previously mentioned. Instead of hitting a search endpoint that is specific to the query, there is an `articles.json` file that is requested and is used as the master list of resources to use for search results. This file lives here: https://www.va.gov/resources/search/articles.json

PROS:

- This file comes from CMS article content, which means that if fact sheets were stored in the CMS instead of a database with a search api integrated, then we could access it in this method.
- It does not require any search functionality to really be implemented on the back-end and all search filtering soley happens on the front end from the data that is present in the articles.json file.

CONS:

- The `articles.json` file appears to be getting created via content-build, and therefore may not be the most future proof.
- Since content-build is being deployed semi-regularly, the publishing delay will be present for this data (once per hour)
- Searching and filtering via the front-end is an engineering concern, and is viable for smaller search, but if the main search data grows, then there may be challenges that need to be addressed.
