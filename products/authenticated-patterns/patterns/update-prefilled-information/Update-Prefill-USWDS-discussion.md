# Help users to...Update prefilled information

# Pattern Description
The "Update Prefilled Information" pattern allows users to easily review and update prefilled data in forms, ensuring their profile information remains accurate and up to date. When users encounter outdated or incorrect prefilled fields, they can edit the data directly within the form and save the changes to their profile. This pattern helps reduce confusion by clearly indicating which information can be edited, improves data accuracy, and streamlines the form-filling process, especially in platforms like VA.gov where accurate user data is essential for processing services and benefits.

# Additional Context
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
  - Authenticated alert
  - Prefilled info alert
  - Success alert that confirms the data has been saved and a message indicating where the changes have been saved to.

- **Display of uneditable data**:
  - White card

- **Display of editable data**:
  - White card with “Edit” button

- **Indication of Immutable Fields**:
  - For information that cannot be edited, a message will be displayed to users explaining why they cannot edit this information and how they can edit it. 
    - Note that is always visible
      
- **Radio button question asking users where they wish to save their changes**: to both form and profile or only to the form

### For unauthenticated users:
- They will see an unauthenticated alert at the top of the form informing them to sign in to access the prefilled information feature.

![Screenshot 2024-11-08 at 12 51 27 PM](https://github.com/user-attachments/assets/6f875947-328b-46ec-9a5d-d086f796ff21)

- Once signed in, before they begin the form, users will see an alert with a header stating “We've prefilled some of your information.”

![Screenshot 2024-12-03 at 2 23 57 PM](https://github.com/user-attachments/assets/22a5edca-1af0-4ee1-a050-5abd64db9873)


### Within the form:
- Users will be shown certain data (e.g., SSN, DOB) that is not editable on the website.

In a white card

![Screenshot 2024-12-04 at 10 51 30 AM](https://github.com/user-attachments/assets/70dede49-db94-4533-9356-9de6af5b911b)

- A note below the uneditable data will explain how to update their information and why it is uneditable on the site.

![Screenshot 2024-11-08 at 1 07 45 PM](https://github.com/user-attachments/assets/ffec467d-0798-4130-aae6-6233024f1b3b)


### When users get to a page with editable information:

- View of their editable data:
  - Displayed as white cards with edit links
  - Statement above white card reads: "Confirm the contact information we have on file for you"

<img width="513" alt="Screenshot 2024-12-03 at 1 57 31 PM" src="https://github.com/user-attachments/assets/3e2dd2c0-0957-4246-a23e-a66e654ef916">


### When the user clicks on the Edit link:
- They will be taken to an edit page displaying their prefilled data within the form fields
- If updates to the form will also automatically save to the user's profile, the alert below is displayed
  
![Screenshot 2024-12-03 at 2 20 21 PM](https://github.com/user-attachments/assets/2863e0bf-2190-454d-8106-ecacf8eb7044)

- If a form involves a situation where the user may not want to save the updated information to their profile (for ex., when mailing prescriptions to a temporary address), a radio button will give users the option to choose whether they want the changes to apply only to the form, or to both the form and their profile

![Screenshot 2024-12-03 at 2 17 04 PM](https://github.com/user-attachments/assets/a4449b91-b738-473b-8e3a-c294f749658f)

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
