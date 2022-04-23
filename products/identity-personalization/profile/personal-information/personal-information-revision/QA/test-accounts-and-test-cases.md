# Profile Personal Information Test/Use Cases & Users

Last update 3/31/2022<br/>
GH Ticket: #34466

[Test cases for LOA1 user and LOA3 user](#test-cases-for-loa1-user-and-loa3-user)<br />
[Test cases for Personal information page](#test-cases-for-personal-information-page)<br />
[Test cases for Contact information page](#test-cases-for-contact-information-page)<br />
[Test cases for blank state](#test-cases-for-blank-state)<br />
[Test cases for successful add](#test-cases-for-successful-add)<br />
[Test cases for unsuccessful add](#test-cases-for-unsuccessful-add)<br />
[Test case for save error](#test-case-for-save-error)<br />


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User           | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ---------------------- | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user          |    [Desktop](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/QA/images/Security_error.png)            |
| Any LOA3 user logs in and selects Profile from the menu under their name in the header                           | User lands on the Personal information page           | Any verified LOA3 user |  [Mobile](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/ZODxr23)<br />[Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3)              |

### Test cases for Personal information page

| Test case                                                    | Intended outcome                                                                                                               | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| User navigates to **Personal information** page              | H1 reads "Personal information" and the only fields on page are for Personal info. No contact info fields should be present.<br /> | Any LOA3 user | [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/zxoPk34) |
| User interacts with `How to update your legal name` component      | If closed, should open to reveal content<br />If open, should close to hide content                                            | Any LOA3 user | [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/zxoPk34)                          |
| User interacts with `How to fix an error in your name or date of birth` component | If closed, should open to reveal content<br />If open, should close to hide content       | Any LOA3 user | [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/OmjMy8G)                                                    |
| User reviews Date of birth   | Field should be read-only and contain no buttons to edit or remove      | Any LOA3 user | [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/zxoPk34)
| User reviews Preferred name and Gender identity fields  | Both fields should be editable and contain an Edit button     | Any LOA3 user | [Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/zxoPk34)         |

### Test cases for Contact information page

| Test case                                                    | Intended outcome                                                                         | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------ |
| User navigates to **Contact information** page in Profile    | H1 reads "Contact information" and the only fields on page are for Contact info. No personal info fields should be present.| Any LOA3 user | [Desktop Top](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/profile_contact_info_top.png) [Desktop Bottom](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/profile_contact_info_bottom.png) |
| User interacts with `Which benefits and services does VA use this contact infomation for?` component      | If closed, should open to reveal content<br />If open, should close to hide content | Any LOA3 user | [Desktop](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/Profile_Contact_FAQ_Benefits%2Bservices.png) |

### Test cases for blank state

Pre-condition - Log in as test user.  If values already exist in Preferred name and Gender identity fields, select a different test user whose Staging profile has not already been updated with these values.

| Test case                                        | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| User navigates to **Preferred name** section     | **Preferred name** section reads "Edit your profile to add a preferred name" and an Edit button appears directly below | Any LOA3 user | [Mobile](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/ZODxr23)<br />[Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3) |
| User navigates to **Gender identity** section    | **Gender identity** section reads "Edit your profile to add a preferred name" and an Edit button appears directly below | Any LOA3 user | [Mobile](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/ZODxr23)<br />[Desktop](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/dlVxdm3) |


### Test cases for successful add

Pre-condition: Must be a logged in LOA3 user.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Preferred name** section<br />2. User clicks Edit button<br />3. User enters a new value that does not exceed the stated character limit<br />4. User clicks the Update button | 1. The newly-saved value appears immediately below the **Preferred name** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Desktop](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/%20profile%20-%20personal%20information%20-%20preferred%20name%20success%20state.pdf)|
| 1. User navigates to **Gender identity** section<br />2. User clicks the Edit button<br />3. User selects "Woman" <br />3. User clicks the Update button | 1. The newly-saved value appears immediately below the **Gender identity** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Desktop] same as above |

### Test cases for unsuccessful add

Pre-condition: Must be a logged in LOA3 user.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Preferred name** section<br />2. User clicks Edit button<br />3. User leaves the text box blank<br />4. User clicks the Update button | 1. An error appears showing that the text field in the Preferred name section is required | Any LOA3 user | [Desktop] :triangular_flag_on_post: |
| 1. User navigates to **Gender identity** section<br />2. User clicks Edit button<br />3. User does not make a selection<br />4. User clicks the Update button | 1. An error appears stating that a value is required | Any LOA3 user | [Desktop] :triangular_flag_on_post: |

### Test case for save error

Pre-condition: After logging in and loading the Personal information page on Staging, use browser developer tools to simulate Offline mode.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Gender identity** section<br />2. User clicks Edit button<br />3. User selects one or more of the supplied values<br />4. User clicks the Update button | 1. An error message is displayed immediately above the **Preferred Name** field label and reads, "We're sorry.  We can't save your Preferred name at this time.  We're working to fix this problem.   Please try again or check back soon." | Any LOA3 user | [Desktop](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/profile_contact_error.png) |



