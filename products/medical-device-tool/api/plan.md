# Medical Device Ordering Tool API Plan

## Overview

This document contains the proposed endpoints, requests & response information for the MDOT API Service. This project and any all documentation related to the project including this document is owned and maintained by the Benefits & Memorials II team. Any questions or concerns should be directed to the B&M II team, which can be reached on the #vsa-bam-2 Slack channel.

## Endpoints

| HTTP Method | Endpoint                     | Description                                                                                                |
|-------------|------------------------------|------------------------------------------------------------------------------------------------------------|
| GET         | /v0/mdot/supplies            | Returns a list of medical devices available for reorder and veteran information for the logged in veteran. |
| POST        | /v0/mdot/supplies            | Creates a new medical device and/or accessory order.                                                       |
| GET         | /v0/in_progress_forms/mdot   | Returns just the veteran information: address, gender, date of birth, email, etc.                          |
| PUT         | /v0/mdot/veteran_information | Makes a change to veteran profile, can modify address, email.                                              |

### GET /v0/mdot

#### Request

```
GET https://va.staging.gov/v0/mdot
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 555555555
```

#### Response
```
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json
```

```json
{

}
```

### POST /v0/mdot

#### Request

#### Response

### GET /v0/in_progress_forms/mdot

#### Request

#### Response

### PUT /v0/mdot/veteran_information

#### Request

#### Response
