# Research Plan for Dependent Management Team, Picklist in Dependent Verification, August 2025

> [!NOTE] > _Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel._

## Background 🏗️

<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Veterans can select known dependents from a picklist when verifying or removing dependents, rather than manually re-entering names. This reduces input errors, increases confidence, and enables more reliable downstream automation.

The associated problems:

- Veterans are required to manually type in the names of dependents to remove or verify, even though these individuals are already on record with VA.
- Manual entry increases cognitive load for Veterans and opens the door to small but critical typos (e.g. “John A. Smith” vs “Jon Smith”), which can trigger downstream claim routing errors or prevent automation.
- Both usability and back-end reliability are being compromised by redundant and error-prone data entry.
- Veterans who need to reinstate an inactive dependent (for example, a spouse removed after divorce but now re-married to the Veteran, or a child who aged out at 18 and is being added back via Form 674 for school attendance) must currently re-enter all personal details from scratch; this adds friction and creates new opportunities for data mismatches.

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The study will cover one of our products. Dependency Verification, which begins on the "Your VA dependents" page; this page can only be accessed when the Veteran has signed into VA.gov.

There may be insights we learn in this study that apply to using the picklist in our other products, if we move forward with those iterations. Those products are:

- Add and/or Remove Dependents, which begins on the form's introduction page; the form can only be accessed when the Veteran has signed into VA.gov. Combined with Request for Approval of School Attendance.
- Request for Approval of School Attendance, which begins on the form's introduction page; the form can only be accessed when the Veteran has signed into VA.gov. Add and/or Remove Dependents.

`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

The tool is new, but will be launched soon in its MVP form (a Collaboration Cycle Staging Review happens on Aug. 15, 2025). The addition of the picklist in the Dependent Verification form is considered version two of the product.

`Product Brief`

[Initiative Brief: Dependent Picklist Component](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/Initiative%20Brief%3A%20Dependent%20Picklist%20Component.md).

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>

- `Starting Up`
- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`

Veterans could interact with our products at many points in their journey but it is especially relevant to the `Putting Down Roots`stage.

</details>

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅

`What are you trying to learn from this research?`

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` Better understand how our end users understand and interact with the picklist component.

- Observe how Veterans react to being asked about death of their dependents, how they navigate focusing on one dependent at a time.
- Observe how Veterans react to being asked about death for all dependents at once, how they navigate form.

`2.` Better understand how our end users want to take next steps after completing the Dependent Verification form with the picklist, which requires them to fill out additional forms from VA.

- Observe how they react about completing additional forms, and understand how they want to keep track of next steps they need to take.

### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

We anticipate that this research will:

- Deepen understanding of how Veterans understand and interact with the picklist component, and where friction with using the component may exist.
- Validate an approach to how we ask about death in the form.
- Create design iterations and possible updates to how we approach asking Veterans to complete more forms/tasks once they've finished their current task.

We anticipate that further iteration, based on findings in this research will lead to these outcomes:

- Veterans can easily select existing dependents from a picklist and proceed with confidence that the information matches VA records.
- Veterans experience less frustration and avoid redundant data entry when removing or verifying dependents.
- Claims and form submissions that rely on dependent identification can be reliably processed without manual offramping.
- Decreased rate of claim errors due to name mismatches or unrecognized dependents.

---

### Research questions

> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

**_Consider bucketing research questions under research goals and think about:_**
`What will I do with what I learn from this question?`

`Does this question serve the goals of my study?`

**`1.`Goal 1: Better understand how our end users understand and interact with the picklist component.**

Some key questions:

- What are your initial thoughts when you read this question [about death]? If you were designing this form, what word or phrase would you use to get this information?
- Would you want to navigate through your dependents in another way? How would you want to do that?

**`2.`Goal 2: Better understand how our end users want to take next steps after completing the Dependent Verification form with the picklist, which requires them to fill out additional forms from VA.**

Some key questions:

- How would you want VA to help you remember to fill out these extra forms?
- When would you want to fill out those forms?

> [!TIP]
> Enter more questions as needed

### Hypotheses

> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!

**Think through these prompts to develop strong hypotheses:**
`What do you intend to learn and measure from this study?`

`What do you already know about this problem space?`

`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`

`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

- Veterans will prefer being asked about the death of a dependent all at once in each dependent card.
- Veterans will prefer having access to all their dependents at once while filling out the form.
- Veterans will want a follow up email or text message to notify them about what other forms they have to fill out.
- Veterans will not want to fill out the additional forms right away, immediately following finishing the Dependent Verification form with the picklist.

---

## Methodology 🛠️

**_Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design._**

<details><summary>Examples of common research methods include</summary> 
	
- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design` 
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

Usability testing - appropriate for evaluative research

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

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [x] **Remote**
- [ ] **In-person**

> [!NOTE]
> If in-person, include:

- `Location:` **[Enter text]**
- `Point of contact:` **[Enter text]**
- `Equipment used for research:` **[Enter text]**

## Research materials 📔

> [!NOTE] > **Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

**For moderated interviews:**

- [Link to conversation guide](url goes here)

**For moderated usability tests:**

- [Link to conversation guide](url goes here): To come soon.
- [Link to prototype 1](url goes here): To come soon.
- [Link to prototype 2](url goes here): To come soon.

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**

- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

**If recruiting outside of Perigean’s participant database:**

- [Link to recruitment flyer](url goes here)

## Recruitment 🎯

_OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers._

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources:
>
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach

_Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?_

- Perigean **CANNOT** recruit VA employees or VSOs. Work with your VA lead to recruit these groups.
- Perigean can also support remote, [unmoderated studies](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements.
- Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number _(e.g. for 10 ideal completed sessions, request 15 total participants)_

Using Perigean to recruit, we would like to schedule: 24 eligible Veteran participants in two groups in order to achieve 6-8 completed sessions for each user group. Each group will provide feedback on a different prototype.

- `Veterans:` **24**
- `Caregivers:` **[n]**
- `Dependents:` **[n]**
- `Total:` **24**
- `Ideal completed sessions:` **12 to 16, 6 to 8 for each group**

### Primary criteria (must-haves)

_What demographics, experience, and scenarios do you need participants to meet to effectively run your study?_

- `[Place primary criteria here between hash marks when in edit mode]`
- `Do you receive VA disability compensation?`[answer should be yes to qualify]
- `Do you receive additional VA disability compensation for one or more of your dependents?`[answer should be yes to qualify]

#### Secondary criteria (nice-to-haves)

_What criteria would strengthen your results?_

- `[Place secondary criteria here between hash marks when in edit mode]`
- `Since we're using a prototype, we can't talk to Veterans who use assistive technology.`

## Timeline 🗓️

> [!NOTE] > **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare

_When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html)._

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.**

> [!NOTE] > **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **TBD**

### Research sessions

- `Planned dates of research:` **09/02-09/16**

### Length of sessions

- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **1 hour**
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **30 minutes**
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **3**

### Availability

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**.

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

> [!TIP]
> Please request enough dates and at **_least double the amount of time slots for the number of requested participants_**. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** **_12 time slots for 6 participants_**). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`

## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE] > **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Megan Graham, David Kennedy, Kristin Ouellette Muskat**
- `Research guide writing and task development (usually but not always same as moderator):` **Megan Graham**
- `Participant recruiting & screening:` **Megan Graham**
- `Project point of contact:` **Megan Graham**
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **N/A**
- `Note-takers:` **Gretchen Maciolek, Fiorella Geedi**
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅

- `Reviewed by Ben Delphine on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
