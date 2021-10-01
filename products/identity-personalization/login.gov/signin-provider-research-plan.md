# Research Plan for [Identity, Sign-in redesign and provider attributes, October 1]
*Questions about how to set up your research study? Reach out in the #research-ops Slack channel.* 

## Background
Briefly describe the background of your product. Consider:
- What problem is your product trying to solve?
- Where is your product situated on VA.gov? (ex: auth vs. unauth)
- What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?

The VA.gov sign-in page is used by millions of Veterans to enable access to VA benefits and services. It is a touchpoint used by every authenticated Veteran and is significant in ensuring the ability of Veterans to seamlessly access services digitally. In the coming months, additional services outside of VA.gov (eg: My HealtheVet) will begin routing users to the VA.gov sign-in page, to ensure a consistent authentication experience across VA web properties.

[Link to product brief](url goes here).

### OCTO-DE Objectives 
*Note: applicable only to OCTO-DE teams*

Which [OCTO-DE objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) does this research support? Work with your VA lead and product manager as needed.

This research directly supports all three OCTO North Stars:
1. Increase the usage and throughput of VA services
2. Decrease the time Veterans spend waiting for an outcome
3. Increase the quality and reliability of VA services

Because reliable and accessible authentication directly gates most VA.gov activity, within specific DE Goals, this research, directly and indirectly, supports nearly all DE Goals, with an emphasis on #2, #3, #4, #6, and #7:

1. Veterans and their families can apply for all benefits online
2. Veterans can manage their health services online
3. Logged-in users can easily track applications, claims, or appeals online
4. Logged-in users can update their personal information easily and instantly
5. Veterans and their families can find a single, authoritative source of information
6. Logged-in users have a personalized experience, with relevant and time-saving features
7. Veterans and their families trust the security accuracy and relevancy of VA.gov

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?
Are there moments that matter? 

Our product fits in at the start of the Veteran Journey from Serving in the Military through Getting Out and Starting Up.  However, it additionally serves the Veteran throughout their journey because they may receive VA services throughout their life.

**Starting Up**
* Attending to health needs

**Taking care of self**
* Managing primary care and chronic health issues
* Maintaining my health

## Research Goals	
What are you trying to learn from this research? 

*Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.*

1. How will the addition of Login.gov and other design modifications to the VA.gov sign-in modal impact a user's ability to sign in?
2. What information does the Veteran find most important or least important in a sign-in option and which type of credential provider would users prefer given the choice of goverment-created or private sector?


### Outcome
How will this research advance your product to the next phase in the design process? What will you do with your learnings?

This research will directly inform design changes to the sign-in page used by millions of Veterans. The usability testing on the design will ensure that familiar workflows, used by Veterans to access all digital services, are easy-to-follow and not impacted by design/copy changes, nor the addition of a new sign-in option.

Additionally, the research will guide public-facing content and VA-stated credential preferences by highlighting those areas most important to Veterans when selecting how they sign in / which credential(s) they use (eg: government vs. the private run, security, accepted at many agencies, etc.)

### Research questions
Consider bucketing research questions under research goals. For each question, think about:
- What will I do with what I learn from this question?
- Does this question serve the goals of my study?
- Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md) 

**Impact of redesign**

1. What usability issues does the modified design pose to the current sign-in process?
2. Are participants able to quickly locate their current sign in provider?

**Language around attributes of government-created and private sector credentials**

1. Do users prefer government created credentials or private sector created credentials? 
2. Out of the attributes provided, what information is most and least important when selecting a sign-in provider?
3. Do users have enough information about government-created or private sector created credentials to tell us which provider they would prefer? 
4. What other attributes do users value in a sign-in provider?


### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
- What do you already know about this problem space?
- What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
- Write a generalized statement that combines what you know + what you think will happen during the study. 
- Remember to constrain the hypothesis to the goals of your study!

**Design:**
* When presented with changes to the VA.gov sign-in modal, participants will be able to select their desired credential provider.

**Text:**
* When presented with a list of attribute about governemnt-created and privately owned sign-in options, participants will be able to rank their most important and least imporant attributes. 


## Method	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Examples of common research methods include: 
- Semi-structured interviews - appropriate for generative research
- Contextual inquiry - appropriate for generative research
- Card sorts - appropriate for generative and evaluative research; depending on the study design 
- Tree tests - appropriate for evaluative research
- Usability testing - appropriate for evaluative research
- User acceptance testing (UAT) - required before product release

Additional resources:
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/mobile-research-guidelines.md)

**Remote unmoderated**

We would like to conduct an unmoderated controlled study where participants are invited to participate in the study by email and are sent a link to Optimal Workshop.  They will participate in a 2 part study, a first click test and card sort. At the end participants will be provided a validation code.

Following the first click and card sort, participants click the finished button to capture feedback (likely on Optimal Workshop) and then enter in a validation code (likely on Optimal Workshop) so we can track who has participated and so participants can be compensated.

An unmoderated study prevents bias. We are interested in how Veterans interact with the sign-in modal when no one is providing support or guiding their thoughts. We are also interested in whether Veterans will choose Login.gov or ID.Me, given the text provided and without outside observation. 

We have a small sample-size moderated study with Veterans planned for Fall 2021. Details for that study will be provided in that study’s research plan.

**_The instructions to send to confirmed participants:_**

_Thank you for participating in this study. We know your time is valuable, and your feedback will help us build better products to serve you. We are exploring a redesign of the sign-in experience on Va.gov as well as what information Veterans value the most in a sign-in provider. To help us understand this, we created a prototype for you to test._

_A couple of things to know:_
* _This is a prototype, an early version of the product. Some features may not work perfectly. No actions you take in this prototype will affect your VA account, benefits, or services._
* _Please interact with the sign-in only. Other links, buttons, and/or forms will not be available in the prototype._
* _Please use a browser like Chrome, Firefox, and Safari and NOT Internet Explorer._
* _We will provide you with information on cards to sort into a ranking system from most important to least important._
* _When you are done, please click on the finished or continue button where you can provide feedback. We encourage you to be as honest as possible about what your experience was like with the product._

_Thank you for participating!_ 


### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

If remote, include your preferred video conferencing software. Choice of: Zoom, GoTo Meeting; WebEx.

* Preferred video conference software: Zoom
* Location: Remote- Strictly online
* Point of Contant: Amanda Porter- ajohnson@clarityinnovates.com
 


If in person, include:
- Location
- Point of contact
- Equipment used for research

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For unmoderated testing: 
- [First Click Test](https://446rp3tp.optimalworkshop.com/chalkmark/k6k271zx)
- [Card Sort](https://446rp3tp.optimalworkshop.com/optimalsort/cj5ld45g)


	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/perigean-recruiting-guidance.md) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of marginalized Veteran communities.

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using the Lean MVS strategy for most studies. Refer to the resources above to learn more. [Use the recruitment checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity. *Note: this template will be moving outside of Google Sheets so it is accessible on the VA network.*

**Our intended audience:**

* Veteran users who primarily use VA.gov to sign in are our intended audience. We’ll be using Perigean to help us recruit for these user groups. 

_would like to include a screenshot of the VA.gov homepage to ensure we are reaching the correct user group_


### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study.

We require 180 participants, with 10 participants in each segment:

**DS Logon:**
* Segment #1: 10 participants who sign in with DS Logon AND are new to va.gov (2 years or less)
* Segment #2: 10 participants who sign in with DS Logon AND are infrequent users of va.gov (once a year)
* Segment #3: 10 participants who sign in with DS Logon AND are frequent users (i.e. dependent on claims etc. or who visit va.gov daily or weekly)

**MHV**
* Segment #4: 10 participants who sign in with MHV AND are new to va.gov (2 years or less)
* Segment #5: 10 participants who sign in with MHV AND are infrequent users of va.gov (once a year)
* Segment #6: 10 participants who sign in with MHV AND are frequent users (i.e. dependent on claims etc. or who visit va.gov daily or weekly)

**ID.Me**
* Segment #7: 10 participants who sign in with ID.Me AND are new to va.gov (2 years or less)
* Segment #8: 10 participants who sign in with ID.Me AND are infrequent users of va.gov (once a year)
* Segment #9: 10 participants who sign in with ID.Me AND are frequent users (i.e. dependent on claims etc. or who visit va.gov daily or weekly)

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

Pro tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could 1) leverage the [lean MVS approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) or 2) break up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

* Participants must use VA.gov as their point of sign-in. NOT https://www.myhealth.va.gov/ or https://www.ebenefits.va.gov/

**Secondary criteria (nice-to-haves)**
What criteria would strengthen your results? 

## Timeline
If you are using Perigean to recruit please submit 1 FULL week prior to the start of research for remote research, 2+ weeks for in person. 

* We would like to start the research on October 11th and run it for 2-3 weeks or until 90 participants are met.

### Prepare
When will the thing you are testing be finalized? (Goes without saying, but should be a few days before testing will begin.)

* October 5th

Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: naomi.marcussen@oddball.io
* Date and time of pilot session: October 7th, 3:30pm

### Research sessions
What dates do you plan to do research? 

* October 11th- October 25th

### Length of sessions
How long do you estimate each session will be? (This helps with scheduling & thank you gifts.) e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours. 
Specify if you want Perigean to schedule the sessions with buffer time (15 minutes recommended) to allow for participants who can't make it on time, or if you might go over time.

* Sessions should be approximately 15 mins or less

### Availability
When would you like sessions scheduled? Please list exact dates and times in EASTERN Standard Time. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 
Please request enough dates and time slots for the number of requested participants. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.). 

* Availibilty is flexible as this will be an unmoderated test 

## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Amanda Porter- ajohnson@clarityinnovates.com 	
- Research guide writing and task development (usually but not always same as moderator):	Amanda Porter- ajohnson@clarityinnovates.com 
- Participant recruiting & screening:	Perigean 
- Project point of contact:	Amanda Porter ajohnson@clarityinnovates.com and Nick Soutouras- Nick.soutouras@oddball.io
- Participant(s) for pilot test:	Naomi Marcussen- naomi.marcussen@oddball.io
- Note-takers: N/A	
- Observers:	N/A
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work**	
