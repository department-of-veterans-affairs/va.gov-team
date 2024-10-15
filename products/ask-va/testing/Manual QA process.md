# Ask VA Manual QA process
Last updated October 15, 2024 by @beckyphung

This document explains our process to manually QA Ask VA. We're primarily using this process before our expected launch on VA.gov in January 2025. 

**Jump to:** 
- [Manual testing workflow for product/design](#manual-testing-workflow-for-productdesign)
- [Creating a bug ticket](#creating-a-bug-ticket)

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
