# How prefill works

Last updated by @tygindraux: July 8, 2024

**Jump to:**
  - [Initial prefill pattern](#initial-prefill-pattern)
  - [Additional prefill within the form](#additional-prefill-within-the-form)
  - [Unauthenticated experience](#unauthenticated-experience)

## Initial prefill pattern

After an authenticated submitter clicks `Ask a new question`, the next page is `Personal information`. This uses [a VA.gov Design System initial prefill pattern](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated#communicate-information-that-is-on-file) which is used to communicate information that is on file. It lets a submitter skip reviewing this information later on in the form.

On this page, we'll reflect the submitter's:

- `First name`
- `Last name`
- `DOB`
- `SSN`

These identifiers will be pulled from VA Profile. The submitter is not able to edit them directly in the form or even from their profile.

![Prefill-pattern-example-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-1.png)

### If any information is missing from their profile

However, if their VA Profile is missing any of these identifiers (`First name`, `Last name`, `DOB`, `SSN`), we will **skip** the initial prefill pattern.

Instead, the submitter will go directly to the category page, and so on. Then, the `Tell us about yourself` page will appear within the form, similar to an unauthenticated flow. But, we will prefill whichever information we **do** have on file from their VA Profile.

For example, let's say we find that a submitter's date of birth is not saved in their VA Profile. We will:
- Skip the `Personal information` page (with the initial prefill pattern)
- Include the `Tell us about yourself` page
   - Prefill their `First name`, `Last name` and `SSN` on this page

The submitter will be responsible for filling in the missing information, their date of birth in this case.

![Prefill-pattern-example-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-2.png)

## Additional prefill within the form

There's additional prefill that happens within the form when it's available. This includes prefilling:

|Page|Prefill source|
|:--|:--|
|`Your contact information`|VA Profile|
|`Your mailing address`|VA Profile|
|`Your location of residence`|VA Profile|
|`Your postal code`|VA Profile|
|`School information`|AVA Profile|

In these cases, we **don't** use the `Initial prefill pattern`. The respective pages appear with information pre-filled. 

![Prefill-pattern-example-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-3.png)

## Unauthenticated experience

If a submitter is not authenticated, their information won't be prefilled.
