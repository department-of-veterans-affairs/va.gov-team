# Research Plan for Form 526 Conditions List (Contention Classification Team, 2023-10)

## Background
The VA receives many disability claims where the claimed conditions (“contentions”) are not described with sufficient clarity. In these situations, claims processors often take additional time reviewing records or calling Veterans to get the clarity they need. If we can improve the quality of contention descriptions, we believe we can eliminate some of these extra efforts and reduce overall processing time. To improve contention descriptions, we are exploring the Veteran experience naming/entering contentions on the digital 21-526EZ form when they submit a disability claim. 

On the form, we have observed inefficiencies with the list of medical conditions that is used in the component where Veterans select or enter a condition to claim (see below for a description of the “autosuggest component”). In this list, many conditions are duplicated, many are vague terms, and many are not actually conditions at all, among other usability problems. We want to update this list (“suggested conditions list”) to make it easier for Veterans to find conditions and to include only conditions that are clear and actionable for claims processors.

For this first redesign, we aim to update the suggested conditions list, while minimizing the impact on the current functionality of the autosuggest component that uses the list. In the future, we anticipate more extensive changes that may include updating the autosuggest component, adding new questions and screens that relate to contention naming, improving in-context copy and guidance, and considering altogether new ways to gather contention information.

**Autosuggest component**: Name of the component in the 526 flow where Veterans can name a medical condition to add to their claim. It functions similarly to a combo-box whereby the user can either select a medical condition from a fixed list of options or enter free text to describe their condition.

[Link to product brief](url goes here).

### OCTO Priorities 

This research supports [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) to enhance Veterans’ personalized online experience and to fast-track disability claims (see #6 and #7 from OCTO 2023 priorities).

### Veteran Journey
This work fits into the “Taking care of myself” stage of the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), and within that stage, the “Managing primary care and chronic health issues”phase. 
Where does your product fit into the ?

## Research Goals	
* Goal 1: Learn how Veterans think and talk about what medical conditions to claim.
* Goal 2: Assess whether a type-ahead field with auto-suggestions is a usable/desirable way for Veterans to name conditions they want to claim.
* Goal 3: Evaluate the revised conditions list. 

### Outcome
The purpose of this research is both evaluative and generative. We want to evaluate the concept of an auto-suggest field for naming a condition and our first iteration on the conditions list. We will use what we learn to make improvements to the conditions list prior to release. 

More broadly, we want to understand how Veterans think and talk about what medical conditions to claim. This understanding will inform future, more wide-ranging design ideas for improving the Veteran experience naming a contention.

### Research questions
Goal 1: Learn how Veterans think and talk about what medical conditions to claim.
* How do Veterans decide to file a claim and for what medical conditions? How do they describe their medical condition?
* How familiar are Veterans with commonly rated disabilities or with resources like the rating schedule?
* How do they prepare to file a claim and what resources do they use, as they prepare? What people or organizations do they seek assistance from? 

Goal 2: Assess whether a type-ahead field with auto-suggestions is a usable/desirable way for Veterans to name conditions they want to claim.
* What are Veterans thinking about when they come to the condition field where they are instructed to “Please tell us the new conditions you want to claim”? What does it mean to them?
* What do the auto-suggestions represent to the Veteran? What are they a list of?
* Do Veterans understand that they have the option to type in their condition? Did they read and understand the introductory copy?

Goal 3: Evaluate the revised conditions list.
* Are Veterans able to find their conditions from the auto-suggestions? How do they go about evaluating the auto-suggestions and choosing from multiple options?
* (if a Veteran selects from the auto-suggestions), do they edit the content or just leave it as it is? Do they feel like they should provide additional information within the field?
* (If a Veteran understands that free text is an option), how do they decide when to choose from the auto-suggestions and when to type in their condition?
* If a Veteran can’t find their condition, how does this make them feel?
* Does selecting from the list give Veterans confidence in what they submitted? Do they think the VA has what it needs to understand what they are claiming?

### Hypothesis
Our hypothesis is that the way we write terms for the suggested conditions list can have an impact on findability for Veterans and actionability for claims processors. Some of our strategies include the following:
* Use common medical terminology rather than medical jargon, and incorporate plain language alternatives (e.g., “tinnitus (ringing in the ears)”)
* Exclude terms that are overly broad or otherwise unhelpful for claims processor purposes
* Exclude terms that do not represent potentially ratable conditions (e.g., “aging”). This could be misleading to Veterans and contribute to the creation of contentions that have a low likelihood of resulting in an award. 
* Make terms mutually exclusive, where possible. We do not want Veterans to wonder whether they should select one condition or another. 
* Use consistent formatting

What we are using to help us:
* Frequency data on what terms Veterans select from the current list
* Data on free-text contentions
* Input from claims processors and resources used by claims processors (including the rating schedule from the CFR)

What we have learned from prior research:
* Veterans face challenges in the disability claims process, including insufficient, confusing or misleading guidance and a perceived lack of transparency about the process. 
* Veterans come to the process having done a range of pre-work and having benefited from varying levels of outside assistance.  
* Some Veterans do not understand that typing in a condition is an option (in the existing autosuggest component).

What Veterans might think about the type ahead field concept
* We think Veterans with the most common conditions will be able to find their condition. 
* We think that Veterans will expect that auto-suggested conditions meet the needs of the VA.
* We think the amount of prep and type of support Veterans receive in filing a claim will have implications for how usable the concept is for them.

## Methodology	
We will conduct a concept test, followed by a semi-structured interview. For the concept test, we will ask Veterans to enter conditions based on their actual conditions. We will screen for Veterans who have either filed in the past or who are planning to file for disability in the future. We will have a mock scenario prepared as a back-up, in cases where the Veteran does not have conditions in mind or is uncomfortable using their actual conditions. 

We will use a Codepen prototype for the concept test. The prototype will be available on mobile or desktop.The reason for using Codepen is that it allows us to test the type ahead concept that leverages a source list of 200+ items. We cannot feasibly replicate this interaction in Sketch. 

### Location
Session will be conducted remotely during zoom. 

### Research materials
* [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/conversation-guide.md)
* [Prototype](https://codepen.io/ccteam/live/poqxVpB)
	
## Recruitment	

### Recruitment approach
We are targeting 8 Veterans to participate in this study, with the aim to interview at least 6 Veterans.  

We’ll use a lean maximum variation strategy for inclusivity, targeting 2 criteria (age and gender) as primary sample distribution criteria, and race/ethnicity as a secondary sample distribution criteria.

Note that in subsequent studies, we will try to include participants with cognitive disabilities and LGBTQ+ participants.

### Recruitment criteria
Participants for this study: 8 Veterans. We would like to request a kickoff call with Perigean. Requested date/time:Tues, Oct 10, 2023 at 11am ET.

**Primary criteria (must-haves)**
All participants have used VA.gov (in any capacity, whether to file some kind of claim or to access information). 
* Experience with disability benefits
  * 4 Veterans (50%) who have never filed for disability, but who intend to within a year **on va.gov**. 
  * 4 Veterans (50%) who have filed for disability benefits before on va.gov.
* Time of service 
  * At least 2 Veterans (target 4 Veterans) who served in 1990 or before.
  * At least 2 Veterans (target 4 Veterans) who served after 1990. 
* Gender
  * At least 2 but no more than 4 Veterans who identify as a gender other than male
* Age
  * At least 2 but no more than 4 Veterans over 55 years old. 

**Secondary criteria (nice-to-haves)**
* Attempt at least 2 but no more than 4 Veterans under 35 years old
* Attempt at least 2 but no more than 4 Veterans who are not white/Caucasian

**Screener questions**
* Have you ever used the va.gov website?
  * Yes (qualified)
  * No (not qualified)
* Have you ever filed a disability claim on va.gov? If no, are you planning on filing a disability claim on va.gov within the year? 
  * Yes, has filed a disability claim on va.gov (quota - recruit 4 Veterans)
  * No, has not filed a disability claim but intends to on va.gov within the year (quota - recruit 4 Veterans)
  * No, has not filed a disability claim and does not intend to within the year (not qualified)
* When did you serve?
  * 1990 or before (recruit 2-4)
  * After 1990 (recruit 2-4)
  * (Note: It is ok for someone to select both of these time periods.)


## Timeline

### Prepare
The prototype will be finalized by October 10, 2023. 

Pilot session information
* Pilot participant email: Tyler Spangler, tyler.spangler@agile6.com
* Date and time of pilot session: Oct 12, 2023, 3pm EST

### Research sessions
We are planning to conduct research the week of October 16 and Oct 23 (starting October 18).

### Length of sessions
* Session length: < 1 hour
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 3

### Availability
* Wednesday October 18: 11am-5pm EST (6 slots) 
* Thursday October 19: 11am-5pm EST (6 slots) 
* Friday October 20: 11-2pm, 3pm-4pm EST (4 slots)
* Monday October 23: 11am-5pm EST (6 slots) 
* Tuesday October 24: 11am-1:00pm EST (2 slots) 

## Team Roles	
* Moderator: Eva Heintzelman or Sudeepti Bhatnagar 
* Research guide writing and task development: Eva Heintzelman
* Participant recruiting & screening: Perigean
* Project point of contact: Eva Heintzelman and Sudeepti Bhatnagar
* Participant(s) for pilot test: Tyler Spangler
* Accessibility specialist (for sessions where support for assistive technology may be needed): n/a
* Note-takers: Eva Heintzelman, Sudeepti Bhatnagar, Yurena Garcia-Hevia, Lesley Ropp
* Observers: Jennifer Bertsch, Tyler Spangler, Luke Short, Shannon Ford

Contact Information of the people serving in the roles above
* Eva Heintzelman: evaheintzelman@navapbc.com, 202-288-8369
* Sudeepti Bhatnagar: sudeeptibhatnagar@navapbc.com, 734-255-8989
* Yurena Garcia-Hevia: yurenagarcia@navapbc.com
* Lesley Ropp: lesley.ropp@va.gov
* Jennifer Bertsch: Jennifer.Bertsch@va.gov
* Tyler Spangler: tyler.spangler@agile6.com
* Luke Short: luke@verdance.co
* Shannon Ford: shannon.Ford1@va.gov
