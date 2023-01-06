# Research Plan for Authenticated Experience, My VA Audit, January 2023

## Background
As of April 2022, My VA "2.0" has been out for a little less than a year and has been experiencing some inconsistencies between its five sections -- the "nametag", Claims and appeals, Health care, Benefit payments and debts, and Apply for benefits. This is making the page hard to manage and hard to scale.

As a result, we conducted an audit of My VA in Mural to document and evaluate the following:
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
### **1. Determine if the updated information architecture of My VA still aligns with Veterans' mental model.**

- Are Veterans able to find their top tasks on My VA and act on them if applicable?
- Is there any important information about top tasks or any categories missing on My VA? 
- Is the new education section in a good place on the page for Veterans who are interested in those benefits? What about Veterans who are not interested?
- Is it clear what "saved applications" are and are they in a good place at the bottom of My VA?

### **2. Determine if showing all sections all the time on My VA has made the page more, less, or equally usable compared to its current state.**

- How do users react to loading states and/or errors on the page, especially in sections that don't apply to the user?
- For users who do not have claims, health care, debt, payments, education, or saved applications, how do they feel about seeing those sections presented on My VA?
- Do users know how to find out more about benefits they are not currently enrolled in?
- What information or actions do veterans expect to see in the links that we've added to empty sections? Are those links useful to veterans?
- Do empty sections get in the way of Veterans trying to find out information about their current benefits or bring attention to benefits that Veterans may be interested in?

### Outcome
Based on our findings, we will determine if updates are needed and continue onto the next step of the collaboration cycle.

### Hypothesis
- We expect that in the new design Veterans will still be able to find what they're looking for upon login and act on it as needed.
- We expect that showing all sections all the time to LOA3 users will not be distracting and will help highlight benefits that Veterans may be interested in if they are not currently enrolled.
- We expect that most important top tasks will be present and have all important details on My VA, possible with the exception of military records.
- We hypothesize that based on analytics we have presented the sections on My VA in such a way that the most popular actions and links will be closest to the top.

## Method	
We will conduct remote usability testing on Zoom using real Veteran data behind a feature flag in production. We will use this method because:
- We want to recruit an audience who is using a range of benefits and see their real data in testing so we can get accurate feedback that is specific to their use cases and does not require any hypothetical scenarios.
- We will be able to test with assistive technology users in code. This is important to do now in usability testing rather than later in UAT because we do not want to make any significant changes coming out of UAT and would like to know if there are any accessibility issues with this pattern sooner than later.
- We don't anticipate a lot of changes to the implementation or anything that would be very time-consuming to alter based on usability testing.
- We have had the research method conversation as a team early enough that the timeline allows for coding and testing in production.

### Research materials
[Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/audit-conversation-guide.md)

### Recruitment approach
Our intended audience for this research is Veterans who use a variety of VA benefits so that we can get perspectives from people who value each section of My VA at different levels. Secondarily we will target assistive tech users so that we can uncover any accessibility issues as early as possible. We will use Perigean to recruit them.

### Recruitment criteria

|Total requested|Completed sessions|Veterans|Family Member|Caregivers|Service Members|
|:-------------:|:----------------:|:------:|:-----------:|:--------:|:-------------:|
|       18      |         12       |   18   |      0      |     0    |        0      | 


### Criteria Table

|                |Moderated   |
|----------------|:----------:|
|***SEX***       |            |
|*Various*       |            |
|Male            |            |
|Female          |      8     |
|***LGBTQ+***    |            |
|*Various*       |            |
|Gay             |            |
|Lesbian         |            |
|Bisexual        |            |
|Asexual         |            |
|Transgender     |            |
|Non-Binary      |            |
|Gender-fluid    |            |
|Queer           |            |
|Two-Spirit      |            |
|       ---      |     ---    |   
|***RACE***      |            |             
|*Various*       |      10    |
|Black           |      4     |       
|White           |            |             
|Latinx          |      2     |                      
|Asian           |      2     |              
|Native          |            |          
|Pacific Islander|            |            
|       ---      |     ---    |     
|***AGE***       |            |
|*Various*       |      12    |
|18-24 yo        |            |
|25-34 yo        |            |
|35-44 yo        |            |
|45-54 yo        |            |
|55+ yo          |      6     |
|      ---       |     ---    |
|***BENEFITS***  |            |
|*Various*       |      6     |
|*No Ben/Ser Exp*|      X     |
|Disability      |      4     |
|Education       |      2     |
|Employment      |            |
|Finances        |            |
|Healthcare      |      4     |
|Housing         |            |
|Life Insurance  |            |
|Memorialization |            |
|Pension         |      2     |
|       ---      |     ---    |
|***BRANCH***    |            |
|*Various*       |     18     |
|Marine Corps    |            |
|Army            |            |
|Navy            |            |
|Air Force       |            |
|Space Force     |            |
|Coast Guard     |            |
|Nat. Guard      |            |
|Pub Hlth Corps  |            |
|       ---      |     ---    |
|***EDUCATION*** |            |
|*Various*       |            |
|Elementary      |            |
|Intermediate    |            |
|GED             |            |
|High School     |            |
|Some College    |            |
|Associate's     |            |
|Bachelors       |            |
|Masters         |            |
|Professional    |            |
|Doctoral        |            |
|       ---      |     ---    |
|***RESIDENCE*** |            |
|*Various*       |            |
|Urban           |            |
|Rural           |            |
|       ---      |     ---    |
|***HARDWARE***  |            |
|*Various*       |      12    |
|Desktop         |            |
|Laptop          |            |
|Smartphone      |      6     |
|Tablet          |            |
|       ---      |     ---    |
|***WEBSITE***   |            |
|*Various*       |            |
|VA.gov(has acct)|      18    |
|VA.gov(no acct) |            |
|MyHealtheVet    |            |
|Ebenefits       |            |
|       ---      |      ---   |
|***LOGIN***     |            |
|*Various*       |      18    |
|DS Logon        |            |
|MyHealtheVet    |            |
|ID.me           |            |
|Login.gov       |            |
|       ---      |      ---   |
|***ID PROOF***  |            |
|*Various*       |      18    |
|IAL1            |       X    |
|IAL2            |            |
|IAL3            |            |

---

|                                                             |Participants| 
|-------------------------------------------------------------|:----------:|
|***ASSISTIVE TECH***                                         |            | 
|*Various*                                                    |      4     |
|Font resizing/larger                                         |      2     |
|Screen reader                                                |      2     |
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
|*Various*                                                    |      4     |
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
       
  
### Screener questions
1. Do you need assistive technology to use your phone such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer? (Proceed to next question if yes)
	 * Are you able to join the Zoom session using this assistive technology? (Answer should be yes to satisfy criteria for screen reader)

2. Do you normally need to resize font or use a magnification tool to see your screen when you are using the internet? (Proceed to next question if yes)
	 * Are you able to join the Zoom session using the tools you need to see your screen? (Answer should be yes to satisfy criteria for zoom magnification/font resizing)

3. 4 participants should currently have have education (CH 33, CH 34, CH 35), compensation/pension debts, or have a copay balance due. Screener question:
 	* Do you have education, compensation, or pension debt with VA?
 	* Do you have health care related debt with VA, such as copays?

(Answering yes to either of these questions would qualify the participant for the debt criteria.)

4. Do you have an account on VA.gov and has your identity been verified? You can check on this by logging into VA.gov. If you see a prompt to verify your identity once you log in, your identity is **not** yet verified and you do not qualify for the study.

(Answering yes would qualify the participant.)

### Additional instructions  
ALL participants must have a smartphone, desktop, laptop, or tablet and are willing to complete their interview that device. They also need to:
  - be willing to log into their VA.gov account and share over Zoom in a web browser window on their device
  - Provide the email that they use to log in to VA.gov prior to the session (please include this email in the tracker information)
  - Have a working microphone on their device
  - Have Zoom downloaded to their device prior to the session

## Timeline
Launch in Q1 2023

### Prepare
* **We would like to request a kickoff call with Perigean before recruiting begins.**
	* Available times for kickoff call: 
	* Monday, January 9, any time
	* Tuesday, January 10 any time except 2-2:30pm EST

* Pilot participant email: stephen.barrs@va.gov
* Date and time of pilot session: Wednesday, January 11 at 4:00pm EST

### Research sessions
* Planned dates of research: January 17 - 23, 2023

### Length of sessions
* Session length: 60 minutes
* Buffer time between sessions: 30 minutes

### Availability for sessions

| Date       | Times (Eastern) |
| ---------- | --------------- |
| Tuesday, January 17 | 9am-3:30pm, 4pm-5pm |	
| Wednesday, January 18 | 9am-5pm |
| Thursday, January 19 | 9am-5pm |
| Friday, January 20 | 9am-5pm |
| Monday, January 23 | 9am-5pm |
	
## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us
- Research guide writing and task development: Angela Agosto
- Participant recruiting & screening: Perigean
- Project point of contact: Angela Agosto
- Participant(s) for pilot test: Stephen Barrs
- Note-takers: Will use Zoom transcription
- Observers:	
  - samara.strauss@va.gov
  - ana@adhocteam.us
  - berni.xiong@agile6.com
  - liz.lantz@adhocteam.us
