# Direct deposit: We can't display any direct deposit information

**Last updated June 23, 2022**

For LOA3 ID.me/Login.gov users who sign in, go to the profile, and click into the direct deposit section, we will show an error if we are having issues connecting to the backend and can't determine whether they do/do not have direct deposit information to show. This is different than when we are able to connect to the backend and can definitively [detect that someone does not receive payments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/use-cases/payments-not-detected.md). If we are having issues connecting to the backend, there's no action a user can take to correct this.

## UX
- An LOA3 ID.me or Login.gov user goes to the direct deposit section of the profile. If we are having issues connecting to the backend (eg. backend is down), we will show an error that explains we can't access direct deposit information at the moment, and to check back later.
- Uses the [warning alert component](https://design.va.gov/components/alert#warning-alert) from the VA design system.
- Review the [mock-up available in Sketch](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/rbaOjaq) for a visual.

## Codes

TBD

## How to reproduce
TBD
