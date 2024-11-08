# Help users to...Update prefilled information

# Pattern Description
The "Update Prefilled Information" pattern allows users to easily review and update prefilled data in forms, ensuring their profile information remains accurate and up to date. When users encounter outdated or incorrect prefilled fields, they can edit the data directly within the form and save the changes to their profile. This pattern helps reduce confusion by clearly indicating which information can be edited, improves data accuracy, and streamlines the form-filling process, especially in platforms like VA.gov where accurate user data is essential for processing services and benefits.

# Additional Context
User research is currently being conducted and some design decisions are still pending. We will update the proposal with the final design decisions once our research and analysis are complete.

**Design files**: [Figma](https://www.figma.com/proto/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=3387-41500&t=V7DRzM1LNEggmS5I-1)

# Why USWDS Needs This Component
Across federal websites, users are often required to fill out forms, some of which are prefilled with data from their profiles. However, many users encounter the issue of outdated or incorrect prefilled information, which can cause frustration and confusion. Currently, VA platforms are lacking a consistent, user-friendly way for users to easily edit prefilled information, as well as a clear path to understand which information can be updated and how to do so. This issue could also be prevalent across other government platforms, where users may encounter similar challenges with managing prefilled data.

The "Update Prefilled Information" pattern addresses these gaps by enabling users to easily review and update outdated or inaccurate data directly within the form.

### Problems This Pattern Solves:
- **Outdated or inaccurate prefilled data**: Users often encounter prefilled information that is no longer current. The pattern offers an intuitive way for users to update their data as they fill out forms.
- **User confusion around profile data**: Users need a clear, consistent mechanism for understanding and updating their profile information. This pattern streamlines that process, removing ambiguity about which data is prefilled and which can be updated.
- **Data quality**: Allowing users to directly update prefilled information helps maintain and improve the accuracy of profile data over time.
- **Cognitive load and user frustration**: Simplifying the process of updating prefilled information reduces cognitive load and frustration, improving user satisfaction and form completion rates.

# Support for Federal Laws, Guidance, and Policies:
- **Section 508**: The pattern supports accessibility standards by enabling users with disabilities to easily update and confirm their prefilled information.
- **The U.S. Digital Services Playbook**: By focusing on user-centered design and creating a seamless process for updating prefilled information, this pattern embodies the Playbook’s guidance to improve federal digital services.

# How the Pattern Works

### Components: 
- **Alerts**:
  - Unauthenticated alert
  - Authenticated alert → 2 variations shown below
  - Prefilled info alert → 3 variations shown below
  - Success alert that confirms the data has been saved and a message indicating where the changes have been saved to.

- **Display of uneditable data**:
  - Option 1: Appears in “new review style” format
  - Option 2: Gray card
  - Option 3: White card

- **Display of editable data**:
  - Option 1: Appears in “new review style” format with edit links
  - Option 2: White card with “Edit” button

- **Indication of Immutable Fields**:
  - For information that cannot be edited, a message will be displayed to users explaining why they cannot edit this information and how they can edit it. 
    - Option 1: Message is displayed in an “Additional Information” component
    - Option 2: As a note that is always visible

- **Buttons with language that confirms where the user is saving their updated info to** (e.g., “Save to profile”)

- **Question asking users where they wish to save their changes**: to both form and profile or only to the form

### For unauthenticated users:
- They will see an unauthenticated alert at the top of the form informing them to sign in to access the prefilled information feature.

![Screenshot 2024-11-08 at 12 51 27 PM](https://github.com/user-attachments/assets/6f875947-328b-46ec-9a5d-d086f796ff21)

- Once signed in, before they begin the form, users will see an alert stating: "Note: Since you’re signed in, we can prefill part of your form based on your profile details. You can also save your form in progress and come back later to finish filling it out."

![Screenshot 2024-11-08 at 12 55 52 PM](https://github.com/user-attachments/assets/7c9f65c0-0fbd-423e-bc84-c3e2d3f3eb2e)

  **OR**
  
- This alert below with a header stating “We can prefill some of your information.”

![Screenshot 2024-11-08 at 12 58 40 PM](https://github.com/user-attachments/assets/22570fb7-da89-4da6-91f5-f08436b99304)



### Within the form:
- Users will be shown certain data (e.g., SSN, DOB) that is not editable on the website.
  - Option 1: In a white card

![Screenshot 2024-11-08 at 1 05 16 PM](https://github.com/user-attachments/assets/2d88abd2-afdb-43b9-8432-c6f2e86a7024)


   - Option 2: In a gray card

![Screenshot 2024-11-08 at 1 06 05 PM](https://github.com/user-attachments/assets/59446090-cd28-427a-b910-75914f5dc66e)

  - Option 3: In the “new review style” format

![Screenshot 2024-11-08 at 1 06 38 PM](https://github.com/user-attachments/assets/76bd5015-45a5-4289-9b68-2e0c14f1459c)


- A note below the uneditable data will explain how to update their information and why it is uneditable on the site.
  - Option 1: Additional information component

![Screenshot 2024-11-08 at 1 07 03 PM](https://github.com/user-attachments/assets/12cf10c9-20ee-46fb-a448-2a6f799096a4)

  - Option 2: Always visible note

![Screenshot 2024-11-08 at 1 07 45 PM](https://github.com/user-attachments/assets/ffec467d-0798-4130-aae6-6233024f1b3b)


### When users get to a page with editable information:
- An info alert at the top informing users about their prefilled information and where their changes will be saved
  - 3 variations shown below 

![Screenshot 2024-11-08 at 1 01 09 PM](https://github.com/user-attachments/assets/cae98c7e-a400-4b14-a67d-0dbe1acda9f2)

![Screenshot 2024-11-08 at 1 01 56 PM](https://github.com/user-attachments/assets/9cd4e071-0d43-4ffb-987b-9335e2b07648)

![Screenshot 2024-11-08 at 1 02 33 PM](https://github.com/user-attachments/assets/f89962ef-b7d6-436e-9093-2ef717eb0534)


- View of their editable data:
  - Displayed as white cards with edit links

![Screenshot 2024-11-08 at 1 10 17 PM](https://github.com/user-attachments/assets/d9a59b15-905c-411d-bdf8-e8aa2a66342b)

  - ‘New review style” format with edit links 

![Screenshot 2024-11-08 at 1 11 01 PM](https://github.com/user-attachments/assets/710ec571-0f8c-4305-94ba-4afbba62c46d)


### When the user clicks on the Edit link:
- They will be taken to an edit page displaying their prefilled data within the form fields
- The form will have a button that states “Save to profile” 

![Screenshot 2024-11-08 at 1 13 51 PM](https://github.com/user-attachments/assets/eaf06244-a489-43ce-9e56-87e4b20698a3)

**OR**

- The form will allow users to choose whether they want to update their information in both the form and their profile, or only in the form. This flow consists of:
  - Radio question
  - Prefill alert notifying users they can choose

![Screenshot 2024-11-08 at 1 15 34 PM](https://github.com/user-attachments/assets/b7cce521-e144-4fd0-bc1c-1083a3ea49a6)


### Once a user updates their info:
- A success alert will appear with language that confirms that their update was successful and their changes have either been saved to both their VA.gov profile and form or only to this form

![Screenshot 2024-11-08 at 1 16 43 PM](https://github.com/user-attachments/assets/c26eeae8-0eeb-403d-bc1e-874bb2eaf8e4)

![Screenshot 2024-11-08 at 1 17 12 PM](https://github.com/user-attachments/assets/7f8be22b-c6d2-4ca5-b5f8-c82c25b7ee93)




### On the Review page:
- Users can edit data from the review page by selecting the “edit” link. It will take them to the appropriate edit page. Once the user clicks the "Save" button, it will return the user back to the review page.
- When updating info from the review page, the success alert will appear at the top of the appropriate section like so:

![Screenshot 2024-11-08 at 1 19 08 PM](https://github.com/user-attachments/assets/d219b8e3-deb7-46e9-8675-6295655a6868)


## Real-world Examples
- **VA.gov**: VA.gov allows users to update their profiles. However, this functionality is inconsistent and not always intuitive when used across different VA applications. Our "Update Prefilled Information" pattern would provide a standardized, user-friendly experience across all VA platforms.
- **IRS**: The IRS website allows users to update their personal information, such as address or banking details. This is a similar use case for updating prefilled form data.
- **HealthCare.gov**: When users go through the application for health insurance, prefilled fields from their account are displayed. Similar to our pattern, this system allows users to easily update outdated information before submitting.

# When to Use This Pattern and When to Consider Something Else

### When to Use:
- Form-filling scenarios where logged-in user data is prefilled (e.g., applications for benefits, profile updates).
- Situations where users need to correct or update information, especially when accurate data is required for future processes.

### When to Consider Something Else:
- The form does not involve authenticated users or does not need to display or manage prefilled data based on user profiles. The pattern specifically addresses scenarios where data is prefilled from a logged-in user’s profile.
- The form only requires simple data entry without prefilled information or does not involve complex data editing scenarios. If the form does not need to handle prefilled data or provide editing functionality, the pattern may not be necessary.
- The form relies on data that is not sourced from authenticated user profiles.
