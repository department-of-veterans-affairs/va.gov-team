# How to conduct a Manual Bug or UX Issue Audit on 526EZ

## Context and Purpose
The 526EZ is a long form with multiple pathways (e.g., ancillary forms) and nested, conditional responses. Our team needs to manually test the form for bugs and UX issues. We then need to document findings in a consistent, actionable ticket format. This will provide a high-level view of bugs and UX issues, help prioritize fixes, and inform a clearer product and UX strategy for future enhancements. 

This document is a guide to support team members in: 
- conducting bug focused manual audits of the 526EZ form
- conducting UX-focused manual audits of the 526EZ form
- documenting findings

This documentation will help ensure consistency in how we evaluate the UX of the form and support longitudinal understanding of what bugs and UX issues exist and where.

## Helpful Resources
- [526 Active Form Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792): This is the most up-to-date documentation of the form in production. It provides screenshots of all of the main form Steps and pathways or ancillary forms. You can use this to understand the form as a whole.
- [526 Product Guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Disability%20Benefits%20Experience/2%20-%20Delivery/Product%20Guide%20Drafts/526EZ.Disability.Benefits.Claims.Product.Guide.v4.7_SRT.04072025.docx?d=wf9b54a1c03e14c14a4cee86463e34e40&csf=1&web=1&e=bRrO5C): This proivdes a walkthrough of the form with explanations of what is happening as the user goes through each page.
- 526 Active Form Audit Map: It provides screenshots of all of the main form Steps and pathways or ancillary forms. Use this to track testing logistics (e.g., which path has been tested, who tested, when, what browser was used.) Provides a visual of how much of the form has been tested and how much is left to go. 

## Overview of Steps
1. Access staging
2. Understand "Bugs vs. UX Issues" and determine what kind of audit you will be conducting.
4. Determine which (a) form Step(s) and (b) which conditional pathways you will be auditing
5. Audit your sections and make sure to track which conditional responses you are selecting as a user on the *526 Active Form Audit Map*.
6. Create tickets for the issues you found using the **Bug Ticket Template** or the **UX Issue Template**
7. Document on the **526 Active Form Audit Map** and **Audit Spreadsheet** which Steps and conditional pathways you audited 

### 1. Access Staging
In order to test, testers need to access the form in Staging.
1. Access the Staging Environment [here](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
2. Click "Sign in to start your application"
3. Click the green "ID.me" button
4. Login using a username and password from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) of staging users. You may encounter errors with some users. Recommended users include 230, 234, 235.
5.  On the "Recieve a code by phone" screen, just click "Continue"
6.  On the "Enther the 6 digit code" click "Continue" again. (The code should have automatically populated).

### 2. Identifying Bugs 🆚 UX Issues
1. Use the following table to understand what the difference between bugs and UX issues.
    
| **Aspect**      | **Bug**                                                         | **UX Issue**                                                                 |
|------------------|------------------------------------------------------------------|------------------------------------------------------------------------------|
| **What it is**   | A technical error where something doesn’t function as intended   | A usability or design problem that makes a task harder, slower, or confusing |
| **System status**| System is broken or fails to behave as expected                  | System works but creates friction or confusion                               |
| **Resolution**   | Solved through code fixes or engineering changes                 | Solved through UX, content, or design improvements                          |
                         
2.  Determine whether you will be conducting a Bug Audit or a UX Issue Audit. While a combined audit can surface both, it is more effective for our tracking and for your mindset to decide beforehand which type of issues you are going to focusing on as the tester. Checking for bugs requires the tester to verify whether the system functions as intended, whereas checking for UX issues requires assessing how easily a user can understand, navigate, and complete their tasks.

| **Aspect**        | **Bug Audit**                                                                 | **UX Issue Audit**                                                               |
|--------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Goal**           | Identify technical defects that prevent the system from working as intended. | Identify usability, design, or content issues that make tasks harder or confusing. |
| **Focus**          | Functionality, broken features, errors, and system failures.                 | User understanding, ease of navigation, clarity, consistency, and experience quality. |
| **Approach**       | Verify expected vs. actual behavior; often checklist-based or scripted.      | Observe task flows, evaluate against UX standards, note friction and confusion points. |
| **Outcome**        | Bug reports for developers with reproduction steps and technical details.    | UX findings or tickets for designers/product teams to improve usability and design. |
| **Mindset**        | "Does it work as specified?"                                                 | "How well does it work for the user?"                                            |
| **VA Resource**  |                                                                  | [VA Experience Standards](https://design.va.gov/about/experience-standards/)
| **Ticket Template**   | Bug Ticket Template                                         | UX Issue Ticket Template 


### 4. Determine Which Form Steps You Will Be Audting
| **Form Section**      | **Subprocesses** | **Conditional Reponses** |
|------------------------|----------------------|--------------------------|
| **Intro, Intent to File** |None                 |
| **Step 1: Veteran Details** |☐ Homeless Process <br>☐ Military Service History Process | 
| **Step 2: Conditions**      |☐ Toxic Exposure                | ☐ Prisoner of War <br> ☐ Additional Disability Benefits |             
| **Step 3: Mental Health**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 4: Supporting Evidence**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 5: Additional Information**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 6: Review and Submit**  |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |

### 4. [WIP] Sign up sheet
| **Form Section**       | **Bug or UX Issue Audit** | **Subprocesses** | **Browser** | 
|------------------------|-----------------|-----------------|----------|
| **Intro, Intent to File** |None                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 1: Veteran Details** |☐ Bug Audit <br>☐ UX Issue Audit|☐ Homeless Process <br>☐ Military Service History Process | ☐ Chrome<br>☐ Firefox <br>☐ Safari <br>☐ Other |
| **Step 2: Conditions**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 3: Mental Health**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 4: Supporting Evidence**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 5: Additional Information**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 6: Review and Submit**  |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |

