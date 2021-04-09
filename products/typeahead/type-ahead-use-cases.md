# Type Ahead - Use Cases

_Track and maintain the various use cases that exist for a given product and is best maintained alongside the product outline._

_The purpose of this document is for designers, PMs, and engineers to align early on on potential use cases and edge cases so these things aren't coming up randomly and late in the process. We recommend the team schedule a 30 minute meeting to brainstorm all use cases/edge cases early on.  Examples of cases that could be captured here include: "Veteran logs in but is not LOA3ed.", "Veteran searches and gets no results." etc etc_

Links to product outlines:
- [Onsite-Search Master](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites/onsite-search#search-product-outline---vagov---this-is-a-draft)
- [Search 2.0](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/search)

## Contents
<details>
<summary>[click to toggle ToC]</summary>
  
- [Use Case A - Invalid search string](#use-case-a---invalid-search-string) 
- [Use Case B - Valid search string](#use-case-b---valid-search-string)

</details>

## Use Case A - Invalid search string

* **Description**
  - When typing into the search input field on the user nav bar, if a veteran inputs a "garbage" string, no type ahead results will be displayed in the drop down
  - ![image.png](https://images.zenhubusercontent.com/5f13315978dd30105f60e53d/ab70a65b-7620-4839-9885-3e7c34167268)


* **Link to designs**
  - [screenshot(s) in TestRail test case]

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Go to Staging homepage https://staging.va.gov/ -- no sign-in required.
  - In page-header, click **Search** button to display text-field & button.

* **TestRail test case**: [C3163](https://dsvavsp.testrail.io/index.php?/cases/view/3163)

## Use Case B - Valid search string

* **Description**
  - When a valid search input is input, a dropdown menu will appear with suggested search options.
      **NOTE**: Update keyword for latest search.gov search-suggestions-database -- queries not used in last 30 days are regularly deleted from that db.  For now, use keyword **ebenefits** instead of benefits.

      ![type-ahead-suggestions-list](https://user-images.githubusercontent.com/587583/109373063-04f58d80-786a-11eb-9e50-59fed48c100c.png)
  - Flows after typing search string:
    - Pressing **Enter** or clicking **search** (magnifier-icon) button [w/o selecting a suggestion-option] bypasses type-ahead suggestions -- browser navigates to search-results page and displays results for exact string inputted.
    - Clicking a **suggested-option** in **suggestions** dropdown [or **Down-arrow**ing to highlight the option and pressing **Enter**] selects that option's search string for search -- browser navigates to search-results page and displays results for selected suggestion-option's search string.


* **Link to designs**
  - [screenshot(s) in TestRail test case]

* **Instructions to access in Staging (or Prod for Drupal)** (_Note: credentials should be stored in sensitive repos only_)
  - Go to Staging homepage https://staging.va.gov/ -- no sign-in required.
  - In page-header, click **Search** button to display text-field & button.

* **TestRail test case**: [C3164](https://dsvavsp.testrail.io/index.php?/cases/view/3164)

