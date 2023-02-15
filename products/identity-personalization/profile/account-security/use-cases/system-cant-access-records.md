# Account security: VA.gov can’t access records
**Last updated: February 7, 2023**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the account security section, we will show an error if we are having issues connecting to the backend / accessing records. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the account security section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access records at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/GmZk8QE) 
*  [Mobile mockup](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/PGyGYjv)

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
