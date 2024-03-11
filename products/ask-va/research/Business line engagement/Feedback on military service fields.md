# Feedback on military service fields

Last updated by @tygindraux: October 23, 2023

**Jump to:**
- [When business lines say they need or don't need military service information](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#when-business-lines-say-they-need-or-dont-need-military-service-information)
- [Final recommendations on military service fields](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/Feedback%20on%20military%20service%20fields.md#final-recommendations-on-military-service-fields)

## When business lines say they need or don't need military service information

This is when business lines ([review list of stakeholders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/List%20of%20stakeholders%20by%20category.md)) have stated they need or don't need military service information in Ask VA.

This list is alphabetized by category name. Each field is marked as:

- ✅ = Business lines **need** this information to answer an inquiry. It is a required field.
- ✖️ = Business lines **don't need** this information to answer an inquiry.  (It is hidden from the form, although the field exists in the backend.)
- 🟡 = When given a choice between **need** and **don't need**, some business lines entered **optional**. This indicates they don't need the information, but it might be nice to have. Because we want don't want to collect unnecessary data from submitters, we consider **optional** answers as **don't need**.

|Category|First/last name|Branch of service|Service number|SSN|DoD/EDIPI|Service start date|Service end date|DOB|Claim number|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|`Benefit issues outside the U.S.` > Education|✅|✖️|✖️|✅|✖️|✖️|✖️|✅|✖️|
|`Benefit issues outside the U.S.` > VBA|✅|✅|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Burials and memorials` > NCA|✅|✖️|✖️|✅|✖️|✖️|✖️|✅|✖️|
|`Burials and memorials` > VBA|✅|✅|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Center for Minority Veterans`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Center for Women Veterans`|✅|✅|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Debt for benefit overpayments and copay bills`|✅|✖️|✖️|✅|✖️|✖️|✖️|✅|✖️|
|`Decision reviews and appeals`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`DEERS (Defense Enrollment Eligibility Reporting System)`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Disability compensation`|✅|✅|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Education benefits and work study`|✅|✖️|✖️|✅|✖️|✖️|✖️|✅|✖️|
|`Guardianship, custodianship, or fiduciary issues`|✅|✖️|✖️|✅|🟡|✖️|✖️|✅|🟡|
|`Health care`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Housing assistance and home loans`|✅|✖️|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Life insurance`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Pension`|✅|✖️|✖️|✅|🟡|✖️|✖️|✅|🟡|
|`Sign in and technical issues`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Survivor benefits`|✅|✅|✖️|✅|✖️|✖️|✖️|✅|🟡|
|`Veteran ID Card (VIC)`|✅|✅|✖️|✅|✅|✖️|✖️|✅|✖️|
|`Veteran Readiness and Employment`|✅|✖️|✖️|✅|✅|✖️|✖️|✅|✖️|

## Final recommendations on military service fields

### First and last name

**These fields will not change.** They will be required.

### Date of birth

**This field will not change.** It will be required, except in special circumstances (see [Field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md)).

### Social security number and service number

**These fields will change to accommodate Veterans who are known by their `Service number`, not their `Social security number`.**

At least one of the following, `Social security number` or `Service number`, will be required, except in special circumstances (see [Field rules](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Field%20rules.md)). Submitters can input both if they choose.

### Service start and end dates

**These fields will be removed.** These fields were [indicated as unnecessary by business lines](#when-business-lines-say-they-need-or-dont-need-military-service-information). 

### Claim number

**This field will be removed.** This field was [indicated as unnecessary by business lines](#when-business-lines-say-they-need-or-dont-need-military-service-information). 

### DoD/EDIPI number

**This field will be removed.** Although [business lines had differing needs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Business%20line%20engagement/List%20of%20military%20service%20fields.md#when-business-lines-say-they-need-or-dont-need-military-service-information) for `DoD/EDIPI`, we think this field should be **removed** because agents can look this up in MPI using a Veteran's first and last name and DOB or SSN – all of which will be required.

### Branch of service

**This field will change.** This field will be required for these categories:
  - `Veteran ID Card (VIC)`
  - `Disability compensation` (including when `Disability compensation` is a topic under `Benefits issues outside the U.S.`)
  - `Survivor benefits`
  - `Burials and memorials`
  - `Center for Women Veterans`

For any other category, it will not be included in the form.

Previously, when military fields were present, `Branch of service` was always optional. By making this field required when business lines say they need it, our hypothesis is that agents will more often have the information they need to reply to a submitter in the first instance. And by removing this field when business lines say they don’t need it, we minimize the need for submitters to enter unnecessary information.

If an inquiry is re-routed to one of these business lines from a business line that does not include `Branch of service`, they will be missing this information. But, we don’t believe that including this field as optional solves the problem. There’s still a likelihood that submitters:
- do not fill out the field, when it’s needed
- fill out the field, when it’s not needed

If there is missing information in these outstanding cases, business lines should reach out to the submitter and ask for the Veteran's `Branch of service` if needed.
