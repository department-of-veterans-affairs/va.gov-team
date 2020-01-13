## User Story: 

As a person who lives on an overseas military base, I should not be able to list any other country besides the United States in my address in the VA.gov profile or on any VA benefit applications.

## Background:  

The authenticated experience team has been working on an update to the user profile that will allow for better error handling of overseas military base addresses ([details here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4386#issuecomment-568466453)). This is the TL;DR: currently, all address forms on VA.gov allow people to enter a country other than the United States if a person lives on an overseas military base even though US military bases are technically considered to be in the United States no matter where they are on the map. The updates we are making to the profile will allow a person to indicate they live on an overseas military base, and it will also prevent a person who lives on an overseas military base from selecting a country other than the United States.

Our team recommends that similar updates be made to the address forms in each of the benefit applications. However, these application updates do not need to happen immediately, and the profile updates we made are not dependent on the benefit applications also being updated. Updates to the benefit applications can happen any time and can be triaged accordingly depending on the priority of other work.

## Design MockUps 

Below are the designs for how to adapt the address field for each benefit application. Please note:

1. The example shown is for the health care application. While each benefit application shows the address field at different points in the process, I believe all applications do have at least one address field. We will not be providing separate mockups for each individual application, so please let us know if you have specific questions about how our proposal would fit into your application.
2. If there is more than one address form in a benefit application, only the Mailing Address (or equivalent) field needs to be updated to match the designs below.

### Address field within the application

**UX**

- Add a checkbox to the mailing/permanent address field that allows people to indicate they live on an overseas military base.
- If checked:
  - Default the country field to United states and disable the country menu so the user can not select another country.
  - Change "City" to "APO/FPO/DPO". This field remains required. The only options in this menu should be APO, FPO, DPO.
  - In the "State" menu, please remove all other states except Armed Forces America (AA), Armed Forces Europe (AE), and Armed Forces Pacific (AP).
- If the box is unchecked, the address form can be filled in normally.
  
**Copy**

- **Checkbox label**: I live on a United States military base outside of the United States
- **Helper text label**: Learn more about military base addresses
- **Helper text field**: The United States is automatically chosen as your country if you live on a military base outside of the country.

When the user arrives at the address page and they live on a US military base outside of the US they will see this:

![Form 10-10EZ - outside US military base address 1](https://user-images.githubusercontent.com/53535009/70589522-e68c6f00-1b9d-11ea-99a0-2c018607e958.png)

Same screen with helper text visible:

![Form 10-10EZ - outside US military base address 2](https://user-images.githubusercontent.com/53535009/70589553-fb690280-1b9d-11ea-8b4a-fb06a40a5b1e.png)

### Review Application

If the benefit application you are working on has a Review Application page, the designs below outline how the address field would need to change to accomodate overseas military addresses.

![Review step - accordion closed](https://user-images.githubusercontent.com/53535009/70590506-f22d6500-1ba0-11ea-8215-c653e954b60c.png)

When the user opens the Veteran Info section they will see this:

![Form 10-10EZ  Review step - accordion veteran info](https://user-images.githubusercontent.com/53535009/70590524-007b8100-1ba1-11ea-9357-2c01caa7d7d9.png)

When the user clicks the 'Edit' button for the Permanent address section to edit their address they will see this layout:

![Form 10-10EZ - veteran info edit](https://user-images.githubusercontent.com/53535009/70590410-9fec4400-1ba0-11ea-8bd7-d05230371e74.png)

## Tasks 

The steps that must be done by the team to complete the acceptance criteria 

- [ ] Review this ticket
- [ ] If necessary, meet with members of the authenticated experience team to answer any questions
- [ ] Implement address updates for [form name/number]

## Acceptance Criteria: 

The requirements that must be met in order to mark this user story as completed 

- [ ]  Address section of [form name/number] has been updated to better handle APO/FPO/DPO addresses
