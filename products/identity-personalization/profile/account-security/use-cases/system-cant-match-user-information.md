# Account security: VA.gov can’t match user information with our records
**Last updated: February 14, 2024**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the account security section, we will show an error if there are issues matching records to user information. If we are having issues matching a user's information, there’s no action a user can take to correct this. The appearance of the alert will prompt the process of fixing it. More information can be found in this [GitHub ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/47350) and [Slack thread](https://dsva.slack.com/archives/CSFV4QTKN/p1664225557501919).

## UX
* An LOA3 user goes to the account security section section of the profile. If we there are issues matching user information to our records, we will show an error that explains we can’t match records at the moment, and to check back later.
* Uses the  [warning alert component](https://design.va.gov/components/alert#warning-alert)  from the VA design system.
*  [Desktop mockup](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-359&mode=design&t=EjU8iLKh728VGBef-11) 
*  [Mobile mockup](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-100&mode=design&t=EjU8iLKh728VGBef-11)

## Codes
N/A

## How to reproduce
* This is not reproducible in staging given that we can’t force errors from the backend.
* This can be reproduced locally.
