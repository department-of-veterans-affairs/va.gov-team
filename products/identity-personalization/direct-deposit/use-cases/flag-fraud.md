# Direct deposit for compensation and pension: user account has been flagged for fraud or identity theft

**Last updated February 14, 2024**

If an LOA3 ID.me or Login.gov user attempts to update their compensation and pension direct deposit (DD) information, and the VA fraud team (separate team from OCTO based out of Utah) has placed a fraud flag on their account, they will be blocked from making an update.

**Note:** This does not apply to education direct deposit information.

## UX
- If a user with this flag in place attempts to update their DD information, they will see an error message at the top of the DD form.
- We display a generic error when this flag is in place.  
- We're working with the EVSS team to correct the data sent so we can display a more accurate and helpful message to the user. [Here's an example of the mobile version](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=30-3598&mode=design&t=JeBw2hRh9J5QSuL7-11) of the original alert that should display.
- Uses the [alert component](https://design.va.gov/components/alert) from the VA design system
- [Desktop mock-up, June 2022 current state](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=30-3829&mode=design&t=JeBw2hRh9J5QSuL7-11)
- [Mobile mock-up, June 2022 current state](https://www.figma.com/file/CUR39JNnF2CS8SidGiWmYG/Profile---Direct-Deposit?type=design&node-id=0-184&mode=design&t=JeBw2hRh9J5QSuL7-11)

## Codes
TBD

## How to reproduce

- This error can be reproduced locally (not on staging)
