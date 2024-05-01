# Personal information: VA.gov can’t display any personal information
**Last updated:** February 15, 2024

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the personal information section, we will show an error if we are having issues connecting to the backend. If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the personal information section section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access personal information at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop alert](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-283&mode=design&t=3BjAesVLktQXS6X2-11) 
*  [Mobile mockup](https://www.figma.com/file/qfyUmEOVawplgrEKYKFp0f/Profile---Personal-information?type=design&node-id=0-123&mode=design&t=3BjAesVLktQXS6X2-11) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
