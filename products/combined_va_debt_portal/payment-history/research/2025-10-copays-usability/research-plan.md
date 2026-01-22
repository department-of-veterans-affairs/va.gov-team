---
# Research Plan Metadata
title: "Research Plan for Financial Management Team, Copay Debt Portal Payment History, October - November 2025"
date: 2025-10-21
last_updated: 2025-10-21
team: "Financial Management Team"
product: "Copay Debt Portal Payment History"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans who visit the debt portal to understand and resolve their debts have been frustrated by the inability to view up-to-date payment history."
  product_location: "VA.gov Debt Portal - Payment History section"
  user_familiarity: "Iteration on existing product with new Lighthouse API integration for dynamic Copay (VHA) payment history data"
  product_brief_url: ""

# Research Design
methodology: "Moderated usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify any usability issues Veterans may experience when interacting with Copay payment history"
  - goal_2: "Understand if the current copay balances are accurate to Veterans"
  - goal_3: "Understand which copay details are helpful to Veterans"
  - goal_4: "Understand how Veterans interpret the differences between dynamic HTML statements and static paper bills/PDFs"

research_questions:
  - "What challenges, if any, do Veterans encounter when viewing Copay Balances?"
  - "What steps do Veterans take to understand their current copay balances?"
  - "Are there points of confusion or difficulty when Veterans attempt to find, understand, and resolve their copay balances?"
  - "Do veterans think the information displayed under copay balances is accurate and up to date?"
  - "What, if any, technical or design barriers prevent Veterans from successfully understanding their barriers?"
  - "How do Veterans feel about the overall experience of understanding their copay balances?"
  - "Do Veterans understand the different transaction fields?"
  - "Which information do Veterans consider as the most important within the copay details?"
  - "When do they use this information?"
  - "Do Veterans think any vital information is missing from their copay details?"
  - "How do Veterans interpret the currency of payment data in dynamic HTML copay balances compared to static PDF or paper statements?"
  - "What confusion, if any, do Veterans experience when deciding which statement to use and what copay balance amount to pay when they have access to both types of documents?"

hypotheses:
  - "Veterans will be able to easily find, understand, and know how to resolve their Copay balances"
  - "Veterans will believe their copay balances are accurate and trustworthy"
  - "Veterans will be able to easily understand their copay details and think it is useful and relevant"
  - "Veterans will be able to understand that PDF/paper statements contain static data and dynamic HTML statements contain current data"

expected_outcomes: "The results of the study will help identify if Veterans encounter any major issues or pain points with Co-pay statement data post-Lighthouse API integration, allowing the team to solve these issues."

# Recruitment

## Recruitment approach

We would like Perigean support to recruit non-AT users eligible participants for the study. We are aiming for **8** sessions total. 

Participants **must have active copay (VHA) balances from the last 6 months and they must be willing to share screens and data from their personal VA accounts**. 

We are testing the live experience, there are no prototypes.

## Recruitment criteria

* Veterans: 12  
* Ideal completed sessions: 8

## Primary criteria

* Have active copay bills from the past 6 months  
* Must be willing to screenshare from their own [VA.gov](http://VA.gov) account, including visibility of their copay bill and other sensitive account related information

## Secondary criteria

* Have recurring copay bills for prescriptions  
* At least 6 ages 55+  
* At least 6 with an annual household income of less than 50K  
* At least 3 under age 35  
* At least 4 people of color  
* At least 3 in a rural area  
* At least 3 without a degree  
* At least 2 with immigrant origins  
* At least 1 woman  
* At least 1 from the LGBTQ+ community

## Screening Questions

1. Do you currently have an unpaid VA copay bill?  
* Yes moves them to next question  
* No disqualifies them

2. Did you receive a notice about this copay bill in the last 6 months?  
* Yes qualifies them for study  
* No disqualifies them

3. Do you receive recurring copay bills for prescriptions or other services?  
* Yes qualifies them for study  
* No qualifies them for study

Quotas:

* Please aim for 6 of 12 participants to have recurring copay bills

4. We’d like you to review parts of the VA website that require you to sign in to an identity-verified account. Do you have an identify-verified account on VA.gov? You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you sign in, your identity is **not** yet verified.  
* Yes qualifies them for study  
* No disqualifies them  
    
5. Are you willing to screenshare your personal account information from your [VA.gov](http://VA.gov) account?  
* Yes qualifies them for the study  
* No disqualifies them 

6. What device will you use to join the session?  
* Personal Computer  
* Smartphone  
* Tablet

Quotas:

* Aim for a mix of all devices

7. Is your annual household income less than $50,000?  
* Yes qualifies them  
* No qualifies them

Quotas (info for Perigean)

* Please recruit at least 6 participants that have an annual household income level of less than $50K

8. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.  
   1. Yes  
   2. No  
   3. Decline to answer

9. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.  
   1. Yes *(mark as having a cognitive disability)*  
   2. No  
   3. Decline to answer
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-10-30 and 2025-10-31"
  pilot_participant: "TBD"
  research_dates: "2025-11-05 to 2025-11-18"
  research_review_submission: "2025-10-27"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: 2
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points"
      - "Reduce the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
  - "Taking Care of Myself"
  - "Putting Down Roots"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - ""
    
tags:
  - "copay-debt-portal"
  - "usability-testing"
  - "veterans"
  - "payment-history"
  - "assistive-technology"

# Team & Approvals
team_roles:
  moderator: "Risha Lee"
  research_guide_writing: "Risha Lee"
  participant_recruiting: "Perigean"
  project_point_of_contact: "Risha Lee"
  accessibility_specialist: "ADE Team"
  note_takers:
    - "Marcela Rojas"
    - "Joseph Lee"
  observers:
    - "Denise Coveydoc"
    - "Bob Vitt"
    - "Heather Rienks"

approvals:
  - reviewer: "Denise Covey, Team Lead"
    date: "2025-10-17"
  - reviewer: "Shane Strassberg, OCTO Research-Ops Lead"
    date: ""
---

# Research Plan for Financial Management Team, Copay Debt Portal Payment History, October \- November 2025 

# Background

Veterans who visit the debt portal to understand and resolve their debts have been frustrated by the inability to view up-to-date [payment history.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/initiative-brief.md) Veterans expect that after making a payment, the system will update their new payment history and balance quickly. This is not the case, owing to the site’s current functionality, which populates copay payment history data from static monthly statements. As a result, payment history updates only monthly, which at best confuses and frustrates Veterans, often increasing call volumes to support centers, and at worst misleads them to make duplicate payments. The latter action decreases trust in the VA and prompts a lengthy VHA investigation to identify and remediate the issue. Additionally, Veterans expect to see details about their medical copay balances in the context of their payment history, which suffers from the same problem.

The team plans to integrate a new Lighthouse API to provide real-time payment history.   

## OCTO-DE Priorities 2025

This research supports the following OCTO priorities:

**Objective 1:** VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

* **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.  
* **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.

## Veteran Journey

Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)? Are there moments that matter?

* Getting Out  
* Starting Up  
* Taking Care of Myself  
* Reinventing Myself  
* Putting Down Roots  
* Retiring  
* Aging

# Research Goals

* Identify any usability issues Veterans may experience when interacting with  Copay payment history   
* Understand if the current copay balances appear accurate to Veterans  
* Understand which copay details are helpful to Veterans  
* Understand how Veterans interpret the differences between dynamic html statements and static paper bills/pdfs.

## Outcome

The results of the study will help us identify if Veterans encounter any major issues or pain points with Co-pay statement data post-Lighthouse API integration. We will be able to fix any major issues prior to wider release.

## Research Questions

**Research Goal \#1: Identify any usability issues Veterans may experience when interacting with Copay payment history**  
 

1. What challenges, if any, do Veterans encounter when viewing Copay Balances?  
2. What steps do Veterans take to understand their current copay balances?  
3. Are there points of confusion or difficulty when Veterans attempt to find, understand, and resolve their copay balances?  
4. What usability barriers, if any, do Veterans using assistive technology encounter?          

**Research Goal \#2: Understand if Veterans believe the current copay balances are accurate and trustworthy**

5. How do Veterans currently verify copay balance accuracy before this experience?  
6. Do veterans think the information displayed under copay balances is accurate and up to date?  
7. What, if any, technical or design barriers prevent Veterans from successfully understanding their barriers?

**Research Goal \#3: Understand which copay details are helpful to Veterans**

8. Do Veterans understand the different transaction fields?  
9. Which information do Veterans consider as the most important within the copay details?  
10. When do they use this information?   
11. Do Veterans think any vital information is missing from their copay details?

**Research Goal \#4: Understand how Veterans interpret the differences between dynamic HTML statements and static paper bills/PDFs.**

12. How do Veterans interpret the currency of payment data in dynamic HTML copay balances compared to static PDF or paper statements?  
13. What confusion, if any, do Veterans experience when deciding which statement to use and what copay balance amount to pay when they have access to both types of documents?   

# Hypotheses

1. Veterans will be able to easily find, understand, and know how to resolve their Copay balances

2. Veterans will remain skeptical of dynamic data accuracy without additional verification mechanisms

3. Veterans will be able to easily understand their copay details and think it is useful and relevant

4. Veterans may conflate dynamic (html) and static (pdf or paper statement) data, leading to confusion about which copay balance to trust.

# Methodology

This study will use moderated usability testing through one on one in depth interviews. There will be no prototypes, Veterans will login in to their own VA accounts, share screens and interact with their Copay payment history. 

## Location

* Remote via Zoom

## Research materials

Note

**Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

* [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/payment-history/research/2025-10-copays-usability/conversation-guide.md)

# Recruitment

## Recruitment approach

We would like Perigean support to recruit assistive tech (AT) users and non-AT users eligible participants for the study. We are aiming for **8** sessions total. 

Participants **must have active copay (VHA) balances from the last 6 months and they must be willing to share screens and data from their personal VA accounts**. 

We are testing the live experience, there are no prototypes.

## Recruitment criteria

* Veterans: 12  
* Ideal completed sessions: 8

## Primary criteria

* Have active copay bills from the past 6 months  
* Must be willing to screenshare from their own [VA.gov](http://VA.gov) account, including visibility of their copay bill and other sensitive account related information  
* 4 Assistive Technology users, including 2 Veterans who use screen magnifiers and 2 Veterans who use screen readers

## Secondary criteria

* Have recurring copay bills for prescriptions  
* At least 6 ages 55+  
* At least 6 with an annual household income of less than 50K  
* At least 3 under age 35  
* At least 6 with cognitive disability  
* At least 4 people of color  
* At least 3 in a rural area  
* At least 3 without a degree  
* At least 2 with immigrant origins  
* At least 1 woman  
* At least 1 from the LGBTQ+ community

## Screening Questions

1. Do you currently have an unpaid VA copay bill?  
* Yes moves them to next question  
* No disqualifies them

2. Did you receive a notice about this copay bill in the last 6 months?  
* Yes qualifies them for study  
* No disqualifies them

3. Do you receive recurring copay bills for prescriptions or other services?  
* Yes qualifies them for study  
* No qualifies them for study

Quotas:

* Please aim for 6 of 12 participants to have recurring copay bills

4. We’d like you to review parts of the VA website that require you to sign in to an identity-verified account. Do you have an identify-verified account on VA.gov? You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you sign in, your identity is **not** yet verified.  
* Yes qualifies them for study  
* No disqualifies them  
    
5. Are you willing to screenshare your personal account information from your [VA.gov](http://VA.gov) account?  
* Yes qualifies them for the study  
* No disqualifies them 

6. What device will you use to join the session?  
* Personal Computer  
* Smartphone  
* Tablet

Quotas:

* Aim for a mix of all devices

7. Is your annual household income less than $50,000?  
* Yes qualifies them  
* No qualifies them

Quotas (info for Perigean)

* Please recruit at least 6 participants that have an annual household income level of less than $50K

8. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.  
   1. Yes  
   2. No  
   3. Decline to answer

9. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.  
   1. Yes *(mark as having a cognitive disability)*  
   2. No  
   3. Decline to answer

**For AT Users**

##### **For Screen reader or screen magnifier users**

8. Do you need a screen reader or screen magnifier every time you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.  
* Response options: yes or no. (Answering yes would qualify the participant.)  
  * If yes: How long have you been using this screen reader or screen magnifier?  
  * Less than 1 year (disqualify)  
  * At least one year (qualifies)

9. Are you willing to join the Zoom session using this assistive technology?  
- Response options: yes or no. (Answering yes would qualify the participant.)

10. What is the name of the screen reader or screen magnifier technology that you will use during the Zoom session?  
* Response option: text box.

11. What (if any) accommodations will you need to participate in this Zoom session?  
* Response option: text box.

# Timeline

Note

Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.

## Prepare

Before recruitment starts, we would like to **request a kickoff call with Perigean** to align on recruitment criteria and terminology for screener questions in the survey and emails that will be sent to Veterans. We would also like to discuss the relative priorities of recruitment criteria.

Risha is available for a kickoff call during any of these times:

* TBD

Prior to the kickoff call, we would like a link or screenshot of the recruitment survey for this study to review beforehand.

* Dates and times of pilot sessions  
  * TBD

## Research sessions

* `Planned dates of research:` \[TBD\]

We would like to request that **Perigean calls each participant** to remind them about the session, in addition to emailing them. And please include the session time in **each participant's own time zone** (from their address).

## Length of sessions

* Session length:   
  * 60 minutes for non-AT users  
  * 120 minutes for AT users  
* Buffer time between sessions: 60 min  
* Maximum Sessions per day: 2 sessions

## Availability

When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time.

Note

We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

Tip

Please request enough dates and at *least double the amount of time slots for the number of requested participants*. (e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.; *12 time slots for 6 participants*). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

Place time slots between `hash marks` when in edit mode.

* `TBD, 12-5pm ET`

# Team Roles 🕵️👩‍💻👩‍🔬

Note

Please do not include email addresses in this section. We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.

Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

* `Moderator:` \[Risha Lee\]  
* `Research guide writing and task development (usually but not always same as moderator):` \[Risha Lee\]  
* `Participant recruiting & screening:` \[Perigean\]  
* `Project point of contact:` \[Risha Lee\]  
* `Accessibility specialist (for sessions where support for assistive technology may be needed):` \[ADE Team\]  
* `Note-takers:` \[Marcela Rojas\] and \[Joseph Lee\]  
* `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`  
* \[Denise Coveydoc\]  
* \[Bob Vitt\]  
* \[Heather Rienks\]


# Approvals ✅

* `Reviewed by [Denise Coveyduc, Team Lead] on 10/17/25`  
* `Reviewed by [Shane Strassberg, OCTO Research-Ops Lead] on`
