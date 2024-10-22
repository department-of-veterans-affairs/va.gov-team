# Field rules

Last updated by @tygindraux: October 21, 2024

This document is for our design team to communicate field rules. This list is alphabetical.

**Jump to:**
  - [Attachments](#attachments)
  - [Authentication required](#authentication-required)
  - [Branch of service](#branch-of-service)
  - [Contact options](#contact-options)
  - [Date of birth](#date-of-birth)
  - [DoD/EDIPI number](#dodedipi-number)
  - [Gender](#gender)
  - [Health facility](#health-facility)
  - [Location and postal code](#location-and-postal-code)
  - [Preferred name](#preferred-name)
  - [Pronouns](#pronouns)
  - [Reason you contacted us](#reason-you-contacted-us)
  - [Replies](#replies)
  - [Roles](#roles)
  - [School fields](#school-fields)
  - [Social security number or service number](#social-security-number-or-service-number)
  - [State of property](#state-of-property)
  - [Subject field](#subject-field)
  - [Veteran Readiness and Employment (VR&E) information](#veteran-readiness-and-employment-vre-information)

## Attachments

In the form, this is pulled from the categories endpoint so it's regularly updating. AVA Admins have the ability to change these rules at any point, without being part of a release.

In the dashboard, TBC.

## Authentication required

This is pulled from the inquiries endpoint so it's regularly updating. AVA Admins have the ability to change these rules at any point, without being part of a release.

## Branch of service

|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Require Veteran's `Branch of Service`|Who is your question about? = `It's a general question`|

Even if the question is **not** about the Veteran, we still need to require the Veteran's branch of service (for these categories and if it's not a general question). While this data is in MPI, agents are not able to look this up using their MPI search tool in the CRM.

## Contact options

Review [contact options](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Contact%20options%20by%20business%20line.md) documentation for these rules.

## Date of birth

|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Date of Birth`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Date of Birth`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Date of Birth`|Who is your question about? = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Date of Birth`|Who is your question about? = `It's a general question`|

## DoD/EDIPI number

This field has been removed from Ask VA. We agreed with business lines that this field will be removed because agents can look this up in MPI using first and last name, and DOB or SSN, all of which will be required.

## Gender

This field has been removed from Ask VA. In June 2024, the Change Control Board voted to remove this field.

## Health facility

|If|Then|Unless|
|:--|:--|:--|
|Category = `Health care` and topic = `Prosthetics` `Audiology and hearing aids` `Getting care at a local VA medical center`|Require `Medical facility`||
|Category = `Health care` and topic = all other topics|Don't include medical facility||
|Category = `Debt` and topic = `Health care copay debt`|Require `Medical facility`||
|Category = `Debt` and topic ≠ `Health care copay debt`|Don't include `Medical facility`||
|All other categories|Don't include `Medical facility`||

If we collect health facility, then we don't also collect postal code (unless postal code is part of their mailing address and they choose US mail).

## Location and postal code

Review [location of residence and postal code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Location%20and%20postal%20code.md) documentation for these rules.

## Preferred name

|If|Then|Unless|
|:--|:--|:--|
|All categories|Optional field for submitter's `Preferred name`||

## Pronouns

|If|Then|Unless|
|:--|:--|:--|
|All categories|Optional field for `Pronouns` of the submitter||

## Reason you contacted us

This field has been removed from Ask VA. In June 2024, the Change Control Board voted to remove this field.

## Replies

This is pulled from the inquiries endpoint so it's regularly updating. AVA Admins have the ability to change these rules at any point, without being part of a release.

## Roles

The default list of roles, includes:
- Accredited representative (such as an accredited attorney, claims agent, or Veterans Service Officer)
- Fiduciary
- Funeral director
- On-the-job training or apprenticeship supervisor
- School Certifying Official (SCO)
- VA employee
- Work study site supervisor
- Other

If education question, the roles list changes to:
- On-the-job training or apprenticeship supervisor
- School Certifying Official (SCO)
- VA employee
- Work study site supervisor
- Other

## School fields

|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and relationship to the Veteran = Personal (eg. GI Bill Beneficiary)|Require `State of school` or `State of residency`|Topic = `Veteran Readiness and Employment (Chapter 31)`|
|Category = `Education benefits and work study` and relationship to the Veteran = Business|Require `School facility` or `State of facility` depending on role*|Topic = `Veteran Readiness and Employment (Chapter 31)`|
|All other categories|Don't include school fields||

*For business inquiries, whether to require `School facility` or `State of facility` depends on which role the submitter chooses.

If: Role = ON-THE-JOB TRAINING OR APPRENTICESHIP SUPERVISOR or SCHOOL CERTIFYING OFFICIAL (SCO)
<br>Then: Require `School facility` (If they choose, 'facility not listed' then ask for 'State of school')

If: Role = VA EMPLOYEE or WORK STUDY SITE SUPERVISOR or OTHER
<br>Then: Require `State of facility'

## Social security number or Service number

|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Social Security Number or Service Number`|Who is your question about? = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Social Security Number`|Who is your question about? = `It's a general question`|

We need to collect SSN (or Service Number) because some business lines need SSN to look up a person's record in other systems that use SSN as an identifier. Agents can also use SSN to look up a person's record in MPI, however, they could use DOB for this instead of SSN.

## State of property

|If|Then|Unless|
|:--|:--|:--|
|Category = `Housing assistance and home loans` and topic = `Appraisals` `Specially Adapted Housing (SAH) and Special Home Adaptation (SHA) grants`|Require `State of property`||
|Category = `Housing assistance and home loans` and topic = all other topics|Don't include `State of property`||
|All other categories|Don't include `State of property`||

## Subject field

On the 'Your question' page, we include a subject field if it's an education-related inquiry.

|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study`|Require `Subject` in addition to `Your question` field|Topic = `Veteran Readiness and Employment (Chapter 31)`|
|Category = `Benefits issues outside the U.S.`|Require `Subject` in addition to `Your question` field|Topic = `Disability compensation`|
|All other categories|Don't include `Subject` field||

## Veteran Readiness and Employment (VR&E) information

|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran Readiness and Employment`|Require `Have you/they ever applied for Veteran Readiness and Employment benefits and services?`||
|Category = `Education benefits and work study` and topic = `Veteran Readiness and Employment (Chapter 31)`|Require `Have you/they ever applied for Veteran Readiness and Employment benefits and services?`||
|Category = `Education benefits and work study` and topic ≠ `Veteran Readiness and Employment (Chapter 31)`|Don't include VR&E pages||
|All other categories|Don't include VR&E pages||
|If 'Yes' to `Have you/they ever applied for Veteran Readiness and Employment benefits and services?`|Require `Veteran Readiness and Employment counselor`|
