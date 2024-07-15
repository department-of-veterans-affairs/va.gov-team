# Military information: VA.gov can’t display any military information
**Last updated:** February 15, 2024

For LOA3 users who sign in, go to the profile, and click into the military information section, we will show an error if we are having issues connecting to the backend. 

If we are having issues connecting to the backend, there’s no action a user can take to correct this.

## UX
* An LOA3 user goes to the military information section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can’t access the page at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop alert](https://www.figma.com/file/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?type=design&node-id=0-155&mode=design&t=ISGgZpVUB35oOzXb-11) 
*  [Mobile mockup](https://www.figma.com/file/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?type=design&node-id=0-68&mode=design&t=ISGgZpVUB35oOzXb-11) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
