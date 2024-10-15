# Overview

Summary of issues with invalid dates resulting in 526 submission failures, their related fixes, and key learnings. Collaboration of notes from TRex and Carbs teams.

# Service History

Several different dates are collected as part of the service history questions that caused submission failure, including

- Reserves National Guard Service, anticipated separation date
  - 2023-11-31 (day of 31 for a month that has less than 31 days)
- Reserves National Guard Service, obligation terms of service dates
  - 2022-01-XX (X’s in place of day)

## Tickets

- [Remediate modern XX date bugs#75517](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75517)

  - This was remediation not a bug fix. We took a batch of submissions with the XX date problem and manually remediated them

- [Package, diff and forward old XX date bugs (from tracker)#75281](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75281)
  - This was remediation not a bug fix. We took a batch of submissions with the XX date problem and manually repressed them
- [Investigate resurgence of the "XX date bug"#75280](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75280)
  - Investigation, afaik this was closed because the problem ‘seemed to go away’. There was also chatter from FE that this was fixed by using a new date component
- [Replace date fields using input with select elements#70682](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70682)
  - Unknown
- [Impossible Date Error#69455](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69455)
  - Different than the XX date bug. This was submissions with dates like June 31st (impossible). No idea if it ever got resolved. We manually changed these dates with a script to the last real date of the given month and resubmitted them
- [Fix date validation to prevent impossible dates#67497](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67497)
  - Placeholder ticket, no idea if it ever resulted in work getting done.

# Toxic Exposure

Veterans are asked 4 sets of questions for toxic exposure regarding Gulf War locations, Agent Orange locations and additional hazards. For every location or hazard that is selected, optional begin and end dates of exposure can be included.

Year only or year + month is the expectation for these dates on pdf generation.

These dates are optional which may why we ran into extra challenges.

Examples of failures:

- Missing day: "2006-06-XX"
- Missing month and day: "2020-XX-XX"
- Missing year and day: "XXXX-12-XX"
- 2 digit year: "77-06-01"

## Tickets

- [Toxic Exposure - (found during 25%) - invalid date XXXX is coming through for the year in exposure dates fields #93403](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93403)
  - Fixed: configure vets-website and vets-api with vets-json-schema for TE dates which minimally must have a year. error message improvements on the review page.
- [Toxic Exposure dates with XX for day #92417](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92417)
  - Fixed: If month is invalid, return year only. Also ignore invalid day.

# Key takeaways

### Takeaway: Different data validations up and downstream must be identified and reconciled

In this Toxic exposure example, the component library is set up for a full date, e.g. YYYY-MM-DD, but it also allows for scoping to just year, in which case it will use X’s for the other fields, e.g. 2024-XX-XX. Lighthouse on the other hand has a pattern to accept year only or year + month. It does not allow X’s in any of the date fields which ultimately caused the submission failures.

Web component pattern for dates (link):  
`^(\\d{4}|XXXX)-(0[1-9]|1[0-2]|XX)-(0[1-9]|[1-2][0-9]|3[0-1]|XX)$`

Lighthouse pattern for dates (link):
`^(?:19|20)[0-9][0-9]$|^(?:19|20)[0-9][0-9]-(0[1-9]|1[0-2])$`
