# 5. Use Microsoft Portal WebAPI to integrate with vets-api

Date: 2021-01-08

## Status

Pending

## Context

- It has been decided to move forward with using the Microsoft PowerApps Portal to build the form, secure messaging, as of Jan 7, 2021.
- Previous assumption was that it was necessary to build all the custom APIs through a middleware layer called VEIS (Veteran’s Experience Integration Solution) to integrate the vets-api with PATS-R. It appeared to be discouraging due to the high maintenance cost of additional customization requirements.  
- This WebAPI feature seems to be new, and the documentation (as of July 2020) says it’s in “preview” phase before finally rolled out. 

Assumption: 
- No-code, only config would deliver the API required faster to be integrated with vets-api; 
- Existing code in vets-website and vets-api will be leveraged and not discarded

Requirements: 
- for MVP, vets-api will send one inquiry case at a time with optional file attachments containing PI, PII, PHI; for successful request, vets-api need to receive a reference case ID 


[Documentation](https://docs.microsoft.com/en-us/powerapps/maker/portals/web-api-perform-operations)
[Anonymous Sample Site for Discussion (non-VA)](https://woodstockanalytic.powerappsportals.com/webapi)
[Slack thread for details](https://dsva.slack.com/archives/C016DSVNL07/p1610061887199400)

Sample POST request: 
Method: POST
URL: https://woodstockanalytic.powerappsportals.com/_api/contacts
Headers
  __RequestVerificationToken ATbzBn51YZrE1oygmkzY5KC9iMRX2awM9jf17TIztunaLO7EA2vX4ENcv4I5Jig50oo_BviiCSJxhE3nMyvtFyEBn98o6pmwnz4IdSATBSE1
  Content-Type application/json
  Cookie __RequestVerificationToken=6cFsk8-vUCRDzG3q-Lak30FrRDPUh0lEVfIIt7TqTEgB744gQa1ULsvWs8LPilRizDsDGeoDqM49as0fv6vXqF9_nNXPYsmTwOHvIoPDckI1
Body
  {"firstname":"Team","lastname":"Orchid","emailaddress1":"team.Orchid@contoso.com","telephone1":"555-123-4567"}  
Then browse the [site](https://woodstockanalytic.powerappsportals.com/webapi/)


Questions
- API versioning
- healthcheck endpoint
- automated Contract testing
- Swagger docs
- Security
 
## Decision

The change that we're proposing or have agreed to implement.


## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
