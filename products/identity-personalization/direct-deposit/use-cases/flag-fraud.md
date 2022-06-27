# Direct deposit for compensation and pension: user account has been flagged for fraud or identity theft

**Last updated June 27, 2022**

If an LOA3 user attempts to update their compensation and pension direct deposit (DD) information , and the VA fraud team has placed a fraud flag on their accoun t, they're blocked from making an update.

**Note:** This does not apply to education direct deposit information.

## UX
- If a user with this flag in place attempts to update their DD information, they will see an error message at the top of the DD form.
- We display the generic system error when this flag is in place
- We're working with the EVSS team to improve the data sent so we can display a more accurate and helpful message to the user.
- Uses the [alert component](https://design.va.gov/components/alert) from the VA design system
- [Desktop mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/ELA5LMg)
- [Mobile mock-up](https://www.sketch.com/s/1a920e73-1dcb-47c4-aae8-08656756c131/a/09y85M0)

## Codes
TBD

## How to reproduce

- This error can be reproduced locally (not on staging)
