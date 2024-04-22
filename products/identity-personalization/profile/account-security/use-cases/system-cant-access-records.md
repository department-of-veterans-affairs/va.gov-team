# Account security: VA.gov can’t access records
**Last updated: February 14, 2024**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the account security section, we will show an error if we are having issues connecting to the backend / accessing records. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the account security section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access records at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-346&mode=design&t=EjU8iLKh728VGBef-11) 
*  [Mobile mockup](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-61&mode=design&t=EjU8iLKh728VGBef-11)

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
