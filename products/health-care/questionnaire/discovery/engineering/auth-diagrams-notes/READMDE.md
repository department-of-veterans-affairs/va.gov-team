# Auth Diagram [WIP]

Basic Auth Diagrams to aid in conversations around these idea



## ID.me 
[ID.me](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/ID.me.md)is one of the our authentication providers. 

ID.me uses a basic SAML exchange to provide authorization for a user. A user can sign in with a variety of credentials, including [DS Logon](), [My Health-eVet](), or [ID.me](). Currently the VA is trying to get to reduce those 3 providers to only use one, ID.me

![diagram of SAML](id.png)


Much of the authication and authorization happen over on

## My Healthy-eVet

*[Link to team docs](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/External%20Service%20Integrations/My%20Healthe%20Vet.md)*

We are not directly using My Healthy-eVet for authentications. All operation to interact with my healthy vet happen in one of two ways, either through ID.me or through REST endpoints. 

Interactions with ID.me happening according to the [documentation here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/login/reference-documents/login/fe-login-and-logout.md).


## Lighthouse - Non health API

![Diagram for non-health data](Lighthouse.NonHealthApi.png)

For non health data, we use an API that is was given to the API team to use with each request. This key was generated 

## Lighthouse - Health API 

![WIP drigram from light house team ](lighthouse.health.api.v0.png)

As of Sept 3, 2020, The integration is not finalized. The diagram is a screen grab from their latest mural.