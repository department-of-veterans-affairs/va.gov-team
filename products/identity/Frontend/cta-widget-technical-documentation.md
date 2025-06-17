# CTA-Widget Technical Documentation

## Audit

The following audit was conducted on 06/13/25.

Current State:
- The CTA-Widget is laid out similarly to how the Downtime Banner functions.
  - There is a central component (located at `index.js`) for displaying the banner across the site.
  - That component utilizes information it pulls from `ctaWidgets.js` as well as its own conditional logic to determine which CTA message to render.
  - There are a number of message components in `components/messages`, each containing their own layouts.
  - The appropriate message is selected and rendered.
- I noticed some lingering MHV references. Not sure if this is something we're looking to maintain over the long-term or not.

Tech Debt:
- The `CallToActionWidget`...
  - Is class-based instead of functional
  - There's also a significant amount of conditional logic to determine which CTA to display. This can probably be reworked and could lead to performance improvements.
- Message components do not appear to be generalized and all use different content layouts. Also, some messages appear to be duplicates (see `Unauthed.jsx` and `DirectDeposit.jsx`).
- Current code coverage is lacking (see image below).

![Image](https://github.com/user-attachments/assets/2c6cac18-b9fd-41df-a28c-8e58f26dfb17)

Next steps:
- Refactor the `CallToActionWidget` to be functional and more concise.
- Update and add additional tests to flesh out code coverage.
- Review messages to ensure a certain level of consistency.

## File Structure
```
src/applications/static-pages/cta-widget
|-- components
|   |-- messages
|   |   |-- DirectDeposit
|   |   |   |-- MFA.jsx
|   |   |   `-- Unauthed.jsx
|   |   |-- mvi
|   |   |   `-- NotFound.jsx
|   |   |-- ChangeAddress.jsx
|   |   |-- DeactivatedMHVIds.jsx
|   |   |-- DirectDeposit.jsx
|   |   |-- HealthToolsDown.jsx
|   |   |-- MultipleIds.jsx
|   |   |-- NeedsSSNResolution.jsx
|   |   |-- NeedsVAPatient.jsx
|   |   |-- NoMHVAccount.jsx
|   |   |-- OpenMyHealtheVet.jsx
|   |   |-- RegisterFailed.jsx
|   |   |-- SignIn.jsx
|   |   |-- SignInOtherAccount.jsx
|   |   |-- UpgradeAccount.jsx
|   |   |-- UpgradeFailed.jsx
|   |   |-- VAOnlineScheduling.jsx
|   |   `-- Verify.jsx
|   `-- CallToActionAlert.jsx
|-- tests
|   |-- NoMHVAccount.unit.spec.jsx
|   `-- index.unit.spec.jsx
|-- constants.js
|-- ctaWidgets.js
`-- index.js
```

## File Overview
`index.js`
- Contains `CallToActionWidget`, the primary component for the CTA-Widget.
- The main purpose of this component is to render the appropriate Call To Action (CTA) and it relies heavily on `ctaWidgets.js` and the components located in the `messages` directory to do so.
- See the above audit for a general overview of what that process looks like.

`ctaWidgets.js`
- This file contains various constants used by the `CallToActionWidget`. The data from this file is used to determine how the `CallToActionWidget` gets rendered.
- The most notable constant is `ctaWidgetsLookup`, which contains important data about each CTA widget. Each entry corresponds to a `CTA_WIDGET_TYPES` (defined in the same file) and contains data in the following format:
```jsx
    {
        id: CTA_WIDGET_TYPES.WIDGET_TYPE, // CTA_WIDGET_TYPES
        deriveToolUrlDetails: () => ({
        url: 'some/url/here', // string
        redirect: false, // boolean
        }),
        hasRequiredMhvAccount: () => false, // boolean
        isHealthTool: false, // boolean
        mhvToolName: "some string", // string | null
        requiredServices: backendServices.SERVICE_NAME, // backendServices | null
        serviceDescription: 'another string', // string
  }
  ```

`constants.js`
- This file contains basic constants used by the `CallToActionWidget`.
- Namely `MHV_ACCOUNT_TYPES`, `ACCOUNT_STATES`, and `ACCOUNT_STATES_SET`.

`NoMHVAccount.unit.spec.jsx` and `index.unit.spec.jsx`
- These are currently the only tests present for the CTA-Widget and are a bit lacking in terms of coverage (see the audit above).

`CallToActionAlert.jsx`
- This file contains the `CallToActionAlert` component, which is the most generalized component that most `message` components take advantage of.
- Messages can use this to display a basic call to action (a heading, text, and 2 buttons). Messages can pass through custom strings for all of these and even specific functionality for the primary and secondary buttons.
- It's important to note that NOT all messages utilize this component.

`messages`
- `DirectDeposit/MFA.jsx`
  - Alert to show a user who needs to verify their identity for Direct Deposits.
- `DirectDeposit/Unauthed.jsx`
  - Alert to show a user who is unauthenticated needs to Sign-In for Direct Deposits.
- `mvi/NotFound.jsx`
  - Alert to show a user whose identity cannot be verified.
- `ChangeAddress.jsx` 
  - Alert to show a user who needs to Sign-In in order to change addresses.
- `DeactivatedMHVIds.jsx`
  - Alert to show a user whose My HealtheVet account is inactive.
- `DirectDeposit.jsx`
  - Alert to show a user who needs to Sign-In for Direct Deposits.
- `HealthToolsDown.jsx`
  - Alert to show a user when health tools are down.
- `MultipleIds.jsx`
  - Alert to show a user that has more than one active My HealtheVet account.
- `NeedsSSNResolution.jsx`
  - Alert to show a user when their SSN can't be matched.
- `NeedsVAPatient.jsx`
  - Alert to show a user when their VA Patient record can't be matched.
- `NoMHVAccount.jsx`
  - Alert to show a user with no My HealtheVet account.
- `OpenMyHealtheVet.jsx`
  - Alert to show a user trying to open My HealtheVet.
- `RegisterFailed.jsx`
  - Alert to show a user that registering their My HealtheVet account failed.
- `SignIn.jsx`
  - Alert to show a user trying to sign in.
- `SignInOtherAccount.jsx`
  - Alert to show a user that has an MHV basic account and is not verified.
- `UpgradeAccount.jsx`
  - Alert to show a user trying to upgrade their My HealtheVet account.
- `UpgradeFailed.jsx`
  - Alert to show a user that upgrading their My HealtheVet account failed.
- `VAOnlineScheduling.jsx`
  - Alert to show a user trying to manage their VA appointments.
- `Verify.jsx`
  - Alert to show a user that is not verified.

## Dependencies
The CTA-Widget relies on a number of platform dependencies such as monitors, actions, selectors, feature-toggles, constants, utilities, etc. Each message component is independent of the others, and it appears that teams have added various dependencies to each of them. These can range from things like VA design components to components located elsewhere on the site. Care should be taken when updating CTA files to ensure dependencies are still valid. The CTA-Widget is highly coupled to other parts of the site and it may be worth combing through each file to see if the number of dependencies can be reduced.

## Instructions for Contributing to or Updating the Widget
As code owners, Identity should be able to make updates/changes without issue unless...

  1. Changes are made to the component that impact its overall look or visibility.
  2. Changes to a message belonging to another team are made.

If either of the above scenarios occur, the changes should be communicated to the affected teams and approved before being merged to main.
