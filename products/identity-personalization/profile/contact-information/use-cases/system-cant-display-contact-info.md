# Contact information: VA.gov can’t display any contact information
**Last updated:** September 7, 2023

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the contact section, we will show an error if we are having issues connecting to the backend. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the contact section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access contact information at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/OmlnY7p) 
*  [Mobile mockup](https://www.sketch.com/s/59857eb5-d9f9-4145-99d3-d9a1de2d0655/a/zx2q52a) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
