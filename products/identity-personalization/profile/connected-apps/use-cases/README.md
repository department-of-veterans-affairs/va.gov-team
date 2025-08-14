# Connected Apps Use Cases

**Last updated: August 2025**

- [User flow]
- [Figma files](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=298-11669&t=j1B5x3IF0Ay0GHyu-1)
- Test Rail QA

<details><summary>Archive | How to reproduce in staging</summary>

### View Connected apps
1. Go [staging.va.gov/profile/account-security](staging.va.gov/profile/account-security)
2. Log in with any of the users listed in the [connected apps section of our test case docs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-profile.md#connected-apps).
3. Go to the personalized menu in the upper right of the navigation, and click into the profile. You'll be dropped into the Personal information section of the profile.
4. Select Connected apps in the sidebar menu.

</details>

## Current experience
- The Connected apps page shows all apps connected to the Veterans VA.gov account. If there are none, none show.
- For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the user will be directed to the Profile Account Security section.


## Common use cases
### User logs in with LOA3 account

<details><summary>User does not have apps connected</summary>

- **Use case:** If a user does not have an app connected, they will see information about Connected apps and a link to go to the app directory. 
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=298-22108&t=j1B5x3IF0Ay0GHyu-1)
- **Content:** See designs

</details>


<details><summary>User has apps connected</summary>

- **Use case:** If a user has apps connected, they will see a list of their apps. Each app has a button to disconnect the app.
- **Status code:** 200
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=299-2384&t=j1B5x3IF0Ay0GHyu-1)
- **Content:** See designs

</details>


<details><summary>User selects 'Disconnect' button</summary>

- **Use case:** If a user selects the 'Disconnect' button a modal will prompt the user to confirm they'd like to disconnect the app.
- **Status code:** NA
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=304-5522&t=j1B5x3IF0Ay0GHyu-1)
- **Content:** See designs

</details>


<details><summary>Success - app disconnected</summary>

- **Use case:** Once the app has successfully been disconnected, a success alert will appear above the apps.
- **Status code:** NA
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=304-8635&t=j1B5x3IF0Ay0GHyu-1)
- **Content:** See designs

</details>


<details><summary>Error - app not disconnected</summary>

- **Use case:** If an error occurs and the app cannot be disconnected, an error alert will appear inline with the card.
- **Status code:** NA
- **Format:** See designs
- [Link to designs](https://www.figma.com/design/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?node-id=304-9580&t=j1B5x3IF0Ay0GHyu-1)
- **Content:** See designs

</details>


## Edge cases
### Validation
There are no validation use cases for this feature.


### Flags
[Blocked users documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/blocked-account.md)

[User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)


### System
[System error: Backend system down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/profile-shared-use-cases.md#system-errors)

---

<details><summary>Archive | Connected apps use cases, February 2024</summary>

# Connected Apps Use Cases

**Last updated:** Feburary 15, 2024

For all of these use cases, the user must be LOA3 (identity verified). If the user is not LOA3, the only thing they can access in profile is the Account Security section.

## Common use cases
### User logs in with LOA1 account
- [User logs in with an LOA1 account](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/use-cases/loa1-user.md)

### User logs in with LOA3 account
- [User needs to view or disconnect apps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/connected-apps/use-cases/view-and-disconnect-apps.md)

## Edge cases

### Flags
There are no flags associated with this feature.

### Validation
There are no validation use cases for this feature.

### System
- [Something has gone wrong and VA.gov can’t display any connected apps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/connected-apps/use-cases/system-cant-display-connected-apps.md)

## Flow diagrams
The [mobile page of the design file](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0%3A1&mode=design&t=52kJ3RZzhAkZMo0E-1) includes the user flow.

</details>
