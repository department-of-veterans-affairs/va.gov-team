# Research Plan for VFS, VYE-Verify Your Enrollment, March 2024

## Background
[VYE Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/verify-your-enrollment/product-outline.md)

**What problem is your product trying to solve?**
The Web Automated Verification of Enrollment (WAVE) is a legacy, noncompliant feature that uses JavaScript, which is no longer sanctioned by the U.S. goverment because of data security concerns. This is a problem because WAVE holds Veterans' personally identifiable information. This is being replaced with Verify Your Enrollment (VYE) on VA.gov. 

**Where is your product situated on VA.gov? (ex: auth vs. unauth)**
WAVE is currently a standalone application being linked to from VA.gov. The new VYE tool is an authenticated tool that will sit under the "Education and training" section of the "VA Benefits and Health Care" menu. VYE uses VA 22-8979. 

**What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?**
Verify Your Enrollment is replacing the WAVE tool which has been in existence in its current state since 2003. Veterans utilizing education benefits through the MGIB-Active Duty (Chapter 30), MGIB Selected Reserve (Chapter 1606), Reserve Educational Assistance Program (REAP, Chapter 1607), or Veterans Retraining Assistance Program (VRAP) currently verify their benefits with WAVE.

### OCTO Priorities 

Modernizing WAVE and moving it to VA.gov aligns with OCTO-DE's mission to update VA applications, create the best experience for all Veterans by streamlining the process to receive education benefits, and provide a seamless Veteran experience through the delivery of state-of-the-art technology by improving the functionality and experience of the application.

### Veteran Journey
VYE fits in the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) in numerous phases and has meaningful moments, such as: 
- Veterans actively serving: Managing military and family obligations
- Veterans getting out: Engaging VA to access benefits and services
- Veterans starting up: Finding something to do
- Veterans reinventing themselves: Acquiring the appropriate education, new skills, and credentials
- Veterans putting down roots: Taking care of my family
- Veterans putting down roots: Engaging VA to access benefits and services

## Research Goals and Questions	
**Evaluate the effectiveness of our proposed solution**
- Are our perceptions of Veterans goals accurate?
  - Verification #1
  - Checking history #2
  - Managing profile #3
- Is our proposed design simple for Veterans to use to accomplish their goals?
- Are Veterans able to quickly and easily verify their enrollment? 
- Do Veterans need additional touchpoints (e.g., emails) to accomplish their goals?
- Is our two-page proposed design sufficient for users to easily find their desired information?
- Can users easily update their address and direct deposit information?
- Is the label, "Your Benefits Profile" sufficient to communicate the types of information contained in the profile? 

**Evaluate our place in the VA.gov system**
- Are there other messages before or after interaction with VYE that our Veterans need?
- How do our Veterans find VYE (e.g., email link, Google search, onsite search, navigation menus, etc.)?
- How effective are these channels to Veterans for finding VYE/WAVE?
- Would Veterans prefer to verify their enrollment over the phone or via text as opposed to verifying via a web application? 

**What might we be missing in our understanding of our Veterans?**
- Are Veterans confused by the process of enrollment and how that information is communicated to the VA for verification?
- Do Veterans need more insight into backoffice processes (e.g., pending documents and processes)?

### Outcome
Evaluative findings will immediately affect the design and content of our MVP solution for VYE. 

Additional generative research will help inform future solutions and enhancements to VYE (e.g., email notifications, IVR, text verification, integration with VA.gov profile, etc.). 

### Hypothesis
**The new VYE design will provide a much simpler process for Veterans to manage their enrollment verifications as compared to the overly complicated WAVE tool.** 
- WAVE is challenging to navigate and use. 
- A more streamlined and succint design will be sufficient for Veterans to manage their enrollment verifications.
- In-context design clues will remove the need for complex user guides.
- User do not need to see backoffice processes that are currently contained in "Pending Documents."

**Veterans will be able to easily find and access the VYE application.**
- Existing processes are sufficient to bring Veterans needing to verify enrollment to the VYE tool (e.g., email prompts, Google search, onsite search, etc.).
- Veterans might prefer IVR or text-based verification processes for managing enrollment. 

**There are things we don't know about our Veterans.**
- We do not have documented research on our users and are anticipating learnings to come from open-ended conversation.  

## Methodology	
We will use two unmoderated tools to accomplish our research goals:
- Chalkmark (unmoderated)
- OptimalSort (unmoderated)

We will utilize Chalkmark to provide evaluative results and first-click analysis for the prototype. Participants will be given a few simple tasks and will be asked where they would go to accomplish the task. 

OptimalSort will be used for an open card sort to ensure our labeling structure and overall flow will match users mental models. 

  
### Location
All interviews will be conducted online on mobile or desktop devices via Zoom. Usability test sessions will ask participants to review a Sketch-based prototype. Participants may be asked to share their screen.

### Research materials
- [Link to email with instructions](https://va.gov) - _Coming soon_
- [Link to prototype or OptimalSort session for group A](https://va.gov) - _Coming soon_
- [Link to prototype or OptimalSort session for group B](https://va.gov) - _Coming soon_

	
## Recruitment	

### Recruitment approach
Our intended audience for this study is Veterans who are currently utilizing the following programs or will be in the future,:
- MGIB-Active Duty (Chapter 30)
- MGIB Selected Reserve (Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP)

We would like to _exclude_ Veterans who currently use or plan to use Post 9/11 education benefits. 

We will use Perigean to recruit participants. As such, we’d like to schedule a kickoff call with Perigean as soon as the research plan is approved, to review the survey and email content that will be sent to participants.

We will be utilizing a lean maximum variation strategy for our studies, if possible. 

### Recruitment criteria
For unmoderated Chalkmark and OptimalSort tests, we would like 27 participants each, according to the following cohorts (in groups of 9, according to [PRA "Fewer than 10" rule](https://depo-platform-documentation.scrollhelp.site/research-design/planning-unmoderated-studies)): 
- Veterans on Active Duty (Chapter 30)
- Veterans in Selected Reserve (Chapter 1606)
- Veterans with active award (for any above program) with disabilities

**Primary criteria (must-haves)**
Participants must have an active award for one of the following programs:
- MGIB-Active Duty (Chapter 30)
- MGIB Selected Reserve (Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP)

Again, the recruitment should exclude Veterans who currently use or plan to use Post 9/11 education benefits. 

**Recruitment Criteria**
1. Do you currently use education benefits or plan to use education benefits under the following programs:
- MGIB-Active Duty (Montgomery GI Bill - Chapter 30)
- MGIB Selected Reserve (Montgomery GI Bill - Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP)

Please note that users of Post 9/11 GI Bill benefits are not eligible for this activity. 

2. Please select the program(s) under which you currently use education benefits or plan to use education benefits:
- MGIB-Active Duty (Montgomery GI Bill - Chapter 30)
- MGIB Selected Reserve (Montgomery GI Bill - Chapter 1606)
- Reserve Educational Assistance Program (REAP, Chapter 1607)
- Veterans Retraining Assistance Program (VRAP) 

## Timeline
- 03/02 - Recruitment and testing begins
- 03/23 - Testing ends 
	
## Team Roles		
Ryan Gray (ryan.gray1@va.gov) will serve as primary researcher and project point of contact for this project. 
