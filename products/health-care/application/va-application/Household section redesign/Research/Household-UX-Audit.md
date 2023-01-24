# Household Info Form UX Audit

Following up on the [Household info design discovery suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Household%20info%20design%20discovery.pdf), the team deciced to take the opportunity to conduct a broader UX audit, rather than immediately start solutioning based on the suggestions.

This UX audit focuses on broader issues with the form design of the 10-10EZ overall, using the household info section as a representative cross-section. The expectation is that some of the design suggestions from the previous discovery, and from this audit, be applied to the 10-10EZ (and possibly 10-10CG) overall.

- [Household info section Mural board notes](https://app.mural.co/t/vsa8243/m/vsa8243/1652991806939/037e6432bb2e5d5975be35b35357ab151dc005b8?sender=u8a90be72499ecb4354e14700)

## Contents

[UX best practices](#ux-best-practices)

[Specific design patterns](#specific-design-patterns)

[Definitions](#definitions)

[Recent research](#recent-research)

[Recommendations and next steps](#recommendations-and-next-steps)

## UX best practices

There are a number of form UX best practices that could benefit the household information section, and possibly the 10-10EZ overall.

### Nielsen Norman Recommendations

The [Nielsen Norman Top 10 Form Usability Recommendations](https://www.nngroup.com/articles/web-form-design/) is a list of common form UX principles, some of which can be applied to the household information section of the 10-10EZ.

- **Keep it short**: "Remove fields which collect information that can be (a) derived in some other way, (b) collected more conveniently at a later date, or (c) simply omitted."
    - Although the fields themselves are mostly required, we can break up lengthy stretches of fields onto multiple pages to reduce form fatigue, and reduce cognitive load for parts of the form. For example, breaking the spousal information section into basic information, and additional conditional information that may require more fields on the page.

        <details>
            <summary>[Screenshot: Conditional spousal information]</summary>
           <img width="500" alt="image" src="https://user-images.githubusercontent.com/81988788/175577657-ca9514a5-7c0f-49b5-b140-370e3affe485.png">
        <details>

- **Visually group related fields**: "If your form asks about two different topics, section it into two separate groups of fields."
  - Similar to the idea of breaking up long stretches of fields across multiple pages, sections of fields with related topics can be broken up across multiple pages as well. For example, the Veteran's annual income fields are on the same page as their spouse's annual income fields, even though this information may require two separate tax forms.

    <details>
        <summary>[Screenshot: Veteran vs spouse annual income sections]</summary>
        <img width="912" alt="image" src="https://user-images.githubusercontent.com/81988788/175576805-a65dd9c9-a68f-4b88-944b-2c204c469bbe.png">
    <details>
- **Use logical sequencing**: "Stick to standard sequences both for fields and for value choices. But for field values, also consider usage frequency, and list the most common values first when possible."
  - In this case, the current order of onboarding information, and fields requesting information, doesn't neccessarily make sense. The household information sections begins with a lenghty content section about financials, but fincianl information fields don't show up until a few pages later. Financial fields should follow financial onboarding content.
- **Distinguish optional and required fields**: "First, eliminate as many optional fields as possible (see the first recommendation above). If some fields truly are necessary, but only apply to a subset of users, don’t make users find out through trial and error. Limit the form to only 1 or 2 optional fields, and clearly label them as optional."
  - The current VA design system requires all "required" fields to be marked, but this is an awkward UX and accessibility practice. Making this change will likely require research and full "design council" collaboration.

    <details>
    <summary>[Screnshot: VA form fields with required fields marked, versus AAA (insurance) form fields with optional fields marked]</summary>
    <img width="829" alt="image" src="https://user-images.githubusercontent.com/81988788/175565557-d0a5df60-3cbb-4a7e-860e-d5be5956cc50.png">
    </details>

- **Avoid *reset* or *clear* buttons**: "Provide a ‘Cancel’ button to support those users who abandon the form and want to delete their information. But make sure that the Cancel button has significantly less visual prominence than the Submit button, to avoid accidental clicks."
  - The dependents design pattern should allow Veterans to add and remove dependents as necessary, so it makes sense to give the the option to cancel the process of adding a new dependent.
  - At the point of review, just before submitting the application, there is no option to cancel and reset the process. A cancel button, with some form of confirmation, may be a useful UX addition.
        
### Other online forms
        
I checked a few other online healthcare and insurance applications and noted their features to get a better sense of common best practices relative to VA form design.
        
| Feature                              | Geico                                                     | Esurance                                                   | AAA                                                 | Kaiser Permanente           |
| ------------------------------------ | --------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------- | --------------------------- |
| Expandable sections                  | Yes - accordions; not editable in-line                    |                                                            |                                                     |                             |
| Onboarding content style             | Info pop-up modals, contextual sentences; simple labeling | Simple contextual sentences                                | Simple context;                                     |                             |
| Save/continue feedback               | None                                                      | Save and exit/continue button option; confirmation stepper |                                                     |                             |
| Notifications                        | On page info alerts                                       | Error info alerts; none on section completion              |                                                     |                             |
| Sub-stepper                          | Dynamic per-section stepper; no numbers                   | no                                                         | No                                                  |                             |
| Autofocus                            | Yes (some fields, radio, and checkboxes)                  | No                                                         | Yes, some fields                                    |                             |
| Pre-fill                             | Yes, from previous fields                                 | Yes                                                        | Yes; or pre-checked boxes                           | Yes, some fields            |
| Field constraints (visual and input) | Yes, from previous fields                                 |                                                            |                                                     |                             |
| Optional vs required                 | None - all required                                       | No "required" labels, some "optional" labels.              | No "required" labels; required appears contextually | Required (\*) fields marked |
| Placeholder text                     | Yes                                                       | Yes                                                        | Yes                                                 | Self                        |

## Specific design patterns

What are some existing VA design patterns that we can use to improve the household section?

### VA dependents design pattern
        
The dependents section of the household information flow can quickly become a souce of form fatigue, due to the large of numbers of fields and long scroll length. The collabsible input field "accordions" [present in the eBenefits flow](https://xd.adobe.com/view/0430be78-21b6-46e2-68b0-586c650d77c8-7201/screen/f0d37107-9854-4bf8-87ee-d7e6f8c973ce/) is an existing pattern than can be applied to the 10-10EZ.

<img width="1048" alt="image" src="https://user-images.githubusercontent.com/81988788/175615857-1755c3d6-218c-4b8f-9cd8-c47ab812a0e0.png">

### Sub-stepper design
        
I was unable to find a live example of a sub-stepper, and it seems that sub-steppers are not normally utilized owing to the potential complications associated with dynamic forms. Most forms use a stepper for clearly defined sections of the form, with a set number of questions associated with that section. For example, the Esurance form section progress bar:

<img width="872" alt="image" src="https://user-images.githubusercontent.com/81988788/175977350-aa32b5b8-86c8-4569-8525-d812838df411.png">

There are some possible solutions for a sub-stepper in a dynamic form, but these are not ideal. This possible solution is pulled from UX Stack Exchange:

<img width="666" alt="image" src="https://user-images.githubusercontent.com/81988788/175982758-e018994e-32c8-4d2e-b499-98eaa52bc3df.png">
        
## Definitions

Previous research indicates that Veterans filling out the household information section may have questions about certain terms, for example "dependents". These are additional terms that Veteran's may also want defined, though we will need to validate any terms with a usability study.

| Term                       | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Where can I find this info?                                                                                                                              | First draft plain language                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Dependents                 | [See VA.gov's own definition of dependent](https://www.va.gov/view-change-dependents/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Provided by the Veteran.                                                                                                                                 | Your children or some other relative that you are supporting financially, including your spouse.                                        |
| Net annual income          | "Net income (NI), also called net earnings, is calculated as sales minus cost of goods sold, selling, general and administrative expenses, operating expenses, depreciation, interest, taxes, and other expenses." - [Investopedia definitio](https://www.investopedia.com/terms/n/netincome.asp)n                                                                                                                                                                                                                                                                                                                                                               | Not necessarily explicitly called out on common forms like the 1040, but is usually found by subtracting your total tax from your total taxable inccome. | Your income after you subtract taxes or any other valid expenses that reduce your total income.                                         |
| Gross annual income        | "The Internal Revenue Code defines gross income as income from whatever source derived, including (but not limited to) “compensation for services,<br>including fees, commissions, fringe benefits, and similar items" - ([IRS definition pdf](https://www.irs.gov/pub/irs-drop/rr-07-19.pdf))                                                                                                                                                                                                                                                                                                                                                                   | W2, 1040, 1099, or other tax or financial forms that list your gross income.                                                                             | Your income before you subtract taxes or any other valid expenses that reduce your total income.                                        |
| Expenses                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Provided by the Veteran.                                                                                                                                 | These are the things you spend your income on, including a mortgage, rent, food, bills, etc.                                            |
| Medical expenses           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Provided by the Veteran.                                                                                                                                 | Any spending on health care services not covered by the VA or other insurance.                                                          |
| Deductible expenses        | A deductible for taxes is an expense that a taxpayer or business can subtract from adjusted gross income, which reduces their income, thereby reducing the overall tax they need to pay. ([Investopedia definition](https://www.investopedia.com/terms/d/deductible.asp#:~:text=Key%20Takeaways,tax%20they%20need%20to%20pay.))                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                          | Any expenses that count towards decreasing your net income.                                                                             |
| Funeral or burial expenses |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Provided by the Veteran.                                                                                                                                 | Any expenses associated with the funeral or burial of a family member.                                                                  |
| Education expenses         | "Qualified expenses are amounts paid for tuition, fees and other related expense for an eligible student that are required for enrollment or attendance at an eligible educational institution. Eligible expenses also include student activity fees you are required to pay to enroll or attend the school. For example, an activity fee that all students are required to pay to fund all on-campus student organizations and activities." ([IRS definition](https://www.irs.gov/credits-deductions/individuals/qualified-ed-expenses)) ([VA's list of education benefits](https://www.va.gov/resources/how-va-education-benefit-payments-affect-your-taxes/)) | Provided by the Veteran.                                                                                                                                 | These are things you have to spend money on to further your education. This includes things like books, tuition, and other course fees. |

## Recent research
        
The recent [10-10EZ short-form usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Short%20form%20usability-June%202022/research-findings.md) yielded some findings relevent to the household information section.
        
- P8's response to the household info section:
    - Had some questions about the financial onboarding information; how recent counts as "recently discharged"
    - Expected an input field on selecting "yes" to financial disclosure; lots of onboarding, but no financial fields right after onboarding
    - Dependent's birth date vs when they became an official VA dependent: wasn't sure when an document or official process made his dependent a dependent
    - Wasn't sure about "Veteran's other income": what counts towards that total amount?; "Never really understood what the VA considers an 'income'"
    - Spouse doesn't use VA, so some fields asking to include spousal information seeemed confusing, because spouse doesn't factor into VA financials

## Recommendations and next steps

- Consider incorporating the Nielsen Norman form UX recommendations in the household info section
    - Design a wire flow that incorporates these recommendations, focusing on:
        - Breaking up long sections of fields and information into less fatiguing stretches
        - Rearranging question order so that financial onboarding inforation is closer to financial fields
        - Incorporating lofi versions of expandable input field accordions, and a initial alternative to a sub-progress bar design
- Consider updating the definitions of financial terms, incorporating in-context expandable info alerts where appropriate
- Consider updating financial field labeling to reflect new definitions
- Consider updating the design of the expandable input field accordion to incorporate common UX practices (work started in [42077](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42077))
    - Propose the design changes via the collab cycle and official design council review
- Consider an alternative to a sub-stepper progress bar: static numbering (ie. "Question 1") without context may help, and avoid the issues created by dynamic elements of the forms
- Consider moving to marking "optional" fields only, instead of every "required" field
- Consider research/discovery into which terms need to be defined (recent short-form [usability study](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Short%20form%20usability-June%202022/research-findings.md) may provide more insight)
- Consider how to apply these recommendations to other parts of the 1010EZ/CG, including addtional considerations:
    - Provide a "cancel" button or equivalent to reset an application before submission

