# [Pattern] Help users to... Know when their information is prefilled

## Is your feature request related to a problem? Please describe.

This feature request for a prefill pattern addresses the challenge of effectively managing prefilled data in forms for logged-in Veterans. Currently, when Veterans access forms, they frequently encounter prefilled information derived from their authenticated profiles. However, they often face confusion regarding the source of this data, how to edit it, and the impact of those edits. To enhance the efficiency and accuracy of completing forms, Veterans need a clear and consistent way for understanding and managing prefilled data. This will help them save time, minimize errors, and navigate the benefits or services application process more smoothly.

## Describe the solution you'd like

This prefill pattern will include the following components and content:

- **Alerts**
  - Unauthenticated alert
  - Authenticated alert
  - Prefilled info alert
  - Success alerts that state where the updated info is saved

- **Address or Card variations** (including locked and editable states)
  
- **Buttons** with language that confirms where the user is saving their updated info to (e.g., “Save to profile”)

- **Directions for updating profile data**

- **Instructions for calling/linking to edit**

**For unauthenticated users:**
- They will see an unauthenticated alert at the top of the form informing them to sign in to update their information online.
<img width="641" alt="Screenshot 2024-09-06 at 9 26 29 AM" src="https://github.com/user-attachments/assets/006bd600-f9eb-42f4-ae56-0367d3c3104c">

- Once signed in, before they begin the form, users will see an alert stating “Note: Since you’re signed in to your account, we can prefill part of your form based on your account details. You can also save your form in progress and come back later to finish filling it out.”
<img width="650" alt="Screenshot 2024-09-06 at 9 27 12 AM" src="https://github.com/user-attachments/assets/a1b282bc-bd70-4c5e-9dcd-7488896846d0">

**Within the form:**
- Users will be shown a locked view of certain data (e.g., SSN, DOB) that is not editable on the website. This component will either be an Address or Card component.
- A note below the locked data will explain how to update their information.
<img width="560" alt="Screenshot 2024-09-06 at 9 27 59 AM" src="https://github.com/user-attachments/assets/05e40ccc-b6a4-49b3-ba28-fb60ee09ee54">
<img width="535" alt="Screenshot 2024-09-06 at 9 28 47 AM" src="https://github.com/user-attachments/assets/ac66db6a-c217-45e2-a498-9a194cbd43bb">


**When users get to an edit page:**
- An alert at the top informing users, “We've prefilled some of your information from your account. If you need to correct anything, you can select edit below.”
- A note at the top informing the user where their changes will be saved. For example, “Note: Any updates you make here will only be reflected in this form.”
- An unlockable view of their data (e.g., mailing address) which will also have an Edit link. This component will either be an Address or Card component.
<img width="588" alt="Screenshot 2024-09-06 at 9 29 12 AM" src="https://github.com/user-attachments/assets/a9c912aa-8b79-4679-9d71-e334a6c368e5">
<img width="569" alt="Screenshot 2024-09-06 at 9 33 11 AM" src="https://github.com/user-attachments/assets/d2d42798-303a-4777-9645-7fa092e81fb5">


**When the user clicks on the Edit link:**
- They will be taken to an edit page displaying their prefilled data within the form fields. OR
- The user will see their previously provided data in a locked format (Card component) and the form fields will NOT be prefilled.
<img width="550" alt="Screenshot 2024-09-06 at 9 29 51 AM" src="https://github.com/user-attachments/assets/0383f3e8-c737-4adc-9122-0562ddbeec38">
<img width="574" alt="Screenshot 2024-09-06 at 9 39 06 AM" src="https://github.com/user-attachments/assets/61b358a3-39e3-4713-9982-17e6875dc779">


**Once a user updates their info:**
- A success alert will appear with language that confirms that their update was successful and their changes have either been saved to their VA.gov profile or only to this form.
<img width="552" alt="Screenshot 2024-09-06 at 9 30 18 AM" src="https://github.com/user-attachments/assets/ea529e68-3928-4986-bd45-6c46ee07748c">


## Describe alternatives you've considered
N/A

## Additional context
User research is currently being conducted and some design decisions are still pending. For instance, the choice between using Card or Address components for presenting locked and unlockable data formats has not yet been finalized. We will update the proposal with the final design decisions once our research and analysis are complete.

**Design files:** [Figma](https://www.figma.com/design/2j01RTqCSJRy4lX3eUOiod/AE-Design-Patterns---Prefill?node-id=11-52&t=HFRsFEFVGAT6hIXz-1)

## When to use this pattern
- You need to display and manage prefilled data in forms for logged-in Veterans. The pattern is designed to handle the complexities of showing, editing, and updating prefilled information from authenticated user profiles.
- You aim to ensure consistency in how prefilled data is handled across various VA.gov applications. This pattern will help standardize the approach to displaying and editing prefilled information.

## When to consider something else
- The form or application does not involve authenticated users or does not need to display or manage prefilled data based on user profiles. The pattern specifically addresses scenarios where data is prefilled from a logged-in user’s profile.
- The form or application only requires simple data entry without prefilled information or does not involve complex data editing scenarios. If the form does not need to handle prefilled data or provide editing functionality, the pattern may not be necessary.
- The form relies on data that is not sourced from authenticated user profiles.
