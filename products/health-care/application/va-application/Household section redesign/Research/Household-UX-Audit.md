[IN PROGRESS]

# Household Info Form UX Audit

Following up on the [Household info design discovery suggestions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/research/Household%20info%20design%20discovery.pdf), the team deciced to take the opportunity to conduct a broader UX audit, rather than immediately start solutioning based on the suggestions.

This UX audit focuses on broader issues with the form design of the 10-10EZ overall, using the household info section as a representative cross-section. The expectation is that some of the design suggestions from the previous discovery, and from this audit, be applied to the 10-10EZ (and possibly 10-10CG) overall.

- [Household info section Mural board notes](https://app.mural.co/t/vsa8243/m/vsa8243/1652991806939/037e6432bb2e5d5975be35b35357ab151dc005b8?sender=u8a90be72499ecb4354e14700)

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

## Existing VA design patterns

What are some existing VA design patterns that we can use to improve the household section?

### Dependents design pattern
        
The dependents section of the household information flow can quickly become a souce of form fatigue, due to the large of numbers of fields and long scroll length. The collabsible input field "accordions" [present in the eBenefits flow](https://xd.adobe.com/view/0430be78-21b6-46e2-68b0-586c650d77c8-7201/screen/f0d37107-9854-4bf8-87ee-d7e6f8c973ce/) is an existing pattern than can be applied to the 10-10EZ.

<img width="1048" alt="image" src="https://user-images.githubusercontent.com/81988788/175615857-1755c3d6-218c-4b8f-9cd8-c47ab812a0e0.png">
        
## Definitions

## Household info wire flow
