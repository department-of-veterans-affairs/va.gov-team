# Lighthouse API Notes

This is a living document to capture findings around LH API access. If you see something missing or incorrect, **please add or correct it**. Don't ask first- the answer is yes. Do it.

## Links

Platform docs (*dev*): https://dev-developer.va.gov/explore/verification/docs/veteran_verification?version=current

Platform docs (*staging*):  https://staging-developer.va.gov/explore/verification/docs/veteran_verification?version=current

Platform docs (*prod?*): https://developer.va.gov/explore/verification/docs/veteran_verification?version=current|

Auth: https://staging-developer.va.gov/explore/authorization/docs/client-credentials?api=claims

## Veteran Verification

### Public/Private key generation example

Below is an example of how to generate a public/private key for VV

    openssl genpkey -algorithm RSA > lighthouse_vv_private.pem
    openssl pkey -pubout -in lighthouse_vv_private.pem > lighthouse_vv_pub.pem
    pem-jwk lighthouse_vv_pub.pem lighthouse_vv_pub.jw

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


### API testing

```
bundle exec rails c
Flipper.enable('disability_compensation_lighthouse_rated_disabilities_provider') # for testing LH calls. Use Flipper.disable() for EVSS calls
settings = Settings.lighthouse.veteran_verification.form526
service = VeteranVerification::Service.new
response = service.get_rated_disabilities(settings.access_token.client_id, settings.access_token.rsa_key, {auth_params: {launch: Base64.encode64(JSON.generate({ patient: '1012845658V192434' }))}})
```

- 1012845658V192434 - ICN for jessie fisher
- 1012845662V671308 - ICN for mattie mae

(sourced from [here](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/verification_test_accounts.md))

## Intent To File

### Auth token example

Be sure to set up settings.local.yml, and especially `rsa_key`

```
settings = Settings.lighthouse.benefits_claims.form526
client_id = settings.access_token.client_id
aud_claim_url = Settings.lighthouse.benefits_claims.access_token.aud_claim_url
token_url="https://sandbox-api.va.gov/oauth2/claims/system/v1/token"
require "./lib/lighthouse/auth/client_credentials/service"
auth_service = Auth::ClientCredentials::Service.new(token_url, API_SCOPES, client_id, aud_claim_url, settings.access_token.rsa_key)
```

### API testing

service layer (`lighthouse/benefits_claims/service.rb`)

```
require "./lib/lighthouse/benefits_claims/service.rb";
service = BenefitsClaims::Service.new("1012845662V671308") # ICN for mattie mae
response = service.get_intent_to_file('compensation', settings.access_token.client_id, settings.access_token.rsa_key)
```

provider layer

```
require './lib/disability_compensation/providers/intent_to_file/lighthouse_intent_to_file_provider.rb'
settings = Settings.lighthouse.benefits_claims.form526
current_user = OpenStruct.new({icn: '1012861229V078999'})
provider = LighthouseIntentToFileProvider.new(current_user)
response = provider.get_intent_to_file('compensation', settings.access_token.client_id, settings.access_token.rsa_key)
```

factory layer

```
require './lib/disability_compensation/factories/api_provider_factory'
f = ApiProviderFactory.intent_to_file_service_provider(current_user)
Flipper.disable(ApiProviderFactory::FEATURE_TOGGLE_INTENT_TO_FILE)
# or 
Flipper.enable(ApiProviderFactory::FEATURE_TOGGLE_INTENT_TO_FILE)
# side note: how to check a toggle
Flipper.enabled?(ApiProviderFactory::FEATURE_TOGGLE_INTENT_TO_FILE)
f = ApiProviderFactory.intent_to_file_service_provider(current_user, :lighthouse)
f = ApiProviderFactory.intent_to_file_service_provider(current_user, :evss)
```

factory layer (updated 2023-08-25)
- testing call to Benefits Claim service's get_claims via ApiProviderFactory
- using Mattie Mae from [here](https://github.com/department-of-veterans-affairs/vets-api-clients/blob/master/test_accounts/verification_test_accounts.md)
  
```
require 'disability_compensation/factories/api_provider_factory'
settings = Settings.lighthouse.benefits_claims.form526
Flipper.enable('disability_compensation_lighthouse_claims_service_provider')
api_provider = ApiProviderFactory.call(
  type: ApiProviderFactory::FACTORIES[:claims],
  provider: :lighthouse,
  options: { icn:'1012845662V671308' },
  # Flipper id is needed to check if the feature toggle works for this user
  current_user: OpenStruct.new({ flipper_id: nil }),
  feature_toggle: ApiProviderFactory::FEATURE_TOGGLE_CLAIMS_SERVICE
)

all_claims = api_provider.all_claims
all_claims['open_claims']
```
