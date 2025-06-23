
# Oracle Health Scheduling Test Plan

Last Updated: YYYY-MM-DD
Author: [Your Name/Team]
Status: Draft

## Introduction & Overview

### Feature Description

Adding support for scheduling Oracle Health appointments to the Appointments tool on VA.gov. 

TODO: Link to any relevant design documents, user stories, or specifications (e.g., "Feature Spec Document").

### Goals of this Test Plan

- Verify functionality of features

## Scope of Testing

### In Scope

- Scheduling an appointment at an Oracle Health Facility
- Requesting Oracle Health appointments
- Canceling scheduled and requested OH appointments

### Out of Scope

[TBD]

## Testing Objectives

- To verify that all functional requirements of Oracle Health Scheduling are met as per the specification.
- To identify and report any defects or issues in Oracle Health Scheduling.
- To confirm that existing functionalities are not adversely affected by the introduction of [Feature Name].

## Test Strategy & Approach

### Types of Testing

- Functional Testing: Verifying each function of the software as specified in the requirements.
- Compatibility Testing: Testing on different browsers, devices, and operating systems.
- Regression Testing: Ensuring existing functionality is not broken by new changes.
- Accessibility Testing: Ensuring the feature is usable by people with disabilities.

### Approach

Manually testing each scenario.

## Test Environment & Setup

### Test Environment

Describe the environment(s) where testing will occur (e.g., Development, Staging/QA, UAT).

Staging Environment: staging.va.gov

Test users:
- judy.morrison@idme

### Test Data Requirements

Test users with the following configurations:
- 1 provider available for scheduling
- 2 or more providers available for scheduling
- No providers available for scheduling
- No relationships with any providers

[TODO] Review scenarios and fill this out.

### Tools

- Manual testing
- [Accessibility testing checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/how-to/accessibility-testing-checklist.md)

## Test scenarios

| ID | Description                                                                         | Test Cases |
|----|-------------------------------------------------------------------------------------|------------|
|    | Verify user can access scheduling flow                                              |            |
|    | Verify user is alerted if home address is missing from profile 


## Test cases and steps

Verify user is alerted if home address is missing from profile
1. Remove home address from Profile
2. Navigate to [URL]
Success: Alert displays at top of page “To use some of the tool’s features, you need a home address on file”
Failure: Alert does not display

Verify user is not alerted if home address is present in profile
1. Add home address to Profile
2. Navigate to [URL]
Success: Alert does not display at top of page
Failure: Alert displays at top of page “To use some of the tool’s features, you need a home address on file”
 




## Page: Which VA location would you like to go to?

- System attempts to fetch facility registrations and configurations.
  - Fetch fails: Display 500 error   
- User selects a facility that supports direct scheduling for selected care type: continue to provider selection  
- User selects a facility that supports requests only: direct user to request flow
   - Note: this will change once we sort out requesting with a specific provider
- User is directed to the request flow but has hit limit of allowed requests: show message “Please call to schedule”  
- User selects a facility that supports neither direct schedule nor requests: show message “Please call to schedule”  
- User has never had an appointment for selected care type at facility: : show message “Please call to schedule”  
- User selects “current location” from drop-down and has blocked browser location: display alert
- If user hasn't been seen at a facility in the last 36 months, facility doesn't display in list
- Appointment for care type at facility is outside allowed timeframe: block with Dead End: You can't schedule this appointment online 
- User is not registered at any OH facility: display error
- If the patient has only been seen for telehealth appts, don't show facility

## Page: Which provider do you want to schedule with?

- If the Veteran has had an appointment with a provider at this facility for this type of care in the past 36 months: include that provider in the list  

- If at least one of the user’s registered or recent facilities has direct scheduling enabled and availability for this type of care:  
  - Show all providers the Veteran has seen in the past 36 months, including request-only providers  
  - If a provider’s request limit is reached: show “Call to schedule” under that provider  

- Direct scheduling and appointment requests can appear together in the list  
- Direct scheduling and “Call to schedule” can appear together if requests are disabled due to request limits  
- Provider relationship exists but at a different facility: do not show provider  
- Requests are enabled: display information with link to request at the bottom of the provider list  
- Requests are not enabled (due to request limit reached): display info with facility phone number at the bottom of the provider list

## Patient Indicated Date Page

- User enters preferred date that is not same-day: accept input and continue to next page  
- User enters same-day date: show warning they can’t schedule today + instructions for immediate medical help  
- User leaves preferred date blank: show validation error  

## Page: What date and time do you want for this appointment?

- Appointment time available: display calendar with appointment slots of selected provider  
- API call to fetch slots fails, requests are enabled: display alert with request option  
- API call to fetch slots fails, requests are not enabled: display alert with “Call to schedule”  

## Page: What’s the reason for this appointment?

- Reason provided: continue  
- Field left blank: block with validation error  

## Contact Info Confirmation

- Contact info confirmed or edited: proceed  
- Contact info empty: block with validation error  

## Final Review and Confirmation

- Show all appointment data: user selects confirm: allow confirmation  

## Request Flow Specifics

- Facility has requests enabled, direct scheduling is not: continue to request path  
- Direct scheduling enabled but no time slots available: fallback to request path  
- User wants different provider: allow request if enabled  
- Request submitted: confirmation message displayed  
- Request fails due to limit or error: show failure message  

## System Errors, etc.

- System returns no eligible facilities: block, show fallback messaging  
- User tries to go back and change care type: preserve data and flow  
- Unexpected errors during scheduling: display general error fallback  

## Cancelation scenarios

Note: waiting on Spike on cancelation logic to write up testing plan


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


