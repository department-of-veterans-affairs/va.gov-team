# Research Plan for the Employee Experience Team, Maximum CFIs Refinements, Dec 26th, 2023

**Background**

The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be “confirmed and continued” by a claims processor. We’d like to reduce the amount of time claims processors spend on these contentions by reducing the number of claims for increase Veterans file in this situation.

This research will test refinements to the design that has been shaped with two prior rounds of qualitative testing plus an ongoing A/B test in production. The prototypes we’ll test in this round will focus on the Rated Disabilities screen within the online 526 application, where our current A/B intervention exists.

The designs in this round will focus on:
- Strengthening the visibility and persuasiveness of the max rating notification.
- Making educational content available to help Veterans understand their max rating situation and options.

[Product Brief](https://docs.google.com/document/d/11-L6dbZ7Hah-e2PL3-nfcN5c5T8uAbn3EumLikrEhV4/edit#heading=h.t9sdhyubj1c1)

**OCTO Priorities and Veteran Journey**

This work supports [OCTO Priority 7:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) Fast-track disability claims, starting with PACT Act claims, and it fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in the Living Civilian Life phase. It’s related to the Moment That Matters called “Managing primary care and chronic health issues.” 

## Research Goals

- Assess usability of the refined design, especially for people who use assistive technology
- Determine which of two different designs is more effective for presenting education content around maximum standard ratings. 
- Assess how well the explanatory content works for Veterans.

**Outcome**

Accessibility assessment: 
- Identify needed changes

Explanatory content:
- Decide how to display the explanatory content
- Identify shortcomings in the content

**Research questions**

**Goal 1:** Assess usability of the refined design, especially for people who use assistive technology
- Are users able to successfully complete the basic task of selecting checkboxes and then selecting Continue?
- Does the placement of the link/accordion hinder the basic task?
- Do people using AT have any other difficulties on the screens?

**Goal 2:** Determine which of two different designs is more effective for presenting education content around maximum standard ratings.
- Do people notice the link or accordion?
- Do they click on it without prompting?
- With the accordion, do they notice both headings? What do they think about the two separate accordions?
- Do they know how to expand the accordion?
- With the text link, what happens when they open the new screen with explanatory content?
- Is it disorienting?
- Can they figure out how to get back to the application?
- Do they hesitate to open the link?
- Do they understand what the icon means?
- Which design do they prefer, and why?

**Goal 3:** Assess how well the explanatory content works for Veterans.
- Is the content clear and informative? 
- How does the content influence their thinking about their chance of getting an increase?
- Does it help Veterans make a more confident decision about whether to file a CFI for Tinnitus?
- Does the content help them feel that the VA is on their side?

## Methodology

We will use a scenario-based test format to assess the usability of two different prototypes. The scenarios will contain short sequences of a few screens, and they’ll be based on existing screens in the online 526 application or within the authenticated VA.gov experience. Because the prototypes are built in HTML (using Codepen), they’ll be available in both small-screen (mobile phone) and large-screen formats. We’ll rotate the order of the two different prototypes to avoid biasing the results.

## Location

The sessions will be conducted remotely via Zoom.

## Research materials

[Research Plan in Sharepoint](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20business/Veteran%20Research/2024-01%20Max%20CFI%20Refinements/Max%20CFI%20Refinement%20-%20Veteran%20Research%20Plan.docx?d=w4281650b3c924fa0bf7036fbfee5f6a3&csf=1&web=1&e=yhdfEv)

[Conversation guide](https://dvagov.sharepoint.com/:w:/r/sites/vaabdvro/Shared%20Documents/0%20-%20Benefits%20Portfolio%20-%20business/Veteran%20Research/2024-01%20Max%20CFI%20Refinements/Max%20CFI%20Refinement%20-%20Conversation%20Guide.docx?d=wac1a5aa234c9418e99212b999d40e986&csf=1&web=1&e=cNhJhI)

[Prototype](https://codepen.io/collection/jbEoqB/e3b74d3f3ffd3ea3ac1ef22a3d03b075)

## Recruitment

**Recruitment approach**

We are looking for 6 Veterans to participate in this study, 3 of whom use assistive technology and 3 who do not. We’ll target other demographic criteria (education, cognitive disability, and gender) as primary sample distribution criteria, with age and race/ethnicity as a secondary sample distribution criteria.

**Recruitment criteria**

List the total number and type (Veterans, caregivers, etc.) of participants for this study: 8 Veterans (includes a 25% over-recruit)

**Primary criteria (must-haves)**

What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 
- All participants have used VA.gov to file a claim (disability, pension, or other)
- All participants are receiving disability compensation from the VA
- 3 Veterans who use assistive technology (AT) such as screen readers (AT/reader) or magnifiers (AT/magnifier), of whom at least two use a screen reader.
- At least 1 but no more than 3 Veterans who identify as having a cognitive disability.
- At least 2 Veterans without a college degree
- No doctors or lawyers

**Secondary criteria (nice-to-haves)**

What criteria would strengthen your results? 
- We’d like a mix of genders, age, and race/ethnicity. 
- At least 1 but no more than 4 Veterans who identify as a gender other than male. 
- At least 1 but no more than 4 Veterans over 55 years old. 
- At least 1 Veteran under 35 years old.
- At least 2 Veterans who are not White/Caucasian.

**Screener questions**

- Have you ever used the VA.gov website to file a claim for disability, pension, or life insurance?
  - Yes/No (Exclude anyone who answers “No”)

- Are you receiving disability compensation from the VA? If so, what is your overall disability rating?
  - I am not receiving any disability compensation from the VA (Exclude)
  - I have a service-connected disability, and my overall rating is 0% (Exclude)
  - I have a service-connected disability, and my overall rating is more than between 1% and 100%
  - I’m not sure (Exclude)

- Do you need to use screen reader technology to use the internet, such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer?
  - Yes/No (“Yes” qualifies as AT user)

- We want to make sure our website works for people with various levels of experience with screen readers. Please rate your experience level using a screen reader:
  -Beginner, Intermediate, Advanced

- Are you willing to join the Zoom session using this assistive technology?
  - Yes/No ("Yes" qualifies for AT user)

- Please list the name of the screen reader technology you will use during the session.
  - Text box (If they previously qualified for AT user but leave this blank, exclude or reach out to discuss)

- Do you have a college degree?
  - Yes/No (At least 2 who answer “No”)

- Are you trained as a lawyer (JD) or medical doctor (MD)?
  - Yes/No (exclude anyone who answers “Yes”)

- Have you been diagnosed (formally or informally) with a cognitive disability? This includes any intellectual disability, brain injury, learning disability such as dyslexia, ADHD, Autism Spectrum Disorder, severe persistent mental illness, stroke, Alzheimer’s disease or dementias, or others not listed. (We ask this question because we want to make sure that our tools work for people who have challenges like these.)
  - Yes/No/I prefer not to answer

- Based on your response to the previous question, how would you rate the severity of your cognitive disability? (Recruit all answers)
  - Mild - Symptoms have a limited effect on daily life
  - Moderate – Symptoms make daily life much more difficult than my peers.
  - Severe - Symptoms make daily life extremely difficult and I require assistance.
  - I prefer not to answer
  - Not applicable

## Timeline

Fri. 1/12		Complete prototype, recruiting criteria, and conversation guide

Fri. 1/12   Submit Midpoint Review request - Scheduled for Friday, Jan 19th at 11:30am EST.

Fri. 1/12		Submit research review ticket to Shane

Fri. 1/12		Recruiting request to Perigean

Wed. 1/24		Pilot test

Mon. 1/29 - Fri. 2/2	Conduct testing 

## Prepare

When will the thing you are testing be finalized? 

Jan. 12, 2024

**Pilot session information** 

* Pilot participant name: Yang Yang
* Pilot participant email: Yangyang@navapbc.com
* Date and time of pilot session: Wednesday, January 24th at 3:30pm EST

**Length of sessions**

* Session length: <1 hour
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 3

**Availability**

**Monday, Jan 29**
4pm - 5pm ET

**Tuesday, Jan 30**
9am - 2:30pm ET
4pm - 5pm ET

**Wednesday, Jan 31**
9am - 5pm ET

**Thursday, Feb 1**
9am - 1:30pm ET

**Friday, Feb 2**
9am - 2pm ET
3pm - 5pm ET


## Team Roles

Below is the list of the people serving in each role and their contact information:

**Moderator:** Christine Steiffer, Kim Ladin, or Carolyn Dew

**Research guide writing and task development:** Kim Ladin, Christine Steiffer

**Participant recruiting & screening:** Perigean

**Project point of contact:** Christine Steiffer

**Participant(s) for pilot test:** Yang Yang

**Accessibility specialist (for sessions where support for assistive technology may be needed):** CAIA

**Note-takers:** Christine Steiffer, Kim Ladin, Carolyn Dew, Amy Lai

**Observers:** CAIA team members, Christine Steiffer, Kim Ladin, Carolyn Dew, Amy Lai, Shannon Ford, Jennifer Bertsch (For AT sessions, both observer slots will be used by CAIA).

## Contact info:

Christine Steiffer 	christine.steiffer@agile6.com	571-282-9104	

Carolyn Dew 		carolyn@navapbc.com

Kim Ladin		kimladin@navapbc.com		408-250-0036

Amy Lai		amylai@navapbc.com

Shannon Ford	Shannon.Ford1@va.gov

