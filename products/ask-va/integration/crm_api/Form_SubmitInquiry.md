# Submit Inquiry

## Request

**Method**: POST

**Path**: /inquiries/new

**Parameters**:
None

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization (optional)|JWT?|Token for access to the CRM API|
|secid (optional)|string|User security identifier|


**Body**:
```json
{
               "areYouTheDependent": true,
               "attachemtPresent": false,
               "branchOfService": "Air Force",
               "city": "Queens",
               "contactMethod": "Phone",
               "country": "United States",
               "daytimePhone": "1235559090",
               "dependantCity": "Orlando",
               "dependantCountry": "United States",
               "dependantDayTimePhone": "+1(123)456-7890",
               "dependantDOB": "1990-01-01",
               "dependantEmail": "peter.parker@mail.com",
               "dependantFirstName": "Peter",
               "dependantGender": "M",
               "dependantLastName": "Parker",
               "dependantMiddleName": "Peter",
               "dependantProvince": "PP",
               "dependantRelationship": "son",
               "dependantSSN": "111-11-1111",
               "dependantState": "NY",
               "dependantStreetAddress": "123 Main street",
               "dependantZipCode": "12345",
               "emailAddress": "peter.parker@mail.com",
               "emailConfirmation": "peter.parker@mail.com",
               "facilityCode": "222333",
               "firstName" : "Peter",
               "fullName": "Peter Parker",
               "gender": "M",
               "inquiryAbout": "A general question",
               "inquiryCategory": "Topic",
               "inquirySource": "AVA",
               "inquirySubtopic": "Subtopic",
               "inquirySummary": "My question description",
               "inquiryTopic": "Topic",
               "inquiryType": "Question",
               "isVAEmployee": true,
               "isVeteran": true,
               "isVeteranAnEmployee": true,
               "isVeteranDeceased": true,
               "levelOfAuthentication": "Personal",
               "medicalCenter": "Med Center",
               "middleName": "Ben",
               "modifiedOn": "2023-01-19 03:14:07",
               "patient": "34567",
               "preferredName": "Pete",
               "pronouns": "he, him",
               "schoolFacilityNumber": "12345",
               "schoolName": "School Name",
               "streetAddress2": "123 Main street",
               "submitter": "Peter Parker",
               "submitterDependent": true,
               "submitterDOB": "1990-01-01",
               "submitterGender": "M",
               "submitterProvince": "Alberta",
               "submitterQuestion": "My question is... ",
               "submittersDodIDEdipiNumber": "1234567890",
               "submitterSSN": "123-45-6789",
               "submitterState": "NY",
               "submitterStateOfResidency": "NY",
               "submitterStateOfSchool": "PA",
               "submitterStateProperty": "NY",
               "submitterStreetAddress": "123 Main street",
               "submitterVetCenter": "",
               "submitterZipCodeOfResidency": "12345",
               "suffix": "Jr",
               "supervisorFlag": false,
               "vaEmployeeTimeStamp": "11:34:43",
               "veteranCity" : "Queens",
               "veteranClaimNumber": "123456",
               "veteranCountry": "United States",
               "veteranDateOfDeath": "2019-01-01",
               "veteranDOB": "1959-01-01",
               "veteranDODIdEdipiNumber": "1234567890",
               "veteranEmail": "ben.parker@mail.com",
               "veteranEmailConfirmation": "ben.parker@mail.com",
               "veteranEnrolled": false,
               "veteranFirstName": "Ben",
               "veteranFullName": "Ben Parker",
               "veteranICN": "12345-12345",
               "veteranLastName": "Parker",
               "veteranMiddleName": "Sam",
               "veteranPhone": "123-555-8888",
               "veteranPreferedName": "Ben",
               "veteranPronouns": "he, him",
               "veteranProvince": "Alberta",
               "veteranRelationship": "Parent",
               "veteranServiceEndDate": "2000-01-01",
               "veteranServiceNumber": "BP1234567",
               "veteranServiceStartDate": "1979-01-01",
               "veteranSSN": "123456789",
               "veteransState": "New York",
               "veteranStreetAddress": "123 Main Street",
               "veteranSuffix": "Sr",
               "veteranSuiteAptOther": "suite 4",
               "veteranZipCode": "12334",
               "whoWasTheirCounsler": "Gwen Stacy",
               "yourLastName": "Parker",
               "zipCode": "12345"
        }        
```

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
            "inquiryNumber": "123456",
            "queueSLA": "2 days"
        }
    }
}
```

</td>
</tr>
</table>

## Notes

* CC: Success should return the Inquiry Number and the Queue SLA (queue.iris_sla) for inclusion on the Confirmation page
