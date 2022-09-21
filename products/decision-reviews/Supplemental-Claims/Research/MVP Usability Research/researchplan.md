# Research Plan for Benefits-Team-1, Supplemental Claims, 09/2022

## Background

As per the Appeals Modernization Act of 2017, Veteran and non-Veteran claimants seeking to correct perceived discrepancies in their benefit awards must submit new and relevant evidence by initiating the supplemental claim process. To do this, they must submit the Supplemental Claim form (VA Form 20-0995). New evidence enables a reviewer to determine if they should change the previous decision. Claimants can use the supplemental claims process in three ways:

- Supplement a claim within 1 year - Use this to add supplemental evidence to a claim decision within 1 year of its effective date.
- Reopen a prior claim closed 1+ years ago - Use this to reopen a prior decision that denied service connection, so that you can continue to prosecute the claim. This action will not re-open the prior effective date.
- Continuously prosecute a claim - Use this to continue prosecuting a claim and keep your effective date rolling.

Of the three decision review pathways, supplemental claims are the most widely used. More than 32,000 supplemental claims are filed each month (more than double the number of board appeals and higher-level reviews, combined) which indicates that streamlining and enhancing this pathway has an outsized potential to impact the lives of Veterans and their families.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Supplemental-Claims)

### OCTO Objectives

✅  Increase the usage and throughput of VA services

✅  Decrease the time Veterans spend waiting for an outcome

✅  Increase the quality and reliability of VA services

### Veteran Journey

Since Veterans can file Supplemental Claims benefits with VA between 180 and 90 days before separating from the military, this work impacts the Veteran journey from ***serving***, to ***getting out***, and all the way to ***dying*** as survivors can also file Supplemental Claims on the Veteran’s behalf. This work especially maps to the ***taking care of myself*** part of the Veteran journey, as Supplemental Claims for disability compensation supports:

- Recognizing and addressing mental health needs
- Managing primary care and chronic health issues
- Maintaining my health

## Research Goals

****1. Determine if the process of filing a Supplemental Claim is clear and actionable.****

****2. Determine if the user can identify or successfully add the issues they need to appeal****

****3. Validate that users can successfully submit new and relevant evidence needed for a favorable decision.****

### Outcome
We'll use the findings from this research to iterate on anything critical that impedes the user from completing the form, add notable enhancements and concerns for the backlog, and refine our MVP.

### Research questions
- Do users understand if this is the right form for them?
- Do users understand how to file claims other than disability?
- Do they understand that they need to *sign in* to complete the form online?
- Do any users understand that the VA has data on file for them and what it is?
- Do users understand what new and relevant evidence means?
- Do they understand the relationship between issue, evidence and time in service?
- Do users know when they have everything they need to successfully complete the form?

### Hypothesis

* We believe that all users will be able to successfully complete a Supplemental Claim.

* We believe Veterans will understand the decisions they need to make with the content presented to them.

* We believe Veterans will be able to achieve a more favorable outcome by submitting a Supplemental Claim via this digital experience.

## Method
Usability testing with a mobile prototype that can be viewed on a mobile device or a browser

### Location
We'll conduct remote usability testing over Zoom using a prototype. This method will enable us to observe participants attempting to file a claim with clear objectives given to them. We will plan to test in production with a screen reader user before launch since that is a limitation of testing with a prototype.

### Research materials

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/decision-reviews/Supplemental-Claims/Research/MVP%20Usability%20Research/conversationguide.md)
- [Link to prototype](https://www.figma.com/proto/JveclTFbNNSmx4eiYwbZdZ/Supplemental-Claims?node-id=70%3A5676&scaling=scale-down&page-id=10%3A1697&starting-point-node-id=70%3A5676)

## Recruitment

### Recruitment approach

**Intended audience for this research:** Veterans

**Recruitment strategy:** We will test with Veterans only for as that is the scope of our MVP, and specifically focusing on Veterans who have claimed disability in the past. We are testing a prototype, which won't allows testing for assistive technology, but will plan to do that when we have an instance in staging. Future research should focus on AT, especially magnification/zoom, desktop and mobile screen readers, as well as Veterans who experience arthritis or other dexterity issues. We'd like to understand if scrolling on mobile devices presents any difficulty. 

### Recruitment criteria

|Total requested|Completed sessions|Veterans|Family Member|Caregivers|Service Members|
|:-------------:|:----------------:|:------:|:-----------:|:--------:|:-------------:|
|      12       |          8       |8        |             |          |               | 


### Criteria Table 
This is a single study, and we are testing with a prototype

|                |Single Study|Cohort 1|Cohort 2|Cohort 3|Cohort 4|Cohort 5|Cohort 6|Cohort 7|Cohort 8|Cohort 9|Cohort 10|
|----------------|:----------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:-------:|
|***SEX***       |            |        |        |        |        |        |        |        |        |        |         |
|Male            |         4  |        |        |        |        |        |        |        |        |        |         |
|Female          |         4  |        |        |        |        |        |        |        |        |        |         |                                   
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***RACE***      |            |        |        |        |        |        |        |        |        |        |         |               
|Black           |         2  |        |        |        |        |        |        |        |        |        |         |               
|White           |         1  |        |        |        |        |        |        |        |        |        |         |                 
|Latinx          |         1  |        |        |        |        |        |        |        |        |        |         |                            
|Asian           |         1  |        |        |        |        |        |        |        |        |        |         |                 
|Native          |         1  |        |        |        |        |        |        |        |        |        |         |                
|Pacific Islander|         1  |        |        |        |        |        |        |        |        |        |         |                 
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |       
|***AGE***       |            |        |        |        |        |        |        |        |        |        |         |
|18-24 yo        |         1  |        |        |        |        |        |        |        |        |        |         |
|25-34 yo        |         1  |        |        |        |        |        |        |        |        |        |         |
|35-44 yo        |         2  |        |        |        |        |        |        |        |        |        |         |
|45-54 yo        |         2  |        |        |        |        |        |        |        |        |        |         |
|55+ yo          |         4  |        |        |        |        |        |        |        |        |        |         |
|      ---       |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***LGBTQ+***    |            |        |        |        |        |        |        |        |        |        |         |
|Gay             |         1  |        |        |        |        |        |        |        |        |        |         |
|Lesbian         |         1  |        |        |        |        |        |        |        |        |        |         |
|Bisexual        |            |        |        |        |        |        |        |        |        |        |         |
|Asexual         |         1  |        |        |        |        |        |        |        |        |        |         |
|Transgender     |            |        |        |        |        |        |        |        |        |        |         |
|Non-Binary      |         1  |        |        |        |        |        |        |        |        |        |         |
|Gender-fluid    |            |        |        |        |        |        |        |        |        |        |         |
|Queer           |            |        |        |        |        |        |        |        |        |        |         |
|Two-Spirit      |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***BENEFITS***  |            |        |        |        |        |        |        |        |        |        |         |
|Education       |            |        |        |        |        |        |        |        |        |        |         |    
|Employment      |            |        |        |        |        |        |        |        |        |        |         |
|Finances        |            |        |        |        |        |        |        |        |        |        |         |
|Healthcare      |            |        |        |        |        |        |        |        |        |        |         |
|Housing         |            |        |        |        |        |        |        |        |        |        |         |
|Memorialization |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |      
|***BRANCH***    |            |        |        |        |        |        |        |        |        |        |         |
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
|Urban           |            |        |        |        |        |        |        |        |        |        |         |
|Rural           |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***HARDWARE***  |            |        |        |        |        |        |        |        |        |        |         |
|Desktop         |         4  |        |        |        |        |        |        |        |        |        |         |
|Laptop          |            |        |        |        |        |        |        |        |        |        |         |
|Mobile          |         4  |        |        |        |        |        |        |        |        |        |         |
|Tablet          |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |     ---    |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***WEBSITE***   |            |        |        |        |        |        |        |        |        |        |         |
|VA.gov          |        4   |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|Ebenefits       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***LOGIN***     |            |        |        |        |        |        |        |        |        |        |         |
|DS Logon        |            |        |        |        |        |        |        |        |        |        |         |
|MyHealtheVet    |            |        |        |        |        |        |        |        |        |        |         |
|ID.me           |            |        |        |        |        |        |        |        |        |        |         |
|Login.gov       |            |        |        |        |        |        |        |        |        |        |         |
|       ---      |      ---   |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |   ---  |    ---  |
|***ID PROOF***  |            |        |        |        |        |        |        |        |        |        |         |
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

|                                                             |Participants| 
|-------------------------------------------------------------|:----------:|
|***ASSISTIVE TECH***                                         |            | 
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
|Traumatic Brain Injury (TBI)                                 |            |
|Post-Traumatic Stress Disorder (PTSD)                        |            |
|Attention-Deficit/Hyperactivity Disorder (ADHD)              |          2 |
|Autism                                                       |            |
|Vertigo                                                      |            |
|Aphasia                                                      |            |
|Dyslexia                                                     |            |
|Dyscalculia                                                  |            |
|Distractibility                                              |            |
|Memory loss                                                  |            |
|Reading difficulties                                         |            |
|Low tolerance for cognitive overload                         |          2 |
       

### Screener
Have you been denied a claim for disability in the last couple of years? Yes
 
Have you or someone on your behalf filed a Supplemental Claim before? Ok if no

Do you have new or relevant evidence that you think could prove your previously denied claim is now eligible? Yes, but ok if unsure

Do you have access to the internet and can you screen share? Yes

## Timeline
Aiming to schedule studies September 14-September 21

### Prepare
A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: [Eva Floyd](eva@coforma.io)
* Observer: [Sade Ragsdale](sade@coforma.io)
* Date and time of pilot session: September 19, 2022, 10am ET

### Research sessions
* Planned dates of research: September 22 - 29, 2022

### Length of sessions
* Session length: 45 minutes
* Buffer time between sessions: 30 minutes

### Availability in ET
**Sep 22, 2022**
11am-3pm

**Sep 23, 2022**
11am-3pm

**Sep 26, 2022**
11am-3pm

**Sep 27, 2022**
11am-3pm

**Sep 28, 2022**
11am - 3pm

**Sep 29, 2022**
11am - 3pm
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	

- Moderator: [Pamela Hastings](pamela.hastings@adhocteam.us)
- Research guide writing and task development: [Pamela Hastings](pamela.hastings@adhocteam.us)	
- Participant recruiting & screening:	Perigean
- Project point of contact:	[Pamela Hastings](pamela.hastings@adhocteam.us)
- Participant(s) for pilot test: [Eva Floyd](eva@coforma.io)	
- Note-takers:	TBD
- Observers: [Sade Ragsdale](sade@coforma.io), [Robin Garrison](robin.garrison@adhocteam.us), [Matt Self](matthewself.dsva@gmail.com)

