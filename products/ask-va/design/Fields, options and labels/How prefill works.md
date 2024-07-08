# How prefill works

Last updated by @tygindraux: July 8, 2024

**Jump to:**
  - [Initial prefill pattern](#initial-prefill-pattern)
  - [Additional prefill within the form](#additional-prefill-within-the-form)

## Initial prefill pattern

After an authenticated submitter clicks `Ask a new question`, the next page is `Personal information`. This uses [a VA.gov Design System pattern](https://design.va.gov/patterns/help-users-to/know-how-their-information-is-updated#communicate-information-that-is-on-file) which is used to communicate information that is on file.

On this page, we'll reflect the submitter's:

- `First name`
- `Last name`
- `DOB`
- `SSN`

These identifiers will be pulled from VA Profile. The submitter is not able to edit them directly in the form or even from their profile.

### If any information is missing from their profile

If we're missing any of these identifiers (`First name`, `Last name`, `DOB`, `SSN`), we will **skip** the initial prefill pattern.

Instead, the submitter will go directly to the category page, and so on. They will see the `Tell us about yourself` page within the form,  

## Additional prefill within the form

Text
