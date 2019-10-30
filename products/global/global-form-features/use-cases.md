**Uses cases we might want to support**|**Notes**|**Priority**
-----|-----|-----
Basic use of RJSF styled as USWDS|Basically the same use cases as plain RJSF, but with components that follow USWDS (and probably our blur/handling and validation). Not including page flow logic. This would be the sort of bare minimum use of the library/toolkit|Low
Form with some pages shown in read view first|Some VR&E designs have this (as well as 526): https://dsva.slack.com/files/U52TS5BL0/F857B1QVC/artboard.png|High for Vets.gov, lower for general use
Custom page order logic (or just manually creating and ordering routes)|Multiple applicants on pre-need is an example; they want to be able to step through the flow for each applicant, instead of the way we do that now|High
Save-in-progress and prefill|This would need to be flexible based on the service we're calling to store/fetch the data (login.gov, an internal agency service, etc.)|Medium
RJSF as Vets.gov currently uses it|Assuming things like USWDS, page structure, linear flow, conditional logic, widgets we currently have available, etc.|High
Being able to jump around and complete sections of the form when you want|For long forms especially it might be useful to be able to jump around and choose which sections to complete. Would change when validations are run. Might be linked to Save-in-progress functionality|Medium
Async validations| |Medium
Making calls through the form process| |Low
