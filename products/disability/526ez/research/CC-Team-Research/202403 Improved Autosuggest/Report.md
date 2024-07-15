Improved “autosuggest component” Research Report 

Office of the CTO - Digital Experience (OCTO-DE), 526EZ, Contention Classification

Date: 05/07/24

\[Sudeepti Bhatnagar] \[<sudeepti.bhatnagar@va.gov>, <sudeepti@navapbc.com>]

\[Eva Heintzelman] \[<eva.heintzelman@va.gov>, evaheintzelman\@navapbc.com]

Jump to:

- [Research Goals](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.hgbulcoq763m)

- [Research Questions](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.7mu42mhabd77)

- [Methodology](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.5bqh17e8yws1)

- [Hypotheses and Conclusions](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.5i2vepqmfkwo)

- [Key findings](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.cpm9lxy34zg9)

- [Detail of findings](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.wenqgs94l1rn)

- [Recommendations](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.gdaou3jtai0y)

- [Additional insights](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.y1qpx7lbc9ca)

- [Next Steps](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.b7u45od6x57b)

- [Further research needed](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.xtp2caovji4e)

- [Appendix ](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.tayqglfa27al)


## Research Goals

On the 526EZ form for submitting a disability claim online, Step 2 out of 5 asks Veterans to submit the new conditions they want to claim. 

On this screen, a text input field with type-ahead (called the autosuggest component) leverages a suggested conditions list to present options to the user as they type. In our first release, we updated the conditions list that powers the autosuggest component. In this next iteration, we aim to improve the page by providing a more user-friendly interface and relevant suggestions for conditions. We created two prototypes to evaluate changes to the screen.

Research Goals 

- Evaluate the usability of the revised autosuggest component 

- Evaluate the effectiveness of the explanatory content 

- Assess overall confidence and satisfaction with the page

The most relevant touchpoints in the [Veterans journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf) are Getting out (for Veterans submitting Benefits Delivery at Discharge or BDD claims prior to transitioning), Starting up, and Taking care of myself.


#### Design changes from the current state

- Updates to instructions 

  - List of seven common conditions included in the copy

    - Use of additional information component for “Common Conditions” (Owl)

    - List of common conditions at the top of the page (Fox)

  - Rewritten instructions clarifying what to do if your condition is not in the list

    - Included in instructions at the top of the page (Owl)

    - Included in the additional information component as part of the autosuggest component. Labeled as “What if my condition isn’t listed”  (Fox) 

- Updates to autosuggest component 

  - Custom search algorithm implemented for autosuggestions.

  - Free text submission through the first option in the suggested conditions list, labeled “Enter your condition as…” 

  - Minimum height rules for the dropdown box: displays up to 10 conditions before requiring scrolling and up to 20 conditions with scrolling.

  - Implementing an algorithm threshold score in order to decrease the number of suggestions as more text is typed

- Updates to Edit mode  

  - Button label update: When editing a condition, the button label changes to “update” instead of “save”, regardless of whether it's the first condition.

    - "Save" is used when a condition is created and saved for the first time, while "Update" is used when a previously saved condition is edited.

See screenshots of the [additional information component](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.nw2ssbbws41i) and [autosuggest component](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.ejwrf6jisvar) in the appendix 


## Research Questions

**Overall**

- Which design do participants prefer? Why? 

**Goal 1: Evaluate the usability of the revised autosuggest component** 

- Do the participants understand that they have the option to type in their condition? 

  - If so, how do they feel about using the dropdown to enter free text?

- Why do participants use the free-text option and how do free-text entries differ from the conditions list terms?

  - Are participants most likely to use the free-text option for certain types of conditions? If so, what are these conditions, and why do participants prefer to enter them manually? 

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


## Methodology

From April 8th to 18th, we conducted hour-long remote moderated usability sessions via Zoom to gather feedback on a [Codepen ](https://codepen.io/ccteam/live/MWRgOZO)prototype featuring two design variations: Owl and Fox. Participants were asked to imagine it was their first time applying for disability benefits and were tasked with navigating through the page for both designs. They had the option to use their conditions and were also provided with mock scenarios. The mock scenarios were designed to test how Veterans would submit conditions from the list, conditions not on the list, and descriptions of symptoms. To minimize bias, we alternated the order in which participants viewed the designs, with half starting with Owl, and the other half starting with Fox.

Screenshots of the Codepen prototype are in the Appendix. 

**Limitations**

- This report's findings are based on our observations and conversations with 7 Veterans. Due to the small sample size, we cannot conclude this is representative of all Veterans.

- Participants provided responses based on their past experiences or speculated about a future claim. It's important to note that our study did not involve observing Veterans in the real-time process of filling out actual claims, so their responses in a real-world scenario might differ.

- This research did not have representation from some [underserved communities](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.p1juwkww2s0z). 

- Participants completed the page using two different designs. However, there is a bias in that they already knew the page and happy path from the first design when they started the second design.


## Hypotheses and Conclusions

#### Hypothesis

Hypothesis statement: ("Maybe True", “Likely True”, “Definitely True”, “Likely False”, “Definitely False” or “Not enough information”) 

- Enhancements made to the conditions page will enhance user satisfaction and the quality of data entered for the disability benefits application. 

  - Likely True. Some improvements enhanced user satisfaction while others were confusing. 

- With the updated search algorithm, users can find their conditions easily if they match an item in our list, and if not, they can enter free text seamlessly. 

  - Definitely true. If the participant had a condition on our list and searched for it, they could find it successfully. 

    - All participants could submit a free text condition, but the experience was not always seamless. 

- We anticipate that these improvements will lead to two key outcomes: (1) an increase in structured data quality, providing VSRs with high-quality and actionable information, and (2) improved accuracy in capturing the conditions that Veterans are trying to claim.

  - Likely True, will need to see actual data to conclude this 


## Key Findings

1. [All participants navigated the conditions page successfully, entering at least one condition by selecting from the list and entering free text. The process of adding a new condition was clear and straightforward for everyone, and participants expressed satisfaction with their overall experience. ](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.3kqpkw8vdear)

2. [The custom search algorithm performed well, accounting for user input and typos variations. ](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.urdb5y3llkrm)

3. [Users encountered other unexpected or confusing interactions in the combo box, requiring additional effort to understand the system. Despite this, they were able to enter their conditions successfully.](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.emaoebmgtl81)

4. [Participants found the process for submitting free-text conditions confusing and often missed the "Enter your condition as..." option initially. ](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.3kqpkw8vdear)

5. [Although only 3 out of 7 participants read the full instructions, all were able to use the component as intended, indicating that the instructions were not critical for successful interaction.](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.5hcsqsp5f18j)

6. [Participants had varying understandings of the purpose of the common conditions list. While most appreciated it as a reference or example, some misunderstood it, thinking it prescribed ratable conditions or limited the conditions they could enter.](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.bds9bmhwm9yj)

7. [Participants took different approaches to entering their condition due to their varied perceptions of what makes a “good” condition entry. Some participants hesitated to submit conditions that were not listed.](https://docs.google.com/document/d/18qf7DRmslV2e25QkCg9_1o94iAfgOdHa6qhfDbJikls/edit#heading=h.k63zd9pi7666)


## Detail of Findings 

### 1. All participants navigated the conditions page successfully and used both methods of entering at least one condition by selecting from the list and entering free text. The process of adding a new condition was clear and straightforward for everyone, and participants expressed satisfaction with their overall experience. 

“I like it. Pretty easy to use. Pretty intuitive again with the search function, and they even giving you similar spelling results even though there were some things that it didn't recognize and I had to manually input 'em, the process was simple.” - P3 

- When asked, “Please rate your experience with entering conditions on this page (can be for either prototypes or combined),” on a scale of 1 - “Very Bad” to 5 - “Very Good”, the average score was 4.583 

* Every participant was able to go through the flow of adding a condition using autosuggestions and free text.

* Every participant successfully edited a condition. 


### 2. The custom search algorithm performed well, accounting for user input and typos variations.

“I did like that I could put ‘kidney’ and \[use] the inflammation part to narrow it down. Sometimes, if it's not the right word order, searches don't play nicely.” - P3

- The custom search algorithm we made for the conditions page worked well and users were able to find their condition, if it was in the list. For example, one participant typed in “kidney inflam,” and the top suggestion was “chronic nephritis (inflammation of kidneys”).  

- The algorithm performed well for users who searched by body part first, a behavior we commonly observed. For example, one participant searched for "knee" and found "bursitis in knee, right."

- The difference in algorithm threshold between Owl and Fox did not matter to participants; they could find relevant terms in both prototypes.  We observed that most participants would review items in the dropdown list, even if it involved extra scrolling. 

- The search algorithm only works for a slight spelling variation. One user typed in “right hip repalcvement,” and the relevant suggestion didn’t show up. The participant caught that, retyped, and found the condition. 

- The search algorithm does not match against longer strings. For example, one participant typed “developed plantar fasciitis,” and plantar fasciitis did not appear as a suggestion.


#### Recommendation

- Use the threshold from Fox (more restrictive threshold) in order to decrease the amount of scrolling and cognitive overload. 

- Explore if the search algorithm can be refined to allow for more variation in user input.


### 3. Users encountered some unexpected or confusing behavior with the autosuggest component, requiring additional effort to understand the system. Despite this, they were able to enter their conditions successfully.

“I think I hit the escape key…I think that's what cleared it out...sometimes I use the escape key 'cause it, you know, it sort of, it's a way to escape from things, but that's what might've caused that thing to blank out.” - P4

- Various actions such as pressing Enter, Escape, clicking out, or pressing Save before selection cleared the input, leading to confusion.

- When the Save button was displayed and not covered by the dropdown, some participants tried inputting their free text selection by pressing Save instead of selecting the option from the dropdown "Enter your condition as." This would clear the input. 

- In edit mode, some users would edit their input and then press "Update," expecting it to submit their changes. However, this action only saved the original input. To update their input, users needed to review the dropdown and either select a different condition from the list or choose "Enter your condition as..." to save their changes.

- Users had to scroll the entire page to make the bottom of the dropdown visible, and if they did not, they would see only some of the autosuggestions.

  - Note: This behavior is just in the codepen. In production, the page will automatically scroll to make the autosuggest component at the top of the screen. 


#### Recommendation

- Save user input or select the active state instead of clearing the input when using keyboard shortcuts or clicking out of the box. 

- Note these observations to see if they become a pattern in a more extensive study or in production. 

  - One participant initially tried to enter multiple conditions in the text input but realized their mistake as they continued adding conditions. 

  - One person did not understand the hover effect 


### 4. Participants found the process for submitting free-text conditions confusing and often missed the "Enter your condition as..." option initially. 

“Okay. So if I had just clicked on the box or, or just hit save instead of clicking ‘enter your condition’ as is, it wouldn't add it, I would have to choose that specific box.” - P7 

- In this usability test, the only way to submit free text was to select the "Enter your condition as..." option, positioned at the top of the list in Owl and the bottom in Fox. Many participants initially didn't notice the option or realize that clicking on it was necessary for the submission to save.

  - Some participants mistakenly attempted to submit free text by pressing enter or clicking out of the text input, which cleared their submission. For example, it took one participant three attempts to understand that they needed to select the condition from the list as "Enter your condition as..." to submit free text.

  - One participant mentioned that the free-text option was very close to the text input, which might have led to overlooking it.

- Participants generally noticed the free-text option more prominently when the dropdown list was shortened, making the free-text option more evident.

  - Only one participant said, without prompting, that they noticed the difference in free-text placement between Owl and Fox. 


#### Recommendation

- Make it easier to submit a free-text submission

  - “Enter my condition as…” should be the first option on the suggested list. 

  - Make this the active state by default. 


### 5. Although only 3 out of 7 participants read the full instructions, all were able to use the component as intended, indicating that the instructions were not critical for successful interaction.

“I probably should have taken time to read this, but I think it was sort of somewhat intuitive when I listed something that didn't pop up that, that I could mess around here \[to submit free-text].” - P4

- When asked, “Please rate how understandable this site's information is.” on a scale of 1 - Difficult to understand to 5 - Easy to understand, the average score was 4.6 

- In Fox, the primary instructions were given as a header, with detailed instructions in the autosuggest component under the "What if my condition isn’t listed" section. This section used an additional information component that required users to click to reveal the full instructions. Only two participants noticed this component and only one clicked on it and read the instructions.

- The instructions in Owl were more detailed, and the list of common conditions was under an accordion using the additional information component. Only three participants read the instructions on Owl. Among those who did not read the instructions, two had already been introduced to Fox and read the instructions there, which may explain why they did not reread the instructions on Owl.

  - Some people just scanned the bolded headers and did not read the instructions in the paragraphs below 

- 2 participants did not read the instructions on either prototype.

- One participant described the instructions as "too much" and, despite reading them initially, later forgot their content.


#### Recommendation

- Instructions were found to be unnecessary for sighted users to navigate the page successfully, but they can be beneficial for non-sighted users to set expectations. 

  - Include full instructions from Owl, but use headers to separate “What if my condition isn’t listed” to improve readability 


### 6. Participants had varying understandings of the purpose of the common conditions list. While most appreciated it as a reference or example, some misunderstood it, thinking it prescribed ratable conditions or limited the conditions they could enter.

 “I think it's a good idea to have the list. I think without the list it's a little more ambiguous, getting started.” - P1

- Participants had different expectations regarding the purpose of the common conditions list in both designs, highlighting the need for clearer guidance.

  - Some participants believed these conditions would be easier to get rated or approved.

  - Others understood that the list was designed for Veterans to borrow the wording, making it easier to submit their conditions.

  - One participant initially overlooked the common conditions but later thought they could only enter those conditions

- Some participants used the list to understand the types of conditions expected in the application, or as a starting place for their application. 

  - For example, one participant entered "neck strain" from the list, indicating a preference for using the provided examples or that the list reminded them of something they had. Another participant copied/pasted common conditions from the list that they had into the text input box.

- In Owl, where the common conditions were in the additional information component, two participants thought items in the common conditions list were clickable or should be, possibly due to the blue line in the additional information component design.

  - A participant suggested that the common conditions should only serve as examples and not be clickable so that folks enter accurately what their issues are and not make it “too easy”


#### Recommendation

- Include common conditions in the instructions section 

- Change the label to “examples of conditions” in order to not encourage applicants to think that the list of terms is more likely to get rated. 


### 7. Participants took different approaches to entering their condition due to their varied perceptions of what makes a “good” condition entry. Some participants hesitated to submit conditions that were not listed.

\[If it’s not in the list] I think it won't get counted. Yeah. The VA, they play a lot of games when it comes to that claim. Things, damn, there gotta be dead in order for it to be approved and it better be in them records that you are claiming what you're claiming. But I would be discouraged \[to submit something not in the list] - P5 

- Participants showed different levels of trust in the process. Some were concerned that unlisted items might not be ratable, while others believed that the VA would help verify and confirm conditions entered as free text.

- During the mock scenarios, participants displayed a range of behaviors when interacting with the suggested conditions list. Some selected conditions or terms that were tangential or felt closest to their condition, while others tried multiple variations of a condition before resorting to submitting it as free text.

  - For example, one participant for the mock scenario of “chronic congestion and full-body aches” selected “chronic bronchitis” based on their knowledge of bronchitis

  - Another participant for the “knee bothers you” mock scenario (see appendix for full description) submitted three conditions for that one scenario: “knee strain or sprain, right,” “ankylosis in knee, right,” and “knee instability, right.” They broke down the description and added a condition to cover every symptom.  

- The majority of participants preferred selecting a condition from the list 

  - While most participants were satisfied with the condition descriptions from the list, they tended to provide additional information when entering free text.

  - One outlier believed that the condition's name didn't matter as much as the description and preferred writing longer descriptions that accurately reflected their condition.

- Some participants felt more confident submitting free-text conditions after reading the full instructions. However, this usually occurred only after being prompted to do so, either by reading the two paragraphs in Owl or clicking on "What if my condition isn’t listed" in Fox.

- Some participants sought clarity on the subsequent steps of the application process to enhance their completion of the conditions page.

  - Knowing what’s next could help ease some concerns or help Veterans better understand what is needed from the page 


#### Recommendation

- Explore ways to emphasize that it is acceptable to submit free-text conditions.

  - Include and highlight the information from the “What if my condition isn’t listed” additional information component 

- Explore the downstream effects of what would happen if someone selected a condition from the list that’s not their diagnosis 

- Explore how the VA can assist Veterans in identifying and describing their conditions. This could involve providing more guidance and support directly on the page and implementing back-end solutions.


## Recommendations 

Design changes to be released in June 2024 

- Instructions 

  - Use full instructions from Owl, reveal common conditions, and separate text using headers to improve readability (see screenshot below). Remove the use of additional information component 

  - Change the label "Common conditions" to "Examples of conditions" to avoid suggesting to applicants that the listed terms are more likely to be approved.

- Autosuggest component

  - Change the minimum height before scrolling from 10 to 7, to improve readability 

  - Use custom search algorithm and threshold from Fox

    - Explore if there are ways to account for more variations in typos or longer strings as identified above 

  - Allow free text to be submitted by using “enter,” “tab,” clicking out of the component, or selecting “Enter your condition as…”

    - “Enter your condition as…” will be at the top of the list and the default active state until users change it by using their mouse or up/down keys  

    - Details of all keyboard shortcut behaviors can be found in the [test cases document](https://docs.google.com/spreadsheets/d/12DaRQF6iwm_rUOhmgMht0h00HTJPoIa0YMxVCmHhzLU/edit#gid=1789687425). 

Further explorations for future code releases 

- Conditions list 

  - Refine the following conditions for accuracy and clarity 

    - Urticaria should be revised to chronic urticaria.

    - Labyrinthitis, described as a "type of inner ear infection," should be clarified to ensure consistency with how we are describing other plain-language terms. Ex. Otitis media is listed as a "middle ear infection," not “type of middle ear infection” 

- Explore ways to enhance user trust and confidence by reassuring them that it's acceptable to use free text and not solely rely on submitting conditions from the list. 

- Explore how the VA can assist Veterans in identifying and describing their conditions. This could involve providing more guidance and support directly on the page and implementing back-end solutions.

- Investigate the downstream impacts if someone selects a condition that does not accurately reflect their own condition.


### Refined design based on the previous changes

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXd6BhdzIhGhco84s0PnTOCulOFPlpPjYc3KZsmsBSw3t0iXl3FcZX3OCRCSSLeP2JzPb6jA8gO-82Sv5spKeC8yzQr6LYENoCljs2htzX33d9Sx40gZVrd7G0cQAfudlWptyBYL59ygfxPRb4G97vYBOcx-?key=YxknmENvrQLJHvrRlZjWRQ)


## Next Steps

- Share findings and recommendations with the Contention Classification team and, more broadly, with all Benefits portfolio teams. 

- Iterate on the conditions page based on the recommendations above. 

- Deploy in production 


## Further research needed

- Usability testing of the revised design, in production, with assisted technology users 


## Appendix

### Screenshots of Designs

Owl 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc3c-WvckTNBEldJcNNxnpQq30YU-cIf-f-xkdLX36DF4Pv5BRt9-o7g9lCfvOrFIVJ2_K0UfRXub7S1HsO1RPqvQVWHwUdHfDrV2MsWWDU9RcIjoTG78bSs7bvUovD6FCvRBVS1UPlpxZpvaZSab4R4GI?key=YxknmENvrQLJHvrRlZjWRQ)       ![](https://lh7-us.googleusercontent.com/docsz/AD_4nXflh6LgEAgwnBYZ44JwL5_34PrFN_PlHZwgx_7YZNGhM-0WPhFXkSZmJA81KDv_CPUAUZO50T4NXQsrKQgc9amsNjVa9IFhydrfxjAcQDiwRQztOyaqhNMcz1fU69DcvU6rc5FtzbWHpbBGqHT_0QAtNU_v?key=YxknmENvrQLJHvrRlZjWRQ)

Fox

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcJbOCTI4-34NnjlhA15PZZ1wKzsfrtLqbUvHC9yQm47pmKYxrNV75PX1SZBLbfcb0knlZB_40q0c4X9XYgGs58p-Exl56oa86lgrkikneF_KsUEjbqxo0PBXt-0Gb75gOEk0lR5DB-yQWmoM9RV-CgTi2I?key=YxknmENvrQLJHvrRlZjWRQ)         ![](https://lh7-us.googleusercontent.com/docsz/AD_4nXch3TEWt4_FKTOCgMOF3pi6l_IETPmBftwc626CxKOHseq_FYlbmXMWNTu6yXRFj6AStp3cRakokK6KNjTf_i2zfrspA7hvxTBTYHto4ZG2xCNJ5U20BviWA1lcczuO-QqN6Nv7JOyLkWlBu1S_43IMvTdA?key=YxknmENvrQLJHvrRlZjWRQ)


### Screenshots of components 

##### [Additional Information Component](https://design.va.gov/storybook/?path=/docs/uswds-va-additional-info--default) 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXefLaCCPD-Eo9zUKyDjuzn6fxJCkAIXp1_2DPAIsDsm-AXi4J_RMyGh16KNcrFm2JJl4NtI7XcHq1nqZigqWUI5DPU7fdotC_xeCU9w0RV_E1j7xfzOcXkhvuZYVoO1cj6UDInrKuKACK1KwD-KQUo47jg_?key=YxknmENvrQLJHvrRlZjWRQ)


##### Autosuggest component 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXclpunOi2pf80euzWdfevYn87D9lhlCtHWBSWT2SVlFnHnChJD5FFpjLzZSQTOS9yafzHiS43unJgmQbdthTRpENgttu6ZrX8apEv_RUN0PkpxGoKfJyQfk7YGzLdv2XHP7B5BOQewEsmjvvU7fKO7OQutF?key=YxknmENvrQLJHvrRlZjWRQ)


### CSAT Questions and Average Scores 

We asked the same CSAT questions from the Medallia Intercept Survey to participants based on their experience with our prototypes. 

- The Intercept survey is enabled across all of modernized VA.gov. It randomly “intercepts” 5% of VA.gov users who have had a 60 second or more extended session (length of time was increased from 20 seconds in August 2023).

1\. Please rate your experience with entering conditions on this page (can be for either prototypes or combined). **Average Rating: 4.58**

1. Very bad

2. Somewhat bad

3. Neither bad nor good

4. Somewhat good

5. Very good

2\. Why did you select that rating? 

3\. Please rate how understandable this site's information is. **Average rating: 4.6**

1. Difficult to understand

2. Somewhat difficult to understand

3. Some is easy, some is difficult

4. Somewhat easy to understand

5. Easy to understand

4\. How did this interaction change your trust in Veterans Affairs? **Average rating: 3.6** 

1. Decreased my trust

2. Somewhat decreased my trust

3. Neither increased nor decreased my trust

4. Somewhat increased my trust

5. Increased my trust


### Testing scenarios 

- Actual situation

  - Each participant entered conditions based on their actual experience.

- Owl Mock Scenarios 

  - You have developed bursitis in your right knee.

  - You have inflammation in your kidneys 

  - Your right knee bothers you on a daily basis. You tore a tendon in the knee during active service and since then the knee has never recovered fully. It is painful when you walk downhill or try to kneel or squat. 

  - You have chronic congestion and full body aches 

  - Your doctor told you that you have Tonic-Clonic Seizures

- Fox Mock Scenarios 

  - Your medical records indicate you were diagnosed with pancreatitis

  - You had surgery to have your right hip replaced 

  - You have developed plantar fasciitis in both of your feet 

  - Your left ear has an inner ear infection 

  - You have lost your appetite for the last six months 


### Research materials

\[Research plan]\(https\://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/research-plan.md)

\[Conversation guide]\(https\://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2023-10%20Conditions%20List/conversation-guide.md)

\[Interview transcripts]\(link here)


### Tools used for Synthesis

\[Google Sheets]\(<https://docs.google.com/spreadsheets/d/1pMrmIpQoe9qWs6MMJGvUjJR2xvEF-dEqOMJ7zmJy2js/edit#gid=1959022916>)


### Pages and applications used

\[Codepen prototype] (<https://codepen.io/ccteam/live/MWRgOZO>)


### [Other supporting documents created](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#other-supporting-documents-created)

None


### [Secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#secondary-research)

Nothing of note. 


### [Who we talked to](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/sharing-research/research-findings-template.md#who-we-talked-to)

We talked to 8 participants. We wanted to get at least 4 Veterans who had never submitted a disability claim online before, so that we could have a fresh perspective on the digital experience. 

Audience segment:

- Veterans: 7

- Caregivers: 0

- Family members of a Veteran: 0

Disability benefits 

- Has applied for disability benefits before: 6

- Has not applied: 1

Gender:

- Male: 5

- Female: 2

LGBTQ+:

- Transgender: unknown

- Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: unknown

- Gay, lesbian, or bisexual: unknown

Devices used during study:

- Desktop: 6

- Tablet: 

- Smart phone: 1

- Assistive Technology: 0

Age:

- 25-34: 0

- 35-44: 2

- 45-54: 1

- 55-64: 2

- 65+: 2

- Unknown: 0

Education:

- High school degree or equivalent: 1

- Some college (no degree): 1

- Associate's degree, trade certificate or vocational training: 1

- Bachelor's degree: 0

- Master's degree: 4

- Doctorate degree: 0

- Unknown: 0

Geographic location:

- Unknown: 7

Race:

- White: 3

- Black: 2

- Hispanic: 0

- Biracial: 2

- Asian: 0

- Native: 0

Disability and Assistive Technology (AT):

- Unknown


## Underserved groups we haven’t talked to

[_VA recruitment checker_](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)

This research does not include the perspectives of the following marginalized Veteran groups: 

- Rural

- Cognitive Disability 

- Other than honorable discharge

- Immigrant

- Expat (living abroad)

- Identify as Asian or Native

- Identify as LGBTQ+

- User of assistive technology 

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcX_FVda0vVj0zbNWscosARmsAZOgrN3Tzo9lCKev9Dz6rKo8Uv3ewc5M-dY2_1r_jnwaRBnfP8xnp5ZQREZ3NErKWADo0l9-K5XwT7nUldns5v0ahlSy8PHRwbJKyE5jBls0Q-lZeAARYMPhk9kmuDMzg?key=YxknmENvrQLJHvrRlZjWRQ)

_\[insert screenshot of completed recruitment checker]_ !\[VA-recruitment-checker]\([VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1312168823))

