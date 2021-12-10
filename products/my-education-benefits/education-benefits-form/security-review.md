# Security Review
The Security Review materials for My Education Benefits are provided below.

## Product Outline
My Education Benefits product outline available [here](product-outline.md).

## Release Plan
My Education Benefits release plan available [here](release-plan.md).

## Technical diagrams:
  - Architecture diagram: this can be provided by request on private channel.
  - 
  - For non-trivial flows (i.e. more than a single round-trip call from frontend → vets-api → VA Backend), a sequence diagram showing the ordered flow of data and operations between systems. 

## New publicly exposed endpoints at vets-api

For My Education Benefits we have created a series of endpoints to get a claimant's information, eligibility status, submit a claim, get claim status and letters. Each one of these endpoints will use the logged in user information to generate the appropriate REST call to the DGIB services, which will be the providers of data. Secure communication between these vets-api endpoints and DGIB will be implemented using JWT tokens. The implemented endpoints are:

- meb_api/v0/claimant_info: This endpoint communicates with the DGIB services and returns claimant information to be displayed and used on My Education Benefits. A sample return object would look like:
```
{
  "claimant": {
    "claimantId": 0,
    "suffix": "string",
    "dateOfBirth": "2021-12-10T15:58:16.633Z",
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "notificationMethod": "NONE",
    "contactInfo": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "zipcode": "string",
      "emailAddress": "string",
      "addressType": "DOMESTIC",
      "mobilePhoneNumber": "string",
      "homePhoneNumber": "string",
      "countryCode": "string",
      "stateCode": "string"
    },
    "preferredContact": "string"
  },
  "serviceData": [
    {
      "branchOfService": "string",
      "beginDate": "2021-12-10T15:58:16.633Z",
      "endDate": "2021-12-10T15:58:16.633Z",
      "characterOfService": "string",
      "reasonForSeperation": "string",
      "exclusionPeriods": [
        {
          "beginDate": "2021-12-10T15:58:16.633Z",
          "endDate": "2021-12-10T15:58:16.633Z"
        }
      ],
      "trainingPeriods": [
        {
          "beginDate": "2021-12-10T15:58:16.633Z",
          "endDate": "2021-12-10T15:58:16.633Z"
        }
      ]
    }
  ]
}
```
-  meb_api/v0/eligibility: This endpoint communicates with the DGIB services and returns an array indicating the education benefits a claimant is eligible for. A sample response would be:
```
[
  {
    "veteranIsEligible": false,
    "chapter": "Chapter30"
  },
   {
    "veteranIsEligible": true,
    "chapter": "Chapter33"
  },
]
```

- meb_api/v0/claim_status: This endpoint communicates with the DGIB services and returns the status for a given claim, A sample response would be:
```
{
  "claimantId": 11111111,
  "claimId": 2222222,
  "status": "ELIGIBLE"
}
```

- meb_api/v0/claim_letter: This endpoint communicates with the DGIB services and returns a pdf letter which will either be a Certificate of Eligibility or a Dissallowance letter.

- meb_api/v0/submit_claim: This endpoint submits the completed My Education Benefits form to DGIB services and returns a 200OK upon succesful submission. A sample post request would be:

```
{
  "claimant": {
    "claimantId": 0,
    "suffix": "string",
    "dateOfBirth": "2021-12-10T16:42:37.822Z",
    "firstName": "string",
    "lastName": "string",
    "middleName": "string",
    "notificationMethod": "NONE",
    "contactInfo": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "zipcode": "string",
      "emailAddress": "string",
      "addressType": "DOMESTIC",
      "mobilePhoneNumber": "string",
      "homePhoneNumber": "string",
      "countryCode": "string",
      "stateCode": "string"
    },
    "preferredContact": "string"
  },
  "relinquishedBenefit": {
    "effRelinquishDate": "2021-12-10",
    "relinquishedBenefit": "Chapter30"
  },
  "additionalConsiderations": {
    "activeDutyKicker": "string",
    "academyRotcScholarship": "string",
    "reserveKicker": "string",
    "seniorRotcScholarship": "string",
    "activeDutyDodRepayLoan": "string",
    "terminalLeave": "string"
  },
  "comments": {
    "claimantComment": {
      "commentDate": "2021-12-10T16:42:37.822Z",
      "comments": "string"
    },
    "disagreeWithServicePeriod": true
  }
}
```

## Interactions with dependent VA backends
- Describe any new interactions with dependent VA backends 


## Security hot
- Describe any other security hotspots you're concerned about / want extra attention on 

## Prep Material For Security Review

- Review the guidance on [hosting a security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/hosting-a-security-review.md)
