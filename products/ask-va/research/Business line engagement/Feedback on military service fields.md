# Feedback on military service fields

Last updated by @tygindraux: October 17, 2023

Jump to:
- [When business lines say they need or don't need military service information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/List%20of%20military%20service%20fields.md#when-business-lines-say-they-need-or-dont-need-military-service-information)
- [How we should use their feedback to inform our designs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/List%20of%20military%20service%20fields.md#how-we-should-use-their-feedback-to-inform-our-designs)

## When business lines say they need or don't need military service information

This is when business lines ([review list of stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/List%20of%20stakeholders%20by%20category.md)) have stated they need or don't need particular military service information in Ask VA.

This list is alphabetized by category name. Each field is marked as:

- NEED - Business lines need this information to answer an inquiry. It is a required field.
- DON'T NEED - Business lines don't need this information to answer an inquiry.  It is hidden from the form, but the field still exists in the back-end.
- "Optional" - When given a choice between NEED and [DON'T NEED], business lines entered "Optional." This indicates they don't need the information, but it might be nice to have. Because we want don't want to collect unnecessary data from submitters, we've counted "Optional" answers as [DON'T NEED].

|Category|First/last name|Branch of service|Service number|SSN|DoD/EDIPI|Service start date|Service end date|DOB|Claim number|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|`Benefit issues outside the U.S.` > Education|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Benefit issues outside the U.S.` > VBA|NEED|NEED|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Burials and memorials` > NCA|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Burials and memorials` > VBA|NEED|NEED|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Center for Minority Veterans`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Center for Women Veterans`|NEED|NEED|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Debt for benefit overpayments and copay bills`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Decision reviews and appeals`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`DEERS (Defense Enrollment Eligibility Reporting System)`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Disability compensation`|NEED|NEED|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Education benefits and work study`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Guardianship, custodianship, or fiduciary issues`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Health care`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Housing assistance and home loans`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Life insurance`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Pension`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Sign in and technical issues`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Survivor benefits`|NEED|NEED|[DON'T NEED]|NEED|[DON'T NEED]|[DON'T NEED]|[DON'T NEED]|NEED|"Optional"|
|`Veteran ID Card (VIC)`|NEED|NEED|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|
|`Veteran Readiness and Employment`|NEED|[DON'T NEED]|[DON'T NEED]|NEED|NEED|[DON'T NEED]|[DON'T NEED]|NEED|[DON'T NEED]|

## How we should use their feedback to inform our designs

### Consistent across all categories

We think these fields should be treated consistently across all categories, because all business lines have reached an agreement.

- Required for all categories:
  - `First name`
  - `Last name`
  - `Date of Birth`
  - `SSN`
- Remove these fields from the form:
  - `Service start date`
  - `Service end date`
  - `Service number`
  - `Claim number`
 
Although business lines had differing needs for `DoD/EDIPI`, we think this field should be **removed** because agents can look this up in MPI using a Veteran's first and last name, DOB and SSN, which will be required.

### Depends on the category

We think these fields need to be treated differently per category, because in some cases they are needed and in other cases they are not.

- We confirmed again that VBA-ART and `Veteran ID Card (VIC)` need `Branch of Service` as part of their ID protocol requirements, so we need to require `Branch of Service` for at least these categories:
  - `Veteran ID Card (VIC)`
  - `Disability compensation` (including when `Disability compensation` is a topic under `Benefits issues outside the U.S.`)
  - `Survivor benefits`
  - `Burials and memorials`
  - `Center for Women Veterans`
