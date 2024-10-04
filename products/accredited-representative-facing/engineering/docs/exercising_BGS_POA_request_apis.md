# Exercising BGS's POA request APIs
_In order to witness API performance characteristics and examine domain data._

## Layers
_One can exercise these APIs by working at one of the following layers._

### Lighthouse HTTP API
⚠️ _Might be removed after the time of writing._ ⚠️

_Wraps BGS HTTP API._

Follow [instructions for obtaining client credentials grant (CCG)](https://developer.va.gov/explore/api/benefits-claims/client-credentials) for authenticating with the Benefits Claims API.

### `vets-api` Rails console
⚠️ _Might be removed after the time of writing._ ⚠️

_Implements Lighthouse HTTP API which wraps BGS HTTP API._

#### From ArgoCD
1. Requires [SOCKS proxy configuration](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy)
1. Requires [ArgoCD terminal access](https://depo-platform-documentation.scrollhelp.site/developer-docs/vets-api-on-eks#VetsAPIonEKS-Access)

#### From `localhost`
1. Requires [SOCKS proxy configuration](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy)
1. Requires [AWS console access](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-AWSconsoleaccess)
1. To identify the [private IP DNS name of the vagov forward proxy](https://us-gov-west-1.console.amazonaws-us-gov.com/ec2/home?region=us-gov-west-1#Instances:tag:Purpose=fwdproxy;tag:environment=staging;v=3;$case=tags:true%5C,client:false;$regex=tags:false%5C,client:false)
1. And [set up ssh local port forwarding](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/README.md#bgs)

### BGS HTTP API
_Wrapped by Lighthouse HTTP API._

1. Requires [SOCKS proxy configuration](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy)
1. Requires [AWS console access](https://depo-platform-documentation.scrollhelp.site/getting-started/request-access-to-tools#Requestaccesstotools-AWSconsoleaccess)
1. To identify the [private IP DNS name of the vagov forward proxy](https://us-gov-west-1.console.amazonaws-us-gov.com/ec2/home?region=us-gov-west-1#Instances:tag:Purpose=fwdproxy;tag:environment=staging;v=3;$case=tags:true%5C,client:false;$regex=tags:false%5C,client:false)

## APIs

### Faceted, paginated, and sorted search of Power of Attorney requests
- [VA developer documentation](https://staging-developer.va.gov/explore/api/benefits-claims/docs?version=current) for the Lighthouse HTTP API
  - Only staging docs are available at the time of writing
  - Scroll to `GET /power-of-attorney-requests`
- [Lighthouse HTTP API's Rails entry point](https://github.com/department-of-veterans-affairs/vets-api/blob/0bb7f879b3736479509a066892a701b11b3cdc87/modules/claims_api/app/controllers/claims_api/v2/power_of_attorney_requests_controller.rb) and [associated specs](https://github.com/department-of-veterans-affairs/vets-api/tree/0bb7f879b3736479509a066892a701b11b3cdc87/spec/support/vcr_cassettes/claims_api/requests/v2/power_of_attorney_requests/index)
  - `PowerOfAttorneyRequestService::Search.perform(query)`
- [Cassettes](https://github.com/department-of-veterans-affairs/vets-api/tree/0bb7f879b3736479509a066892a701b11b3cdc87/spec/support/vcr_cassettes/claims_api/requests/v2/power_of_attorney_requests/index) that demonstrate the BGS HTTP API that is wrapped by the Lighthouse HTTP API

### Create the decision for Power of Attorney requests
- [VA developer documentation](https://staging-developer.va.gov/explore/api/benefits-claims/docs?version=current) for the Lighthouse HTTP API
  - Only staging docs are available at the time of writing
  - Scroll to `POST /power-of-attorney-requests/{id}/decision`
- [Lighthouse HTTP API's Rails entry point](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/claims_api/app/controllers/claims_api/v2/power_of_attorney_requests/decisions_controller.rb) and [associated specs](https://github.com/department-of-veterans-affairs/vets-api/blob/0bb7f879b3736479509a066892a701b11b3cdc87/modules/claims_api/spec/requests/v2/power_of_attorney_requests/decisions/create)
  - `PowerOfAttorneyRequestService::Decide.perform(id, attributes)`
- [Cassettes](https://github.com/department-of-veterans-affairs/vets-api/tree/0bb7f879b3736479509a066892a701b11b3cdc87/spec/support/vcr_cassettes/claims_api/requests/v2/power_of_attorney_requests/decisions/create) that demonstrate the BGS HTTP API that is wrapped by the Lighthouse HTTP API
