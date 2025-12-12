

# Design

## Audit results 10/20/2025

| Form                                   | Category              | Component/Item              | Location         | Issue/Notes                                                                                                                                                                                                 | Status 1       | Status 2   | Reference | Flag | Extra Notes                  |
|----------------------------------------|-----------------------|-----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|------------|-----------|------|------------------------------|
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Start your application link | Intro           | Using the wrong component                                                                                                                                                                                  | ❌ Not done     | ✅ Done    | None      | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Back / Continue Buttons     | Global          | Back/continue buttons not va components.                                                                                                                                                                   | ❌ Not done     | ✅ Done    | Slack 🧵   | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Statement of truth component| Review and submit| Signature Component                                                                                                                                                                                        | ❌ Not done     | Not needed | #94350    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Text area component         | ?               | Form uses a native textarea element not a va-textarea element                                                                                                                                              | ❌ Not done     | Not needed | #94349    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | VA date component           | ?               | The form uses native elements to produce an imposter date component                                                                                                                                        | ❌ Not done     | Not needed | #94348    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Text input component        | "Several"       | At several places in the form the inputs are not rendered using the DST va-text-input component                                                                                                            | ❌ Not done     | Not needed | #94347    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | VA radio component          | "Several"       | At several places in the form the radio components are not rendered using the DST va-radio web component                                                                                                   | ❌ Not done     | Not needed | #94346    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Pending Content Edits | Form labels / Error Messages| "Several"       | Missing Punctuation at end of some questions                                                                                                                                                               | ❌ Not done     | ⬜ To do   | #94360    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Pending Content Edits | Body text                   | Intro           | Extraneous comma use in submission screen                                                                                                                                                                  | ❌ Not done     | ⬜ To do   | #94358    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Pending Content Edits | Body text                   | Intro           | Misplaced punctuation in introductory paragraph                                                                                                                                                            | ❌ Not done     | ⬜ To do   | #94357    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Pending Content Edits | Body text                   | Intro           | Improper use of em dash in introductory paragraph                                                                                                                                                          | ❌ Not done     | ⬜ To do   | #94356    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Imposter Components   | Memorable date              | ?               | Design components and patterns in use are outdated: The DOB is the regular date input. We now have a memorable date option which is better for things like DOB.                                            | ❌ Not done     | ⬜ To do   | #60737    | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Minimal Header        | Minimal header              | Global          | Minimal heading requires implementation                                                                                                                                                                    | ❌ Not done     | ✅ Done    | –         | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | v3 components         | Multiple                    | Global          | Entire form needs to be audited and updated with v3 components                                                                                                                                            | ❌ Not done     | ✅ Done    | –         | No   |                              |
| VA Form 21-10210 Lay/Witness Statement | Documentation Updates | Text styling                | Intro           | Design: Figma needs to be updated with standard text treatments in the form Introduction page. (First paragraph is not using Body/Intro/Regular or Body/Intro/Mobile for the text size). Code: Form Introduction page, first paragraph is not using va-introtext css class | ❌ Not done     | ❌ Not done | –         | No   | Documentation Updates Needed |



## Aditional tasks

Update Figma content across fiftyscreens, supporting four user flows

[Components and pattern standards] Design components and patterns in use are outdated. (04.08.1) [#60737](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94357)

Staging Review finding: Missing punctuation at the end of some questions [#94360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94360)
> Some questions, for example the follow-up question if a user marks "another relationship not listed here" to describe their relationship with the veteran, do not have punctuation, but are complete sentences and should have appropriate punctuation marks. Another instance of this occurs on step 3 of 8, when asked "tell us about the claimed issue that you're addressing on behalf of the Veteran."
> Recommended action: Add terminal punctuation to any such questions

Staging Review finding: Extraneous comma use in submission screen [#94358](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94358)
> The note above the statement of truth contain excessive comma usage. (Note: According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information (Reference: 18 U.S.C. 1001).) 
> Recommended action: There are a few ways to fix this. The easiest is probably to remove the comma after "federal law"

Staging Review finding: Use va-radio web components not native html elements [#94346](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94346#issue-2566774219)
> At several places in the form the radio components are not rendered using the DST va-radio web component


Staging Review finding: Use va-text-input web component not native html input elements [#94347](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94347#issue-2566774275)
> At several places in the form the inputs are not rendered using the DST va-text-input component


Staging Review finding: Use the va-date component not native html elements [#94348](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94348#issue-2566774326)
>The form uses native elements to produce an imposter date component


Staging Review finding: Use the va-textarea web component not native html element [#94349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94349#issue-2566774375)
> The form uses a native textarea element not a va-textarea element


<br />

### Collaboration Cycle for VA Forms Team, Form 21-10210 Lay/Witness Statement 55260

[Components and pattern standards] Design components and patterns in use are outdated. (04.08.1) [#60737](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60737)
> Design components and patterns in use are outdated. The DOB is the regular date input. We now have a memorable date option which is better for things like DOB.

3 Audit current security controls [#495](https://github.com/department-of-veterans-affairs/va.gov-team/issues/495)