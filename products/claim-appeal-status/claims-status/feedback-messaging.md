# Claim status feedback messaging

_**Note:** See [sitewide messaging guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/design/design-system/guidelines/error-handling) for content and UX guidance and standard messaging scenarios/content._

## System messaging

_Add scenarios here_

## Engagement messaging

_Add scenarios here_

## Access messaging

### User is blocked, not found, or not valid

> We weren't able to find your records. Please call 1-855-574-7286 between Monday‒Friday, 8:00 a.m.‒8:00 p.m. (ET).

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          | 403             | 500             |

### Authentication/authorization errors from EVSS API

> We weren't able to find your records. Please call 1-855-574-7286 between Monday‒Friday, 8:00 a.m.‒8:00 p.m. (ET).

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          | 403             | 500             |

### Timeout from EVSS (system down)

> **Can't check claim status**
>
> Our system is temporarily down. Please refresh this page or try again later.

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          | None            | 200             |

### Internal error from EVSS

> We couldn't check your claim status. Please refresh this page or try again later.

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          | 500             | 500             |

### Any various 500 error from the vets.gov API

> We couldn't check your claim status. Please refresh this page or try again later.

| Actions | Component | State | Location | EVSS error code | Vets error code           |
| ------- | --------- | ----- | -------- | --------------- | ------------------------- |
|         |           |       |          |                 | 500 internal server error |

### Various other errors

> We couldn't check your claim status. Please try again later.

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          | 200             | 500             |

## Feedback messaging

### File upload unsuccessful

> **Couldn't upload files**
>
> We weren't able to upload your files. Please try again.

| Actions | Component | State | Location | EVSS error code | Vets error code |
| ------- | --------- | ----- | -------- | --------------- | --------------- |
|         |           |       |          |                 | 500             |
