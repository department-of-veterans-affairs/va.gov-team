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

* JD: ensure we're receiving optionset ids and returning. if not, specify how it deviates. for example: passing state as 2-char code, ...

* CC: When a user logs in and AccessVA passes you the SecID, if it is not found by CRM, we currently just create a new profile for the user. If we're changing how profiles are handled, you may need/want a different behavior?

* JH: If there are fields that we need from AVA Profile, we probably need to keep the same behavior when not found by CRM. Most data from VA Profile, extra fields from AVA ??

