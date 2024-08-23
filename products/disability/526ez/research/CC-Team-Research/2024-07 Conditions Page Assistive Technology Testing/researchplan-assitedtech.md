Conditions page AT user usability testing

Draft Research Plan (updated Jul 8, 2024)


# Background

The 526EZ form's Conditions page is essential for Veterans applying for disability benefits. On this page, Veterans list the new medical conditions for which they're seeking benefits.

Our improvements to this page occurred in two phases:

1. Initial update: We enhanced the autosuggest feature by updating the list of medical conditions it uses.

2. Second iteration: We redesigned the page to be more user-friendly and to provide more relevant condition suggestions.

Now that these changes are live, our next step is to conduct accessibility testing. We plan to work with Veterans who use assistive technologies, specifically screen readers and screen magnifiers, to ensure the page is fully accessible and functional for all users.


### Terminology

**_Autosuggest component_**: This is a component in the VA Form 526EZ where Veterans input their medical conditions. It works as follows:

- As Veterans type, it suggests matching conditions from a predefined list.

- Veterans can select a condition from these suggestions.

- If their condition isn't listed, Veterans can type in their own description.

This component combines the functionality of a dropdown menu (for selecting from a list) with a text input field (for custom entries), offering flexibility in how Veterans describe their medical conditions.


OCTO Priorities\
This research supports OCTO priorities to enhance Veterans’ personalized online experience and to fast-track disability claims (see #6 and #7 from [OCTO 2023 priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202023.md)).
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Veteran Journey 

This work fits into the “Taking care of myself” stage of the [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf), and within that stage, the “Managing primary care and chronic health issues” phase. 


## Research Goals

We will evaluate the 526EZ form’s Conditions page for Veterans using assistive technologies, specifically magnification and screen reader technologies. Research goals include: 

1. Usability: Evaluate how easily Veterans can navigate and use the page with various assistive technologies. Test all features, particularly the autosuggest component, for compatibility with assistive devices. Confirm that Veterans can successfully enter and submit their conditions.

2. Clarity: Assess whether page instructions and information are clear and comprehensible when accessed through assistive technologies.

3. Satisfaction: Assess overall confidence and satisfaction with the page 

_How will this research advance your product to the next phase in the design process? What will you do with your learnings?_

The research findings will guide further improvements to the conditions page, ensuring it meets the needs of Veterans applying for disability benefits. The insights will also help prioritize future enhancements to the page. 


## Research questions

**Goal 1: Evaluate the usability of the revised autosuggest component** 

- How effectively can assistive technology users navigate the page and submit their condition(s)?

  - What specific challenges do they face in this process?

- How responsive and helpful do participants find the autosuggest feature when using assistive technologies?

  - Do participants understand and utilize both the autosuggest and free-text options?

    - How do they perceive and interact with these different input methods? 

    - Do they have a preference? 

  - How do participants interact with and evaluate the autosuggest results?

    - Is the scrolling functionality intuitive and accessible?

    - Are there specific types of conditions that participants struggle to find?

- Can participants easily differentiate between editing an existing condition and adding a new one?

**Goal 2: Evaluate the effectiveness of the explanatory content** 

- Do participants understand the content and terminology used in the instructions?

- How much of the content do participants read? How do instructions impact how they use the page (if at all)? 

- Are participants comfortable/confident with entering a condition that is not on the list? 

**Goal 3: Assess overall confidence and satisfaction with the page** 

- How would participants rate the overall accessibility of the page?

- What are the most common challenges faced by assistive technology users on this page?

- How confident are participants in the accuracy and completeness of their submitted information?

- What specific improvements would participants suggest to enhance usability and understanding for assistive technology users?


## Hypothesis

_What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis._

- _What do you already know about this problem space?_

- _What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)_

- _Write a generalized statement that combines what you know + what you think will happen during the study._

- _Remember to constrain the hypothesis to the goals of your study!_

We hypothesize that Veterans using assistive technologies will successfully navigate and submit conditions on the 526EZ Conditions page. However, we anticipate that Veterans will encounter usability challenges with the autosuggest feature and may prefer free-text entry for certain types of conditions. We expect that the page's instructions will be generally understandable and that users will be able to enter their conditions without having to read the full instructions.


## Methodology

- We will conduct moderated usability testing with 8 Veterans who use assistive technology and are familiar with the disability benefits application process. 

- Sessions will be remote Zoom sessions for approximately 45 minutes for screen magnifier users and 90 for screen reader users 

- Participants will be asked to complete tasks related to entering their medical conditions on the conditions page. We also have mock scenarios as a backup in cases where the Veteran does not have conditions in mind or is uncomfortable using their actual conditions. We will have all participants also do the mock scenarios

- We will screen for Veterans who have filed for disability in the past 

- We will use the live page for testing. Users will log into test user accounts on staging 

- Sessions will be conducted remotely using Zoom. 


## Research Materials

- Conversation Guide - <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/202403%20Improved%20Autosuggest/conversationguide-assistivetech.md> 


# Recruitment

## Recruitment criteria

### Recruitment approach

We are looking for 8 (4 Screen Magnifier + 4 Screen Reader) Veterans to participate in this study (recruiting for 16).  We’ll target other demographic criteria as secondary criteria 

Participants for this study: 8 Veterans. 

We would like to request a kickoff call with Perigean. Requested date/time: Monday July 15th for 30 minutes between 9:30AM - 12:45PM EST, or 3:00-5:00PM EST  or Tuesday July 16th 9:30 AM - 12:45 EST, or 3:00PM - 5:00PM EST 


### Primary criteria (must-haves)

Overall

- All participants are receiving disability compensation from the VA 

 Cohort 1: Low vision - magnification users

- 4 Participants who use magnification devices EVERY TIME they use the internet

- Mix of ZoomText, ZoomText Fusion, Magnifier (Windows), Zoom (Apple)

Cohort 2: Screen reader users who use devices EVERY TIME they use the internet

- 4 Participants who use screen readers and are experienced with their devices

- Mix of NVDA, JAWS, VoiceOver (Apple), Talkback (Android)


### Secondary criteria (nice-to-haves)

- We’d like a mix of genders, age, race/ethnicity, and education  

- Gender

  - Attempt At least 3 Veterans who identify as a gender other than male 

- Age

  - At least 3 55+ 

- Race/ethnicity

  - Attempt at least 4 that do not identify as White/Caucasian 

- Education 

  - Attempt at least 3 with no degree 


### Screener questions

**General: Disability compensation** 

1. Have you ever filed a claim for disability compensation with the VA in the past?

- Yes \[Recruit for all] 

- No \[Remove] 

**Cohort 1: Low vision - magnification users**

1. Do you use a screen magnifier or magnification software when using your mobile or desktop device?

   1. No \[Remove]

   2. Yes (Please select all that apply): \[Recruit 4, a mix] 

      1. ZoomText

      2. ZoomText Fusion

      3. Windows Magnifier

      4. macOS Zoom

      5. iOS/iPadOS Zoom

      6. Android Magnification

      7. Other screen magnifier (Please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

      8. I prefer not to answer

2) If you answered Yes, how frequently do you use screen magnification?

   1. Always \[recruit 4] 

   2. Often

   3. Sometimes

   4. Rarely

5. Can you join the Zoom session from your mobile or desktop device using the tools you need to see your screen? 

   - Yes

   - No \[remove] 

   - Does not apply

**Screener Questions: Cohorts 2: Screen reader users**

1. Do you use a screen reader to access digital content on your devices every time you use the internet? 

   - Yes

   - No \[remove] 

   - I prefer not to answer

2. If you answered Yes to the previous question, which screen reader(s) do you use? \[Recruit 4, a mix] (Select all that apply) 

   - JAWS

   - NVDA

   - VoiceOver (iOS/macOS)

   - TalkBack (Android)

   - Narrator (Windows)

   - Other (Please specify): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3. Please rate your experience level using a screen reader: 

   - Beginner \[Remove] 

   - Intermediate

   - Advanced \[Recruit 4] 

   - I don't use screen readers

4. How frequently do you use a screen reader?

   - Daily \[recruit 4]

   - Several times a week

   - Occasionally

   - Rarely

   - Never

5. Are you willing and able to participate in a usability test using your screen reader via a video conferencing platform (e.g., Zoom)?

   - Yes

   - No \[Remove]

   - Not applicable

\[Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.]


## Prepare

When will the thing we are testing be finalized? 

Pilot session information

- Pilot participant email: Jamie Klenetsky Fay 

- Date and time of pilot sessions: 7/22 1pm PST


# Research Sessions

We are planning to conduct research the weeks of July 22nd and July 29th 

Length of Sessions: 45 minutes for screen magnification (cohort 1) and 90 minutes for screen reader (cohort 2). Recruitment is done for two cohorts, but sessions can be scheduled anytime within the times listed below and can mix between cohorts. 

- Buffer time between sessions: 30 minutes 

- Maximum Sessions per day: 3 


## Availability

July 24th: 7:30AM PST - 2:00PM PST 

July 25th: 9-10 AM PST, 11am-2pm PST 

July 29th: 7:30 AM PST - 2:00PM PST 

July 30th: 7:30 AM - 10:30 PST , 12:00 - 2:00PM PST 

July 31st: 7:30 AM - 10:00 AM PST, 11AM - 2:00PM PST 

August 1st: 7:30 AM - 2:00 PM PST 

 Team Roles

- Moderator: Eva Heintzelman or Sudeepti Bhatnagar 

- Research guide writing and task development: Sudeepti Bhatnagar

- Participant recruiting & screening: Perigean

- Project point of contact: Eva Heintzelman and Sudeepti Bhatnagar

- Participant(s) for pilot test: 

- Accessibility specialist (for sessions where support for assistive technology may be needed): Jamie Klenetsky Fay 

- Note-takers: Eva Heintzelman, Sudeepti Bhatnagar, Yurena Garcia-Hevia, Lesley Ropp

- Observers: Jennifer Bertsch, Tyler Spangler, Luke Short, Lesley Ropp

Contact Information of the people serving in the roles above

- Eva Heintzelman: <evaheintzelman@navapbc.com>, 202-288-8369

- Sudeepti Bhatnagar: <sudeeptibhatnagar@navapbc.com>, 734-255-8989

- Yurena Garcia-Hevia: yurenagarcia\@navapbc.com

- Lesley Ropp: lesley.ropp\@va.gov

- Jennifer Bertsch: Jennifer.Bertsch\@va.gov

- Tyler Spangler: tyler.spangler\@agile6.com
