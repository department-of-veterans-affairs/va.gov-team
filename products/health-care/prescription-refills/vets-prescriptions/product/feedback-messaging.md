# Prescription refills feedback messaging

_**Note:** See [sitewide messaging guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design/design-system/guidelines/error-handling) for content and UX guidance and standard messaging scenarios/content._

## System messaging

_Add scenarios here_

## Engagement messaging

_Add scenarios here_

## Access messaging

### Non-VA patient with MHV account tries to access prescription refills after June 2017

(After June 2017 only VA patients, defined as a patient who has been treated at a VA facility at least once, can access health tools)

> Vets.gov health tools are only available for patients who’ve received care at a VA facility. If you think you should be able to access these health tools, please call the Vets.gov Help Desk at 855-574-7286 (TTY: 800-829-4833). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          |                |                 |

### MHV user is not found, blocked, or not valid

- 3 - Invalid user credentials
- 104 - Missing user credential
- 105 - User was not found
- 106 - User is not eligible because they are blocked

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code   | Vets error code |
| ------- | --------- | ----- | -------- | ---------------- | --------------- |
|         |           |       |          | 3, 104, 105, 106 |                 |

### Authentication/authorization errors from MHV API

- 101 - Application authentication failed
- 102 - Application authorization failed
- 901 - Authentication Service Error

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 101, 102, 901  |                 |

### Various other errors

- 117 – Data Integrity Error
- 99 – Unknown Application Error

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 99, 117        |                 |

### Timeout from MHV (system down)

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code             | Vets error code |
| ------- | --------- | ----- | -------- | -------------------------- | --------------- |
|         |           |       |          | Likely 504 gateway timeout | 200             |

### Internal error from MHV

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code            | Vets error code |
| ------- | --------- | ----- | -------- | ------------------------- | --------------- |
|         |           |       |          | 503 internal server error |                 |

### Any various 500 error from the vets.gov API

> **[Message title]**
>
> [Message description]

| Actions | Component | State | Location | MHV error code | Vets error code           |
| ------- | --------- | ----- | -------- | -------------- | ------------------------- |
|         |           |       |          |                | 500 internal server error |

## Feedback messaging

### Prescription refill unsuccessful

140 - Prescription Refill was unsuccessful. Please try again later.

> **Couldn't refill prescription**
>
> We couldn't process this request. Please try again or [message your provider]().

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 140            |                 |

### Prescription not refillable

139 – Prescription is not refillable

> **This prescription isn't refillable**
>
> Please [message your provider]() or call the Vets.gov Help Desk 1-855-574-7286, Monday - Friday, 8:00 a.m. - 8:00 p.m. (ET).

| Actions | Component | State | Location | MHV error code | Vets error code |
| ------- | --------- | ----- | -------- | -------------- | --------------- |
|         |           |       |          | 139            |                 |
