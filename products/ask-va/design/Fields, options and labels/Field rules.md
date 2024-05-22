# Field rules

Last updated by @tygindraux: May 21, 2024

This document is for our design team to communicate field rules. The primary audience is engineering and product folks on our team.

**Jump to:**
- [Gender](#gender)
- [Pronouns](#pronouns)
- [Preferred name](#preferred-name)
- [Social security number or service number](#social-security-number-or-service-number)
- [Date of birth](#date-of-birth)
- [Branch of service](#branch-of-service)
- [DoD/EDIPI number](#dodedipi-number)
- [Location and postal code](#location-and-postal-code)
- [School fields](#school-fields)
- [Medical facility](#medical-facility)
- [Contact options](#when-contact-options-are-enableddisabled)
- [Reason you're contacting us](#reason-youre-contacting-us)

## `Gender`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require Veteran's `Gender identity`||

## `Pronouns`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Require `Pronouns` for whomever the inquiry is about||

- Who the inquiry is about can be the Veteran or a family member.
- We will only ask for the pronouns of the subject of the inquiry if they are not the submitter. We will not ask for the submitter's pronouns.

## `Preferred name`
|If|Then|Unless|
|:--|:--|:--|
|All categories|Optional field for submitter's `Preferred name`||

- Submitter can be the Veteran, a family member, or another third party.

## `Social security number` or `Service number`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Social Security Number or Service Number` if |`What's your question about` = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Social Security Number or Service Number`|`What's your question about` = `It's a general question`|

- We need to collect SSN (or Service Number) because some business lines need SSN to look up a person's record in other systems that may only use SSN as an identifier.
- Agents can also use SSN to look up a person's record in MPI, however, they could use DOB for this instead of SSN.

## `Date of birth`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Date of Birth`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Date of Birth`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Date of Birth`|`What's your question about` = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Date of Birth`|`What's your question about` = `It's a general question`|

## `Branch of service`
|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Require Veteran's `Branch of Service`|`What's your question about` = `It's a general question`|

- While this data is in MPI, agents are not able to look this up using their MPI search tool in the CRM.

## `DoD/EDIPI number`
- This field will be removed from the form because agents can look this up in MPI using first and last name, and DOB or SSN – all of which will be required.

## Location and postal code
- Review this [Location of residence and postal code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Location%20and%20postal%20code.md) documentation for details.

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
- Review [Contact options by business line](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Contact%20options%20by%20business%20line.md) for details.

## Reason you're contacting us
- This field is required. We're currently exploring whether we can remove this.
