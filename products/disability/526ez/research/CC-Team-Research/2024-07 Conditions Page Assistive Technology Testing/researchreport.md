2024-07 Conditions Page Assistive Technology Usability Testing

 Research Report 

Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Contention Classification

Date: 8/20/24

\[Sudeepti Bhatnagar] \[<sudeepti.bhatnagar@va.gov>, <sudeepti@navapbc.com>]

\[Eva Heintzelman] \[<eva.heintzelman@va.gov>, evaheintzelman\@navapbc.com]

Jump to:

- [Research Goals](#research-goals)

- [Research Questions](#research-questions)

- [Methodology](#methodology)

- [Hypotheses and Conclusions](#hypotheses-and-conclusions)

- [Key findings](#key-findings)

- [Detail of findings](#detail-of-findings)

- [Recommendations](#recommendations)

- [Additional insights](https://docs.google.com/document/d/1APgcHGtnbHQrAHPgyJF8fazuP4Mo1u4NbIxHiZ3Z2YY/edit#heading=h.y1qpx7lbc9ca)

- [Next Steps](https://docs.google.com/document/d/1APgcHGtnbHQrAHPgyJF8fazuP4Mo1u4NbIxHiZ3Z2YY/edit#heading=h.b7u45od6x57b)

- [Further research needed](https://docs.google.com/document/d/1APgcHGtnbHQrAHPgyJF8fazuP4Mo1u4NbIxHiZ3Z2YY/edit#heading=h.xtp2caovji4e)

- [Appendix ](#appendix)


## Research Goals

We will evaluate the 526EZ form’s Conditions page for Veterans using assistive technologies, specifically magnification and screen reader technologies. Research goals include: 

1. Usability: Evaluate how easily Veterans can navigate and use the page with various assistive technologies. Test all features, particularly the autosuggest component, for compatibility with assistive devices. Confirm that Veterans can successfully enter and submit their conditions.

2. xClarity: Assess whether page instructions and information are clear and comprehensible when accessed through assistive technologies.

3. Satisfaction: Assess overall confidence and satisfaction with the page 

_How will this research advance your product to the next phase in the design process? What will you do with your learnings?_

The research findings will guide further improvements to the conditions page, ensuring it meets the needs of Veterans applying for disability benefits. The insights will also help prioritize future enhancements to the page. 


## Research Questions

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


## Methodology

From July 24-31, we conducted remote moderated usability sessions via Zoom with Veterans who use assistive technologies (AT). Participants were asked to complete tasks on the conditions page of the 526EZ form, including adding, editing, and removing conditions. Participants used the VA staging environment with test user accounts, so they were not changing their application. We observed their interactions and gathered feedback on their experience.

Participants used either screen reader (JAWS, VoiceOver) or screen magnification tools. Sessions lasted approximately 60-90 minutes, depending on the participant's AT usage.

**Limitations**

- This report's findings are based on our observations and conversations with 7 Veterans using assistive technology. Due to the small sample size, we cannot conclude this is representative of all Veterans using AT.

- We were unable to test with users of all types of AT or on all device/operating system combinations.

- Some participants encountered technical difficulties during the remote sessions, which may have impacted their experience.

- This research did not have representation from some [underserved communities](#underserved-groups-we-havent-talked-to). 


## Hypotheses and Conclusions

#### Hypothesis

We hypothesize that Veterans using assistive technologies will successfully navigate and submit conditions on the 526EZ Conditions page. However, we anticipate that Veterans will encounter usability challenges with the autosuggest feature and may prefer free-text entry for certain conditions. We expect that the page's instructions will be generally understandable and that users will be able to enter their conditions without having to read the full instructions.


#### Conclusion

_"Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”)_

Likely True, except for mobile iOS users, where this is Definitely False due to a function-blocking bug. 


## Key Findings

Overall Experience 

1. [Participants using assistive technologies demonstrated remarkable resilience and adaptability, successfully completing most tasks despite encountering various obstacles.](#participants-using-assistive-technologies-demonstrated-remarkable-resilience-and-adaptability-successfully-completing-most-tasks-despite-encountering-various-obstacles)

2. [The experience for screen magnifier users was mainly comparable to non-screen magnifier users, with minimal AT-specific challenges](#the-experience-for-screen-magnifier-users-was-mainly-comparable-to-non-screen-magnifier-users-with-minimal-at-specific-challenges)

3. [Despite the overall success, the form presented substantial usability issues and cognitive load for screen reader participants](#despite-the-overall-success-the-form-presented-substantial-usability-issues-and-cognitive-load-for-screen-reader-participants)

Navigation & Instructions

4. [AT users demonstrated a range of navigation strategies when interacting with the conditions page](#at-users-demonstrated-a-range-of-navigation-strategies-when-interacting-with-the-conditions-page)

5. [Many participants successfully interacted with the page without thoroughly reading the instructions](#many-participants-successfully-interacted-with-the-page-without-thoroughly-reading-the-instructions)

Autosuggest Component

1. [Observations similar to non-AT participants](#observations-similar-to-non-at-participants)

2. [Screen reader specific bugs](#screen-reader-specific-bugs)

3. [Screen reader specific challenges and strategies ](#screen-reader-specific-challenges-and-strategies)


## Detail of Findings 

## OVERALL EXPERIENCE 

### Participants using assistive technologies demonstrated remarkable resilience and adaptability, successfully completing most tasks despite encountering various obstacles. 

"It's pretty straightforward. Once you get the hang of it, it's not hard to use at all." - P3

- Most participants completed the main tasks of adding, editing, and removing conditions.

  - Only 1 participant could not add a condition due to a bug only found on iOS devices (see [AUTOSUGGEST COMPONENT](#autosuggest-component)) 

- When asked, “Please rate your experience with entering conditions on this page),” on a scale of 1 - “Very Bad” to 5 - “Very Good”, the average score was 4, with the mode also being 4. 

- Participants found the form straightforward, liked having the autosuggestions, and found information in the focus manageable. 

- Many viewed it as an improvement over other VA forms they had used


### The experience for screen magnifier users was mainly comparable to non-screen magnifier users, with minimal AT-specific challenges

“If I had 20/20 vision, this page is perfect, nothing I can suggest to make it better. I don’t see any faults with it.” - P1 

- The page design, including font sizes, scalable and responsive layout, and sufficient text-to-background contrast, allowed screen magnifier users to navigate the page comparably to those not using magnification tools. 

- Participants using screen magnifiers encountered no significant bugs or issues specific to their software.


### Despite the overall success, the form presented substantial usability issues and cognitive load for screen reader participants 

"If I were trying to put in all my conditions, I would not have completed it all today. I would have gone back and completed it another time. If I had trouble a second time, I would have to seek help." - P2

- Managing autosuggestions, navigating between tasks, and switching between listening, typing, and interacting created significant cognitive demands.

- Reviewing long lists of autosuggestions was described as tiring and time-consuming, especially when having to sort through variations of similar conditions (e.g. right, left, bilateral) and

- One participant expressed a preference for completing easier tasks first and returning to more challenging ones later, indicating a need for a more flexible form structure.

- Several participants mentioned they would need to review their entries multiple times or have someone else check their work, suggesting a lack of confidence in their ability to independently complete the form.


## NAVIGATION & INSTRUCTIONS

### AT users demonstrated a range of navigation strategies when interacting with the conditions page 

"When you're filling out forms it can be tricky. Some people arrow down, some people tab. I like to arrow down, but I tab to get to the things I need to get to." - P4

- Page orientation varied among participants. Some skipped to the main content and would return to the top at the end to ensure they hadn’t missed anything, while others methodically tabbed through every element for thoroughness.

- When errors occurred, many found restarting from the beginning of the page more efficient than attempting in-place corrections.

- Participants wanted to review their information before submitting it. They would review from the top of the page or even intend to enlist family members or paid services for additional verification.

- Navigation preferences varied, with some users favoring arrow keys and others relying on tabbing. 


### Many participants successfully interacted with the page without thoroughly reading the instructions

"I’m thinking that I could follow the instructions. If I was able to concentrate on what I was doing." - P7

- When asked, “Please rate how understandable this site's information is.” on a scale of 1 - Difficult to understand to 5 - Easy to understand, the average score was 4.83

  - Participants expressed that they found the instructions to be clear and helpful.

- Some users only read the headers, skipping detailed content.

- A few participants meticulously tabbed through and had every instruction element read out, a time-consuming process. 

- The examples of conditions list were appreciated as a resource, but for screen reader users, reviewing the entire list was time-consuming and increased cognitive load, as they often tabbed and listened to all seven common conditions before getting to the add a new condition section 


## AUTOSUGGEST COMPONENT 

### OBSERVATIONS SIMILAR TO NON-AT PARTICIPANTS 

- Preference for autosuggest options

  - Participants generally preferred selecting from the autosuggest list when possible, perceiving these options as "pre-approved" or more likely to be accepted by the VA.

  - Some participants hesitated to use free-text entry, worrying that it might lead to claim denials or misunderstandings. They often tried multiple variations of search terms before resorting to free-text entry.

- Detailed descriptions in free-text 

  - When using free-text entry, participants tended to provide more detailed descriptions than selecting from the autosuggest list. This suggests a desire to ensure their condition is fully understood when not using "official" terminology.

- Learning as they go 

  - The perception and preference for input methods often changed throughout the session. Some participants became more comfortable with free-text entry after successfully submitting a free-text condition.


### SCREEN READER SPECIFIC BUGS

There were two critical bugs that appeared only for iOS participants. 

- While tabbing through elements, the focus unexpectedly moved to a non-visual vertical bar. Participants found it challenging to exit this element once the focus was trapped there, preventing them from adding conditions. 

- The focus order did not follow a logical, chronological order and would unexpectedly skip elements.


### SCREEN READER SPECIFIC CHALLENGES AND STRATEGIES 

**Cognitive load and information processing** 

- The volume of suggestions could be overwhelming. Users often had to try different search terms or continue typing their condition to manage the number of results. 

  - One user initially searched for "inflammation" but then thought that would generate too many results, so they erased it and typed in "kidney inflammation").

  - The cognitive load of reviewing repetitive autosuggestions (e.g., variations like "right," "left," "bilateral") was high. In one case, a user scrolled through and listened to 18 options to find "bursitis in knee, right” 

- One user with a visual impairment focused solely on typing and using the free-text, ignoring autosuggestions as it was easier to concentrate on one task at a time.

**Error detection and correction** 

- Users often missed typos or errors in their entries.

  -  For example, one user typed "bind" instead of "blind" and only noticed the error later when tabbing through their entries. Another entered "bursitis in right keen" without noticing the typo in "knee." This could also impact the relevance and accuracy of autosuggestions. 

- Accidental submissions went unnoticed. In one instance, a user unknowingly submitted "B" as a condition and didn't catch this error when reviewing the page.

- The error message for submitting a blank condition was vague and did not help participants understand what they did wrong 

**Adding/editing/removing a condition** 

- Screen reader participants struggled to review, edit, and verify their entries on the conditions page, mainly due to the lack of immediate and clear feedback after performing actions like adding, editing, or removing entries.

  - Participants sometimes accidentally removed conditions they intended to edit or selected "cancel" instead of "update," forcing them to repeat the entire process.

  - When attempting to add a new condition, one user inadvertently edited a previous entry, only realizing their mistake after hearing the two conditions listed together.

  - Participants did not receive a confirmation when removing a condition. 

    - Ex: when asked to remove a kidney condition, one participant accidentally removed a hip condition instead and was unaware of the mistake.

**Interface understanding and interaction** 

- Save button 

  - The save button's purpose and visibility caused confusion. Autosuggestions could obscure it, and its function was unclear, with some users thinking it saved all conditions rather than just the current one.

  - One user attempted to press "continue" instead of "save" after entering a condition, which brought them to the next page. This action also saves their condition, making it harder for them to understand they must press “save” after each condition. 

- Free-text 

  - Many participants initially overlooked or misunderstood the free-text option.

  - The "Enter your condition as..." choice was often not immediately apparent to users

  - Understanding and using the free-text feature presented a significant learning curve

    - Regardless of what participants typed, pausing always triggered at least one suggestion. The first suggestion was always the user's input, which was listed as "Enter your condition as..."

    - Users had to navigate this self-input option first to check for actual list suggestions, adding complexity to their search.

      - Some users adapted by waiting for at least two suggestions before considering options from the predefined list

      - Some users learned and would adjust what and how they are typing to optimize the autosuggestions. 

  - Free-text entry was particularly challenging for conditions not in the list, such as "seizures," where users struggled with spelling and kept changing it hoping to find a match. 


## Recommendations

Overall

- Keep the general page layout of instructions + autosuggest component, but optimize to minimize confusion and errors 

Cognitive burden 

- Explore ways to decrease the number of autosuggestions. This could be by separating out left/right/bilateral, refining the algorithm, improving the announcement of suggestions, possibly grouping similar conditions or body parts

- Explore if changing the flow and breaking apart the flow into smaller parts would decrease the cognitive burden 

  -  For example testing a multi-step process of adding conditions one at a time vs. all conditions at once,

Navigation & Instructions

- Leave as is in the near term, but consider if the conditions list example should be shorter

- Consider adding a skip link from the examples to go straight to the autosuggestion component 

- Propose to design system team to move the save-in-progress banner so users know earlier in the process that their work is being saved 

  - Also raise the issue with (which team?) that the intercept survey can be confusing and distracting for AT users 

Bugs

- Address the focus issues in the autosuggest dropdown for screen reader users on iOS devices. 

  - See CAIA’s analysis and recommendation in [slack ](https://dsva.slack.com/archives/C07E3RQETC1/p1722370969959969)

Improve autosuggest component functionality 

- Introduce typo tolerance and spelling correction in the autosuggest function. 

- Allow for dictation on the form 

- Offer an “undo” feature for accidental submissions or deletions. (Explore if CTRL-Z works on this page like that) 

- Refine the error messages to clarify what the error was; for submitting a blank condition add something like “you submitted a blank condition. Please enter a condition” 

- Clarify the save button functionality with descriptive labels or reexamining the flow. Position the button so it doesn’t overlap with autosuggest dropdown

- Consider adding screen reader-only instructions or functionality to clarify the use of free-text in the dropdown

  - Consider implementing a way for users to easily distinguish between their input and actual autosuggestions without having to navigate through multiple suggestions

- Provide immediate and clear announcements after each action (add, edit, remove) 

  - Explore how to improve the experience of fixing mistakes in place without having to start from the top of the page. The announcements might solve this problem

- Add confirmation step before removing or overwriting conditions (this will be part of implementing the newest multiple response pattern) 

Assistive Technology Testing

- Continue testing with assistive technology users. 

- Conduct discovery research to understand better how AT users navigate forms and pages before design 


## Next Steps

- Fix bugs

- Brainstorm with accessibility experts solutions to the challenges encountered

- Prioritize backlog of improvements


## **Append**ix

### CSAT Questions and Average Scores 

We asked the same CSAT questions from the Medallia Intercept Survey to participants based on their experience with our prototypes. 

- The Intercept survey is enabled across all of modernized VA.gov. It randomly “intercepts” 5% of VA.gov users who have had a 60 second or more extended session (length of time was increased from 20 seconds in August 2023).

1\. Please rate your experience with entering conditions on this page (can be for either prototypes or combined). **Average Rating: 4**

1. Very bad

2. Somewhat bad

3. Neither bad nor good

4. Somewhat good

5. Very good

2\. Why did you select that rating? 

3\. Please rate how understandable this site's information is. **Average rating: 4.7**

Difficult to understand

1. Somewhat difficult to understand

2. Some is easy, some is difficult

3. Somewhat easy to understand

4. Easy to understand

4\. How did this interaction change your trust in Veterans Affairs? **Average rating: 4.1** 

1. Decreased my trust

2. Somewhat decreased my trust

3. Neither increased nor decreased my trust

4. Somewhat increased my trust

5. Increased my trust


### Testing scenarios 

### Research materials

\[Research plan]\([va.gov-team/products/disability/526ez/research/CC-Team-Research/202403 Improved Autosuggest/researchplan-assistedtech.md at master · department-of-veterans-affairs/va.gov-team (github.com)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/202403%20Improved%20Autosuggest/researchplan-assistedtech.md)

\[Conversation guide]\(https\://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/202403%20Improved%20Autosuggest/conversationguide-assistivetech.md)


### Tools used for Synthesis

- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722538048740/7310d0eb412841b860cb1dce366e5e71beaa32ad?sender=0430df53-a800-43da-8dca-2aaf777fd917)

- [Google Sheets](https://docs.google.com/spreadsheets/d/1nrqw-iekbkWM2oDwBPvaFqo76tOHZJNn55RTJQviixQ/edit?gid=0#gid=0)


### Pages and applications used

VA Staging


### [Other supporting documents created](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#other-supporting-documents-created)

None


### [Secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#secondary-research)

Nothing of note. 


### [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#who-we-talked-to)

Total Participants: 7

Disability and Assistive Technology (AT):

- Screen Magnifier Users: 3

  - Approaches varied among screen magnifier users:

    - Participant A: Found the default font size sufficient; did not use magnifier

    - Participant B: Used a physical magnifying glass for specific sections (e.g., reading suggested conditions)

  - Participant C: Utilized browser zoom to enlarge the entire page upon loading

- Screen Reader Users: 4

  - iOS VoiceOver: 2 participants

  - JAWS on Windows Desktop: 1 participant

  - TalkBack on Android: 1 participant

Audience segment:

- Veterans: 7

- Caregivers: 0

- Family members of a Veteran: 0

Disability benefits 

- Has applied for disability benefits before: 7

Gender:

- Male: 5

- Female: 2

LGBTQ+:

- Transgender: unknown

- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown

- Gay, lesbian, or bisexual: unknown

Devices used during study:

- Desktop: 

- Tablet: 

- Smart phone: 1

- Assistive Technology: 0

Age:

- 25-34: 0

- 35-44: 0

- 45-54: 2

- 55-64: 1

- 65+: 4

- Unknown: 0

Education:

- High school degree or equivalent: 1

- Some college (no degree): 2

- Associate's degree, trade certificate or vocational training: 1

- Bachelor's degree: 1

- Master's degree: 2

- Doctorate degree: 0

- Unknown: 0

Geographic location:

- Urban: 5

- Rural: 2

Race:

- White: 4

- Black: 3

- Hispanic: 0

- Biracial: 2

- Asian: 0

- Native: 0


## **Underserved groups we haven’t talked to**

[_VA recruitment checker_](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)

This research does not include the perspectives of the following marginalized Veteran groups: 

- Other than honorable discharge

- Immigrant

- Expat (living abroad)

- Identify as Asian, Native, Hispanic or Biracial

- Identify as LGBTQ+

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfzRXKMHktOC4132lTfCClCxQiF1xc8lJNDAL3sGiPZmOm5QoL3g9TfHUUgEdCgKMUBpaDZwde6pvfvjrsHzj-tQzyrSBM9OT_F19-f3yEaBX_UPMOMRa3eEy5L2lIi_vwZHkDIEWhQXdb1aRk5x9G_JvA?key=cqocKArN50NeRn1wwFr6aQ)

_\[insert screenshot of completed recruitment checker]_ !\[VA-recruitment-checker]\([VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1312168823))

