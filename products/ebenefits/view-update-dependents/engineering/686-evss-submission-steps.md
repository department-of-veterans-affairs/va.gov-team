## PostSubmit686

| EVSS Step                         | BGS Service (If Applicable) | Description/Notes |
| --------------------------------- | --------------------------- |-------------|
| readStep686                       |                             |             |
| documentSyncInflight              |                             |             |
| vnp686DocumentMigrate             |                             |             |
| inflightProc686UpdateAfterMigrate |                             |             |
|                                   |                             |             |
| **SPLIT**                         |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| pdf686Gen                         |                             |             |
| pdf674Gen                         |                             |             |
| pdf686Stamp                       |                             |             |
| documentQueue                     |                             |             |
|                                   |                             |             |
| **DECISION**                      |                             |             |
| document686SyncDecision           |                             |             |
| save686DocumentsAll               |                             |             |
| noOp                              |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| email686Message                   |                             | Note: VA.gov does not currently have send email capability |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| messageCenter686                  |                             | Puts a notification in the eBenefits notification center - this will be skipped for now as VA.gov does not currently have notifications |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| vnp686AppDelete                   |                             |             |
| vnp686Proc                        | vnpProcCreate               | This service is used to create VONAPP process information|
| inflightProc686Update             |                             |             |
| vnp686ProcFormCreate              | vnpProcFormCreate           | Used to create a record in the database for the newly entered VONAPP form data  |
| vnp686PtcpntCreate                | vnpPtcpntCreate             | This service is used to create VONAPP participant information |
| vnp686PersonCreate                | vnpPersonCreate             |             |
| vnp686AddresCreate                | vnpPtcpntAddrsCreate        | This service is used to create VONAPP participant address information |
| vnp686PhoneCreate                 | vnpPtcpntPhoneCreate        | This service is used to create VONAPP participant phone information |
| vnp686StudentCreate               | vnpChildStudentCreate       |             |
| vnp686SchoolCreate                | vnpChildSchoolCreate        |             |
| vnp686RelationshipCreate          | vnpPtcpntRlnshpCreate       | This service is used to create VONAPP participant relationship information  |
| vnp686Benefit                     | vnpBnftClaimCreate          | This service is used to create VONAPP benefit claims information |
|                                   | insertBenefitClaim          | Performs a C&P Benefit Claim Establishment |
|                                   | vnpBnftClaimUpdate          | This service is used to update VONAPP benefit claims information |
| vnp686Attachment                  |                             |             |
| vnp686ProcUpdate                  | vnpProcUpdate               | This service is used to update the VONAPP process information |
| vnp686MapperUpdate                |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| inflight686Update                 |                             |             |


