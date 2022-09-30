## Chapter 31 tentative payload

```
 data: {
      educationLevel: 'BACHELORS',
      isMoving: true,
      newAddress: {
        'view:livesOnMilitaryBaseInfo': {},
        countryName: 'AGO',
        addressLine1: '123 angola dr',
        addressLine2: 'address line 2',
        addressLine3: 'address line 3',
        city: 'Angola City',
        province: 'State Province Region',
        internationalPostalCode: '12332'
      },
      veteranAddress: {
        'view:livesOnMilitaryBase': true,
        'view:livesOnMilitaryBaseInfo': {},
        countryName: 'USA',
        addressLine1: '123 at home dr',
        addressLine2: 'address line 2',
        addressLine3: 'address line 3',
        city: 'FPO',
        stateCode: 'AA',
        zipCode: '12321'
      },
      mainPhone: '+1231231234',
      cellPhone: '3213213211',
      emailAddress: 'johnjacobdoe@email.org',
      veteranInformation: {
        fullName: {
          first: 'John',
          middle: 'Jacob',
          last: 'Doe',
          suffix: 'Jr.'
        },
        ssn: '123121234',
        VAFileNumber: '123121234',
        dob: '1991-04-01'
      }
    },
```

## Notes
1. `educationLevel` - An enum with the options `[ELEMENTARY, JUNIOR, PARTIALHIGHSCHOOL, HSDIPLOMA, PARTIALCOLLEGE, ASSOCIATES, BACHELORS, MASTERS, DOCTORATE]`
1. `newAddress` & `veteranAddress`
    - `countryName` - enum containing ISO-3166 Alpha 3 codes.
    - `city` - If non-US military base address, string. Otherwise enum with the options `[APO, FPO, DPO]`
    - `stateCode` - If US address, enum with two digit state codes. If US military base address, enum with options `[AA, AE, AP]`.
    - `province` - Only part of payload on international addresses. Replaces `stateCode`. 
1. `newAddress` - optionally included in payload if `isMoving` (boolean) is `true`.

## Considerations
1. V1 as of 07/17/2020. Liable to change pending design review, user research, and usability testing. 
