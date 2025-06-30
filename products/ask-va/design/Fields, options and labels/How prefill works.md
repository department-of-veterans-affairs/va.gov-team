# How prefill works

Last updated by @beckyphung: June 30, 2025

**Jump to:**
  - [Initial prefill pattern](#initial-prefill-pattern)
  - [Additional prefill within the form](#additional-prefill-within-the-form)
  - [Unauthenticated experience](#unauthenticated-experience)

## Initial prefill pattern

After an authenticated submitter clicks `Ask a new question`, the next page is `Your personal information`. It lets a submitter skip reviewing this information later on in the form.

This currently uses [a VA.gov Design System initial prefill pattern](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated#communicate-information-that-is-on-file) which is used to communicate information that is on file. This pattern is deprecated. We'll update the page to use the [new VA.gov Design system pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled) in the future.

On this page, we display the submitter's:
- `First name`
- `Last name`
- `Date of birth (DOB)`
- `Social Security Number (SSN)`

These identifiers are pulled from their identity credential. The submitter can't edit them directly in the form or even from their profile.

![Prefill-pattern-example-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/07-2024-Prefill-pattern-example-1.png)

### If any information is missing from their profile

It's possible that a user is missing one or more of these identifiers
- First name
   - First name is not necessarily required, although last name is required.
- DOB
   - Also, for some credentials, birth month/year is required but not necessarily birth date. 
- SSN
   - And for certain credentials, some out of country users will have an alternate identifier to a SSN.

If a user is missing any of these identifiers (first name, last name, DOB or SSN), we will still display the `Your personal information` page and allow the submitter to submit the form without these identifiers. This is because the user will still be signed in with an LOA3 account, which means we can trust that they are identify verified already. Learn more about authentication [in this VA.gov platform page](https://depo-platform-documentation.scrollhelp.site/developer-docs/authentication).

You can view the different content variations [in this Figma page](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=7189-69325).

<img width="500" alt="Screenshot of two content variations where identifiers are missing." src="https://github.com/user-attachments/assets/4d7df1ba-7985-45ab-b668-9d30c77ef31e" />

## Additional prefill within the form

There's additional prefill that happens within the form when it's available. These are the additional fields that we prefill:

|Page|Field|Prefill source|
|:--|:--|:--|
|Branch of service|`Branch of service`|VA.gov Profile|
|Your contact information|Personal `Phone number`|Home phone number in VA.gov Profile|
|Your contact information|Personal `Email address`|Contact email in VA.gov Profile|
|Your contact information|Business `Phone number`|Work phone number in VA.gov Profile|
|Your contact information|Business `Email address`|Business email in Ask VA (AVA) Profile. <br> **Note:** AVA Profile refers to user data that the Ask VA CRM saves and displays to the user. Most of the data is now pulled from the VA.gov profile.|
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
