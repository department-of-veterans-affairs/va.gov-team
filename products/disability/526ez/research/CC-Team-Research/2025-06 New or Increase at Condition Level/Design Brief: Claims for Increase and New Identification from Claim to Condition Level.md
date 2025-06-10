# 2025-03 Design Brief: Claims for Increase/New identification from claim to condition level 


Last Updated : Mar 13, 2025

Written by: <kyra.berman-gestring@rbaconsulting.com> & <sudeeptibhatnagar@navapbc.com>


# Background

Currently, Veterans begin Step 2 of 5 in the 526EZ form by selecting whether they are applying for new conditions and/or applying for an increase (CFI) for a previously rated disability. This separates CFI and new claims into two “list and loops”, and creates some key issues to usability, including creating a disconnected data flow and user misidentification of claim types. This confusion for Veterans is significant and has had policy implications, as Congress is currently pushing for a combination of forms that would shift the identification of the condition as new or a CFI away from the claim level. Additionally, this design exploration would create greater parity with the paper form, as the paper form does not have Veterans make this distinction.\
\
In response to these key usability concerns and anticipating shifting policy needs, we want to explore whether it's possible for Veterans to indicate the status of new or CFI for each condition they add, shifting the identification from the claim level to the condition level. We want to integrate current Max CFI work into our designs and explore how this flow may impact the current exploration on secondary claims. We will incorporate technical and accessibility considerations into our final recommendation. 

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeh_jK71q9rneRc4iTkhpHGb2sxEQq4Zvfl6kHNijVQJZQpfxT5asvMyFbtRcaQrCvckykmyvCc2KvLHA_otvyVgYR61_v567NhYiFUTTO2P6yjoeaB8TquhDs1yg1NLRQzvnybfA?key=ooUGjDJixh3ORSAntFKdCYM_)

*Current State: Veterans have to indicate if a condition is new or has gotten worse in the first question of Step 2*

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfK4u5-yHFDHguiYvOwH8D5zet2xcEMj7p2xSDM6sY1yHFX63j64A33Td36ntWi3QZkLYbFUki5FcXYeG2R0IGwjdalNw2T7-nkdH2ie6m3J_tXQhwmZjYHcx1e2-R8FYH9aPEHFw?key=ooUGjDJixh3ORSAntFKdCYM_)

*Screenshot of PDF 526EZ Form illustrating how paper form does not separate new conditions from CFI*


# Overview

### Goals

- Outline UX considerations on claimants indicating new or CFI state at the condition level, not the claim level. 

- Include Secondary Claims and Max CFI into flow, noting an impact. 

- Create a decision tree/user journey for the new explorations. 

- Create final wireframes of end-to-end flow that have been tested internally and are refined and ready for usability testing. 

- Create a research plan for conducting usability testing.


### Methodology

- Sync with stakeholders on the broader context of this work.

- Review related research.

- Create and refine IA maps with technical and accessibility feedback. 

- Aggregate key points and recommendations into a report.

- Mockup wireframes of end-to-end flow. 

- Present wireframes to stakeholders for feedback and iterate on designs, as needed. 

- Collaborate with dev for handoff and internal testing. 

- Iterate on designs, as needed.

- Create a research plan for usability testing. 


# Problem Space

### Veteran Misidentification of Claims

From our data analysis, approximately 6% of conditions initially marked as "new" are later changed to "secondary" by the end of the claim lifecycle, while 3% change from "new" to "increase." By improving our form design, we aim to reduce these reclassification rates and help Veterans correctly identify their claim types from the beginning of the process. Misidentified claims can also lead to incomplete or inaccurate claims, as certain dependencies are triggered based on their claim identification selection. 

- Important form sections (like 0781 and Toxic Exposure questions) currently only appear for new conditions, not CFI (this may change as those forms are updated).

  - If Veterans incorrectly categorize their claim type initially, they might miss critical form sections.


### Disconnected Data Flow

Currently, when Veterans select "new conditions" or "Claims for Increase" (CFI) at the start of the form, this choice creates separate, isolated paths. Instead of maintaining connections between this initial choice and subsequent pages, each section operates independently. This leads to several problems:

- If a Veteran changes their mind about whether a condition is "new" or "CFI" on the first page, the data they entered on later pages doesn't update to match.

  - Reference:  Ticket [#61117](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61117)

- The review page might show one thing (like removing CFI conditions), but the final PDF could include different information (still including those CFI conditions).

  - Reference: [Ticket #65860](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61117)

- Veterans who realize they made the wrong selection have to manually backtrack and clean up their entries across multiple pages.

- The yes/no or checkbox-based branching pattern used across VA forms doesn't handle data persistence and cleanup well.


### **User Experience Challenges**

- Veterans can lose track of their initial selections as they progress through the form. They might forget if they selected new claims, CFI, or both. 

  - In order to change their initial selection, Veterans have to backtrack all the way to the original question. Their data may or may not be preserved and accurate based on their new selection. 

  - Veterans can't easily see how changing one selection affects their entire claim.

- The current approach doesn't align well with how Veterans think about their conditions and claims.

  - The current design requires Veterans to understand and make claim-type decisions before entering any specific conditions.

- Veterans are abandoning the form at this decision point more often than other parts of the form, according to Google Analytics data. This suggests that choosing between "new conditions" and "Claims for Increase" early in the process may be confusing or overwhelming for Veterans.

- Reentering data after changing selections creates unnecessary friction.


### Broader Context and Policy Considerations

- Congress is pushing to combine supplemental forms with the 526 because of Veteran’s confusion between CFI and rating decision appeals, which will require associating this claim type with a specific condition.

- Veterans Service Representatives (VSRs) and Rating Veterans Service Representatives (RVSRs) sometimes struggle to make connections between new/secondary/CFI/supplemental claims because they are not associated with an individual condition. The information is not clearly ported over into the Veterans Benefits Management System (VBMS) or onto the generated PDF.

  - Processing errors can occur when staff cannot clearly determine how Veterans categorize their conditions.

  - We sometimes see  Veterans Service Organization (VSO)-supported claims include new or CFI as part of the condition name as a work around.

  - Recommendations have been made in the Integrated Process Team (IPT) to move this information collection down into the conditions table on the paper form to help resolve this issue.

- The problem extends beyond just this form - similar patterns create issues in other VA forms, including the 0781 form.


# Related Research 

[Lighthouse 526 Research](https://dsva.slack.com/archives/C04AZ8T7XN1/p1676518882259079): “Veterans expressed confusion with inputting conditions correctly when filing the 526EZ. That confusion comes from several different points, which includes items such as:

- The lack of clarity between the difference of ‘new conditions’ versus ‘worsening conditions.’” 

[526 Shadowing Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2023-11-Shadowing-Research/research-findings.md): “Veterans experience data loss if they decide to change the cause of their condition mid-flow.  The form asks Veterans what caused their condition via a series of radio buttons and a text box that appears dynamically on the page. If they write a response in the text box and then change their radio button selection, their text is deleted and cannot be retrieved, as P12 experienced.” 


# Possible Solutions

[Figma of Decision Trees for Paths 1-4](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-18880\&t=NqPPpv7OZgNFaCxG-1)


### **Path 1: All CFI together, before new conditions**

One potential solution would be to show Veterans their rated conditions first, and have them submit all CFI, and when done proceed with adding new conditions. To avoid additional clicks, this decision tree suggests the date pages when the user has selected multiple rated conditions are one after another which is a pattern called the “"multi-page aggregate”" pattern found in the current 526EZ cause follow-up questions.

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcLvO24QI7ZSObsfl3kbgnIb1n6B2fQZ4Pgu3HLnRhoIRX37jm8LM-nkf63_JI_RoogG5DqB6tKMj-TrPOr8-mtcXjWTGJiR_sUes4Xoq_gLEMhGhd4yDrCvH5X1pH1k-SzvvlOiw?key=ooUGjDJixh3ORSAntFKdCYM_)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-18880\&t=NqPPpv7OZgNFaCxG-11)
*Path 1 Decision Tree*

Pros:

- More efficient because it reduces clicks when submitting CFIs compared to other possible paths. 

Considerations:

- Concerns with editing and aligning the data flow.

- Still adheres to the distinction of new claim vs. CFI and maintains a hierarchy of having users do all CFI first before all new. 

- Breaks the condition-by-condition UX pattern by having users select all applicable. 

- Deviates from the multi-page “list and loop” for technical implementation.

  - The Date Worsening pages directly following one another, before hitting the “Multi-page List and Loop” Summary page seems to be a mix of the “Multi-page Aggregate” pattern (found in the current 526EZ cause follow-up questions) and the “Multi-page List and Loop” pattern. 

  - To add data using the “Multi-page Aggregate” pattern and then have those be populated on the “Multi-page List and Loop” Summary page does not seem to be something the platform team would allow nor be technically feasible .

- If additional follow-up questions for CFI are required in the future, it could be more confusing, as it is with the single-page “list and loop” pattern for new conditions, because Veterans lose track of which condition the questions are referring to. 

- If users want to add another CFI after adding new conditions, they may need to go back several pages.

- Possibly less impact than other approaches on reducing the number of incorrect INC conditions submitted initially as new.


### **Path 2: One CFI at a time, before new**

A second possible solution is to have Veterans view a list of their rated disabilities and indicate if they want to proceed with a CFI, or if none of their conditions have worsened, if they want to proceed with adding a new condition. This pattern would require them to make only one selection at a time. 

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfjmAK0Jjj2WrH5Q9a61QUzIGCLGZbI6dvLQB_Y_UQBhK-dmLPjDGGKQnsAIjCFfqhtskv2vAUiQnMZSxqrrYlaphEQh-TeArDl5ZixqbHjUD3Zn3__yG9He5uruhOrSiVXcmzp?key=ooUGjDJixh3ORSAntFKdCYM_)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-20096\&t=NqPPpv7OZgNFaCxG-11)
*Path 2 Decision Tree*

Pros:

- Adheres to the “one-thing-per-page” pattern.

Considerations:

- Still adheres to the distinction of new claim vs. CFI and maintains a hierarchy of having users do all CFI first before all new. 

  - May take users more time to get to new if they are there to add new and forced to do CFI first.

- Length of flow, number of clicks may be cumbersome to users.

- Like with all of the flows, if the user does not have rated conditions, adding a new condition would be straightforward. But if the user has multiple rated conditions, and adds one as a CFI, and are on the summary page, it may not be intuitive that to add a new condition at that point. They would need to click “Do you have another condition to add?” → “Yes”, then select “None of these have worsened”. If the user wants to add another new condition, they would have to go through that flow again; answering “None of these have worsened” a second time could feel odd. 

- Possibly less impact than other approaches on reducing the number of incorrect INC conditions submitted initially as New.


### **Path 3: Conditions first (Select or Enter) -** 

#### Option 3a CFI and New on the same page

A third possible solution is to have Veterans either select from their rated conditions, or enter a new condition to begin with. Veterans could only select one option, so if they select a rated condition they would enter the date worsened and then review. If they selected a new condition, they would add the laterality, then date, then cause, then answer the cause follow-up. They could add conditions in whatever order they decide to (rated, rated, new or new, rated, rated).  Path A considers having users enter new conditions on the same screen as rated, potentially using the autocomplete component, a dropdown or other solution. Path B separates this out onto another screen.

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcSqyqxofQLLnTqEjIzm7Awbf00jyAc-XajCiOQwLxLFEPevQZ6QBWsVzPNxoBkTUSGWprOyu_jJSBhzas2vhWBy-754F5uYvu__ic1Rep__b27DtFJUw9hUtIbsz_zThysBs_ABA?key=ooUGjDJixh3ORSAntFKdCYM_)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-19617\&t=NqPPpv7OZgNFaCxG-11)
*Path 3a Decision Tree*

Pros:

- More aligned with paper form. 

- Keeps everything within one “list and loop”. 

- Does not create hierarchy between new and CFI, centering the condition not the claim.

- A more straightforward approach to add follow-up questions in the future depending on the contention they are applying for.

- Reduces the number of pages/steps in the form compared to 3b.

Considerations:

- One proposed solution is to integrate the new condition Autocomplete component into the radio button, however it may break the one question per page principle.

  - In the engineering documentation, “[Expand under](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-getting-started-with-the-forms-li#VAFormsLibrary-GettingStartedwiththeFormsLibrary-Expandunderfields-DISCLAIMER-TRYNOTTOUSETHISANYMORE)” is not a recommended pattern because of accessibility challenges.

    - Although it is still an accepted pattern in the design documentation in some instances.

    - Displaying [information conditionally](https://design.va.gov/components/form/radio-button#conditionally-revealed-fields) is difficult for users and is not accessible.

  - It may be challenging to include all the content we are displaying now on the new Conditions page.

    - One consideration is that users with rated issues may have gone through this process in the past and may require less assistance when adding conditions. (Although they may have applied on paper forms or had someone else apply for them.)

- One proposed solution is a dropdown to select CFI, which may be more challenging to integrate Max CFI.


#### Option 3b CFI and New on different pages

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd25ura4FOL58VEhdj13ei3v0xAmoQvkniNVwe0EzgYoZQsHWomLVBaLQDKYbk72A4hYn5bTYM5mmQ5ZI0rgGmHzpTIE2UUp6LmwUjoSdnbt8tmYUCmyZQml6RsVTWb7yA51wSt?key=ooUGjDJixh3ORSAntFKdCYM_)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-19398\&t=NqPPpv7OZgNFaCxG-11)
*Path 3b Decision Tree*

Pros:

- Same pros as 3a compared to other flows:

  - More aligned with paper form. 

  - Keeps everything within one “list and loop”. 

  - Does not create a hierarchy between a new condition and CFI, centering on the condition, not on the claim.

  - A more straightforward approach to add follow-up questions in the future depending on the contention for which they are applying.

- Not having both a field to add rated disabilities **_and_** a field to add new conditions on the same page provides the following benefits:

  - Lower cognitive burden

  - Provides more flexibility to provide sufficient directions for both the rated disability field and the new conditions field

  - Simplifies required functionality (if decided on a different way to handle the 2 fields on 1 page then the radio with an “Expand Under“ input then the required functionality could be challenging).

  - More accessible, because it does not require “Expand Under”, and  because we saw that the Autocomplete alone is complex for Assistive Tech (AT) users.

Considerations:

- Adds an extra radio button page


### **Path 4: Free entry conditions entry first**

A fourth possible solution is to have Veterans begin by entering a condition, then either by manual indication or system detection, the Veteran would select if this was a previously rated or new condition. 

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc03GPxx6szJopMXGpJYsPoLhwEruX6YxvUjhm0z-HHphfMmBXfFnXHTUrsc5eSJX7cp_P33-ZJUvbwB1FK7BBdISEp2Y3GowqJZM7UD2mrgQ-Rqx3GHX94MqQZP5SpQxG6kmftzQ?key=ooUGjDJixh3ORSAntFKdCYM_)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=2133-20396\&t=NqPPpv7OZgNFaCxG-11)
*Path 4 Decision Tree*

Pros:

- Centers all conditions as one, moving the decision point of CFI/New from the initial entry.

- More aligned with the paper form.

Considerations:

- Does not display the known information upfront, requiring more generative action and places the cognitive burden upon the user.

  - Could explore changes to the Autocomplete dropdown - highlighting, or showing rated percentage within the component.

  - If CFIs are missed, it may require the user to fill out unnecessary information only required for new conditions.

  - We don’t have a way to identify related conditions to free-text input.

    - This is something that could be consulted with the AI office, to ease the application process by suggesting the user.


# Recommendation

We recommend continuing to explore the feasibility of the following for implementation:

- Path 2: One CFI at a time, before new, and 

- Path 3: Conditions first (Select or Enter)

**Next Steps**

- Consider the implications for supplemental claims for both paths.

- Complete designs detailing the path forward and gather feedback from stakeholders through the collaboration cycle.

- Ensure Maximum Claims for Increase (MAX CFI) implementation would work within this design framework.

- Collaborate with accessibility specialists and front-end engineers to validate technical feasibility and ensure WCAG compliance of wireframes.

- Conduct usability testing with Veterans to validate improvements in understanding, preference, and completion rates.

- Document pattern decisions for future reference and implementation by other teams.
