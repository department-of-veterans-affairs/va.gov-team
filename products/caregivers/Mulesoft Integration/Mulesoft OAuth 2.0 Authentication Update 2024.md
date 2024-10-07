# Mulesoft API Authentication Update

## Previous Authentication Method

Initially, `vets-api` authenticated with Mulesoft by passing `client_id` and `client_secret` directly in the request headers for each API call.

## Updated Authentication Flow

`vets-api` now authenticates using the OAuth 2.0 flow. Instead of sending `client_id` and `client_secret` with every request, `vets-api` first makes a request to Okta with these credentials in the headers. Okta then returns a bearer token, which is used to authenticate subsequent 10-10CG form requests to the Mulesoft API.

## Reason for the Update

This transition was made at the request of the Mulesoft team to enhance security and comply with modern authentication standards. OAuth 2.0 offers a more secure process by reducing the exposure of sensitive credentials and replacing them with a time-limited token for API requests.

The change was implemented in [PR #17712](https://github.com/department-of-veterans-affairs/vets-api/pull/17712).
