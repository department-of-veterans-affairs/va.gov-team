# Field rules

Last updated by @tygindraux: October 3, 2024

This document is for our design team to communicate field rules.

**Jump to:**
  - [Pronouns](#pronouns)
  - [Preferred name](#preferred-name)
  - [Social security number or service number](#social-security-number-or-service-number)
  - [Date of birth](#date-of-birth)
  - [Branch of service](#branch-of-service)
  - [Roles](#roles)
  - [Location and postal code](#location-and-postal-code)
  - [School fields](#school-fields)
  - [Health facility](#health-facility)
  - [State of property](#state-of-property)
  - [Contact options](#contact-options)
  - [Gender](#gender)
  - [DoD/EDIPI number](#dodedipi-number)
  - [Reason you contacted us](#reason-you-contacted-us)

In general, when we refer to the submitter, this can be a Veteran, a family member, or another third party.

## Pronouns
|If|Then|Unless|
|:--|:--|:--|
|All categories|Optional field for `Pronouns` of the submitter||

## Preferred name
|If|Then|Unless|
|:--|:--|:--|
|All categories|Optional field for submitter's `Preferred name`||

## Social security number or Service number
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Social Security Number or Service Number`|Relationship to the Veteran = Business relationship|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Social Security Number or Service Number`|Who is your question about? = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Social Security Number`|Who is your question about? = `It's a general question`|

- We need to collect SSN (or Service Number) because some business lines need SSN to look up a person's record in other systems that use SSN as an identifier.
- Agents can also use SSN to look up a person's record in MPI, however, they could use DOB for this instead of SSN.

## Date of birth
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and topic ≠ `VR&E`|Require Veteran's `Date of Birth`|Relationship to the Veteran = Business relationship|
|Category = `Education benefits and work study` and topic = `VR&E`|Follow same rules as all other categories|||
|Category = `Benefits issues outside the U.S.` and topic = `Education benefits and work study`|Require Veteran's `Date of Birth`|`Relationship to the Veteran` = `Business relationship`|
|Category = `Benefits issues outside the U.S.` and topic ≠ `Education benefits and work study`|Follow same rules as all other categories|||
|All other categories|Require Veteran's `Date of Birth`|Who is your question about? = `It's a general question`|
|All other categories; if question is about the family member|Require family member's `Date of Birth`|Who is your question about? = `It's a general question`|

## Branch of service
|If|Then|Unless|
|:--|:--|:--|
|Category = `Veteran ID Card (VIC)` `Disability compensation` `Survivor benefits` `Burials and memorials` `Center for Women Veterans` `Benefits issues outside the U.S.`|Require Veteran's `Branch of Service`|Who is your question about? = `It's a general question`|

- Even if the question is **not** about the Veteran, we still need to require the Veteran's branch of service (for these categories and if it's not a general question).
- While this data is in MPI, agents are not able to look this up using their MPI search tool in the CRM.

## Roles
The roles lists are different if it's an education question or not.

If not education related, (default) roles list includes:
- Accredited representative (such as an accredited attorney, claims agent, or Veterans Service Officer)
- Fiduciary
- Funeral director
- On-the-job training or apprenticeship supervisor
- School Certifying Official (SCO)
- VA employee
- Work study site supervisor
- Other

If education question, roles list includes:
- On-the-job training or apprenticeship supervisor
- School Certifying Official (SCO)
- VA employee
- Work study site supervisor
- Other

## Location and postal code
Please review [Location of residence and postal code](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Location%20and%20postal%20code.md) documentation for these rules.

## School fields
|If|Then|Unless|
|:--|:--|:--|
|Category = `Education benefits and work study` and relationship to the Veteran = Personal (eg. GI Bill Beneficiary)|Require `State of school` or `State of residency`||
|Category = `Education benefits and work study` and relationship to the Veteran = Business|Require `School facility` or `State of facility` depending on role*||
|All other categories|Don't include school fields||

- *For business inquiries, whether to require `School facility` or `State of facility` depends on which role the submitter chooses.
  - If: Role = ON-THE-JOB TRAINING OR APPRENTICESHIP SUPERVISOR or SCHOOL CERTIFYING OFFICIAL (SCO)
    - Then: Require `School facility` (If they choose, 'facility not listed' then ask for 'State of school')
  - If: Role = VA EMPLOYEE or WORK STUDY SITE SUPERVISOR or OTHER
    - Then: Require `State of facility'

## Health facility
|If|Then|Unless|
|:--|:--|:--|
|Category = `Health care` and topic = `Prosthetics` `Audiology and hearing aids` `Getting care at a local VA medical center`|Require `Medical facility`||
|Category = `Health care` and topic = all other topics|Don't include medical facility||
|Category = `Debt` and topic = `Health care copay debt`|Require `Medical facility`||
|Category = `Debt` and topic ≠ `Health care copay debt`|Don't include `Medical facility`||
|All other categories|Don't include `Medical facility`||

- **If** we collect health facility then we don't also collect postal code (unless postal code is part of their mailing address and they choose US mail). 

## State of property
|If|Then|Unless|
|:--|:--|:--|
|Category = `Housing assistance and home loans` and topic = `Appraisals` `Specially Adapted Housing (SAH) and Special Home Adaptation (SHA) grants`|Require `State of property`||
|Category = `Housing assistance and home loans` and topic = all other topics|Don't include `State of property`||
|All other categories|Don't include `State of property`||

## Contact options
- Review [Contact options by business line](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Fields%2C%20options%20and%20labels/Contact%20options%20by%20business%20line.md) for details.

## Gender
This field has been removed from Ask VA. In June 2024, the Change Control Board voted to remove it.

## DoD/EDIPI number
This field has been removed from Ask VA. We agreed with business lines that this field will be removed because agents can look this up in MPI using first and last name, and DOB or SSN, all of which will be required.

## Reason you contacted us
This field has been removed from Ask VA. In June 2024, the Change Control Board voted to remove it.
