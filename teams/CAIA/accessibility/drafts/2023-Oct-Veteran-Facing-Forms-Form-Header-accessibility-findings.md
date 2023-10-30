# About this Research Study
- **Study Name:** Veteran Facing Forms - Form Header
- **Study Dates:** October 2023
- **Study Research Lead:** Rachel Shearer & Jeana Clark
- **A11y Collaborators:** Sara, Jamie and SK
- **Related Docs:** Link to research plan and communication guide - or link to project's GitHub link?
- **Ticket Links:** [Research Support Request #65316](https://github.com/department-of-veterans-affairs/va.gov-team/issues/65316)
    - [Product outline](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/Product%20Outline.md)
    - [User flows](https://staging.va.gov/authorization-to-disclose-alternate/introduction)
    - [Prototype or mockups](https://staging.va.gov/authorization-to-disclose-alternate/introduction)
    - [Research plan](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/research-plan.md)
    - [Research conversation guide](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/conversation-guide.md)

# Accessibility Tools Utilized
`ZoomText` `JAWs` `iOS-VO` `VoiceOver` `SR Microsoft Extension` `TalkBack` `Fusion` 

## Coverage
This research fufilled `90`% (`9`/`10`) of its original request. Given the **limited/abundant** amount and **variety/lack of variety** of types of screen readers, a conclusive behavioral patterns **can/cannot** be determined locally in this study. We **can/cannot** draw future research considerations and document caught accessibility issues.

**Original study request:#**
> The purpose of this research was to explore the usability of a simplified form header design for Veterans - particularly those using screen readers

> `50` (`10`) [participants in this study](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/blob/main/research/2023-09-form-header-usability-testing/research-plan.md#:~:text=Assistive%20Technology%20(AT)) should use a screenreader on a desktop or mobile device

## Participants

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

## Key Findings & User Feedback (A11Y Segment)

**Veterans' Voices:** Impactful quotes were collected during this study to provide user-specific feedback, related to the findings. Hear what veterans have to say in the `##` quotes that were selected for inclusion, in this report.

<details><summary>Toggle to read accessibility-related key findings</summary>

### Finding 1: Stepper confusion & stage in the process
- Users are confused as to where they are in the process, when they are still on the same [step #] of [#steps].
    - > “Not sure how many pages I have left because it says 2 of 4, but I was on 2 of 4 already. Basically I have four pages, but I could be on 10 or 3. This would frustrate me. I think I am getting close to the end and these forms are tedious already. That would just annoy me more. I would be thinking I was thoroughly progressing but I am not.  I can't tell if I am in the beginning, middle or end, now. If I go back it will say 2 of 2.” - P10
    - <img width="381" alt="Step 2 of 4 Your Information" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/124186314/1d790878-2e2a-4084-a289-0bbd5d3b8cca">
    - > "We’re in chapter 2 (but not how many chapters there are). It doesn’t say how long this is going to take. The last page said ‘2 of 4,’ but this one didn’t." - P13
    - > "It was my understanding initially that there was one page per (chapter). Apparently there are multiple (pages) per chapter." - P20
    - > "I don’t have a clue." - P26, upon being asked _What if you wanted to see how many pages are in front of you?_ 
- The progress bar wasn’t immediately findable/navigable by screen reader users.
    - > "No…some forms give a percentage of how far along you are, but not any government forms." - P12, upon being asked _Any idea how you'd track your progress?_
    -  > "I just noticed that, there’s a progress bar on top." - P20
    -  > "Older VA forms had a percent bar that told me how far along I am. I don’t know if this form has a bar. If it does, I don’t know how to get to it." - P26
       - Note: This user used the Heading List to navigate through the form by heading. The progress bar does not appear in this list.
- Its placement at the top made it difficult for keyboard-only users to refer to when further down the page.
    - > "When you wanted me to see where I was in the form, I like where on the bottom, it’ll have a ‘meter’ - you’re 50% through. I don’t have to go all the way to the top to figure out ‘how far along am I?’ The meter is super-nice.” “Tabbing to the top to see where I am on the form (was frustrating)." - P13
- The visual indicator was missing in high-contrast mode.
- Sighted users generally understood what the colors indicated, but felt that there could be more distinction between them.
    - > "I saw the blue line change. There were two grays, dark blue and light blue and now there are light blue and gray." - P10
    - > "Dark bar has been completed, blue bar means it’s not completed yet. Gray bar is more forms to fill out." - P19B
    - P20 noted that it might be useful to change the progress bar colors to be more distinct from each other.
 
      
**According to the USWDS:** A [step indicator](https://designsystem.digital.gov/components/step-indicator/) updates users on their progress through a multi-step process.
 - Place a heading directly below the step indicator. Each step needs an explicit heading. The step indicator segments (even with labels and counters) are not sufficient as a heading for a page or screen.
 - [Access additional details on this component](https://designsystem.digital.gov/components/step-indicator/#accessibility:~:text=the%20overall%20process.-,Accessibility,-Use%20semantic%20heading)
    - Use semantic heading levels. Though our default code uses an `<h4>`, use the correct heading level in your own implementation.
    - Use `aria-label=”progress”`. Placing this `aria-label` on the element with the class `usa-step-indicator` helps provide important context to screen readers.
    - Use visually hidden text on labels. Use visually hidden text make the completion status of each step explicit.
    - Indicate the current step. When using labeled segments, use `aria-current="true"` on the list item representing the current step.
    - Hide unlabeled segments. There is no content inside the segments when labels aren’t used, so it is safe to add `aria-hidden="true` to the element with the class name `usa-step-indicator__segments`.
    - [Review the Component in the VA.gov Design System](https://design.va.gov/components/form/progress-bar-segmented)


### Finding 2: Form title and number helpful, when the user found it
- If the user can access the form title/number, they clearly understand what form they're on.
- Users appreciated having the form title and number available to them.
   - > "(using ctrl+Home)...gave me the title of the form" - P12
   - > "I really like that. You don’t always know the form number." - P13
    - > "I would go back to the previous page and double check the form number to confirm I am on the correct form." - P23
- One screen reader user was unable to find/read the form title.
   - P26 used the URL to try to figure out what form he was on. He navigated the page by tabbing, and was unable to access the form header by doing so.
   - When asked _If you had a magic wand, what would you page?_, he said he’d have the name and number of the form at the top of the page.

### Finding 3: "Back" link wasn't easy to find; the "Continue" button worked well
-  Up-top “back” link wasn’t obvious to users, and required a lot of tabbing/swiping to access from the bottom of the form.
    - > "I don’t see a (back button) here, I’d probably hit shift+tab." - P12
    - P19A, who used an iPad, swiped up until she got to the in-form “Back” button, and tapped on it.
    - > "I assume I’d just fix it in the form…I don’t see an option to make a change..." he scrolls up, and sees the Back link. "Or I could use the back button." - P20
-  Some users expected to see a “back” button below the question, next to “continue”.
    - > "When you get to the bottom of the page, (it should have) “next page” and “previous page”. It’d be easier to navigate…rather than jumping around and hoping to find (the right spot)." - P12
- Users said that the placement of the "Continue" button made sense.
    - > "Continue (button) worked great" - P13
    - P24 mentioned that the continue button being right underneath the radio buttons was very helpful.
- Some users used their browser's 'back' button to navigate through the form instead of the "Back" link.

### Finding 4
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 5
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 6
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 7
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 8
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 9
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

### Finding 10
- Feel free to include bullets
- They can help add some more info
> "Quote goes here." - Pxx

</details>

## Next Steps: A11Y Recommendations/Considerations
A list of actionable findings, based on time-sensitive and priority needs, as they relate to the VA experience standards, severity rubric and WCAG.

### IMPORTANT NOTE ABOUT CAIA
While CAIA cannot require you to complete any updates to your product, we can provide your team with recommendations to help facilitate a smooth process for your project through the Collaboration Cycle or outside of the Collaboration Cycle.

<details><summary>Toggle to read more about what should be completed now and what can be completed later.</summary>

### Complete Now
#### ISSUE ITEM NAME GOES HERE
- Issue Description: 
- Desired Outcome:
- Experience standard:`Category #` `Issue #`
- Defect:`Launch Blocking`
- Impact Area: `A11y` `Content` and/or `IA`
- Appears on: `Experience Standards` `WCAG` `Common Issues`
- WCAG: `#.# Link to WCAG`
### Complete Soon
#### ISSUE ITEM NAME GOES HERE
- Issue Description: 
- Desired Outcome:
- Experience standard:`Category #` `Issue #`
- Defect:`Depends`
- Impact Area: `A11y` `Content` and/or `IA`
- Appears on: `Experience Standards` `WCAG` `Common Issues`
- WCAG: `#.# Link to WCAG`
### Complete Later
#### Finding 1
- **Issue Description:** UI components do not initiate a change of context when they receive user input. The form screen changes, but the users sees they are on step 2 of 4, regardless.
- **Desired Outcome:** Communicate progress to the user in a predictable and understandable nature.
- **Experience standards:** `Category 11` `Issue 13` [link to standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards#:~:text=13-,WCAG%20SC%203.2.2_A,-x)
- **Defect:** `Not Blocking`
- **Impact Area:** `A11y`
- **Appears on:** `Experience Standards` `WCAG`
- **WCAG:** `3.2.2` `4.1.3?`

</details>
