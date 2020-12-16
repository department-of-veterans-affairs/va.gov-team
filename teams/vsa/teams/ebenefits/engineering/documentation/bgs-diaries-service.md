
# DiariesWebService

The Diaries Web Service is one of the BGS Awards Web Services.  This service is used to find the Diaries information. 

Methods
- readHistoricalAndPendingDiaries: read historical and pending diaries information
- readDiaries: read diaries information
- updateDiaries: update diaries information

*\* **Note**: The DiariesWebService is currently not exposed as an external service. This needs to be exposed in order to be utilized by VA.gov/vets-api.*

<br>

## Prerequisites

The following information is required in order to read and update the diary entries:

 | AwardKeyInput | Description            |
 | :------------ | :--------------------- |
 | awardType     | Type of award          |
 | beneficiaryID | Beneficiary Identifier |
 | veteranID     | Veteran Identifier     |

<details>
<summary>Award Types</summary>
<br>
Check with Steve/Jason...can the list of award types be posted here?  
</details>

### Considerations
- Need to determine which Award Types need to be verified
  - CPDC, CDPS, CPDP(?), CPL(?)
  - How is this determined?  Who can provide a definitive answer?
- The beneficiary IDs can be obtained from the View Dependents service currently being used by VA.gov
- **How to obtain the `awardType` is currently not known**
  - There is a "relationship" that is returned in View Dependents
  - Ex. Would "Spouse" relationship be award type "CPDS"?
- Is there a service that returns both Award Type and Beneficiary ID?

<br>

## readDiaries
For each dependent returned in the list of View Dependents:
1. Send a request to `readDiaries` with required fields `awardType`, `beneficiaryID`, `veteranID`.
2. Filter list of diary entries on records where diaryReasonType = '24'
3. For each of those records, check `diaryDueDate`
   - What happens if more than one record with `diaryReasonType` 24?
   - Is this possible?
   - Would the record with the latest date be used/unconcerned about records with earlier dates?  
4. Use some business logic to determine if dependency verification/update is required based on the `diaryDueDate` and the current date
5. If update/verification is required, create a diary object with the response info

<details>
<summary>readDiariesResponse</summary>
<br>

The DiaryResponse includes information about error level, dependency decisions, and diaries.  The diaries object contains a list of diary entries.  

ex. Diary:
```
    <Diary>
        <awardDiaryID>60147</awardDiaryID>
        <awardEventID>523390</awardEventID>
        <awardType>CPDS</awardType>
        <beneficaryID>123456</beneficaryID>
        <diaryDueDate>2016-02-01T00:00:00-06:00</diaryDueDate>
        <diaryLcStatusType>PEND</diaryLcStatusType>
        <diaryLcStatusTypeDescription>Pending</diaryLcStatusTypeDescription>
        <diaryReasonType>24</diaryReasonType>
        <diaryReasonTypeDescription>Issue Dependency Verification Form</diaryReasonTypeDescription>
        <firstNm>jane</firstNm>
        <lastName>smith</lastName>
        <modifiedAction>U</modifiedAction>
        <modifiedBy>s125rpa</modifiedBy>
        <modifiedDate>2016-02-01T07:35:35-06:00</modifiedDate>
        <modifiedLocation>283</modifiedLocation>
        <modifiedProcess>Diary 24 Testing</modifiedProcess>
        <payeeType>10</payeeType>
        <ptcpntDiaryID>819123</ptcpntDiaryID>
        <statusDate>2010-05-10T08:21:48-05:00</statusDate>
        <veteranID>819444</veteranID>
    </Diary>
```
</details>

<br>

## updateDiaries

The following is the list of fields that need to be sent as the `DiaryInput` when updating a diary entry:
<details>
<summary>updateDiaries</summary>
<br>

    AwardKeyInput
        awardType
        beneficiaryID
        veteranID
    <!--Zero or more repetitions:-->
    DiaryInput
        awardDiaryID
        awardEventID
        awardType
        beneficaryID
        diaryDueDate
        diaryLcStatusType
        diaryLcStatusTypeDescription
        * diaryObsoleteIndicator
        diaryReasonType
        diaryReasonTypeDescription
        * evrStatusType
        * fileNumber
        firstNm
        lastName
        * middleName
        modifiedAction
        modifiedBy
        modifiedDate
        modifiedLocation
        modifiedProcess
        payeeType
        ptcpntDiaryID
        * remarksText
        * salutation
        statusDate
        * suffix
        veteranID

</details>

1. For each dependent, get the diary object that was created from the `readDiaries` response
2. Update modifiedAction, modifiedBy, modifiedDate, modifiedLocation, modifiedProcess, diaryDueDate?, any other fields
   - How to determine which fields should be updated?  Who can provide a definitive answer?
3. Send entire diary record that was created
   - What about fields not in the diary response that are part of the update diary input (marked with an asterisk in the list above)?  
