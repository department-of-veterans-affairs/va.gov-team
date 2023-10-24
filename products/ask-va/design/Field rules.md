# Field rules

Last updated by @tygindraux: October 23, 2023

This document is for our design team to communicate field rules to our engineering and product folks.

**Jump to:**
- [Gender identity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#gender-identity)
- [Pronouns](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#pronouns)
- [Social security number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#social-security-number)
- [Date of birth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#date-of-birth)
- [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)
- [DoD/EDIPI number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#dodedipi-number)
- [Contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#when-contact-options-are-enableddisabled)

## `Gender identity`
|If|Then|
|:--|:--|
|[all categories]|Display `Gender identity` component (*Required) for `Submitter` in `Chapter 4 of 5: Personal information`|

- Submitter can be the Veteran, dependent, or a third party, depending on how they answer `Who are you asking a question for?` and/or `Are you the Veteran?` and/or `Are you the dependent?`
- **Update 10/23:** We recommend that this field is removed. This document will be updated once the decision is final.

## `Pronouns`
|If|Then|
|:--|:--|
|[all categories]|Display `Pronouns` component (*Required) for `Submitter` **and** `Who the inquiry is about` in `Chapter 4 of 5: Personal information`|

* Submitter can be the Veteran, dependent, or a third party, depending on how they answer `Who are you asking a question for?` and/or `Are you the Veteran?` and/or `Are you the dependent?`
* Who the inquiry is about can be the Veteran or dependent, depending on how they answer `Who are you asking a question for?` and/or `Are you the Veteran?` and/or `Are you the dependent?`

## `Social security number`
|If|Then|Unless|
|:--|:--|:--|
|[all categories] except `Education benefits and work study`|Display `Social Security Number or Service Number` component (*Required) in `Veteran information` in `Chapter 4 of 5: Personal information`|`Who are you asking a question for?` = `A general question`|
|`Education benefits and work study`|Display text input for `Social Security Number or Service Number` component (*Required) in `Contact information` in `Chapter 4 of 5: Personal information`|`Relationship to the Veteran` = `Business relationship`|

## `Date of birth`
|If|Then|
|:--|:--|
|[all categories except Education]|Display text input for `Date of Birth` (*Required) in `Veteran information` in `Chapter 4 of 5: Personal information`|

* **Unless** `Who are you asking a question for?` = `A general question`
* **Update 10/23:** We are still confirming whether this field should be excluded from the education category. This document will be updated once the decision is final.

## `Branch of service`
|If|Then|
|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Display select menu for `Branch of Service` (**Required) in `Veteran information` in `Chapter 4 of 5: Personal information`|

* **Unless** `Who are you asking a question for?` = `A general question`
* Agents are not able to look this up using the current MPI search tool in CRM, but this data **is** apparently in MPI.
* We will do additional research with submitters to confirm they always know their or their Veteran's `Branch of Service`.

## `DoD/EDIPI number`
* This field will be removed from the form because agents can look this up in MPI using first and last name, and DOB or SSN – all of which will be required.

## When contact options are enabled/disabled
* Review [List of contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)
