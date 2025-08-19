# 🔧 526EZ How-To Audit  

## Contents


## 🎯 1. Purpose
**This document is a guide to support HCD and Engineering team members in:** 
- Conducting bug-focused manual audits of the 526EZ form
- Conducting UX-focused manual audits of the 526EZ form
- Documenting findings on the Audit Tracker Spreadsheet
- Tracking which parts of the 526EZ have already been audited

**This document also supports PMs and POs in:**
- Determining how bug / UX issues may be related to in-progress or upcoming Super Epics.
- Translating bug / UX issues that are documented on the Audit Tracker Spreadsheet into GitHub tickets.

#### Follow Up [TODO]
- _[TODO: [Spreadsheet example](https://docs.google.com/spreadsheets/d/1CstNDQMVic-IpJZEAr452UdLhUReAI3X/edit?gid=1348811676#gid=1348811676)]_
- _[TODO: Identify some users that have rated issues vs users that don't have rated issues.]_
- _[TODO: Figure out what is the source of truth for staging users, and identify users that could fall in different scenarios (rated issues) Reserve staging users for the DBC, provide emails of the staging users, but team 5 has to reach out to someone on the team for the password. Example user descriptions: https://dsva.slack.com/archives/C098Q0GRKSL/p1755183584714369?thread_ts=1755181784.007889&cid=C098Q0GRKSL]_ 

## 🧭 2. Context
The 526EZ is a long form with multiple pathways (e.g., ancillary forms) and nested, conditional responses. Our team needs to manually test the form for bugs and UX issues. We then need to document an auditor's environment (e.g., mobile, desktop, Safari, Chrome), an auditor's bug or UX findings, and track which 526EZ steps and pathways 526EZ have been audited. Auditing the 526 will help prioritize fixes and inform a clearer product and UX strategy for future enhancements. This How-To documentation will help ensure consistency in how we evaluate the UX of the form and support longitudinal understanding of what bugs and UX issues exist and where.

## 3. For New / Onboarding Team Members
If you are a team member who has recently joined the team and is in the onboarding process, auditing the 526EZ form is a great way to build context around the product we work on. 

### Your objectives in audting the 526EZ are:
- Getting a gist of the form by conducting a UX audit on the whole form.
- Staying on the "Main Path" (aka the path where generally, you will select "No" when the form asks questions so that you do not go down deep conditional pathways.)
- Documenting any UX flaws or bugs you might happen to find.

### You are are not expected to:
- Conduct a thorough bug audit (e.g., trying to "break" every text field or component you come across).
- Select multiple conditional pathways and track which pathways you are going down.

**Note:**
- Some sections are already being redesigned or developed.
- These changes are not yet reflected in staging.
- You may find issues in those areas that will soon be updated.
- Still audit the full form — your findings help build familiarity and may reinforce why sections or flows need change.

## For Experienced Team Members
If you are a team member who has already interacted with the form in staging or is generally familiar with the different Steps within the form (e.g., "Step 2. Conditions," "Step 3. Mental Health" etc.) please conduct a thorough bug or UX audit of a specific step / pathways of the form. The Audit Tracker listed in the next section will support you in selecting a step and pathway(s). 

Steps with changes currently in design or development are listed below. Please hold off on doing bug and UX audits of these sections:
- Step 2: Conditions (Epic [#785](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/785))

## 📚 4. Helpful Resources
### For New Team Members - Get familiar with the 526EZ Form
The following resources can support team members in building context on the scope of the 526EZ form and see relationships between sections and screens.
- [526 Active Form Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792): This is the most up-to-date documentation of the form in production. It provides screenshots of all of the main form steps, conditional pathways, and ancillary forms. You can use this to understand the form as a whole.
- [526 Product Guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Disability%20Benefits%20Experience/2%20-%20Delivery/Product%20Guide%20Drafts/526EZ.Disability.Benefits.Claims.Product.Guide.v4.7_SRT.04072025.docx?d=wf9b54a1c03e14c14a4cee86463e34e40&csf=1&web=1&e=bRrO5C): This provides a walkthrough of the form with explanations of what is happening as the user goes through each page.

### For PMs and POs - Product Prioritization Map 
The following resource can support experienced team members and PMs in understanding which parts of the form are currently "under construction," will be under construction in the future, and which team is responsible for doing the work. PMs and POs can reference this in order to attach bugs / UX findings under the appropriate Super Epic. 
- [526EZ Product Prioritization Mural](https://app.mural.co/t/nava4113/m/nava4113/1748904136573/6cc118924290977700e9a4ecd1e7a1b0e7c2e6c9) 

### For Everyone - Audit Tracker 
- [526 Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816): Used to document who conducted a bug or UX audit on a specific section of the 526EZ form, when it was tested, how it was tested, and what issues were identified.

### Tester Considerations
- Staging may have a lag / different performance than the production environment.

 ## 🗺️ 5. How to Conduct an Audit of the 526EZ
## Overview of Steps
1. Access staging 
2. Determine if you will be conducting a bug or UX issue audit
3. Reference the Bug Audit Checklist and the UX Issue Checklist
4. Familiarize yourself with the Audit Tracker
5. Determine which form Step(s) and conditional pathways you will be auditing
6. Conduct your audit and document findings on the Audit Tracker

## 🔐 Step 1. Access staging
In order to test, testers need to access the form in Staging.
1. Access the [Staging Environment](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
2. Click "Sign in to start your application"
3. Click the green "ID.me" button
4. Login using a username and password from [the staging users list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv). You may encounter errors with some users. Recommended users include 230, 234, 235. (If you are auditing the form during the same sprint as other team members, make sure to select different staging users so that you are not overriding each other's progress as you fill out the form.)
5.  On the "Receive a code by phone" screen, just click "Continue"
6. On the "Enter the 6-digit code" click "Continue" again. (The code should have automatically populated).

## 🧭 Step 2. Will you conduct a bug or UX issue audit?
Use the table below to understand the difference between bugs and UX issues. Choose one type of audit (bug or UX issue) before you begin — it helps with tracking and keeps you focused.
- Bug audit: Check if the system works as intended.
- UX issue audit: Check how easily a user can understand, navigate, and complete tasks.

If you are conducting a bug audit, we recommend limiting your audit to one section per sprint to prevent burnout since you'll have to interact with each component in multiple ways. 

| **Aspect**      | **Bug**                                                                 | **UX Issue**                                                                 |
|------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **What it is**   | A technical error where something doesn’t function as intended.         | A design, usability, or experience problem that makes tasks harder, slower, or confusing — even if the system technically “works.” |
| **System status**| System is broken or fails to behave as expected.                        | System works, but the experience feels clunky, unclear, or inefficient.      |
| **Examples**     | - Submit button doesn’t work <br> - Uploaded file fails to attach <br> - Page crashes on load | - Error message is vague (“Something went wrong”) <br> - Too many repetitive steps <br> - Page loads very slowly <br> - Navigation labels are unclear |
| **Resolution**   | Fixed through code or configuration changes.                           | Improved through design, content, or interaction adjustments.                |

👉 **Note:** We’re looking for *any type of issue* that impacts the user experience, and regardless of whether your intention was a bug or UX audit, you may find both. If something feels broken, clunky, slow, inconsistent, or unclear, log it — whether it’s a bug or a UX issue.

## 🔍 3. Reference the Bug Audit or the UX Issue Checklist
Prior to conducting your audit, reference the following checklists. These will help you be thorough in your considerations.
- 🐞 [Bug Audit Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Bug%20Audit%20Checklist.md)
- 🤝 [UX Issue Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/UX%20Issue%20Checklist.md)

## 4. Familiarize yourself with the Audit Tracker and Form Steps
The Audit Tracker will allow us to track which parts of the form, devices, and environments have been tested. 
- [Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816)
- Use [Tab A. Form Steps Overview](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?pli=1&gid=0#gid=0) to determine which steps and pathways of the form still need auditing and to "Sign up" for your sections. 

### Form Steps Overview
The following table provides a high-level overview of all steps, sections, and pathways.
| **Form Section / Step**      | **Pathways** | **Notes** |
|------------------------|----------------------|--------------------------|
| **Landing Page and Wizard** |☐ Benefits Delivery at Discharge Claim (BDD) Process <br> ☐ Claim for Increase (CFI)                 | BDD pathway has a different supporting evidence flow. CFI has three conditional responses that will take you down three different pathways.         |
| **Intro, Intent to File** |N/A                 |         |
| **Step 1: Veteran Details** |☐ Homeless Process <br>☐ Military Service History Process | 
| **Step 2: Conditions**      |☐ Toxic Exposure <br> ☐ Prisoner of War <br> ☐ Additional Disability Benefits <br> ☐ Individual Unemployability | Individual Unemployability pathway is only present in staging and not active in production. Do not audit.  |             
| **Step 3: Mental Health**             | N/A                |                 |          |
| **Step 4: Supporting Evidence**             | ☐ BDD Process continues here <br> ☐ 4142 Release of Private Medical Records                 |                 |          | 
| **Step 5: Additional Information**             |      N/A           |                 |          | 
| **Step 6: Review and Submit**  | N/A                |  ☐ "Edit" Pathway               |          | 
  







## 🗂️ 8. Fill out the Audit Tracker
The Audit Tracker will allow us to track which parts of the form, devices, and environments have been tested. 
- [Audit Tracker]([https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Audit%20Tracker.md](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816))
- _526 Active Form Audit Map_ [TODO: Link when complete.]

---
# Post Audit Information For PMs and POs

## Post Audit: Steps for PMs and POs 
1. ~Create or update bug / UX issue tickets~ Fill out spreadsheet with bug / UX issue findings.
2. ~Link bug / UX issue tickets to any related enhancement Super Epics~ PO/PMs will review spreadsheet for duplicate bugs and create tickets.

## Prioritized Backlog Super Epics
as of August 19, 2025

- Reduce the burden of navigating through the disability form 526 [#116289](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116289): This super epic covers the UX issue of users having to click `Back` and `Continue` multiple times to navigate to previous pages. It also covers the newly released `sidenav` component.
- Improve 526 start/ restart experience [#108100](https://github.com/orgs/department-of-veterans-affairs/projects/1660/views/34?pane=issue&itemId=107514433&issue=department-of-veterans-affairs%7Cva.gov-team%7C108100): Covers UX issues that include - form asking the user to go through the intro sequence again when restarting the form, lack of expectation setting on intro page, no preview of form making it hard for the user to prepare to fill it out.

## 📣 4. Check for in-progress work and known issues
Multiple teams are involved in designing and developing the 526 form, and there may be in-progress updates to the section you plan to audit. These updates might address bugs or UX issues you would otherwise identify. To avoid duplicating work, you first check for existing efforts by contacting the right Slack channels or team members. Let them know you're auditing [X section] and ask if there are any in-progress changes, known issues, or prior findings you should review. 
- ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810): Check subtasks for previously logged bugs or UX issues.
- **#benefits-disability**: Full 526 team and OCTO enabling partners
- **#benefits-disability-conditions**: Conditions team - for audits related to “Step 2: Conditions."
- **#platform-design-system**: Platform design system team - for post-audit follow-up if issues are related to design patterns or components.

~## 🎟️ 6. Create or update bug / UX issue tickets~ Fill out [Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816) 
~1. Review previously created tickets under the ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810) to determine if you should create a new ticket or update an already existing one. Use the following ticket templates to write your tickets.
- **Bug Ticket Template** _[TODO: Update once template is approved and created. In the meantime, reference [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116511) written with proposed template sections]_
- **UX Issue Ticket Template** _[TODO: Update once template is approved and created. In the meantime, reference [this ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116513) written with proposed template sections]_
2. Link your ticket as a Sub Issue under the ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810).~
_[TODO: How might we organize the bugs/sub issues under the Bug Bash Super Epic? Right now, there are many different bugs/issues/epics nested under here.]_


~## 📋 7. Link bug / UX issue tickets to any related enhancement Super Epics~
Super Epics may already exist that capture the broader work that needs to be completed to enhance a user flow. Review super epics to understand if your findings may be related to / help inform Super Epics in the backlog. If there is a relationship, comment on the Super Epic with your bug / UX issue ticket numbers.

*For example*, "Improve 526 start/ restart experience" #108100 epic captures that enhancements need to be made to this flow, but as of Aug. 11, 2025, specific tasks and bugs are not yet captured. If you conducted an audit on this flow and found specific issues, link the bug / UX issue tickets in the comments. 
_[TODO: Is the description of what we'd like testers to do to show relationships between found bugs/issues and the corresponding Enhancement Super Epic?]_

- Create ticket for defining triage process for ticks in backlog where we don't know who will own them or priority.
- _[TODO: Identify if there are existing tickets and create new ones other wise. This might be a two part process. Or a 2 person process. Someone has to facilitate the process]_
- _[TODO: Bug triage / Refinement as part of the process (consolidate duplicates]_
- [Mural](https://app.mural.co/t/nava4113/m/nava4113/1748904136573/6cc118924290977700e9a4ecd1e7a1b0e7c2e6c9) - check this mural. Eventually someone should assign the bug tickets to the appropriate team.
- _[TODO: Bulk list of issues on Table - make in shared DBC google drive, can be excel- with observations first so that a group of testers can go in and document stuff en-mass and then someone can refine and transition to official tickets]_
