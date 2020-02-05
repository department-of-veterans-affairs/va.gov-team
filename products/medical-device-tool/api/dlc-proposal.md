# Medical Device Ordering Tool DLC API Proposal

## Overview

This document outlines a set of proposed endpoints, along with corresponding http methods, headers, parameters, etc for making successful calls against said endpoints. This is not representative of any final product, and is liable to change at any time.

## Endpoints

| HTTP Method | Endpoint  | Description                                                                              |
|-------------|-----------|------------------------------------------------------------------------------------------|
| GET         | /supplies | Returns an array of medical supplies and accessories available to order for the veteran. |
| POST        | /supplies | Creates a new reorder of medical supplies and/or accessories for the veteran.            |

### GET /supplies

#### Request

```
GET https://fake-api.dlc-example.com/supplies
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 555555555
va_veteran_first_name: Greg
va_veteran_middle_name: A
va_veteran_last_name: Anderson
va_api_key: 1234abcd1234abcd1234abcd1234abcd
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

### POST /supplies

#### Request

```json
POST https://fake-api.dlc-example.com/supplies
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 555555555
va_api_key: 1234abcd1234abcd1234abcd1234abcd

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
