# Ask VA Service gap support 
This document outlines support needs in the event of a service gap for the Ask VA product on VA.gov. 

5/23: There will likely be a service gap of 3 to 4 weeks after the VA.gov contract ends on Thursday May 29. 

**On this page:**
- Monitoring
- Incident response

## Monitoring
We primarily use Datadog to monitor Ask VA. These Ask VA CRM endpoints are especially important:

|Payload action name|Description|URL path|
|:--|:--|:--|
|show|View inquiry details page|/contact-us/ask-va/user/dashboard/[inquiry number]/|
|create|Submits inquiry, authenticated flow|Authenticated:/contact-us/ask-va/review-then-submit|
|unauth_create|Submits inquiry, unauthenticated flow|Unauthenticated:/contact-us/ask-va/review-then-submit|
|create_reply|Sends reply to CRM|/contact-us/ask-va/user/dashboard/[inquiry number]/|

Here are some helpful links. 
|Link|Description|
|:--|:--|
|x|x|

