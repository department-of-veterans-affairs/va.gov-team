# How prefill works

Last updated by @tygindraux: April 28, 2025

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

These identifiers are pulled from their identity credential. The submitter is not able to edit them directly in the form or even from their profile.

![Prefill-pattern-example-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-1.png)

### If any information is missing from their profile

It's possible that a user is missing one or more of these identifiers
- First name
- DOB
- SSN

This is because first name is not necessarily required, although last name is required. Also, for some credentials, birth month/year is required but not necessarily birth date. And for certain credentials, some out of country users will have an alternate identifier to a SSN.

If a user is missing any of these identifiers (first name, last name, DOB or SSN), we **skip** the initial prefill pattern.

Instead, the submitter will go directly to the category page, and so on. Then, the `Tell us about yourself` page will appear within the form, similar to an unauthenticated flow. But, we will prefill whichever information we **do** have on file from their identity credential.

For example, let's say we find that a submitter's date of birth is not available from their identity credential. We will:
- Skip the `Personal information` page (with the initial prefill pattern)
- Include the `Tell us about yourself` page
   - Prefill their `First name`, `Last name` and `SSN` on this page

The submitter will be responsible for filling in the missing information, their date of birth in this case.

![Prefill-pattern-example-2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-2.png)

## Additional prefill within the form

There's additional prefill that happens within the form when it's available. These are the additional fields that we prefill:

|Page|Field|Prefill source|
|:--|:--|:--|
|Branch of service|`Branch of service`|VA.gov Profile|
|Your contact information|Personal `Phone number`|Home phone number in VA.gov Profile|
|Your contact information|Personal `Email address`|Contact email in VA.gov Profile|
|Your contact information|Business `Phone number`|Work phone number in VA.gov Profile|
|Your contact information|Business `Email address`|Business email in AVA Profile|
|Your mailing address|`Country`|Mailing address in VA.gov Profile|
|Your mailing address|`Street address`|Mailing address in VA.gov Profile|
|Your mailing address|`Apartment or unit number`|Mailing address in VA.gov Profile|
|Your mailing address|`Street address 2`|Mailing address in VA.gov Profile|
|Your mailing address|`Street address 3`|Mailing address in VA.gov Profile|
|Your mailing address|`City`|Mailing address in VA.gov Profile|
|Your mailing address|`State`|Mailing address in VA.gov Profile|
|Your mailing address|`Postal code`|Mailing address in VA.gov Profile|
|Your location of residence|`State/Province/Region`|Mailing address in VA.gov Profile|
|Your postal code|`Postal code`|Mailing address in VA.gov Profile|
|School information|`School facility`|School facility in AVA Profile|

Note: Additional information about how we source from [VA Profile](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-profile).

In these cases, we **don't** use the `Initial prefill pattern`. The respective pages appear with information pre-filled. 

![Prefill-pattern-example-3](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-3.png)

## Unauthenticated experience

If a submitter is not authenticated, their information won't be prefilled.
