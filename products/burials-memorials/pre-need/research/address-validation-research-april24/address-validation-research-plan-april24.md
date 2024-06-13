# Research Plan for Address Validation for the Pre-Need Application (VA Form 40-10007), February 2024

## Background

The National Cemetery Administration (NCA) is working to modernize its systems, including the system that processes pre-need applications for determining eligibility for burial in a VA national cemetery (VA Form 40-10007). Presently, the pre-need application doesn’t utilize validation for users inputting addresses throughout the form to check the accuracy of the address provided. Having inaccurate address data for applicants can cause delays in determining decisions for eligibility as National Cemetery Scheduling Office (NCSO) analysts processing applications need to manually verify incorrect data. Ultimately, this impacts users applying for pre-need by delaying the time it takes to receive their decisions, and it burdens NCSO analysts by increasing the work and time it takes to complete cases, as eligibility determination is delayed by incorrect addresses being filed.

The application for pre-need is available to Veterans, service members, family members, and representatives as both authorized and unauthorized experiences, and is accessible through the Burials and Memorials hub page on VA.gov. 

We will be going through the collaboration cycle using interactive designs of a new address validation pattern within our Pre-Need Integration prototype to ensure it meets the needs of VA.gov users and that it can provide NCSO analysts with accurate data. 
Since this is an existing pattern for the VA.gov Design System, we just want to cover certain updates that are applicable specifically to our pre-need application.

Based on previous research and the overall goals for the project, our plan for the Pre-Need digital form moving forward is:
1.	Continue releasing enhancements in an "Integration" phase in which the form will be fully integrated with the modernized system to allow for faster case processing
2.	Once Integration phase development is complete and form is stabilized, proceed to implement address validation in pre-need application

[Link to product brief (soon will be updated with VET360)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/README-2023.md).

### OCTO Priorities 

The [OCTO objectives]( https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) that this research supports are to:
1.	Solidify the VA.gov platform
2.	Enhance Veterans’ personalized online experience
3.	Drive OIT’s Digital Transformation Strategy

### Veteran Journey

This product fits into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) for the following areas: 

The Pre-Need application and within that, address validation, applies to life stages from Serving onward to Dying, as service members, Veterans, family members, and representatives may apply at any time to determine if applicants are eligible for burial in VA national cemeteries. 

## Research goals

- Goal 1: Test the usability of our address validation solution to ensure it’s easily usable and accessible for applicants while testing all possible use cases in preparation for adoption into our pre-need application if approved.

- Goal 2: Discover how users approach having an additional step to validate addresses in the pre-need application.


### Outcome

These learnings will allow us to evaluate for additional gaps in address validation for future iterations of the designs and solution, and to also ensure the updated design pattern meets VA.gov Design System standards, providing users with the simplest, least invasive solution to validating their addresses. Findings and recommendations will be synthesized to determine what can be addressed by priority and impact and if there are any blockers. 


### Research questions

**Goal 1: Test the usability of our address validation solution to ensure it’s easily usable and accessible for applicants while testing all possible use cases in preparation for adoption into VADS (if approved).**
- What’s working well and what pain points do users experience with address validation?
- Are there any use cases that present additional difficulties for users?
- Will validating their addresses (having an additional step) significantly lengthen the time it takes for users to apply?
- Do users have any concerns or confusion with validating their address?
- Is the language for address validation messaging clear to users?

**Goal 2: Discover how users approach the process of address validation in the pre-need application.**
- Will users typically feel more comfortable choosing the suggested address or the address they entered?
- How will users approach having to validate multiple addresses, such as when a preparer or sponsor is completing the form?
- Do users understand next steps once validation results are displayed to them?
- How do users with prior VA.gov form experience feel about this new process, such as having to go through an extra step?
- Will users be confused about their progress when validating their address?


### Hypothesis

Our hypothesis is users might: 

1.	Easily be able to validate their addresses and will not feel burdened by extra validation step when applying, particularly in the case of Veterans applying for themselves.
2.	Feel some discomfort moving forward with an address that was not validated through VA.gov or they may wonder why they need to validate their address in the first place (particularly those with prior VA.gov experience).
3.	Be confident that their address is validated when they see the slim success alert.
4.	Feel frustrated when having to validate addresses multiple times, such as preparers or sponsors applying on behalf of someone else or if they need to come back to change an address they previously validated.

## Methodology	

Moderated usability testing using a mobile prototype which is appropriate for evaluative research.

### Location

Remote testing with Zoom as the preferred video conferencing software.

### Research materials

For moderated usability tests: 
- [Link to conversation guide](https://boozallen.sharepoint.com/:w:/r/teams/mbms/_layouts/15/Doc.aspx?sourcedoc=%7B1B5C5847-C911-4C67-95CE-3D9AFDE19C63%7D&file=Preneed%20Content%20Document%20-%20Version%203.docx&action=default&mobileredirect=true
)
- [Link to prototype](https://www.figma.com/proto/6ZBtsZJt7Llx1jA5rR8T83/Pre-Need---Address-Validation-Prototype?page-id=94%3A75077&type=design&node-id=785-139239&viewport=1652%2C3321%2C0.19&t=769MhvJLkXKTMHZU-1&scaling=min-zoom&starting-point-node-id=785%3A139239&mode=design e)
- [Link to recruitment ticket](url goes here)
    
## Recruitment	

### Recruitment approach
We’d like to recruit 10 participants for a total of 8 completed sessions. We’ll use Perigean to recruit participants.

### Recruitment criteria

**Primary criteria (must-haves)**
- Amount: Target is 8 participants but recruit 10
- Age ranges: 
    * Around 70% 55+ - 7 participants
    * Around 20% 35+ - 2 participants
    * Around 10% 18-34 - 1 participant
- Types: 
    * Three to four service members and Veterans 
    * Two to four spouses or surviving spouses of a service member of Veteran (A **spouse** is a person who is or was legally married to a service member or Veteran. A **surviving spouse** is someone who was legally married to the service member or Veteran at the time of their death and includes a surviving spouse who remarried.)
    * One to two personal representatives (a person filling out the pre-need form on behalf of an applicant, such as a **preparer**)
    * One unmarried adult child (An **unmarried adult child** is an individual who became physically or mentally disabled permanently and incapable of self-support before the age of 21, or before 23 years of age if pursuing a full-time course of instruction at an approved educational institution.)
    * One parent of a service member (not the parent of a Veteran so only applicable for parents of service members; considered a Corey Shea Act applicant)
    * Six to eight people interested in pre-need eligibility determination
    * We would like to emphasize recruiting more from the following underserved communities:
        * Identify as Biracial, Asian, Black, or LGBTQ+ 
        *Biracial - 1 participant
        *Asian - 1 participant	
        *Asian - 1 participant
        *Black - 1 participant
        *LGBTQ+ - 1 participant
    * Nice to haves:  
        * Live in rural areas or abroad
        * Other than honorable
        * Immigrant origin
        * Have cognitive disabilities 
- Participants must be able to use Zoom, locate and use the chat function in Zoom, and to share their screen through Zoom
- At least 3-4 people who will use a mobile device during the research session (tablet is ok too)
 
**Secondary criteria (nice-to-haves)**
None.

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
    * If no, go to question 4.
4. Are you interested in applying for a pre-need eligibility determination for yourself or on behalf of someone else? 
    * If no, disqualify.

## Timeline

### Prepare
When will the thing you are testing be finalized? Ideally it’s after going through a design intent review and having the usability testing prototype finalized.

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: possibly TBD, santiago_kenneth@bah.com
* Date and time of pilot session: TBD

**We also need a kick-off meeting with Perigean for recruiting as soon as possible. Our availability is flexible for this.** 
- Requested dates/times for kick-off meeting (ET): TBD

        
### Research sessions
* Planned dates of research: 
    * Usability testing target dates: TBD

### Length of sessions
* Session length: 45 minutes
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 4-5

### Availability
* Monday, 8/14/23: 9:30am-12:30pm, 1-5pm, 
* Tuesday, 8/15/23: 9:30am-12:30pm, 1-5pm
* Wednesday, 8/16/23: 9:30am-1, 3:30pm-5pm
* Thursday, 8/17/23: 9:30am-12:30pm, 1-5pm,
    
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.** 	
- Moderators: 
    * Charlie Barron, 248-508-6794, barron_charles@bah.com
    * Carly Yamrus,843-742-9456, yamrus_carly@bah.com
- Research guide writing and task development (usually but not always same as moderator):
    *Charlie Barron, barron_charles@bah.com
    *Carly Yamrus, yamrus_carly@bah.com
- Participant recruiting & screening: Perigean
- Project point of contact: Catherine Hughes, hughes_catherine@bah.com; Michelle Dieudonne Yenyo, dieudonneyenyo_michelle@bah.com
- Participant(s) for pilot test: Kenneth Santiago, santiago_kenneth@bah.com
- Accessibility specialist (for sessions where support for assistive technology may be needed): Not required for this study
- Note-takers: Perigean
- Observers (limiting 3-4 of the following people per session): 
    - Catherine Hughes (hughes_catherine@bah.com)
    - Rhonda Jones (rhonda.jones1@va.gov)
    - Sathish Kadiresan (sathish.kadiresan@va.gov)
    - Michelle Dieudonne Yenyo (dieudonneyenyo_michelle@bah.com)
    - Kelby Stewart (stewart_kelby@bah.com)
    - Laura Willwerth (l.willwerth@bloomworks.digital)
    - Aliyah Blackmore (a.blackmore@bloomworks.digital)
    - Ginger Wilson (ginger.wilson@va.gov)
