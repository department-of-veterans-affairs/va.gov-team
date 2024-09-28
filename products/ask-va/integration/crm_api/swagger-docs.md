<!-- Generator: Widdershins v4.0.1 -->

<h1 id="va-ava-vagov-lob">VA.AVA.VaGov.LOB v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava">https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header. 

* API Key (apiKeyQuery)
    - Parameter Name: **subscription-key**, in: query. 

<h1 id="va-ava-vagov-lob-announcements">Announcements</h1>

## Announcements

<a id="opIdAnnouncements"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Announcements',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Announcements \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Announcements`

*Announcements*

<h3 id="announcements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|

<h3 id="announcements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-attachments">Attachments</h1>

## Attachment

<a id="opIdAttachment"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Attachment',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Attachment \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Attachment`

*Attachment*

<h3 id="attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|id|query|string|false|none|

<h3 id="attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-inquirystatus">InquiryStatus</h1>

## InquiryStatus

<a id="opIdInquiryStatus"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/InquiryStatus',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/InquiryStatus \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/InquiryStatus`

*InquiryStatus*

<h3 id="inquirystatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|inquiryNumber|query|string|false|none|

<h3 id="inquirystatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-optionsets">OptionSets</h1>

## OptionSets

<a id="opIdOptionSets"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/OptionSet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/OptionSet \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/OptionSet`

*OptionSets*

<h3 id="optionsets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|name|query|string|false|none|

<h3 id="optionsets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-ping">Ping</h1>

## Ping

<a id="opIdPing"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Ping',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Ping \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Ping`

*Ping*

<h3 id="ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-retrieveprofile">RetrieveProfile</h1>

## RetrieveProfile

<a id="opIdRetrieveProfile"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Profile',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Profile \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Profile`

*RetrieveProfile*

<h3 id="retrieveprofile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|icn|query|string|false|none|

<h3 id="retrieveprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-topics">Topics</h1>

## Topics

<a id="opIdTopics"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Topics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Topics \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Topics`

*Topics*

<h3 id="topics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|parentId|query|string|false|none|

<h3 id="topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-uploadfile">UploadFile</h1>

## UploadFile

<a id="opIdUploadFile"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.put 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Attachment/new',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X PUT https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Attachment/new \
  -H 'Content-Type: application/json' \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`PUT /api/Attachment/new`

*UploadFile*

> Body parameter

```json
{
  "fileContent": "string",
  "fileName": "string",
  "inquiryId": "string",
  "correspondenceId": "string",
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}
```

```yaml
fileContent: string
fileName: string
inquiryId: string
correspondenceId: string
RequestType: string
OrganizationName: string
UserId: 00000000-0000-0000-0000-000000000000
CorrelationId: 00000000-0000-0000-0000-000000000000
MessageId: string

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<UploadFileRequest>
  <fileContent>string</fileContent>
  <fileName>string</fileName>
  <inquiryId>string</inquiryId>
  <correspondenceId>string</correspondenceId>
  <RequestType>string</RequestType>
  <OrganizationName>string</OrganizationName>
  <UserId>00000000-0000-0000-0000-000000000000</UserId>
  <CorrelationId>00000000-0000-0000-0000-000000000000</CorrelationId>
  <MessageId>string</MessageId>
</UploadFileRequest>
```

<h3 id="uploadfile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|body|body|[UploadFileRequest](#schemauploadfilerequest)|false|none|

<h3 id="uploadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-correspondences">Correspondences</h1>

## Correspondences

<a id="opIdCorrespondences"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiry/{id}/replies',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiry/{id}/replies \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Inquiry/{id}/replies`

*Correspondences*

<h3 id="correspondences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|organizationName|query|string|false|none|

<h3 id="correspondences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-retrieveinquiries">RetrieveInquiries</h1>

## RetrieveInquiries

<a id="opIdRetrieveInquiries"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.get 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries',
  params: {
  'id' => 'string'
}, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X GET https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries?id=string \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`GET /api/Inquiries`

*RetrieveInquiries*

<h3 id="retrieveinquiries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|true|none|
|organizationName|query|string|false|none|

<h3 id="retrieveinquiries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-submitinquiry">SubmitInquiry</h1>

## SubmitInquiry

<a id="opIdSubmitInquiry"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.put 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries/new',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X PUT https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries/new \
  -H 'Content-Type: application/json' \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`PUT /api/Inquiries/new`

*SubmitInquiry*

> Body parameter

```json
{
  "AreYouTheDependent": true,
  "AttachmentPresent": true,
  "BranchOfService": 0,
  "City": "string",
  "ContactMethod": 0,
  "Country": 0,
  "DaytimePhone": "string",
  "DependantCity": "string",
  "DependantCountry": 0,
  "DependantDayTimePhone": "string",
  "DependantDOB": "string",
  "DependantEmail": "string",
  "DependantFirstName": "string",
  "DependantGender": "string",
  "DependantLastName": "string",
  "DependantMiddleName": "string",
  "DependantProvince": 0,
  "DependantRelationship": 0,
  "DependantSSN": "string",
  "DependantState": "string",
  "DependantStreetAddress": "string",
  "DependantZipCode": "string",
  "EmailAddress": "string",
  "EmailConfirmation": "string",
  "FirstName": "string",
  "Gender": "string",
  "InquiryAbout": 0,
  "InquiryCategory": "string",
  "InquirySource": 0,
  "InquirySubtopic": "string",
  "InquirySummary": "string",
  "InquiryTopic": "string",
  "InquiryType": 0,
  "IsVAEmployee": true,
  "IsVeteran": true,
  "IsVeteranAnEmployee": true,
  "IsVeteranDeceased": true,
  "LevelOfAuthentication": 0,
  "MedicalCenter": "string",
  "MiddleName": "string",
  "PreferredName": "string",
  "Pronouns": "string",
  "SchoolFacilityNumber": "string",
  "SchoolName": "string",
  "StreetAddress2": "string",
  "Submitter": "string",
  "SubmitterDependent": true,
  "SubmitterDOB": "string",
  "SubmitterGender": "string",
  "SubmitterProvince": 0,
  "SubmitterQuestion": "string",
  "SubmittersDodIdEdipiNumber": "string",
  "SubmitterSSN": "string",
  "SubmitterState": "string",
  "SubmitterStateOfResidency": "string",
  "SubmitterStateOfSchool": "string",
  "SubmitterStateProperty": "string",
  "SubmitterStreetAddress": "string",
  "SubmitterVetCenter": "string",
  "SubmitterZipCodeOfResidency": "string",
  "Suffix": "string",
  "SupervisorFlag": true,
  "VaEmployeeTimeStamp": "string",
  "VeteranCity": "string",
  "VeteranClaimNumber": "string",
  "VeteranCountry": "string",
  "VeteranDateOfDeath": "string",
  "VeteranDOB": "string",
  "VeteranDodIdEdipiNumber": "string",
  "VeteranEmail": "string",
  "VeteranEmailConfirmation": "string",
  "VeteranEnrolled": true,
  "VeteranFirstName": "string",
  "VeteranICN": "string",
  "VeteranLastName": "string",
  "VeteranMiddleName": "string",
  "VeteranPhone": "string",
  "VeteranPreferedName": "string",
  "VeteranPronouns": "string",
  "VeteranProvince": "string",
  "VeteranRelationship": "string",
  "VeteranServiceEndDate": "string",
  "VeteranServiceNumber": "string",
  "VeteranServiceStartDate": "string",
  "VeteranSSN": "string",
  "VeteransState": "string",
  "VeteranStreetAddress": "string",
  "VeteranSuffix": "string",
  "VeteranSuiteAptOther": "string",
  "VeteranZipCode": "string",
  "WhoWasTheirCounselor": "string",
  "YourLastName": "string",
  "ZipCode": "string",
  "InquiryId": "string",
  "QueueSLA": 0,
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}
```

```yaml
AreYouTheDependent: true
AttachmentPresent: true
BranchOfService: 0
City: string
ContactMethod: 0
Country: 0
DaytimePhone: string
DependantCity: string
DependantCountry: 0
DependantDayTimePhone: string
DependantDOB: string
DependantEmail: string
DependantFirstName: string
DependantGender: string
DependantLastName: string
DependantMiddleName: string
DependantProvince: 0
DependantRelationship: 0
DependantSSN: string
DependantState: string
DependantStreetAddress: string
DependantZipCode: string
EmailAddress: string
EmailConfirmation: string
FirstName: string
Gender: string
InquiryAbout: 0
InquiryCategory: string
InquirySource: 0
InquirySubtopic: string
InquirySummary: string
InquiryTopic: string
InquiryType: 0
IsVAEmployee: true
IsVeteran: true
IsVeteranAnEmployee: true
IsVeteranDeceased: true
LevelOfAuthentication: 0
MedicalCenter: string
MiddleName: string
PreferredName: string
Pronouns: string
SchoolFacilityNumber: string
SchoolName: string
StreetAddress2: string
Submitter: string
SubmitterDependent: true
SubmitterDOB: string
SubmitterGender: string
SubmitterProvince: 0
SubmitterQuestion: string
SubmittersDodIdEdipiNumber: string
SubmitterSSN: string
SubmitterState: string
SubmitterStateOfResidency: string
SubmitterStateOfSchool: string
SubmitterStateProperty: string
SubmitterStreetAddress: string
SubmitterVetCenter: string
SubmitterZipCodeOfResidency: string
Suffix: string
SupervisorFlag: true
VaEmployeeTimeStamp: string
VeteranCity: string
VeteranClaimNumber: string
VeteranCountry: string
VeteranDateOfDeath: string
VeteranDOB: string
VeteranDodIdEdipiNumber: string
VeteranEmail: string
VeteranEmailConfirmation: string
VeteranEnrolled: true
VeteranFirstName: string
VeteranICN: string
VeteranLastName: string
VeteranMiddleName: string
VeteranPhone: string
VeteranPreferedName: string
VeteranPronouns: string
VeteranProvince: string
VeteranRelationship: string
VeteranServiceEndDate: string
VeteranServiceNumber: string
VeteranServiceStartDate: string
VeteranSSN: string
VeteransState: string
VeteranStreetAddress: string
VeteranSuffix: string
VeteranSuiteAptOther: string
VeteranZipCode: string
WhoWasTheirCounselor: string
YourLastName: string
ZipCode: string
InquiryId: string
QueueSLA: 0
RequestType: string
OrganizationName: string
UserId: 00000000-0000-0000-0000-000000000000
CorrelationId: 00000000-0000-0000-0000-000000000000
MessageId: string

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SubmitInquiryRequest>
  <AreYouTheDependent>true</AreYouTheDependent>
  <AttachmentPresent>true</AttachmentPresent>
  <BranchOfService>0</BranchOfService>
  <City>string</City>
  <ContactMethod>0</ContactMethod>
  <Country>0</Country>
  <DaytimePhone>string</DaytimePhone>
  <DependantCity>string</DependantCity>
  <DependantCountry>0</DependantCountry>
  <DependantDayTimePhone>string</DependantDayTimePhone>
  <DependantDOB>string</DependantDOB>
  <DependantEmail>string</DependantEmail>
  <DependantFirstName>string</DependantFirstName>
  <DependantGender>string</DependantGender>
  <DependantLastName>string</DependantLastName>
  <DependantMiddleName>string</DependantMiddleName>
  <DependantProvince>0</DependantProvince>
  <DependantRelationship>0</DependantRelationship>
  <DependantSSN>string</DependantSSN>
  <DependantState>string</DependantState>
  <DependantStreetAddress>string</DependantStreetAddress>
  <DependantZipCode>string</DependantZipCode>
  <EmailAddress>string</EmailAddress>
  <EmailConfirmation>string</EmailConfirmation>
  <FirstName>string</FirstName>
  <Gender>string</Gender>
  <InquiryAbout>0</InquiryAbout>
  <InquiryCategory>string</InquiryCategory>
  <InquirySource>0</InquirySource>
  <InquirySubtopic>string</InquirySubtopic>
  <InquirySummary>string</InquirySummary>
  <InquiryTopic>string</InquiryTopic>
  <InquiryType>0</InquiryType>
  <IsVAEmployee>true</IsVAEmployee>
  <IsVeteran>true</IsVeteran>
  <IsVeteranAnEmployee>true</IsVeteranAnEmployee>
  <IsVeteranDeceased>true</IsVeteranDeceased>
  <LevelOfAuthentication>0</LevelOfAuthentication>
  <MedicalCenter>string</MedicalCenter>
  <MiddleName>string</MiddleName>
  <PreferredName>string</PreferredName>
  <Pronouns>string</Pronouns>
  <SchoolFacilityNumber>string</SchoolFacilityNumber>
  <SchoolName>string</SchoolName>
  <StreetAddress2>string</StreetAddress2>
  <Submitter>string</Submitter>
  <SubmitterDependent>true</SubmitterDependent>
  <SubmitterDOB>string</SubmitterDOB>
  <SubmitterGender>string</SubmitterGender>
  <SubmitterProvince>0</SubmitterProvince>
  <SubmitterQuestion>string</SubmitterQuestion>
  <SubmittersDodIdEdipiNumber>string</SubmittersDodIdEdipiNumber>
  <SubmitterSSN>string</SubmitterSSN>
  <SubmitterState>string</SubmitterState>
  <SubmitterStateOfResidency>string</SubmitterStateOfResidency>
  <SubmitterStateOfSchool>string</SubmitterStateOfSchool>
  <SubmitterStateProperty>string</SubmitterStateProperty>
  <SubmitterStreetAddress>string</SubmitterStreetAddress>
  <SubmitterVetCenter>string</SubmitterVetCenter>
  <SubmitterZipCodeOfResidency>string</SubmitterZipCodeOfResidency>
  <Suffix>string</Suffix>
  <SupervisorFlag>true</SupervisorFlag>
  <VaEmployeeTimeStamp>string</VaEmployeeTimeStamp>
  <VeteranCity>string</VeteranCity>
  <VeteranClaimNumber>string</VeteranClaimNumber>
  <VeteranCountry>string</VeteranCountry>
  <VeteranDateOfDeath>string</VeteranDateOfDeath>
  <VeteranDOB>string</VeteranDOB>
  <VeteranDodIdEdipiNumber>string</VeteranDodIdEdipiNumber>
  <VeteranEmail>string</VeteranEmail>
  <VeteranEmailConfirmation>string</VeteranEmailConfirmation>
  <VeteranEnrolled>true</VeteranEnrolled>
  <VeteranFirstName>string</VeteranFirstName>
  <VeteranICN>string</VeteranICN>
  <VeteranLastName>string</VeteranLastName>
  <VeteranMiddleName>string</VeteranMiddleName>
  <VeteranPhone>string</VeteranPhone>
  <VeteranPreferedName>string</VeteranPreferedName>
  <VeteranPronouns>string</VeteranPronouns>
  <VeteranProvince>string</VeteranProvince>
  <VeteranRelationship>string</VeteranRelationship>
  <VeteranServiceEndDate>string</VeteranServiceEndDate>
  <VeteranServiceNumber>string</VeteranServiceNumber>
  <VeteranServiceStartDate>string</VeteranServiceStartDate>
  <VeteranSSN>string</VeteranSSN>
  <VeteransState>string</VeteransState>
  <VeteranStreetAddress>string</VeteranStreetAddress>
  <VeteranSuffix>string</VeteranSuffix>
  <VeteranSuiteAptOther>string</VeteranSuiteAptOther>
  <VeteranZipCode>string</VeteranZipCode>
  <WhoWasTheirCounselor>string</WhoWasTheirCounselor>
  <YourLastName>string</YourLastName>
  <ZipCode>string</ZipCode>
  <InquiryId>string</InquiryId>
  <QueueSLA>0</QueueSLA>
  <RequestType>string</RequestType>
  <OrganizationName>string</OrganizationName>
  <UserId>00000000-0000-0000-0000-000000000000</UserId>
  <CorrelationId>00000000-0000-0000-0000-000000000000</CorrelationId>
  <MessageId>string</MessageId>
</SubmitInquiryRequest>
```

<h3 id="submitinquiry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|string|false|none|
|body|body|[SubmitInquiryRequest](#schemasubmitinquiryrequest)|false|none|

<h3 id="submitinquiry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

<h1 id="va-ava-vagov-lob-submitreply">SubmitReply</h1>

## SubmitReply

<a id="opIdSubmitReply"></a>

> Code samples

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Ocp-Apim-Subscription-Key' => 'API_KEY'
}

result = RestClient.put 'https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries/{id}/reply/new',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```shell
# You can also use wget
curl -X PUT https://va-sw-apim.dev.eis.vaec.va.gov/vagov.lob.ava/api/Inquiries/{id}/reply/new \
  -H 'Content-Type: application/json' \
  -H 'Ocp-Apim-Subscription-Key: API_KEY'

```

`PUT /api/Inquiries/{id}/reply/new`

*SubmitReply*

> Body parameter

```json
{
  "Id": "string",
  "Reply": "string",
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}
```

```yaml
Id: string
Reply: string
RequestType: string
OrganizationName: string
UserId: 00000000-0000-0000-0000-000000000000
CorrelationId: 00000000-0000-0000-0000-000000000000
MessageId: string

```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<SubmitReplyRequest>
  <Id>string</Id>
  <Reply>string</Reply>
  <RequestType>string</RequestType>
  <OrganizationName>string</OrganizationName>
  <UserId>00000000-0000-0000-0000-000000000000</UserId>
  <CorrelationId>00000000-0000-0000-0000-000000000000</CorrelationId>
  <MessageId>string</MessageId>
</SubmitReplyRequest>
```

<h3 id="submitreply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|organizationName|query|string|false|none|
|body|body|[SubmitReplyRequest](#schemasubmitreplyrequest)|false|none|

<h3 id="submitreply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_SubmitInquiryRequest">SubmitInquiryRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitinquiryrequest"></a>
<a id="schema_SubmitInquiryRequest"></a>
<a id="tocSsubmitinquiryrequest"></a>
<a id="tocssubmitinquiryrequest"></a>

```json
{
  "AreYouTheDependent": true,
  "AttachmentPresent": true,
  "BranchOfService": 0,
  "City": "string",
  "ContactMethod": 0,
  "Country": 0,
  "DaytimePhone": "string",
  "DependantCity": "string",
  "DependantCountry": 0,
  "DependantDayTimePhone": "string",
  "DependantDOB": "string",
  "DependantEmail": "string",
  "DependantFirstName": "string",
  "DependantGender": "string",
  "DependantLastName": "string",
  "DependantMiddleName": "string",
  "DependantProvince": 0,
  "DependantRelationship": 0,
  "DependantSSN": "string",
  "DependantState": "string",
  "DependantStreetAddress": "string",
  "DependantZipCode": "string",
  "EmailAddress": "string",
  "EmailConfirmation": "string",
  "FirstName": "string",
  "Gender": "string",
  "InquiryAbout": 0,
  "InquiryCategory": "string",
  "InquirySource": 0,
  "InquirySubtopic": "string",
  "InquirySummary": "string",
  "InquiryTopic": "string",
  "InquiryType": 0,
  "IsVAEmployee": true,
  "IsVeteran": true,
  "IsVeteranAnEmployee": true,
  "IsVeteranDeceased": true,
  "LevelOfAuthentication": 0,
  "MedicalCenter": "string",
  "MiddleName": "string",
  "PreferredName": "string",
  "Pronouns": "string",
  "SchoolFacilityNumber": "string",
  "SchoolName": "string",
  "StreetAddress2": "string",
  "Submitter": "string",
  "SubmitterDependent": true,
  "SubmitterDOB": "string",
  "SubmitterGender": "string",
  "SubmitterProvince": 0,
  "SubmitterQuestion": "string",
  "SubmittersDodIdEdipiNumber": "string",
  "SubmitterSSN": "string",
  "SubmitterState": "string",
  "SubmitterStateOfResidency": "string",
  "SubmitterStateOfSchool": "string",
  "SubmitterStateProperty": "string",
  "SubmitterStreetAddress": "string",
  "SubmitterVetCenter": "string",
  "SubmitterZipCodeOfResidency": "string",
  "Suffix": "string",
  "SupervisorFlag": true,
  "VaEmployeeTimeStamp": "string",
  "VeteranCity": "string",
  "VeteranClaimNumber": "string",
  "VeteranCountry": "string",
  "VeteranDateOfDeath": "string",
  "VeteranDOB": "string",
  "VeteranDodIdEdipiNumber": "string",
  "VeteranEmail": "string",
  "VeteranEmailConfirmation": "string",
  "VeteranEnrolled": true,
  "VeteranFirstName": "string",
  "VeteranICN": "string",
  "VeteranLastName": "string",
  "VeteranMiddleName": "string",
  "VeteranPhone": "string",
  "VeteranPreferedName": "string",
  "VeteranPronouns": "string",
  "VeteranProvince": "string",
  "VeteranRelationship": "string",
  "VeteranServiceEndDate": "string",
  "VeteranServiceNumber": "string",
  "VeteranServiceStartDate": "string",
  "VeteranSSN": "string",
  "VeteransState": "string",
  "VeteranStreetAddress": "string",
  "VeteranSuffix": "string",
  "VeteranSuiteAptOther": "string",
  "VeteranZipCode": "string",
  "WhoWasTheirCounselor": "string",
  "YourLastName": "string",
  "ZipCode": "string",
  "InquiryId": "string",
  "QueueSLA": 0,
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AreYouTheDependent|boolean|false|none|none|
|AttachmentPresent|boolean|false|none|none|
|BranchOfService|integer(int32)|false|none|none|
|City|string|false|none|none|
|ContactMethod|integer(int32)|false|none|none|
|Country|integer(int32)|false|none|none|
|DaytimePhone|string|false|none|none|
|DependantCity|string|false|none|none|
|DependantCountry|integer(int32)|false|none|none|
|DependantDayTimePhone|string|false|none|none|
|DependantDOB|string|false|none|none|
|DependantEmail|string|false|none|none|
|DependantFirstName|string|false|none|none|
|DependantGender|string|false|none|none|
|DependantLastName|string|false|none|none|
|DependantMiddleName|string|false|none|none|
|DependantProvince|integer(int32)|false|none|none|
|DependantRelationship|integer(int32)|false|none|none|
|DependantSSN|string|false|none|none|
|DependantState|string|false|none|none|
|DependantStreetAddress|string|false|none|none|
|DependantZipCode|string|false|none|none|
|EmailAddress|string|false|none|none|
|EmailConfirmation|string|false|none|none|
|FirstName|string|false|none|none|
|Gender|string|false|none|none|
|InquiryAbout|integer(int32)|false|none|none|
|InquiryCategory|string|false|none|none|
|InquirySource|integer(int32)|false|none|none|
|InquirySubtopic|string|false|none|none|
|InquirySummary|string|false|none|none|
|InquiryTopic|string|false|none|none|
|InquiryType|integer(int32)|false|none|none|
|IsVAEmployee|boolean|false|none|none|
|IsVeteran|boolean|false|none|none|
|IsVeteranAnEmployee|boolean|false|none|none|
|IsVeteranDeceased|boolean|false|none|none|
|LevelOfAuthentication|integer(int32)|false|none|none|
|MedicalCenter|string|false|none|none|
|MiddleName|string|false|none|none|
|PreferredName|string|false|none|none|
|Pronouns|string|false|none|none|
|SchoolFacilityNumber|string|false|none|none|
|SchoolName|string|false|none|none|
|StreetAddress2|string|false|none|none|
|Submitter|string|false|none|none|
|SubmitterDependent|boolean|false|none|none|
|SubmitterDOB|string|false|none|none|
|SubmitterGender|string|false|none|none|
|SubmitterProvince|integer(int32)|false|none|none|
|SubmitterQuestion|string|false|none|none|
|SubmittersDodIdEdipiNumber|string|false|none|none|
|SubmitterSSN|string|false|none|none|
|SubmitterState|string|false|none|none|
|SubmitterStateOfResidency|string|false|none|none|
|SubmitterStateOfSchool|string|false|none|none|
|SubmitterStateProperty|string|false|none|none|
|SubmitterStreetAddress|string|false|none|none|
|SubmitterVetCenter|string|false|none|none|
|SubmitterZipCodeOfResidency|string|false|none|none|
|Suffix|string|false|none|none|
|SupervisorFlag|boolean|false|none|none|
|VaEmployeeTimeStamp|string|false|none|none|
|VeteranCity|string|false|none|none|
|VeteranClaimNumber|string|false|none|none|
|VeteranCountry|string|false|none|none|
|VeteranDateOfDeath|string|false|none|none|
|VeteranDOB|string|false|none|none|
|VeteranDodIdEdipiNumber|string|false|none|none|
|VeteranEmail|string|false|none|none|
|VeteranEmailConfirmation|string|false|none|none|
|VeteranEnrolled|boolean|false|none|none|
|VeteranFirstName|string|false|none|none|
|VeteranICN|string|false|none|none|
|VeteranLastName|string|false|none|none|
|VeteranMiddleName|string|false|none|none|
|VeteranPhone|string|false|none|none|
|VeteranPreferedName|string|false|none|none|
|VeteranPronouns|string|false|none|none|
|VeteranProvince|string|false|none|none|
|VeteranRelationship|string|false|none|none|
|VeteranServiceEndDate|string|false|none|none|
|VeteranServiceNumber|string|false|none|none|
|VeteranServiceStartDate|string|false|none|none|
|VeteranSSN|string|false|none|none|
|VeteransState|string|false|none|none|
|VeteranStreetAddress|string|false|none|none|
|VeteranSuffix|string|false|none|none|
|VeteranSuiteAptOther|string|false|none|none|
|VeteranZipCode|string|false|none|none|
|WhoWasTheirCounselor|string|false|none|none|
|YourLastName|string|false|none|none|
|ZipCode|string|false|none|none|
|InquiryId|string|false|none|none|
|QueueSLA|integer(int32)|false|none|none|
|RequestType|string|false|none|none|
|OrganizationName|string|false|none|none|
|UserId|string(uuid)|false|none|none|
|CorrelationId|string(uuid)|false|none|none|
|MessageId|string|false|none|none|

<h2 id="tocS_SubmitReplyRequest">SubmitReplyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubmitreplyrequest"></a>
<a id="schema_SubmitReplyRequest"></a>
<a id="tocSsubmitreplyrequest"></a>
<a id="tocssubmitreplyrequest"></a>

```json
{
  "Id": "string",
  "Reply": "string",
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|none|
|Reply|string|false|none|none|
|RequestType|string|false|none|none|
|OrganizationName|string|false|none|none|
|UserId|string(uuid)|false|none|none|
|CorrelationId|string(uuid)|false|none|none|
|MessageId|string|false|none|none|

<h2 id="tocS_UploadFileRequest">UploadFileRequest</h2>
<!-- backwards compatibility -->
<a id="schemauploadfilerequest"></a>
<a id="schema_UploadFileRequest"></a>
<a id="tocSuploadfilerequest"></a>
<a id="tocsuploadfilerequest"></a>

```json
{
  "fileContent": "string",
  "fileName": "string",
  "inquiryId": "string",
  "correspondenceId": "string",
  "RequestType": "string",
  "OrganizationName": "string",
  "UserId": "00000000-0000-0000-0000-000000000000",
  "CorrelationId": "00000000-0000-0000-0000-000000000000",
  "MessageId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileContent|string|false|none|none|
|fileName|string|false|none|none|
|inquiryId|string|false|none|none|
|correspondenceId|string|false|none|none|
|RequestType|string|false|none|none|
|OrganizationName|string|false|none|none|
|UserId|string(uuid)|false|none|none|
|CorrelationId|string(uuid)|false|none|none|
|MessageId|string|false|none|none|

