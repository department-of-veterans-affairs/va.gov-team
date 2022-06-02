# Revoke All Endpoint
The route in the sign-in service, `revoke_all_sessions`, which, given an authenticated access token, revokes all sessions associated with the authenticated `user_uuid`

Here is an example of how the route is called:
`curl -X GET localhost:3000/v0/sign_in/revoke_all_sessions -H 'Authorization: <access_token>'`

## Things to know about this endpoint
- Get tokens from sign in service authentication
- Make a new sign in service authentication with the same test user
- Make a call to `/v0/sign_in/revoke_all` with access token authentication in the header
- Confirm that the refresh token for both the original authentication, and the latest authentication, no longer are valid (attempt calling `/refresh` route and confirm `unauthorized` response)
