# Global Search
A React application that handles the global search aspect for VA.gov. It is powered by [Search.gov](https://www.search.gov). 

It can viewed live at [`https://www.va.gov/search/`](https://www.va.gov/search/).

<img style="width: 650px;" src="https://user-images.githubusercontent.com/17163973/160684398-fd1e46f8-fbb2-4eab-9f88-c2cccbe475a6.png" alt="Va.gov search page top"/>

<img style="width: 650px;" src="https://user-images.githubusercontent.com/17163973/160931470-7785e527-8443-47c6-a64c-902908fd014b.png" alt="Va.gov search page bottom"/>

## Entry Point: [search-entry.jsx](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/search-entry.jsx)
This acts as the entry point for the global search. It is called from the [`content-build`](https://github.com/department-of-veterans-affairs/content-build) repository's page templates. 

The [`startApp`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/index.js) function acts as a wrapper that handles setting up the routes, common Redux store, browser history, before ultimately calling `ReactDOM.render()` on the component and its root element. 

## Containers
### SearchApp
Location: [`src/applications/search/containers/SearchApp.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/containers/SearchApp.jsx)

This component acts the *App* level component the Search application.

<details>
  <summary><strong>Function List</strong> (Click to expand)</summary><br>
  <table>
    <thead>
      <tr>
        <th>Function Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>constructor</code></td>
        <td>Initializes the search state from the Redux state.</td>
      </tr>
      <tr>
        <td><code>componentDidMount</code></td>
        <td>If there was was a URL search query, then immediately hit the search API to load results.</td>
      </tr>
      <tr>
        <td><code>componentDidUpdate</code></td>
        <td>Checks to see if there are new search results. If so, sets the focus on the results section.</td>
      </tr>
      <tr>
        <td><code>handlePageChange</code></td>
        <td>Updates the page state triggered by the Pagination component. A callback function calls `handleSearch` once the page has been updated.</td>
      </tr>
      <tr>
        <td><code>handleSearch</code></td>
        <td>Checks if the query has changed from the URL or user input, updates the URL and fetches new search results based on URL query or user input.</td>
      </tr>
      <tr>
        <td><code>updateQueryInfo</code></td>
        <td>Updates the page, current search results, and typeahead state.</td>
      </tr>
      <tr>
        <td><code>updateURL</code></td>
        </td>
        <td>Uses the router from the props to update the URL search query.</td>
      </tr>
      <tr>
        <td><code>onSearchResultClick</code></td>
        <td>Called when a search result is clicked. This handles tracking the click on whether this is a <i>Best Bet</i> result or a regular result and records the event for analytics.</td>
      </tr>
      <tr>
        <td><code>onInputSubmit</code></td>
        <td>On <i>Search</i> button click, fetches search results, updates the query information, and updates the URL parameters.</td>
      </tr>
      <tr>
        <td><code>handleInputChange</code></td>
        <td>Updates the <code>userinput</code> state from the text input box.</td>
      </tr>
      <tr>
        <td><code>onSuggestionSubmit</code></td>
        <td>On typeahead suggestion click, fetches search results, updates the query information, and updates the URL parameters.</td>
      </tr>
      <tr>
        <td><code>fetchSuggestions</code></td>
        <td>Fetches and returns sorted typeahead suggestions for the search dropdown. If fetch fails, logs the error in Sentry.</td>
      </tr>
      <tr>
        <td><code>renderResults</code></td>
        <td>Returns a JSX fragment containing the Search Dropdown component, results information, recommended results (<i>Best Bets</i>), and results list. If search fails due to server issues, returns the Search Dropdown component and an error message.</td>
      </tr>
      <tr>
        <td><code>renderRecommendedResults</code></td>
        <td>Returns a JSX fragment containing the recommended results (<i>Best Bets</i>). This is displayed under the results information.</td>
      </tr>
      <tr>
        <td><code>renderResultsInformation</code></td>
        <td>Returns a JSX fragment containing the results information. (<i>Example: 'Showing 1-10 of 999 results for "health"</i>).</td>
      </tr>
      <tr>
        <td><code>renderResultsList</code></td>
        <td>Returns a JSX fragment containing a list of web results, if available. If not, returns a message that no results were found.</td>
      </tr>
      <tr>
        <td><code>renderWebResult</code></td>
        <td>Returns a JSX fragment containing an individual web results.</td>
      </tr>
      <tr>
        <td><code>render</code></td>
        <td>Renders entire search app including search breadcrumbs, search results, and VA search tools on the right sidebar.</td>
      </tr>
    </tbody>
  </table>
</details>
<br>

## Components
### SearchBreadcrumbs
Location: [`src/applications/search/components/SearchBreadcrumbs.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/components/SearchBreadcrumbs.jsx)

<details>
  <summary><strong>Function List</strong> (Click to expand)</summary><br>
  <table>
    <thead>
      <tr>
        <th>Function Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>componentDidMount</code></td>
        <td>Sets the focus on the breadcrumb based on ID.</td>
      </tr>
      <tr>
        <td><code>getBreadcrumbs</code></td>
        <td>Returns a static array of <code>a</code> tags containing the Home(root) breadcrumb and the Search breadcrumb.</td>
      </tr>
      <tr>
        <td><code>render</code></td>
        <td>Returns a JSX fragment of a VA Breadcrumb component with the search breadcrumb array as a child.</td>
      </tr>
    </tbody>
  </table>
</details>
<br>

### SearchDropdown
Location: [`src/applications/search/components/SearchDropdown/SearchDropdownComponent.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/components/SearchDropdown/SearchDropdownComponent.js)

<i><strong>NOTE<strong>: This component is now part of the VA Component library</i>
  
<details>
  <summary><strong>Function List</strong> (Click to expand)</summary><br>
  <table>
    <thead>
      <tr>
        <th>Function Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>componentDidMount</code></td>
        <td>Fetches the suggestions for the starting input value.</td>
      </tr>
      <tr>
        <td><code>componentDidUpdate</code></td>
        <td>When the input value changes, calls the prop function to bubble up its value to the parent component</td>
      </tr>
      <tr>
        <td><code>componentWillUnmount</code></td>
        <td>Clear the timeouts for fetch suggestions and updating A11y timeout on unmount.</td>
      </tr>
      <tr>
        <td><code>formatSuggestion</code></td>
        <td>Formats the suggestion text so that the suggested part is <strong>bold</strong></td>
      </tr>
      <tr>
        <td><code>handleInputChange</code></td>
        <td>Updates the <code>inputValue</code> state and sets the active index to <code>undefined</code></td>
      </tr>
      <tr>
        <td><code>fetchSuggestions</code></td>
        <td>Sets the <code>fetchingSuggestions</code> state to true, calls prop <code>fetchSuggestions</code> function, and updates the suggestions state.</td>
      </tr>
      <tr>
        <td><code>onInputBlur</code></td>
        <td>Handles the blur logic for the input.</td>
      </tr>
      <tr>
        <td><code>focusIndex</code></td>
        <td>Handles focusing on the currently selected index in the suggestions.</td>
      </tr>
      <tr>
        <td><code>onKeyDown</code></td>
        <td>Handler for all keypress logic for the dropdown component.</td>
      </tr>
      <tr>
        <td><code>onOptionClick</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>selectOption</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>setA11yDescriptionFlag</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>updateMenuState</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>clearSuggestions</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>saveSuggestions</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>handleButtonShift</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>setA11yStatusMessage</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>render</code></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </details>
