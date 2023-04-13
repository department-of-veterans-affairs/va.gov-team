# Lighthouse API Notes

This is a living document to capture findings around LH API access. If you see something missing or incorrect, **please add or correct it**. Don't ask first- the answer is yes. Do it.

## Veteran Verification
### Links
Platform docs (*dev*): https://dev-developer.va.gov/explore/verification/docs/veteran_verification?version=current
Platform docs (*staging*):  https://staging-developer.va.gov/explore/verification/docs/veteran_verification?version=current
Platform docs (*prod?*): https://developer.va.gov/explore/verification/docs/veteran_verification?version=current|

Auth: https://staging-developer.va.gov/explore/authorization/docs/client-credentials?api=claims
### Auth token example
Below is an example of how to generate an auth token for VV, using the rails console. See the [Auth page](https://staging-developer.va.gov/explore/authorization/docs/client-credentials?api=claims) for more details- and first steps. This example assumes that you've already requested a token, generated public/private keys, received a client ID, etc

Enter the console by running

    $ rails c
Set the **iss** claim w/the client ID 

    iss='0oaled5yi9BxNauOL2p7'
Set the **aud** claim

    aud="https://deptva-eval.okta.com/oauth2/ausi3u00gw66b9Ojk2p7/v1/token"
Import the Auth:ClientCredentials service

    require "./lib/lighthouse/auth/client_credentials/service"
Set the api scopes that the service requires

    API_SCOPES = %w[disability_rating.read enrolled_benefits.read flashes.read launch service_history.read veteran_status.read].freeze
Instantiate the service

    auth_service = Auth::ClientCredentials::Service.new("https://staging-api.va.gov/oauth2/veteran-verification/system/v1/token", API_SCOPES, iss, aud, "/path/to/private/key.pem")
Make the service call to get the token.

    auth_service.get_token
You should now be able to make curl/PostMan/etc calls using this token (until it expires, of course. then you can just call get_token again, if your rails console is still open)

