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

### GET /v0/mdot/supplies

#### Request

```
GET https://va.staging.gov/v0/mdot
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 555555555
```

##### Parameters

| Parameter	         | In    | Type   | Default | Required | Description                                           |
|--------------------|-------|--------|---------|----------|-------------------------------------------------------|
| product_group      | query | string | all     | false    | Limits the response array to specific type of supply. |


#### Response
```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "supplies": [
    {
      "deviceName": "OMEGA XD3241",
      "productName": "ZA1239",
      "productGroup": "hearing aid batteries",
      "productId": "1",
      "availableForReorder": "false",
      "lastOrderDate": "2020-01-01",
      "nextAvailabilityDate": "2020-09-01",
      "leftEar": "true",
      "rightEar": "false"
    },
    {
      "deviceName": "OMEGA XD3241",
      "productName": "ZA1239",
      "productGroup": "hearing aid batteries",
      "productId": "2",
      "availableForReorder": "false",
      "lastOrderDate": "2020-01-01",
      "nextAvailabilityDate": "2020-09-01",
      "leftEar": "false",
      "rightEar": "true"
    },
    {
      "deviceName": "RITE Power",
      "productName": "DOME",
      "productGroup": "hearing aid dome",
      "productId": "3",
      "availableForReorder": "true",
      "lastOrderDate": "2019-06-30",
      "nextAvailabilityDate": "2019-12-15",
      "quantity": "10",
      "size": "6mm"
    },
    {
      "deviceName": "RITE Power",
      "productName": "DOME",
      "productGroup": "hearing aid dome",
      "productId": "4",
      "availableForReorder": "true",
      "lastOrderDate": "2019-06-30",
      "nextAvailabilityDate": "2019-12-15",
      "quantity": "10",
      "size": "7mm"
    }
    {
      "deviceName": "Waxbuster",
      "productName": "single unit",
      "productGroup": "hearing aid wax guard",
      "productId": "5",
      "availableForReorder": "true",
      "lastOrderDate": "2019-06-30",
      "nextAvailabilityDate": "2019-12-15",
      "quantity": "10"
    }
  ]
}
```

### POST /v0/mdot/supplies

#### Request

```json
POST https://api.va.gov/v0/mdot/supplies
HTTP/1.1
Accept-Encoding: *

{
  "veteranFullName": {
    "first": "Greg",
    "middle": "A",
    "last": "Anderson"
  },
  "veteranAddress": {
    "street": "101 Example Street",
    "street2": "Apt 2",
    "city": "Kansas City",
    "state": "MO",
    "country": "USA",
    "postalCode": "64117"
  },
  "order": [
    {
      "productId": "1"
    },
    {
      "productId": "4"
    }
  ],
  "additionalRequests": ""
}
```

#### Response

```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "status": "success",
  "orderId": "1234abcd1234abcd"
}
```

### GET /v0/in_progress_forms/mdot

#### Request

```json
GET https://api.va.gov/v0/in_progress_forms/mdot
HTTP/1.1
Accept-Encoding: *
```

#### Response

```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "form_data": {
    "veteranFullName": {
      "first": "Greg",
      "middle": "A",
      "last": "Anderson"
    },
    "gender": "M",
    "veteranAddress": {
      "street": "MILITARY ADDY 3",
      "city": "DPO",
      "state": "MI",
      "country": "USA",
      "postalCode": "22312"
    },
    "email": "test2@test1.net"
  },
  "metadata": {
    "version": 0,
    "prefill": true,
    "returnUrl": "/veteran-information"
  }
}
```

### PUT /v0/mdot/veteran_information

#### Request

```json
GET https://api.va.gov/v0/mdot/veteran_information
HTTP/1.1
Accept-Encoding: *

{
  "veteranFullName": {
    "first": "Greg",
    "middle": "A",
    "last": "Anderson"
  },
  "gender": "M",
  "veteranAddress": {
    "street": "MILITARY ADDY 3",
    "city": "DPO",
    "state": "MI",
    "country": "USA",
    "postalCode": "22312"
  },
  "email": "test2@test1.net"
}
```

#### Response


```json
HTTP/1.1 200 OK
Date: Thu, Jan 30 2020 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json

{
  "status": "success"
}
```
