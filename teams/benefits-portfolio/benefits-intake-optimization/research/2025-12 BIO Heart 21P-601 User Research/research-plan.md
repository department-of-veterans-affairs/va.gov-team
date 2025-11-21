# Background

**`What problem is your product trying to solve?`**

Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) is currently a paper-only form used to claim VA benefits that were owed but unpaid at the time of a beneficiary's death. The current process presents several unique challenges:

**About the benefit:**

* "Accrued amounts" are benefits owed to someone who died before VA could pay them  
* Multiple family members may be eligible, but there's a strict priority order  
* Each claimant must file a separate form  
* Different from DIC (Dependency and Indemnity Compensation) or Survivors Pension

**Current process challenges:**

* **Timing is difficult** \- Families must file within 1 year of death while also managing funerals, probate, and grief  
* **Complex eligibility rules** \- Priority order (surviving spouse → children → dependent parents → executor) creates confusion  
* **Document gathering is burdensome** \- Requires death certificates, probate letters, itemized bills, and creditor waivers  
* **Coordination challenges** \- When multiple family members are eligible, they may not know who should file or how to coordinate

**`Where is your product situated on VA.gov? (ex: auth vs. unauth)`**

**This will be an authenticated experience on VA.gov, likely accessible through:**

* My VA dashboard  
* The Pension and Survivor Benefits section  
* Find a VA Form search  
* Potentially linked from DIC/Survivors Pension application flows when relevant

**Note:** Some content (like eligibility information) may be available unauthenticated, but the application itself will require authentication.

**`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`**

**This is a new product.** While Form 21P-601 has existed as a paper form, there's currently no online version. Surviving spouses may be familiar with receiving the paper form in the mail, but have not had the option to complete it digitally.

However, we need to understand:

* How familiar surviving spouses are with the purpose and requirements of this form  
* Whether they've used other VA online forms successfully  
* What their expectations would be for an online version

**`Product Brief`**

Link to product brief URL

This form is part of VA's broader Benefits Intake Optimization effort and relates to the "11 forms by 11/11/2025" digitization goal.

### [**`OCTO-DE Priorities`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)**

Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits.

**Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

* *By creating a clearer, more accessible online option for Form 21P-601, we can improve the experience for surviving spouses who need to verify their marital status.*

**Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

* *An online form will provide immediate confirmation of submission and clearer error handling compared to the current paper process.*

### [**`Veteran Journey`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)**

*`Where does your product fit into the Veteran journey? Are there moments that matter?`*

**This product supports surviving spouses during these life stages:**

* **Dying** \- When a Veteran or beneficiary passes away and families are managing end-of-life affairs  
* **Taking Care of Myself** (for surviving family members) \- Managing VA benefits and financial matters after loss

**Moments that matter:**

* Learning that benefits may be owed to the deceased person  
* Trying to understand what accrued benefits are vs. other survivor benefits  
* Gathering required documentation during funeral and probate processes  
* Coordinating with other family members about who should file  
* Seeking help to understand complex eligibility and priority rules  
* Meeting the 1-year deadline while managing grief and other responsibilities

## **`Research Goals`** 

`What are you trying to learn from this research?`

**Understand how families learn about and navigate Form 21P-601**

* Learn how they discover accrued benefits exist  
* Understand confusion between accrued benefits and DIC/Survivors Pension  
* Identify where they get stuck in the current process  
* Learn about their experience with the 1-year deadline

**Why this matters:** Understanding awareness and discovery will inform our notification strategy and content approach.

**Identify pain points around eligibility, priority order, and documentation**

* Clarify what families understand about who can file and in what order  
* Learn about challenges gathering required documents (death certificates, probate letters, bills, waivers)  
* Understand coordination when multiple family members may be eligible  
* Identify support needed for older filers or those unfamiliar with probate

**Why this matters:** These pain points will directly inform content strategy, form design, and help resources.

**Evaluate the value proposition of an online version**

* Determine whether an online option would be helpful during this difficult time  
* Understand what guidance and clarity would be most valuable  
* Identify how to design a respectful, supportive experience for bereaved families  
* Learn about preferences for follow-up communication during this sensitive time

**Why this matters:** Understanding digital preferences and trust factors will inform our adoption strategy and design decisions. We need to separate "digital comfort" from "digital preference"—someone may be comfortable with technology but still prefer paper for important documents during grief.

### **`Outcome`**

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

**This research will help us:**

1. **Design better content** that clearly explains:  
   * What accrued benefits are and how they differ from DIC/Survivors Pension  
   * Who can file and the priority order among family members  
   * What documents are needed and why  
   * How to handle reimbursement vs. direct payment scenarios  
   * Timeline and deadlines in plain language  
2. **Create better information architecture** by understanding:  
   * What information is most critical upfront  
   * Where families need the most guidance and reassurance  
   * How to structure the form to reduce cognitive load during a difficult time  
   * What conditional flows are needed for different claimant types  
3. **Design a respectful, supportive experience** by:  
   * Using appropriate tone for recently bereaved families  
   * Providing clear, step-by-step guidance without overwhelming  
   * Building in decision support when multiple family members may be eligible  
   * Creating helpful documentation checklists

### **`Research questions`**

**Goal 1: Understand current experience and awareness**

* How do families learn about accrued benefits? Where do they get the form?  
* Do they understand the difference between accrued benefits and DIC/Survivors Pension?  
* If they filed DIC/Survivors Pension, did they know that could also count as a claim for accrued benefits?  
* What makes them come specifically to Form 21P-601?  
* How aware are they of the 1-year deadline?  
* How long did it take them to complete the paper form?  
* Did they keep a copy of their submission? Why or why not?  
* Have they ever missed a deadline for a VA form? What happened?

**Goal 2:  Identify pain points with eligibility and documentation**

* What do they understand about who can file and the priority order?  
* When multiple family members are eligible, how do they coordinate?  
* Which documents do they already have? Which has been hardest to get?  
* How do executors/administrators learn they need to file and what documents they need?  
* For those seeking reimbursement of expenses: How do they get waivers from unpaid creditors? What makes those easy or hard?  
* Do dependent parents understand how to prove dependency from the time of the Veteran's death?  
* Where would they go to find information about eligibility rules?  
* What would happen if they submitted without all required documents?

**Goal 3: Evaluate online version needs**

* Would an online version be helpful during this difficult time? Why or why not?  
* What would help them feel confident they chose the right filing option?  
* Is there anything about the timing, language, or tone in VA's instructions that feels hard to manage right now?  
* How would they prefer VA follow up during this sensitive time?  
* What clarity would help set expectations with relatives about priority order?  
* What would make them trust that an online form was legitimate and secure?  
* Would they prefer to complete the form on a computer, tablet, or phone? Why?  
* If they started the form and couldn't finish it, what would they expect to happen?  
* What confirmation would they want after submitting?

### **`Hypotheses`**

### **1: Confusion between benefit types creates uncertainty**

We believe families may not understand the distinction between accrued benefits, DIC, and Survivors Pension. This confusion could cause them to miss filing for accrued benefits or file incorrectly. They may not know that filing DIC/Survivors Pension can also count as claiming accrued benefits.

**How we'll test:** Ask about their understanding of different benefit types and decision-making process.

### **2: Documentation requirements are a significant barrier**

Gathering probate letters, itemized bills, and creditor waivers is extremely difficult. Some families give up on filing because the documentation burden is too high. Many may not understand why certain documents are required.

**How we'll test:** Explore which documents they already have, which were hardest to obtain, and whether they understand the purpose of each requirement.

### **3: Digital adoption varies based on multiple factors**

We believe digital adoption may vary based on comfort level with technology, trust in online systems, perceived form complexity, and access to assistance—not just age or digital literacy alone.

**How we'll test:**

* Ask about their comfort with technology separately from their preference for digital vs. paper  
* Explore what factors would make them choose one option over the other  
* Understand trust and security concerns specific to online forms  
* Identify what support they would need for digital completion

## **`Methodology`**

**We'll conduct semi-structured interviews combined with usability concept testing.** This approach will allow us to:

1. **Explore their current experience** through open-ended conversation about:  
   * How they learned about accrued benefits  
   * Their understanding of eligibility and requirements  
   * Documentation gathering challenges  
   * Coordination with other family members  
   * Emotional aspects of completing paperwork during grief  
2. **Evaluate online form** by showing:  
   * Examples of how information might be presented  
   * Potential form interactions  
   * Guidance and help text options  
   * Confirmation and next steps

### **`Location`**

Remote

## **`Research materials`**

**For moderated usability tests:**

* \[[Link to conversation guide](https://docs.google.com/document/d/12uHIPVC_hSoqwhT-hw3Ej7Pku5MGCX4omGd3Z1up1Uo/edit?usp=drive_link)\]  
* \[Link to prototype\]

## **`Recruitment`**

**Intended audience:** Family members of deceased beneficiaries who have filed or are currently filing VA Form 21P-601, including surviving spouses, adult children, dependent parents, and executors/administrators.

**Recruitment strategy:** We'll use a lean maximum variation approach with **3 cohorts** based on marital status scenarios to ensure we capture diverse experiences:

* **Cohort 1:** Surviving spouses (3 participants)  
* **Cohort 2:** Veterans' children \- adult children, children under 23 in school, or helpless children (5 participants)  
* **Cohort 3:** Dependent parents of the Veteran (2 participants)

**Note:** Any participant from these cohorts may also serve as executor or administrator of the estate. We would like to  include at least 3 participants who also served in the executor/administrator role.

**Inclusive research strategies:**

* Age diversity: Include both younger and older adult children, and older surviving spouses  
* Experience diversity: Some who successfully filed, some who faced barriers  
* Complexity diversity: Single claimants and situations with multiple eligible family members  
* Digital literacy: Mix of comfort levels with technology  
* Support network diversity: Some who worked with VSOs/county offices, some who navigated independently  
* Geographic diversity across United States

### **`Recruitment criteria`**

**Note to Perigean: Please recruit family members who meet the criteria below. This is sensitive research involving recently bereaved families. Screen for those who are at least 6 months post-loss and ensure they understand the topic before scheduling.**

**Additionally, if they are unsure or unfamiliar with the form number/name, you can explain that it is a form to get reimbursed for payments made for end of life care (outside of a VA facility) and/or funeral/memorial services. They may have completed the 534EZ or 535 for benefits and death compensation. If they are unsure if they have completed form 601, but are familiar with the other forms and their purposes, that is acceptable.** 

* `Dependents and spouses:` 10  
* `Total recruited:` **12**   
* `Ideal completed sessions:` **10**

### **`Primary criteria (must-haves)`**

1. **Experience with Form 21P-601**  
   * Screener: "Have you filed VA Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) within the past 2 years, OR are you currently in the process of filing this form?"  
   * Qualifying response: Yes  
2. **Time since loss**  
   * Screener: "How long ago did the beneficiary pass away?"  
   * Qualifying response: At least 6 months ago (to ensure some processing time)  
3. **Distribution across claimant types**  
   * **Cohort 1 (3 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Surviving spouse  
   * **Cohort 2 (5 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Veteran's child (adult child age 18+, child under 23 in school, or helpless child)  
   * **Cohort 3 (2 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Dependent parent of the Veteran  
4. **Executor/Administrator representation**  
   * Screener: "Were you also serving (or are you currently serving) as executor or administrator of the deceased beneficiary's estate, or acting in that capacity informally?"  
   * Include at least 3 participants across any cohort who answer: Yes  
5. **Mix of experiences**  
   * Screener: "What best describes your experience with Form 21P-601?"  
   * Include mix:  
     * At least 6 who successfully completed and submitted the form  
     * At least 3 who started but faced barriers or are still working on it  
     * At least 3 who worked with a VSO, county veterans office, or other helper  
6. **Age diversity**  
   * At least 5 participants age 55 or older  
   * At least 3 participants under age 55  
   * Spread across cohorts

#### **Secondary criteria (nice-to-haves)**

**These criteria would strengthen our results:**

1. **Multiple eligible family members scenario**  
   * Include at least 2 participants where multiple family members were eligible to file  
   * Screener: "Were there other family members who were also eligible to file for accrued benefits?"  
2. **Documentation complexity**  
   * Include at least 2 who needed probate letters (had to go through estate process)  
   * Include at least 2 who needed to get creditor waivers  
   * Include at least 2 who had difficulty obtaining death certificates or other documents  
3. **Awareness of other benefits**  
   * Include at least 4 who also filed for DIC or Survivors Pension  
   * Screener: "Did you also file for DIC (Dependency and Indemnity Compensation) or Survivors Pension?"  
4. **Digital literacy diversity**  
   * Screener: "How comfortable are you using websites or apps to complete forms online?"  
   * Include mix: At least 3 "Very comfortable," at least 4 "Somewhat comfortable," and at least 2 "Not very comfortable"  
5. **Education level diversity**  
   * Mix across education levels to understand readability needs  
6. **Experience with probate**  
   * Include some participants familiar with probate process  
   * Include some who had never dealt with estates before

## **`Timeline`**

### **Prepare**

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.**

**Send pilot participant email in study Slack channel**

* `Pilot participant name:` **\[Enter name\]**  
* `Date and time of pilot session:` **\[Enter time\]**

### **Research sessions**

* **`Planned dates of research:` Dec 8 \- December 12, 2025** 

  ### **Length of sessions**

* **`Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` 60 minutes**

* **`Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` 30 minutes**

* **`Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` 2**

### **`Availability`**

**When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time.**

**Place time slots between `hash marks` when in edit mode.**

**`Week 1:`**

* **`Monday, December 8: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Tuesday, December 9: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Wednesday, December 10: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Thursday, December 11: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Friday, December 12: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**

## **Team Roles** 

**Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.**

* **`Moderator:` \[Andrea Chappelear\]**

* **`Research guide writing and task development (usually but not always same as moderator):` \[Andrea Chappelear\]**

* **`Participant recruiting & screening:` \[Perigean\]**

* **`Project point of contact:` \[Enter full name\]**

* **`Accessibility specialist (for sessions where support for assistive technology may be needed):` \[Andrea Chappelear\]**

* **`Note-takers:` \[A6\]**

  ## **Approvals ✅**

* **`Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`**  
* **`Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`**

