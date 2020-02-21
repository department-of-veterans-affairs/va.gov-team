## PostSubmit686

| EVSS Step                         | BGS Service (If Applicable) | Description |
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
| email686Message                   |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| messageCenter686                  |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| vnp686AppDelete                   |                             |             |
| vnp686Proc                        |                             |             |
| inflightProc686Update             |                             |             |
| vnp686ProcFormCreate              | vnpProcFormCreate           | Used to create a record in the database for the newly entered VONAPP form data  |
| vnp686PtcpntCreate                | vnpPtcpntCreate             | This service is used to create VONAPP participant information |
| vnp686PersonCreate                | vnpPersonCreate             |             |
| vnp686AddresCreate                | vnpPtcpntAddrsCreate        | This service is used to create VONAPP participant address information |
| vnp686PhoneCreate                 | vnpPtcpntPhoneCreate        | This service is used to create VONAPP participant phone information |
| vnp686StudentCreate               |                             |             |
| vnp686SchoolCreate                |                             |             |
| vnp686RelationshipCreate          | vnpPtcpntRlnshpCreate       | This service is used to create VONAPP participant relationship information  |
| vnp686Benefit                     |                             |             |
| vnp686Attachment                  |                             |             |
| vnp686ProcUpdate                  | vnpProcUpdate               | This service is used to update the VONAPP process information |
| vnp686MapperUpdate                |                             |             |
|                                   |                             |             |
| **FLOW**                          |                             |             |
| inflight686Update                 |                             |             |


