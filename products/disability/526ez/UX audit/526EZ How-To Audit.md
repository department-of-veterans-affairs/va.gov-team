# 🔧 526EZ How-To Audit  

## Jump to
* 🎯 [Purpose](#Purpose)

* 📝 [Context](#Context)
  
* 🏁 [Getting Started](#Getting-Started)

* 📚 [Helpful Resources](#Helpful-Resources)

* 🗺️ [How to Conduct an Audit of the 526EZ](#How-to-Conduct-an-Audit-of-the-526EZ)

* 🎟️ [PM and PO Post Audit Tasks](#PM-and-PO-Post-Audit-Tasks)


## Purpose
🎯 **This document is a guide to support HCD and Engineering team members in:** 
- Conducting bug-focused manual audits of the 526EZ form
- Conducting UX-focused manual audits of the 526EZ form
- Documenting findings on the Audit Tracker Spreadsheet
- Tracking which parts of the 526EZ have already been audited

**This document also supports PMs and POs in:**
- Determining how bug / UX issues may be related to in-progress or upcoming Super Epics.
- Translating bug / UX issues that are documented on the Audit Tracker Spreadsheet into GitHub tickets.

## Context
📝 The 526EZ form is long with multiple pathways and conditional responses. In order to continually improve our product, our team needs to manually test for bugs and UX issues.

We document each audit by capturing:
- Environment (device, OS, browser)
- Bug or UX findings
- Form step(s) and pathways tested

Auditing helps:
- Prioritize fixes
- Inform product and UX strategy
- Build a record of known issues over time

This How-To document ensures we evaluate the form consistently and track issues clearly.

## Getting Started
### For New or Onboarding Team Members
👋 If you are a team member who has recently joined the team and is in the onboarding process, auditing the 526EZ form is a great way to build context around the product we work on. 

#### Your objectives in auditing the 526EZ are:
- Getting a gist of the form by conducting a UX audit on the whole form.
- Staying on the "Main Path" (aka the path where generally, you will select "No" when the form asks questions so that you do not go down deep conditional pathways.)
- Documenting any UX flaws or bugs you might happen to find.

#### You are are not expected to:
- Conduct a thorough bug audit (e.g., trying to "break" every text field or component you come across).
- Select multiple conditional pathways and track which pathways you are going down.

**Note:**
- Some sections are already being redesigned or developed.
- These changes are not yet reflected in staging.
- You may find issues in those areas that will soon be updated.
- Still audit the full form! Your findings help build familiarity and may reinforce why sections or flows need change.

### For Experienced Team Members
🦉 If you are a team member who has already interacted with the form in staging or is generally familiar with the different Steps within the form (e.g., "Step 2. Conditions," "Step 3. Mental Health" etc.) you'll be expected to conduct a thorough audit of one part of the form.

#### Your objectives in auditing the 526EZ are:
- Conducting a thorough bug or UX audit of a specific step / pathways of the form.
- Making sure you're covering multiple pathways within a step or section.
- Thoroughly documenting bugs or UX issues.

**Steps with changes currently in design or development are listed below. Please hold off on doing bug and UX audits of these sections:**
- Skip most of `Step 2: Conditions` (Epic [#785](https://github.com/department-of-veterans-affairs/vagov-claim-classification/issues/785)) but you can audit starting at the POW pathway.

## Helpful Resources
### For New Team Members - Get familiar with the 526EZ Form
📚👋🦉 The following resources can support team members in building context on the scope of the 526EZ form and see relationships between sections and screens.
- [526 Active Form Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792): This is the most up-to-date documentation of the form in production. It provides screenshots of all of the main form steps, conditional pathways, and ancillary forms. You can use this to understand the form as a whole.
- [526 Product Guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/Disability%20Benefits%20Experience/2%20-%20Delivery/Product%20Guide%20Drafts/526EZ.Disability.Benefits.Claims.Product.Guide.v4.7_SRT.04072025.docx?d=wf9b54a1c03e14c14a4cee86463e34e40&csf=1&web=1&e=bRrO5C): This provides a walkthrough of the form with explanations of what is happening as the user goes through each page.

### For PMs and POs - Product Prioritization Map 
📚📊 The following resource can support experienced team members and PMs in understanding which parts of the form are currently "under construction," will be under construction in the future, and which team is responsible for doing the work. PMs and POs can reference this in order to attach bugs / UX findings under the appropriate Super Epic. 
- [526EZ Product Prioritization Mural](https://app.mural.co/t/nava4113/m/nava4113/1748904136573/6cc118924290977700e9a4ecd1e7a1b0e7c2e6c9) 

### For Everyone - Audit Tracker 
- [526 Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816): Used to document who conducted a bug or UX audit on a specific section of the 526EZ form, when it was tested, how it was tested, and what issues were identified.

### Tester Considerations
- Staging may have a lag / different performance than the production environment.

## How to Conduct an Audit of the 526EZ
### 🗺️ Overview of Steps
1. Determine if you will be conducting a bug or UX issue audit
2. Reference the Bug Audit Checklist and the UX Issue Checklist
3. Familiarize yourself with the Form Steps
4. Familiarize yourself with the Audit Tracker and select your steps/pathways
5. Access staging
6. Conduct your audit and document findings on the Audit Tracker
7. Discuss findings with other auditors, PMs, POs

### 🧭 1. Will you conduct a bug or UX issue audit?
Use the table below to understand the difference between bugs and UX issues. Choose one type of audit (bug or UX issue) before you begin — it helps with tracking and keeps you focused.
- Bug audit: Check if the system works as intended.
- UX issue audit: Check how easily a user can understand, navigate, and complete tasks.

If you are conducting a bug audit, we recommend limiting your audit to one section per sprint to prevent burnout since you'll have to interact with each component in multiple ways. 

| **Aspect**      | **Bug**                                                                 | **UX Issue**                                                                 |
|------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **What it is**   | A technical error where something doesn’t function as intended.         | A design, usability, or experience problem that makes tasks harder, slower, or confusing, even if the system technically “works.” |
| **System status**| System is broken or fails to behave as expected.                        | System works, but the experience feels clunky, unclear, or inefficient.      |
| **Examples**     | - Submit button doesn’t work <br> - Uploaded file fails to attach <br> - Page crashes on load | - Error message is vague (“Something went wrong”) <br> - Too many repetitive steps <br> - Page loads very slowly <br> - Navigation labels are unclear |
| **Resolution**   | Fixed through code or configuration changes.                           | Improved through design, content, or interaction adjustments.                |

👉 **Note:** We’re looking for *any type of issue* that impacts the user experience, and regardless of whether your intention was a bug or UX audit, you may find both. If something feels broken, clunky, slow, inconsistent, or unclear, log it — whether it’s a bug or a UX issue.

### 🔍 2. Reference the Bug Audit Checklist or the UX Issue Checklist
Prior to conducting your audit, reference the following checklists. These will help you be thorough in your considerations.
- 🐞 [Bug Audit Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/Bug%20Audit%20Checklist.md)
- 🤝 [UX Issue Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/UX%20audit/UX%20Issue%20Checklist.md)

### 📋 3. Familiarize yourself with the Form Steps
The following is a high-level overview of the 526 form steps and the conditional pathways included in each step. Each step has a "Main Path" which the user will go down if they select "No" to most conditional questions. 

#### Form Steps Overview
The following table provides a high-level overview of all steps, sections, and pathways.
| **Form Section / Step**      | **Pathways** | **Notes** |
|------------------------|-------------------------------|------------------|
| **Landing Page and Wizard** |☐ Main Path <br> ☐ Benefits Delivery at Discharge Claim (BDD) Process <br>                          ☐ Claim for Increase (CFI)    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      | BDD pathway has a different supporting evidence flow. CFI has three conditional responses that will take you down three different pathways.         |
| **Intro, Intent to File** |☐ Main Path                 |         |
| **Step 1: Veteran Details** |☐ Main Path <br> ☐ Homeless Process <br>☐ Military Service History Process | 
| **Step 2: Conditions**      |~☐ Main Path~ <br> ~☐ Toxic Exposure~ <br> ☐ Prisoner of War <br> ☐ Additional Disability Benefits <br> ~☐ Individual Unemployability~ | The Conditions section is currently being redesigned and developed. If you are a new team member, you will still need to interact with this section of the form. Feel free to record any general questions or findings. If you are an experienced team member, do not conduct a bug or UX audit on the crossed out parts of this section. The Individual Unemployability pathway is only present in staging and not active in production. Do not audit it.  |             
| **Step 3: Mental Health**             | ☐ Main Path <br> ☐ Mental Health (Answer questions online) <br> ☐ Mental Health (Answer questions on PDF)              |                 |          |
| **Step 4: Supporting Evidence**             | ☐ Main Path <br> ☐ Supporting Evidence Upload (VA Medical Records)<br> ☐ Supporting Evidence - 4142 Release of Private Medical Records <br> ☐ Supporting Evidence - Upload my Private Medical Records &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br> ☐ BDD Process continues here <br> ☐ BDD Process - 4142 Release of Private Medical Records <br>         |                 |          | 
| **Step 5: Additional Information**             | ☐ Main Path <br>  ☐ VA Employee - Yes to Fully Developed Claim Program <br>  ☐ VA Employee - No to Fully Developed Claim Program <br>           |                 |          | 
| **Step 6: Review and Submit**  | ☐ Main Path <br>  ☐ Review Veteran Details <br>   ☐ Review Conditions <br> ☐ Review Mental Health <br> ☐ Review Supporting Evidence <br> ☐ Review Additional Information <br>                                                                                                                                     |                 |          | 

### 🗂️ 4. Familiarize yourself with the Audit Tracker and select your steps/pathways
The Audit Tracker will allow us to track which parts of the form, devices, and environments have been tested. 
- [Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816)
- Use [Tab A. Form Steps Overview](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?pli=1&gid=0#gid=0) to determine which steps and pathways of the form still need auditing and to "Sign up" for your sections. (This list is the same as the list in "Form Steps Overview" shown above.)

### 🔐 5. Access staging
In order to test, testers need to access the form in Staging.
1. Access the [Staging Environment](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
2. Click "Sign in to start your application"
3. Click the green "ID.me" button
4. Login using a username from the recommended list below and password from [the staging users list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv). If you do not have access to this list, ask a team member for the password to your user's account.
5. If you are auditing the form during the same sprint as other team members, make sure to select different staging users so that you are not overriding each other's progress as you fill out the form.
6.  On the "Receive a code by phone" screen, just click "Continue"
7. On the "Enter the 6-digit code" click "Continue" again. (The code should have automatically populated).

| UserID                        | Name | Use to Audit                                 | User Details      | Combined Disability Rating         | 
| ----------------------------- |------- |-------------------------------------------- | ----------------- | ---------------------------------- | 
| vets.gov.user+61@gmail.com    | Harry Y Burke |All pathways including "Claim for Increase"      | - 30% rating for headaches      | Combined disability rating is 30%       | 
| vets.gov.user+62@gmail.com    | Bonnie Null Hayes |All pathways including "Claim for Increase"      | - 40% rating for ankle condition, bilateral <br> - 50% rating for broken neck <br> 30% rating for broken back <br> - 30% rating for ptsd      | Combined disability rating is 90%       | 
| vets.gov.user+220@gmail.com    |Kent L Warren |All pathways including "Claim for Increase"     | - 100% rating for ptsd <br> - 30% rating for headaches <br>    | Combined disability rating is 100%      | 
| vets.gov.user+226@gmail.com    | Johnnie Leonard Weaver |"Claim for Increase" and subsequent pathways |- 30% rating for headaches, migraine <br> - 50% rating for PTSD <br> - Conditions VA determined aren’t service-connected: right knee | Combined disability rating is 70%  | 
| vets.gov.user+228@gmail.com    | Mark Tux Polarbear Jr. |All pathways including "Claim for Increase"   | - 0% rating for Sarcoma Soft-Tissue <br> - 10% rating for Allergies due to Hearing Loss <br> - 100% rating for Hearing Loss <br> - Conditions VA determined aren’t service-connected: tinnitus, diabetes  | Combined disability rating is 100%    | 
| vets.gov.user+230@gmail.com    | Wallace R. Webb | All pathways including "Claim for Increase"  | - 40% rating for hearing loss <br> - 30% rating for Paper Cut <br> - 30% rating for HL   | Combined disability rating is 70% | 
| vets.gov.user+234@gmail.com    |Philip Daniel West |All pathways including "Claim for Increase"      | - 30% rating for Peripheral vestibular disorder <br> - 60% rating for allergies (related to: SHAD (Project Shipboard Hazard and Defense)) <br> - 20% rating for Hearing Loss <br> - Conditions VA determined aren't service-connected: 10% rating for sinusitis | Combined disability rating is 70%  | 
| vets.gov.user+235@gmail.com    | Philip Daniel West |All pathways including "Claim for Increase"      | - 30% rating for Peripheral vestibular disorder <br> - 60% rating for allergies (related to: SHAD (Project Shipboard Hazard and Defense)) <br> - 20% rating for Hearing Loss <br> - Conditions VA determined aren't service-connected: 10% rating for sinusitis | Combined disability rating is 70%  | 

  
### ✏️ 6. Conduct your audit and document your findings in the Audit Tracker
The Audit Tracker will allow us to track which parts of the form, devices, and environments have been tested. 
- On the [Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816), write descriptions of your findings and provide screenshots on the tab that corresponds to the step you chose to audit.
- In order to prevent ticket duplicates, you will not create tickets for your findings. PMs and POs will refine the spreadsheet and transition findings into tickets.
- Note that you may find UX issues that are **global** (impacting the form throughout), **interrelated** (one issue or potential solution may impact another issue or potential solution), or that you have **questions** ("What is the intention or tradeoff behind this feature/flow?"). If this is the case, log these on the last tab of the Audit Tracker Spreadsheet titled: [Broader / Interrelated Issues](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=1375951836#gid=1375951836). 

### 💬 7. Discuss findings with other auditors, PMs, POs
Towards the end of each sprint, we'll discuss findings across the group so that we can surface broader or interrelated UX issues and bugs. 

---
## PM and PO Post Audit Tasks
1. Review the [Audit Tracker Spreadsheet](https://docs.google.com/spreadsheets/d/1Y_JOzPltc_3Rb4OhdGTTCHPArLJpk12RpgkoJ2vxcMc/edit?gid=901203816#gid=901203816) for new findings. There are columns within the spreadsheet for PMs to indicate if a finding's status is a:
  - `New Issue` where a new ticket can be created
  - `Duplicate` where a previously created ticket can be updated
  - `Already Addressed` where the finding is no longer an issue or will be addressed in broader changess happening to the form.
2. In order to select the appropriate status, review previously created tickets under the ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810) to determine if you should create a new ticket or update an already existing one. 
3. Check for in-progress work, or upcoming Super Epics on the [526EZ Product Prioritization Mural](https://app.mural.co/t/nava4113/m/nava4113/1748904136573/6cc118924290977700e9a4ecd1e7a1b0e7c2e6c9) to determine if new tickets should live under those Super Epics or if tickets might be dupes.
4. Use the following proposed ticket templates to write new tickets (adopting and following these template examples will provide consistency accross tickets).   
  - **[Bug Ticket Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116511)** 
  - **[UX Issue Ticket Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/116513)** 
5. PMs can link new tickets as a Sub Issues under the ["Bug Bash Super Epic"](https://github.com/department-of-veterans-affairs/va.gov-team/issues/110810), under an appropriate Super Epic, and should assign the ticket to the appropriate team (Core Form, Pathways, Conditions, EE, or Team 5).

  

