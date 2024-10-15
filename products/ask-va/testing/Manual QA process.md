# Ask VA Manual QA process
Last updated October 15, 2024 by @beckyphung

This document explains our process to manually QA Ask VA. We're primarily using this process before our expected launch on VA.gov in January 2025. 

**Jump to:** 
- [Manual testing workflow for product/design](#manual-testing-workflow-for-productdesign)
- [Creating a bug ticket](#creating-a-bug-ticket)
- [Bug tracking and fixing](#bug-tracking-and-fixing)

## Manual testing workflow for product/design
1. Tyler will list initial scenarios we should test.
2. Tyler or Thomas will make a copy of a template based on the scenario and write rules and script for specific scenario.
3. When rules/script is ready for a product person to use, Tyler or Thomas will post on Slack.
4. Product person will pick up the scenario and assign their name in the index.
5. Product person will test staging and compare to scenario script/rules.
6. Product person will document issues in spreadsheet.
7. Product person will check whether tickets have been created for issues they've listed, if not, create a new bug.
8. In the bug, product person will link to the script they were testing so dev has a reference.
9. In the spreadsheet, product person will add a link to the bug.
10. Product person will check off scenario in index.

## Creating a bug ticket
### Rules
- **Avoid rewriting the rules in multiple places.** Link to existing documentation as much as possible. This will prevent errors. See example below for **Require Veteran's branch of service for certain categories #1293**.

> - [ ] Rules are met as defined in documentation
>  
> - [ ] Tested 2 categories that require branch of service to confirm rules
> 
> - [ ] Tested 2 categories that do not require branch of service to confirm rules

### Steps
- Add these labels to the ticket:
   - `bug`, `dev`, `dev-FE` and/or `dev-BE`, `severity [number]`
- Assign to **Caterpillars** column

## Bug tracking and fixing 
[Bug Tracking Ways of Working](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719508782816/0c02aafe8740074c13ea3a6821008f9f08266f5d?sender=uc2a4f18a27ff336484232897) 

Bugs will be identified by Product or Teammates when identified. Bugs will be labeled with “Bug” and will be triaged within Zenhub within the Defects swimlane, ordered by priority. 

| Category | Description | Resolution Process |
|--------------|-------------|--------------------|
| **Severity&nbsp;1** | This is a top tier. Bugs must be corrected prior to Assistive Tech Study (AT) **Example:** Unable to populate VA Health Facility Location, Incorrect Progress Bar. |Jumps backlog, potentially interrupt a developer |
| **Severity&nbsp;2** | This will impact AT, but lesser priority | Give a heads up before picking up another ticket|
| **Severity&nbsp;3** | Not blocking AT, but will be needed to be resolved prior to release **Example:** names not allowing apostrophe or hyphen | Will be ordered in backlog accordingly


### Process for Bug Creation: 

![image](https://github.com/user-attachments/assets/95d60188-5bf2-456b-bb08-36481438c4d9)


When identifying a bug take the following steps: 

1. Check if the bug already exists
2. Include steps to recreate the defect
3. Include screenshots
4. Keep comments about the bug in the ticket
   - If Rules are applied in the scope of the ticket, reference a link to the rules doc directly instead of cross posting the rule in the individual card.
   - If Rules need to be tested include in the acceptance criteria:
       - [ ] Rules are met as defined in documentation
       - [ ] Tested 2 categories that require branch of service to confirm rules
       - [ ] Tested 2 categories that do not require branch of service to confirm rules
5. Tag Design (Tyler / Thomas)
6. Log Bug ticket in Caterpillars
7. Assign Priority
   - Severity 1: Pre-launch, eg. flow broken, etc.
   - Severity 2: Fast follow post launch, eg. missing content
   - Severity 3: Backlog, eg. spacing issues

### Current Bug Template:
#### Description
_**Required.** Describe the problem._
<!-- EXAMPLE: The -->
#### Steps to Reproduce
_**Required.** Provide information on what steps you are aware of that produce this undesired outcome._
<!-- EXAMPLE:
1. Visit the link at https://staging.va.gov/contact-us/ask-va-too/
2. Click the "Start your application without signing in" link
3. Notice that the "Dev List" doesn't contain "steven"
-->
#### Workaround
_**Optional.** Is there something we can do to work around this issue in the meantime?
<!-- EXAMPLE: There are no known workarounds. -->
#### Impact/Urgency
_**Required.** Describe the impact this bug has on our system, clients, and/or team._
Include the rational behind labelling P1, P2, P3 (ie for AT milesting. 1. stops the testing of the AT target 2. needed for AT target, but not stopping testing 3. post AT target
<!-- EXAMPLE: This prevents us from testing the steven developer option. This is a blocking issue. -->
#### Expected Behavior
_**Required.** Describe the desired outcome if this were functioning as expected. Include a checklist if applicable._
<!-- EXAMPLE: "steven" should appear in the unauthenticated Dev List dropdown. -->
#### QA Considerations
_**Optional.** For QA to populate. Leave blank if QA is not applicable on this ticket._
<!-- EXAMPLE: ... -->
#### Additional Info & Resources
_**Required.** Include additional information, such as screenshots, log snippets, links to applicable code files, and/or links to relevant documentation._
<!-- EXAMPLE: ... -->
