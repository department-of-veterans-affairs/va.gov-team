# OLD GUIDE - REFERENCE ONLY

# Digital Debt Dispute Usability Study

## Background

Briefly describe the background of your product. Consider:

-   What problem is your product trying to solve?
    
-   Where is your product situated on VA.gov? (ex: auth vs. unauth)
    
-   What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?
   
  

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/Debt%20Resolution/digital-dispute/product-outline.md)
  

If a Veteran has a VA debt that they would like to dispute there is currently no formalized process for them to follow. Disputes can currently be submitted in a variety of formats (verbal, written, etc.) and the information required is not clearly defined. This experience can be confusing for Veterans and inefficient as additional information may need to be collected from the Veteran for the VA to process the dispute effectively. We will be launching the form for VBA only for this initial launch but it will eventually include both VBA and VHA debt. **(per product brief)**

  
The Veteran filling out the digital dispute form is one aspect of the experience spanning 6 screens per debt disputed. The UI and design patterns will mirror the FSR and Streamlined Waver forms, which are much longer forms and have been enhanced and validated for optimized usability. One key difference in the digital dispute form will be the use of a minimal header. Another aspect is the Veteran understanding the next steps and what to expect once they submit the form. Finally, the possibility of silent errors raises the necessity of an alternate user flow should there be a form submission error, which will trigger an email alerting the Veteran of an error and what steps to take next.

Steps are being taken to minimize this possibility, and the team has prepared a different feedback mechanism should a silent error occur, ensuring the Veteran is aware that their submission was not successful and what they need to do next.

  
  

### OCTO Priorities

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) does this research support? Work with your VA lead and product manager as needed.

  

Objective 1: Our digital experiences are the best way to access VA health care and benefits.

  

-   Key Result 1: CSAT for our web products have increased by 5 points.
    
-   Key Result 2: Number of transactions processed using our products have increased by 25%.
    
-   Key Result 3: All new products have a faster transaction time than those they replaced.
    
-   Key Result 4: No transactions accepted by our products have a fatal error.
    

  

Objective 2: Our platforms are the best way to deliver products at VA.

-   Key Result 1: Our platforms hit the “elite” level (as defined by DORA) on Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service.
    
-   Key Result 2: Our platforms measure and improve the satisfaction of their internal users.
    
-   Key Result 3: Our platforms power twice as many interactions compared to last year.
    

  
  

### Veteran Journey

Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)? Are there moments that matter?

  

-    Balancing finances
    
-   Managing primary care and chronic health issues
    
-   Maintaining my financial, social, and emotional health
    
-   Managing my declining health
    

There are multiple intersecting factors that interact and can influence a Veteran’s financial situation, which can then impact their ability to address any VA debt and avoid more serious consequences. VA benefits overpayments and some types of VA copay debt can come out of the blue and be unrelated to personal decisions or actions. The ability to repay them is influenced by a Veteran’s personal financial situation, the stage they are on along the Veteran journey, and levels of personal financial decision making, motivation, and agency. Research shows that the transition between getting out and starting up can be an especially vulnerable time, with a survey of Veterans showing that 35% had trouble paying bills in their first few years after ending military service (Pew Research Center).

## Research Goals

  

What are you trying to learn from this research?

Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

  
  

 ### 1. To understand the usability of digital dispute.
    
### 2. To understand the comprehension of digital dispute, associated confirmation email, and error response email.

### 3. To understand Veterans’ comprehension of the entire user journey which includes the service design aspect: from completion of the form, receipt of confirmation email, and letters in the mail communicating receipt of form and decision on dispute

### 4. To surface concerns that Veterans might have with the digital dispute that we are not aware of.
    

  

### Outcome

How will this research advance your product to the next phase in the design process? What will you do with your learnings?

  

*Outcome of digital dispute: (per product brief)*


-   Ability to dispute either the existence or amount of a VA Debt
    
-   Easy access to user-friendly process with clear instructions and minimal and simple input required from user.
    
-   Clear understanding of timelines and next steps in the dispute process
    
-   Ability to submit a written statement to present their individual situation and reasoning for disputing the debt.
    
-   Receives an email confirmation of their debt dispute submission.
    

*Outcome of usability study:* 


-   To confirm and validate the usability and comprehension of digital dispute
    
-   To validate the comprehension of the confirmation email and understanding of next steps and what to expect
    
-   To validate the comprehension of the error email and understanding of next steps and what to expect
    

### Research questions

Consider bucketing research questions under research goals. For each question, think about:

  

### To understand the usability of digital dispute.

  

1.  How is the navigation, visual clarity, and consistency of the form?
    

  

### To understand the comprehension of digital dispute, associated confirmation email, and error response email.

  

2.  How understandable is the unauthenticated landing page that explains the digital dispute process? How clear are the guidelines on this page?
    
3.  How understandable are the personal information, contact information, debt selection and reason for disputing the debt(s) pages?
    
4.  How understandable is the reason for the dispute page?

5. How does the minimal header affect their experience with the form? 
    
6. How clear is the submission message? What do they understand to be the next steps? How clear is the associated submission email? What concerns do they have, if any?
    
7.  How clear is the error message? What do they understand to be next steps? How clear is the associated error email? What concerns do they have, if any?

### To understand Veterans’ comprehension of the entire user journey which includes the service design aspect: from completion of the form, receipt of email, and letters in the mail

8. What are Veterans feedback on the entire user journey? 


### To surface concerns that Veterans might have with the digital dispute that we are not aware of.

  
9.  Can Veterans summarize the takeaways of next steps and what is expected of them after going through the digital dispute?
    

### Hypothesis

What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.

  
  

Hypothesis 1

-   Based on previous research with forms, including the FSR (both MVP and enhanced), and the Streamlined Waiver, we have iterated on the form design structure and UI. Since we are pulling directly from these validated forms for the digital dispute, we hypothesize that Veterans will be able to easily understand and navigate the digital dispute. We hypothesize that the minimal header may enhance participants’ ability to focus on the task at hand and contribute to a frictionless experience. 

    

Hypothesis 2


-   The entire user journey from completion of the form, receipt of email, and letters in the mail will be clear. The information on the submission page and email will clearly explain expectations and next steps to the Veteran. 

-   Further context: 
Veterans will receive 2 letters once they submit the digital dispute. The first will inform them of the receipt of the dispute, and the second will inform them of the decision on the dispute. We hypothesize that this information will be clear to Veterans based on their review of the unauthenticated page, the submission confirmation message, and the confirmation email. 

    

  

## Methodology

Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.

Examples of common research methods include:

-   Usability testing - appropriate for evaluative research
    

### Location

Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

If remote, include your preferred video conferencing software. Choice of: Zoom, GoTo Meeting; WebEx.

  

-   On Zoom
    

### Research materials

Note: your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

  

For moderated usability tests:

-   [Link to conversation guide](url goes here)
    
-   [Link to prototype](url goes here)
    

  

## Recruitment

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.

Before writing your recruitment criteria, be sure to review the following resources.

-   [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research.
    
-   [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.
    
  
N = 8, Veterans that have or had a VBA overpayment debt and (desirable but optional) have disputed a VA debt or would like to dispute a debt 


Additional target user groups: 

Screen reader users: N = 2 of 8

  

### Recruitment approach

Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

- Primary recruitment criteria will be Veterans that have VBA overpayment debt and (desirable but optional) have disputed a VA debt or would like to dispute a debt 

Lean maximum variation strategy and prioritization of diversity and inclusion

Higher quotas: Veterans that have a cognitive consideration
Inclusion is prioritized. We seek to over-recruit underrepresented groups that are often underrecruited in research. 
Moreover, since a primary goal of this research is to understand comprehension, we want to talk to Veterans that have cognitive considerations, lower literacy levels, and English as a second language. 


### Recruitment criteria

List the total number and type (Veterans, caregivers, etc.) of participants for this study.

Total N = 8

We most want to speak to: 

- Primary recruitment criteria will be Veterans that have VBA overpayment debt and (if possible) feel that they don’t owe this debt or the amount is not correct

**Primary criteria (must-haves)**

- 8 Veterans interviewed, please recruit 12 Veterans
- All participants must be Veterans
- All have a computer, tablet, or smartphone and be willing to be complete their session on one of those devices
- During the session, be willing to share a web browser window on their device
- Have a working microphone on their device
- Have Zoom downloaded to their device prior to the session
- 50% of participants should complete the session on a smartphone.
- 50% of participants should complete the session on a desktop computer.

- 100% of participants must have experience with a VA overpayment debt now or in the past
- At least 50% of participants must have experienced financial hardship now or in the past
- Please confirm participants are comfortable talking about their personal finances. 

- 2 assistive technology users (screen reader users)

**Demographic must-haves**
Note: The following demographic criteria is our goal, but we understand that historically it's been challenging to recruit participants with VA debt.

At least 2 of 12 people who use a screen reader

At least 6 of 12 people must identify as Black, Hispanic/Latina/Latinx, Asian, or Native American

At least 6 of 12 people must identify as having a cognitive consideration

At least 5 of 12 people must identify as other than male

At least 3 of 12 people are without a degree or professional certificate 

At least 4 of 12 people are under 35

At least 4 of 12 people are over 55

At least 4 of 12 people who identify as gay, lesbian, bisexual, or transgender (LGBTQ+)

At least 3 of 12 non-native English speakers


**Secondary criteria (nice-to-haves) What criteria would strengthen your results?**

At least 2 of 12 people who live in a rural or remote area

At least 2 of 12 people who live in a major metropolitan area

### Screener

**1. VA debt**

Please select what applies to you (Check all that apply)

I currently have a fully unpaid or partially unpaid VA benefits overpayment debt (disability compensation, education or pension benefits overpayments)

I had a VA benefits overpayment debt in the last 4 years (disability compensation, education or pension benefits overpayments) and it has been fully repaid

I have not had a VA benefits overpayment debt in the last 4 years (does not qualify)

**2. Amount of debt**

Please select the amount of the debt for the highest VA debt you have had in the last 4 years

	The debt I had or currently have is in the range of $1 - $99
 
	The debt I had or currently have is in the range of $100 - $500
 
	The debt I had or currently have is in the range of $501 - $1,000
 
	The debt I had or currently have is over $1,000


**3. What is your perspective on this VA debt**

What is your perspective on this VA benefits overpayment debt? 

Please select what applies to you (Check all that apply)

	I don’t think I owe this debt to VA
 
	I don’t think the amount is correct on this debt
 
	I can’t afford this debt
 
	None of these apply to me
 
	Decline to answer this question


**4. Experiences of financial hardship**
Please select the statement(s) that apply to you: (Check all that apply)
 
I am currently experiencing financial hardship.

I have experienced financial hardship in the past.

I have never experienced financial hardship.  


**5. LGBTQ+**
Do you identify as a member of the LGBTQ+ community?
We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.

Yes

No

Decline to answer


**6. Cognitive consideration**
Has a medical professional ever diagnosed you with a cognitive disorder? Some examples include PTSD, Alzheimer's disease, Attention deficit disorder, Dementia, Parkinson's disease, Traumatic brain injury

Yes

No

Decline to answer


**7. What is your annual household income level?**

$0 - $25K

$25K - 49.9K

$50K - 74.9K

$75K - 99.9K

$100K - 149.9K

$150K - $199.9K

Over $200K



**8. Level of education**

What is the highest degree or level of school you have completed?

Less than a High School diploma

High School diploma or GED

Some College, but no degree

Associates Degree (for example: AA, AS)

Bachelor's Degree (for example: BA, BBA, and BS)

Master's Degree (for example: MA, MS, and MEng)

Professional Degree (for example: MD, DDS, JD)

Doctorate (for example: PhD, EdD)


## Timeline

Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.

The study will take place in January 2025


### Prepare

When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.

    
-   Date and time of pilot session: TBD
    

### Research sessions

-   Planned dates of research: 

    The study will take place in January 2025


### Length of sessions



Session length: 60 minutes
Buffer time between sessions: 1 hour
Maximum Sessions per day: 2


    

### Availability

When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

Please request enough dates and at least double the amount of time slots for the number of requested participants. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; 12 time slots for 6 participants). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

Availability
Tuesday, Wednesday
9am PT 
12pm PT
Monday, Thursday, Friday
10am PT 
1pm PT: 
*Prefer standard daily interview times (ie every day at 11am)


## Team Roles

Please do not include email addresses in this section. We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.

Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

-   Moderator: Charlotte Cesana 
    
-   Research guide writing and task development (usually but not always same as moderator): Charlotte Cesana, Megan Gayle, Joseph Lee
    
-   Participant recruiting & screening: Charlotte Cesana, Megan Gayle
    
-   Project point of contact: Charlotte Cesana, Megan Gayle
    
-   Participant(s) for pilot test: TBD
    
-   Accessibility specialist (for sessions where support for assistive technology may be needed):
    
-   Note-takers: Megan Gayle, Joseph Lee, **Perigean notetaker**
    
-   Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.
