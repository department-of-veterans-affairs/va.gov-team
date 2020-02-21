#PostSubmit686

| Step                              |             |
| --------------------------------- | ----------- |
| readStep686                       |             |
| documentSyncInflight              |             |
| vnp686DocumentMigrate             |             |
| inflightProc686UpdateAfterMigrate |             |
|                                   |             |
| SPLIT                             |             |
|                                   |             |
| FLOW                              |             |
| pdf686Gen                         |             |
| pdf674Gen                         |             |
| pdf686Stamp                       |             |
| documentQueue                     |             |
|                                   |             |
| DECISION                          |             |
| document686SyncDecision           |             |
| save686DocumentsAll               |             |
| noOp                              |             |
|                                   |             |
| FLOW                              |             |
| email686Message                   |             |
|                                   |             |
| FLOW                              |             |
| messageCenter686                  |             |
|                                   |             |
| FLOW                              |             |
| vnp686AppDelete                   |             |
| vnp686Proc                        |             |
| inflightProc686Update             |             |
| vnp686ProcFormCreate              |             |
| vnp686PtcpntCreate                |             |
| vnp686PersonCreate                |             |
| vnp686AddresCreate                |             |
| vnp686PhoneCreate                 |             |
| vnp686StudentCreate               |             |
| vnp686SchoolCreate |  |
| vnp686RelationshipCreate |  |
| vnp686Benefit | |
| vnp686Attachment |  |
| vnp686ProcUpdate |  |
| vnp686MapperUpdate  | |
|                                   |             |
| FLOW                              |             |
| inflight686Update                 |             |


