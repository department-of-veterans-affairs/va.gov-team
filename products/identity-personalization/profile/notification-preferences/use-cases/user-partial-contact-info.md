# Notification settings: User has partial contact information
**Last updated:** Jan 10, 2024 `draft#2`

LOA3 users who sign in, go to the profile, and click into the notification settings page will see links to add or update contact info in their profile.

The notification settings page makes use of the [editing-as-a-subtask feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/editing-as-a-subtask/README.md) to assist users in updating their information. 

## Scenarios
### Future State not live yet - when text messaging and email channels are supported
#### missing email address with a mobile number present 
- GIVEN a user that isn't flagged/blocked and they have a mobile phone number is on file and an email address is missing
- WHEN they open the notification settings page
- THEN they see an alert that allows them to edit their mobile phone number
- AND a prompt to add an email address

#### missing mobile number with an email address present
- GIVEN a user that isn't flagged/blocked and an email address is on file and a mobile number is missing
- WHEN they open the notification settings page
- THEN they see an alert that allows them to edit the email address
- AND a prompt user to add a mobile number

## UX
If a user has some information, we display the information we have on file with links to edit. If they have one or the other, email or phone number, we display the information we have and prompt the user to add the additional information. In all cases, it is optional to provide the information, however if the user has no contact info on file we use a warning alert component, see use case: [user has no contact info on file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/use-cases/user-missing-contact-info.md)

- [Desktop mock-up, has email, doesnt have phone number](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A821&mode=design&t=MEFErXnhZjAAmpr4-1)
- [Desktop mock-up, has phone number, doesn't have email](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A969&mode=design&t=qGlUFpAiFQ8zwGc3-1)
- [Mobile  mock-up, has email, doesn't have phone number](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A611&mode=design&t=GlDA4LAmnkPBdkmG-1)
- [Mobile mock-up, has phone number, doesn't have email](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0-614&mode=design&t=GlDA4LAmnkPBdkmG-4)

Opting to edit or add the missing information will enter the user into the "editing-as-a-subtask" workflow which can be seen here:

- [Desktop mock-up](https://www.figma.com/file/zRlluj4zQgu4yNykyp3LjS/Profile---Editing-sub-task?type=design&node-id=0%3A166&mode=design&t=Af2eoJ2Sg5TonhQ2-1)
- [Mobile mock-up](https://www.figma.com/file/zRlluj4zQgu4yNykyp3LjS/Profile---Editing-sub-task?type=design&node-id=0%3A1&mode=design&t=Af2eoJ2Sg5TonhQ2-1)

Once they update or add their contact information, the workflow will bring them back to the notification settings page, where a success message will be displayed.

- [Desktop mock-up](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A1066&mode=design&t=fFXrAB6EhydHOLDF-1)
- [Mobile  mock-up](https://www.figma.com/file/e6JEtrwZCInKk9SjZktx2T/Profile---Notification-Settings?type=design&node-id=0%3A426&mode=design&t=fFXrAB6EhydHOLDF-1)

## Codes
N/A

## How to Reproduce 
### Future State - Add/edit phone or email, multiple scenarios

#### add missing mobile number with an email address present 
1. Sign into staging (any user without a mobile number will work, alternatively remove a mobile number from the user's contact information page) 
2. Go to https://staging.va.gov/profile/notification-settings 
3. Follow the link at the top of the notification settings page "add your mobile phone number to your profile"
4. You should see a new screen display with a form field for inputting a phone number
5. Saving will return you to the notification settings screen
6. Follow the link at the top of the notification settings page "update your email address"
7. Saving will again return you to the notification settings screen

#### How to reproduce add missing email address with a mobile number present  
1. Sign into staging (any user without a contact email address will work, alternatively remove the email address under the contact information page) 
2. Go to https://staging.va.gov/profile/notification-settings 
3. Follow the link at the top of the notification settings page "add your email address to your profile"
4. You should see a new screen display with a form field for inputting an email address
5. Saving will return you to the notification settings screen
6. Follow the link at the top of the notification settings page "update your mobile phone number"
7. Saving will again return you to the notification settings screen

