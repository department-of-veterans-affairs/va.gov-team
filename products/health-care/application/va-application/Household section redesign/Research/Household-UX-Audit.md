[IN PROGRESS]

# Household Info Form UX Audit

Following up on the [Household info design discovery suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Household%20info%20design%20discovery.pdf), the team deciced to take the opportunity to conduct a broader UX audit, rather than immediately start solutioning based on the suggestions.

This UX audit focuses on broader issues with the form design of the 10-10EZ overall, using the household info section as a representative cross-section. The expectation is that some of the design suggestions from the previous discovery, and from this audit, be applied to the 10-10EZ (and possibly 10-10CG) overall.

## Contents

[UX best practices]()

[Existing VA design patterns]()

[Definitions]()

[Household info wire flow]()

## UX best practices

There are a number of form UX best practices that could benefit the household information section, and possibly the 10-10EZ overall.

### Nielsen Norman Recommendations

The [Nielsen Norman Top 10 Form Usability Recommendations](https://www.nngroup.com/articles/web-form-design/) is a list of common form UX principles, some of which can be applied to the household information section of the 10-10EZ.

- **Keep it short**: "Remove fields which collect information that can be (a) derived in some other way, (b) collected more conveniently at a later date, or (c) simply omitted."
    - Although the fields themselves are mostly required, we can break up lengthy stretches of fields onto multiple pages to reduce form fatigue, and reduce cognitive load for parts of the form.

- **Visually group related fields**: "If your form asks about two different topics, section it into two separate groups of fields."
  - Similar to the idea of breaking up long stretches of fields across multiple pages, sections of fields with related topics can be broken up across multiple pages as well. For example, the Veteran's annual income fields are on the same page as their spouse's annual income fields, even though this information may require two separate tax forms.
- **Use logical sequencing**: "Stick to standard sequences both for fields and for value choices. But for field values, also consider usage frequency, and list the most common values first when possible."
  - In this case, the current order of onboarding information, and fields requesting information, doesn't neccessarily make sense. The household information sections begins with a lenghty content section about financials, but fincianl information fields don't show up until a few pages later. Financial fields should follow financial onboarding content.
- **Distinguish optional and required fields**: "First, eliminate as many optional fields as possible (see the first recommendation above). If some fields truly are necessary, but only apply to a subset of users, don’t make users find out through trial and error. Limit the form to only 1 or 2 optional fields, and clearly label them as optional."
  - The current VA design system requires all "required" fields to be marked, but this is an awkward UX and accessibility practice. Making this change will likely require research and full "design council" collaboration.

    <details>
    <summary>[Screnshot: VA form fields with required fields marked, versus AAA (insurance) form fields with optional fields marked]</summary>
    <img width="829" alt="image" src="https://user-images.githubusercontent.com/81988788/175565557-d0a5df60-3cbb-4a7e-860e-d5be5956cc50.png">
    </details>

- **Avoid *reset* or *clear* buttons**: "Provide a ‘Cancel’ button to support those users who abandon the form and want to delete their information. But make sure that the Cancel button has significantly less visual prominence than the Submit button, to avoid accidental clicks."
  - At the point of review, just before submitting the application, there is no option to cancel and reset the process. A cancel button, with some form of confirmation, may be a useful UX addition.

### VA Design System recommendations

Parts of the household information section, and 10-10EZ overall, can still benefit from alignement with the VA Design System.

[neccessary?]

## Existing VA design patterns

## Definitions

## Household info wire flow
