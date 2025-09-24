# Account security: VA.gov can’t access records
**Last updated: September 2025**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the Account security page, we will show an error if we are having issues connecting to the backend / accessing records. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the Account security section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access records at the moment, and to check back later.
* Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
* The sign-in and account setup sections of the page still display.
* [Design mockup](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-11645&t=vEzOY6Vc44fxJdc2-1) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging since that we can’t force errors from the backend.
* This can be reproduced locally.
