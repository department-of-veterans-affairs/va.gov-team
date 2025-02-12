## Identity Dashboard

* Auth types: `PKCE / cookie`, `Service Account (sts)`
* Staging `service_account_id`: `01b8ebaac5215f84640ade756b645f28`
* va_identity_dashboard_rails-dev - staging `service_account_id`: `6bd76527e64d018ec147b1c1b99d7d64`

Client Configs
* Identity Dashboard - Development `client_config`: `56d7f9f5a6794b0b2fe04a4e6b21359e`
* Identity Dashboard - Dev `client_config`: `8d4fd490fa37a3cbc55b4ec5e1a59722`
* Identity Dashboard - Staging `client_config`: `b33518c4c559bd43eb4c995a6db600eb`
* Identity Dashboard - Sandbox `client_config`: `d162be9e763f307179b44e7ac1bdf77b`
* Identity Dashboard - Production `client_config`: `e0ed62fdacec33beaf764a9de17cb512`
* identity_dashboard_rails-dev - staging `client_config`: `01f73dd9780911732422525bccf5b26f`

The [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard?tab=readme-ov-file#va-identity-dashboard) is an administrative tool to manage parts of the Identity team's portfolio on VA.gov. It uses cookie PKCE to authenticate end users for its own routes, as well as a Service Account integration to make privileged requests to VA.gov's `vets-api` backend to perform actions, such as requesting sensitive log data or restricting a VA.gov user account.