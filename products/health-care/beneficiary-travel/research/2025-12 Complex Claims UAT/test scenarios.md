# Complex Claims Test Plan

Last Updated: 2024-11-21
Author: Liza McRuer
Status: Draft

## Introduction & Overview

### Feature Description

Adding functionality to travel claims on VA.gov. Previously users could file SMOC (simple mileage-only claims). Complex claims adds additional expense types and document upload.

TODO: Link to any relevant design documents, user stories, or specifications (e.g., "Feature Spec Document").

### Goals of this Test Plan

- Verify functionality of features

## Scope of Testing

### In Scope

- Starting a complex claim from a past appointment
- Adding expense types and documentation
- Editing expense types and documentation
- Leaving and re-entering an unsubmitted claim
- Submitting a claim for travel reimbursement

### Out of Scope
- One way trips
- Trips from a different address than is on file
- Post 30 day filing
- BTSSS unassociated file redirect

Note: this functionality is not supported on VA.gov at this time. Users will be redirected to legacy tool BTSSS.

## Testing Objectives

- To verify that all functional requirements of complex claims MVP are met
- To identify and report any defects or issues with complex claims
- To confirm that existing SMOC functionalities are not adversely affected by the introduction of complex claims

## Test Strategy & Approach

### Types of Testing - TBD (Unsure if we're doing all types)

- Functional Testing: Verifying each function of the software as specified in the requirements.
- Compatibility Testing: Testing on different browsers, devices, and operating systems.
- Regression Testing: Ensuring existing functionality is not broken by new changes.
- Accessibility Testing: Ensuring the feature is usable by people with disabilities.

### Approach

Manually testing each scenario.

## Test Environment & Setup

### Test Environment

Describe the environment(s) where testing will occur (e.g., Development, Staging/QA, UAT).

Staging Environment: TBD

Test users:
- TBD

### Test Data Requirements

Test users with the following configurations:
- Starts a new complex claim from a past appointment
- Re-enters an existing claim that has not been submitted

[TODO] Review scenarios and fill this out.

### Tools

- Manual testing
- [Accessibility testing checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/accessibility-testing-checklist.md)

## Test scenarios

| ID | Description                                                                         | Test Cases |
|----|-------------------------------------------------------------------------------------|------------|
|    | Verify user can start a complex claim from past appointment                         |            |
|    | Verify user can select an expense from expense list                                 |            |



## Test cases and steps

A. Verify user can start a complex claim
   1. User navigates to past appointment and selects "File a travel claim"
   2. User is directed to into page
   3. User starts a complex claim

Success: User is able to see the "select an expense page."   
Failure: User is unable to start a claim. Failure message directs user to other avenues.   

B. Verify user can select an expense from expense list
   1. User chooses first expense
   2. User is directed to corresponding expense page (ex. If a user selects 'mileage,' they are directed to the next page for mileage)

Success: User proceeds to secondary questions for mileage OR the corresponding page for the expense they selected.   
Failure: User is not directed to the appropriate page that corresponds with their selection.   

C. Verify user can add expense information and document to expense page
   1. User adds receipt and information
   2. User hits continue
   3. User is directed to the unsubmitted expenses page

Success: User sees a success alert on the unsbumitted expenses page, confirming their expense was successfully added   
Failure: User sees a warning alert on the unsubmitted expenses page that explains that the expense was not added   

D. Verify user can add more expenses from the unsubmitted expense page
   1. User chooses secondary action "add more expenses"
   2. User re-enters steps 'B' and 'C' and continues on the add expense flow

Success: User is able to select a new expense   
Failure: User is unable return to the select an expense page   

E. Verify user can edit expenses from the unsubmitted expense page
   1. User chooses chooses to edit expense
   2. User re-enters steps 'C' and edits the expense

Success: User sees a success alert on the unsbumitted expenses page, confirming their expense was successfully edited   
Failure: User sees a warning alert on the unsubmitted expenses page that explains that the expense was not edited   

E. Verify user can delete expenses from the unsubmitted expense page
   1. User chooses chooses to delete an expense
   2. A modal confirms the destructive action
   3. User proceeds

Success: The card is deleted from the accordion.   
Failure: The card is not deleted from the accordion.   

## Page: What type of expense do you want to add?

- User selects mileage: continue to mileage expense page to answer corresponding questions
   -   If on a subsequent visit to this page the user selects mileage again, show error "You can only add 1 mileage expense for each claim. Select another expense type or submit your claim.
- User selects parking: continue to parking expense page
- User selects tolls: continue to toll expense page
- User selects public transportation, taxi, or rideshare: continue to public transportation, taxi, or rideshare expense page
- User selects airfare: continue to airfare expense page
- User selects lodging: continue to lodging expense page
- User selects meals: continue to meals expense page
- User selects other travel expenses: continue to other travel expense page
- User does not make a selection, show error "Select an expense type"

## Page: Unsubmitted expenses


| ID | Description                                                                         | Test Cases |
|----|-------------------------------------------------------------------------------------|------------|
|    | Page displays add more expenses button |            |
|    | Page displays all added expenses in accordion with the number of expenses in that cateory noted in the accordion |            |
|    | Verify that user can expand and close accordion |       |
|    | Verify user can edit expense |   |
|    | Verify users can delete expense |            |
|    | Verify users can exit via breadcrumb |            |
|    | Verify empty state; if a user deletes all expenses |            |


System: if adding or editing either document or expense fails, display error alert on unsubmitted expenses page.

## Page: Mileage verification

- User selects the address they departed from
- User selects if the trip was round trip or one way
- If a user selects EITHER "a different address" or "one way": continue to intermidiary page "You'll need to file this claim in another tool" with link to BTSSS
- If a user does not select either and attempts to proceed: in-line error

## Page: Parking expense
- User uploads receipt
- User enters date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Toll expense
- User uploads receipt
- User enters date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Public transporation, taxi, or rideshare expense
- User uploads receipt
- User selects transportation type
- User selects reason for public transportation
- User enters date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Airfare expense
- User uploads receipt
- User enters company name
- User selects round trip or one way
     - IF user selects round trip, return date toggles to a required field
- User enteres departure date, departure airport, arrival airport, return date IF the round trip option is selected, date on receipt, amount requested, and optional description
     - IF a user enters a return date, modal prompts them to review their selection (mismatch between one way and return date)
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Lodging expense
- User uploads receipt
- User enters lodging name
- User enters check in date, check out date, date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Meals expense
- User uploads receipt
- User enters where meal was purchased
- User enters date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Other travel expenses
- User uploads receipt
- User enters date on receipt, amount requested, and optional description
- User selects continue: continue to unsubmitted expenses page
- User cancels adding expense: user is returned to select expense page
- User goes back: user is warned of destructive action and taken back to their previous page
- In-line errors: user is instructed to correct or fill out all fields; if user continues with error, focus state returns them to the first error in the hierarchy

## Page: Beneficiary travel agreement
- User confirms informaiton is correct
- User submits: continue to confirmation page
    - If failure, system error is displayed on intermediary page
- User goes back: user is returned to unsubmitted expenses

## Page: Confirmation
- User received confirmation number
- User views submitted expenses in accordion
- User prints page
- User clicks review your appointments link: continue to past appointment

## System Errors, etc.
- Failure to create claim: System error displays error "We couldn't start your claim" on intermediary page
- Failure to add expense (either document or expense fails): System error displays "We couldn't add this expense" on unsubmitted expenses page
- Failure fo edit expense (either document change or expense change fails): System error displays "We couldn't edit this expense" on unsubmitted expenses page
- Failure to submit claim: System error displays "We couldn't file your claim" on intermediary page

Past appointments
- Failure to access claim: System error displays on appointment details "We can't check your claim status at the moment"

Claim details
- Failure to access claim details: System error displays "We couldn't get your travel reimbursement claim status in this tool right now"


[TODO: Work below into plan as needed]

7. Entry and Exit Criteria
7.1. Entry Criteria (Start Testing):

Conditions that must be met before testing can begin.

Examples:

Feature development is complete and deployed to the test environment.

Test environment is stable and accessible.

Required test data is available.

Test plan reviewed and approved.

Relevant documentation (specs, user stories) is available.

7.2. Suspension Criteria (Pause Testing):

Conditions under which testing will be temporarily halted.

Examples:

Critical bug blocks further testing of major functionality.

Test environment becomes unstable or unavailable.

7.3. Resumption Criteria (Resume Testing):

Conditions under which testing will resume after suspension.

Examples:

Blocking defects are fixed and verified.

Test environment is restored.

7.4. Exit Criteria (End Testing):

Conditions that signify testing is complete for the current phase.

Examples:

All planned test cases have been executed.

A certain percentage of test cases have passed (e.g., 95% pass rate).

No outstanding Critical or Major defects related to the core feature.

All High priority bugs are fixed and verified.

Test summary report is generated and reviewed.

8. Test Deliverables
List all documents or outputs that will be produced as part of the testing process.

Examples:

Test Plan (this document).

Test Cases (if separate from this plan).

Test Data.

Bug Reports (logged in the tracking system).

Test Execution Logs.

Test Summary Report (detailing results, coverage, outstanding defects).

Automation Scripts (if applicable).

9. Risks and Mitigation
Identify potential risks that could impact the testing effort and outline mitigation strategies.

Examples:

Risk: Feature requirements are ambiguous or change frequently.

Mitigation: Regular meetings with product owners/developers for clarification; establish a clear change management process.

Risk: Test environment instability.

Mitigation: Dedicated support for the test environment; pre-testing environment checks.

Risk: Insufficient time allocated for testing.

Mitigation: Prioritize test cases based on risk; communicate resource needs early.

Risk: Lack of appropriate test data.

Mitigation: Plan and prepare test data in advance; develop scripts to generate data if needed.

10. Roles and Responsibilities
Define the roles involved in the testing process and their responsibilities.

Examples:

Test Lead/Manager: Overall test strategy, planning, resource allocation, reporting.

QA Tester(s): Test case design, execution, bug reporting, retesting.

Developer(s): Unit testing, bug fixing, providing technical support to QA.

Product Owner/Manager: Clarifying requirements, UAT, approving releases.

DevOps/SysAdmin: Environment setup and maintenance.

11. Schedule (Optional)
Provide a high-level timeline for testing activities.

Examples:

Test Plan Creation: YYYY-MM-DD to YYYY-MM-DD

Test Environment Setup: YYYY-MM-DD

Test Case Design: YYYY-MM-DD to YYYY-MM-DD

Test Execution (Cycle 1): YYYY-MM-DD to YYYY-MM-DD

Bug Fixing & Retesting: YYYY-MM-DD to YYYY-MM-DD

Regression Testing: YYYY-MM-DD to YYYY-MM-DD

Test Sign-off: YYYY-MM-DD

12. Metrics
Define the metrics that will be used to track testing progress and quality.

Examples:

Test Case Coverage (Executed Test Cases / Total Test Cases).

Pass/Fail Rate (Passed Test Cases / Executed Test Cases).

Defect Density (Number of Defects / Size of Feature or KLOC).

Defect Severity Distribution (Number of Critical, Major, Minor defects).

Defect Resolution Time.

Requirements Coverage.

Appendix (Optional)
Glossary of terms.

References to other relevant documents.
