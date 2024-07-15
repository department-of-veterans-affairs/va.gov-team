# Research Plan for [Debt Resolution, Complete a Sub Task (Wizard) and content pages, December 2023]

Questions about how to set up your research study? Reach out in the #research-ops Slack channel.

## Background

Briefly describe the background of your product. Consider:
-   What problem is your product trying to solve?
-   Where is your product situated on VA.gov? (ex: auth vs. unauth)
-   What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?
    
The Financial Status Report (FSR) has been live in production since November 16, 2021. The MVP experience was only for Veterans who wanted to submit a waiver for VBA or benefit overpayments. We then integrated the ability for Veterans to submit a waiver for medical copays (on September 19, 2022).

The "Wizard sub-task pattern" release is focused on The Wizard experience at the beginning of the FSR. This experience needs to be updated for a few reasons:

-   Better inclusion of copay paths.
-   Rework of overall design format/experience "one question per page"
-   Addition of a payment path
-   Connection with streamlined waiver

[Link to product brief](url goes here).

### OCTO Priorities
Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md) does this research support? Work with your VA lead and product manager as needed.

This research supports these main [OCTO objectives and goals](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

-   Veterans can manage their health services online
-   Veterans and their families can find a single, authoritative source of information
-   Logged-in users have a personalized experience, with relevant and time-saving features

This research supports increasing these measures:
-   Usage of digital, self-service tools
-   Number of VA.gov users as a function of total Veteran population

This research supports decreasing these measures:
-   Call center volume, wait time, and time to resolution
    

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)? Are there moments that matter?

Debt can happen at any stage in [the Veteran’s journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) after the ‘Getting out’ stage. However, certain types of debt, such as Post-9/11 GI Bill debt, is more likely to occur at the ‘Finding something to do’ stage.

Other key moments this research touches in the Veteran journey are:

-   Attending to health needs
-   Taking care of myself
-   Managing my declining health
    

## Research Goals

What are you trying to learn from this research?
Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

*The purpose of this research is to find out:*

**Usability, comprehension, desirability**

**1.  First impression & comprehension:**
-   What do Veterans perceive the Wizard is for when they first see it?
-   Do they understand its purpose?
-   Do they understand the paths available to them and the actions they need to take based on the information provided in the wizard?
-   What mental models do Veterans have around the resolution options?

**2.  Usability:** 
* How helpful is the information provided based on their prior knowledge and experiences, if any?
   
**3. Accessibility:** 
* How Veterans using screen reader or screen magnifier technology navigate through the Wizard
    
### Outcome
How will this research advance your product to the next phase in the design process? What will you do with your learnings?

This research will allow us to make content structure and content/copy refinements based on our findings about comprehension. If the actions recommended to the Veteran in the Wizard are difficult to understand, we can make changes to the content in terms of copy, organization, and amount of content. If it is easy to understand, we can validate the experience and move to implementation.

### Research questions
Consider bucketing research questions under research goals. For each question, think about:
-   What will I do with what I learn from this question?
-   Does this question serve the goals of my study?
-   Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)
    
   1.  **Understand baseline:** What experience, if any, do Veterans have with seeking debt relief? What channels have they used to understand what they need to do?
    
2.  **How easy is it for them to understand what they need to do** through the information supplied in the Wizard in contrast to what they have done previously?
    
3.  **Do Veterans understand the purpose of the Wizard?**
    
4.  How easy is it for Veterans to **navigate** through the Wizard?
    
5.  How easy is it for Veterans **using screen readers to navigate** through the Wizard?
    
6.  For the paths they see, **how understandable is the information** on the last pages of the Wizard?
    
7.  For the corresponding links, **how clear and understandable is the content?** *
    

### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
-   What do you already know about this problem space?
-   What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
-   Write a generalized statement that combines what you know + what you think will happen during the study.
-   Remember to constrain the hypothesis to the goals of your study!
    
We hypothesize that the complete a sub task pattern of one thing per page will be easy to use by both sighted and blind/low vision Veterans alike.

We hypothesize that the information supplied through the different paths in the Wizard will be helpful and streamline the experience of information gathering.

We hypothesize that the recommended actions on the final page and subsequent pages may be a lot of information to digest.

## Methodology

Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.

-   The study will be a remote moderated formative usability study. The prompts will be mostly observational, allowing the Veteran to organically explore what is relevant to their situation (dependent on the type of debt they had/have and the actions they are interested in taking).
    
Additional resources:

-   Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project.
    
-   Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support.
    
-   If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
    
-   If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)
    
-   If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
    
-   In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).
    

### Location

Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

-   Remote: Zoom
    

### Research materials

Note: your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

For moderated interviews:

-   [Link to conversation guide](url goes here)
    

## Recruitment

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.

Before writing your recruitment criteria, be sure to review the following resources.

-   [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research.
    
-   [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.
    

### Recruitment approach

Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?

Pro tip:

-   For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants.
    
-   Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups.
    
-   Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)
    

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

**Inclusion is prioritized. We seek to over-recruit underrepresented groups that are often underrecruited in research. Moreover, since a primary goal of this research is to understand comprehension, we want to talk to Veterans that have cognitive considerations, lower literacy levels, and English as a second language.**

### Recruitment criteria

List the total number and type (Veterans, caregivers, etc.) of participants for this study: 

6 - 8 completed interviews with Veterans

#### We most want to speak to:

-   Veterans that have either copay debt (present or past 3 years) and/or overpayment debt (past 3 years)
    
-   Veterans who have had high amounts of debt (hundreds, thousands)
    

#### Primary criteria (must-haves)

-   #### At least 6-8 Veterans interviewed, please recruit 12-16 Veterans
    
-   #### All participants must be Veterans
    
-   #### All have a computer, tablet, or smartphone and be willing to be complete their session on one of those devices
    

-   #### During the session, be willing to share a web browser window on their device
    
-   #### Have a working microphone on their device
    
-   #### Have Zoom downloaded to their device prior to the session and know how to share their screen
    

-   50% of participants should complete the session on a smartphone.
    
-   50% of participants should complete the session on a desktop computer.
    
-   At least 1-2 assistive technology users (user with low vision, or user of hearing aide, user who uses voice over)
    
    Participants should have:
    
-   At least 1 unpaid medical copay within the last 3 years AND/OR
    
-   VA debt (overpayment) that has occurred anytime

-   All participants must have experienced financial hardship now or in the past
    
-   While the FSR asks for financial information, we won't be asking our participants to provide exact financial information. However, we want to simulate a real experience as much as we can to ensure the experience is intuitive for Veterans.  
    **Please confirm participants are comfortable talking about their personal finances.**
      

#### Demographic must-haves

Note: The following demographic criteria is our goal, but we understand that historically it's been challenging to recruit participants with VA debt.

-   At least 2 of 12 people who use a screen reader
    
-   At least 5 of 12 people must identify as Black, Hispanic/Latina/Latinx, Asian, or Native American
    
-   At least 6 of 12 people must identify as having a cognitive consideration
    
-   At least 5 of 12 people must identify as other than male
    
-   At least 3 of 12 people are without a degree or professional certificate
    
-   At least 2 of 12 people are under 35
    
-   At least 5 of 12 people are over 55
    
-   At least 4 of 12 people who identify as gay, lesbian, bisexual, or transgender
    
-   At least 3 of 12 non-native English speakers
    

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question. Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

Secondary criteria (nice-to-haves) What criteria would strengthen your results?

#### Secondary criteria (nice-to-haves)

-   At least 2 of 12 people who live in a rural or remote area
    
-   At least 2 of 12 people who live in a major metropolitan area
    

RECRUITING SURVEY

**1. VA debt**

Please select what applies to you (Check all that apply):
I currently have an unpaid VA medical copay debt
I have had a VA medical copay debt in the last 3 years
I currently have an unpaid VA overpayment debt (disability compensation, education or pension benefits overpayments)
I have had a VA overpayment debt in the last 3 years (disability compensation, education or pension benefits overpayments)
I have not had a VA medical copay debt or VA overpayment debt in the last 3 years (does not qualify)


**2. Amount of debt**

Please select the amount of the debt for the highest VA debt you have had in the last 3 years (copay or VA overpayment):
The debt I had or currently have is in the range of $1 - $99
The debt I had or currently have is in the range of $100 - $500
The debt I had or currently have is in the range of $501 - $1,000
The debt I had or currently have is over $1,000
  
**3. VA debt resolution**

On a scale from 1 to 10, how much does this statement apply to you:
“I have taken steps to resolve this debt” (~ 8 of 14 must have selected “4” or “5”)

1 - I have not been active in resolving this debt at all
2 - I have been a little bit active in resolving this debt
3 - I have been somewhat active in resolving this debt
4 - I have been active in resolving this debt
5 - I have been very active in resolving this debt
 

**4. Experiences of financial hardship**

Please select the statement(s) that apply to you:  (Check all that apply)
I am currently experiencing financial hardship.
I have experienced financial hardship in the past.
I have never experienced financial hardship. (does not qualify)

 **5. LGBTQ+**

Do you identify as a member of the LGBTQ+ community ?
We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.
-   Yes
-   No
-   Decline to answer
   
  **6. Cognitive consideration**
  
Has a medical professional ever diagnosed you with a cognitive disorder? Some examples include PTSD, Alzheimer's disease, Attention deficit disorder, Dementia, Parkinson's disease, Traumatic brain injury
-   Yes
-   No
-   Decline to answer
    
**7. What is your annual household income level?**

$0 - $25K
$25K - 49.9K
$50K - 74.9K
$75K - 99.9K
$100K - 149.9K
$150K - $199.9K
Over $200K 

8. What is the highest degree or level of school you have completed? (Please recruit a variety, and a minimum of 20% have a High School diploma/GED or a less)

 -   Less than a High School diploma
 -   High School diploma or GED
-   Some College, but no degree
 -   Associates Degree (for example: AA, AS)
 -   Bachelor's Degree (for example: BA, BBA, and BS)
-   Master's Degree (for example: MA, MS, and MEng)
-   Professional Degree (for example: MD, DDS, JD)
-   Doctorate (for example: PhD, EdD
    

9. Attitudinal question - trust

Please indicate how much you agree or disagree with the following statement: "I trust VA to fulfill our country’s commitment to Veterans.”
-  Strongly agree
-   Agree
   -    Neutral
-    Disagree
-    Strongly disagree
