# Ask VA Manual QA process
Last updated October 15, 2024 by @beckyphung

This document explains our process to manually QA Ask VA. We're primarily using this process before our expected launch on VA.gov in January 2025. 

**Jump to:** 
- [Manual testing workflow for product/design](#manual-testing-workflow-for-productdesign)
- [Creating a bug ticket](#creating-a-bug-ticket)
- [References](#references)

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
- **Avoid rewriting the rules in multiple places.** Link to existing documentation as much as possible. This will prevent errors. See example below for [Require Veteran's branch of service for certain categories #1293](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/1293).

> - [ ] Rules are met as defined in documentation
>  
> - [ ] Tested 2 categories that require branch of service to confirm rules
> 
> - [ ] Tested 2 categories that do not require branch of service to confirm rules
- **Product, dev, or design can identify bugs.** If you're creating a ticket, just make sure to follow these steps.
- Include screenshots as needed.
- Keep comments about the bug in the ticket

### Rules for product
- **Order bugs by priority in the Caterpillars swimlane.**
- **Assign severity based on the following table.** ⚠️ Note: We're done with AT testing and probably need to update this table.

| Category | Description | Resolution Process |
|--------------|-------------|--------------------|
| **Severity&nbsp;1** | This is a top tier.Fast follow post launch, eg. missing content |Jumps backlog, potentially interrupt a developer |
| **Severity&nbsp;2** | Fast follow post launch, eg. missing content| Give a heads up before picking up another ticket|
| **Severity&nbsp;3** |  Backlog, eg. spacing issues **Example:** names not allowing apostrophe or hyphen | Will be ordered in backlog accordingly

### Steps
#### Before creating ticket
1. **Check if the bug already exists.** Do a keyword search in ZenHub for related issues. PM will archive duplicates as needed.

#### Creating the ticket
1. Copy the bug template below into an issue. ⚠️ Note: Is this bug template up to date? 
2. Add these labels to the ticket:
   - `bug`, `dev`, `dev-FE` and/or `dev-BE`, `severity [number]`
      - Severity 1: Pre-launch, eg. flow broken, etc.
      - Severity 2: Fast follow post launch, eg. missing content
      - Severity 3: Backlog, eg. spacing issues
3. Assign to **Caterpillars** swimlane.
4. Add links to rules documentation.
5. Tag Design (@tygindraux and @t-michaud)

## References
- [See our Mural from June 2024](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719508782816/0c02aafe8740074c13ea3a6821008f9f08266f5d?sender=uc2a4f18a27ff336484232897) where we first documented ways of working for bugs

### Current Bug Template
⚠️ Note: Is this bug template up to date? 

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
