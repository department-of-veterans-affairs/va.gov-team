# Research Plan for [USDS, Login.gov Remote Identity Proofing, October 26 2022]

Contributors: Elizabeth Zahorian (USDS), Alexander Hoover (USDS), Annie Hirshman -
QQ2-C, Amanda Porter (VSP-Identity)

## Background

To date, the only direct observational study of users’ end-to-end experience with the unsupervised flow focused on the experience of users with low vision or blindness ([Low Vision and Blind Users - Usability Testing Report](https://docs.google.com/document/d/1X9dPQaI5xtCNYOD3nnBIygiFh6DBfE7zThNXiXpKeKU/edit?urp=gmail_link)). Login.gov researchers have proposed direct observational research of a broader user base in the past, including [Research plan - IdV Usability Testing with Agency Partners](https://docs.google.com/document/u/0/d/1MBZRCrYfir2T2d5NX_Hqr4vXsnvyrYq0gaVpSyo_lkY/edit?urp=gmail_link). At the time, the study did not move forward due to challenges with recruiting and resourcing due to COVID
restrictions.

Our team proposes a direct observational study with a broad user base so that we can
better understand the issues users are having with the unsupervised flow.
Understanding those needs will help the remote supervised teams diagnose issues and
design better solutions. We also expect other teams to benefit from this research.

### OCTO Objectives 
>Which [OCTO objectives] (https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) does this research support? Work with your VA lead and product manager as needed.

6. Logged-in users have a personalized experience, with relevant and time-saving features

- Veterans can manage their account to a consolidated login
- Veterans can decide the best CSP for their needs
- Veterans and their families can apply for all benefits online
- Veterans and their families can find a single, authoritative source of information

_All of the above are dependent on an easy and secure sign-in experience_

### Veteran Journey
>Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?<br>Are there moments that matter?

Our product fits in at the start of the Veteran Journey from Serving in the Military through Getting Out and Starting Up.  However, it additionally serves the Veteran throughout their journey because they may receive VA services throughout their life.

Starting Up
- Finding something to do
- Re-establishing and creating relationships
- Attending to health needs


Our product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) at the Starting Up of myself Life Stage. At this moment a veteran is looking to find help and support for their health.

Taking care of self
- Managing primary care and chronic health issues
- Maintaining my health
- Seeking support for an acute health event

## Research Goals	

Develop baseline understanding of how users experience Login.gov’s end-to-end unsupervised proofing flow, including what challenges they face and how they seek to
overcome them.

### Outcome

This research will inform UX and product strategy across the following sprint teams:

* Remote Supervised MVP Scoping: Where can an MVP Remote Supervised video chat solution be most helpful? (e.g. live video chat technical assistance, alternative biometric check if KYC fails)

* Capture qualitative data that we can match with session logs. This will help multiple teams, but primarily the unsupervised flow team, understand the human view of log errors we are tracking on the backend.

* This research will inform design, content, or functionality changes needed to increase accessibility on VA.gov and to address any pain points with the flow of the inherited proofing process. Learnings will be incorporated into future design, content, and functionality and shared with other teams to inform modal considerations of other products and services. The results will also be used to inform subsequent rounds of user research and testing.



### Research questions

1. Why do users drop off from Login.gov’s unsupervised flow? 
2. What are their primary blockers, challenges, or frustrations?
3. What types of help, assistance, and/or offramps would help users successfully
complete identity verification?
    1. Where can an MVP Remote Supervised video chat solution be most
helpful in unblocking users so they can continue with the flow? (e.g. live video chat technical assistance)
    2. Are there cognitive challenges that users have when going through a remote supervised identity proofing experience (e.g. emotional states)?
    3. What languages and/or accommodations need to be supported for a remote supervised flow?
4. What have been the major pain points with multi-factor authentication (MFA)?
5. Where are users running into issues with MFA?
6. What kinds of issues?
7. What are the contributing factors?
8. What authentications methods are the most effect?
9. How are low vision/no vision being effected by these major pain points?
10. What issues do screen readers have with multi-factor authentication (MFA)?

### Hypothesis
*  People who fail the "verify personal details" and/or "verify address or phone" steps in ID proofing will have other pieces of evidence (e.g., utility bills, W2s) that could be used to prove identity in a remote supervised MVP. We expect 5-15% of people who fail either step to have other forms of documentation.
*  Some participants will have issues taking pictures of their photo IDs or may have typos in other fields. Having the facilitator there to help the participant along will unblock a significant number of participants and allow them to move on to the next step where they might otherwise have failed or abandoned. We expect 10-20% of participants that have issues to be unblocked with the facilitator's assistance.
*  Some participants will have issues setting up MFA. Participants may select MFA methods that are the most familiar to them. We expect 10-20% of participants will skip setting up a second MFA method. 

## Methodology

1-hour remote direct observation studies with potential Login.gov users who have not yet started the identity proofing process.

Study participants will go through the actual process of setting up an account and identity proofing through a Login.gov staging environment using actual attributes and identity documents. This will allow us to observe as close to a “real”/actual user experience as possible. It also poses privacy considerations, which we have outlined mitigations for below.


### Location

Reserach sessions will be held remotely via Zoom. 


### Research materials
 

For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/Conversation%20Guide_Remote%20Identity%20Proofing%20and%20MFA.md)
- [Link to Login.gov Staging](https://staging.login.gov/)


	
## Recruitment	


### Recruitment approach

>The Department of Veterans Affairs and the U.S. Digital Service are conducting research on the public’s experience signing in to government websites through Login.gov.
>
>Login.gov is a government service that lets the public sign in to participating government agency websites with one username and password. Our research will help improve this service.
>
>During your research session, you will be asked to
>
>* Go through the full account creation process for Login.gov.
>* Share your screen with our researchers.
>* Enter data into an online form on a test website.
>* Enter your real information (name, address, social security number, and phone number) into the online form.
>* Upload your real state-issued photo ID (for example, a driver’s license). 
>
>All personal information used in the session will be encrypted and only accessible by you.
>
>This feedback session will take about 1 hour. We'll ask you some questions and watch how you use the website. We'll also record your comments and actions using written notes, audio recordings, and screen recordings. If you don’t want us to record one of these things, you can say no. We won't use your name when we're presenting the results of this feedback session. We may use the recording in the future to help show others how to improve websites.
>
>You may quit the session at any time. If you need a break, just tell the moderator. If you have questions, go ahead and ask them whenever you like.
>
>**Consent**
>
>By initialing below and signing this form, I give my permission for the VA to use:
>
>*	Written notes of verbal statements (initial here ______)
>
>* Recorded voice (initial here ______)
>
>* 	Screen recording (initial here ______)
>
>I understand that I may quit the session at any time. If I need a break at any time, I will tell the moderator. I agree to ask questions about the session if I don't understand something. If I have questions after the session is over, I can contact [name] at [email]@va.gov.


* We will take an iterative approach to the study and start by scheduling 12 participants.
* From there, we will assess recruiting needs for the second half of the studies. (For
example, it’s possible that we may have reached saturation of the common themes and problems)
* After observing 12 participants, we will want to recruit additional participants and continue the study.

### Recruitment criteria

Fielding Questions:

To recruit for participants who have never set up Multifactor Authentication (MFA)
* Have you ever had to use your mobile phone or email address to recieve a code in order to sign in.
    * (preferred answer is NO)

To recruit for low vision/ no vision participants, who use screen readers:
* Do you use a screen reader daily? 
    * (preferred answer is YES)


**Primary criteria (must-haves)**

Our goal is to recruit a total of 24 participants in order to observe a wide range of experiences across users and agencies. We want to have a broad sampling of participants.


* We are requesting a primary recruitment of 15 participants who are Veterans (30% more to account for no shows). 
* With a week break in the study. 
* We are then asking for a secondary recruitment of 15 participants who are Veterans (30% more to account for no shows). 


Below are the demographic breakdowns we are aiming for:

* Participants that have never set up Multifactor Authentication (MFA)
* Gender (even distribution)
    * Man, transgender, non-binary, or intersex
    * Woman, transgender, non-binary, or intersex
    * Transgender, non-binary, or intersex
    
* Race/ethnicity
    * 66% People of color
    * 33% White, Non-hispanic
    
* Age (even distribution)
    * 18-29
    * 30-44
    * 45-65
    * 65+
    
* At least 30% (3-4) of the participants to be Low vision/no vision

* All low vision/ no vision participants to be daily Screen readers 
    * (iOS, Jaws, Text to Voice)

**Secondary criteria (nice-to-haves)**

* Income (even distribution)
    * Under 20K
    * 20-39K
    * 40-59K
    * 60-79K
    * 80-100K
    
* Education
    *  Highschool Diploma
    *  Associates Degree
    *  Bachelors Degree
    *  Masters Degree    

## Timeline


### Prepare

Pilot sessions have already been conducted by Login.gov: 
* Date and time of pilot session: 
    * Pilot 1: 10/14 @ 11:00 AM ET
    * Pilot 2: 10/17 @ 10:00 AM ET
    * Pilot 3: 10/17 @ 10:45 AM ET

### Research sessions
* The team is asking for a week pause in between the first 12 participants and the second segment of 12 participants. We will come back with updated demographic asks based on learnings from the first 12 sessions. 
* The study will resume after secondary recruitment, we the standard 5 business days that Perigean needs for recruitment effort. 
* Planned dates of research: 
	* First round of researh: Nov 10th- Nov 18th
	* Break in reasearch- No sessions, **the week of Nov 21st** is set aside for recruitment
	* Second round of research: Nov 30th- Dec 9th
	


### Length of sessions
* Session length: up to 1 hour

* Buffer time between sessions: 30 minutes 

* Maximum Sessions per day: up to 5 per day

### Availability

First round of researh: Nov 10th- Nov 18th

* Thursday, November 10th: 9am - 4pm ET
* Monday, November 14th: 9:30am - 4pm ET
* Tuesday, November 15th: 9:30am - 4pm ET
* Wednesday, November 16th: 9:30am - 4pm ET
* Thursday, November 17th: 9:30am - 4pm ET
* Friday, November 18th: 9:30am - 4pm ET

Break in reasearch- No sessions, **the week of Nov 21st** is set aside for recruitment 

Second round of research: Nov 30th- Dec 9th

* Wednesday, November 30th: 9:30am - 4pm ET
* Thursday, December 1st: 9:30am - 4pm ET
* Friday, December 2nd: 9:30am - 4pm ET
* Monday, December 5th: 9:30am - 4pm ET
* Tuesday, December 6ht: 9:30am - 4pm ET
* Wednesday, December 7th: 9:30am - 4pm ET
* Thursday, December 8th: 9:30am - 4pm ET
* Friday, December 9th: 9:30am - 4pm ET
	
## Team Roles	
Please list the people who will be serving in each role.
**Include the primary phone number for moderator and the emails for moderator, notetaker, and observers.** 

- Moderator:
    * Alex Hoover - alexander.hoover@gsa.gov
    * Annie Hirshman - annie.hirshman@gsa.gov
    * Ponja Ocumarez - shqiponja.hoxhaocumarez@gsa.gov
    * Thomas Emerick - thomas.emerick@gsa.gov
    * Princess Ojiaku - princess.ojiaku@gsa.gov
	
- Research guide writing and task development: 
    * Elizabeth Zahorian (USDS)
    * Alexander Hoover (USDS) -alexander.hoover@gsa.gov
    * Annie Hirshman -QQ2-C	- annie.hirshman@gsa.gov
- Participant recruiting & screening:
    * Perigean 	
- Project point of contact:	
    * Alexander Hoover (USDS)- alexander.hoover@gsa.gov
    * Annie Hirshman - QQ2-C - annie.hirshman@gsa.gov
- Participant(s) for pilot test:
    *  N/A
- Note-takers:	
    * Alex Hoover - alexander.hoover@gsa.gov
    * Annie Hirshman - annie.hirshman@gsa.gov
    * Ponja Ocumarez - shqiponja.hoxhaocumarez@gsa.gov
    * Thomas Emerick - thomas.emerick@gsa.gov
    * Princess Ojiaku - princess.ojiaku@gsa.gov
    * Chanan Delivuk - chanan.delivuk@gsa.gov
    * Travis Newby - travis.newby@gsa.gov
    * Leanna Miller - leanna.miller@gsa.gov
    * Camille Hogan - camille.hogan@gsa.gov
- Observers:	
    * Alex Hoover - alexander.hoover@gsa.gov
    * Annie Hirshman - annie.hirshman@gsa.gov
    * Ponja Ocumarez - shqiponja.hoxhaocumarez@gsa.gov
    * Thomas Emerick - thomas.emerick@gsa.gov
    * Princess Ojiaku - princess.ojiaku@gsa.gov
    * Chanan Delivuk - chanan.delivuk@gsa.gov
    * Travis Newby - travis.newby@gsa.gov
    * Leanna Miller - leanna.miller@gsa.gov
    * Camille Hogan - camille.hogan@gsa.gov
    * Amanda Porter- ajohnson@clarityinnovates.com
    * David Kennedy- david.kennedy@adhocteam.us
    * Josh Kim- josh.kim@adhocteam.us 
