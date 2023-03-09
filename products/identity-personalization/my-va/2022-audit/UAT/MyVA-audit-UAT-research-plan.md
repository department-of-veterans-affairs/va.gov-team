# Research Plan for Authenticated Experience, My VA Audit UAT, March 2023
## Background
My VA has been experiencing some inconsistencies between its five sections -- the "nametag", Claims and appeals, Health care, Benefit payments and debts, and Apply for benefits. This is making the page hard to manage and hard to scale.

As a result, we conducted an audit of My VA in Mural to document and evaluate the following:
- All of the states of each section of My VA
- Whether all states are necessary
- Where we can simplify without losing important personalization
- How we can bring greater consistency between sections

The design updates we are testing in this study will bring greater consistency to how each section loads, handles errors, and shows conditional information, resulting in a page that is easier to manage and scale. We hypothesize that this will improve the end user experience by highlighting benefits that may be of interest to logged in Veterans, as well as by making it easier for us to continue to add features we know people expect.

[Link to project brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit).

### OCTO-DE Objectives 
Especially since My VA is now the next destination when a Veteran logs into VA.gov due to the [recent redirect](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect), it is critical that we present the most relevant updates as quickly and clearly as possible while also highlighting benefits a Veteran may be interested in that they may have previously found on the homepage. Accomplishing these things will fulfill our north star objective of being a single, authoritative source of information that is personalized to the logged in user.

### Veteran Journey
Since Veterans can apply for and manage their benefits any time after getting out of the military, this work impacts the Veteran journey from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that functionality works as expected with these audit updates.

As secondary goals, we’ll follow up on [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/research/MyVA-audit-research-findings.md):
- We would like to verify that the updates content in the Education and Training section resonates better with Veterans now that we've changed the termiololgy to reference the Post-9/11 GI Bill.
- We would like to verify that the title change for the Benefit application drafts section has made it clear that only saved, in-progress applications will show in that section and that applications refers to benefit applications that are filled out on VA.gov as opposed to computer applications.

### Outcome
Based on the outcome of this research study, we will either release the audit updates to production and/or update our design to correct any significant usability hurdles people encounter. 

If Veterans are still confused about the Benefit application drafts section, we have a [backup plan to launch with hint text added to this section[(https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/CD712D86-61D8-4485-8727-A2CB2EF534C6).

### Research questions
- Does the functionality work as expected?
- Are Veterans able to take action on ther top tasks without any usability hurdles?
- Do Veterans with education benefits know how to find out what their remaining education benefits are?
- Do Veterans know how to find and continue a saved application from My VA?

### Hypothesis
- Veterans will not encounter any bugs on My VA.
- Veterans will be able to easily find updates and take action on their top tasks from My VA.
- Veterans who use education benefits will be able to tell how they could find information about their remaining education benefits from My VA.
- Veterans will understand how to find saved applications on My VA and continue them, and will know what the section is for just by reading the title "Benefit application drafts."

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability related questions. We will test in production using a feature flipper.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](TK) 

## Recruitment	
Our intended audience for this research is mainly BIPOC Veterans, assistive tech users, and Veterans with cognitive disabilities who have payments and debt with VA. We'll use Perigean to recruit them.

We are focusing our recruitment criteria on the marginalized groups we didn't speak with during [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/user-research/findings.md).

### Recruitment criteria

|Total requested|Completed sessions|Veterans|Family Member|Caregivers|Service Members|
|:-------------:|:----------------:|:------:|:-----------:|:--------:|:-------------:|
|        12     |        8         |   8    |      0      |     0    |       0       | 


### Criteria Table

|                |Moderated   |
|----------------|:----------:|
|***SEX***       |            |
|*Various*       |      6     |
|Male            |            |
|Female          |      6     |
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
|*Various*       |      6     |
|Black           |      2     |       
|White           |            |             
|Latinx          |      1     |                      
|Asian           |      1     |              
|Native          |            |          
|Pacific Islander|            |            
|       ---      |     ---    |     
|***AGE***       |            |
|*Various*       |      8     |
|18-24 yo        |            |
|25-34 yo        |            |
|35-44 yo        |            |
|45-54 yo        |            |
|55+ yo          |      4     |
|      ---       |     ---    |
|***BENEFITS***  |            |
|*Various*       |      12    |
|*No Ben/Ser Exp*|       X    |
|Disability      |            |
|Education       |            |
|Employment      |            |
|Finances        |            |
|Healthcare      |            |
|Housing         |            |
|Life Insurance  |            |
|Memorialization |            |
|Pension         |            |
|       ---      |     ---    |
|***BRANCH***    |            |
|*Various*       |     12     |
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
|High School     |      2     |
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
|Rural           |      4     |
|       ---      |     ---    |
|***HARDWARE***  |            |
|*Various*       |      6     |
|Desktop         |            |
|Laptop          |            |
|Smartphone      |      6     |
|Tablet          |            |
|       ---      |     ---    |
|***WEBSITE***   |            |
|*Various*       |            |
|VA.gov(has acct)|      12    |
|VA.gov(no acct) |            |
|MyHealtheVet    |            |
|Ebenefits       |            |
|       ---      |      ---   |
|***LOGIN***     |            |
|*Various*       |      12    |
|DS Logon        |            |
|MyHealtheVet    |            |
|ID.me           |            |
|Login.gov       |            |
|       ---      |      ---   |
|***ID PROOF***  |            |
|*Various*       |      12    |
|IAL1            |      X     |
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

3. **All** participants should have received education benefit or compensation/pension payments from the VA, OR should CURRENTLY have education (CH 33, CH 34, CH 35), compensation/pension debts, or have a copay balance due. Screener question:
	* Do you currently receive an education, compensation, or pension payment from the VA?
 	* Do you have education, compensation, or pension debt with VA?
 	* Do you have health care related debt with VA, such as copays?

**Please recruit at least 8 participants who currently have a form of debt as outlined above.** For the other 4 participants, it is okay if they receive payments and do not have debt.

  
### Additional instructions  
ALL participants must have a smartphone, desktop, laptop, or tablet and are willing to complete their interview that device. They also need to:
  - be willing to log into their VA.gov account and share over Zoom in a web browser window on their device
  - Have a working microphone on their device
  - Have Zoom downloaded to their device prior to the session


## Timeline
### Prepare
When will the thing you are testing be finalized? 
December 2022

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: heather@adhocteam.us
* Date and time of pilot session: 
  * Monday, November 14, 2022 at 4:00pm-4:30pm

### Research sessions
What dates do you plan to do research? 
Thursday November 17 - Wednesday November 23

### Length of sessions
Sessions will be 45 minutes with 30 minutes in between sessions. Please schedule no more than 5 sessions per day.

### Availability

| Date       | Times (Eastern) |
| ---------- | --------------- |
| Thursday, November 17 | 9am-5pm |	
| Friday, November 18 | 9am-5pm |
| Monday, November 21 | 9am-5pm |
| Tuesday, November 22 | 9am-5pm |
| Wednesday, November 23 | 9am-1pm |

## Team Roles	
Please list the people who will be serving in each role. 

- Moderator: Angela Agosto, angela.agosto@adhocteam.us
	- Back up moderator: Liz Lantz, liz.lantz@adhocteam.us
- Research guide writing and task development: Angela Agosto
- Participant recruiting & screening: Perigean
- Project point of contact: Angela Agosto
- Participant(s) for pilot test: Heather Catalano
- Note-takers: None (will use Zoom transcription)
- Observers:	
  - samara.strauss@va.gov
  - ana@adhocteam.us
  - erica.sauve@adhocteam.us
  - taylor.mitchell@gcio.com
