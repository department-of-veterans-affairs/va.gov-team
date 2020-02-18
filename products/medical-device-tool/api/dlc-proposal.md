# Medical Device Ordering Tool DLC API Proposal v1.1.0

## Overview

This document outlines a set of proposed endpoints, along with corresponding http methods, headers, parameters, etc for making successful calls against said endpoints. This is not representative of any final product, and is liable to change at any time.

## Endpoints

| HTTP Method | Endpoint         | Description                                                                              |
|-------------|------------------|------------------------------------------------------------------------------------------|
| GET         | /supplies        | Returns an array of medical supplies and accessories available to order for the veteran. |
| POST        | /supplies        | Creates a new reorder of medical supplies and/or accessories for the veteran.            |
| PUT         | /veteran_address | Updates the veteran address.                                                             |

### GET /supplies

#### Request

``` json
GET https://fake-api.dlc-example.com/supplies
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 5555 // Last 4 digits of SSN
va_veteran_first_name: Greg 
va_veteran_middle_name: A
va_veteran_last_name: Anderson
va_veteran_birth_date: 1968-10-10
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
  "veteranAddress": {
    "street": "101 Example Street",
    "street2": "Apt 2",
    "city": "Kansas City",
    "state": "MO",
    "country": "US",
    "postalCode": "64117"
  },
  "veteranTemporaryAddress": {
    "street": "201 Example Street",
    "city": "Galveston",
    "state": "TX",
    "country": "US",
    "postalCode": "77550"
  },
  "supplies": [
    {
      "deviceName": "OMEGA XD3241",
      "productName": "ZA1239",
      "productGroup": "hearing aid batteries",
      "productId": "1",
      "availableForReorder": "false",
      "lastOrderDate": "2020-01-01",
      "nextAvailabilityDate": "2020-09-01",
      "quantity": "60"
    },
    {
      "productName": "DOME",
      "productGroup": "hearing aid accessories",
      "productId": "3",
      "availableForReorder": "true",
      "lastOrderDate": "2019-06-30",
      "nextAvailabilityDate": "2019-12-15",
      "quantity": "10",
      "size": "6mm"
    },
    {
      "productName": "DOME",
      "productGroup": "hearing aid accessories",
      "productId": "4",
      "availableForReorder": "true",
      "lastOrderDate": "2019-06-30",
      "nextAvailabilityDate": "2019-12-15",
      "quantity": "10",
      "size": "7mm"
    }
    {
      "productName": "Waxbuster single unit",
      "productGroup": "hearing aid accessories",
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
va_veteran_id: 5555 // Last 4 digits of SSN
va_veteran_first_name: Greg
va_veteran_middle_name: A
va_veteran_last_name: Anderson
va_veteran_birth_date: 1968-10-10
va_api_key: 1234abcd1234abcd1234abcd1234abcd

{
  "useVeteranAddress": "true",
  "useTemporaryAddress": "false",
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

### PUT /veteran_address

#### Request

``` json
PUT https://fake-api.dlc-example.com/veteran_address
HTTP/1.1
Accept-Encoding: *
va_veteran_id: 5555 // Last 4 digits of SSN
va_veteran_first_name: Greg 
va_veteran_middle_name: A
va_veteran_last_name: Anderson
va_veteran_birth_date: 1968-10-10
va_api_key: 1234abcd1234abcd1234abcd1234abcd

{
  "street": "102 Example Street",
  "street2": "Apt 7",
  "city": "Kansas City",
  "state": "MO",
  "country": "US",
  "postalCode": "64117",
  "isPrimary": "true",
  "isTemporary": "false"
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

