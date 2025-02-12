# Sign in Service Clients

## Vets Website

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/Vets%20Website/README.md)
* Auth types: `PKCE / cookie`

 [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) is the frontend application for web users of VA.gov. It makes use of the universal sign-in page to request a SiS authentication & session.

## VA Mobile App

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/VA%20Mobile%20App/README.md)
* Auth types: `PKCE / API`

The [VA mobile app](https://github.com/department-of-veterans-affairs/va-mobile-app) handles mobile users of VA.gov. It uses an in-app browser to navigate to the universal sign-in page to request a SiS authentication & session.

## SiS Example App

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/SiS%20Example%20App/README.md)
* Auth types: `PKCE / cookie & API`

The [SiS Example App](https://github.com/department-of-veterans-affairs/sign-in-service-client-sinatra) is a lightweight client written in [Sinatra](https://github.com/sinatra/sinatra?tab=readme-ov-file#sinatra) to model a Sign in Service integration. It can be configured to use either cookie or API PKCE authentication.

## Identity Dashboard

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/Identity%20Dashboard/README.md)
* Auth types: `PKCE / cookie`, `Service Account`
* Staging `service_account_id`: `01b8ebaac5215f84640ade756b645f28`

The [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard?tab=readme-ov-file#va-identity-dashboard) is an administrative tool to manage parts of the Identity team's portfolio on VA.gov. It uses cookie PKCE to authenticate end users for its own routes, as well as a Service Account integration to make privileged requests to VA.gov's `vets-api` backend to perform actions, such as requesting sensitive log data or restricting a VA.gov user account.

## Chatbot

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/Chatbot/README.md)
* Auth types: `Service Account`
* Staging `service_account_id`: `fa7f099f1ea99576fe251c550bca7b76`

The Chatbot application makes use of a Service Account access_token containing the user's ICN to protect the API route requesting a MAP Security token.

## BTSSS Access Token

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/BTSSS%20Access%20Token/README.md)
* Auth types: `Service Account`
* Staging `service_account_id`: `a162aaef5fb869aa4ea5a227728a753f`

## MAP / Sign Up Service

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/Map/Sign%20Up%20Service/README.md)
* Auth types: `Service Account`

The `vets-api` MAP / Sign up Service integration makes use of a Service Account access_token containing the user's ICN to protect the API route requesting a MAP Security token.

## VES Dev

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/VES%20Dev/README.md)

## ARP

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/ARP/README.md)

## VA Mobile Test

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/VA%20Mobile%20App/VA%20Mobile%20Test/README.md)

## DOCMP/PEGA Access Token

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/DOCMP%20PEGA%20Access%20Token/README.md)

## MHV Account Creation Staging

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/MHV%20Account%20Creation%20-%20Staging/README.md)

## Sample STS Service Account

Read more about this client [here](../Sign-In%20Service/Identity%20Team%20Integrations/Sample%20STS%20Service%20Account/README.md)