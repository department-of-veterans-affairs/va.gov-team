# Field rules

Last updated by @tygindraux: January 2, 2024

This document is for our design team to communicate field rules. The primary audience is engineering and product folks on our team.

**Jump to:**
- [Gender identity](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#gender-identity)
- [Pronouns](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#pronouns)
- [Social security number or service number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#social-security-number-or-service-number)
- [Date of birth](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#date-of-birth)
- [Branch of service](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#branch-of-service)
- [DoD/EDIPI number](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#dodedipi-number)
- [School fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#school-fields)
- [Medical facility](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#medical-facility)
- [Contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#when-contact-options-are-enableddisabled)
- [Tell us the reason you're contacting us](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md#tell-us-the-reason-youre-contacting-us)

## `Gender identity`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require submitter's `Gender identity` in `Chapter 3`||

- Submitter can be the Veteran, a family member, or another third party.

## `Pronouns`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require submitter's and whomever the inquiry is about's `Pronouns` in `Chapter 3`||

- Submitter can be the Veteran, a family member, or another third party.
- Who the inquiry is about can be the Veteran or a family member.

## `Social security number` or `Service number`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Social Security Number or Service Number` in `Chapter 3`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Social Security Number or Service Number` in `Chapter 3`|Relationship to the Veteran = Business relationship|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Social Security Number or Service Number` in `Chapter 3` if |`What's your question about` = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Social Security Number or Service Number` in `Chapter 3`|`What's your question about` = `It's a general question`|

## `Date of birth`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Date of Birth` in `Chapter 3`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Date of Birth` in `Chapter 3`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Date of Birth` in `Chapter 3`|`What's your question about` = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Date of Birth` in `Chapter 3`|`What's your question about` = `It's a general question`|

## `Branch of service`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Require Veteran's `Branch of Service` in `Chapter 3`|`What's your question about` = `It's a general question`|

* While this data is in MPI, agents are not able to look this up using their MPI search tool in the CRM.

## `DoD/EDIPI number`
* This field will be removed from the form because agents can look this up in MPI using first and last name, and DOB or SSN – all of which will be required.

## School fields
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and relationship to the Veteran = Personal (eg. GI Bill Beneficiary)|Require `State of school` or `State of residency`||
|Category = `Education benefits and work study` and relationship to the Veteran = Business (eg. SCO)|Require `State of school` or `School facility`||
|All other categories|Don't include school fields||

## `Medical facility`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Health care` and topic = `Prosthetics` `Audiology and hearing aids` `Getting care at a local VA medical center`|Require `Medical facility`||
|Category = `Health care` and topic = all other topics|Don't include medical facility||
|Category = `Debt` and topic = `Health care copay debt`|Require `Medical facility`||
|Category = `Debt` and topic ≠ `Health care copay detb`|Don't include `Medical facility`||
|All other categories|Don't include `Medical facility`||

## When contact options are enabled/disabled
* Review [List of contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/List%20of%20contact%20options.md)

## Tell us the reason you're contacting us

* This field is required. We're currently exploring whether we can recommend it for removal.
