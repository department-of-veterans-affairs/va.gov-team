# "About Disability Ratings" Test Plan

## Prepared by: Peter Hill
## Date: 10/25/2019
### Summary
 The "about-disability-ratings" page contains information on how veterans can determine their compensation based on their disability rating.  The page consists of several paragraphs of information, and an expandable disability calculator.  The logic for the calculator is simple -- it averages the disability rating from n number of disabilities added by the user.  The minimum number of disabilities to be averaged is two.
### Proposed Scenarios
1. [Verify](adr-tc1-text-content.md) the "About disability ratings" page is accessible from the "VA disability compensation" page
1. [Verify](adr-tc2-verify-link-from-parent.md) the "About disability ratings" page text matches requirements
1. [Verify](adr-tc3-verify-links-from-page.md) links from the page including, "review our combined rating table" and "Compensation 101: How did I get this rating?"
1. [Verify](adr-tc4-verify-rating-calculator.md) the "VA combined disability rating calculator" performs the following functions:
    * Enter numerical input into the "Disability rating" input box
    * Enter text input into the "Optional description" input box
    * Add rating -- creates a new row of fields for disabilty rating entry including "Disability rating", "Optional description", and "Delete" button
    * Calculate button -- calculates the average disability rating based on user inputs
    * Delete button -- removes the row from the calculator (unable to remove either of the default 2 rows)
    * Clear all button removes all input from the numerical and text input boxes as well as removing all added rows
    * After the "Calculate" button has been used -- 
        * A new link labeled "Find your monthly payment amount" is displayed
        * A new block of text explaining the calculated number
    * The "Find your monthly payment amount" link sends the user to "Disability compensation rates" page
    
### Risk Analysis
| Story Reference | Limitation | Risk | Impact |
| -------------- | ------------- | --------------- | ------------- |
| N/A | Given that no formal requirements are available for this page, test case scenarios have been based off the current functionality displayed by exploratory use of the page. | Current functionality does not match the required functionality. | Test design is incorrect, and the page does not function as intended by stakeholders |
### Test Coverage
Manual test cases will be used to verify all scenarios described under the Proposed Scenarios section.  Updated and current versions of the following browsers will be used --
1. Chrome
1. Firefox
1. Edge
### Review
Review is pending