# Testing EVSS endpoints in Citrix

Important note: the payload request and headers are in the sensitive repo [here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/postman_request.md)

## Testing /submit from EVSS PINT
1) get on CAG desktop

2) Open Postman

3) copy headers

4) update content-type to application/json

5) format post request
6) Endpoint will be something like https://blue.staging.lighthouse.va.gov/wss-form526-services-web/rest/form526/v2/submit

https://int.ebenefits.va.gov/wss-form526-services-web-v2/rest/form526/v2/submit

https://pint.ebenefits.va.gov/wss-form526-services-web-v2/rest/form526/v2/submit

## Testing /getPDF from EVSS PINT

1) get on CAG desktop

2) Open Postman

3) copy headers

4) update content-type to application/json

5) format post request with same payload as /submit

6) endpoint should be something like `https://csraciapp6.evss.srarad.com/wss-form526-services-web-v2/rest/form526/v2/getPDF`


### Notes:

- When copying request, need to update the application expiration date to an additional year in the future

- need to update active duty begin date

- need to be on VA network (within CAG)

- need to ping Bala once we get 9 requests in per user to reset their pending claims

- need to ask Bonnie for other test users to use against the EVSS int environment
