# 🔧 526EZ How-To Audit  

## 🎯 Purpose
This document is a guide to support team members in: 
- Conducting bug focused manual audits of the 526EZ form
- Conducting UX-focused manual audits of the 526EZ form
- Documenting findings on tickets
- Tracking which parts of the 526EZ have already been audited

## 🧭 Context
The 526EZ is a long form with multiple pathways (e.g., ancillary forms) and nested, conditional responses. Our team needs to manually test the form for bugs and UX issues. We then need to document findings in a consistent, actionable ticket format as well as track which parts of the 526EZ have been audited. Auditng the 526 will help prioritize fixes and inform a clearer product and UX strategy for future enhancements. This How-To documentation will help ensure consistency in how we evaluate the UX of the form and support longitudinal understanding of what bugs and UX issues exist and where.

## 📚 Helpful Resources
### Get familiar with the 526EZ Form
- [526 Active Form Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792): This is the most up-to-date documentation of the form in production. It provides screenshots of all of the main form Steps and pathways or ancillary forms. You can use this to understand the form as a whole.
- [526 Product Guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Disability%20Benefits%20Experience/2%20-%20Delivery/Product%20Guide%20Drafts/526EZ.Disability.Benefits.Claims.Product.Guide.v4.7_SRT.04072025.docx?d=wf9b54a1c03e14c14a4cee86463e34e40&csf=1&web=1&e=bRrO5C): This proivdes a walkthrough of the form with explanations of what is happening as the user goes through each page.
- _[Do we have a link to all of the business requirements or feature requirements for each section/feature of the form? May be helpful to reference.]_

### Audit Trackers 
- _526 Active Form Audit Map_: It provides screenshots of all of the main form Steps and pathways or ancillary forms. Use this to track testing logistics (e.g., which path has been tested, who tested, when, what browser was used.) Provides a visual of how much of the form has been tested and how much is left to go.
- [Audit Tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Audit%20Tracker.md): Used to document who conducted a bug or UX audit on a specific section of the 526EZ form, when it was tested, how it was tested, and whether any issues or tickets were identified.

 ## 🗺️ Overview of Steps
1. Access staging 
2. Determine if you will be conducting a bug or UX issue audit
3. Determine which form Step(s) and conditional pathways you will be auditing
4. Check for in-progress work and known issues
5. Review the bug audit or UX issue checklist
6. Conduct your audit<br>
7. Fill out the _Audit Tracker_ and update the _526 Active Form Audit Map_.
8. Create tickets for the issues you found using the **Bug Ticket Template** or the **UX Issue Template**

## 🔐 1. Access staging
In order to test, testers need to access the form in Staging.
1. Access the Staging Environment [here](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
2. Click "Sign in to start your application"
3. Click the green "ID.me" button
4. Login using a username and password from [this list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) of staging users. You may encounter errors with some users. Recommended users include 230, 234, 235.
5.  On the "Recieve a code by phone" screen, just click "Continue"
6.  On the "Enther the 6 digit code" click "Continue" again. (The code should have automatically populated).

## 🧭 2. Will you conduct a bug or UX issue audit?
Use the following table to understand the difference between bugs and UX issues. Next, determine whether you will be conducting a bug audit or a UX issue audit. While a combined audit can surface both, it is more effective for our tracking and for your mindset to decide beforehand which type of issues you are going to focusing on as the tester. Checking for bugs requires the tester to verify whether the system functions as intended, whereas checking for UX issues requires assessing how easily a user can understand, navigate, and complete their tasks.
    
| **Aspect**      | **Bug**                                                         | **UX Issue**                                                                 |
|------------------|------------------------------------------------------------------|------------------------------------------------------------------------------|
| **What it is**   | A technical error where something doesn’t function as intended   | A usability or design problem that makes a task harder, slower, or confusing |
| **System status**| System is broken or fails to behave as expected                  | System works but creates friction or confusion                               |
| **Resolution**   | Solved through code fixes or engineering changes                 | Solved through UX, content, or design improvements                          |
                        
## 🧩 3. Which form steps and conditional pathways will you be auditing? 
[add instructions as a requirement to click all the conditionals. set expectation that they are only doing a couple of section at a time. go through one step with every variable possible. have detailed documentation of the exact section you are. ]
| **Form Section**      | **Subprocesses** | **Conditional Reponses** |
|------------------------|----------------------|--------------------------|
| **Intro, Intent to File** |None                 |
| **Step 1: Veteran Details** |☐ Homeless Process <br>☐ Military Service History Process | 
| **Step 2: Conditions**      |☐ Toxic Exposure                | ☐ Prisoner of War <br> ☐ Additional Disability Benefits |             
| **Step 3: Mental Health**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 4: Supporting Evidence**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 5: Additional Information**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 6: Review and Submit**  |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |

## 📣 4. Check for in-progress work and known issues
Multiple teams are involved in designing and developing the 526 form, and there may be in-progress updates to the section you plan to audit. These updates might address bugs or UX issues you would otherwise identify. To avoid duplicating work, first check for existing efforts by reaching out to the appropriate Slack channels or team members. Let them know you're auditing [X section] and ask if there are any in-progress changes, known issues, or prior findings you should review. 
- ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810): Check subtasks for previously logged bugs or UX issues.
- #benefits-disability: Full 526 team and OCTO enabling partners
- #benefits-disability-conditions: Conditions team - for audits related to “Step 2: Conditions."
- #platform-design-system: Platform design system team - for post-audit follow-up if issues are related to design patterns or components.

## 📋 5. Review the bug audit or UX issue audit checklist
- 🐞 [Bug Audit Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Bug%20Audit%20Checklist.md)
- 🤝 [UX Issue Audit Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/UX%20Issue%20Checklist.md)

## 🔍 6. Conduct your audit

## 🗂️ 7. [WIP] Sign up sheet / Tracker
| **Form Section**       | **Bug or UX Issue Audit** | **Subprocesses** | **Browser** | 
|------------------------|-----------------|-----------------|----------|
| **Intro, Intent to File** |None                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 1: Veteran Details** |☐ Bug Audit <br>☐ UX Issue Audit|☐ Homeless Process <br>☐ Military Service History Process | ☐ Chrome<br>☐ Firefox <br>☐ Safari <br>☐ Other |
| **Step 2: Conditions**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 3: Mental Health**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 4: Supporting Evidence**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 5: Additional Information**             |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |
| **Step 6: Review and Submit**  |                 |                 |          | ☐          | ☐           | ☐          | ☐        |                 |

Notes
Add browser version and type of computer
