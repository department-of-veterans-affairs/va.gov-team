# Research Plan for Public Websites, Income Limits App, June 2022

## Background
An [existing application](https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits) allows Veterans, their caregivers, family members, and others to look up the income limits for VA National medical benefits and prescriptions based on location and number of dependents. 

However, there are multiple issues with the existing application, which lacks:
- Reliably accurate data
- Plain language
- Clearly defined use cases, usability design, and testing to ensure that it is aligned to Veteran needs and is intuitive for Veterans to use

How might we rebuild and modernize this application using clearly defined Veteran use cases to better align with Veterans' needs?

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/product-outline.md)

### OCTO Objectives 

This research aligns with the following [OCTO Objectives]([url](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme))

North Stars:
1. Increase the usage and throughput of VA services
2. Decrease the time Veterans spend waiting for an outcome
3. Increase the quality and reliability of VA services

Goals:

5. Veterans and their families can find a single, authoritative source of information
7. Veterans and their families trust the security, accuracy, and relevancy of VA.gov

Increase:
- Usage of digital, self-service tools
- Percent of applications submitted online (maybe, if we can help Veterans move from this tool to online application)
- Benefit use and enrollment
- Veteran satisfaction with VA.gov

Decrease:
- Call center volume, wait time, and time to resolution

### Veteran Journey
There are many potential touchpoints between the Veteran and this application throughout the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):
1. Getting out (Engaging VA to access benefits and services)
2. Starting up (Attending to health needs, Finding something to do/Balancing finances, Finding a place to live)
3. Putting down roots (Starting, growing or maintaining my family)
4. Retiring (Taking care of my health)
5. Aging (Not listed in journey, but dealing with death of spouse)

## Research Goals	
What are Veteran use cases for determining eligibility for VA National medical benefits and prescriptions?

### Outcome
Learnings will inform redesign of the application, taking into account context surrounding Veteran use cases to make the application experience as intuitive and seamless as possible.

### Research questions
- What events drive a Veteran to consider their eligibility for health care benefits and prescriptions?
- How do Veterans first determine eligibility for health care benefits and prescriptions?
- Do Veterans think about/consider their eligibility for health care benefits and prescriptions? 
- If they do, when and how do they consider their eligibility?
- What problems do Veterans encounter when trying to determine eligibility?
- What do Veterans need to do after they understand their eligibility?

### Hypothesis
What do you already know about this problem space? 
- I know nothing/very little about this problem space.
- As of 2016, about 60% of Veterans are eligible for VA care and fewer than half of those eligible use VA health benefits. [Source.](https://www.rand.org/pubs/periodicals/health-quarterly/issues/v6/n1/12.html) 

What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
- Veterans will likely not know the current application exists, and the VA.gov may not be Veterans' go-to source of information around benefit eligibility.
- Veterans with benefits will have worked with someone in person or over the phone to get help determining eligibility and applying for benefits.
- Veterans may not be aware of when or how their eligibility for benefits was determined.

## Method	
Semi-structured interviews to guide Veteran through a chronological re-telling of experience(s) determining benefit eligibility

### Location
Interviews will take place remotely to ensure participation by Veterans from a diverse range of geographical locations. Zoom is preferred video conferencing software.

### Research materials
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/income-limits-app/research/conversation-guide.md)
	
## Recruitment	
### Recruitment approach
Intended audience is Veterans and recruitment is through Perigean. 

### Recruitment criteria
18 total Veterans  (within 3 cohorts of 6 participants each) to be recruited as participants for this study.

**Primary criteria (must-haves)**

Cohort 1: have recently *(within the past 3 months)* applied for VA health care benefits (6 participants)

Cohort 2: are actively considering applying for VA health care benefits (6 participants)

Cohort 2a: are interested in learning more about VA health care benefits (invite if 6 participants of cohort 2 are unsourceable)

Cohort 3: have recently *(within the past 3 months)* experienced a change that may result in a change of eligibility (10-10 EZ)

For all cohorts, seeking a diversity of responses to question: How often do you go online to access VA benefits and services?
- At least 20% participants: Never
- At least 20% participants: Once per year or less, or once per quarter
- At least 20% participants: Once per month, A few times per month, Once a week, A few times per week, or About once a day

For cohort 1, seeking a diversity of responses to question: How did you recently apply for VA health care benefits?
- At least 1 participants: On my own, on paper
- At least 2 participants: On my own, online
- At least 1 participants: On my own, in person
- At least 1 participants: With the help of a VSO or With the help of a transition service officer at Department of Defense
- At least 1 participants: With the help of a fellow veteran
- At least 1 participants: Other

For cohort 1, seeking a response of "yes" to question: Are you currently receiving VA health care benefits?

For cohort 1, seeking a response of "within the past month" OR "within the past 3 months" to question: Which of the following best describes when you (most recently) applied for VA health care benefits?
- Within the past month
- Within the past 3 months
- Within the past 6 months
- Within the past year
- Within the past 5 years
- Within the past 10 years
- More than 10 years ago

For cohort 2, seeking a response of "no" to question: Are you currently receiving VA health care benefits?

For cohort 2, seeking a response of "health care benefits" to question: Which of the following benefits are you *currently in the process of* applying to?
- Health care benefits
- Education & career services, such as GI Bill
- Disability benefits, such as claims & appeals
- Housing benefits, such as adaptive housing, home loans, homelessness services
- Pension benefits
- Life insurance
- Memorial benefits
- Other
- I don't know

For cohort 2a, seeking a response of "health care benefits" to question: Which of the following benefits are you *interested in* learning more about?
- Health care benefits
- Education & career services, such as GI Bill
- Disability benefits, such as claims & appeals
- Housing benefits, such as adaptive housing, home loans, homelessness services
- Pension benefits
- Life insurance
- Memorial benefits
- Other
- I don't know

For cohort 3, seeking a response of one or more answers "a change in..." question: Since receiving VA health care benefits, have you experienced any of the following?
- A change in number of dependents
- A change in annual income
- A change in geographic area
- Other: _________________ (??)
- None of these apply

**Secondary criteria (nice-to-haves)**

[Maximum variation sampling (MVS)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md)
- Geographic distribution: 25% east coast, 25% midwest, 25% south, 25% west coast
- 30% people of color (especially Native)
- 25% in a rural area
- 25% without a degree
- 25% women
- 10% LGBTQ

## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research: ________
* No more than 3 sessions/day

### Length of sessions
* Session length: up to 1 hour
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 

### Moderator Availability
7AM - 8PM ET, M-F
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Florence McCafferty, florence.mccafferty@agile6.com, (315) 751-2796	
- Research guide writing and task development: Florence McCafferty	
- Participant recruiting & screening: Perigean	
- Project point of contact: Wes Rowe, wesley.rowe@agile6.com	
- Participant(s) for pilot test: TBD	
- Note-takers: Perigean	
- Observers: Dave Conlon david.conlon@va.gov, Wes Rowe wesley.rowe@agile6.com

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
