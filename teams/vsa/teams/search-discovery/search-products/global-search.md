# Global Search
A React application that handles the global search aspect for VA.gov. It is powered by [Search.gov](https://www.search.gov). 

It can viewed live at [`https://www.va.gov/search/`](https://www.va.gov/search/).

<img style="width: 650px;" src="https://user-images.githubusercontent.com/17163973/160684398-fd1e46f8-fbb2-4eab-9f88-c2cccbe475a6.png" alt="Va.gov search page"/>

## Entry Point: [search-entry.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/search-entry.jsx)
This acts as the entry point for the global search. It is called from the [`content-build`](https://github.com/department-of-veterans-affairs/content-build) repository's page templates. 

The [`startApp`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js) function acts as a wrapper that handles setting up the routes, common Redux store, browser history, before ultimately calling `ReactDOM.render()` on the component and its root element. 

## Container: [SearchApp.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/containers/SearchApp.jsx)

### Class Component: SearchApp
Location: 
This component acts the *App* level component the Search application.

#### Functions
<table>
  <tbody>
    <tr>
      <th>Function Name</th>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>constructor</code></td>
      <td>None</td>
      <td>Initializes the search state from the Redux state.</td>
    </tr>
    <tr>
      <td><code>componentDidMount</code></td>
      <td>None</td>
      <td>If there was was a URL search query, then immediately hit the search API to load results.</td>
    </tr>
    <tr>
      <td><code>componentDidUpdate</code></td>
      <td><code>prevProps</code> - previous props</td>
      <td>Checks to see if there are new search results. If so, sets the focus on the results section.</td>
    </tr>
    <tr>
      <td><code>handlePageChange</code></td>
      <td><code>page</code> - page clicked from Pagination</td>
      <td>Updates the page state triggered by the Pagination component. A callback function calls `handleSearch` once the page has been updated.</td>
    </tr>
    <tr>
      <td><code>handleSearch</code></td>
      <td><code>e</code> - the event from the form submit</td>
      <td>Checks if the query has changed from the URL or user input, updates the URL and fetches new search results based on URL query or user input.</td>
    </tr>
    <tr>
      <td><code>updateQueryInfo</code></td>
      <td>
        <code>options</code> - an object that contains:
        <ol>
          <li><code>currentResultsQuery</code></li>
          <li><code>page</code></li>
          <li><code>typeaheadUsed</code></li>
        </ol>
      </td>
      <td>Updates the page, current search results, and typeahead state.</td>
    </tr>
    <tr>
      <td><code>updateURL</code></td>
      <td>
        <code>options</code> - an object that can contain:
        <ol>
          <li><code>query</code></li>
          <li><code>page</code></li>
          <li><code>typeaheadUsed</code></li>
        </ol>
      </td>
      <td>Uses the router from the props to update the URL search query.</td>
    </tr>
    <tr>
      <td><code>onSearchResultClick</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>onInputSubmit</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>handleInputChange</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>onSuggestionSubmit</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>fetchSuggestions</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>renderResults</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>renderRecommendedResults</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>renderResultsInformation</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>renderResultsList</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>renderWebResult</code></td>
      <td>None</td>
      <td></td>
    </tr>
    <tr>
      <td><code>render</code></td>
      <td>None</td>
      <td></td>
    </tr>
  </tbody>
</table>
