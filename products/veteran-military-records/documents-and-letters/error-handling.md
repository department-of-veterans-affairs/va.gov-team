# Letters Error Handling

## Overview of Possible Errors

`/letters` (letters list)

### 403 Authentication Problem

This occurs when the user has an invalid address for their letters.

![Letters 403 Error](./screenshots/letters-403-error.png)

### 502 Letter Eligibility Error

Some of the partner services are down, so we cannot verify the eligibility of some letters. Currently appears to show a blank screen.

### Generic Failure

Also shows for `503`/`504` (EVSS or dependency is down) and `422` (Invalid Address formatting) errors

![System down/try later](./screenshots/generic-BE-services-error.png)

### Other errors

In the rare case that a user's address is blank, require the user to update their address berfore proceeding

![Invalid Address error](./screenshots/invalid-address-error.png)