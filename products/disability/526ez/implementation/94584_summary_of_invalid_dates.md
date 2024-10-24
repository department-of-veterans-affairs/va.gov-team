# Overview

Summary of issues with invalid dates resulting in 526 submission failures, their related fixes, and key learnings. Collaboration of notes from T-Rex and Carbs teams.

# Service History

Several different dates are collected as part of the service history questions that caused submission failure, including

- Reserves National Guard Service, anticipated separation date
  - 2023-11-31 (day of 31 for a month that has less than 31 days)
- Reserves National Guard Service, obligation terms of service dates
  - 2022-01-XX (X’s in place of day)
 
Failures occurring on both primary and backup submission were the result of invalid data created before a correction was made in the UI to prevent the issue from occurring moving forward. This could potentially be the case for any initial saved claim created before 11/30/23.  

## Tickets

- [Remediate modern XX date bugs#75517](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75517)

  - This was remediation not a bug fix. We took a batch of submissions with the XX date problem and manually remediated them.

- [Package, diff and forward old XX date bugs (from tracker)#75281](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75281)
  - This was remediation not a bug fix. We took a batch of submissions with the XX date problem and manually repressed them.
- [Investigate resurgence of the "XX date bug"#75280](https://github.com/department-of-veterans-affairs/va.gov-team/issues/75280)
  - Investigation, afaik this was closed because the problem ‘seemed to go away’. There was also chatter from FE that this was fixed by using a new date component.
  - Provides an explanation of the issue impacting specific submissions associated with an individual user, also noted in https://github.com/department-of-veterans-affairs/va.gov-team/issues/75281 and https://github.com/department-of-veterans-affairs/va.gov-team/issues/75517, attributed to invalid data that were stored and resubmitted before a correction was made in the UI to prevent the issue from occurring moving forward.
- [Replace date fields using input with select elements#70682](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70682)
  - Follow-up to https://github.com/department-of-veterans-affairs/va.gov-team/issues/69455, which didn't resolve issue first identified and worked on in https://github.com/department-of-veterans-affairs/va.gov-team/issues/67497.
  - It was possible to create an "XX" value for the Day field of some dates in the 526 form causing primary and backup path failures after submission due to data invalidation errors. Where required, date field days in which a user could previously input a value were updated to dropdown select options based on the selected Month, ensuring reliable data inputs. The DateUI schema was imported directly into and accessed within the impacted page, instead of attempting to assign all UI attributes within the page itself.
- [Impossible Date Error#69455](https://github.com/department-of-veterans-affairs/va.gov-team/issues/69455)
  - Different than the XX date bug. This was submissions with dates like June 31st (impossible). No idea if it ever got resolved. We manually changed these dates with a script to the last real date of the given month and resubmitted them.
- [Fix date validation to prevent impossible dates#67497](https://github.com/department-of-veterans-affairs/va.gov-team/issues/67497)
  - https://github.com/department-of-veterans-affairs/va.gov-team/issues/69455 spawned from this ticket

# Toxic Exposure

Veterans are asked 4 sets of questions for toxic exposure regarding Gulf War locations, Agent Orange locations and additional hazards. For every location or hazard that is selected, optional begin and end dates of exposure can be included.

Year only or year + month is the expectation for these dates on pdf generation.

These dates are optional which may be why we ran into extra challenges.

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

### Takeaway: Utilize current front end tooling to ensure valid data
In this example, the day field was previously a text input field which allowed invalid, non-numeric characters. This page was built many years ago before more robust date tooling was available. Fixes were put in to change the day field from a freeform text input to a dropdown, limiting what could be entered in the field.  Additionally, the newer tooling can limit which days are available based on the month and year. **Going forward, continue to look for ways to modernize and change the UI/UX to prevent invalid data from coming in.** 

![image](https://github.com/user-attachments/assets/4764a388-2353-4516-bfa4-28ba5cf8d5b9)

### Takeaway: Consider in-progress forms and remediation
For any fixes that are implemented, we must remember that an In Progress Form (IPF) may still be holding invalid data for up to one year. **Going forward, any fixes should be tested with the IPF scenario to ensure the submission can be successful.** The solution may differ depending on the situation. For example, the invalid data could be either automatically sanitized (in the case of dropping optional, invalid date fields like day) or by prompting the Veteran with error feedback to fix the invalid piece of data.

Example of prompting the Veteran on the Review page to fix an invalid date.
![image](https://github.com/user-attachments/assets/427ac919-18b8-4756-b674-32f5d7e55a41)

Questions that arose when encountering the reemergence of XX dates after correcting for the problematic web component:
- Should form data storing invalid 'XX' dates be remediated manually as they arise, when backup fails?
- Should saved claims be preemptively searched for any instances where dates are invalid and make corrections?
- Should a validation mechanism be inserted into the primary and/or backup paths that corrects a claim's data when submitted for processing?
- Not knowing what value should replace 'XX' is probably the biggest question. Does it matter? Would it later be confirmed and corrected anyways?

### Takeaway: Different data validations up and downstream must be identified and reconciled

In this Toxic exposure example, the component library is set up for a full date, e.g. YYYY-MM-DD, but it also allows for scoping to just year, in which case it will use X’s for the other fields, e.g. 2024-XX-XX. Lighthouse on the other hand has a pattern to accept year only or year + month. It does not allow X’s in any of the date fields which ultimately caused the submission failures.

Web component pattern for dates (link):<br>`^(\\d{4}|XXXX)-(0[1-9]|1[0-2]|XX)-(0[1-9]|[1-2][0-9]|3[0-1]|XX)$`

Lighthouse pattern for dates (link):<br>`^(?:19|20)[0-9][0-9]$|^(?:19|20)[0-9][0-9]-(0[1-9]|1[0-2])$`

![image](https://github.com/user-attachments/assets/9f016ce2-60c7-4bba-a7e4-60600b733b24)


From validations present in the component library, such as ‘Please enter a day between 1 and 31’ when blanking out a day, we were under the impression that the dates would be an all or nothing thing, i.e. either all fields could be empty or all must be present. **Going forward, regardless of any other logic as a safety mechanism, we will make sure to align or reconcile data validations.**

**Alignment option:** this means using the same validation pattern all throughout the data flow. This would be the ideal scenario for simplicity, maintenance, and minimal risk. For example, this would involve using the same regular expression pattern for vets-website, vets-api and Lighthouse. However, this unforunately was not feasible at the time.<br>
![image](https://github.com/user-attachments/assets/8590be8c-2172-4661-9906-a4fb0c43d3f2)

**Reconciliation option:** this means the patterns may differ upstream vs downstream, but somewhere along the way there is processing of the data to make sure it will conform to the final submission requirements. For example, when Toxic Exposure was initially launched all three dates fields had to be collected since that was the UI component pattern that was available at the time, but the pdf only asks for month and year. In this case, the short term solution was for vets-api to process the dates to remove the day fields and to remove any X month or day fields since only year was required.<br>
![image](https://github.com/user-attachments/assets/631a64e9-d745-41eb-8c6f-6b1b76cd0d36)

### Takeaway: Consider edge cases such as the Veteran changing their mind
Gaps were discovered with the front end `va-memorable-date` component which unexpectedly allowed XX date fields to come in. Typically these invalid dates would be caught by validation, either on the page itself or later on at the attempt of submission on the Review page. In the case of a Veteran changing their mind, we have seen several cases where a Veteran selected a location or hazard, entered a date for it, but then went back and deleselected that location/hazard. The FE continues to store that previously entered date and it is suppressed from further FE validation due to it no longer being visible on the form. However, the invalid dates were still getting submitted to vets-api and then further on to Lighthouse.
![image](https://github.com/user-attachments/assets/8e1136c0-940b-4f6d-8b40-802f2a544eec)

**Going forward, we must design, build, and test for the ‘I changed my mind scenarios’.** There is no easy, one size fits all solution for these scenarios. The Veteran experience has to be balanced with VSR burden. In the above example of changing their mind about a location and date, a short term solution was used to ignore the orphaned date upon submission. It was decided not to hard delete the partial date in case the Veteran goes back in the form and changes their mind again as this reduces the burden of remembering the date again. There is a longer term story in the backlog to come up with a design for this desctructive action scenario ([#94396]().) 






