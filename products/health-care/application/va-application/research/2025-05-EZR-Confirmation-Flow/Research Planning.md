
# Research Plan for 10-10EZR, Confirmation Flow

**Office of the CTO - Digital Experience, Health Enrollment Team, 10-10EZR**

May 2025

Hieu Vo and Renata Keck

## Background 🏗️
The Health Benefit Update Form (10- 10EZR) is an online version of the paper form, which is used to update personal, insurance, and financial information for Veterans currently enrolled in health care benefits. Most commonly, this includes annual updates, including dependent information or income information for those Veterans who are placed in a Priority Group that requires this.

While [previous research and Veteran mental models](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/research/2023-06-Priority%20Group%20and%20Financial%20Disclosure) indicate a preference for single-task updates, such as only updating personal information or insurance information, processing the online form requires a level of paper parity. This balance between business needs and user wants has driven many of the iterations of the form to reduce the cognitive burdens by personalizing the user experience, pre-filling information, and refining content to set the Veteran’s expectations.	

`What problem is your product trying to solve?`

The primary use of the 10-10EZR is for Veterans to update their household financial information. In the latest iteration, we pushed for two major updates to reduce the time and cognitive burden spent by Veterans on the form. 

1. We’re placing all three sub-sections of the Household Information section (Spouse Information, Dependent Information, and Financial Information) into List&Loop components (also known as [multiple responses pattern, or array builder](https://design.va.gov/patterns/ask-users-for/multiple-responses)). In doing so, we believe Veterans will save time by only confirming their prefilled information before moving on to the next section.

2. On the Annual Income screen, we included a [gray card component](https://design.va.gov/components/card) to display any prior financial information the Veteran may have provided. This will allow them to reference the previous year as a reference without prefilling that income in the input field. We assume that the absence of prefill and a reference card on this page will decrease error and reduce time on page while Veterans search for their financial information. 
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The product is an authenticated form within the My Health section of the VA.gov, but is also referenced by other static, informational pages on VA.gov, outside of the My Health section.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

The 10-10EZR is used to update information after the 10-10EZ enrollment, so Veterans are most likely familiar with similar questions and content. 

[Link to EZR Household Section v2 product initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/Household%20Section%20V2/Household%20Section%20V2%20Initiative%20Brief.md)


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

</details>


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

This product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in these areas:

- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals
**Goal 1: Spouse Information:** Test the usability of the spouse information section to see if the Veterans follow the conditional logic, understand what information can be updated, and whether the information presented is comprehensible.

**Goal 2: Confirmation Flow:** Validate that Veterans prefer the confirmation flow (Option Red), using the List&Loop component, because it is more efficient than the existing MVP approach (Option Green).

**Goal 3: Gray Reference Card:** Understand how the Veterans expect the previous year’s financial data to be prefilled, and whether they understand the hierarchy of the information on financial reporting screens.
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

Our findings will indicate if we need to refine the confirmation pattern and gray reference card component, and whether we can move forward with updating the rest of the form to match.

---

### Research questions

**Goal 1: Spouse Information:** Test the usability of the spouse information section to see if the Veterans follow the conditional logic, what information can be updated, and whether the information presented is comprehensible.

- Does the user understand that the number of questions changes based on the choice they selected for marital status?
- Do users understand that they can edit/update the information that’s pre-filled?

**Goal 2: Confirmation Flow:** Validate that the confirmation flow (Option Red), using the List&Loop component, is more efficient than the existing MVP approach (Option Green).

- Do users report a higher efficiency and ease of flow for the confirmation flow (Option Red), or the existing MVP (Option Green)?
- Do users understand the instructions on how to update the pre-filled information when it is outdated?
- Do users understand their income reporting requirements based on the content? 


**Goal 3: Gray Reference Card:** Understand how the Veterans expect the previous year’s data to be prefilled, and do they understand the hierarchy of the information.

- Do users find referencing last year’s income helpful in updating their financial information?
- Does the reference card reduce complexity and effort for users to update their income information?
- Do users trust the accuracy of the data presented in the card?


### Hypotheses

- The participant will understand the Spouse Information and Financial Information shown in the List&Loop’s review page.
- The participant will prefer the Confirmation Flow (Option Red) over the existing MVP flow (Option Green).
- The participant will ask more questions, require more time to understand the content in the gray reference card component.
  
## Methodology  🛠️

- Semi-structured interviews
- Moderated usability testing on [3] tasks, using the think-aloud protocol:
  - Task 1: Updating spouse's address
  - Task 2: Fill out your previous year’s financial information
  - Task 3: Edit an error in your spouse’s financial information

Note that after the spouse section, users will fork for A/B testing of the proposed confirmation flow and MVP experience:
 - Cohort A will see Option Green first, called Prototype Green [Existing version of the Financial Information, moderator provides last year’s financial information]
 - Cohort B will see Option Red first, called Prototype Red [Confirmation Flow version with the gray box reference, moderator does not provide last year’s financial information]	

### Location

- [x] **Remote, moderated via Zoom**
- [ ] **In-person**


## Research materials 📔 

**For moderated usability tests:** 
	
- [Conversation guide - Green prototype first](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2025-05-EZR-Confirmation-Flow/Conversation-guide-Green-first.md)
- [Conversation guide - Red prototype first](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/2025-05-EZR-Confirmation-Flow/Conversation-guide-Red-first.md)
- [Green/Red prototypes (Figma)](https://www.figma.com/design/tggcJk382w9yQ0ElwKfh3N/10-10EZR?node-id=8394-119188&t=ATgHJfUakpUORQbc-4)
	
## Recruitment 🎯	

### Recruitment approach
Our intended audience for this research are Veterans and we will be using and leveraging Perigean to recruit participants.

#### Veterans: Requesting 10, need 6 to complete

### Recruitment criteria

**List the total number and type (Veterans, caregivers, etc.) of participants for this study:**

- `Veterans:` **[10]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[10]**

### Primary criteria (must-haves)

- All must be currently enrolled in VA health care benefits
- Diverse mix of age ranges, no more than 2 per age group
- At least 2 participants with Cognitive disabilities
- At least 2 participants who are Black
- At least 2 participants who are Hispanic

For all:
1. Are you currently enrolled in VA health care benefits?
   	- Yes *(Qualify)*
   	- No *(Disqualify)*


For recruiting 2 mobile users:
1.  Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone? Any kind of smart phone will work, as long as it connects to the internet.
    - Yes *(Qualify)*
    - No *(Disqualify)*

For recruiting 2 users with cognitive disabilities:
1. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
   	- Yes *(Qualify)*
   	- No *(Disqualify)*

- [ ] **Perigean Kickoff call on Tuesday, 06/17/2025 at 2 PM EST**

## Timeline 🗓️

### Prepare
The prototype for both Option Green and Option Red has been completed in Figma.

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **Michael Skinner**
- `Date and time of pilot session:` **06/11 Wednesday, 3:30 PM Eastern** 

### Research sessions
- `Planned dates of research:` **06/23 - 07/03**

### Length of sessions
- `Session length:` **1 hour**
  
- `Buffer time between sessions:` **1 hour**
  
- `Maximum Sessions per day:` **3 sessions**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 


- `[06/24, Tuesday, 10 AM-8 PM] EST`
- `[06/25, Wednesday, 10 AM-8 PM] EST`
- `[06/26, Thursday, 10 AM-8 PM] EST`
- `[06/27, Friday, 10 AM-8 PM] EST`
- `[06/30, Monday, 10 AM-8 PM] EST`
- `[07/01, Tuesday, 10 AM-8 PM] EST`
- `[07/02, Wednesday, 10 AM-8 PM] EST`
- `[07/03, Thursday, 10 AM-8 PM] EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Hieu Vo, Renata Keck**	
- `Research guide writing and task development (usually but not always same as moderator):` **Hieu Vo**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Moderators**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**	
- `Note-takers:` **10-10 Team**
- `Observers:` **10-10 Team**


## Approvals ✅
- `Reviewed by [Amanda Klaursmeier] on [06-11-2025]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
