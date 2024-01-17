# Read My Profile

## Request

**Method**: GET

**Path**: /profile

**Parameters**:
None

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|secid|string|User security identifier|
|message_id|string|an optional guid for correlating events to aid troubleshooting|

## Response

<table>
<tr>
<td> Status </td> <td> Response </td>
</tr>
<tr>
<td> 200 </td>
<td>

```json
{ 
    "status": { 
        "code": 200, 
        "message": "OK", 
        "data": {
                "FirstName": "Joseph",
                "MiddleName": "Same",
                "LastName": "Smith",
                "PreferredName": "Joe",
                "Suffix": "Jr",
                "Gender": "M",  
                "Pronouns": "he/him",
                "Country": "US",
                "Street": "123 Fake Street",
                "City": "Denver",
                "State": "CO",
                "ZipCode": "80112",
                "Province": "",
                "BusinessPhone": "1234567890",
                "PersonalPhone": "0987654321",
                "PersonalEmail": "joe@fake.com",
                "BusinessEmail": "joe.company@fake.com",
                "SchoolState": "CA",
                "SchoolFacilityCode": "123456",
                "ServiceNumber": "123",
                "ClaimNumber": "4556",
                "VeteranServiceStateDate": "1/1/19",
                "VeteranServiceEndDate": "1/1/23",
                "DateofBirth": "1/1/1990",
                "EDIPI": "1234567890",
        } 
    }
}
```

</td>
</tr>
<tr>
<td> 404 </td>
<td>

```json
{
    "status": {
        "code": 404,
        "message": "Profile not found."
    }
}
```

</td>
</tr>
<tr>
<td> 409 </td>
<td>

```json
{
    "status": {
        "code": 409,
        "message": "Duplicate profiles found."
    }
}
```

</td>
</tr>
</table>

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.

## AVA Dataverse Field Mapping

This table reflects the data as stored in AVA/CRM. This data will be mapped to the response documented above.

|**Prefilled field**|**CRM Contact Record Schema Name**|
|---|---|
|First Name|Submitter.FirstName|
|Middle Name|Submitter.MiddleName|
|Last Name|Submitter.LastName|
|Suffix|Submitter.iris_Suffix|
|Personal Email|Submitter.EMailAddress1|
|Gender|Submitter.iris_SubmitterProvidedGender|
|Submitter DoB|Submitter.BirthDate|
|SSN|Submitter.GovernmentId|
|Address|Submitter.Address1_Line1|
|Apartment/Suite/Other|Submitter.iris_SubmitterProvidedStreet2|
|City|Submitter.Address1_City|
|State|Submitter.iris_State|
|Zip|Submitter.Address 1_PostalCode|
|Country|Submitter.iris_SubmitterProvidedCountry|
|Province|Submitter.iris_SubmitterProvince|
|Personal Phone|Submitter.Address 1_Telephone3|
|Preferred Name|Submitter.iris_PreferredName|
|Pronouns|Submitter.iris_PronounsIUse|
|Branch of Service|Submitter.iris_SubmitterProvidedBranchofService|
|Service Start Date|Submitter.iris_SubmitterProvidedVeteranServiceStartDate|
|Service End Date|Submitter.iris_SubmitterProvidedVeteranServiceEndDate|
|Service Number|Submitter.iris_SubmitterProvidedServiceNumber|
|Claim Number|Submitter.iris_SubmitterProvidedClaimNumber|
|School Facility Code|Submitter.iris_SchoolFacilityCode|
|State of School|Submitter.iris_schoolstate|
|Business phone|Submitter.Telephone1|
|Business email|Submitter.EMailAddress2|
|DoD ID/EDIPI Number|Submitter.veo_EDIPI|

## Tasks / Comments

* JD: ensure we're receiving optionset ids and returning. if not, specify how it deviates. for example: passing state as 2-char code, ...

* CC: When a user logs in and AccessVA passes you the SecID, if it is not found by CRM, we currently just create a new profile for the user. If we're changing how profiles are handled, you may need/want a different behavior?

* JH: If there are fields that we need from AVA Profile, we probably need to keep the same behavior when not found by CRM. Most data from VA Profile, extra fields from AVA ??

