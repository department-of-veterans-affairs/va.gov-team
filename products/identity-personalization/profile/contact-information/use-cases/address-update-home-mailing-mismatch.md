# Contact information: Home address is updated but does not match Mailing address
**Last updated: June 2025**

- [User flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1748544816643/8147634738618bff171962ce84b2f940c888fb03?wid=0-1749014970296&outline=open)
- [Figma files](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3153-13793&t=YpC93tIWZqgNt0Zt-1)
- Test Rail QA
- Product documentation
   - [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/initiative-brief.md)
   - [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/documentation.md) 


## Current experience
- If a user updates their Home address and it does not match their Mailing address, they will be prompted to review and update their Mailing address. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.
- Address change modal is triggered only when an update is made to the Home address, and the update does not match the Mailing address.
- When the modal appears, the updated Home address has already been saved to the profile.
- The modal will either appear:
	- After address validation has run and the user has confirmed the address via a suggested address OR 
	- After validation has run and no address suggestions were provided/needed OR
	- After validation has run, and the user proceeds with updating their address as entered.


## Common use cases
<details><summary>User has updated Home address, and Mailing address is empty</summary>
	
- **Use case:** Modal appears telling user we don’t have a Mailing address on file, asking if a Mailing address should be added to match their Home address.
- **Status code:** None
- **Format:** [Modal component](https://design.va.gov/components/modal)
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29802&t=YpC93tIWZqgNt0Zt-1)
- **Content:**

Header: We’ve updated your home address

Your updated home address:

**[User entered address]**

We don’t have a mailing address on file for you.

Do you want to update your mailing address to match this home address? 

**[User entered address]**

Primary button: Yes

Secondary button: No

</details>


<details><summary>User has updated Home address, and Mailing address doesn’t match</summary>
	
- **Use case:** Modal appears showing user two different addresses, asking if Mailing address should be updated to match Home address.
- **Status code:** None
- **Format:** [Modal component](https://design.va.gov/components/modal)
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29808&t=YpC93tIWZqgNt0Zt-1)
- **Content:**

Header: We’ve updated your home address

Your updated home address:

**[User entered address]**

We have this mailing address on file for you:

**[User entered address]**

Do you want to update your mailing address to match this home address? 

**[User entered address]**

Primary button: Yes

Secondary button: No

</details>


<details><summary>Successful update modal</summary>
	
- **Use case:** Once the user has made a selection in the modal, they’ll see a confirmation message with a close button. After closing the modal, a success alert will display in the relevant sections.
- **Status code:** None
- **Format:** [Modal component](https://design.va.gov/components/modal)
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29819&t=YpC93tIWZqgNt0Zt-1)
- **Content:**

Header: We’ve updated your mailing address

We’ve updated your mailing address to match your home address:

**[User entered address]**

Primary button: Close

</details>


<details><summary>Save error modal</summary>
	
- **Use case:** If the Mailing address update can’t be completed, the user will see an error modal with a close button. After closing the modal, an error alert will display in the Mailing address section.
- **Status code:** None
- **Format:** [Error modal component](https://design.va.gov/components/modal/#error)
- [Links to designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=3123-29823&t=YpC93tIWZqgNt0Zt-1)
- **Content:**

Header: We can’t update your mailing address

We're sorry. We can't update your information right now. We're working to fix this problem. Please check back later.

Primary button: Close

</details>


## Note on codes
No specific API codes are used in reference to this feature. The main logic for displaying the address change messaging is based on comparing the Home and Mailing address data to display the dialog modal if the addresses differ.

Within the modal dialog flow, the same API calls and error handing from standard address updates are used. Link to address validation use cases.

---

<details><summary>Archive | Home address is updated but does not match Mailing address, February 2024</summary>

# Contact information: Home address is updated but does not match Mailing address
**Last updated: February 2024**

If a user updates their Home address and it does not match their Mailing address, they will be prompted to review and update their Mailing address. Mailing address must be kept updated as it may be where Veterans receive VA bills, notices, and prescriptions.  

- [Initial brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/initiative-brief.md)
- [Discovery documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-change-messaging/discovery/documentation.md) 
- User flow and mock-up can be reviewed in the Behavior section of the [mobile canvas](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0%3A365&mode=design&t=rqPFqCwnOiocoCbM-1) (B-7, B-7.1, B-7.2)

## UX
- Uses the [modal](https://design.va.gov/components/modal) from the VA design system
- Address change modal is triggered only when an update is made to the home address, and the update does not match the mailing address.
- When the modal appears, the updated home address has already been saved to the profile.
- The modal will either appear:
	-  After address validation has run and the user has confirmed the address via a suggested address OR 
	- After validation has run and no address suggestions were provided/needed OR
	- After validation has run, and the user proceeds with updating their address as entered.
	
### User has updated home address, and mailing address is empty
- Modal appears telling user we don’t have a mailing address on file, asking if mailing should be added to match home
- [Desktop mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/25K3vb5)
- [Mobile mock-up](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/09Vb1eV)

### User has updated home address, and mailing address in profile doesn’t match
- Modal appears showing user two different addresses, asking if mailing should be updated to match home
- [Desktop mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-1007&mode=design&t=rqPFqCwnOiocoCbM-11)
- [Mobile mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-605&mode=design&t=rqPFqCwnOiocoCbM-11)

### Successful update
- Once the user has made a selection in the modal, they’ll see a confirmation message with a close button.
- After closing the modal, success alert will display in the relevant sections.
- [Success modal](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-1024&mode=design&t=fhDeYYDloWNkE2q5-11)
- [Success alert examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#saving-information) 

### Save error
- If the mailing address update can’t be completed, , they’ll see an error message with a close button.
- After closing the modal, error alert will display in the mailing address section.
- [Error modal mock-up](https://www.figma.com/file/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?type=design&node-id=0-1014&mode=design&t=6iSkKX2l8PqjFaHd-11)
- [Save error examples](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/use-cases/add-edit-delete-contact-info.md#save-error-information-cant-be-saved)


## Codes
No specific API codes are used in reference to this feature. The main logic for displaying the address change messaging is based on comparing the home and mailing address data to display the dialog modal if the addresses differ.

Within the modal dialog flow, the same API calls and error handing from standard address updates are used.

## Staging users
- Any staging test user with a mailing address can be used to test this feature ([staging user info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)).
- During active development **vets.gov.user+36@gmail.com** was the main user that was used, but as of 12/1/22 we can't use this user to test this use case.

</details>
