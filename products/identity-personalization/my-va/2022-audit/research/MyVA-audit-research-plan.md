# Research Plan for Authenticated Experience, My VA Audit, October 2022

## Background
As of April 2022, My VA "2.0" has been out for a little less than a year and has been experiencing some inconsistencies between its five sections -- the "nametag", Claims and appeals, Health care, Benefit payments and debts, and Apply for benefits. This is making the page hard to manage and hard to scale.

As a result, we conducted [an audit of My VA](https://app.mural.co/t/vsa8243/m/vsa8243/1648129585496/d22080eb307aac8bda5ba1153e013a386b7f1396?sender=uce014850ef6c5a8303e70396) to document and evaluate the following:
- All of the states of each section of My VA
- Whether all states are necessary
- Where we can simplify without losing important personalization
- How we can bring greater consistency between sections

The design updates we are testing in this study will bring greater consistency to how each section loads, handles errors, and shows conditional information, resulting in a page that is easier to manage and scale. We hypothesize that this will improve the end user experience by highlighting benefits that may be of interest to logged in Veterans, as well as by making it easier for us to continue to add features we know people expect.

[Link to project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit).

### OCTO Objectives 

Especially since My VA is now the next destination when a Veteran logs into VA.gov due to the [recent redirect](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect), it is critical that we present the most relevant updates as quickly and clearly as possible while also highlighting benefits a Veteran may be interested in that they may have previously found on the homepage. Accomplishing these things will fulfill our north star objective of being a single, authoritative source of information that is personalized to the logged in user.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the Veteran journey from Starting Up and beyond.

## Research Goals	
### **1.Determine if Veterans' top tasks are effectively highlighted and actionable on My VA.**

- What are users logging into VA.gov to do? 
- Once a user logs in and is redirected to My VA, what would they do next?
- Are Veterans able to find their top tasks on My VA and act on them if applicable?
- Is there any important information about top tasks missing on My VA? 
- Are there any top tasks still missing from My VA?

### **2.Determine if we are handling sections on My VA that don't apply to a logged in user effectively.**

- For users who do not have claims, health care, debt, payments, education, or saved applications, how do they feel about seeing those sections presented on My VA?
- Do users know how to find out more about benefits they are not currently enrolled in?

### **3.Determine if the order of sections on My VA aligns with Veterans mental model.**

- For users who do not have claims, health care, debt, payments, education, or saved applications, how do they feel about seeing those sections presented on My VA?
- Do users know how to find out more about benefits they are not currently enrolled in?

### Outcome
Based on our findings, we will determine if updates are needed and continue onto the next step of the collaboration cycle.

### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
- What do you already know about this problem space?
- What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
- Write a generalized statement that combines what you know + what you think will happen during the study. 
- Remember to constrain the hypothesis to the goals of your study!

## Method	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Examples of common research methods include: 
- Semi-structured interviews - appropriate for generative research
- Contextual inquiry - appropriate for generative research
- Card sorts - appropriate for generative and evaluative research; depending on the study design 
- Tree tests - appropriate for evaluative research
- Usability testing - appropriate for evaluative research
- User acceptance testing (UAT) - required before product release

Additional resources:
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

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
- [Link to prototype or Optimal Workshop study for group A](url goes here)
- [Link to prototype or Optimal Workshop study for group B](url goes here)

If recruiting outside of Perigean’s participant database:
- [Link to recruitment flyer](url goes here)
	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria
Add the total requested number, ideal completed sessions and breakdown type of participants for this study. 

`Ex. TR: 10; CS: 6; Vets: 5; Fam: 0; Care: 5; Serv: 0`

|Total requested|Completed sessions|Veterans|Family Member|Caregivers|Service Members|
|:-------------:|:----------------:|:------:|:-----------:|:--------:|:-------------:|
|               |                  |        |             |          |               | 


### Criteria Table (Please read carefully)
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

- If this is for a single ***MODERATED*** study, breakdown your total requested participants for each category by number--***not percentage*** in the moderated column. 
- ***This will be applied across particpant types you need*** (*Veterans, caregivers, etc.*) for all categories (*Sex, race, etc*) you select. 
- For example, if you request 10 particpants, for 5 Veterans, and 5 caregivers, you could ask for 5 males, 5 females, and Perigean will apply those numbers across those two particpant types. Do the same for any other category you want Perigean to use for recruitment. You **do not** have to use every category, or even specific type in a catogory. Only add to the category/type that will make your study successful.
- ***Various*** means you want an array of participants from this category but are leaving it to Perigean's discretion to recruit as many different types as possible.
- If you choose ***Various*** for a category, but wish to exclude a specific type, place an **X** in it's row. However, you can choose ***Various*** and also specific types of a category to be included (Ex. Various 7, Black 3, White X.)
- For benefits category, you may also choose ***No Ben/Ser Exp*** which means you want particpants who haven't had experience using any Veteran benefit or service. In your additional screener section, you can specify exactly which benefit or service you want participants not to have had experience using. 
- For hardware category, select which type/s you want participants to join your session to use.
- If you're conducting an unmoderated study (*survey, tree test*) using cohorts, ***do not exceed*** nine participants per cohort to avoid PRA (Paperwork Reduction Act).
- Add which group you want applied to each cohort in the heading row (***Ex. Vet Cohort 1, Care Cohort 2, Fam Cohort 3, Serv Cohort 4***). 
- You can use the same group for all cohorts, but the categories you choose must vary (***Ex. Vet Cohort 1 [9 Male]; Vet Cohort 2 [9 Female]***. 

|                |Moderated   |Cohort 1|Cohort 2|Cohort 3|Cohort 4|Cohort 5|Cohort 6|Cohort 7|Cohort 8|Cohort 9|Cohort 10|
|----------------|:----------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|
|***SEX***       |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Male            |            |        |        |        |        |        |        |        |        |        |         |
|Female          |            |        |        |        |        |        |        |        |        |        |         |
|***LGBTQ+***    |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Gay             |            |        |        |        |        |        |        |        |        |        |         |
|Lesbian         |            |        |        |        |        |        |        |        |        |        |         |
|Bisexual        |            |        |        |        |        |        |        |        |        |        |         |
|Asexual         |            |        |        |        |        |        |        |        |        |        |         |
|Transgender     |            |        |        |        |        |        |        |        |        |        |         |
|Non-Binary      |            |        |        |        |        |        |        |        |        |        |         |
|Gender-fluid    |            |        |        |        |        |        |        |        |        |        |         |
|Queer           |            |        |        |        |        |        |        |        |        |        |         |
|Two-Spirit      |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***RACE***      |            |        |        |        |        |        |        |        |        |        |         |               
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Black           |            |        |        |        |        |        |        |        |        |        |         |               
|White           |            |        |        |        |        |        |        |        |        |        |         |                 
|Latinx          |            |        |        |        |        |        |        |        |        |        |         |                            
|Asian           |            |        |        |        |        |        |        |        |        |        |         |                 
|Native          |            |        |        |        |        |        |        |        |        |        |         |                
|Pacific Islander|            |        |        |        |        |        |        |        |        |        |         |                 
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***AGE***       |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|18-24 yo        |            |        |        |        |        |        |        |        |        |        |         |
|25-34 yo        |            |        |        |        |        |        |        |        |        |        |         |
|35-44 yo        |            |        |        |        |        |        |        |        |        |        |         |
|45-54 yo        |            |        |        |        |        |        |        |        |        |        |         |
|55+ yo          |            |        |        |        |        |        |        |        |        |        |         |
|      ---       |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***BENEFITS***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|*No Ben/Ser Exp*|            |        |        |        |        |        |        |        |        |        |         |
|Disability      |            |        |        |        |        |        |        |        |        |        |         |
|Education       |            |        |        |        |        |        |        |        |        |        |         |    
|Employment      |            |        |        |        |        |        |        |        |        |        |         |
|Finances        |            |        |        |        |        |        |        |        |        |        |         |
|Healthcare      |            |        |        |        |        |        |        |        |        |        |         |
|Housing         |            |        |        |        |        |        |        |        |        |        |         |
|Life Insurance  |            |        |        |        |        |        |        |        |        |        |         |
|Memorialization |            |        |        |        |        |        |        |        |        |        |         |
|Pension         |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |      
|***BRANCH***    |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Marine Corps    |            |        |        |        |        |        |        |        |        |        |         |
|Army            |            |        |        |        |        |        |        |        |        |        |         |
|Navy            |            |        |        |        |        |        |        |        |        |        |         |
|Air Force       |            |        |        |        |        |        |        |        |        |        |         |
|Space Force     |            |        |        |        |        |        |        |        |        |        |         |
|Coast Guard     |            |        |        |        |        |        |        |        |        |        |         |
|Nat. Guard      |            |        |        |        |        |        |        |        |        |        |         |
|Pub Hlth Corps  |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***EDUCATION*** |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Elementary      |            |        |        |        |        |        |        |        |        |        |         |
|Intermediate    |            |        |        |        |        |        |        |        |        |        |         |
|GED             |            |        |        |        |        |        |        |        |        |        |         |
|High School     |            |        |        |        |        |        |        |        |        |        |         |
|Some College    |            |        |        |        |        |        |        |        |        |        |         |
|Associate's     |            |        |        |        |        |        |        |        |        |        |         |
|Bachelors       |            |        |        |        |        |        |        |        |        |        |         |
|Masters         |            |        |        |        |        |        |        |        |        |        |         |
|Professional    |            |        |        |        |        |        |        |        |        |        |         |
|Doctoral        |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***RESIDENCE*** |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Urban           |            |        |        |        |        |        |        |        |        |        |         |
|Rural           |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***HARDWARE***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|Desktop         |            |        |        |        |        |        |        |        |        |        |         |
|Laptop          |            |        |        |        |        |        |        |        |        |        |         |
|Smartphone      |            |        |        |        |        |        |        |        |        |        |         |
|Tablet          |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***WEBSITE***   |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|VA.gov(has acct)|            |        |        |        |        |        |        |        |        |        |         |
|VA.gov(no acct) |            |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|Ebenefits       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***LOGIN***     |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|DS Logon        |            |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|ID.me           |            |        |        |        |        |        |        |        |        |        |         |
|Login.gov       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***ID PROOF***  |            |        |        |        |        |        |        |        |        |        |         |
|*Various*       |            |        |        |        |        |        |        |        |        |        |         |
|IAL1            |            |        |        |        |        |        |        |        |        |        |         |
|IAL2            |            |        |        |        |        |        |        |        |        |        |         |
|IAL3            |            |        |        |        |        |        |        |        |        |        |         |

---
**Identity Assurance Levels**

- **IAL1:** Attributes, if any, are self-asserted or should be treated as self-asserted; there is no proofing process. (***Ex., User generated user name and pw***)

- **IAL2:** Either remote or in-person identity proofing is required using, at a minimum, the procedures given in NIST SP 800-63A. (***Ex., Id.me or Login.gov account***)

- **IAL3:** In-person or supervised-remote identity proofing is required. Identifying attributes must be verified through examination of physical documentation as described in NIST SP 800-63A.

---

`Assistive Tech and Cognitive Impairment will apply across cohorts`
- ***If you have no preference for a specific type***, just add your number to the ***ASSISTIVE TECH*** or ***COGNITIVE IMPAIRMENT*** row.

|                                                             |Participants| 
|-------------------------------------------------------------|:----------:|
|***ASSISTIVE TECH***                                         |            | 
|*Various*                                                    |            |
|Font resizing/larger                                         |            |
|Screen reader                                                |            |
|Braille terminal                                             |            |
|Speech recognition sftw                                      |            |
|Speech generating device                                     |            |
|Speech to text                                               |            |
|High contrast mode                                           |            |
|Alternative keyboard                                         |            |
|Alternative mouse or stylus                                  |            |
|Keyboard only navigation (no mouse usage)                    |            |
|Switch access, head pointer, or eye tracking                 |            |
|Joystick                                                     |            |
|Teletypewriter or telecommunication device for the deaf (TTY)|            |
|Closed captions                                              |            |
|Amplified telephone                                          |            |
|Hearing aid                                                  |            |
|Cochlear implant                                             |            |
|Cane, walker, guide animal, or other walking aid             |            |
|Wheelchair                                                   |            |
|Prosthetics                                                  |            |
|Wearable tech (not prosthetic)                               |            |
|Augmentive and alternative communication device              |            |
|Sign language interpreter                                    |            |
|Speech-to-speech transliterator                              |            |
|Visual aids                                                  |            |
|Writing on paper                                             |            |
|Typing with phone or tablet and showing it to others         |            |
|Caregiver                                                    |            |
|                           ---                               |     ---    |
|***COGNITIVE IMPAIRMENT and/or FUNCTIONAL DISABILITIES***    |            |
|*Various*                                                    |            |
|Traumatic Brain Injury (TBI)                                 |            |
|Post-Traumatic Stress Disorder (PTSD)                        |            |
|Attention-Deficit/Hyperactivity Disorder (ADHD)              |            |
|Autism                                                       |            |
|Vertigo                                                      |            |
|Aphasia                                                      |            |
|Dyslexia                                                     |            |
|Dyscalculia                                                  |            |
|Distractibility                                              |            |
|Memory loss                                                  |            |
|Reading difficulties                                         |            |
|Low tolerance for cognitive overload                         |            |
       

### Screener

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  
 > **Example:** Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]
  
 Additionally, you may provide instructions for Perigean to follow to ensure a smooth set-up.
  
 > **Example:** ALL have a computer, tablet, or smartphone and are willing to complete their interview on one of those devices:
  - During the session, are willing to share over Zoom a web browser window on their device
  - Have a working microphone on their device
  - Have Zoom downloaded to their device prior to the session and know how to share their screen

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

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

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	
- Research guide writing and task development (usually but not always same as moderator):	
- Participant recruiting & screening:	
- Project point of contact:	
- Participant(s) for pilot test:	
- Note-takers:	
- Observers:	
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
