# Military information: VA.gov can’t match military information to service records
**Last updated: December 5, 2022**

For LOA3 users who sign in, go to the profile, and click into the military information section, we will show a consolidated error if we are not able to access or match military information to service records because the user is not in DEERs or does not have a military service history. 

If the user thinks this is a mistake, they can apply for a correction.

## UX
* An LOA3 user goes to the military information section of the profile. If the Veteran is not in DEERs or does not have military service history, we will show an error that explains we can’t match military information to service records.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/8yQObmR) 
*  [Mobile mockup](https://www.sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775/a/52vgV88) 

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
