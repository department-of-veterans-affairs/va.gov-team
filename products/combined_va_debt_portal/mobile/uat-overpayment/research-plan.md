---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

	# Research Plan for Mobile Feature Support, Debt Portal: Overpayments in mobile app UAT, January 2026

## Background 🏗️

_This is a User Acceptance Test (UAT) as a follow-up from the Usability Test of [Overpayments and Copayments on mobile app](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/research-plan.md?plain=1)._
_Overpayments will be the first section to be released in the mobile app. Copays will be released at a later date._

Veterans can experience debt from the VA. The two types of debt that the Financial Management Team has focused on include: 

* Overpayments   
* Copayments (also referred to as copays)

Benefit overpayment debt can occur when a Veteran receives more compensation than they are entitled to, and it is handled by the Veterans Benefits Administration (VBA). Examples of overpayments include a dependent change from a divorce, or even when a Veteran receives education benefits for a class but then drops the class and does not report that. In these instances, the Veteran will owe money to the VA for such actions. 

Copayments are part of an individual's health insurance and are the amount of money owed for a specific healthcare service or prescription; the remainder of the cost is covered by insurance. Veterans with medical copayment debt from the VA have received care at a VA health facility. The Veterans Health Administration (VHA) manages medical copayments.  

Veterans can view their overpayment and copayment debts through the authenticated experience on VA.gov. After logging on, they can access their debt portal through the My VA tab. If overpayment or copayment debt exists, Veterans can take the following actions: 

* View the debt  
* Make a payment and resolve the debt online  
* Dispute charges   
* Request assistance from the VA for financial hardship (by completing the Financial Status Report, VA Form 5655\)  
* View resources about VA debt management

`What problem is your product trying to solve?`

The mobile app does not have any debt-related information for Veterans to access. How might we provide Veterans with the ability to view the total amount owed for benefit overpayment debts, as well as the details related to that debt on the mobile app?  
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Authenticated section of VA Mobile App, to be added to the existing "Payments" tab.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Veterans currently manage their debt on VA.gov; this will be a new addition to the mobile app.

`Product Brief`
[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey?
Are there moments that matter?
	
- `Starting Up (Moment: Balancing Finances)`
- `Taking Care of Myself (Moment: Maintaining my health)`
- `Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)`
- `Retiring (Moment: Taking care of my health)`
- `Aging (Moment that Matters: Managing my declining health)`


## Research Goals 🥅	

The purpose of this User Acceptance Testing (UAT) study is to verify that all elements of the Overpayments functionality operate as intended for end users with real data. Unlike usability testing, UAT focuses on confirming that features work as expected, rather than on users’ ability to find or discover them.

Specifically, this study will validate that end users can successfully view, manage, and resolve overpayments using the app, meeting all criteria outlined in the defined user paths.

  
### Outcome

Findings from this research will confirm whether the Overpayments functionality is fully ready for production release. If all success criteria are met, we will proceed with launch and communicate readiness to stakeholders. If any issues are identified, we will prioritize and resolve them before deployment. 


### Test paths and success criteria

| Category                  | Activity                                      | Screen                      | Success                                                                                                                                                                                                                  |
|---------------------------|-----------------------------------------------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Elements on home          | See the number of overpayments on home screen | Home                        | Activity card "Overpayments" shows "n overpayments" where "n" is the quantity of current overpayment debts                                                                       |
| Elements on Payments      | Locate all payment information                | Payments tab                | • "Overpayments" card lists total amount due and total quantity of debts<br>• "Overpayments" card opens overpayment list view                                                    |
| Elements on list view     | Review overall info of all overpayments       | Overpay list                | Each debt card shows:<br>• name of debt<br>• current balance<br>• message                                                                                                         |
| Elements on list view     | Help menu from list screen                    | Overpay list                | • Help menu opens via modal<br>• Help menu displays instructions for calling Debt Management Center<br>• Help menu is closed via "close" CTA                                      |
| Elements on detail view   | Review details of overpayment detail          | Overpay detail              | • Date updated appears at top                                                                                                                                                     |
| Elements on detail view   | Review details of overpayment detail          | Overpay detail              | • Alert message shows due date where applicable<br>• Alert message expands with additional information<br>• Alert message collapses                                                |
| Elements on detail view   | Review details of overpayment detail          | Overpay detail              | • "Why might I have this overpayment balances" opens in a modal<br>• message matches the type of debt<br>• message closes via "close" CTA                                         |
| Elements on detail view   | Review details of overpayment detail          | Overpay detail              | Debt info card shows:<br>• name of debt<br>• current balance<br>• original amount<br>• payment due date                                                                           |
| Elements on detail view   | Review overpayment letter history             | Overpay detail              | • accordion expands<br>• correct dates are listed<br>• accordion collapses                                                                                                        |
| Elements on detail view   | Review notice of rights and responsibilities  | Overpay detail              | • accordion expands<br>• correct dates are listed<br>• accordion collapses                                                                                                        |
| Resolve from list view    | Resolve overpayment menu from list screen     | Overpay list                | Four menu options:<br>• Make a payment<br>• Request help<br>• Dispute overpayment<br>• Cancel<br>"Cancel" closes menu                                                            |
| Resolve from list view    | Resolve overpayment: pay                      | Overpay list                | • "Make a payment" from "Resolve overpayment" opens "Pay online" screen                                                                                                           |
| Resolve from list view    | Resolve overpayment: pay                      | Pay online                  | Details are correct for debt:<br>• Current balance<br>• Receivable ID (education) File number (all other debts)<br>• Payee number<br>• Person entitled<br>• Deduction code<br>"What these terms mean" opens in modal and closes<br>External link for "pay on pay.va.gov" opens payment site |
| Resolve from list view    | Resolve overpayment: pay                      | Pay online / pay.va.gov     | Switching between app and browser keeps location for both<br>Copy/paste works for each detail                                                                                     |
| Resolve from list view    | Resolve overpayment: request help             | Overpay list                | • "Request help" from "Resolve overpayment" opens "Request help" screen                                                                                                           |
| Resolve from list view    | Resolve overpayment: request help             | Request help                | • "Questions about overpayments" accordion opens and closes<br>• "How to get financial help" accordion opens and closes                                                           |
| Resolve from list view    | Resolve overpayment: request help             | Request help                | • "Request help with this overpayment" inside "How to get financial help" opens "Request help with VA debt for overpayments and copay bills" page in webview<br>• "Start your request now" opens Financial Status Report and personal details are already filled in<br>• "Done" returns to "Request help" screen in app        |
| Resolve from list view    | Resolve overpayment: dispute overpayment      | Overpay list                | • "Dispute overpayment" from "Resolve overpayment" opens "Dispute overpayment" screen                                                                                            |
| Resolve from list view    | Resolve overpayment: dispute overpayment      | Dispute overpayment         | • "Start an overpayment dispute" opens "Dispute your VA debt" in website<br>• "Start your dispute" opens dispute form and personal details are already filled in<br>• "Done" returns to "Dispute overpayment" screen in app           |
| Resolve from detail view  | Resolve overpayment menu from detail screen   | Overpay detail              | Four menu options:<br>• Make a payment<br>• Request help<br>• Dispute overpayment<br>• Cancel<br>"Cancel" closes menu                                                            |
| Resolve from detail view  | Resolve overpayment: pay                      | Overpay detail              | • "Make a payment" from "Resolve overpayment" opens "Pay online" screen                                                                                                           |
| Resolve from detail view  | Resolve overpayment: pay                      | Pay online                  | Details are correct for debt:<br>• Current balance<br>• Receivable ID (education) File number (all other debts)<br>• Payee number<br>• Person entitled<br>• Deduction code<br>"What these terms mean" opens in modal and closes<br>External link for "pay on pay.va.gov" opens payment site |
| Resolve from detail view  | Resolve overpayment: pay                      | Pay online / pay.va.gov     | Switching between app and browser keeps location for both<br>Copy/paste works for each detail                                                                                     |
| Resolve from detail view  | Resolve overpayment: request help             | Overpay detail              | • "Request help" from "Resolve overpayment" opens "Request help" screen                                                                                                           |
| Resolve from detail view  | Resolve overpayment: request help             | Request help                | • "Questions about overpayments" accordion opens and closes<br>• "How to get financial help" accordion opens and closes                                                           |
| Resolve from detail view  | Resolve overpayment: request help             | Request help                | • "Request help with this overpayment" inside "How to get financial help" opens "Request help with VA debt for overpayments and copay bills" page in webview<br>• "Start your request now" opens Financial Status Report and personal details are already filled in<br>• "Done" returns to "Request help" screen in app        |
| Resolve from detail view  | Resolve overpayment: dispute overpayment      | Overpay detail              | • "Dispute overpayment" from "Resolve overpayment" opens "Dispute overpayment" screen                                                                                            |
| Resolve from detail view  | Resolve overpayment: dispute overpayment      | Dispute overpayment         | • "Start an overpayment dispute" opens "Dispute your VA debt" in website<br>• "Start your dispute" opens dispute form and personal details are already filled in<br>• "Done" returns to "Dispute overpayment" screen in app           |
| Breadcrumbs               | Check breadcrumbs                             | Overpayments list           | Breadcrumb returns to Payments                                                                                                                                                    |
| Breadcrumbs               | Check breadcrumbs                             | Overpayments Detail         | Breadcrumb returns to Overpayments                                                                                                                                                |
| Breadcrumbs               | Check breadcrumbs                             | Make a payment from Details | Breadcrumb returns to Details                                                                                                                                                     |
| Breadcrumbs               | Check breadcrumbs                             | Make a payment from List    | Breadcrumb returns to List                                                                                                                                                        |
| Breadcrumbs               | Check breadcrumbs                             | Request help from Details   | Breadcrumb returns to Details                                                                                                                                                     |
| Breadcrumbs               | Check breadcrumbs                             | Request help from List      | Breadcrumb returns to List                                                                                                                                                        |
| Breadcrumbs               | Check breadcrumbs                             | Dispute overpayment from Details | Breadcrumb returns to Details                                                                                                                                                |
| Breadcrumbs               | Check breadcrumbs                             | Dispute overpayment from List | Breadcrumb returns to List                                                                                                                                                    |
| Breadcrumbs               | Check breadcrumbs                             | Notice of rights and responsibilities | Breadcrumb returns to Details                                                                                                                              |

### Hypotheses

- Users will be able to view, manage, and resolve their overpayments using the Overpayment feature.
- Users will access overpayment information, complete key actions, and navigate between screens without issues.
- The Overpayments functionality will operate correctly and meet all success criteria during user acceptance testing.

  
## Methodology  🛠️

This study will use moderated remote User Acceptance Testing (UAT) sessions with Veterans. Participants will join a remote session where a facilitator guides them through realistic overpayment management scenarios using a pre-release version of the app, logged in with their own credentials.

This method is appropriate because the overpayments feature is in its final phase of development and must be validated with real user data to confirm everything functions as intended. Previous usability studies have already assessed how users find and navigate the app, so this study will focus exclusively on verifying that the overpayments feature performs as expected in real-world situations.


### Location

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/uat-overpayment/conversation-guide-template.md)
- [Spreadsheet with test user flows and success criteria](https://dvagov.sharepoint.com/:x:/r/sites/vamobilefeaturesupport/Shared%20Documents/2026-01%20UAT%20Overpayment/Test%20user%20flows%20and%20success%20criteria.xlsx?d=w76635d8ed3a44cbcaef6629c34d7012c&csf=1&web=1&e=ZnHVTP)

Pre-release app builds
- for iOS (TestFlight) 🚧
- for Android (Firebase) 🚧

Directions on using pre-release app build
- for iOS (TestFlight) 🚧
- for Android (Firebase) 🚧

	
## Recruitment 🎯	

### Recruitment approach

We would like Perigean to recruit Veterans with current overpayment debt who are willing to log into the mobile app with their real credentials.


### Recruitment criteria

> [!TIP]
> Once order of questions is finalized, change to a numbered list

Screener question 1
* Do you **currently** owe any of the following types of VA debt? If so, please select all that apply.
    * Post-9/11 GI Bill overpayment (books and supplies, housing, or tuition)
    * Disability compensation and pension overpayment
    * Education Ch 33-Ch1606/Ch30 Kickers
    * Chapter 34 education overpayment
    * Chapter 35 education overpayment
    * I do not currently owe any of the above types of VA debt. [DISQUALIFY]

Screener question 2
* When you sign in to VA.gov and go to your debt information, can you see details about an overpayment (for example: amount owed, type of debt, status, or payment options)?
    * Yes, I can see my overpayment debt details on VA.gov
    * No, I don’t see any overpayment debt details on VA.gov [DISQUALIFY]
    * I don’t have a VA.gov account / I can’t sign in right now [DISQUALIFY]

Screener question 3
* We’re conducting a study to test a new feature for viewing VA debt in the mobile app, using a preview version of the app. To participate, you’ll need to log in to the preview app using your real VA credentials so we can confirm everything is working correctly. Please confirm if you are comfortable with this:
    * I am willing to log in to the mobile app with my real credentials and share my screen during the session.
    * I am willing to log in to the mobile app with my real credentials, describe what I am seeing on screen, but NOT share my screen.
    * I am not comfortable logging in with my real credentials for this study. [DISQUALIFY]

Screener question 4
* Are you able to join the Zoom session from a smartphone? Any kind of smartphone will work as long as it connects to the internet.
    * Yes, I have an iPhone where I can join the session
    * Yes, I have an Android phone where I can join the session (for example: Samsung, Google, Motorola, or LG)
    * No [DISQUALIFY]

Screener question 5
* When interacting with apps on your smartphone, do you usually adjust the standard display or use accessibility features? Please select all that apply.
    * I mostly use the phone's standard display settings.
    * I often increase the text size significantly.
    * I use screen magnification or zoom features.
    * I use a screen reader (such as VoiceOver or TalkBack).
    * Other
    * Prefer not to say

Screener question 6
* **Question text:** Please review the technical requirements below. To participate in this study, you must confirm that you meet these specifications and are comfortable with the following steps:
    * VA Credentials: You have a username & password for ID.me or Login.gov and can access your two-factor authentication (text code or app).
    * Email Access: You can open your email directly on your mobile phone to click the test link.
    * Testing Tools: You are willing to download TestFlight (iOS) or Firebase App Distribution (Android).
    * Storage: You have at least 200MB of free space.
    * Phone operating system version:
        * iPhone: iOS 16 or newer.
        * Android: Android 12 or newer.
    * App Replacement: If you have the standard VA app, the test version will temporarily replace it. (If you don't have the app, it will simply install as a new one). We will help you restore the original version at the end.
    * Android Permissions: You are comfortable allowing your phone to "Install Unknown Apps" within your security settings for this session.
    * Connection: You will be connected to WiFi during our call for a stable download.
* **Answer text:**
    * Yes, I meet these requirements and am ready to follow these steps during the session.
    * No, I cannot meet these requirements at this time. [DISQUALIFY]

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **10**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **0**
- `Ideal completed sessions:` **3 on iOS, 3 on Android**

### Primary criteria (must-haves)

- `Currently have an overpayment debt`
- `5 on iOS phones` / `5 on Android phones`
- `Be willing to log in to their VA account with their own credentials`
    - Priority given to those who are willing to share their screens

#### Secondary criteria (nice-to-haves)

- `A variety of types of overpayment debt among participants`
- `Having multiple types of overpayment debt`

## Timeline 🗓️

### Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]** 🚧

### Prepare

- `Pilot participant name:` **[Enter name]** 🚧
- `Date and time of pilot session:` **[Enter time]** 🚧

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]** 🚧

### Length of sessions
- `Session length:` **1 hour**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **3**

### Availability 🚧
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 


> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Emily DeWan**	
- `Research guide writing and task development (usually but not always same as moderator):` **Emily DeWan**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Natalie Davied Gibbons**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **n/a**	
- `Note-takers:` **To be assigned from the team**
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

  - **Natasha Huckleberry**
  - **Natalie Davied Gibbons**
  - **Emily Goodrich**
  - **Parker Baranowski**
  - **Michelle Middaugh**
  - **Dave Formanek**
  - **Kim McCaskill**
  - **Matthew Guest**
  - **Michael Harmer**
  - **Kayley Bogemann**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
