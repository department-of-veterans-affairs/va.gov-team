# Research Plan for Authenticated Experience, My VA Benefit Payments and Debts UAT, October 2022
## Background
Throughout [My VA 2.0 research and discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research) in 2020 - 2021, the recurring theme mentioned by Veterans is that seeing payment info on their My VA dashboard is a high priority. The importance of payment information is also reflected in analytics, as viewing payments is a top interaction on VA.gov overall and is a top search term from the My VA dashboard. In our recent [My VA usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/research-findings.md), we heard from all participants that they would strongly prefer to manage VA debt on VA.gov than through the mail and over the phone.

This effort aims to add more detail around debt and payment information to the My VA dashboard to be elevated for logged-in Veteran’s awareness and attention, and also to add copays as a type of debt that can be accessed from My VA.

See our [product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history) for more details.

### OCTO-DE Objectives 
The addition of timely debt and payment updates should help fulfill our north star objective of moving toward My VA being the one-stop shop for action items and benefit status, so that it provides more direct, personalized routes to Veterans’ most critical updates and tasks and cuts down on necessary phone and mail communication.

### Veteran Journey
Since Veterans can receive payments and incur debt any time after establishing benefits with VA, this work impacts the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) from Starting Up and beyond.

## Research Goals	
The primary goal of our UAT is to confirm that functionality works as expected in our new "Outstanding debts" and "Benefit payments" sections.

As secondary goals, we’ll follow up on [our last usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/discovery-and-research/june-2022-research/research-findings.md):
- We would like to validate that no usability hurdles have been introduced during the iterations that have occurred.
	- We eliminated the use of red and green color and want to make sure the page is still scannable without them.
	- We have made some content updates to align with other teams around payments and debts.
- We would like to learn more about challenges experienced by people who use magnification, have cognitive considerations, and use screen readers.

### Outcome
Based on the outcome of this research study, we will either release the two new sections to production and/or update our design to correct any significant usability hurdles people encounter.

### Research questions
- Does the functionality work as expected?
- Are Veterans able to take action on their payment or debt information without any usability hurdles?
- Has the elimination of red and green colors decreased the scannability of the page?
- Is any of the copy confusing to users?

### Hypothesis
- Veterans will not encounter any bugs in the payments and debts sections.
- Veterans will be able to easily take action on their payment and debt information from My VA.
- Veterans will not be confused by the terminology used for debts and payments.
- It will be clear what is due to VA from Veterans and what has been paid to them without the use of color to delineate.

## Method	
We'll have participants go through a list of specific tasks for UAT and ask follow-up questions to get feedback on our usability related questions. We will test in production with real user data.

### Location
Remote, via Zoom

### Research materials
[Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/uat/v2-UAT-conversation-guide.md) 

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
