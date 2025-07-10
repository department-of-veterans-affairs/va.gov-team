
	# Research Plan for Dependent Management Team, Dependent Verification update, July 2025

## Background 🏗️
<summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Currently, the VA overpays $250 million in dependent benefits each year. If a Veteran is overpaid a benefit, they are required to re-pay the overpayment back to the VA. Updating dependency information outside the 8-year requirement is voluntary, and the burden of remembering to make dependency updates falls on the Veteran. Verifying dependents through a paper form is also burdensome for many Veterans. These problems result in a very low-quality feedback loop for maintaining an accurate list of what dependents are intended to be on the award. Our goal is to decrease the over- and under-payment amount for dependent-related benefits by allowing Veterans to quickly and easily verify their dependents on VA.gov.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**The Dependent Verification flow that we are testing begins on the "Your VA dependents" page; this page can only be accessed when the Veteran has signed into VA.gov.**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**This flow is an update to existing functionality. Updates include:**
- **Enhancements to the view dependents page that will allow Veterans to see additional info for each dependent**
- **Adding a question to the view dependents page that asks Veterans if their dependent information has changed. VA.gov will automatically generate a 21-0538 form, ask the Veteran to review the info, sign a statement of truth, and then submit the 21-0538 form. If necessary, they will also be directed to fill out the add/remove dependents form on VA.gov (21-686c/674)**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<summary>Which OCTO priorities does this research support?</summary>

**This update will include improvements to the UI and backend functionality.**

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result 2:** We have reduced the total error rates in our platforms by 50% compared to Q4 2024, towards a goal less than 1% per endpoint.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<summary>Where does your product fit into the Veteran journey? Are there moments that matter?</summary>
	
**Veterans could verify their dependents at many points in their journey but it is especially relevant to the `Putting Down Roots`stage. Dependents Verification involves the intersection of a Veteran's family and their VA benefits and this stage contains the "Starting, growing, or maintaining my family" and the "Engaging VA to access benefits and services" moments that matter.**


## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **What type of content on the "Your VA dependents" page, especially in the alert box, is most effective in helping Veterans understand and complete the dependents verification process?**

`2.` **How is it most natural for Veterans to respond after reviewing the current state of the dependents on their benefits?**
- **By indicating Yes they need to make changes or No they do not need to make changes**
- **OR by indicating Yes the current information is correct or No the current information is not correct**

`3.` **Do Veterans understand that if they need to make changes to the dependents on their VA benefits they will need to fill out an additional form after completing this flow?** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**The findings will be used to update the content in the dependents verification flow to help Veterans understand and complete the process. Verifying dependents decreases the amount of over- and under-payments for dependent-related benefits** 

---

### Research questions

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question? Does this question serve the goals of my study?`

**Goal 1: What type of content on the "Your VA dependents" page, especially in the alert box, is most effective in helping Veterans understand and complete the dependents verification process?**
**(Some participants will be shown Design A and other participants will be shown Design B and their responses will be compared)**  

**`1.`After looking at this page what would you do next, if anything?**

**`2.`Is there any additional information you would like to see about your dependents to help you take the next step? If so, what?**

**Goal 2: What type of content on the "Your VA dependents" page, especially in the alert box, is most effective in helping Veterans understand and complete the dependents verification process?**
**(Some participants will be shown Design A and other participants will be shown Design B and their responses will be compared)**  

**`1.`If you see that a change needs to be made when reviewing your dependents, what would you do?**  

**Goal 3: Do Veterans understand that if they need to make changes to the dependents on their VA benefits they will need to fill out an additional form after completing this flow?** 
**(Some participants will be shown Design A and other participants will be shown Design B and their responses will be compared)**  

**`4.`[Enter Q4]**

**`5.`[Enter Q5]**


### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**Content that emphasizes the risk of debt will make Veteran participants more likely to complete the process.**

**Veterans are most likely to abandon the task in the transition between the dependent verification flow and the additional forms.** 

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**Unmoderated usability testing with additional survey questions**

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*


### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
- Perigean **CANNOT** recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, [unmoderated studies](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements. 
- Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **46**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **46**
- `Ideal completed sessions:` **30**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `Do you receive VA disability compensation?`[answer should be yes to qualify]
- `Do you receive additional VA disability compensation for one or more of your dependents?`[answer should be yes to qualify]

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `23 Veterans between the ages of 55-64+`
- `23 Veterans with a cognitive disability`
- `23 Veterans who are mobile users`
- `12 Veterans who live in rural areas`
- `12 Veterans who have no degree`
- `10 Veterans with "Other than honorable" discharge`
- `8 Veterans of immigrant origin`
- `8 Veterans who are women`
- `1 Veteran who is an expat (living abroad)`

- `7 Veterans who are Black or African American`
- `6 Veterans who are Hispanic, Latino, or Spanish origin`
- `2 Veterans who are Biracial`
- `2 Veterans who are Asian`
- `1 Veteran who is Native, American Indian or Alaska Native`
		
- `1 Veteran who is gay, lesbian, or bisexual`
- `1 Veteran who is transgender`
- `1 Veteran who is nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman`

- `Unfortunately our prototype does is not accessible so we cannot include assistive tech users in this study`
  
## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions

**We estimate that the survey will take xx minutes to complete.**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

**This section is not applicable because the research is unmoderated.**
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **N/A**	
- `Research guide writing and task development (usually but not always same as moderator):` **Megan Graham**		
- `Participant recruiting & screening:`	**Megan Graham**	
- `Project point of contact:` **Megan Graham**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**	
- `Note-takers:` **N/A**	
- `Observers: **N/A**


## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`

