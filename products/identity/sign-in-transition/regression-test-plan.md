# Regression Test Plan for Secure Sign-in Transition

## 1. Modal
### Frontend Regression

> Note: Only styling & content changes, no functionality is inherently changing between toggles

Steps for `vets-website` that will disable the Sign-in modal and Sign-in page

1. Navigate to [VA.gov Flipper Admin portal](https://api.va.gov/flipper) in production
2. Click on the Sign in to GitHub button
3. Navigate to the `dslogon_button_disabled` feature and click on the link
4. Click the **Disable for everyone** button
5. Navigate to [https://www.va.gov](https://www.va.gov) > Click **Sign in** > Confirm the original modal is displaying and the DS Logon button is visible

### Backend Regression

No regression changes necessary

## 2. Interstitial page
### Frontend Regression

Steps for `vets-website` that will disable a user from navigating to the Interstitial page

1. Navigate to [VA.gov Flipper Admin portal](https://api.va.gov/flipper) in production
2. Click on the Sign in to GitHub button
3. Navigate to...
   - **DS Logon** > the `dslogon_interstitial_redirect` feature and click on the link
4. Click the **Disable for everyone** button
5. Navigate to [https://www.va.gov](https://www.va.gov) > Click **Sign in** to open the modal
6. Click the...
   - **DS Logon** > **DS Logon** button to authenticate > Enter in user credentials for DS Logon > Enter in multifactor code if prompted
7. When returning to VA.gov confirm you are not redirected to `/sign-in-changes-reminder`


### Backend Regression

No regression changes necessary

> Note: The My HealtheVet (MHV) button is no longer available
