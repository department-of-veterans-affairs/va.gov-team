# JSON Web Token (JWT) for Pega Status Update Endpoint

This document illustrates the process for authenticating to the IVC CHAMPVA endpoint that Pega uses to perform status updates on submissions stored in our database.

Run this in rails console to get the JWT then put that into Postman with the POST calls.

**For staging:**
```ruby
# From the root of vets-api repository, start a rails console

current_time = Time.now.to_i
jti = SecureRandom.hex
token = {
  'iss' => 'docmp-champva-forms-aws-lambda',
  'sub' => 'AWS Lambda',
  'aud' => 'https://staging-api.va.gov/v0/sign_in/token',
  'iat' => current_time,
  'exp' => current_time + 300,
  'scopes' => ['https://staging-api.va.gov/ivc_champva/v1/forms/status_updates'],
  # NOTE: ABC should be the service account ID for the Sign in Service Platform created for Pega to use
  'service_account_id' => 'ABC', # Platform should be able to provide the right value for this
  'jti' => jti
}

private_key = OpenSSL::PKey::RSA.new(File.read('spec/fixtures/sign_in/sts_client_staging.pem'))
jwt = JWT.encode(token, private_key, 'RS256')
```

**For localhost:**

```ruby
# From the root of vets-api repository, start a rails console

current_time = Time.now.to_i
never_expire_timestamp = current_time + (100 * 365 * 24 * 60 * 60)
token = {
  'iss' => 'docmp-champva-forms-aws-lambda',
  'sub' => 'AWS Lambda',
  'aud' => 'http://localhost:3000/v0/sign_in/token',
  'iat' => current_time,
  'exp' => never_expire_timestamp,
  'scopes' => ['http://localhost:3000/ivc_champva/v1/forms/status_updates'],
  # NOTE: ABC should be the service account ID for the Sign in Service Platform created for Pega to use
  'service_account_id' => 'ABC', # Platform should be able to provide the right value for this
  'jti' => '2ed8a21d207adf50eb935e32d25a41ff'
}

private_key = OpenSSL::PKey::RSA.new(File.read('spec/fixtures/sign_in/sts_client.pem'))
jwt = JWT.encode(token, private_key, 'RS256')
```

## See screenshots below for illustration of the Postman process:

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/jwt_generation_1.png)

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/jwt_generation_2.png)

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/images/jwt_generation_3.png)

## Appendix

[Potentially useful thread on testing non-idempotent endpoints (POST, PATCH) in hosted vets-api, where you'd usually be stymied by the invalid authenticity token CSRF protection error](https://adhoc.slack.com/archives/C5SR3DCDR/p1737136253709329?thread_ts=1736786231.310409&cid=C5SR3DCDR)

From the above link:

> ... you can test your non-idempotent endpoints (POST, PATCH) in hosted vets-api, where you'd usually be stymied by the invalid authenticity token CSRF protection error:
> 1. Follow the steps to authenticate above
> 2. Make a request to https://staging-api.va.gov/v0/user?user=<some-user-uuid>
> 3. From the response headers, copy the value of the X-Csrf-Token
> 4. Add a header to your request called X-Csrf-Token with the value set to the value you copied earlier
> 5. Make the request
