# Security Review

## Introduction
The My Education Benefits application is an application hosted on VA.gov for submitting education benefit claims. It will require the user to be logged in on ID.me to be used. The vets-api endpoints developed for it will ultimately communicate with the DGIB Managed Environment. The DGIB Managed Environment is an externally hosted managed service that provides the API to support claim submissions and secures communications with vets-api throught https and JWT tokens included on the vets-api request header.

## Product Outline
My Education Benefits product outline available [here](product-outline.md).

## Release Plan
My Education Benefits release plan available [here](release-plan.md).

## Technical diagrams:
  - Architecture diagram: this can be provided by request on private channel.

## Common Questions

### Privacy

#### Logs

* Are there any new logging statements? No new logging statements outside of regular VA.gov analytics on Front End. Vets-Api backend will have minimal logging, as majority of logging will happen on the separate DGIB Managed Service.

#### User tracking / identity

* Are there any new cookies? No
* Are there any new uses of existing cookies? No

### Security

* How are systems authenticating with one another? - The My Education Benefits application requires that a user is logged in via ID.ME to let you use it. Once logged in, the vets-api endpoints uses the logged in user information to contruct the appropriate REST calls to fetch information from the DGIB Managed Environment API. Communications with the DGIB environment are secured via https and using JWT tokens.
 
* Is anyone bypassing any obvious built-in protections? (CSRF protection in form submissions, auto-escaping in FE template rendering systems, use of `innerHTML` - No.

#### Frontend

* Is anyone using `innerHTML`, or otherwise bypassing template rendering system protections like auto-escaping? - No
* Are there any new cookies? - No
* Are there any new uses of existing cookies? - No

#### Backend

* Are there any new REST endpoints exposed by `vets-api`, or new behavior change on existing endpoints?

For My Education Benefits we have created a series of endpoints to get a claimant's information, eligibility status, submit a claim, get claim status, and get letters from the DGIB Managed Environment. The DGIB Managed Environment is an external managed service that provides an API supporting education claim benefit functions including fetching claimant/claim status information and also claim processing automation.

The logged in user information is never sent from the FE, to avoid query manipulation. Instead, each one of these endpoints will use the logged in user information available on vets-api to generate the appropriate REST queries for the logged in user to the DGIB Managed Environment API. Secure communication between the vets-api endpoints and DGIB will be implemented using https and JWT tokens. DGIB expects vets-api endpoints to send JWT tokens on the request header and will validate them before sending or processing any information. 

The implemented endpoints are:

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

- meb_api/v0/submit_claim: This endpoint submits the completed My Education Benefits form to DGIB services and returns a 200 OK upon succesful submission. A sample post request would be:

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

### Infrastructure readiness

#### Traffic

* How much new traffic are you expecting to send to `vets-api`? 

The application relies on 4 endpoints to complete a submission. Based on typical education submissions of around 42K a month, we could expect at least 168K additional hits to vets-api. Based on historical peaks of 75K submissions in a month could expect at least 300K hits on such month.

#### Rollout

* What's your rollout plan? Please refer to the [Release Plan](release-plan.md).

#### Incident response

* Are there new integrations with VA backends? - There is no direct interaction with VA backends. All interactions will be with the DGIB Managed Environment. The DGIB Managed Environment is responsible of all interactions with any VA backends and not hosted on VA.gov
* What is this backend's latency/availability profile? - 99.9% availability, REST calls are taking typically one to two seconds to respond.
* Do we have points of contact for each new backend, in case of outages or security incidents? - Yes, we have direct access to the DGIB operations team.


## Interactions with dependent VA backends
There is no direct interaction with VA backends. All interactions will be with the DGIB Managed Environment. The DGIB Managed Environment is responsible of all interactions with any VA backends and not hosted on VA.gov


## Security hotspots
N/A

## Prep Material For Security Review

- Review the guidance on [hosting a security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/security/hosting-a-security-review.md)
