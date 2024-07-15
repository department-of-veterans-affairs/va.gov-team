# About this Research Study
- **Study Name:** Veteran Facing Forms - Form Header
- **Study Dates:** October 2023
- **Study Research Lead:** Rachel Shearer & Jeana Clark
- **A11y Collaborators:** Sara, Jamie and SK
- **Related Docs:**
    - [Product outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/Product%20Outline.md)
    - [User flows](https://staging.va.gov/authorization-to-disclose-alternate/introduction)
    - [Prototype or mockups](https://staging.va.gov/authorization-to-disclose-alternate/introduction)
    - [Research plan](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/research-plan.md)
    - [Research conversation guide](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/conversation-guide.md)
- **Ticket Links:** [Research Support Request #65316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65316)

# Accessibility Tools Utilized
`ZoomText` `JAWs` `iOS-VO` `VoiceOver` `SR Microsoft Extension` `TalkBack` `Fusion` 

## AT Coverage
This research fufilled `90`% (`9`/`10`) of its original request. Given the amount and variety of types of screen readers, a conclusive behavioral patterns can be determined locally in this study. We can draw future research considerations and document caught accessibility issues.

### Devices Tested
- Desktop was the most tested device at 44.44% (4 users)
- iPad/Tablet followed at 33.33% (3 users)
- Mobile was 22.22% (2 users)

### Skill Levels
- The majority of users in this study were non-beginners, they were advanced or intermediate at 88.88% (8 users). 
- Beginners only accounted for one user (11.11%)

### Assistive Technology
- iOS-VO was the top assistive technology 33.33% (3 users)
- ZoomText was second with 22.22% (2 users)

## Original Study Request: `10` 
> The purpose of this research was to explore the usability of a simplified form header design for Veterans - particularly those using screen readers

> `50` (`10`) [participants in this study](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/research-plan.md#:~:text=Assistive%20Technology%20(AT)) should use a screenreader on a desktop or mobile device

### Participant Breakdown

| **Participant Number** | Date of Research | **Assistive Tech** | **Skill Level** | **Operating System** | **Browser** |**Device Type** |
|------------------------|------------------|--------------------|-----------------|----------------------|-------------|-------------|
| P10                        |        10/2/2034          |                    SR Microsoft Extension|    Intermediate             |        Windows              |     Edge        |          Desktop   |
| P12                       |         10/3/2023         |                 JAWS   |         Intermediate        |     Windows              |     Chrome        |          Desktop                  |             |             |
| P13/17                       |      10/3/2023 `P13` and 10/4/2023 `P17`          |        Fusion            |           Intermediate      |       iOS               |    Safari         |    iPad         |
| P19`A`                        |     10/6/2023             |               iOS-VO     |         Intermediate        |     iOS                 |         Safari    |      iPhone       |
| P19`B`                        |       10/10/2023           |       TalkBack             |    Advanced             |       Android`?`               |     Chrome        |    Mobile         |
| P20                       |     10/10/2023             |         ZoomText           |       Advanced          |     Windows                   |        Edge     |     Desktop        |
| P23                       |   10/12/2023               |         iOS-VO           |         Beginner        |           iOS           |       Safari      |  iPad           |
| P24                       |  10/12/2023                 |         iOS-VO           |          Advanced       |   iOS                   |     Safari        |        Tablet     |
| P26                       |     10/16/2023             |         ZoomText           |     Advanced            |       Windows               |    Chrome         | Desktop            |

**Participants who successfully completed sessions:** `9`/`10`

# CAIA Findings
_While CAIA cannot require you to complete any updates to your product, we can provide your team with recommendations to help facilitate a smooth process for your project through the Collaboration Cycle or outside of the Collaboration Cycle._

_**Be sure to toggle and reveal the details in the sections below.**_

## Overview of Key Findings & User Feedback (A11Y Segment)

### Summary: Findings & Pain Points
 **Finding or Pain Point** | **Detail** | **Timing of Next Steps** |
|------------------------|------------------|--------------------|
| Finding 1 | Stepper confusion & stage in the process | Complete Later|    
| Finding 2 | Form title and number helpful, when the user found it | Complete Later|    
| Finding 3 | "Back" link wasn't easy to find; the "Continue" button worked well | Complete Now|    
| Finding 4 | Users expected to be able to save their progress upon exiting the form. | Complete Now|    
| Finding 5 | Users wanted to know if the form was being saved or not. | Complete Now|    
| Finding 6 | Some users ignored the "Exit" link completely. | Future Item|    
| Finding 7 | The date of birth and social security number fields were challenging for some users. | Future Item | 
| Pain Point 1 | Lack of Consistency Between Sites | Complete Soon|  
| Pain Point 2 | Completion Time Not Inclusive | Future Item |  
| Pain Point 3 | Tabbing with Screen Readers; Users Miss Valuable Content | Complete Later|  
| Pain Point 4 | Two-Factor Authentication Interactions for AT Users | Future Item|  

### Detailed Key Findings and Pain Points (A11Y Segment)
**Veterans' Voices:** Impactful quotes were collected during this study to provide user-specific feedback, related to the findings. Hear what veterans have to say in the quotes that were selected for inclusion, in this report.

<details><summary>Toggle to read accessibility-related key findings</summary>

### Finding 1: Stepper confusion & stage in the process
- **Users are confused as to where they are in the process, when they are still on the same [step #] of [#steps].**
    - > “Not sure how many pages I have left because it says 2 of 4, but I was on 2 of 4 already. Basically I have four pages, but I could be on 10 or 3. This would frustrate me. I think I am getting close to the end and these forms are tedious already. That would just annoy me more. I would be thinking I was thoroughly progressing but I am not.  I can't tell if I am in the beginning, middle or end, now. If I go back it will say 2 of 2.” - P10
    - <img width="381" alt="Step 2 of 4 Your Information" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/124186314/1d790878-2e2a-4084-a289-0bbd5d3b8cca">
    - > "We’re in chapter 2 (but not how many chapters there are). It doesn’t say how long this is going to take. The last page said ‘2 of 4,’ but this one didn’t." - P13
    - > "It was my understanding initially that there was one page per (chapter). Apparently there are multiple (pages) per chapter." - P20
    - > "I don’t have a clue." - P26, upon being asked _What if you wanted to see how many pages are in front of you?_ 
- **The progress bar wasn’t immediately findable/navigable by screen reader users.**
    - > "No…some forms give a percentage of how far along you are, but not any government forms." - P12, upon being asked _Any idea how you'd track your progress?_
    -  > "I just noticed that, there’s a progress bar on top." - P20
    -  > "Older VA forms had a percent bar that told me how far along I am. I don’t know if this form has a bar. If it does, I don’t know how to get to it." - P26
       - **Note**: This user used the Heading List to navigate through the form by heading. The progress bar does not appear in this list.
- **Its placement at the top made it difficult for keyboard-only users to refer to when further down the page.**
    - > "When you wanted me to see where I was in the form, I like where on the bottom, it’ll have a ‘meter’ - you’re 50% through. I don’t have to go all the way to the top to figure out ‘how far along am I?’ The meter is super-nice.” “Tabbing to the top to see where I am on the form (was frustrating)." - P13
- **The visual indicator was missing in high-contrast mode.**
- **Sighted users generally understood what the colors indicated, but felt that there could be more distinction between them.**
    - > "I saw the blue line change. There were two grays, dark blue and light blue and now there are light blue and gray." - P10
    - > "Dark bar has been completed, blue bar means it’s not completed yet. Gray bar is more forms to fill out." - P19B
    - P20 noted that it might be useful to change the progress bar colors to be more distinct from each other.
- **According to the USWDS:** A [step indicator](https://designsystem.digital.gov/components/step-indicator/) updates users on their progress through a multi-step process.
 - Place a heading directly below the step indicator. Each step needs an explicit heading. The step indicator segments (even with labels and counters) are not sufficient as a heading for a page or screen.
 - [Access additional details on this component](https://designsystem.digital.gov/components/step-indicator/#accessibility:~:text=the%20overall%20process.-,Accessibility,-Use%20semantic%20heading)
    - **Use semantic heading levels.** Though our default code uses an `<h4>`, use the correct heading level in your own implementation.
    - **Use `aria-label=”progress”`.** Placing this `aria-label` on the element with the class `usa-step-indicator` helps provide important context to screen readers.
    - **Use visually hidden text on labels.** Use visually hidden text make the completion status of each step explicit.
    - **Indicate the current step.** When using labeled segments, use `aria-current="true"` on the list item representing the current step.
    - **Hide unlabeled segments.** There is no content inside the segments when labels aren’t used, so it is safe to add `aria-hidden="true` to the element with the class name `usa-step-indicator__segments`.
    - [Review the Component in the VA.gov Design System](https://design.va.gov/components/form/progress-bar-segmented)

<hr>

### Finding 2: Form title and number helpful, when the user found it
- **If the user can access the form title/number, they clearly understand what form they're on.**
- **Users appreciated having the form title and number available to them.**
   - > "(using ctrl+Home)...gave me the title of the form" - P12
   - > "I really like that. You don’t always know the form number." - P13
    - > "I would go back to the previous page and double check the form number to confirm I am on the correct form." - P23
- **One screen reader user was unable to find/read the form title.**
   - P26 used the URL to try to figure out what form he was on. He navigated the page by tabbing, and was unable to access the form header by doing so.
   - When asked _If you had a magic wand, what would you page?_, he said he’d have the name and number of the form at the top of the page.


<hr>


### Finding 3: "Back" link wasn't easy to find; the "Continue" button worked well
-  **Up-top “back” link wasn’t obvious to users, and required a lot of tabbing/swiping to access from the bottom of the form.**
    - > "I don’t see a (back button) here, I’d probably hit shift+tab." - P12
    - P19A, who used an iPad, swiped up until she got to the in-form “Back” button, and tapped on it.
    - > "I assume I’d just fix it in the form…I don’t see an option to make a change..." he scrolls up, and sees the Back link. "Or I could use the back button." - P20
-  **Some users expected to see a “back” button below the question, next to “continue”.**
    - > "When you get to the bottom of the page, (it should have) “next page” and “previous page”. It’d be easier to navigate…rather than jumping around and hoping to find (the right spot)." - P12
- **Users said that the placement of the "Continue" button made sense.**
    - > "Continue (button) worked great" - P13
    - P24 mentioned that the continue button being right underneath the radio buttons was very helpful.
- **Some users used their browser's 'back' button to navigate through the form instead of the "Back" link.**


<hr>


### Finding 4: Users expected to be able to save their progress upon exiting the form.
- Many users expected a “save” button to accompany the exit process. Most looked for a “save and continue” button, and felt frustrated when they couldn’t find one. We had to explain that it was unauthenticated.
    - >  "I want it to tell me to save it. Most of the forms on the VA, you can’t save them…and have to start over." - P13, after tabbing to the "Exit" link
    - > "You’d scroll to the top and click 'save'...hmm, I don’t see a ‘save’. If you just exit you’ll lose all your information. I don’t see a tab that says ‘save and continue later." - P19B 
    - > "Well, it doesn’t suggest that I can save it, so I’d click on ‘Exit form'" - P20
     - > "At this point, this is where I would call my daughter or health advocate." - P23, when asked to exit the form and trying to find a “Save” button. 
     - > "I need to go to ‘Save and Continue,’ there’s usually a button at the bottom like that." - P26, who also noted that using a screen reader takes time and he "gets tired, sometimes wants to take a break." 

<hr>


### Finding 5: Users wanted to know if the form was being saved or not.
- > "Oh, just like Word." - P13, when we explained that the form would auto-save
- > "I don’t know if this form could be saved. I’ve never seen a form on the VA portal (that lets me save). Maybe it’s there and I didn’t see it." - P13
- > "I wouldn’t think the form was saved because there isn’t an information is saved alert." - P19
- > "Yes, at the bottom…You’re already trying to listen as a visually impaired section. As long as you can get to the end and save, it’s fine (each time before you hit continue)." - P19, when asked if they want to hear an "information saved" message
- > "Having a visual save option would help. Text that says ‘save’. I have a feeling you guys will probably (add that). And looking at the top of this page, you could put ‘save’ next to the ‘back’ and ‘exit’ buttons, and maybe make that a bit larger font." - P20

<hr>


### Finding 6: Some users ignored the "Exit" link completely.
- **Some users preferred to manually close the tab (alt + F4) to exit, rather than looking for an exit link.**
    - > What would you do to end this process? “Alt + F4.” What would that do? “Cancel it all out, get rid of it.” - P12
    - P26 said he’d leave the window open and open a new Chrome tab, then use alt+tab to go between the tabs. He’d also consider bookmarking the page to return to it later. 

<hr>


### Finding 7: The date of birth and social security number fields were challenging for some users.
- **Date of birth:**
    - > "I hate these things where you have to pick the month, but have to type the day and year…I expect the same thing (in each field)...it’s be much easier if you could just type in ‘05’ (for month), it’s simpler that way. I’m old and get confused easy…In MyHealtheVet, its numerical dates. It’d be much easier if it was the same all the way through." - P12
     - > "I don’t hear a number in my day. I hear month, and then day, but no numbers are going in. In the day I am trying to get a number in there." - P13
     - P23 mentioned that having to manually type in birthday was difficult and expected a drop down like how the month is.
     - P24: “Day” field was not announced after selecting a month. After typing in Day it automatically places focus to year input field. 
- **Social security number:**
    - P13 had an issue entering. They entered 9 numbers, but the didn’t group them by dashes properly, and got an error. (**Note**: CAIA was not able to duplicate this issue.)
    - > "3 input fields are easier than one long input field for social security. Long input field I forget how many numbers I type, also-  if I type in a long input field I would have to delete the whole number and start over again." - P20

<hr>


### Other pain points (not limited to this form)
#### Lack of Consistency Between Sites
- **Lack of consistency between VA.gov and MyHealtheVet, and other federal gov web platforms, causes confusion for AT users, who have to “re-learn” on each new site.**
    - > "These are all government websites. I know you’re looking for different things on different government websites, but they should at least be able to make certain parts of it standard so you don’t have to try to guess." - P26
      
#### Completion Time Not Inclusive
-  **On intro page, time to completion is for able, sighted users, and doesn’t given an approximation for AT users.**
    - > "Says it’ll take 5 minutes (for sighted users); would be 15 or 20 minutes for me. I can get through it, but that’s because the questions are really easy." - P13
#### Tabbing with Screen Readers; Users Miss Valuable Content
- **Beginner and intermediate screen reader users tend to be “tabbers” - using tab to navigate between interactive elements. This has the effect of lots of text NOT being read out loud, when text isn't focusable (think paragraphs, unlinked headings, etc.)**
    - > "My reader stops. Why did my reader just stop? If I hit tab, it takes me to the next session, so I miss the whole rest of it." - P13
#### Two-Factor Authentication Interactions for AT Users
- **2FA adds a lot of interactions that an AT users has to go through.**
    - **It can be difficult for them. And the authentication process is cumbersome for Vets who don’t have the required IDs.**
        - > "Sometimes I get stuck with logging in. I’ve noticed that the login process for VA.gov and eBenefits has more (requirements)...it takes longer to get in. It can be kind of a hassle." - P19
        - > "I bet most vets aren’t using VA.gov, because you have to upload (documents) and the verification process. If you could come up with another process to verify rather than text..." - P20  

</details>

## Overview of Next Steps: A11Y Recommendations/Considerations

### Summary: Timing
 **Timing for Recommendations/Considerations** | **Count**|**Impact Areas**|
|------------------------|------------------|------------------|
| Complete Now | 3 | `A11y` `IA` `Content` `Design`
| Complete Soon | 1 | `A11y` `Content`
| Complete Later | 2 | `A11y`
| Future Items to Consider | 4 | `A11y`
| **Total** | **10** | `A11y (8)` `IA(3)` `Content(4)` `Design(1)`

### Detailed Next Steps (A11Y Segment)
A list of actionable findings, based on time-sensitive and priority needs, as they relate to the VA experience standards, severity rubric and WCAG.

<details><summary>Toggle to read more about what should be completed now and what can be completed later.</summary>
<br>

<hr>

### Complete Now
#### Finding 4: Users expected to be able to save their progress upon exiting the form.
- Issue Description: Many users expected a “save” button to accompany the exit process. They gave suggestions such as "Save" and "Save and Continue" buttons. While this study tested the unauthenticated version of the form, the lack of a save button was frustrating for users.
- Desired Outcome: Authenticated users are aware that a) the form can be saved b) can press X button to save it. If the form saves automatically, they need to be made aware of that on form exit.
- Experience standard:`Category 03` `Issue 02` `User Flows and Navigating` [Link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=A%20user%20flow%20provides%20content%20or%20navigation%20to%20help%20users%20understand%20where%20to%20go%20or%20what%20to%20do%20next.)
- Defect:`Launch Blocking`
- Impact Area: `IA` `Content`
- Appears on: `Experience Standards` 
- WCAG: n/a


#### Finding 5: Users wanted to know if the form was being saved or not.
- Issue Description: Many users assumed that their data would be saved unless we informed them otherwise. For unauthenticated users, make sure it's clear that the data isn't being saved. Use an alert upon form exit, an alert box on the unauth intro page, or similar.
- Desired Outcome: Unauthenticated users are aware that their data won't be saved if they exit the form before completing/submitting.
- Experience standard:`Category 03` `Issue 02` `User Flows and Navigating` [Link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=A%20user%20flow%20provides%20content%20or%20navigation%20to%20help%20users%20understand%20where%20to%20go%20or%20what%20to%20do%20next.)
- Defect:`Launch Blocking`
- Impact Area: `IA` `Content`
- Appears on: `Experience Standards`
- WCAG: n/a

#### Finding 3: Consistent Navigation  
- Issue Description: Most users expected to find a "back / continue" button pattern below the form field. The "back" link on top wasn't easily found. Consider going back to the two-button pattern.
- Desired Outcome:  Consider going back to the two-button pattern.
- Experience standard:`Category 01 - Overall User Experience` - Design component or pattern in use is considered a best practice.[link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=13-,WCAG%20SC%203.2.2_A,-x) `Category 04` `Issue 10`[link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=Navigation%20mechanisms%20aren%27t%20consistent%20across%20pages.)
- Defect: `Launch Blocking`
- Impact Area: `A11y` `Content` `Design` `IA`
- Appears on: Content style guide 05 - The content is written in plain language and doesn't contain excess words or modifiers.
- WCAG: Can fall under 3.2.3 Consistent Navigation Level AA

### Complete Soon
#### Finding 1: Make sure content is understandable
- Issue Description: The word "Chapter" is decribing a step indicator. Because this is a step indicator users may not know what Chapter 2 of 4 may mean on.  "Chapter" was confusing. 
- Desired Outcome: Consider testing "section" or "part" for clarity. Consider using percentages as well.
- Experience standard:`Category 05` `Issue 05` - The content is written in plain language and doesn't contain excess words or modifiers.[link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=13-,WCAG%20SC%203.2.2_A,-x)
- Defect:`Depends`
- Impact Area: `Content`
- Appears on: `Content Style Guide`
- WCAG: 3.1

### Complete Later
#### Finding 1: Stepper confusion & stage in the process
- **Issue Description:** UI components do not initiate a change of context when they receive user input. The form screen changes, but the users sees they are on step 2 of 4, regardless.
- **Desired Outcome:** Communicate progress to the user in a predictable and understandable nature.
- **Experience standards:** `Category 11` `Issue 13` [link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=13-,WCAG%20SC%203.2.2_A,-x)
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`
- **Appears on:** `Experience Standards` `WCAG`
- **WCAG:** `3.2.2` 
#### Other Painpoints: Tabbing
- **Issue Description:** Tabbing with Screen Readers; Users Miss Valuable Content
- **Desired Outcome:** To account for "tabbers," or people who only use tab to navigate through a page, you might want to give focus to the form title/number and the progress bar.
- **Experience standards:** `Category 11` `Issue 22` [link to standard]([xxxx](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=22-,WCAG%20SC%204.1.3_AA,-x))
    - Alert and status messages aren't announced without receiving focus.
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`
- **Appears on:** `Experience Standards` `WCAG`
- **WCAG:** `4.1.3` [WCAG 4.1.3](https://www.w3.org/WAI/WCAG21/quickref/#status-messages)

### Future Items to Consider

#### Date field group
- **Issue Description:** While the date picker meets [USWDS standards](https://designsystem.digital.gov/components/memorable-date/), in this study, we found that the date field was hard for users to use due to the inconsistency between the types of fields within the date group (a dropdown and two text inputs). One user suggested having a single text input; another suggested all dropdowns.
- **Desired Outcome:** We would like to confirm that this field group is optimal for assistive tech users via user testing. Please put this on your radar.
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`
- [DSVA Slack thread](https://dsva.slack.com/archives/C01DBGX4P45/p1698773791664629)

#### Social security number field
- **Issue Description:** While the SSN field meets [VADS standards](https://design.va.gov/patterns/ask-users-for/social-security-number)), in this study, a user with cognitive impairment found that it was difficult to remember how many numbers he'd entered in. He suggested that the field be broken up into 3 separate inputs (XXX - XX - XXXX), which he thought would help him keep track of what he'd entered.
- **Desired Outcome:** We would like to confirm that this field is optimal for assistive tech users via user testing. Please put this on your radar.
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`

#### Completion Time Not Inclusive
-  **On intro page, time to completion is for able, sighted users, and doesn’t given an approximation for AT users.**
- **Desired Outcome:**  Please put this on your radar.
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`

#### Two-Factor Authentication Interactions for AT Users
- **2FA adds a lot of interactions that an AT users has to go through.**
    - **It can be difficult for them. And the authentication process is cumbersome for Vets who don’t have the required IDs.**
- **Desired Outcome:**  Please put this on your radar.
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`
      </details>
