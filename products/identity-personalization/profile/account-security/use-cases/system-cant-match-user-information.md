# Account security: VA.gov can’t match user information with our records
**Last updated: December 1, 2022**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the account security section, we will show an error if there are issues matching records to user information. If we are having issues matching a user's information, there’s no action a user can take to correct this. The appearance of the alert will prompt the process of fixing it.

## UX
* An LOA3 user goes to the account security section section of the profile. If we there are issues matching user information to our records, we will show an error that explains we can’t match records at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/GmZk8QE](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/AxG3GRz)) 
*  [Mobile mockup](https://www.sketch.com/s/ebd4596f-0707-46cb-941e-247a808725cc/a/jgY3M2G)

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
