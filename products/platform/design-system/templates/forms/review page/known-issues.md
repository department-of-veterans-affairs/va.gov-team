# Known issues

508 office issue
- https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1380
On “Step 12 of 12: Review application” screen, each collapsed item is read as “list of 1 items”. See Screenshots One
<img width="1296" height="406" alt="image" src="https://github.com/user-attachments/assets/38420bb6-604d-4a46-8460-7a9cae685c68" />


On “Step 12 of 12: Review application” screen, when you expand the Personal Information and press the arrow key, “definition list of 5 items nesting level 1t of 1 items” is read by assistive technology. When you press the arrow key again, the information starting with First name: is read as unstructured text by assistive technology
<img width="920" height="352" alt="image" src="https://github.com/user-attachments/assets/296a9e91-f948-4ae9-a79f-4adc272043aa" />



**Josh - wicked issue**
- [Review answers page has multiple focus defects and error messaging issues](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61549)

**Robin - error messages**
- [Add form config reviewErrors docs](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1615)

**Jeana - 508 issues - review page**
- [[a11y-defect-2]: Information, structure, and relationships found in 508 Audit on form 21-4142](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/1380)
- [[accessibility-defect-2]: Focus is lost on review page when editing items.](https://github.com/department-of-veterans-affairs/VA.gov-team-forms/issues/734)

**Guidance we need to cover**
[Ensure review page meets wcag 2.2 guidance](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)
To help users to ‘Check answers’ and meet the new WCAG 2.2 criteria, make sure that users can successfully:
If a user decides to go back to a previous answer, make sure information they’ve already entered is pre-populated.

Do not pre-populate if the information is no longer valid, or when pre-populating would be a major safety or security concern. This is to comply with WCAG 2.2 success criterion 3.3.7 Redundant Entry.


### [USWDS Guidance for "Keep a record"](https://designsystem.digital.gov/patterns/complete-a-complex-form/keep-a-record/)
> Providing the user with a record of the answers provided, questions skipped, and the URL and date stamp of form submission can reduce fear, increase confidence, and improve the user’s trust in your program.
>
> This record also provides a quick reference to submitted answers that might influence eligibility, helping program support personnel work with users to identify potential misunderstandings or mistakes for easier resolution and improved service.

**Designer note:** at VA we want to provide that record *after* the form is submitted, on the confirmation page they can download/print a copy of responses. On the review page they are reviewing the answers they are about to submit. (Need to clarify with DST/governance that this distinction is acceptable)

### [VADS Guidance for Form Review template](https://design.va.gov/templates/forms/review)
It uses the [Help users to... check answers](https://design.va.gov/patterns/help-users-to/check-answers) pattern

Documentation states
> ‘File upload’ and ‘Add another’ sections should use the same presentation style used on their step pages. For example, the [grey Card]/components/card) variation.

Which means we may still not be revealing all of the filled in fields on the review page. 

### Other "review" implementations
- Gov.UK [Check Answers pattern](https://design-system.service.gov.uk/patterns/check-answers/)



