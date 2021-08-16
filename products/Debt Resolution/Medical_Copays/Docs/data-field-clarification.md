# Data field clarification

This document contains the data fields we've asked about as part of the medical copay tool's MVP. The goal of this document is to house our findings in one location. 

## Statement date fields

`"pS_STATEMENT_DATE": "string",` 

The PS-Statement-date is the statement date to the corresponding station. 


`"pS_STATEMENT_DATE_Output": "string",` 

Should be the same as above


`"pS_PROCESS_DATE": "string",` 

This the date the Vista file was created.  It’s the cut off date used on the statement.


`"pS_PROCESS_DATE_Output": "string",`  

Should be the same as above

Under details there's more date fields:

`pD_DATE_POSTED": "string",` 

This is the date the corresponding transaction was posted in Vista


`"pD_DATE_POSTED_Output": "string"`  

Should be the same as above
