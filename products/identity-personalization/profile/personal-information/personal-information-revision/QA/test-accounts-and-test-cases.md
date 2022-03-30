# Profile Personal Information Test/Use Cases & Users

Last update 3/30/2022

[Test cases for LOA1 user and LOA3 user](#test-cases-for-loa1-user-and-loa3-user)<br />
[Test cases for Personal information page](#test-cases-for-personal-information-page)<br />
[Test cases for Cersonal information page](#test-cases-for-contact-information-page)<br />
[Test cases for blank state](#test-cases-for--blank-state)<br />
[Test cases for successful add](#test-cases--successful-add)<br />
[Test cases for unsuccessful add](#test-cases-for-unsuccessful-add)<br />
[Test case for save error](#test-case-for-save-error)<br />


### Test cases for LOA1 user and LOA3 user

| Test case                                 | Intended outcome                                             | Staging User           | Prototype link |
| ----------------------------------------- | ------------------------------------------------------------ | ---------------------- | -------------- |
| LOA1 user has not verified their identity | User sees warning message stating that we can't load all of their profile information, and they are prompted to verify their identity | Any LOA1 user          |                |
| Any LOA3 user logs in and selects Profile from the menu under their name in the header                           | User lands on the Personal information page           | Any verified LOA3 user |                |

### Test cases for Personal information page

| Test case                                                    | Intended outcome                                                                                                               | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| User navigates to **Personal information** page              | H1 reads "Personal information" and only fields on page are for Personal info. No contact info fields should be present.<br /> | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| User interacts with `Why do we ask for this?` component      | If closed, should open to reveal content<br />If open, should close to hide content                                            | Any LOA3 user | [Desktop] :triangular_flag_on_post:                          |
| User interacts with `How do I update my name, date of birth, or sex assigned at birth?` component | If closed, should open to reveal content<br />If open, should close to hide content       | Any LOA3 user | [Desktop]                                                    |
| User reviews Name, Sex assigned at birth and date of birth   | All three fields should be read-only and contain no buttons to edit or remove      | Any LOA3 user | [Desktop]
| User reviews Preferred name, Preferred pronouns, Gender identity, and Sexual orientation fields  | All four fields should be editable and contain an Edit button     | Any LOA3 user | [Desktop]         |

### Test cases for Contact information page

| Test case                                                    | Intended outcome                                                                         | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------ |
| User navigates to **Contact information** page in Profile    | and only fields on page are for Contact info. No personal info fields should be present. | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| User interacts with `Why do we ask for this?` component      | If closed, should open to reveal content<br />If open, should close to hide content | Any LOA3 user | [Desktop] :triangular_flag_on_post:                          |
| User interacts with `How do I update my name, date of birth, or sex assigned at birth?` component | If closed, should open to reveal content<br />If open, should close to hide content | Any LOA3 user | [Desktop]                                                    |


### Test cases for blank state

Pre-condition - Log in as test user.  If values already exist in Preferred name, Pronouns, Gender identity, and Sexual orientation, select a different test user whose Staging profile has not already been updated with these values.

| Test case                                        | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| User navigates to **Preferred name** section     | **Preferred name** section reads "Edit your profile to add a preferred name" and an Edit button appears directly below | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| User navigates to **Pronouns** section           | **Pronouns** section reads "Edit your profile to add a pronoun" and an Edit button appears directly below | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| User navigates to **Gender identity** section    | **Gender identity** section reads "Edit your profile to add a preferred name" and an Edit button appears directly below | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| User navigates to **Sexual orientation** section | **Sexual orientation** section reads "Edit your profile to add a preferred name" and an Edit button appears directly below | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |


### Test cases for successful add

Pre-condition: None.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Preferred name** section<br />2. User clicks Edit button<br />3. User enters a new value that does not exceed the stated character limit<br />4. User clicks the Save button | 1. The newly-saved value appears immediately below the **Preferred name** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| 1. User navigates to **Pronouns** section<br />2. User clicks Edit button<br />3. User selects "Pronouns not listed here"<br />4. User enters a new value into the text box that does not exceed the stated character limit<br />5. User clicks the Save button | 1. The newly-saved value(s) appears immediately below the **Pronouns** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| 1. User navigates to **Gender identity** section<br />2. User clicks the Edit button<br />3. User selects "A gender not listed here"<br />4. User enters a new value into the text box that does not exceed the stated character limit<br />5. User clicks the Save button | 1. The newly-saved value appears immediately below the **Gender identity** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| 1. User navigates to **Sexual orientation** section<br />2. User clicks the Edit button<br />3. User selects  "A sexual orientation not listed here"<br />4. User enters a new value into the text box that does not exceed the stated character limit<br />5. User clicks the Save button | 1. The newly-saved value appears immediately below the **Preferred name** section heading.<br />2. An "Update saved." confirmation message appears immediately below the newly-saved value. | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |

### Test cases for unsuccessful add

Pre-condition: None.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Pronouns** section<br />2. User clicks Edit button<br />3. User selects "Pronouns not listed here"<br />4. User leaves the text box blank<br />5. User clicks the Save button | 1. An error appears showing that the text field in the Prounouns section is required | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |
| 1. User navigates to **Pronouns** section<br />2. User clicks Edit button<br />3. User selects "Pronouns not listed here"<br />4. User enters a value that exceeds the field character limit<br />5. User clicks the Save button | 1. An error appears stating that the value exceeds the character limit | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |

### Test case for save error

Pre-condition: After logging in and loading the Personal information page on Staging, disconnect your device from Wi-Fi.

| Test case                                                    | Intended outcome                                             | Staging User  | Prototype link                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------------------------------------------------------------ |
| 1. User navigates to **Pronouns** section<br />2. User clicks Edit button<br />3. User selects one or more of the supplied values EXCEPT "Pronouns not listed here"<br />4. User clicks the Save button | 1. An error message is displayed immediately above the **Pronouns** field label and reads, "We're sorry.  We can't save your Pronouns at this time.  We're working to fix this problem.   Please try again or check back soon." | Any LOA3 user | [Mobile] :triangular_flag_on_post:<br />[Desktop] :triangular_flag_on_post: |



