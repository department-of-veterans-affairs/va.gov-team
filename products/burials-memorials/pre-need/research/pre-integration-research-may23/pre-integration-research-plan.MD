# Pre-Integration Research Plan for MBS Self-Service Team, Application for Pre-Need Eligibility Determination (VA Form 40-10007), May 2023

## Background
The National Cemetery Administration (NCA) is working to modernize its systems, including the system that processes pre-need applications (VA Form 40-10007) for determining eligibility for burial in a VA national cemetery. Presently, pre-need cases are processed in the newly-modernized system and in the legacy system. Analysts are swiveling between the two systems to manage cases, which impacts timeliness measures for Eligibility Office (EO) analysts and Scheduling Office (SO) agents at the National Cemetery Scheduling Office (NCSO). Ultimately, users applying for pre-need are impacted, as eligibility determinations are delayed due to longer processing times.

The application for Pre-Need Eligibility Determination (VA Form 40-10007) is offered to Veterans, service members, family members, and representatives as both authorized/unauthorized experiences, and it is accessible through the Burials and Memorials hub page. 

Based on discovery research and the overall goals for the project, our plan is to: 
1. Release incremental enhancements in a "Pre-Integration" phase (before the application is integrated with related systems) **and to** 
2. Release enhancements in an "Integration" phase in which the form will be fully integrated with the modernized system to allow for faster case processing

For this research study, our aim is to focus on the testing of Pre-Integration phase designs and enhancements.

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/initiative-brief.md). 

### OCTO Priorities 
This research supports the following 2023 OCTO objectives:
  * Enhance Veterans’ personalized online experience

### Veteran Journey
The Pre-Need application applies to life stages from **Serving** onward to **Dying**, as service members, Veterans, family members, and representatives may apply at any time to determine if applicants are eligible for burial in VA national cemeteries. 

## Research Goals / Questions	
The goals of this user research are to: 
  * Learn how users experience applying for pre-need to identify improvements that can be made to address usability pain points, address user feedback/concerns, improve the rate of mobile applications, and improve submission rates
    * What's working well for users and what are the pain points they're experiencing when applying for pre-need eligibility determination?
    * Why are most users applying through desktop devices, and how can we improve rates for mobile applications and successful submissions overall?
    * Since the majority of users are in the upper age brackets (35+ years old), what enhancements can we make to improve the application process for them?
  * Understand if the pre-need application is confusing for users in the entering of their details, as information is collected for up to four people in the form (applicant, sponsor, preparer, previous decedents), and determine which enhancements could mitigate confusion and reduce form entry errors
    * Which areas of the pre-need application are potentially confusing for users, particularly in determining whose details they need to enter throughout the form?
    * Do they understand the difference between an Applicant, a Sponsor, a Previous Decedent, and a Preparer, and is it simple for them to determine in which sections of the form they need to provide these details?
    * Do they understand which option to select for the applicant's relationship to the service or Veteran (I am the service member or Veteran, Spouse or surviving spouse, Unmarried adult child, Other)?
  * Since the pre-need application contains potentially sensitive questions and because it deals with a sensitive topic overall, determine how the application process and content presented to users in the form can be improved to reduce or eliminate any discomfort users may experience when applying
    * Which areas of the form, if any, do users find particularly sensitive?
    * Does the pre-need form content need user needs in this particularly sensitive application process? If not, how can it be improved to address user needs?  

### Outcome
This research will help in identifying what is working in the current form and if user pain points exist that we can then fully address for the integration phase if we are unable to address them pre-integration. 

### Hypothesis
Our hypothesis is that users might: 
- Find the mobile experience unfavorable, as certain pages of the application are particularly lengthy
- Experience frustration with specific parts of the UI, such as with uploading supporting documents, due to being limited to one file type due to the legacy system
- Deem certain parts of the form as too insensitive, and they may wonder why they have to provide that information, particularly questions centered around the death of family members and other demographic questions
- Be confused by the different terminology in the form, causing them to wonder where they need to enter specific information or which options they should select

## Methodology
Moderated usability testing with Zoom on mobile and desktop

### Location
Remote location with a preferred video conferencing software as Zoom

### Research materials
For moderated usability tests: 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/research/pre-integration-research-may23/pre-integration-conversation-guide.MD)
- [Link to Pre-Need Pre-Integration usability testing prototype](https://bahdigital.invisionapp.com/console/share/HF26GKB9W7Q) - This prototype contains content and accessibility enhancements that we're able to implement pre-integration.
	
## Recruitment	

### Recruitment approach
We’d like to recruit 9 participants for a total of 6-8 completed sessions. We’ll use Perigean to recruit participants.

### Recruitment criteria 

**Primary criteria (must-haves)**
- Amount: Target is 6-8 participants but recruit 10
- Age ranges: 
    * Around 60% 35+
    * Around 20% 65+
    * Around 20% 18-34
- Types: 
    * Three to four service members and Veterans 
     	- Age 55+, Black, male 
    	- Age 35-54+, White, female
     	- Age 18-34, Hispanic, male 
    * One to two spouse or surviving spouse of a service member of Veteran (A **spouse** is a person who is or was legally married to a service member or Veteran. A **surviving spouse** is someone who was legally married to the service member or Veteran at the time of their death and includes a surviving spouse who remarried.)
     	- Any age, LGBTQ+, female
    * One to two personal representative (a person filling out the pre-need form on behalf of an applicant, such as a **preparer**)
     	- Age 35+, Asian, Male 
    * One unmarried adult child (An **unmarried adult child** is an individual who became physically or mentally disabled permanently and incapable of self-support before the age of 21, or before 23 years of age if pursuing a full-time course of instruction at an approved educational institution.)
     	- Age 18-20 or 18-22 if pursuing degree
    * One parent of a service member (not the parent of a Veteran so only applicable for parents of service members; considered a Corey Shea Act applicant)
     	- Age 40+, Native American
    * One to two people interested in pre-need eligibility determination
- Participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom
- At least 3-4 people who will use a mobile device during the research session (tablet is ok too)
 
**Secondary criteria (nice-to-haves)**
Have an identified cognitive impairment (around 1 participant)

**Screener questions to target criteria not captured in the recruitment sign-up survey:**
1. Are you a Veteran or a service member?
    * If yes, go to question 3. 
    * If no, go to question 2.
2. Which of the following describes your relationship to a Veteran or service member? 
    * I am their spouse or surviving spouse (A **spouse** is a person who is or was legally married to a service member or Veteran. A **surviving spouse** is someone who was legally married to the service member or Veteran at the time of their death and includes a surviving spouse who remarried.)
    * I am their unmarried adult child (An **unmarried adult child** is an individual who became physically or mentally disabled permanently and incapable of self-support before the age of 21, or before 23 years of age if pursuing a full-time course of instruction at an approved educational institution.)
    * I am their parent (only applicable for parents of service members)
    * I am their personal representative (a person filling out the pre-need form on behalf of an applicant, such as a **preparer**)
    * None of the above, but I am interested in applying for pre-need eligibility determination for myself or for someone else
3. Have you applied or tried to apply for a pre-need eligibility determination at least once in the last 12 months? 
    * If yes, go to question 5. 
    * If no, go to question 4.
4. Are you interested in applying for a pre-need eligibility determination for yourself or on behalf of someone else? 
    * If yes, go to question 5. 
    * If no, disqualify.
5. Do you need to use assistive technology to use the internet such as VoiceOver on an iPhone, TalkBack on an Android device, or JAWS on a computer? Proceed to question 5a if yes. Proceed to 5c if no. 
    * 5a. Are you able to join the Zoom session using this assistive technology?  
Answer should be yes to satisfy criteria for screen reader. 
    * 5b. Please list the name of the assistive technology or software you will use during the session. 
    * 5c. Are you able to join the Zoom session from a smart phone such as a Samsung Galaxy or Apple iPhone?
    	* Any kind of smart phone will work, as long as it connects to the internet. Tablet is ok, too. 
    	* Answer should be yes for 3-4 users to satisfy criteria for mobile testing. The other half should be on desktop devices.

## Timeline

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: lcruz8646@gmail.com
* Date and time of pilot session: Thursday, 6/1/23 @ 5:30pm

**We also need a kick-off meeting with Perigean for recruiting as soon as possible. Our availability is flexible for this.** 
- Requested dates/times for kick-off meeting: 
	- Wed. 5/31: 9-9:30am, 10am-1:30pm, 2:30-4pm; 
	- Thur. 6/1: 9-9:30am, 10:30am-1pm, 3:30-4pm.

### Research sessions
* Planned dates of research: 
	* Usability testing target dates: Wednesday, 6/7/23; Thursday, 6/8/23; Friday, 6/9/23

### Length of sessions
* Session length: 45 minutes
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 4-5

### Availability
* Wednesday, 6/7/23: 9:30am-1pm, 3-4pm, 
* Thursday, 6/8/23: 9:30am-12:30pm, 1-4pm, 5-6pm
* Friday, 6/9/23: 9:30am-12:30pm, 1-4pm
If more timeslots are needed, we could open up Monday, 6/12/23.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.** 	
- Moderators: 
    * Cindy Cruz, 202-280-5654, cruz_cindy@bah.com
    * Charlie Barron, 248-508-6794, barron_charles@bah.com	
- Research guide writing and task development (usually but not always same as moderator):
    * Cindy Cruz, cruz_cindy@bah.com
    * Charlie Barron, barron_charles@bah.com	
- Participant recruiting & screening: Perigean
- Project point of contact: Catherine Hughes, hughes_catherine@bah.com; Kelby Stewart, stewart_kelby@bah.com
- Participant(s) for pilot test: Alexander Sherrow, sherrow_alexander@bah.com
- Accessibility specialist (for sessions where support for assistive technology may be needed):	None
- Note-takers: Perigean
- Observers (limiting 3-4 of the following per session): 
	- Rhonda Jones (rhonda.jones1@va.gov)
	- Michael Ouslander (michael.ouslander@va.gov)
	- Michael Rampton (michael.rampton@va.gov)
	- Michelle Dieudonne Yenyo (dieudonneyenyo_michelle@bah.com)
	- Kelby Stewart (stewart_kelby@bah.com)
	- Laura Willwerth (l.willwerth@bloomworks.digital)
	- Randi Hecht (r.hecht@bloomworks.digital)
	- Aliyah Blackmore (a.blackmore@bloomworks.digital)
