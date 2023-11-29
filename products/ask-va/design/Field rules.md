# Field rules

Last updated by @tygindraux: November 29, 2023

This document is for our design team to communicate field rules to our engineering and product folks.

**Jump to:**
- [Gender identity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#gender-identity)
- [Pronouns](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#pronouns)
- [Social security number or service number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#social-security-number-or-service-number)
- [Date of birth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#date-of-birth)
- [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)
- [DoD/EDIPI number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#dodedipi-number)
- [Contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#when-contact-options-are-enableddisabled)
- [School fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#school-fields)
- [Medical facility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#medical-facility)

## `Gender identity`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require `Gender identity` in `Chapter 3` for the submitter||

- Submitter can be the Veteran, a family member, or another third party.
- **Update 10/23:** We recommend that this field is removed. This document will be updated once the decision is final.

## `Pronouns`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require `Pronouns` in `Chapter 3` for the submitter **and** whomever the inquiry is about||

- Submitter can be the Veteran, a family member, or another third party.
- Who the inquiry is about can be the Veteran or a family member.

## `Social security number` or `Service number`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require `Social Security Number or Service Number` in `Chapter 3`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require `Social Security Number or Service Number` in `Chapter 3`|Relationship to the Veteran = Business relationship|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require `Social Security Number or Service Number` in `Chapter 3`|`What's your question about` = `It's a general question`|

## `Date of birth`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Display text input for `Date of Birth` (*Required) in `Contact information` in `Chapter 4 of 5: Contact information`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Display text input for `Date of Birth` (*Required) in `Contact information` in `Chapter 4 of 5: Contact information`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Display text input for `Date of Birth` (*Required) in `Veteran information` in `Chapter 4 of 5: Personal information`|`Who are you asking a question for?` = `A general question`|

## `Branch of service`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Display select menu for `Branch of Service` (**Required) in `Veteran information` in `Chapter 4 of 5: Personal information`|`Who are you asking a question for?` = `A general question`|

* While agents are not able to look this up using their MPI search tool in the CRM, this data **is** in MPI.

## `DoD/EDIPI number`
* This field will be removed from the form because agents can look this up in MPI using first and last name, and DOB or SSN – all of which will be required.

## When contact options are enabled/disabled
* Review [List of contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)

## School fields
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and relationship to the Veteran = Personal (eg. GI Bill Beneficiary)|Require `State of school`||
|Category = `Education benefits and work study` and relationship to the Veteran = Personal (eg. GI Bill Beneficiary)|Require `State of residency`||
|Category = `Education benefits and work study` and relationship to the Veteran = Business (eg. SCO)|Require `State of school`||
|Category = `Education benefits and work study` and relationship to the Veteran = Business (eg. SCO)|Require `School facility`||

## Medical facility
|If|Then|Unless|
|:--|:--|:--|
|Category = `Health care` and topic = `Prosthetics` `Audiology and hearing aids` `Getting care at a local VA medical center`|Require `Medical facility`|
|Category = `Debt` and topic = `Health care copay debt`|Require `Medical facility`|
