
# Research Plan for VA Chatbot Team, VA Chatbot Team - Comparative Analysis - June/July 2025

## Background 🏗️
<details><summary>Originally created in 2021, the VA Chatbot is a well-developed and maintained virtual agent that helps users solve problems and complete tasks on their own with little to no human involvement at any time of day, resulting in decreased time Veterans spend waiting for an outcome, and ultimately decreased call center calls – especially for calls involving simple questions and/or solutions.</summary> 

---

**Problem Statement:**

The VA Chatbot aims to help Veterans self-serve and access information on VA.gov more easily, ultimately reducing call volume and supporting task completion without human assistance. The product assumes that improved digital experiences can shift behavior away from phone-based support, but gaps may exist in understanding edge cases, digital literacy, and accessibility for all user groups.
  
**Product Placement:**
The chatbot is currently designed for unauthenticated users and is available on pages like [Contact Us](https://www.va.gov/contact-us/virtual-agent/). This placement is suitable for broad, early engagement but may need further exploration regarding visibility across the site and integration with authenticated experiences as the product matures.
  
**Veteran Familiarity & Adoption Challenges:**
This is an iteration on the existing Ask VA/VA Chatbot. While familiarity may exist for some users, the shift to a more advanced, AI-driven experience could pose challenges—especially for less tech-savvy Veterans or those with accessibility needs. The research should investigate barriers related to trust, discoverability, and ease of use.

`Product Brief`

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/Chatbot%20PoC%20Initiative.md)

[Google Doc product brief](https://docs.google.com/document/d/114fKRhqjoKr_TvqFSE-_hklefcrSCiz4/edit)

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

**Alignment:**

The research supports OCTO’s objectives around platform efficiency, security, and generative AI adoption. Key results such as secure authentication and broad employee access to AI tools are partially addressed, but the chatbot’s current unauthenticated focus means some objectives (like secure credential use) may not be fully aligned.

**Relevance of Key Results:**

Increasing answer accuracy and protecting user information are highly relevant and reflected in the research goals.
To strengthen alignment, the plan could include explicit measures for data security, monitoring for PHI/PII entry, and plans for future integration with authenticated services.


`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result:** 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.

> - **Key Result:** 100% of VA employees have access to a valuable Generative AI tool to help with their work.

Additionally:
> - Increase the accuracy of infomation delivered to users on the chatbot.

> - Protect personal information and health information from being entered into the chatbot.

> - As a result, there will be less phone calls to the call center for help using the VA website to accomplish Veteran tasks.

</details>


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>

**The Va chatbot can be used at any point in the Veteran journey to help assist the Veteran complete tasks on VA.gov.  Once fully realized, the chatbot will be ubiquitious and on every page ov VA.gov. The POC will focus on login tasks specifically.**
	
- Joining
- Serving
- Getting Out
- Starting Up
- Taking Care of Myself
- Reinventing Myself
- Putting Down Roots
- Retiring
- Aging
- Dying

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 


### Goals

**Clarity & Focus:**

The goals are clear, actionable, and generally measurable (accuracy, readability, pain points). However, specific success metrics (e.g., target accuracy rates, satisfaction thresholds) would make them more robust.


`1.` **Increase the accuracy of the answers provided by the VA chatbot.**

`2.` **Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov.**

`3.` **Improve the design by finding painpoints in the current proof of concept designs to accomidate any/all level of users.** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**By finding the painpoints and increasing the accuracy of the answers we can improve the design of the chatbot which will give Veterans confidence in using the VA chatbot. Ultimately, with confidence that they are getting correct answers, the error rate will decline and total calls to VA call centers will decline as well. The plan to use findings to iterate on chatbot design is appropriate. Additional outcomes to consider: defining accessibility benchmarks, strategies for ongoing improvement, and recommendations for scaling beyond the POC phase.** 

---

### Research questions

**`1.`Is the chatbot design easy to use and understand for users of all technical ability?**

**`2.`Are users able to find answers to simple questions without authentication?**

**`3.`Are the disclaimers and warnings timely and useful?**

**`4.`Are users getting frustrated if questions are not properly answered?**

**`5.`Are the lenghts of answers appropriate?**

**`6.`How can we improve design?**

**`7.`Are interactions quick and get the user to their intended destination in a timely manner?**


### Hypotheses

---

**By utilizing LLM and/or AI in the 3 proof of concept designs, we will be able to more accurately answer Veterans' questions and help them complete tasks on VA.gov by interacting with users and responding to feedback** 


  
## Methodology  🛠️


**We will be conducting moderated usability testing to determine which proof of concept will be most accurate and which design will return the most appropriate answers.**


### Location

- [X] **Remote**
  
   Microsoft Teams meetings.

- [ ] **In-person**
      

## Research materials 📔

**For moderated usability tests:** 
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va-virtual-agent/blob/master/research/ConversationGuide.md)
- [POC 1](https://dev.va.gov/contact-us/virtual-agent/)
- [POC 2](https://chatbot-test-1-fe.whitlock.app/component-2)*
- [POC 3](https://chatbot-test-1-fe.whitlock.app/component-3)*

*test user email must be added to a white list by team


	
## Recruitment 🎯	

### Recruitment approach

- We are looking for Veterans who are both tech savvy and not so tech savvy so that we are sure the chatbots are approachable and usable by all demographics. Looking for individuals of any/all age ranges and demographics.

### Recruitment criteria

- We are looking for Veterans who are both tech savvy and not so tech savvy so that we are sure the chatbots are approachable and usable by all demographics. Looking for individuals of any/all age ranges and demographics.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

**-   Minimum completed sessions needed: 10**
    
**-   Total number of participants requested: 20**

### Primary criteria (must-haves)
Note: The following demographic criteria is our goal, but we understand that historically it's been challenging to recruit participants with VA debt.

-   At least 5 of 20 Veterans have been out of service for less than 1 year
    
-   At least 8 of 20 Veterans have a yearly household income of $49,000 or less
    
-   At least 10 of 20 people must identify as Black, Hispanic/Latina/Latinx, Asian, or Native American
    
-   At least 10 of 20 people must identify as having a cognitive consideration
    
-   At least 7 of 20 people must identify as other than male

-   At least 5 of 20 must identify as LGBTQ+
    
-   At least 5 of 20 people are without a degree or professional certificate
    
-   At least 7 of 20 people are under 35
    
-   At least 7 of 20 people are over 55
    
-   At least 4 of 20 non-native English speakers
    
-   At least 3 of 20 people who use a screen reader

#### Secondary criteria (nice-to-haves)

-   At least 4 of 20 people who live in a rural or remote area
    
-   At least 4 of 20 people who live in a major metropolitan area

## Timeline 🗓️


### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**2 pilot sessions were completed on July 10. Please see that info below.** 


- `Pilot participant name:` **Steven Straily**
- `Date and time of pilot session:` **July 10 / 12 PM EST** 
___
- `Pilot participant name:` **Joshua Mills**
- `Date and time of pilot session:` **July 10 / 3 PM EST** 

### Research sessions
- `Planned dates of research:` **[Enter dates 07/21-08/01]**

### Length of sessions
- `Session length` **35-40 minutes**
  
- `Buffer time between sessions:` **60 minutes**
  
- `Maximum Sessions per day:` **[3-4]**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 


- 07/21, Monday, 9:00 AM - 2:00 PM EST
- 07/21, Monday, 6:00 PM - 8:00 PM EST
- 07/22, Tuesday, 9:00 AM - 2:00 PM EST
- 07/22, Tuesday, 3:00 PM - 7:00 PM EST
- 07/23, Wednesday, 9:00 AM - 7:00 PM EST
- 07/24, Thursday, 9:00 AM - 7:00 PM EST
- 07/25, Friday, 9:00 AM - 3:00 PM EST
- 07/28, Monday, 9:00 AM - 7:00 PM EST
- 07/29, Tuesday, 9:00 AM - 7:00 PM EST
- 07/30, Wednesday, 9:00 AM - 2:00 PM EST
- 07/30, Wednesday, 4:30 PM - 7:00 PM EST
- 07/31, Thursday, 9:00 AM - 2:00 PM EST
- 08/01, Friday, 9:00 AM - 6:00 PM EST
  
## Team Roles  🕵️👩‍💻👩‍🔬

>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- Moderator: **Lucas Wright**	
- Research guide writing and task development (usually but not always same as moderator): **Lucas Wright**		
- Participant recruiting & screening:	**Lucas Wright**	
- Project point of contact: **Lucas Wright, Ann-Marie Raposo, Selia Straus**		

- `Note-takers:` **will vary by team member per session**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Luciana Morais (PO)**
- **Nathalie Rayter (PO)**
- **Anita DeWitt**
- **Adam Whitlock**
- **Ann-Marie Raposo**
- **Brandon Marrone**
- **Nida Qamar**
- **Samreen Zarroug**
- **Satish Srinivasan**
- **Selia Straus**
- **Elliot Mackinnon**

## Approvals ✅
- `Reviewed by Shane Strassberg on [07-14-2025]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`