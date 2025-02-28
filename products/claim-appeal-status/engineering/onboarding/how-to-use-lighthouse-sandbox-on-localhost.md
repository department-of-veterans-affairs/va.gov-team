# How to set up authentication for Lighthouse Sandbox on localhost
Doing this allows you to log into your localhost and view claims from Sandbox
1. Go to `vets-api`
2. Create a folder called `lighthouse` in `config/certs` (EX: `config/certs/lighthouse`)
3. Create a folder called `benefit-claims` in `config/certs/lighthouse` (EX: `config/certs/lighthouse/benefit-claims`)
4. This folder will be the name of the lighthouse api you are referencing
5. Go to a terminal and enter the following commands
  ```
  openssl genrsa -out key.pem 2048
  openssl rsa -in key.pem -outform PEM -pubout -out public.pem
  step crypto jwk create jwk.pub.json jwk.json --from-pem key.pem --alg RS256

  // NOTE: may need to run brew install step if step doesn’t exist
  ```
6. Go to [this](https://developer.va.gov/explore/api/benefits-claims/sandbox-access) link  and fill out the info
    1. Email - use your adhoc email
    2. Organization - use VA.gov
    3. Description - No need to fill out description
    4. Auth type - Client Credentials Grant
    5. Go to `vets-api` file called `config/certs/lighthouse/benefits-claims/jwk.pub.json` and copy the json blob
    6. Paste the json in the field OAuth public key
    7. Agree to terms and submit
    8. Copy Your VA API OAuth Client ID
7. Go to `vets-api` file `config/settings.local.yml`
8. Under `lighthouse/benefit-claims` add the following:
   ```
   host: https://staging-api.va.gov
   access_token:
     client_id: <YOUR_VA_API_OAUTH_CLIENT_ID>
     rsa_key: config/certs/lighthouse/benefits-claims/key.pem
   ```
9. Go to `lib/lighthouse/benefits_claims/service.rb` and update the initialize method to look like this...
  ```
  def initialize(icn)
   # @icn = icn
   @icn = "1012830774V793840" # icn for user 23
   raise ArgumentError, 'no ICN passed in for LH API request.' if icn.blank?
  
  
   super()
  end
  ```
10. Restart `vets-api`
11. Run `vets-website`
12. Open new localhost and go to `http://localhost:3001/track-claims/your-claims/600471552/status` to see a user with a 5103 Notice
