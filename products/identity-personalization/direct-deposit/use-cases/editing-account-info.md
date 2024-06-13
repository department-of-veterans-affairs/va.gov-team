# Direct deposit: user needs to edit bank account information

**Last updated February 14, 2024**

If a user clicks the `edit` button for either direct deposit section, they will enter edit mode for that section.

## UX

### Editing
- For security purposes, all fields are blank when edit mode is entered.
- Uses the [form control components](https://design.va.gov/components/form/) from the VA design system, including validation patterns
- [Desktop mock-up, editing](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-463&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mobile mock-up, editing](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-19&mode=design&t=JeBw2hRh9J5QSuL7-11)

### Saving changes
- Once the form is successfully saved, the user is returned to "read" mode and a background-only success alert should display above the edit button
- When direct deposit information is changed, a confirmation email is sent to the user in case they did not make these updates. We send these emails to both the contact email address in the profile **and** the sign in email address in case a fraudster has changed the contact email address. These confirmation emails have information on how to report fraud.
- [Desktop mock-up, save success](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-519&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mobile mock-up, save success](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-116&mode=design&t=JeBw2hRh9J5QSuL7-11)

#### Save error: routing number entered is invalid and can't be matched to a bank.
- Once a user clicks `save`, a call is made to match the routing number to a bank. If no match is found, the form isn't saved and the user is asked to review the information they entered.
- [Desktop mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=30-3502&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mobile mock-up](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-156&mode=design&t=JeBw2hRh9J5QSuL7-11)

### Canceling changes
- If a user has made changes to any form field, and hits cancel, they'll first see the field validation message. This is a limitation of the form system.
- If they hit cancel a second time, or hit cancel before editing any fields they'll be presented with a modal asking them to confirm they want to leave edit mode.

## Codes

N/A

## How to reproduce

### Standard editing
1. Have a real routing number handy (can be found on Google). Only the routing number needs to be real to save the form.
2. Log in with user vets.gov.user+378
3. Navigate to Profile > Direct deposit
4. Click edit button 
5. Complete the form
6. Click update button


### Cancel editing
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
3. Click edit button 
4. Enter anything into any field to see validation message, or
5. Click cancel

### Routing number entered is invalid and can't be matched to a bank.
1. Log in with user vets.gov.user+378
2. Navigate to Profile > Direct deposit
3. Click edit button 
4. Enter 9 digits into the routing number field
5. Complete the rest of the form
6. Click save
