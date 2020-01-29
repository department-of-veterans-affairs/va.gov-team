## Test cases for QA

| Use case/Desired outcome | Address |
|--------------------------|---------|
|Override + one suggestion | 36320 Coronado Dr Fremont, CA 94537 |
|Override + two suggestions | 575 20th, San Francisco CA 94122 |
|Override; no suggestions |1510 Park St, Washington, DC 20010 |
|Add unit number + override | 225 irving st, San Francisco, CA 94122 |
|Edit unit number + override | 225 irving st unit A, San Francisco, CA 94122 |

**Former use cases**

Previously, we were blocking override on some addresses. We are no longer doing that. These were the addreses we used to test those use cases.

| Use case/Desired outcome | Address |
|--------------------------|---------|
|No override; 1 suggestion| 1510 Irving, Washington, DC 20010 |
|No override; at least 2 suggestions | ??? |
|No override; no suggestions | 1510 Park St, Washington, DC 12345 |

### Notes

- You can get a single suggestion for pretty much any valid address you enter when you intentionally enter the incorrect zip code
