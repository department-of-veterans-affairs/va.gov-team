# Sign in Service Clients

## Vets Website

* Auth types: `PKCE / cookie`
 
 [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) is the frontend application for web users of VA.gov. It makes use of the universal sign-in page to request a SiS authentication & session.

## VA Mobile App

* Auth types: `PKCE / API`

The [VA mobile app](https://github.com/department-of-veterans-affairs/va-mobile-app) handles mobile users of VA.gov. It uses an in-app browser to navigate to the universal sign-in page to request a SiS authentication & session.

## SiS Example App

* Auth types: `PKCE / cookie & API`

The [SiS Example App](https://github.com/department-of-veterans-affairs/sign-in-service-client-sinatra) is a lightweight client written in [Sinatra](https://github.com/sinatra/sinatra?tab=readme-ov-file#sinatra) to model a Sign in Service integration. It can be configured to use either cookie or API PKCE authentication.

## Identity Dashboard

* Auth types: `PKCE / cookie`, `Service Account`
* Staging `service_account_id`: `01b8ebaac5215f84640ade756b645f28`

The [VA Identity Dashboard](https://github.com/department-of-veterans-affairs/va-identity-dashboard?tab=readme-ov-file#va-identity-dashboard) is an administrative tool to manage parts of the Identity team's portfolio on VA.gov. It uses cookie PKCE to authenticate end users for its own routes, as well as a Service Account integration to make privileged requests to VA.gov's `vets-api` backend to perform actions, such as requesting sensitive log data or restricting a VA.gov user account.

## Chatbot

* Auth types: `Service Account`
* Staging `service_account_id`: `fa7f099f1ea99576fe251c550bca7b76`

The Chatbot application makes use of a Service Account access_token containing the user's ICN to protect the API route requesting a MAP Security token.

## BTSSS Access Token
* Auth types: `Service Account`
* Staging `service_account_id`: `a162aaef5fb869aa4ea5a227728a753f`

## MAP / Sign Up Service

* Auth types: `Service Account`

The `vets-api` MAP / Sign up Service integration makes use of a Service Account access_token containing the user's ICN to protect the API route requesting a MAP Security token.
