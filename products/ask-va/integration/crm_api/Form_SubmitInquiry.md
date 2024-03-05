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
|message_id|string|an optional guid for correlating events to aid troubleshooting|


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
               "firstName" : "Peter",
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

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.

## Tasks / Comments
 
* CC: Success should return the Inquiry Number and the Queue SLA (queue.iris_sla) for inclusion on the Confirmation page

* Delete: (JH: done)
  * FacilityCode (duplicate of MedicalCenter), 
  * FullName is auto-calculated
  * modifiedOn (auto stamp),
  * patient**, 
  * veteranFullName (calculated)
* Optionsets (picklists/enums) e.g. BranchOfService***, get list from CRM API (new API getoptionset?{setId}; others include ContactMethod (GetInTouch); Countries; DependentRelationship; In CRM Spreadsheet, OptionSets … two types: global, inquirySource –
Country: Lighthouse – map list ot list, map by standard country codes? Make sure that we don’t have any in Lighthouse that aren’t in CRM ****; JD: marked spreadsheet with the ones that could be an API for OptionSets; Green = API, Peach = VA.gov list with mapping baked in on CRM side (e.g. country)
* Yes/No as boolean for passing OptionSet value to submit inquiry e.g.submitterDependent, … marked in spreadsheet
* veteransState (not the extra “s”) OptionSet in spreadsheet?
* Dates sent as string UTC (see spreadsheet)
* Lookups (999, “USA”) will be string numbers (“999”)
* JD: figure out other fields that inquiry requires that are not listed. (fields to send that are missing, fields that can be calculated)
* Get correspondence - will send string display label, we return labels not values ?? JD: may not apply here, so might  want to discuss more if we come across these.

### References

1. Vet’s first name, last name, dob, icn to  match to patient, else generate patient
2. The lists are in the ticket that's tracking this comparison work.
