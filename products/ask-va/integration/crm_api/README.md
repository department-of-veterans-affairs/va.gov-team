# Ask VA CRM API endpoints
This doc explains our API endpoints with the Ask VA CRM.   

|Action/Endpoint|Description|Page on VA.gov|
|---|---|---|
|`index`|View previous inquiries|Authenticated<br>/contact-us/ask-va/introduction/|
|`show`|View inquiry details page|Authenticated<br>/contact-us/ask-va/user/dashboard/[inquiry number]/|
|`create`|Submits inquiry, authenticated flow|Authenticated<br>/contact-us/ask-va/review-then-submit/|
|`unauth_create`|Submits inquiry, unauthenticated flow|Unauthenticated (A general question)<br>/contact-us/ask-va/review-then-submit/|
|`status`|Searches "Check status of your question"|Unauthenticated<br>/contact-us/ask-va/introduction/|
|`create_reply`|Sends reply to CRM|Authenticated<br>/contact-us/ask-va/user/dashboard/[inquiry number]/|

