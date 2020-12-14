# Current Letters Functionality

## Description

The Letters functionality is accessible in vets-website using the following URL:

    <vets-website-URL>/records/download-va-letters/

Users are required to be logged in and to have a valid address on file. 

A request is made to EVSS via vets-api to get the list of letters available for the user.  This list is displayed along with static content for each letter type, with the exception of the `benfit_summary` letter, which makes an additional call to get additional beneficiary data.

Not all users have mocked letter responses in the dev environment, but `vets.gov.user+1@gmail.com` has multiple letters available.

Letters are downloaded from EVSS via vets-api but this isn't mocked in dev vets-api so downloads fail.

## Currently Available Letters

- benefit_summary
- benefit_summary_dependent
- benefit_verification
- certificate_of_eligibility
- civil_service
- commissary
- medicare_partd
- minimum_essential_coverage
- proof_of_service
- service_verification

It should be possible to add support for any letters in EVSS by adding the letter type to this list in `lib/evss/letters/letter.rb`. Support for non-EVSS letters would require additional config of those letter types to additional services (which would require those other services to exist and be documented)

## Curent vets-api functionality

EVSS service code is in vets-api under `lib/evss/letters`

There are only three endpoints in the vets-api used for letters functionality (in `app/controllers/v0/letters_controller.rb`)

  - `index` - Returns an array of letters available for the user. This is a filtered list based on what is returned from EVSS.  From the [EVSS documentation](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/index.html?url=https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/products/veteran-military-records/swagger-va-letters.yaml):

> Only returns letters eligible for the user. Veterans are potentially eligible for [service_verification, commissary, benefit_verification, proof_of_service, medicare_partd, minimum_essential_coverage, civil_service, benefit_summary]. Dependents are potentially eligibile for [medicare_partd, minimum_essential_coverage, civil_service, benefit_summary_dependent]. If unable to determine eligibility because a partner is down a “letterGeneration.letterEligibilityError” message will be returned as well any lettersthat were able to be determined to be eligibile.
  
  Example response:
  ```json
  [
    {
      "name": "Commissary Letter",
      "letterType": "commissary"
    },
    {
      "name": "Proof of Service Letter",
      "letterType": "proof_of_service"
    },
    {
      "name": "Proof of Creditable Prescription Drug Coverage Letter", "letterType": "medicare_partd"
    },
    {
      "name": "Proof of Minimum Essential Coverage Letter", "letterType": "minimum_essential_coverage"
    },
    {
      "name": "Service Verification Letter",
      "letterType": "service_verification"
    },
    {
      "name": "Civil Service Preference Letter",
      "letterType": "civil_service"
    },
    {
      "name": "Benefit Summary Letter",
      "letterType": "benefit_summary"
    },
    {
      "name": "Benefit Verification Letter",
      "letterType": "benefit_verification"
    }
  ]
  ```
  
  - `download` - download a letter pdf by letter type
    
  - `beneficiary` - returns beneficiary information

    Example response:
    ```json
    {
      "data":{
        "id":"",
        "type":"evss_letters_beneficiary_responses",
        "attributes":{
          "benefitInformation":{
            "monthlyAwardAmount":123.0,
            "serviceConnectedPercentage":2,
            "awardEffectiveDate":"1965-01-01T05:00:00.000+00:00",
            "hasChapter35Eligibility":true,
            "hasNonServiceConnectedPension":false,
            "hasServiceConnectedDisabilities":true,
            "hasAdaptedHousing":false,
            "hasIndividualUnemployabilityGranted":false,
            "hasSpecialMonthlyCompensation":false
          },
          "militaryService":[
            {
              "branch":"ARMY",
              "characterOfService":"HONORABLE",
              "enteredDate":"1965-01-01T05:00:00.000+00:00",
              "releasedDate":"1972-10-01T04:00:00.000+00:00"
            },
            {
              "branch":"ARMY",
              "characterOfService":"UNCHARACTERIZED_ENTRY_LEVEL",
              "enteredDate":"1973-01-01T05:00:00.000+00:00",
              "releasedDate":"1977-10-01T04:00:00.000+00:00"
            }
          ]
        }
      }
    }
    ```

## Screenshots

![Screen Shot 2020-11-13 at 11.56.38 AM.png](https://images.zenhubusercontent.com/5bb388cc38a73929698456e2/3c600647-4aaf-4085-9576-f685732916f9)

![Screen Shot 2020-11-13 at 12.00.14 PM.png](https://images.zenhubusercontent.com/5bb388cc38a73929698456e2/0956c9a6-bf32-4390-9fee-0cd42555e6ec)
