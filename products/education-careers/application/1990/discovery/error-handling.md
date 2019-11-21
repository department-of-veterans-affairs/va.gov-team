# Error Handling
_These suggestions differ from how HCA currently works_

## Required fields
_Last Name, First Name, Sex, DOB, SSN, Address, Email address_

- Indicate with a red asterisk
- Do not throw an error while the field is being filled out
- Highlight incomplete required fields in red, including error message.


## Strongly encouraged fields
_Day phone number, Date of graduation (only month and year needed), Date of GED (only if no HS graduation)_

- Information Status (US web design standards) encouraging the inclusion of that information
- In review phase, include a Warning Status at top of page if 'strongly encouraged' fields have not been completed.


## Complex cases
### Military Service
_At least one record including: EOD, RAD, Branch/component_
- Error Status (US web design standards) if a user tries to submit this section without at least one military service record (fields in red).
  - Use the Error status to explain that one complete record must be completed and saved before continuing.
- Error Status at top of record if a user tries to save a military service period without filling in required fields. (fields in red)
  - Use the Error status to explain that one complete record must be completed and saved before continuing.
