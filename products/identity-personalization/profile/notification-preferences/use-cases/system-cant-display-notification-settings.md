# Notification settings: VA.gov can’t display any notification settings
**Last updated: August 19, 2022**

For LOA3 users who sign in, go to the profile, and click into the notification settings section, we will show an error if we are having issues connecting to the backend. 

If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the notification settings section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access the page at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/dlxe9D9) 
*  [Mobile mockup](https://www.sketch.com/s/afd69a1f-72d2-430b-9b62-285e9d3f479c/a/pamgp9Z) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
