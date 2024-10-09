## Identity Dashboard

* Auth types: `PKCE / cookie`, `Service Account`
* Staging `service_account_id`: `01b8ebaac5215f84640ade756b645f28`

The [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard?tab=readme-ov-file#va-identity-dashboard) is an administrative tool to manage parts of the Identity team's portfolio on VA.gov. It uses cookie PKCE to authenticate end users for its own routes, as well as a Service Account integration to make privileged requests to VA.gov's `vets-api` backend to perform actions, such as requesting sensitive log data or restricting a VA.gov user account.