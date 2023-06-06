# Letters Generator Tech Primer

## Feature Purpose
This feature allows Veterans or dependents to download PDF versions of letters proving certain 
qualities of their VA benefits. Downloading letters of course requires authentication. In
addition, Veterans or dependents must have a valid address on file with the VA.  

## Feature Use Cases
A common, high-level scenario is that a Veteran or dependent needs physical or digital proof of
certain benefits-related qualities.

Currently (05/2023) the list of available letter types is:
- Benefit Summary
- Benefit Summary Dependent
- Benefit Verification
- Certificate Of Eligibility
- Civil Service
- Commissary
- Medicare Part D
- Minimum Essential Coverage
- Proof Of Service
- Service Verification

Use cases:
1. A Veteran needs physical or digital proof in order to complete other VA-related tasks.
2. A Veteran's dependent needs proof to complete VA-related tasks.

## Upstream Services
The VA.gov Letter Generator feature receives its data from the 
[Lighthouse Letters Generator API](https://developer.va.gov/explore/verification/docs/va_letter_generator?version=current).
This API uses BGS to retrieve benefits-related data.

## Endpoints
### Feature Endpoints
#### Get all eligible letters
This endpoint actually also returns the Veteran's address, labeled in the reponse as
`letter_destination`. 

The following is an example response, grabbed from the [Lighthouse docs](https://developer.va.gov/explore/verification/docs/va_letter_generator?version=current). 
The example in this document may become out of date, so the link should be considered the source of truth.

```
ENDPOINT: /v0/letters_generator
RESPONSE: {
    "letters": [
        {
            "letterName": "Benefit Summary Dependent",
            "letterType": "BENEFIT_SUMMARY_DEPENDENT"
        }
    ],
    "letterDestination": {
        "country": "USA",
        "addressLine1": "2476 MAIN STREET",
        "addressLine2": "STE # 12",
        "addressLine3": "West",
        "city": "RESTON",
        "state": "VA",
        "zipCode": "12345",
        "fullName": "John A Smith"
    }
}

```

#### Get beneficiary information
This endpoint returns the Veteran's benefit information as well as military history.

The following is an example response, grabbed from the [Lighthouse docs](https://developer.va.gov/explore/verification/docs/va_letter_generator?version=current). 
The example in this document may become out of date, so the link should be considered the source of truth.

```
ENDPOINT: /v0/letters_generator/beneficiary
RESPONSE: {
    "militaryServices": [
        {
            "branch": "Army",
            "characterOfService": "HONORABLE",
            "releasedDateTime": "2016-02-04T17:51:56Z",
            "enteredDateTime": "2016-02-04T17:51:56Z"
        }
    ],
    "benefitInformation": {
        "serviceConnectedPercentage": 2,
        "awardEffectiveDateTime": "2016-02-04T17:51:56Z",
        "monthlyAwardAmount": {
            "value": 2673,
            "currency": "USD"
        },
    }
}
```

#### Download letter
This endpoint allows Veterans to download PDF versions of the letter. The PDF version of the letter
is generated in real time, as opposed to other services, such as the Decision Letter Download
feature, which serves pre-made PDF files.

The download endpoint is a POST request, though the body is only used from the Benefit Summary
letter type. The Benefit Summary letter is more general than some of the other letters. Including
options with this request (via Curl or checking the appropriate boxes on the UI) includes more
information in the generated Summary letter.

The following are example requests. The response is binary data.

```
ENDPOINT: POST /v0/letters_generator/download/BENEFIT_SUMMARY

(Benefit Summary only) BODY: {
    'military_service' => true,
    'service_connected_disabilities' => true,
    'service_connected_evaluation' => false,
    'non_service_connected_pension' => false,
    'monthly_award' => false,
    'unemployable' => false,
    'special_monthly_compensation' => false,
    'adapted_housing' => false,
    'chapter35_eligibility' => false,
    'death_result_of_disability' => false,
    'survivors_award' => false
}
```

### Upstream Endpoints
[Lighthouse has great documentation](https://developer.va.gov/explore/verification/docs/va_letter_generator?version=current) for all the upstream endpoints used in the section above.

The letters generator endpoints use the client credentials grant (CCG) flow for authorization. Please see
[the Lighthouse CCG authorization docs for the letters generator](https://developer.va.gov/explore/authorization/docs/client-credentials?api=va_letter_generator)

Important note: you may see some opportunities for optimization in the code. For example, both the
`letters_generator/` and the `letters_generator/benficiary` endpoints on vets-api call the
Lighthouse `va-letter-generator/v1/eligible-letters` endpoint. This is because as of May 2023,
migration efforts were made to switch from using EVSS to Lighthouse APIs. The team at the time was
looking to reduce the migration effort on the more complicated frontend.

## Code Location
### Frontend
Repo: [vets-website](https://github.com/department-of-veterans-affairs/vets-website)
Directory: `src/applications/letters`

### Backend
Repo: [vets-api](https://github.com/department-of-veterans-affairs/vets-api)

EVSS-backed code locations:
- [EVSS-backed controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/letters_controller.rb)
- [EVSS-backed service](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/evss/letters)
- [EVSS-backed service tests](https://github.com/department-of-veterans-affairs/vets-api/tree/master/spec/lib/evss/letters)

Lighthouse-backed code locations:
- [Lighthouse-backed controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/letters_generator_controller.rb)
- [Lighhouse-backed controller spec](https://github.com/department-of-veterans-affairs/vets-api/blob/master/spec/controllers/v0/letters_generator_controller_spec.rb)
- [Lighthouse-backed service](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/lighthouse/letters_generator)
- [Lighthouse-backed service tests](https://github.com/department-of-veterans-affairs/vets-api/tree/master/spec/lib/lighthouse/letters_generator)
- [Lighthouse CCG auth](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/lighthouse/auth/client_credentials)
