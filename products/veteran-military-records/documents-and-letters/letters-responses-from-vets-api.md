## Example responses for vets-api letters endpoints

### To use the mock VA letters service for local development
  * Make sure you have copied the following files:
    * `cp config/evss/mock_letters_response.yml.example config/evss/mock_letters_response.yml`
    * `cp config/evss/letter.pdf.example config/evss/letter.pdf`
    * `cp config/mvi_schema/mock_mvi_responses.yml.example config/mvi_schema/mock_mvi_responses.yml`
    * `cp config/settings.yml config/settings.local.yml`
  * Edit `config/settings.local.yml`:
    * Under `evss`:
    ```
    mock_letters: true
    mock_gi_bill_status: true
    ```
    * Under `mvi`:
    ```
    mock: true
    ```
  * Start your local `vets-api` and `vets-website` instances
  * Sign in using one of the [test users](../Engineering%20Assets.md), making sure to pick one that is also listed in `config/evss/mock_letters_response.yml.example`
  * Open dev tools and look under Application > Session Storage for the value of the `userToken` session variable
  * Test the endpoints by passing the token in. Examples:
    ```
    curl  --header "Authorization: Token token=<userToken>" http://localhost:3000/v0/letters
    curl --data ''  --request POST  --header "Authorization: Token token=<userToken>" -s -D  http://localhost:3000/v0/letters/commissary -o /dev/null
    ```

### `GET v0/letters`

#### Example response body
```
{
  "data": {
    "id": "",
    "type": "evss_letters_letters_responses",
    "attributes": {
      "letters": [
        {
          "name": "Commissary Letter",
          "letter_type": "commissary"
        },
        {
          "name": "Proof of Service Letter",
          "letter_type": "proof_of_service"
        },
        {
          "name": "Proof of Creditable Prescription Drug Coverage Letter",
          "letter_type": "medicare_partd"
        },
        {
          "name": "Proof of Minimum Essential Coverage Letter",
          "letter_type": "minimum_essential_coverage"
        },
               {
          "name": "Service Verification Letter",
          "letter_type": "service_verification"
        },
        {
          "name": "Civil Service Preference Letter",
          "letter_type": "civil_service"
        },
        {
          "name": "Benefit Summary Letter",
          "letter_type": "benefit_summary"
	      },
        {
          "name": "Benefit Verification Letter",
          "letter_type": "benefit_verification"
        }
      ]
    }
  },
  "meta": {
    "status": "OK",
    "address": {
      "full_name": "MARK WEBB",
      "address_line1": "2476 MAIN STREET",
      "address_line2": "STE # 12",
      "address_line3": "West",
      "city": "RESTON",
      "state": "VA",
      "country": "US",
      "foreign_code": "865",
      "zip_code": "12345"
    }
  }
}
```
### `GET v0/letters/beneficiary`

#### Example response body

```
{
  "data": {
    "id": "",
    "type": "evss_letters_beneficiary_responses",
    "attributes": {
      "benefit_information": {
        "award_effective_date": "1965-01-01T05:00:00.000+00:00",
        "has_adapted_housing": false,
        "has_chapter35_eligibility": true,
        "has_death_result_of_disability": false,
        "has_individual_unemployability_granted": false,
        "has_non_service_connected_pension": false,
        "has_service_connected_disabilities": true,
        "has_special_monthly_compensation": false,
        "has_survivors_indemnity_compensation_award": false,
        "has_survivors_pension_award": false,
        "monthly_award_amount": 123.0,
        "service_connected_percentage": 2
      },
      "military_service": [
        {
          "branch": "ARMY",
          "character_of_service": "HONORABLE",
          "entered_date": "1965-01-01T05:00:00.000+00:00",
          "released_date": "1972-10-01T04:00:00.000+00:00"
        },
        {
          "branch": "ARMY",
          "character_of_service": "UNCHARACTERIZED_ENTRY_LEVEL",
          "entered_date": "1973-01-01T05:00:00.000+00:00",
          "released_date": "1977-10-01T04:00:00.000+00:00"
        }
      ]
    }
  },
    "meta": {
    "status": "OK"
  }
}
```

### `POST v0/letters/commissary`

Response is a PDF blob

### `POST v0/letters/benefit_summary`

#### Example request body
```
{
  "militaryService": false,
  "serviceConnectedDisabilities": false,
  "serviceConnectedEvaluation": false,
  "nonServiceConnectedPension": false,
  "monthlyAward": false,
  "unemployable": false,
  "specialMonthlyCompensation": false,
  "adaptedHousing": false,
  "chapter35Eligibility": false,
  "deathResultOfDisability": false,
  "survivorsAward": false
}
```

Response is a PDF blob

