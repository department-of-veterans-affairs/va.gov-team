# 21-686c text/content punch list
**VSA eBenefits Team | April 2020**

`James Adams, designer`

---

```diff
- Update this list immediately upon completion
```
- 🤷‍ needs clarification  

Screens proofed in staging.VA.gov the week of April 13, 2020. Reference mockups are available [here.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design)

### Throughout

- [ ] Add breadcrumbs
- [x] Change title to: "Add or remove dependents from your VA benefits"
- [x] Change subtext to: "Equal to VA Form 21-686c (Application Request to Add And/Or Remove Dependents) and/or
Equal to VA Form 21-674 (Request for Approval of School Attendance)"
- [x] Add "Need help? section
- [x] Add in-form sub text: "VA Form 21-686c (and 21-674)"

### Introduction

- [x] Change signed-in message text to: "**Note:** Since you’re signed in to your account, we can prefill part of your application based on your account details. You can also save your form in progress and come back later to finish filling it out."
- [x] Change green button text to: "Add or remove a dependent" 
- [x] Address `https://staging.va.gov/view-change-dependents/add-remove-form-686c/introduction` failing on refresh/redirect

#### Subway map
- [x] Change header to: "Follow the steps below to apply to add or remove a dependent"
- [x] Prepare section: all new text per [mocks](https://xd.adobe.com/view/057055ba-4c2b-4367-667b-7d7034cb43b4-7341/)
- [x] Apply section: all new text per [mocks](https://xd.adobe.com/view/057055ba-4c2b-4367-667b-7d7034cb43b4-7341/)
- [x] VA review section change to: "We process applications in the order we receive them. We may contact you if we have questions or need more information."
- [x] Decision section change to: "You’ll get a notice in the mail once we’ve processed your claim."

#### OMB block
- [x] Change "OMB Control #: 21-686" to "OMB approved #: 2900-0043"
- [x] Change expiration date to: "09/30/2021"

### Checkboxes

- [x] Change chapter title to: "What do you want to do?
- [x] Add instructional text per [mocks](https://xd.adobe.com/view/ca825c11-2268-458f-4fec-6aaecfec5b2d-bcb3/)
- [x] Change checkbox text per [mocks](https://xd.adobe.com/view/ca825c11-2268-458f-4fec-6aaecfec5b2d-bcb3/)
- [ ] Change checkbox order per [mocks](https://xd.adobe.com/view/ca825c11-2268-458f-4fec-6aaecfec5b2d-bcb3/)

### Veteran's info section

- [ ] Implement new "info on file" screen in place of Veteran ID info per [mockup](https://xd.adobe.com/view/ca825c11-2268-458f-4fec-6aaecfec5b2d-bcb3/screen/dc153448-40b1-4d35-b890-698dca690305/Add-Modify-Dependents-MVI-Details)
- [x] Capitalize "Suffix"
- [x] Change checkbox to "I live on a United States military base outside of the U.S."
- [x] Change "Street address" to just "Street"
- [x] Change "Zip code" to "Postal code"

### Add spouse section

- [X] Change "Your spouse’s first name" to "Spouse's first name"
- [x] Change "Your spouse’s middle name" to "Spouse's middle name"
- [x] Change "Your spouse’s last name" to "Spouse's last name"
- [ ] Bold "or" in labels under the "Where were you married?" section
- [x] In the "What are some examples of additional evidence?" accordion, remove periods at ends of bullet points
- [x] Use base-checkbox address block for separated spouse's address
- [x] Checkbox to say "They live on a United States military base outside of the U.S."
- [x] Change "Street address" to just "Street"
- [x] Change "Zip code" to "Postal code"
- [ ] Bold "your spouse" in the label, "Was your spouse married before?"
- [x] Change header in list loop to "Next former spouse"
- [x] Change button text to: "Add another former spouse"
- [x] Change "Where did this marriage take place?" to "Place of marriage to former spouse"
- [ ] Bold "or" in labels under the "Place of marriage to former spouse" section
- [x] Change "Where did this marriage end?" to "Place marriage with former spouse ended"
- [ ] Bold "or" in labels under the "Place marriage with former spouse ended"
- [ ] Bold "you" in "Were you married before?"

### Veteran marriage section

- [ ] All of the same list/loop revisions above


### Add child section

- [x] Make "number" lowercase in "Child’s Social Security Number"
- [x] When entering a letter on accident, the required field prompt pops in and says `does not match pattern "^[0-9]*[-]*[0-9]*[-]*[0-9]*$"` instead of "Please use only 9 numbers"
  - [x] Field also took more than 9 digits
- [x] Change header in list loop to "Next child" EDIT: No Longer doing this per conversation with Jim.
- [x] Child's name header seems to be missing after child info screen
- [ ] Bold "or" in labels under the "Child's place of birth" section
- [x] Use base-checkbox address block for "Person your child lives with" address
- [x] Change "Street address" to just "Street"
- [x] Change "Zip code" to "Postal code"

### Add student section (674)

- [x] Remove form number from header: "Information needed to add a student 18 to 23 years old"
- [x] Include note: "Note: This should be where the student is living while attending school." above student address section
- [ ] Confirm size of section headers (look small)
- [x] Change "Street address" to just "Street" throughout
- [x] Change "Zip code" to "Postal code" throughout
- [ ] Bold "or" in "Kind of training or educational program"

### Remove stepchild section

- [ ] Deselect radio-button for stepchild expenses question; add "Required"
- [x] Use base-checkbox address block for "Who does this stepchild live with?" address
- [x] Change "Street address" to just "Street"
- [x] Change "Zip code" to "Postal code"

### Dependent death section

- [x] Change add button to: "Report another deceased dependent EDIT: No longer doing this per conversation with Jim.
- [x] Add header to list/loop gray box: "Next dependent" EDIT: No longer doing this per conversation with Jim.
- [ ] Bold "or" in labels under the "Place of death" section
- [x] Change City (or APO/FPO/DPO) to: "City **or** county"

### Report divorce section

- [x] Remove Dependent death section
- [ ] Bold "or" in labels under the "Where did this marriage end?" section

### Child marriage section

- [x] Remove Dependent death section
- [x] Match labels to [mocks](https://xd.adobe.com/view/7c724f92-3619-4c7f-5fa8-c355bb2e85c9-0a43/screen/6bb638da-6be6-4d63-a0ad-bea72daec150/Apply-Dependents-Report-Child-Marriage-1)

### Student left school section

- [x] Remove Dependent death section
- [x] Match labels to [mocks](https://xd.adobe.com/view/7c724f92-3619-4c7f-5fa8-c355bb2e85c9-0a43/screen/c13df40e-416a-49df-9fa3-5b18b1b96bb8/Apply-Dependents-Report-Stopped-School-1)

### Upload sections

- [x] Upload section seems to be missing from spouse workflow (other than ceremonial marriage, foreign address)
- [x] Upload section seems to be missing from child workflow (other than bilogical foreign address)

### Form review page

- [ ] Add paragraph text per [mocks](https://xd.adobe.com/view/88794e80-ae26-4f3e-509e-94d09eb571f7-fe48/)
- [x] When 686c Options gets expanded, should the indicator say something else other than True?  Like "Selected" or something?

### Submission Failure
- [ ] Blue "Go Back to VA.gov" button should be "Go back to VA.gov"

### Confirmation page

- [x] All new text per [mocks](https://xd.adobe.com/view/88794e80-ae26-4f3e-509e-94d09eb571f7-fe48/screen/85157fc6-68fe-4a6b-bc76-b499c56283af/Add-Dependents-Confirmation-1-ALT)







