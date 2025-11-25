# 2025 December Research Plan for E. Dole Act Section 145 Veteran's Health Care Scheduling Preferences on VA.gov’s Authenticated Experience

## Background 

Currently, Veterans lack self-service options to specify and update their health care scheduling preferences. This limitation leads to inefficient scheduling processes, increased administrative workload for VA staff, more frequent missed appointments, and a less personalized experience for Veterans. The creation and implementation of self-service appointment preference options on VA.gov delivers significant business value by enhancing operational efficiency and compliance, streamlining the scheduling process, reducing administrative burden on VA staff, and minimizing scheduling errors. Real-time integration between VA.gov, the Integrated Scheduling Solution (ISS), and VA Profile ensure accurate, up-to-date information, supporting timely and effective care delivery. This initiative aligns with the VA’s priorities to modernize and simplify access to benefits and care, while ensuring compliance with the Senator Elizabeth Dole 21st Century Veterans Healthcare and Benefits Improvement Act of 2025.  

Elizabeth Dole Act specifies that VA must enable Veterans to document the following 4 preferences regarding community care scheduling: 
- How and when the Veteran prefers to be contacted about an appointment for health care.
- Whether the Veteran prefers to schedule appointments without the assistance of the Department, if able.
- Whether the Veteran prefers to select a provider without the assistance of the Department, if able.
- Whether Veterans prefer appointments to be scheduled during certain days or times of day. 

### Desired User Outcomes
- As a Veteran, I want VA to know my preferences for self-scheduling, so that I am connected to the best and fastest option for me to make my appointments.
- As a scheduler, I want to know the Veteran's preferences, so I may connect them to the soonest, best care. 

#### Where is your product situated on VA.gov? 
This is part of the authenticated experience on VA.gov.

#### What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?
This MVP expands preferences to include appointment scheduling preferences in Profile on VA.gov.

## Product Brief
[E. Dole Act, Section 145 Appointment Scheduling Preferences product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/appointment-%20scheduling-preferences/README.md) 

#### OCTO Priorities
- VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

#### Veteran Journey
- Taking care of myself 
- Retiring 
- Aging

## Research Goals
1. Understand the mental model of users to determine where all health preferences should be selected (could be multiple places).  
2. Identify the preferences that hold significance and relevance to Veterans when they schedule health care appointments.

### Outcome
- Determine where these preferences should live
- Understand the Veteran perceived value of each preference and how Veterans expect VA to utilize their preferences, such as what workflow do they expect to be adjusted based upon their answer 
- Gather feedback on usability of proposals

### Research questions   
- What problems are Veterans encountering when a scheduler makes their appointment for them? What changes would Veterans like to see?
- What information do Veterans wish schedulers already knew about their preferences, so they didn't have to share that information with them each time?
- Where do Veterans expect to find all health preferences?
    - Do some preferences belong in different sections?
    - What would Veterans expect to find in scheduling preferences?
    - Should some preferences be found in multiple sections that are crosslinked?
- What do Veterans think these preferences will impact?
    - Which preferences are confusing for Veterans to understand?
    - Which preferences do Veterans think are valuable?
    - Do Veterans want these preferences to apply to only certain scenarios? Or are these universal?
- Do Veterans mention any changes, problems, or use cases that the current design solves or does not address?
- Do Veterans want to see any metadata about changes to a preference?
- Do Veterans propose additional preference types they would like implemented? 

### Hypotheses
1. Veterans will not find generic male/female provider preferences of value unless the Veteran can specify the provider’s gender by specialty.     
2. Veterans will not find the best method of contact of value unless they can specify the method of contact by day and time of day.
3. Veterans will not find appointment time preferences of value unless they can specify the preferences by the day and time window.
4. Veterans will not find general time frames for contact by phone (such as morning or evening) of value unless they can specify the window that they are available to receive the call. 
5. Veterans would expect some preferences to exist at a global level, such as in profile, while other preferences should exist at the episode of care level, such as when scheduling one appointment.
6. Veterans will expect to find certain health preferences in multiple places.

## Methodology
- Remote, moderated, one-hour concept testing sessions involving interview questions and interactions with 2 prototypes
- A total of 18 participants will be divided into 2 main groups. Each main group will be further divided into 3 sub-groups, with 3 participants in each sub-group.
- Both main groups will begin with Task 1. 
- Group 1 (9 participants): Start with Task 2, then move to Task 3
    - Sub-group 1a: Starts with prompt "Find where you would select your preference for a male or female provider."
    - Sub-group 1b: Starts with prompt "Find where you would select a preference for a scheduler to contact you to schedule a medical appointment."
    - Sub-group 1c: Starts with prompt "Find where you would specify what day and times you prefer to have your medical appointments." 
- Group 2 (9 participants): Start with Task 3, then move to Task 2
    - Sub-group 1a: Starts with prompt "Find where you would select your preference for a male or female provider."
    - Sub-group 1b: Starts with prompt "Find where you would select your preference for a scheduler to contact you to schedule a medical appointment."
    - Sub-group 1c: Starts with prompt "Find where you would specify what day and times you prefer to have your medical appointments. 

### Location
- Sessions will take place remotely via the Zoom meeting platform.
- POC: Slack feed-back channel and MS Teams chat
    - Nina Anusavice
    - Tim Licitra
    - Kristen McConnell 

## Research materials
- Conversation Guide 
- Elizabeth Dole Act, Section 145 MVP Prototype    

## Recruitment
We will partner with Perigean to recruit 22 Veterans; all efforts will be made to recruit a diverse sample. 

### Recruitment approach
Perigean will recruit all participants.

### Recruitment criteria     
- [Link to recruitment request ticket]()
- Total participants requested: 22
- Ideal completed sessions: 18
- Must be enrolled in VA healthcare
- Must have either a desktop/laptop, mobile device, or a tablet and must be willing to share their screen while they use the prototype.
- At least 6 Veteran with cognitive disabilities
- 50% age 55 - 64+
- Secondary Criteria
    - 25% Lives in a rural area
    - 10% women
    - 15% black
    - 12% Hispanic
    - 3% Asian
    - 1% Native American
    - 1% LGBTQ
- Please do not recruit Veterans who use assistive tech devices, as the Figma prototyping tool is not compatible with these devices. 

### Screener Questions
1. Do you have an email and password for either Login.gov or ID.me that you use to sign into VA.gov?
- If Yes, then move to question 2.
- If No, then do not recruit. 
2. Are you enrolled in VA healthcare? 
- If Yes, then move to question 3. 
- If No, then do not recruit. 
3. Have you scheduled or attempted to schedule a medical appointment in the last 12 months 
- If yes, then move to question 4. 
- If no, then do not recruit. 
4. Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, stroke, Alzheimer's disease and other dementias, or others not listed. This question helps us make sure we get feedback from all the people we serve. 
- If Yes, then recruit at least 6. 
- If No, then requit for other requirements. 
- I prefer not to answer. 

## Perigean Kick-Off Meeting
- Yes, date TBD.
- Perigean notetaker - No
- Timeline: TBD

## Pilot Test
- Pilot participant email:
- Date and time of pilot session:

## Length of Sessions
- Session length: 60 minutes
- Buffer time between sessions: 30 minutes
- Maximum Sessions per day: Preferably 2, but 3 are acceptable.

## Team Roles

- **Moderators, Research guide writing and task development, Note-takers:**
  - Nina Anusavice
  - Tim Licitra

- **Participant recruiting & screening:**
  - Perigean

- **Project point of contact:**
  - Kristen McConnell
  - Nina Anusavice
  - Tim Licitra

## Approvals
- Reviewed and approved by TBD on TBD
