# Enabling pre-check-in for telephone appointments  Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Check-in Experience**

Date: May 31, 2022

[Nira Datta](nira.datta@civicactions.com) and [Kristen McConnell](kristen.mcconnell@adhocteam.us)

[Research Report PDF](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/telephone/research-findings.pdf)

<br>

**Jump to:**

[Key findings](#key)

[Recommendations](#recommendations)

[Who we talked to](#who)

[Further research needed](#further)

<br>

# Background
In general, there’s been an increase in telemedicine appointments, mainly due to COVID-19. This is often either via video or telephone.

After stakeholder feedback and feasibility discussions, we decided to focus on integrating telephone appointments into pre-check-in. 

We interviewed a VA provider and identified two potential pain points we wanted to address for our MVP. 

Pre-check-in is currently available for in-person appointments.

Veterans can review and confirm: 
- contact information
- emergency contact
- next of kin

We built an MVP for pre-check-in for telephone appointments.

Our MVP addresses two potential pain points (based on an [interview with VA provider](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/discovery/telephone-appointments/staff-interviews/interview-notes.md)): 
- Veterans show up on-site, confusing telephone appointments for in-person
- Providers may be late and often don’t call at the appointment time

# Research Goals
- Validate our MVP:
  - Clearly state it’s a telephone appointment
  - Set expectations with a Veteran that a provider may join the appointment late
- Understand Veteran’s current experience with telephone appointments 
- Clarity of the “too late” message – this is when a Veteran tries to complete pre-check-in after midnight on the day of their appointment
  - This is a key part of the PCI design that we haven’t tested before.
<img width="826" alt="Research Goals" src="https://user-images.githubusercontent.com/66287082/171252256-1a8b6b95-0aa8-4534-ac80-7199fda42f45.png">

# Methodology 
- Used Perigean recruitment  
- Remote, moderated 1 hour sessions
- Semi-structured interviews
- Observational and task-based [usability testing via UX Pin](https://preview.uxpin.com/c9613f8da892cb84bd512b73b4d4cd3b075e7d27#/pages/150044653/simulate/no-panels?mode=if)

# Key Findings
## How telephone appointments current work and are viewed
1. Telephone appointments are viewed as convenient, time saving, and reducing travel.
2. The vast majority of past telephone appointment examples were follow ups with specialists or primary care physicians.
3. Often someone, such as a nurse, called a few days before to confirm the telephone appointment, but no other information was review prior to the appointment.
4. There are a variety of methods implemented to send reminders and manage telephone appointments.
5. Veterans have strong preferences on how they want to be contacted by the VA for telephone appointments.

## Pre-check-in feedback
6. Veterans had a polarized reaction to current pre-check-in, which ranged from positive and valuable to negative and concerned.
7. A few Veterans believed that telephone appointments included video appointments, but the UI design helped eliminate this confusion.
8. Health questionnaires and medication reviews increased the perceived value of pre-check-in for Veterans.
9. Veterans suggested a variety of features or appointment information to add to the experience.
10. All participants though the name ‘Pre-check-in’ clearly represented the experience.
11. The majority of Veterans appreciated the ‘running late’ message.
12. The current link to VA.gov’s profile in order to edit contact information is sufficient for Veterans; however, most participants ultimately expected to edit directly within the pre-check-in workflow.
13. Veteran expectations for the ‘Sign in to manage appointments’ link matched the designed intent.
14. The ‘too late’ message confused many Veterans. 

# Details of Findings 
## How telephone appointments currently work and are viewed
### 1. Telephone appointments are viewed as convenient, time saving, and reducing travel.
- However, some participants prefer it for non-assessment type conversations with their providers.
- The Veteran’s relationship with their provider and stress level caused by meeting in-person also influences this appointment modality preference.

“I tend to get stressed going to in-person appointments. Having them over the phone eases the stress.”

“Just the convenience…I don’t have to take an extra hour to drive to an appointment, when I need to schedule around motherly duties.”

### 2. The vast majority of past telephone appointment examples were follow ups with specialists or primary care physicians. 
- Behavioral health, nutrition, and neurology were a few of specialities Veterans had telephone appointments with. 
- In some cases, the appointment may be an initial consult with a primary care physician.

### 3. Often someone, such as a nurse, called a few days before to confirm the telephone appointment, but no other information was reviewed prior to the appointment.
- Contact, emergency contact, and next of kin information were not reviewed by any participants prior to their current telephone appointments. This is also true at the beginning of their call with their provider.

### 4. There are a variety of methods implemented to send reminders and manage telephone appointments.
- Current telephone appointments includes a variety of reminders via: 
  - Phone call
  - SMS 
  - Email
  - Physical card (letter or postcard)
- Veterans reschedule and cancel telephone appointments in a variety of ways:
  - Calling in
  - Digital method (website, native app, or secured messaging)

### 5. Veterans have strong preferences on how they want to be contacted by the VA for telephone appointments.
- Veterans may screen calls, so it is important to identify the phone number that the provider is calling from.
- Some Veterans missed calls from the VA, when the VA didn’t contact them at their preferred phone number.
  - For our participants, most wanted their mobile phone listed as their preferred number and they commented on missing calls to their landlines or not having a home phone.
    - However, we specifically recruited for Veterans with a mobile phone for this study, which could influence this preference.

## Pre-check-in feedback
### 6. Veterans had a polarizing reaction to current pre-check-in, which ranged from positive and valuable to negative and concerned.
- Reactions to the pre-check-in experience as currently implemented were either: 
  - Positive: easy-to-use, preference for digital
  - Negative: sees no value to complete prior 
- Some shared general concerns related to: 
  - Accessibility (wi-fi, AT)
  - Reluctance to complete if mandatory for every appointment

“I like it…it is really simple”

“The pre-check in doesn’t do anything because they re-verify it when you call.”

### 7. A few Veterans believed telephone appointments included video appointments, but the UI design helped eliminate this confusion.
- We recruited for Veterans who had a medical appointment over the phone within the past 12 months.
  - As a result, we had a few Veterans start sharing their experience with video visits via VVC. After clarifying, most of the Veterans were able to share an experience with an audio only telephone appointment.
- The phone icon, “Phone call” wording, and the next steps wording were well understood and liked by Veterans. 
  - The combination helped eliminate confusion between this appointment type being an audio only appointment vs. a video appointment.
<img width="156" alt="Screen Shot 2022-05-27 at 5 25 36 PM" src="https://user-images.githubusercontent.com/66287082/171253117-298b9a87-d7b3-493b-8de0-edb7b14e8b09.png">
- This is an interesting anecdote that gives some small insight into Veterans mental model for appointment types.


### 8. Health questionnaires and medication reviews increased the perceived value of pre-check-in for Veterans.
- Without any specific prompting about health questionnaires,
  - Half of our participants commented that they would like to review their medication list within pre-check-in. They believe it would help their provider understand their medical history and help streamline their appointment experience.
  - Half of our participants also commented that they wanted other health questionnaire features, such as:
    - Questions for my provider
    - Updating what medical concerns they want to talk to their provider about

“I try to have all my ducks in a row before the appointment, so I get what I need…I will have the list of questions I have to ask her and that kind of stuff.”

### 9. Veterans suggested a variety of features or appointment information to add to the experience.
- Preferred phone number (3 participants)
- Provider’s name (3 participants)
- Type of appointment, such primary care or cardiology (3 participants)
- Add to calendar (2 participants)
- Insurance review (2 participants) 
- Confirmation email that pre-check-in was completed (2 participants) 
- Sharing earlier when pre-check-in expires (2 participants)
- We have heard a lot of these suggestions in previous studies as well.

### 10. All participants thought the name “Pre-check-in” clearly represented the experience.
- “Yeah, I think it is good. I don’t think I could call it anything else.”
- “I think pre-check-in is the best bet. You aren’t checking in, because you are doing it in advance.”
- “I don’t know what else you would call it. It is exactly a pre-check-in.”
- “I would leave it the same, because that is normal verbiage.”

### 11. The majority of Veterans appreciated the “running late” message.
- While most Veterans understood and liked this wording, it prompted additional questions from a select few Veterans:
  - What do I do if it’s past the 15 minutes?
  - Why am I seeing this?
    - This group was also confused about the timing and overall purpose of pre-check-in. 

“I understand doctors get behind and I am glad the box is there to remind people. At least, there’s a preventative step to warn people whereas a lot of people don’t want to wait.”
<img width="514" alt="Running-late" src="https://user-images.githubusercontent.com/66287082/171253967-20871f33-fc43-4b84-b285-46f9767675fa.png">

### 12. The current link to VA.gov’s profile in order to edit contact information is sufficient for Veterans; however, most participants ultimately expected to edit directly within the pre-check-in workflow.
<img width="158" alt="Clicking-no" src="https://user-images.githubusercontent.com/66287082/171254082-b1c05ab3-4540-413a-bcb7-103e61272487.png">

“If I click no, then it would let me edit it.”

<img width="301" alt="Profile link" src="https://user-images.githubusercontent.com/66287082/171254290-1eaa425b-f088-4afa-b435-8e7d0940775d.png">

“I think it is fine, because it does give you the option to sign in to correct those positions that need to be corrected.”


# Additional Insights


# Recommendations

# Appendix

[Research plan]https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/pre-check-in-usability/research-plan.md

[Conversation guide]https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/pre-check-in-usability/conversation-guide.md

[Interview transcripts](link here)


## Tools used for Synthesis

Mural Board

## Who we talked to 

**Recruitment criteria**


## Underserved groups we haven’t talked to 

_
Screenshot of completed recruitment checker
![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/veteran-facing/pre-check-in-usability/Screen%20Shot%202021-11-29%20at%2010.53.27%20AM.png)
