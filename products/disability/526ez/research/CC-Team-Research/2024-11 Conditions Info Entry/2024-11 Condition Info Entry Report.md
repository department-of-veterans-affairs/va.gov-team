2024-11 Condition Information Entry Assistive Technology Usability Testing Research Findings

**Office of the CTO- Digital Experience (OCTO-DE), 526-EZ, Contention Classification**

Date: 01/14/2024

Authors: [Sudeepti Bhatnagar](mailto:sudeeptibhatnagar@navapbc.com), [Kyra Berman-Gestring](mailto:kyra.berman-gestring@agile6.com), [Bianca Rivera Alvelo](mailto:biancarivera@navapbc.com) 

**Jump to a section**

- [Background](#background)

- [Research Goals](#research-goals)

- [Research Questions](#research-questions)

- [Methodology](#methodology)

- [Hypotheses and conclusions](#hypotheses-and-conclusions)

- [Key findings](#key-findings)

- [Details of findings](#details-of-findings)

- [Recommendations](#recommendations)

- [Further research needed](#further-research-needed)

- [Next Steps](#next-steps)

- [Appendix](#appendix)

  - [Who we talked to](#who-we-talked-to)


### Background

The conditions page on the 526EZ form is where Veterans input new conditions for disability benefits claims. This is a crucial step in the claims process, as it allows Veterans to describe the conditions they are seeking compensation for.

A key focus of this exploration is updating the page from the deprecated single-page multiple response pattern to the recommended [multi-page variation](https://design.va.gov/patterns/ask-users-for/multiple-responses). In addition to the multi-step flow, we are also exploring changes to the order and phrasing of the cause-related questions that follow the initial condition entry. In this new approach, referred to as the _condition-by-condition_ approach, tested as Apple, Veterans would complete all questions about one condition before moving on to the next, rather than the current state, referred to as the _conditions-first approach_, tested as Cherry, listing all conditions upfront and then answering additional questions about each condition. 

Seven usability tests were conducted via Zoom, including four participants who used screen readers and three who used screen magnifiers. The sessions focused on validating the usability and effectiveness of the flows and identifying any challenges or improvements needed for the new condition date and laterality questions.


## Research Goals

Our research goals for this study include:

- Evaluate the usability of the new multi-step conditions information entry flow (condition-by-condition or Apple)

  - Assess how Veterans navigate through the different flows.

  - Understand if the condition-by-condition approach (Apple) reduces cognitive load and context-switching.

  - Evaluate the effectiveness of separating condition name entry from side of the body (laterality) selection, especially for assistive technology (AT) users.

  - Evaluate the overall effectiveness of collecting all condition details before moving to the next condition.

- Evaluate the new condition date question

  - Assess Veterans' understanding and interpretation of when conditions started or worsened.

  - Understand Veterans' ability to provide accurate timing information.

* Understand cause attribution and documentation

  - Evaluate how Veterans interpret and answer questions about condition causes.


## Research Questions

**Goal 1: Evaluate the usability of the new multi-step conditions information entry flow**

- How do Veterans navigate the condition-by-condition approach compared to the current conditions-first approach?

- What differences, if any, emerge in Veterans' focus and attention when entering one condition at a time versus multiple conditions?

- How does separating laterality (right/left/bilateral) into its own question affect:

  - Veterans' ability to find conditions in the autosuggest list?

  - The experience for assistive technology users?

  - The natural flow of information entry?

- How do Veterans perceive the trade-off between potentially longer form completion time versus reduced cognitive load?

- What impact, if any, does the new flow have on the completeness and accuracy of Veterans' condition information?

- What impact does the increased number of pages have on Veterans' form completion experience?

**Goal 2: Evaluate new condition timing questions**

- How do Veterans interpret the question about when their condition started or worsened?

- What challenges do Veterans face when trying to recall or determine this date?

- What resources, if any, do Veterans consult to verify dates?

**Goal 3: Understand cause attribution and documentation**

- How do Veterans connect their conditions to service-related causes?

- What information do Veterans use to determine cause-condition relationships?

- How clear are the questions about condition causes?

- What additional context or guidance would help Veterans provide better cause information?


## Methodology

From Dec 3rd to 11th, we conducted hour-long remote moderated usability sessions via Zoom to gather feedback on a [prototype](https://staging.va.gov/user-testing/new-conditions/) featuring two design variations: Apple and Cherry. We circumvented the sign-in process so users began straight in the conditions flow, focusing only on this step of the larger form. Participants were tasked with navigating through the page and using their own conditions and related information. To minimize bias, we alternated the order in which participants viewed the designs, with half starting with Apple, and the other half starting with Cherry. 


### **Research materials**

1. [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2024-11%20Conditions%20Info%20Entry/2024-11%20Conversation%20Guide%20-%20Conditions%20info%20entry.md)

2. [Figma mock-ups of what we tested in Staging](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=324-9662) 

3. [Prototype in Staging](https://staging.va.gov/user-testing/new-conditions)

   1. Note: The prototype has been updated since the version we tested with participants. To view the changes made to the prototype, reference the Technical fixes section of the [Recommendations ](#recommendations)


### **Limitations**

- This report's findings are based on our observations and conversations with seven Veterans. Due to the small sample size, we cannot conclude this is representative of all Veterans.

- Participants responded based on their past experiences or speculated about a future claim. It's important to note that our study did not involve observing Veterans in the real-time process of filling out actual claims, so their responses in a real-world scenario might differ.

- This research did not have representation from some [underserved communities](#underserved-groups-we-havent-talked-to). 

- Participants completed the page using two different designs. However, there is a bias in that they already knew the page and happy path from the first design when they started the second design.

- It is important to acknowledge that while many participants expressed appreciation for the ease of use throughout the flow, this feedback should be considered within the context of the study. Since we tested only a single portion of the disability benefits application page, participants’ positive responses may be influenced by comparisons to their prior, more challenging experiences with the full disability benefits application process.


## Hypotheses and Conclusions

Hypothesis statement: ("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”) 

- The condition-by-condition approach to condition entry will result in more complete and accurate information by:

  - Reducing cognitive load through focused, single-condition entry

    - Not enough information.  While some participants slightly preferred for one prototype over the other, we did not collect specific data on cognitive load to confirm this claim. Additionally, many participants did not notice a significant difference between the two versions and some participants were unable to test both versions for comparison. Overall, the differences between the two approaches did not appear substantial enough to definitively determine that one was better than the other.

  - Improving contention data quality through consistent pattern repetition and improving learnability 

    - Likely True. Data quality may be improved due to the learnability demonstrated by the improved completion rate from Task 1 to Task 2. Success rates increased across prototypes, with 5 out of 7 participants passing Task 1 and Task 2 achieving a 100% pass rate, indicating that participants became more familiar with the process and performed better as they progressed.

  - Improved experience for AT users by separating laterality and moving to the new multiple-response pattern 

    - Likely True. Separating laterality appeared to have made it easier for AT users to find conditions in the list. 

    - All participants completed Task 3 of submitting “bursitis in left knee” by either using autosuggestions or providing laterality through free text entry. 

- The new condition date question will present challenges for Veterans in terms of recall accuracy, but the separate step will help them focus on providing the best possible timing information.

* Likely True. Participants consistently reported confusion as to what date to provide and many reported that they would need to review their medical records if they were really filing the claim.


## Key Findings

**Overall Experience**

1. Participants demonstrated a high overall task completion rate, with all participants successfully able to enter multiple conditions. 

2. The multiple-page multiple response pattern appears to have improved usability and user experience compared to the current single-page pattern. 

3. No clear preference or differentiation emerged between the Apple and Cherry prototypes. 

**Areas of Improvement** 

Autocomplete Functionality: 

4. Participants using assistive technology struggled to discover and consistently use the autosuggestion feature, limiting its potential effectiveness.

Date Component: 

5. Participants were unclear about the date question's content and uncertain about what date they should enter.

6. The aria-label for the date input was misleading, causing screen readers to announce it as "MM" rather than accurately indicating that users should select a month from a list..

Laterality question: 

7.  The laterality question was effective in prompting participants to specify the side of the body when they had not already done so in the text input. However, the option to bypass this dedicated question by entering side descriptors directly into the condition text input raises concerns about data consistency and potential impacts on adjudication.

Cause questions: 

8. Cause-related questions were generally clear and understandable, but some usability patterns indicate opportunities for improvement.

Screen-reader specific challenges:

9. Screen reader participants were disproportionately affected by technical issues, which caused a more difficult user experience

## Details of Findings

## OVERALL EXPERIENCE

1. ### Participants demonstrated a high overall task completion rate, with all participants successfully able to enter multiple conditions. 

“You guys made it real simple and that’s a good thing for Veterans because we need simple.” -P9

- This study tested a total of five distinct tasks that were to be completed by all participants in both prototypes:

  - Task 1—_Add a condition_ 

  - Task 2—_Add multiple conditions_ 

  - Task 3—_Add condition with left/right/bilateral_ 

  - Task 4—_Edit a condition_

  - Task 5—_Remove a condition_

- Participants successfully completed 94.3% of tasks across sessions.

  - Task 1 had an 71% pass rate. One participant failed by adding two conditions simultaneously, and another required moderator assistance. Both cases occurred when testing the Apple prototype first.

  - Tasks 2-5 all had a 100% pass rate.

- The improvement in success rate from Task 1 to Task 2 supports the hypothesis that the design promotes learnability, as participants performed better when repeating similar patterns.

- When asked, “Please rate your experience with entering conditions” on a scale of 1 - “Very Bad” to 5 - “Very Good”, **the average score was 4.14** out of 5 (1 = "Very Bad," 5 = "Very Good").

2. ### The multiple-page multiple response pattern appears to have improved usability and user experience compared to the current single-page pattern. 

- In both Apple and Cherry, the design switched from the deprecated single-page pattern (current state) to using the [multiple-page response pattern](https://design.va.gov/patterns/ask-users-for/multiple-responses). 

* Many issues identified in the previous round of research were not observed as issues in this study. [Reference: 2024-07 Conditions Page AT Testing](https://docs.google.com/document/d/1APgcHGtnbHQrAHPgyJF8fazuP4Mo1u4NbIxHiZ3Z2YY/edit?tab=t.0#heading=h.fmmelrfp2y1d)

  - Long autosuggestion list: The autosuggestion list was streamlined by removing entries with laterality (right/left/bilateral). There were no complaints about the length of the list in this round of research.

  - Confusion with the save button: The save button was eliminated in this design, simplifying the user flow.

  - Accidental submissions: We noticed a decrease in accidental submissions. Accidental submissions were easier to identify and correct in Apple with the addition of a review page.

  - Editing and removing conditions: Editing and removing conditions had 100% success rates, aided by the new review page and confirmation modal, which were absent in the current state single-page pattern. When we tested the single-page pattern previously, two of eight participants were unable to edit a condition. In contrast, all seven participants successfully edited a condition using Apple and Cherry. 

3. ### No clear preference or differentiation emerged between the Apple and Cherry prototypes.  


### “They \[Apple and Cherry] both were easy to maneuver.” - P6

Both prototypes performed similarly overall and some participants didn’t notice any key distinctions between the two versions.

- In Task 1, where participants added their first condition, the first page of the design was the same for both versions, making it unsuitable for differentiating between the Apple and Cherry prototypes based on task completion rates.

- For Task 2, adding multiple conditions, both Apple and Cherry had a 100% success rate, showing no significant differences between the two.

- Among the four participants who tested both versions and expressed a preference, feedback was evenly split: two preferred Apple, and two preferred Cherry. The other three participants tested only Apple due to time constraints.

**Recommendations:**

- Continue building and iterating off of Apple. It follows the multiple response pattern more closely, has a more streamlined edit conditions flow, presents notably fewer issues for AT users, includes the well-received review page, and is technically more feasible to implement than Cherry. 


## AREAS OF IMPROVEMENT

### AUTOCOMPLETE FUNCTIONALITY

4. ###  Participants using assistive technology struggled to discover and consistently use the autosuggestion feature, limiting its potential effectiveness.

 “I didn’t think they \[were] going to be combine\[d] like that. I thought they would be separate where I can answer \[questions about] each one of them, but it didn’t work like that.” - P13’s reaction to entering multiple conditions, "Tinnitus PTSD," into the text input and the system accepting that instead of separating the conditions

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfW2R9Gckh8Uao3B2rBkxzSxM1ZVeix1nOw3t4CGQbzHU7ZPzuInfhb5u-2z18yv5RuaPKJBixcCjH2gCFE7fG4N4DUZWtTp3emt6E4_4hBEUbSmj4OzdXZyMCGT0H3or9Ba_7l?key=FNxNGgHaXbjqouW0nxwJpJlV)      ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcOsvhgHlynbLaew-HXfyu7b6wR1tctmrUL-ZJESue-oVMjlW9OAt6URTtUCutKhwcouYyn2rAV4-rBFPhNGyaTpPD2WflgaGXNDf47yEX5HocmMBromI65cCaMrylfO8nwydqvOw?key=FNxNGgHaXbjqouW0nxwJpJlV)

\[Top: Recreation of P13’s input of ‘Tinnitus PTSD’ in Demo of VA Form 21-526EZ Form]

\[Bottom: Recreation of follow-up questions for P13’s condition of ‘Tinnitus PTSD’ in Demo of VA Form 21-526EZ] 

- **Autosuggest vs. Free-text:** 5 out of 7 participants entered at least one condition using the autosuggestions. 

  - Many participants, particularly those using screen readers, initially bypassed the autosuggestions by typing a condition and tabbing through, unaware of the feature’s additional functionality. Some only discovered it after adding more conditions, while one never noticed it at all.

    - 3 out of 4 screen reader participants used the autosuggestions. P6 noticed the autosuggest feature but opted not to use it.

    - 2 out of 3 screen magnifier users used the autosuggestions. P13 did not use them because the suggestions were displayed outside the visible area of their magnification window.

    - The autocomplete component lacked clear visual or auditory cues, making it difficult to discover for some screen reader participants. Some participants initially bypassed the autosuggestions but began using the feature once they discovered it later in the process.

  - Those who discovered and used autosuggestions preferred this method, appreciating its use of standardized medical terminology. 

    - Participants noted the value of precise condition naming with autosuggestions, stating that it gave them more confidence when they were filing and when it was being reviewed.

      - _“I prefer when it auto-populates because those are the words the claims people use. PTSD might be confusing when it spells out the acronym ensures accurate reviewal of the condition” - P11_

      - _“If you didn’t know what you were talking about, they gave you an approximate list of what you can file.” -P10_

- **Misspelling difficulties**: The mechanism heavily relied on initial spelling accuracy. While the algorithm accounts for minor typos, significantly incorrect inputs often fail to generate relevant suggestions. Screen reader participants sometimes miss initial typos, leading to ineffective suggestions.

- **Competing Autocomplete Mechanisms**: Browser autocomplete interfered with the form’s autosuggestions, creating confusion, especially for screen reader participants who couldn’t visually distinguish between the two overlapping pop-ups.

**Recommendations**

- Collaborate with the design system team to enhance the text input component, ensuring it reads instructions clearly and avoids repeating “enter your condition” multiple times.

- Improve discoverability/comprehension of autosuggestions.

  - Refine visually hidden screen reader directions when users initially land on the input for brevity, to provide concise directions to users and reduce AT users skipping over directions. 

  - Refine the visible copy to include some sort of description of the autocomplete component. 

  - Add role=”combobox” to the input so that users understand that they are not landing on a text input. Add the aria-expanded & aria-owns attributes to the input to communicate the open or closed status of the dropdown. Upon initial inspection, the VaTextInput design system component will need to be modified to accept these attributes.

- Resolve browser autocomplete conflicts 

- Improve scroll functionality. 

  - When scrolling the dropdown, the mouse should not draw focus on scroll. If the mouse draws focus on scroll and the mouse is hovering over an option in the dropdown, the focus will be drawn up several options whenever they scroll which is very confusing. There was an instance in which this occurred and the user (P2) was completely unaware they even had a mouse pointer on their screen, so they would have had no way to know what was causing this issue.


### DATE COMPONENT

5. ###  Participants were unclear about the date question's content and uncertain about what date they should enter. 

“So as far as putting the dates in, I just kind of guessed on the dates. I put the date I went into the military…\[if filing for real] I would be pulling up my military records and looking to get the correct dates.” - P9

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXewL0GHXe6NU1go95X1anmDf5H52z8HgpYDMqiPRcP6cuUYqIIXFPjts_24vcD4Y3uPQJ9HnLjUL4W0N44Acb2U9LLhu9Lez7-pmEKd1w8IAnTqhNG4DWHn6d5hYA9c_ENbT_EVNQ?key=FNxNGgHaXbjqouW0nxwJpJlV)

\[Screenshot of Date Question in Demo of VA Form 21-526EZ Form]

- Some participants were unclear on which date to provide, with responses varying between diagnosis date, service date, and symptom onset date. Some participants alluded to adding estimated dates for the sake of the study but would have to review their medical records to provide an accurate month and year.

**Recommendations:** 

- Edit header copy to clarify which date is being asked or refine the question text to be more specific. 

- Consider including hint text to guide Veterans on where to locate the date information in their records.

- Consider adding copy to reassure users that estimation is okay if exact dates are unknown. 

6. ### The aria-label for the date input was misleading, causing screen readers to announce it as "MM" rather than accurately indicating that users should select a month from a list.

“It just said year…when I clicked on year, I’m thinking I’m going to get a drop-down of the years as opposed to typing in the full year.” - P10

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXewL0GHXe6NU1go95X1anmDf5H52z8HgpYDMqiPRcP6cuUYqIIXFPjts_24vcD4Y3uPQJ9HnLjUL4W0N44Acb2U9LLhu9Lez7-pmEKd1w8IAnTqhNG4DWHn6d5hYA9c_ENbT_EVNQ?key=FNxNGgHaXbjqouW0nxwJpJlV)

\[Screenshot of Date Question in Demo of VA Form 21-526EZ Form]

- **Screen Reader Behavior**:

* Due to an incorrect aria-label, screen readers incorrectly described the month input as “MM”, but did not clarify that it was a dropdown selection.

  - Examples:

    - When opening the dropdown selection for the month, P8 did not know how to proceed due to the space after the “-Select-” default option. The blank space caused a pause in the screen reader speech output and there were no navigation instructions for how to proceed (i.e. use arrow keys).

    - P10 expressed frustration that the year input lacked clear guidance, expecting a dropdown but instead needing to type the full year. They noted that a prompt such as “Enter YYYY” would have been helpful.

* In JAWS, participants heard inconsistent instructions:

  - Initially, the screen reader read “combo box” but did not instruct participants to use the space bar to select an option, mentioning only the arrow keys.

  - Upon navigating back using Shift + Tab, the instructions changed to: “Please enter two digits” (for the month) and “Please enter four digits for the year.”

- **Screen Magnifier User Experience**:

  - Screen magnifier participants reported no significant issues with entering the date and found the date component intuitive.

**Recommendations:** 

- Change the design system date input’s default aria-label on the month field from “Please enter two digits for the month” to a more accurate instruction. Entering digits is not possible, as the month input lists the months in full text. This aria-label was likely copied over from the day field.

- Consider adding hint text to indicate the format required for date


### LATERALITY QUESTION

7. ###  The laterality question was effective in prompting participants to specify the side of the body when they had not already done so in the text input. However, the option to bypass this dedicated question by entering side descriptors directly into the condition text input raises concerns about data consistency and potential impacts on adjudication.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe2UeS_2QxtHa0q0Ey3XiY4A3rjGX3a60TqTLHgoJRqGAh_DfY_AZzYU17wJ4CfsSvyFr0_FnKVnccWEKhREz2Hdf4NL-okzgGyebO9nzgl5mBb1HK8Y850oxFLSX1JvWtw22xrKg?key=FNxNGgHaXbjqouW0nxwJpJlV)

\[Screenshot of Laterality Question in Demo of VA Form 21-526EZ Form]

- **Successful completion:** Participants were considered successful if their final submission included laterality information, whether provided through free text entry or by selecting an option on the "Side of Body" page. 

  - Including laterality information is critical, as many claims currently lack it, causing delays in adjudication.

  - When directed to the "Side of Body" page, 100% of participants successfully selected a laterality option (e.g., bursitis in left knee).

- **Bypassing the question:** Many participants instinctively entered side descriptors into the condition text input field. While this allowed them to complete the task successfully, it prevented them from reaching the laterality-specific question.

  - While any inclusion of laterality information is a win, standardizing its collection via a dedicated question could further streamline adjudication processes and reduce potential automation challenges. This warrants further exploration.

- **Classification impact:** Variations in how laterality is captured will not affect the classification process. The expanded classification method removes laterality descriptors (e.g., "left," "right," "bilateral") from contention text before processing. For example, "bursitis in left knee" is classified as "bursitis in knee."

- **Autosuggestion Improvements:**

  - Removing side descriptors (e.g., “right,” “left,” “bilateral”) from the initial condition list decreased noise in autosuggestions.

  - Participants no longer complained about the length or complexity of the condition list, a common issue in the previous study. 

    - Reference: [2024-07 Conditions Page Assistive Technology Usability Testing Report](https://docs.google.com/document/d/1APgcHGtnbHQrAHPgyJF8fazuP4Mo1u4NbIxHiZ3Z2YY/edit?tab=t.0)

  - We observed participants quickly finding and selecting conditions such as “bursitis in knee” from the autosuggestions without confusion.


### **Recommendations:**

- Explore whether interventions should be implemented to ensure Veterans reach the laterality question

  - Potential Approaches:

    - Prompt users with the laterality question even if they type “left,” “right,” or “bilateral” in the text input field, removing any duplication to maintain clarity and accuracy.

    - Include a note in the instructions indicating that the form will prompt users to specify laterality.

    - Incorporate dynamic prompts for laterality directly within the text input flow to guide users who include side descriptors in their initial entries.

- Investigate whether "bilateral" should be separated into distinct entries in cases where conditions on each side of the body have different start dates and/or causes.

  - Note: While this scenario did not arise during usability testing, it represents a potential issue that could affect the laterality question page and should be considered for further refinement


### CAUSE QUESTIONS

8. ###  Cause-related questions were generally clear and understandable, but some usability patterns indicate opportunities for improvement.

”I didn’t see that one before…I should have hit ‘my condition existed before I served in the military.’” - P13

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfO1wdAS4sPLQifP8tJ9Lmvy3BaOCRTKF053bAt0nG67RrC-sJhHStFW7HDzznqzPooj--GPp1sJvWrvvJBFvaxpAFcBDiiOFeIcoVX6Am371H69CqtxyDKhEIZvjGV1A1IHVL0Nw?key=FNxNGgHaXbjqouW0nxwJpJlV)        ![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfAUkX9e9elT03IcGjN_JB2tOJOoVDGaC-oTzN_P7kyFEQgWzlaTOLjTGZKeKaY3Smc-RxnNdwKg1B94ygd8nukowDc2xEYUSUd4KpGRLqAjXpKz0jkp1OK9-R-GQJD8rK7dxnV?key=FNxNGgHaXbjqouW0nxwJpJlV)

\[Left: Screenshot of Cause Question in Demo of VA Form 21-526EZ Form, Version Apple]

Right: Screenshot of Details of Cause Question in Demo Form of VA Form 21-526EZ Form, Version Apple]

- **User comprehension:** Participants understood the purpose of the cause questions and confidently selected response options. Some participants mentioned terms like “service-connected”, demonstrating their comprehension of VA data needs for providing compensation for disabilities. No significant comprehension barriers were identified.

- **Most commonly selected - Option 1**: 20 out of 23 (87%) of all conditions added by participants were attributed to the first cause option: “My condition was caused by an injury or exposure during my military service.” We observed that when selected, not all participants interacted with the other options available. When asked why they chose that option, most said that it was the correct choice and therefore they did not need to review the other options. This finding validates the placement of being first in the list given it is the most common cause.

- **Review for accuracy**: For the three conditions (13%) that were attributed to other cause options, the participants selected them after more thoroughly reviewing the list.

  - Two conditions were attributed to the second option “My condition was caused by another service-connected disability I already have.” 

    - P2 selected this option in Cherry upon revising their initial choice from Apple since they realized it was a more accurate representation of their situation.

  - One condition was attributed to the third option “My condition existed before I served in the military, but it got worse because of my military service.” 

- **Response patterns:** Most participants provided concise yet accurate responses. Some mentioned they would include more context if they were actually applying for benefits.

- **Free-text input:** All participants could easily use the open text field and understood they could write full sentences. However, some screen readers announced the character limit after every letter input, which some participants found distracting or initially confusing.

**Recommendations:**

- Simplify the language to make it easier to skim all four cause question options.

- Explore if all four cause question options are needed.

* Avoid using VaTextInput’s built-in character count, as it places the count inside an aria-live region that announces updates with every keystroke, which can overwhelm users. Instead, consider these approaches:

  - Display the character count in a focusable element positioned after the input field.

  - Perform the character count check and display errors only during form validation upon submission.

  - Include the maximum character count in the input instructions to help set user expectations upfront.


### SCREEN READER SPECIFIC CHALLENGES

9. ### Screen reader participants were disproportionately affected by technical issues, which caused a more difficult user experience

“I don’t really see the point of going to a continue button and it’s just another thing to look for on the page, you know?” -P2

- **Incorrect Instructions: Radio Buttons**

  - In some radio button groups, screen readers read the button options twice. For example, with two radio buttons (Yes and No), the screen reader announced “1 of 4 options” instead of the correct “1 of 2 options.” This occurred because the screen reader counted both the button's input and its label as separate elements. Initial investigations suggest this issue stems from a coding problem within the design system component.

- **Focus Management**

  - Focus inconsistencies caused unexpected navigation behaviors:

    - After selecting a condition, the focus jumped to the bottom of the page.

    - After adding a condition, the focus returned to the top of the page instead of staying in context.

    - When navigating backward, the focus skipped to the radio buttons rather than following a logical order from top to bottom.

  - On iOS devices, the focus order did not follow a logical sequence, further complicating navigation.

- **Navigation Challenges**

  - Participants encountered difficulties with navigation across multiple components, which disrupted their experience and progression through the form.

  - In the "Cause" questions, the components positioned between the question and the "Back/Continue" buttons were an area of concern for multiple participants. 

    - A participant using Fusion, P8, became stuck on the additional information component between “Back/Continue”. This disrupted their ability to progress after making a selection.

    - P6 reported that having the cancel button before the “Back/Continue” was misleading and confusing when trying to progress through the form.

  - Similarly, P2 voiced frustration at the form being split up into too many pages and found it difficult to constantly have to navigate to the “back/continue” buttons after every entry

  - As is, screen reader users need to tab three times before reaching the active input field, the autocomplete component (“enter your condition” ..> required ..> autocomplete. 

    - One participant, P10, called this out as they expected the keyboard to appear when navigating to the "Required" label. While others did not call this out, we noted that it was an area of difficulty. 

      - This issue is a bug identified specifically in the Apple and Cherry prototypes and does not exist in the current production version.

- **Format confusion**

  - P10 mistook conditions listed in the example text for clickable links. We also saw this in a previous study with AT users.

- **Misspellings** 

  - Misspellings presented additional challenges, particularly for participants who could not visually confirm their text input.

  - Misspellings in the text input field disrupted the autosuggest functionality, as expected results failed to appear due to the errors. While the autocomplete component accommodates some misspellings, the margin for error exceeded what the algorithm could effectively handle.

    - For example, P2 encountered difficulties clearing the text input field after a misspelling, which hindered their ability to explore autosuggestions effectively.

    - Two participants, P2 and P8, relied on moderator assistance for spelling correction in order to move forward.

    - Misspellings also appeared in the descriptions for "Cause" questions, raising concerns about how these errors might impact the accuracy or validity of claims if submitted with mistakes.

**Recommendations:**

- Implement consistent and logical focus management across devices to maintain context.

- Work with the design system team to 

  - Ensure screen readers properly announce radio button options and group sizes, making necessary changes to the design system component.

  - Streamline navigation for the additional information component to avoid trapping participants.

  - Streamline navigation for the cancel component to avoid confusing participants.

- Change the label of the new Autocomplete component used in the prototype from using the form system’s label to the design system component’s label, which activates the input on label click.

- Explore the technical feasibility of allowing dictation like Siri to help address misspellings.

- Test if decreasing the condition examples from seven to three would make it more apparent the examples are not clickable links 


## Recommendations

**Overall recommendation**

Prototype version

- Both versions of the prototype, Apple and Cherry, represent improvements over the current state. However, prioritizing fixes for identified bugs and iterating on the "Apple" or _condition-by-condition_ prototype is recommended. The Apple version aligns more effectively with the multiple-response pattern, has a more streamlined edit conditions experience through the review page, and is technically more feasible to implement than Cherry. 

- It also enhances accessibility compared to the current single-page design and adheres to the design system, providing a strong foundation for future enhancements.

Additional Questions

- In Apple, include the follow-up questions for laterality and date, as these were generally straightforward for participants to answer. Laterality provides valuable context for adjudicators that is currently missing, while the date question ensures consistency between the paper and digital forms. Separating laterality into its own question, rather than embedding it in the autosuggestion list, simplifies navigation of the suggestions and ensures more accurate, clear responses.

- Additional research is needed to assess the broader impact of adding these questions in the context of the entire form (see "[Further Research](#further-research-needed-1)" for details).

**UX Content Fixes**

- Date question: Clarify which date is being asked for the “What’s the approximate date your condition started?” question. 

- Date question: Consider including hint text to guide Veterans on where to locate the date information in their records.

- Date question: Consider adding hint text to indicate the date question format. 

- Cause question: Simplify the language to make it easier to skim all four cause question options.

- Autosuggestions: Improve discoverability/comprehension of autosuggestions.

  - Refine directions when users initially land on the input for brevity, to provide concise directions to users and reduce AT users skipping over directions. 

  - Refine the copy to include some sort of description of the autocomplete component.

**Technical Fixes**

✅: fixed in prototype 

For up-to-date progress, technical changes are being tracked here:  [12/2024 | Multi-Page List & Loop Issues](https://www.google.com/url?q=https://docs.google.com/spreadsheets/d/1Exep8oWDK63m1WgDOrsmILHLkgWv7D0niDcXuEFZxWA/edit?gid%3D2034611899%23gid%3D2034611899\&sa=D\&source=docs\&ust=1736804990775598\&usg=AOvVaw2AhfljmHaUvaKWkKdOb1JZ)

- ✅ Resolve browser autocomplete conflicts. 

- ✅ Change the label of the new Autocomplete component used in the prototype from using the form system’s label to the design system component’s label, which activates the input on label click.

- ✅ Improve scroll functionality. 

  - When scrolling the dropdown, the mouse should not draw focus on scroll. If the mouse draws focus on scroll and the mouse is hovering over an option in the dropdown, the focus will be drawn up several options whenever they scroll and is very confusing. There was an instance in which this occurred and the user (P2) was completely unaware they even had a mouse pointer on their screen, so they would have had no way to know what was causing this issue.

* Implement consistent and logical focus management across devices to maintain context.

* Improve discoverability/comprehension of autosuggestions.

  - Add role=”combobox” to the input so that users understand that they are not landing on a text input. Add the aria-expanded & aria-owns attributes to the input to communicate the open or closed status of the dropdown. Upon initial inspection, the VaTextInput design system component will need to be modified to accept these attributes.

**Design System Components**

- Ensure screen readers properly announce radio button options and group sizes, making necessary changes to the design system component.

- Change the design system date input’s default aria-label on the month field from “Please enter two digits for the month” to a more accurate instruction.

  -  Entering digits is not possible, as the month input lists the months in full text. This aria-label was likely copied over from the day field.

- Collaborate with the design system team to enhance the text input component, ensuring it reads instructions clearly and avoids repeating “enter your condition” multiple times.

- Work with the design system team to 

  - Streamline navigation for the additional information component to avoid trapping participants.

  - Streamline navigation for the cancel component to avoid confusing participants.

- Avoid using VaTextInput’s built-in character count, as it places the count inside an aria-live region that announces updates with every keystroke, which can overwhelm users. Instead, consider these approaches:

  - Display the character count in a focusable element positioned after the input field.

  - Perform the character count check and display errors only during form validation upon submission.

  - Include the maximum character count in the input instructions to help set user expectations upfront.

**Further Explorations**

- Investigate whether "bilateral" should be separated into distinct entries in cases where conditions on each side of the body have different start dates and/or causes.

  - Note: While this scenario did not arise during usability testing, it represents a potential issue that could affect the laterality question page and should be considered for further refinement

- Explore if all four cause question options are needed.

- Test if decreasing the examples from seven to three would make it more apparent the examples are not clickable links.

- Explore whether interventions should be implemented to ensure Veterans reach the laterality question

  - Understand from adjudicators and SMEs if standardization is required and would make a difference in the claim

  - If we decide we want standardization, explore the following potential approaches

    - Prompt users with the laterality question even if they type “left,” “right,” or “bilateral” in the text input field, removing any duplication to maintain clarity and accuracy.

    - Include a note in the instructions indicating that the form will prompt users to specify laterality.

    - Incorporate dynamic prompts for laterality directly within the text input flow to guide users who include side descriptors in their initial entries.

    - Include a laterality question to the flow, for every condition. This question could include selections including: right, left, bilateral, throughout body, or n/a. 

- Explore the technical feasibility of allowing dictation like Siri to help address misspellings.


## Next Steps

- Prioritize recommendations with stakeholders 

- Plan for future research 


## Further research needed

- **The multi-page pattern within the context of the larger form**

  - While participants expressed satisfaction within the context of this usability test, to better understand overall user experience it is important to conduct further usability testing of the entire end-to-end user flow with the multi-page pattern.


## Appendix

### Time on task

**The completion time per task was unique across all participants due to a variety of factors, which positively skewed data.** 

When developing the research plan, the hypothesis of “Improving data quality through consistent pattern repetition and learnability” was to be measured by several metrics, one of which was a speed metric. This was to measure the time per task, specifically when adding a second and third condition for each participant. This was expanded to include capturing the duration of all tasks for each participant. 

In this study, we discovered many factors and variables that caused variations and skewed data, such as:

- Their level of experience with their AT (i.e. beginner, intermediate, advanced, expert)

- Voiceover of comments or feedback they provided while completing the task

- Technical issues with the prototype or incomplete/misleading screen reader instructions, especially with the date component (as explained here: [Date Component finding](#the-aria-label-for-the-date-input-was-misleading-causing-screen-readers-to-announce-it-as-mm-rather-than-accurately-indicating-that-users-should-select-a-month-from-a-list-1))

- The amount of words participants typed when entering details about the cause of their condition

This led to some participants having completion times that would dramatically skew calculations of averages across participants. 

**Outliers: Task 1—Add a condition examples**

- P8 took about 8:00 minutes to complete Task 1 successfully (including typing > selecting > date > cause selection > cause details) due to difficulties navigating the date dropdown selection for the month. 

- P10 took 18:00 minutes to complete Task 1 due to continuously switching screens using the Back and Continue buttons and reviewing the list items multiple times. They expressed confusion about what information to enter, and they used a mobile device for the study, which could have played a role.

**Completion Rate Patterns (based only on 4/7 (57%) participants who had similar ranges-P6, P9, P11, P13):** 

- Task 1—_Add a condition_ and Task 2—_Add multiple conditions_ were completed in roughly 2 minutes or less respectively.

- Task 3—_Add condition with left/right bilateral_ averaged at about 1 minute.

- Task 4—_Edit a condition_ ranged from 00:23 - 02:40.

- Task 5—_Remove a condition_ was completed in less than 1 minute, with most participants doing so in less than 00:30 seconds.

**There were no significant markers to definitively say whether participants using screen readers vs. screen magnifiers completed the tasks faster.**

- Screen reader participants experienced most of the technical issues that directly caused longer completion times.

- The sample size was not large enough to identify how the level of experience or AT tool used affected participants’ speed to complete the tasks.


### CSAT Questions and Average Scores 

We asked participants the same CSAT questions from the Medallia Intercept Survey based on their experience with our prototypes. 

The Intercept survey is enabled across all of modernized VA.gov. It randomly “intercepts” 5% of VA.gov users who have had a 60-second or more extended session (the length of time was increased from 20 seconds in August 2023).

1\. Please rate your experience with entering conditions on this page (can be for either prototypes or combined). **Average Rating: 4.1**

1. Very bad

2. Somewhat bad

3. Neither bad nor good

4. Somewhat good

5. Very good

2\. Why did you select that rating? 

3\. Please rate how understandable this site's information is. **Average rating: 4.5**

1. Difficult to understand

2. Somewhat difficult to understand

3. Some is easy, some is difficult

4. Somewhat easy to understand

5. Easy to understand

4\. How did this interaction change your trust in Veterans Affairs? **Average rating: 4.3**

1. Decreased my trust

2. Somewhat decreased my trust

3. Neither increased nor decreased my trust

4. Somewhat increased my trust

5. Increased my trust


### AT Survey: 

**1. How long was the recruitment window for this study?**

\* November 22nd - December 12th (3 weeks) 

**2. Did you end up getting the AT participants scheduled that you asked for?**

Failed sessions (6 total):

- 1 no qualify: P1 didn’t qualify (they did not use AT AND did not have disability benefits) 

- 2 cancellations: P3 canceled, P7 canceled due to technical difficulties with joining Zoom 

- 4 no-shows: P4, P5, P7, and P12. P4 no-show but then rescheduled and then we reached our minimum and didn’t need their session

Notes

- P13 was supposed to be an alternative navigation participant, but does not use any alt nav software. They said they were joining with a “head mouse” but we think they just misinterpreted a regular mouse. We noticed their screen was enlarged so we ran them as a screen magnifier participant. 

- Got 0/4 alternative navigation users 

  - 1 (P13) was not an alternative navigation user 

  - 2 were no-shows 

  - 1 canceled due to technical difficulties joining zoom. Perigean was assisting them and they got overwhelmed and decided to cancel 

**3. Did the team (either you or Perigean) do any outreach, other than email confirmation the day before, prior to sessions to confirm AT/tech setup?**

Yes, Perigean conducted outreach to verify AT usage before the studies.

**4. Did the participants use the AT in the session as you expected?**

- Screen Reader sessions (4 total): yes

- Screen Magnifier sessions (3 total): yes

  - 1 did not need to use magnification 

  - 1 had desktop settings already set to be enlarged 

  - 1 was on iPhone and only used magnification to verify their free-text entries 


## Tools used for Synthesis

- [Google Sheets](https://docs.google.com/spreadsheets/d/1Lv0m2o3zMk4CJOHq9kkQipFBmgQKgPZNyVB5iUqbFvo/edit?gid=1959022916#gid=1959022916)

- [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1734098954633/bd184e72f1f1fd34af751ec6fe22ec6d06a66ad7)


## Pages and applications used

- [Prototype](https://staging.va.gov/user-testing/new-conditions/)


## Other supporting documents created

- [Research Plan](https://docs.google.com/document/d/1I4YAFI9xYL6EnMV6DQ5iqdEUwgCKR_TWXich9JvW-Zo/edit?tab=t.0)


## Secondary Research

Nothing of note. 


## Who we talked to

**Recruitment criteria**

We recruited 12 Veterans with a:

- minimum of 3 sessions with screen reader users

- minimum of 2 sessions with alternative navigation users

- minimum of 1 session with a screen magnification user

**Overall**

- All participants are receiving disability compensation from the VA for at least 3 conditions


#### **Cohort 1: Screen reader users**

- 6 Veterans who use screen reader devices EVERY TIME they use the internet to complete a **minimum** of 3 sessions. 

- 6 Participants who use screen readers

  - 3 Beginner or intermediate screen reader users

  - 3 Experienced screen reader users

- Mix of NVDA, JAWS, VoiceOver (Apple), Talkback (Android)

**Cohort 2: Alternative navigation** 

- 4 Veterans who use Dragon or any other software for alternative navigation  EVERY TIME they use the internet to complete a **minimum** of 2 sessions 

**Cohort 3: Low vision - magnification users**

- 2 Veterans who use magnification devices EVERY TIME they use the internet for a **minimum** of 1 session

  - Mix of ZoomText, ZoomText Fusion, Magnifier (Windows)

**Secondary criteria (nice-to-haves)** What criteria would strengthen your results?

- We’d like a mix of genders, age, race/ethnicity, and education  

- Gender

  - Attempt At least 3 Veterans who identify as a gender other than male 

- Age

  - At least 4 55+ 

- Race/ethnicity

  - Attempt at least 4 that do not identify as White/Caucasian 

- Education 

  - Attempt at least 4 with no degree 

**Who we talked to**

We talked to 7 participants.

Audience segment:

- Veterans: 7

- Caregivers: 0

- Family members of a Veteran: 0

Gender:

- Men: 6

- Women: 1

LGBTQ+:

- Transgender: unknown

- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown

- Gay, lesbian, or bisexual: unknown

Devices used during study:

- Desktop: 5

- Tablet: 1

- Smart phone: 1

- Assistive Technology: 5

Age:

- 25-34: 0

- 35-44: 0

- 45-54: 2

- 55-64: 1

- 65+: 4

Education:

- High school degree or equivalent: 0

- Some college (no degree): 1

- Associate's degree, trade certificate or vocational training: 3

- Bachelor's degree: 2

- Master's degree: 1

- Doctorate degree: 0

Geographic location:

- Urban: unknown

- Rural: unknown

- Unknown: unknown

Ethnicity:

- White: 3

- Black: 2

- Hispanic: 1

- Biracial: 1

- Asian: 0

- Native: 0

Disability and Assistive Technology (AT):

- Overall

  - Cognitive: x

  - AT beginner: 1

  - AT intermediate: 1

  - AT advanced user: 3

  - AT experience unknown: 2

  - Hearing aids: 0

  - Sighted keyboard: 0

  - Captions: 0

  - [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0

- Screen reader

  - Desktop screen reader: 3

    - JAWS: 2

    - Fusion: 1

  - Mobile screen reader: 1

    - Voice Over: 1

- Screen magnifier

  - Magnification/Zoom users: 3

    - ZoomText: 1

    - Did not use: 2


## Underserved groups we haven’t talked to

[_VA Recruitment checker_](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?gid=1210947478#gid=1210947478)

This research does not include the perspectives of the following marginalized groups

- Cognitive Disability

- Rural

- Other than honorable

- Immigrant origin

- Expat

- Asian

- Native, American Indian, or Alaska Native

- Gay, lesbian, or bisexual

- Transgender

- Nonbinary, gender fluid, gender queer, Two spirit (Indigenous only), or any other gender beyond man or woman

- Speech Input

- Hearing Aids

- Sighted Keyboards

- Captions

- Switch Device

- Braille Reader

__![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHJrdG7temc22xS6LvWg5BUGKqs8JfzgwzIE5SaGhajiY7UOJTYs5KRS4BG_Av5iZ7O1SzKRE2B2i-wHl2cvzCJeQtprwtOextecZKMh9IugKxkVBXA0T_V3VbHuZJcM6riN47CA?key=FNxNGgHaXbjqouW0nxwJpJlV)__

[VA-recruitment-checker](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1312168823)

