# Get AVA Profile

Retrieve user information to aid in prefill.

**URL:** `/ask_va_api/v0/profile`

**Method:** `GET`

**Auth Req'd:** YES

## Success Response

**Condition:** Profile data was found.

**Code:** `200 OK`

**Content:**

```json
{
  "data": {
    "personalInformation": {
      "first": "Peter",
      "middle": "B",
      "last": "Parker",
      "suffix": "Jr.",
      "preferredName": "Pete",
      "socialOrServiceNum": {
        "ssn": "254178965",
        "serviceNumber": "1254778"
      },
      "dateOfBirth": "1999-01-11"
    },
    "contactInformation": {
      "onBaseOutsideUS": true,
      "country": "USA",
      "address": {
        "street": "123 Main street",
        "unitNumber": "101",
        "street2": "street 2",
        "street3": "street3",
        "city": "Brooklyn",
        "state": "NY",
        "militaryAddress": {
          //this is used if onBaseOutsideUS is true
          "militaryPostOffice": "APO",
          "militaryState": "AA"
        },
        "postalCode": "12358"
      },
      "phoneNumber": "7547894562",
      "emailAddress": "test@email.com"
    },
    "avaProfile": {
      "schoolInfo": "11223344 - School Name",
      "businessPhone": "9658871236",
      "businessEmail": "workEmail@test.mail"
    }
  }
}
```

## Error Response

**Condition:** Profile data was not found.

**Code:** `404 NOT FOUND`

**Content:**

```json

```

**OR**

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json

```

## Notes

* The following table reflects the data as stored in AVA/CRM. This data will be mapped to the response documented above.

| Prefilled field       | CRM Contact Record Schema Name                          |
|-----------------------|---------------------------------------------------------|
| First Name            | Submitter.FirstName                                     |
| Middle Name           | Submitter.MiddleName                                    |
| Last Name             | Submitter.LastName                                      |
| Suffix                | Submitter.iris_Suffix                                   |
| Personal Email        | Submitter.EMailAddress1                                 |
| Gender                | Submitter.iris_SubmitterProvidedGender                  |
| Submitter DoB         | Submitter.BirthDate                                     |
| SSN                   | Submitter.GovernmentId                                  |
| Address               | Submitter.Address1_Line1                                |
| Apartment/Suite/Other | Submitter.iris_SubmitterProvidedStreet2                 |
| City                  | Submitter.Address1_City                                 |
| State                 | Submitter.iris_State                                    |
| Zip                   | Submitter.Address 1_PostalCode                          |
| Country               | Submitter.iris_SubmitterProvidedCountry                 |
| Province              | Submitter.iris_SubmitterProvince                        |
| Personal Phone        | Submitter.Address 1_Telephone3                          |
| Preferred Name        | Submitter.iris_PreferredName                            |
| Pronouns              | Submitter.iris_PronounsIUse                             |
| Branch of Service     | Submitter.iris_SubmitterProvidedBranchofService         |
| Service Start Date    | Submitter.iris_SubmitterProvidedVeteranServiceStartDate |
| Service End Date      | Submitter.iris_SubmitterProvidedVeteranServiceEndDate   |
| Service Number        | Submitter.iris_SubmitterProvidedServiceNumber           |
| Claim Number          | Submitter.iris_SubmitterProvidedClaimNumber             |
| School Facility Code  | Submitter.iris_SchoolFacilityCode                       |
| State of School       | Submitter.iris_schoolstate                              |
| Business phone        | Submitter.Telephone1                                    |
| Business email        | Submitter.EMailAddress2                                 |
| DoD ID/EDIPI Number   | Submitter.veo_EDIPI                                     |

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.