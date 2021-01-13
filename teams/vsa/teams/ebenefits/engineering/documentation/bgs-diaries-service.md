
# DiariesWebService

The Diaries Web Service is one of the BGS Awards Web Services.  This service is used to find the Diaries information. 

Methods
- `readHistoricalAndPendingDiaries`: read historical and pending diaries information
- `readDiaries`: read diaries information
- `updateDiaries`: update diaries information

<br>

## Estimation for Level of Effort
It will require approximately 10 PRs to implement the read and update diaries functionality in `vets-api`:
   1. readDiaries - BGS gem (this is the external gem used as a library that needs to be updated for each BGS service we want to call)
   2. readDiaries - lib code
   3. readDiaries - service code
   4. updateDiaries - BGS gem (this is the external gem used as a library that needs to be updated for each BGS service we want to call)
   5. updateDiaries - lib code
   6. updateDiaries - service code
   7. updateDiaries - endpoint/controller (this adds the route used by the front end and also includes swagger docs)
   8. PDF generation for [VA Form 21-0538](https://www.va.gov/find-forms/about-form-21-0538/) (Status of Dependents Questionnaire)
   9. PDF upload to VBMS or Central Mail
  10. Possible job (if required?)
  11. Additional endpoint/controller for readDiaries (if required?)
  
**Allowing approximately 3 business days for each PR, the estimated level of effort to develop this feature will take approximately 6-8 sprints.**  

<br>

## Prerequisites

The following information is required in order to read and update the diary entries:

 | AwardKeyInput   | Description            |
 | :-------------- | :--------------------- |
 | `awardType`     | Type of award          |
 | `beneficiaryID` | Beneficiary Identifier |
 | `veteranID`     | Veteran Identifier     |

<details>
<summary>Award Types</summary>
<br>
 
 | Award Type | Description                                |
 | :--------- | :----------------------------------------- |
 | `CPL`        | Compensation/Pension Live                  |
 | `BUR`        | Burial                                     |
 | `MOH`        | Medal of Honor                             |
 | `CA`         | Clothing Allowance                         |
 | `CPDC`       | CPD Child                                  |
 | `CPDS`       | CPD Spouse                                 |
 | `CPDP`       | CPD Parent                                 |
 | `306V`       | 306 Veteran                                |
 | `306S`       | 306 Spouse                                 |
 | `306C`       | 306 Child                                  |
 | `OLV`        | Old Law Veteran                            |
 | `OLS`        | Old Law Spouse                             |
 | `OLC`        | Old Law Child                              |
 | `ACC`        | Accrued                                    |
 | `DCS`        | Death Comp Spouse                          |
 | `DCC`        | Death Comp Child                           |
 | `DCP`        | Death Comp Parent                          |
 | `1312S`      | 1312A Spouse                               |
 | `1312C`      | 1312A Child                                |
 | `1312P`      | 1312A Parent                               |
 | `!EORP`      | Emergency Officer's Retired Pay            |
 | `SB`         | CH 18 Spina Bifida                         |
 | `BD`         | CH 18 Child Birth Defects                  |
 | `REPS`       | Restored Entitlement Program for Survivors |
 
</details>

### Considerations
- Need to determine which Award Types need to be verified
  - `CPDC`, `CPDS`, `CPDP`, `CPL`(?)
  - How is this determined?  Who can provide a definitive answer?
- The beneficiary IDs can be obtained from the View Dependents service currently being used by VA.gov
- How to obtain the `awardType` is currently not known
- Is there a service that returns both Award Type and Beneficiary ID?  

\* ***Update:*** the current assumption is that we are only concerned with `CPL` award types and in that case, the `beneficiaryID` and `veteranID` will be the same.  `CPL` is compensation for a Veteran who is still alive, whereas `CPDC`, `CPDS`, and `CPDP` are for cases where the Veteran is no longer living.  Not to be confused with the `Death Comp` award types, which is assumed to be compensation in the event that a spouse or child or parent passes away.

<br>

## readDiaries
Assuming the user is logged in, obtain the Veteran's participant ID and then:
1. Send a request to `readDiaries` with required fields `awardType`, `beneficiaryID`, `veteranID`
2. Filter list of diary entries on records where `diaryReasonType = 24` and `diaryLcStatusType = PEND`
   - What happens if more than one record with `diaryReasonType = 24`?
   - Is this possible?  
   \* ***Update:*** According to BGS, there should only be one record but in test data we have seen duplicates, so this still needs to be confirmed
   - Would the record with the latest date be used/unconcerned about records with earlier dates?  
3. Check `diaryDueDate`. Use some business logic to determine if dependency verification/update is required based on the `diaryDueDate` and the current date
5. If update/verification is required, create a diary object with the response info

<details>
<summary>Expand for example <b>readDiariesResponse</b></summary>
<br>

The `DiaryResponse` includes information about error level, dependency decisions, and diaries.  The diaries object contains a list of diary entries.  

ex. Diary:
``` diff XML
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
   <summary>Expand for example <b>DiaryInput</b> for <b>updateDiaries</b></summary>
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

1. For the record that contains `diaryReasonType = 24` and `diaryLcStatusType = PEND`, get the diary object that was created from the `readDiaries` response
2. Update `diaryDueDate` to the appropriate next date (1 year interval?)
   - Are there any other fields that need to be updated?
   - What about fields not in the diary response that are part of the update diary input (marked with an asterisk in the list above)?
   - The time period/one year interval could be set as a variable rather than hard-coded in the event that the interval changes
3. Send ALL records back with the updated diary record
