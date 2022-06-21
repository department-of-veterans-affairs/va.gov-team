# Direct deposit: user needs to edit bank account information

**Last updated June 21, 2022**

If a user clicks the `edit` button for either payment section, they will enter edit mode for that section on the direct deposit page.

## UX
- Uses the [form control components](https://design.va.gov/components/form/) from the VA design system, including validation patterns
- Once the form is successfully saved, the user is returned to "read" mode and a background-only success alert should display above the edit button
- [Desktop mock-up, editing]()
- [Mobile mock-up, editing]()
- [Desktop mock-up, save success]()
- [Mobile mock-up, save success]()

### Save errors

Two errors could be returned after a user submits the form and an save attempt is made.

#### Routing number entered is invalid and can't be matched to a bank.
- Once a user clicks `save`, a call is made to match the routing number to a bank. If no match is found, the form isn't saved and the user is asked to review the information they entered.
- [Desktop mock-up]()
- [Mobile mock-up]()

#### Something has gone wrong on VA.gov and we can't save the form.

- This is a generic error that occurs when the form can't be saved due to a technical issue on VA.gov.
- [Desktop mock-up]()
- [Mobile mock-up]()


## Codes

TBD

## How to reproduce

### Standard editing
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
3. Click edit mode 

### Routing number entered is invalid and can't be matched to a bank.


### Something has gone wrong on VA.gov and we can't save the form.
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
3. Click edit mode 
4. Make a change to any field
5. Disconnect your device from wi-fi
6. Click `save`
