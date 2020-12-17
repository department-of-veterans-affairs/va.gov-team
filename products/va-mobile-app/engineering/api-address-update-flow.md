# Address Update Flow
Updating an address is a two step process with different option for what to send in the request body. 
Below are three scenarios for updating when the user has entered a valid address with a single match.
A valid address with multiple suggested address matches. And when a user has entered what the validation
service considers and invalid addres but the user would like to override that and use it anyway.

## Single match valid address

### POST /v0/user/addresses/validate
#### Request
```json
{
  "addressLine1": "51 W Weber Rd",
  "addressType": "DOMESTIC",
  "city": "Columbus",
  "countryName": "United States",
  "countryCodeIso3": "USA",
  "stateCode": "OH",
  "zipCode": "43202",
  "type": "DOMESTIC",
  "addressPou": "CORRESPONDENCE"
}
```

#### Response
The address has a 100% confidence score. The address that's returned can be sent in a new/update request.
In this case the address object in the meta data should be passed along in that request.
```json
{
  "data": [
    {
      "id": "a3add173-380c-4387-9d72-276b755aa980",
      "type": "suggested_address",
      "attributes": {
        "addressLine1": "51 W Weber Rd",
        "addressLine2": null,
        "addressLine3": null,
        "addressPou": "CORRESPONDENCE",
        "addressType": "DOMESTIC",
        "city": "Columbus",
        "countryCodeIso3": "USA",
        "internationalPostalCode": null,
        "province": null,
        "stateCode": "OH",
        "zipCode": "43202",
        "zipCodeSuffix": "1922"
      },
      "meta": {
        "address": {
          "confidenceScore": 100.0,
          "addressType": "Domestic",
          "deliveryPointValidation": "CONFIRMED",
          "residentialDeliveryIndicator": "RESIDENTIAL"
        },
        "validationKey": -1398777841
      }
    }
  ]
}
```

### PUT /v0/user/addresses
#### Request
```json
{
  "addressMetaData": {
    "confidenceScore": 100.0,
    "addressType": "Domestic",
    "deliveryPointValidation": "CONFIRMED",
    "residentialDeliveryIndicator": "RESIDENTIAL"
  },
  "addressLine1": "51 W Weber Rd",
  "addressType": "DOMESTIC",
  "city": "Columbus",
  "countryName": "United States",
  "countryCodeIso3": "USA",
  "stateCode": "OH",
  "zipCode": "43202",
  "addressPou": "CORRESPONDENCE",
	"id": 181513
}
```

#### Response
```json
{
  "data": {
    "id": "",
    "type": "async_transaction_vet360_address_transactions",
    "attributes": {
      "transactionId": "b2e51260-00c9-4db6-80f6-b6c7541a9e54",
      "transactionStatus": "COMPLETED_SUCCESS",
      "type": "AsyncTransaction::Vet360::AddressTransaction",
      "metadata": []
    }
  }
}
```
