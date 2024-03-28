Improved autosuggest component usability testing

Draft Research Plan (updated Mar 11, 2024)


# Background

The conditions page on the 526EZ form is where Veterans input the new conditions for which they apply for disability benefits. It’s a crucial and required page. However, the current conditions page has usability and accuracy limitations, leading to potential errors and frustrations for users. 

In our first iteration, we updated the conditions list that powers the autosuggest component. In this next iteration, we aim to improve the page by providing a more user-friendly interface and relevant suggestions for conditions. 

Design changes from the current state (Reference: [Wireframes of Designs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1708640635412/02ea986ef470f7aca5a430914bb1b13ef38f3883?sender=ua2c042c118aa787583244606))

- Rewritten instructions 

  - Accordion for additional information

  - Top conditions included in the copy

- Updates to autosuggest component 

  - Updated search algorithm that is powering the autosuggestions 

  - Free-text option in the dropdown is the only way for users to enter free-text

  - Display up to max height conditions before requiring scrolling. Display up to ~20 conditions with scrolling

  - Dynamic list, with the number of suggestions decreasing as you type more


### Terminology

**_Autosuggest component_**: Name of the component in the 526 flow where Veterans can name a medical condition to add to their claim. It functions similarly to a combo box whereby the user can select a medical condition from a fixed list of options or enter free text to describe their condition.


OCTO Priorities\
This research supports OCTO priorities to enhance Veterans’ personalized online experience and to fast-track disability claims (see #6 and #7 from [OCTO 2023 priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md)).
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Veteran Journey 

This work fits into the “Taking care of myself” stage of the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), and within that stage, the “Managing primary care and chronic health issues” phase. 


## Research Goals

- Evaluate the usability of the revised autosuggest component 

- Evaluate the effectiveness of the explanatory content 

- Assess overall confidence and satisfaction with the page


## Outcome

_How will this research advance your product to the next phase in the design process? What will you do with your learnings?_

The research findings will guide further improvements to the conditions page, ensuring it meets the needs of Veterans applying for disability benefits. The insights will also help prioritize future enhancements to the page. 


## Research questions

**Overall**

- Which design do participants prefer? Why? 

**Goal 1: Evaluate the usability of the revised autosuggest component** 

- Do the participants understand that they have the option to type in their condition? 

  - If so, how do they feel about using the dropdown to enter free text?

- Why do participants use the free-text option and how do free-text entries differ from the conditions list terms?

  - Are participants most likely to use the free-text option for certain types of conditions? If so, what are these conditions, and why do participants prefer to enter them manually? 

- Can assisted technology users navigate the page and submit their condition(s)? 

  - What specific challenges do they face in navigating the page and submitting their condition(s)

- How do participants evaluate the autosuggestions and make a selection?

  - Are Veterans able to find their conditions from the auto-suggestions?

    - Are there specific types of conditions participants struggle to find?

  - How do participants review and scroll through the list? Is it intuitive that they can scroll if the list has more than 10 results? Do they review all 10 conditions first and then scroll? Do they scroll or wait for the results to appear as they type in more? 

- How do participants perceive the autosuggest feature in helping them enter their conditions accurately? 

**Goal 2: Evaluate the effectiveness of the explanatory content** 

- Do participants notice the accordion for additional information, do they use it, when/why do they use it, and does it enhance their understanding of the purpose of the page? 

*  Do participants find including the top conditions in the copy helpful in understanding what conditions to select? How does the list of common conditions impact a participant's approach to entering conditions? Does it help them? If so, how?

* Do participants read the instructions, and if they do, do they understand the content? 

* Are participants able to differentiate between “editing” a condition vs. adding a new condition? 

**Goal 3: Assess overall confidence and satisfaction with the page** 

- What are the common challenges faced by participants?

- Does selecting from the list give Veterans confidence in what they submitted? Do they think the VA has what it needs to understand what they are claiming?

- Are there any specific improvements or features participants would suggest to make the page easier to use and understand? 


## Hypothesis

_What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis._

- _What do you already know about this problem space?_

- _What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)_

- _Write a generalized statement that combines what you know + what you think will happen during the study._

- _Remember to constrain the hypothesis to the goals of your study!_

We hypothesize that the enhancements made to the conditions page will enhance user satisfaction and the quality of data entered for the disability benefits application. 

With the updated search algorithm, users can find their conditions easily if they match an item in our list, and if not, they can enter free text seamlessly. We anticipate that these improvements will lead to two key outcomes: (1) an increase in structured data quality, providing VSRs with high-quality and actionable information, and (2) improved accuracy in capturing the conditions that Veterans are trying to claim.


## Methodology

- We will conduct moderated usability testing with 8 Veterans, including assisted technology users, familiar with the disability benefits application process. 

- Sessions will be remote Zoom sessions for approximately 45-60 minutes 

- Participants will be asked to complete tasks related to entering their medical conditions on the conditions page. We will have a mock scenario prepared as a back-up, in cases where the Veteran does not have conditions in mind or is uncomfortable using their actual conditions. 

- We will screen for Veterans who have either filed in the past or who are planning to file for disability in the future. 

- We will use a Codepen prototype for the concept test. The prototype will be available on mobile or desktop.

- We will have participants test and compare two different prototypes. We’ll rotate the order of the two different prototypes to avoid biasing the results.

- Sessions will be conducted remotely during zoom. 


## Research Materials

- Conversation Guide - (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/202403%20Improved%20Autosuggest/conversationguide.md)

- Prototype - (https://codepen.io/ccteam/live/abxWoJg)


# Recruitment

## Recruitment criteria

### Recruitment approach

We are looking for 8 Veterans to participate in this study (recruiting for 11), at least two of which use assistive technology.  We’ll target other demographic criteria (cognitive disability and age) as primary sample distribution criteria, with race/ethnicity as secondary sample distribution criteria.

Participants for this study: 8 Veterans. 

We would like to request a kickoff call with Perigean. Requested date/time: _put date and time_ 


### Primary criteria (must-haves)

- At least 4 participants are receiving disability compensation from the VA 

  - At least 2, but no more than 4 have never submitted a disability claim but intend to

- At least 2 but no more than 3 Veterans who use assistive technology (AT) such as screen readers (AT/reader) or magnifiers (AT/magnifier)

- At least 1 but no more than 3 Veterans who identify as having a cognitive disability.

- At least 1 but no more than 4 Veterans over 55 years old 

- Education

  - At least 1 but no more than 3 “no degree after high school” 


### Secondary criteria (nice-to-haves)

- We’d like a mix of genders, age, and race/ethnicity 

- Gender

  - Attempt At least 2 but no more than 4 Veterans who identify as a gender other than male 

- Age

  - Attempt at least 1 Veteran under 35 years old 

- Race/ethnicity

  - Attempt at least 2 but no more than 4 Veterans who are not white/Caucasian


### Screener questions

- Have you ever filed a claim for disability compensation with the VA in the past? 

  - Yes (Recruit 4)

  - No 

    - \[If no] Are you interested in filing for disability benefits in the next month?

      - Yes ( Recruit 4)

      - No 

- Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.

  - Yes (Recruit 3-4 Veterans)

  - No

\[Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.]

# Timeline

## Prepare

When will the thing we are testing be finalized? 

-

Pilot session information

- Pilot participant email: 

- Date and time of pilot sessions: 


## Research Sessions

We are planning to conduct research the week of April 8th, 2024

Length of Sessions

- Session length: < 75 minutes

- Buffer time between sessions: 30 minutes 

- Maximum Sessions per day: 3


## Availability

- Monday, April 8th: 11am - 1pm ET
- Tuesday, April 9th: 11am - 1pm ET; 3pm - 5pm ET
- Wednedsday, April 10th: 1:30pm ET - 5:30pm ET
- Thursday, April 11th: 11am - 4:30pm ET
- Friday, April 12th: 11am - 3:30pm ET

# Team Roles

- Moderator: Eva Heintzelman or Sudeepti Bhatnagar 

- Research guide writing and task development: Sudeepti Bhatnagar

- Participant recruiting & screening: Perigean

- Project point of contact: Eva Heintzelman and Sudeepti Bhatnagar

- Participant(s) for pilot test: 

- Accessibility specialist (for sessions where support for assistive technology may be needed): 

- Note-takers: Eva Heintzelman, Sudeepti Bhatnagar, Yurena Garcia-Hevia, Lesley Ropp

- Observers: Jennifer Bertsch, Tyler Spangler, Luke Short, Shannon Ford, Lesley Ropp

Contact Information of the people serving in the roles above

- Eva Heintzelman: <evaheintzelman@navapbc.com>, 202-288-8369

- Sudeepti Bhatnagar: <sudeeptibhatnagar@navapbc.com>, 734-255-8989

- Yurena Garcia-Hevia: yurenagarcia\@navapbc.com

- Lesley Ropp: lesley.ropp\@va.gov

- Jennifer Bertsch: Jennifer.Bertsch\@va.gov

- Tyler Spangler: tyler.spangler\@agile6.com

- Luke Short: <luke@verdance.co>

- Shannon Ford: shannon.Ford1\@va.gov


