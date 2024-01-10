# MHV Account Creation Error Handling

## Background
This document outlines how MHV Account Creation handling works for VA.gov, including the final error messages displayed to the user. MHV Account Creation can occurs through two approaches:

#### 1. Contextual messages on Health Tools
* [Refill Your Prescriptions](https://www.va.gov/health-care/refill-track-prescriptions/)
* [Send Secure Messages](https://www.va.gov/health-care/secure-messaging/)
* [View or Schedule Appointments](https://www.va.gov/health-care/schedule-view-va-appointments/)
* [Get Your Medical Records](https://www.va.gov/health-care/get-medical-records/)
* [View Lab & Test Results](https://www.va.gov/health-care/view-test-and-lab-results/)

#### 2. My Health Link Account Creation App
* [Invision prototype here](https://adhoc.invisionapp.com/share/9XRBC0J4TEH#/screens/355791070_My_Health_Link_TOC)

## MHV Account States
path: `src/applications/validate-mhv-account/constants.js`

#### States
```
export const ACCOUNT_STATES = {
  NEEDS_VERIFICATION: 'needs_identity_verification',
  DEACTIVATED_MHV_IDS: 'has_deactivated_mhv_ids',
  MULTIPLE_IDS: 'has_multiple_active_mhv_ids',
  NEEDS_SSN_RESOLUTION: 'needs_ssn_resolution',
  REGISTER_FAILED: 'register_failed',
  UPGRADE_FAILED: 'upgrade_failed',
  NEEDS_VA_PATIENT: 'needs_va_patient',
  NEEDS_TERMS_ACCEPTANCE: 'needs_terms_acceptance',
};
```

## MHV Account Creation Flow: Happy and Unhappy Paths
[Miro board here](https://miro.com/app/board/o9J_kxr3ebs=/)
![MHV Account Creation Flow](https://user-images.githubusercontent.com/21130918/56232682-5bc79480-604f-11e9-98bb-a8f81cf76395.png)


## MHV Account Creation Error Messages

* [MVI or My HealtheVet is down](#mvi-or-mhv-is-down)
* [Not found in MVI](#we-couldnt-verify-your-identity---not-found-in-mvi)
* [Not a VA patient](#not-a-va-patient)
* [Multiple My HealtheVet accounts](#multiple-my-healthevet-accounts)
* [Inactive My HealtheVet account](#inactive-mhv-account)
* [My HealtheVet account creation fails](#my-healthevet-account-creation-failed)
* [My HealtheVet account upgrade fails](#mhv-account-upgrade-fails)


---

## MVI or MHV is down

![MVI or MHV is down](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/mvi-down.png)

#### Reason this error appears: 
* MVI or MHV is not available due to a planned maintenance or unforeseen outage

#### Technical error handling:
- **MVI:** We have A user profile selector `isInMVI`, which looks at `profile.status` (derived from `va_profile.status` in the payload) in the Redux state as the MVI status. It will have the value `'OK'` if the user is in MVI and `SERVER_ERROR` if MVI is down. 
- **MHV**: Any errors that occur in regards to MHV related actions will populate the `profile.mhvAccount.errors` array in the Redux state. Currently, a generic error message is displayed, but this could be udpated to display messaging specific to the possible errors.

#### Frequency:
* historically MVI is down around once a week for a few minutes at a time.
* [MVI Grafana Dashboard here](http://grafana.vetsgov-internal/dashboard/db/mvi?orgId=1)

#### How to resolve: 
The user can try again later.

---

## We couldn't verify your identity - Not Found in MVI

![Verify identity fails](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/verify-your-identity-error.png)

#### Reason this error appears: 
A DS Logon or ID.me account that has completed the identity proofing process and a matching account cannot be found in MVI.

#### Technical error handling:
- We need an issue to add in MVI `NOT_FOUND` error handling
- MHV account status return SNN not matching. The system checks `profile.mhvAccount.accountState` and gets a response `account_state === needs_snn_resolution`.


#### Frequency:
TBD

#### How to resolve: 
The user can call the VA Benefits hotline or submit a support ticket through DEERS.

---

## Not a VA patient

![Not a VA patient](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/not-a-va-patient.png)

#### Reason this error appears: 
* The user isn't listed as VA patient
* The user hasn't enrolled in VA health care

## Technical error handling:
The system checks `profile.mhvAccount.accountState` and gets a response `account_state === needs_va_patient`.
- currently not happening, following up on whether we should reintroduce and any complications

#### Frequency:
TBD

#### How to resolve: 
The user can call their local VA medical facility or enroll VA healthcare.

---

## Multiple My HealtheVet Accounts

![Multiple MHV Accounts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/multiple-mhv-accounts.png)

#### Reason this error appears: 
The user has multiple active accounts and we do not know which one to upgrade. 

#### Technical error handling:
We fetch the `/mhv_account` endpoint (the corresponding action is`fetchMHVAccount` from `src/platform/user/profile/actions.js`) to get the user's MHV account status. The relevant `account_state` is `has_multiple_active_mhv_ids`.

#### Frequency:
TBD

#### How to resolve: 
The user can call the My HealtheVet Help Desk or submit a support ticket to My HealtheVet.

---

## Inactive MHV Account

![MHV Account is inactive](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/reactivate-your-account.png)

#### Reason this error appears: 
The user is associated with a deactivated My HealtheVet account.

#### Technical error handling:
We fetch the `/mhv_account` endpoint (the corresponding action is`fetchMHVAccount` from `src/platform/user/profile/actions.js`) to get the user's MHV account status. The relevant `account_state` is `has_deactivated_mhv_ids`.

#### Frequency:
TBD

#### How to resolve: 
The user can call the My HealtheVet Help Desk or submit a support ticket to My HealtheVet.

---

## My HealtheVet Account Creation Failed

![MHV Account Creation Fails](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/mhv-account-creation-failed.png)

#### Reason this error appears: 
VA.gov failed to create a My HealtheVet account for the user because...
* TBD
* TBD

#### Frequency:
TBD

#### Technical error handling:
- This will depend on the value in `profile.mhvAccount.accountState` in the Redux state. For this scenarios, it will be `register_failed`. It just gets set to the respective value after the action `createMHVAccount` receives an error response.
- We may also get a backend error sent to the frontend at this time (e.g., 403 forbidden). In this scenario, we will default to this error message saying "Creation Failed"

#### How to resolve: 
The user can call the My HealtheVet Help Desk or submit a support ticket to My HealtheVet.

---

## MHV account upgrade fails

![Upgrade fails](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/error-messages/health-tools/upgrade-fails.png)

#### Reason this error appears: 
MHV upgrade fails for a MHV Basic, MHV Advanced, DS Logon or ID.me account that has completed the identity proofing process.

#### Technical error handling:
- This will depend on the value in `profile.mhvAccount.accountState` in the Redux state. For this scenarios, it will be `upgrade_failed`. It just gets set to the respective value after the action `upgradeMHVAccount` receives an error response.
- We may also get a backend error sent to the frontend at this time (e.g., 403 forbidden). In this scenario, we will default to this error message saying "Upgrade Failed"


#### Frequency:
TBD

#### How to resolve: 
The user can call the My HealtheVet Help Desk or submit a support ticket to My HealtheVet.

---
