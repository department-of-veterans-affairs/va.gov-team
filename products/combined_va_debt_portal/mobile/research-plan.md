 	# Research Plan for Mobile Feature Support, Debt Portal: Overpayments and Copayments, May 2025


 ## Background 🏗️
	
`Summary of study`
<br>

 Veterans can experience debt from the VA. The two types of debt that the Financial Management Team has focused on include: 

* Overpayments   
* Copayments (also referred to as copays)

Benefit overpayment debt can occur when a Veteran receives more compensation than they are entitled to, and it is handled by the Veterans Benefits Administration (VBA). Examples of overpayments include a dependent change from a divorce, or even when a Veteran receives education benefits for a class but then drops the class and does not report that. In these instances, the Veteran will owe money to the VA for such actions. 

Copayments are part of an individual's health insurance and are the amount of money owed for a specific healthcare service or prescription; the remainder of the cost is covered by insurance. Veterans with medical copayment debt from the VA have received care at a VA health facility. The Veterans Health Administration (VHA) manages medical copayments.  

Veterans can view their overpayment and copayment debts through the authenticated experience on VA.gov. After logging on, they can access their debt portal through the My VA tab. If overpayment or copayment debt exists, Veterans can take the following actions: 

* View the debt  
* Make a payment and resolve the debt online  
* Dispute charges   
* Request assistance from the VA for financial hardship (by completing the Financial Status Report, VA Form 5655\)  
* View resources about VA debt management

`What problem is your product trying to solve?`

The mobile app does not have any debt-related information for Veterans to access. How might we provide Veterans with the ability to view the total amount owed for benefit overpayment and medical copayment debts, as well as the details related to that debt on the mobile app?  

  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

Authenticated section of VA Mobile App, to be added to the existing "Payments" tab.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

Veterans currently manage their debt and copayments on VA.gov; this will be a new addition to the mobile app.

`Product Brief`
[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/Overpayment%20and%20Copayment%20Debts%20Product%20Brief.md)



### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

- `Starting Up (Moment: Balancing Finances)`
- `Taking Care of Myself (Moment: Maintaining my health)`
- `Putting Down Roots (Moment: Maintaining my financial, social, and emotional health)`
- `Retiring (Moment: Taking care of my health)`
- `Aging (Moment that Matters: Managing my declining health)`

## Research Goals 🥅	

### Goals

`1.` **Understand how users become aware of and locate information about money they owe in the app.**

`2.` **Assess how well users understand and interpret their copay and overpayment information in the app.**

`3.` **Identify what actions users want to take regarding money owed and evaluate how easily they can find guidance in the app.** 

`4.` **Evaluate the experience of completing actions outside the app.**

`5.` **Prioritize features for the minimum viable product (MVP) that will handle overpayments and copayments in the app.**

### Outcomes

- Validate designs for viewing copays + overpayment debts
- Determine when and how to add  functionality that enables Veterans to take action on copays and overpayment and be notified about new debts. 
- Address and identify accessibility gaps (note: Due to prototype limitations, we likely will not identify all accessibility issues)


### Research questions


**Understand how users become aware of and locate information about money they owe in the app.**

`1.` What prompts users to check on or take action regarding money they owe to the VA (in general, not specific to mobile)?  
`2.` How do users expect to be notified or informed about new bills or debts (in general, not specific to mobile)?  
`3.` Can users successfully locate the section of the app with information about money owed?  

**Assess how well users understand and interpret their copay and overpayment information in the app.**

`4.` Is the overview of money owed (copays and overpayments) clear, complete, and useful?  
`5.` Can users access and make sense of detailed information for each item?  
`6.` Do users feel confident they understand what they owe and why?  
`7. ` Do users find access to downloadable PDF copay statements helpful, and would they use this feature?  

**Identify what actions users want to take regarding money owed and evaluate how easily they can find guidance in the app.**

`8.` What types of actions (e.g., pay, request financial help, dispute a charge) do users expect to take in the app?  
`9.` How do users expect to complete each of these actions?  
`10.` Can users find clear, actionable guidance on how to proceed with each option?  

**Evaluate the experience of completing actions outside the app.**

`11.` How do users feel about having no option to pay their debt or bills through the app?  
`12.` How do users feel about leaving the app to pay their debt through pay.va.gov?  
`13.` How do users feel about leaving the app to pay their bills through pay.gov?  
`14.` Are users comfortable navigating to a new site and copying/pasting information from the app to complete a payment?  
`15.` How do users feel about being redirected to VA.gov to complete actions like requesting help or disputing a debt?  

**Prioritize features for the minimum viable product (MVP) that will handle overpayments and copayments in the app.**

`16.` Would users prefer the experiences of leaving the app to pay via pay.va.gov / pay.gov OR having no option to pay from the app at all?  
`17.` Would users prefer the experience of leaving the app to read help documentation OR seeing help documentation directly in the app?  


### Hypotheses

- Veterans will want notifications from the app when payments are due.
- Veterans will appreciate the overview of money owed from overpayment debts and copays.
- Veterans will find the details of each payment owed clear.
- Veterans will find navigation confusing when redirected out of the app to complete tasks.
- Veterans will be frustrated by having to copy and paste information in another site to make payments.
- PDF copay statements will not be useful.
- Veterans will find the help pages overwhelming with too much information.



## Methodology  🛠️

Moderated usability testing using high-fidelity Figma prototypes over Zoom. Participants will view and interact with the prototype via the Figma mobile app, using account credentials that we supply during the sessions. 

The prototype will simulate the mobile app's MVP debt portal where users can view details on their copays and overpayment debts, and also simulate the journey of leaving the mobile app to access information via a web browser.

Backup plan: in case of any participants having difficulties opening the prototype in the Figma app, we will have them open the prototype in a web browser on their phone.

Sessions will also include semi-structured interview questions. These questions will explore:

- Experiences and awareness of debt before accessing the app
- Actions taken outside of the app that will not be included in the MVP, such as payments, disputing charges, and requesting financial assistance. For the initial release, users will be linked to VA.gov for these actions

Note on Accessibility: Due to prototype limitations, this study will not include testing with users of assistive technologies. However, prototypes will be reviewed by accessibility specialists, who will identify any accessibility issues they can detect through expert evaluation.

- [X] **Remote**
- [ ] **In-person**


## Research materials 📔


**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/combined_va_debt_portal/mobile/conversation_guide.md)
- Prototype: [Version with no payment](https://www.figma.com/proto/kRA7JHbthNrSLxTQHrzH8T/MFS---Overpayments---Copays-%7C-VA-Mobile?page-id=2001%3A429&node-id=7274-61308&p=f&viewport=24600%2C-1348%2C0.59&t=RzEWQo0ZfxtjJRxF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7274%3A61308&show-proto-sidebar=1) / [Version with payment](https://www.figma.com/proto/kRA7JHbthNrSLxTQHrzH8T/MFS---Overpayments---Copays-%7C-VA-Mobile?page-id=2001%3A429&node-id=7372-28070&p=f&viewport=24600%2C-1348%2C0.59&t=RzEWQo0ZfxtjJRxF-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7372%3A28070&show-proto-sidebar=1)




## Recruitment 🎯	


### Recruitment approach

We would like Perigean to recruit Veterans, non-AT (assistive technology) users, for Zoom sessions on smartphones.

We would like our participants to download the Figma app prior to the sessions. They should not create an account within the app, only have it downloaded. It is available at the [Google Play Store](https://play.google.com/store/apps/details?id=com.figma.mirror&hl=en_US) and the [Apple App Store](https://apps.apple.com/us/app/figma/id1152747299).

Two cohorts: those who have experience with benefits overpayment debts, and those who have experience with VA healthcare copayments. Ideally, some participants will have experience with both.

### Recruitment criteria

- `Veterans:` **[16]** (2 cohorts of 8 each)
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[16]**
- `Ideal completed sessions:` **[10]** (5 from each cohort)

### Primary criteria (must-haves)

- `All participants must meet at least one of the following primary criteria, and ideally some will meet both:`
	- `Cohort 1: 8 had a debt balance from overpayment debt in last three years`
	- `Cohort 2: 8 received a VA copayment bill in the last year`
- `Range of debt amount (for Cohort 1)`
- `Complete session on their smartphone via the Zoom app`
- `Download the Figma app ahead of time, though not creating an account`
	- [Figma on Google Play Store](https://play.google.com/store/apps/details?id=com.figma.mirror&hl=en_US)
	- [Figma on Apple App Store](https://apps.apple.com/us/app/figma/id1152747299)
- `No assistive technology users or accessibility features turned on`
    * (this is due to prototype limitations; we will be testing with assistive technology at a later date)

### Secondary criteria (nice-to-haves)

- `At least 5 ages 55+`
- `At least 5 under age 35`
- `At least 7 with cognitive disability`
- `At least 5 people of color`
- `At least 4 in a rural area`
- `At least 4 without a degree`
- `At least 2 with immigrant origins`
- `At least 2 women`
- `At least 2 from LGTBQ+ community`

### Screener Questions

#### Cohort 1: 8 people (overpayment debt)

1. Please check all that apply
	1. I currently have an unpaid VA benefits overpayment debt (disability compensation, education, or pension benefits overpayments)
	2. I previously had a VA benefits overpayment debt in the last 3 years (disability compensation, education, or pension benefits overpayments)
	3. I have not had a VA benefits overpayment debt in the last 3 years _(DISQUALIFY)_
<br>

2. Please select the total amount of your debt from VA overpayments from the last 3 years
	1. The debt I had or currently have is in the range of $1 - $99
	2. The debt I had or currently have is in the range of $100 - $500
	3. The debt I had or currently have is in the range of $501 - $1,000
	4. The debt I had or currently have is over $1,000

	_(please recruit a range of debt amount as much as possible)_
<br>

3. Have you received a medical copayment bill from VA in the last year?
	1. Yes
	2. No 
<br>

4. Are you able to join the Zoom session from a smartphone such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.
	1. Yes
	2. No _(DISQUALIFY)_
<br>

5. When interacting with apps on your smartphone, do you usually adjust the standard display and/or use accessibility features? Please select all that apply.
	1. I mostly use the phone's standard display settings. _(ask next question)_
	2. I often increase the text size significantly. _(DISQUALIFY)_
	3. I use screen magnification or zoom features. _(DISQUALIFY)_
	4. I use a screen reader (such as VoiceOver or TalkBack). _(DISQUALIFY)_
	5. Other _(DISQUALIFY)_
	6. Prefer not to say _(DISQUALIFY)_
<br>

6. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.
	1. Yes
	2. No
	3. Decline to answer
<br>

7. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
	1. Yes _(mark as having a cognitive disability)_
	2. No
	3. Decline to answer
<br>


#### Cohort 2: 8 people (medical copays)

1. Have you received a medical copayment bill from VA in the last year?
	1. Yes
	2. No _(DISQUALIFY)_
<br>

2. Please check all that apply
	1. I currently have an unpaid VA benefits overpayment debt (disability compensation, education, or pension benefits overpayments)
	2. I previously had a VA benefits overpayment debt in the last 3 years (disability compensation, education, or pension benefits overpayments)
	3. I have not had a VA benefits overpayment debt in the last 3 years
<br>

3. Are you able to join the Zoom session from a smartphone such as a Samsung Galaxy or Apple iPhone? Any kind of smartphone will work as long as it connects to the internet.
	1. Yes
	2. No _(DISQUALIFY)_
<br>

4. When interacting with apps on your smartphone, do you usually adjust the standard display and/or use accessibility features? Please select all that apply.
	1. I mostly use the phone's standard display settings. _(ask next question)_
	2. I often increase the text size significantly. _(DISQUALIFY)_
	3. I use screen magnification or zoom features. _(DISQUALIFY)_
	4. I use a screen reader (such as VoiceOver or TalkBack). _(DISQUALIFY)_
	5. Other _(DISQUALIFY)_
	6. Prefer not to say _(DISQUALIFY)_
<br>

5. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.
	1. Yes
	2. No
	3. Decline to answer
<br>

6. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
	1. Yes _(mark as having a cognitive disability)_
	2. No
	3. Decline to answer
<br>


## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **July 16 9:00 AM - 11:30 AM / 2:30 PM - 3:30 PM EDT**

### Prepare

- `Pilot participant name:` **Matt Guest**
- `Date and time of pilot session:` **July 16 2:30 PM EDT** 

### Research sessions
- `Planned dates of research:` **07/24-08/01**

### Length of sessions
- `Session length:` **1 hour**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **4**

### Availability

- `[07/24, Thursday, 10:30 AM - 4:00 PM] EDT`
- `[07/25, Friday, 10:30 AM - 1:00 PM] EDT`
- `[07/28, Monday, 9:00 AM - 4:00 PM / 8:00 PM - 10:30 PM] EDT`
- `[07/29, Tuesday, 9:00 AM - 4:00 PM / 8:00 PM - 10:30 PM] EDT`
- `[07/30, Wednesday, 9:00 AM - 1:00 PM] EDT`
- `[07/31, Thursday, 9:00 AM - 4:00 PM] EDT`
- `[08/01, Friday, 9:00 AM - 4:00 PM] EDT`


## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Emily DeWan**	
- `Research guide writing and task development:` **Emily DeWan**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Natalie Davied Gibbons**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **n/a**	
- `Note-takers:` **Perigean**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

	- **Natasha Huckleberry**
	- **Thomas Michaud**  
	- **Natalie Davied Gibbons**
	- **Jason DeHaan**
	- **Parker Baranowski**
	- **Michelle Middaugh**
	- **Denise Coveyduc** 
	- **Charlotte Cesana**
	- **Megan Gayle**
	- **Marcela Rojas**
	- **Rory Cooper**
	- **Joni Chan**
	- **Janelle Finnerty**

## Approvals ✅
- `Reviewed by Michelle Middaugh, OCTO Product Owner on 06-27-2025`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
