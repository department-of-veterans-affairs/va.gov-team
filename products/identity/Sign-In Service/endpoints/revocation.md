# Refresh Token Revocation

The overall purpose of this API endpoint is to receive a refresh token and invalidate it by destroying the associated user session.

To revoke a refresh token, a POST request is sent to `/sign_in/revoke`. 
  - This request must include the attribute `refresh_token`. 
  - It must also include an attribute `anti_csrf_token` if the `sign_in` setting for `enable_anti_csrf` is enabled. If the setting is not enabled the `anti_csrf_token` will not be used.
  
To test this endpoint, send a POST request to `sign_in/revoke` with the fields above copied to the body of the request: { refresh_token: <saved_refresh_token>, anti_csrf_token: <saved_anti_csrf_token> }

`curl -d '{ "refresh_token":<saved_refresh_token>, "anti_csrf_token":<saved_anti_csrf_token> }' -H "Content-Type: application/json" -X POST <vets-api-url>/sign_in/revoke`


At this point, the following steps are performed:

1) An anti_csrf check is performed if the settings require it. This involves matching the `refresh_token.anti_csrf_token` with the provided `anti_csrf_token`.
2) A valid OAuth session is found using the `refresh_token.session_handle`.
3) We ensure there has been no token theft. 
     - This involves matching the `refresh_token` with the session refresh token or parent refersh token.
4) The session is destroyed.

Without a valid session the refresh token will expire after 5 minutes.

If all steps are performed successfully the API will respond with just a 200 status.
