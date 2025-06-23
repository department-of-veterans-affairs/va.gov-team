# 2025-06 New/Increase at Condition Level 

# Research Plan

Written by: [Sudeepti Bhatnagar](mailto:sudeeptibhatnagar@navapbc.com), [kyra.berman-gestring@agile6.com](mailto:kyra.berman-gestring@agile6.com), [Kim Ladin](mailto:kimladin@navapbc.com)  
Last updated: Jun 6, 2025

# Background

The current 526EZ form process requires Veterans to select whether they are applying for new conditions or seeking an increase for previously rated disabilities at the beginning of Step 2, creating two separate “[list and loops](https://design.va.gov/patterns/ask-users-for/multiple-responses)” for new and increase claims. This approach leads to usability issues, including a disconnected data flow and [misidentification of claim types](https://docs.google.com/document/d/1fx9GaNEVoQssIg_wP3NoB72nzZC4C4eqfcFiVMqzMiE/edit?tab=t.0#heading=h.trab9osz8r1e). 

In addition, Veterans often confuse when to file a claim for increase versus a supplemental claim, which is particularly problematic as Congress may pass legislation to allow supplemental claims to be filed through the 526EZ form. In response, the VBA is updating the paper form to associate a new or increase designation with specific conditions rather than handling them at the claim level, aiming for greater compliance and reduced confusion.

*Current state: Veterans must indicate New, Increase, or both for the entire claim on the first screen in Step 2\.*  
![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/images/conditions-current-flow.png)

To address these challenges and prepare for policy changes, we are exploring a new design that allows Veterans to specify whether a condition is new or increase at the condition level. This approach aims to improve usability, align with ongoing VBA efforts to update the paper form, and ensure consistency across platforms. (Read more about the problem space in the [Design Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-03%20Claims%20for%20Increase%20and%20New%20Identification%20from%20Claim%20to%20Condition%20level/Design%20Brief%3A%20Claims%20for%20Increase%20and%20New%20Identification%20from%20Claim%20to%20Condition%20Level.md))

This research focuses on addressing the new vs. increase problem. It also will assess several changes to other elements in the design for the Conditions step. 

## What we’ll test

### New flow

The testing prototype (see [Research Materials](#reseach-materials) below) introduces a new flow with the following main steps:

1. Choose to add a new condition  
2. Select from a list of your previously rated conditions or indicate it’s a new condition  
3. For a new condition, enter the condition name  
4. Answer follow-up questions about the specific condition  
5. Review the list of conditions you’ve added to your claim.  
6. Edit or delete the listed conditions, or add another one.

*(Step 2\) The prototype allows user to select a new condition or one of their existing conditions.*  
![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/images/conditions-new-flow.png)

### Other design updates

Previous testing on the Apple prototype (reference: [figma designs](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1150-56386)) demonstrated promising results using a [multiple response multi-page variation](https://design.va.gov/patterns/ask-users-for/multiple-responses). Based on user feedback and policy considerations, we've implemented several updates. We’ll use this round of testing to validate these improvements.

* **Date component modifications:**   
  * Removed the “Required” designation to eliminate an AT usability issue  
  * Included hint text showing how to enter approximate dates to reduce confusion about what information is being requested  
  * Added a day field to the date component, to bring the online form into alignment with the paper form  
* **Autocomplete refinements:**   
  * Reduced examples from 7 to 3 for improved scanability   
  * Changed the label from "Add a new condition" to "Select or enter new condition" to encourage use of autosuggestions  
* **Cause question improvements:**   
  * Refined option text for brevity and plain language to encourage Veterans to read all four options before selecting  
  * Added "event" and "onset of a disease" options to make the question clearer and to align with the paper form and adjudicator manual  
* **Cause details screen enhancements:**   
  * Incorporated condition names dynamically via formData to provide clear context and reduce errors when Veterans are providing details about specific conditions  
  * Improved consistency across cause detail screens  
* **Laterality:** When a Veteran chooses a condition that has laterality associated with it, they’ll be prompted with a follow-up question to indicate side of body. 

# OCTO Priorities

* Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

  * Key Result 1: Improve satisfaction with our web and mobile products by 5 points.

### Veteran Journey

Getting out: Engaging VA to access benefits and services; Taking care of myself: Managing primary care and chronic health issues

# Research Goals

1. #### Evaluate the usability of assigning new/increase type at the condition level instead of the claim level.

* Determine whether the new approach helps Veterans accurately select the claim type for their conditions.  
* Assess ease of use  
* Determine whether the new pattern supports editing conditions after they’ve been entered  
* Identify potential usability issues  
  * In particular, does removing already-selected items from the rated disabilities list cause problems?

2. #### Evaluate usability improvements in the Apple Prototype

* Assess scanability and comprehension of content changes   
* Assess whether date field modifications have reduced friction points for Veterans  
* Assess whether the new laterality question makes the main conditions menu easier to use, and whether it introduces any new usability problems.

3. #### Assess the holistic user journey through the conditions step

* Understand if the end-to-end flow of the Conditions step provides a cohesive and intuitive experience  
* Assess Veterans’ stamina and patience with the new flow from start to finish  
* Identify any remaining pain points in the conditions step 

# Outcome

This research will:

* Inform the next iteration of the 526EZ form design across all tested components  
* Help streamline the Veterans' claims submission experience

# Research questions

## Goal 1: Evaluate the new flow

* Do Veterans understand they’re being asked about one condition at a time? Do they understand they’ll be able to enter multiple conditions?  
  * Do they understand why the starting list of options is the way it is? Why the service-connected conditions are listed?   
  * Is it easy to figure out how to claim a new condition?  
  * How do they react to seeing the list of rated conditions get shorter? Do they understand why it’s happening?  
* What challenges do Veterans encounter when going through the flow?  
* Task completion: Are Veterans able to successfully add multiple conditions (new and increase), including date, laterality, and cause information  
* Error handling: Are Veterans able to recognize and self-correct errors without external prompting  
* Does editing follow-up questions on a specific condition create confusion or clarity within the edit mode of the multiple-response pattern?

*Measured by: Rating questions, task completion rates, observation notes, verbal feedback* 

## Goal 2: Assess improvements to Apple Prototype 

* Date component  
  * Does removing the Required label affect completion rates?  
  * Do Veterans notice the hint text? Does it help them understand what to enter?  
  * What is the effect of adding the day field?  
* Cause questions  
  * Do Veterans read all four options before making a selection?  
  * What impact does adding specific terminology ("disease onset"/"event") have on Veterans' understanding of cause questions?  
  * How do Veterans interact with formData examples on cause details screens, and do these examples improve comprehension?  
* How does the addition of Condition name to the page titles help users understand what information and condition they’re entering?  
* How well are Veterans able to process the information in these screens?  
  * Do they understand what each page is asking them to provide  
  * Scanability & instructions: Do they read and understand instructions and page content  
* Laterality  
  * Are Veterans able to complete this task?  
  * Does the question make sense to them?

*Measured by: Task completion rates (including ability to successfully add multiple conditions, including date, laterality, and cause information), observation notes, verbal feedback, error rates*

## Goal 3: End-to-End Flow of the Conditions Step

* Did the experience of working through the whole section make sense to Veterans? Did it meet their expectations?  
  * Does each page feel like a logical next step in the process?  
  * What points in the flow cause confusion or hesitation for Veterans?  
  * How do Veterans feel about the overall length of the step?  
* How effective are the copy changes in improving wayfinding throughout the conditions step?  
* How confident do Veterans feel about their selections upon reaching the review page?  
* Do Veterans understand how to navigate back to modify previously entered information?

*Measured by: Completion rate or Edit task, rating questions, verbal expressions of certainty/doubt, verbal feedback* 

### Hypotheses

We hypothesize that:
- Veterans will be able to easily add several different conditions to their claim 
- Veterans will understand how to enter an approximate date on the date screens
- The condition-specific flow combined with condition-specific page headings will help Veterans feel confident they're entering the right information
- The label on the autocomplete menu, "Select or enter new condition," will encourage Veterans to use autosuggestions
- Veterans will read all four cause options before making a selection
  
# Methodology

## Testing Structure

* Each session will use a mixture of participants' real conditions and pre-defined mock scenarios

* Participants will be tasked with completing Step 2 from the introduction page up to the review page. 

* Sessions will include time for task completion, feedback, and semi-structured interview questions.

## Data Collection

* Record task completion rates.

* Capture qualitative feedback through think-aloud protocol.

* Record observations of user behavior that may reveal points of clarity or confusion, confidence or hesitation.

* Use post-task satisfaction ratings.

* Collect preference data between competing designs.

## Accessibility Considerations

Due to the complexity of what we're testing in this round, we will not include Assistive Technology (AT) users in this phase. After refining the design, we will conduct a separate round of testing focused on accessibility with AT users to validate the changes made. 

## Location

* Remote interviews on Zoom

# Recruitment approach

We will recruit 9 Veterans for a minimum of 7 sessions

**Primary Criteria**

* All participants are rated for at least one service-connected disability by the VA. (See Screener Question 1)

* All participants have recently filed a disability claim OR are planning to file a claim soon (See Screener Questions 2 and 3: Each participant must meet either criteria 2a and/or criteria 3a).

* At least 2 Veterans who identify as having a cognitive disability.

* 2-3 Veterans with “no degree after high school” 

**Secondary Criteria**

* We’d like a mix of genders, age, and race/ethnicity 

* Gender

  * Attempt At least 1 but no more than 3 Veterans who identify as a gender other than male 

* Age

  * Attempt at least 1 Veteran under 35 years old 

  * 2-3 Veterans over 55 years old 

* Race/ethnicity

  * Attempt at least 2 but no more than 6 Veterans who are not white/Caucasian

### Screener questions

1. Are you currently receiving monthly disability compensation from the VA?
    a. Yes \[Recruit for all\]
    b. No \[Do not recruit\] 
3. When was the last time you filed a disability claim with the VA? (Do not include an appeal.)  
    a. In the last 6 months \[recruit\]  
    b. In the last year   
    c. More than a year ago   
    d. N/A \- I’ve never filed a disability claim with the VA  
4. Are you planning to file a VA disability claim within the next 6 months? (Do not include an appeal.)  
    a. Yes \[Recruit\]  
    b. No  
    c. Not sure

### Length of sessions

* Session length: 60 minutes 

* Buffer time between sessions: 30 minutes 

* Maximum Sessions per day: 3 sessions 

### Availability

When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.*  
Please request enough dates and at *least double the amount of time slots for the number of requested participants*. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; *12 time slots for 6 participants*). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

Friday, 6/20

* 11am \- 2pm ET  
* 3pm \- 8pm ET

Monday, 6/23

* 11am \- 3pm ET  
* 4:30pm \- 8pm ET

Tuesday, 6/24

* 11am \- 12:30pm ET  
* 1:30pm \- 3pm ET  
* 5pm \- 8pm ET

Wednesday, 6/25

* 11am \- 2:30pm ET  
* 3:30pm \- 8pm ET

Thursday, 6/26

* 11am \- 4:30pm ET

Friday, 6/27

* 11am \- 4pmET  
* 4:30pm \- 7pm ET

## Timeline

*Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.*  
*TBD*

### Research materials

*Note: your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.*  
Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  
For moderated usability tests:

* [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-06%20New%20or%20Increase%20at%20Condition%20Level/Conversation%20Guide%20-%202025-06%20New%20or%20Increase%20at%20Condition%20Level.md) 
* [Link to prototype](https://staging.va.gov/user-testing/conditions)

### Prepare

When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).  
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.

* Pilot participant email: leah.bannon2@va.gov  
* Date and time of pilot session: June 17, 11am ET

### Research sessions

* Planned dates of research: June 20-27

## Team Roles

Please do not include email addresses in this section. We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.  
Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

* Moderator: Kim Ladin  
* Research guide writing and task development (usually but not always same as moderator): Kim Ladin  
* Participant recruiting & screening: Perigean  
* Project point of contact: Kim Ladin  
* Participant(s) for pilot test: Leah Bannon  
* Accessibility specialist (for sessions where support for assistive technology may be needed):  
* Note-takers: TBD  
* Observers: TBD

# 

