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
- _526 Active Form Audit Map_: Provides screenshots of all of the main form Steps and pathways or ancillary forms. Use this to track how much of the form has been tested and how much is left to go.
- [Audit Tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Audit%20Tracker.md): Used to document who conducted a bug or UX audit on a specific section of the 526EZ form, when it was tested, how it was tested, and whether any issues or tickets were identified.

 ## 🗺️ Overview of Steps
1. Access staging 
2. Determine if you will be conducting a bug or UX issue audit
3. Determine which form Step(s) and conditional pathways you will be auditing
4. Check for in-progress work and known issues
5. Review the Bug Audit Checklist or the UX Issue Checklist
6. Conduct your audit
7. Create or update tickets for the issues you found using the **Bug Ticket Template** or the **UX Issue Template**
8. Fill out the _Audit Tracker_ and update the _526 Active Form Audit Map_.

## 🔐 1. Access staging
In order to test, testers need to access the form in Staging.
1. Access the [Staging Environment](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
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
Keep in mind that you must actually enter answers into the form in order to move to the next section. For a bug audit, you will have to interact with each conditional variable within that form step. This takes time to conduct thoroughly. In order to prevent burnout, we recommend conducting an audit on one section per person per sprint. In order to determine where auditing is needed, reference the _526 Active Form Audit Map_ and the _Audit Tracker_.

The following table provides a high level overview of all steps, sections, and pathways.
| **Form Section / Step**      | **Pathways** | **Notes** |
|------------------------|----------------------|--------------------------|
| **Landing Page and Wizard** |☐ Benefits Delivery at Discharge Claim (BDD) Process <br> ☐ Claim for Increase (CFI)                 | BDD pathway has a different supporting evidence flow. CFI has three conditional responses that will take you down three different pathways.         |
| **Intro, Intent to File** |N/A                 |         |
| **Step 1: Veteran Details** |☐ Homeless Process <br>☐ Military Service History Process | 
| **Step 2: Conditions**      |☐ Toxic Exposure <br> ☐ Prisoner of War <br> ☐ Additional Disability Benefits <br> ☐ Individual Unemployability | Individual Unemployability pathway is only present in staging and not active in production. Do not audit.  |             
| **Step 3: Mental Health**             | N/A                |                 |          |
| **Step 4: Supporting Evidence**             | ☐ BDD Process continues here                 |                 |          | 
| **Step 5: Additional Information**             |      N/A           |                 |          | 
| **Step 6: Review and Submit**  | N/A                |                 |          | 
## 📣 4. Check for in-progress work and known issues
Multiple teams are involved in designing and developing the 526 form, and there may be in-progress updates to the section you plan to audit. These updates might address bugs or UX issues you would otherwise identify. To avoid duplicating work, first check for existing efforts by reaching out to the appropriate Slack channels or team members. Let them know you're auditing [X section] and ask if there are any in-progress changes, known issues, or prior findings you should review. 
- ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810): Check subtasks for previously logged bugs or UX issues.
- **#benefits-disability**: Full 526 team and OCTO enabling partners
- **#benefits-disability-conditions**: Conditions team - for audits related to “Step 2: Conditions."
- **#platform-design-system**: Platform design system team - for post-audit follow-up if issues are related to design patterns or components.

## 📋 5. Review the Bug Audit Checklist or the UX Issue Checklist
- 🐞 [Bug Audit Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Bug%20Audit%20Checklist.md)
- 🤝 [UX Issue Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/UX%20Issue%20Checklist.md)

## 🔍 6. Conduct your audit

## 🎟️ 7. Create or Update Tickets 

## 🗂️ 7. Fill out the Audit Tracker
- [Audit Tracker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Audit%20Tracker.md)
- If there is already a bug about the issue, the ticket is updated
Enhancements and ideas are captured in github tickets under the appropriate superepic, with screenshots, videos, etc
