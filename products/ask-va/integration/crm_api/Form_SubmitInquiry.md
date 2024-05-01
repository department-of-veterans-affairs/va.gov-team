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



## Technical Updates

**URL:** https://dev.integration.d365.va.gov/eis/vagov.lob.ava/api/inquiries/new?OrganizationName=iris-dev

### Body

```json
{
    "InquiryCategory":"5c524deb-d864-eb11-bb24-000d3a579c45", 
    "InquirySource":722310004,
    "InquirySubtopic":"932a8586-e764-eb11-bb23-000d3a579c3f",
    "InquiryTopic":"932a8586-e764-eb11-bb23-000d3a579c3f",
    "SubmitterQuestion":"test",
    "AreYouTheDependent":true,
    "AttachmentPresent":false,
    "BranchOfService":722310000,
    "City":"Queens",
    "ContactMethod":722310001,
    "Country":722310000,
    "DaytimePhone":"1235559090",
    "DependantCity":"Morrilton",
    "DependantCountry":722310000,
    "DependantDayTimePhone":"1235559090",
    "DependantDOB":"01/01/2000",
    "DependantEmail":"test@email.com",
    "DependantFirstName":"Peter",
    "DependantGender":"M",
    "DependantLastName":"Parker",
    "DependantMiddleName":"B",
    "DependantProvince":722310008,
    "DependantRelationship":722310007,
    "DependantSSN":"123456789",
    "DependantState":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "DependantStreetAddress":"TEST",
    "DependantZipCode":"72156",
    "EmailAddress":"test@email.com",
    "EmailConfirmation":"test@email.com",
    "FirstName":"Pete",
    "Gender":"M",
    "InquiryAbout":722310003,
    "InquirySummary":"string",
    "InquiryType":722310001,
    "IsVAEmployee":true,
    "IsVeteran":true,
    "IsVeteranAnEmployee":true,
    "IsVeteranDeceased":true,
    "LevelOfAuthentication":722310001,
    "MedicalCenter":"07a51029-6816-e611-9436-0050568d743d",
    "MiddleName":"MiddleName",
    "PreferredName":"Petey",
    "Pronouns":"string",
	"SchoolObj": {
		"SchoolFacilityCode":"1000000898",
		"InstitutionName":"Kyle's Institution",
		"City":"Boston",
		"StateAbbreviation":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
		"RegionalOffice":"669cbc60-b58d-eb11-b1ac-001dd8309d89"
	},
    
    "StreetAddress2":"string",
    "Submitter":"42cc2a0a-2ebf-e711-9495-0050568d63d9",
    "SubmitterDependent":722310000,
    "SubmitterDOB":"01/01/2000",
    "SubmitterGender":"M",
    "SubmitterProvince":722310008,
    "SubmittersDodIdEdipiNumber":"string",
    "SubmitterSSN":"string",
    "SubmitterState":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "SubmitterStateOfResidency":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "SubmitterStateOfSchool":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "SubmitterStateProperty":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "SubmitterStreetAddress":"string",
    "SubmitterVetCenter":"string",
    "SubmitterZipCodeOfResidency":"e3df3e75-54a1-eb11-b1ac-001dd804abe6",
    "Suffix":722310001,
    "SupervisorFlag":true,
    "VaEmployeeTimeStamp":"string",
    "VeteranCity":"string",
    "VeteranClaimNumber":"string",
    "VeteranCountry": 722310186,
    "VeteranDateOfDeath":"01/01/2000",
    "VeteranDOB":"01/01/2000",
    "VeteranDodIdEdipiNumber":"string",
    "VeteranEmail":"string",
    "VeteranEmailConfirmation":"string",
    "VeteranEnrolled":true,
    "VeteranFirstName":"string",
    "VeteranICN":"string",
    "VeteranLastName":"string",
    "VeteranMiddleName":"string",
    "VeteranPhone":"string",
    "VeteranPreferedName":"string",
    "VeteranPronouns":"string",
    "VeteranProvince":722310005,
    "VeteranRelationship": 722310008,
    "VeteranServiceEndDate":"01/01/2000",
    "VeteranServiceNumber":"string",
    "VeteranServiceStartDate":"01/01/1960",
    "VeteranSSN":"string",
    "VeteransState":"80b9d1e0-d488-eb11-b1ac-001dd8309d89",
    "VeteranStreetAddress":"string",
    "VeteranSuffix": 722310001,
    "VeteranSuiteAptOther":"string",
    "VeteranZipCode":"string",
    "WhoWasTheirCounselor":"string",
    "YourLastName":"string",
    "ZipCode":"string"
}
```

### Response

```json
{
    "Data": {
        "InquiryNumber": "A-20240326-307058"
    },
    "Message": null,
    "ExceptionOccurred": false,
    "ExceptionMessage": null,
    "MessageId": "b5112058-4639-4d0a-b732-ca1e9885fae5"
}
```



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
