
# onBlur form control validation Design Decisions
Last updated: Sep 4, 2025

- [ADR 001 - onBlur validation](#ADR-001---onBlur-validation)

## ADR 001 - onBlur validation

### Status: completed

Date issue raised: Oct 12, 2023
Decision date: Oct 12, 2023 (?)
Date completed: Oct 19, 2023

### Context

This context is being added retroactively by looking back at PR’s and issues. Not all of the original decision details are clear (ie who made the decisions) but we believe the following based on component updates.

According to this PR, validation for va-date and va-memorable-date was updated so that each individual field (day, month, and year) undergoes validation when focused even if the fields were empty.

Previously, validation didn’t happen until the inputs had a value. This Storybook staging link from this April 2023 PR demonstrates that behavior.

### Decision

The validation behavior changes in 2023 were:

All fields would validate with and without content
Validation errors focused in sequence
Validation happened when clicking outside of the component (onBlur)

### Consequences

### Open Questions


### Status: proposed

- Date issue raised: Feb 24, 2025
- Decision date: Sep 4, 2025

### Context
The va-date component was validating on blur when none of the inputs had been modified and the required property was set to false. This behavior was also present in va-memorable-date and va-telephone-input. Upon further investigation this behavior was also present on va-text-input when a decimal, numeric, or currency inputMode was set. 

Showing an error about a field value when the field is empty can disrupt and confuse keyboard users who tab through a form to understand its layout. 
[Originating task](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3854) 

### Decision
Form components will not perform onBlur validation when the user has NOT modified the input field(s). This will enable users, especially users using keyboard navigation, to tab through fields without being interrupted with validation messages. 
This pattern is the same for both required and optional fields. For required fields null value checks are performed by default in the browser on form submit.


### Consequences
Users will be able to navigate form fields without being interrupted with validation messages. This allows users to gain additional context before inputting data.
Form components have been updated to accommodate this pattern
Consuming applications may need to test their applications to ensure that validation is working as expected.


### Open Questions
The task mentioned in the context also requested the option to turn validation off so that a consuming application could develop custom validation. There needs to be additional discussion, and discovery work to figure out if this should be allowed and is feasible. 
