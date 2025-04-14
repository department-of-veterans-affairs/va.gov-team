# 2025-03 New/CFI from Claim to Condition Level 

Research Plan

Written by: [Sudeepti Bhatnagar](mailto:sudeeptibhatnagar@navapbc.com) and <kyra.berman-gestring@agile6.com>

Last updated Apr 3, 2025

|                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ## **Note:** This research plan was created at the request of OCTO at the end of the Conditions Team’s period of performance. Because of this time constraint certain aspects of this report including the Timeline and Team Roles were out of scope. Impacted data is highlighted in blue throughout this report, to be completed by the implementing team.  |


## **Background**

The current 526EZ form process requires Veterans to select whether they are applying for new conditions or seeking an increase (CFI) for previously rated disabilities at the beginning of Step 2 of 5, creating two separate “list and loops” for new and CFI claims. This approach leads to usability issues, including a disconnected data flow and frequent misidentification of claim types. Veterans often confuse when to use CFI versus a supplemental claim, which is particularly problematic as Congress is pushing to allow supplemental claims to be filed through the 526EZ form. In response, the VBA is updating the paper form to associate new and CFI claims with specific conditions rather than handling them at the claim level, aiming for greater compliance and reduced confusion.

To address these challenges and prepare for policy changes, we are exploring two design approaches that allow Veterans to specify whether a condition is new or a CFI at the condition level. These approaches aim to improve usability, align with ongoing VBA efforts to update the paper form, and ensure consistency across platforms. (Read more about the problem space in the [Design Brief](https://docs.google.com/document/d/1DA0W-eAm0eDUjJvInufeKaFuEOXy022KY9n_qEP0gdk/edit?tab=t.h9xc67rw3d9e))

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeayeayuUNhbHjYDd58CkVY2ivoBqVCxlfBGp-9Uf8tsvwnOie2-PwcHYm-USIFOPh2bLwywbVxgy3AiRYR3BLrzkHnptDcFElKhDZZgn3dTEaH7ztpf9ZTrYyKwJ7ROQHpsYTWzA?key=zJjXIwFeUlWfkSAJ4veow8v4)

Current State: Veterans have to indicate if a condition is new or has gotten worse in the first question of Step 2

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_2dtr-SGOeTxa0lKbUgUxG81Hv2dkCzEoq9LETizrJt7VQ03NmjdBYE7OZGGB9AgQh6qxGoVqJilcOoWIrdcKALiAnljArGPvDH73GQP787PpOQzWsuhP7deQ3C09DZjCNRfgkQ?key=zJjXIwFeUlWfkSAJ4veow8v4)

Screenshot of PDF 526EZ Form illustrating how paper form does not separate new conditions from CFI

This research focuses on two key design innovations to solve these issues:

**1. Apple Prototype Improvements**Previous testing on the Apple prototype (reference: [figma designs](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1150-56386)) demonstrated promising results using a[ multiple response multi-page variation](https://design.va.gov/patterns/ask-users-for/multiple-responses). Based on user feedback and policy considerations, we've implemented several targeted updates:

- **Date Component Modifications:** Removed the required asterisk, added a day field to the date entry component, and included hint text showing how to enter approximate dates

- **Autocomplete Refinements:** Reduced examples from 7 to 3 for improved scanability and changed the label from "Add a new condition" to "Select or enter new condition" to encourage use of autosuggestions

- **Cause Question Improvements:** Refined option text for brevity and plain language, added "event" and "onset of a disease" options to align with the paper form and adjudicator manual

- **Cause Details Screen Enhancements:** Incorporated condition names dynamically via formData to provide clear context, reworded hint text for clarity, and improved consistency across cause detail screens

- **Laterality**: While this is not a change from the Apple prototype, we will be testing laterality again. When a Veteran chooses a condition from the autosuggestion that has laterality associated with it, they’ll be prompted with a follow-up question to indicate side of body. 

**2. Condition Type Approaches**To address the fundamental issues of claim type misclassification and usability issues, we're testing two distinct design approaches:

**Mango Design :** Shows all rated disabilities upfront, ensuring Veterans review existing disabilities before making selections. This approach may reduce confusion by making it easier to determine what they're applying for, though it could present challenges in streamlining titles and copy. ([Reference: Figma](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2324-59107\&m=dev)) 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeDVfFtFJQv8A2MYiZcYm-VbVI1gbYNJZc7jA4JUk0MQOf8InF7aLV-6VV6dNUKnld5Ul43kaMFud_0vU6NHYyJ0zjxAxYIZ9UPmPBrzBToVg7V8NnFGngSkec0HzYnL3rELcl8gQ?key=zJjXIwFeUlWfkSAJ4veow8v4)

Screenshot of Mango 

**Kiwi Design:** Separates new conditions from CFI claims, potentially reducing cognitive burden by allowing Veterans to focus on one claim type at a time. This approach may streamline titles and copy but could still face challenges if Veterans don't know their rated disabilities. ([Reference: Figma)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2324-59441\&m=dev)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeBtto5BM5DU6UwCbiGyipiC7zW8c8JrqgkNjOU6K4ZS8kX_mYsA7vTWRHdDmZRFkwfLbBuW8WbyPXmfg8vuhsltBd_R2YdxQEuSJwUcYtKX9h643w8qr1W6s3lrSWdsY9UDsB-VQ?key=zJjXIwFeUlWfkSAJ4veow8v4) 

Screenshot of Kiwi

This research evaluates these design changes to identify the approach that best meets Veterans' needs, aligns with VBA's paper form updates, and minimizes processing errors.


### **OCTO Priorities**

- Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

  - Key Result 1: Improve satisfaction with our web and mobile products by 5 points.

  - Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.


### **Veteran Journey**

Getting out: Engaging VA to access benefits and services Taking care of myself: Managing primary care and chronic health issues


## **Research Goals**

### **1. Evaluate key usability improvements in the Apple Prototype**

- Determine if recent design and content changes have improved the overall user experience for Veterans

  - Assess scanability and comprehension of content changes 

  - Assess whether date field modifications have reduced friction points for Veterans

  - Reevaluate usefulness of laterality question 


### **2. Compare effectiveness of Mango vs. Kiwi design approaches**

- Determine which design approach better supports accurate claim type identification

- Identify which design better aligns with Veterans' mental models and expectations

- Assess which approach provides a more intuitive editing experience


### **3. Assess the holistic user journey through the conditions step**

- Understand if the end-to-end flow provides a cohesive and intuitive experience

- Evaluate whether recent copy changes support Veterans' decision-making

- Identify remaining pain points in the conditions step 


### **Outcome**

This research will:

- Inform the next iteration of the 526EZ form design across all tested components

- Provide insights to reduce claim processing errors

- Help streamline the Veterans' claims submission experience

- Guide implementation decisions between Mango and Kiwi design approaches


### **Research questions**

### **Goal 1: Apple Prototype Updates**

- How has improved scanability on key screens affected Veterans' ability to process information?

- How do Veterans interact with formData examples on cause details screens, and do these examples improve comprehension?

- What impact does adding specific terminology ("disease onset"/"event") have on Veterans' understanding of cause questions?

- How does removing the "required" label from date fields while including the day component affect completion rates and accuracy?

- How do Veterans experience the laterality question? Is it straightforward or cause confusion?

- What impact does the multi-page approach have on perceived form length and complexity?

_Measured by: Completion rates, observation notes, verbal comments during think-aloud protocol, post-task interview questions, error rates, accuracy of information provided_

**Goal 2: Mango vs. Kiwi Design Comparison**

- Which design do Veterans prefer and why? 

- Which design aligns better to Veteran’s mental model on conditions/disabilities? 

- Does one design better support accurate condition entry and classification? 

- What challenges do Veterans encounter when going through each flow?

- Does editing follow-up questions on a specific condition create confusion or clarity within the edit mode of the multiple-response pattern?

_Measured by: Preference question, task completion rates, self-reported confidence, verbal feedback_ 


### **Goal 3: End-to-End Flow of the Conditions Step**

- What is the Veterans' experience navigating from the introduction page to the review page?

- How effective are the copy changes in improving wayfinding throughout the conditions step, and does each page feel like a logical next step in the process?

- What points in the flow cause confusion or hesitation for Veterans?

- How confident do Veterans feel about their selections upon reaching the review page?

- Do Veterans understand how to navigate back to modify previously entered information?

_Measured by: Edit task completion rates, verbal expressions of certainity/doubt, verbal feedback_ 


### How will we measure? 

**Goal 1: Apple Prototype Changes**

- Task completion: Ability to successfully add multiple conditions, including date, laterality, and cause information

- Scanability & instructions: Observation on whether Veterans read and understand instructions and page content

- Context understanding: Observation and qualitative feedback on effectiveness of formData in helping Veterans identify which condition they're entering/editing

- Comprehension: Ability to understand what each page is asking them to provide

- Date component: Identification of friction points during date entry and success with approximate dates

- Error handling: Ability to recognize and self-correct errors without external prompting

**Goal 2: Mango vs. Kiwi Design Comparison:**

- Design preference: Direct comparison, preference strength ratings, and qualitative reasoning

- Mental model:  Observations of how Veterans conceptualize and categorize their conditions


### **Goal 3: End-to-End Flow of the Conditions Step**

- Navigation experience: Identification of hesitation points and logical flow understanding

- Edit experience: Success rates of edit attempts and qualitative feedback on the process

- Confidence check: Self-reported certainty in selections upon reaching review page


### **Hypotheses**

### **Apple Prototype Updates**

We hypothesize that Veterans will find the updated Apple prototype easier to use compared to previous versions, specifically:

- The addition of hint text in the date component will reduce confusion about what information is being requested, but the inclusion of a day field may create new confusion for Veterans who don't recall the specific day of an event or onset.

- Including the condition name (via formData) will improve context and reduce errors when Veterans are completing cause details screens.

- Reduced examples and refined language will improve scanability, leading Veterans to review all four cause question options before selecting


### **Mango vs. Kiwi Design**

Mango design will be more intuitive because it:

- ensures a review of existing disabilities, provides upfront visibility of rated disabilities, and reduces confusion around claim type terminology.

- Is easier to edit due to its integrated approach to displaying all condition types together.


## Methodology

### Testing Structure

- Each session will use a mixture of participants' real conditions and pre-defined mock scenarios

- We will use an A/B testing approach to compare Mango and Kiwi designs with counterbalancing to control for order effects

- Sessions will include time for task completion, feedback, and semi-structured interview questions

- Participants will be tasked with completing Step 2 from the introduction page up to the review page, alternating between Mango and Kiwi designs. 


### Data Collection

- Record task completion rates and times

- Capture qualitative feedback through think-aloud protocol

- Use post-task satisfaction ratings

- Collect preference data between competing designs


### Accessibility Considerations

Due to the complexity of what we're testing in this round, we will not include Assistive Technology (AT) users in this phase. After selecting and refining either the Mango or Kiwi design, we will conduct a separate round of testing focused on accessibility with AT users to validate the changes made. 


### Analysis Plan

- Compare task completion and preference metrics between Mango and Kiwi designs

- Identify common pain points across the end-to-end flow

- Evaluate the effectiveness of specific updates to the Apple prototype

- Generate actionable recommendations for the next design iteration


### **Location**

- Remote interviews on Zoom


### **Recruitment approach**

We will recruit 12 Veterans for a minimum of 8 sessions

**Primary Criteria**

- All participants are receiving disability compensation from the VA for at least two conditions 

- At least 1 but no more than 2 Veterans who identify as having a cognitive disability.

- At least 1 but no more than 3 Veterans over 55 years old 

- Education

  - At least 1 but no more than 3 “no degree after high school” 

**Secondary Criteria**

- We’d like a mix of genders, age, and race/ethnicity 

- Gender

  - Attempt At least 2 but no more than 3 Veterans who identify as a gender other than male 

- Age

  - Attempt at least 1 Veteran under 35 years old 

- Race/ethnicity

  - Attempt at least 2 but no more than 4 Veterans who are not white/Caucasian


### **Screener questions**

General: Disability compensation 

1. Have you ever filed a claim for disability compensation with the VA in the past?

- Yes \[Recruit for all] 

- No \[Remove] 

2\. Are you currently receiving monthly disability compensation? 

- Yes \[Recruit for all]

- No \[Remove] 


### **Length of sessions**

- Session length: 75-90 minutes, schedule for 90 

- Buffer time between sessions: 30 minutes 

- Maximum Sessions per day: 2 sessions 

***


#

