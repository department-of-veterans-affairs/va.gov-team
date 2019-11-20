# ID.me Event & Audit Logging

This document provides API specifications for the ID.me Event & Audit logging service. This service contains
an API with end points that enables querying and retrieval of event logs, based on either an IP address or a
user's UUID. Details around the service's environments, authentication mechanism and list of events available
are described in this document.

## Enviornments

ID.me provides two separate environments for integration. Both will be set up for you as needed and
credentials provided to you.

- Sandbox
     - https://events.idmelabs.com
     - Used for development, connectivity and user-acceptance testing.
     - Test credentials can be used for testing various scenarios.
     - Credentials separate from production environment.

- Production
     - https://events.id.me
     - Used for production-level integration.
     - Only real credentials can be used (no test credentials).
     - Credentials separate from sandbox environment.

## Authentication

API authentication works using a shared secret key thats generated using a strong cryptographic algorithm.
Please make sure this key is kept safe. To successfully authenticate, the shared secret needs to be Base64
encoded and passed as an "Authorization" header, along with the "ID.me" prefix:

```Authorization: ID.me <base64-encoded-key>```

## Errors and HTTP status codes

Common HTTP status codes are used to separate various failure scenarios by type. Some responses also
come with a specific error code and human readable message. The JSON structure for the responses is as
follows:

```
{
"code": "<code>",
"message": "<message>"
}
```

Below are the detailed error codes and messages for the various status codes.

- ```403``` - Credentials do not have access to given resource
     - ```122``` - Header Auth token is not associated with any account
- ```422``` - Invalid or missing input parameters
- ```500``` - Internal service errors

## Endpoints
### Search by IP Address

```POST /events/search```

Returns a list of events associated with a given IP address, ordered by date (most recent to oldest)

#### Request paramaters

- ```ipaddress``` - IP address associated with events
- ```page``` - Events are paginated at 50 events per page. (defaults to 1)

#### Response

- ```events``` - An array of events containing:
     - ```event``` : The event type (ex: session.signup)
     - ```ipaddress``` : Source IP address for the event
     - ```application``` : Consumer application where the event occured
     - ```browser``` : 'Client browser type, browser version and operating system'
     - ```tracked_at``` : 'Date and time when the event occured'
     - ```updated_at``` : 'Date and time when the event record was last udpated'

- ```meta``` - A pagination meta data containing:
     - ```current_page``` : The current page number
     - ```next_page``` : The next page number
     - ```prev_page``` : The previous page number
     - ```total_pages``` : Total number of pages returned by the search query
     - ```total_count``` : Total number of events returned by the search query
     
#### Sample request paramaters

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/search \
-H 'Authorization: Bearer ID.me 0ikmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s=' \
-F ipaddress=152.133.18.33
```

#### Sample Response

```
{
"events": [
{
"event": "session.signin",
"ipaddress": "152.133.18.33",
"application": "MTUyLjEzMy4xOC4zM1NTT2UgU0FNTCBDb25zdW1lciAoU1FBKQ==\n",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-08-26T20:03:59.650-04:00",
"updated_at": "2019-08-26T20:03:59.662-04:00"
}
...
],
"meta": {
"current_page": 2,
"next_page": 3,
"prev_page": 1,
"total_pages": 8648,
"total_count": 432374
}
}
```

#### Sample request 2

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/search \
-H 'Authorization: Bearer ID.me ak1KmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s' \
-F ipaddress=152.132.15.68
```

#### Sample response 2

```
{
"events": [
{
"event": "session.signin",
"ipaddress": "152.130.15.30",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
Sample request 2
Sample response 2
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-04T10:43:46.459-04:00",
"updated_at": "2019-09-04T10:43:46.470-04:00"
},
{
"event": "2fa.initiate",
"ipaddress": "152.130.15.30",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-04T10:43:47.016-04:00",
"updated_at": "2019-09-04T10:43:47.029-04:00"
},
{
"event": "2fa.complete",
"ipaddress": "152.132.8.203",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Chrome",
"version": "75"
},
"tracked_at": "2019-09-04T10:30:30.623-04:00",
"updated_at": "2019-09-04T10:30:30.637-04:00"
},
{
"event": "transaction.complete",
"ipaddress": "152.132.8.203",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Chrome",
"version": "75"
},
"tracked_at": "2019-09-04T10:30:32.183-04:00",
"updated_at": "2019-09-04T10:30:32.196-04:00"
},
{
"event": "2fa.delivery",
"ipaddress": "152.130.1.16",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-03T17:46:04.044-04:00",
"updated_at": "2019-09-03T17:46:04.057-04:00"
},
...
],
"meta": {
"current_page": 1,
"next_page": 2,
"prev_page": null,
"total_pages": 458,
"total_count": 22883
}
}
```

#### Sample request 3

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/search \
-H 'Authorization: Bearer ID.me ak1KmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s' \
-F ipaddress=104.57.85.214
```

#### Sample response 3

```
{
"events": [
{
"event": "session.signin",
"ipaddress": "67.21.32.35",
"application": "VA.gov SAML Consumer (Staging)",
"browser": {
"platform": "Macintosh",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-09-04T10:25:48.442-04:00",
Sample request 3
Sample response 3
"updated_at": "2019-09-04T10:25:48.450-04:00"
},
{
"event": "2fa.complete",
"ipaddress": "99.74.125.139",
"application": "VA.gov SAML Consumer (Local)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "78"
},
"tracked_at": "2019-09-04T10:03:24.368-04:00",
"updated_at": "2019-09-04T10:03:24.383-04:00"
},
{
"event": "session.failed",
"ipaddress": "67.21.32.35",
"application": "VA.gov SAML Consumer (Staging)",
"browser": {
"platform": "Macintosh",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-09-04T09:51:32.350-04:00",
"updated_at": "2019-09-04T09:51:32.366-04:00"
},
{
"event": "2fa.response",
"ipaddress": "174.226.146.77",
"application": "VA.gov SAML Consumer (Staging)",
"browser": {
"platform": "Windows",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-09-04T09:57:53.429-04:00",
"updated_at": "2019-09-04T09:57:53.436-04:00"
},
...
],
"meta": {
"current_page": 1,
"next_page": 2,
"prev_page": null,
"total_pages": 1431,
"total_count": 71512
}
}
```

#### Sample request 4

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/search \
-H 'Authorization: Bearer ID.me ak1KmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s' \
-F ipaddress=152.130.6.77
```

#### Sample response 4

```
{
"events": [
{
"event": "session.signin",
"ipaddress": "152.130.16.22",
"application": "SSOe SAML Consumer (INT)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-04T09:18:03.903-04:00",
"updated_at": "2019-09-04T09:18:03.915-04:00"
},
{
"event": "2fa.initiate",
"ipaddress": "152.130.15.30",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-04T10:43:47.016-04:00",
"updated_at": "2019-09-04T10:43:47.029-04:00"
},
{
"event": "transaction.complete",
"ipaddress": "152.132.8.203",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Chrome",
"version": "75"
},
"tracked_at": "2019-09-04T10:30:32.183-04:00",
"updated_at": "2019-09-04T10:30:32.196-04:00"
},
{
"event": "2fa.complete",
"ipaddress": "152.130.16.22",
"application": "SSOe SAML Consumer (INT)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2019-09-04T09:18:08.193-04:00",
"updated_at": "2019-09-04T09:18:08.197-04:00"
},
{
"event": "session.failed",
"ipaddress": "67.21.32.35",
"application": "VA.gov SAML Consumer (Staging)",
"browser": {
"platform": "Macintosh",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-09-04T08:45:15.300-04:00",
"updated_at": "2019-09-04T08:45:15.303-04:00"
},
...
],
"meta": {
"current_page": 1,
"next_page": 2,
"prev_page": null,
"total_pages": 1013,
"total_count": 50632
}
}
```

## Search by user UUID

```POST /events/user/:uuid```

Returns a list of events associated with a given user, ordered by date (most recent to oldest)

### Request parameters

- ```uuid``` - UUID of user associated with events
- ```page``` - Events are paginated at 50 events per page. (defaults to 1)

### Response parameters

- ```events``` - An array of events containing:
     - ```event``` : The event type (ex: session.signup)
     - ```ipaddress``` : Source IP address for the event
     - ```application``` : Consumer application where the event occured
     - ```browser``` : 'Client browser type, browser version and operating system'
     - ```tracked_at``` : 'Date and time when the event occured'
     - ```updated_at``` : 'Date and time when the event record was last udpated'

- ```meta``` - A pagination meta data containing:
     - ```current_page``` : The current page number
     - ```next_page``` : The next page number
     - ```prev_page``` : The previous page number
     - ```total_pages``` : Total number of pages returned by the search query
     - ```total_count``` : Total number of events returned by the search query
     
#### Sample request 1

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/user/ac28b80d7ac14b0db51b5bef6281f3c2 \
-H 'Authorization: Bearer ID.me 5uUh4nsTaN3L6yh3AdxS1G69N+d0DKobbVNxzba+s='
```

#### Sample response 1

```
{
"events": [
{
"event": "2fa.complete",
"ipaddress": "152.133.18.33",
"application": "your VA application",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "76"
},
"tracked_at": "2019-08-27T03:32:18.714-04:00",
"updated_at": "2019-08-27T03:32:18.728-04:00"
}
...
],
"meta": {
"current_page": 2,
"next_page": 3,
"prev_page": 1,
"total_pages": 8648,
"total_count": 432374
}
}
```

#### Sample request 2

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/user/33d420b36d2c43e88d7f57540bd5015a \
-H 'Authorization: Bearer ID.me ak1KmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s' \
-F page=3
```

#### Sample response 2

```
{
"events": [
{
"event": "2fa.complete",
"ipaddress": "152.130.15.18",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
Sample request 2
Sample response 2
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2018-11-02T12:50:52.327-04:00",
"updated_at": "2018-11-02T08:50:52.342-04:00"
},
{
"event": "2fa.options",
"ipaddress": "152.130.15.18",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2018-11-02T12:49:37.097-04:00",
"updated_at": "2018-11-02T08:49:37.110-04:00"
},
{
"event": "session.signin",
"ipaddress": "152.130.15.18",
"application": "SSOe SAML Consumer (SQA)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2018-11-02T12:50:45.486-04:00",
"updated_at": "2018-11-02T08:50:45.500-04:00"
},
{
"event": "consent.allow",
"ipaddress": "152.132.1.16",
"application": "SSOe SAML Consumer (PINT)",
"browser": {
"platform": "Windows",
"name": "Internet Explorer",
"version": "11"
},
"tracked_at": "2018-11-02T18:19:44.481-04:00",
"updated_at": "2018-11-02T14:19:44.496-04:00"
},
...
],
"meta": {
"current_page": 3,
"next_page": 4,
"prev_page": 2,
"total_pages": 199,
"total_count": 9946
}
}
```

#### Sample request 3

```
curl -X POST \
https://events.idmelabs.com/api/v1/events/user/87c7dff7c6c54b51b777492c25710f4b \
-H 'Authorization: Bearer ID.me ak1KmIyOtoaQC6j6yh3AdxS1G69N+d0DKobbVNxzba+s' \
-F page=3
```

#### Sample response 3

```{
"events": [
{
"event": "transaction.complete",
"ipaddress": "152.133.18.33",
"application": "SSOe SAML Consumer (UAT)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "72"
},
"tracked_at": "2019-03-16T00:32:54.385-04:00",
"updated_at": "2019-03-16T00:32:54.401-04:00"
},
{
"event": "2fa.initiate",
"ipaddress": "152.133.18.33",
"application": "SSOe SAML Consumer (UAT)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "72"
},
"tracked_at": "2019-03-16T00:02:47.288-04:00",
Sample request 3
Sample response 3
"updated_at": "2019-03-16T00:02:47.304-04:00"
},
{
"event": "session.signin",
"ipaddress": "152.133.18.33",
"application": "SSOe SAML Consumer (UAT)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "72"
},
"tracked_at": "2019-03-16T01:47:43.976-04:00",
"updated_at": "2019-03-16T01:47:43.988-04:00"
},
{
"event": "2fa.response",
"ipaddress": "152.133.18.33",
"application": "SSOe SAML Consumer (UAT)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "72"
},
"tracked_at": "2019-03-16T01:32:52.027-04:00",
"updated_at": "2019-03-16T01:32:52.042-04:00"
},
{
"event": "2fa.delivery",
"ipaddress": "152.133.18.33",
"application": "SSOe SAML Consumer (UAT)",
"browser": {
"platform": "Generic Linux",
"name": "Chrome",
"version": "72"
},
"tracked_at": "2019-03-16T01:02:50.252-04:00",
"updated_at": "2019-03-16T01:02:50.266-04:00"
},
...
],
"meta": {
"current_page": 3,
"next_page": 4,
"prev_page": 2,
"total_pages": 1926,
"total_count": 96272
}
}
```

### Event Types

- 2fa.complete
- 2fa.delivery
- 2fa.download
- 2fa.initiate
- 2fa.options
- 2fa.recovery.complete
- 2fa.recovery.confirm
- 2fa.recovery.delivery
- 2fa.recovery.failure
- 2fa.response
- 2fa.revoke
- account.agreement
- account.lockout.delivery
- account.password.change
- account.password.complete
- account.password.delivery
- account.password.failure
- account.password.response
- appointment.continue
- appointment.options
- appointment.schedule
- appointment.start
- appointment.view
- consent.allow
- consent.deny
- consent.revoke
- email.account.confirm
- email.account.delivery
- email.confirmation.complete
- email.confirmation.delivery
- Event Types
- email.create
- email.primary
- email.remove
- email.wallet.change
- email.wallet.confirm
- federation.confirmation.complete
- federation.confirmation.delivery
- federation.connect
- federation.remove
- session.failed
- session.limited
- session.lockout.applied
- session.lockout.expired
- session.revoked
- session.signin
- session.signout
- session.signup
- session.suspended
- session.timeout
- status.lockout.applied
- status.lockout.removed
- status.purge.applied
- status.revocation.applied
- status.revocation.removed
- status.revocation.requested
- status.suspension.applied
- status.suspension.removed
- transaction.complete
- verification.complete
- verification.initiate
- verification.options
- verification.progress

