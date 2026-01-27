# Proposed payloads

This document demonstrates data coming from the current COE, and then suggests a new shape based on the new COE app designs, and updated paper form. It is organized by the chapters that will appear in the new version of the COE app.

⭐️ indicates fields that are new.

## Step 1: Your Information

Current:
```
contactPhone: '1234567890',
contactEmail: 'fake@email.com',
dateOfBirth: '2001-01-01',
applicantAddress: {
  country: 'USA',
  isMilitary: 'false',
  street: '123 East St.',
  city: 'Smallville',
  state: 'KS',
  postalCode: '66001'
},
fullName: {
  first: 'First',
  middle: 'Middle',
  last: 'Last',
  suffix: 'Jr.'
},
```

Suggested:
```
  fullName: { // prefilled
    first: 'First',
    middle: 'Middle',
    last: 'Last',
    suffix: 'Jr.'
  },
  dateOfBirth: '2001-01-01', //prefilled
  ⭐️ ssnLast4: '1234', // prefilled
  ⭐️ veteran: { // The profileContactInfoPages pattern gives us this object
    "mailingAddress": {
      "addressLine1": "1200 Park Ave",
      "addressLine2": "c/o Pixar",
      "addressLine3": "",
      "addressPou": "CORRESPONDENCE",
      "addressType": "DOMESTIC",
      "city": "Emeryville",
      "countryName": "United States",
      "countryCodeIso2": "US",
      "countryCodeIso3": "USA",
      "countryCodeFips": "",
      "countyCode": "",
      "countyName": "",
      "createdAt": "2020-05-30T03:57:20.000+00:00",
      "effectiveEndDate": "",
      "effectiveStartDate": "2020-07-10T20:10:45.000+00:00",
      "id": 173917,
      "internationalPostalCode": "",
      "province": "",
      "sourceDate": "2020-07-10T20:10:45.000+00:00",
      "sourceSystemUser": "",
      "stateCode": "CA",
      "transactionId": "7139aa82-fd06-45ea-a217-9654869924bd",
      "updatedAt": "2020-07-10T20:10:46.000+00:00",
      "validationKey": "",
      "vet360Id": "1273780",
      "zipCode": "94608",
      "zipCodeSuffix": ""
    },
    "homePhone": {
      "areaCode": "503",
      "countryCode": "1",
      "phoneNumber": "2222222"
    },
    "email": {
      "emailAddress": "test@user.com"
    },
  }
```

## Step 2: Military history

Current:
```
periodsOfService: [
  {
    serviceBranch: 'Air Force',
    dateRange: {
      from: '2000-01-01',
      to: '2001-01-01'
    }
  }
],
identity: 'VETERAN', // ADSM, NADNA, DNANA, DRNA
```

Suggested:
```
militaryHistory: {
	⭐️ status: 'ACTIVE_DUTY', // ACTIVE_DUTY, VETERAN, NATIONAL_GUARD_OR_RESERVES, DISCHARGED_NATIONAL_GUARD DISCHARGED_RESERVES. This is on the new paper form but is true/false. The values are used for conditional logic. Replaces the "identity" field?
	⭐️ separatedDueToDisability: 'true', // This is on the new paper form
	⭐️ preDischargeClaim: 'true', // This is on the new paper form
	⭐️ purpleHeartRecipient: 'true', // This is on the new paper form
	periodsOfService: [ // Question: do we need differentiate current service period from past, or can we just have them all here?
    {
      serviceBranch: 'Air Force',
      dateRange: {
        from: '2000-01-01',
        to: '2001-01-01'
      }
    }
  ],
}
```

## Step 3: Loan history

Current:
```
relevantPriorLoans: [
  {
    dateRange: {
      from: '2001-01-XX',
      to: '2002-01-XX'
    },
    propertyAddress: {
      propertyAddress1: '123 East St.',
      propertyCity: 'Smallville',
      propertyState: 'KS'
    }
  }
],
```

Suggested:
```
 loanHistory: {
	⭐️ certificateUse: 'ENTITLEMENT_INQUIRY_ONLY', // HOME_PURCHASE, CASH_OUT_REFINANCE, INTEREST_RATE_REDUCTION_REFINANCE. This is on the new paper form
	⭐️ hadPriorLoans: 'true', // This is on the new paper form
	⭐️ currentOnwership: 'true', // This is on the new paper form
	⭐️ currentAddressWasVAHomeLoan: 'true', // This is on the new paper form
	⭐️ entitlementRestoration: 'ENTITLEMENT_INQUIRY_ONLY', // CASH_OUT_REFINANCE, INTEREST_RATE_REDUCTION_REFINANCE, ONE_TIME_RESTORATION. This is on the new paper form. It appears once for each previous VA loan. Should it be a part of that data object, or separate, as I have it here?
	relevantPriorLoans: [
	  {
	    dateRange: {
	      from: '2001-01-XX',
	      to: '2002-01-XX'
	    },
	    propertyAddress: {
		  country: 'USA',
		  street1: '123 East St.',
		  ⭐️ street2: '', // Added just because it's part of the address pattern
		  ⭐️ street3: '', // ditto
		  city: 'Smallville',
		  state: 'KS',
		  ⭐️ postalCode: '66001' // Added just because it's part of the address pattern
	    }
	    ⭐️ vaLoanNumber: '' // 12-digits. This is on the new paper form
	    ⭐️ naturalDisaster: {
			affected: 'true', // This is on the new paper form
			dateOfLoss: '2002-01-XX' // This is on the new paper form
			// Also on the paper form but not in our designs: remarks
		}
	  }
	],
}
```

## Step 4: Upload documents

Current:
```
files: [
  {
    file: {},
    name: 'something.jpg',
    size: 68803,
    errorMessage: 'Internal Server Error',
    isEncrypted: false,
	attachmentType: "Discharge or separation papers (DD214)"
  }
],
```

Suggested:
The three new items here are added as a result of using a new component. The name of this array has changed to avoid a name collision on the FE.
```
files2: [
  {
    file: {},
    name: 'something.jpg',
    size: 68803,
    errorMessage: 'Internal Server Error',
    isEncrypted: false,
	additionalData: {
		attachmentType: "Discharge or separation papers (DD214)"
	}
	⭐️ guid: "123fake-submission-id-567",
	⭐️ confirmationCode: "1234567890",
	⭐️ type": "image/jpeg,
  }
],
```
