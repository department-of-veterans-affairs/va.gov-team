# How to conduct a manual UX Audit on 526EZ

## Context and Purpose
The 526EZ is a long form with multiple pathways (e.g., ancillary forms) and nested, conditional responses. Our team needs to manually test the form for UX friction points and document findings in a consistent, actionable ticket format. This will provide a high-level view of issues, help prioritize fixes, and inform a clearer UX strategy for future enhancements. 

This document is a guide to support team members in: 
- conducting UX-focused manual audits of the 526EZ form
- documenting findings

This documentation will help ensure consistency in how we evaluate the UX of the form and support longitudinal understanding of what UX issues exist and where.

## Helpful Resources
- [526 Active Form Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792): This is the most up-to-date documentation of the form in production. It provides screenshots of all of the main form Steps and pathways or ancillary forms. You can use this to understand the form as a whole.
- [526 Product Guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Disability%20Benefits%20Experience/2%20-%20Delivery/Product%20Guide%20Drafts/526EZ.Disability.Benefits.Claims.Product.Guide.v4.7_SRT.04072025.docx?d=wf9b54a1c03e14c14a4cee86463e34e40&csf=1&web=1&e=bRrO5C): This proivdes a walkthrough of the form with explanations of what is happening as the user goes through each page.
- 526 Active Form Audit Map: It provides screenshots of all of the main form Steps and pathways or ancillary forms. Use this to track testing logistics (e.g., which path has been tested, who tested, when, what browser was used.) Provides a visual of how much of the form has been tested and how much is left to go. 

## Overview of Steps
1. Access staging
2. Understand "Identifying bugs vs. UX friction points" 
3. Determine which form Steps you will be auditing
4. Audit your sections and take initial notes on a mural board
5. Create tickets for the issues you found using the *Ticket Template*

### 1. Access Staging
In order to test, testers need to access the form in Staging.
1. Access the Staging Environment [here](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
2. Click "Sign in to start your application"
3. Click the green "ID.me" button
4. Login using a username and password from [this list[(https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) of staging users. You may encounter errors with some users. Recommended users include 230, 234, 235.
5.  On the "Recieve a code by phone" screen, just click "Continue"
6.  On the "Enther the 6 digit code" click "Continue" again. (The code should have automatically populated).

### 2. Identifying Bugs vs. UX friction points
