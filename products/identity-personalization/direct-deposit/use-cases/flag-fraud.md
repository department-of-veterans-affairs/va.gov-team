# Direct deposit for compensation and pension: user account has been flagged for fraud or identity theft

**Last updated June 28, 2022**

If an LOA3 ID.me or Login.gov user attempts to update their compensation and pension direct deposit (DD) information, and the VA fraud team (separate team from OCTO based out of Utah) has placed a fraud flag on their account, they will be blocked from making an update.

**Note:** This does not apply to education direct deposit information.

## UX
- If a user with this flag in place attempts to update their DD information, they will see an error message at the top of the DD form.
- We display a generic error when this flag is in place.  
- We're working with the EVSS team to correct the data sent so we can display a more accurate and helpful message to the user. [Here's an example of the mobile version](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Ax3EAMY) of the original alert that should display.
- Uses the [alert component](https://design.va.gov/components/alert) from the VA design system
- [Desktop mock-up, June 2022 current state](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/Kv1Q0yD)
- [Mobile mock-up, June 2022 current state](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/wLdJ57D)

## Codes
TBD

## How to reproduce

- This error can be reproduced locally (not on staging)
