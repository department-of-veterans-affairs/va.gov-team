# UAT Research Plan for STEM Scholarship (22-10203) Automated Decision

As a designer I need to create a research plan to share with my team.	(This should be filled out and maintained by the designer on the team & can be cross-linked and referenced in any issues.) 	

## Goals	
1. What product & team are you doing this research for?
   VA.gov Education (#vsa-education) team is preparing to release new functionality to be incorporated to the STEM Scholarship application on VA.gov that would provide "automated denial" decisions upon submission of the application.
2. Background: Briefly, what is the background on this product? What would a new person on the team need to know about this product?	
   This enhancement to the STEM Scholarship form is being made in an effort to reduce the number of applications that require processing by the Buffalo RPO. Historically, there have been a high percentage of ineligible applications that require processing because the application itself is relatively simple to complete and the potential payoff is high (up to $30,000). There are a few required fields within the application that on their own indicate an individual's eligibility and these are the fields we are utilizing to trigger an automated denial. In addition, we are also planning to the addition of a POA indicator to the spool file reports to be processed by the Buffalo RPO
3. Research questions:
   1. Are applicants being automatically denied as expected? Are they receiving appropriate communication upon automatic denial?
   2. Are applicants able to view the status of their application on VA.gov?
   2. Are any applicants being automatically denied who should not be?
   3. Is the spool file being updated for applicants based on whether or not they have POA associated with their EVSS profile?
4. Hypothesis: What is your hypothesis for this research? Applicants are being denied as expected, receiving appropriate email communication upon automatic denial, and able to view their application status on VA.gov

## Method	
1.	What method of research are you planning? 	
  - **Sample Methodologies**: Remote moderated user acceptance testing with Veterans on Production 	
2.	Why this method? How does this methodology help you answer your research questions? We are unable to complete testing on staging due to lack of EVSS test data located there. With this, the best way to test that the functionality is worked as expected is with Veterans on Production through submissions of actual applications. 
3.	Where are you planning to do your research? Via webconference and screenshare
4.	What will you be testing? The live 22-10203 application  	
5.  If remote: What tool do you plan to use? Zoom via Perigean
## Participants and Recruitment	
1.	Participant criteria: What are you looking for in a participant?	  
(Mention: Number of people, ages, accessibility preferences, geographical diversity, login requirements, VA benefit requirements, familiarity with technology, etc. Keep in mind, the more requirements, the more difficult the recruit, so give ample time to ensure the right participant mix.)	

3 with Power of Attorneys

3 Ineligible due to program type
- You must have one of these free accounts:
   - A premium My HealtheVet account, or
   - A DS Logon account (used for eBenefits and milConnect), or
   - A verified ID.me account that you can create here on VA.gov
- Have applied for Post-9/11 GI Bill Benefits
- Received a decision from the VA on your application
- Currently enrolled in a higher education program that is **NOT** in the field of Science, Technology, Engineering, or Math.
- Less than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit
- Do you have a Power of Attorney?


3 Ineligible due to remaining entitlement
- You must have one of these free accounts:
   - A premium My HealtheVet account, or
   - A DS Logon account (used for eBenefits and milConnect), or
   - A verified ID.me account that you can create here on VA.gov
- Have applied for Post-9/11 GI Bill Benefits
- Received a decision from the VA on your application
- Currently enrolled in a higher education program that IS in the field of Science, Technology, Engineering, or Math.
- More than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit
- Do you have a Power of Attorney?

2 Eligible 
- You must have one of these free accounts:
   - A premium My HealtheVet account, or
   - A DS Logon account (used for eBenefits and milConnect), or
   - A verified ID.me account that you can create here on VA.gov
- Have applied for Post-9/11 GI Bill Benefits
- Received a decision from the VA on your application
- Currently enrolled in a STEM program
- using their post-9/11 GI Bill Benefits to pay for their program of study
- Less than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit
- Do you have a Power of Attorney?


Please list your participant criteria in two categories-
1. **Primary criteria / Must have** - what absolutely must be true in order to run your study? The clearer you can write this criteria, the easier it is to find matches for your study. (i.e. if your study will only work if you're talking to Veterans who have My HealtheVet premium accounts, mention that here. OR, if you are using a prototype tool that will not work well with screen readers, mention that as well.) 

All participants must: 
- Be veterans
- Be able to sign in to VA.gov and view their remaining entitlement (instructions below)
- Currently using post-9/11 (Chapter 33) GI Bill benefits

3 Ineligible participants due to program type
- Currently enrolled in a higher education program that is NOT in the field of Science, Technology, Engineering, or Math.
- Less than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit. Note that in some cases this information is unavailable. If this is so, the participant would not be eligible to participate. 

3 Ineligible participants due to remaining entitlement
- Currently enrolled in a higher education program that IS in the field of Science, Technology, Engineering, or Math.
- More than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit. Note that in some cases this information is unavailable. If this is so, the participant would not be eligible to participate. 

2 Eligible participants
- Currently enrolled in a STEM program
- using their post-9/11 GI Bill Benefits to pay for their program of study
- Less than 6 months of benefit entitlement remaining. To check this:
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit. Note that in some cases this information is unavailable. If this is so, the participant would not be eligible to participate. 

2. **Secondary criteria / Would like to have** - what other criteria would strengthen your results?
- Are you a Veteran who recently started using your Chapter 33 Post-9/11 education benefits? 
- Please respond to this email with your remaining entitlement and program of study. You can check your remaining entitlement by following the steps listed below: 
   - Navigate to https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit/
   - Sign into your account
   - Review your remaining entitlement (in months and days) for your post-9/11 (chapter 33) GI Bill benefit. Note that in some cases this information is unavailable. If this is so, the participant would not be eligible to participate. 

2.	What is your recruitment strategy? 	
Plan to draw from the existing recruiting contract - Perigean

## When? 	
1.	Timeline: What dates do you plan to do research? 	
   TBD

2.	Prepare: When will the thing you are testing be ready? 
TBD

3. Length of Sessions: How long do you estimate each session will be? 
30 minutes with a 15 minute buffer time between sessions. 

4.	Availability: If applicable, when would you like sessions scheduled? 
15 minute buffer between sessions
All times below in EST: 
TBD

5.	Pilot: Please indicate a date before your sessions begin for piloting your research. Which member of the design team will you pilot your research with? 	
TBD 

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Desiree Turner (turner_desiree@bah.com)
- Research guide writing and task development (usually but not always same as moderator):	Desiree Turner (turner_desiree@bah.com)
- Participant recruiting & screening: Perigean
- Project point of contact: Desiree Turner (turner_desiree@bah.com)
- Participant(s) for pilot test:	TBD
- Note-takers:	Dan Shawkey (shawkey_daniel@bah.com), Darrell Neel (shawkey_daniel@bah.com), Amy Knox (knox_amy@bah.com), Jen Jones (jones_jennifer2@bah.com), Emma Waters (waters_emma@bah.com), Will McCormack (mccormack_will@bah.com)
- Observers: Dan Shawkey (shawkey_daniel@bah.com), Darrell Neel (shawkey_daniel@bah.com), Amy Knox (knox_amy@bah.com), Jen Jones (jones_jennifer2@bah.com), Emma Waters (waters_emma@bah.com), Will McCormack (mccormack_will@bah.com)

**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**

## Resources	
- Project Brief: 	
*Project brief should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Convo Guide	
*Discussion guide should live in the appropriate va.gov-team product folder, simply paste a link to it here*	
- Synthesis	
*Link to any documents used for synthesis (Mural or Realtimeboard boards, excel sheets, other data outputs, etc.)* 	
- Lessons Learned	
*Did you have any takeaways from the process of this research round that you want the team to remember for the future? Document them here.* 	
- Read-Out/Results	
  - *Read-out presentation should live in the appropriate product repo and folder; paste a link to it here.* 	
  - ** Don't forget to add a link to your research folder to the research tracker! [https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md)
