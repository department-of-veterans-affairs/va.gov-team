# Regression Test Plan for Secure Sign-in Transition

## Frontend Regression

> Note: Only styling & content changes, no functionality is inherently changing between toggles

Steps for `vets-website` that will disable the Sign-in modal and Sign-in page

1. Navigate to [VA.gov Flipper Admin portal](https://api.va.gov/flipper) in production
2. Click on the Sign in to GitHub button
3. Navigate to the `sign_in_modal_v2` feature and click on the link
4. Click the **Disable for everyone** button
5. Navigate to [https://www.va.gov](https://www.va.gov) > Click **Sign in** > Confirm the original modal is displaying

## Backend Regression

No regression changes necessary
