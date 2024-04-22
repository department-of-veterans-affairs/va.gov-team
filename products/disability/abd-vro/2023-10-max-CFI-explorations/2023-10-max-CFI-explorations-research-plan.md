# Research Plan for the Employee Experience Team, Maximum CFIs Explorations, September 26, 2023

**Background**

The VA receives many claims for increase (CFIs) for conditions where a Veteran is already at the maximum rating for that condition. In most cases, the condition will be “confirmed and continued” by a claims processor. We’d like to reduce the amount of time claims processors spend on these contentions by reducing the number of claims for increase Veterans file in this situation.

The two pages within the authenticated experience of VA.gov we want to test for this research study are the ‘View my Rated Disabilities’ page and the ‘Select Rated Disabilities’ page within the CFI workflow. There will be two design variations for the ‘Select Rated Disabilities’ page - one that uses a design intervention to indicate which conditions are already at the maximum rating and one that adds friction to the process of trying to submit a CFI when the condition is already at the maximum rating.  

We believe that by changing some educational or design details on these pages, we will reduce the likelihood of Veteran’s submitting CFIs, thus saving them time while waiting for a claim to come back that will be essentially denied. We are interested to compare the different approaches to determine the most effective intervention to reduce Veteran stress and lower the burden for adjudicators.
[Product Brief](https://docs.google.com/document/d/11-L6dbZ7Hah-e2PL3-nfcN5c5T8uAbn3EumLikrEhV4/edit#heading=h.t9sdhyubj1c1)

**OCTO Priorities and Veteran Journey**
This work supports [OCTO Priority 7:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) Fast-track disability claims, starting with PACT Act claims, and it fits into the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in the Living Civilian Life phase. It’s related to the Moment That Matters called “Managing primary care and chronic health issues.” 

## Research Goals
Goals for this research include:
- Evaluate the relative effectiveness of 3 different interventions in reducing the number of maxed-out tinnitus claims. This will inform a decision about whether to move forward with any of them.
  - Scenario 1 - Collect Veteran impressions of the View My Rated Disabilities page and their understanding of the educational intervention.
  - Scenario 2 - Gauge Veteran reaction to separating conditions at their maximum rating from the rest of the conditions list in the 526 flow.
  - Scenario 3 - Determine Veteran reaction to an additional confirmation step to submit their claim for a condition already at it’s maximum rating.
- Determine if it will be worth the effort to display maximum rating for other conditions outside of Tinnitus.
- Get feedback on each of the designs to determine what details we should refine.

**Outcome**
If the research shows no influence on Veteran behavior from the interventions we’re testing, we may decide not to proceed with any of the changes. If the research does show a potential effect in one or more of the interventions, we’ll use the information gathered during this research to inform subsequent design of the intervention.

**Research questions**

**Goal 1:** Understand which intervention is the most effective in reducing the number of claims to help us decide if we should move forward with any of them.
- Which method is most likely to dissuade them from submitting a CFI?
- Do Veterans have a preference between the methods they reviewed? Why or why not? 
- Do Veterans understand the educational content in Scenario 1? What action would they take after reading it?
- What do Veterans think about the separated list of conditions at their maximum rating in Scenario 2?
- Would the Veteran still submit their claim with the added friction in Scenario 3? Why or why not?

**Goal 2:** Determine how important it is to display maximum ratings for other conditions outside of Tinnitus.
- By seeing all the possible maximum ratings listed with their conditions, how likely would a Veteran be to submit a CFI?
- How will that information factor into their decision-making process to determine if they will submit a CFI? 

**Goal 3:** Get feedback on each of the designs to determine what details we should refine.
- How well does each concept communicate to Veterans what their choices are?
- Do any concepts help Veterans feel more confident in their choice?
- Do any concepts make Veterans feel the VA is on their side?
- Does the information seem trustworthy?
- How do the designs make them feel about their experience on VA.gov?
- Is there additional information Veterans need when deciding what to do?

## Hypothesis
Our hypothesis is that by implementing design modifications to the current 526 workflow, we will reduce the number of claims that end up getting ‘confirmed and continued’ at the maximum rating for Tinnitus.. Further, we hypothesize that by adding educational content outside of the claims flow, we can reduce the number of maximum CFI claims submitted and help Veterans understand whether they still might want to request the increase even if they’re already at the maximum. Finally, we hypothesize that by adding more friction to the application process for conditions already at their rated maximum, we can dissuade more Veterans from filing and reduce their overall confusion. 

**What we know about this problem space:**
We know that tens of thousands of claims for increase are filed yearly for conditions for which increases cannot be granted because the Veteran is already at the maximum rating.

**What we think users could think of this feature:** 
We think some Veterans may be suspicious of the VA advising them not to request an increase.
We think Veterans consider “VA math” around maximum ratings, combined ratings, and IU to be opaque and somewhat untrustworthy.
We think Veterans may find additional educational content helpful on the View My Rated Disabilities page, but we are unsure the impact it might have on their behavior. 

## Methodology
We will combine a semi-structured interview format with three scenario-based concept tests, two of which will be shown to each participant on a rotating basis with a resulting 8 views per concept. The scenarios will contain short sequences of a few screens, and they’ll be based on existing screens in the online 526 application or within the authenticated VA.gov experience. Prototypes will be available in a small-screen mobile (phone) format. 

**Location**
The sessions will be conducted remotely via Zoom.

**Research materials**

- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/abd-vro/2023-10-max-CFI-explorations%20/2023-10-max-CFI-explorations-conversation-guide.md)

- [Prototype](https://www.sketch.com/s/bf1a0cd3-1fae-4321-a081-82db48fa3d3a/p/E089E059-6A52-43B0-9D5D-8B3FE35E4667/canvas#About)

## Recruitment
**Recruitment approach**

We are looking for 12 Veterans to participate in this study. 

We’ll use a lean maximum strategy for inclusivity, targeting 3 demographic criteria (age, gender, and cognitive ability) as primary sample distribution criteria, and race/ethnicity as a secondary sample distribution criteria.

**Recruitment criteria**

List the total number and type (Veterans, caregivers, etc.) of participants for this study: 
15 Veterans (includes a 25% over-recruit)

**Primary criteria (must-haves)**
- What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 
All participants have used VA.gov to file a claim (disability, pension, or other)

- Have you ever used VA.gov to file a claim for disability, pension, or any other benefits?
- At least 4 but no more than 10 Veterans who identify as a gender other than male. 
- At least 4 but no more than 8 Veterans over 55 years old. 
- At least 3 but no more than 8 Veterans who identify as having a cognitive disability.
- Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
  - Response options: yes or no (Answering yes would qualify the participant.)

- At least 6 Veterans have recently filed a claim for increase on an already rated condition that has gotten worse. ‘Recently’ as in the last 3 months, but we can broaden that definition if necessary.

- Have you ever filed a claim for increase on a disability? (That is, you were already rated for the condition, but it got worse, so you asked for a higher rating.)
  - If yes, when did you file your most recent claim for increase?
	- [ ] July - September 2023 ← This is the answer we want
	- [ ] April - June 2023 ← This would be ok as a fallback
	- [ ] January - March 2023
	- [ ] Before 2023

- At least 2 Veterans who have been rated for Tinnitus, and 2 for Migraines. This should total at least 4 Veterans who’ve been rated for either one of these conditions. (Does not need to be a claim for increase)

- Are you currently receiving disability compensation for any of these conditions? [Select all that apply]
  - Asthma
  - Hypertension (high blood pressure)
  - Traumatic brain injury (TBI)
  - Migraine headaches ← This is the answer we want (at least 2)
  - Scars
  - Tinnitus (ringing in the ears) ← This is the answer we want (at least 2)
  - None of the above

**Secondary criteria (nice-to-haves)**
- What criteria would strengthen your results? 
  - At least 4 Veterans under 35 years old.
  - At least 4 Veterans who are not White/Caucasian.

**Timeline**
Prepare
When will the thing you are testing be finalized? 
October 2, 2023

**Pilot session information** 
* Pilot participant name: Bianca Rivera Alvelo
* Pilot participant email: biancarivera@navapbc.com
* Date and time of pilot session: Monday, October 2nd at 3pm EST
Length of sessions
* Session length: <1 hour
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 4

**Availability**

October 10th-17th
- Tuesday October 10 
  - 11am - 1pm ET
  - 3:30pm - 8pm ET
- Wednesday October 11 
  - 11am - 8pm ET
- Thursday October 12 
  - 11am - 1pm ET
  - 2pm - 8pm ET
- Friday October 13 
  - 11am - 12pm ET
  - 1pm - 6pm ET
- Monday October 16
  - 11am - 2pm ET
  - 3pm - 8pm ET
- Tuesday October 17 
  - 11am - 1pm ET
  - 3:30pm - 8pm ET

**Team Roles**
Below is the list of the people serving in each role and their contact information:
- Moderator: Christine Steiffer
- Research guide writing and task development: Christine Steiffer
- Participant recruiting & screening: Perigean
- Project point of contact: Christine Steiffer
- Participant(s) for pilot test: Derick Fitchett
- Accessibility specialist (for sessions where support for assistive technology may be needed): n/a
- Note-takers: Christine Steiffer, Kim Ladin, Carolyn Dew, Amy Lai, Shannon Ford, Janelle Finnerty
- Observers: Christine Steiffer, Kim Ladin, Carolyn Dew, Amy Lai, Shannon Ford, Janelle Finnerty

**Contact info:**
- Carolyn Dew 		   carolyn@navapbc.com
- Kim Ladin		   kimladin@navapbc.com		
- Christine Steiffer 	   christine.steiffer@agile6.com	571-282-9104	
- Amy Lai		   amylai@navapbc.com
- Shannon Ford	           Shannon.Ford1@va.gov
- Bianca Rivera Alvelo     biancarivera@navapbc.com
- Janelle Finnerty	   janelle.finnerty@oddball.io



