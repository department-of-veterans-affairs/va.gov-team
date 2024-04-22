# Connected apps: VA.gov can’t display any connected apps
**Last updated: February 14, 2024**

For LOA3 users who sign in, go to the profile, and click into the connected apps section, we will show an error if we are having issues connecting to the backend. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the personal information section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access personal information at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-619&mode=design&t=wSU7j7GeuMsAZiyE-11) 
*  [Mobile mockup](https://www.figma.com/file/eMR2XSTGnWQgF2YEphWK8O/Profile---Connected-Apps?type=design&node-id=0-92&mode=design&t=wSU7j7GeuMsAZiyE-11) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
