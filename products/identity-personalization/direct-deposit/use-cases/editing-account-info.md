# Direct deposit: user needs to edit bank account information

**Last updated June 21, 2022**

If a user clicks the `edit` button for either payment section, they will enter edit mode for that section on the direct deposit page.

## UX
- For security purposes, all fields are blank when edit mode is entered.
- Uses the [form control components](https://design.va.gov/components/form/) from the VA design system, including validation patterns
- Once the form is successfully saved, the user is returned to "read" mode and a background-only success alert should display above the edit button
- If a user cancels during the editing process, they'll be presented with a modal asking them to confirm they want to leave edit mode.

- [Desktop mock-up, editing](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Jn3mY79)
- [Mobile mock-up, editing](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Omxl74R)
- [Desktop mock-up, save success](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/jgLJlzG)
- [Mobile mock-up, save success](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/ka7vknR)

### Save errors

#### Routing number entered is invalid and can't be matched to a bank.
- Once a user clicks `save`, a call is made to match the routing number to a bank. If no match is found, the form isn't saved and the user is asked to review the information they entered.

Mock-ups to come, pending work in [#42734](https://github.com/department-of-veterans-affairs/va.gov-team/issues/42734)
- [Desktop mock-up]()
- [Mobile mock-up]()


## Codes

TBD

## How to reproduce

### Standard editing
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
3. Click edit mode 
4. (awaiting further instructions for how to update account info)

### Routing number entered is invalid and can't be matched to a bank.



