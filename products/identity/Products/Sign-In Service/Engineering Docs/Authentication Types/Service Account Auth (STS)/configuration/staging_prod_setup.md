# Service Account Config Provisioning

## Introduction

This document serves as a guide for Identity engineers implementing a new Service Account Configuration to enable Service Account Auth (STS) for a new client. More details on Service Account Configs themselves can be found [here](./service_account.md).

### Argo Access & `vets-api` Rails console

This guide assumes the user has access to the [vets-api staging & production Argo applications](https://argocd.vfs.va.gov/applications?search=vets-api); most instructions are to be carried out within a Rails console of the `vets-api` instance.

In the "App Details" view of the selected environment there will be one or more `vets-api-web-xxx` "pods", click on any of them to access that pod, then select the "Terminal" tab below the pod name. From the terminal you can enter `bundle exec rails c` to access that environment's Rails instance and perform the necessary commands.

Leaving the terminal window open for an extended period will eventually cause it to lose its connection and force you to close and re-open a pod and terminal session - it is best to prepare the config sequence in a separate editor so that you can quickly input the commands in a fresh pod terminal.

## Creating a Public Certificate

The created Service Account Config will need to include a public certificate in order to validate the service account assertion sent by the STS client. These certificates are generated from private keys, and the key-certificate pairs are [stored in AWS EKS](https://us-gov-west-1.console.amazonaws-us-gov.com/systems-manager/parameters?region=us-gov-west-1&tab=Table#list_parameter_filters=Name:Contains:sts-client).

For staging and production you will need to use Venafi to create and download the private key and linked public certificate for your STS config. Instructions on how to do this [can be found here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Documentation/Security/Venafi%20Create%20and%20download%20TLS%20certificates.pdf).

## Configuration Attributes

With the certificate signed and created you can now create and save a new `ServiceAccountConfig` object. Copy the configuration creation below and replace the attributes with those from the configuration instructions.

```ruby
service_account_config = SignIn::ServiceAccountConfig.new({
  service_account_id: SecureRandom.hex, # if the STS config already has a specified service_account_id use it instead
  description: 'A Service Account Client', # the name or a description of the STS client
  scopes: ['https://client.gov/route1', 'https://client.gov/route2'], # the URIs this STS config grants access to
  access_token_audience: 'STS Client', # validated against "iss" field of STS assertion
  access_token_duration: 5.minutes, # duration must be 5 minutes
  certificates: [cert], # the signed certificate created above
  access_token_user_attributes: ['icn'] # user attributes that are passed in the STS assertion and included in the returned token
})
service_account_config.save!
# => true
```

## Testing an STS Config

Once your STS configuration has been created, you will need to test it by requesting an STS token. This can be done in a variety of ways:

### Rails STS Assertion

You can use the same Rails console you used to create the configuration to create and send your STS assertion. Follow the [Service Account Token Request](../auth_flows/service_account.md#service-account-token-request) instructions to create your signed STS assertion.

  ```ruby
  private_key = OpenSSL::PKey::RSA.new(File.read('private_key.pem'))
  current_time = Time.now.to_i
  token = {
    'iss' => 'STS Client', # you can also pass in your service_account_id here
    'sub' => 'vets.gov.user+0@gmail.com',
    'aud' => 'https://api.va.gov/v0/sign_in/token',
    'iat' => current_time,
    'exp' => current_time + 300,
    'scopes' => ['https://client.gov/route2'],
    'service_account_id' => '0123456789', # optional if #iss is your service_account_id
    'jti' => '2ed8a21d207adf50eb935e32d25a41ff',
    'user_attributes' => { 'icn' => '0123456789' }
  }
  assertion = JWT.encode(token, private_key, 'RS256')
  => "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHrw..."
  ```

* Submit this assertion via Rails:

  ```ruby
    token_query_params = {
      'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      'assertion' => assertion
    }
    token_uri = URI.parse('https://api.va.gov/v0/sign_in/token')
    token_uri.query = token_query_params.to_query
    
    http = Net::HTTP.new(token_uri.host, token_uri.port)
    token_request = Net::HTTP::Post.new(token_uri.request_uri)
    token = JSON.parse(http.request(token_request).body)['data']['access_token']
    => "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ2YS5nb3..."
  ```

* Or use cURL:

  ```bash
  curl --location --request POST 'https://api.va.gov/v0/sign_in/token?grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=<assertion>'

  => {"data":{"access_token":"eyJhbGciOiJSUzI1NiJ9.eyJpc3M..."}}
  ```

### STS Postman Collection

Alternatively you can pull the string of the secret key and import it into the [SiS STS postman collection](../postman/postman.md) to test the integration with.
