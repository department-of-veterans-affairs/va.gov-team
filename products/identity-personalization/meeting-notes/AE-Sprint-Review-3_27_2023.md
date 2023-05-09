# Sprint Review - 3/27/2023

## Profile work

- Added Full Name and Disability Rating to the Personal Information page. 
- Conditional Process List: An extension of the design system's Process List component, but with a checkmark icon that is displayed if an item in the List is deemed to be complete.
	- Used in the Account Security page. Designed before the contract ended, and implemented at the beginning of this contract.
- Accessibility updates:
	- Address Validation updates:
		- during validation, the cancel button now says 'go back to edit'
		- instead of cancelling editing, it goes back to the editing state for the address field data.
	- Profile Info Table to Card migration
		- A repeated component was used to display information, and was not as flexible as it needed to be, and that resulted in accessibility issues.
		- Created a new component to simplify the layout and also provide a way for the information to be laid out in slightly different ways.
- Field Editing Page: A new page where we can enable a user to update just one section of their profile. (starting with mobile phone)
	- The aim is to reduce the misdirection that can happen in places like the Notification Settings page when a piece of information is needed before further actions can occur.
	- In active development. The page is built and is ready behind a feature toggle, but the next step is to add the form information to allow editing.
	- URL structure:  /edit?fieldName=mobilePhone&returnUrl=/notification-settings
- Remove redundent error alert when not all information is present from APIs
	  ![screenshot of alert present, that has since been removed](https://user-images.githubusercontent.com/8332986/217052929-f4fadb09-de11-425a-af42-4829d02f727e.png)
