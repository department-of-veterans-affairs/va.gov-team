# Personal information: Failure to update Personal information
**Last updated: August 18, 2022**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the personal information section, we will show an error if the system is returning an error and we are having issues validating the information entered. If we are having these issues, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the personal information section section of the profile and updates or edits their Personal information. If the system returns an error and cannot validate the address, we will show an error that explains we can’t update personal information at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/jgx5LD9) 
*  [Mobile mockup](https://www.sketch.com/s/ba254d92-3c3d-4eba-825d-d7f5bda35565/a/GmgjLjD) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
