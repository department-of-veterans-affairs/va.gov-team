# Research Plan for Benefits and Claims Dependent Experience Team, Dependent Verification, September 2023
*Questions about how to set up your research study? Reach out in the #research-ops Slack channel.* 

## Background

**What problem is your product trying to solve?**

The VA mails VA Form 21-0538, a mandatory paper form for dependent verification, to Veterans with dependents only every eight years. The burden is on the Veteran to notify the VA of any changes in dependent status in between these (infrequent!) notifications. This results in significant over and underpayments, costing the VA ~ $250 million per year and burdening Veterans with debt.

**Where is your product situated on VA.gov? (ex: auth vs. unauth)**

Our MVP is an email notification that would be sent annually to Veterans with dependents on file with VA. The email would include links to VA.gov for the Veteran to log in and view, add, or remove dependents.

**What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?**

The notification would be new, but the other tools already exist. Veterans would have varying levels of familiarity based on their past dependents and the number of changes they’ve had to report.


### OCTO Priorities 
Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) does this research support? Work with your VA lead and product manager as needed.

6. Enhance Veterans’ personalized online experience

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter? 

- Getting out: Engaging VA to access benefits and services
- Putting down roots: Taking care of my family
- Retiring: Finding additional sources of income


## Research Goals and Questions	
What are you trying to learn from this research? 

**Learn how Veterans understand dependent benefits and risks as they relate to compensation, and how they navigate the process today (Generative sessions)**

- Do Veterans know who qualifies as a dependent?
- Do Veterans understand that dependents can impact compensation benefits, not just be eligible for other benefits (education, etc.)?
- Do Veterans understand the risk of debt / overpayment?
- For those newly qualified because of the PACT Act, how do they know their dependents might now be eligible?
- What would Veterans like to know about dependent benefits? (e.g. how much will it increase their compensation, how much debt might they accrue?)
- How do Veterans find their dependent information currently? Where do they look, who do they go to for help?
- Where would Veterans expect to manage their dependent info? On their Profile?

**Evaluate the perceived trustworthiness and effectiveness of our proposed notification (Evaluative sessions)**

- What notification types should we start with to test our approach? Eg prioritize a cohort most at risk of overpayments, prioritize a cohort who will be most responsive, etc?
- Will Veterans quickly determine the purpose of notification?
- Will they follow/complete the primary CTA?
- Are Veterans confident that the notification is coming from VA and is safe to engage with (not spam)?
- How could we give them more confidence in taking action (e.g. directing them to sign in without needing to click on a link)
- How do their preconceptions about VA play into all of the above? (e.g. they might believe the notification is from VA, but not trust VA generally)
- What happens after they take action? Does the first landing page jive with the email content? Do they know what to do next?
- Is there a need for a “one stop shop” where they can view and add/remove dependents all in the same flow?
- Once on va.gov, are Veterans confident in their data security? 

**Learn Veterans’ device and notification preferences (Generative and evaluative sessions)**

- What device would they use for various tasks (checking email, viewing dependents, adding or removing a dependent)?
- Text vs email vs mail — where do they expect to receive info, what would they prefer, what do they actually read?
- What is the right frequency and time of year for notifications (e.g. when school begins, when they’re doing their taxes, etc.)
- What are opportunities for proactive reminders (eg. when a child reaches a certain age)
- What information would Veterans want to receive in their notifications?
- What instances would Veterans prefer a general notification, vs something tailored to their situation? 
- Which would be more effective at getting folks to take action? 
- Where might VA not have accurate enough information to make tailored notifications effective?


### Outcome
Evaluative findings will have direct implications for the design and content of our MVP email notification that is set to launch in Q1. More foundational insights will inform future enhancements (such as on-site notifications, changes to the Profile, View Dependents, and 686c pages, or additional notifications for other audiences) and help us prioritize where there is the greatest need and potential for impact.

Our topline metric is reducing the average amount of debt accrued by Veterans, and reducing the $250 million that overpayments cost the VA every year. This would also reduce the burden on VA employees in the field who have to audit Veterans and manage debt. 

### Hypothesis
**Veterans will have some knowledge of the benefits and risks of claiming dependents through the VA but they may not be aware of the extent to which they can be liable for paying back benefit overpayments.**

- Veterans also may not be aware that parents, spouses, and children over 18 enrolled in school full time can be eligible as dependents. 
- The majority of Veterans with dependents already on record will be familiar with the process of adding and removing dependents, though fewer may be familiar with the View Dependents page. 
- We know from the Profile team’s research that dependents are a top search term for Profile search and that VA.gov users will use links in the Profile section when provided. We hypothesize that a majority of participants visiting VA.gov on mobile will use the Profile personalized dropdown menu to navigate to the dependents section.

**The majority of Veterans who need to make updates to their dependents will follow the call to action in the dependents verification notification.**

- They will be able to recognize their own situation in the list of examples provided, and understand if they need to update their dependents. 
- They’ll do this despite some distrust of the VA and email links in general because the risk of debt mentioned in the notification messaging will be motivating enough to outweigh security concerns. 

**The majority of Veterans will expect email notifications. A significant cohort who previously only used paper forms, phone, or VSO offices will expect mail notifications, and not have an account on VA.gov. A minority will prefer text notifications.**

- Some may want the option to receive notifications via the app.
- They would appreciate customized reminders at relevant moments (e.g., when a child reaches a certain age). Some moments that require dependents to be updated will be more sensitive than others (e.g., divorce or death), and may be inappropriate times to send reminders; in these cases, Veterans will want messaging to be more general and less targeted to their situation, and come after some time has passed.

## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

We will use two distinct interview guides:

- A semi-structured interview focused on learning how the Veteran understands dependent benefits overall.
- A usability test focused on evaluating perceived trustworthiness and effectiveness of proposed notification MVP.

We will use one interview guide per interview and alternate interviews so that we can gather evaluative and generative information in parallel. 

The semi-structured interview guide will focus on questions around the participant's knowledge of dependent benefits, prior experiences with dependent benefits, and expectations around wayfinding, navigation, and notification. This will inform future improvements and help us prioritize future improvements by need and impact. We'll recruit for participants with current dependents claimed on pension and/or benefits and include screener questions aimed at representing a maximum of cohorts of dependent types and experience. 

The usability test guide will focus on showing participants a mobile-first prototype of the email notification MVP that includes general messaging encouraging readers to review current dependents. We'll ask questions to uncover particiapnts' comprehension of the message's intent, including who it's for, what it's warning against, and what it's asking of them as well as their expectations of how and where to take action and whether they would take action in response to the notification. We'll recruit for participants with current dependents claimed on pension and/or benefits and include screener questions aimed at representing a maximum of cohorts of dependent types and experience with a focus on those cohorts most impacted by benefit overpayments: Veterans who have claimed spouses, minor children, and school-aged children. 

The dual guide approach will also allow us to be flexible and responsive to the participant if an individual session lends itself better to one or the other (for example, if a Veteran is having technical difficulties viewing the prototype, we can pivot from the evaluative to the generative guide).

All interviews will be conducted online on mobile or desktop devices via Zoom. Usability test sessions will ask participants to review a mobile-first prototype based in sketch. 


### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

If remote, include your preferred video conferencing software. Choice of: Zoom, GoTo Meeting; WebEx.

If in person, include:
- Location
- Point of contact
- Equipment used for research

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated interviews:
- [Link to conversation guide](url goes here) 

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

If recruiting outside of Perigean’s participant database:
- [Link to recruitment flyer](url goes here)
	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

**Secondary criteria (nice-to-haves)**
What criteria would strengthen your results? 

## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research:

### Length of sessions
* Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 
* Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	
- Research guide writing and task development (usually but not always same as moderator):	
- Participant recruiting & screening:	
- Project point of contact:	
- Participant(s) for pilot test:
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Note-takers:	
- Observers:	
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
