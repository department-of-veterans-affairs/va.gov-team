**Design Brief: Linking secondary claims**

Last updated Feb 7, 2025

Author: [Kyra Berman-Gestring](mailto:kyra.berman-gestring@agile6.com) <sudeeptibhatnagar@navapbc.com>


# Background

In step 2 of the conditions page on the 526-EZ form, Veterans add conditions to the claim for disability they are filing. When adding a new condition, users are asked a cause question and can select from four options.  The second option,  “My condition was caused by another service-connected disability I already have” allows them to indicate that the condition they are adding is a [secondary claim](https://www.va.gov/disability/how-to-file-claim/when-to-file/#:~:text=You%20can%20file%20a%20secondary,got%20while%20on%20active%20duty) (a new disability/condition that’s linked to a service-connected disability \[the Veteran] already has.) 

Currently, this is the only step where Veterans can indicate a secondary claim and they must have already submitted an [original claim](https://www.va.gov/disability/how-to-file-claim/when-to-file/#:~:text=You%20can%20file%20a%20secondary,got%20while%20on%20active%20duty) (first claim) to connect it to. Veterans cannot add a secondary claim first and then later go back and add the original condition. Additionally, currently Veterans can only link secondary claims to one original claim. For example, a Veteran might claim hypertension. In the “Cause” section, they may indicate that another service-connected disability caused it and are prompted to select a disability. However, hypertension could be caused by multiple conditions, but the system currently allows them to select only one. 

__![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeZ7Q3mZCv99gB0A3ernmoW2aDuPad2sORkeZF15a9jK6hZG9QLLbTNFjbaesVm-loLIE5g9SCD-nR74djdY2bgyf9AmSvrZpDiv1gzMuRtx9X4usT60VWwrw0n58MsXtEsKhaq?key=m4ro2s-q9484TOtbCvsEbYmh)__

\[Screenshot of the Cause Question of Step 2 of the 526-EZ Digital Form]

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf9l4gXHa8O5nWT43rFJCVDAaptyQRGLIvx1S_m-SflBNPLFEHwBtBMl8Hm71Bmf_ItEoHvfsrzGNydv4GJcglzwZahgKpQ2nPbmaNvd-ntrQ17sbfS1GzIVR4Jlw-1ppfCEGU3yA?key=m4ro2s-q9484TOtbCvsEbYmh)

\[Screenshot of the related disability selection box of Step 2 of the 526-EZ Digital Form]


# Problem statement

In the larger goal of giving Veterans more control over how they navigate the form and make it easier for Veterans to make corrections, we need to allow greater flexibility in how users enter secondary claims. 

To give Veterans more control of their claim we want to allow Veterans to link secondary claims to more than one related primary claims, but are still exploring policy implications.  

**Goals:**

- Explore how we can integrate multiple paths of completion for users who are claiming connected conditions.

  - Metric: Number of successful completions per each pathway.

- Allow users to connect multiple connected disabilities if policy allows.

  - Metric: Success rate of task requiring users to link multiple conditions. 


## User pain points

Currently, Veterans can add secondary claims only if they have already added the related primary claim. Additionally, they can only link a secondary claim to one related primary claim.This restricts the order Veterans can complete their form, which can cause instances of data loss or form abandonment as they are forced to repeat previously entered information in a specific order. 

- Users can only link one related primary claim. 

- Users have to enter connected claims hierarchically. 

  - They lose data if they cannot connect to a condition that is not previously entered. 

- The current state required hierarchy of claim flow may not be clear to users. 

The proposed improvements below arose from the recommendations and findings outlined in the [526 Shadowing Veteran Research Findings.](https://docs.google.com/document/d/1qb7mBq0L9sjYOSpLg_PuHgf0JSLGnj12IIucUZXdu5w/edit?tab=t.0) 

- Recommendations:

  - Give Veterans more control over how they move through the form.

  - Make it easy for Veterans to review their work and make corrections. 

- Findings: 

  - Veterans experience data loss if they decide to change the cause of their condition mid-flow. 

  - Currently the form only allows Veterans to select one rated disability as the cause for their secondary condition. 


# Design approach

 **Design goals:**

- [Explore 2 or more potential user journeys](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1150-56386\&t=3OC5g55MvRsv0VrR-1) that allow users to connect a condition not yet rated or entered.

- Explore 2 or more potential paths allowing users to link multiple connected conditions (if policy allows). 

- Consider content improvements to update/clarify instructions to align with available user interactions

  - Currently instructions imply they can only select rated condition as primary claim, but they can select a new condition being added as well.

  - Consider content updates to align with expanded user journey actions.   

- Iterate on Apple prototype to include selected explorations for testing. 

- Reuse designs and learnings from the Apple prototype study as well as the 526 [Shadowing Research](https://docs.google.com/document/d/1qb7mBq0L9sjYOSpLg_PuHgf0JSLGnj12IIucUZXdu5w/edit) study to provide a consistent and improved user experience.

**Non-goals:**

- PTSD, Toxic Exposure and POW questions are out of scope

- Additional disability questions (adaptive benefits, aid and attendance, unemployability) are out of scope

- Evidence gathering


# IA Iterations

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcfeqUbNxK0MiUJLL501ZSTwfgon-S0ijAq-9RZzC6Bh_jouhRUvTGLTPcR40zmokJd-9ZfjASVrIHrmJTosIksmEcLdUtli6nVlGtHf0Y9AEQ31Wd5XcFmbEdLLt6Ry5jt6FGGZg?key=m4ro2s-q9484TOtbCvsEbYmh)\[Screenshot of Option 1 User Journey Map of Secondary Conditions Flow Exploration]

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfmjvzBp4Hk7JdORukoFML5vgWRcp6zkNATpFPsUbffxB-uKUHYG4OqNWx-jDrw5X0hQcol-ZFJBfwcjrvqMhx-lSqi_uHxkMzQh49_Y6jUsMVpGbK5hE5m86O0AGaXRge2roWZrw?key=m4ro2s-q9484TOtbCvsEbYmh)

\[Screenshot of Option 2 User Journey Map of Secondary Conditions Flow Exploration]

\[[Figma File](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1230-43789\&t=06GEgRmjpsRfdhOI-1)]


# Stakeholder feedback

Met with Will and Tracy Tran to incorporate technical and accessibility considerations on ideations. E1, E2 flows were presented. We also discussed a third option, which would be to strictly make copy edits to hint text or other content.  \[[Meeting Notes](https://docs.google.com/document/d/1vtSqrV486HKXYynhjKm2qG20CgpTxog0QA8BHKNoUAg/edit?tab=t.0)]

**Recommendation:**

- Both stakeholders expressed preference for first flow, with feedback on modal and alert considerations. They reported that the second flow would be more confusing, and third option would have less impact but be easiest to implement. 

**Feedback on First flow:**

Technical Considerations:

- Will: “my condition is not listed” would always act like not a value, because if you clicked continue it would say “you need to enter a value” 

- Adding modal conditionally based on value- within React very possible, within multi page not sure - can add alert maybe modal. Would be worth investigating. 

- Can investigate if customizing the validation on the VA select instead of using an alert to use an error state. 

- Preference for alert over modal, VA doesn’t prefer modals, and is slightly more difficult to implement. 

Accessibility Considerations:

- Tracy prefers first flow, with the exception of the modal. 

- If we use modal, we would want to use a link not a button, in order to talk to the index.

  - May not have that option in modal.

**General considerations:**

General:

- Is it bad experience to throw an error when picking from list of choices given to them

Accessibility

- [VA Alert component](https://design.va.gov/storybook/?path=/story/uswds-va-alert--with-aria-role): yellow warning alert currently doesn’t announce/move focus currently and no design system timeline on fix. 

  - Decision: We chose to use this as it made the most sense for our use case, and would need to check during implementation if this bug has been fixed

- Multiple conditions having incomplete status could be confusing. We would need to look into how the focus loads. Would need to be fixed anyway because it is a bug. 

  - Could consider relocating alert to top of page, not within condition box to address focus issue. 

    - Would add more complexity to code. 

Technical

- If users click the back button to get back to enter the primary condition, would they lose all the data already entered? (Unknown)

- If the user changes the condition name when going back, does other data persist? (Unknown) 


# Recommendation

## Recommended Approach

To give Veterans more control over how they navigate the form, and provide an alternate path for correction we recommend pursuing a flow that allows Veterans who wish to link a secondary claim to a condition they have not yet entered through a checkbox that populates a redirect. Their data for the secondary condition they were in process of entering would persist, and have an incomplete status on the Review page. 

This flow also introduces the ability for Veterans to link multiple conditions to a secondary claim. With this iteration, Veterans can select multiple conditions from the checkboxes relevant to their secondary condition. They may provide context on how both relate to their secondary condition. Then once their application is submitted, adjudicators will determine which condition has more correlation and will be linked as the primary condition. This provides the claimant with more control over their application, as they can submit all relevant information.

[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf8AkvRfQTLJxnLIDNckQLKlKU4pppDaNUatkkZqVGJxk2LcKLua1nTkXc2XTT0fE4PdAeoCufmsuRaQgiNANOX_g9yPf7mfzRooeLKQl6vR2AYoTGfiuIE3EAlyNGZLIULrKrFtw?key=m4ro2s-q9484TOtbCvsEbYmh)](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1230-43789\&t=9ZQAbyJbTCWQCaeX-1)

\[Screenshot of Recommended Journey Map of Secondary Conditions Flow Exploration]

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaGRnoN4zJhU929gE0OlViY5zlmUPoN-8A38xT8DnTvOW6kZLgJ4kmLzwwXN-_IJyzMFhvMD5SZL3_isF7uLr7MANkhGF_qxw5NvqTV14QUuWiv4CwhR8w3viGTKy0sKCryY8zNQ?key=m4ro2s-q9484TOtbCvsEbYmh)

\[Screenshot of Wireframes of Secondary Conditions Flow Exploration]

\[[Figma File](https://www.figma.com/design/P6IUm8gN00H3Yi1XzN80fj/\(526ez\)-Condition-information-entry?node-id=1230-43789\&t=9ZQAbyJbTCWQCaeX-1)]


## Recommended Next Steps

**Continue design explorations considering:**

- Edge cases: Average number of conditions entered is 4.5 but users are allowed to enter up to 100.  How would the Details and Review page function in this scenario?

**Do further research on the technical feasibility of:** 

- Look into data loss when using the back button or changing the condition name. 

- Look into adding modal conditionally based on value. 

- Look into customizing the validation on the VA select instead of using an alert. 

- Populating \[formData] in alert message, links, etc. 

**Conduct User Research testing usability (with AT) including focus on:**

- Experience of warning redirection/suggestion

- Click on return link

- Use of checkboxes vs. current state

- Use of multi-selection

  - Understand what information Veterans provide in the description box when linking multiple-conditions. 

- Editing incomplete conditions from Review page

- Overall user experience of flow

**Copy/content updates:**

- We are employing a new pattern on plurality when Veterans can choose multiple selections. For these frames, we used disability(ies) and condition(s). This has been submitted for OCTO approval as part of the[ key terms index](https://github.com/department-of-veterans-affairs/va.gov-team/issues/101196). 

- Partner with CAIA on reviewing copy updates made throughout flow, with particular attention to the alert message. We want to ensure comprehension, follow established patterns and refine for brevity.
- Partner with CAIA on reviewing use of terminology for veteran comprehension of existing terms including: disability, service-connect disability, condition, and explore understanding of exploratory terms including: rated condition, rated disability, etc. 
  - This knowledge gap is referenced in [2021-11-30 Desk Research: Disability Compensation Claims (526EZ) Research with Veterans (https://community.max.gov/display/VAExternal/20221130-Desk+Research%3A+Disability+Compensation+Claims+%28526EZ%29+Research+with+Veterans)]
